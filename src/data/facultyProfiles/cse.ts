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

export const cseProfiles: Record<string, FacultyProfile> = {
  /*
  // Static faculty profile data preserved in comments (Dynamic profiles fetched from EngageAI database API)
"Mrs. M. Sri Lakshmi Preethi": {
        "name": "Mrs. M. Sri Lakshmi Preethi",
        "designation": "Asst. Professor",
        "email": "srilakshmipreethim@mits.ac.in",
        "officeAddress": "NPN-204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. M. Sri Lakshmi Preethi.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "ML, DL & CS",
                            "Branch": "CSE",
                            "College Name/University": "Presidency University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Software Engineering",
                            "Branch": "CSE",
                            "College Name/University": "Ellenki Engineering College, JNTU Hyderabad",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Information Technology",
                            "Branch": "CSE",
                            "College Name/University": "Chirala Engineering College, JNTU Kakinada",
                            "Year of Passing": "2012"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=60522588600",
                        "Vidwan : https://mits.irins.org/profile/561697",
                        "Google scholar : https://scholar.google.com/citations?user=_yxGVAkAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) :"
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Application ID": "202541098168",
                            "Title of the Patent": "INTELLIGENT IOT-ENABLED ENERGY MANAGEMENT FRAMEWORK FOR SMART CLASSROOMS USING MACHINE LEARNING IN HIGHER EDUCATION",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Application ID": "202441058856 A",
                            "Title of the Patent": "ENHANCED STRESS DETECTION IN SOCIAL NETWORK MESSAGES WITH IOT AND MACHINE LEARNING",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2023",
                            "Application ID": "202341009964",
                            "Title of the Patent": "A NEW METHOD OF UNMANNED AERIAL VEHICLE MONITORING SYSTEM FOR AGRICULTURE TERRESTRIAL FARMING USING MACHINE LEARNING TECHNIQUES",
                            "Status": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "Others",
                            "Academic Year": "2020",
                            "Application ID": "202041030734 A",
                            "Title of the Patent": "AN INTERNET OF THINGS BASED SYSTEM FOR BICYCLE",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "Certified in Executive Certificate Program In Cyber Security By IIT KANPUR"
                }
            ]
    },
    "Dr. M. Sreedevi": {
        "name": "Dr. M. Sreedevi",
        "designation": "Professor &amp; Head",
        "email": "csehod@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. M. Sreedavi.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Network Security",
                            "Branch": "CSE",
                            "College Name/University": "Sri Venkateswara University, Tirupati",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "IT",
                            "Branch": "IT",
                            "College Name/University": "Punjabi University, Patiala",
                            "Year of Passing": "2003"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "ECE",
                            "Branch": "ECE",
                            "College Name/University": "Sri Venkateswara University, Tirupati",
                            "Year of Passing": "1995"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Wireless Body Area Network, Machine Learning, Security"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=59268029100",
                        "Vidwan : https://mits.irins.org/profile/273696",
                        "Google scholar : https://scholar.google.com/citations?user=_XjJIEwAAAAJ&hl=en",
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
                            "Author Position": "3",
                            "Details of Research Publication": "A Support System Development for Healthcare System using FL and FC Techniques Scopus",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "3",
                            "Details of Research Publication": "Multi-objective swarm-based model for deploying virtual machines on cloud physical servers",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "5",
                            "Details of Research Publication": "Cloudburst Prediction in India Using Machine Learning",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "5",
                            "Details of Research Publication": "A review on Machine Learning based IDS approaches in Wireless sensor networks",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "5",
                            "Details of Research Publication": "Self-Organized Genetic Algorithm for Enhanced Data Clustering",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "4",
                            "Details of Research Publication": "Secure keys data distribution based user-storage-transit server authentication process model using mathematical post-quantum cryptography methodology",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2014-15",
                            "Author Position": "2",
                            "Details of Research Publication": "Smart suggest search engine with location sensing recommendation",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                },
                {
                    "title": "Research Projects & Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Funded Project /Event": "AICTE Conference",
                            "Role": "Co-Coordinator",
                            "Title of the Project/Event": "2nd International Conference on Optimization Techniques",
                            "Amount in Rs. /-": "3,00,000",
                            "Funding Agency": "AICTE"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Funded Project /Event": "Article Presentation",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Pen to Podium",
                            "Amount in Rs. /-": "11,000",
                            "Funding Agency": "Academic Decipher, Mumbai"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Funded Project /Event": "JNTUA FDP",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Quantum Neuro Morphic Computing for Sustainable Generative AI",
                            "Amount in Rs. /-": "1,00,000",
                            "Funding Agency": "JNTUA"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Funded Project /Event": "AICTE Prerana",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Workshop",
                            "Amount in Rs. /-": "7,00,000",
                            "Funding Agency": "AICTE"
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
                            "Application ID": "2387/2025-CO/SW",
                            "Title of the Patent": "MITS-FLEX",
                            "Status": "Copy right Registered"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "2386/2025-CO/SW",
                            "Title of the Patent": "MITS-EAMCET",
                            "Status": "Copy right Registered"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "915/2025-CO/SW",
                            "Title of the Patent": "MITS Student Feedback Management System",
                            "Status": "Copy right Registered"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "SW-20259/2025",
                            "Title of the Patent": "MITS-MELE",
                            "Status": "Copy right Registered"
                        }
                    ]
                }
            ]
    },

    "Dr. R. Nidhya": {
        "name": "Dr. R. Nidhya",
        "email": "drnidhyar@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Nidhya.JPG",
        "designation": "Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Information and Communication Engineering",
                            "Branch": "Information and Communication Engineering",
                            "College Name/University": "Anna University, Gundy, Chennai",
                            "Year of Passing": "2017"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Mainframe",
                            "Branch": "Computer Science and Engineering",
                            "College Name/University": "Anna University Regional Centre CBE, Anna University Chennai",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Computer Science and Engineering",
                            "Branch": "Computer Science and Engineering",
                            "College Name/University": "Maharaja Engineering College, Avinashi",
                            "Year of Passing": "2009"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Wireless Body Area Network, Machine Learning, Security"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=55941447100",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/273912",
                        "Google scholar : https://scholar.google.co.in/citations?user=8uytyg4AAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 7"
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
                            "Details of Research Publication": "Modelling a Reliable Multimedia Transmission Approach for Medical Wireless Sensor Networks",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Interference-aware path optimization using PSO-LA for IoT in 5G networks",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Eye Tracking-Based Diagnosis and Early Detection of Autism Spectrum Disorder Using Hybrid Algorithm",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Brain Tumor Segmentation and Severity of Tumor Classification using Lightweight Attention based MobileNetv2 Model",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Alzheimer&rsquo;s Disease Detection Using Hybrid Structural Graph Discrete Hopfield Neural Network with Doll Maker Optimization Algorithm",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "Enhanced Multimodal Breast Cancer Diagnosis Using Random Graph Diffusion-Based Two-Branch Attention Adversarial Domain Adaptation with Improved Orca Predation Optimization",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Automated Weed Detection in Crop Fields Using Convolutional Neural Networks: A Deep Learning Approach for Smart Farming",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Detection of Peripheral Blood Smear Malarial Parasitic Microscopic Images Utilizing Convolutional Neural Network",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Identification of Foliar Pathologies in Apple Foliage Utilizing Advanced Deep Learning Techniques",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Weapon Recognition Using Deep Learning for Security Applications",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Comparative Analysis of the Identification and Categorization of the Malaria Parasite Employing Recent Amalgamated Machine Learning Methodologies",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "CodeLedger: A Blockchain-Based Framework for Secure Software Version Control",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Smart Factories for Industry 5.0 Transformation",
                            "Indexing": "Scopus",
                            "Publication": "Book",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "5",
                            "Details of Research Publication": "Digital Twin-Enabled Smart Manufacturing: Challenges and Future Directions",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Generative Artificial Intelligence: Concepts and Applications",
                            "Indexing": "Scopus",
                            "Publication": "Book",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Machine Learning in Healthcare: Unlocking Precision Diagnosis and Continuous Monitoring Through Voice Analysis",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancing Tensor based Imputation With CNNs for Astronomical Imagery Data",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Exploring Facial Recognition Technologies for Classroom Management",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Real Time Medicinal Plant Identification & Classification Using Random Forest Algorithm",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Intense Triad Defender for End-User Security in Cyber Physical System",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Energy Harvesting Scheme Using Queuing Theory for Wireless Body Area Network",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "A secured and optimized deep recurrent neural network (DRNN) scheme for remote health monitoring system with edge computing",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Smart System for Vechicle Number Plate Recognition Using Convolutional Neural Network(CNN)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Brain Tumor Diagnosis with MCNN-Based MRI Image Analysis",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Hybrid Tasmanian Devil and Improved Simulated Annealing-Based Clustering Algorithm for Improving Network Longevity in Wireless Sensor Networks (WSNs)",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "An efficient iot framework for patient monitoring and predicting heart disease based on machine learning algorithms",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "3",
                            "Details of Research Publication": "Autism screening tools with machine learning and deep learning methods: A review",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Tele-Healthcare: Applications of artificial intelligence and soft computing techniques",
                            "Indexing": "Scopus",
                            "Publication": "Book",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "29",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Remodelled chaotic compressive sensing scheme for secure and energy-efficient data forwarding in body-to-body network",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "30",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "3",
                            "Details of Research Publication": "Minimizing path loss and improving security in wireless body area networks Scopus Article Q2",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "31",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Security and privacy issues in smart healthcare system using internet of things",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "32",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "Paillier homomorphic encryption with K-means clustering algorithm (phekc) for data mining security in cloud",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "33",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "A novel encryption design for wireless body area network in remote healthcare system using enhanced RSA algorithm",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "34",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "3",
                            "Details of Research Publication": "WOAMSA: Whale optimization algorithm for multiple sequence alignment of protein sequence",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "35",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "3",
                            "Details of Research Publication": "Comparison of Machine Learning Methods for Effective Autism Diagnosis",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "36",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhanced Route Selection (ERS) algorithm for IoT enabled smart waste management system",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "37",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "3",
                            "Details of Research Publication": "ACO_NB-Based Hybrid Prediction Model for Medical Disease Diagnosis",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "38",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "2",
                            "Details of Research Publication": "A systematic and analytical approach to techniques and tools in topic modeling",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "39",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "Security and privacy issues in remote healthcare systems using wireless body area networks",
                            "Indexing": "Scopus",
                            "Publication": "Book",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "40",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "An end-to-end secure and energy-aware routing mechanism for IoT-based modern health care system",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "41",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "3",
                            "Details of Research Publication": "A secure and energy efficient resource allocation scheme for wireless body area network",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "42",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013-14",
                            "Author Position": "2",
                            "Details of Research Publication": "Retinal and cancer cell image segmentation for predicting the diseased images",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "43",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013-14",
                            "Author Position": "2",
                            "Details of Research Publication": "Cell segmentation and NC ratio analysis for biopsy images using marker controlled watershed algorithm",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "44",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013-14",
                            "Author Position": "2",
                            "Details of Research Publication": "Identification of Abdominal Aorta Aneurysm Using Ant Colony Optimization Algorithm",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                },
                {
                    "title": "Research Projects & Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Funded Project /Event": "AICTE Conference",
                            "Role": "Co-Coordinator",
                            "Title of the Project/Event": "2nd International Conference on Optimization Techniques",
                            "Amount in Rs. /-": "3,00,000",
                            "Funding Agency": "AICTE"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Funded Project /Event": "Article Presentation",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Pen to Podium",
                            "Amount in Rs. /-": "11,000",
                            "Funding Agency": "Academic Decipher, Mumbai"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Funded Project /Event": "JNTUA FDP",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Quantum Neuro Morphic Computing for Sustainable Generative AI",
                            "Amount in Rs. /-": "1,00,000",
                            "Funding Agency": "JNTUA"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Funded Project /Event": "AICTE MoDRoB",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Modernization of Internet of Things Laboratory",
                            "Amount in Rs. /-": "5,96,741",
                            "Funding Agency": "AICTE"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "MITS",
                            "Academic Year": "2016-17",
                            "Funded Project /Event": "Workshop",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Internet of Things",
                            "Amount in Rs. /-": "5,000",
                            "Funding Agency": "ISTE Tamilnadu Section"
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
                            "Application ID": "2387/2025-CO/SW",
                            "Title of the Patent": "MITS-FLEX Copy right Registered",
                            "Status": "Copy right Registered"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "2386/2025-CO/SW",
                            "Title of the Patent": "MITS-EAMCET",
                            "Status": "Copy right Registered"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "915/2025-CO/SW",
                            "Title of the Patent": "MITS Student Feedback Management System",
                            "Status": "Copy right Registered"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "1222079",
                            "Title of the Patent": "Advanced Deep Learning Framework For Identifying Plant Diseases From Leaf Images",
                            "Status": "Copy right Registered"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Application ID": "2020101466",
                            "Title of the Patent": "Blockchain Technology Based IoT Consensus Protocol For Intelligence Home",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "6",
                            "Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Application ID": "2020100954",
                            "Title of the Patent": "Decision Making System For Crop-Livestock Farms Using Machine Learning Algorithms",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "7",
                            "Affiliation": "Others",
                            "Academic Year": "2017-2018",
                            "Application ID": "201841015510 A",
                            "Title of the Patent": "Image Segmentation For MRI Based Brain Tumor Detection Using Clustering Techniques",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Awarded as &ldquo;The Best Practitioner of the Week&rdquo; by WIPRO MISSION 10X, 2011.",
                        "Secured University First in M.Tech., University Examination under Anna University, Chennai.",
                        "Received &ldquo;Best Faculty&rdquo; award by Vanakkam Human Development Corporation in association with Oneyes Infotech Solutions Chennai in 2023. Received &ldquo;Best Teaching Faculty 2019&rdquo; by Dr.Kalam Education Trust for Tribals, Tamilnadu.",
                        "Received &ldquo;Best Computer Science Faculty 2019&rdquo; award by ASDF.",
                        "Nominated as one of the finalists in &ldquo;ICTACT BEST TECHNO FACULTY AWARD 2016&rdquo; conducted by ICT Academy of Tamilnadu."
                    ]
                }
            ]
    },

    "Dr. G. Arun Kumar": {
        "name": "Dr. G. Arun Kumar",
        "email": "drarunkumarg@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. G. Arun Kumar.JPG",
        "designation": "Assoc. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Information & Communication",
                            "Branch": "CSE",
                            "College Name/University": "College of Engineering, Guindy (Main Campus), Anna University, Chennai",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Sri Manakula Vinayagar Engineering College, Puducherry, Pondicherry University.",
                            "Year of Passing": "2008"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "V.R.S College of Engineering & Technology, Villupuram, Anna University",
                            "Year of Passing": "2005"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Software Process Improvement , Machine Learning , IOT , DL"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=56511903100",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/273655",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=hN55Y7oAAAAJ",
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
                            "Author Position": "6",
                            "Details of Research Publication": "AgriNexus: A Next-Gen IoT-Driven autonomous Ecosystem for Smart Agriculture DOI: 10.1109/ICAISS61471.2025.11041820",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Weighted Majority Voting Ensemble for MRI-Based Brain Tumor Classification Using Capsule Networks and XGBoost DOI https://doi.org/10.1007/s00723-024-01731-2",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Ensemble classification for improved lung cancer detection: A comparative study https://doi.org/10.1063/5.0265856",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "AI-powered surveillance for detecting helmetless bike riders using YOLO https://doi.org/10.1063/5.0265857",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Enhanced plant disease classification via wild horse optimizer and convolutional attention-bidirectional long short term memory DOI https://doi.org/10.1007/s11760-025-04556-z",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Management of trust between patient and IoT using fuzzy logic theory. DOI: 10.1002/9781394242252.ch6",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "3",
                            "Details of Research Publication": "Detecting Healthcare Issues Using a Neuro-Fuzzy Classifier https://doi.org/10.1002/9781394242252.ch4",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Development of the fuzzy logic system for monitoring of patient health https://doi.org/10.1002/9781394242252.ch5",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "LCO&ndash;EGC: levy chaotic optimization-based enhanced graph convolutional network for monitoring health of sports athletes https://doi.org/10.1007/s11276-023-03574-4",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "O2O-PLB: A One-to-One-Based Optimizer With Priority and Load Balancing Mechanism for Resource Allocation in Fog-Cloud Environments DOI: 10.1109/ACCESS.2025.3536210",
                            "Indexing": "IEEE Access",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "AI-enhanced Metric Package for Assessing Reliability in Service Composition for Drug Discovery and Development",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "WOS"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "Code word Based Bi-Server Authentication and Key Exchange Encryption Technique doi: 10.1109/ICOTL59758.2023.10435192.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Development of Healthcare Monitoring System with Pollution Control in Industrial Sectors Using the Internet of Things DOI: 10.1109/ICIRCA57980.2023.10220589",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "5",
                            "Details of Research Publication": "Wireless IoT Gas and Smoke Detection System with ESP8266 and Blynk Integration DOI: 10.1109/ICOTL59758.2023.10435228",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "5",
                            "Details of Research Publication": "Customized Creation of ERC 20 Standard Cryptocurrency on the Ethereum Network DOI: 10.1109/ICOTL59758.2023.10435288",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "A Novel Graph Clustering Algorithm with Enhanced Security using Power Method and Homomorphic Encryption. DOI: 10.1109/ICOTL59758.2023.10435058",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "5",
                            "Details of Research Publication": "Internet of Things and Machine Learning for Transportation System Using Adaptive Enhanced K- Nearest Neighbor Algorithm https://doi.org/10.1201/9781003320074",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Author Position": "5",
                            "Details of Research Publication": "Detection and Classification of Skin Cancer by Using a Parallel Deconvolutional Network Model doi: 10.1109/IIHC55949.2022.10059956.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "1",
                            "Details of Research Publication": "Design and Application of New Quality Improvement Model: Kano Lean Six Sigma for Software Maintenance Project. https://doi.org/10.1007/s13369-015-1933-1",
                            "Indexing": "SCI",
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
                            "Academic Year": "2023",
                            "Application ID": "382243-001",
                            "Title of the Patent": "Portable Digital Media Player",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Application ID": "6269746",
                            "Title of the Patent": "Solar Charging Station For Electrical Vehicle",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Application ID": "379149-001",
                            "Title of the Patent": "Wifi Router",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Application ID": "202341025122",
                            "Title of the Patent": "A Machine Learning System For Predicting Cyber Attacks On Critical Infrastructure",
                            "Status": "Published"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Application ID": "202341008551",
                            "Title of the Patent": "IOT Based Enhanced Street Light For Visibility In Foggy Conditions",
                            "Status": "Published"
                        },
                        {
                            "S.No": "6",
                            "Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Application ID": "202241065148",
                            "Title of the Patent": "Effectiveness Of Business Model For Startup Company",
                            "Status": "Published"
                        },
                        {
                            "S.No": "7",
                            "Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Application ID": "202241055441",
                            "Title of the Patent": "Development Of Electronic Employee Selection Process And Method Management System",
                            "Status": "Published"
                        },
                        {
                            "S.No": "8",
                            "Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Application ID": "202241053184",
                            "Title of the Patent": "Transaction Flows And Transaction Processing For Bridged Payment Systems Using Machine Learning",
                            "Status": "Published"
                        },
                        {
                            "S.No": "9",
                            "Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Application ID": "202221048349",
                            "Title of the Patent": "Human Resource Recommendation Algorithm Based On Machine Learning",
                            "Status": "Published"
                        },
                        {
                            "S.No": "10",
                            "Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Application ID": "202241041430",
                            "Title of the Patent": "Customer&rsquo;S Earnings, Savings, And Financial History-Classification Using Machine Learning Technology",
                            "Status": "Published"
                        },
                        {
                            "S.No": "11",
                            "Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Application ID": "202241027025",
                            "Title of the Patent": "New IOT- Enabled Technology for Online Education System",
                            "Status": "Published"
                        },
                        {
                            "S.No": "12",
                            "Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Application ID": "202241028031",
                            "Title of the Patent": "Cloud Computing and IOT based Smart Ecommerce Platform Method Thereof",
                            "Status": "Published"
                        },
                        {
                            "S.No": "13",
                            "Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Application ID": "202241022243",
                            "Title of the Patent": "Trading And Earning Money Online Management And Notification System",
                            "Status": "Published"
                        },
                        {
                            "S.No": "14",
                            "Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Application ID": "202241017591",
                            "Title of the Patent": "Advanced Ai Based Automation Technology In Manufacturing And Service Industries",
                            "Status": "Published"
                        },
                        {
                            "S.No": "15",
                            "Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Application ID": "202241010100",
                            "Title of the Patent": "Intelligent Virtual Reality Kit to Help Succeed in Face to Face Interview",
                            "Status": "Published"
                        },
                        {
                            "S.No": "16",
                            "Affiliation": "MITS",
                            "Academic Year": "2020",
                            "Application ID": "2020103319",
                            "Title of the Patent": "To Transmit e-Medical Records for Sharing on Block chain using Homomorphic Encryption Methods",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Acted as Mentor and participated in Grand Finale of Smart India Hackathon 2022 (Software Edition) at Vardhaman College of Engineering, Kacharam, Shamshabad &ndash; 501218 Hyderabad, Telangana. Under the category of Indian National Centre for Ocean Information Services (INCOIS), Ministry of Earth Sciences (MoES), Solved the real time problem statement &ldquo;Cost of Air Pollution to Solar Power Generation (CAPsolar)&rdquo; and Won &ldquo;First Prize in the Event&rdquo;.",
                        "Acted as Mentor and participated in Grand Finale of Smart India Hackathon 2019 (Software Edition) at Shri Ramdeobaba College of Engineering and Management, Nagpur. Under the category of minister of Railways, Solved the real time problem &ldquo;Unmanned Railway gate using IOT&rdquo; and Won &ldquo;Second Prize in the Event&rdquo;.",
                        "Best Research Award for Ay 2022- 23 from Madanapalle Institute of Technology & Science for outstanding Publication Work."
                    ]
                }
            ]
    },

    "Dr. R. Sudhakar": {
        "name": "Dr. R. Sudhakar",
        "email": "drsudhakarr@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. R. Sudhakar.JPG",
        "designation": "Assoc. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Anna University, Chennai",
                            "Year of Passing": "2017"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "DR.M.G.R University, Chennai",
                            "Year of Passing": "2011"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Priyadharshini Engineering College, Vaniyambadi",
                            "Year of Passing": "2007"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Software Process Improvement , Machine Learning , IOT , DL"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57191160931",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/273662",
                        "Google scholar : https://scholar.google.com/citations?user=sHjAk1YAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 6"
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
                            "Details of Research Publication": "SCLe-Net: Siamese Convolutional Le-Network for Hand Bone Age Estimation Using X-Ray Image, X-Ray Spectrometry, 24 September 2025, Online ISSN:1097-4539 https://doi.org/10.1002/xrs.70037",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "D Artificial Intelligence Based on Modelling for Prediction of Alzheimers Disease for Optimal Solution, International Journal of Basic and Applied Sciences,E-ISSN: 2227-5053, Vol No:14 No:04,Page No:313-319, 2025 DOI: https://doi.org/10.14419/jabp2w78",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Applications of Artificial Intelligence in Pharmaceuticals, IGI Publications July 2025, ISBN: 9798337320458, DOI: 10.4018/979-8-3373-2043-4",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Crop Yield Prediction Based on the Characteristics of Agricultural Environment, International Conference on Computational Robotics Testing and Engineering Evaluation Iccrtee 2025",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Classification of brain tumours from MRI images using deep learning-enabled hybrid optimization algorithm, 09 Nov 2023, Network:Computation In Neural Systems,2023,VOL. 34, NO. 4, 408&ndash;437 https://doi.org/10.1080/0954898X.2023.2275045",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "Smart System for Vehicle Number Plate Recognition Using Convolution Neural Network(CNN),IEEE International Conference on Optimization Techniques for Learning,7th-8th December 2023, Madanapalle Institute of Technology & Science",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Digital Image Anti-Forensic Model Using Exponential Chaotic Biogeography-Based Optimization Algorithm,The Computer Journal, Volume 66, Issue 12, December 2023, Pages 3038&ndash;3051 https://doi.org/10.1093/comjnl/bxac148",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Novel Probabilistic Clustering with Adaptive Actor Critic Neural Network (AACN) for Intrusion Detection Techniques, Advances in Intelligent Systems and Computing, Springer, ISBN 978-981-15-0135-7,1054, https://doi.org/10.1007/978-981-15-0135-7_51 , February-19, 2020",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "Video Super Resolution using non-linear regression and Deep Learning, The Imaging Science Journal, Taylor & Francis,Vol.67,Issues.06,pp.305-318, September 2019 https://doi.org/10.1080/13682199.2019.1652445",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019",
                            "Author Position": "2",
                            "Details of Research Publication": "User Behavioral Analysis Using Markov Chain and Steady-State in Tracer and Checker Model, Journal of Cyber Security and Mobility, ISSN: 2245-4578, Vol.8, Issue-2, pp.277-294, January-25, 2019. doi: 10.13052/jcsm2245-1439.826",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017",
                            "Author Position": "1",
                            "Details of Research Publication": "Adaptive Shape Assisted Block Search Algorithm and Fuzzy Holoentrophy-Enabled Cost Function for Motion Vector Computation&rsquo; Wireless Personal Communications, Springer DOI: 10.1007/s11277-016-3704-z,pp.1-22, ISSN: 1572-834X",
                            "Indexing": "SCI",
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
                            "Academic Year": "2024",
                            "Application ID": "202441068339",
                            "Title of the Patent": "An Innovative E-Pilots System For Aircraft Hard-Landing Prediction Based On Deep Learning Technique, https://search.ipindia.gov.in/IPOJournal/Journal/Patent",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Application ID": "202441086280",
                            "Title of the Patent": "Methods and Composition for Enhancing Palnts Stress Tolerance Through Genetic Modifications https://search.ipindia.gov.in/IPOJournal/Journal/Patent",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "Certified as a Wipro TalentNext Database Solution Expert by Wipro in 2025."
                }
            ]
    },

      "Dr. N. Krishnaiah": {
        "name": "Dr. N. Krishnaiah",
        "email": "drkrishnaiahn@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Krishnaiah.JPG",
        "designation": "Assoc. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "JNTUK, Kakinada",
                            "Year of Passing": "2018"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "JNTUK, Kakinada",
                            "Year of Passing": "2009"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "SVCET, Chittoor",
                            "Year of Passing": "2005"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Big Data Analytics, Machine learning, Computer Networks & Data warehousing and Mining"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57831317500",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/509386",
                        "Google scholar : https://scholar.google.com/citations?user=RO6Cob4AAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 3"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026-27",
                            "Author Position": "3",
                            "Details of Research Publication": "&quot;Real-Time Brain&ndash;Computer Interface Framework for Human&ndash;Machine Interaction.&quot; Journal of Daoist Studies 19.S1 (2026): 734-745.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "&quot;Blockchain-integrated intrusion detection system with optimized cosine CNN for enhanced privacy and security in cloud computing.&quot; Information Sciences (2025): 123015.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "&quot;Adaptive AI Framework for Software Defect Detection using Stacked Ensembles and RL.&quot; 2025 5th International Conference on Mobile Networks and Wireless Communications (ICMNWC). IEEE, 2025.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "6",
                            "Details of Research Publication": "&quot;Blockchain-AI Integrated Framework for Efficient and Secure Big Data Processing in IIoT Using Enhanced DPoS Consensus.&quot; 2025 International Conference on Emerging Engineering Technologies and Applications (IC-EETA). IEEE, 2025.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "6",
                            "Details of Research Publication": "&quot;Cost-Effective Intrusion Detection in Cyber-Physical Systems: An Accounting Perspective Using Explainable AI and Optimisation-Based Neural Models.&quot; 2025 International Conference on Emerging Engineering Technologies and Applications (IC-EETA). IEEE, 2025.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "5",
                            "Details of Research Publication": "&quot;Optimizing connectivity: a novel AI approach to assess transmission levels in optical networks.&quot; The Journal of Supercomputing 80.18 (2024): 26568-26588.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "6",
                            "Details of Research Publication": "&quot;Implementation of Block Chain, IoT and Role-basis Data Access Control (RBAC) for Intelligent Manufacturing.&quot; 2024 International Conference on Inventive Computation Technologies (ICICT). IEEE, 2024.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "5",
                            "Details of Research Publication": "&quot;Medical Image Classification Using Thermal Images and Diagnosis of Carcinogen.&quot; 2024 International Conference on Innovation and Novelty in Engineering and Technology (INNOVA). Vol. 1. IEEE, 2024.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "6",
                            "Details of Research Publication": "&quot;Leveraging Machine Learning to Identify Synergistic Drug Combinations for Effective Cancer Treatment.&quot; 2023 Seventh International Conference on Image Information Processing (ICIIP). IEEE, 2023.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "6",
                            "Details of Research Publication": "&quot;Power allocation model for residential homes using AI-based IoT.&quot; Measurement: Sensors 24 (2022): 100461.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "2",
                            "Details of Research Publication": "&quot;Machine Learning Approach to Patient Health and Stress Monitoring System.&quot; 2022 IEEE 2nd Mysore Sub Section International Conference (MysuruCon). IEEE, 2022.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "6",
                            "Details of Research Publication": "&quot;Applications of Ensuring Security and Privacy Using Block Chain with IoT for Health Record.&quot; 2022 2nd International Conference on Advance Computing and Innovative Technologies in Engineering (ICACITE). IEEE, 2022.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;A Unique Class Prediction Classifier for Redundant Multi-Label Values to Support Efficient Clustering.&quot; International Journal of Applied Engineering Research 12.15 (2017): 5393-5401.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                },
                {
                    "title": "Research Projects & Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2012",
                            "Funded Project /Event": "AICTE MoDRoB",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Data Mining Laboratory",
                            "Amount in Rs. /-": "6,00,000",
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
                            "Academic Year": "2025",
                            "Application ID": "202541043218",
                            "Title of the Patent": "Elevating Agriculture: Advanced Hops Classification for Precision Crop Management and Quality Harvests",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2025",
                            "Application ID": "202541027013",
                            "Title of the Patent": "Time Series Analysis-Based Prediction of Dengue Spread Using Climate Data",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2024",
                            "Application ID": "202441080860",
                            "Title of the Patent": "An Advanced System For Real-Time Contactless Vital Sign Estimation",
                            "Status": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "Others",
                            "Academic Year": "2024",
                            "Application ID": "202441080855",
                            "Title of the Patent": "Xgboost Model Based Alpha Signal Prediction Using Microblogging Data From Social Media",
                            "Status": "Published"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "Others",
                            "Academic Year": "2024",
                            "Application ID": "202441050598",
                            "Title of the Patent": "Smart Locker System Using Dactylogram",
                            "Status": "Published"
                        },
                        {
                            "S.No": "6",
                            "Affiliation": "Others",
                            "Academic Year": "2021",
                            "Application ID": "AU 2021101471",
                            "Title of the Patent": "IoT Enabled Wall Climbing Robot For Security",
                            "Status": "Published"
                        },
                        {
                            "S.No": "7",
                            "Affiliation": "Others",
                            "Academic Year": "2021",
                            "Application ID": "202141043198",
                            "Title of the Patent": "Automatic Network Operation And Management To Improve Network Resource Utilization And Operational Reliability Using Machine Learning Algorithms",
                            "Status": "Published"
                        },
                        {
                            "S.No": "8",
                            "Affiliation": "Others",
                            "Academic Year": "2019",
                            "Application ID": "201941047156",
                            "Title of the Patent": "Data Mining For Discovering Informative Knowledge In Complex Data",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Dr. D. J. Ashpin Pabi": {
        "name": "Dr. D. J. Ashpin Pabi",
        "email": "ashpinpabidj@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. D. J. Ashpin Pabi.JPG",
        "designation": "Assoc. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Image Processing",
                            "Branch": "CSE",
                            "College Name/University": "Annamalai University",
                            "Year of Passing": "2018"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Software Engineering",
                            "Branch": "Information & Communication Technologies",
                            "College Name/University": "Vins Christian College of Engineering, Anna University",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Information & Communication Technologies",
                            "Branch": "Information & Communication Technologies",
                            "College Name/University": "Manonmaniam Sundaranar University, Tirunelveli",
                            "Year of Passing": "2011"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Computer Vision, Artificial Intelligence"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57195529611",
                        "Vidwan : https://mits.irins.org/profile/273383",
                        "Google scholar : https://scholar.google.com/citations?user=Zp7ga2cAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 3"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "4",
                            "Details of Research Publication": "IoT-based Renewable Energy Integration and Optimization in Smart Power Grids DOI: 10.1109/ICESC65114.2025.11212457",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "2",
                            "Details of Research Publication": "TSCE and CD-CATL Driven Framework for Robust and Real-Time Voice Disorder Detection and Classification DOI : 10.14445/23488549/IJECE-V12I8P132",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Enhancing Tensor based Imputation with CNNs for Astronomical Imagery Data DOI: https://doi.org/10.1109/ICDSBS63635.2025.11031495",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Bio-cellulose-derived rGO-supported SmCoO3 hybrid composite photoanode for high performance dye-sensitized solar cells DOI: https://doi.org/10.1007/s10854-024-12898-6",
                            "Indexing": "SCIE & Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Exploring Facial Recognition Technologies for Classroom Management DOI:10.1109/ICCSP60870.2024.10544143",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Molecular Biomarkers for Personalized Diagnosis and Treatment of Gastric Cancer Using Deep Learning Techniques DOI: 10.1109/ACCAI61061.2024.10601916",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "An Empirical Study Measuring the Performance Ratings and Evaluating Gender Based Satisfaction Level DOI: 10.1109/ICOTL59758.2023.10434986",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "4",
                            "Details of Research Publication": "Password Authentication Key Exchange Protocol with Two Servers by IBE in Data Analytics DOI: 10.1109/ICIRCA57980.2023.10220584",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Author Position": "2",
                            "Details of Research Publication": "A study on the impact of emotional intelligence factors for the enhancement of workplace happiness with reference to the teaching faculty in Bangalore DOI: https://doi.org/10.1063/5.0074909",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "Color Image Compression Based on Feature Extraction DOI: https://doi.org/10.1007/978-3-319-60618-7_37",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "Tri-mode dual level 3-D image compression over medical MRI images DOI:10.19101/IJACR.2017.728007",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                }
            ]
    },

    "Dr. Thanikaivel. B": {
        "name": "Dr. Thanikaivel. B",
        "designation": "Sr. Asst. Professor",
        "email": "drthanikaivelb@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/thani.jpg",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Cloud Computing",
                            "Branch": "CSE",
                            "College Name/University": "Anna University",
                            "Year of Passing": "2022"
                        },
                        {
                            "Course": "M.B.A.",
                            "Specialization": "Service",
                            "Branch": "Technology Management",
                            "College Name/University": "Anna University",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Sensor networks",
                            "Branch": "CSE",
                            "College Name/University": "Sona College of Technology",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Sona College of Technology",
                            "Year of Passing": "2007"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Cloud computing, Computer Network, Algorithm analysis"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=55123084700",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/673028",
                        "Google scholar : https://scholar.google.com/citations?user=1nOiVakAAAAJ&hl",
                        "h-Index (As per Scopus Data) : 1"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Optimized Mobile Cloud Recovery Architecture based on Dynamic Cognitive and Intelligent Technique",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                }
            ]
    },

      "Dr. K. Sree Divya": {
    "name": "Dr. K. Sree Divya",
    "designation": "Asst. Professor",
    "email": "drksreedivya@mits.ac.in",
    "officeAddress": "NPN-204",
    "image": "https://mits.ac.in/public/uploads/faculty/DSC_7933.JPG",
    "sections": [
        {
            "title": "Details of Educational Qualification",
            "content": [
                {
                    "S.No": "1",
                    "Course": "Ph.D.",
                    "Specialization": "Machine Learning and Data Analytics",
                    "Branch": "CSE",
                    "College Name/University": "Sri Padmavathi Mahila Viswa Vidyalayam",
                    "Year of Passing": "2021"
                },
                {
                    "S.No": "2",
                    "Course": "M.Tech.",
                    "Specialization": "CSE",
                    "Branch": "CSE",
                    "College Name/University": "JNTU Anantapur",
                    "Year of Passing": "2014"
                },
                {
                    "S.No": "3",
                    "Course": "B.Tech.",
                    "Specialization": "Information Technology",
                    "Branch": "Information Technology",
                    "College Name/University": "JNTU Hyderabad",
                    "Year of Passing": "2006"
                }
            ]
        },
        {
            "title": "Research Areas",
            "content": "Deep Learning, Natural Language Processing"
        },
        {
            "title": "Research Identifiers",
            "content": [
                {
                    "Identifier": "Scopus",
                    "Link": "https://www.scopus.com/authid/detail.uri?authorId=57955831000"
                },
                {
                    "Identifier": "Vidwan",
                    "Link": "https://vidwan.inflibnet.ac.in/profile/460458"
                },
                {
                    "Identifier": "Google scholar",
                    "Link": "https://scholar.google.com/citations?user=Sl6XF40AAAAJ"
                }
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
                    "Details of Research Publication": "Cloudburst Prediction System Smart Innovation Systems and Technologies 117 SIST, pp. 117-125, 2026",
                    "Indexing": "Scopus",
                    "Publication": "Conference Proceedings",
                    "Journal Quartile": "Q4"
                },
                {
                    "S.No": "2",
                    "Publication Affiliation": "MITS",
                    "Academic Year": "2025",
                    "Author Position": "1",
                    "Details of Research Publication": "MOFA+-GAT: A Novel Deep Learning Framework for Multi-Omics Integration and Drug Metabolite Pathway Prediction Journal of Applied Bioanalysis 11(3), pp. 728-742",
                    "Indexing": "Scopus",
                    "Publication": "Article",
                    "Journal Quartile": "Q3"
                },
                {
                    "S.No": "3",
                    "Publication Affiliation": "MITS",
                    "Academic Year": "2024",
                    "Author Position": "1",
                    "Details of Research Publication": "An Improved Mutual Exclusion Mac Protocol For Mac Layer In Manet To Overcome Hidden And Exposed Terminal Problem Journal of Theoretical and Applied Information Technology., 2024, 102(4), pp. 1627-1636",
                    "Indexing": "Scopus",
                    "Publication": "Article",
                    "Journal Quartile": "Q4"
                },
                {
                    "S.No": "4",
                    "Publication Affiliation": "MITS",
                    "Academic Year": "2024",
                    "Author Position": "1",
                    "Details of Research Publication": "Implementing Blockchain Based DApp for Secure Sharing of Students' Credentials 2024 IEEE 9th International Conference for Convergence in Technology, I2CT 2024, 2024",
                    "Indexing": "Scopus",
                    "Publication": "Conference Proceedings",
                    "Journal Quartile": "Q4"
                },
                {
                    "S.No": "5",
                    "Publication Affiliation": "Others",
                    "Academic Year": "2019",
                    "Author Position": "1",
                    "Details of Research Publication": "XGBoost Classifier to ExtractAsset Mapping Features Advances in Computational and Bio-Engineering Springer Publication",
                    "Indexing": "Scopus",
                    "Publication": "Article",
                    "Journal Quartile": "Q1"
                }
            ]
        },
        {
            "title": "Patents",
            "content": [
                {
                    "S.No": "1",
                    "Affiliation": "MITS",
                    "Academic Year": "2023",
                    "Application ID": "202341072767",
                    "Title of the Patent": "Evaluation Of Packet Traffic Abnormally Beacon Analysis For Icmp Ping Flood Identification Of Attack",
                    "Status": "Published"
                },
                {
                    "S.No": "2",
                    "Affiliation": "Others",
                    "Academic Year": "2021",
                    "Application ID": "202141060116",
                    "Title of the Patent": "Automatic Detection Of Shoulder Pain",
                    "Status": "Published"
                },
                {
                    "S.No": "3",
                    "Affiliation": "Others",
                    "Academic Year": "2020",
                    "Application ID": "2020101563",
                    "Title of the Patent": "An Artificial Intelligence Based System To Assist Blind Person",
                    "Status": "Published"
                }
            ]
        },
        {
            "title": "Awards & Achievements",
            "content": ["GATE Exam Qualified in Computer science and Engineering, 2011.",
            "APSET Exam Qualified in Computer Science, 2018.", 
            "Acted as a mentor in SIH Grand Finale at K.L.University Vijayawada"]
        }
    ]
},

    "Dr. G. Sreenivasulu": {
        "name": "Dr. G. Sreenivasulu",
        "email": "sreenivasgn@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/DSC_5445.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Cloud Computing",
                            "Branch": "CSE",
                            "College Name/University": "Bharathiar University",
                            "Year of Passing": "2023"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Madanapalle Institute of Technology & Science",
                            "Year of Passing": "2012"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "IT",
                            "Branch": "CSIT",
                            "College Name/University": "PBR VITS, Kavali, JNTU",
                            "Year of Passing": "2010"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Cloud Computing and Artificial Intelligence"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57219697021",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/273417",
                        "Google scholar : https://scholar.google.com/citations?user=QCgwPbMAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 4"
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
                            "Details of Research Publication": "The Role of Machine Learning in 6G Wireless Networks: A Comprehensive Overview http://dx.doi.org/10.14419/2v89xw95",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Advancing Precision Ocular Health Assessment through Artificial Intelligence-Based Detection of Retinoblastoma from Fundus Images http://dx.doi.org/10.1109/icirca65293.2025.11089863",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Parallel Processing based Image Enhancing Technique Implementation on Low Cost FPGA http://dx.doi.org/10.1109/icaiss61471.2025.11041963",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Enhancing Security in Wireless Mesh Networks: A Deep Learning Approach to Black Hole Attack Detection http://dx.doi.org/10.26877/asset.v7i1.1036",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Efficient and Accurate Traffic Sign Detection Leveraging YOLOv8: A Cutting-Edge Deep Learning Framework http://dx.doi.org/10.53759/7669/jmc202505001",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Analysis of Corporation Trends in Environmental Protection Using VOS Viewer http://dx.doi.org/10.4018/979-8-3693-7230-2.ch005",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Efficiency and Precision: Control Systems Empowered by Smart Image Processing http://dx.doi.org/10.1109/smartgencon60755.2023.10442573",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "3",
                            "Details of Research Publication": "A Deep Learning-based Methodology for Predicting Monkey Pox from Skin Sores http://dx.doi.org/10.1109/mysurucon55714.2022.9972746",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Hybrid optimization algorithm for task scheduling and virtual machine allocation in cloud computing http://dx.doi.org/10.1007/s12065-020-00517-2",
                            "Indexing": "SCI",
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
                            "Application ID": "202641074355",
                            "Title of the Patent": "A Novel Adversarial Robustness in Deep Learning Models for Autonomous Vehicle Perception",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Application ID": "202441028450",
                            "Title of the Patent": "IOT AND ML BASED ELDERLY SUPPORT SYSTEM FOR INDEPENDENCE IN DAILY LIFE",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Ratified as Assistant Professor under JNTU Anantapur on 13Aug2022.",
                        "Ratified as Assistant Professor under JNTU Kakinada on 23Sep2014.",
                        "Got the Top Performing Mentor Certificate from NPTEL JAN-APR 2022 and JAN-APR 2025.",
                        "Successfully Completed &ldquo;Google Data Analytics&rdquo; from Coursera on Sep 6, 2022.",
                        "Successfully Completed Microsoft Certified Course on &ldquo;Azure Data Engineer Associate&rdquo; from Microsoft on March 31, 2023.",
                        "Got the Topper Certificate in CCDS Course from NPTEL JAN-MAR 2025.",
                        "Successfully completed Faculty Domain Certificate from NPTEL OCT 2024.",
                        "Got the Motivated Learner Certificate from NPTEL JAN-APR 2024.",
                        "Got the Discipline Star Certificate from NPTEL JAN-APR 2025.",
                        "Served as External Examiner for MCA VI Semester Project Viva-Voce Examinations at an Autonomous Engineering Institution (SVPCET), JULY 2025."
                    ]
                }
            ]
    },

    "Dr. Kuraku Nirmala": {
      name: "Dr. Kuraku Nirmala",
      designation: "Asst. Professor",
      email: "drnirmalak@mits.ac.in",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/DSC_7299.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "CSE", "Branch": "CSE", "College Name/University": "Puducherry Technological University, Pondicherry", "Year of Passing": "2023"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "CSE", "Branch": "CSE", "College Name/University": "Jawaharlal Nehru Technological University, Anantapur", "Year of Passing": "2012"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "IT", "Branch": "IT", "College Name/University": "Jawaharlal Nehru Technological University, Anantapur", "Year of Passing": "2010"}
          ]
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57192153621"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/589729"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=O9QBBYMAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "3"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "A HYBRID KNN AND TRI-ENSEMBLE APPROACH FOR PREDICTING HMPV INFECTION", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Leveraging AI for Personalized Learning: An Optimization-Based Approach", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q3"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "8", "Details of Research Publication": "Mathematical Modeling of Student Performance Prediction Using Machine Learning Techniques", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Intelligent Noise Detection and Correction with Kriging on Fundus Images of Diabetic Retinopathy", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Variants of ReLU in 2-Layer Sequential CNN to Extract Hard Exudates in Diabetic Retinopathy", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q1"},
            {"S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Denoising Fundus Images of Diabetic Retinopathy Using Natural Neighborhood Kriging", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Significance of Learning and Memories in Computational Methods", "Indexing": "Web of Science", "Publication": "Article", "Journal Quartile": "Q1"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Ratified as an Assistant Professor by JNTUA,Ananthapuram in the year 2015."
          ]
        }
      ]
    },

    "Dr. Senthil Kumar. K": {
        "name": "Dr. Senthil Kumar. K",
        "designation": "Asst. Professor",
        "email": "drsenthilkumark@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Senthil Kumar. K.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Cloud Computing",
                            "Branch": "ICE",
                            "College Name/University": "Anna University",
                            "Year of Passing": "2025"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Cloud Computing",
                            "Branch": "CSE",
                            "College Name/University": "Paavai Engineering college, Anna University",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Computer Networks",
                            "Branch": "Information Technology",
                            "College Name/University": "Kongu Engineering College, Anna University",
                            "Year of Passing": "2008"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57827361300",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/667119",
                        "Google scholar : https://scholar.google.com/citations?user=62P2OpMAAAAJ&hl=en",
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
                            "Author Position": "6",
                            "Details of Research Publication": "Topology and knot theory applications in quantum field theory",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "5",
                            "Details of Research Publication": "AI Driven Optimization of Power Converters for Clean and Green Energy Systems",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Complex Pattern Jacquard Fabrics Defect Detection Using Convolutional Neural Networks and Multispectral Imaging",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "ssHeart Disease Prediction Using Machine Learning Techniques",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "AI Powered Smart Recognition of Plant Diseases with Vernacular Language Support",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "AI Based Mock Interview System Using Natural Language Processing",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Digitalized college management system",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "An Energy and Deadline-Aware Scheduler with Hybrid Optimization in Virtualized Clouds",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Machine Learning Algorithms for Breast Cancer Prediction",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "VIRTUAL LABORATORY FOR JAVA",
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
                            "Academic Year": "2025-26",
                            "Application ID": "202541096673",
                            "Title of the Patent": "ML Based Intelligent Fabric Selectionand Pricing Tool for Fashion StartupsUsing Consumer Behavior Analytics",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Application ID": "202441090329",
                            "Title of the Patent": "Intelligent Vehicle Tyre and Fuel Status Monitoring Solution for Fleet Operations",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Application ID": "202341077049",
                            "Title of the Patent": "Inteligent fabric damage system for autolooms using computer vision and Machine learning algorithm",
                            "Status": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Application ID": "202341068803",
                            "Title of the Patent": "Smart vehicle tracking and route suggestion system for fleet operator Using machine learning algorithm",
                            "Status": "Published"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Application ID": "202341034383",
                            "Title of the Patent": "Microcontroller based smart dust bin appliance controller",
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
                            "Name of the Consulting Firm": "Euro Aqua Plumtek Private Limited",
                            "Title of the Project/Event": "Migration of Web Server &ndash; Shared to Private Linux Hosting",
                            "Amount in Rs. /-": "8,000"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Name of the Consulting Firm": "Euro Aqua Plumtek Private Limited",
                            "Title of the Project/Event": "WebSite Designing & Hosting 50,000",
                            "Amount in Rs. /-": "50,000"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Name of the Consulting Firm": "Learn By Yourself LLC Hyderabad",
                            "Title of the Project/Event": "Website Designing & Hosting 25,000",
                            "Amount in Rs. /-": "25,000"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Name of the Consulting Firm": "Tax Deck , Inc Hyderabad",
                            "Title of the Project/Event": "Website Designing & Hosting 25,000",
                            "Amount in Rs. /-": "25,000"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Helped students to create own Start up under the brand name of &ldquo;We Twice Technologies Pvt Ltd&rdquo; which provides Website and App Development services across TamilNadu.",
                        "Wipro Certified Faculty on Java Full Stack Development"
                    ]
                }
            ]
    },

    "Dr. Prasath. B": {
        "name": "Dr. Prasath. B",
        "email": "prasathb@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Prasath. B.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Information and Communication Engineering",
                            "Branch": "Information and Communication Engineering",
                            "College Name/University": "Anna University",
                            "Year of Passing": "2026"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Network Engineering",
                            "Branch": "Network Engineering",
                            "College Name/University": "Anna University of Technology",
                            "Year of Passing": "2011"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "CSI College of Engineering, Anna University",
                            "Year of Passing": "2008"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Computer Vision, Deep Learning, Machine Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57205443731",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/452069",
                        "Google scholar : https://scholar.google.com/citations?user=IwTep3MAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 3"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "AETC: an automated pest detection and ensemble transfer CNN with IoT-assisted pest images, Knowledge and Information Systems, https://doi.org/10.1007/s10115-024-02146-y",
                            "Indexing": "SCIE",
                            "Publication": "Journal",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "IoT-based pest detection and classification using deep features with enhanced deep learning strategies&rdquo; in Journal of Engineering Applications of Artificial Intelligence, DOI: https://doi.org/10.1016/j.engappai.2023.105985",
                            "Indexing": "SCIE",
                            "Publication": "Journal",
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
                            "Academic Year": "2022",
                            "Application ID": "202241051215A",
                            "Title of the Patent": "DESIGN SYSTEM OF IOT - BASED WIND PRESSURE CONTROL PREDICTION ON SMART BUILDINGS USING MACHINE LEARNING",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mr. Nitin B. Raut": {
        "name": "Mr. Nitin B. Raut",
        "email": "nitinbr@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Nitin B. Raut.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Amrita Vishwa Vidyapeetham, Coimbatore",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Computational Engineering and Networking",
                            "Branch": "CSE",
                            "College Name/University": "Amrita Vishwa Vidhyapeetham, Coimbatore",
                            "Year of Passing": "2009"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "IT",
                            "Branch": "IT",
                            "College Name/University": "R.T.M. Nagpur University, Nagpur (MH)",
                            "Year of Passing": "2006"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Wireless Sensor Networks, IoT"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58707092400",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/676320",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=i2tsh8UAAAAJ",
                        "h-Index (As per Scopus Data) : 3"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Energy-Efficient Sleep Wake-Up Mechanism Based Routing Protocol Using Siamese Network and Optimized Fuzzy Interference System in Green Io International Journal of Communication SystemsOpen source preview, 2025, 38(13), e70193T",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "AgriAI: Revolutionizing Agriculture with Data Science, Proceedings of the 2nd IEEE International Conference on Networking and Communications 2024 Icnwc 2024Open source preview,",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Cascade Face Classification Framework based Mask Detection of Real Time Images Using Deep Learning Approach Aip Conference ProceedingsOpen source preview, 2023, 2901(1), 060012",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "An Extensive Survey on Audio-to-Text and Text Summarization for Video Content 3rd International Conference on Innovative Mechanisms for Industry Applications Icimia 2023 ProceedingsOpen source preview, 2023, pp. 1251&ndash;1257",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Image Processing and Pattern Recognition-Based Car Classification for Intelligent Transportation System Iet Conference Proceedings Open source preview, 2022, 2022(26), pp. 271&ndash;275",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Green Internet of Things (IoT) with dynamic sleep wake-up approach for constrained things Measurement SensorsOpen source preview, 2023, 25, 100656",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "A Green Dynamic Internet of Things (IoT)-Battery Powered Things Aspect-Survey",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "3",
                            "Details of Research Publication": "Image localization in gesture recognition Proceedings 2012 2nd International Conference on Advanced Computing and Communication Technologies Acct 2012Open source preview, 2012, pp. 314&ndash;317, 6168381",
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
                            "Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Application ID": "202341075524A",
                            "Title of the Patent": "The Implementation of IOT in Greenhouse Farming : Protocols and Application of Enabling Technologies",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Application ID": "202141046122A",
                            "Title of the Patent": "Implementation of Green IoT for efficient resource utilization and the creation of sustainable smart cities",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Ms. S. Sowmyadevi": {
        "name": "Ms. S. Sowmyadevi",
        "email": "sowmyadevis@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Ms. S. Sowmyadevi.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "SRM University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Arunai Engineering College, Anna University",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Arunai Engineering College, Anna University",
                            "Year of Passing": "2009"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=59983748500",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/461554",
                        "Google scholar : https://scholar.google.com/citations?user=YXrZ9xMAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) :"
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
                            "Details of Research Publication": "Improving Satellite Imagery Using Artificial Intelligence",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "IEEE"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "An Adaptive Mutation-Aware Test Case Ordering Framework Using Deep Learning and Quantum-Behaved Multi-Objective PSO doi: 10.54216/JISIoT.180114",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Adaptive Budget-Constrained Execution Framework for Prioritized Regression Test Suites",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Multi-Objective Quantum Particle Swarm Optimization for Test Suite Reduction (QPSO-TSR)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Automated Bone Marrow Cell Classification for Haematological Disease Using Machine Learning",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Plant Disease Detection Using Convolutional Neural Networks (CNN) Algorithm",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "Achieved Top Performing Mentor for the NPTEL E-Business Subject in the academic Year Jul-De"
                }
            ]
    },

    "Mr. K. Sathish": {
        "name": "Mr. K. Sathish",
        "designation": "Asst. Professor",
        "email": "sathishk@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/DSC_7307.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Annamalai University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Sreenivasa Institute of Technology and Management Studies, Chittoor",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Priyadarshini Engineering College, Vaniyambadi.",
                            "Year of Passing": "2011"
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
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58961305400",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/275245",
                        "Google scholar : https://scholar.google.com/citations?hl=en&authuser=1&user=IuMAmWoAAAAJ",
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
                            "Author Position": "2",
                            "Details of Research Publication": "Hybrid deep learning framework for enhanced T target tracking in video surveillance using CNN and DRNN-GWO A",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "A Deep Learning Approach for Sustainable and S secure Operations of Cloud Data Centres for Optimising the Energy Efficiency",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Gesture-Controlled virtual mouse using Media Pipe",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "IoT based Mobile App for Skin Cancer Detection U using Transfer Learning",
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
                            "Academic Year": "2022-23",
                            "Application ID": "202341040746",
                            "Title of the Patent": "A System for Providing Security using A Plurality of Factors for IoT Gadgets",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mrs. Swarna Jyothi": {
      name: "Mrs. Swarna Jyothi",
      designation: "Asst. Professor",
      email: "swarnajyothib@mits.ac.in",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/DSC_7295.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Data Visualization", "Branch": "CSE", "College Name/University": "JNTUA, Anantapuramu", "Year of Passing": "Pursuing"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "Software Engineering", "Branch": "CSE", "College Name/University": "JNTUA, Anantapuramu", "Year of Passing": "2016"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "CSE", "Branch": "CSE", "College Name/University": "Santhiram Engineering College, Nandyal", "Year of Passing": "2013"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Title of the Paper": "Development of Service Oriented Situational Web Applications using Knowledge Discovery from Services", "Details of Research Publication": "IJARCSSE ISSN: 2277 128X &2.5 Impact Factor Published in Volume 6 Issue 9, September-2016."},
            {"S.No": "2", "Title of the Paper": "Evaluating the Isolation Forest Method for Anomaly Detection in Software-Defined Network Security,", "Details of Research Publication": "Journal of Electrical Systems (Scopus & Web of Science), J. Electrical Systems 19-4 (2023): 279-297, DOI: https://doi.org/10.52783/jes.639"},
            {"S.No": "3", "Title of the Paper": "Security issues in High-Performance Blockchain Computing and their Smart Solutions", "Details of Research Publication": "(In Communication with International Journal of Information Technology-Springer)."},
            {"S.No": "4", "Title of the Paper": "Machine Learning Approach for Natural Language Processing and Sentiment Analysis in Social Media.", "Details of Research Publication": "ICMET- Scopus index springer book series (Status: Accepted)."}
          ]
        }
      ]
    },

    "Mr. Ch. Hemanand": {
        "name": "Mr. Ch. Hemanand",
        "email": "hemanandc@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/DSC_7289.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Machine Learning",
                            "Branch": "CSE",
                            "College Name/University": "Andhra University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "ASR College of Engineering, JNTU kakinada",
                            "Year of Passing": "2012"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "IT",
                            "Branch": "IT",
                            "College Name/University": "Sir CRR College of Engineering, Andhra University",
                            "Year of Passing": "2007"
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
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57946894100",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/461609",
                        "Google scholar : https://scholar.google.com/citations?user=Ppzox8oAAAAJ=en&user=KX0uJrYAAAAJ",
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
                            "Author Position": "2",
                            "Details of Research Publication": "The Influence of Mobile Commerce on Consumer Behavior: A FCM-RF-DNN Analysis DOI: 10.1109/IACIS61494.2024.10721778",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "6",
                            "Details of Research Publication": "Enhancing Patient Care: A Data-Driven Approach Using Decision Tree-ELM Models for Improved Safety and Quality DOI: 10.1109/ICONAT61936.2024.10774761",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "5",
                            "Details of Research Publication": "Analysis of Big Data and its Disruption via Data Mining Algorithms DOI: 10.1109/IC3TES62412.2024.10877613",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Advanced Cyber-Attack Detection in IoT Networks Using Deep Belief Networks and Gradient Boosting Mechanisms DOI: 10.1109/ICMNWC63764.2024.10872058",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "6",
                            "Details of Research Publication": "Block-Chain Assisted Strategies for Power Loss Reduction in Modern Distribution Systems DOI: 10.1109/ICAIQSA64000.2024.10882445",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Evaluating the Effectiveness of Spam Message Classification and Detection based on Deep Bi-GRU Method DOI: 10.1109/ICECA58529.2023.10395622",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "6",
                            "Details of Research Publication": "Heterogeneous sensor data fusion acquisition model for medical applications Journal: Measurements: Sensors",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                }
            ]
    },

    "Mr. P. Kaliyamoorthi": {
      name: "Mr. P. Kaliyamoorthi",
      designation: "Asst. Professor",
      email: "kaliyamoorthi@mits.ac.in",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/DSC_7279.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "CSE", "Branch": "CSE", "College Name/University": "SRM University", "Year of Passing": "Pursuing"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "CSE", "Branch": "CSE", "College Name/University": "University College of Engg. (BIT Campus), Trichy", "Year of Passing": "2013"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "CSE", "Branch": "CSE", "College Name/University": "Shri Angalamman College of Engineering & Technology, Trichy", "Year of Passing": "2009"}
          ]
        },
        {
          title: "Research Areas",
          content: "Data mining, Cloud Computing, Deep learning, Machine learning"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/feedback/author/reviewAuthorProfile.uri?authorIds=58408108400"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/461600"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=oNpxuRwAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "2"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "Others", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "MAGRU-PPGO background for optimized haploidentical donor selection in bone marrow transplantation using GAO-based feature filtering DOI : https://doi.org/10.1016/j.eij.2025.100843", "Indexing": "Scopus & SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-24", "Author Position": "2", "Details of Research Publication": "Biomedical Images utilized to analyse the expression of death receptor Ligands", "Indexing": "Scopus", "Publication": "", "Journal Quartile": "Q4"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2024-24", "Author Position": "5", "Details of Research Publication": "Advancing Smart Cyber Physical System with Self-Adaptive Software", "Indexing": "Scopus", "Publication": "", "Journal Quartile": "Q4"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "NPTEL Domain certification in Programming (Computer Science) completed in October 2024"
          ]
        }
      ]
    },

    "Mr. E. Rajesh": {
        "name": "Mr. E. Rajesh",
        "designation": "Asst. Professor",
        "email": "rajeshe@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. E. Rajesh.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "JNTU, Kakinada",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "JNTU, Kakinada",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "JNTU, Kakinada",
                            "Year of Passing": "2012"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://service.elsevier.com/app/home/supporthub/scopus/",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/562688/NTYyNjg4",
                        "Google scholar : https://scholar.google.co.in/citations?hl=en&user=8E9r0-8AAAAJ",
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
                            "Details of Research Publication": "AN EMPIRICAL STUDY OF THE SIX SIGMA APPROACH FOR REDUCING THE NUMBER OF COBBLES - STATISTICAL SOFTWARE QUALITY ASSURANCE TECHNIQUE",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        }
                    ]
                }
            ]
    },

    "Mr. Aleemullakhan Pathan": {
        "name": "Mr. Aleemullakhan Pathan",
        "designation": "Asst. Professor",
        "email": "aleemulakhanp@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Aleemullakhan Pathan.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Computer Science & Engineering",
                            "Branch": "Computer Science & Engineering",
                            "College Name/University": "NIT, Silchar",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Computer Science & Engineering",
                            "Branch": "Computer Science & Engineering",
                            "College Name/University": "NIST (JNTUK)",
                            "Year of Passing": "2012"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Computer Science & Information Technology",
                            "Branch": "Computer Science & Information Technology",
                            "College Name/University": "S.S.I.E.T (JNTU)",
                            "Year of Passing": "2006"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine Learning, Natural Language Processing"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57216589000",
                        "Vidwan : https://vidwan.inflibnet.ac.in//profile/218960",
                        "Google scholar : https://scholar.google.com/citations?user=C5XycKkAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) :"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Artificial Intelligence Based Vehicle Recognition Model to Control the Congestion using Smart Traffic Signals",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Prediction of Cricket Players performance using Machine Learning",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "Malicious Items Detection at Public Places using Deep learning methods",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "NPTEL Motivated Learner certificate during the year 2024-2025.",
                        "NPTEL Discipline Star certificate during the year 2025-2026."
                    ]
                }
            ]
    },

    "Mr. B. Galeebathullah": {
        "name": "Mr. B. Galeebathullah",
        "email": "galeebathullahb@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/DSC_7319.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Computer Science & Engineering",
                            "Branch": "Computer Science & Engineering",
                            "College Name/University": "Anna University, Chennai",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Software Engineering",
                            "Branch": "Software Engineering",
                            "College Name/University": "Anna University, Tiruchirappalli",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Computer Science & Engineering",
                            "Branch": "Computer Science & Engineering",
                            "College Name/University": "Crescent Engineering College/University of Madras",
                            "Year of Passing": "2004"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=56449349400",
                        "Vidwan : http://vidwan.inflibnet.ac.in/profile/273659",
                        "Google scholar :",
                        "h-Index (As per Scopus Data) : 2"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024 - 25",
                            "Author Position": "3",
                            "Details of Research Publication": "Intelligent transportation network-based congestion forecasting with federated learning and a convolutional neural network",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024 - 25",
                            "Author Position": "4",
                            "Details of Research Publication": "Quantum-Inspired Algorithms for AI and Machine Learning",
                            "Indexing": "Scopus",
                            "Publication": "Book chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024 - 25",
                            "Author Position": "5",
                            "Details of Research Publication": "Knowledge Improved Hybrid DNN&ndash;KAN Framework for Intrusion Detection in Wireless Sensor Networks",
                            "Indexing": "SCI",
                            "Publication": "Journal",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024 - 25",
                            "Author Position": "3",
                            "Details of Research Publication": "General Method, Job Sequencing with deadlines, Knapsack Problem, Minimum cost spanning trees, Single Source Shortest Paths",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024 - 25",
                            "Author Position": "3",
                            "Details of Research Publication": "Food detection and estimation of calories and other macro-nutrients and features to support healthy lifestyle",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024 - 25",
                            "Author Position": "3",
                            "Details of Research Publication": "Sign language recognition: Enhancing communication for the hearing and speaking impaired using hybrid model",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Author Position": "5",
                            "Details of Research Publication": "An Efficient Enhanced Dynamic Load Balancing Weighted Round Robin Algorithm for Virtual Machine in Cloud Computing",
                            "Indexing": "WOS",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Author Position": "4",
                            "Details of Research Publication": "Multiple Service Authentications with Cloud OTP as a Service",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "1",
                            "Details of Research Publication": "Introduction to Computing and Problem Solving",
                            "Indexing": "None",
                            "Publication": "Book",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "2",
                            "Details of Research Publication": "An Approach to Generate Test Cases from Sequence Diagram",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010",
                            "Author Position": "2",
                            "Details of Research Publication": "Analysis of test case coverage using data mining technique",
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
                            "Academic Year": "2024",
                            "Application ID": "419780-001",
                            "Title of the Patent": "Robatic Hand Sorting of VLSI Devices",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Application ID": "202241043334",
                            "Title of the Patent": "Automated Economy Risk Predictions in Sentiment Analysis",
                            "Status": "Filed"
                        }
                    ]
                }
            ]
    },

    "Mrs. G. B. Renuka": {
        "name": "Mrs. G. B. Renuka",
        "email": "renukagb@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. G. B. Renuka.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Cloud Computing & Blockchain Technology",
                            "Branch": "CSE",
                            "College Name/University": "SRMIST University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Dr. K. V. Subba Reddy College of Engineering for Women Dupadu (V), Kurnool",
                            "Year of Passing": "2017"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "G.Pullareddy Engineering College (Autonomous), Kurnool",
                            "Year of Passing": "2015"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58919549300",
                        "Vidwan : https://vidwan.inflibnet.ac.in/myprofile",
                        "Google scholar : https://scholar.google.com/citations?user=MW1EKZQAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 4"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026-27",
                            "Author Position": "3",
                            "Details of Research Publication": "Quantum Computing-Based Cyber-Resilient Edge-Cloud Systems for Disaster Management: An Innovative Method for Emergency Planning in High-Risk Situations DOI: 10.1109/CI2A69097.2026.11576828 Scopus Conference Proceedings",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "Hardware-Efficient Modified AES Architecture with AI-Optimized S-Box for Lightweight Applications DOI: 10.1007/s42979-026-05151-w",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "Blockchain-Supported Adaptive Hash Verification for Resilient Healthcare Data Integrity.DOI: 10.1109/ICECONF65644.2025.11379415",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "Computational Intelligence And Image Processing In Quality Evaluation Of Agricultural Products.DOI: 10.1002/9781394320905.ch16",
                            "Indexing": "Scopus",
                            "Publication": "Wiley-IEEE Press Book chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "BC2P-1305:an enhanced data security in cloud computing network using blockchain based ChaCha20-Poly1305 cryptography.Front. Blockchain 8:1636056.doi: 10.3389/fbloc.2025.1636056",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Leveraging Block chain for Scalable and Transparent Cloud Security-2nd International Conference on Computing and Data Science (ICCDS) | 979-8-3315-9668-2/25/$31.00 &copy;2025 IEEE | DOI: 10.1109/ICCDS64403.2025.11209466",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Optimising Energy Efficiency In Cloudbased Big Data Environment Using Lstm-Dwn Reinforcement Learning- Journal of Environmental Protection and Ecology 25(5) (2024) Pages: 1594 &ndash; 1603 (2024)",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Supervised Machine Learning Algorithm for Stellar Classification-https://doi.org/10.62441/nano-ntp.v20iS10.1825",
                            "Indexing": "",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Integrating reliable AI to boost blockchains transparency and accountability-DOI: 10.1109/ACET61898.2024.10730476",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Task Scheduling Algorithms for Cloud Computing Re-source Allocation: A Systematic Analysis Environment-https://doi.org/10.2991/978-94-6463-471-6_50 Atlantics Press Conf. Proceedings",
                            "Indexing": "Atlantics Press",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Earthquake forecasting with ML: A comprehensive approach-eBook Published20 December 2024 Pub. Locatio nLondon Imprint CRC Press DOI https://doi.org/10.1201/9781032711157 eBook ISBN9781032711157 SubjectsComputer Science, Mathematics & Statistic. CRC Press (Taylor & Francis) Book Chapter",
                            "Indexing": "CRC Press (Taylor & Francis)",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Chatbot Based on Emotions using Deep Learning-IEEE Xplore, Electronic ISBN:979-8-3503-2804-2, Scopus, DOI / Online link : 10.1109/ICOTL59758.2023.10435188",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Gesture Controlled Virtual Mouse using Media Pipe-IEEE Xplore, ISBN:979-8-3503-2805-9, Scopus, DOI / Online link : 10.1109/ICOTL59758.2023.10435281",
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
                            "Application ID": "202541087696",
                            "Title of the Patent": "Cloud-Assisted IIoT Framework for Skin Cancer Detection Using Machine Learning and Mobile Imaging",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Application ID": "202441032522",
                            "Title of the Patent": "Harnessing the power of XceptionNet and MobileNet for Colon Cancer Detection Published",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Application ID": "202341010314",
                            "Title of the Patent": "Security in the Cloud with a Token based Authentication and Key- Agreement Protocol Published",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Awarded NPTEL Discipline Star &ndash; Jul-Dec 2025 for outstanding performance in NPTEL certifications.",
                        "Received Top Performing Mentor Certificate from NPTEL for the course Privacy and Security in Online Social Media (Jul&ndash;Dec 2025).",
                        "Received Domain Certificate in Programming from NPTEL Jan&ndash;April 2025.",
                        "Received Top Performing Mentor Certificate from NPTEL for the course Research Methodology (Jul&ndash;Dec 2024).",
                        "Awarded NPTEL Discipline Star &ndash; Jul-Dec 2023 for outstanding performance in NPTEL certifications.",
                        "Awarded the Yuva Acharya Award at the All-India level Education and Research Award Ceremony on 4 September 2022, in the presence of Dr. Buddha Chandrashekar (Chief Coordinating Officer, AICTE) and Prof. K. Hemachandra Reddy (Chairman, APSCHE)."
                    ]
                }
            ]
    },

    "Mrs. Sangeetha.M": {
        "name": "Mrs. Sangeetha.M",
        "email": "sangeetham@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. Sangeetha.M.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Machine Learning",
                            "Branch": "CSE",
                            "College Name/University": "St. Peters Institute Of Higher Education and Research",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Ganadipathy Tulsi&rsquo;s Jain Engineering College",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "IT",
                            "Branch": "IT",
                            "College Name/University": "Adhiparasakthi College of Engineering",
                            "Year of Passing": "2011"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=59005990700",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/461675",
                        "Google scholar : https://scholar.google.com/citations?user=4AP93W8AAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 3"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026-27",
                            "Author Position": "2",
                            "Details of Research Publication": "Meta-learning for malaria diagnosis: evaluating stacking models for enhanced classification performance https://doi.org/10.11591/eei.v14i6.10158",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "BRAIN-META: A reproducible CNN&ndash;vision transformer meta-ensemble pipeline for explainable brain tumor classification https://doi.org/10.1016/j.mex.2025.103769",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "Enhancing voltage stability in active distribution networks through solar PV integration 10.11591/ijpeds.v16.i2.pp1137-1146",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "Split Ring Resonator Printed Microstip Based Antenna array for Satellite and Radar Applications https://doi.org/10.14447/jnmes.v28i1.a03",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Advanced Statistical and Nonlinear Analysis Techniques for Deep Learning in MBA Education https://doi.org/10.52783/cana.v31.1282",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Improving the Performance of Machine Learning with Sequential Feature Selection and Grid Search doi:10.15199/48.2024.07.29",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Exploring Feature Relationships in Brain Stroke Data Using Polynomial Feature Transformation and Linear Regression Modeling https://doi.org/10.53759/7669/jmc202404107",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Deep learning algorithms for the detection and categorization of pneumonia in chest X-rays 10.1201/9781003559085-114",
                            "Indexing": "Taylor & Francis",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Inherited Eye Diseases Recognition in Childrens Age using Pupilometry 10.1109/CISCSD63381.2024.00048",
                            "Indexing": "IEEE",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Early prediction of chronic heart disease with recursive feature elimination and supervised learning techniques http://doi.org/10.11591/ijai.v13.i1.pp730-736",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "6",
                            "Details of Research Publication": "Consistency, local stability, and approximation of Shapash explanation 10.12928/TELKOMNIKA.v22i3.25560",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "5",
                            "Details of Research Publication": "Evaluation of Adaptive Synthetic Resampling Technique for Imbalanced Breast Cancer Identification 10.1016/j.procs.2024.04.095",
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
                            "Academic Year": "2023-24",
                            "Application ID": "202341042519A",
                            "Title of the Patent": "Artificial Neural Network Based Capacitance Prediction Model for Optimal Voltage Control Generator",
                            "Status": "Filed"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Received Discipline Star From NPTEL during Jul-Dec 2025",
                        "Received Instructor Crediantials From CISCO for CCNAv7: Introduction to Networks Module"
                    ]
                }
            ]
    },

    "Mrs. M. Bommy": {
      name: "Mrs. M. Bommy",
      designation: "Asst. Professor",
      email: "bommym@mits.ac.in",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/DSC_7284.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Computer Science and Engineering", "Branch": "Computer Science and Engineering", "College Name/University": "NIT, Puducherry", "Year of Passing": "Pursuing"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "Computer Science and Engineering", "Branch": "Computer Science and Engineering", "College Name/University": "C.Abdul Hakeem College Of Engineering And Technology, Melvisharam.", "Year of Passing": "2011"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "Computer Science and Engineering", "Branch": "Computer Science and Engineering", "College Name/University": "Adhiparasakthi College Of Engineering, G.B.Nagar, Kalavai.", "Year of Passing": "2009"}
          ]
        },
        {
          title: "Research Areas",
          content: "IoT, Machine Learning, Deep Learning, Cyber Security"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "http://www.scopus.com/authid/detail.url?authorId=57193998553"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/280443"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.co.in/citations?user=RvETBQgAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "1"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "4", "Details of Research Publication": "An enhanced key schedule mechanism to improve the security strength of the data encryption standard algorithm. Vol. 14, No. 4, August 2025, pp. 3277~3288 ISSN: 2302-9285, DOI: 10.11591/eei.v14i4.9712", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Amharic event text classification from social media using hybrid deep learning. Vol. 15, No. 2, April 2025, pp. 2264~2270 ISSN: 2088-8708, DOI: 10.11591/ijece.v15i2. pp2264-2270", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Advanced Feature Learning for Multi-Scenario Rankings: The Maria Framework for Product Recommendations.https://doi.org/10.1063/5.0262223", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "2", "Details of Research Publication": "Consistency, local stability, and approximation of Shapash explanation.DOI: 10.12928/TELKOMNIKA.v22i3.25560", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "2", "Details of Research Publication": "Revolutionizing Presence Management with Facial Recognition.DOI: 10.1109/ICCSP60870.2024.10543474", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Mobile Ad Hoc Networks Supporting Adaptive Threat Detection through Intrusion Detection Effective Use of Machine Learning for Cyber Defense.DOI: 10.1109/ICSES60034.2023.10465320", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Prediction of Agricultural Surplus Labor Transfer Trend Based on Big Data Fuzzy Clustering Algorithm.DOI: 10.1109/SmartTechCon57526.2023.10391711", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "4", "Details of Research Publication": "Hybrid TABU search with SDS based feature selection for lung cancer prediction.https://doi.org/10.1016/j.ijin.2022.09.002", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2016", "Author Position": "1", "Details of Research Publication": "Hybrid multipath routing protocols for route discovery in mobile ad hoc networks", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2022-23", "Application ID": "202241043334 A", "Title of the Patent": "Automated Economy Risk Prediction in Sentiment Analysis", "Status": "Published"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "NPTEL Domain Scholar in Programming April 2024.",
            "NPTEL Discipline Star Jul-December 2023."
          ]
        }
      ]
    },

    "Mrs. Thripthi P. Balakrishnan": {
      name: "Mrs. Thripthi P. Balakrishnan",
      designation: "Asst. Professor",
      email: "thripthipb@mits.ac.in",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/DSC_7287.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "CSE", "Branch": "CSE", "College Name/University": "Amrita Vishwa Vidyapeetham, Chennai", "Year of Passing": "Pursuing"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "CSE", "Branch": "CSE", "College Name/University": "Shree Venkateswara HiTech Engineering College, Anna University", "Year of Passing": "2017"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "CSE", "Branch": "CSE", "College Name/University": "MES College Of Engineering Kuttipuram, Calicut University", "Year of Passing": "2007"}
          ]
        },
        {
          title: "Research Areas",
          content: "Deep Learning"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=58899124400"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/myprofile"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=tSinQTIAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "1"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Explainable AI for Decision-Making: A Hybrid Approach to Trustworthy Computing. International Journal of Computational and Experimental Science and Engineering, 11(2). https://doi.org/10.22399/ijcesen.1684", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "2", "Details of Research Publication": "Enhancing the Food Processing in Industry 5.0 Based on Artificial Intelligence. International Journal of Intelligent Systems and Applications in Engineering, 12(12s), 231–239. Retrieved from https://ijisae.org/index.php/IJISAE/article/view/4508", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Best Teacher Award from SSM Polytechnic College on year 2018.",
            "Wipro Certified Faculty - 2023",
            "NPTEL Discipline Star – July – December 2025"
          ]
        }
      ]
    },

    "Mrs. Deepthi. P": {
        "name": "Mrs. Deepthi. P",
        "email": "deepthip@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Deepthi - CSE.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Amrita Vishwa Vidyapeetham",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "University of Calicut",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "IT",
                            "Branch": "IT",
                            "College Name/University": "Cochin University of Science and Technology",
                            "Year of Passing": "2005"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=56724220700",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/461576",
                        "Google scholar : https://scholar.google.com/citations?user=NQEx3rgAAAAJ&hl=en&authuser=2",
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
                            "Details of Research Publication": "Hybrid Swarm Intelligence-Based Neural Framework for Optimizing Real- Time Computational Models in Engineering Systems, International Journal of Computational and Experimental Science and Engineering (IJCESEN) Vol. 11-No.1 2025",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancing Agricultural Productivity : Development of a smart farming monitoring system with ESP32anf fuzzy logic contro, Nanotechnology Perceptions , Vol 20, S5, 2024",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Neurovascular Crisis Prediction Using Machine Learning, African Journal of Biological Science (AJBS) Volume 6, Issue 10, 2024",
                            "Indexing": "Scopus",
                            "Publication": "Confrence Proceeings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "A Comparative Study on Machine Learning and Fuzzy Logic based Approach for Enhancing Credit Card Fraud Detection, International Journal of Intelligent Systems and Applications in Engineering(IJISAE), Vol 12 January 2024",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Secured Elite + Silver with Topper of 1% in E Business (IIT Kharagpur) in Swayam NPTEL July-Oct 2024",
                        "Secured Elite in Introduction to Programming in C (IIT Kanpur) in Swayam NPTEL Jan-March 2024",
                        "Secured Elite in Privacy and Security in Online Social Media (IIIT Hyderabad ) in Swayam NPTEL July-October 2025",
                        "Top Performing Mentor in E Business",
                        "Top Performing Mentor in Privacy and Security in Online Social Media",
                        "Completed Swayam NPTEL courses in Cloud Computing( IIT Kharagpur - Jan-April 2025) and Software Engineering (IIT Kharagpur -October 2025)",
                        "Received incentives for Paper publication and for securing Topper in NPTEL Examination"
                    ]
                }
            ]
    },

    "Mr. Anandaraj B": {
        "name": "Mr. Anandaraj B",
        "email": "anandarajb@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Anandaraj B.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "SRM Institute of Science & Technology",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Information Technology",
                            "Branch": "Information Technology",
                            "College Name/University": "Satyabama University",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Karpaga Vinayaga College of Engineering and Technology",
                            "Year of Passing": "2005"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine Learning, Deep Learning& Bio-informatics"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58368087700",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/273414",
                        "Google scholar : https://scholar.google.co.in/citations?hl=en&user=zEseUGkAAAAJ",
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
                            "Details of Research Publication": "Autonomous AI controlled cyber attack prediction system &Acirc; design https://doi.org/10.1109/INCET64471.2025.11139939",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Smart agriculture yield prediction using machine learning https://doi.org/10.1063/5.0248222",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Optimizing Early Detection of Lung Disease Through Data-Driven Approaches https://doi.org/10.1109/IEMENTech65115.2025.10959696",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Innovative Approach for Early Heart Disease Prediction: Gaussian Mixture Model and K-Nearest Neighbour https://doi.org/10.1109/IDCIOT64235.2025.10914967",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Parkinson&rsquo;s Disease Detection using Deep Learning Grenze ID: 01.GIJET.10.2.79",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Enhancing MANET Battery Life and Performance Using Cluster Node https://doi.org/10.14445/22315381/IJETT-V72I5P137",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Vision Transformer Approaches for Diabetic Retinopathy https://doi.org/10.1109/ICAICCIT64383.2024.10912186",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "IoT and Data Analytics in Healthcare https://doi.org/10.1109/ICSTSDG61998.2024.11026330",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Real World Autonomous IoT Based Data Privacy Protection Using Machine Learning https://doi.org/10.1109/ICONSTEM56934.2023.10142934",
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
                            "Application ID": "2024410881913",
                            "Title of the Patent": "SYSTEM AND METHOD FOR REAL-TIME MACHINE LEARNING IN DISTRIBUTED NETWORKS",
                            "Status": "Published"
                        },
                        {
                            "S.No": "",
                            "Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Application ID": "202241043334",
                            "Title of the Patent": "AUTOMATED ECONOMY RISK PREDICTION IN SENTIMENT ANALYSIS",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mrs. S. Varshadevi": {
        "name": "Mrs. S. Varshadevi",
        "email": "varshadevis@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. S. Varshadevi.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Machine Learning & Deep Learning",
                            "Branch": "CSE",
                            "College Name/University": "Dr. M.G.R. Educational and Research Institute",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Mahendra Engineering College",
                            "Year of Passing": "2023"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Mahendra Institute of Technology, Anna University",
                            "Year of Passing": "2019"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine Learning & Deep Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=59335227600",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/673287",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=V9gRa50AAAAJ",
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
                            "Author Position": "3",
                            "Details of Research Publication": "Implementing a Novel Blockchain Algorithm for Enhanced Data Integrity in Cloud Systems DOI: 10.1109/TQCEBT59414.2024.10545205",
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
                            "Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Application ID": "467134-001",
                            "Title of the Patent": "Mice Behavior Monitoring Device",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Application ID": "202441053839 A",
                            "Title of the Patent": "Enhancing Network Security Function via Best-Secure Algorithm",
                            "Status": "Granted"
                        }
                    ]
                }
            ]
    },

    "Mrs. P. Jayaselvi": {
        "name": "Mrs. P. Jayaselvi",
        "designation": "Asst. Professor",
        "email": "jayaselvip@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. P. Jayaselvi.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "IOT",
                            "Branch": "CSE",
                            "College Name/University": "SRM Institute of Science and Technology",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "BS Abdur Rahman University",
                            "Year of Passing": "2011"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "IT",
                            "Branch": "IT",
                            "College Name/University": "Karunya Institute Of Technology and Sciences, Anna University",
                            "Year of Passing": "2007"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine Learning, Medical Image Analysis"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57214996089",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/561265",
                        "Google scholar : https://scholar.google.co.in/citations?user=5te1J28AAAAJ \u202c\u202c\u202c",
                        "h-Index (As per Scopus Data) : 1"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "3",
                            "Details of Research Publication": "Transformers-Based Multimodal Deep Learning for Real-Time Disaster Forecasting and Adaptive Climate Resilience Strategies",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "4",
                            "Details of Research Publication": "Blockchain-Based Mass Spectrometry Data Processing And Feature Extraction In Drug Quality Control With Data Mining Model For Deep Learning Process",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "3",
                            "Details of Research Publication": "Real time text detection and shopping assistance for the visually impaired",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                }
            ]
    },

    "Mr.  L.  Arul Jaya Prakash": {
        "name": "Mr.  L.  Arul Jaya Prakash",
        "designation": "Asst. Professor",
        "email": "aruljayaprakashl@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/DSC_7919.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Group": "CSE",
                            "College Name/University": "Ramco Institute of Technology, Anna University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Group": "CSE",
                            "College Name/University": "Anna University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "CSE",
                            "Group": "CSE",
                            "College Name/University": "DMI College of Engineering",
                            "Year of Passing": "2017"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Group": "CSE",
                            "College Name/University": "Christ the King Engineering",
                            "Year of Passing": "2015"
                        }
                    ]
                }
            ]
    },

    "Mrs. R. Kavi Priya": {
        "name": "Mrs. R. Kavi Priya",
        "email": "kavipriyar@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. R. Kavi Priya.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "SRM Institute of Science And Technology",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Jayam College of Engineering & Technology, Anna University",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Hindustan College of Engineering, Anna University",
                            "Year of Passing": "2006"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine Learning and Edge Computing"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57951021200",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/563077",
                        "Google scholar :",
                        "h-Index (As per Scopus Data) : 7"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Efficient Power-Aware Protocols for Green Cognitive Radio Networks in Industrial Communications Volume 25(5) (2024) , Year 2024, Pages Pages: 1615 &ndash; 1626",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
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
                            "Application ID": "474933-001",
                            "Title of the Patent": "AI BASED WIRELESS ELECTRICITY CONSUMPTION MONITORING DEVICE",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mr. Vijayaganth. R": {
        "name": "Mr. Vijayaganth. R",
        "designation": "Asst. Professor",
        "email": "vijayaganthr@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/DSC_7302.JPG",
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
                            "Course": "M.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Faculty of Engineering and Technology, Annamalai University",
                            "Year of Passing": "2004"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "V.R.S College of Engineering and Technology, Madras University",
                            "Year of Passing": "2001"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Artificial Intelligence Machine Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/feedback/author/reviewAuthorProfile.uri?authorIds=58541214900",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/563187",
                        "Google scholar : https://scholar.google.com/citations?user=3_zwa9kAAAAJ&hl=en",
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
                            "Author Position": "3",
                            "Details of Research Publication": "Deep Vision Transformer with Tasmanian Devil Optimization for Multiclass Paddy Disease Detection and Classification for Precision Agriculture",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Revolutionizing IoT Network Security with Deep Learning-Anomaly Detection Mode",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedimgs",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Brain Haemorrhage Detection Using Capsnet",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedimgs",
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
                            "Application ID": "202541020125",
                            "Title of the Patent": "AI-Enhanced Autonomous Underwater Exploration Apparatus",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Application ID": "202341005350",
                            "Title of the Patent": "AI & ML Based System for Prediction of Wind Power for Multi-Turbine",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mrs. G. Vasundara Devi": {
        "name": "Mrs. G. Vasundara Devi",
        "designation": "Asst. Professor",
        "email": "vasundharadevig@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. G. Vasundara Devi.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Machine learning with Security",
                            "Branch": "CSE",
                            "College Name/University": "National Institute of Technology, Puducherry",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Madanapalle Institute of Technology & Science, JNTUA Anathapur",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Gates Institute of Technology, JNTU(Anantapur)",
                            "Year of Passing": "2008"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Deep Learning, Machine Learning, Security"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57956059800",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/273657",
                        "Google scholar : https://scholar.google.com/citations?user=6a3cXvAAAAAJ&hl=en",
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
                            "Details of Research Publication": "Advancements In Quantum Computing With The Development of Topological Qubits For Scalable And Fault-Tolerant Systems",
                            "Indexing": "Scopus",
                            "Publication": "Journal",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Cloud Computing Based Medical Activity Supporting System",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancing Road Safety With Proactive Warning Systems at Blind Curves Using IoT",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Integrating the Bigdata and Deep Learning Analysis Human Movement to Improve the Sports",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-2023",
                            "Author Position": "2",
                            "Details of Research Publication": "A Hybrid Model for Skin Disease Classification using Transfer Learning",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "NPTEL Discipline Star Certification for consistent academic performance in NPTEL courses.",
                        "NPTEL Domain Certification in Programming Domain through successful completion of multiple NPTEL courses."
                    ]
                }
            ]
    },

    "Mr. A. Kumar": {
        "name": "Mr. A. Kumar",
        "email": "akuthotakumar@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/DSC_7323.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "National Institute of Technology, Puducherry",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Sree Rama Engineering college, JNTUA",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "IT",
                            "Branch": "IT",
                            "College Name/University": "Sri Venkatesa Perumal College of Engineering and Technology, JNTUA",
                            "Year of Passing": "2012"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine Learning, AI"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58815351200",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/461626",
                        "Google scholar : https://scholar.google.com/citations?user=Ra9uUp4AAAAJ&hl=en",
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
                            "Author Position": "4",
                            "Details of Research Publication": "&quot;Journey Craft: A Next-Gen Travel and Tourism Management System. https://link.springer.com/chapter/10.1007/978-981-96-4410-0_14",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Enhancing Flight Delay Prediction and Classification Using a Hybrid Bi-LSTM: Machine Learning DOI: https://doi.org/10.52783/cana.v31.1235",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Enhancing Lung Segmentation Through Preprocessing of Medical Data Using Convolutional Neural Networks DOI: 10.1109/ICCCMLA58983.2023.10346717 EID:2-s2.0-85182515379 Part of ISBN: 9798350338287",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Machine Learning Models for Classification of Sensitive Financial Documents DOI: 10.1109/ICCCMLA58983.2023.10346685 EID:2-s2.0-85182503464 Part of ISBN: 9798350338287",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Acted as a reviewer for an IEEE international conference on &ldquo;Optimization Techniques for Learning(ICOTL-2023) Organized by School of Computers, MITS, Madanapalle during 7th-8th December 2023.",
                        "Awarded the Best Paper Award for the conference paper Face Detection and Crowd Monitoring System in Public Places presented in international conference of Embracing the Digital Horizon held on 13-14 march 2024.",
                        "Awarded the Best Teacher Award for the Academic year 2023-24."
                    ]
                }
            ]
    },

    "Mrs. V. Geetha": {
        "name": "Mrs. V. Geetha",
        "designation": "Asst. Professor",
        "email": "geethav@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/V. Geetha.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "NIT, Mizoram",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Madanapalle Institute of Technology & Science, JNTUA Anathapur",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "IT",
                            "Branch": "IT",
                            "College Name/University": "Madanapalle Institute of Technology & Science, JNTUA Ananthapur",
                            "Year of Passing": "2011"
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
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57979112300",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/273928",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=9AdbqEgAAAAJ",
                        "h-Index (As per Scopus Data) : 1"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "3",
                            "Details of Research Publication": "Measurement of oxygen content in water with purity through soft sensor model",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Received an appreciation letter for the Best Researcher Award in the academic year 2022-23.",
                        "Received the NPTEL Certificate of Appreciation award as a Mentor for German - I course in the academic year 2024-25.",
                        "Received NPTEL Discipline star in the academic year 2024-25(Jan &ndash; Apr)."
                    ]
                }
            ]
    },

    "Mr. Ramalingam. D": {
        "name": "Mr. Ramalingam. D",
        "email": "ramalingamd@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Ramalingam. D.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Adhiparasakthi Engg. College, Anna University",
                            "Year of Passing": "2011"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Saveetha Engg. College, Anna University",
                            "Year of Passing": "2006"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=8617664700",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/305391",
                        "Google scholar : https://scholar.google.co.in/citations?user=LTylkDsAAAAJ",
                        "h-Index (As per Scopus Data) : 1"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "2",
                            "Details of Research Publication": "Convolutional Neural Network-based Covid-19 Analysis with Internet of Things Date Added to IEEE Xplore: 24 February 2023 ISBN Information: DOI: 10.1109/ICATIECE56365.2022.10047327 ISBN Information:Electronic ISBN:978-1-6654-9396-3 Print on Demand (PoD) ISBN:978-1-6654-9397-0",
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
                            "Affiliation": "others",
                            "Academic Year": "2024",
                            "Application ID": "202441022998",
                            "Title of the Patent": "BULK SMS COMMUNICATION PORTAL",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "others",
                            "Academic Year": "2024",
                            "Application ID": "202341080375",
                            "Title of the Patent": "DESIGN OF IOT-DRIVEN CROP RECOMMENDATION SYSTEM FOR SMART AGRICULTURE USING MACHINE LEARNING",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "others",
                            "Academic Year": "2023",
                            "Application ID": "202341032298",
                            "Title of the Patent": "AN ARTIFICIAL INTELLIGENCE - POWERED FRAUD DETECTION AND PREVENTION SYSTEM AND METHOD THEREOF",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mr. Thangarasan T": {
        "name": "Mr. Thangarasan T",
        "email": "thangarasant@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/DSC_7309.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.E.",
                            "Specialization": "Computer Science and Engineering",
                            "Branch": "Computer Science and Engineering",
                            "College Name/University": "Francis Xavier Engineering College",
                            "Year of Passing": "2012"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Information Technology",
                            "Branch": "Information Technology",
                            "College Name/University": "Venkateshwara Engineering College",
                            "Year of Passing": "2010"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/58881930500",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/258470",
                        "Google scholar : https://scholar.google.com/citations?user=XQTapesAAAAJ&hl=en",
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
                            "Author Position": "5",
                            "Details of Research Publication": "Non-contact Real Time Digital Distance Measurement System for Vehicle Applications",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Advancing Clinical Diagnosis Through Intelligent Artificial Intelligence: A ResNet-Based Approach for Cardiomegaly Detection https://doi.org/10.1063/5.0247056",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancing Bayesian Optimization with Structural Domain Knowledge for Efficient Search https://doi.org/10.1063/5.0262551",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "5",
                            "Details of Research Publication": "Enhancing Oxidation Reactions Catalytic Systems Using Fuzzy and Hybrid Neural Networks",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Predicting Severity Of Osteoarthritis Using Recurrent Convolutional Neural Networks (Rcnn) And Medical Imaging Data https://doi.org/10.70135/seejph.vi.894",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Introduction to smart grid and the need for green solutions https://doi.org/10.1016/B978-0-443-28951-4.00002-2",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Research and Application of Boundary Optimization Algorithm of Forest Resource Vector Data Based on Convolutional Neural Network https://doi.org/10.1109/SmartTechCon57526.2023.10391589",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Code word Based Bi-Server Authentication and Key Exchange Encryption Technique https://doi.org/10.1109/ICOTL59758.2023.10435192",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Modified Imperialist Competitive Algorithm (MICA) For Smart Heart Disease Prediction in IoT System https://doi.org/10.1109/ICDCECE57866.2023.10150732",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "4",
                            "Details of Research Publication": "Hardiness sensing for susceptibility using American Fuzzy Lop https://doi.org/10.1051/itmconf/20213701003",
                            "Indexing": "ESCI",
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
                            "Academic Year": "2021-22",
                            "Application ID": "202141001903",
                            "Title of the Patent": "Diagnosing and Analyzing the Health Care Symptoms using Apache Hadoop Framework from Medical Big Data",
                            "Status": "Filed"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Application ID": "202041017061",
                            "Title of the Patent": "Information Sensing by Radio Frequency of RFID with Authentication Using Arduino",
                            "Status": "Filed"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Recognized as a Domain Scholar in Programming by NPTEL (July&ndash;December 2024).",
                        "Recognized as a Discipline Star by NPTEL (January&ndash;April 2024).",
                        "Recognized as a Motivated Learner by NPTEL (July&ndash;December 2024)."
                    ]
                }
            ]
    },

    "Mr. D. M. Abhinay Kanth": {
        "name": "Mr. D. M. Abhinay Kanth",
        "designation": "Asst. Professor",
        "email": "abhinaykanthdm@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. D. M. Abhinay Kanth.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Madanapalle Institute of Technology & Science, JNTUA",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Dr.Pauls Engineering College, Anna University, Chennai",
                            "Year of Passing": "2011"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Data Mining, AI, Machine Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57955158400",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/273888",
                        "Google scholar : https://scholar.google.co.in/citations?user=LxktXxUAAAAJ",
                        "h-Index (As per Scopus Data) : 1"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Implementing Machine Learning Techniques for the Anticipation of Maintenance Requirements in Naval Assets",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "A Hybrid Model for Skin Disease Classification using Transfer Learning",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                }
            ]
    },

    "Mr. K H Shabbeer Basha": {
        "name": "Mr. K H Shabbeer Basha",
        "email": "shabbeerkh@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/shaber.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Madanapalle Institute of Technology & Science, Madanapalle",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Dr.Pauls Engineering College, Pondicherry.",
                            "Year of Passing": "2008"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine Learning, Networks"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58885545000",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/282001",
                        "Google scholar : https://scholar.google.com/citations?user=Sg90hmIAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 1"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026",
                            "Author Position": "2",
                            "Details of Research Publication": "Cloud and IoT-Driven Smart Irrigation: A Modern Approach to Water Management in Agriculture. IAENG International Journal of Computer Science 53.1 (2026).",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026",
                            "Author Position": "5",
                            "Details of Research Publication": "Base-Station Slot Antenna for Milli-Meter Wave Application Using SIW Technology. 2025 10th International Conference on Smart Structures and Systems (ICSSS). IEEE, 2025.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "-"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026",
                            "Author Position": "5",
                            "Details of Research Publication": "Early Parkinson&rsquo;s disease diagnosis for analyzing handwritten spiral and wave images using deep learning models. International Journal of Nutrition, Pharmacology, Neurological Diseases 16.1 (2026): 110-119.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026",
                            "Author Position": "1",
                            "Details of Research Publication": "Unsupervised Image Segmentation through Contrastive Learning and Graph-Based Clustering. International Journal of Advances in Sinal and Image Sciences 11.2 (2025): 80-93.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Synergistic Fusion of Ultrasound Image Augmentation, Ensemble Learning, and Transfer Learning for Robustness Against Overfitting in Machine Learning Model Technique",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "6",
                            "Details of Research Publication": "Hybrid Deep Ensemble Framework for Automated Skin Cancer Detection using Advanced Optimization and Deep Learning Techniques",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Advanced Wireless And Mobile Networks",
                            "Indexing": "",
                            "Publication": "Book",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Analysis of Voltage Source Inverter with Photovoltaic Renewable Energy Source for Improving Power Quality in Solar",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Mental Health Prediction Of Employee At Workplace Using Ml",
                            "Indexing": "UGC",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2015",
                            "Author Position": "1",
                            "Details of Research Publication": "Protecting Frequent Pattern Using Distributed Security On M-Clouds",
                            "Indexing": "UGC",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        }
                    ]
                },
                {
                    "title": "Patent",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2026",
                            "Application ID": "202641021487 A",
                            "Title of the Patent": "A System And Method For Generating High-Fidelity Synthetic Training Data Using Generative Adversarial Networks To Enhance Autonomous Vehicle Perception",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Got appreciation award in recognition of role as a MENTOR for the NPTEL online certification course &lsquo;Managing Intellectual Property in Universities&rsquo;, during academic year JUL-DEC 2024.",
                        "Got appreciation award in recognition of role as a MENTOR for the NPTEL online certification course &lsquo;GERMAN-I&rsquo;, during academic year JUL-DEC 2024."
                    ]
                }
            ]
    },

    "Mr. T. Murali": {
        "name": "Mr. T. Murali",
        "designation": "Asst. Professor",
        "email": "muralit@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Murali CSE.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "SRM Institute of Science And Technology",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Paavai Engineering College, Anna University",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Erode Sengunthar Engineerng College, Anna University",
                            "Year of Passing": "2006"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Deep Learning, Natural Language Processing"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus :",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/599714",
                        "Google scholar : https://scholar.google.com/citations?user=2VdT2ToAAAAJ=en&user=2VdT2ToAAAAJ",
                        "h-Index (As per Scopus Data) :"
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2022-2023",
                            "Application ID": "202341001643",
                            "Title of the Patent": "System and Methods for Controlling Virtual Mouse Using Hand Gesture using AI",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2022-2023",
                            "Application ID": "202341001644",
                            "Title of the Patent": "Design System of IoT driven Smart Eco Inverter",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mr. K. Manju Preetham": {
        "name": "Mr. K. Manju Preetham",
        "designation": "Asst. Professor",
        "email": "kmanjupreetham@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/9c0fd543b92b2b9fb41db5a88b0eb090.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Group": "CSE",
                            "College Name/University": "Madanapalle Institute and Technology & Science, JNTUA",
                            "Year of Passing": "2017"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Group": "CSE",
                            "College Name/University": "Madanapalle Institute and Technology & Science, JNTUA",
                            "Year of Passing": "2009"
                        }
                    ]
                }
            ]
    }
  */
};

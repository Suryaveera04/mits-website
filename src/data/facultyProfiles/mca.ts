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

export const mcaProfiles: Record<string, FacultyProfile> = {
  /*
  // Static faculty profile data preserved in comments (Dynamic profiles fetched from EngageAI database API)
"Dr. S. V. S. Ganga Devi": {
        "name": "Dr. S. V. S. Ganga Devi",
        "email": "drgangadevisvs@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. S. V. S. Ganga Devi.JPG",
        "designation": "Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Data Mining",
                            "Branch": "Computer Science",
                            "College Name/University": "Sri Padmavathi Mahila Visva Vidyalayam, Tirupathi",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "M.C.A.",
                            "Specialization": "Computer Applications",
                            "Branch": "M.C.A.",
                            "College Name/University": "Sri Padmavathi Mahila Visva Vidyalayam, Tirupathi",
                            "Year of Passing": "1993"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "M.P.E.",
                            "Branch": "B.Sc",
                            "College Name/University": "S. V. University, Tirupathi",
                            "Year of Passing": "1988"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine Learning, Deep Learning, Soft computing and Advanced Databases"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57210798856",
                        "Vidwan : https://mits.irins.org/profile/274353",
                        "Google scholar : https://scholar.google.co.in/citations?user=ICFYOX8AAAAJ&hl=en",
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
                            "Author Position": "1",
                            "Details of Research Publication": "An enhanced neural network model with hybrid sunflower and Grey Wolf Optimization for outlier detection. https://doi.org/10.1007/s13198-026-03341-6",
                            "Indexing": "ESCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancing Cyber-Physical System Security with NFT-Based Asset Digitization and Authentication. DOI: 10.1109/ICKECS65700.2025.11035347",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Next-Generation Inventory Management: Blockchain-Infused GAN Forecasting with ECDH Security Layer. DOI: 10.1109/ICoACT63339.2025.11005085",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancement of Image Processing based on Deep Learning Backpropagation Approach. https://ijisae.org/index.php/IJISAE/article/view/4198",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Introduction to Graph Neural Network: Types and Applications. DOI: 10.4018/978-1-6684-6903-3.ch003",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "IoT-driven automatic vehicle accident rescue system implemented with Proteus. DOI: 10.1109/ICOTL59758.2023.10435294",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Cluster and Outlier Analysis for Ground Water Quality Data in the Regions of Kadapa District in Andhra Pradesh. https://doi.org/10.2174/1872212113666190211144935",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Analysing ground water quality in the regions of Kadapa District using supervised learning methods. https://doi.org/10.1007/978-3-030-46943-6_34 Scopus",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "Random forest advice for water quality prediction in the regions of Kadapa District. DOI: 10.35940/ijitee.F1298.0486S419",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        }
                    ]
                },
                {
                    "title": "Research Projects & Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2017",
                            "Funded Project /Event": "Funded Project",
                            "Role": "P.I.",
                            "Title of the Project/Event": "Analyzing Ground water quality using data mining techniques for the regions of KADAPA district AP and developing a portal for drinking water supply management system",
                            "Amount in Rs. /-": "3,30,000",
                            "Funding Agency": "UGC (SERO)"
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
                            "Application ID": "202241047490",
                            "Title of the Patent": "IOT Based stress level Identification in EEG signal using Artificial Intelligence technique.",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Dr. N. Naveen Kumar": {
        "name": "Dr. N. Naveen Kumar",
        "email": "drnaveenkumarn@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Naveen Kumar.JPG",
        "designation": "Professor &amp; Head",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D",
                            "Specialization": "Image Processing",
                            "Branch": "Computer Science",
                            "College Name/University": "S. V. University, Tirupathi",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "M.C.A.",
                            "Specialization": "Computer Applications",
                            "Branch": "M.C.A",
                            "College Name/University": "MTIM, S.V.University",
                            "Year of Passing": "2008"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Maths, Physics & Chemistry",
                            "Branch": "B.Sc.",
                            "College Name/University": "B. T. College, S.V.University",
                            "Year of Passing": "2005"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Quantum Computing, Artificial Intelligence, Image Processing"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus :",
                        "Vidwan : https://mits.irins.org/profile/274316",
                        "Google scholar : https://scholar.google.com/citations?user=ospnlc4AAAAJ=en&user=ospnlc4AAAAJ",
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
                            "Author Position": "1",
                            "Details of Research Publication": "QuantumResist: Integrating Shor&rsquo;s algorithm, lattice-based cryptography, and quantum error correction for enhanced secure communication in post-quantum cryptography. (2025). The Journal of Supercomputing, 81, Article 1391.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "3",
                            "Details of Research Publication": "Enhanced water quality index prediction using dual-key convolutional transformer autoencoder with poplar optimization. (2025). Franklin Open, 13, 100370",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Optimized intention-adaptive graph neural network for robust failure diagnosis of microservice systems using multimodal data. (2025). Cluster Computing, 28, Article 614. https://doi.org/10.1007/s10586-025-05305-0",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "3",
                            "Details of Research Publication": "Siamese DenseNet: Unveiling interpretable insights in Alzheimer&rsquo;s disease detection through structural MRI with explainable artificial intelligence. (2026). Computers & Electrical Engineering, 129(Part A), 110734",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "4",
                            "Details of Research Publication": "Enhanced mayfly optimization algorithms with pixel-based learning color space data hiding using a CNN&ndash;LSTM network. (2025). IETE Journal of Research, 1&ndash;20. https://doi.org/10.1080/03772063.2025.2531959",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Optimized memory allocation in edge-PLCs using deep Q-networks and bidirectional LSTM with quantum genetic algorithm. (2024). e-Prime: Advances in Electrical Engineering, Electronics and Energy, 10, 100762",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "An efficient approach on image encryption steganography based on 2D SWT with chaotic techniques. (2024). In Proceedings of the 4th International Conference on Soft Computing for Security Applications (ICSCSA) (pp. 479&ndash;486). IEEE. https://doi.org/10.1109/ICSCSA64454.2024.00083",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Stacked Bi-LSTM for advanced toxicity detection in comment classification. (2024). In Proceedings of the IEEE International Conference on Artificial Intelligence in Engineering and Technology (IICAIET) (pp. 337&ndash;342). IEEE. https://doi.org/10.1109/IICAIET62352.2024.10729970",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "A robust method for malware analysis using stacking classifiers and dendrogram visualization. (2024). International Journal of Information Technology. https://doi.org/10.21203/rs.3.rs-3969781/v1",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "The improved Mask R-CNN object recognition for the visually impaired community. (2023). Indian Journal of Natural Sciences",
                            "Indexing": "WoS",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019",
                            "Author Position": "5",
                            "Details of Research Publication": "Dynamic packet scheduler for queuing real-time and non-real-time internet traffic. (2019). International Journal of Recent Technology and Engineering, 8(3)",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Optimization of effectual sentiment analysis in film reviews using machine learning techniques. (2024). Computational Intelligence Methods for Sentiment Analysis in Natural Language Processing Applications 2024, Pages 145-163",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "3",
                            "Details of Research Publication": "21 o-inspired blockchain for healthcare workers: Insights on COVID-19. (2024). Bio-Inspired Computational Paradigms, 2024",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Author Position": "4",
                            "Details of Research Publication": "A comprehensive review on blockchain-based Internet of Things (BIoT): Security threats, challenges, and applications. (2022). In IGI Global. IGI Global Publishers.",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
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
                            "Application ID": "397579-001",
                            "Title of the Patent": "Ultrasonic Rail Track Testing Device",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Application ID": "397579-001",
                            "Title of the Patent": "An Effective Lung Transplantation Using Machine Learning Based Techniques",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Received India Star Independence award for appreciable work in Teaching and Social work on the occasion of 74th india independence day.",
                        "Received I2OR Bright Educator Award 2018 for the academic year 2018-2019.",
                        "Guest Lecture on &ldquo;Artificial Intelligence & IoT&rdquo; at PVKN, Govt. Degree College, Chittoor on 13-04-2023.",
                        "Guest Lecture on &ldquo;Data Mining&rdquo; at S.R.Govt.Degree College, Punganur on 09-10-2015.",
                        "Guest Lectures on &ldquo;Data Warehousing & Data Mining&rdquo; for the MSC students at Dravidian University, Kuppam from 22-11-2014 to 23-11-2014."
                    ]
                }
            ]
    },

    "Dr. K. Nirmala Devi": {
      name: "Dr. K. Nirmala Devi",
      designation: "Assoc. Professor",
      email: "drnirmaladevik@mits.ac.in",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/Dr. K. Nirmala Devi.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Computer Applications", "Branch": "Computer Applications", "College Name/University": "Anna University", "Year of Passing": "2016"},
            {"S.No": "2", "Course": "M.Phil.", "Specialization": "Computer Science", "Branch": "Computer Science", "College Name/University": "Kongu Arts And Science College, Bharathiar University", "Year of Passing": "2006"},
            {"S.No": "3", "Course": "M.Sc.", "Specialization": "Information Science & Management", "Branch": "Information Science & Management", "College Name/University": "Kongu Arts And Science College, Bharathiar University", "Year of Passing": "2004"},
            {"S.No": "4", "Course": "B.C.A.", "Specialization": "Computer Applications", "Branch": "B.C.A.", "College Name/University": "Kongu Arts And Science College, Bharathiar University", "Year of Passing": "2002"}
          ]
        },
        {
          title: "Research Areas",
          content: "Network, Cloud, Artificial Intelligence"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=58990499000"},
            {"Identifier": "Vidwan", "Link": ""},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=WzB0BRUAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "2"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "6", "Details of Research Publication": "Intelligent 5G Evolution: AI-Augmented Hybrid Model with Network Slicing and Autonomous Self-Healing for Future-Ready Connectivity 2025 International Conference on Electronics and Renewable Systems (ICEARS)  Page: 839-846, Published: April 2, 2025", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "3", "Details of Research Publication": "Edge Intelligence Hybrid Framework for Real-Time IoT Applications Using Multi-Stage Adaptive Processing Methods 2025 6th International Conference on Mobile Computing and Sustainable Informatics (ICMCSI) Page: 380-386, Published: Feb. 20, 2025", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "Deep Learning Based Intrusion Detection for IoT Networks 2024 4th International Conference on Ubiquitous Computing and Intelligent Information Systems (ICUIS)  Page: 1690-1694, Published: Feb. 13, 2025", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "4", "Details of Research Publication": "A Virtual Assistance for Visually Impaired People to Recognize Fabric Pattern and Color Using Human Computer Interaction Logic 2024 9th International Conference on Communication and Electronics Systems (ICCES) Page: 01-08, Published: Feb. 6, 2025", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "1", "Details of Research Publication": "Empirical Design of a Robotic Arm Control System Based on Flex Sensors with Artificial Intelligence, 5th International Conference on Expert Clouds and Applications (ICOECA 2025)", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "5", "Details of Research Publication": "Prompt Engineering Optimization in Multimodal GPT Systems for Real-Time Decision Making 2025 4th International Conference on Innovative Mechanisms for Industry Applications (ICIMIA)  Page: 279-284, Published: Oct. 20, 2025", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Blood Cell Classification and Counting in Hematology through Deep Learning 2024 4th International Conference on Sustainable Expert Systems (ICSES) Page: 813-819, Published: Dec. 3, 2024", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Harnessing the Power of Android Smartphones to Enhance the Lives of Visually Impaired Individuals: A User-Centered Approach to Developing a GPS-Enabled Mobile Application Journal of Computational Analysis and Applications (None ) Page: 3692-3709, Volume: 33, Issue: 8. Published: Aug. 13, 2024", "Indexing": "Scopus", "Publication": "Journal Article", "Journal Quartile": "Q3"},
            {"S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Foundation of Data Science", "Indexing": "", "Publication": "Book", "Journal Quartile": "None"},
            {"S.No": "10", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Intrusion Detection Mechanism Using Deep Learning 2024 International Conference on IoT Based Control Networks and Intelligent Systems (ICICNIS) Page: 188-194, Published: Jan. 10, 2025", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "11", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "3", "Details of Research Publication": "Fortifying Edge Cloud Systems for Enhanced 2024 International Conference on Advances in Computing, Communication and Materials (ICACCM) Page: 1-6, Published: June 2, 2025", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Research Projects & Events",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2025-26", "Type": "Workshop", "Role": "Co-Coordinator", "Title": "AI In Education: Shaping the Next-Gen  Learners", "Amount": "5,000", "Agency": "Institutional Fund"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2025", "Type": "FDP", "Role": "Coordinator", "Title": "Innovative Applications of Artificial Intelligence in Cyber-Security", "Amount": "40,000", "Agency": "Institutional Fund"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2024", "Type": "Workshop", "Role": "Co-Coordinator", "Title": "Unlock The Secrets of Research Paper Writing", "Amount": "15,000", "Agency": "Institutional Fund"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "202541070562", "Title of the Patent": "Smart Intelligent IOT-Based Farming System for Crop Health Monitoring and Soil Health Management  And Prevention Causes", "Status": "Published"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2024", "Application ID": "202441052288", "Title of the Patent": "IoT And Block Chain Based Electronic Health Device And Information Management", "Status": "Published"}
          ]
        }
      ]
    },

    "Dr.  K. Prathapchandran": {
        "name": "Dr.  K. Prathapchandran",
        "email": "drprathapchandrank@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr.  K. Prathapchandran.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Mobile Ad hoc Networks",
                            "Branch": "Computer Science",
                            "College Name/University": "The Gandhigram Rural Institute",
                            "Year of Passing": "2017"
                        },
                        {
                            "Course": "M.Phil",
                            "Specialization": "Computer Science",
                            "Branch": "Computer Science",
                            "College Name/University": "The Gandhigram Rural Institute",
                            "Year of Passing": "2011"
                        },
                        {
                            "Course": "M.C.A.",
                            "Specialization": "Computer Applications",
                            "Branch": "Computer Applications",
                            "College Name/University": "The Gandhigram Rural Institute",
                            "Year of Passing": "2008"
                        },
                        {
                            "Course": "B.C.A.",
                            "Specialization": "Computer Applications",
                            "Branch": "Computer Applications",
                            "College Name/University": "Madurai Kamaraj University",
                            "Year of Passing": "2005"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Internet of Things, Wireless Sensor Networks, Cloud Computing, Mobile Ad Hoc Networks and Machine Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=56405574100",
                        "Vidwan :",
                        "Google scholar : https://scholar.google.com/citations?user=xkiO88UAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 5"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-2026",
                            "Author Position": "5",
                            "Details of Research Publication": "A synthetic oversampling-based customized ResNet51-Conv1D framework for early colorectal cancer prediction using structured clinical data from the PLCO screening trial, BMC Medical Informatics and Decision Making, https://doi.org/10.1186/s12911-026-03470-9, April 2026, IF:5.5",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-2026",
                            "Author Position": "1",
                            "Details of Research Publication": "BTFSO-WSN: A Blockchain-Integrated Fish Swarm Optimization&ndash;Driven Trust Model for Secure Routing in Wireless Sensor Networks, IEEE Explorer, 10.1109/IC-AIDA68291.2026.11564490, June-2026",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-2026",
                            "Author Position": "2",
                            "Details of Research Publication": "A Hybrid Machine Learning Approach with Explainable AI for Colorectal Cancer Risk Prediction from Dietary and Lifestyle Data, IEEE Explorer, 10.1109/IC-AIDA68291.2026.11564481, June 2026",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Security, Privacy, and Trust in AI-IoT Integrated Smart Systems&rdquo;, Powering e-Collaboration Through AI, Machine Learning, and Internet of Things, IGI Global, 2025",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "2",
                            "Details of Research Publication": "Secure IoT Architecture Using Graph Neural Networks and Dynamic Trust Models to Combat Sybil Attacks&rdquo; 2025 Second International Conference on Networks and Soft Computing (ICNSoC), IEEE Xplore, 2026",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "2",
                            "Details of Research Publication": "BioTrust-IoT: A Biologically Inspired Adaptive Trust System for Detecting Man-in-the-Middle Attacks&rdquo;, International Journal of Computer Networks and Applications (IJCNA), Volume 12, Issue 6, November &ndash; December (2025)",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "Trust-based support vector regressive (TSVR) security mechanism to identify malicious nodes in the Internet of Battlefield Things (IoBT),&rdquo; Int. J. Syst. Assur. Eng. Manag., vol. 15, no. 1, pp. 287&ndash;299, Jan. 2024. doi:10.1007/s13198-022-01719-w",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "Mitigating Black Hole Attacks in Routing Protocols Using a Machine Learning-Based Trust Model,&rdquo; International Journal of Sociotechnology and Knowledge Development, vol. 14, no. 1, pp. 1-23, Jan. 2022. doi:10.4018/ijskd.297980",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "A Trust Aware Security Mechanism to Detect Sinkhole Attack in RPL Based IoBT Environment Using Random Forest - RFTrust&rdquo; Computer Networks, Vol.198, No. 108413, 2021",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Decision Tree Trust (DTTrust)-Based Authentication Mechanism to Secure RPL Routing Protocol in Internet of Battlefield Thing (IoBT), International Journal of Business Data Communications and Networking (IJBDCN), 1(17), pp.1-23, 2021",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "8. Authenticated And Trusted AODV (ATAODV) Routing Protocol To Detect Blackhole Attack In Manet Based Military Environment&rdquo;, International Journal of Interdisciplinary Telecommunications and Networking (IJITN),Vol.02,no.02,pp.51-71, 2021",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "A Trust- Based Security Model To Detect Misbehaving Nodes In Iot Environment Using Logistic Regression&rdquo; , Vol.1850,no.012031,pp.1-19, Journal of Physics: Conference Series, 2021",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "10.Multi-tier trust based security mechanism for resource constrained IoT devices&rdquo; , Vol.1850,no.012041,pp.1-16, Journal of Physics: Conference Series, 2021",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Trust based Security Mechanism for resource constrained IoT Devices &ndash; A Review&rdquo; , Vol.1850,no.012042,pp.1-17, Journal of Physics: Conference Series, 2021",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "2",
                            "Details of Research Publication": "Security attacks in Internet of Things&rdquo;, Journal of Critical reviews, ISSN: 23945125, Vol.7, Issue: 14, 2020",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "2",
                            "Details of Research Publication": "A vision-based surface roughness measurement using a geometric search technique&rdquo;, ARPN Journal of Engineering and Applied Sciences, Vol.14, Issue.2, Jan 2019",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "2",
                            "Details of Research Publication": "Material Defect Detection and Assessment of Surface Roughness Using Image Processing and Machine Vision System&rdquo;, Jour of Adv Research in Dynamical & Control Systems, Vol. 11, 07-Special Issue, pp.500-509, 2019",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "The Segmentation of Hippocampus from MRI of Human Head Scans using Fuzzy C-Means Clustering, Trends in Mathematics, Springer, ISSN.2297-0215,vol.01,Issue.1,pp.333-342,2018",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "3",
                            "Details of Research Publication": "Internet of Things for Developing Smart Sustainable Cities (SSC): A Security Perspective&rdquo;, Connectivity Frameworks for Smart Devices: The Internet of Things from a Distributed Computing Perspective, Springer, Vol.01, Chapter No.13, DOI. 10.1007/978-3-319-33124-9 2016",
                            "Indexing": "ESCI",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "2",
                            "Details of Research Publication": "A Centralized Trust Computation model for secure group formation in Military based Mobile Ad Hoc networks Using Stereotypes&rdquo;, Advances in Intelligent Systems and Computing, Springer, Vol.412, pp.427-438, 2015.",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "2",
                            "Details of Research Publication": "Trust based Authentication Scheme to Remove Malicious in Mobile Ad Hoc Networks&rdquo;, International Journal of Applied Engineering Research, ISSN 1087&mdash;1090, Vol.No. 10, pp. 23348-23353, 2015",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "2",
                            "Details of Research Publication": "Trust and Cluster based Authentication Schemes in Mobile Ad Hoc Networks&rdquo;, ISBN: 978-1-4799-3611-3, DOI:10.1109/EPSCICON.2014.6887502, pp.1-5, IEEE Digital Library, 2014",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "2",
                            "Details of Research Publication": "Trust based Security Schemes in Mobile Ad Hoc Networks &ndash; A Review&rdquo;, ISBN: 978-1-4799-3966-4/14, DOI 10.1109/ICICA.2014.67, IEEE Digital Library, 2014",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                },
                {
                    "title": "Research Projects & Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2024",
                            "Funded Project /Event": "Faculty Development Program Grant",
                            "Role": "Co-Coordinator",
                            "Title of the Project/Event": "Strategic Insights:Navigating Research and Intellectual Property Rights for Educational Excellence under National Policy Frameworks with a Focus on Assessment and Accreditation",
                            "Amount in Rs. /-": "3,50,000",
                            "Funding Agency": "AICTE"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2023",
                            "Funded Project /Event": "Seminar Grant",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Integrating Indian Knowledge Systems with Modern Information Technologies: Bridging Tradition and Innovation",
                            "Amount in Rs. /-": "1,25,000",
                            "Funding Agency": "ANRF"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2022",
                            "Funded Project /Event": "Seed Money",
                            "Role": "Principal Investigator",
                            "Title of the Project/Event": "Machine learning-based approaches to ensure device authentication in IoT-based smart healthcare environment using trust Rs. 10,000 Institutional Fund (Nehru Arts and Science College)",
                            "Amount in Rs. /-": "10,000",
                            "Funding Agency": "Institutional Fund (Nehru Arts and Science College)"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "Others",
                            "Academic Year": "2018",
                            "Funded Project /Event": "Seed Money",
                            "Role": "Principal Investigator",
                            "Title of the Project/Event": "Trust based Security model for ensuring authentication in Internet of Things (IoT)",
                            "Amount in Rs. /-": "50,000",
                            "Funding Agency": "Institutional Fund (Karpgam Academy of Higher Education - DU)"
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
                            "Application ID": "436329-001",
                            "Title of the Patent": "IoT Based Automatic Robotic Waste Bin",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2025",
                            "Application ID": "441585-001",
                            "Title of the Patent": "IoT Based Barrier for Crowd Management",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2024",
                            "Application ID": "202441018469",
                            "Title of the Patent": "Intelligent transportation ecosystem using dynamic proximity-based device interactionhed",
                            "Status": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "Others",
                            "Academic Year": "2024",
                            "Application ID": "202441024385",
                            "Title of the Patent": "A sustainable office ecosystem enhanced by intelligent energy aware device orchestration",
                            "Status": "Published"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "Others",
                            "Academic Year": "2020",
                            "Application ID": "202041057099",
                            "Title of the Patent": "Activity monitoring system and method of Behavioral recognition and prediction analysis Thereof",
                            "Status": "Published"
                        },
                        {
                            "S.No": "6",
                            "Affiliation": "Others",
                            "Academic Year": "2021",
                            "Application ID": "202141000543",
                            "Title of the Patent": "Deep Learning Supported System and Method of Analyzing The Effectiveness of Teaching-Learning Process",
                            "Status": "Published"
                        },
                        {
                            "S.No": "7",
                            "Affiliation": "Others",
                            "Academic Year": "2022",
                            "Application ID": "202241050726",
                            "Title of the Patent": "A smart monitoring system for mental retardation children using Internet of Things and Deep Neural Network",
                            "Status": "Published"
                        },
                        {
                            "S.No": "8",
                            "Affiliation": "Others",
                            "Academic Year": "2022",
                            "Application ID": "202241050735",
                            "Title of the Patent": "Internet of Things and Artificial Intelligence based Fire detection system",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Best Staff Coordinator Award (IIC) &ndash; Nehru Arts and Science College, Coimbatore, 2025 for achieving 4-Star Rating in Institution&rsquo;s Innovation Council (IIC)",
                        "Best Staff Coordinator Award ( for IQAC) &ndash; Nehru Arts and Science College, Coimbatore, 2024",
                        "Best Staff Coordinator Award ( for IPR Cell) &ndash; Nehru Arts and Science College, Coimbatore, 2024",
                        "Best Teacher Award &ndash; Nehru Arts and Science College, Coimbatore, 2023",
                        "Certificate of Excellence Award &ndash; For article reviewing from Asian Journal of Research in Computer Science",
                        "Best Paper Award &ndash; International Conference on Electrical, Instrumentation and Communication Engineering &ndash; Recent Trends and Research Issues, Sri Krishna Institutions, Coimbatore, Tamil Nadu",
                        "Second Place for Academic Proficiency &ndash; M.Phil. (Computer Science), Bharathidasan University",
                        "Award for Producing Centum Results &ndash; Rev. Jacob Memorial Christian C"
                    ]
                }
            ]
    },

    "Dr. R. Maruthamuthu": {
        "name": "Dr. R. Maruthamuthu",
        "designation": "Asst. Professor",
        "email": "drmaruthamuthur@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. R. Maruthamuthu.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Image Mining",
                            "Branch": "Computer Science",
                            "College Name/University": "Anna University, Chennai",
                            "Year of Passing": "2018"
                        },
                        {
                            "Course": "M.C.A.",
                            "Specialization": "Computer Applications",
                            "Branch": "Computer Applications",
                            "College Name/University": "RVS College of Engineering, Dindigul",
                            "Year of Passing": "2007"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Mathematics",
                            "Branch": "B.Sc.",
                            "College Name/University": "Madurai Kamaraj University",
                            "Year of Passing": "2004"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Cyber Security, Machine learning, Image Processing"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58559725500",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/274324",
                        "Google scholar : https://scholar.google.com/citations?user=SwH9R3kAAAAJ=en&user=SwH9R3kAAAAJ",
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
                            "Author Position": "5",
                            "Details of Research Publication": "Optimized Intention-Adaptive Graph Neural Network for Robust Failure Diagnosis of Microservice Systems, Cluster Computing, Vol. 28, Issue 9",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhanced Water Quality Index Prediction Using Dual-Key Convolutional Transformer Autoencoder with Poplar Optimization, Franklin Open, Article 100370",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "A Robust Method for Malware Analysis Using Stacking Classifiers and Dendrogram Visualization, International Journal of Information Technology",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "5",
                            "Details of Research Publication": "Stacked Bi-LSTM for Advanced Toxicity Detection in Comment Classification, IEEE International Conference on Artificial Intelligence in Engineering and Technology (IICAIET), pp. 337&ndash;342",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Tree Drawing Algorithm for Text Visualization Using Computer Graphics, IJIRST &mdash; Article &mdash;",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Impact of Nutrients in Food Quality and Safety by Machine Learning Classifier Using IoT, International Journal of Information Technology, Vol. 16, Issue 5, pp. 2803&ndash;2812",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Design of Fog Computing Model for 5G Network Using VANET, IEEE 4th International Conference on Advance Computing and Innovative Technologies in Engineering (ICACITE), pp. 431&ndash;435",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Optimization of Effectual Sentiment Analysis in Film Reviews Using ML Techniques, in Computational Intelligence Methods for Sentiment Analysis in NLP Applications, Elsevier, pp. 145&ndash;163",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "An Improvised Mechanism for Optimizing Fault Detection for Big Data Analytics Environment, International Journal of Intelligent Systems and Applications in Engineering, 12(9s), pp. 427&ndash;433",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "A Smart Elevator Design Using Intelligent Video Surveillance System, IEEE 3rd International Conference on Technological Advancements in Computational Sciences (ICTACS), pp. 550&ndash;557",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-16",
                            "Author Position": "1",
                            "Details of Research Publication": "2D Matrix Based Indexing with Color Spectral Histogram for Efficient Image Retrieval, Journal of Systems Engineering and Electronics, Vol. 27, Issue 5, pp. 1122&ndash;1134",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-16",
                            "Author Position": "3",
                            "Details of Research Publication": "Automated Test Data Generation for Branch Testing Using Incremental Genetic Algorithm, S\u0101dhan\u0101, Vol. 41, Issue 9, pp. 959&ndash;976",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-17",
                            "Author Position": "1",
                            "Details of Research Publication": "Edge Directed Gabor Features for Efficient Image Retrieval, Advances in Natural and Applied Sciences, Vol. 11, Issue 3, pp. 6&ndash;23",
                            "Indexing": "Scopus",
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
                            "Application ID": "201741046532",
                            "Title of the Patent": "The maximum capacity estimation model for smart apartment management using wireless sensor network",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Application ID": "397579-001",
                            "Title of the Patent": "Ultrasonic Rail Track Testing Device",
                            "Status": "Design Patent-Granted"
                        }
                    ]
                }
            ]
    },

    "Dr. A. Althaf Ali": {
        "name": "Dr. A. Althaf Ali",
        "email": "althafalia@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Althaf Ali.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "SQAT",
                            "Branch": "Computer Science",
                            "College Name/University": "Bharathiar University",
                            "Year of Passing": "2021"
                        },
                        {
                            "Course": "M.Phil.",
                            "Specialization": "Computer Science",
                            "Branch": "M.Phil",
                            "College Name/University": "Bharathiar University",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "M.C.A.",
                            "Specialization": "Computer Applications",
                            "Branch": "M.C.A",
                            "College Name/University": "S. K. University",
                            "Year of Passing": "2006"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Computer Science",
                            "Branch": "B.Sc",
                            "College Name/University": "S. K. University",
                            "Year of Passing": "2002"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "SQAT, Computer Networks"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57079191500",
                        "Vidwan : https://mits.irins.org/profile/274083",
                        "Google scholar : https://scholar.google.com/citations?user=ospnlc4AAAAJ=en&user=AHvBGwcAAAAJ",
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
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;A Deep Learning Framework For Real-Time Stress Detection Using Facial Expressions&rdquo; Kufa Journal of Engineering, Vol. 17, No. 2, April 2026, P.P. 647-668, https://journal.uokufa.edu.iq/index.php/kje/article/view/19707",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "&ldquo;Enhancing routing efficiency in urban VANETs through intelligent optimization techniques&rdquo; International Journal of System Assurance Engineering and Management,Springer Nature, SCI Journal, Published: 02 May 2026, https://link.springer.com/article/10.1007/s13198-026-03323-8 , https://doi.org/10.1007/s13198-026-03323-8",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "Synergizing IoT and Machine Learning for Diabetic Foot Ulcer Detection and Management, International Journal of System Assurance Engineering and Management, Vol. 16, pp. 3614&ndash;3625 (2025). https://doi.org/10.1007/s13198-025-02890-6",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Securing Electronic Health Records Using Blockchain-Enabled Federated Learning for IoT-based Smart Healthcare, Clinical eHealth, Vol. 8 (2025), pp. 125&ndash;133. https://doi.org/10.1016/j.ceh.2025.04.002",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Proactive Detection of Malicious Webpages Using Hybrid Natural Language Processing and Ensemble Learning Techniques, Journal of Information and Organizational Sciences, Vol. 48, No. 2 (2024), pp. 295&ndash;309. https://doi.org/10.31341/jios.48.2.4",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Fuzzy Rules-Based Data Analytics and Machine Learning for Prognosis and Early Diagnosis of Coronary Heart Disease, Journal of Information and Organizational Sciences, Vol. 48, No. 1 (2024).",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Determination of the Time Location Points and Investigation of the Body Sensor Network Using RATDMA and PATDMA, Journal of Intelligent & Fuzzy Systems, Vol. 46 (2024), pp. 9043&ndash;9055, ISSN: 1064-1246",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Performance Analysis of Machine Learning Algorithms for the Early Detection of Breast Carcinoma, IEEE IATMSI 2024, DOI: 10.1109/IATMSI60426.2024.10503434",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023&ndash;24",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancing Security in the Internet of Things: A Trust-Based Protocol for Resilient Communication, SN Computer Science, Vol. 5, Issue 4 (2024). https://doi.org/10.1007/s42979-023-02329-4",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023&ndash;24",
                            "Author Position": "1",
                            "Details of Research Publication": "An Enhanced Analysis of Blood Cancer Prediction Using ANN Sensor-Based Model, Engineering Proceedings, Vol. 59, Issue 1 (2023), Article 65. https://doi.org/10.3390/engproc2023059065",
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
                            "Academic Year": "2021&ndash;22",
                            "Application ID": "44540",
                            "Title of the Patent": "Automated Education Process with Feedback System Using Machine Learning and AI",
                            "Status": "Filed"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2022&ndash;23",
                            "Application ID": "27169",
                            "Title of the Patent": "Workflow Scheduling in Fog&ndash;Cloud Computing Using a Quantum Genetic Algorithm",
                            "Status": "Filed"
                        }
                    ]
                }
            ]
    },

    "Dr. Srinivasan Jagannathan": {
        "name": "Dr. Srinivasan Jagannathan",
        "email": "drsrinivasanj@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Srinivasan Jagannathan.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Cloud Computing",
                            "Branch": "Computer Science",
                            "College Name/University": "Bharathiar University",
                            "Year of Passing": "2021"
                        },
                        {
                            "Course": "M.Phil.",
                            "Specialization": "Computer Science",
                            "Branch": "M.Phil",
                            "College Name/University": "Manonmaniam Sundaranar University",
                            "Year of Passing": "2007"
                        },
                        {
                            "Course": "M.C.A.",
                            "Specialization": "Computer Applications",
                            "Branch": "M.C.A",
                            "College Name/University": "Voorhees College, University of Madras",
                            "Year of Passing": "1997"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Cloud Computing, Data Mining, Text Mining and Machine Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57216933347",
                        "Vidwan : https://mits.irins.org/profile/561809",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=YJV2EUgAAAAJ",
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
                            "Author Position": "3",
                            "Details of Research Publication": "Large Language Model AI Text Generation Detection Based on Transformer Deep Fast Quantum Convolutional Neural Networks",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "-"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Hierarchical Clustering and Dimensionality Reduction for SARS-CoV-2 Genome Analysis Across Highly Affected Nations",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Traffic Classification Using CNN&ndash;LSTM Based on Multimedia Communication Systems, 3rd International Conference on Integrated Circuits and Communication Systems (ICICACS 2025), IEEE. DOI: 10.1109/ICICACS65178.2025.10967843",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Efficient Video Anomaly Detection Using One-Class Support Vector Machine, 4th International Conference on Distributed Computing and Electrical Circuits and Electronics (ICDCECE 2025), IEEE",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "3",
                            "Details of Research Publication": "Large Language Model AI Text Generation Detection Based on Transformer Deep Fast Quantum Convolutional Neural Networks, 6th International Conference on Inventive Research in Computing Applications (ICIRCA 2025), IEEE. DOI: 10.1109/ICIRCA65293.2025.11089509",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Enhanced Cryptographic Performance and Security Using Optimized Edward&ndash;ElGamal Signature Scheme for IoT and Blockchain Applications, International Journal on Smart Sensing and Intelligent Systems, Vol. 17, Issue 1, Jan 2024",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Smart Home Automation with IoT Sensor Systems for Energy Conservation Using Zigbee and Wi-Fi, 5th International Conference on Electronics and Sustainable Communication Systems (ICESC 2024), IEEE. DOI: 10.1109/ICESC60852.2024.10690054",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Robust Fingerprint Minutiae Extraction and Matching Using Fully Connected Deep Convolutional Neural Network and Improved SIFT, International Conference on Data Science and Network Security (ICDSNS 2024), IEEE. DOI: 10.1109/ICDSNS62112.2024.10691043",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Optimizing Spatial Pattern Analysis in Serial Remote Sensing Images Through Empirical Mode Decomposition and Ant Colony Optimization, Journal of Harbin Institute of Technology, 2024, pp. 52&ndash;60",
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
                            "Application ID": "202541103174 A",
                            "Title of the Patent": "Edge-Enabled IoT Frame Work for Real-Time and Optimization Smart Campus Infrastructure Monitoring",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Application ID": "6351733",
                            "Title of the Patent": "Sun Glasses for the Visually Impaired",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Application ID": "202341069305 A",
                            "Title of the Patent": "IoT-Based Humanity Prediction Using Time-Series ARIMA Model",
                            "Status": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Application ID": "366755-001",
                            "Title of the Patent": "Structure of Hexapod Robot",
                            "Status": "Design Patent &ndash; Granted"
                        }
                    ]
                }
            ]
    },

    "Dr. T. Saravanan": {
      name: "Dr. T. Saravanan",
      designation: "Asst. Professor",
      email: "drsaravanant@mits.ac.in",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/T. Saravanan.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Machine Learning", "Branch": "Computer Science", "College Name/University": "Bharathidasan University", "Year of Passing": "2023"},
            {"S.No": "2", "Course": "M.Phil.", "Specialization": "ICT & Data Mining", "Branch": "Computer Science", "College Name/University": "Prist University", "Year of Passing": "2010"},
            {"S.No": "3", "Course": "M.Sc.", "Specialization": "Information Technology", "Branch": "M.Sc.", "College Name/University": "Bishop Heber College (Autonomous)", "Year of Passing": "2009"},
            {"S.No": "4", "Course": "B.Sc.", "Specialization": "Physics", "Branch": "B.Sc.", "College Name/University": "Government Arts College, Karur", "Year of Passing": "2007"}
          ]
        },
        {
          title: "Research Areas",
          content: "AI, Machine Learning"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57216624771"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/588650"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=Ikh6DHYAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "3"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "5", "Details of Research Publication": "Optimizing computation: A biomimicry design spiral approach to algorithm development. (2025). Communications on Applied Nonlinear Analysis, 32, 528–538. https://doi.org/10.52783/cana.v32.2317", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Temporal and spatial data fusion integration in B-ANN for improved lithofacies classification and reservoir characterization. (2024). Journal of Computational Analysis and Applications, 33(7)", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "1", "Details of Research Publication": "Unravelling AI and machine learning essentials in Alzheimer’s research. (2024). In AI-Driven Alzheimer’s Disease Detection and Prediction (pp. 13). IGI Global. https://doi.org/10.4018/979-8-3693-3605-2.ch010", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "1", "Details of Research Publication": "Predictive students’ academic performance based on machine learning techniques. (2023). In Edited book volume", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "1", "Details of Research Publication": "The effective learning approach to blended learning and ICT–TPACK methods. (2020). International Journal of Electrical Engineering and Technology, 11(8), 147–159", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "1", "Details of Research Publication": "Impact of information and communication technology integration on stress and cognitive load. (2017). International Journal of Pure and Applied Mathematics, 116(10), 349–359", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "1", "Details of Research Publication": "Enhancing investigations in data migration and security using sequence cover cat and cover particle swarm optimization in the fog paradigm. (2022). International Journal of Intelligent Networks, 3, 204–212.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "Others", "Academic Year": "2024", "Application ID": "6322673 (UK Design)", "Title of the Patent": "Intelligent Brain-Computer Interface (BCI) Headgear", "Status": "Published"},
            {"S.No": "2", "Affiliation": "Others", "Academic Year": "2024", "Application ID": "405790-001", "Title of the Patent": "Logistics Tracking Device", "Status": "Published"},
            {"S.No": "3", "Affiliation": "Others", "Academic Year": "2023", "Application ID": "410759-001", "Title of the Patent": "IoT based Vitamin Deficiency Detection Machine", "Status": "Published"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Published a book titled Data Science with Python (ISBN:978-81-968567-7-9)",
            "Published a book titled  Computer Vision (ISBN:978-81-971479-8-2)"
          ]
        }
      ]
    },

    "Dr. N. Nirmala Devi": {
        "name": "Dr. N. Nirmala Devi",
        "email": "drnirmaladevin@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. N. Nirmala Devi.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Cloud Computing",
                            "Branch": "Computer Science",
                            "College Name/University": "Dr.SNS RajaLakshmi Arts and Science College, Bharathiar University",
                            "Year of Passing": "2023"
                        },
                        {
                            "Course": "M.Phil.",
                            "Specialization": "Computer Science",
                            "Branch": "Computer Science",
                            "College Name/University": "Dhanabagiyam Krishnaswamy Mudaliyar College for Women, University of Madras",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "M.C.A.",
                            "Specialization": "Computer Applications",
                            "Branch": "Computer Applications",
                            "College Name/University": "Institute of Road and Transport Technology, Anna University",
                            "Year of Passing": "2007"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Computer Science",
                            "Branch": "B.Sc.",
                            "College Name/University": "Marappan Lakshmiammal Arts & Science College, Thiruvalluvar University",
                            "Year of Passing": "2004"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Cloud Computing, Machine Learning, Computer Networks"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=60143704900",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/459990",
                        "Google scholar : https://scholar.google.com/citations?user=lPv-lzwAAAAJ&hl=en",
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
                            "Details of Research Publication": "Secure Medical Data in Internet of Medical Things (IoMT).&quot; International Conference on Computer Vision and Robotics. Cham: Springer Nature Switzerland, 2025",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "CFGANC: Cloud Fusion Using Generative Adversarial Network Classification of Optical and SAR Images, Lecture Notes in Networks and Systems, pp. 485&ndash;496, 2025. DOI: https://doi.org/10.1007/978-981-96-5723-0_36",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancing Air Quality Prediction Using Machine Learning Algorithms, Lecture Notes in Networks and Systems, pp. 187&ndash;197, 2025. DOI: https://doi.org/10.1007/978-3-032-05548-4_15",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Developing a Hybrid Faster Recurrent Convolutional Neural Network with an Improved Weighted Artificial Bee Optimization Method for Early Grape Disease Detection, International Journal of Electrical and Computer Engineering, Vol. 12, Issue 1, pp. 161&ndash;173. DOI: https://doi.org/10.14445/23488549/IJECE-V12I1P113",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Pre-Copy Live VM Migration Techniques in Cloud Computing Using HDWHM Algorithm, International Journal on Information Technologies & Security, Vol. 15, Issue 1, pp. 89&ndash;100, ISSN: 1313-8251",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "SLAV Mitigation and Energy-Efficient VM Allocation Technique Using Improvised Grey Wolf Optimization Algorithm for Cloud Computing, IEEE International Conference Paper. DOI: 10.1109/ICACCS54159.2022.9785078, ISBN: 978-1-6654-0817-2",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "A Novel Load Balancing Approach Towards Cloud Computing by Reducing SLA Degradation and Energy Consumption, Indian Journal of Computer Science and Engineering, Vol. 13, No. 1, pp. 197&ndash;207, Jan&ndash;Feb 2022",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Research Challenges in Pre-Copy Virtual Machine Migration in Cloud Environment, in The Internet of Medical Things (IoMT): Healthcare Transformation, Wiley & Scrivener, Feb 2022. DOI: https://doi.org/10.1002/9781119769200.ch3",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
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
                            "Application ID": "450379-001",
                            "Title of the Patent": "Cluster Electric Vehicle Charging Behavior Optimization Method Based on Deep Reinforcement Learning",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Application ID": "202341065259",
                            "Title of the Patent": "Design and Development of wearable Assistive device support system for blind and visually impaired people",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "Received NPTEL mentor award for course &ldquo;Java Programming&rdquo; during 2024 &ndash; 2025."
                }
            ]
    },

    "Dr. Radhika K": {
      name: "Dr. Radhika K",
      designation: "Asst. Professor",
      email: "drradhikak@mits.ac.in",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/rad.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Computer Science", "Branch": "Computer Science", "College Name/University": "Bharathidasan University, Trichy", "Year of Passing": "2024"},
            {"S.No": "2", "Course": "B.Ed.", "Specialization": "Computer Science", "Branch": "Computer Science", "College Name/University": "Tamil Nadu Teacher Education Univerity, Chennai", "Year of Passing": "2020"},
            {"S.No": "3", "Course": "M.Phil.", "Specialization": "Computer Science", "Branch": "Computer Science", "College Name/University": "Prist University, Thanjavur", "Year of Passing": "2010"},
            {"S.No": "4", "Course": "M.B.A.", "Specialization": "Business Administration", "Branch": "Business Administration", "College Name/University": "Bharathidasan University", "Year of Passing": "2009"},
            {"S.No": "5", "Course": "M.C.A.", "Specialization": "Computer Applications", "Branch": "Computer Applications", "College Name/University": "Rajah Serfoji govt college, Bharathidasan University", "Year of Passing": "2009"},
            {"S.No": "6", "Course": "B.C.A.", "Specialization": "Computer Applications", "Branch": "Computer Applications", "College Name/University": "Meenakshi Chandrasekaran Women’s College, Bharathidasan University", "Year of Passing": "2006"}
          ]
        },
        {
          title: "Research Areas",
          content: "Data Science"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=59739397400"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/588905"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=DL065GEAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "1"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "4", "Details of Research Publication": "Radial Basis Convoluted Graph Neural Network–Based Area-Efficient 1024-Point Pipelined Radix-4 FFT Processor for ECG Heartbeat Categorization, Circuits, Systems, and Signal Processing, Springer Nature, Published: 26 Aug 2025. DOI: 10.1007/s00034-025-03289-1", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Harnessing the Power of Android Smartphones to Enhance the Lives of Visually Impaired Individuals: A User-Centered GPS-Enabled Mobile Application, Journal of Computational Analysis and Applications, 2024. DOI: 10.48047/jocaaa.2024.33.08.41", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"}
          ]
        },
        {
          title: "Research Projects & Events",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2025-26", "Type": "Workshop", "Role": "Co-Coordinator", "Title": "AI in Education: Shaping the Next-Gen Learners", "Amount": "5,000", "Agency": "Institutional Fund"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2024-25", "Type": "Event (FDP)", "Role": "Coordinator", "Title": "Artificial Intelligence & Cyber Security: Modern Solutions for Emerging Trends", "Amount": "40,000", "Agency": "Institutional Fund"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2024-25", "Type": "Workshop", "Role": "Co-Coordinator", "Title": "Unlock the Secrets of Research Paper Writing", "Amount": "15,000", "Agency": "Institutional Fund"}
          ]
        }
      ]
    },

    "Dr. J. Jude Moses Anto Devakanth": {
        "name": "Dr. J. Jude Moses Anto Devakanth",
        "email": "drjudedevakanthj@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. J. Jude Moses Anto Devakanth.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Image Processing & Deep Learning",
                            "Branch": "Computer Applications",
                            "College Name/University": "Manonmaniam Sundaranar University",
                            "Year of Passing": "2024"
                        },
                        {
                            "Course": "M.Phil.",
                            "Specialization": "Computer Science",
                            "Branch": "Computer Science",
                            "College Name/University": "Manonmaniam Sundaranar University",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "M.C.A",
                            "Specialization": "Computer Applications",
                            "Branch": "Computer Applications",
                            "College Name/University": "Manonmaniam Sundaranar University",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Computer Science",
                            "Branch": "B.Sc.",
                            "College Name/University": "St. Joseph college of Arts and Science, Madras University",
                            "Year of Passing": "2012"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Image processing, Machine Learning and Deep Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58790613200",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/456553",
                        "Google scholar : https://scholar.google.com/citations?user=uDfscpQAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 3"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026",
                            "Author Position": "3",
                            "Details of Research Publication": "SCSN-Net: Siamese convolutional spiking neural network for childhood medulloblastoma detection using microscopic images, Knowledge-Based Systems, vol. 337, Art. no. 115357, 2026, doi: 10.1016/j.knosys.2026.115357. Impact factor (8.0)",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026",
                            "Author Position": "4",
                            "Details of Research Publication": "A hybrid machine learning framework for early hepatitis detection using enhanced feature selection and ensemble classification, International Journal of Information Technology, 2026. https://doi.org/10.1007/s41870-025-03031-9",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026",
                            "Author Position": "1",
                            "Details of Research Publication": "Understanding learning behavior in higher education using deep learning. In 2025 2nd IEEE International Conference for Women in Computing (InCoWoCo 2025). IEEE. https://doi.org/10.1109/InCoWoCo68239.2025.11407225",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "3",
                            "Details of Research Publication": "Generative AI in Text and Multi-Language Adaptation Processing for Digital Media,&rdquo; Book Chapter in Fusion of Multimodal Generative AI and Blockchain Technology in Digital Media, IGI Global Scientific Publishing, 2026, pp. 231&ndash;256.Doi: 10.4018/979-8-3373-1504-1.ch010",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026",
                            "Author Position": "2",
                            "Details of Research Publication": "Particle matter prediction using dual attention bidirectional long short-term memory. In 2025 3rd International Conference on Sustainable Computing and Smart Systems (ICSCSS) (pp. 995&ndash;1000). IEEE. https://doi.org/10.1109/ICSCSS64956.2025.11500948",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "6",
                            "Details of Research Publication": "Optimized Intention-Adaptive Graph Neural Network for Robust Failure Diagnosis of Microservice System Using Multimodal Data, Cluster Computing, Vol. 28, Article 614 (2025). DOI: https://doi.org/10.1007/s10586-025-05305-0",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "3",
                            "Details of Research Publication": "Robust Ensembled Model-Based Reinforcement Learning for Better Tomato Yield in Greenhouse, Journal of Machine and Computing, Vol. 5, No. 2, pp. 1140&ndash;1151, Apr 2025. DOI: 10.53759/7669/jmc202505090",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Wireless Cellular Communications for Efficient Resource Allocation, in Innovations in Communication Networks: Sustainability for Societal and Industrial Impact, Lecture Notes in Networks and Systems, Vol. 1365, Springer. DOI: https://doi.org/10.1007/978-981-96-5223-5_18",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhanced Mayfly Optimization Algorithms with Pixel-Based Learning Color Space Data Hiding Using a CNN-LSTM Network, IETE Journal of Research, pp. 1&ndash;20. DOI: https://doi.org/10.1080/03772063.2025.2531959",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "5",
                            "Details of Research Publication": "Metaheuristic Algorithms and Optimizing Neural Networks for Biomedical Image Processing, in Metaheuristic Algorithms and Optimizing Neural Networks for Biomedical Image Processing, IGI Global, 2026, pp. 407&ndash;434. DOI: https://doi.org/10.4018/979-8-3373-0523-3.ch015",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "5",
                            "Details of Research Publication": "Real-Time Landslide Detection and Early Warning Systems Using Battery-Free Wireless Sensor Networks, in Battery-Free Sensor Networks for Sustainable Next-Generation IoT Connectivity, IGI Global, 2025, pp. 253&ndash;270. DOI: https://doi.org/10.4018/979-8-3693-7600-3.ch012",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Energy-Efficient Traffic Monitoring Combining Machine Learning with Battery-Free Sensor Networks, in Battery-Free Sensor Networks for Sustainable Next-Generation IoT Connectivity, IGI Global, 2025, pp. 201&ndash;220. DOI: https://doi.org/10.4018/979-8-3693-7600-3.ch010",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Context-Aware Approach for Server Scheduling Process in Machine Learning, 3rd International Conference on Communication, Security, and Artificial Intelligence (ICCSAI 2025), pp. 1104&ndash;1109. DOI: 10.1109/ICCSAI64074.2025.11064053",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "5",
                            "Details of Research Publication": "Exploring Smart Room Automation: An IoT-Based Vision-Driven Zonal Control Approach for Energy Efficiency, 6th International Conference on Inventive Research in Computing Applications (ICIRCA 2025), pp. 147&ndash;151. DOI: 10.1109/ICIRCA65293.2025.11089644",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Decentralization of Cloud Environment Using DES Technique in Medical Image, International Conference on Machine Learning and Autonomous Systems (ICMLAS 2025), pp. 1523&ndash;1527. DOI: 10.1109/ICMLAS64557.2025.10968253",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Pixel Similarity-Based Steganography in Bit Planes: An Optimization-Driven Approach, 4th International Conference on Soft Computing for Security Applications (ICSCSA 2024), pp. 460&ndash;465. DOI: 10.1109/ICSCSA64454.2024.00080",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Integrating Cloud-Based Data Mining Algorithms for Smart City Infrastructure Management and Decision Support Systems, ICSCSA 2024, pp. 105&ndash;111. DOI: 10.1109/ICSCSA64454.2024.00024",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Effective Healthcare Management System for Hepatitis Virus Using PCA-BFF Optimization with Clinical Data, ICIETDW 2024, pp. 1&ndash;5. DOI: 10.1109/ICIETDW61607.2024.10939372",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Automated Semantic Segmentation and Diagnosis of Coconut Tree Infection Using Drone Imagery and ML for Smart Agriculture, ICISAA 2024, pp. 1&ndash;6. DOI: 10.1109/ICISAA62385.2024.10829008",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Energy-Aware Heart Disease Prediction System Using ESMO and Optimal Deep Learning for IoT Healthcare, Journal of Biomolecular Structure and Dynamics, Vol. 43, Issue 7, pp. 3542&ndash;3556. DOI: https://doi.org/10.1080/07391102.2023.2298736",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Development of Deepfake Detection Techniques for Protecting Multimedia Information Using Deep Learning, 3rd International Conference on Applied Artificial Intelligence and Computing (ICAAIC 2024), pp. 786&ndash;791. DOI: 10.1109/ICAAIC60222.2024.10575155",
                            "Indexing": "IEEE /Scopus",
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
                            "Academic Year": "2024",
                            "Application ID": "440953-001",
                            "Title of the Patent": "AI and Image processing based stroke disease Prediction device",
                            "Status": "Granted - Design"
                        }
                    ]
                }
            ]
    },

    "Dr. Saravanan Thirunavukarasu": {
      name: "Dr. Saravanan Thirunavukarasu",
      designation: "Asst. Professor",
      email: "saravanant@mits.ac.in",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/Saravanan Thirunavukarasu.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Cloud Computing", "Branch": "Cloud Computing", "College Name/University": "Anna University, Chennai", "Year of Passing": "2026"},
            {"S.No": "2", "Course": "M.C.A.", "Specialization": "Master of Computer Applications", "Branch": "Master of Computer Applications", "College Name/University": "Thangavelu Engineering College, Chennai", "Year of Passing": "2007"},
            {"S.No": "3", "Course": "B.B.A.", "Specialization": "Bachelor of Business Administration", "Branch": "Bachelor of Business Administration", "College Name/University": "University of Madras, Chennai.", "Year of Passing": "2002"}
          ]
        },
        {
          title: "Research Areas",
          content: "Cloud Computing & Big Data"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=59300642800"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/278494"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=uie1DPWzZisC&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "1"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "2", "Details of Research Publication": "A Bio-Inspired Energy Efficient Dynamic Task Scheduling (BEDTS) Scheme and Classification for Virtualization CDC, Journal of Engineering Research, Vol. 12, No. 3, pp. 387–396, Sept 2024. DOI: 10.1016/j.jer.2023.08.026", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Artificial Intelligence and Machine Learning Approaches Based on Power Reduction in Automated Internet of Things Devices: A Bibliometric Analysis, in Proc. Int. Conf. on Advances in Computing, Communication and Applied Informatics (ACCAI 2024), IEEE, 2024. DOI: 10.1109/ACCAI61061.2024.10602214, ISBN: 979-8-3503-8945-6", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Green Banking Practices and Employee Green Behaviour: The Mediating Role of Green Mindfulness in Sustainable Procurement Environments, International Journal of Procurement Management, 2025. DOI: 10.1504/IJPM.2025.10072535", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "Computational Advancements in Business Process Management: A Bibliometric Review of Cloud Computing Applications, International Journal of Electronic Business, 2025", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"}
          ]
        }
      ]
    },

    "Mrs. S. Suganya": {
        "name": "Mrs. S. Suganya",
        "email": "suganyas@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/S. Suganya MCA.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Natural Language Processing",
                            "Branch": "Computer Science",
                            "College Name/University": "SRM Institute of Science and Technology",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Phil.",
                            "Specialization": "Web Mining",
                            "Branch": "Computer Science",
                            "College Name/University": "Jamal Mohammed College, Bharathidasan University",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "M.C.A.",
                            "Specialization": "Computer applications",
                            "Branch": "Computer applications",
                            "College Name/University": "Urumu Dhanalakshmi College, Bharathidasan University",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "M.B.A.",
                            "Specialization": "Management Studies",
                            "Branch": "Management Studies",
                            "College Name/University": "Bharathidasan University",
                            "Year of Passing": "2009"
                        },
                        {
                            "Course": "B.C.A.",
                            "Specialization": "Computer applications",
                            "Branch": "Computer applications",
                            "College Name/University": "Jamal Mohammed College, Bharathidasan University",
                            "Year of Passing": "2007"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "NLP, Machine Learning, Deep Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=60247904900",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/587428",
                        "Google scholar : https://scholar.google.com/citations?user=SwH9R3kAAAAJ=en&user=h8P8TZIAAAAJ",
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
                            "Author Position": "3",
                            "Details of Research Publication": "&quot;Energy-efficient modular power management in smart grids using DRL-XGBoost-driven multilevel converters&quot; SPRINGER NATURE ELECTRICAL ENGINEERING, Electronic ISSN 1432-0487 / Print ISSN 0948-7921, ARTICLE : 201",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "CHAPTER: Mitigating Adversarial Attacks in Industrial Cybersecurity Through NLP Strategies for E-Commerce, TITLE: AI-Driven Security and Intelligence in Cloud and Internet of Things Systems, IGI global, ISBN:9798 3373 7505 2, Vol:1, Ch:3, Pg.No.: 73-110",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Enhancing Rice Bacterial Leaf Blight Detection Accuracy Through RCAMNET, 5th International Conference on Communicating, Computing and Electronic Systems (ICCCES-2026), Electronic ISBN:979-8-3315-5621-1 DVD ISBN:979-8-3315-5620-4 Print on Demand(PoD) ISBN:979-8-3315-5622-8 https://doi.org/10.1109/ICCCES62661.2026.11436602",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "Hybrid Knowledge Graph and Reinforcement Learning Framework for Proactive Plant Disease Monitoring in Smart Agriculture, 2026 International Conference on Intelligent Computing, Networks, and Security (ICICNS), Electronic ISBN: 979-8-3315-8337-8 Print on Demand(PoD) ISBN: 979-8-3315-8338-5, https://doi.org/10.1109/IC-ICNS68863.2026.11537846",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Innovative NLP Approach for Early Detection and Classification of Alzheimer&rsquo;s Disease, ComSIA 2025, Volume 1, Proceedings of International Conference on Computing Systems, eBook ISBN: 978-981-96-8350-5, Series ISSN:2367-3370, Series E-ISSN:2367-3389, https://doi.org/10.1007/978-981-96-8350-5_40 , Pg.No.:XVIII, 860",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Enhancing Rice Bacterial Leaf Blight Detection Accuracy Through RCAMNET &ndash; ICCCES-2026, DVD Part No: CFP25VH5-DVD, ISBN: 979-8-3315-5620-4, Page: 234",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Mitigating Adversarial Attacks in Industrial Cybersecurity Through NLP Strategies for E-Commerce, AI-Driven Security and Intelligence in Cloud and IoT Systems, Page: 38, DOI: 10.4018/979-8-3373-7503-8.ch003 (2026)",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
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
                            "Application ID": "6474461",
                            "Title of the Patent": "Block chain based computing device for Network Security",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "6396815",
                            "Title of the Patent": "Smart Voice Assisted Computer Device For Visually Impaired Students",
                            "Status": "Published"
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
                            "Funded Project / Event": "Workshop",
                            "Role": "CO-COORDINATOR",
                            "Title of the Project/Event": "Machine Learning : From Fundamentals to Future Frontiers&rdquo; in association with ISTE",
                            "Amount in Rs. /-": "5,000",
                            "Funding Agency": "Institution ISTE Fund"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Funded Project / Event": "Expert Talk",
                            "Role": "COORDINATOR",
                            "Title of the Project/Event": "7 Habits of Highly Effective People&rdquo; in association with ISTE",
                            "Amount in Rs. /-": "Nil",
                            "Funding Agency": "Nil"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Funded Project / Event": "Workshop",
                            "Role": "COORDINATOR",
                            "Title of the Project/Event": "Machine Learning : From Fundamentals to Future Frontiers&rdquo; in association with ISTE",
                            "Amount in Rs. /-": "6,000",
                            "Funding Agency": "Institution ISTE Fund"
                        }
                    ]
                }
            ]
    },

    "Mr. G. R. Hemanth Kumar": {
        "name": "Mr. G. R. Hemanth Kumar",
        "designation": "Asst. Professor",
        "email": "hemanthkumargr@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Hemanth.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Computer Science & Engineering",
                            "Branch": "Computer Science & Engineering",
                            "College Name/University": "Nagarjuna University, Guntur",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "M.C.A",
                            "Specialization": "Computer Applications",
                            "Branch": "Computer Applications",
                            "College Name/University": "DOEACC Society, New Delhi",
                            "Year of Passing": "2000"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Computers",
                            "Branch": "B.Sc.",
                            "College Name/University": "Osmania University",
                            "Year of Passing": "1995"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Blockchain, AI, IoT"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus :",
                        "Vidwan : https://mits.irins.org/profile/274278",
                        "Google scholar :",
                        "h-Index (As per Scopus Data) :"
                    ]
                }
            ]
    },

    "Mr. S. Suresh": {
        "name": "Mr. S. Suresh",
        "email": "sureshsh@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Suresh.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Microservice, Machine Learning, AI",
                            "Branch": "Computer Applications",
                            "College Name/University": "NIT, Trichy",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.C.A.",
                            "Specialization": "Computer Applications",
                            "Branch": "MCA",
                            "College Name/University": "Madanapalle Institute of Technology & Science, JNTU Anantapur",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Computer Science",
                            "Branch": "B.Sc.",
                            "College Name/University": "Mother Theresa Degree College, S.V. University",
                            "Year of Passing": "2011"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus :",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/274333",
                        "Google scholar : https://scholar.google.com/citations?user=4F8rGEkAAAAJ&hl=en&oi=sra",
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
                            "Author Position": "4",
                            "Details of Research Publication": "QuantumResist: Integrating Shor&rsquo;s algorithm, lattice-based cryptography, and quantum error correction for enhanced secure communication in post-quantum cryptography. (2025). The Journal of Supercomputing, 81, Article 1391. Published September 29, 2025.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "2",
                            "Details of Research Publication": "Optimized intention-adaptive graph neural network for robust failure diagnosis of microservice systems using multimodal data. (2025). Cluster Computing. Advance online publication. https://doi.org/10.1007/s10586-025-05305-0",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Optimized memory allocation in edge-PLCs using deep Q-networks and bidirectional LSTM with quantum genetic algorithm. (2024). e-Prime: Advances in Electrical Engineering, Electronics and Energy, 10, 100762. Elsevier.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Performance Analysis of Hybrid Cryptographic Algorithms in Serverless Platforms. (eds) Advanced Computing and Intelligent Technologies. ICACIT 2023. Lecture Notes in Networks and Systems, vol 958. Springer, Singapore. https://doi.org/10.1007/978-981-97-1961-7_6",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        }
                    ]
                }
            ]
    },

    "Mr. P. Hanok": {
        "name": "Mr. P. Hanok",
        "designation": "Asst. Professor",
        "email": "hanokp@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Hanook.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Blockchain Technology",
                            "Branch": "Computer Applications",
                            "College Name/University": "National Institute of Technology, Tiruchirappalli",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.C.A.",
                            "Specialization": "Computer Applications",
                            "Branch": "M.C.A.",
                            "College Name/University": "Madanapalle Institute of Technology & Science, (JNTUA)",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Computer Science",
                            "Branch": "B.Sc.",
                            "College Name/University": "Besant Theosophical College, S.V. University",
                            "Year of Passing": "2011"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Blockchain Technology"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus :",
                        "Vidwan : https://mits.irins.org/profile/588399",
                        "Google scholar :",
                        "h-Index (As per Scopus Data) :"
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "NCC - B Certificate - Certified by NCC Directorate, Andhra Pradesh, Under the authority of Ministry of Defense, Government of India."
                }
            ]
    },

    "Mr. P. Seshu Kumar": {
        "name": "Mr. P. Seshu Kumar",
        "email": "seshukumarp@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Seshu Kumar.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Micro Servies Architecture",
                            "Branch": "CSE",
                            "College Name/University": "JNTU Kakinada",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Distributed Computing",
                            "Branch": "CSE",
                            "College Name/University": "AIMS College of Engineering, JNTUK University",
                            "Year of Passing": "2020"
                        },
                        {
                            "Course": "M.C.A.",
                            "Specialization": "Computer Applications",
                            "Branch": "M.C.A",
                            "College Name/University": "All Saints PG College, Vishakapatnam",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "MPC",
                            "Branch": "B.Sc.",
                            "College Name/University": "SSMD College, Andhra University",
                            "Year of Passing": "2007"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Generative AI, Machine Learning, Micro Services"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=59209208900",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/463338",
                        "Google scholar : https://scholar.google.com/citations?user=43tXmEcAAAAJ&hl=en",
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
                            "Author Position": "5",
                            "Details of Research Publication": "A Robust Method for Malware Analysis Using Stacking Classifiers and Dendrogram Visualization, International Journal of Information Technology, July 2024, Springer. DOI: 10.1007/s41870-024-01982-z",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "4",
                            "Details of Research Publication": "An Efficient Speech Synthesizer: A Hybrid Monotonic Architecture for Text-to-Speech via VAE & LPC-Net with Independent Sentence Length, Circuits, Systems, and Signal Processing, Published: 25 March 2025",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "4",
                            "Details of Research Publication": "Optimized Intention-Adaptive Graph Neural Network for Robust Failure Diagnosis of Microservice Systems Using Multimodal Data, Cluster Computing, Published online: 30 August 2025",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "5",
                            "Details of Research Publication": "QuantumResist: Integrating Shor&rsquo;s Algorithm, Lattice-Based Cryptography, and Quantum Error Correction for Enhanced Secure Communication in Post-Quantum Cryptography, The Journal of Supercomputing, Vol. 81, Article No. 1391 (2025), Published: 29 Sept 2025",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Optimized Memory Allocation in Edge-PLCs Using Deep Q-Networks and Bidirectional LSTM with Quantum Genetic Algorithm, e-Prime &ndash; Advances in Electrical Engineering, Electronics and Energy, Vol. 10 (2024), Article No. 100762, Elsevier",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "",
                            "Details of Research Publication": "Stacked Bi-LSTM for Advanced Toxicity Detection in Comment Classification, 6th IEEE International Conference on Artificial Intelligence in Engineering and Technology, 26&ndash;28 Aug 2024",
                            "Indexing": "IEEE",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "",
                            "Details of Research Publication": "An Efficient Approach on Image Encryption Steganography Based on 2D SWT with Chaotic Techniques, 4th International Conference on Soft Computing for Security Applications (ICSCSA-2024)",
                            "Indexing": "IEEE",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "An Improved Mask R-CNN Object Recognition for the Visually Impaired Community, Indian Journal of Natural Sciences (IJONS), ISSN: 0976-0997, Vol. 14, pp. 65590&ndash;65600",
                            "Indexing": "Web of Science",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                }
            ]
    },

    "Mrs. Roopa": {
        "name": "Mrs. Roopa",
        "email": "roopak@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Roopa MCA.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Sri Sai Institute of Science and Technology, JNTUA",
                            "Year of Passing": "2022"
                        },
                        {
                            "Course": "M.C.A.",
                            "Specialization": "Computer Applications",
                            "Branch": "Computer Applications",
                            "College Name/University": "Sharada Post Graduate Institute of Research and Technological Science, S. V. University",
                            "Year of Passing": "2007"
                        },
                        {
                            "Course": "B.C.A.",
                            "Specialization": "Computer Applications",
                            "Branch": "Computer Applications",
                            "College Name/University": "Adinarayanamma Women&rsquo;s Degree College, S V University",
                            "Year of Passing": "2001"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus :",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/460155",
                        "Google scholar :",
                        "h-Index (As per Scopus Data) :"
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
                            "Details of Research Publication": "Shortest Path Orbit Prediction for Resilient LEO Satellite Networks to Navigating the Cosmos, International Journal of Computer Information Systems and Industrial Management Applications, ISSN: 2150-7988, Vol. 17 (2025), pp. 310&ndash;329",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Quantum Machine Learning for Secure Key Generation in Wireless Communication: Addressing Limitations of Classical Cryptographic Protocols, National Journal of Antennas and Propagation, Vol. 7, No. 1, 2025, pp. 198&ndash;209",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        }
                    ]
                }
            ]
    },

    "Mr. Repana Mallikarjuna": {
        "name": "Mr. Repana Mallikarjuna",
        "designation": "Asst. Professor",
        "email": "mallikarjunar@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/malli.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Data Scienc",
                            "Branch": "IT",
                            "College Name/University": "Vellore Institute of Technology",
                            "Year of Passing": "2020"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "MPCs",
                            "Branch": "B.Sc.",
                            "College Name/University": "Sri Srinivasa Degree College, SV University",
                            "Year of Passing": "2015"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus :",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/659088",
                        "Google scholar :",
                        "h-Index (As per Scopus Data) :"
                    ]
                }
            ]
    },

    "Mrs. K. Kavitha": {
        "name": "Mrs. K. Kavitha",
        "email": "kavithak@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. K. Kavitha.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Artificial Intelligence and Remote Sensing",
                            "Branch": "CSE",
                            "College Name/University": "NIT, Puducherry",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Machine Learning",
                            "Branch": "CSE",
                            "College Name/University": "Sri Venkateswara College of Engineering and Technology",
                            "Year of Passing": "2022"
                        },
                        {
                            "Course": "M.C.A.",
                            "Specialization": "Cloud Computing",
                            "Branch": "M.C.A",
                            "College Name/University": "Madanapalle Institute of Technology & Science, JNTUA",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "MSCS",
                            "Branch": "B.Sc.",
                            "College Name/University": "Shri Gnanambica Degree College, S.V University, Tirupathi",
                            "Year of Passing": "2014"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Artificial Intelligence, Deep Learning, Remote Sensing"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus :",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/274335",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=Bdn0xk8AAAAJ",
                        "h-Index (As per Scopus Data) :"
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
                            "Details of Research Publication": "Mechanical performance and moisture resistance of alkali-treated Crotalaria juncea fiber&ndash;reinforced polyester composites for prosthetic sockets https://doi.org/10.1007/s10751-026-02487-w",
                            "Indexing": "Scopus",
                            "Publication": "SPRINGER NATURE",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026",
                            "Author Position": "1",
                            "Details of Research Publication": "Adaptive Explainable AI Framework for Personalized Risk Assessment and Early Disease Prediction https://doi.org/10.1109/IC-AIDA68291.2026.11564111",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026",
                            "Author Position": "1",
                            "Details of Research Publication": "A Multimodal Transformer Architecture for Early Detection of Diabetes Using Clinical, Wearable, and Demographic Data https://doi.org/10.1109/IC-AIDA68291.2026.11564489",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Energy Consumption Optimisation through Machine Learning: A Strategic Approach to Sustainable Procurement in Smart Grids and Buildings: A Bibliometric Analysis, International Journal of Procurement Management (Article in Press), 2026",
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
                            "Academic Year": "2025-56",
                            "Application ID": "6504413",
                            "Title of the Patent": "AI-Powered Drug Resistance Monitoring device for Chemotherapy",
                            "Status": "Granted"
                        }
                    ]
                }
            ]
    }
  */
};

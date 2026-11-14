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

export const csecsProfiles: Record<string, FacultyProfile> = {
  /*
  // Static faculty profile data preserved in comments (Dynamic profiles fetched from EngageAI database API)
"Dr. Chandra Prakash Gupta": {
        "name": "Dr. Chandra Prakash Gupta",
        "email": "drcpgupta@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Chandraprakash Guptha.JPG",
        "designation": "Professor &amp; Dean-School of Computing",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Wireless Sensor Networks",
                            "Branch": "Computer Networks",
                            "College Name/University": "University of Kota",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Computer Technology",
                            "Branch": "Computer Technology",
                            "College Name/University": "Indian Institute of Technology, Delhi",
                            "Year of Passing": "1995"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Electrical Engineering",
                            "Branch": "Electrical Engineering",
                            "College Name/University": "Malviya Regional Engineering College, Jaipur, University of Rajasthan",
                            "Year of Passing": "1987"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Computer Networks, Information Security, Internet of Things, Social Networks Analysis"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=8286616100",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/132114",
                        "Google scholar : https://scholar.google.com/citations?user=ZA9up-oAAAAJ&hl=en&oi=ao",
                        "h-Index (As per Scopus Data) : 9"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "ISFO-CS: An Improved Sailfish Optimization Algorithm for Controller Selection in SDWSN. https://doi.org/10.1007/s11277-024-11710-2",
                            "Indexing": "SCIE",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "SO\u2010CPP: Sailfish optimization\u2010based controller placement in IoT\u2010enabled software\u2010defined wireless sensor networks. https://doi.org/10.1002/dac.5757",
                            "Indexing": "SCIE",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Effect of vaccination on stability of wireless sensor network against malware attack: an epidemiological model. https://doi.org/10.1007/s42979-023-02532-3",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Analysis of Impact of The Charging on Propogation Dynamics of Malware in Rechargeable Wireless Sensor Networks. doi: 10.1109/ICDT61202.2024.10489809",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Sailfish optimization-based controller selection (SFO-CS) for energy-aware multi-hop routing in software defined wireless sensor network (SDWSN). https://doi.org/10.1007/s41870-023-01426-0",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Topology based controller placement in software defined network. https://doi.org/10.1063/5.0148746",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "2",
                            "Details of Research Publication": "Epidemiological model for stability analysis of wireless sensor network under malware attack",
                            "Indexing": "SCIE",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "Graph signal processing and tunicate swarm optimization based image steganography using hybrid chaotic map based image scrambling. https://doi.org/10.1080/09720529.2022.2139934",
                            "Indexing": "SCIE",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "A new hybrid chaotic map-based image steganography using spectral graph wavelet. https://doi.org/10.1007/978-981-19-0252-9_20",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "3",
                            "Details of Research Publication": "Spectral Graph Wavelet Based Image Steganography Using SVD and Arnold Transform. DOI: https://doi.org/10.18280/ts.380422",
                            "Indexing": "SCIE",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "2",
                            "Details of Research Publication": "Dynamic spot price forecasting using stacked LSTM networks. DOI: 10.1109/ICISS49785.2020.9315988",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "2",
                            "Details of Research Publication": "VNE-NR: A node-ranking method for performing topology-aware and resource-driven virtual network embedding. DOI: 10.1109/ICCCNT49239.2020.9225533",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "2",
                            "Details of Research Publication": "Big data challenges and issues: A review. DOI:10.1007/978-3-030-24643-3_53",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "2",
                            "Details of Research Publication": "Dynamic seiz in online social networks: epidemiological modeling of untrue information. DOI: 10.14569/IJACSA.2020.0110771",
                            "Indexing": "ESCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "3",
                            "Details of Research Publication": "Amazon EC2 spot price prediction using regression random forests. DOI: 10.1109/TCC.2017.2780159",
                            "Indexing": "SCIE",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "2",
                            "Details of Research Publication": "A detailed survey on virtual network embedding. DOI: 10.1109/ICCES45898.2019.9002416",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "2",
                            "Details of Research Publication": "Magnetic induction based modified depth based routing for underwater wireless sensor networks. DOI: 10.1109/ISS1.2019.8908073",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "User response based information quality assessment of social media news posts. DOI: 10.1109/CCAA.2018.8777685",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Magnetic induction based routing in underwater wireless sensor networks. DOI: 10.1109/ICICCT.2018.8473114",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Bidding strategies for Amazon EC2 Spot Instances-A comprehensive review. DOI: 10.1109/ICCUBEA.2018.8697462",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Smart and Connecting Technologies Using Internet of Things Preface",
                            "Indexing": "",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Perceptive bidding strategy for Amazon EC2 spot instance market. https://doi.org/10.3233/MGS-180282",
                            "Indexing": "ESCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Delay minimising depth-based routing for multi-sink underwater wireless sensor networks. https://doi.org/10.1504/IJSNET.2018.092627",
                            "Indexing": "SCIE",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "2",
                            "Details of Research Publication": "Dhac based routing in wireless sensor network with asymmetric links. https://doi.org/10.1007/978-81-322-3592-7_17",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "3",
                            "Details of Research Publication": "Cost Optimization over Amazon EC2 Spot Instances-Research Challenges",
                            "Indexing": "",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "3",
                            "Details of Research Publication": "Temporal and spatial trend analysis of cloud spot instance pricing in amazon EC2. DOI: 10.1109/DASC-PICom-DataCom-CyberSciTec.2016.157",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "2",
                            "Details of Research Publication": "A survey on VANETs security attacks and sybil attack detection",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "2",
                            "Details of Research Publication": "Prefix length-based disjoint set tries for IPv6 lookup. https://doi.org/10.1007/978-981-10-0135-2_18",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "29",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "2",
                            "Details of Research Publication": "Addressing data aggregation using polynomial regression in wsns",
                            "Indexing": "SCIE",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "30",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "2",
                            "Details of Research Publication": "SGR: A New Efficient Kernel for Outlier Detection in Sensor Data Minimizing Mise",
                            "Indexing": "SCIE",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "31",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "2",
                            "Details of Research Publication": "Delay constrained routing algorithm for wsn with mobile sink. DOI: 10.1109/CSE.2014.272",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "32",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "2",
                            "Details of Research Publication": "Making data in cloud secure and usable: fully homomorphic encryption with symmetric keys. https://doi.org/10.1504/IJCNDS.2015.069673",
                            "Indexing": "ESCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "33",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "2",
                            "Details of Research Publication": "A New Kernel for Outlier Detection in WSNs Minimizing MISE",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "34",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "2",
                            "Details of Research Publication": "Hybrid virtual network embedding with K-core decomposition using path splitting. DOI: 10.1109/ICCCT2.2014.7066726",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "35",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "2",
                            "Details of Research Publication": "Fully homomorphic symmetric scheme without bootstrapping. DOI: 10.1109/CCIOT.2014.7062497",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "36",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "1",
                            "Details of Research Publication": "Priority Enabled Distance-energy based Routing Algorithm for UWSN",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "37",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013",
                            "Author Position": "1",
                            "Details of Research Publication": "Distance-energy based routing algorithm with priority handling for UWSN. DOI: https://doi.org/10.2174/2210327903666131209234510",
                            "Indexing": "SCIE",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "38",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013",
                            "Author Position": "1",
                            "Details of Research Publication": "A fully homomorphic encryption scheme with symmetric keys with application to private data processing in clouds. DOI: 10.1109 NOF.2013.6724526",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "39",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013",
                            "Author Position": "1",
                            "Details of Research Publication": "Wireless sensor networks: a review. DOI:10.2174/22103279112029990001",
                            "Indexing": "SCIE",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        }
                    ]
                }
            ]
    },

    "Dr. B. Persis Urbana IVY": {
        "name": "Dr. B. Persis Urbana IVY",
        "email": "drpersisurbanaivyb@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. B. Persis Urbana IVY.JPG",
        "designation": "Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Computer Science and Engineering",
                            "Branch": "Computer Science and Engineering",
                            "College Name/University": "Sathyabama University",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Computer Science and Engineering",
                            "Branch": "Computer Science and Engineering",
                            "College Name/University": "Anna University",
                            "Year of Passing": "2006"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Computer Science and Engineering",
                            "Branch": "Computer Science and Engineering",
                            "College Name/University": "Madras University",
                            "Year of Passing": "1999"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine Learning, Mobile Computing, Embedded Systems, IOT, Computer Networks & Security, Image Processing, Bio Informatics."
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=57199218174",
                        "Vidwan Link: https://vidwan.inflibnet.ac.in/profile/281506",
                        "Google scholar Link: https://scholar.google.com/citations?user=Y5Ox9BkAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 2"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Digital twin and artificial intelligence in industries https://doi.org/10.1016/B978-0-323-99205-3.00014-6",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "4",
                            "Details of Research Publication": "A Novel and Secured Intrusion Detection System for Wireless Sensor Networks Using Identity Based Online/Offline Signature",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "An efficient collaborative approach for black hole attack discovery and mitigating its impact in manet https://doi.org/10.1063/1.5032039",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "Design of real time game system using fuzzy logic",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "2",
                            "Details of Research Publication": "Index Based Steganography: A new secure approach for Image Steganography using two images",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "2",
                            "Details of Research Publication": "Android Based Task Scheduler and Indicator",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013",
                            "Author Position": "2",
                            "Details of Research Publication": "Modified RSA cryptosystem based on offline storage and prime number 10.1109/ICCIC.2013.6724176",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        }
                    ]
                },
                {
                    "title": "Research Projects & Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2017",
                            "Funded Project /Event": "Funded Project",
                            "Role": "Principal Investigator",
                            "Title of the Project/Event": "Design of a Learning Assistive System for Dyslexics",
                            "Amount in Rs. /-": "67,47,000",
                            "Funding Agency": "DST/TIDE"
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
                            "Application ID": "202541094858",
                            "Title of the Patent": "IOT & ML Enabled Energy Efficient Advanced 6G Communication N/W System",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2022",
                            "Application ID": "202241027568",
                            "Title of the Patent": "A study and analysis of computer aided diagnosis for segmentation and classification of brain tumor medical image using deep convolution neural network",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2022",
                            "Application ID": "202241039230",
                            "Title of the Patent": "Cyber security technology for teaching and education sector",
                            "Status": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "Others",
                            "Academic Year": "2018",
                            "Application ID": "201841002061",
                            "Title of the Patent": "Compact multi-functional smart laptop",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Received Best Researcher Award on 4th April 2012 at VIT University.",
                        "Received Best Paper Award on 9th Nov 2013 at VIT University.",
                        "Received Best Researcher Award on 23rd April 2014 at VIT University."
                    ]
                }
            ]
    },

    "Dr. Sachikanta Dash": {
        "name": "Dr. Sachikanta Dash",
        "email": "drsachikanta@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Sachikanta Dash.JPG",
        "designation": "Assoc. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Image Processing",
                            "Branch": "Computer Science",
                            "College Name/University": "Berhampur University",
                            "Year of Passing": "2019"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Gandhi Institute of Engineering and Technology, BPUT",
                            "Year of Passing": "2009"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "IT",
                            "Branch": "IT",
                            "College Name/University": "Utkal University",
                            "Year of Passing": "2004"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Image Processing, Computer Vision, Cyber Security, Blockchain"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57214124250",
                        "Vidwan : https://giet.irins.org/profile/263231",
                        "Google scholar : https://scholar.google.com/citations?user=xe4F7OwAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 11"
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
                            "Details of Research Publication": "Medisecure: a hybrid approach for enhancing multimedia data protection in healthcare https://doi.org/10.1007/s10586-025-05844-6",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Privacy-Preserving Diabetes and Heart Disease Prediction via Federated Learning and WCO. https://doi.org/10.1007/s44196-025-00956-8 Q2",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "2",
                            "Details of Research Publication": "A Secure COVID Affected CT Scan Image Encryption Scheme Using Hybrid MLSCM for IoMT Environment.DOI: 10.1109/ACCESS.2025.3568448",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "2",
                            "Details of Research Publication": "Temporal Integration of ResNet Features with LSTM for Enhanced Skin Lesion Classification. https://doi.org/10.1016/j.rineng.2025.104201",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancing Lung Cancer Diagnosis through CT Scan Image Analysis using Mask-EffNet. https://ph02.tci-thaijo.org/index.php/mijet/article/view/254068",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "An Efficient Intra-Inter Pixel Encryption Scheme to Secure Healthcare Images for an IoT Environment. https://doi.org/10.1016/j.eswa.2023.120622",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "2",
                            "Details of Research Publication": "Ensemble Deep Learning Technique for Robust Seizure Detection &lrm;Using Integrating Convolutional and Recurrent Neural Networks &lrm;with Advanced Optimization Techniques. DOI:10.14419/04tp2d60",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "2",
                            "Details of Research Publication": "An Effective Epileptic Seizure Detection Using Graph Neural Networks. https://doi.org/10.52783/jisem.v10i2s.210",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Chronological Evolution: Development and Identification of a Marathi Handwritten Character Dataset Using Deep Learning DOI:10.62441/nano-ntp.v20iS6.86",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "3",
                            "Details of Research Publication": "Implementation of Hybridized Meta-Heuristic Model for Feature Selection in Sentiment Analysis. DOI:10.62441/nano-ntp.vi.1529",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Effective Feature Selection Mechanism in Semi-Supervised Sentiment Analysis on E-Commerce Reviews. https://ijcnis.org/index.php/ijcnis/article/view/7304",
                            "Indexing": "",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Implementation of Deep learning Methods to Marathi Hand Written Characters and its Pattern Recognition by Using Generative AI. https://eudoxuspress.com/index.php/pub/article/view/1161",
                            "Indexing": "",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "2",
                            "Details of Research Publication": "Visualizing and Understanding the Customized Convolutional Neural Networks to Identify Hand Written Odia Characters and its Pattern Using Generative AI. https://ijcnis.org/index.php/ijcnis/article/view/7305",
                            "Indexing": "",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "A hybrid crypto-compression model for secure brain mri image transmission. https://doi.org/10.1007/s11042-023-16359-w",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "A Simple and Fast Medical Image Encryption System Using Chaos-Based Shifting Techniques. DOI: 10.4018/IJISP.303669",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Optimized Deep Belief Networks Based Categorization of Type 2 Diabetes using Tabu Search Optimization http://dx.doi.org/10.14569/IJACSA.2024.0150368",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "AgriSecure: A Fog Computing-Based Security Framework for Agriculture 4.0 via Blockchain. https://doi.org/10.3390/pr11030757",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "Application of Machine Learning Models for Slope Instabilities Prediction in Open Cast mines. https://ijisae.org/index.php/IJISAE/article/view/2449",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "SMOTE-based Deep LSTM System with GridSearchCV Optimization for Intelligent Diabetes Diagnosis. https://doi.org/10.52783/jes.3455",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "A Novel Optimized Colonic adenocarcinoma Detection using Deep Transfer Learning Approach with XceptionTS Model. https://doi.org/10.52783/jes.3456",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Detection of Epileptic Seizures Using Hybrid Deep Learning Approaches. https://ijisae.org/index.php/IJISAE/article/view/3568",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "A case study on the multi-hopping performance of IoT network used for farm monitoring. https://doi.org/10.3103/S0146411623010029",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "2",
                            "Details of Research Publication": "IoT-Based Hybrid Ensemble Machine Learning Model for Efficient Diabetes Mellitus Prediction. https://doi.org/10.1155/2022/2389636",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "4",
                            "Details of Research Publication": "Improving Slope Stability in Open Cast Mines via Machine Learning based IoT Framework. http://dx.doi.org/10.14569/IJACSA.2022.01310115",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Predictive Analysis On Diabetes Detection Using Pima Indian Diabetes Dataset.DOI:10.1729/Journal.40190",
                            "Indexing": "",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Iterative Model Design for Diabetes Analysis Using FedOmics Causal Network and Federated Multi-Omics Variational Autoencoder. DOI:10.1729/Journal.40277",
                            "Indexing": "",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "A Comparative Deep Learning Approach for Vehicle Speed Monitoring using YoLov11. doi: 10.1109/ICoICC64033.2025.11052042",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Efficient Prediction of Diabetes Mellitus Through Hybrid Ensemble Machine Learning Model Using IoT, DOI: 10.1109/ICAET63349.2025.10932328",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "29",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancing Diabetes Prediction using Hybrid Ensemble Approach doi: 10.1109/ICISCN64258.2025.10934316.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "30",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Implementation of Customized Convolutional Neural Networks for Handwritten Marathi Character Recognition. doi: 10.1109/SCOPES64467.2024.10990953",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "31",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Leveraging inception-v3 CNN model for efficient image classification",
                            "Indexing": "",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "32",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Machine Learning Based Diabetes Prediction Using the PIMA Indian Dataset doi: 10.1109/SCOPES64467.2024.10991027",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "33",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "3",
                            "Details of Research Publication": "An Improvised Diabetes Prediction System Using Hybrid Ensemble Approach. doi: 10.1109/UPCON62832.2024.10983076",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "34",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Diabetic Foot Ulcer Diagnosis Through Deep Learning Model. DOI: 10.1109/GlobalAISummit62156.2024.10947961",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "35",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "3",
                            "Details of Research Publication": "A Deep Learning Approach for Enhancing Cardiovascular Disease Prediction Using ECG Data. doi: 10.1109/SCOPES64467.2024.10990827",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "36",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Effective Diabetes Mellitus Prediction Using a Hybrid Ensemble Machine Learning Model with Iot. doi: 10.1109/ICIICS63763.2024.10859778.s",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "37",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Intrusion Detection Systems to avoid Cyberattack using Machine Learning. doi: 10.1109/IC3I61595.2024.10829334.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "38",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Integrating Multi-Omics Data for Advanced Diabetes Prediction and Understanding. doi: 10.1109/IC3I61595.2024.10828970",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "39",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "3",
                            "Details of Research Publication": "Harnessing Machine Learning for Enhanced Agricultural Efficiency through Advanced Data Analysis and IoT Integration. doi: 10.1109/IC3I61595.2024.10829065",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "40",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Predictive Modelling of Diabetes Complications: Insights from Binary Classifier on Chronic Diabetic Mellitus. doi: 10.1109/IC3SE62002.2024.10593308.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "41",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "4",
                            "Details of Research Publication": "Histopathological Colorectal Cancer Image Classification by Using Inception V4 CNN Model. https://doi.org/10.1007/978-981-99-4634-1_79",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "42",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Improving Breast Cancer Diagnosis: Insights From Machine Learning Models doi: 10.1109/IC3SE62002.2024.10593260",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "43",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Early Prediction and Diagnosis of Thoracic Diseases using Rough Set and Machine Learning. Electronic ISBN:978-93-80544-47-2",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "44",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Prediction of Cardiac Arrest using Generalized Soft Computing Techniques.DOI: 10.23919/INDIACom61295.2024.10498689",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "45",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Rare Diseases Severity Prediction System Using a Machine Learning-Based Technique.doi:10.1109/ICAIIHI57871.2023.10489179.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "46",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "Tomato Leaf Disease Detection using Neural Networks. doi: 10.1109/MLCSS57186.2022.00018.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "47",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "2",
                            "Details of Research Publication": "Symptoms Prediction of Tuberculosis using Soft Computing Technique doi: 10.1109/OCIT56763.2022.00071",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "48",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "4",
                            "Details of Research Publication": "Generating Higher Order Mutants using PSO with Levy Flight(LFPSO) Algorithm. doi: 10.1109/MLCSS57186.2022.00022",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "49",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "2",
                            "Details of Research Publication": "CNN Based Handwritten Odia Character Recognition. doi: 10.1109/MLCSS57186.2022.00056",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "50",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "2",
                            "Details of Research Publication": "Complex odia handwritten character recognition using deep learning model. DOI: 10.1109/EDKCON56221.2022.10032934",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "51",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "2",
                            "Details of Research Publication": "Analysis of Brain Function Effecting Form the Tumour Disease Using the Image Segmentation Technique. DOI: 10.1109/ICCSEA54677.2022.9936523",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "52",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Diabetes Mellitus Prediction Through Interactive Machine Learning Approaches. https://doi.org/10.1007/978-981-19-1412-6_12",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "53",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Intelligent IoT-Based Healthcare System Using Blockchain. https://doi.org/10.1007/978-981-19-6068-0_30",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "54",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "Induction of Secure Data Repository in Blockchain over IPFS. doi: 10.1109/ICOEI53556.2022.9776967",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "55",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "2",
                            "Details of Research Publication": "An Energy Efficient Node Localization Algorithm for Wireless Sensor Network.DOI: 10.1109/AESPC52704.2021.9708459",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "56",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "An Interactive Machine Learning Approach for Brain Tumor MRI Segmentation. https://doi.org/10.1007/978-981-16-0695-3_38",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "57",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "3",
                            "Details of Research Publication": "Liver Disease Prediction Using Machine Learning Algorithm. doi:10.1007/978-981-16-0171-2",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "58",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "2",
                            "Details of Research Publication": "A Model of Socially Connected Things for Emotion Detection. doi: 10.1109/ICCSEA49143.2020.9132887",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "59",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "An implementation of neural network approach for recognition of handwritten Odia text. https://link.springer.com/chapter/10.1007/978-981-15-2774-6_12",
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
                            "Academic Year": "2025",
                            "Application ID": "202531048254",
                            "Title of the Patent": "Scalable ML algorithms for Big Data Processing",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2024",
                            "Application ID": "423167-001",
                            "Title of the Patent": "MULTI-FUNCTION DIABETIC KIT",
                            "Status": "Granted (Design Patent)"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2024",
                            "Application ID": "6368720",
                            "Title of the Patent": "Glucose Monitoring Device for diabetic",
                            "Status": "Granted (UK patent)"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "Others",
                            "Academic Year": "2023",
                            "Application ID": "391360-001",
                            "Title of the Patent": "IOT BASED EARTH LEAKAGE DETECTION DEVICE",
                            "Status": "Granted (Design Patent)"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "Others",
                            "Academic Year": "2024",
                            "Application ID": "388157-001",
                            "Title of the Patent": "AI AND IOT BASED PUMP IRRIGATION WATER QUALITY MONITORING KIT",
                            "Status": "Granted (Design Patent)"
                        },
                        {
                            "S.No": "6",
                            "Affiliation": "Others",
                            "Academic Year": "2022",
                            "Application ID": "358285-001",
                            "Title of the Patent": "Water Bottle with Digital wallet",
                            "Status": "Granted (Design Patent)"
                        },
                        {
                            "S.No": "7",
                            "Affiliation": "Others",
                            "Academic Year": "2022",
                            "Application ID": "202211008091",
                            "Title of the Patent": "An Artificial Intelligence & Machine Learning Based System for Railway Asset Management",
                            "Status": "Published"
                        },
                        {
                            "S.No": "8",
                            "Affiliation": "Others",
                            "Academic Year": "2022",
                            "Application ID": "202211020110",
                            "Title of the Patent": "Artificial Intelligence, IoT based Prevention system to monitor nd diagnose dengue disease using machine learning algorithm",
                            "Status": "Published"
                        },
                        {
                            "S.No": "9",
                            "Affiliation": "Others",
                            "Academic Year": "2022",
                            "Application ID": "202211030108",
                            "Title of the Patent": "A system and method for managing Books, Articles Journals in alibrary system based on RFID, IoT and AI",
                            "Status": "Published"
                        },
                        {
                            "S.No": "10",
                            "Affiliation": "Others",
                            "Academic Year": "2022",
                            "Application ID": "20221035459",
                            "Title of the Patent": "A system and method for education approaches using 3d printing and Machine Learning",
                            "Status": "Published"
                        },
                        {
                            "S.No": "11",
                            "Affiliation": "Others",
                            "Academic Year": "2022",
                            "Application ID": "202211017104",
                            "Title of the Patent": "Design a wireless network data security system for medical records using cryptography",
                            "Status": "Published"
                        },
                        {
                            "S.No": "12",
                            "Affiliation": "Others",
                            "Academic Year": "2022",
                            "Application ID": "202211010350",
                            "Title of the Patent": "Heart Abnormalities Model Using Machine Learning",
                            "Status": "Published"
                        },
                        {
                            "S.No": "13",
                            "Affiliation": "Others",
                            "Academic Year": "2022",
                            "Application ID": "202211010463",
                            "Title of the Patent": "System and method for Healthcare through IoT wearables",
                            "Status": "Published"
                        },
                        {
                            "S.No": "14",
                            "Affiliation": "Others",
                            "Academic Year": "2024",
                            "Application ID": "202431076800",
                            "Title of the Patent": "Creation of Handwritten Odia character dataset and its recognition through Deep Learning Technique",
                            "Status": "Published"
                        },
                        {
                            "S.No": "15",
                            "Affiliation": "Others",
                            "Academic Year": "2024",
                            "Application ID": "202431076486",
                            "Title of the Patent": "A Deep Learning Based Marathi Handwritten Chracter Dataset Creation and its Recognition",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Consultancy",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2019",
                            "Name of the Consulting Firm": "SJSC Group of Industries",
                            "Title of the Project/Event": "Website Design and Maintenance",
                            "Amount in Rs. /-": "3,00,000"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2022",
                            "Name of the Consulting Firm": "SJSC Group of Industries",
                            "Title of the Project/Event": "Upgradation of Websites",
                            "Amount in Rs. /-": "35,000"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "Awarded with &ldquo;RESEARCH EXCELLENCE AWARD&rdquo; by Scientific International Publishing House (SIPH), Registered under the Ministry of SME, Government of India, (ISO 9001:2015 Certified)."
                }
            ]
    },

    "Dr. M. Jaganathan": {
        "name": "Dr. M. Jaganathan",
        "designation": "Assoc. Professor",
        "email": "drjaganathanm@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. M. Jaganathan.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "ICE",
                            "Group": "ICE",
                            "College Name/University": "Anna University, Chennai",
                            "Year of Passing": "2019"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Group": "CSE",
                            "College Name/University": "Anna University, Trichy",
                            "Year of Passing": "2011"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Group": "CSE",
                            "College Name/University": "K.S.Rangasamy College of Technology",
                            "Year of Passing": "2004"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Image Processing, Machine Learning, Artificial Intelligence"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId= 57200990238",
                        "Vidwan : https://mits.irins.org/profile/616781",
                        "Google scholar : https://scholar.google.co.in/citations?user=x&user=zZXTxiAAAAAJ",
                        "h-Index (As per Scopus Data) : 1"
                    ]
                },
                {
                    "title": "Research Projects & Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Funded Project /Event": "National Level conference on Recent trends in Engineering and Technology",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "National Level conference on Recent trends in Engineering and Technology",
                            "Amount in Rs. /-": "80,000",
                            "Funding Agency": "Malla Reddy Institutions"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Funded Project /Event": "National Level Conference on Artificial Intelligencet",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "National Level Conference on Artificial Intelligence",
                            "Amount in Rs. /-": "10,00,000",
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
                            "Academic Year": "2025-2026",
                            "Application ID": "202541106521",
                            "Title of the Patent": "3D Printed Modular Fixture System For Precision Machining",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2025-2026",
                            "Application ID": "202541106497",
                            "Title of the Patent": "Quantum Inspired Encryption Algorithm For Secured Data Transfer",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2025-2026",
                            "Application ID": "202541106209",
                            "Title of the Patent": "Privacy-Based User Profiling System For Personalised Digital Experiences",
                            "Status": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "Others",
                            "Academic Year": "2025-2026",
                            "Application ID": "202541108563",
                            "Title of the Patent": "Adaptive Qos-Aware Routing Protocol Using Ml For Heterogeneous Iot Devices Over 6g Networks",
                            "Status": "Published"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "Others",
                            "Academic Year": "2025-2026",
                            "Application ID": "202541106212",
                            "Title of the Patent": "Blockchain Driven Identity Management Framework For Online Learning Portals",
                            "Status": "Published"
                        },
                        {
                            "S.No": "6",
                            "Affiliation": "Others",
                            "Academic Year": "2025-2026",
                            "Application ID": "202541105835",
                            "Title of the Patent": "Adaptive Mathematical Model For Predicting Learning Curves In Education Technology",
                            "Status": "Published"
                        },
                        {
                            "S.No": "7",
                            "Affiliation": "Others",
                            "Academic Year": "2025-2026",
                            "Application ID": "202541105748",
                            "Title of the Patent": "Intelligent Lubrication Monitoring System For Rotational Machinery",
                            "Status": "Published"
                        },
                        {
                            "S.No": "8",
                            "Affiliation": "Others",
                            "Academic Year": "2025-2026",
                            "Application ID": "202541105744",
                            "Title of the Patent": "Fault Classification Mechanism Using Deep Learning For High Voltage Networks",
                            "Status": "Published"
                        },
                        {
                            "S.No": "9",
                            "Affiliation": "Others",
                            "Academic Year": "2025-2026",
                            "Application ID": "202541104682",
                            "Title of the Patent": "Cloud Resource Allocation System Using Swarm Intelligence Techniques",
                            "Status": "Published"
                        },
                        {
                            "S.No": "10",
                            "Affiliation": "Others",
                            "Academic Year": "2025-2026",
                            "Application ID": "202541104680",
                            "Title of the Patent": "Emotion Aware Human AI Interaction System For Smart Devices",
                            "Status": "Published"
                        },
                        {
                            "S.No": "11",
                            "Affiliation": "Others",
                            "Academic Year": "2025-2026",
                            "Application ID": "202541103591",
                            "Title of the Patent": "Intelligent Task Offloading Framework For Edge-Based AI Inference",
                            "Status": "Published"
                        },
                        {
                            "S.No": "12",
                            "Affiliation": "Others",
                            "Academic Year": "2025-2026",
                            "Application ID": "202541103379",
                            "Title of the Patent": "Intelligent Power Distribution Monitoring Unit For Smart Campus Applications",
                            "Status": "Published"
                        },
                        {
                            "S.No": "13",
                            "Affiliation": "Others",
                            "Academic Year": "2025-2026",
                            "Application ID": "202541102851",
                            "Title of the Patent": "Graph Based Dynamic Content Filtering System For Academic Platforms",
                            "Status": "Published"
                        },
                        {
                            "S.No": "14",
                            "Affiliation": "Others",
                            "Academic Year": "2025-2026",
                            "Application ID": "202541101726",
                            "Title of the Patent": "Cloud-Based Autonomous Framework For Disaster Response Coordination",
                            "Status": "Published"
                        },
                        {
                            "S.No": "15",
                            "Affiliation": "Others",
                            "Academic Year": "2023-2024",
                            "Application ID": "202341033867",
                            "Title of the Patent": "IOT Based Deep Learning Approach For EEG Signal Processing Using Wireless Communication",
                            "Status": "Published"
                        },
                        {
                            "S.No": "16",
                            "Affiliation": "Others",
                            "Academic Year": "2022-2023",
                            "Application ID": "202241044108",
                            "Title of the Patent": "A Computer Vision System To Assess Autism And Its Symptoms Using AI Based Technology",
                            "Status": "Published"
                        },
                        {
                            "S.No": "17",
                            "Affiliation": "Others",
                            "Academic Year": "2021-2022",
                            "Application ID": "2021410406121A",
                            "Title of the Patent": "Iot Based Smart System To Monitor And Control Electrical Appliances",
                            "Status": "Published"
                        },
                        {
                            "S.No": "18",
                            "Affiliation": "Others",
                            "Academic Year": "2020-2021",
                            "Application ID": "202011056488",
                            "Title of the Patent": "An IOT Based System To Monitor Oil Immersed Transformers And A Method Thereof",
                            "Status": "Published"
                        },
                        {
                            "S.No": "19",
                            "Affiliation": "Others",
                            "Academic Year": "2019-2020",
                            "Application ID": "201941037491",
                            "Title of the Patent": "A Method Of An Automated Ration Distributed System",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Consultancy",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2023-2024",
                            "Name of the Consulting Firm": "SVC Infotech, Hyderabad",
                            "Title of the Project/Event": "Automated Mouse and Keyboard operations Using AudioPy voice recognition",
                            "Amount in Rs. /-": "1,20,000"
                        }
                    ]
                }
            ]
    },

    "Dr. Brahm Prakash": {
        "name": "Dr. Brahm Prakash",
        "designation": "Assoc. Professor & Head",
        "email": "drbrahmprakash@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Brahm Prakash.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Group": "CSE",
                            "College Name/University": "IKG Punjab Technical University",
                            "Year of Passing": "2019"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Group": "CSE",
                            "College Name/University": "Vaish College of Engineering, Maharshi Dayanand University - Rohtak",
                            "Year of Passing": "2011"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "IT",
                            "Group": "IT",
                            "College Name/University": "Punjab Technical University",
                            "Year of Passing": "2009"
                        }
                    ]
                }
            ]
    },

    "Dr. K. P. Manikandan": {
        "name": "Dr. K. P. Manikandan",
        "email": "manikandankp@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. K. P. Manikandan.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Network Security",
                            "Branch": "Computer Science and Engineering",
                            "College Name/University": "JNTU-Kakinada",
                            "Year of Passing": "2019"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Computer Science and Engineering",
                            "Branch": "Computer Science and Engineering",
                            "College Name/University": "Raja College of Engineering and Technology, Anna University",
                            "Year of Passing": "2005"
                        },
                        {
                            "Course": "M.C.A.",
                            "Specialization": "Computer Applications",
                            "Branch": "Computer Applications",
                            "College Name/University": "Crescent Engineering College, University of Madras",
                            "Year of Passing": "1997"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Computer Science",
                            "Branch": "Computer Science",
                            "College Name/University": "CPA College, M.K. University",
                            "Year of Passing": "1993"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Network Security"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57191286795",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/459920",
                        "Google scholar : https://scholar.google.com/citations?user=JgWuwpcAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 2"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024 - 2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Real-time electronic circuit control via brain-computer interface with machine learning DOI: 10.4018/979-8-3693-7427-6.ch010",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024 - 2025",
                            "Author Position": "2",
                            "Details of Research Publication": "Optimizing energy systems using machine learning and artificial intelligence DOI: 10.4018/979-8-3693-7112-1.ch023",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024 - 2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancing Digital Forensics Security Involves the Implementation of a Robust Storage Framework that Employs AES Encryption alongside Efficient Key Generation Technique DOI: 10.1109/ICICCS65191.2025.10984918",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024 - 2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Next-Gen Malware Detection using AI AI-Powered Malware Threat Detection Automated Malware Classification Through Machine Learning DOI: 10.1109/ICICCS65191.2025.10985389",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Strengthening security, privacy, and trust in artificial intelligence drones for smart cities DOI: 10.4018/979-8-3693-3249-8.ch011",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Industry 5.0 based on Hybrid and Nonlinear Systems in Robustness https://ijisae.org/index.php/IJISAE/article/view/4507",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "A Multi-Criteria Intelligence AID Methodology and IoT Based Data Protection Using Machine Learning DOI: 10.1109/ICONSTEM56934.2023.10142810",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "1",
                            "Details of Research Publication": "Lessening of black hole and wormhole attacks using neighbor based SCF tree, R3T2, PAP and elliptic curve pseudo random cryptography algorithm",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "1",
                            "Details of Research Publication": "Detecting and preventing black hole and wormhole attacks in wireless bio sensor network using path assignment protocol",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
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
                            "Academic Year": "2025",
                            "Funded Project /Event": "Event",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "AI-Driven Water Management Solutions for Smart Cities",
                            "Amount in Rs. /-": "1,00,000",
                            "Funding Agency": "ATAL"
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
                            "Application ID": "202241062969",
                            "Title of the Patent": "Flying Network Secured Communication With Machine Learning Enabled Environment",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2021",
                            "Application ID": "202141016642 A",
                            "Title of the Patent": "Answer Rank Framework For Positioning Users Answers In Community Forums",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2021",
                            "Application ID": "202141042606 A",
                            "Title of the Patent": "Buy-Score finding the right customers in the E-Commerce",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Dr. R. Sandeep Kumar": {
        "name": "Dr. R. Sandeep Kumar",
        "designation": "Asst. Professor",
        "email": "drsandeepkumarr@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. R. Sandeep Kumar.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Faculty of Engineering",
                            "Branch": "Computer Science and Engineering",
                            "College Name/University": "MS Ramaiah University of Applied Sciences",
                            "Year of Passing": "2025"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Computer Science and Engineering",
                            "Branch": "Computer Science and Engineering",
                            "College Name/University": "Jaya Prakash Narayan College of Engineering, JNTU Hyderabad",
                            "Year of Passing": "2012"
                        },
                        {
                            "Course": "B.Tech",
                            "Specialization": "Computer Science and Engineering",
                            "Branch": "Computer Science and Engineering",
                            "College Name/University": "Sri Kottam Tulasi Reddy Memorial College of Engineering, JNTU Hyderabad",
                            "Year of Passing": "2007"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Social Network Analysis, Recommender Systems"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=57450254500",
                        "Vidwan: https://vidwan.inflibnet.ac.in/profile/513374",
                        "Google scholar: https://scholar.google.com/citations?user=0Om-4_cAAAAJ",
                        "h-Index (As per Scopus Data): 3"
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
                            "Details of Research Publication": "&quot;Effective community detection with topic modeling in article recommender systems using LS-SLM and PCC-LDA.&quot; Journal of Intelligent & Fuzzy Systems 48.6 (2025): 793-809.",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;A Hybrid Model for Cold Start Article Recommendations Leveraging Community Detection and Topic Analysis.&quot; International Conference on Computer & Communication Technologies. Singapore: Springer Nature Singapore, 2024.",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;Exploring topic coherence with PCC-LDA and BERT for contextual word generation.&quot; IEEE Access 12 (2024): 175252-175267.",
                            "Indexing": "SCIE",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;Graph-Driven Topic Discovery: Extracting Insights from Citation Networks.&quot; 2024 International Conference on Knowledge Engineering and Communication Systems (ICKECS). Vol. 1. IEEE, 2024.",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;A comparative analysis of community detection agglomerative technique algorithms and metrics on citation network.&quot; Annals of Emerging Technologies in Computing (AETiC) 7.4 (2023): 1-13.",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "&quot;Fashion recommendation system using machine learning.&quot; 2023 4th International Conference on Smart Electronics and Communication (ICOSEC). IEEE, 2023.",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;Recommender system based on deep neural network and long short term memory.&quot; 2021 International Conference on Computing, Networking, Telecommunications & Engineering Sciences Applications (CoNTESA). IEEE, 2021.",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
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
                            "Academic Year": "2024",
                            "Application ID": "202441101969",
                            "Title of the Patent": "A Deep Learning Framework for Real-Time Skin Lesion Detection and Classification",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2023",
                            "Application ID": "6282384",
                            "Title of the Patent": "Smart Spy Goggle For Collecting Images And Realtime",
                            "Status": "Granted"
                        }
                    ]
                }
            ]
    },

    "Mrs. A. Komala": {
        "name": "Mrs. A. Komala",
        "email": "komalaa@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. A. Komala.jpg",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "AI/Cognitive Science",
                            "Branch": "CSE",
                            "College Name/University": "University of Hyderabad, Hyderabad",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Information Technology",
                            "Branch": "CSE",
                            "College Name/University": "Sathyabama University, Chennai",
                            "Year of Passing": "2007"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Computer Science",
                            "Branch": "CSE",
                            "College Name/University": "S. V. University, Tirupati",
                            "Year of Passing": "1999"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Cognitive Science, Deep Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=56405621900",
                        "Vidwan : https://mits.irins.org/profile/280513",
                        "Google scholar : https://scholar.google.com/citations?user=iZf4cfwAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 2"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Leaky-Integrate-and-Fire Neuron as Pacemaker for Interval Timing. doi: 10.1109/DELCON57910.2023.10127242",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Subjective Time Estimation to Measure the Cognitive Load of Interactive MobileUser Interfaces http://dx.doi.org/10.1109/iciscois56541.2023.10100483",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "SmarTy: An Intelligent Voice Response System Model for Indian LocalLanguages doi: 10.1109/ICOEI53556.2022.9776821",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Context-based News Articles Retrieval using CLSM doi: 10.1109/ICCMC51019.2021.9418018",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2014",
                            "Author Position": "1",
                            "Details of Research Publication": "Computational models of time perception doi: 10.1109/CNSC.2014.6906670 Scopus Conference",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2014",
                            "Author Position": "1",
                            "Details of Research Publication": "Stochastic Leaky Integrator Model for Interval Timing https://doi.org/10.1007/978-3-319-13365-2_2",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Book Chapter",
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
                            "Academic Year": "2016-17",
                            "Funded Project /Event": "Funded Project",
                            "Role": "P.I.",
                            "Title of the Project/Event": "A Context-based Digital Assistant that store and retrieves articles from national English dailies.",
                            "Amount in Rs. /-": "2,20,000",
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

    "Mrs. M. Sri Lakshmi Preethi": {
        "name": "Mrs. M. Sri Lakshmi Preethi",
        "designation": "Asst. Professor",
        "email": "preethims@mits.ac.in",
        "officeAddress": "NPN204",
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

    "Mr. Tunikipalli Nagaraju Yadav": {
        "name": "Mr. Tunikipalli Nagaraju Yadav",
        "designation": "Asst. Professor",
        "email": "Nagarajuyadavt@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Tunikipalli Nagaraju Yadav.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Cloud Computing",
                            "Branch": "CSE",
                            "College Name/University": "Annamalai University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "St. Johns College of Engineering & Technology, JNTUA",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Brindavan Institute of Technology and Science (BITS), JNTUA",
                            "Year of Passing": "2012"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Cloud Computing, Computer Networks, Artificial Intelligence, Cloud Security, Cyber Security."
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=59235594500",
                        "Vidwan:",
                        "Google scholar: https://scholar.google.com/citations?user=a2fKT18AAAAJ",
                        "h-Index (As per Scopus Data): 1"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "6",
                            "Details of Research Publication": "&quot;Optimizing Industrial Engineering Performance with Fuzzy CNN Framework for Efficiency and Productivity.&quot; International Journal of Advanced Computer Science & Applications 15.6 (2024).",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "6",
                            "Details of Research Publication": "&quot;Revolutionizing UAV: experimental evaluation of IoT-enabled unmanned aerial vehicle-based agricultural field monitoring using remote sensing strategy.&quot; Remote Sensing in Earth Systems Sciences 7.4 (2024): 411-425.",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "KLEF",
                            "Academic Year": "2025-26",
                            "Application ID": "202541133467",
                            "Title of the Patent": "Automated Radar and Thermal Imaging based Multi-Sensor Surveillance System for Threat Detection and Classification",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "KLEF",
                            "Academic Year": "2024-25",
                            "Application ID": "202541006458",
                            "Title of the Patent": "Dryer-Integrated Harvesting Machine for Efficient Crop Processing",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "KLEF",
                            "Academic Year": "2024-25",
                            "Application ID": "431329-001",
                            "Title of the Patent": "AI-Based Virtual Reality Augmented Reality Device",
                            "Status": "Granted"
                        }
                    ]
                }
            ]
    },

    "Mrs. M. Fathima Begum": {
        "name": "Mrs. M. Fathima Begum",
        "email": "fathimabegumm@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. M. Fathima Begum.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Deep Learning, Machine Learning, Health Informatics",
                            "Branch": "CSE",
                            "College Name/University": "VIT University, Vellore",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Anna University",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "IT",
                            "Branch": "IT",
                            "College Name/University": "Anna University",
                            "Year of Passing": "2009"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Deep Learning, Machine Learning, Health Informatics"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58167041000",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/561818",
                        "Google scholar : https://scholar.google.com/citations?user=Irn8uGkAAAAJ&hl=en",
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
                            "Details of Research Publication": "Smart agriculture-based food quality analysis with healthcare security system using cloud machine learning model. https://doi.org/10.1007/s41976-024-00131-1",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "A novel Garson Pruned ELM model with recursive feature selection for healthcare data analysis. DOI 10.1088/2631-8695/add64a",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Comprehensive Performance Assessment of Multi-Neural Ensemble Model for Mortality Prediction in ICU. doi: 10.1109/ACCESS.2023.3324459",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "A pattern mixture model with long short-term memory network for acute kidney injury prediction. https://doi.org/10.1016/j.jksuci.2023.03.007",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Analysis of Multiple Imputation Techniques in Healthcare Data. doi: 10.1109/CCPIS59145.2023.10291545",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Preprocessing methods to improve performance of imbalanced data in healthcare. doi: 10.1109/CISCT57197.2023.10351453",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "A machine learning model for acute kidney injury prediction with novel kidney biomarkers. doi: 10.1109/ICNGIS54955.2022.10079856",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
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
                            "Application ID": "202441051128",
                            "Title of the Patent": "A Compact Inset Coupled-Fed Triangular Patch Antenna for Wideband 5G Applications",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mr. Goli Nageswararao": {
        "name": "Mr. Goli Nageswararao",
        "designation": "Asst. Professor",
        "email": "nageswararaog@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Goli Nageswararao.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Networks",
                            "Branch": "CSE",
                            "College Name/University": "IIT Tirupati",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CS",
                            "Branch": "CS",
                            "College Name/University": "University of Hyderabad, Hyderabad",
                            "Year of Passing": "2019"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "JNTUK University College of Engineering Vizianagaram",
                            "Year of Passing": "2017"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus :",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/664076",
                        "Google scholar :",
                        "h-Index (As per Scopus Data) :"
                    ]
                }
            ]
    },

    "Mr. M. Mutharasu": {
        "name": "Mr. M. Mutharasu",
        "email": "mutharasum@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. M. Mutharasu.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "AI",
                            "Branch": "CSE",
                            "College Name/University": "Anna University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "IT",
                            "Branch": "IT",
                            "College Name/University": "Sathyabama University",
                            "Year of Passing": "2009"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "IT",
                            "Branch": "IT",
                            "College Name/University": "S.Veerasamy Chettiar College of Engg & Technology, Anna University",
                            "Year of Passing": "2005"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58906623600",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/460119/NDYwMTE5",
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
                            "Author Position": "2",
                            "Details of Research Publication": "A Recent Research and Evolving Patterns in Computer Vision Employing Deep Learning DOI: 10.1109/INCET64471.2025.11139962",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "YARS-IDS: A Novel IDS for Multi-Class Classification doi: 10.1109/ACCAI61061.2024.10601966",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Real-Time Gesture Recognition for Volume Control Using Python and ML Techniques DOI: 10.1109/ICSCNA63714.2024.10864041",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Enhancing Energy Efficiency in Smart Cities: Advanced ANN and Decision Tree Model for Solar Energy with IoT and Cloud Server. https://ijisae.org/index.php/IJISAE/article/view/4201",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Energy Efficient Task Scheduling Strategy using Modified Coot Optimization Algorithm for Cloud Computing. DOI: https://doi.org/10.54216/JISIoT.120104",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Synergizing Federated Learning and In- Memory Computing: An Experimental Approach for Drone Integration https://doi.org/10.4018/979-8-3693-5643-2.ch004",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Book Chapter",
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
                            "Application ID": "6447086",
                            "Title of the Patent": "AI ENABLED MEDICAL DEVICE FOR DETECTION OF ALZHEIMER&rsquo;S",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Application ID": "407919-001",
                            "Title of the Patent": "IOT BASED PROCESSING DEVICE FOR OPTIMIZING PUBLIC TRANSPORT ROUTE",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mr. Roni Das": {
        "name": "Mr. Roni Das",
        "email": "ronidas@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Roni Das.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "AI/ML",
                            "Branch": "Computer science and Engineering",
                            "College Name/University": "Vikrant University, Gwalior",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "ML",
                            "Branch": "Information Technology",
                            "College Name/University": "Jadavpur University, Kolkata",
                            "Year of Passing": "2024"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Mechanical Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Maulana Abul Kalam Azad University of Technology, West Bengal",
                            "Year of Passing": "2020"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "AI/ML"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : http://www.scopus.com/authid/detail.url?authorId=60120145300",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/667725",
                        "Google scholar : http://scholar.google.co.in/citations?user=IhmL5VMAAAAJ",
                        "h-Index (As per Scopus Data) :"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "4",
                            "Details of Research Publication": "Federated Edge Intelligence for Privacy-Preserving Pre-eclampsia Prediction in IoT-Based Maternal Care DOI: 10.1109/ICETETSIP64213.2025.11156336",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "5",
                            "Details of Research Publication": "AI-Driven Channel Estimation for 6G Networks: Synergizing RIS, Photonic Signal Processing, and Metaheuristic Algorithms DOI: 10.1109/WorldSUAS66815.2025.11199048",
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
                            "Academic Year": "2025",
                            "Application ID": "451683-001",
                            "Title of the Patent": "SMART CAR INTERIOR WITH AI-BASED EYE TRACKING AND DROWSINESS DETECTION",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mrs. S. Annapurna Shobitha": {
        "name": "Mrs. S. Annapurna Shobitha",
        "designation": "Asst. Professor",
        "email": "annapurnas@mits.ac.in",
        "officeAddress": "NPN204",
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

    "Mr. K. C. Mohanraj": {
        "name": "Mr. K. C. Mohanraj",
        "designation": "Asst. Professor",
        "email": "mohanrajkc@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. K. C. Mohanraj.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.E.",
                            "Specialization": "Computer science and Engineering",
                            "Branch": "Computer science and Engineering",
                            "College Name/University": "Karpagam university, Coimbatore",
                            "Year of Passing": "2011"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Computer science and Engineering",
                            "Branch": "Computer science and Engineering",
                            "College Name/University": "Anna University, Chennai",
                            "Year of Passing": "2009"
                        }
                    ]
                }
            ]
    },

    "Mrs. C. Ushapriya": {
        "name": "Mrs. C. Ushapriya",
        "designation": "Asst. Professor",
        "email": "ushapriyac@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. C. Ushapriya.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Computer science and Engineering",
                            "Branch": "Computer science and Engineering",
                            "College Name/University": "VSB Engineering College, Karur",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Computer science and Engineering",
                            "Branch": "Computer science and Engineering",
                            "College Name/University": "PGP College of Engineering and Technology, Namakkal",
                            "Year of Passing": "2012"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.url?authorId=58733466900",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/515553",
                        "Google scholar :",
                        "h-Index (As per Scopus Data) : 3"
                    ]
                }
            ]
    },

    "Mr. Karanam Seshagiri Rao": {
        "name": "Mr. Karanam Seshagiri Rao",
        "designation": "Asst. Professor",
        "email": "seshagiriraok@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Karanam Seshagiri Rao.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Computer science and Engineering",
                            "Branch": "Computer science and Engineering",
                            "College Name/University": "St.Johns College of Engineering, JNTUA",
                            "Year of Passing": "2021"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Computer science and Engineering",
                            "Branch": "Computer science and Engineering",
                            "College Name/University": "St.Johns College of Engineering, JNTUA",
                            "Year of Passing": "2019"
                        }
                    ]
                }
            ]
    },
    "Mr. Bhabani Sankar Samantray": {
        "name": "Mr. Bhabani Sankar Samantray",
        "designation": "Asst. Professor",
        "email": "bhabanisankars@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Bhabani Sankar Samantray.JPG",
        "sections": [
            {
                "title": "Details of Educational Qualification",
                "content": [
                    { "Course": "Ph.D.", "Specialization": "Blockchain Technologies & Secure Systems", "Branch": "CSE", "College Name/University": "VIT-AP University", "Year of Passing": "Pursuing" },
                    { "Course": "M.Tech.", "Specialization": "Computer Science and Engineering", "Branch": "CSE", "College Name/University": "Biju Patnaik University of Technology", "Year of Passing": "2014" },
                    { "Course": "M.C.A.", "Specialization": "Computer Applications", "Branch": "MCA", "College Name/University": "Biju Patnaik University of Technology", "Year of Passing": "2009" }
                ]
            }
        ]
    },
    "Mrs. Pagadala Naveena": {
        "name": "Mrs. Pagadala Naveena",
        "designation": "Asst. Professor",
        "email": "naveenap@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. Pagadala Naveena.JPG",
        "sections": [
            {
                "title": "Details of Educational Qualification",
                "content": [
                    { "Course": "M.Tech.", "Specialization": "Computer Science and Engineering", "Branch": "CSE", "College Name/University": "Vemu Institute of Technology", "Year of Passing": "2020" },
                    { "Course": "B.Tech.", "Specialization": "Information Technology", "Branch": "IT", "College Name/University": "SITAMS", "Year of Passing": "2016" }
                ]
            }
        ]
    },
    "Ms. Chinnapapannagari Aparna": {
        "name": "Ms. Chinnapapannagari Aparna",
        "designation": "Asst. Professor",
        "email": "aparnac@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Ms. Chinnapapannagari Aparna.JPG",
        "sections": [
            {
                "title": "Details of Educational Qualification",
                "content": [
                    { "Course": "M.Tech.", "Specialization": "Computer Science and Engineering", "Branch": "CSE", "College Name/University": "MITS", "Year of Passing": "2021" }
                ]
            }
        ]
    }
  */
};

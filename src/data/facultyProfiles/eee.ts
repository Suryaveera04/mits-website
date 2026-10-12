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

export const eeeProfiles: Record<string, FacultyProfile> = {
  /*
  // Static faculty profile data preserved in comments (Dynamic profiles fetched from EngageAI database API)
"Dr. C. Kamal Basha": {
        "name": "Dr. C. Kamal Basha",
        "email": "viceprincipaladministration@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/kamalbasha.JPG",
        "designation": "Professor &amp; Vice Principal",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Electrical Engineering",
                            "Branch": "Electrical & Electronics Engineering",
                            "College Name/University": "JNTUA, Anantapur",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Control Systems",
                            "Branch": "Electrical & Electronics Engineering",
                            "College Name/University": "Govt. College of Engineering Pune, Pune University",
                            "Year of Passing": "2004"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Electrical & Electronics Engineering",
                            "Branch": "Electrical & Electronics Engineering",
                            "College Name/University": "Narayana Engg. College JNTU, Hyderabad",
                            "Year of Passing": "2002"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Electrical Engineering"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57192890203",
                        "Vidwan : https://mits.irins.org/profile/274675",
                        "Google scholar : https://scholar.google.co.uk/citations?user=4mP6iiIAAAAJ&hl=en",
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
                            "Author Position": "4",
                            "Details of Research Publication": "&ldquo;Enhanced solar-driven photocatalytic hydrogen production, dye degradation, and supercapacitor functionality using MoS\u2082&ndash;TiO\u2082 nanocomposite&rdquo;, Ceramics International, Vol. 50, Issue 20, 2024",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Simultaneous electrochemical detection of dopamine and uric acid based on tri-composite of poly-pyrrole and &alpha;-Fe\u2082O\u2083 embedded MoS\u2082 sheets modified electrode&rdquo;, Microchemical Journal, Vol. 198, 2024",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "6",
                            "Details of Research Publication": "&ldquo;Efficiency Analysis of VSC Controllers: Discrete PWM vs Improved Hysteresis PWM for Voltage Sag Improvement in Grid-Connected Hybrid PV-Wind Systems&rdquo;, Proceedings of ICONSCEPT 2024",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Electric Vehicles Battery Management Device &ndash; Opportunities and Implications&rdquo;, Proceedings of ICERCS 2023",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;An effective technique for controlling the speed of sensor less induction motor through modified EKF&rdquo;, Smart Innovation, Systems and Technologies, Vol. 105, 2019",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "3",
                            "Details of Research Publication": "&ldquo;Real-time analysis of a nonlinear state observer with improved disturbance compensation for sensor less induction motor&rdquo;, Advances in Intelligent Systems and Computing, Vol. 695, 2018",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;FPGA-Based implementation of Stator Current Observer for sensor less induction motor drive&rdquo;, International Journal of Control Theory and Applications, Vol. 9, Issue 32, 2016",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        }
                    ]
                },
                {
                    "title": "Research Projects & Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Funded Project /Event": "Funded Project",
                            "Role": "Co-P. I.",
                            "Title of the Project/Event": "Magneto electric coupling in alternate multi-nano layers of ferroelectric and ferro magnetic materials on planner and stepped interface terminations",
                            "Amount in Rs. /-": "34,49,000",
                            "Funding Agency": "DST-SERB: ECRA, New Delhi"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Participated in an Online Awareness Program &quot;Drugs Free Andhra Pradesh (DFAP) Program&quot; was organised by Government of Andhra Pradesh in collaboration with the Sambandh Health Foundation on 28th January 2025.",
                        "Participated in 5 Day Workshop on &ldquo;NBA & NAAC Accreditation Process&rdquo; Sponsored by AICTE under Margadarshana Scheme at M S Ramaiah Institute of Technology, Bengaluru on 10th Dec - 14th Dec 2018.",
                        "Two-Day National Conference on New-Trends in Multi-Disclipanary Research and Practice-(NTMRP)-2016 Organized by organized by GITAM University, Bangalore on 07 -08 October 2016.",
                        "3rd International Conference in Transformations in Engineering Education (ICTIEE 2016) was organized by IUCEE (Indo-US Collaboration for Engineering Education) and College of Engineering, Pune (COEP) during 08-12 January 2016.",
                        "A workshop on ABET Accreditation and Program Assessment was organized by ABET in Association with IEEE Education Society Chapter, India Council on 28 September 2015, chennai.",
                        "Center for Education Technology (CET), IIT Kharagpur has conducted one day faculty development program on &ldquo;effective teaching continuing education program&rdquo; on 13th October 2014. The key speakers are Dr. S K Das Mandal and Dr. Tamali Bhattacharaya.",
                        "Two day Workshop on &quot;OUTCOME BASED EDUCATION APPROACH IN ENGINEERING CURRICULUM&quot; organized by JNTUA, Anantapuram on 26th & 27th August 2014.",
                        "One Day Workshop on MIT edX Workshop in collaboration with Government of Andhra Pradesh at Bits, Pilani Hyderabad was organized on Monday, 23rd December 2013.",
                        "Seven days training programme, &ldquo;Training on Management Capacity Enhancement for Administrators&rdquo; organized by IIM Indore with NPIU during September 24 to 30, 2013.",
                        "A one-day workshop on &ldquo;Curricular Aspects and Academic Regulations&rdquo; organised by Sree Vidyanikethan Engineering College, Tirupati on 25-05-2013.",
                        "A three day workshop on &ldquo;HIGH VOLTAGE ENGINEERING&rdquo; organized by the Department of Electrical & Electronics Engineering , JNTUCEH, Kukatpally, Hyderabad from 6 to 8 March, 2013. Applications of Artificial Intelligence to power systems-one-day National level workshop 25-sep- 2010,MITS, Madanapalli.",
                        "Applications of Artificial Intelligence to power systems-one-day National level workshop 25-sep- 2010,MITS, Madanapalli.",
                        "Building an Education and Research Program in Power and Energy systems international 5 Days workshop 27 to 1-June-2011 MITS, Madanapalli.",
                        "Globally Relevant Electrical and Computer technology curriculum- two days international workshop 16 to 17-Aug-2011 MITS, Madanapalli."
                    ]
                }
            ]
    },

    "Dr. A. V. Pavan Kumar": {
        "name": "Dr. A. V. Pavan Kumar",
        "email": "pavankumarav@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. A. V. Pavan Kumar.JPG",
        "designation": "Professor &amp; Assistant Dean",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "LFC in Hybrid Power System",
                            "Branch": "EEE",
                            "College Name/University": "Birla Institute of Technology & Science, Pilani, Hyderabad Campus",
                            "Year of Passing": "2018"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Electrical Power Engineering",
                            "Branch": "EEE",
                            "College Name/University": "North Umbria University, Newcastle Upon Tyne, UK",
                            "Year of Passing": "2007"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Electrical Engineering",
                            "Branch": "Electrical Engineering",
                            "College Name/University": "R.T.M. Nagpur University",
                            "Year of Passing": "2005"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Hybrid Power System, Electric Vehicles, Power Converter Design"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=56169903900",
                        "Vidwan : https://mits.irins.org/profile/274318",
                        "Google scholar : https://scholar.google.com/citations?user=1vJobDYAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 8"
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
                            "Details of Research Publication": "Enhanced Economic Load Dispatch Using a Novel Optimization Approach: A Cost Minimization Perspective 2025 Fifth International Conference on Advances in Electrical, Computing, Communication and Sustainable Technologies (ICAECT)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "2",
                            "Details of Research Publication": "Cost Minimization in Residential Hybrid Energy Systems Using Advanced Scheduling Algorithms 2025 Fifth International Conference on Advances in Electrical, Computing, Communication and Sustainable Technologies (ICAECT)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "3",
                            "Details of Research Publication": "A state-of-the-art review on concurrent voltage and frequency regulation problems in renewable integrated power networks, Energy Sources, Part A: Recovery, Utilization, and Environmental Effects,16-49,2025",
                            "Indexing": "SCIE & Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "A Novel Hybrid TLBO-RAT Algorithm for Optimal and Cost-Effective Power Generation Scheduling 2024 2nd International Conference on Self Sustainable Artificial Intelligence Systems (ICSSAS)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "6",
                            "Details of Research Publication": "Data Integrity and Cost Efficiency in Smart Grids: Block-chain Integration Approach 2024 1st International Conference on Advanced Computing and Emerging Technologies (ACET)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "6",
                            "Details of Research Publication": "Design and Analysis of BLDC Motor-Based Electric Vehicle Using Fuzzy Logic Controller,2024 International Conference on Signal Processing, Computation, Electronics, Power and Telecommunication (IConSCEPT),45778,2024",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Efficiency Analysis of VSC Controllers: Discrete PWM vs Improved Hysteresis PWM for Voltage Sag Improvement in Grid-Connected Hybrid PV-Wind Systems,2024 International Conference on Signal Processing, Computation, Electronics, Power and Telecommunication (IConSCEPT),45778,2024",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "3",
                            "Details of Research Publication": "Estimating Lithium-Ion Battery State of Health with Least Squares Approach for Accurate Assessment,2024 Second International Conference on Emerging Trends in Information Technology and Engineering (ICETITE),45839,2024",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Reactive Power Compensation in Multi-microgrid Environment,2024 International Conference on Signal Processing, Computation, Electronics, Power and Telecommunication (IConSCEPT),45778,2024",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Three-Phase Power Distribution from Electric Vehicles: Enabling Rural Electrification and Sustainable Mobility,2024 International Conference on Signal Processing, Computation, Electronics, Power and Telecommunication (IConSCEPT), 45778,2024",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "6",
                            "Details of Research Publication": "Unbalanced Distribution Network Cross-Country Fault Diagnosis Method with Emphasis on High-Impedance Fault Syndrome, Engineering, Technology & Applied Science Research,13517-13522,2024",
                            "Indexing": "ESCI & Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "A DVR-Based Compensation System Under Various Power System Faults in a Multi-microgrid, International Conference on Electric Power and Renewable Energy,245-255,2023",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "An Investigation of Fault Detection in Electrical Distribution Systems Using Deep Neural Networks, International Conference on Electric Power and Renewable Energy, 317-333,2023",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Electric Vehicles Battery Management Device&ndash;Opportunities and Implications, 2023 International Conference on Emerging Research in Computational Science (ICERCS), 45809,2023",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Author Position": "4",
                            "Details of Research Publication": "An Intelligent Fault Detection and Classification Scheme for Distribution Lines Using Machine Learning, Engineering, Technology & Applied Science Research,8972-8977,2022",
                            "Indexing": "ESCI & Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Author Position": "5",
                            "Details of Research Publication": "Pattern Recognition Technique Based Fault Detection in Multi-Microgrid.,2021 IEEE 2nd International Conference on Applied Electromagnetics, Signal Processing, & Communication (AESPC),45809,2022",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021",
                            "Author Position": "4",
                            "Details of Research Publication": "Power System Fault Detection Using Image Processing And Pattern Recognition,2021 IEEE 2nd International Conference on Applied Electromagnetics, Signal Processing, & Communication (AESPC),45778,2021",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021",
                            "Author Position": "2",
                            "Details of Research Publication": "Roof Top Agriculture with Rainwater Harvesting and Smart Irrigation System, Advances in Clean Energy Technologies: Select Proceedings of ICET 2020,463-474,2021",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "A Technical Implementation of Frequency Subordinate Control of WPG, IEEE, 2019 International Conference on Computation of Power, Energy, Information and Communication (ICCPEIC), 27-28 March 2019,034-039,2020",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020",
                            "Author Position": "5",
                            "Details of Research Publication": "IoT-Based Automatic Irrigation Control, Advances in Electrical Control and Signal Systems: Select Proceedings of AECSS 2019,841-849,2020",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "MPPT-Based Inverter Control of Grid-Connected PV&ndash;Wind Hybrid Power System, Advances in Electrical Control and Signal Systems: Select Proceedings of AECSS 2019,43-55,2020",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019",
                            "Author Position": "3",
                            "Details of Research Publication": "Wearable Exoskeleton Assisted Rehabilitation in Multiple Sclerosis by Using Conventional Control Methods,2019 3rd International Conference on Computing Methodologies and Communication (ICCMC),49-53,2019",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "3",
                            "Details of Research Publication": "A review of reactive power compensation techniques in microgrids, Renewable and Sustainable Energy Reviews,1030-1036, 2018",
                            "Indexing": "SCIE & Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "TIE-LINE FREQUENCY BIAS CONTROL OF PV-WIND HYBRID POWER SYSTEM FOR MICRO GRID APPLICATION, U P B Series C Electrical Engineering and Computer Science,217-230,2018",
                            "Indexing": "ESCI & Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "1",
                            "Details of Research Publication": "Digital Simulation of Voltage Regulated Inverter for FLC Controlled Autonomous PV-Wind Hybrid Power System, Journal of Electrical Engineering, 323-331,2017",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "1",
                            "Details of Research Publication": "Performance Analysis of FLC Controlled PV-Wind Hybrid Power System for dc Load with Real-Time Data in Matlab, Simulink, Journal of Electrical and Electronics Engineering,15,2017",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "1",
                            "Details of Research Publication": "Solar Illumination And Wind Speed Prediction: The Relative Prospects and Potential outcomes, Journal of Electrical Engineering,287-297, 2017",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "1",
                            "Details of Research Publication": "A comparative analysis of Load Frequency Control Strategy of a Voltage Source Inverter for a stand-alone PV-Wind hybrid system,2016 IEEE 6th International Conference on Power Systems (ICPS), 45809, 2016",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "29",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "1",
                            "Details of Research Publication": "A Discrete PLL Based Load Frequency Control of FLC-Based PV-Wind Hybrid Power System with Real Time Data, International Journal of Power Electronics and Drive Systems, 2016",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "30",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "3",
                            "Details of Research Publication": "Microgrid reactive power compensation using upqc with common dc link energy restored by pv array,2016 International Conference on Emerging Trends in Engineering, Technology and Science (ICETETS), 45870, 2016",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "31",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "3",
                            "Details of Research Publication": "Performance analysis of voltage regulated inverter for FLC based PV-wind hybrid power system with real time data,2016 International Conference on Emerging Trends in Engineering, Technology and Science (ICETETS), 45870, 2016",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "32",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "3",
                            "Details of Research Publication": "Utilization of Unified Power Quality Conditioner for Voltage Sag/Swell Mitigation in Microgrid,2016 Biennial International Conference on Power and Energy Systems: Towards Sustainable Energy (PESTSE), 45809, 2016",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "33",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "4",
                            "Details of Research Publication": "Application of Dynamic Voltage Restorer in microgrid for voltage sag/swell mitigation,2015 IEEE Power, Communication and Information Technology Conference (PCITC),750 - 755,2015",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "34",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "3",
                            "Details of Research Publication": "Fuzzy logic based control for IPFC for damping low frequency oscillations in multimachine power system,2015 IEEE IAS Joint Industrial and Commercial Power Systems/Petroleum and Chemical Industry Conference (ICPSPCIC), 32-36, 2015",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "35",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "1",
                            "Details of Research Publication": "Implementation of MPPT Control Using Fuzzy Logic in Solar-Wind Hybrid Power System,2015 IEEE International Conference on Signal Processing, Informatics, Communication and Energy Systems (SPICES), 45778, 2015",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "36",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "1",
                            "Details of Research Publication": "Investigation of small PMSG based wind turbine for variable wind speed,2015 International Conference on Recent Developments in Control, Automation and Power Engineering (RDCAPE),107-112, 2015",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "37",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "3",
                            "Details of Research Publication": "Reactive power compensation in microgrids using custom power devices,2015 IEEE IAS Joint Industrial and Commercial Power Systems/Petroleum and Chemical Industry Conference (ICPSPCIC), 96-104, 2015",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "38",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "1",
                            "Details of Research Publication": "Performance Analysis of a Two-Diode model of PV cell for PV based generation in MATLAB,2014 IEEE International Conference on Advanced Communications, Control and Computing Technologies, 68-72, 2014",
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
                            "Academic Year": "2024",
                            "Application ID": "437594-001",
                            "Title of the Patent": "Automated Aggregates Impact Testing Machine",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2018",
                            "Application ID": "2021102648",
                            "Title of the Patent": "An E-Vehicles Charging By Wi-Fi Pad By Using Iot And System",
                            "Status": "Granted"
                        }
                    ]
                }
            ]
    },

    "Dr. Manavaalan Gunasekaran": {
        "name": "Dr. Manavaalan Gunasekaran",
        "email": "drmanavaalang@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Manavaalan Gunasekaran.JPG",
        "designation": "Assoc. Professor &amp; Head",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Robotics and Control",
                            "Branch": "Electrical Engineering",
                            "College Name/University": "Indian Institute of Technology, Kanpur",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Applied Electronics",
                            "Branch": "Electrical and Electronics Engineering",
                            "College Name/University": "Coimbatore Institute of Technology, Anna University",
                            "Year of Passing": "2005"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Electrical and Electronics Engineering",
                            "Branch": "Electrical and Electronics Engineering",
                            "College Name/University": "Pallavan College of Engineering, Madras University",
                            "Year of Passing": "2003"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Robotics, Control Systems"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=36004605200",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/120171",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=dSYHFMYAAAAJ",
                        "h-Index (As per Scopus Data) : 7"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "Improved Kookaburra Optimized Dense Bi-LSTM With Attention Mechanism for Estimation and Prediction of SOH in Li-Ion Batteries, Journal of Optimal Control Applications and Methods, June 2025",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "Enhancing hydrogen production and wastewater treatment through an integrated bioelectrochemical system combining dark fermentation and galvanic cells, Journal of Biomass and Bioenergy, vol. 201, June 2025",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "A Novel Bat algorithm optimized Quantum Neural Network based MPPT Techniques for Enhanced Photovoltaic in Grid Connected System Performance, Journal of Circuits, Systems and Computers, Oct 2025",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "ARBOA-optimized cascaded PI&ndash;FOPID&ndash;PID controller for robust vehicle lateral path tracking, Transportation Letters: The International Journal of Transportation Research, Jan 2026.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Trajectory tracking control of a mobile robot using fuzzy logic controller with optimal parameters, Robotica, pp. 1&ndash;24, Sept 2024.",
                            "Indexing": "Scopus, SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Energy saving and speed control in autonomous electric vehicle using enhanced manta ray foraging algorithm optimized intelligent systems, Journal of Power Sources, vol. 619, Nov 2024",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Optimization of automated anodizing plant efficiency and process prediction using Random Forest based Levy flight method, Chemical Engineering Science, vol. 300, Dec 2024.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Sensitivity assessment of optimal control strategies and cost-effectiveness analysis of a novel Candida Auris environmental transmission model in intensive care facilities, Journal of Theoretical Biology, vol. 595, Dec 2024.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "VLSI architecture of a True Random Number Generator with hierarchical Von Neumann corrector and hybrid run length Golomb coding for data compression, Journal of Analog Integrated Circuits and Signal Processing, vol. 123, no. 41, April 2025.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "5",
                            "Details of Research Publication": "Android Application to Control Commercial UAV, Journal of Ubiquitous Computing and Communication Technologies, vol. 5, pp. 83&ndash;95, March 2023.",
                            "Indexing": "WoS-SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Developing digital twin design for enhanced productivity of an automated anodizing industry and process prediction using hybrid deep neural network, Engineering Applications of Artificial Intelligence, Elsevier, vol. 122, pp. 1&ndash;20, June 2023",
                            "Indexing": "Scopus, SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Five-Phase Induction Motor Drive-A Comprehensive Review, Journal of Frontiers in Energy Research, vol.11, pp. 1&ndash;17, Aug 2023",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "A Survey on Intrusion Detection System in Smart City: Security Concerns, International Conference on Computer Applications in Electrical Engineering - Recent Advances (CERA23), IIT Roorkee, Oct. 27-29 2023.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Investigating the performance of Internet of Things in a Traditional Anodizing Industry for improved Quality and Delivery of Products using Response Surface Methodology, International Conference on Computer Applications in Electrical Engineering - Recent Advances (CERA23), IIT Roorkee, Oct. 27-29 2023.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Development and Control of a Four-Wheel Drive Holonomic Mobile Robot, International Conference on Computer Applications in Electrical Engineering - Recent Advances (CERA23), IIT Roorkee, Oct. 27-29 2023.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "5",
                            "Details of Research Publication": "Development and Control of Mobile Manipulator - Four-Wheeled Drive Mobile Robot with a 3-DoF Manipulator, International Conference on Electronics, Computing, Communication and Control Technology, CMR Institute of Technology, Bangalore, May 2-3 2024.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "Robust Queen Bee assisted Genetic Algorithm (QBGA) Optimized Fractional Order PID (FOPID) Controller for Not Necessarily Minimum Phase Power Converters, IEEE Access. vol. 9, pp. 93331&ndash;93337, 2021.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "2",
                            "Details of Research Publication": "Genetic Algorithm Based Reference Current Control Extraction Based Shunt Active Power Filter, International Transactions on Electrical Energy Systems. vol. 31, no. 1, pp. 1&ndash;22, January 2021",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "3",
                            "Details of Research Publication": "A Comparative Analysis of Switching Logics for Five Phase Voltage Source Inverter, First International Conference on Power, Control and Computing Technologies, organized by National Institute of Technology, Raipur, Chhattisgarh during Jan 3-5, 2020",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Author Position": "5",
                            "Details of Research Publication": "Efficiency improvement of a 24V DC nano-grid system with ZCS technique, in proceedings of IEEE International Conference on Power, Control, Signals and Instrumentation Engineering (ICPCSI), organized by Saveetha Engineering College, Chennai, Sept. 21-22, 2017, pp. 479-482",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-17",
                            "Author Position": "1",
                            "Details of Research Publication": "A closed loop system to stabilize a 24V solar DC Nano grid, in proceedings of International Conference on Smart grids, Power and Advanced Control Engineering (ICSPACE), Aug. 17&ndash;19, 2017, pp. 177-182",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012-13",
                            "Author Position": "1",
                            "Details of Research Publication": "Low-Cost Undergraduate Control Systems Experiments Using Microcontroller-Based Control of a DC Motor, IEEE Transactions on Education, vol. 55, no. 4, pp. 508&ndash;516, November 2012.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2008-09",
                            "Author Position": "1",
                            "Details of Research Publication": "Cooperative Control of a Dual-Motor Ball and Beam System, in proceedings of the IEEE Conference on Control, Communication and Automation (INDICON-2008), Dec. 11&ndash;13, 2008, pp. 525&ndash;530.",
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
                            "Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Funded Project /Event": "Funded Project",
                            "Role": "Co-P.I.",
                            "Title of the Project/Event": "Path Tracking Control of All-Terrain Rover (ATR) with manipulator under Actuator Failure Conditions",
                            "Amount in Rs. /-": "17,11,000",
                            "Funding Agency": "TEQIP"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2015-16",
                            "Funded Project /Event": "Event",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "6-day workshop on &ldquo;Embedded Control systems with Hands-on Lab Sessions&rdquo;",
                            "Amount in Rs. /-": "20,000",
                            "Funding Agency": "CMRIT"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2015-16",
                            "Funded Project /Event": "Event",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "4-day Faculty Development Program on &ldquo;Control Systems With MATLAB&rdquo; 20,000",
                            "Amount in Rs. /-": "20,000",
                            "Funding Agency": "CMRIT"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "Others",
                            "Academic Year": "2016-17",
                            "Funded Project /Event": "Event",
                            "Role": "Co-Coordinator",
                            "Title of the Project/Event": "5-day Faculty Development Program on Linear Integrated Circuits with PSpice",
                            "Amount in Rs. /-": "20,000",
                            "Funding Agency": "CMRIT"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Funded Project /Event": "Event",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "One-Week AICTE sponsored QIP course on &quot;Control Techniques for Networked Control Systems&quot;",
                            "Amount in Rs. /-": "2,00,000",
                            "Funding Agency": "AICTE"
                        },
                        {
                            "S.No": "6",
                            "Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Funded Project /Event": "Event",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "TEQIP - III Sponsored Industry Connect Two-Day Hands-on Workshop on &quot;Robotics and Automation&quot;",
                            "Amount in Rs. /-": "20,000",
                            "Funding Agency": "TEQIP"
                        },
                        {
                            "S.No": "7",
                            "Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Funded Project /Event": "Event",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "TEQIP &ndash; III Sponsored Three-Day Hands&ndash;on Workshop On &ldquo;Robotics and Automation&rdquo;",
                            "Amount in Rs. /-": "40,000",
                            "Funding Agency": "TEQIP"
                        },
                        {
                            "S.No": "8",
                            "Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Funded Project /Event": "Event",
                            "Role": "Co-Coordinator",
                            "Title of the Project/Event": "One-day Workshop On &ldquo;Impacts of Power Quality in Industries & Recent Updates in TNERC Standards&rdquo;",
                            "Amount in Rs. /-": "20,000",
                            "Funding Agency": "CIT"
                        },
                        {
                            "S.No": "9",
                            "Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Funded Project /Event": "Event",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Two-day Workshop On &ldquo;Robotics and AI for Industry 4.0&rdquo;",
                            "Amount in Rs. /-": "20,000",
                            "Funding Agency": "CIT"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2026-27",
                            "Application ID": "6533229",
                            "Title of the Patent": "Solar panel tracking apparatus for power generation",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Application ID": "Indian Utility Patent field, application no. 202541073758 A, published 22/08/2025, No. 34/2025.",
                            "Title of the Patent": "Design of Embedded Board for Anti-theft of Motor Bike",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Consultancy",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "CMRIT",
                            "Academic Year": "2013-14",
                            "Name of the Consulting Firm": "FONESS India Prv. Ltd., Bangalore",
                            "Title of the Project/Event": "Development of MRO Power Supply",
                            "Amount in Rs. /-": "1,00,000"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "CMRIT",
                            "Academic Year": "2015-16",
                            "Name of the Consulting Firm": "Concord United Products Pvt. Ltd., Bangalore",
                            "Title of the Project/Event": "Development of BMXP Software Board and Control System for wire cut EDM machines",
                            "Amount in Rs. /-": "5,50,000"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "2010-2011: Awarded a scholarship to assist in the development of control systems of the Moon rover that IIT Kanpur developed as part of an IIT Kanpur - ISRO-VSSC project.",
                        "Best teaching assistant award given by the Department of Electrical Engineering, IIT Kanpur for the Fall Semester 2009."
                    ]
                }
            ]
    },

    "Dr. Somu Vijaya Bhaskar": {
        "name": "Dr. Somu Vijaya Bhaskar",
        "email": "drvijayabhaskars@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Somu Vijaya Bhaskar.JPG",
        "designation": "Assoc. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Lightning Electromagnetics",
                            "Branch": "Electrical & Computer Engineering",
                            "College Name/University": "University of Florida, USA",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "M.S.",
                            "Specialization": "Electromagnetics and Energy Systems",
                            "Branch": "Electrical & Computer Engineering",
                            "College Name/University": "University of Florida, USA",
                            "Year of Passing": "2012"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Power Systems Engineering",
                            "Branch": "Electrical Engineering",
                            "College Name/University": "Indian Institute of Technology, Kharagpur",
                            "Year of Passing": "2007"
                        },
                        {
                            "Course": "B.S.",
                            "Specialization": "Electrical & Electronics",
                            "Branch": "Electrical Engineering",
                            "College Name/University": "Andhra University",
                            "Year of Passing": "2005"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Electromagnetics, High Power Microwaves, Pulsed Power, Lightning Research, Ionospheric Studies"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=56075684900",
                        "Vidwan :",
                        "Google scholar : https://scholar.google.com/citations?user=p2waMoEAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 5"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "1",
                            "Details of Research Publication": "A study of changes in apparent ionospheric reflection height within individual lightning flashes. DOI: 10.1016/j.jastp.2015.09.007",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "4",
                            "Details of Research Publication": "Lightning Observatory in Gainesville (LOG), Florida: A review of recent results. DOI: 10.1016/j.espr.2014.02.037",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012",
                            "Author Position": "",
                            "Details of Research Publication": "New measurements of lightning electric fields in Florida: waveform characteristics, interaction with the ionosphere, and peak current estimates. DOI: 10.1029/2011JD017196",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010",
                            "Author Position": "6",
                            "Details of Research Publication": "Pulsewidth Variation of an Axial Vircator. DOI: 10.1109/TPS.2010.2049128",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2009",
                            "Author Position": "6",
                            "Details of Research Publication": "High Power Microwave Generation from VIRCATOR using Velvet and Graphite Cathodes. APMC 2009 Conference Proceedings, Singapore, IEEE",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2008",
                            "Author Position": "3",
                            "Details of Research Publication": "Evaluation of Different Consolidation Methods for Nano-materials. Indian Journal of Engineering & Material Science, 15, 347-351.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2007",
                            "Author Position": "3",
                            "Details of Research Publication": "Investigations on Pulsed Power Application for Nano-material Consolidation. ICIIS 2007 Conference Proceedings, Sri Lanka, IEEE, 361-365",
                            "Indexing": "IEEE",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                }
            ]
    },

    "Dr. K. Lakshmikhandan": {
      name: "Dr. K. Lakshmikhandan",
      designation: "Assoc. Professor",
      email: "drlakshmikhandank@mits.ac.in",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/Lakshmikhandan.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Electrical Engineering", "Branch": "Electrical Engineering", "College Name/University": "Anna University", "Year of Passing": "2019"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "Power Electronics & Industrial Drives", "Branch": "Power Electronics & Industrial Drives", "College Name/University": "Sathyabama Institute of Science & Technology, Chennai", "Year of Passing": "2005"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "Electrical & Electronics Engineering", "Branch": "Electrical & Electronics Engineering", "College Name/University": "Priyadharshini Engineering College, Madras University", "Year of Passing": "2003"}
          ]
        },
        {
          title: "Research Areas",
          content: "Power Electronics, Electric Vehicle, etc."
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=56461392200"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/274506"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=-4AyANwAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "2"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Enhanced Predictive Model for Grid Stability using Hybrid GSM-LSTM approach - International Journal of Renewable Energy Research", "Indexing": "SCI", "Publication": "Journal", "Journal Quartile": "Q3"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Green Horizons sustainable practices in data center networking for environmental conservation - Journal of Environmental Protection and Ecology", "Indexing": "Scopus", "Publication": "Journal", "Journal Quartile": "Q4"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "2", "Details of Research Publication": "Advanced Solar Power Plant Efficiency through Integrated Machine Learning Models - International Journal of Renewable Energy Research", "Indexing": "Scopus", "Publication": "Journal", "Journal Quartile": "Q3"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "2", "Details of Research Publication": "A hybrid technique for grid-connected solar-wind hybrid system with electric vehicles - Journal of Energy and Environmen", "Indexing": "SCI", "Publication": "Journal", "Journal Quartile": "Q2"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "3", "Details of Research Publication": "A three port bidirectional DC-DC converter for PV – Battery – DC Microgrids application using fuzzy logic control - Materials Today - Proceedings", "Indexing": "Elsevier", "Publication": "Journal", "Journal Quartile": "Q1"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "3", "Details of Research Publication": "A review on Electric Charging Stations Architecture, Standards, Power Converters and Management Strategies - Journal of Electronics", "Indexing": "SCI", "Publication": "Journal", "Journal Quartile": "Q4"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "2", "Details of Research Publication": "A Non-isolated High Gain DC to DC Converter connected Multi-level Inverter for Photo-Voltaic Energy Sources - Journal of Applied Science and Engineering", "Indexing": "Scopus", "Publication": "Journal", "Journal Quartile": "Q2"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Real Time Exploited BLDC motor drive BLDC motor drive in Lab View Virtual Instrumentation Environment - Materials Today - Proceedings", "Indexing": "Elsevier", "Publication": "Journal", "Journal Quartile": "Q1"},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2017-18", "Author Position": "1", "Details of Research Publication": "Performance Analysis of 11-Multilevel Inverters using Sinusoidal PWM Techniques with Reduced Switching Pattern - Asian Journal of Research in Social Science and Humanities", "Indexing": "Scopus", "Publication": "Journal", "Journal Quartile": "None"},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2017-18", "Author Position": "1", "Details of Research Publication": "Single DC Source-Based Multilevel Converter Topology With Reduced Power Switches and Conduction Losses - Journal of Electrical Engineering", "Indexing": "SCI", "Publication": "Journal", "Journal Quartile": "Q3"},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2016-17", "Author Position": "1", "Details of Research Publication": "Design of Single Phase Nine Level Inverter for an Unbalanced Capacitor - Middle-East Journal of Scientific Research", "Indexing": "Scopus", "Publication": "Journal", "Journal Quartile": "Q3"},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2016-17", "Author Position": "1", "Details of Research Publication": "Improved SPWM Modulation Technique to Reduce Harmonic Distortion in Voltage Source Converter - International Journal of Innovation and Scientific Research", "Indexing": "Scopus", "Publication": "Journal", "Journal Quartile": "None"},
            {"S.No": "13", "Publication Affiliation": "Others", "Academic Year": "2014-15", "Author Position": "1", "Details of Research Publication": "Optimal switching angle selection and harmonic elimination of multilevel inverter: A new hybrid technique - International Journal of Applied Engineering Research", "Indexing": "Scopus", "Publication": "Journal", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "204116", "Title of the Patent": "Bipolar Junction Transistor Device", "Status": "Granted"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2023-24", "Application ID": "202341001951", "Title of the Patent": "Power Distribution System Planning for Smart Grid Applications using ANN", "Status": "Granted"},
            {"S.No": "3", "Affiliation": "Others", "Academic Year": "2021-22", "Application ID": "1613206880891", "Title of the Patent": "The Dust Detection Module for Home and Industrial Applications using Arduino with IOT", "Status": "Granted"}
          ]
        }
      ]
    },

    "Dr. T. S. Balaji Damodhar": {
        "name": "Dr. T. S. Balaji Damodhar",
        "email": "drbalajidamodharts@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. T. S. Balaji Damodhar.JPG",
        "designation": "Asst. Professor &amp; Assistant Dean",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Applied Electronics",
                            "Branch": "Electrical Engineering",
                            "College Name/University": "Anna University, Chennai",
                            "Year of Passing": "2020"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Applied Electronics",
                            "Branch": "Electrical Engineering",
                            "College Name/University": "Dr. M. G. R. University, Chennai",
                            "Year of Passing": "2006"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Electrical Engineering",
                            "Branch": "Electrical Engineering",
                            "College Name/University": "Institution of Engineers (India), Kolkata",
                            "Year of Passing": "2001"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Smart and Sustainable Hybrid Renewable Energy Systems, Advanced Power Electronics and Control."
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57766131500",
                        "Vidwan : https://vidwan.inflibnet.ac.in/myprofile",
                        "Google scholar : https://scholar.google.com/citations?user=6dErSdwAAAAJ&hl=en",
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
                            "Details of Research Publication": "&quot;Integrating Genomic Selection and Support Vector Machines to Improve Genetic Resistance in Crops,&quot; 2025 4th International Conference on Innovative Mechanisms for Industry Applications (ICIMIA), Tirupur, India, 2025, pp. 1386-1390, doi: 10.1109/ICIMIA67127.2025.11200569.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;AI-Powered Remote Diagnosis and Personalized Treatment Plans in Telemedicine Systems,&quot; 2025 International Conference on Computing and Communications (COMPUTINGCON), Talegaon, India, 2025, pp. 1-6, doi:10.1109/COMPUTINGCON64838.2025.11377219.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;Ventilator Performance Improvement using K-Means Clustering for Effective Data Pattern Recognition,&quot; 2025 6th International Conference on Smart Electronics and Communication (ICOSEC), Trichy, India, 2025, pp. 288-293, doi: 10.1109/ICOSEC67334.2025.11459689.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;AI-Powered Sustainable Wastewater Recycling Systems for Smart Cities Resource Management,&quot; 2025 International Conference on Sustainable Communication Networks and Application (ICSCN), Theni, India, 2025, pp. 550-555, doi: 10.1109/ICSCN67106.2025.11308406.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "3",
                            "Details of Research Publication": "Fractional Jaya election-based optimization enabled routing and charge scheduling for electric vehicle in cloud-assisted Vehicular Ad Hoc Network. &ldquo;International Journal of Communication stem&rdquo;. 2024; 37(15)",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "&quot;Air Purification Robotics using Cloud and Deep Q Networks for Autonomous Systems,&quot; 2024 1st International Conference on Innovative Sustainable Technologies for Energy, Mechatronics, and Smart Systems (ISTEMS), Dehradun, India, 2024, pp. 1-5, doi: 10.1109/ISTEMS60181.2024.10560117",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "3",
                            "Details of Research Publication": "&quot;Data-Driven with IoT Sensing and Deep Learning Model for Dynamic Skin Cancer Diagnosis,&quot; 2024 2nd International Conference on Self Sustainable Artificial Intelligence Systems (ICSSAS), Erode, India, 2024, pp. 1034-1039, doi: 10.1109/ICSSAS64001.2024.10760605",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Improving Power Quality by DSTATCOM Based DQ Theory with Soft Computing Techniques.&rdquo; Intelligent Automation & Soft Computing&rdquo;, 2023, Vol 36, Issue 2, p1315. doi:10.32604/iasc.2023.032039",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "A mutual certificate-based data privacy scheme for ubiquitous and sustainable computing system users, &quot;Sustainable Energy Technologies and Assessments&quot; Volume 58, 2023, ISSN 2213-1388, doi.org/10.1016/j.seta.2023.103356",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;IoT Enabled Space Vector Modulation Control for Multilevel Converters in Renewable Energy Systems,&quot; 2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC), Greater Noida, India, 2023, pp. 1003-1007, doi: 10.1109/PEEIC59336.2023.10450937",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "&quot;Integrating Cloud Computing with IoT for Battery Monitoring in Electric Vehicles,&quot; 2023 Second International Conference On Smart Technologies For Smart Nation (SmartTechCon), Singapore, Singapore, 2023, pp. 1200-1204, doi: 10.1109/SmartTechCon57526.2023.10391798",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "Transient Voltage Stabilization Using Dynamic Voltage Restorer with ANN Controller-Based Reactive Power Compensation,&rdquo; European Chemical Bulletin&rdquo;, Volume 12, Issue 5 Pages 583-589",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Author Position": "2",
                            "Details of Research Publication": "Minimization of leakage current in a maximum boost control impedance source transformer-less inverter&rdquo; Materials Today: Proceedings, Volume 65, Part 1, 2022, Pages 250-257, ISSN 2214-7853, https://doi.org/10.1016/j.matpr.2022.06.127",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "3",
                            "Details of Research Publication": "A review and generation of electricity from waste tyres by using pyrolysis technology&rdquo;, Global Journal of Engineering and Technology Advances, Volume 11, Issue 01, Pages 025-028, DOI:10.30574/gjeta.2022.11.1.0064. UGC-Care Article None",
                            "Indexing": "UGC-Care",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "Improved Performance Of Photovoltaic Based Embedded Dual Power Source Sl-Quasi Z Source Inverter For Im Drive. EPRA International Journal of Research and Development (IJRD), 6 (6). pp. 266-273",
                            "Indexing": "UGC-Care",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;A MODIFIED SVPWM FOR PV AND WIND INTEGRATED SYSTEM.&quot; Journal of Electrical Engineering 19.2 (2019): 39-42.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-17",
                            "Author Position": "1",
                            "Details of Research Publication": "Implementation of FPGA Based Hybrid Power Generator for PV and Wind Grid Applications. &ldquo;Circuits and Systems&rdquo;, 7, pp 4280-4290. doi: 10.4236/cs.2016.713350.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "1",
                            "Details of Research Publication": "Design of High Step up Modified Model for Hybrid Solar/Wind Energy System, &ldquo;Middle-East Journal of Scientific Research 23&rdquo;, (6): 1041-1046, ISSN 1990-9233, DOI: 10.5829/idosi.mejsr.2015.23.06.22176",
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
                            "Academic Year": "2025-26",
                            "Application ID": "497974-001",
                            "Title of the Patent": "Artificial Intelligence Based Electrical Vehicle Monitoring Apparatus",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Application ID": "202541062118",
                            "Title of the Patent": "Automatic Engine Cut-off System for Two-Wheelers Upon Left Handlebar Disengagement to Prevent Unsafe driving behaviour",
                            "Status": "Filed"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Application ID": "464951-001",
                            "Title of the Patent": "Power Line Inspection Robot",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Application ID": "451043-001",
                            "Title of the Patent": "Sun Tracking System for Small Scale Domestic PV Systems",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Application ID": "202341043712",
                            "Title of the Patent": "Smart Charger for EV Battery",
                            "Status": "Published"
                        },
                        {
                            "S.No": "6",
                            "Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Application ID": "202242037887",
                            "Title of the Patent": "Covid detection and prevention of spreading using thermal cameras",
                            "Status": "Filed (Application ready for publication)"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "NPTEL Domain Scholar in Faculty Domain-Advanced",
                        "Top performing Mentor in NPTEL Course",
                        "NPTEL Motivated Learner",
                        "Innovation Ambassador of the Department",
                        "Reviewer in Advances in Science, Technology and Engineering Systems Journal, Materials Today: Proceedings, Asian Journal of Research and Reviews in Physics, and Journal of Engineering Research and Reports"
                    ]
                }
            ]
    },

    "Dr. Sarat Kumar Mishra": {
        "name": "Dr. Sarat Kumar Mishra",
        "email": "drsaratkumarm@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Sarat Kumar Mishra.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Power Systems Engineering",
                            "Branch": "Electrical Engineering",
                            "College Name/University": "BIT., Mesra (Ranchi)",
                            "Year of Passing": "2021"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Industrial Power Control and Drives",
                            "Branch": "Electrical Engineering",
                            "College Name/University": "NIT., Rourkela",
                            "Year of Passing": "1998"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Electrical Engineering",
                            "Branch": "Electrical Engineering",
                            "College Name/University": "IGIT., Sarang (Utkal University)",
                            "Year of Passing": "1991"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=55444910400",
                        "Vidwan : https://mits.irins.org/profile/688592",
                        "Google scholar : https://scholar.google.com/citations?user=VnDbbBMAAAAJ&hl=en",
                        "Web of Science ID: https://www.webofscience.com/wos/author/record/HPC-8896-2023",
                        "h-Index (As per Scopus Data) : 3"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MTS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Golden Eagle Optimized PI Control for Modified Luo Converter with Super Capacitor Integration in PV-Powered Electric Vehicle Charging Systems&rdquo;, 2026 International Conference on Computing Theory and Wireless Communications (ICCTWC), IEEE, 2026",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Prediction based Multiobjective Solution of Economic Emission and Load Dispatch for Solar Integrated Power Systems, Journal of Scientific and Industrial Research, Vol. 83, December 2024, pp. 1295-1305, DOI: 10.56042/jsir.v83i12.7679",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Solution of The Combined Environmental Economic Dispatch Problem Using Multi-Objective Cat Swarm Optimization, International Journal on Electrical Engineering and Informatics, Vol. 13, No. 2, 2021, pp: 271-286, DOI: 10.15676/ijeei.2020.13.2.2",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "3",
                            "Details of Research Publication": "Performance Analysis of Transistor Clamped H-Bridge Multi-reference Multi-level Inverter for Standalone PV system, Lecture Notes in Electrical Engineering 691: Advances in Smart Grid and Renewable Energy, Springer, 2021, pp: 93-105. DOI: 10.1007/978-981-15-7511-2_9",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Performance Assessment of a Set of Multi-Objective Optimization Algorithms for Solution of Economic Emission Dispatch Problem, Informatica, Slovenia, Vol. 44, No. 3, 2020, pp: 349-360, DOI: 10.31449/inf.v44i3.1969",
                            "Indexing": "ESCI & Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "A Solution of Economic Emission Dispatch Problem of Solar Integrated Thermal Power System Using Multi-Objective Teaching Learning based Optimization, Journal of Advanced Research in Dynamical & Control Systems, Vol. 12, No. 3, 2020, pp: 57-70, DOI: 10.5373/JARDCS/V1213/20201167",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-17",
                            "Author Position": "1",
                            "Details of Research Publication": "Solution of Constrained Economic Emission Dispatch Problem using Multi-objective Particle Swarm Optimization, International Journal of Control Theory and Application, International Science Press, Volume 9 Issue 39, 2016, pp: 63-70",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-16",
                            "Author Position": "1",
                            "Details of Research Publication": "A Comparative Study of Solution of Economic Load Dispatch Problem in Power Systems in the Environmental Perspective, Intelligent Computing, Communication and Convergence&rdquo; organized by IIMT, Bhubaneswar, published in the Procedia, Computer Science, Elsevier, DOI: 10.1016/j.procs.2015.04.156",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012-13",
                            "Author Position": "2",
                            "Details of Research Publication": "Direct Torque Control of Permanent Magnet Synchronous Motor Drive with a Sensor less Initial Rotor Position Estimation Scheme, IEEE Conference on &ldquo;Advances in Power Conversion and Energy Technologies&rdquo; held at LBRCE, Vijaywada, published in IEEE Explore, DOI: 10.1109/APCET.2012.6301999",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        }
                    ]
                },
                {
                    "title": "Research Projects & Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "1998-99",
                            "Funded Project /Event": "Funded Project",
                            "Role": "P.I.",
                            "Title of the Project/Event": "Modernisation of Electrical Engg. Laboratory",
                            "Amount in Rs. /-": "4,00,000",
                            "Funding Agency": "AICTE (MODROBS)"
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
                            "Application ID": "486410-001",
                            "Title of the Patent": "ECO-FRIENDLY ELECTRIC VEHICLE WITH SOLAR AND WIND ENERGY INTEGRATION",
                            "Status": "Granted"
                        }
                    ]
                }
            ]
    },

    "Dr. V. B. Thurai Raaj": {
      name: "Dr. V. B. Thurai Raaj",
      designation: "Asst. Professor",
      email: "thurairaajvb@mits.ac.in",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/Thurai Raaj.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Renewable Energy", "Branch": "Electrical & Electronics Engineering", "College Name/University": "Vignan Foundation for Science, Technology & Research", "Year of Passing": "2022"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "Power Electronics and Drives", "Branch": "Electrical & Electronics Engineering", "College Name/University": "Anna University", "Year of Passing": "2012"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "Electrical & Electronics Engineering", "Branch": "Electrical & Electronics Engineering", "College Name/University": "Anna University", "Year of Passing": "2008"}
          ]
        },
        {
          title: "Research Areas",
          content: "Renewable Energy, Power Electronics"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57203901814"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/274642"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=n44TXA4AAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "4"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "4", "Details of Research Publication": "Arrhythmia Detection from Heart Electrical Signal Using 1-D Convolution Neural Network", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "5", "Details of Research Publication": "Using Convolutional Neural Networks for Image Recognition in IoT Applications", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "1", "Details of Research Publication": "Enhanced Economic Load Dispatch Using a Novel Optimization Approach: A Cost Minimization Perspective", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "1", "Details of Research Publication": "Implementation of Power Efficient Smart Helmet System for Road Safety and Rider’s Convenience using Pico Board", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "4", "Details of Research Publication": "Deep Learning based ROI Segmentation using Convolution Neural Network", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "1", "Details of Research Publication": "Efficient Method to Monitor Power Consumption in Industry Using Lorawanand Rs485 Retrofit", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "4", "Details of Research Publication": "Smart Controller for Air Conditioning in Car using IoT", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2022", "Author Position": "1", "Details of Research Publication": "Dual Battery Storage Technique for Remote, Location-Based Solar PV System and Standalone Applications", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "1", "Details of Research Publication": "Implementation of Central Level Controller for Integrated Wind and Solar-Based Hybrid Power Generation Scheme with Storage System", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "An Intelligent Controller based Power Grid Interconnected System for Reliable Operation", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "1", "Details of Research Publication": "BDC-based wind energy storage for multimode operating system” is   published in Modelling, Measurement and Control", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "1", "Details of Research Publication": "Effective Wind Power Generation with Storage Systems", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "13", "Publication Affiliation": "MITS", "Academic Year": "2017", "Author Position": "2", "Details of Research Publication": "Development of space vector pulse width modulation algorithm for voltage source inverter using dsPIC controller 30F4011", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "14", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "1", "Details of Research Publication": "Design and Implementation of Wind and Solar Power Energy Storage System for Standalone Applications", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "15", "Publication Affiliation": "Others", "Academic Year": "2012", "Author Position": "2", "Details of Research Publication": "Computer-based laboratory teaching tools: An overview of LabVIEW and MATLAB", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""}
          ]
        }
      ]
    },

    "Dr. Vineet Kumar": {
        "name": "Dr. Vineet Kumar",
        "email": "drvineetkumar@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Vineet Kumar.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Electrical Engineering",
                            "Branch": "Electrical Engineering",
                            "College Name/University": "National Institute of Technology, Hamirpur",
                            "Year of Passing": "2023"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Signal Processing and Control",
                            "Branch": "Electrical Engineering",
                            "College Name/University": "National Institute of Technology, Hamirpur",
                            "Year of Passing": "2019"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Electrical and Electronics Engineering",
                            "Branch": "Electrical and Electronics Engineering",
                            "College Name/University": "Uttar Pradesh Technical University, Lucknow",
                            "Year of Passing": "2015"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Advanced Control Systems, Power System Control, Predictive Control"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57649611500",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/561679",
                        "Google scholar : https://scholar.google.com/citations?user=TIpVkA8AAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 12"
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
                            "Details of Research Publication": "Optimal Forecasting of Wind and Solar PV Power Generation Using Enhanced HHO Algorithm. Wind Engineering, 2025.",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "A Comparative Study of Classical and Physical Models for Short Term Solar Power Forecasting. 2026 2nd International Conference on Computing, Communication and Green Engineering (CCGE), IEEE, 2026.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "DoS-resilient Simultaneous Voltage and Frequency Control in Wind-Integrated Power System. Wind Engineering, 2026. DOI: 10.1177/0309524X261446521.",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Hybrid Grey Wolf&ndash;Cuckoo Search Optimized Linear Quadratic Regulator for Robust Quadrotor Control. Scientific Reports, Vol. 15, 44843, 2025. DOI: 10.1038/s41598-025-28259-0.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "Weighted Cost Emission Dispatch Optimization using GA&ndash;APO Hybridization under Priority Sensitive Scheduling for Thermal Power Systems. Scientific Reports, 2026. DOI: 10.1038/s41598-026-41270-3.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Voltage and Frequency Regulation in Wind Penetrated Deregulated Power System Using an Electric Vehicle and IPFC Assisted Model Predictive Controller. Scientific Reports, Vol. 15, 31109, 2025. DOI: 10.1038/s41598-025-16826-4.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Optimal Regulation of Time Delayed System Using Enhanced Predictive Control. 2025 International Conference on Power Electronics and Energy (ICPEE), IEEE, 2025. DOI: 10.1109/ICPEE65973.2025.11411450.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "Efficient Power Curve Modelling and Generation Forecasting for Wind Power Plant. 2025 International Conference on Power Electronics and Energy (ICPEE), IEEE, 2025. DOI: 10.1109/ICPEE65973.2025.11411078.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Optimal Predictive Voltage and Frequency Regulation in RES Integrated Power Network. International Conference on Future Power Network and Smart Energy Systems, Springer, 2025. None",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "Design of a Sliding Mode Controller for Load Frequency Control in a Multi-source Stand-alone Micro-Grid. 2025 IEEE 5th International Conference on Sustainable Energy and Future Electric Transportation (SEFET), 2025. DOI: 10.1109/SEFET65155.2025.11255450.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "Optimal Control Design for UAV Systems Using Whale Optimization Enhanced LQR Approach. 2025 IEEE 5th International Conference on Sustainable Energy and Future Electric Transportation (SEFET), 2025. DOI: 10.1109/SEFET65155.2025.11255563.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "Enhanced Energy Planning in Jammu and Kashmir through AI-driven Solar Power Forecasting. In Green Technology and Industry 4.0 for Sustainable Future, CRC Press, 2026.",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "A Systematic Review on the Integration of Electric Vehicles in Maintaining Grid Stability. Smart Electric and Hybrid Vehicles: Advancements in Materials, Design, Technologies, and Modeling, pp. 127-140, 2025. John Wiley & Sons, Inc. Hoboken, NJ, USA.",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "A state-of-the-art review on concurrent voltage and frequency regulation problems in renewable integrated power networks. Energy Sources, Part A: Recovery, Utilization, and Environmental Effects, Vol. 47(1), pp. 16-49, 2025. Taylor & Francis.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "HGS-Based Sliding Mode Control for Voltage and Frequency Regulation. Advances in Clean Energy Technologies: Select Proceedings of ICET 2023, Volume 2, pp. 93, 2025. Springer Nature.",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "Enhancing unit commitment in power systems with transmission loss analysis. Neural Computing and Applications, pp. Jan-25, 2025. Springer",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Voltage and frequency regulation in wind penetrated deregulated power system using an electric vehicle and IPFC assisted model predictive controller. Scientific Reports, Vol. 15(1), pp. 31109, 2025. Nature Publishing Group UK London.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Optimal voltage and frequency control strategy for renewable-dominated deregulated power network. Scientific Reports, Vol. 15(1), pp. 398, 2025. Nature Publishing Group UK London",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "5",
                            "Details of Research Publication": "Improved Extraction of Parameters of Solar PV Cell Diode Model using Marine Walrus Inspired Optimization Algorithm. IEEE Access, 2024. IEEE.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "WOA Algorithm-Based Optimal Positioning Control for DC Servomotor System. International Conference on Intelligent Computing and Advances in Communication, pp. 461-470, 2024. Springer.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "WOA based Optimal TIDF Controller for Time Delayed System. 2024 IEEE 11th Power India International Conference (PIICON), pp. 01-May, 2024. IEEE.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "A novel predictive optimal control strategy for renewable penetrated interconnected power system. Optimal Control Applications and Methods, 2024. John Wiley & Sons, Inc",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "5",
                            "Details of Research Publication": "Enhancing load frequency control and automatic voltage regulation in Interconnected power systems using the Walrus optimization algorithm. Scientific Reports, Vol. 14(1), pp. 27839, 2024. Nature Publishing Group UK London.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Impact of Covid-19 and Subsequent Usage of IoT Check for updates. Emergent Converging Technologies and Biomedical Systems: Select Proceedings of the 3rd International Conference, ETBS 2023, Vol. 1116, pp. 147, 2024. Springer Nature.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Modelling and Comparative Analysis of Optimally Tuned PID Controllers in DC Motor Systems. 2024 Fourth International Conference on Advances in Electrical, Computing, Communication and Sustainable Technologies (ICAECT), pp. 01-May, 2024. IEEE",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Leader Harris Hawks algorithm based optimal controller for automatic generation control in PV-hydro-wind integrated power network. Electric Power Systems Research, Vol. 214, pp. 108924, 2023. Elsevier",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Impact of Covid-19 and Subsequent Usage of IoT. International Conference on Emergent Converging Technologies and Biomedical Systems, pp. 147-156, 2023. Springer",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Robust control of DC motor using model predictive controller strategy. AIP Conference Proceedings, Vol. 2901(1), pp. 70008, 2023. AIP Publishing LLC",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "29",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Investigation of PBUC problem with RES and EV in restructured environment. Wind Engineering, Vol. 47(6), pp. 1096-1109, 2023. SAGE Publications Sage UK: London, England.",
                            "Indexing": "ESCI/Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "30",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "6",
                            "Details of Research Publication": "Solution of Co-generation Economic Dispatch Problem Using Optimization. Proceedings of the 2nd International Conference on Signal and Data Processing: ICSDP 2022, Vol. 1026, pp. 461, 2023. Springer Nature.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "31",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Unit commitment problem for transmission system, models and approaches: A review. Electric Power Systems Research, Vol. 223, pp. 109671, 2023. Elsevier.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "32",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Model predictive controller-based voltage and frequency regulation in renewable energy integrated power system coordinated with virtual inertia and redox flow battery. Iranian Journal of Science and Technology, Transactions of Electrical Engineering, Vol. 47(1), pp. 159-176, 2023. Springer International Publishing.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "33",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "AOA based optimal control of combined AVR-LFC model in wind integrated power system. Wind Engineering, Vol. 47(3), pp. 515-527, 2023. SAGE Publications Sage UK: London, England",
                            "Indexing": "ESCI/Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "34",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "HHO-based model predictive controller for combined voltage and frequency control problem including SMES. IETE Journal of Research, Vol. 69(5), pp. 2926-2940, 2023. Taylor & Francis.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "35",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Solution of Unit Commitment Problems in GAMS Computational Environment. Proceedings of the 2nd International Conference on Signal and Data Processing: ICSDP 2022, Vol. 1026, pp. 151, 2023. Springer Nature",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "36",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Assessment of GAMS in power network applications including wind renewable energy source. Renewable Energy Systems: Modeling, Optimization and Applications, pp. 327-364, 2022. John Wiley & Sons, Inc. Hoboken, NJ, USA.",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "37",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Load Frequency Control in Wind Penetrated Power System using a Novel IGWO based MPC Controller. 2022 IEEE 10th Power India International Conference (PIICON), pp. 01-May, 2022. IEEE.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "38",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "6",
                            "Details of Research Publication": "Solution of Co-generation Economic Dispatch Problem Using Optimization Tool. International Conference on Signal & Data Processing, pp. 461-475, 2022. Springer.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "39",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "2",
                            "Details of Research Publication": "Solution of Unit Commitment Problems in GAMS Computational Environment. International Conference on Signal & Data Processing, pp. 151-165, 2022. Springer.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "40",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Electric vehicle integrated MPC scheme for concurrent control of voltage and frequency in power system network. Wind Engineering, Vol. 46(2), pp. 529-544, 2022. SAGE Publications Sage UK: London, England",
                            "Indexing": "ESCI/Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "41",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "2",
                            "Details of Research Publication": "MPA Optimized Model Predictive Controller for Optimal Control of an AVR System. International Conference on Frontiers of Intelligent Computing: Theory and Applications, pp. 61-70, 2022. Springer.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "42",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Optimal voltage and frequency control in solar integrated power network. Distributed Generation & Alternative Energy Journal, pp. 703-724, 2022.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "43",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "4",
                            "Details of Research Publication": "State\u2010of\u2010the\u2010art optimization and metaheuristic algorithms. Handbook of intelligent computing and optimization for sustainable development, pp. 509-536, 2022. John Wiley & Sons, Inc. Hoboken, NJ, USA.",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "44",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "4",
                            "Details of Research Publication": "Optimal BLDC motor control using a WOA-based LQR strategy. 2022 4th Global Power, Energy and Communication Conference (GPECOM), pp. 222-226, 2022. IEEE.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "45",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Stochastic wind energy integrated multi source power system control via a novel model predictive controller based on Harris Hawks optimization. Energy Sources, Part A: Recovery, Utilization, and Environmental Effects, Vol. 44(4), pp. 10694-10719, 2022. Taylor & Francis.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "46",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "4",
                            "Details of Research Publication": "Generation scheduling considering emissions in cost-based unit commitment problem. Renewable Energy Towards Smart Grid: Select Proceedings of SGESC 2021, pp. 209-224, 2022. Springer Nature Singapore Singapore",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "47",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "4",
                            "Details of Research Publication": "Review on Various Techniques for Load Frequency Control in Deregulated Power Structures. International Conference on Computational Techniques and Applications, pp. 599-608, 2021. Springer Nature Singapore Singapore.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "48",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "Automatic voltage regulator system with state-feedback and PID based sliding mode control design. 2021 international conference on advances in electrical, computing, communication and sustainable technologies (ICAECT), pp. 01-Jun, 2021. IEEE.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "49",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "MVO-optimized linear quadratic regulator for automatic voltage controller system. International Conference on Computational Techniques and Applications, pp. 573-580, 2021. Springer Nature Singapore Singapore.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "50",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Performance evaluation of HHO optimized model predictive controller for AVR system and its comparison with conventional controllers. Machine Learning, Advances in Computing, Renewable Energy and Communication: Proceedings of MARC 2020, pp. 151-159, 2021. Springer Singapore Singapore.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "51",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "3",
                            "Details of Research Publication": "Load flow unit commitment real time problem using modern optimization tool. 2021 Emerging Trends in Industry 4.0 (ETI 4.0), pp. 01-Apr, 2021. IEEE",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "52",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Optimized Model Predictive Controller for AVR System and Its Comparison. Machine Learning, Advances in Computing, Renewable Energy and Communication: Proceedings of MARC 2020, Vol. 768, pp. 151, 2021. Springer Nature.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "53",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Automatic voltage regulator with particle swarm optimized model predictive control strategy. 2020 first IEEE international conference on measurement, instrumentation, control and automation (ICMICA), pp. 01-May, 2020. IEEE",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "54",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "4",
                            "Details of Research Publication": "MPC-based temperature control of CSTR process and its comparison with PID. Advances in Electrical and Computer Technologies: Select Proceedings of ICAECT 2019, pp. 1109-1115, 2020. Springer Singapore Singapore",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "55",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Robust Control of Position and Speed for a DC Servomotor System Using Various Control Techniques. Advances in Electrical and Computer Technologies: Select Proceedings of ICAECT 2019, pp. 1101-1107, 2020. Springer Singapore Singapore.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "56",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Optimal position tracking for an AC servomotor using linear quadratic and model predictive control. 2019 4th International Conference on Information Systems and Computer Networks (ISCON), pp. 240-244, 2019. IEEE.",
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
                            "Academic Year": "2026-27",
                            "Application ID": "497974-001",
                            "Title of the Patent": "ARTIFICIAL INTELLIGENCE BASED ELECTRICAL VEHICLE MONITORING APPARATUS",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Application ID": "202441103146",
                            "Title of the Patent": "A CONTROL SYSTEM FOR POWER GENERATION EQUIPMENT",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Application ID": "464951-001",
                            "Title of the Patent": "POWER LINE INSPECTION ROBOT",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Application ID": "202441095830",
                            "Title of the Patent": "A CONTROL SYSTEM FOR POWER GENERATION EQUIPMENT",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Application ID": "464951-001",
                            "Title of the Patent": "POWER LINE INSPECTION ROBOT",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "6",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Application ID": "202541083938",
                            "Title of the Patent": "A METHOD FOR OPTIMIZING VOLTAGE AND FREQUENCY REGULATION IN HYBRID MICROGRID SYSTEMS",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "7",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "439176-001",
                            "Title of the Patent": "USER INTERFACE FOR INTERACTIVE FEEDBACK LOOP CUSTOMIZATION IN CONTROL SYSTEM",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "8",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "431997-001",
                            "Title of the Patent": "SUN TRACKING SOLAR PANEL SYSTEM FOR CLOUDY WEATHER",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "9",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "6384112",
                            "Title of the Patent": "SOLAR DRYER WITH TEMPERATURE MAINTAINING SYSTEM",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "10",
                            "Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Application ID": "202211042704",
                            "Title of the Patent": "ADVANCED VOLTAGE AND FREQUENCY CONTROL SYSTEM AND METHOD FOR RENEWABLE INTEGRATED POWER SYSTEM",
                            "Status": "Granted"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "GATE qualified 2017, 2018, 2019, and 2022 in Electrical Engineering.",
                        "Acted as a technical session coordinator in Computational Techniques and Applications ICCTA 2021 on 9-10 Oct. 2021.",
                        "Acted as track chair/meta reviewer/special session chair in various reputed international conferences such as SEFET 2023, PIICON 2024, SEFET 2025.",
                        "Organized many workshops/guest-lectures/technical events under IEEE PES SBC in MITS Madanapalle."
                    ]
                }
            ]
    },

    "Dr. Satish Kumar Ramoji": {
        "name": "Dr. Satish Kumar Ramoji",
        "designation": "Asst. Professor",
        "email": "drsatishkumarr@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Satish Kumar Ramoji.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Power Systems",
                            "Branch": "Electrical Engineering",
                            "College Name/University": "NIT Silchar",
                            "Year of Passing": "2023"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Power Electronics & Electric Drives",
                            "Branch": "Electrical & Electronics Engineering",
                            "College Name/University": "AITAM, Tekkali/JNTU, Kakinada",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Electrical & Electronics Engineering",
                            "Branch": "Electrical & Electronics Engineering",
                            "College Name/University": "NIST, Berhampur/BPUT, Rourkela",
                            "Year of Passing": "2008"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Electrical Power Systems, Renewable Energy, Energy Storage."
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57222117733",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/210835",
                        "Google scholar : https://scholar.google.com/citations?user=BMuR1ccAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 10"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "3",
                            "Details of Research Publication": "Power management of photovoltaic system with BESS under partial shading conditions.",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Optimal Coordinated Frequency and Voltage Control of CCGT-Thermal Plants with TIDF Controller",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Maiden Application of Fuzzy-2DOFTID Controller in Unified Voltage-Frequency Control of Power System",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "Performance amelioration of concerted voltage\u2010frequency regulation of multiarea hybrid power systems under restructured pattern using electric vehicles and Interline Power Flow Controller",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Amalgamated Voltage and Frequency Regulation of an Interconnected Multi-source Power System Using the CFOI-TIDN Controller",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "Impact of Redox Flow Battery and HVDC Link on Combined ALFC-AVR of a Hydrothermal System Incorporating GTPP Considering Communication Delay",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Modified TID Controller for Concerted Voltage and Frequency Control of Two-Area Power System",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "AGC of Hybrid Multiarea Power Systems using AC-AHVDC links",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "Design and analysis of combined control strategy for grid integrated PV-hybrid system with sparrow search optimized seamless control",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "4",
                            "Details of Research Publication": "Effect of several mayfly optimized tilt controllers in AGC of Res Integrated System",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "Comparative performance of multiple energy storage systems in unified voltage and frequency regulation of power system including Electric Vehicles",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "Conflated voltage&ndash;frequency control of multi-area multi-source system using fuzzy TID controller and its real-time validation",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "Impact of electric vehicles and wind turbine in combined ALFC and AVR studies using AFA-optimized CFPD-PIDN controller",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "A QSSA optimized fractional-order controller for improving transient response in AC autonomous microgrid VSC System",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "6",
                            "Details of Research Publication": "Presentation of real-time lab analysis for multiple-area renewable sources-thermal-hydro system by implementation of cat swarm optimization",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "Performance analysis of diverse energy storage on combined ALFC and AVR control of Multiarea multiunit system with AC/HVDC interconnection",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "A novel decentralized FO voltage and current control scheme for voltage and frequency regulation in inverter dominated islanded Microgrids Using Improved Droop Control",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "4",
                            "Details of Research Publication": "The application of various PID controllers and the effect of AHVDC and DSTS on dynamics responses in a multi-area AGC",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "Performance Comparison of Various Tilt Controllers in Coalesced Voltage and Frequency Regulation of Multi-Area Multi-Unit Power System",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "Repercussions of SMES and HVDC Link in Amalgamated Voltage and Frequency Regulation of Multi-Area Multi-Unit Interconnected Power System",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "Impact of TCSC and ESs on Unified ALFC-AVR study of Multi-Area Interconnected Power System using 2DOF-TIDD Controller",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "5",
                            "Details of Research Publication": "Combined Frequency and Voltage Regulation of a Renewable and Energy Storage Integrated Multi Area Systems Using Cascade Controller",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "Impact of RFB and HVDC link on Combined ALFC-AVR Studies of a GTPP Integrated Hydro-thermal Systems Using a Cascade Fuzzy PD-TID Controller",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "An Improved Control of Grid Integrated Solar PV System Using Fractional Order PI Controller Combined with Active Current Detection Scheme",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "5",
                            "Details of Research Publication": "Effect of various FACTS Devices and HVDC link on Multi-Area Power System Utilizing 2DOF-TIDN Controller",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "Combined ALFC-AVR Control of Diverse Energy Source Based Interconnected Power System using Cascade Controller",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "Implementation of Sparrow Search Algorithm Tuned AWFOPI Controller for Three Phase Grid-Tied SPV-DSTATCOM Under Dynamic Loading Conditions",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "Electric Vehicle to grid support on combined frequency and voltage control of multiarea power system considering renewable energy",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "29",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "4",
                            "Details of Research Publication": "Optimized Intelligent Based Controller for LFC of Multi-Area Hydrothermal System Incorporating Wind Firm and HVDC Links",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "30",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "5",
                            "Details of Research Publication": "Effect of PWTS and AHVDC link on Multi-Area AGC System Considering TIDD Controller",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "31",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Utilization of electric vehicles in combined voltage-frequency control of multi-area thermal-combined cycle gas turbine system using two degree of freedom tilt-integral-derivative controller",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "32",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Modeling and simulation of an isolated CCGT and DSTS plant using BWO optimized PI&lambda;D&mu; controller for amalgamated control of voltage and frequency",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "33",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "3",
                            "Details of Research Publication": "Modeling and simulation of a multi-area hydro-thermal interconnected system using FOPI&micro; controller for integrated voltage and Frequency Control",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "34",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "3",
                            "Details of Research Publication": "A novel effective single sensor MPPT technique for a uniform and partially shaded solar PV system via MSCA approach",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "35",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "3",
                            "Details of Research Publication": "LFC of a solar thermal integrated thermal system considering CSO optimized TI-DN Controller",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "36",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "4",
                            "Details of Research Publication": "Maiden application of hybrid particle swarm optimization with genetic algorithm in AGC studies considering optimized TIDN controller",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "37",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Combined Voltage and Frequency control of a Multi-Area Multi-Source Power System using CFOPI-TIDN Controller",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "38",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "4",
                            "Details of Research Publication": "Integration of STP and WTS in multi-area AGC Studies Considering GHA Optimized TIDF Controller",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "39",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "4",
                            "Details of Research Publication": "Impact of Wind System and Redox Flow Batteries on LFC Studies under Deregulated Scenario",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "40",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "3",
                            "Details of Research Publication": "A Modified Droop Control for AC Microgrids to Improve Dynamic Performance with Linear and Unbalanced Loads",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "41",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "6",
                            "Details of Research Publication": "Effect of DSTS and HVDC on Multi-Area AGC System Considering BSA Optimized 2DOF-TID Controller",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "42",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Optimal Unified Frequency and Voltage Control of Multi-area Multi-source Power System using the Cascaded PIDN-TIDF Controller",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "43",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "3",
                            "Details of Research Publication": "Coordinated Control of Voltage and Frequency in a Three-Area Multisource System Integrated with SMES Using FOI-FOPDF Controller",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "44",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "3",
                            "Details of Research Publication": "Voltage and Frequency Control for DG Inverter in Low Voltage Islanded Microgrid with Improved Virtual Impedance Droop Control Scheme",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "45",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "4",
                            "Details of Research Publication": "Optimal Location of AC-HVDC Tie-line in a Multi-Area LFC System Incorporated with Renewable and ESD Considering CA Optimized PI-TID Cascade Controller Scopus Conference NA",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "46",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "4",
                            "Details of Research Publication": "Combined Voltage and Frequency Control of a Multi-Area Multi-Source System Using SFLA Optimized TID Controller",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2026-27",
                            "Application ID": "497974-001",
                            "Title of the Patent": "ARTIFICIAL INTELLIGENCE BASED ELECTRICAL VEHICLE MONITORING APPARATUS",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Application ID": "464951-001",
                            "Title of the Patent": "POWER LINE INSPECTION ROBOT",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2022",
                            "Application ID": "2021104488",
                            "Title of the Patent": "ISOLATED POWER SYSTEM AND METHOD CONSISTING CCGT AND DSTS PLANT FOR FREQUENCY AND VOLTAGE CONTROL",
                            "Status": "Granted"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "Best Paper Award in IEEE International Conference (ICEPE 2022 from 29th April to 1st May 2022) held at NIT Meghalaya, INDIA, for the paper titled as &quot;Repercussions of SMES and HVDC Link in Amalgamated Voltage and Frequency Regulation of Multi-Area Multi-Unit Interconnected Power System&quot;. (With Cash Prize)."
                }
            ]
    },

    "Dr. R. Saravana Kumar": {
        "name": "Dr. R. Saravana Kumar",
        "designation": "Asst. Professor",
        "email": "saravanakumarr@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. R. Saravana Kumar.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Power Systems Engineering",
                            "Branch": "Power Systems Engineering",
                            "College Name/University": "National Institute of Technology, Puducherry",
                            "Year of Passing": "2024"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Power Systems Engineering",
                            "Branch": "Power Systems Engineering",
                            "College Name/University": "Anna University, Trichy",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Electrical and Electronics Engineering",
                            "Branch": "Electrical and Electronics Engineering",
                            "College Name/University": "PSNA College of Engineering and Technology, Dindigul",
                            "Year of Passing": "2010"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Electric Vehicles, Energy Management in Microgrid, Renewable Energy"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57730863500",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/167714",
                        "Google scholar : https://scholar.google.com/citations?user=7O1QNO8AAAAJ&hl=en",
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
                            "Author Position": "3",
                            "Details of Research Publication": "Cost-benefit analysis in demand response with penalty and grid management using blockchain",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Realistic choice-based decision-making mechanism in electric vehicles and secure energy transaction using Ethereum blockchain",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Artificial Intelligence-Based State Estimation in Power System and Phasor Measurement Units",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "Power Flow Parameter Estimation in Power System Using Machine Learning Techniques Under Varying Load Conditions",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Realistic Method for Placement of Phasor Measurement Units through Optimization Problem Formulation with Conflicting Objectives",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Performance of Load Demand Sharing Strategy in Distributed Generation",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
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
                            "Name of the Consulting Firm": "Quantanics Pvt.Ltd, Madurai",
                            "Title of the Project/Event": "Document and design layout for electric vehicle (Evs) battery with blockchain and IoT integration concept.",
                            "Amount in Rs. /-": "15,000"
                        }
                    ]
                }
            ]
    },

    "Dr. Sovit Kumar Pradhan": {
        "name": "Dr. Sovit Kumar Pradhan",
        "email": "drsovitkumarp@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Sovit Kumar Pradhan.png",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Power Electronics",
                            "Branch": "Electrical Engineering",
                            "College Name/University": "National Institute of Technology, Silchar",
                            "Year of Passing": "2024"
                        },
                        {
                            "Course": "M.Tech",
                            "Specialization": "Electrical Machine and Drives",
                            "Branch": "Electrical Engineering",
                            "College Name/University": "Indian Institute of Technology (BHU),Varanasi",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Electrical Engineering",
                            "Branch": "Electrical Engineering",
                            "College Name/University": "Institute of Technical Education Research, Bhubaneswar",
                            "Year of Passing": "2008"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Power Electronics, Electrical Machines and Drives, Renewable Energy Sources, Electric Vehicle"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57198357196",
                        "Vidwan :",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=TScLL2IAAAAJ",
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
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;An Extensible Non-isolated Enhanced Gain DC-DC Converter Integrating Switched Capacitor Cell For FCEV&rdquo; Arabian Journal for Science and Engineering, Springer, 49, 16611-16630",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;A novel non-isolated high gain multiport DC-DC converter for integrating fuel cell/solar PV and battery energy storage system&rdquo; Energy Sources, Part A: Recovery, Utilization, and Environmental Effects, Taylor & Francis, 45, 1994-2012",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "3",
                            "Details of Research Publication": "&ldquo;A q\u2010Z Source\u2010Based Modified Bidirectional Three\u2010Port Converter for Battery\u2010Assisted Solar PV Applications&rdquo; International Journal of Circuit Theory and Applications, Willy, 53 (9), 5314-5337.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "3",
                            "Details of Research Publication": "&ldquo;Single Active Switch Hybrid Dual Diode-Capacitor Boost Converter With Reduced Voltage Stress for High Voltage Gain Applications&rdquo; Arabian Journal for Science and Engineering, Springer, 49 (12), 16611-16630.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "&ldquo;An enhanced DC-DC boost converter based stand-alone PV-Battery OFF-Grid system with voltage balancing capability for fluctuating environmental and load conditions&rdquo; Energy Sources, Part A: Recovery, Utilization, and Environmental Effects , Taylor & Francis, 44(3), 8247-8265.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Speed Control of Switched Reluctance Motor Using Double Switch Quasi-Z Source High-Gain DC-DC Converter IEEE,2nd International Conference on Advancements and Key Challenges in Green Energy and Computing (AKGEC)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "20244",
                            "Author Position": "1",
                            "Details of Research Publication": "Implementation of High Gain DC-DC Converter in FC-Battery System for EV Application, IEEE 4th International Conference on Sustainable Energy and Future Electric Transportation (SEFET)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "20244",
                            "Author Position": "3",
                            "Details of Research Publication": "A Hybrid Water Pumping System Based on Modified QZ Source TPC with a Battery-Assisted PV Source, IEEE 4th International Conference on Sustainable Energy and Future Electric Transportation (SEFET)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "A Hybrid PV Battery Supported Water Pumping System with Enhanced Boost Converter, IEEE International Conference on Power Electronics, Smart Grid, and Renewable Energy (PESGRE)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "A Novel Non-isolated Double Switch Quasi-Z Source High Gain DC-DC Converter, IEEE 3rd International Conference on Smart Technologies for Power, Energy and Control (STPEC)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "A Single-Active Switch SCN-supported Enhanced Boost DC-DC converter for PV application, IEEE 3rd International Conference on Smart Technologies for Power, Energy and Control (STPEC)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "A High Gain DC-DC Converter based FC-Battery-SC System for EV Application, IEEE Silchar Subsection Conference (SILCON)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "Solar Powered Battery Assisted Water Pumping System with UHGQB converter, IEEE Silchar Subsection Conference (SILCON)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "A High Gain Transformer-Less Dual-Switched-Inductor-capacitor Based DC-DC Converter, IEEE 3rd International Conference on Sustainable Energy and Future Electric Transportation (SEFET)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "A High Gain Enhanced Boost Bidirectional DC-DC Converter for Battery-Supercapacitor Applications, IEEE 3rd International Conference on Sustainable Energy and Future Electric Transportation (SEFET)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Efficiency Enhancement of ZVS based PFC converter With Average Current Controlled Scheme, IEEE International Conference on Computational Intelligence for Smart Power System and Sustainable Energy (CISPSSE)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "An investigation of harmonics in grid connected DFIG-WT experiencing transmission faults, IEEE, Technologies for Smart-City Energy Security and Power (ICSESP)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013",
                            "Author Position": "1",
                            "Details of Research Publication": "Characterstics of stator inductances with intertum fault in PMBLDC motor using winding function approach, IEEE 1st International Conference on Condition Assessment Techniques in Electrical Systems (CATCON)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013",
                            "Author Position": "1",
                            "Details of Research Publication": "1st Analysis of PMSG under stator turn to turn fault using winding function theory, IEEE 1st International Conference on Condition Assessment Techniques in Electrical Systems (CATCON)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013",
                            "Author Position": "2",
                            "Details of Research Publication": "Excitation capacitance requirements of three phase self excited induction generator for WindMill application, IEEE International Conference on Energy Efficient Technologies for Sustainability",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "2",
                            "Details of Research Publication": "Eigenvalue Assignment for Control of Time-Delay System: A Lambert W Function-Based Approach, AI in Manufacturing and Green Technology, CRC Press, 89-101",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Analysis of Vector-Controlled Onshore DFIG with STATCOM for Power Compensation, Springer, Advances in Intelligent Computing and Communication: Proceedings of ICAC",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                }
            ]
    },

    "Dr. B. Karthick": {
      name: "Dr. B. Karthick",
      designation: "Asst. Professor",
      email: "karthikb@mits.ac.in",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/karthik.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Electrical & Electronics Engineering", "Branch": "Electrical & Electronics Engineering", "College Name/University": "Pondicherry Engineering College, Pondicherry University", "Year of Passing": "2026"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "Electrical Drives & Control", "Branch": "Electrical & Electronics Engineering", "College Name/University": "Pondicherry Engineering College, Pondicherry University", "Year of Passing": "2012"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "Electrical & Electronics Engineering", "Branch": "Electrical & Electronics Engineering", "College Name/University": "Rajiv Gandhi College of Engineering & Tech, Pondicherry University", "Year of Passing": "2010"}
          ]
        },
        {
          title: "Research Areas",
          content: "Renewable Energy Systems"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=58538282100"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/295621"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=L1Cg4GkAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "2"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "3", "Details of Research Publication": "Multiphysics Finite Element Analysis of a U- Shaped Thermal Micro actuator for MEMS Applications, “2025 International Conference on Emerging Technologies in Engineering Applications (ICETEA)”, August 2025", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q1"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "A New Solution for Tackling Mismatching Losses in Solar PV Array Via Image Encryption, “ARPN Journal of Engineering and Applied Sciences”, Sep 2024", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Analysis of Coverage in the LoRa Network with Different Fading Channels Using IRS Environment, “International Journal of Communication Systems”, April 2025", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Mitigating power loss in PV arrays using four pyramid sudoku under partial shading, “Ain Shams Engineering Journal”, October 2025", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Chaotic spiral based reconfiguration scheme for the mitigation of power loss in solar photovoltaic (PV) systems, “Results in Engineering”, March 2025", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "4", "Details of Research Publication": "A (2X2) Microstrip Patch Antenna with Reduced Mutual Coupling Using CSRR, “2024 10th International Conference on Communication and Signal Processing (ICCSP)”, June 2024", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q1"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "4", "Details of Research Publication": "Deep Capsule Networks for Accurate Microaneurysm Detection and Classification in Retinal Images, “2024 10th International Conference on Communication and Signal Processing (ICCSP)”, June 2024", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q1"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "4", "Details of Research Publication": "Performance Analysis of Different SRAM cells and Proposed 9T SRAM cell, “ 2023 8th International Conference on Communication and Electronics Systems (ICCES)”, August 2023", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q1"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2022-23", "Application ID": "202341000087 A", "Title of the Patent": "Design & Performance of Charge-Plasma-Based Schottky-FEt CMOS Circuit Ring Oscillator for High Density ICs", "Status": "Published"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Got Recognized as a NPTEL Discipline Star in Computer Science & Engineering during the year of January – April 2025.",
            "Received Best Paper Award in the title of “Doubly Even Order Magic Square (DEOMS) based Reconfiguration scheme for the Mitigation of Power Loss in Solar Photovoltaic Systems” held at 1st International conference on Recent Innovations and Trends in Electrical & Electronics Engineering and Computing (RITEE C 2025), 22-23rd May 2025, NIT Patna."
          ]
        }
      ]
    },

    "Mr. A. Karthik": {
        "name": "Mr. A. Karthik",
        "designation": "Assistant Professor of Practice",
        "email": "",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. A. Karthik.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.E.",
                            "Specialization": "Power Systems",
                            "Branch": "Electrical & Electronics Engineering",
                            "College Name/University": "Regional Engineering College, Tiruchirappalli",
                            "Year of Passing": "2002"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Electrical & Electronics Engineering",
                            "Branch": "Electrical & Electronics Engineering",
                            "College Name/University": "S. V. University",
                            "Year of Passing": "2000"
                        }
                    ]
                }
            ]
    },

    "Mr. Sridhar. N": {
        "name": "Mr. Sridhar. N",
        "email": "sridharn@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Sridhar. N.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Microgrid, Smart grid",
                            "Branch": "EEE-Power Systems",
                            "College Name/University": "VIT university",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Applied Electronics",
                            "Branch": "EEE-AE",
                            "College Name/University": "Dr MGR Educational and Research Institute University",
                            "Year of Passing": "2007"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Electrical & Electronics Engineering",
                            "Branch": "Electrical & Electronics Engineering",
                            "College Name/University": "Sri Venkateswara College of Engineering & Technology, University of Madras",
                            "Year of Passing": "2004"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Electrical &ndash; Microgrid, Smart grid, Optimization systems, Artificial Intelligence, Machine Learning."
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57217634853",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/274338",
                        "Google scholar : https://scholar.google.com/citations?user=T8C8GisAAAAJ&hl=en",
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
                            "Author Position": "3",
                            "Details of Research Publication": "Design and performance analysis of an optimised hybrid boost converter with coupled inductor for PV-based EV applications. https://doi.org/10.1080/00207217.2026.2637986",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Enhanced Performance of Triple-Stage Interleaved Converter in HRES Grid System Using Puffer Fish Optimized PI Controller. https://doi.org/10.1007/s40998-026-01040-3",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;Integrated Control of Hybrid PV-Wind Energy Systems Using Crayfish-Optimized Neuro-Fuzzy Inference and a Trans Z-Source QSEPIC Converter.&quot; Iranian Journal of Science and Technology, Transactions of Electrical Engineering (2025): 1-28",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Passivity-Based Techniques for Controlling BLDC Motor-Driven EVs. In 2025 7th International Conference on Energy, Power and Environment (ICEPE) (pp. 1-6).",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Hybrid Power Conversion System Using PWM Rectification and Advanced Bidirectional DC-DC Control for Efficient Load Applications. In 2025 IEEE 14th International Conference on Communication Systems and Network Technologies (CSNT) (pp. 1327-1332).",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Optimized High-Speed Wallace Tree Multiplier Using Parallel Prefix Adders. In 2024 International Conference on Smart Systems for Electrical, Electronics, Communication and Computer Engineering (ICSSEECC) (pp. 220-225).",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "3",
                            "Details of Research Publication": "Modeling of wind energy conversion system with variable load and variable source",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancement of power management in micro grid system using adaptive ALO technique. Journal of Ambient Intelligence and Humanized Computing, 12(2), 2163-2182.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                },
                {
                    "title": "Research Projects and Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Funded Project /Event": "Event - FDP",
                            "Role": "Co-Coordinator",
                            "Title of the Project/Event": "Fostering Research and Developments in Academic Institutions",
                            "Amount in Rs. /-": "6,000",
                            "Funding Agency": "NITTTR Chandigarh"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Funded Project /Event": "Event - Workshop",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Smart Grid and its Future",
                            "Amount in Rs. /-": "3,000",
                            "Funding Agency": "IETE"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Funded Project /Event": "Event - Hands on Training Coordinator",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "OrCAD Fundamentals for Beginners",
                            "Amount in Rs. /-": "3,000",
                            "Funding Agency": "IETE"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Funded Project /Event": "Event &ndash; AICTE 360 Degree Feedback System",
                            "Role": "Resource Person",
                            "Title of the Project/Event": "Teaching Beyond the Class Room: Faculty insights through AICTE 360 Degree Feedback System",
                            "Amount in Rs. /-": "3,000",
                            "Funding Agency": "State Institute of Technical Teachers Training & Research, Kalamassery - Kerala"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Funded Project /Event": "Event &ndash; AICTE 360 Degree Feedback System - Government college -Kalamassery - Kerala",
                            "Role": "Resource Person",
                            "Title of the Project/Event": "Teaching Beyond the Class Room: Faculty insights through AICTE 360 Degree Feedback System",
                            "Amount in Rs. /-": "3,000",
                            "Funding Agency": "State Institute of Technical Teachers Training & Research, Kalamassery - Kerala"
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
                        "AICTE 360 Degree Feedback System Institute Level Coordinator &ndash; Fetched the students Academic feedback response via the AICTE portal and award the certificate from AICTE for the AY 2021-2022, 2022-2023, 2023-2024, 2024-25.",
                        "AICTE Training and Learning (ATAL) Academy - AICTE Training and Learning (ATAL) Academy - ENHANCING CYBER THREAT DETECTION THROUGH INCORPORATING DIGITAL TECHNOLOGIES - at Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology from 09/12/2024 to 14/12/2024",
                        "AICTE Training and Learning (ATAL) Academy - Energy and Electric Vehicles in India: Opportunities, Challenge, and Futures at MEENAKSHI SUNDARARAJAN ENGINEERING COLLEGE from 27/01/2025 to 01/02/2025"
                    ]
                }
            ]
    },

    "Mr. G. Mahammed Rafi": {
        "name": "Mr. G. Mahammed Rafi",
        "designation": "Asst. Professor",
        "email": "mahammedrafig@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. G. Mahammed Rafi.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Control Systems",
                            "Branch": "Electronics & Instrumentation Engineering",
                            "College Name/University": "Anna University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Industrial Process Instrumentation",
                            "Branch": "Instrumentation Engineering",
                            "College Name/University": "A.U College of Engg, Andhra university",
                            "Year of Passing": "2011"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Electronics & Instrumentation Engg",
                            "Branch": "Electronics & Instrumentation Engg",
                            "College Name/University": "SIR CR Reddy College of Engg, Andhra university",
                            "Year of Passing": "2006"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/feedback/author/reviewAuthorProfile.uri?authorIds=58198171800",
                        "Vidwan : https://vidwan.inflibnet.ac.in//profile/273400",
                        "Google scholar : https://scholar.google.com/citations?user=urulTUoAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 1"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "3",
                            "Details of Research Publication": "Performance of low rank matrix technique in image de-noising",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "4",
                            "Details of Research Publication": "Image Forgery Detection using Block-matching and K-means clustering techniques",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Development and Assessment of a Four-Element Ultra-Wideband (UWB) MIMO Antenna System for 5G Implementations",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "3",
                            "Details of Research Publication": "Inventiveness and Estimation of MEMS Constructed Appliance for Healthcare and Ecological Intensive Care",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Design and Optimization of a Geometric Slot- Loaded Super Wideband Antenna for Next-Generation Wireless Communication",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Design and Analysis of a Four-Element UWB MIMO Antenna Enhanced for 5G Applications",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "IoT-based Industrial SCADA System for Real-Time Monitoring and Automated Alerts",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "Awarded Topper of 2% in NPTEL online certification for the course Computer Architecture during Jan-April 2022."
                }
            ]
    },

    "Mr. E. Sathiyanarayanan": {
        "name": "Mr. E. Sathiyanarayanan",
        "designation": "Asst. Professor",
        "email": "sathiyanarayanane@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. E. Sathiyanarayanan.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Power Systems Engineering (Smart Grid)",
                            "Branch": "EEE",
                            "College Name/University": "Puducherry Technological University (PTU)",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Power Systems Engineering",
                            "Branch": "Power Systems Engineering",
                            "College Name/University": "University College Of Engineering, BIT Campus",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "EEE",
                            "Branch": "EEE",
                            "College Name/University": "Krishnasamy College of Engg., Anna University",
                            "Year of Passing": "2008"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Power Systems (SMART Grid)"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58931764600",
                        "Vidwan : https://mits.irins.org/profile/461215",
                        "Google scholar : https://scholar.google.com/citations?user=9W4fUKQAAAAJ&&hl=en",
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
                            "Author Position": "5",
                            "Details of Research Publication": "Detecting Cardiovascular Diseases Using Machine Learning and Biomedical Data Classification",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "5",
                            "Details of Research Publication": "A Multiband Sierpinski Arrowhead Fractal Antenna with 3 &times; 3 CSRR Array for Various Wireless Applications",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Efficient Noise Cancellation in Lung Signals Using Pipelined Adaptive LMS Algorithm",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Revolutionizing Human-Robot Interaction (HRI): Multimodal Intelligent Robotic System for Responsive Collaboration",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Optimized High-Speed Wallace Tree Multiplier Using Parallel Prefix Adders",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "6",
                            "Details of Research Publication": "Smart Monitoring System for Leakage Current and Excess Power Harvesting System for Industrial Applications",
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
                            "Academic Year": "2021-22",
                            "Application ID": "202241012827 A",
                            "Title of the Patent": "Smart Tracking System for Self-Propelled Electric/Fuel Vehicle",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mr. Ch Srinivas": {
        "name": "Mr. Ch Srinivas",
        "email": "srinivasc@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Ch Srinivas.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Quantum Load Grading, Smart Distribution System, Demand Response",
                            "Branch": "EEE",
                            "College Name/University": "Christ university",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Power System Control And Automation",
                            "Branch": "EEE",
                            "College Name/University": "Sri Vasavi Engineering College, JNTUK University",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "EEE",
                            "Branch": "EEE",
                            "College Name/University": "D.M.S.S.V.H. College of Engineering, Acharya Nagarjuna University",
                            "Year of Passing": "2011"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Intelligent Energy Management and Demand Response, Smart Distribution Systems, Electric Vehicle (EV) Integration & Smart Charging, Renewable-Integrated Distribution Networks."
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57200275202",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/460586",
                        "Google scholar : https://scholar.google.com/citations?user=_KWxZaUAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 8"
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
                            "Details of Research Publication": "Weighted cost emission dispatch optimization using GA&ndash;APO hybridization under priority sensitive scheduling for thermal power systems. Sci Rep 16, 12160 (2026). https://doi.org/10.1038/s41598-026-41270-3 .",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "DoS-resilient simultaneous voltage and frequency control in wind-integrated power system.&quot; Wind Engineering (2025): 0309524X261446521.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Interpretable Machine Learning Approach for State of Health Estimation in Lithium-Ion Batteries, 2025 IEEE International Conference on Communication Networks and Computing (CNC), Sonbhadra, India, 2025, pp. 950-956, doi: 10.1109/CNC68716.2025.11484533.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "A Data-Driven&ndash;Expert Hybrid Model for Real-Time Battery State of Health Diagnostics, 2025 IEEE 1st International Conference on Recent Trends in Computing and Smart Mobility (RCSM), Bhopal, India, 2025, pp. 1-6, doi: 10.1109/RCSM67767.2025.11506726.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "&quot;Optimization of Electric Vehicle Charging Infrastructure using Adaptive Large Neighbourhood Search,&quot; 2025 5th International Conference on Ubiquitous Computing and Intelligent Information Systems (ICUIS), Erode, India, 2025, pp. 534-539, doi: 10.1109/ICUIS67429.2025.11380306.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "A Synergistic Machine Learning-Metaheuristic Approach for Smart Grid Load Dispatch,&quot; 2025 3rd International Conference on Sustainable Computing and Smart Systems (ICSCSS), Coimbatore, India, 2025, pp. 1674-1679, doi: 10.1109/ICSCSS64956.2025.11500640.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Hybrid Quantum Network with Snow Geese-Elk Herd Optimization for Smart Load Shedding in Grids with Electric Vehicles and Photovoltaic Systems. Iran J Sci Technol Trans Electr Eng (2025). https://doi.org/10.1007/s40998-025-00925-z",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Integrated SOC Estimation for Grid-Interactive EV Batteries using Temperature-Dependent Kalman Filtering, 2025 3rd International Conference on Data Science and Network Security (ICDSNS), Tiptur, India, 2025, pp. 1-8, doi:10.1109/ICDSNS65743.2025.11168732.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Implementation of an Intelligent Battery Management System using Fuzzy Logic and Adaptive Neural Networks, 2025 7th International Conference on Intelligent Sustainable Systems (ICISS), India, 2025, pp. 688-693, doi: 10.1109/ICISS63372.2025.11076229.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Cost Minimization in Residential Hybrid Energy Systems Using Advanced Scheduling Algorithms, 2025 Fifth International Conference on Advances in Electrical, Computing, Communication and Sustainable Technologies (ICAECT), Bhilai, India, 2025, pp. 1-5, doi: 10.1109/ICAECT63952.2025.10958946.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Active Time-based Demand Response for Industrial Load Management using Quantum Mesh Neural Networks, 2025 7th International Conference on Intelligent Sustainable Systems (ICISS), India, 2025, pp. 1066-1072, doi: 10.1109/ICISS63372.2025.11076474",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Support Vector Regression for Reactive Power Compensation: A Data-Driven Approach to Power Loss Reduction, 2025 Third International Conference on Augmented Intelligence and Sustainable Systems (ICAISS), Trichy, India, 2025, pp. 1111-1117, doi: 10.1109/ICAISS61471.2025.11042146",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Enhanced Economic Load Dispatch Using a Novel Optimization Approach: A Cost Minimization Perspective, 2025 Fifth International Conference on Advances in Electrical, Computing, Communication and Sustainable Technologies (ICAECT), Bhilai, India, 2025, pp. 1-7, doi: 10.1109/ICAECT63952.2025.10958926",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Minimizing Energy Mismatch in Electric Vehicle Batteries With the Osprey Optimization Algorithm: A Novel Approach to SOC and Range Enhancement, 2025 Fifth International Conference on Advances in Electrical, Computing, Communication and Sustainable Technologies (ICAECT), Bhilai, India, 2025, pp. 1-7, doi: 10.1109/ICAECT63952.2025.10958991",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "5",
                            "Details of Research Publication": "Optimizing Capacitor Placement in Distribution Systems Under Variable Loading Conditions with Golden Jack Optimization (GJO). International Journal of Electrical and Electronics Research 12, no. 2 (2024): 338-344. https://doi.org/10.37391/IJEER.120202",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "A Novel Hybrid TLBO-RAT Algorithm for Optimal and Cost-Effective Power Generation Scheduling, 2024 2nd International Conference on Self Sustainable Artificial Intelligence Systems (ICSSAS), Erode, India, 2024, pp. 1666-1671, doi: 10.1109/ICSSAS64001.2024.10760261",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Data Integrity and Cost Efficiency in Smart Grids: Block-chain Integration Approach, 2024 1st International Conference on Advanced Computing and Emerging Technologies (ACET), Ghaziabad, India, 2024, pp. 1-7, doi: 10.1109/ACET61898.2024.10730041",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Block-Chain Assisted Strategies for Power Loss Reduction in Modern Distribution Systems, 2024 International Conference on Artificial Intelligence and Quantum Computation-Based Sensor Application (ICAIQSA), Nagpur, India, 2024, pp. 1-6, doi: 10.1109/ICAIQSA64000.2024.10882445",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "5",
                            "Details of Research Publication": "Block-chain Enabled Strategies for Efficient Power Loss Management in Distribution Networks. IJEER 12(4), 1513-1521. DOI: 10.37391/ijeer.120448.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Mitigating Power Losses in Distribution Systems: Integrating EV Charging Stations and Renewable Energy Sources, 2024 International Conference on Advances in Modern Age Technologies for Health and Engineering Science (AMATHE), Shivamogga, India, 2024, pp. 1-6, doi: 10.1109/AMATHE61652.2024.10582139.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "A novel hybrid approach for efficient energy management in battery and supercapacitor based hybrid energy storage systems for electric vehicles. Electrical Engineering 107, no. 1 (2025): 1-17. https://doi.org/10.1007/s00202-024-02483-9",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Electric Vehicles Battery Management Device &ndash; Opportunities and Implications, 2023 International Conference on Emerging Research in Computational Science (ICERCS), Coimbatore, India, 2023, pp. 1-6, doi: 10.1109/ICERCS57948.2023.10434054.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Addressing Power Loss and Voltage Profile Issues in Electrical Distribution Systems: A Novel Approach Using Polar Bear Gradient-Based Optimization",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Control Strategy for Load Frequency Control in Power Systems with Electric Vehicle Charging Stations, 2023 3rd Asian Conference on Innovation in Technology (ASIANCON), Ravet IN, India, 2023, pp. 1-6, doi: 10.1109/ASIANCON58793.2023.10270616.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Minimization of Power Losses in the Distribution System by Controlling Tap Changing Transformer using the PSO Algorithm, 2023 International Conference on Intelligent Data Communication Technologies and Internet of Things (IDCIoT), Bengaluru, India, 2023, pp. 740-745, doi: 10.1109/IDCIoT56793.2023.10053479.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "2",
                            "Details of Research Publication": "Minimization of Frequency Deviations in Multi-Area Power System with SSSC, 2023 International Conference on Intelligent Data Communication Technologies and Internet of Things (IDCIoT), Bengaluru, India, 2023, pp. 746-751, doi: 10.1109/IDCIoT56793.2023.10053433",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "2",
                            "Details of Research Publication": "A Novel Way to Detect the Islanding Condition Using PSO and Control the Voltage Current of DG Using A PI Controller, 2023 2nd International Conference for Innovation in Technology (INOCON), Bangalore, India, 2023, pp. 1-7, doi: 10.1109/INOCON57975.2023.10101107.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Minimization of Power Loss in Distribution System by Tap Changing Transformer using PSO Algorithm. IJEER 10(4), 1135-1139. DOI: 10.37391/IJEER.100460.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "29",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "4",
                            "Details of Research Publication": "Battery energy forecasting in electric vehicle using deep residual neural network.&quot; International Journal of Photoenergy 2022, no. 1 (2022): 5959443. https://doi.org/10.1155/2022/5959443",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "30",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "3",
                            "Details of Research Publication": "Regulation of Frequency in Multi-Source Two Area Power System with TCSC, 2022 4th International Conference on Smart Systems and Inventive Technology (ICSSIT), Tirunelveli, India, 2022, pp. 760-765, doi: 10.1109/ICSSIT53264.2022.9716491.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "31",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "Distribution Transformer Tap Setting Control using Particle Swarm Optimization, 2022 3rd International Conference on Electronics and Sustainable Communication Systems (ICESC), Coimbatore, India, 2022, pp. 1224-1230, doi: 10.1109/ICESC54411.2022.9885582.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "32",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Implementation of ANN Trained Voltage Control Scheme for Grid Islanded DG System.&quot; In Journal of Physics: Conference Series, vol. 1921, no. 1, p. 012057. IOP Publishing, 2021. DOI: 10.1088/1742-6596/1921/1/012057.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "33",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Optimal Solution of Economic Load Dispatch using Teaching Learning Algorithm, 2021 International Conference on Artificial Intelligence and Smart Systems (ICAIS), Coimbatore, India, 2021, pp. 828-833, doi: 10.1109/ICAIS50930.2021.9395984.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "34",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Control Of Generator And Load Side Converters For Stand-Alone Variable Speed Wind Turbine, 2020 6th International Conference on Advanced Computing and Communication Systems (ICACCS), Coimbatore, India, 2020, pp. 1204-1208, doi: 10.1109/ICACCS48705.2020.9074210.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "35",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "External Archive Based Adaptive Differential Evaluation for Solution of Economic Load Dispatch, 2019 International Conference on Intelligent Sustainable Systems (ICISS), Palladam, India, 2019, pp. 214-218, doi: 10.1109/ISS1.2019.8908089.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "36",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "Reduction of Odd Harmonics using Multilevel Inverter with Multi Carrier PWM Techniques, 2018 International Conference on Current Trends towards Converging Technologies (ICCTCT), Coimbatore, India, 2018, pp. 1-3, doi: 10.1109/ICCTCT.2018.8550859.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "37",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "A Novel Seven Level Asymmetrical Inverter Topology to Reduce Total Harmonic Distortion, 2018 International Conference on Current Trends towards Converging Technologies (ICCTCT), Coimbatore, India, 2018, pp. 1-4, doi: 10.1109/ICCTCT.2018.8550960.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "38",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Author Position": "1",
                            "Details of Research Publication": "Intensification of peculiar optimal scheduling & fuel price minimization using cuckoo rummage algorithm, 2017 International Conference On Smart Technologies For Smart Nation (SmartTechCon), Bengaluru, India, 2017, pp. 630-634, doi: 10.1109/SmartTechCon.2017.8358448.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "39",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Author Position": "1",
                            "Details of Research Publication": "Intensification of optimal power scheduling & fuel cost minimization inspired by Adaptive Differential Evaluation Algorithm, 2017 Second International Conference on Electrical, Computer and Communication Technologies (ICECCT), Coimbatore, India, 2017, pp. 1-5, doi: 10.1109/ICECCT.2017.8117978.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "40",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Author Position": "2",
                            "Details of Research Publication": "A novel way to deal with harmonic elimination in multilevel CHB inverter using without filtering technique, 2017 International conference of Electronics, Communication and Aerospace Technology (ICECA), Coimbatore, India, 2017, pp. 62-67, doi: 10.1109/ICECA.2017.8212742.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
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
                            "Application ID": "4200/2025-CO/SW",
                            "Title of the Patent": "Smart EV Charging Station Selection System Based on Real-Time Data",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Application ID": "5282/2025-CO/SW",
                            "Title of the Patent": "Adaptive EV Charging Pricing System",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Application ID": "202141039042IN",
                            "Title of the Patent": "Three-Port Converter for Induction Motor Drive System",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Best Paper Award (Paper Title: &ldquo;Integrated SOC Estimation for Grid-Interactive EV Batteries Using Temperature-Dependent Kalman Filtering.&rdquo;), IEEE 3rd International Conference on Data Science and Network Security (ICDSNS-2025), organized by the Department of Artificial Intelligence & Machine Learning in association with the Department of CSE and Department of MBA, Kalpataru Institute of Technology, Tiptur, held on 25th&ndash;26th July 2025.",
                        "Best Reviewer Award, 9th International Conference on Computers, Management & Mathematical Sciences (ICCM 2023), organized by the North Eastern Regional Institute of Science and Technology (NERIST), Arunachal Pradesh, India, in collaboration with California State University, USA, and emlyon Business School, France, held 24th&ndash;25th August 2023",
                        "Received Research Excellence Award 2017 By Institute for Exploring Advances In Engineering (IEAE)."
                    ]
                }
            ]
    },

    "Mr. Rajesh KS": {
        "name": "Mr. Rajesh KS",
        "email": "rajeshks@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Rajesh KS.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Power Electronics",
                            "Branch": "Electrical & Electronics Engineering",
                            "College Name/University": "JNTU, Kakinada",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Power Electronics",
                            "Branch": "Electrical & Electronics Engineering",
                            "College Name/University": "Siddaganga Institute of Technology, Tumakuru, VTU",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Electrical & Electronics Engineering",
                            "Branch": "Electrical & Electronics Engineering",
                            "College Name/University": "Dr.Ambedkar Institute of Technology, Bangalore, VTU",
                            "Year of Passing": "2014"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Electric Vehicles, Power Electronics & Renewable Power Generation"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57200957327",
                        "Vidwan : https://vidwan.inflibnet.ac.in/myprofile",
                        "Google scholar : https://scholar.google.com/citations?user=S5Ez9l8AAAAJ&hl=en",
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
                            "Author Position": "1",
                            "Details of Research Publication": "Smart Vending Machines: Improving Service Quality with Integrated Controllers and SVM Algorithm",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Cloud-based Decision Support Systems for Securing Farm-to-Table Traceability using IoT and KNN Algorithm",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Fuzzy Logic Controlled Photovoltaic system with IoT Technology",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Robotic 3D Printing for Customized Industrial Components: IoT and AI-Enabled Innovation",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-16",
                            "Author Position": "3",
                            "Details of Research Publication": "A Comparative Study on DC Motor Drive fed by Synchronous SEPIC Converter and Synchronous Zeta Converter",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                }
            ]
    },

    "Mr. M. Venkatesh": {
        "name": "Mr. M. Venkatesh",
        "designation": "Asst. Professor",
        "email": "venkateshm@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Venkatesh.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "High Stepdown Fault Tolerant Converter",
                            "Branch": "Electrical Engineering",
                            "College Name/University": "NIT, Mizoram",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Power Electronics and Drives",
                            "Branch": "Electrical & Electronics Engineering",
                            "College Name/University": "Sree Sastha Institute of Engineering and Technology",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Electrical & Electronics Engineering",
                            "Branch": "Electrical & Electronics Engineering",
                            "College Name/University": "Sapthagiri College of Engineering, Anna University",
                            "Year of Passing": "2011"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Electrical &ndash; Power converter for green hydrogen production, BMS, ML Techniques"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57214367452",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/460850",
                        "Google scholar : https://scholar.google.com/citations?user=V_DUSl4AAAAJ&hl=en",
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
                            "Details of Research Publication": "Implementation of an Intelligent Battery Management System using Fuzzy Logic and Adaptive Neural Networks",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Fault Detection in Building Infrastructure Using IoT Sensors and Bayesian Network",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "IoT Enabled Microgrid System for Enhancing Power Quality Using Adaptive Neuro-Fuzzy Control Algorithm",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Electric Vehicle Based Hybrid Energy Storage System using IoT",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "IoT-Based Car Safety System With Airbag Notification for Emergency Assistance",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "3",
                            "Details of Research Publication": "Improving Power Quality of Distribution System Connected to Wind Power Systems",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                },
                {
                    "title": "Research Projects and Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Funded Project /Event": "Event",
                            "Role": "Co-Coordinator",
                            "Title of the Project/Event": "Modelling and Simulation of Battery Bank from Cell to Pack for Electric Vehicles",
                            "Amount in Rs. /-": "5,000",
                            "Funding Agency": "MITS ISTE Student Chapter"
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
                            "Application ID": "202541005783",
                            "Title of the Patent": "Secured E-Voting System Based On Finger Vein Recognition",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Application ID": "202341043712",
                            "Title of the Patent": "Smart Charger for EV Battery",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mr. E. Raghu Babu": {
        "name": "Mr. E. Raghu Babu",
        "designation": "Asst. Professor",
        "email": "raghubabue@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Raghu Babu.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Power Electronics & Drives",
                            "Branch": "Electrical & Electronics Engineering",
                            "College Name/University": "National Institute of Technology, Kurukshetra",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Electrical & Electronics Engineering",
                            "Branch": "Electrical & Electronics Engineering",
                            "College Name/University": "Dadi Institute of Engineering & Technology",
                            "Year of Passing": "2012"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Electrical &ndash; Power Electronics & Drives"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus :",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/460384/NDYwMzg0",
                        "Google scholar : https://scholar.google.com/citations?user=HzcIk4QAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) :"
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Secured Top 5% Certificate for the NPTEL Course &ldquo;Python For Data Science&rdquo;",
                        "Secured Elite+Gold Certificate for the NPTEL Course &ldquo;Understanding Incubation and Entrepreneurship&rdquo;"
                    ]
                }
            ]
    },

    "Mr. Ramesh Kumar R": {
      name: "Mr. Ramesh Kumar R",
      designation: "Asst. Professor",
      email: "rrameshkumar@mits.ac.in",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/aravana Kumar.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "M.E.", "Specialization": "High Voltage Engineering", "Branch": "High Voltage Engineering", "College Name/University": "College of Engineering, Guindy (CEG), Anna University", "Year of Passing": "2015"},
            {"S.No": "2", "Course": "B.E.", "Specialization": "EEE", "Branch": "EEE", "College Name/University": "C.Abdul Hakeem College of Engineering and Technology", "Year of Passing": "2008"}
          ]
        },
        {
          title: "Research Areas",
          content: "High Voltage Engineering and Power Electronics"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus Link", "Link": "https://www.scopus.com/authid/detail.uri?authorId=59321221100"},
            {"Identifier": "Vidwan Link", "Link": "https://mits.irins.org/profile/461355"},
            {"Identifier": "Google scholar Link", "Link": "https://scholar.google.com/citations?user=Y-BTwuwAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": ""}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Design and Analysis of BLDC Motor-Based Electric Vehicle Using Fuzzy Logic Controller", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "464951-001", "Title of the Patent": "POWER LINE INSPECTION ROBOT", "Status": "Granted"}
          ]
        }
      ]
    }
  */
};

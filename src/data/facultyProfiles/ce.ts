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

export const ceProfiles: Record<string, FacultyProfile> = {
  /*
  // Static faculty profile data preserved in comments (Dynamic profiles fetched from EngageAI database API)
"Dr. Dipankar Roy": {
        "name": "Dr. Dipankar Roy",
        "email": "drdipankarroy@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Deepankar Roy.JPG",
        "designation": "Professor &amp; Dean - School of Engineering",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Hydraulics",
                            "Branch": "Civil Engineering",
                            "College Name/University": "Leonardo Da Vinci School of Engineering, University of Pisa, Pisa, Italy.",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Soil and Water Conservation Engineering",
                            "Branch": "Soil and Water Conservation Engineering",
                            "College Name/University": "Indian Institute of Technology, Kharagpur, India",
                            "Year of Passing": "2006"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Agricultural Engineering",
                            "Branch": "Agricultural Engineering",
                            "College Name/University": "Faculty of Agricultural Engineering, Bidhan Chandra Krishi Viswavidyalaya, West Bengal,India.",
                            "Year of Passing": "2004"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Hydraulics, Hydrological Modelling, Materials Science & Sustainable Construction"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : http://www.scopus.com/authid/detail.url?authorId=57223173350",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/272776",
                        "Google scholar : https://scholar.google.com/citations?user=mqCWzHsAAAAJ&hl=en",
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
                            "Author Position": "2",
                            "Details of Research Publication": "Machine learning for land use and land cover mapping in Google earth engine: A review of methods, applications and challenges",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026",
                            "Author Position": "3",
                            "Details of Research Publication": "Sustainable Brick Production Using Ceramic Waste and Coconut Fibers: Performance Pre-diction Using Ma-chine Learning",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026",
                            "Author Position": "3",
                            "Details of Research Publication": "Optimization of Eco-Efficient Mix Designs Using Nano Enhanced Binders for Enhanced Mechanical and Durability Performance",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "2",
                            "Details of Research Publication": "A review of remote sensing and GIS applications in flood monitoring and management",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "3",
                            "Details of Research Publication": "Evaluation of net-zero materials in mortar bricks with predictive modelling using random forest and gradient boosting techniques Q1",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "3",
                            "Details of Research Publication": "Impact of biochar on strength, durability, and carbon sequestration in cement based materials.",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "3",
                            "Details of Research Publication": "Mechanical properties and machine learning analysis of concrete incorporating waste glass as coarse aggregate",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Recycling glass waste into concrete aggregates: enhancing mechanical properties and sustainability",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Innovative approaches to sustainable construction: a detailed study of rice husk ash as an ecofriendly substitute in cement production",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Optimization and prediction of paver block properties with ceramic waste as fine aggregate using response surface methodology",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Mechanical proper-ties and machine learning analysis of concrete incorporating waste glass as coarse aggregate",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Mechanical and sustainability performance of concrete incorporated limestone powder, recycled ceramic aggregates, and coconut fibers",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Machine learning-based destructive and non-destructive testing of paver block using fly ash and polyvinyl chlo-ride into sustainable pedestrians",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011-12",
                            "Author Position": "2",
                            "Details of Research Publication": "Stilling basin ero-sion due to vertical crossing jets",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010-11",
                            "Author Position": "2",
                            "Details of Research Publication": "Analysis of scour characteristics in presence of aerated crossing jets",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "2",
                            "Details of Research Publication": "Analysis of flood-ing and drying con-ditions through trend analysis of amsre satellite soil moisture over the Himalayan Gandak River basin",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "Impact of temperature and precipitation lapse rate on hydrological model-ling over Himala-yan Gandak River Basin",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Recycling glass waste in mortar: a sustainable ap-proach to enhancing strength and density",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Evaluation of SCBA-replaced cement for carbon credits and reduc-tion in CO2 emissions",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Evaluating the use of recycled fine aggregates in 3D printing: a systematic review",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Entropy-weighted-multicriteria decisionmaking (E-MCDM) approach for erosion area prioritization case study of a Himala-yan River Basin",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Correction to: Mechanical and sustainability perfor-mance of concrete incorporated lime-stone powder, recycled ceramic aggregates, and coconut fibers",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Spatiotemporal Intercomparison of WMO&rsquo;s Gauge Ad-justed Satellite Precipitation Product Over India",
                            "Indexing": "Scopus",
                            "Publication": "Erratum",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Investigating the potential of waste glass in paver block production using RSM",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "achine learning application to pre-dict the mechanical properties of glass fiber mortar",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Adaptive neuro-fuzzy inference system prediction model for the me-chanical behaviour of rice husk ash and periwinkle shell concrete blend for sustainable construction",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Experimental investigation of Bambara nut shell ash in the production of con-crete and mortar",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Prediction of cement mortar strength by replacement of hydrated lime using RSM and ANN",
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
                            "Application ID": "437599-001",
                            "Title of the Patent": "ZIP LOCK INTERLOCKING BRICK",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "428578-001",
                            "Title of the Patent": "INTERLOCKED HEXAGONAL HOLLOW BLOCK",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "428580-001",
                            "Title of the Patent": "GRIP-TITE INTERLOCKING BRICKS",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Application ID": "427507-001",
                            "Title of the Patent": "C-SHAPE INTERLOCKING PAVER BLOCK",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Application ID": "429097-001",
                            "Title of the Patent": "H-SHAPED INTERLOCKING PAVER BLOCK",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "6",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Application ID": "427544-001",
                            "Title of the Patent": "HEAD-FOOT INTERLOCKING PAVER BLOCK",
                            "Status": "Granted"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Reviewer in Scientific Reports, Nature: March 18, 2025 to March 18, 2025",
                        "Reviewer in Water Management for Proceedings of ICE: April 18, 2022",
                        "Guest Lecture on Applications of AI&ML in Civil Engineering: Sept. 19, 2024 to Sept. 19, 2024",
                        "Expert - ASCE SR 2024 Outstanding Thesis Presentation: July 30, 2024 to July 30, 2024",
                        "IAHR - International Scientific Committee (ISC).-9th International Symposium on Hydraulic Structures (ISHS 2022): April 23, 2021 to April 23, 2021"
                    ]
                }
            ]
    },

    "Dr. Sudheer Kumar Yantrapalli": {
        "name": "Dr. Sudheer Kumar Yantrapalli",
        "email": "sudheerkumary@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Sudheer Kumar.JPG",
        "designation": "Assoc. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Geotechnical Engineering",
                            "Branch": "Civil Engineering",
                            "College Name/University": "National Institute of Technology, Warangal",
                            "Year of Passing": "2019"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Geotechnical Engineering",
                            "Branch": "Civil Engineering",
                            "College Name/University": "National Institute of Technology, Warangal",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Civil Engineering",
                            "Branch": "Civil Engineering",
                            "College Name/University": "Koneru Lakshmiah College of Engineering (KLCE), Guntur",
                            "Year of Passing": "2010"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Ground improvement Techniques, Geo - Environmental Engineering, Composite materials, sustainable construction materials."
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57205500699",
                        "Vidwan : https://mits.irins.org/profile/272691",
                        "Google scholar : https://scholar.google.co.in/citations?hl=en&user=CJqzh98AAAAJ&view_op=list_works&sortby=pubdate",
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
                            "Details of Research Publication": "Experimental Investigation and Optimization of Cellular Light Weight Concrete Using foam content and Prediction Using Response Surface Methodology",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Emerging Management Tools in Civil Engineering: Trends, Technologies, and Transformations",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "-"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "A study on de-contamination of dairy wastewater using natural coagulants",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Sudy on Influence of Brine Solution on swelling Behaviour of Expansive soil",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "Desiccation Induced Cracking Characteristics of Locally Available Soils in Warangal",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "2",
                            "Details of Research Publication": "A Study on Influence of Organic Ligand on the Adsorption of Lead by Clayey Soil",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "A Study on Influence of Organic Ligand on the Adsorption of Lead by Clayey Soil",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-19",
                            "Author Position": "4",
                            "Details of Research Publication": "Permanent deformation behaviour of black cotton soil treated with calcium carbide residue",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "A Study on the Influence of Heavy Metals on Crack Intensity Factor and Hydraulic Conductivity of Locally Available Soils",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Author Position": "2",
                            "Details of Research Publication": "A Study on Influence of pH and Organic Chemical on the Retention Capacity of Red Earth",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016 - 17",
                            "Author Position": "1",
                            "Details of Research Publication": "A Study on influence of organic ligands on migration of heavy metals through compacted clayey soil",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016 - 17",
                            "Author Position": "1",
                            "Details of Research Publication": "A study on influence of real municipal solid waste leachate on properties of soils in Warangal, India",
                            "Indexing": "Scopus",
                            "Publication": "Article",
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
                            "Academic Year": "2024-2025",
                            "Funded Project /Event": "AICTE &ndash; VAANI",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "The Role of AI in Smart City and Mobility in India",
                            "Amount in Rs. /-": "2,00,000",
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
                            "Application ID": "431535-001",
                            "Title of the Patent": "SOIL CORE SAMPLE COLLECTOR",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "437594-001",
                            "Title of the Patent": "AUTOMATED AGGREGATES IMPACT TESTING MACHINE",
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
                            "Name of the Consulting Firm": "NHAI &ndash; MMLP",
                            "Title of the Project/Event": "Geotechnical Investigation at NHAU &ndash; MMLP park",
                            "Amount in Rs. /-": "10,00,000"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Name of the Consulting Firm": "AP PRI",
                            "Title of the Project/Event": "Quality assessment in various engineering works",
                            "Amount in Rs. /-": "15,00,000"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Name of the Consulting Firm": "Ap RWS",
                            "Title of the Project/Event": "Geotechnical Investigation in proposed Government schools",
                            "Amount in Rs. /-": "15,00,000"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Name of the Consulting Firm": "AP PRI",
                            "Title of the Project/Event": "Quality assessment in various engineering works",
                            "Amount in Rs. /-": "10,00,000"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Name of the Consulting Firm": "Ap R & B",
                            "Title of the Project/Event": "Geotechnical Investigation in proposed Government offices",
                            "Amount in Rs. /-": "10,00,000"
                        },
                        {
                            "S.No": "6",
                            "Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Name of the Consulting Firm": "AP PRI",
                            "Title of the Project/Event": "Quality assessment in various engineering works",
                            "Amount in Rs. /-": "10,00,000"
                        },
                        {
                            "S.No": "7",
                            "Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Name of the Consulting Firm": "AP Irrigation",
                            "Title of the Project/Event": "Quality assessment in various engineering works in Mudivedu Reservoir",
                            "Amount in Rs. /-": "5,00,000"
                        },
                        {
                            "S.No": "8",
                            "Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Name of the Consulting Firm": "AP PRI",
                            "Title of the Project/Event": "Quality assessment in various engineering works",
                            "Amount in Rs. /-": "10,00,000"
                        },
                        {
                            "S.No": "9",
                            "Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Name of the Consulting Firm": "HPCl",
                            "Title of the Project/Event": "Quality Monitoring and assessment for Fuel stations",
                            "Amount in Rs. /-": "2,00,000"
                        },
                        {
                            "S.No": "10",
                            "Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Name of the Consulting Firm": "AP PRI",
                            "Title of the Project/Event": "Quality assessment in various engineering works and Quality assessment in various engineering works",
                            "Amount in Rs. /-": "10,00,000"
                        }
                    ]
                }
            ]
    },
    "Dr. Vijayakumar Natesan": {
        "name": "Dr. Vijayakumar Natesan",
        "email": "drvijayakumarn@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Vijayakumar Natesan.JPG",
        "designation": "Asst. Professor  &amp; Head",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Structural Engineering",
                            "Branch": "Civil Engineering",
                            "College Name/University": "Indian Institute of Technology, Hyderabad",
                            "Year of Passing": "2020"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Structural Engineering",
                            "Branch": "Civil Engineering",
                            "College Name/University": "Alagappa Chettiar College of Engineering & Technology, Karaikudi",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Civil Engineering",
                            "Branch": "Civil Engineering",
                            "College Name/University": "Institute of Road & Transport Technology, Erode",
                            "Year of Passing": "2011"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Structural steel and Cold-formed steel, Connections in steel structure, Composite structure, Pre-cast construction, and Construction Materials"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57209005001",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/280524",
                        "Google scholar : https://scholar.google.com/citations?user=ie86Yn4AAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 6"
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
                            "Details of Research Publication": "Numerical investigation of cold-formed steel sleeve connection for channel sections subjected to combined bending and shear",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Effectiveness of Web Cleat Bolted Connections for Beam-to Column CFS Sections",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "2",
                            "Details of Research Publication": "Effect of Staggered Bolted Connections on CFS Channel Sections",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Comparative Experimental Studies on the Web Cleat Bolted CFS Beam to Column Connection",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Experimental Study on Ultimate Strength of Bolted L-Shaped Sleeve Joints between Cold-Formed Steel Channel Sections",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "Structural performance on bolted sleeved connections between two CFS channel sections subjected to combined bending and shear",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "Experimental study on beam-to-column clip angle bolted connection",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "Performance of CFS Beam-to-Beam Bolted Connection Using Clip Angle and Flange Strip: Experimental Investigation",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "Experimental investigation on clip angle bolted connection between two cold-formed steel channels",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "1",
                            "Details of Research Publication": "Rotational behavior of cold-formed steel beams connected through clip angles",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                },
                {
                    "title": "Consultancy & Testing",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Name of the Consulting Firm": "AP PRI",
                            "Title of the Project/Event": "Quality assessment in various engineering works",
                            "Amount in Rs. /-": "9,000"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Name of the Consulting Firm": "Ap RWS",
                            "Title of the Project/Event": "Quality assessment in various engineering works",
                            "Amount in Rs. /-": "9,000"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Name of the Consulting Firm": "AP- R & B",
                            "Title of the Project/Event": "Quality assessment in various engineering works",
                            "Amount in Rs. /-": "6,000"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Name of the Consulting Firm": "AP PRI",
                            "Title of the Project/Event": "Quality assessment in various engineering works",
                            "Amount in Rs. /-": "8,000"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Reviewer of the Journal: Thin-Walled Structures, Journal of The Institution of Engineers (India): Series A (IEIA), and Arabian Journal of Geosciences",
                        "Recognized as an NPTEL Discipline Star by Swayam NPTEL for July&ndash;December 2023",
                        "Session Chair in the Indian Structural Steel Conference held on January 06th to 08th, 2022 Organized by Structural Steel Research Group, IIT Hyderabad"
                    ]
                }
            ]
    },

    "Dr. T. Venkatesh Varma": {
        "name": "Dr. T. Venkatesh Varma",
        "email": "drvenkateshvarmat@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Venkatesh Verma.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Postdoctoral Fellow",
                            "Specialization": "Mechanical Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Technion - Israel Istitute of Technology, Haifa, Israel",
                            "Year of Passing": "June 2023 - Feb 2026"
                        },
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Structural Engineering",
                            "Branch": "Civil Engineering",
                            "College Name/University": "Indian Institute of Technology Indore",
                            "Year of Passing": "2023"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Structural Engineering",
                            "Branch": "Civil Engineering",
                            "College Name/University": "Indian Institute of Technology Bhubaneswar",
                            "Year of Passing": "2019"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Civil Engineering",
                            "Branch": "Civil Engineering",
                            "College Name/University": "College of Engineering and Technology, Bhubaneswar",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "",
                            "Specialization": "",
                            "Branch": "",
                            "College Name/University": "",
                            "Year of Passing": ""
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Computational mechanics, Mechanical metamaterials, Fracture and failure mechanics, Evolutionary Optimisation"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57217862023",
                        "Vidwan :",
                        "Google scholar : https://scholar.google.com/citations?user=AxLd5RcAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 4"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "5",
                            "Details of Research Publication": "Distinct exceptional points in Hermitian Phononic Laminates",
                            "Indexing": "SCI",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Redirecting Crack with Learning-based Approach for Structural Durability",
                            "Indexing": "SCI",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Computational Analysis of Truss Optimization Methods",
                            "Indexing": "SCI",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Effect of nonlocality on the dispersion relations of mechanical metamaterials",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Third-order exceptional points and frozen modes in planar elastic laminates",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Effect of Crystal Orientation and Crystallographic Anisotropy on Shear Band Formation During Ductile Fracture in Fe Single Crystals",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "A numerical study to assess the role of pre-stressed inclusions on enhancing fracture toughness and strength of periodic composites",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "The Influence of Clamping, Structure Geometry, and Material on Seismic Metamaterial Performance",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Designing polymer metamaterial for protective armor: a coarse-grained formulation",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Buckling Restrained Sizing and Shape Optimization of Truss Structures",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Visiting scholar to Imperial College London, London (UK) during the doctoral studies (2022)",
                        "Students&rsquo; representative in the DPG (Discipline of Post-graduate) committee at IIT Indore (2022)",
                        "Received CET merit scholarship based on academic merit performance during undergraduate level (2011-2015)"
                    ]
                }
            ]
    },
    "Dr. Imran Kuttagola": {
        "name": "Dr. Imran Kuttagola",
        "email": "imrankuttagola@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Imran Kuttagola.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Structural Engineering",
                            "Branch": "Civil Engineering",
                            "College Name/University": "National Institute of Technology, Karnataka",
                            "Year of Passing": "2025"
                        },
                        {
                            "Course": "M.Tech",
                            "Specialization": "Structural Engineering",
                            "Branch": "Civil Engineering",
                            "College Name/University": "National Institute of Technology, Karnataka",
                            "Year of Passing": "2020"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Civil Engineering",
                            "Branch": "Civil Engineering",
                            "College Name/University": "MB University",
                            "Year of Passing": "2013"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Sustainable Geopolymer Concrete, Lightweight Concrete, Fracture and Fatigue Investigation, Concrete 3D printing"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58094301400",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/656148",
                        "Google scholar : https://scholar.google.com/citations?view_op=list_works&hl=en&user=EqoYvewAAAAJ",
                        "h-Index (As per Scopus Data) : 1"
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
                            "Details of Research Publication": "Application of Taguchi&rsquo;s optimization techniques for enhancing the fracture characteristics and brittleness of self-compacting alkali-activated concrete. Theoretical and Applied Fracture Mechanics, 138, 104931. https://doi.org/10.1016/j.tafmec.2025.104931",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Development and performance evaluation of self-compacting lightweight alkali-activated concrete incorporating hydroton clay balls. Structures, 71, 108124. https://doi.org/10.1016/j.istruc.2024.108124",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "5",
                            "Details of Research Publication": "Experimental study on shear reinforced and shear deficient RC beams subjected to preloading and wrapping with CFRP sheets. Materials Today: Proceedings https://doi.org/10.1016/j.matpr.2023.01.299",
                            "Indexing": "SCOPUS",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Numerical study on the behavior of RC beams by using GFRP bars as an alternate to steel bars. Materials Today: Proceedings 88, 66-70. https://doi.org/10.1016/j.matpr.2023.04.579",
                            "Indexing": "SCOPUS",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "3",
                            "Details of Research Publication": "Numerical Study on Static and Fatigue Behavior of Alkali-Activated Fly Ash Concrete Modelled using Concrete Damage Plasticity (CDP) Model. IOP Conference Series: Earth and Environmental Science 1387 (1), 012014",
                            "Indexing": "SCOPUS",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Application of fractal analysis to characterise the fracture and mechanical properties of concrete. IOP Conference Series: Earth and Environmental Science 1387 (1), 012015",
                            "Indexing": "SCOPUS",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "Study on the effectiveness of prefabricated cage system reinforcement in columns. IOP Conference Series: Earth and Environmental Science 1149 (1), 012010",
                            "Indexing": "SCOPUS",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "Numerical investigation of the hybrid reinforced concrete beam using GFRP bars. IOP Conference Series: Earth and Environmental Science 1149 (1), 012011",
                            "Indexing": "SCOPUS",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Experimental Studies on the Mechanical and Durability Properties of Mortar Containing Waste Glass Powder as Partial Replacement of Cement. International Conference on Sustainable Infrastructure: Innovation, Opportunities and Challenges. 709-721",
                            "Indexing": "SCOPUS",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                }
            ]
    },

    "Mrs. Kandukuri Anitha": {
        "name": "Mrs. Kandukuri Anitha",
        "designation": "Asst. Professor",
        "email": "anithak@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs.Anitha.png",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Structural Engineering",
                            "Branch": "Civil Engineering",
                            "College Name/University": "Mohan Babu University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Structural Engineering",
                            "Branch": "Civil Engineering",
                            "College Name/University": "Annamacharya Institute of Technology and Sciences, JNTU, Anantapur",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Civil Engineering",
                            "Branch": "Civil Engineering",
                            "College Name/University": "AVR & SVR Institute Of Technology& Sciences, JNTU, Anantapur",
                            "Year of Passing": "2013"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Sustainable development of self compacting concrete through GGBS and STP water utilization"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus :",
                        "Vidwan : https://vidwan.inflibnet.ac.in//profile/272789",
                        "Google scholar : https://scholar.google.co.in/citations?user=IpMFWMQAAAAJ",
                        "h-Index (As per Scopus Data) :"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-2025",
                            "Author Position": "4",
                            "Details of Research Publication": "Study on Influence of Brine Solution on swelling Behaviour of Expansive soil",
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
                            "Academic Year": "2024-2025",
                            "Funded Project /Event": "Workshop",
                            "Role": "Co-Coordinator",
                            "Title of the Project/Event": "The Role of AI in Mobility and Smart Cities (TRAMS 2024)",
                            "Amount in Rs. /-": "2,00,000",
                            "Funding Agency": "AICTE- VAANI Scheme"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-2025",
                            "Application ID": "Patent No. 431535-001",
                            "Title of the Patent": "SOIL CORE SAMPLE COLLECTOR",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-2025",
                            "Application ID": "Patent No. 428580-001",
                            "Title of the Patent": "GRIP-TITE INTERLOCKING BRICKS",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Consultancy",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Cores",
                            "Academic Year": "2025-26",
                            "Name of the Consulting Firm": "Panchayat Raj Department",
                            "Title of the Project/Event": "CC Roads",
                            "Amount in Rs. /-": "10,000"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Mix design",
                            "Academic Year": "2025-26",
                            "Name of the Consulting Firm": "Panchayat Raj Department",
                            "Title of the Project/Event": "Mix design for Dams",
                            "Amount in Rs. /-": "15,000"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Cores",
                            "Academic Year": "2024-25",
                            "Name of the Consulting Firm": "Panchayat Raj Department",
                            "Title of the Project/Event": "CC Roads",
                            "Amount in Rs. /-": "10,000"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "Mix design",
                            "Academic Year": "2024-25",
                            "Name of the Consulting Firm": "Panchayat Raj Department",
                            "Title of the Project/Event": "Mix Design for Nagarjuna Construction Company",
                            "Amount in Rs. /-": "15,000"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Served as Session Chair for the conference &quot;Advances in Intelligent Civil Engineering (AICE) &ndash; 2025&quot; (Sept. 10&ndash;14, 2025).",
                        "Received Appreciation for Outstanding Contribution to Institute Consultancy at MITS.",
                        "Recognized as the Best Performer in the EDC Cell, MITS (2025)."
                    ]
                }
            ]
    },
    "Mr. P. Sabarishkumar": {
        "name": "Mr. P. Sabarishkumar",
        "designation": "Asst. Professor",
        "email": "sabarishkumarp@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. P. Sabarishkumar.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.E.",
                            "Specialization": "Structural Engineering",
                            "Branch": "Civil Engineering",
                            "College Name/University": "Institute of Road & Transport Technology, Anna University",
                            "Year of Passing": "2011"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Civil Engineering",
                            "Branch": "Civil Engineering",
                            "College Name/University": "Institute of Road & Transport Technology, Anna University",
                            "Year of Passing": "2009"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Structural Engineering"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus :",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/462964",
                        "Google scholar : https://scholar.google.com/citations?view_op=new_articles&hl=en&imq=P.Sabarishkumar#",
                        "h-Index (As per Scopus Data) :"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-2016",
                            "Author Position": "1",
                            "Details of Research Publication": "STUDY ON STRUCTURAL ANALYSIS AND DESIGN OF RCC BIN",
                            "Indexing": "SCOPUS",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-2016",
                            "Author Position": "1",
                            "Details of Research Publication": "ANALYSIS AND DESIGN OF RCC OFFSHORE PLATFORM",
                            "Indexing": "SCOPUS",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010-2011",
                            "Author Position": "1",
                            "Details of Research Publication": "Experimental Study on RCC Columns with various types of Confinement techniques",
                            "Indexing": "SCOPUS",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                }
            ]
    },
    "Dr. Ashok Julaganti": {
        "name": "Dr. Ashok Julaganti",
        "email": "drashokj@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Ashok.JPG",
        "designation": "Sr. Asst. Professor",
        "sections": [
            {
                "title": "Details of Educational Qualification",
                "content": [
                    {
                        "Course": "Ph.D.",
                        "Specialization": "Transportation Systems Engineering",
                        "Branch": "Civil Engineering",
                        "College Name/University": "Indian Institute of Technology, Guwahati",
                        "Year of Passing": "2017"
                    },
                    {
                        "Course": "M.Tech.",
                        "Specialization": "Transportation Systems Engineering",
                        "Branch": "Civil Engineering",
                        "College Name/University": "Indian Institute of Technology, Guwahati",
                        "Year of Passing": "2011"
                    },
                    {
                        "Course": "B.Tech.",
                        "Specialization": "Civil Engineering",
                        "Branch": "Civil Engineering",
                        "College Name/University": "Bapatla Engineering College, Bapatla",
                        "Year of Passing": "2009"
                    }
                ]
            },
            {
                "title": "Research Areas",
                "content": "Transportation Systems Engineering"
            },
            {
                "title": "Research Identifiers",
                "content": [
                    "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57194767854",
                    "Google scholar : https://scholar.google.com/citations?user=XVsCt1kAAAAJ&hl=en",
                    "h-Index (As per Scopus Data) : 5"
                ]
            }
        ]
    }
  */
};

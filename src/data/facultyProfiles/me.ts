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

export const meProfiles: Record<string, FacultyProfile> = {
  /*
  // Static faculty profile data preserved in comments (Dynamic profiles fetched from EngageAI database API)
"Dr. C. Yuvaraj": {
        "name": "Dr. C. Yuvaraj",
        "email": "vicechancellor@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. C. Yuvaraj.JPG",
        "designation": "Professor &amp; Vice Chancellor (I/c)",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Metal Matrix Composites",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Bangalore University",
                            "Year of Passing": "2009"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Manufacturing Science and Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "University Visveswaraiah College of Engineering, Bangalore University, Bangalore.",
                            "Year of Passing": "2000"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Mechanical Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "M S Ramaiah Institute of Technology, Bangalore University, Bangalore.",
                            "Year of Passing": "1991"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Composite Materials, Machining, Coatings and Tribology."
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=57192235789",
                        "Vidwan: https://mits.irins.org/profile/274702",
                        "Google scholar: https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=mFyRNfUAAAAJ",
                        "h-Index (As per Scopus Data) : 10"
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
                            "Details of Research Publication": "&quot;Facile Single-Step Electrodeposition of Flower-Shaped Cu doped ZnO Nanostructures for optical, photoluminescence and photocatalytic assessment.&quot; Optical Materials (2025): 117624.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "6",
                            "Details of Research Publication": "&quot;Realization of CO2 gas sensors and broadband photodetectors using metal/high-k CeO2/p-Si heterojunction.&quot; Ceramics International 50.18 (2024): 31845-31858.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "8",
                            "Details of Research Publication": "&quot;Optical, vibrational, and photoluminescence properties of holmium\u2010doped boro\u2010bismuth\u2010germanate glasses.&quot; Luminescence 39.7 (2024): e4822.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "&quot;Performance evaluation of developed new textured tools during turning of AISI 321 material.&quot; Materials and Manufacturing Processes 39.5 (2024): 688-699.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "11",
                            "Details of Research Publication": "&quot;Structure, morphology, photonconversion and energy transfer characteristics of Er3+/Yb3+: BaYF5 nanocrystals synthesized by hydrothermal method for photovoltaics.&quot; Ceramics International 49.16 (2023): 26879-26889.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "3",
                            "Details of Research Publication": "&quot;UV-to-NIR broadband photodetecting sensors using n-TiO2 nanorods/p-Si heterojunction in lateral and vertical configurations.&quot; Applied Physics A 129.6 (2023): 412.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "4",
                            "Details of Research Publication": "&ldquo;Investigation on turning process performance during machining of 15-5PH stainless steel material with eco-friendly machining technique.&rdquo; Materials Today: Proceedings. Scopus Conference None",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "&quot;Micro-structure and self-lubricant properties of powder mixed electrical discharge metal matrix composite coating.&quot; Proceedings of the Institution of Mechanical Engineers, Part E: Journal of Process Mechanical Engineering 236.4 (2022): 1369-1376.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "&quot;Electric discharge coating process variation and its wear properties.&quot; International Journal of Surface Science and Engineering 15.2 (2021): 131-151.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "5",
                            "Details of Research Publication": "&quot;High performance, self-powered and thermally stable 200&ndash;750 nm spectral responsive gallium nitride (GaN) based broadband photodetectors.&quot; Solar Energy Materials and Solar Cells 225 (2021): 111033.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "2",
                            "Details of Research Publication": "&quot;A comparison on microstructure and mechanical properties of electric discharge metal matrix nickel and silica composite coating on duplex stainless steel.&quot; Journal of Composite Materials 55.4 (2021): 507-520.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "3",
                            "Details of Research Publication": "&quot;Statistical analysis of current&ndash;voltage characteristics in Au/Ta2O5/n-GaN Schottky barrier heterojunction using different methods.&quot; Applied Physics A 127.1 (2021): 46.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "2",
                            "Details of Research Publication": "&quot;Evaluation of electrical parameters of Ni/n-type Si Schottky barrier diodes using polyvinyl alcohol (PVA) as an interfacial layer.&quot; AIP Conference Proceedings. Vol. 2269. No. 1. AIP Publishing LLC, 2020.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "2",
                            "Details of Research Publication": "&quot;Influence of silica on microstructural modification of electrical discharge composite coating and its wear performance. SILICON (2020).&quot;",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "10",
                            "Details of Research Publication": "&quot;Near infrared broadband and visible upconversion emissions of erbium ions in oxyfluoride glasses for optical amplifier applications.&quot; Optics & Laser Technology 127 (2020): 106167.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "3",
                            "Details of Research Publication": "&quot;Electrical discharge metal matrix composite coating on duplex stainless steel and its wear behavior under different environmental conditions.&quot; Materials Research Express 6.9 (2019): 0965c5.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "2",
                            "Details of Research Publication": "&quot;Synthesis of electrical discharge metal matrix composite coating through compacted semi-sintered electrode and its tribological studies.&quot; Journal of the Brazilian Society of Mechanical Sciences and Engineering 41.5 (2019): 213.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "2",
                            "Details of Research Publication": "&quot;Effect of feed rate on difficult to cut metals on surface roughness and tool wear using surface treated and untreated tools.&quot; Procedia Manufacturing 30 (2019): 216-223.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "2",
                            "Details of Research Publication": "&quot;Analysis and optimization of metal injection molding feedstock SS 316L for rheological properties.&quot; Journal of The Institution of Engineers (India): Series D 99.2 (2018): 177-184.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "2",
                            "Details of Research Publication": "&quot;Development and experimental investigation of mechanical and microstructural behaviour 0f welded dual phase steels (DPS).&quot; (2018).",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "2",
                            "Details of Research Publication": "&quot;Investigation of Mechanical Properties of a Composite Tubular Electrode Based Hard coating on Mild Steel Substrate.&quot;",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2016-17",
                            "Author Position": "2",
                            "Details of Research Publication": "&quot;Application of Taguchi Method for Optimizing the Parameters of Thermal Properties of Al/SiC-Gr Hybrid Composites.&quot; Bonfring International Journal of Advances in Image Processing 6.4 (2016): 28.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2016-17",
                            "Author Position": "4",
                            "Details of Research Publication": "&quot;Fabrication of Cast Aluminium-Silicon (Al-Si) and Aluminium-Magnesium (Al-Mg) Alloys and Their Properties.&quot; Acta Metallurgica Slovaca 22.4 (2016): 212-221.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        }
                    ]
                },
                {
                    "title": "Research Projects and Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2016-17",
                            "Project/Event": "Project",
                            "Role": "PI",
                            "Title of the Project/Event": "Development of High Strength Material for Micro Air Vehicle Structures",
                            "Amount in Rs. /-": "25,000",
                            "Funding Agency": "Institute of Engineers, Kolkatta"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2016-17",
                            "Project/Event": "Event - Seminar",
                            "Role": "PI",
                            "Title of the Project/Event": "Recent Advances in Additive Manufacturing",
                            "Amount in Rs. /-": "1,00,000",
                            "Funding Agency": "DST, SERB, New Delhi - Seminar"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2016-17",
                            "Project/Event": "Project",
                            "Role": "Co-PI",
                            "Title of the Project/Event": "Investigation and Characterization of Electrical Discharge Coated (EDC) Alloys for Mitigation of Biological Fouling on Maritime Structures",
                            "Amount in Rs. /-": "38,37,690",
                            "Funding Agency": "DST-SERB - ECRA"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2013-14",
                            "Project/Event": "Event - FDP",
                            "Role": "PI",
                            "Title of the Project/Event": "Fatigue & Fracture Mechanics in FE Analysis",
                            "Amount in Rs. /-": "7,00,000",
                            "Funding Agency": "AICTE - FDP"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "MITS",
                            "Academic Year": "2013-14",
                            "Project/Event": "Project",
                            "Role": "PI",
                            "Title of the Project/Event": "Design and Fabrication of Multi-Crop Smashing Combination Thresher",
                            "Amount in Rs. /-": "50,000",
                            "Funding Agency": "Institute of Engineers, Kolkatta"
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
                            "Application ID": "437596-001",
                            "Title of the Patent": "Multi-Sieving Machine",
                            "Status": "Examination"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "429724-001",
                            "Title of the Patent": "Textured turning cutting insert",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "443252-001",
                            "Title of the Patent": "Feedstock Filament Extuder",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "429875-001",
                            "Title of the Patent": "Dual surface textured tool",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "429725-001",
                            "Title of the Patent": "Cutting tool for turning operation",
                            "Status": "Examination"
                        },
                        {
                            "S.No": "6",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Application ID": "201941017448",
                            "Title of the Patent": "A Novel Hole Making Technique During The Thermoforming On Plastic Sheets",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "7",
                            "Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Application ID": "201941027725",
                            "Title of the Patent": "Removal Apparatus For Cylindrical Polymer Matrix Composite (Pmc) Parts Fabricated By Compression Cum Extruder Method",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "8",
                            "Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Application ID": "201741046532A",
                            "Title of the Patent": "New Invention of Low Cost Creep Testing Machine with Variable Temperature and Environmental and Environmental Conditions for Composite Material (pmmc)",
                            "Status": "Examination"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Ratified as Professor & Principal by JNTUA, Ananthapuramu.",
                        "Worked as BOS Member for the Dept. of Mechanical Engg., JNTUA, Ananthapuramu in the academic year 2020 & 2021.",
                        "Worked as a Committee Member for APECET during 2015-16.",
                        "Senior Life Member: Indian Society for Technical Education (ISTE), Membership No. SLM &ndash; 030 (dt: 20.09.2024).",
                        "Life Member: Indian Society for Technical Education (ISTE), Membership No. 68296 (year: 2010).",
                        "Life Member: Fellow of Institute of Engineers (FIE), Membership No. F-114969-1.",
                        "Life Member: International Association of Engineers (IAENG), Membership Number: 127904.",
                        "At the State Level Committees: Worked as Committee Member, APECET 2016.",
                        "At the University level: Member in BoS, Dept. of Mechanical Engineering, JNTUA, Ananthapuramu, Andhra Pradesh.",
                        "Received &ldquo;ISTE - Best Engineering College Principal Award for 2023&rdquo;, presented through the Sri G. Krishna Kumar Memorial State Award by the ISTE AP Section on 23rd September 2024.",
                        "Received Best Principal Award from JNT University Anantapur, Ananthapuramu, Andhra Pradesh during the &ldquo;University Principal Awards 2023&rdquo; on 13th December 2023.",
                        "&ldquo;Best Educationist Award&rdquo; received from International Institute of Education and Management, New Delhi in the year 2011 for outstanding achievements and remarkable role in the field of education.",
                        "&ldquo;Rashtriya Vidya Gaurav Gold Medal Award&rdquo; received from Indian Solidarity Council, New Delhi in the year 2011."
                    ]
                },
                {
                    "title": "Research Projects",
                    "content": [
                        {
                            "S.No": "1",
                            "Name of the Faculty": "Dr. I. Arun & Dr. C. Yuvaraj",
                            "Title of the Project/Event": "Investigation and characterization of Electrical Discharge Coated (EDC) alloys for mitigation of biological fouling on maritime structures.",
                            "Sanctioning Authority": "DST-SERB",
                            "Sanctioned Amount": "38.37 Lakhs",
                            "Duration of the Project": "3 Years"
                        },
                        {
                            "S.No": "2",
                            "Name of the Faculty": "Dr. C. Yuvaraj",
                            "Title of the Project/Event": "Design and Fabrication of multi-Crop Smashing Combination Thresher",
                            "Sanctioning Authority": "Institute of Engineers, Kolkata",
                            "Sanctioned Amount": "25,500",
                            "Duration of the Project": "1 Year"
                        }
                    ]
                },
                {
                    "title": "Research Guideship",
                    "content": [
                        {
                            "S.No": "1",
                            "Scholar Name": "T. Siva Prasad",
                            "Guide Name": "Dr. C. Yuvaraj",
                            "Co-Guide from JNTUA College of Engineering, Anantapur": "Dr. K. Prahlada Rao Principal, JNTUA College of Engineering, Ananthapuramu",
                            "Date of Admission": "2015-16",
                            "Area of Research": "Composite Materials"
                        }
                    ]
                },
                {
                    "title": "My Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "Analysis and Optimization of Metal Injection Molding Feedstock SS 316L for Rheological Properties",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of The Institution of Engineers (India): Series D, pp.1-8, 2018."
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "Investigation of Mechanical Properties of a Composite Tubular Electrode Based Hard coating on Mild Steel Substrate",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Advanced Research Foundation, Volume 4, Issue 3, March 2017"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "Metal Injection Molding \u2013 A Review",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Manufacturing Technology Today Journal, Vol. 15, Issue No. 12,2017"
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "Structural Analysis and Fabrication of femoral component of Cemented Hip implant through Fused Deposition Modeling.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Engineering Sciences and Research Technology, 72-80, 2016."
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "Application of Taguchi Method for Optimizing the Parameters of Thermal Properties of Al/SiC-Gr Hybrid Composites",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Bonfring International Journal of Advances in Image Processing, Vol. 6, No. 4, 2016."
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "Fabrication of cast aluminium-silicon (Al-Si) and aluminium -Magnesium (Al-Mg) alloys and their properties",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Acta Metallurgica Slovaca, Vol 22, No.4, pp. 212-221, 2016."
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "Design, Analysis, Fabrication and Testing of CFRP with CNF Composite Cylinder for Space Applications",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Composite Materials, Vol.5, No.5, pp.102-128, 2015."
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "Experimental Characterization of Carbon Fibre T700 / Epoxy towpreg for Space Applications",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Engineering Research and Applications, Vol.5, No.12, pp.1-14, 2015."
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "Optimisation Of Welding Process Of Composite Chromium-Carbide Based Tubular Electrode For Hardfacing",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Mechanical and Production Engineering Research and Development, Vol.4, No.1, pp. 39-46, 2014."
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "Effect of Nickel Content on Microstructure of Modified Zinc aluminium Cast Alloys",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Technical Research and Applications, Vol.2, No.4, pp.81-83, 2014."
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "Design and analysis of a single seater race car chassis frame",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Research Aeronautical and Mechanical Engineering, Vol.2, No.8, pp.12-23, 2014."
                        },
                        {
                            "S.No": "12",
                            "Title of the Paper": "Evaluation of Mechanical Properties of Al/SiC-Graphite Hybrid Metal Matrix Composites",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Advanced Trends in Computer Science and Engineering, Vol.2, No.6, pp. 286-289, 2013."
                        },
                        {
                            "S.No": "13",
                            "Title of the Paper": "Microstructural and Mechanical Behaviour of Zinc-Aluminium Cast Alloys",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Mechanical Engineering and Technology (IJMET), Vol.4, No.4, pp. 243 \u2013 248, 2013."
                        },
                        {
                            "S.No": "14",
                            "Title of the Paper": "Characterization of Machinability Behaviour of Al/Al2O3 MMCs",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Advanced Engineering Research and Studies, Vol.1, No.2, pp. 114-117, 2012."
                        },
                        {
                            "S.No": "15",
                            "Title of the Paper": "Neural network for prediction of EDM of Al/SiC-graphite particulate reinforced hybrid composites",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Int J Emerg Technol Adv Eng, Vol.2, No.12, pp. 730-739, 2012."
                        },
                        {
                            "S.No": "16",
                            "Title of the Paper": "Effect of Thermal Fatigue Behaviour on Bending Strength of Al/Al 2 O 3 MMCs.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Applied Engineering Research, Vol.5, No.7, 2010."
                        },
                        {
                            "S.No": "17",
                            "Title of the Paper": "Effect of Drilling Parameters on Drillability Behaviour of Al/Al 2 O 3 MMCs.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Applied Engineering Research, Vol.5, No.7, 2010."
                        },
                        {
                            "S.No": "18",
                            "Title of the Paper": "Study on Transition Behaviour of Al/Al2O3 MMCs",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "World Journal of Engineering, Vol.5, No.4, pp. 543-544, 2008."
                        },
                        {
                            "S.No": "19",
                            "Title of the Paper": "Optimization of machinability parameters of aluminium/alumina metal matrix composites",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Applied Engineering Research, Vol.3, No.9, pp.1197-1204, 2008."
                        },
                        {
                            "S.No": "20",
                            "Title of the Paper": "A study of transition wear behaviour of alumina particle reinforced Al-6061 MMCs",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Reinforced Plastics and Composites, Vol.28, No.23, pp. 2903-2909, 2009."
                        }
                    ]
                },
                {
                    "title": "Conferences & Workshops attended",
                    "content": [
                        "Participated in \u201cAcademia Day-Part of \u201c3Dverve 2019\u201d- An Annual Technical Conference of Dassault Systemes Foundation and Dassault Systemes\u201d at Dassault Systemes, India R&D (Auditorium), Hinjewadi Phase 1, Pune on 21 February 2019.",
                        "One Day workshop on Creating Roadmap for Innovation and Incubation Centres in AP Educational Institutions, organized by ITE&C department on 19-10-2016 at Gateway Hotel in Vijayawada.",
                        "A workshop on \u201cQuality Initiatives in Technical & Higher Educational Institutions (in compliance with NBA & NAAC Accreditation)\u201d organized by Engineering Staff College of India (ESCI), Hyderabad, from 07-09-16 to 9-09-16.",
                        "3rd International Conference in Transformations in Engineering Education (ICTIEE 2016) was organized by IUCEE (Indo-US Collaboration for Engineering Education) and College of Engineering, Pune (COEP) during 08-12 January 2016.",
                        "An Orientation Session on \u201cSiemens Centres of Excellence (COE) Clusters in AP\u201d organized by Andhra Pradesh State Skill Development Corporation at the Sri City Business Centre, Sri City on 27th August 2015.",
                        "A one-day workshop on \u201cAwareness on Various programs for Foreign University Collaborations\u201d was Organized at JNTUA, Ananthapuramu on 16th May 2015.",
                        "A meet in Chennai conducted by Higher Education Forum, South Zone to receive Campus Preparedness Award 2015 on 26th March 2015.",
                        "International conference in Transformations in Engineering Education (ICTIEE 2015). It is a four day International conference, among these first two days were pre-conference workshops conducted by the BMS College of Engineering, Bangalore and collaborating with Indo-US collaboration for Engineering Education (IUCEE) during 5-8 January 2015.",
                        "A workshop on TEQIP-II : Good Governance, Leadership and Management on 14th - 15th October 2014 at Metropolitan Hotel, Near Bangla Sahib Gurudwara Road, New Delhi.",
                        "Represented the college for the workshop on Procurement Practices attended on 22.08.2014, at PSG Institute of Technology, organized by PSG, SPFU-TN and NPIU at Coimbatore.",
                        "A National Conference on \u201cLeadership in Higher Education\u201d held on July 4, 2014 at Engineering staff college of India (ESCI), Hyderabad.",
                        "A one day workshop on \u201cAcademia Industry Management For creating Sustainable Employability\u201d held on 06-04-2014 Organized by GP Birla Institute of Human Excellence, Birla Center, Hyderabad.",
                        "Participated in a Seminar on \u201cInnovative Teaching, Research Learning & Accreditation Practices\u201d (IE-ITR SESSION) organized by ESCI as the constituent part of IE(I) Congress-2013 on 21 December, 2013 at Hotel Leela Palace, Chennai.",
                        "Appointed as the co ordinator of the program by AICTE and received a grant from AICTE to conduct 2 Weeks FDP On Fatigue & Fracture Mechanics In FE Analysis.",
                        "A Two Day Workshop on \u201cRecent Trends In Manufacturing \u201c Under TEQIP-II Organised by the Department of Mechanical Engineering, Chaitanya Bharathi Institute of Technology, Gandipet, Hyderabad on 29-30 July 2013.",
                        "A Two Day Workshop on \u201cProcurement Guidelines & PMSS Training\" under TEQIP-II conducted by NPIU - New Delhi and SPFU Andhra Pradesh at University College of engineering, Osmania University, Hyderabad on 16-17 May 2013.",
                        "A One Day workshop (28 September,2012) on \u201c Metallurgy For Non-Metallurgists\u201d (MNM-2012) organised by Indian Institute of Metals, Hyderabad Chapter on 28th September 2012.",
                        "Appointed as Principal Investigator, for the project \u201cDEVELOPMENT OF HIGH STRENGTH MATERIALS FOR Micro Air Vehicle STRUCTURES \u201c.",
                        "Participated in an interactive session with Dr. U. Chandrasekhar, Director, ESCI & Gp Capt B.S. Phillora, Head Management , Technology & Information Divisions, Engineering Staff College of India at Hyderabad on 14th December 2013."
                    ]
                },
                {
                    "title": "List of Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Name of the Applicant": "Dr.C.Yuvaraj, Dr. G. Hemanth, Mr.A.Vasudeva Reddy, Dr.H.Mohit",
                            "Name of the Inventors": "Dr.C.Yuvaraj, Dr. G. Hemanth, Mr.A.Vasudeva Reddy, Dr.H.Mohit",
                            "Department": "ME",
                            "Title of the Patent": "Removal Apparatus For Cylindrical Polymer Matrix Composite (Pmc) Parts Fabricated By Compression Cum Extruder Method",
                            "App. No./Ref No.": "201941027725",
                            "Date of Filing": "10/7/2019",
                            "Date of Publishing": "2/8/2019",
                            "Status": "Filed & Published",
                            "MITS Affiliated": "yes"
                        },
                        {
                            "S.No": "2",
                            "Name of the Applicant": "Dr.C.Yuvaraj, Dr.G. Hemanth Kumar, Mr.S.Mohan Raj, Mr.H.Mohit",
                            "Name of the Inventors": "Dr.C.Yuvaraj, Dr.G. Hemanth Kumar, Mr.S.Mohan Raj, Mr.H.Mohit",
                            "Department": "ME",
                            "Title of the Patent": "A Novel Hole Making Technique During The Thermoforming On Plastic Sheets",
                            "App. No./Ref No.": "2019410117448",
                            "Date of Filing": "02/05/2019",
                            "Date of Publishing": "24/05/2019",
                            "Status": "Filed & Published",
                            "MITS Affiliated": "yes"
                        },
                        {
                            "S.No": "3",
                            "Name of the Applicant": "Dr. C. Yuvaraj, Dr. G. Hemanth Kumar, Mr. Harinandan Kumar, Dr. P. Sivaiah, Mr. Prabhu Jayaraman",
                            "Name of the Inventors": "Dr. C. Yuvaraj, Dr. G. Hemanth Kumar, Mr. Harinandan Kumar, Dr. P. Sivaiah, Mr. Prabhu Jayaraman",
                            "Department": "ME",
                            "Title of the Patent": "New Invention of Low Cost Creep Testing Machine with Variable Temperature and Environmental and Environmental Conditions for Composite Material(pmmc)",
                            "App. No./Ref No.": "201741046532",
                            "Date of Filing": "26/12/2017",
                            "Date of Publishing": "5/1/2018",
                            "Status": "filed and published",
                            "MITS Affiliated": "yes"
                        }
                    ]
                }
            ]
    },

    "Dr. I. Arun": {
        "name": "Dr. I. Arun",
        "designation": "Professor",
        "email": "draruni@mits.ac.in",
        "officeAddress": "East Block",
        "image": "https://mits.ac.in/public/uploads/faculty/DR I ARUN.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Tribology",
                            "Branch": "Production Engineering",
                            "College Name/University": "National Institute of Technology, Tiruchirappalli",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Computer Aided Design",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Government College of Engineering / Anna University",
                            "Year of Passing": "2009"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Mechanical Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Sona College of Technology / Anna University",
                            "Year of Passing": "2006"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Coating Tribology/ Space Materials"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=56199283000",
                        "Vidwan: https://mits.irins.org/profile/273096",
                        "Google scholar: https://scholar.google.com/citations?user=9WlF8UAAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 7"
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
                            "Details of Research Publication": "Hot Corrosion Behaviour of Electrical Discharge Coated Duplex Stainless Steel Under Sulfur Environment",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Electrical discharge shape memory alloying of Ti-6Al-4V: Mechanisms and Mechanical properties",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Micro-Structure and Self-Lubricant Properties of Powder Mixed Electrical Discharge Metal Matrix Composite Coating",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Electric Discharge Coating process variation and its wear Properties",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "A comparison on microstructure and mechanical properties of electric discharge metal matrix nickel and silica composite coating on duplex stainless steel",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Influence of Silica on microstructural modification of electrical discharge composite coating and its wear performance",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Electrical discharge metal matrix composite coating on duplex stainless steel and its wear behaviour under different environmental conditions",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "4",
                            "Details of Research Publication": "Effect of feed rate on difficult to cut metals on surface roughness and tool wear using surface treated and untreated tools",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Synthesis of electrical discharge metal matrix composite coating through compacted semi\u2011sintered electrode and its tribological studies",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-16",
                            "Author Position": "1",
                            "Details of Research Publication": "Synthesis of electric discharge alloyed nickel&ndash;tungsten coating on tool steel and its tribological studies",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-16",
                            "Author Position": "1",
                            "Details of Research Publication": "Modelling and analysis of ElectricalDischarge Alloying through Taguchi technique",
                            "Indexing": "SCI",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014-15",
                            "Author Position": "1",
                            "Details of Research Publication": "Development of carbide intermetallic layer by electric discharge alloying on AISI-D2 tool steel and its wear resistance",
                            "Indexing": "SCI",
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
                            "Academic Year": "2022-23",
                            "Project /Event": "Event",
                            "Role": "Principal Investigator",
                            "Title of the Project/Event": "Defence Research and Innovation Summit",
                            "Amount in Rs. /-": "1,88,000",
                            "Funding Agency": "Science and Engineering Research Board (SERB)"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2016-17",
                            "Project /Event": "Project",
                            "Role": "Principal Investigator",
                            "Title of the Project/Event": "Investigation and characterization of Electrical Discharge Coated (EDC) alloys for mitigation of biological fouling on maritime structures",
                            "Amount in Rs. /-": "38,39,000",
                            "Funding Agency": "Science and Engineering Research Board (SERB)"
                        }
                    ]
                },
                {
                    "title": "Consultancy",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-2024",
                            "Name of the Consulting Firm": "RGM College Of Engineering and Technology",
                            "Title of the Project/Event": "Pin on Disc Tribo-meter",
                            "Amount in Rs. /-": "4,500"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-2024",
                            "Name of the Consulting Firm": "RGM College Of Engineering and Technology",
                            "Title of the Project/Event": "Pin on Disc Tribo-meter",
                            "Amount in Rs. /-": "4,500"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2022-2023",
                            "Name of the Consulting Firm": "RGM College Of Engineering and Technology",
                            "Title of the Project/Event": "Pin on Disc Tribo-meter",
                            "Amount in Rs. /-": "2,500"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2022-2023",
                            "Name of the Consulting Firm": "Department of Mechanical Engineering, SVCET, Chittoor",
                            "Title of the Project/Event": "Surface Roughness & Optical Profilometer",
                            "Amount in Rs. /-": "3,000"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "MITS",
                            "Academic Year": "2022-2023",
                            "Name of the Consulting Firm": "Department of Mechanical Engineering, JNTUK",
                            "Title of the Project/Event": "Electrical Discharge Machine",
                            "Amount in Rs. /-": "2,000"
                        },
                        {
                            "S.No": "6",
                            "Affiliation": "MITS",
                            "Academic Year": "2022-2023",
                            "Name of the Consulting Firm": "Department of Mechanical Engineering, JNTUK",
                            "Title of the Project/Event": "Pin on Disc Tribo-meter",
                            "Amount in Rs. /-": "12,000"
                        }
                    ]
                }
            ]
    },

    "Dr. V. Vamsidhar": {
        "name": "Dr. V. Vamsidhar",
        "email": "vamsi6@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/vamsi.JPG",
        "designation": "Assoc. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Thermal Engineering",
                            "Group": "Mechanical Engineering",
                            "College Name/University": "J.N.T.U.A, Anantapuram",
                            "Year of Passing": "2019"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Quality, Reliability, OR",
                            "Group": "Mechanical Engineering",
                            "College Name/University": "Indian Statistical Institute, Kolkatta",
                            "Year of Passing": "1992"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Mechanical Engineering",
                            "Group": "Mechanical Engineering",
                            "College Name/University": "S.V.U. College of Engineering, Tirupathi",
                            "Year of Passing": "1990"
                        }
                    ]
                },
                {
                    "title": "Conferences & Workshops attended",
                    "content": [
                        "A Three-day International Conference on Transformation in Engineering Education (ICTIEE 2017) organized by IUCEE at Vardhaman College of Engineering, Hyderabad during 06.01.17 to 08.01.17.",
                        "A Two Day International Conference on &ldquo;Conversations for Advancing&rdquo; &quot;Digital India&quot; and &quot;Make in India&rdquo; - &ldquo;Digital Bharat 2015&rdquo; organized by FICCI at FICCI, Federation House, New Delhi from 14th May to 15th May 2015",
                        "International conference in Transformations in Engineering Education (ICTIEE 2015). It is a four day International conference, among these first two days were pre-conference workshops conducted by the BMS College of Engineering, Bangalore and collaborating with Indo-US collaboration for Engineering Education (IUCEE) during 5-8 January 2015.",
                        "A workshop on TEQIP-II : Good Governance, Leadership and Management on 14th - 15th October 2014 at Metropolitan Hotel, Near Bangla Sahib Gurudwara Road, New Delhi.",
                        "The Confederation of Indian Industry (CII) organized the tenth edition of its &ldquo;India Innovation Summit&rdquo;, on 8th & 9th August 2014 at Hotel ITC Royal Gardenia in Bangalore.",
                        "&quot;QUALITY EDUCATION IN PRIVATE ENGINEERING COLLEGES&quot; on 8 - July, 2014 at JNTU Engineering College Campus.",
                        "Participated in the Second World Summit on Accreditation &ndash; WOSA-2014 on the theme &quot;International Recognition of Educational Qualifications&quot; organized by National Board of Accreditation during 8-10 March 2014 at Hotel Ashok, New Delhi.",
                        "A five day training program at Chandigarh from 16-12-13 to 20-12-13. The training is called Pedagogical Training (Module-I) and was conducted by Department of Education and Educational Management from National Institute of Technical Teachers&rsquo; Training and Research (NITTTR), Chandigarh.",
                        "&ldquo;CII&rsquo;s higher education conclave&rdquo; organized by The Confederation of Indian Industry (CII) held at Hotel Le Meridien, Coimbatore on Nov. 29, 30, 2013. The theme of the conclave is Transformational Change in Higher Education: Global Excellence through Governance, Research and Innovation.",
                        "A One Day National Workshop on &ldquo;Advanced Trends in IC Engines and Combustion&rdquo; hosted by Department of Mechanical Engineering, JNTUH College of Engineering, Hyderabad on 28th February 2013 to mark the retirement of Prof. K. Rajagopal, Former Vice- Chancellor of JNTU.",
                        "The meeting on National Knowledge Functional Hub organized by FICCI on 23rd May, 2013 at GW Precision Tools India Pvt. Ltd. Bangalore."
                    ]
                }
            ]
    },

    "Dr. S. Baskaran": {
        "name": "Dr. S. Baskaran",
        "email": "drbaskarans@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/DR S BASKARAN.JPG",
        "designation": "Assoc. Professor &amp; Head",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Tribology",
                            "Branch": "Production Engineering",
                            "College Name/University": "National Institute of Technology, Trichy",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Manufacturing Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Jayaram College of Engineering and Technology, Trichy",
                            "Year of Passing": "2007"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Mechanical Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Jayaram College of Engineering and Technology, Trichy",
                            "Year of Passing": "2004"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Sustainable Machining, Tribology, Surface Engineering, Additive Manufacturing, Machine Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=56630534200",
                        "Vidwan: https://mits.irins.org/profile/273109",
                        "Google scholar: https://scholar.google.co.in/citations?user=jHV9xVwAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 12"
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
                            "Details of Research Publication": "Optimization and prediction of tribological performance in HNT/LLDPE composites for rotational molding using machine learning and Taguchi &ndash; TOPSIS. 2025, Vol. 0(0) 1 &ndash; 29 DOI: 10.1177/08927057251411898",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Experimental studies on dilution, microstructural, mechanical and wear characteristics of Inconel 718 deposited over stainless steel 304 employing cold metal transfer process. Materials Letters 381 (2025) 137795, https://doi.org/10.1016/j.matlet.2024.137795 .",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Hot Corrosion Behavior of Electrical Discharge\u2011Coated Duplex Stainless Steel Under Sulfur Environment. Trans Indian Inst Met, 2024, Aug 8,2024, 1-8, https://doi.org/10.1007/s12666-024-03432-7 .",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "3",
                            "Details of Research Publication": "Towards sustainability assessment, energy consumption, and carbon emissions in cryogenic drilling of Alloy h ttps://doi.org/10.1007/s00170-024-13144-3 , 05 February 2024, Volume 131, pages 1151&ndash;1165.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "5",
                            "Details of Research Publication": "Identification of tool wear and surface morphology measurements in sustainable milling of Al 6082 hybrid metal matrix composite.DOI: 10.1016/j.jmrt.2023.11.109.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "3",
                            "Details of Research Publication": "A mathematical approach of evaluating sustainability indicators in milling of aluminium hybrid composite by different eco-friendly cooling strategies. https://doi.org/10.1016/j.susmat.2023.e00605",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "3",
                            "Details of Research Publication": "Investigations on effectiveness of transfer layer on specific wear rate and coefficient of friction during dry sliding of hybrid polymer matrix composites. https://doi.org/10.1002/pc.26371",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "5",
                            "Details of Research Publication": "Influence of Optimization Techniques on Wire Electrical Discharge Machining of Ti&ndash;6Al&ndash;2Sn&ndash;4Zr&ndash;2Mo Alloy using Modeling Approach. https://doi.org/10.1007/s10904-021-01953-y",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "Development of multi functioning organic waste shredding machine for natural compost. Lecture Notes in Mechanical Engineering. https://link.springer.com/chapter/10.1007/978-981-15-4739-3_90",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "7",
                            "Details of Research Publication": "Investigation on slurry pot erosion wear behaviour of AA5083 aluminium alloy. https://link.springer.com/chapter/10.1007/978-981-15-4739-3_47",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "4",
                            "Details of Research Publication": "Wear behaviour of whisker-reinforced ceramic tools in the turning of Inconel 718 assisted by an atomized spray of solid lubricants. https://www.sciencedirect.com/science/article/abs/pii/S0301679X20300785",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "2",
                            "Details of Research Publication": "A review on the suitability of wire arc additive manufacturing (WAAM) for stainless steel 316. https://aip.scitation.org/doi/pdf/10.1063/5.0004148",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "2",
                            "Details of Research Publication": "Corrosion behavior of detonation gun sprayed cermet coatings on AA5083. https://www.tandfonline.com/doi/abs/10.1080/02670844.2020.1807096",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "4",
                            "Details of Research Publication": "Use of Atomized Spray Cutting Fluid Technique for the Turning of a Nickel Base Superalloy. https://www.tandfonline.com/doi/abs/10.1080/10426914.2020.1832687",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "3",
                            "Details of Research Publication": "Experimental investigation of tool wear in cryogenic treated insert during end milling of hard Ti alloy. https://link.springer.com/article/10.1007/s40430-019-1612-3",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "3",
                            "Details of Research Publication": "Investigation of cryogenically treated PVD TiAlN/NbN coated carbide inserts in end milling of hard Ti alloy. https://www.astm.org/DIGITAL_LIBRARY/JOURNALS/ TESTEVAL/PAGES/JTE20180728.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "3",
                            "Details of Research Publication": "Statistical evaluation and performance analysis of electrical discharge machining (EDM) characteristics of hard Ti-6Al-2Sn-4Zr-2Mo alloy. https://iopscience.iop.org/article/10.1088/2053-1591/ab06da/meta",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "1",
                            "Details of Research Publication": "Statistical analysis of Co-efficient of friction during dry sliding wear behaviour of TiC reinforced Aluminium Metal Matrix Composites. https://www.sciencedirect.com/science/article/pii/S2214785318305856",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014-15",
                            "Author Position": "1",
                            "Details of Research Publication": "Investigations on dry sliding wear behavior of in situ casted AA7075&ndash;TiC metal matrix composites by using Taguchi technique. https://www.sciencedirect.com/science/article/abs/pii/S0261306914002672",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013-14",
                            "Author Position": "3",
                            "Details of Research Publication": "Multi-objective optimization of upsetting parameters of Al&ndash;TiC metal matrix composites: A grey Taguchi approach. https://journals.sagepub.com/doi/abs/10.1177/0954405413519434",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013-14",
                            "Author Position": "1",
                            "Details of Research Publication": "Taguchi Grey Relational Analysis of Dry Sliding Wear Behaviour of Annealed AA7075-TiC metal matrix composites. https://www.scientific.net/AMM.541-542.258",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013-14",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of Heat Treatment on Wear Behavior of Hot Extruded AA7075 - 4%TiC in-situ Metal Matrix Composite. https://www.scientific.net/AMM.541-542.263",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012-13",
                            "Author Position": "2",
                            "Details of Research Publication": "Synthesis and Forming Behavior of In- Situ AA 7075 - TiC Composites. https://www.scientific.net/AMR.651.251",
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
                            "Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Project /Event": "Project",
                            "Role": "Principal Investigator",
                            "Title of the Project/Event": "Investigation and identification of machinability challenges of Hadfield steel through novel sustainable machining approach",
                            "Amount in Rs. /-": "18,93,922",
                            "Funding Agency": "AICTE-RPS"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Project /Event": "Project",
                            "Role": "Principal Investigator",
                            "Title of the Project/Event": "Investigations on wear resistance of high strength aluminium alloy under cryogenic treatment",
                            "Amount in Rs. /-": "50,000",
                            "Funding Agency": "Institute Seed Grant"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Project /Event": "Project",
                            "Role": "Principal Investigator",
                            "Title of the Project/Event": "Design and Fabrication of Multi-Function Organic Waste Shredder Machine",
                            "Amount in Rs. /-": "12,000",
                            "Funding Agency": "Institute Seed Grant"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Project /Event": "FDP",
                            "Role": "FDP Coordinator",
                            "Title of the Project/Event": "Sustainable Machining for Tomorrow: Machine Learning Based Approach",
                            "Amount in Rs. /-": "3,50,000",
                            "Funding Agency": "AICTE ATAL"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "MITS",
                            "Academic Year": "",
                            "Project /Event": "FDP",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Contemporary progressions, Challenges and Issues in 3D Metal Printing Technology",
                            "Amount in Rs. /-": "1,00,000",
                            "Funding Agency": "JNTU Anantapur"
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
                            "Application ID": "427495-001",
                            "Title of the Patent": "Cuboid Type Low-Cost FDM 3D Printer PV systems",
                            "Status": "Under Examination"
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
                            "Name of the Consulting Firm": "Academic Institutions",
                            "Title of the Project/Event": "Machining",
                            "Amount in Rs. /-": "20,000"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Name of the Consulting Firm": "Academic Institutions",
                            "Title of the Project/Event": "Wear test",
                            "Amount in Rs. /-": "3,150"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Name of the Consulting Firm": "Academic Institutions",
                            "Title of the Project/Event": "Mechanical Testing",
                            "Amount in Rs. /-": "4,000"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Faculty Coordinator - AICTE IDEA Lab",
                        "NPTEL Discipline Star (Computer Science and Engineering Jan-Apr 2025)",
                        "NPTEL Motivated Learners (July- Dec 2025)",
                        "NPTEL Believers (July- Dec 2025)",
                        "Outstanding Reviewer Award in 2024 for the Measurement Science and Technology",
                        "NPTEL Domain Certification in Data Science July 2024",
                        "Outstanding Reviewer Award in 2023 for the Journal of Materials Engineering and Performance",
                        "Outstanding Reviewer Award in 2023 for the Surface Topography: Metrology and Properties",
                        "Achieved IOP trusted reviewer status (ID 81719243).",
                        "Recognized as NPTEL Motivated Learner Jan-Apr 2023",
                        "Convener for International Conference on Materials, Energy and Mechanical Engineering 2021 (ICME2-2021), 17th & 18th December 2021, MITS, Madanapalle.",
                        "Convener of 5-Day Workshop on MATLAB & Applications, 8th to 12th November 2021, MITS, Madanapalle.",
                        "Received &ldquo;Best Research Award&rdquo; in International Research Awards on New Science Inventions, NESIN 2020 Awards by ScienceFather",
                        "Bentham Science Ambassador",
                        "Student project titled &ldquo;Hydrogen Powered Engine&rdquo; was selected for Grand Finale &ldquo;KPIT SPARKLE 2018&rdquo; out of 12,000 registrations held on 17-18th Feb 2018 at Pimpri Chinchward College of Engineering, Pune",
                        "Convener of National Level Students Technical Symposium &ldquo;MECHONANCE 2017&rdquo; held on 18th Apr 2017, MITS, Madanapalle.",
                        "Research paper received &ldquo;Excellent oral presentation award&rdquo; in International Conference (ICMMA-14) hosted by the International Association of Computer Science and Information Technology (IACSIT) during 18-19 February 2014 at Singapore 2014.",
                        "Received &ldquo;Half-Time Research Assistantship (HTRA)&rdquo; funded by MHRD for pursuing Ph.D."
                    ]
                },
                {
                    "title": "Conferences & Workshops attended",
                    "content": [
                        "Attended Industrial Training in \u201cAcoustic Enclosure Modules\u201d at ACE Engineering Solutions Pvt. Ltd, Pune from 28.07.2025 to 02.08.2025.",
                        "Participated in AICTE IDEA Lab Basic Faculty Development Program (FDP) was organized by AICTE IDEA LAB VTU Muddenahalli in association with AICTE at VTU Campus, Muddenahalli, Karnataka, INDIA from 29th April to 03rd May 2025.",
                        "Participated in \"AICTE IDEA Lab FEST 2025\" held at AICTE Headquarters, New Delhi on 07th March 2025.",
                        "Participated in Two Days Researchers Conclave on \u201cAdditive Manufacturing\u201d on 18th and 19th September 2024, at Central Manufacturing Technology Institute (CMTI), Bengaluru.",
                        "One Week Workshop on Advanced Materials & Manufacturing Methods Conducted by Department of MME, NIT, Trichy, Tamilnadu on 6 - 10 June 2016."
                    ]
                }
            ]
    },

    "Dr. K. V. Nagesha": {
        "name": "Dr. K. V. Nagesha",
        "designation": "Assoc. Professor",
        "email": "drnageshakv@mits.ac.in",
        "officeAddress": "East Block",
        "image": "https://mits.ac.in/public/uploads/faculty/Nagesha.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Drilling Technology",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "National Institute of Technology, Karnataka",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Computer Integrated Manufacturing",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Visvesvaraya Technological University, Belagum",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Mechanical Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Visvesvaraya Technological University, Belagum",
                            "Year of Passing": "2008"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Manufacturing"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=57203485462",
                        "Vidwan: https://mits.irins.org/profile/274340",
                        "Google scholar: https://scholar.google.co.in/citations?user=R91i5TIAAAAJ",
                        "h-Index (As per Scopus Data) : 4"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Analysis on Implementation of Artificial Intelligence in the sports Activity",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Parametric study on four station ball mill for synthesis of ultrafine powders",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Influence of rock properties on emission rate of Particulates Matter (Pm) during drilling operation in surface mines",
                            "Indexing": "ESCI/ Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "5",
                            "Details of Research Publication": "Determination of strength parameters of glass fibers reinforced composites for engineering applications",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Development of statistical models to predict emission rate and concentration of particulate matters (PM) for drilling operation in opencast mines",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "3",
                            "Details of Research Publication": "Evaluation of Multilayer Thin Film Coatings for Solar Thermal Applications",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "Development of empirical model to predict particulate matter",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Simulation studies on multilayer coatings for solar absorptance",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
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
                            "Academic Year": "2023",
                            "Application ID": "377800-001",
                            "Title of the Patent": "IOT Based devise for controlling electrical appliance",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2018",
                            "Application ID": "201841017716",
                            "Title of the Patent": "Utilization of Waste Poly Ethylene Bags and Fly Ash for Engineering Application",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2018",
                            "Application ID": "201841005118",
                            "Title of the Patent": "Development of New Thermal Absorber Coatings for Enhanced Solar Application",
                            "Status": "Granted"
                        }
                    ]
                },
                {
                    "title": "My Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "Prediction and Analysis of Dust Dispersion from Drilling Operation in Open Cast Coal Mine.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Earth and Planetary Science. Vol-11, pp-303-311. (Published in Science Direct)."
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "Prediction of Dust Dispersion by Drilling Operation Using Artificial Neural Networks.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Prevention and Control of Industrial Pollution, Vol-1, pp- 1-13."
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "Prediction of dust dispersion during drilling operation in open cast coal mines: A multi regression model.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International journal of Environmental Sciences. Vol-6, pp-591-606."
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "A review on mechanical alloying.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Engineering Research and Applications. Vol. 3, 921-924."
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "Comparative study of sintered spur gear for both standard and profile corrected tooth.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Research in Engineering and Technology. Vol. 1, 2347-4599."
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "Development of dust prediction model for drilling operation in coal mines for India Geo-mining conditions.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "NexGen Technologies for Mining and Fuel Industries (Volume I and II)"
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "Simulation Studies on Multilayer Coatings for Solar Absorptance",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Renewable Energy Research & Education - (RE) 2-2018, American Institute of Physics (SCOPUS Indexed)."
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "Development of empirical model to predict particulate matter",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Renewable Energy Research & Education - (RE)2-2018, American Institute of Physics (SCOPUS Indexed)."
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "Development of statistical models to predict emission rate and concentration of particulate matters (PM) for drilling operation in opencast mines",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Air Quality, Atmosphere & Health, V- 12, Issue-9, pp 1073\u20131079"
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "Determination of Strength Parameters of Glass Fibers Reinforced Composites for Engineering Applications",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Silicon, pp-1-11"
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "Evaluation of Mechanical Properties of Polymer Composites Profiles for Marine Applications",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Grenze International Journal of Engineering and Technology, V-4,pp-343-347"
                        }
                    ]
                },
                {
                    "title": "List of Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Name of the Applicant": "Dr. K. V. Nagesha, Mr. Harinandan kumar, Mr. Muralidhar Singh, M. Hemanth Kumar, Dr. P. Sivaiah, T. Vishnu Vardhan",
                            "Name of the Inventors": "Dr. K. V. Nagesha, Mr. Harinandan kumar, Mr. Muralidhar Singh, M. Hemanth Kumar, Dr. P. Sivaiah, T. Vishnu Vardhan",
                            "Department": "Civil Engineering",
                            "Title of the Patent": "Utilization of Waste Poly Ethylene Bags and Fly Ash for Engineering Application",
                            "App. No./Ref No.": "201841017716",
                            "Date of Filing": "11-05-2018",
                            "Date of Publishing": "25-05-2018",
                            "Status": "filed and published",
                            "MITS Affiliated": "yes"
                        },
                        {
                            "S.No": "2",
                            "Name of the Applicant": "Dr. K. V. Nagesha, Dr. Muralidhar Singh. M, Mr. Harinandan Kumar, Dr. G. Hemanth Kumar, Mr. Vijaya. G.",
                            "Name of the Inventors": "Dr. K. V. Nagesha, Dr. Muralidhar Singh. M, Mr. Harinandan Kumar, Dr. G. Hemanth Kumar, Mr. Vijaya. G.",
                            "Department": "Electrical and Electronics Engineering",
                            "Title of the Patent": "Development of New Thermal Absorber Coatings for Enhanced Solar Application",
                            "App. No./Ref No.": "201841005118",
                            "Date of Filing": "12-02-2018",
                            "Date of Publishing": "16-02-2018",
                            "Status": "filed and published",
                            "MITS Affiliated": "yes"
                        }
                    ]
                },
                {
                    "title": "Book Chapter",
                    "content": "Garimella Raghu Chandra, K.V. Nagesha, and Vedala Rama Sastry (2018). \u201cImage Processing based Assessment of Blast Performance in Opencast Mines \u2013 Case Studies\u201d, Book Chapter, McGraw-Hill Education Eighth International Conference on Advances in Computer Engineering, McGraw-Hill Education."
                },
                {
                    "title": "Paper Presentations",
                    "content": [
                        "Presented a paper in International Conference on \u201cParametric study on ball mill for synthesis of Ulatrafine powders\u201d in NITK, Surathkal.",
                        "Presented a paper in National Conference on \u201cPlanetary ball mill for synthesis of Ultrafine Powders. AIET, Moodbidri."
                    ]
                },
                {
                    "title": "Industrial Visits, Conferences & Workshops attended",
                    "content": [
                        "Advanced Forming Technologist, at RVCE, Bangalore",
                        "Recent Trends in Monitoring, Control and Abatement of Air Pollution, at NITK, Surathkal.",
                        "Faculty Development Programme in Teaching Pedagogy, Alva\u2019s Institute of Engineering & Technology, Moodbidri, 24th and 25th January 2014.",
                        "Faculty Development Programme in Teaching Pedagogy, Alva\u2019s Institute of Engineering & Technology, Moodbidri, 23rd and 24th January 2013.",
                        "An industrial visit to Rayalaseema Thermal Power Project on 3rd November 2018.",
                        "Industrial Visit to Central Manufacturing Technology Institute (CMTI), Bangalore 2018.",
                        "Industrial Visit to Satish Dhawan Space Centre (SDSC) SHAR, Sriharikota, Andhra Pradesh."
                    ]
                }
            ]
    },

    "Dr. P. Sivaiah": {
        "name": "Dr. P. Sivaiah",
        "email": "sivaiahp@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. P. Sivaiah.png",
        "designation": "Assoc. Professor &amp; Associate Dean-R&amp;D",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Mechanical Engineering",
                            "Group": "Mechanical Engineering",
                            "College Name/University": "National Institute of Technology, Karnataka",
                            "Year of Passing": "2017"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Production Engineering",
                            "Group": "Mechanical Engineering",
                            "College Name/University": "S. V. University, Tirupathi",
                            "Year of Passing": "2011"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Mechanical Engineering",
                            "Group": "Mechanical Engineering",
                            "College Name/University": "Annamacharya Institute of Technology Rajampet (AITS), JNTUH",
                            "Year of Passing": "2008"
                        }
                    ]
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "Textured tools machinability assessment while turning of H13 material under various cutting environments",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials and Manufacturing Processes, (2025), pp.1-10. (SCI)"
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "MQL turning processing of EN24 alloy steel material with novel textured tools.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials and Manufacturing Processes, (2025), pp.1-12. (SCI)"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "Processing of AISI304 material with novel textured tools under sustainable manufacturing practice.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials and Manufacturing Processes, (2025), pp.1-10. (SCI)"
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "Performance evaluation of developed new textured tools during turning of AISI 321 material.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials and Manufacturing Processes (2024), 39(5), pp.688-699. (SCI, I.F: 4.8)"
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "Artificial Intelligence Model for Machinability Investigations on Drilling of AA6061 with Micro Textured Tool for Automobile Applications (No. 2023-28-0082).",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "SAE Technical Paper (2024). (Scopus)"
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "Comparative analysis and experimental exploration of the milling process in the machining of Inconel 825 material under MQL.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials and Manufacturing Processes (2024), pp.1-11. (SCI, I.F: 4.8)"
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "Simulation of metal ceramic single layer coatings for solar energy applications.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Science for Energy Technologies (2023), 7, pp.85-90. (Scopus)"
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "Investigation on turning process performance during machining of 15-5PH stainless steel material with eco-friendly machining technique.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Today: Proceedings (2023), (Scopus) IF:2.3"
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "Selection of best WEDM process parameters using grey relational analysis method.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Today: Proceedings (2023) (Scopus) IF:2.3"
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "Sustainable manufacturing strategies in machining.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Sustainable Manufacturing Processes, Academic press, Elsevier (2023), Pages 113-154 (Scopus) ISBN: 978-0-323-99990-8 978-0-323-99990-8"
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "Neural Network Model for Machinability Investigations on CNC Turning of AA5052 for Marine Applications with MQL (No. 2022-28-0515).",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "SAE Technical Paper (2023). (Scopus)"
                        },
                        {
                            "S.No": "12",
                            "Title of the Paper": "Performance improvement of turning operation during processing of AISI 304 with novel textured tools under minimum quantity lubrication using hybrid optimization technique.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials and Manufacturing Processes,(2022), pp.1-8. (SCI, I.F: 3.046)"
                        },
                        {
                            "S.No": "13",
                            "Title of the Paper": "Processing of 17-4 PH steel in turning operation with hybrid textured tools.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials and Manufacturing Processes,(2022), 37(3), pp.241-250. (SCI, I.F: 3.046)"
                        },
                        {
                            "S.No": "14",
                            "Title of the Paper": "Effect of single and hybrid pattern textured tools on turning process performance.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials and Manufacturing Processes, (2022), 37(3), pp.251-259. (SCI, I.F: 3.046)"
                        },
                        {
                            "S.No": "15",
                            "Title of the Paper": "Alumina Thin film Coatings at Optimized Conditions using RF Magnetron Sputtering Process.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Thin Film Science and Technology, (2021), 10(1), pp.13-20. (Scopus)"
                        },
                        {
                            "S.No": "16",
                            "Title of the Paper": "Characterization of Aluminium and Alumina Thin Films Coatings using different Deposition Methods for Enhancement of Optical Properties.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Materials Engineering Innovation, (2021), 10(1), pp.13-20. (Scopus)"
                        },
                        {
                            "S.No": "17",
                            "Title of the Paper": "Identifying the effectiveness of manner of cryogenic coolant supply in different cryogenic cooling techniques in turning process-A review",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Machining Science and Technology, (2020), 24(6), pp.948-999."
                        },
                        {
                            "S.No": "18",
                            "Title of the Paper": "A comparative study on different textured and untextured tools performance in turning process.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials and Manufacturing Processes, (2020), pp.1-10."
                        },
                        {
                            "S.No": "19",
                            "Title of the Paper": "Machinability evaluation during machining of AISI 52100 steel with textured tools under Minimum Quantity Lubrication- A comparative study.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials and Manufacturing Processes, (2020), 35(15), pp.1761-1768."
                        },
                        {
                            "S.No": "20",
                            "Title of the Paper": "Investigation on turning process performance using hybrid-textured tools under dry and conventional cooling environment.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials and Manufacturing Processes Materials and Manufacturing Processes, (2020), 35(16), pp.1852-1859."
                        },
                        {
                            "S.No": "21",
                            "Title of the Paper": "Effect of novel hybrid texture tool on turning process performance in MQL machining of Inconel 718 superalloy",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials and Manufacturing Processes, (2020), 35(1), pp.61-71."
                        },
                        {
                            "S.No": "22",
                            "Title of the Paper": "Multi Objective Optimization of Sustainable Turning Process Using Topsis Method",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Emerging Materials Research, (2019), 8(4), pp.686-695."
                        },
                        {
                            "S.No": "23",
                            "Title of the Paper": "Evaluation of hybrid textured tool performance under minimum quantity lubrication while turning of AISI 304 steel",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Brazilian Society of Mechanical Sciences and Engineering, (2019), 41(12), p.571-581"
                        },
                        {
                            "S.No": "24",
                            "Title of the Paper": "Experimental investigation and modelling of MQL assisted turning process during machining of 15-5 PH stainless steel using response surface methodology.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "SN Applied Sciences, (2019), 1(8), p.913"
                        },
                        {
                            "S.No": "25",
                            "Title of the Paper": "Determination of Strength Parameters of Glass Fibers Reinforced Composites for Engineering Applications.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Silicon, (2019), 12(1), pp.1-11"
                        },
                        {
                            "S.No": "26",
                            "Title of the Paper": "Evaluation of Multilayer Thin Film Coatings for Solar Thermal Applications.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Arabian Journal for Science and Engineering, (2019), 44(9), pp.7789-7797"
                        },
                        {
                            "S.No": "27",
                            "Title of the Paper": "Performance improvement of cryogenic turning process during machining of 17-4 PH stainless steel using multi objective optimization techniques.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Measurement, (2019), 136, pp.326-336."
                        },
                        {
                            "S.No": "28",
                            "Title of the Paper": "Modeling and optimization of sustainable manufacturing process in machining of 17-4 PH stainless steel",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Measurement, (2019), 134, pp.142-152."
                        },
                        {
                            "S.No": "29",
                            "Title of the Paper": "Effect of Surface Texture Tools and Minimum Quantity Lubrication (MQL) on tool Wear and Surface Roughness in CNC Turning of AISI 52100 Steel.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of The Institution of Engineers (India): Series C, (2019), 101(1), pp.85-95"
                        },
                        {
                            "S.No": "30",
                            "Title of the Paper": "Effect of cryogenic coolant on turning performance: a comparative study.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "SN Applied Sciences, (2019), 1(1), p.67."
                        },
                        {
                            "S.No": "31",
                            "Title of the Paper": "Optimization of Environmental Friendly Turning Process using Taguchi Integrated Grey Relational Analysis during Machining of 17-4 PH Stainless Steel",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "i-Manager's Journal on Mechanical Engineering, (2018), 8(4), p.8."
                        },
                        {
                            "S.No": "32",
                            "Title of the Paper": "Multi performance characteristics optimization in cryogenic turning of 17-4 PH stainless steel using Taguchi coupled grey relational analysis",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Advances in Materials and Processing Technologies, (2018), 4(3), pp.431-447."
                        },
                        {
                            "S.No": "33",
                            "Title of the Paper": "The Effectiveness of a Novel Cryogenic Cooling Approach on Turning Performance Characteristics During Machining of 17-4 PH Stainless Steel Material",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Silicon, (2018), 11(1), pp.25-38"
                        },
                        {
                            "S.No": "34",
                            "Title of the Paper": "Analysis and Modeling of Cryogenic Turning Operation Using Response Surface Methodology",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Silicon, (2018), 10(6), pp.2751-2768."
                        },
                        {
                            "S.No": "35",
                            "Title of the Paper": "Effect of cryogenic coolant on turning performance characteristics during machining of 17-4 PH stainless steel: A comparison with MQL, wet, dry machining",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "CIRP Journal of Manufacturing Science and Technology, (2018), 21, pp.86-96."
                        },
                        {
                            "S.No": "36",
                            "Title of the Paper": "Comparative evaluations of machining performance during turning of 17-4 PH stainless steel under cryogenic and wet machining conditions",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Machining Science and Technology, (2017), 22(1), pp.147-162."
                        },
                        {
                            "S.No": "37",
                            "Title of the Paper": "Machinability studies on 17-4 PH SS under cryogenic cooling environment",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials and Manufacturing Processes, (2017), 32(15), pp.1775-1788."
                        },
                        {
                            "S.No": "38",
                            "Title of the Paper": "Influence of cryogenic coolant on turning performance characteristics: A comparison with wet machining",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials and Manufacturing Processes, (2017), 32(13), pp.1475-1485."
                        },
                        {
                            "S.No": "39",
                            "Title of the Paper": "Multi objective optimization of cryogenic turning process using Taguchi based grey relational analysis",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Machining and Machinability of Materials, (2017), 19(4), pp.297-312."
                        }
                    ]
                },
                {
                    "title": "Conferences & Workshops attended",
                    "content": [
                        "Participated in 2nd International Conference on \"Mechanical Engineering : Research and Evolutionary Challenges\u201d was organized by NIT Warangal from 29th to 31st May 2024.",
                        "Participated in One Day ICTIEE 2019 \u2018Engineering Education Research\u2019 at Malla Reddy Engineering College, Hyderabad on January 06, 2019.",
                        "Attended workshop on \u201cAdvanced Materials and Manufacturing Processes\" 28-30th September 2016 at NIT Karnataka.",
                        "Attended workshop on \u201cAwareness Programme on Intellectual Property Rights\u201d 1st September 2016 at NIT Karnataka.",
                        "Attended workshop on \u201cComputational Dynamics\u201d 26-27th September 2016 at NIT Karnataka.",
                        "Attended workshop on \u201cMechanics and Dynamics of Precision Machining Processes\u201d, 25-29th July 2016 at NIT Warangal.",
                        "Attended workshop on \u201cTribology Frontiers in Design and Manufacturing\u201d 24-25th October 2016 at NIT Karnataka.",
                        "Attended workshop on \u201cLaser Processing of Materials\u201d March 09-12th, 2017 at NIT Karnataka.",
                        "Attended workshop on \u201cAdvanced Engineering Optimization Through Intelligent Techniques\u201d, December 1-5th, 2004 at NIT Surat.",
                        "Attended workshop on \u201cArtificial Neural Network and its Applications\u201d, 28th April 2016 at Beary\u2019s Institute of Technology, Mangalore."
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Sustainable machining techniques, Artificial Intelligence in Manufacturing."
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=57192977154",
                        "Vidwan: https://vidwan.inflibnet.ac.in/profile/274543",
                        "Google scholar: https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=mFyRNfUAAAAJ",
                        "h-Index (As per Scopus Data) : 17"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026-27",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancing machining efficiency of AISI 316 using novel microgroove textured tools with MQL cooling. Materials and Manufacturing Processes, 1&ndash;12. https://doi.org/10.1080/10426914.2026.2698483",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Sivaiah, P., et al. Machining performance investigation on 17-4PH steel material with innovative textured tools. Scientific Reports (2026).",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Textured tools machinability assessment while turning of H13 material under various cutting environments. Materials and Manufacturing Processes, 40(13), pp.1725-1734.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "MQL turning processing of EN24 alloy steel material with novel textured tools. Materials and Manufacturing Processes, 40(13), pp.1713-1724.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "Processing of AISI304 material with novel textured tools under sustainable manufacturing practice. Materials and Manufacturing Processes, pp.1-10.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Role of dual textured tools in MQL turning operation. Scientific Reports, 15(1), pp.1-11.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Performance evaluation of developed new textured tools during turning of AISI 321 material. Materials and Manufacturing Processes, 39(5), 688-699.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Comparative analysis and experimental exploration of the milling process in the machining of Inconel 825 material under MQL. Materials and Manufacturing Processes, 39(9), 1213-1223",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "6",
                            "Details of Research Publication": "Artificial Intelligence Model for Machinability Investigations on Drilling of AA6061 with Micro Textured Tool for Automobile Applications (No. 2023-28-0082). SAE Technical Paper.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "2",
                            "Details of Research Publication": "Simulation of metal ceramic single layer coatings for solar energy applications. Materials Science for Energy Technologies, 7, pp.85-90.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Investigation on turning process performance during machining of 15-5PH stainless steel material with eco-friendly machining technique. Materials Today: Proceedings.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "2",
                            "Details of Research Publication": "Selection of best WEDM process parameters using grey relational analysis method. Materials Today: Proceedings.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Sustainable manufacturing strategies in machining. Sustainable Manufacturing Processes, Academic press, Elsevier, Pages 113-154,ISBN: 978-0-323-99990-8 978-0-323-99990-8",
                            "Indexing": "Scopus",
                            "Publication": "Book chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "4",
                            "Details of Research Publication": "Neural Network Model for Machinability Investigations on CNC Turning of AA5052 for Marine Applications with MQL (No. 2022-28-0515). SAE Technical Paper.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Performance improvement of turning operation during processing of AISI 304 with novel textured tools under minimum quantity lubrication using hybrid optimization technique. Materials and Manufacturing Processes, 37(6), pp.693-700",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Processing of 17-4 PH steel in turning operation with hybrid textured tools. Materials and Manufacturing Processes, 37(3), pp.241-250.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of single and hybrid pattern textured tools on turning process performance. Materials and Manufacturing Processes, 37(3), pp.251-259.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "3",
                            "Details of Research Publication": "Characterization of Aluminium and Alumina Thin Films Coatings using different Deposition Methods for Enhancement of Optical Properties. International Journal of Materials Engineering Innovation, 12(3), pp.165-187",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Identifying the effectiveness of manner of cryogenic coolant supply in different cryogenic cooling techniques in turning process&mdash;a review. Machining Science and Technology, 24(6), pp.948-999.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "A comparative study on different textured and untextured tools performance in turning process. Materials and Manufacturing Processes, 36(8), pp.926-935.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "3",
                            "Details of Research Publication": "Evaluation of Mechanical Properties of Glass Fiber-BMPM/DABA-PMC Composite. Transactions of the Indian Institute of Metals, 74, pp.2185-2192.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Machinability evaluation during machining of AISI 52100 steel with textured tools under Minimum Quantity Lubrication- A comparative study. Materials and Manufacturing Processes 35(15), pp.1761-1768.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Investigation on turning process performance using hybrid-textured tools under dry and conventional cooling environment. Materials and Manufacturing Processes, 35(16), pp.1852-1859.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "4",
                            "Details of Research Publication": "Alumina Thin film Coatings at Optimized Conditions using RF Magnetron Sputtering Process. International Journal of Thin Film Science and Technology, 10(1), 13-20.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of novel hybrid texture tool on turning process performance in MQL machining of Inconel 718 superalloy. Materials and Manufacturing Processes, 35(1), pp.61-71.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "4",
                            "Details of Research Publication": "Determination of Strength Parameters of Glass Fibers Reinforced Composites for Engineering Applications. Silicon, 12(1), pp.1-11.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of surface texture tools and minimum quantity lubrication (MQL) on tool wear and surface roughness in CNC turning of AISI 52100 steel. Journal of The Institution of Engineers (India): Series C, 101(1), pp.85-95.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Experimental investigation and modelling of MQL assisted turning process during machining of 15-5 PH stainless steel using response surface methodology. SN Applied Sciences, 1(8), p.913.",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "29",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Multi objective optimization of sustainable turning process using TOPSIS method. Emerging Materials Research, 8(4), pp.686-695",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "30",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Evaluation of hybrid textured tool performance under minimum quantity lubrication while turning of AISI 304 steel. Journal of the Brazilian Society of Mechanical Sciences and Engineering, 41(12), p.571-581.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "31",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "4",
                            "Details of Research Publication": "Evaluation of Multilayer Thin Film Coatings for Solar Thermal Applications. Arabian Journal for Science and Engineering, 44(9), pp.7789-7797.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "32",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "Performance improvement of cryogenic turning process during machining of 17-4 PH stainless steel using multi objective optimization techniques. Measurement, 136, pp.326-336.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "33",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "The effectiveness of a novel cryogenic cooling approach on turning performance characteristics during machining of 17-4 PH stainless steel material. Silicon, 11(1), pp.25-38.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "34",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of cryogenic coolant on turning performance: a comparative study. SN Applied Sciences, 1(1), p.67. ESCI Article Q2",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "35",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "Modeling and optimization of sustainable manufacturing process in machining of 17-4 PH stainless steel. Measurement, 134, pp.142-152.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "36",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "1",
                            "Details of Research Publication": "Analysis and modeling of cryogenic turning operation using response surface methodology. Silicon, 10(6), pp.2751-2768.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "37",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of cryogenic coolant on turning performance characteristics during machining of 17-4 PH stainless steel: A comparison with MQL, wet, dry machining. CIRP Journal of Manufacturing Science and Technology, 21, pp.86-96.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "38",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "1",
                            "Details of Research Publication": "Multi performance characteristics optimization in cryogenic turning of 17-4 PH stainless steel using Taguchi coupled grey relational analysis. Advances in Materials and Processing Technologies, 4(3), pp.431-447",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "39",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-17",
                            "Author Position": "1",
                            "Details of Research Publication": "Machinability studies on 17-4 PH stainless steel under cryogenic cooling environment. Materials and Manufacturing Processes, 32(15), pp.1775-1788.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "40",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-17",
                            "Author Position": "1",
                            "Details of Research Publication": "Influence of cryogenic coolant on turning performance characteristics: A comparison with wet machining. Materials and Manufacturing Processes, 32(13), pp.1475-1485.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "41",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-17",
                            "Author Position": "1",
                            "Details of Research Publication": "Multi-objective optimisation of cryogenic turning process using Taguchi-based grey relational analysis. International Journal of Machining and Machinability of Materials, 19(4), pp.297-312.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "42",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-17",
                            "Author Position": "1",
                            "Details of Research Publication": "Comparative evaluations of machining performance during turning of 17-4 PH stainless steel under cryogenic and wet machining conditions. Machining Science and Technology, 22(1), pp.147-162.",
                            "Indexing": "SCIE",
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
                            "Application ID": "437596-001",
                            "Title of the Patent": "Multi-Sieving Machine",
                            "Status": "Examination"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "429724-001",
                            "Title of the Patent": "Textured turning cutting insert",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "429875-001",
                            "Title of the Patent": "Dual surface textured tool",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "429725-001",
                            "Title of the Patent": "Cutting tool for turning operation",
                            "Status": "Examination"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Application ID": "400149-001",
                            "Title of the Patent": "Conical shaped micro grooved surface textured tool",
                            "Status": "Examination"
                        },
                        {
                            "S.No": "6",
                            "Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Application ID": "201841017716A",
                            "Title of the Patent": "Utilization of Waste Poly Ethylene Bags and Fly Ash for Engineering Application",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "7",
                            "Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Application ID": "201741046532A",
                            "Title of the Patent": "New Invention of Low Cost Creep Testing Machine with Variable Temperature and Environmental and Environmental Conditions for Composite Material (pmmc)",
                            "Status": "Examination"
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
                            "Name of the Consulting Firm": "Academic Institutions",
                            "Title of the Project/Event": "Manufacturing of steel components & characterization testing",
                            "Amount in Rs. /-": "50,000"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Name of the Consulting Firm": "Academic Institutions",
                            "Title of the Project/Event": "Manufacturing of steel components & characterization testing",
                            "Amount in Rs. /-": "20,000"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Name of the Consulting Firm": "Academic Institutions",
                            "Title of the Project/Event": "Manufacturing of steel components & characterization testing",
                            "Amount in Rs. /-": "20,000"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Name of the Consulting Firm": "Academic Institutions",
                            "Title of the Project/Event": "Manufacturing of steel components & characterization testing",
                            "Amount in Rs. /-": "10,000"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Stanford University recognized him as one of the Top 2% Scientists for the years 2021, 2023, 2024, and 2025.",
                        "Received the &ldquo;Best Researcher Award&rdquo; for the academic years 2018-19, 2019-20, and 2022-23 at MITS College."
                    ]
                }
            ]
    },

    "Dr. R. Prithivirajan": {
      name: "Dr. R. Prithivirajan",
      designation: "Assoc. Professor",
      email: "prithivirajanr@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/Prithivirajan.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Anna University, Chennai", "Year of Passing": "2017"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "Manufacturing Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Anna University, Chennai", "Year of Passing": "2012"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Annamalai University, Chidambaram.", "Year of Passing": "2008"}
          ]
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=56123153400"},
            {"Identifier": "Vidwan", "Link": ""},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=NYnKKAUAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "11"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "Surface Topographical Analysis and Empirical Assessment of Wire Electrical Discharge Machining on Ti-6242 Alpha-Beta Alloy, Journal of Materials Engineering and Performance, March 2025", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "4", "Details of Research Publication": "Experimental studies on dilution, microstructural, mechanical and wear characteristics of Inconel 718 deposited over stainless steel 304 employing cold metal transfer process, Materials Letters, vol. (381), pp. 137795, February 2025", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Hot Corrosion Behavior of Electrical Discharge-Coated Duplex Stainless Steel Under Sulphur Environment, Transactions of the Indian Institute of Metals, vol. (27), pp. 3699 - 3706, August 2024", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Investigation of Mechanical Properties of Environmentally Friendly Human Hair Fiber-reinforced Polymer Composite, vol. (32), Polymer research – December 2024", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Cenosphere filled epoxy composites: Structural, mechanical, and dynamic mechanical studies, Biomass Conversion and Bio refinery, vol. (14), pp.28893–28900, April 2023.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "4", "Details of Research Publication": "Properties and characteristics of alkali treated calotropis gigantea fiber- reinforced nanoparticle-filled epoxy composites, Composites Theory and Practice, vol. (22), pp. 99 - 105, 2022.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "4", "Details of Research Publication": "Investigations on effectiveness of transfer layer on specific wear rate and coefficient of friction during dry sliding of hybrid polymer matrix composites, Applied polymer composites vol. (43), pp. 250 - 266, October 2022", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "4", "Details of Research Publication": "Influence of optimization techniques on wire electrical discharge machining of Ti–6Al–2Sn–4Zr–2Mo alloy using modeling approach”, Journal of Inorganic and Organometallic Polymers and Materials, vol. (31), pp. 1– 8, May 2021.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "4", "Details of Research Publication": "characteristics and corrosion properties of detonation gun sprayed cermet coatings prepared on AA5083 for marine applications”, Surface Engineering, vol. 37(2), pp. 263 – 270, May 2021", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "10", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "4", "Details of Research Publication": "Experimental Investigation and Optimization of Process Parameters in Ti – (6242) Alpha–Beta Alloy Using Electrical Discharge Machining”, Journal of Inorganic and Organometallic Polymers and Materials, vol. 31(4), pp.1787– 1800, 2021.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "11", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "2", "Details of Research Publication": "Montmorillonite clay addition of epoxy\\ unsaturated polymer blended composites: effect of thermal and mechanical properties”, Journal of Polymer Science and Technology, vol.6 (2), 2021.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "12", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "3", "Details of Research Publication": "Investigating the Mechanical, Thermal and Melt Flow Index properties of HNTs –  LLDPE Nano Composites for the Applications of Rotational Moulding”, Journal of Polymer Testing, vol.89, pp. 1 – 8, September 2020", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "13", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "3", "Details of Research Publication": "Development of Multi-Functioning Organic Waste Shredding Machine for Natural Compost”, accepted in Advances in Industrial Automation and Smart Manufacturing, pp 1043 – 1055, October 2020.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "14", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "5", "Details of Research Publication": "Experimental Investigation on Surface morphology and Parametric Optimization of Ti- 6Al- 2Sn- 4Zr- 2Mo alpha-beta alloy through AWJM”, Tierarztliche Praxis, vol.40, pp. 1681 – 1702, 2020.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "15", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "“Characterization of Musa paradisiaca L. cellulosic natural fibers from agro-discarded blossom petal waste”, Journal of Natural Fibers. vol. 7(11), pp.1640 – 53, Nov 2020.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "16", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "5", "Details of Research Publication": "Physico-chemical study of pistachio (Pistacia vera) nutshell particles as a bio-filler for eco-friendly composites”, Material Research Express, vol.6 (10), pp. 105339, August 2019", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "17", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "4", "Details of Research Publication": "Statistical evaluation and performance analysis of electrical discharge machining (EDM) characteristics of hard Ti-6Al-2Sn-4Zr-2Mo alloy”, Material Research Express, vol.6(5), pp. 056552, Feb 2019", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "18", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "4", "Details of Research Publication": "A new natural cellulosic Pigeon Pea (Cajanus cajan) pod fiber Characterization for bio-degradable polymeric composites”, Accepted for Publication, Journal of Natural Fiber, vol. 18 (9), pp. 1285 – 1295, Nov 2019.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "19", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Characterization of cellulosic fibers from Morus alba L. stem, Journal of Natural Fibers, vol. 16 (4), pp.  503 – 511.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "20", "Publication Affiliation": "MITS", "Academic Year": "2018-19", "Author Position": "5", "Details of Research Publication": "Extraction and characterization of new natural cellulosic chloris barbata Fiber”, Journal of Natural Fibers, vol. 15(3), pp.  436 – 444, Jan 2018.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "21", "Publication Affiliation": "Others", "Academic Year": "2016-17", "Author Position": "1", "Details of Research Publication": "Hybrid bio composites from agricultural residues: Mechanical, water absorption and tribological behaviors”, Journal of Polymer Engineering, vol.36 (7), pp. 633 – 671, Sep 2016.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "22", "Publication Affiliation": "Others", "Academic Year": "2016-17", "Author Position": "1", "Details of Research Publication": "Hybrid bio composites from agricultural residues: Mechanical and thickness swelling behavior”, International Journal of Chem Tech Research. vol.9 (3), pp. 609 – 615, April 2016.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "23", "Publication Affiliation": "Others", "Academic Year": "2016-17", "Author Position": "3", "Details of Research Publication": "Properties and performance of bio particulated natural green husk coir fiber-vinyl ester composites”, International Journal of Chem Tech Research.vol.9 (2), pp. 65 – 69, March 2016.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "24", "Publication Affiliation": "Others", "Academic Year": "2015-16", "Author Position": "1", "Details of Research Publication": "Bio-Based Composites from waste agricultural residues: Mechanical and morphological properties”, Cellulose Chemistry and Technology. vol. 49 (1), pp.65 – 68, 2015.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "25", "Publication Affiliation": "Others", "Academic Year": "2015-16", "Author Position": "4", "Details of Research Publication": "Statistical analysis and fractography study of tensile behavior in bio particulated coir-vinyl ester composites”, Advanced Materials Research, vol. 984 – 985, pp.214 – 220, July 2014.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2025 -2026", "Application ID": "202541074623", "Title of the Patent": "Multi-Sieving Machine", "Status": "Published"}
          ]
        },
        {
          title: "Research Projects & Events",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2023", "Project /Event": "Project", "Role": "Mentor", "Title": "Compact Sustainable Origami based Furniture", "Amount": "3,67,000", "Agency": "MSME"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2023", "Project /Event": "Event", "Role": "Coordinator", "Title": "Contemporary Progressions, Challenges, and Issues in Metal 3D Printing Technology", "Amount": "93,000", "Agency": "JNTUA - Anantapur"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Top SPOC SWAYAM NPTEL AWARD for AAA rating – IIT Madras, Jan – April 2022."
          ]
        }
      ]
    },

    "Dr. Praveen Kumar Bannaravuri": {
        "name": "Dr. Praveen Kumar Bannaravuri",
        "email": "drpraveenkumarb@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/DR PRAVEEN KUMAR BANNARVAVURI.JPG",
        "designation": "Sr. Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Post Doctoral Fellow",
                            "Specialization": "Mechanical Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "IIT, Guwahati",
                            "Year of Passing": "2019"
                        },
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Mechanical Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "NIT, Manipur",
                            "Year of Passing": "2018"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Tribology and Maintenance Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Shri.G.S.I.T.S, Indore",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Mechanical Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "KLCE, Guntur",
                            "Year of Passing": "2009"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Composite Materials, Medical Device"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=57215558466",
                        "Vidwan: https://vidwan.inflibnet.ac.in/profile/356372",
                        "Google scholar: https://scholar.google.com/citations?user=fMBM9q8AAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 10"
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
                            "Details of Research Publication": "Enhancing Wear Resistance and Mechanical Properties of TiB2-Reinforced AZ91D Magnesium Alloys https://doi.org/10.1007/s11665-025-13020-5",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Enhancing Surface Integrity of Al&ndash;Cu&ndash;Ni Composites with FeNb Reinforcement Through Laser Surface Melting",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Towards Inclusive Transportation: Smart Steps for Elderly Commuters in the Public Transport Buses",
                            "Indexing": "SCOPUS",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "7",
                            "Details of Research Publication": "Synergistic effects of boron carbide and niobium reinforcements on the mechanical performance of Al-8090 alloys",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Wear and Corrosion Behavior of Electromagnetic Stir Casted Al-5Cu-2Ni/(0&ndash;5 wt%) FeNb Alloy Composites",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Effect of Bamboo Leaf and Pista Shell Powder Particles on Mechanical and Wear Behaviour of Polymer Composites",
                            "Indexing": "SCOPUS",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Comparative Study on Metallography and Mechanical Properties of Al&ndash;Cu&ndash;Ni/FeNb Composites Fabricated by Electromagnetic Stir Casting Processes via Sand and Metal Mold System",
                            "Indexing": "SCOPUS",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "9",
                            "Details of Research Publication": "Effect on properties of nickel alloy with the addition of iron and magnesium oxide by gas cladding method",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "9",
                            "Details of Research Publication": "Strengthening of polymer composites with an addition of Ashoka seeds and eggshell powder particles",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect on density and hardness of aluminium metal matrix composite with the addition of bamboo leaf ash",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Effects of fiber laser treatment on properties of Ti-64 alloy",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Conceptual Design and Analysis of Smart Steps for Elderly/Differently Abled Persons in Rural Public Transport Buses",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "2",
                            "Details of Research Publication": "Effect of novel grain refiner and Ni alloying additions on microstructure and mechanical properties of Al-Si9.8-Cu3.4 HPDC castings &ndash; optimization using Multi Criteria Decision making approach",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "3",
                            "Details of Research Publication": "Porosity formation studies in high pressure die castings of Al-9Si-3Cu alloy based on Taguchi method",
                            "Indexing": "ESCI & Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "3",
                            "Details of Research Publication": "Mechatronic system for an automated dynamics staircase for walking difficulty people to travel in public road transportation vehicles",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "2",
                            "Details of Research Publication": "Influence of Fly Ash and Cement with Molasses Addition on Moulding Properties in Silica Sand: A Comparison",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "mpact on the microstructure and mechanical properties of Al-4.5 Cu alloy by the addition of MoS2",
                            "Indexing": "ESCI&Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "6",
                            "Details of Research Publication": "ZrC-impregnated titanium-based coating as an effective lubricating barrier for artificial hip prosthesis",
                            "Indexing": "ESCI&Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "3",
                            "Details of Research Publication": "Effect of cavitation and spallation on ribbon morphology of Fe73. 5Si13. 5B9Cu1Nb3 alloy in planar flow melt spinning process",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "Integrity on properties of Cu-based composites with the addition of reinforcement: A review",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "3",
                            "Details of Research Publication": "Surface strengthening of aluminium alloys/composites by laser applications: A comprehensive review",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "3",
                            "Details of Research Publication": "The recent trends of EDM applications and its relevance in the machining of aluminium MMCs: A comprehensive review",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "7",
                            "Details of Research Publication": "Fabrication of Jackfruit Stems Fiber Composites",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "3",
                            "Details of Research Publication": "Aerodynamic simulation of optimized vortex generators and rear spoiler for performance vehicles",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "8",
                            "Details of Research Publication": "Fabrication and bend testing of DHAK fiber composites",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "9",
                            "Details of Research Publication": "Impact characteristics of DHAK fiber composites",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of laser surface melting on surface integrity of Al&minus; 4.5 Cu composites reinforced with SiC and MoS2",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "2",
                            "Details of Research Publication": "Effect on corrosion behaviour of the surface of aluminium 4.5 Cu with bamboo leaf ash composites by laser treatment",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "29",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "7",
                            "Details of Research Publication": "TG/DTA studies on the oxidation and thermal behaviour of Ti-6Al-4V-B4C coatings obtained by magnetron sputtering",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "30",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Surface Modification of Al&ndash;4.5%Cu/MoS2 Composites by Laser Surface Melting",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "31",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Strengthening of Al-4.5% Cu alloy with the addition of silicon carbide and bamboo leaf ash",
                            "Indexing": "ESCI & Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "32",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "Strengthening of mechanical and tribological properties of Al-4.5% Cu matrix alloy with the addition of bamboo leaf ash",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "33",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "Characterization of Al-4.5% Cu alloy with the addition of silicon carbide and bamboo leaf ash",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "34",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "Tribological behavior of aluminium metal matrix composite with addition of bamboo leaf ash by GRA-Taguchi method",
                            "Indexing": "SCOPUS",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "35",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Author Position": "1",
                            "Details of Research Publication": "Microstructure and mechanical properties of aluminium metal matrix composites with addition of bamboo leaf ash by stir casting method",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "36",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Author Position": "2",
                            "Details of Research Publication": "Influence of Fluidity of Al-Cu Alloy with Fly Ash Reinforcement by Single Spiral Fluidity Test",
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
                            "Affiliation": "Others",
                            "Academic Year": "2025",
                            "Application ID": "431480-001",
                            "Title of the Patent": "Eco friendly and hassle free adjustable flame cooking apparatus.",
                            "Status": "Under Examination"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2025",
                            "Application ID": "431479-001",
                            "Title of the Patent": "Accessible boarding system for elderly individuals with lower limb challenges in Public Transportation",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2024",
                            "Application ID": "431479-001",
                            "Title of the Patent": "Intelligent aid system for elderly and wheelchair users in public transit",
                            "Status": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "Others",
                            "Academic Year": "2020",
                            "Application ID": "202041019684",
                            "Title of the Patent": "An Escalator for lifting the elderly or physically challenged person from ground level",
                            "Status": "Granted"
                        }
                    ]
                },
                {
                    "title": "Research Projects & Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2021-2022",
                            "Project /Event": "Project",
                            "Role": "Co &ndash; P. I.",
                            "Title of the Project/Event": "Development of smart steps for elderly or differently abled people to travel safely and comfortably in the public vehicles",
                            "Amount in Rs. /-": "25,00,000",
                            "Funding Agency": "SEED-TIDE (DST)"
                        }
                    ]
                },
                {
                    "title": "My Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "Characterization of Musa paradisica L. cellulosic natural fibers from agro discarded blossom petal waste,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Natural Fibers, Accepted for Publication. 24 Mar 2019. DOI:10.1080/15440478.2019.1588826"
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "Statistical evaluation and performance analysis of electrical discharge machining (EDM) characteristics of hard Ti-6Al-2Sn-4Zr-2Mo alloy,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Material Research Express, Vol.6(5), Feb 2019. DOI:10.1088/2053-1591/ab06da"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "\u201cHybrid Bio Composites from Agricultural Residues: Mechanical, Water Absorption and Tribological Behaviors\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Polymer Engineering, Vol.36 (7), PP. 633-671, Sep 2016."
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "\u201cHybrid Bio Composites from Agricultural Residues: Mechanical and Thickness Swelling Behavior\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Chem Tech Research. Vol.9 (3), PP. 609-615, April 2016."
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "\u201cPhysicochemical and Thermal properties of new cellulosic Chloris barbata fiber\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "under review in Journal of Natural Fiber."
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "\u201cProperties and Performance of Bio Particulated Natural Green Husk Coir Fiber-Vinyl Ester Composites\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Chem Tech Research. Vol.9 (2), PP. 65-69, March 2016"
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "\u201cOptimization of EDM Process Parameters on Ti-6Al-4V by Grey Relational Algortiym\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "under review, International Journal of Electrochemical Science."
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "\u201cBio-Based Composites from Waste Agricultural Residues: Mechanical and Morphological Properties\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Cellulose Chemistry and Technology. 49 (1), PP.65-68, 2015."
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "\u201cCharacterization of P/M based Al 6024 hybrid composites reinforced with Co particulates\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Applied Engineering Research, Vol. 10 (51),PP.714-718, May 2015."
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "\u201cCharacterization of Aluminum Alloy 2024-T351/ Different Hybrid Ratio of SiC and B4C Fabricated by Friction Stir Processing\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Applied Engineering Research, Vol. 10 (57), PP.444-448, June 2015."
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "\u201cDry Sliding Wear Behavior of Glass and Jute Fiber Hybrid Reinforced Epoxy Composites\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Engineering Research and Development, Vol.10 (11), PP.46-50, Nov 2014."
                        },
                        {
                            "S.No": "12",
                            "Title of the Paper": "\u201cStatistical Analysis and Fractography Study of Tensile Behavior in Bio Particulated Coir-Vinyl Ester Composites\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Advanced Materials Research, Vol. 984-985, PP.214-220, July 2014."
                        },
                        {
                            "S.No": "13",
                            "Title of the Paper": "\u201cOptimization of Mechanical Behaviors of Bio Particulates Filled Coir-Polyester Composites Using Simulated Annealing\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "ARPN Journal of Engineering and Applied Sciences, Vol.9(4), PP.487-492, April 2014."
                        },
                        {
                            "S.No": "14",
                            "Title of the Paper": "\u201cAbrasive Water Jet Machining of Agri-Residue Filled Epoxy Composites\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Macromolecules: Synthesis, Morphology, Processing, Structure, Properties and Applications to be held on 13, 14 and 15 May 2016 at Mahatma Gandhi University, Kottayam, Kerala"
                        },
                        {
                            "S.No": "15",
                            "Title of the Paper": "Narayanasamy,\u201cCharacterization of P/M based Al 6024 hybrid composites reinforced with Co particulates\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Advances In Materials And Mechanical Engineering, 8 & 9th May 2015, EGS Pillay Engineering College, Nagapattinam"
                        },
                        {
                            "S.No": "16",
                            "Title of the Paper": "\u201cCharacterization of Aluminum Alloy 2024-T351/ Different Hybrid Ratio of Sic and B4 C Fabricated by Friction Stir Processing\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Innovative trends in Mechanical and Civil Engineering, 10th April 2015, PET Engineering College, Vallioor."
                        },
                        {
                            "S.No": "17",
                            "Title of the Paper": "\u201cHybrid Bio Composites from Agricultural Residues: Mechanical and Thickness Swelling Behavior\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Advances in Design & Manufacturing, 5th Dec, 2014, National Institute of Technology, Trichy."
                        },
                        {
                            "S.No": "18",
                            "Title of the Paper": "\u201cProperties and Performance of Bio Particulated Natural Green Husk Coir Fiber-Vinyl Ester Composites\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Advances in Design & Manufacturing, 5th Dec, 2014, National Institute of Technology, Trichy."
                        },
                        {
                            "S.No": "19",
                            "Title of the Paper": "\u201cImpact Behaviors of Bio Particulate-Coir Fiber Reinforced Polyester Composite\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference on Revolution of Engineering Materials, 21th April 2014, University College of Engineering, Dindigul."
                        },
                        {
                            "S.No": "20",
                            "Title of the Paper": "\u201cInvestigation on Mechanical Behaviors of Bio-Particulates Composites\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference on Recent trends in Mechanical and Advances in Design Engineering, 5th April 2014, Shanmuganathan Engineering College, Pudukkotai."
                        },
                        {
                            "S.No": "21",
                            "Title of the Paper": "\u201cEvaluation on Mechanical Behavior of Bio Particulate Reinforced Polymer Composites\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference on Recent trends in Mechanical and Advances in Design Engineering, 5th April 2014, Shanmuganathan Engineering College, Pudukkotai."
                        },
                        {
                            "S.No": "22",
                            "Title of the Paper": "\u201cStatistical Analysis and Fractography Study of Tensile Behavior in Bio Particulated Coir-Vinyl Ester Composites\u201d,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Recent Advances in Mechanical Engineering and Interdisciplinary Developments, 7 & 8 March 2014, Ponjesly College of Engineering, Nagercoil."
                        },
                        {
                            "S.No": "23",
                            "Title of the Paper": "\u201cOptimization of Mechanical behaviors of bio particulates filled Coir- Polyester composites using Simulated Annealing\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Trends in Product Life Cycle, Modeling, Simulation and Synthesis, 6-8thJanuary 2014, VIT University, Vellore."
                        },
                        {
                            "S.No": "24",
                            "Title of the Paper": "\u201cBio-Based Composites from Waste Agricultural Residues: Mechanical and Morphological Properties\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Advanced polymeric materials, 11-13th October 2013, Mahatma Gandhi University, Kottayam, Kerala."
                        },
                        {
                            "S.No": "25",
                            "Title of the Paper": "\u201cExtraction and Tensile properties of natural fibers: Zea and Sunflower Stalk fiber\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National level Conference on Roboust innovations in Engineering & Technology in 30thAugust 2013, P.A.C.Ramasamy Raja polytechnic college, Rajapalayam."
                        },
                        {
                            "S.No": "26",
                            "Title of the Paper": "\u201cInvestigation of Mechanical Properties of Coir pith/Rice husk Particulated Reinforced Epoxy Composites\"",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National conference on Advanced Materials and Processing Technologies\u201d, 17 & 18th February 2012, Prist University, Tanjore."
                        },
                        {
                            "S.No": "27",
                            "Title of the Paper": "\u201cExtraction and Characterization of New Natural Cellulosic Chloris barbata Fiber\"",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Natural Fibers, Volume 15, 2018 - Issue 3"
                        }
                    ]
                },
                {
                    "title": "Book Chapter",
                    "content": "Manufacturing Technology Lab Manual \u2013 D.Chandramohan, R.Prithivirajan and S.R.Venkatesan, TIJ Research Publications PTE. LTD. ISBN - 978-981-07-5597-5 October 2013."
                },
                {
                    "title": "Industrial Visits, Conferences & Workshops attended",
                    "content": [
                        "Participated in \"NPTEL SPOC Felicitation and awareness workshop\" held at Terrace Hall, IIT Madras on 05.07.2025.",
                        "Participated in NPTEL SPOC Workshop & Felicitation Programme at IIT Madras, IC & SR Auditorium on 22nd June, 2024.",
                        "Industrial Visit to Bangalore Integrated System Solutions (BISS) & Central Manufacturing Technology Institute (CMTI), Bangalore on 15th November 2018."
                    ]
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "\u201cMicrostructure and Mechanical properties of Aluminium Metal Matrix Composites with addition of Bamboo Leaf Ash by Stir Casting Method\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Transactions of Nonferrous Metals Society of China, Vol. 27, No. 12 (2017), pp. 2555-2572. (SCI, impact factor \u2013 4.7)"
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "\u201cStrengthening of mechanical and tribological properties of Al-4.5%Cu matrix alloy with addition of Bamboo Leaf Ash\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Results in Physics, Vol. 10 (2018), pp. 360-373. (SCI, impact factor - 4.4)"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "\u201cEffect of laser surface melting on surface integrity of Al\u2212 4.5 Cu composites reinforced with SiC and MoS2\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Transaction of Nonferrous Metal Society of China, Vol. 30, No. 2, 2020, pp. 344-362. (SCI, impact factor \u2013 4.7)."
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "\u201cEffect on corrosion behaviour of the surface of aluminium 4.5 Cu with bamboo leaf ash composites by laser treatment\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Research Express, Vol. 7, No.4 1, 2020, DOI: https://doi.org/10.1088/2053-1591/ab6c9f, (SCI, impact factor-1.8)."
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "\u201cWear and Corrosion Behavior of Electromagnetic Stir Casted Al-5Cu-2Ni/(0\u20135 wt%) FeNb Alloy Composites\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Transactions of the Indian Institute of Metals, Vol. 77, No. 1 (2024), pp. 133-143. https://doi.org/10.1007/s12666-023-03059-0 (SCIE - Impact Factor: 1.5)."
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "\u201cSynergistic effects of boron carbide and niobium reinforcements on the mechanical performance of Al-8090 alloys\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Research Express 11 (11), 116524 (SCIE Impact Factor \u2013 1.8)."
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "\u201cEffect of Novel Grain refiner and Ni alloying additions on Microstructure and Mechanical properties of Al- Si9.8-Cu3.4 HPDC castings \u2013 Optimization using Multi Criteria Decision making approach\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Science-Poland, Vol. 40, No. 1 (2022), pp. 9-24. (SCIE, Impact Factor \u2013 1.3)."
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "\u201cCharacterization of Al-4.5%Cu alloy with addition of Silicon Carbide and Bamboo Leaf Ash\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Kovove Materialy- Metallic Materials, Vol. 56 (2018), pp. 325-337. (SCI, impact factor-0.7)"
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "\u201cTribological behavior of aluminium metal matrix composite with addition of bamboo leaf ash by GRA-Taguchi method\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Tribology in Industry, Vol. 40, No. 2 (2018), pp. 311-325, DOI: 10.24874/ti.2018.40.02.14. (Scopus, SJR-0.43)"
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "\u201cStrengthening of Al-4.5%Cu alloy with the addition of Silicon Carbide and Bamboo Leaf Ash\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Structural Integrity, Vol. 10, No. 2 (2019), pp. 149-161. (Scopus, ESCI) (SJR-0.23)."
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "\u201cInfluence of Fluidity of Al-Cu alloy with Fly ash Reinforcement by Single Spiral Fluidity test\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Today: Proceedings, Vol. 2 ( 2015 ), pp. 2776-2783 (Scopus)."
                        },
                        {
                            "S.No": "12",
                            "Title of the Paper": "Strengthening of the Surface Properties of AL-4.5%Cu/BLA Composites by Laser Surface Application\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Innovative Technology and Exploring Engineering, Volume-8 Issue-12, October 2019, ISSN: 2278-3075. (Scopus)."
                        },
                        {
                            "S.No": "13",
                            "Title of the Paper": "\u201cInfluence of radius of the sternum plate for a pneumatically driven parallel manipulator used for Chest Compressions on a closed loop manikin\"",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal - International Journal of Scientific & Technology Research, Volume 8 - Issue 10, October 2019 Edition - ISSN 2277-8616. (Scopus)."
                        },
                        {
                            "S.No": "14",
                            "Title of the Paper": "\u201cFabrication and bend testing of DHAK fiber composites\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Today: Proceedings, 2020, https://doi.org/10.1016/j.matpr.2020.05.647. (Scopus)."
                        },
                        {
                            "S.No": "15",
                            "Title of the Paper": "\u201cImpact characteristics of DHAK fiber composites\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Today: Proceedings, 2020, https://doi.org/10.1016/j.matpr.2020.05.648. (Scopus)."
                        },
                        {
                            "S.No": "16",
                            "Title of the Paper": "\u201cTG/DTA studies on the oxidation and thermal behaviour of Ti-6Al-4V-B4C coatings obtained by magnetron sputtering\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Applied Research and Technology, 18 (2020) 108-118. (Scopus)."
                        },
                        {
                            "S.No": "17",
                            "Title of the Paper": "\u201cImpact on the microstructure and mechanical properties of Al-4.5Cu Alloy by the addition of MoS2\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Lightweight Materials and Manufacture, Vol. 4, No. 3 (2021), pp. 281-289, https://doi.org/10.1016/j.ijlmm.2021.01.001. (Scopus)."
                        },
                        {
                            "S.No": "18",
                            "Title of the Paper": "\u201cAerodynamic simulation of optimized vortex generators and rear spoiler for performance vehicles\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Today: Proceedings, Vol. 45, No. 7 (2021), pp. 7228-7238, (Scopus)."
                        },
                        {
                            "S.No": "19",
                            "Title of the Paper": "\u201cZrC-Impregnated Titanium-Based Coating as an Effective Lubricating Barrier for Artificial Hip Prosthesis\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Performance and Characterization, Vol. 10, No. 1 (2021), pp. 189-205, (Scopus)."
                        },
                        {
                            "S.No": "20",
                            "Title of the Paper": "\u201cEffect of cavitation and spallation on ribbon morphology of Fe73. 5Si13. 5B9Cu1Nb3 alloy in planar flow melt spinning process\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Today: Proceedings, https://doi.org/10.1016/j.matpr.2021.05.121, (Scopus)."
                        },
                        {
                            "S.No": "21",
                            "Title of the Paper": "\u201cIntegrity on properties of Cu-based composites with the addition of reinforcement: A review\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Today: Proceedings, https://doi.org/10.1016/j.matpr.2021.05.096, (Scopus)."
                        },
                        {
                            "S.No": "22",
                            "Title of the Paper": "\u201cSurface strengthening of aluminium alloys/composites by laser applications: A comprehensive review\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Today: Proceedings, https://doi.org/10.1016/j.matpr.2021.05.191, (Scopus)."
                        },
                        {
                            "S.No": "23",
                            "Title of the Paper": "\u201cThe recent trends of EDM applications and its relevance in the machining of aluminium MMCs: A comprehensive review\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Today: Proceedings, https://doi.org/10.1016/j.matpr.2021.05.148, (Scopus)."
                        },
                        {
                            "S.No": "24",
                            "Title of the Paper": "\u201cPorosity formation studies in high pressure die castings of Al-9Si-3Cu alloy based on Taguchi method\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Structural Integrity, Vol. 13, No. 1 (2022), pp. 78-91. https://doi.org/10.1108/IJSI-06-2020-0056, (Scopus)."
                        },
                        {
                            "S.No": "25",
                            "Title of the Paper": "\u201cComparative Study on Metallography and Mechanical Properties of Al\u2013Cu\u2013Ni/FeNb Composites Fabricated by Electromagnetic Stir Casting Processes via Sand and Metal Mold System\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of The Institution of Engineers (India): Series D, Vol. 105, No. 2 (2024), pp. 827-837. https://doi.org/10.1007/s40033-023-00519-1, (Scopus)."
                        },
                        {
                            "S.No": "26",
                            "Title of the Paper": "\u201cEffect of bamboo leaf and pista shell powder particles on mechanical and wear behaviour of polymer composites\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of The Institution of Engineers (India): Series D, Vol. 105, No. 2 (2024), pp. 911-921. https://doi.org/10.1007/s40033-023-00558-8 (Scopus)."
                        },
                        {
                            "S.No": "27",
                            "Title of the Paper": "\u201cEffect on properties of nickel alloy with the addition of iron and magnesium oxide by gas cladding method\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Today: Proceedings, 2024, https://doi.org/10.1016/j.matpr.2024.05.154. (Scopus)"
                        },
                        {
                            "S.No": "28",
                            "Title of the Paper": "\u201cStrengthening of polymer composites with an addition of Ashoka seeds and Eggshell powder particles\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Today: Proceedings, 2024, https://doi.org/10.1016/j.matpr.2024.05.045. (Scopus)"
                        },
                        {
                            "S.No": "29",
                            "Title of the Paper": "\u201cEffect of Bamboo Leaf and Pista Shell Powder Particles on Mechanical and Wear Behaviour of Polymer Composites\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of The Institution of Engineers (India): Series D 105 (2), 911-921 (Scopus)"
                        },
                        {
                            "S.No": "30",
                            "Title of the Paper": "\u201cComparative study on metallography and mechanical properties of Al\u2013Cu\u2013Ni/FeNb composites fabricated by electromagnetic stir casting processes via sand and metal mold system\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of The Institution of Engineers (India): Series D 105 (2), 827- 837 (Scopus)."
                        },
                        {
                            "S.No": "31",
                            "Title of the Paper": "\u201cTowards Inclusive Transportation: Smart Steps for Elderly Commuters in the Public Transport Buses\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Research and Applications in Mechanical Engineering 13 (1) (Scopus) International / National Journal"
                        },
                        {
                            "S.No": "32",
                            "Title of the Paper": "\u201cEffect of Reinforcement\u2019s Material on Tribological and Mechanical Behaviour of Aluminium Composites: a Potential Review\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Innovative Research in Science, Engineering and Technology, Vol. 7, No. 1 (2018), pp. 501-511."
                        },
                        {
                            "S.No": "33",
                            "Title of the Paper": "\u201cOptimization of shrinkage and porosity of A713 cast Alloy\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of critical reviews, Vol. 7, No. 19 (2020), pp. 5707-5712."
                        },
                        {
                            "S.No": "34",
                            "Title of the Paper": "\u201cInvestigation on Surface Quality of Drilled Holes of A713alloy Based MMC with Addition of Bamboo Leaf Ash and Aluminum Oxide as Reinforcements: A Comprehensive Study\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Advanced Science and Technology, 29(7), 3443-3450."
                        },
                        {
                            "S.No": "35",
                            "Title of the Paper": "\u201cDevelopment of a split bush bearing system\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "1st International and 16th National Conference on Machines and Mechanisms (iNaCoMM2013), 2013, IIT Roorkee, India."
                        },
                        {
                            "S.No": "36",
                            "Title of the Paper": "\u201cCompetitive Advantage of Aluminium Hybrid Metal Matrix Composites over Aluminium Metal Matrix Composites: A Comprehensive Review\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Proceedings of the 17th ISME Conference ISME17, ISME-M-034, IIT Delhi, 2015, pp. 1-6."
                        },
                        {
                            "S.No": "37",
                            "Title of the Paper": "\u201cSignificance of Composite Materials with Potential Applications in present Era\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Emerging Trends in Science and Engineering Research, 2015, NIT Manipur, India (Only Abstract Published)."
                        },
                        {
                            "S.No": "38",
                            "Title of the Paper": "\u201cMechanical Characterisation of Bamboo Leaf Ash on Al-Cu alloy\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference on Advances in Materials Processing and Characterization, 2016, NIT Warangal, India. (Only Abstract Published)."
                        },
                        {
                            "S.No": "39",
                            "Title of the Paper": "\u201cBamboo Leaf Ash Reinforced in Aluminum Metal Matrix Composite: A Comprehensive Review\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference on Advances in Research and Innovations in Mechanical Engineering, Material Science, Industrial Engineering and Management, NIT Manipur, 2016, pp. 129-133."
                        },
                        {
                            "S.No": "40",
                            "Title of the Paper": "\u201cSynthesis and characterization of Aluminium Metal Matrix composite with addition of Bamboo Leaf Ash\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Proceedings of Mechanical Engineering Research Day 2019, pp. 1-2, July 2019."
                        },
                        {
                            "S.No": "41",
                            "Title of the Paper": "\u201cSurface modification of AL-4.5%Cu/MoS2 composites by laser surface melting\u2019",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "6th International Conference on Production and Industrial Engineering (CPIE-2019), Department of Industrial and Production Engineering, Dr B R Ambedkar National Institute of Technology Jalandhar-144011, INDIA."
                        },
                        {
                            "S.No": "42",
                            "Title of the Paper": "\u201cInfluence of fiber orientation on the tribological behaviour of MWCNTs / graphene-reinforced carbon fiber epoxy composite\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Next Generation Technologies: Design and Manufacturing, ID: T020157, 13th to 15th November 2024, Department of Mechanical Engineering, Indian Institute of Technology Madras."
                        }
                    ]
                },
                {
                    "title": "Book Chapters",
                    "content": [
                        "Bannaravuri P.K., Birru A.K., Dixit U.S. (2020) Surface Modification of Al\u2013 4.5%Cu/MoS2 Composites by Laser Surface Melting. In: Sharma V., Dixit U., S\u00f8rby K., Bhardwaj A., Trehan R. (eds) Manufacturing Engineering. Lecture Notes on Multidisciplinary Industrial Engineering. Springer, Singapore, (Scopus).",
                        "Praveen Kumar Bannaravuri, Gadudasu Baburao, K Ch Appa Rao, P Srinivas Rao, Anil Kumar Birru, K Samuel Charan Kumar, T Ravi, \u201cEffect on density and hardness of aluminum metal matrix composite with the addition of bamboo leaf ash\u201d, Agriculture waste composites Chapter 6.1, Waste Residue Composites, Volume 16, (2023) p-135. (Scopus)."
                    ]
                },
                {
                    "title": "FDP/Conferences/Workshops/Awareness Programmes attended",
                    "content": "Participated in Mandatory campus visit of AICTE-QIP-PG Certificate Programme in CPS at IIIT Dharwad on \u201cCyber-Physical Systems (CPS)\u201d Sponsored by All India Council for Technical Education (AICTE) from 8th December 2025 to 19th December 2025."
                }
            ]
    },

    "Dr. Kamlesh Kumar": {
      name: "Dr. Kamlesh Kumar",
      designation: "Asst. Professor",
      email: "drkamleshkumar@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/PHOTO_ Dr. Kamlesh Kumar(1).png",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Manufacturing", "Branch": "Mechanical Engineering", "College Name/University": "National Institute of Technology, Rourkela, Odisha, India.", "Year of Passing": "2020"},
            {"S.No": "2", "Course": "B.Tech.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Siksha 'O' Anusandhan University, Bhubaneswar, Odisha, India.", "Year of Passing": "2013"}
          ]
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=8862630800"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/274523"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?hl=en&user=p_9puS8AAAAJ&view_op=list_works&sortby=pubdate"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "7"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Numerical simulation and experimental investigation of TIG welding of AISI 304 Stainless steel plate https://doi.org/10.1080/09507116.2025.2584027", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Welding of Ti-6Al-4V Alloy: A Review", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Effect of reducing heat input on autogenous TIG welding of Ti–6Al–4V alloy", "Indexing": "SCI-E", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "A review on TIG welding technology variants and its effect on weld geometry", "Indexing": "Scopus", "Publication": "Conf. Proceedings", "Journal Quartile": "None"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "3", "Details of Research Publication": "Investigation on the Stress Distribution During Hard Turning of AISI 52100 Steel Using Al2O3/TiCN Cutting Tool Coated with Mono-layered AlCrN and Multi-layered AlTiN/TiN Coating", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "3", "Details of Research Publication": "Pulse laser welding of high carbon alloy steel: assessment of melt pool geometry and mechanical performance    SCI-E    Article    Q2", "Indexing": "SCI-E", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2019-20", "Author Position": "3", "Details of Research Publication": "Effect of overlapping condition on large area NiTi layer deposited on Ti-6Al-4V alloy by TIG cladding technique    SCI    Article    Q1", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2018-19", "Author Position": "1", "Details of Research Publication": "Microstructure evolution and metallurgical characteristic of bead-on-plate TIG welding of Ti-6Al-4V alloy", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2018-19", "Author Position": "1", "Details of Research Publication": "Effect of activated flux on TIG welding of 304 austenitic stainless steel", "Indexing": "Scopus", "Publication": "Conf. Proceedings", "Journal Quartile": "None"},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2017-18", "Author Position": "1", "Details of Research Publication": "Influence of welding current on the mechanical property of 3 mm thick commercial 1050 aluminium butt joint weld by AC-TIG welding method", "Indexing": "Scopus", "Publication": "Conf. Proceedings", "Journal Quartile": "None"},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2016-17", "Author Position": "4", "Details of Research Publication": "Sliding abrasive wear characteristic of TIG cladded TiC reinforced Inconel825 composite coating", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2015-16", "Author Position": "1", "Details of Research Publication": "Effect of Varying Root Gap on Butt Welding of 6 mm Thick AISI 1020 Plate by Autogenous TIG Welding Process", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2025-26", "Application ID": "451043-001", "Title of the Patent": "Sun tracking system for small scale domestic PV systems", "Status": "Granted"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "431997-001", "Title of the Patent": "Sun tracking solar panel system for cloudy weather", "Status": "Granted"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "202541012935", "Title of the Patent": "A body massage unit for management of pain", "Status": "Published"},
            {"S.No": "4", "Affiliation": "MITS", "Academic Year": "2023-24", "Application ID": "464951-001", "Title of the Patent": "Power line inspection robot", "Status": "Granted"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Top performing mentor for NPTEL online certification course “Plastic waste management”.",
            "Delivered a webinar on “Recent Advancements in TIG Welding Process” conducted by The Indian Institute of Welding (IIW-INDIA), Students’ Chapter, Saintgits College of Engineering, Kerala on 19/06/2021.",
            "GATE qualified with score 388 in Mechanical Engineering in 2014."
          ]
        }
      ]
    },

    "Dr. Guniputi Balanarasimha": {
        "name": "Dr. Guniputi Balanarasimha",
        "email": "drbalanarasimhag@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/DR GUNIPUTI BALANARASIMHA.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Smart Materials",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "National Institute of Technology, Karnataka",
                            "Year of Passing": "2020"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Machine Design",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Madanapalle Institute of Technology & Science, Madanapalle",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Mechanical Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Chadalawada Ramanamma Engineering College, Tirupati",
                            "Year of Passing": "2010"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Smart Materials, Smart Structures, Additive Manufacturing, Tribology, Metal Matrix Composites, Machine Learning, Material Modelling."
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=56505621600",
                        "Vidwan: https://mits.irins.org/profile/578569",
                        "Google scholar: https://scholar.google.com/citations?user=nIvafIYAAAAJ&hl=en",
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
                            "Details of Research Publication": "Role of infill pattern and density on strength of 3D printed shape memory alloy hybrid composites https://doi.org/10.1080/10667857.2025.2597880",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "Development and Characterization of Pseudo-Elastic Ternary Cu-Al-Be Shape Memory Alloy and Its Scope as Shape Memory Hybrid Composites. Journal of Polymer and Composites. 2025; 13(05):370-385. https://journals.stmjournals.com/jopc/article=2025/view=228803",
                            "Indexing": "ESCI/ WoS",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Other",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "An investigation on stabilisation and phase transformation characteristics of Cu-Al-Be shape-memory alloys quenched in different media. https://doi.org/10.1080/2374068X.2024.2402975",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Other",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of quenchant on the phase transformation of Cu&ndash;Al&ndash;Be&ndash;B shape memory alloys. https://doi.org/10.1007/s12666-023-02939-9",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Other",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of in-situ reaction time on the strength of AA5052/ZrAl3 metal matrix nano composites. https://doi.org/10.1080/2374068X.2022.2091188",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Other",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Role of alloying additions on phase transformations, mechanical and pseudoelastic behavior of Cu-Al-Be shape memory alloys. https://doi.org/10.1016/j.matpr.2021.12.092",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Other",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of Cerium and Aluminium on the phase stability and properties of polycrystalline Cu-Al-Be shape memory alloys. https://doi.org/10.1016/j.matchar.2021.111590",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Other",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of manganese and homogenization on the phase stability and properties of Cu&ndash;Al&ndash;Be shape memory alloys https://doi.org/10.1016/j.jmrt.2021.07.027",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Other",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "An investigation on the properties of boron modified Cu&ndash;Al&ndash;Be polycrystalline shape memory alloys. https://doi.org/10.1016/j.jallcom.2020.153733",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Other",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of zirconium on the properties of polycrystalline Cu-Al-Be shape memory alloy. https://doi.org/10.1016/j.msea.2019.04.022",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Other",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "Influence of Gd on the microstructure, mechanical and shape memory properties of Cu-Al-Be polycrystalline shape memory alloy https://doi.org/10.1016/j.msea.2018.09.064",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Other",
                            "Academic Year": "2014-15",
                            "Author Position": "2",
                            "Details of Research Publication": "Optimization of Influential Parameters on Mechanical Behaviour of AlMg1SiCu Hybrid Metal Matrix Composites using Taguchi Integrated Fuzzy Approach. https://doi:10.1016/j.matpr.2015.07.071",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2014-15",
                            "Author Position": "1",
                            "Details of Research Publication": "A Comparative Study on Analytical and Experimental Buckling Stability of Metal Matrix Composite Columns with Fixed & Hinged Ends. Int. J. Appl. Eng. Res. 9,191&ndash;196.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Other",
                            "Academic Year": "2014-15",
                            "Author Position": "1",
                            "Details of Research Publication": "Prediction of wear behaviour of almg1sicu hybrid MMC using taguchi with grey rational analysis. https://doi.org/10.1016/j.proeng.2014.12.283",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2012-13",
                            "Author Position": "1",
                            "Details of Research Publication": "A Review on Processing of Particulate Metal Matrix Composites and its Properties https://dx.doi.org/10.37622/IJAER/8.6.2013.647-666",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        }
                    ]
                },
                {
                    "title": "Research Projects and Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Project/Event": "Project",
                            "Role": "PI",
                            "Title of the Project/Event": "Investigation of Nanofluid-Coated SMA Actuators to Achieve Rapid Cooling Cycles and Enhanced Functional Durability",
                            "Amount in Rs. /-": "45,000",
                            "Funding Agency": "The Institution of Engineers India, Kolkatta"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Project/Event": "Seminar",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "Drone Technology and Its Career Opportunities-Evolution and Engineerng Design Perspectives",
                            "Amount in Rs. /-": "",
                            "Funding Agency": "AICTE-DPS"
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
                            "Application ID": "202441088595",
                            "Title of the Patent": "Real-Time Monitoring Tool for Mechanical System Performance",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Editorial Board Member for Scientific Reports (Springer Nature), a reputed international journal.",
                        "Peer reviewer for international journals i.e., Journal of Alloys and Compounds, Materials Chemistry and Physics, Applied Physics A, and Transactions of the Indian Institute of Metals.",
                        "E-content on Engineering Graphics with AutoCAD"
                    ]
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "\u201cAn investigation on stabilisation and phase transformation characteristics of Cu-Al-Be shape-memory alloys quenched in different media\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Advances in Materials Processing and Technologies, https://doi.org/10.1080/2374068X.2024.2402975, Indexing/ Publisher : ESCI, WoS Taylor & Francis, 2024"
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "\u201cEffect of Quenchant on the Phase Transformation of Cu\u2013 Al\u2013Be\u2013B Shape Memory Alloys\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Transactions of Indian Institute of Metals, 1-9. https://doi.org/10.1007/s12666- 023-02939-9, IIndexing/ Publisher : SCIE Springer. 2023, Impact Factor 1.6"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "\u201cEffect of in-situ reaction time on the strength of AA5052/ZrAl3 metal matrix nano composites\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Advances in Materials Processing and Technologies, 1-12. https://doi.org/10.1080/2374068X.2022.2091188, Indexing/ Publisher : ESCI, WoS Taylor & Francis, 2022"
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "\u201cEffect of Cerium and Aluminium on the phase stability and properties of polycrystalline Cu-Al-Be shape memory alloys\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Characterization, 183, 111590. https://doi.org/10.1016/j.matchar.2021.111590, Indexing/ Publisher : SCIE Elsevier 2022, Impact Factor 4.7"
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "\u201cEffect of manganese and homogenization on the phase stability and properties of Cu\u2013Al\u2013Be shape memory alloys\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Materials Research & Technology,14, 1551 -1558. https://doi.org/10.1016/j.jmrt.2021.07.027, Indexing/ Publisher : SCIE Elsevier 2021, Impact Factor 6.4"
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "\u201cAn investigation on the properties of boron modified Cu- Al-Be polycrystalline shape memory alloys,\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Alloys and Compounds. 823, 153733. https://doi.org/10.1016/j.jallcom.2020.153733, Indexing/ Publisher : SCIE Elsevier 2020, Impact Factor 6.2"
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "\u201cEffect of zirconium on the properties of polycrystalline Cu-Al-Be shape memory alloy,\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Science and Engineering A.755, 211\u2013219. https://doi.org/10.1016/j.msea.2019.04.022, Indexing/ Publisher : SCIE Elsevier 2019, Impact Factor 6.4"
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "\u201cInfluence of Gd on the microstructure, mechanical and shape memory properties of Cu-Al-Be polycrystalline shape memory alloy,\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Science and Engineering A. 737, 245\u2013252. https://doi.org/10.1016/j.msea.2018.09.064, Indexing/ Publisher : SCIE Elsevier 2018, Impact Factor 6.4"
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "A Comparative Study on Analytical and Experimental Buckling Stability of Metal Matrix Composite Columns with Fixed & Hinged Ends,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Int. J. Appl. Eng. Res. 9,191\u2013 196. Indexing/Publisher : Scopus 2014"
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "A Review on Processing of Particulate Metal Matrix Composites and its Properties,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Int. J. Appl. Eng. Res. 8 647\u2013666. https://dx.doi.org/10.37622/IJAER/8.6.2013.647-666, Indexing/ Publisher : Scopus 2013"
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "Role of alloying additions on phase transformations, mechanical and pseudoelastic behavior of Cu-Al-Be shape memory alloys,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Mater. Today Proc. (2022). (Scopus) https://doi.org/10.1016/j.matpr.2021.12.092"
                        },
                        {
                            "S.No": "12",
                            "Title of the Paper": "\u201cOptimization of Influential Parameters on Mechanical behaviour of AlMg1 SiCu Hybrid Metal Matrix Composites using Taguchi integrated Fuzzy Approach\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Mater. Today Proc. 2 (2015) 1464\u20131468. (Scopus) https://doi:10.1016/j.matpr.2015.07.071"
                        },
                        {
                            "S.No": "13",
                            "Title of the Paper": "Prediction of wear behaviour of almg1sicu hybrid MMC using taguchi with grey rational analysis",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Procedia Engineering, 97 (2014),555-562. (Scopus) https://doi.org/10.1016/j.proeng.2014.12.283"
                        }
                    ]
                }
            ]
    },

    "Dr. Anantha Raman L": {
      name: "Dr. Anantha Raman L",
      designation: "Asst. Professor",
      email: "dranantharamanl@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/Anantha Raman L.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Thermal Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Anna University, Chennai", "Year of Passing": "2021"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "Thermal Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Adhiparasakthi Engineering College, Chennai", "Year of Passing": "2012"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "Aeronautical Engineering", "Branch": "Aeronautical Engineering", "College Name/University": "Infant Jesus College of Engineering, Chennai", "Year of Passing": "2009"}
          ]
        },
        {
          title: "Research Areas",
          content: "I.C. Engines, Industrial IoT, Refrigeration and Air Conditioning"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://scopus.com/authid/detail.uri?authorId=54392375300"},
            {"Identifier": "Vidwan", "Link": "https://mits.irins.org/profile/362575"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=NCnLwKsAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "6"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "4", "Details of Research Publication": "Enhanced removal of manganese ions from wastewater media by oxidized MNT-based filters: EDS and raman investigations”, AIP Conference Proceedings, Vol. 3342, 070046 (2025), doi: 10.1063/5.0296480", "Indexing": "SCOPUS", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "“Design and Implementation of an IoT-Enabled Medication Delivery Robot for Isolated Patient Care”, IEEE Xplore, 2024 2nd International Conference on Self Sustainable Artificial Intelligence Systems (ICSSAS) - 23-25 Oct. 2024, doi: 10.1109/ICSSAS64001.2024.10760515", "Indexing": "SCOPUS", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2023 - 24", "Author Position": "4", "Details of Research Publication": "AI-based Prognostic Analysis of NOx Emission from Industrial Diesel Engine for Feedback Control System, IEEE Xplore, 2023 1st International Conference on Optimization Techniques for Learning (ICOTL), Feb 2024, 10.1109/ICOTL59758.2023.10435308", "Indexing": "SCOPUS", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2023 - 24", "Author Position": "1", "Details of Research Publication": "Shear strength, wear, thermal conductivity, and hydrophobicity behavior of fox millet husk biosilica and Amaranthus dubius stem fiber–reinforced epoxy composite: a concept of biomass conversion, https://doi.org/10.1007/s13399-023-04854-x", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "2", "Details of Research Publication": "Effect of Adding Rice Husk Ash Functional Silicon Additives on Flammability Wear and Thermal Stability of Ramie-Epoxy Composite”,     https://doi.org/10.1007/s12633-023-02463-x", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "3", "Details of Research Publication": "Assessment of charging technologies, infrastructure and charging station recommendation schemes of electric vehicles: A review,  https://doi.org/10.1016/j.asej.2022.101938", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "2", "Details of Research Publication": "A review on recent trends in the microbial production of biodiesel”, AIP Conference Proceedings, Vol. 2396, PP: 020007-1 – 020007-15, 2021,doi: 10.1063/5.0066418", "Indexing": "SCOPUS", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2019-20", "Author Position": "2", "Details of Research Publication": "Investigation and Optimization of Machining Parameters Influence on Surface Roughness in Turning AISI 4340 Steel. doi:10.5937/fme2002383B", "Indexing": "SCOPUS", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2019-2020", "Author Position": "1", "Details of Research Publication": "Experimental investigation on performance, combustion and emission analysis of a direct injection diesel engine fuelled with rapeseed oil biodiesel. doi.org/10.1016/j.fuel.2019.02.106", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2017-18", "Author Position": "1", "Details of Research Publication": "Study on Performance and Emission Characteristics of a  Single Cylinder Diesel Engine using Exhaust Gas Recirculation”, Thermal Science, Vol. 21, Supplement 02, PP: S435-S441, 2017, ISSN 2334-7163", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2013 -14", "Author Position": "4", "Details of Research Publication": "Performance and emission characteristics of low heat rejection diesel engine fuelled with rice bran oil biodiesel, Advanced Materials Research,  doi: 10.4028/www.scientific.net/AMR.768.245.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2011 - 12", "Author Position": "2", "Details of Research Publication": "The Effect of Preheated Crude Palm Oil on Performance and Emission Characteristics of a Compression Ignition Engine”, Applied Mechanics and Materials, Vol. 110-116, Pg. 142-147, Oct 2011, doi: 10.4028/www.scientific.net/AMM.110-116.142", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "392223-001", "Title of the Patent": "WIRELESS ROBOTIC HAND", "Status": "Granted"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "448484-001", "Title of the Patent": "ULTRA WIDEBAND ANTENNA FOR MASS COMMUNICATION", "Status": "Granted"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "439577-001", "Title of the Patent": "VISCOUS FLOW APPARATUS", "Status": "Granted"},
            {"S.No": "4", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "434805-001", "Title of the Patent": "AUTONOMOUS MOBILE-CONTROLLED ROBOT FOR WATERWAY WASTE", "Status": "Granted"},
            {"S.No": "5", "Affiliation": "MITS", "Academic Year": "2024", "Application ID": "427760-001", "Title of the Patent": "PORTABLE THERMOELECTRIC AIR CONDITIONING SYSTEM", "Status": "Granted"},
            {"S.No": "6", "Affiliation": "MITS", "Academic Year": "2023", "Application ID": "391763-001", "Title of the Patent": "MACHINE LEARNING BASED HUMANOID DEVICE FOR OBJECT IDENTIFICATION", "Status": "Granted"},
            {"S.No": "7", "Affiliation": "MITS", "Academic Year": "2023", "Application ID": "392222-001", "Title of the Patent": "SOLAR POWERED GLASS CLEANING ROBOT", "Status": "Granted"},
            {"S.No": "8", "Affiliation": "MITS", "Academic Year": "2023", "Application ID": "389840-001", "Title of the Patent": "AN INTELLIGENCE SENSOR BASED BIODEGRADABLE WASTE COLLECTION UNIT", "Status": "Granted"},
            {"S.No": "9", "Affiliation": "MITS", "Academic Year": "2023", "Application ID": "389052-001", "Title of the Patent": "IOT BASED SOLAR POWERED AGRICULTURE ROBOT", "Status": "Granted"},
            {"S.No": "10", "Affiliation": "MITS", "Academic Year": "2023", "Application ID": "382160-001", "Title of the Patent": "MILK QUALITY ANALYSING DEVICE", "Status": "Granted"},
            {"S.No": "11", "Affiliation": "MITS", "Academic Year": "2023", "Application ID": "382157-001", "Title of the Patent": "AIR AND WATER QUALITY IDENTIFYING PEN", "Status": "Granted"},
            {"S.No": "12", "Affiliation": "MITS", "Academic Year": "2023", "Application ID": "381139-001", "Title of the Patent": "HYDROGEN FUEL BIKE", "Status": "Granted"},
            {"S.No": "13", "Affiliation": "MITS", "Academic Year": "2023", "Application ID": "381042-001", "Title of the Patent": "BATTERY PACK FOR ELECTRIC VEHICLE", "Status": "Granted"},
            {"S.No": "14", "Affiliation": "MITS", "Academic Year": "2023", "Application ID": "6275188 (United Kingdom)", "Title of the Patent": "AUTOMATED HEADLIGHT INTENSITY CONTROLLER FOR BIKE", "Status": "Granted"},
            {"S.No": "15", "Affiliation": "MITS", "Academic Year": "2022", "Application ID": "2022022211203800DE (Germany)", "Title of the Patent": "A CONSTRUCTION SITE SUPERVISION SYSTEM BASED ON INTERNET OF THINGS AND BLOCK CHAIN", "Status": "Granted"},
            {"S.No": "16", "Affiliation": "Others", "Academic Year": "2019", "Application ID": "201941042244", "Title of the Patent": "EDM ELECTROLYTE WITH BIODEGRABABLE OIL AND NANO PARTICLE FOR HASTE ALLOY", "Status": "Published"},
            {"S.No": "17", "Affiliation": "Others", "Academic Year": "2019", "Application ID": "201941026612", "Title of the Patent": "SMART BIO – TRANSESTERIFICATION PROCESS FOR BIODIESEL EXTRACTION", "Status": "Published"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Received “Best Teacher Award” from Madanapalle Institute of Technology & Science, Madanapalle for the academic year 2022-2023, April 2024.",
            "Received “Best Paper Award” from S.A. Engineering College, for publishing a research paper in Fuel-Elsevier Journal with Impact Factor: 5.05, March 2019.",
            "Received “Best Paper Award” from the International Conference on Automobile, Marine and Mechanical Engineering, ICAMME 2018, SVCE Chennai, May 2018.",
            "Received “Best Paper Award” from TRANSIST ONLINE for the paper submitted and presented in International Conference on Recent Innovations in Science and Technology, held on March 2017.",
            "Received “Best Teacher Award” from Rajadhani Institute of Engineering and Technology, Attingal during Teachers Day celebration, September 2016."
          ]
        }
      ]
    },

    "Dr. Arun Kumar.D": {
      name: "Dr. Arun Kumar.D",
      designation: "Asst. Professor",
      email: "drarunkumard@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/Dr. G. Arun Kumar.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Energy", "Branch": "Mechanical Engineering", "College Name/University": "PSG College of Technology/Anna University", "Year of Passing": "2021"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "Engineering Design", "Branch": "Mechanical Engineering", "College Name/University": "Adhiyamaan College of Engineering, Hosur", "Year of Passing": "2012"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Thanthai Periyar Govt Institute of Technology, Vellore", "Year of Passing": "2010"}
          ]
        },
        {
          title: "Research Areas",
          content: "Design of Cooling Systems, Energy Savings, Composite"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57415516400"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in//profile/273112"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=IDypDskAAAAJ&hl=en&oi=sra"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "6"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Energy, economic and mathematical modelling of a solar drying system with Lauric acid based latent heat storage unit: an experimental study", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "Development of Porous Biocarbon from Waste Wild Jack Husk for Enhanced EMI Shielding and Mechanical Performance in Wheat Straw Microfiber-Reinforced Vinyl Ester Composites", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "Drying kinetics, mathematical modelling and colour analysis of an indirect solar dryer with latent heat storage unit for cucumber drying", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "High-performance biocomposites: leveraging lotus fiber and waste Kigelia pinnata fruit shell biochar for enhanced mechanical and fire-retardant properties", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Application of potential green algal for power generation as a likely and fractional alternative", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Experimental Investigations of Flammability, Mechanical and Moisture Absorption Properties of Natural Flax/NanoSiO2 Based Hybrid Polypropylene Composites", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "8", "Details of Research Publication": "Investigation of mechanical and dynamic mechanical analysis of bamboo/olive tree leaves powder-based hybrid composites under cryogenic conditions", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "2", "Details of Research Publication": "Parametric study on four station ball mill for synthesis of ultrafine powders", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q3"},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "2", "Details of Research Publication": "Phase Change Material integrated in building wall for thermal management of buildings using design builder software", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "4", "Details of Research Publication": "Performance, emission characteristics of compressed ignition engine with alternative fuel.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q3"},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Experimental and Numerical analysis of soil to air heat exchanger system for domestic buildings", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Experimentally Investigation of Ground Coupled Heat Exchanger Coupled with Air Conditioning Machine for Southern India.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "13", "Publication Affiliation": "Others", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Investigation of heat transfer of wall with and without using phase change material", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q3"},
            {"S.No": "14", "Publication Affiliation": "Others", "Academic Year": "2019-20", "Author Position": "4", "Details of Research Publication": "Design and material characteristics of hybrid electric vehicle", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q3"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024-2025", "Application ID": "439577-001", "Title of the Project": "Viscous Flow Apparatus", "Status": "Published"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2023-2024", "Application ID": "377799-001", "Title of the Project": "Mechanical Stopper for Constrained Deflection", "Status": "Published"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2022-2023", "Application ID": "202341003891", "Title of the Project": "Blueprint of Green Sustainable and Clean Renewable Energy", "Status": "Published"},
            {"S.No": "4", "Affiliation": "MITS", "Academic Year": "2021-2022", "Application ID": "202241007991A", "Title of the Project": "Analysis of Integrated-Semi-transparent using Photovoltaic Thermal in an Uneven Span Greenhouse", "Status": "Published"}
          ]
        }
      ]
    },

    "Dr. Manish Sharma": {
        "name": "Dr. Manish Sharma",
        "email": "drmanishsharma@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/DR MANIS SHARAM.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Thermal Fluid",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Sardar Vallabhbhai National Institute of Technology, Surat",
                            "Year of Passing": "2021"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Hydro Power Engineering",
                            "Branch": "Hydro Power Engineering",
                            "College Name/University": "Maulana Azad National Institute of Technology, Bhopal",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Mechanical Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Government Engineering College, Bikaner",
                            "Year of Passing": "2011"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Turbomachines, CFD, Optimization, Thermal system design"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=57207149261",
                        "Vidwan: https://mits.irins.org/profile/590239",
                        "Google scholar: https://scholar.google.com/citations?user=X9Gfr18AAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 03"
                    ]
                },
                {
                    "title": "Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Comparative Design Analysis of Rotor and Stator Blades of Subsonic Axial Flow Compressors Using Radial Equilibrium and Fundamental Approach",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "8",
                            "Details of Research Publication": "Analysis of Interfacial Heat Transfer Coefficients in Squeeze Casting of AA6061 Aluminum Alloy with H13 Steel Die: Impact of Section Thickness on Thermal Behavior &rdquo; Thermal Science, 28 (1), pp. 223-232.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "A study of the effect of curvature and pressure gradient on aerodynamics performance and turbulent structure of S-shaped compressor transition duct. Australian Journal of Mechanical Engineering, 21(3), pp. 1-16.",
                            "Indexing": "ESCI/Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Influence of Mach number on the off-Design Performance of S-shaped compressor transition duct under the combined effect of curvature and pressure gradient. Australian Journal of Mechanical Engineering, 20(5), pp. 1-14.",
                            "Indexing": "ESCI/Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Design optimization of a compressor transition S-shaped duct using a teaching&ndash;learning-based optimization algorithm. Journal of the Brazilian Society of Mechanical Sciences and Engineering, 41(12), pp. 565.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Design optimization of S-shaped compressor transition duct using particle swarm optimization algorithm. SN Applied Sciences, 2(2), pp.1-17.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Review on Aerodynamics of Intermediate Compressor Duct,&rdquo; Journal of Mechanical Engineering and Sciences, 14(4), pp .7446-7468.",
                            "Indexing": "ESCI/Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Flow characteristic study of contraction of compressor intermediate S-shaped duct facility in Proceedings of the 1st International Conference on Applied Mechanical Engineering Research, May 2-4, 2019, NIT Warangal (India)",
                            "Indexing": "SCOPUS",
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
                            "Application ID": "437594-001",
                            "Title of the Patent": "AUTOMATED AGGREGATES IMPACT TESTING MACHINE",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "431535-001",
                            "Title of the Patent": "SOIL CORE SAMPLE COLLECTOR",
                            "Status": "Granted"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Recipient of Best Paper Award on 3rd International Conference on Sustainable Technologies and Advances in Automation, Aerospace and Robotics at VIT Bhopal in 2024.",
                        "Recipient of Elite-Silver Certificate for NPTEL Course on&ldquo;Accreditation and Outcome Based Learning&rdquo; conducted by IIT Kharagpur in 2024",
                        "Recipient of Elite Certificate for NPTEL Course on&ldquo;Fundamentals of Compressible Flow&rdquo; conducted by IIT Guwahati in 2024",
                        "Recipient of Elite-Silver Certificate for NPTEL Course on&ldquo; Aerodynamics design of axial flow compressor & Fans&rdquo; conducted by IIT Kharagpur in 2023",
                        "Recipient of Elite Certificate for NPTEL Course on&ldquo; Viscous Fluid Flow&rdquo; conducted by IIT Guwahati in 2023",
                        "Recipient of Ministry of Human Resource Development (MHRD) scholarship at NIT Surat",
                        "Recipient of Ministry of Human Resource Development (MHRD) scholarship at NIT Bhopal"
                    ]
                },
                {
                    "title": "My Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "\u201cReview on Aerodynamics of Intermediate Compressor Duct,\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Mechanical Engineering and Sciences, 14(4), pp .7446-7468."
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "\u201cDesign optimization of a compressor transition S-shaped duct using a teaching\u2013learning-based optimization algorithm,\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of the Brazilian Society of Mechanical Sciences and Engineering, 41(12), pp. 565."
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "\u201cDesign optimization of S-shaped compressor transition duct using particle swarm optimization algorithm,\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "SN Applied Sciences, 2(2), pp.1-17."
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "\u201cA study of the effect of curvature and pressure gradient on aerodynamics performance and turbulent structure of S-shaped compressor transition duct,\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "(Accepted, Thermophysics and Aeromechanics, Springer Publications,)"
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "\u201cInfluence of Mach number on the off-Design Performance of S-shaped compressor transition duct under the combined effect of curvature and pressure gradient\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "(Under Review)"
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "\u201cA Study of effect of swirl on the Computational Design Optimization of the S-shaped Compressor Transition Duct\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "(Under Review)"
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "\u201cAn Effective Prototype Design and Development of Robotic Gripper\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal for Research in Engineering Application & Management , 7 (11), pp. 71-77."
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "\u201cNumerical investigation of the effect of curvature on the flow in an intermediate compressor duct\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "In Proceedings of the 5th International conference on computational methods for thermal problems, 9-11 July, 2018, IISc Bangalore, India."
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "\u201cFlow characteristic study of contraction of compressor intermediate S-shaped duct facility\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "In Proceedings of the 1st International Conference on Applied Mechanical Engineering Research, May 2-4, 2019, NIT Warangal (India)"
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "Numerical simulation for effect of splitters on performance of elbow draft tube\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "In proceedings of the International Conference on Hydro power for Sustainable Developmen, February 05-07, 2015 Dehradun."
                        }
                    ]
                }
            ]
    },

    "Dr. Thrinadh Jadam": {
        "name": "Dr. Thrinadh Jadam",
        "email": "drthrinadhj@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/DR THRINADH JADAM.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Production Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "National Institute of Technology (NIT), Rourkela",
                            "Year of Passing": "2021"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Production Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "National Institute of Technology (NIT), Rourkela",
                            "Year of Passing": "2017"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Mechanical Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "RVR & JC College of Engineering, ANU",
                            "Year of Passing": "2013"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=57218384731",
                        "Vidwan: https://vidwan.inflibnet.ac.in/profile/579189",
                        "Google scholar: https://scholar.google.com/citations?user=jdOrULEAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 13"
                    ]
                },
                {
                    "title": "Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021 - 22",
                            "Author Position": "1",
                            "Details of Research Publication": "Electro-Discharge Machining (EDM) of Super Alloy Inconel 718 using Triangular Cross Sectioned Copper Tool Electrode: Emphasis on Topography and Metallurgical Characteristics of the EDMed Work Surface",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021 - 22",
                            "Author Position": "1",
                            "Details of Research Publication": "Influence of cutting tool material on machinability of Inconel 718 super alloy, Machining Science and Technology, an International Journal",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Wear morphology of microwave post-treated WC-Co tool during machining of Inconel 718 superalloy, International Conference and Exposition on Mechanical, Material and Manufacturing",
                            "Indexing": "Scopus",
                            "Publication": "Conf. Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Machinability of Ti-5Al-2.5Sn for Electro-Discharge Machining: An Experimental Investigation",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Studies on Chip Morphology and Modes of Tool Wear during Machining of Ti-6Al-4V using Uncoated Carbide Tool: Application of Multi- Walled Carbon Nano Tubes Added Rice Bran Oil as Nano cutting Fluid",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Machinability of Ti&ndash;6Al&ndash;4V Superalloy: Performance of Dry Cutting and Nanofluid MQL (MWCNT-Added Rice Bran Oil)",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Powder Mixed Electro- Discharge Machining Performance of Inconel 718: Effect of Concentration of Multi- Walled Carbon Nanotube Added to the Dielectric Media",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Machining Behavior of Inconel 718 Superalloy: Effects of Cutting Speed and Depth of Cut",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "EDM Performance of Inconel 718 Super Alloy: Application of Multi-Walled Carbon Nanotube (MWCNT) Added Dielectric Media",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019 -20",
                            "Author Position": "2",
                            "Details of Research Publication": "Assessment of surface integrity during electrical discharge machining of titanium grade 5 alloys (Ti-6Al-4V)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019 -20",
                            "Author Position": "2",
                            "Details of Research Publication": "Performance of dielectric media (conventional EDM oil and distilled water) during machining of Inconel 825 super alloy",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019 -20",
                            "Author Position": "1",
                            "Details of Research Publication": "Study of Surface Integrity and Machining Performance during Main/Rough cut and Trim/Finish Cut Mode of WEDM on Ti-6Al-4V: Effects of Wire Material",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019 -20",
                            "Author Position": "3",
                            "Details of Research Publication": "Electro-Discharge Machining Performance of Nimonic 80A: An Experimental Observation",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018 -19",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of using SiC Power Added Dielectric Media during Electro-Discharge Machining of Inconel 718 Super Alloys",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018 -19",
                            "Author Position": "1",
                            "Details of Research Publication": "Electro-Discharge Machining of Inconel 718 Using Square Cross Sectioned Copper Tool Electrode: Studies on Topography and Metallurgical Features of the EDMed Work Surface",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018 -19",
                            "Author Position": "2",
                            "Details of Research Publication": "Application of SiC Power Added in Kerosene Dielectric Media for Electro-Discharge Machining of Inconel 718 Super Alloys: Effects of Powder Concentration",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018 -19",
                            "Author Position": "3",
                            "Details of Research Publication": "Effects of Addition of Copper Powder in the Dielectric Media (EDM Oil) on Performance of Electro-Discharge Machining of Inconel 718 Super Alloys",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017 -18",
                            "Author Position": "1",
                            "Details of Research Publication": "Analysis on Topography and Metallurgical Aspects of EDMed Work Surface of Inconel 718 Obtained Using Triangular Cross Sectioned Copper Tool Electrode",
                            "Indexing": "ESCI",
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
                            "Title of the Paper": "Study of Surface Integrity and Machining Performance during Main/Rough cut and Trim/Finish Cut Mode of WEDM on Ti-6Al-4V: Effects of Wire Material,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of the Brazilian Society of Mechanical Sciences and Engineering, 41(3), 151, Springer. DOI: 10.1007/s40430-019-1656-4"
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "Machinability of Ti-5Al-2.5Sn for Electro-Discharge Machining: An Experimental Investigation,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Sadhana-Academy Proceedings in Engineering Sciences, 45(1), 1-26, Springer"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "Studies on Chip Morphology and Modes of Tool Wear during Machining of Ti-6Al-4V using Uncoated Carbide Tool: Application of Multi- Walled Carbon Nano Tubes Added Rice Bran Oil as Nanocutting Fluid,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Machining Science and Technology, an International Journal, 1-51, Taylor and Francis Group. DOI: 10.1080/10910344.2020.1815040."
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "Influence of cutting tool material on machinability of Inconel 718 superalloy,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Machining Science and Technology, an International Journal, 1-49, Taylor and Francis Group. DOI: 10.1080/10910344.2020.1815047"
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "EDM Performance of Inconel 718 Super Alloy: Application of Multi-Walled Carbon Nanotube (MWCNT) Added Dielectric Media,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of the Brazilian Society of Mechanical Sciences and Engineering, 41(8), 305, Springer. DOI: 10.1007/s40430-019-1813-9"
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "Electro-Discharge Machining (EDM) of Super Alloy Inconel 718 using Triangular Cross Sectioned Copper Tool Electrode: Emphasis on Topography and Metallurgical Characteristics of the EDMed Work Surface,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Proceedings of the National Academy of Sciences, India Section A: Physical Sciences, 1- 12, Springer. DOI: 10.1007/s40010-019-00642-3"
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "Effects of Machining Duration on Machinability of Ti-6Al-4V Superalloy using Uncoated Carbide Tool: Performance of Dry Cutting and Nanofluid MQL (MWCNT Added Rice Bran Oil),",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Arabian Journal for Science and Engineering, 1-23, Springer. DOI: 10.1007/s13369-020-04516-4"
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "Powder Mixed Electro-Discharge Machining Performance of Inconel 718: Effect of Concentration of Multi- Walled Carbon Nanotube Added to the Dielectric Media,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "S\u00e3dhan\u00e3-Academy Proceedings in Engineering Sciences 45(1), Springer. DOI: 10.1007/s12046-020-01378-2"
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "Parametric Effects on EDM Performance of Nimonic 80A,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Arabian Journal for Science and Engineering, 44(12): 10155\u201310167, Springer. DOI:10.1007/s13369-019-04112-1"
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "Effect of using SiC Power Added Dielectric Media during Electro-Discharge Machining of Inconel 718 Super Alloys,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of the Brazilian Society of Mechanical Sciences and Engineering, 40(7), 330, Springer. DOI: 10.1007/s40430-018-1257-7"
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "Electro-Discharge Machining of Inconel 718 Using Square Cross Sectioned Copper Tool Electrode: Studies on Topography and Metallurgical Features of the EDMed Work Surface,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Today: Proceedings, 5 (2018) 4847\u20134854."
                        },
                        {
                            "S.No": "12",
                            "Title of the Paper": "Application of SiC Power Added in Kerosene Dielectric Media for Electro-Discharge Machining of Inconel 718 Super Alloys: Effects of Powder Concentration,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Today: Proceedings, 5(9) Part 3: 20297\u201320305."
                        },
                        {
                            "S.No": "13",
                            "Title of the Paper": "Effects of Addition of Copper Powder in the Dielectric Media (EDM Oil) on Performance of Electro-Discharge Machining of Inconel 718 Super Alloys,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Today: Proceedings, 5(9) Part 3: 17618\u201317626."
                        },
                        {
                            "S.No": "14",
                            "Title of the Paper": "Assessment of surface integrity during electrical discharge machining of titanium grade 5 alloys (Ti-6Al-4V),",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Today: Proceedings, 18(Part 7): 2477\u20132485."
                        },
                        {
                            "S.No": "15",
                            "Title of the Paper": "Performance of dielectric media (conventional EDM oil and distilled water) during machining of Inconel 825 super alloy,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Today: Proceedings, 18(Part 7): 2679\u20132687."
                        },
                        {
                            "S.No": "16",
                            "Title of the Paper": "Machining Behavior of Inconel 718 Superalloy: Effects of Cutting Speed and Depth of Cut,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Today: Proceedings. (Published online) https://doi.org/10.1016/j.matpr.2019.10.128"
                        },
                        {
                            "S.No": "17",
                            "Title of the Paper": "Analysis on Topography and Metallurgical Aspects of EDMed Work Surface of Inconel 718 Obtained Using Triangular Cross Sectioned Copper Tool Electrode,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "IEEE International Conference on Management Systems (AMIAMS-2017) during 3-5 February, 2017, organized by Department of Mechanical Engineering, Motilal Nehru National Institute of Technology, Allahabad, UP- 211004."
                        },
                        {
                            "S.No": "18",
                            "Title of the Paper": "Electro-Discharge Machining of Inconel 718 Using Square Cross Sectioned Copper Tool Electrode: Studies on Topography and Metallurgical Features of the EDMed Work Surface,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "7th International Conference on Materials Processing and Characterization, 17-19 March 2017, GRIET, Hyderabad. (ID No 1110)"
                        },
                        {
                            "S.No": "19",
                            "Title of the Paper": "Characteristics of EDMED work surfaces of 304SS, Inconel 601 and Titanium alloy Ti-6Al-4V,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "1st International Conference on Mechanical Engineering (INCOM 2018), January 4-6, 2018, organized by Department of Mechanical Engineering, Jadavpur University, Kolkata 700032."
                        },
                        {
                            "S.No": "20",
                            "Title of the Paper": "Application of SiC Power Added in Kerosene Dielectric Media for Electro-Discharge Machining of Inconel 718 Super Alloys: Effects of Powder Concentration,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Materials Processing and Characterization (ICMPC 2018), organized by the Gokaraju Rangaraju Institute of Engineering and Technology, March 16-18, 2018, Hyderabad."
                        },
                        {
                            "S.No": "21",
                            "Title of the Paper": "Effects of Addition of Copper Powder in the Dielectric Media (EDM Oil) on Performance of Electro-Discharge Machining of Inconel 718 Super Alloys,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Materials Processing and Characterization (ICMPC 2018), organized by the Gokaraju Rangaraju Institute of Engineering and Technology, March 16-18, 2018, Hyderabad."
                        },
                        {
                            "S.No": "22",
                            "Title of the Paper": "Assessment of surface integrity during electrical discharge machining of titanium grade 5 alloys (Ti-6Al- 4V),",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "9th International Conference on Materials Processing and Characterization, 8-10 March 2019, GRIET, Hyderabad, Telangana 500090."
                        },
                        {
                            "S.No": "23",
                            "Title of the Paper": "Performance of dielectric media (conventional EDM oil and distilled water) during machining of Inconel 825 super alloy,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "9th International Conference on Materials Processing and Characterization, 8-10 March 2019, GRIET, Hyderabad, Telangana 500090."
                        },
                        {
                            "S.No": "24",
                            "Title of the Paper": "Machining Behavior of Inconel 718 Superalloy: Effects of Cutting Speed and Depth of Cut,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Proceedings of 10th International Conference on Materials Processing and Characterization, 21-23 February 2020, GLA University, Mathura- 28406(UP)."
                        },
                        {
                            "S.No": "25",
                            "Title of the Paper": "Wear morphology of microwave post-treated WC-Co tool during machining of Inconel 718 superalloy,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference and Exposition on Mechanical, Material and Manufacturing Technology (ICE3MT2020), CVR College of Engineering, Hyderabad, during June 12-13, 2020. Materials Today: Proceedings, 38, 2133-2139."
                        }
                    ]
                },
                {
                    "title": "Book Chapters",
                    "content": "Thrinadh Jadam, Deepankar Panda, Suman Chatterjee, Saurav Datta, Santosh Kumar Sahoo, Subash Chandra Mishra, Performance of Microwave Irradiated WC-Co Insert during Dry Machining of Inconel 718 Superalloys, Book Chapter in: Sustainable Manufacturing and Design, (pp. 103-132). Woodhead Publishing."
                }
            ]
    },

    "Dr. Thota S S Bhaskara Rao": {
        "name": "Dr. Thota S S Bhaskara Rao",
        "email": "drbhaskararaotss@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/THOTA SS BHASKARARA RAO.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Solar Thermal Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "National Institute of Technology, Rourkela",
                            "Year of Passing": "2023"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Thermal Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Gokul Group of Institutions, JNTU Kakinada",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Mechanical Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Kakinada Institute of Technology and Sciences, JNTU Kakinada",
                            "Year of Passing": "2013"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Solar Thermal Engineering, Energy Storage, Solar Drying, Evacuated Tube Solar Collectors"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=57224955076",
                        "Vidwan: https://vidwan.inflibnet.ac.in/profile/445180",
                        "Google scholar: https://scholar.google.com/citations?user=1FGvG0YAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 06"
                    ]
                },
                {
                    "title": "Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026-27",
                            "Author Position": "4",
                            "Details of Research Publication": "Performance enhancement of hybrid shake table via passive load balancing and nonlinear system identification using coupled ODE modelling. https://doi.org/10.1038/s41598-026-62901-9",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026-27",
                            "Author Position": "6",
                            "Details of Research Publication": "Machine learning assisted spectroscopic investigation of fluorescence quenching in Hypocrellin B with magnetic nanoparticles. https://doi.org/10.1038/s41598-026-61160-y",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "6",
                            "Details of Research Publication": "Experimental Emulation of Charge Air Cooler Temperature and Pressure on an Engine Dynamometer for Air&ndash;Fuel Ratio Optimization and Pulsation Reduction. https://doi.org/10.1038/s41598-026-53715-w",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Recent updates in digital twin driven smart energy systems for intelligent grid integration. https://doi.org/10.1007/s42452-026-08720-z",
                            "Indexing": "SCOPUS",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "6",
                            "Details of Research Publication": "Laser surface melting of Bamboo Leaf Ash reinforced Al-SiC hybrid composites: A sustainable approach to improved wear and corrosion performance. https://doi.org/10.1080/15440478.2026.2657129",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "Development and optimization of a female-specific Biomechanical model for biodynamic response analysis: a comparison with male biomechanical models. https://doi.org/10.1038/s41598-026-36165-2",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Sustainable Gossypium arboreum biodiesel production using an industrial waste heterogeneous catalyst for RCCI engine applications. https://doi.org/10.1038/s41598-025-21878-7",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "Optimized multi-body modelling of automobile drivers for analysing biodynamic responses and ride comfort under whole-body vibration. https://doi.org/10.1177/09544070251384691",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "5",
                            "Details of Research Publication": "Multimodal fusion of ultrasound images using HXM net for breast cancer diagnosis. https://doi.org/10.1038/s41598-025-23912-0",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Advanced prediction and optimization of VCR engine characteristics using response surface methodology with DFA for sustainable biofuel derived from waste lemon peel. https://doi.org/10.1038/s41598-025-20103-9 .",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Sustainable, Synthesis and Advanced Optimization of Prosopis Juliflora Biomass Catalyst for Efficient Biodiesel Production and Environmental Impact Assessment. https://doi.org/10.1038/s41598-025-88355-z",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Optimization of cashew nut shell biodiesel production with industrial waste catalysts and butanol additives for ecofriendly CRDI engine applications. https://doi.org/10.1038/s41598-025-93805-9",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Performance investigation of drying Ashwagandha roots in a forced convection-evacuated tube indirect solar dryer. https://doi:10.1177/09544089231215949",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Experimental investigation of drying neem (Azadirachta indica) in an evacuated tube solar dryer: Performance, drying kinetics and characterization. https://doi.org/10.1016/j.solener.2023.02.031",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Assessment of energy, exergy, environmental, and economic study of an evacuated tube solar dryer for drying Krishna Tulsi. https://doi.org/10.1007/s11356-023-27085-z",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Energetic and exergetic performance of an evacuated tube U-type solar collector for medium temperature industrial process air heating: An experimental study https://doi.org/10.1007/978-981-99-7047-6_3",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Solar drying of medicinal herbs: A review https://doi.org/10.1016/j.solener.2021.05.065",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "Performance Enhance-ment and Exergy Analysis of Thermosyphon ETSC with TiO2 + CuO Hybrid Nanofluid. https://doi.org/10.1007/978-981-16-4489-4_6",
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
                            "Application ID": "444896-001",
                            "Title of the Patent": "Battery Operated Banana Stem Peeling Machine",
                            "Status": "Filed"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "Best paper award for the paper titled &ldquo;Bird Species Classification Using Convolutional Neural Networks and Data Augmentation&rdquo; in the International conference on Interactive Design And Digital Manufacturing (ICIDDM 2K25)."
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "Assessment of energy, exergy, environmental, and economic study of an evacuated tube solar dryer for drying Krishna Tulsi.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Environmental Science and Pollution Research, Springer Nature, April 2023. https://doi.org/10.1007/s11356-023-27085-z (Q1, SCIE, Impact factor: 5.8)"
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "Experimental investigation of drying neem (Azadirachta indica) in an evacuated tube solar dryer: Performance, drying kinetics and characterization.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Solar Energy, Elsevier 2023 March 15:253:270-284. https://doi.org/10.1016/j.solener.2023.02.031 (Q1, SCIE, Impact factor: 6.7)"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "Solar drying of medicinal herbs: A review.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Solar Energy, Elsevier 2021 Jul 15;223:415-36. https://doi.org/10.1016/j.solener.2021.05.065 (Q1, SCIE, Impact factor: 6.7)"
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "Performance investigation of drying Ashwagandha roots in a forced convection-evacuated tube indirect solar dryer.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Proceedings of the Institution of Mechanical Engineers, Part E: Journal of Process Mechanical Engineering. 2023;0(0). Sage Publications https://doi:10.1177/09544089231215949 (Q3, SCIE, Impact factor: 2.4)"
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "Effect of color change and characterization of the Krishna tulsi leaves dried in a solar dryer",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "[11th Asia-Pacific Drying Conference (ADC), Feb 18-19, 2023, Kolkata, West Bengal, India]."
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "Energetic and exergetic performance of an evacuated tube U-type solar collector for medium temperature industrial process air heating: An experimental study",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "[9th International and 49th National conference on Fluid Mechanics and Fluid Power (FMFP), December 14-16, 2022, IIT Roorkee, Roorkee, 247664, Uttarakhand, India]."
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "Performance Enhance- ment and Exergy Analysis of Thermosyphon ETSC with TiO2 + CuO Hybrid Nanofluid,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Innovations in Thermo-Fluid and Engineering Sciences (ICITFES-2020, February 10-12 at NIT Rourkela]."
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "Innovations in Energy, Power and Thermal Engineering",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Lecture Notes in Mechanical Engineering, Springer Nature, Singapore (Pages: 53-59), 2021. https://doi.org/10.1007/978-981-16-4489-4_6"
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "Application of Metal Spraying in Decoration, Electrical and Other Engineering Industries",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Contemporary Design and Analysis of Manufacturing and Industrial Engineering Systems (CDAMIES-2018), organized by Department of Production Engineering, at NIT Trichy during 18th - 20th January 2018."
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "Mitigation of CO2 using solar dryers for environmental sustainability over conventional dryers.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference on Waste to Energy, Carbon Capture, Utilization and Storage (NCWECCUS-2023), organized by Department of Mechanical Engineering, NIT Rourkela during 22-24 December 2023."
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "Heat dissipation investigation of grooved heat pipe.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Innovative Technology and Research. 5-2017, 6477-6485."
                        },
                        {
                            "S.No": "12",
                            "Title of the Paper": "CFD analysis on pulsating heat pipe to improve heat transfer",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Research and Innovation in Thermal Engineering, 3-2016, 107-111."
                        }
                    ]
                },
                {
                    "title": "Book Chapter",
                    "content": "Thota S S Bhaskara Rao, Murugan S. Solar Thermal Energy for Industrial Process Heating Applications, Chapter-4: Medicinal/Pharmaceutical Industries, in CRC Press, Taylor and Francis group (Pages: 99-199), 2023. https://doi.org/10.1201/9781003263326"
                },
                {
                    "title": "Conferences, Seminars & Workshops attended",
                    "content": "Participated AICTE Sponsored ATAL FDP on \"AI & ML Empowerment in Energy Storage and Advanced Robotics\u201d was organized by Department of Mechanical Engineering held at Aditya University from 09.12.2024 to 14.12.2024."
                }
            ]
    },

    "Dr. G. Veeresalingam": {
        "name": "Dr. G. Veeresalingam",
        "designation": "Asst. Professor",
        "email": "drveeresalingamg@mits.ac.in",
        "officeAddress": "East Block",
        "image": "https://mits.ac.in/public/uploads/faculty/Veeresalingam.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Industrial Design",
                            "Branch": "Industrial Design",
                            "College Name/University": "National Institute of Technology, Rourkela",
                            "Year of Passing": "2023"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Machine Design",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Indian Institute of Technology, Roorkee",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Mechanical Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Pragati Engineering College, Surampalem",
                            "Year of Passing": "2011"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Whole Body Vibration, Ergonomics, Biomechanics, Robotics, Artificial Intelligence, Machine Learning."
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=57192106625",
                        "Vidwan: https://vidwan.inflibnet.ac.in/profile/561494",
                        "Google scholar: https://scholar.google.com/citations?hl=en&user=iv_nztIAAAAJ",
                        "h-Index (As per Scopus Data) : 04"
                    ]
                },
                {
                    "title": "Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Optimized Multi-Body Modelling of Automobile Drivers for Analysing Biodynamic Responses and Ride Comfort under Whole-Body Vibration",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "Multimodal Fusion of Ultrasound Images Using HXM Net for Breast Cancer Diagnosis",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "Development of an Interface to Identify the Unregistered Boarders Accessing Hostel Amenities",
                            "Indexing": "SCOPUS",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Advanced chatter detection in internal turning for industry 4.0: Adaptive Threshold Wavelet De-noising with enhanced ICEEMDAN&ndash;Hilbert fusion using Adaptive Probabilistic Neural Network",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "A state-of-the-art review on biomechanical models and biodynamic responses",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Ride comfort and segmental vibration transmissibility analysis of an automobile passenger model under whole body vibration",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Multi-body modelling and ride comfort analysis of a seated occupant under whole-body vibration",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Development and analysis of a novel biomechanical model for seated occupants",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "An improved biomechanical model to optimize biodynamic responses under vibrating medium",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Analysis of segmental vibration transmissibility of seated human",
                            "Indexing": "SCOPUS",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Development of novel biodynamic model of the seated occupants",
                            "Indexing": "SCOPUS",
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
                            "Academic Year": "2021-22",
                            "Application ID": "202131009459",
                            "Title of the Patent": "Method and apparatus for continuous electric power generation using compressed air",
                            "Status": "Under Examination"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Application ID": "202211018418",
                            "Title of the Patent": "Non-Thermal Plasma Reactor Suitable for Real-Time Diesel Exhaust Treatment at High Flow Rates",
                            "Status": "Filed"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Application ID": "371217 - 001",
                            "Title of the Patent": "Hassle free-swing hook",
                            "Status": "Granted"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "Secured All India Rank 677 with a GATE score of 635 and an estimated 99.17 percentile among 81,175 candidates in the GATE 2011 examination, scoring 60.67 marks out of 100."
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "An improved biomechanical model to optimize biodynamic responses under vibrating medium.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Vibration Engineering & Technologies, 9(4), pp.675-685. (SCIE, IF:1.89)"
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "Development and analysis of a novel biomechanical model for seated occupants.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Proceedings of the Institution of Mechanical Engineers, Part D: Journal of Automobile Engineering, p.09544070211039821. (SCIE, IF: 1.48)"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "Multi-body modelling and ride comfort analysis of a seated occupant under whole-body vibration.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Vibration and Control. (SCIE, IF: 3.095)"
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "Ride comfort and segmental vibration transmissibility analysis of an automobile passenger model under whole body vibration.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Scientific Reports. (SCIE, IF: 4.996) https://doi.org/10.21203/rs.3.rs-2930805/v1"
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "A State-of-the-art Review on Biomechanical Models and Biodynamic Responses",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Ergonomics, doi: 10.1080/00140139.2023.2288544 (SCIE, IF: 2.9)"
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "Development of Novel Biodynamic Model of the Seated Occupants.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "In International Conference on Research into Design (pp. 51-57). Springer, Singapore."
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "Analysis of Segmental Vibration Transmissibility of Seated Human.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "3rd Innovative Product Design and Intelligent Manufacturing Systesms. DOI : 10.1007/978-981-19-0296-3"
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "Study of vibration dose value and discomfort due to whole body vibration exposure for a two wheeler drive.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "In Proceedings of the 1st International and 16th National Conference on Machines and Mechanisms (iNaCoMM2013) (pp. 947-952)"
                        }
                    ]
                },
                {
                    "title": "Conferences, Seminars & Workshops attended",
                    "content": [
                        "Participated in Faculty Research Program on \"Automation and Robotics for Adaptive Industrial Systems\" \u200bat Department of Mechanical Engineering, NIT Patna from 07.08.2025 to 09.08.2025.",
                        "Participated in Faculty Development Program on \"Cognitive Engineering and Human Factors\" at NIT Rourkela from 04.08.2025 to 06.08.2025"
                    ]
                }
            ]
    },

    "Dr. Jagannath Pattar": {
      name: "Dr. Jagannath Pattar",
      designation: "Asst. Professor",
      email: "jagannathp@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/Jagannath Pattar.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Material Science & Tribology", "Branch": "Mechanical Engineering", "College Name/University": "Sri Siddhartha Academy of Higher Education, Tumkur", "Year of Passing": "2024"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "Product Design and Manufacturing", "Branch": "Mechanical Engineering", "College Name/University": "Sri Siddhartha Academy of Higher Education, Tumkur", "Year of Passing": "2015"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "K.V.G College Of Engineering, VTU University, Belgaum", "Year of Passing": "2013"}
          ]
        },
        {
          title: "Research Areas",
          content: "Metal Matrix Composites, Additive Manufacturing, Tribology"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=58297590600"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/460883"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=GrQ00u0AAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "1"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025–26", "Author Position": "1", "Details of Research Publication": "Multifunctional Epoxy Composites with Nutmeg Fiber and Banana Peel Carbon Quantum Dots for EMI Shielding", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024–25", "Author Position": "1", "Details of Research Publication": "Influence of Hybrid Fiber Reinforcement on the Interfacial Bonding and Fracture Toughness of Epoxy-Based Polymer Composites Under Cyclic Loading", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2024–25", "Author Position": "1", "Details of Research Publication": "The Design and Development of a Four-Way Hacksaw Machine: A Design Thinking Approach", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "Q3"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2024–25", "Author Position": "1", "Details of Research Publication": "Investigation of AA6063-Based Metal Matrix Composite Reinforced with TiO₂ Dispersoids for Its Mechanical, Tribological, and Microstructural Characteristics through Digitally Assisted Techniques", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Study of the Mechanical Properties of Composite Materials AA6063 Reinforced with B4C & TiO₂ for Engineering Application", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "2", "Details of Research Publication": "Micro grids with Day-Ahead Energy Forecasting for Efficient Energy Management in Smart Grids: Hybrid CS-RERNN", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Investigating the Multifaceted Applications of Nanotechnology in Wireless Sensor Networks for Environmental Monitoring: Advancing Monitoring Capabilities for a Sustainable Future", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q4"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "A Study of Density Calculation for Composite Materials Aluminum Alloy 6063 Reinforced with TiO₂ and B₄C Hybrid MMCs", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "Design, Fabrication and Testing of Automatic Side Stand Retrieval System Using Electronic Components", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Study on Fatigue Possessions of Glass Epoxy Composite Laminate", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2018-19", "Author Position": "1", "Details of Research Publication": "Study on Behavior of Ilmenite as Reinforcing Element on Properties of Al2014 Based MMC by Stir Casting Method", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2015-16", "Author Position": "1", "Details of Research Publication": "Design and Fabrication of Environmental Friendly Areca Nut Collecting and Bagging Agri-Machine", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2022–23", "Application ID": "382628-001", "Title of the Patent": "Automated Joint Pain Relief Chair", "Status": "Granted"}
          ]
        }
      ]
    },

    "Dr. Ved Prakash": {
        "name": "Dr. Ved Prakash",
        "designation": "Asst. Professor",
        "email": "drvedprakash@mits.ac.in",
        "officeAddress": "East Block",
        "image": "https://mits.ac.in/public/uploads/faculty/DR VED PRAKSASH.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Design",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "National Institute of Technology, Rourkela",
                            "Year of Passing": "2024"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Mechanical Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "National Institute of Technology, Rourkela",
                            "Year of Passing": "2018"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Mechanical Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "R.G.P.V, Bhopal",
                            "Year of Passing": "2010"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=57219024696",
                        "Vidwan: https://vidwan.inflibnet.ac.in/profile/561578",
                        "Google scholar: https://scholar.google.com/citations?user=We3srvMAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 7"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Evaluation of dry sliding wear behavior of abaca/glass fiber hybrid composite for tribological applications",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "The Role of Impingement Angle and Velocity on the Solid Particle Erosion Behavior of Agave Lechuguilla Fiber-Reinforced Polymer Composite",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of Drying Route and Sintering Temperature on Zirconia Nanoparticle Synthesis for Filler Application in Polymer Composites",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "3",
                            "Details of Research Publication": "Influence of alkali treatment on the interfacial shear strength of Agave lechuguilla fiber and its significance as a reinforcing material in polymer composites for mechanical applications",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of stacking sequence on abrasive wear behavior of abaca natural fiber reinforced polymer composites hybridized with glass fiber",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "3",
                            "Details of Research Publication": "Influence of fiber surface modification on impact strength behaviour of Agave Lechuguilla fiber reinforced polymer composites",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "Influence of Chemical Modification on Structural, Morphological, Thermal, and Weathering Behavior of Eulaliopsis Binata Fiber and Its Composites",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "Bio waste (Pistacia vera nut shell) filled polymer composites for tribological applications.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "Dry Sliding Wear Behaviour of Epoxy/Biochar Composites.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "Effect of weathering on physical and mechanical characteristics of eulaliopsis binata fiber/epoxy composites",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "3",
                            "Details of Research Publication": "Abrasive Wear Behavior of Bio-Fiber-Reinforced Epoxy Composite with Taguchi Approach.",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Tribological behavior of Syngonanthus nitens natural fiber reinforced epoxy composite.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "2",
                            "Details of Research Publication": "Erosion wear behaviour of A357/fly ash composites. Proceedings of the Institution of Mechanical Engineers",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "2",
                            "Details of Research Publication": "Effect of Heat Treatment on Wear Behavior of A357/Cenosphere Composites. Transactions of the Indian Institute of Metals",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "2",
                            "Details of Research Publication": "Modelling and parametric analysis of erosion wear response of Eulaliopsis Binata fiber polymer composites using response surface methodology",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "3",
                            "Details of Research Publication": "Mechanical, morphological, and tribological behavior of Eulaliopsis binata fiber epoxy composites.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "3",
                            "Details of Research Publication": "Effect of stacking sequence on the tribological behaviour of jute-glass hybrid epoxy composite",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Potential of Syngonanthus nitens fiber as a reinforcement in epoxy composite and its mechanical characterization.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Mechanical and erosive wear behavior of rubber wood particulate reinforced epoxy composite",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "3",
                            "Details of Research Publication": "Moisture absorption and thickness swelling behaviour of luffa fibre/epoxy composite",
                            "Indexing": "SCIE",
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
                            "Application ID": "446255-001",
                            "Title of the Patent": "Pin-on-Disk Tester with Integrated Motion Mechanism",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "464951-001",
                            "Title of the Patent": "Power Line Inspection Robot",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "411602-001",
                            "Title of the Patent": "Solid Lubricate Bearing",
                            "Status": "Granted"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Best paper award in &ldquo;4th International conference on processing and characterization of material (ICPCM 2022)&rdquo;. NIT Rourkela, Odisha, 09 &ndash; 11 Dec. 2022.",
                        "Best poster award in &ldquo;3rd International Conference on Processing and Characterization of Materials (ICPCM 2021)&rdquo;. NIT Rourkela, Odisha, 7 &ndash; 8 Dec. 2021."
                    ]
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "\u201cAn investigation on stabilisation and phase transformation characteristics of Cu-Al-Be shape-memory alloys quenched in different media\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Advances in Materials Processing and Technologies, https://doi.org/10.1080/2374068X.2024.2402975, Indexing/ Publisher : ESCI, WoS Taylor & Francis, 2024"
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "\u201cEffect of Quenchant on the Phase Transformation of Cu\u2013 Al\u2013Be\u2013B Shape Memory Alloys\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Transactions of Indian Institute of Metals, 1-9. https://doi.org/10.1007/s12666- 023-02939-9, IIndexing/ Publisher : SCIE Springer. 2023, Impact Factor 1.6"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "\u201cEffect of in-situ reaction time on the strength of AA5052/ZrAl3 metal matrix nano composites\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Advances in Materials Processing and Technologies, 1-12. https://doi.org/10.1080/2374068X.2022.2091188, Indexing/ Publisher : ESCI, WoS Taylor & Francis, 2022"
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "\u201cEffect of Cerium and Aluminium on the phase stability and properties of polycrystalline Cu-Al-Be shape memory alloys\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Characterization, 183, 111590. https://doi.org/10.1016/j.matchar.2021.111590, Indexing/ Publisher : SCIE Elsevier 2022, Impact Factor 4.7"
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "\u201cEffect of manganese and homogenization on the phase stability and properties of Cu\u2013Al\u2013Be shape memory alloys\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Materials Research & Technology,14, 1551 -1558. https://doi.org/10.1016/j.jmrt.2021.07.027, Indexing/ Publisher : SCIE Elsevier 2021, Impact Factor 6.4"
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "\u201cAn investigation on the properties of boron modified Cu- Al-Be polycrystalline shape memory alloys,\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Alloys and Compounds. 823, 153733. https://doi.org/10.1016/j.jallcom.2020.153733, Indexing/ Publisher : SCIE Elsevier 2020, Impact Factor 6.2"
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "\u201cEffect of zirconium on the properties of polycrystalline Cu-Al-Be shape memory alloy,\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Science and Engineering A.755, 211\u2013219. https://doi.org/10.1016/j.msea.2019.04.022, Indexing/ Publisher : SCIE Elsevier 2019, Impact Factor 6.4"
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "\u201cInfluence of Gd on the microstructure, mechanical and shape memory properties of Cu-Al-Be polycrystalline shape memory alloy,\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Materials Science and Engineering A. 737, 245\u2013252. https://doi.org/10.1016/j.msea.2018.09.064, Indexing/ Publisher : SCIE Elsevier 2018, Impact Factor 6.4"
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "A Comparative Study on Analytical and Experimental Buckling Stability of Metal Matrix Composite Columns with Fixed & Hinged Ends,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Int. J. Appl. Eng. Res. 9,191\u2013 196. Indexing/Publisher : Scopus 2014"
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "A Review on Processing of Particulate Metal Matrix Composites and its Properties,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Int. J. Appl. Eng. Res. 8 647\u2013666. https://dx.doi.org/10.37622/IJAER/8.6.2013.647-666, Indexing/ Publisher : Scopus 2013"
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "Role of alloying additions on phase transformations, mechanical and pseudoelastic behavior of Cu-Al-Be shape memory alloys,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Mater. Today Proc. (2022). (Scopus) https://doi.org/10.1016/j.matpr.2021.12.092"
                        },
                        {
                            "S.No": "12",
                            "Title of the Paper": "\u201cOptimization of Influential Parameters on Mechanical behaviour of AlMg1 SiCu Hybrid Metal Matrix Composites using Taguchi integrated Fuzzy Approach\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Mater. Today Proc. 2 (2015) 1464\u20131468. (Scopus) https://doi:10.1016/j.matpr.2015.07.071"
                        },
                        {
                            "S.No": "13",
                            "Title of the Paper": "Prediction of wear behaviour of almg1sicu hybrid MMC using taguchi with grey rational analysis",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Procedia Engineering, 97 (2014),555-562. (Scopus) https://doi.org/10.1016/j.proeng.2014.12.283"
                        }
                    ]
                },
                {
                    "title": "Book Chapters",
                    "content": "Bera T, Mohapatra L, Prakash V, Acharya SK. Abrasive Wear Behavior of Bio-Fiber-Reinforced Epoxy Composite with Taguchi Approach. In Recent Trends in Design, Materials and Manufacturing: Selected Proceedings of ICRADMM 2020 2022 Apr 29 (pp. 545-554). Singapore: Springer Nature Singapore."
                }
            ]
    },

    "Dr. Gejendhiran. S": {
      name: "Dr. Gejendhiran. S",
      designation: "Asst. Professor",
      email: "gejendhirans@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/Gejendhiran.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "National Institute of Technology, Puducherry", "Year of Passing": "2024"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "Engineering Design", "Branch": "Mechanical Engineering", "College Name/University": "Kongu Engineering College, Anna University", "Year of Passing": "2014"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Anna University, Coimbatore", "Year of Passing": "2011"}
          ]
        },
        {
          title: "Research Areas",
          content: "Surface Coatings, Additive Manufacturing, Welding"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=56287939500"},
            {"Identifier": "Vidwan", "Link": "https://mits.irins.org/profile/387663"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.co.in/citations?hl=en&user=s1c_8bQAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "04"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Experimental studies on dilution, microstructural, mechanical and wear characteristics of Inconel 718 deposited over stainless steel 304 employing cold metal transfer process.\" Materials Letters (2024): 137795.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "2", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "“Effect of cold metal transfer process on hardfacing of Inconel 718 over stainless steel 304.\" Materials Letters (2024): 137030.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Experimental investigations on Inconel 718 hard-faced layer deposited over SS304 using cold metal transfer.\" Surface and Coatings Technology (2023): 129739.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Experimental study on mechanical, damping and corrosion properties of Inconel 718 hard-faced stainless steel 304 using cold metal transfer. Engineering Failure Analysis (2023): 107871.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "4", "Details of Research Publication": "Mechanical and Tribology Behavior of Hard-Faced Inconel 718 on Stainless Steel 321. Surface Review and Letters (2023): 2450025.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "2", "Details of Research Publication": "Dissimilar Welding of Nickel-Based Superalloy-A Review. Advances in Science and Technology 130 (2023): 3-11.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Disruptive Technologies - A promising key for Sustainable Future Education”. Procedia Computer Science (Elsevier). 2020.", "Indexing": "SCOPUS", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "“Process Parameters Optimization for Improving the Mechanical Properties of IS2062 Mild steel Weldments by GMAW”. International Journal of Innovative Technology and Exploring Engineering (IJITEE). Vol. 8 pp.1144-1149.", "Indexing": "SCOPUS", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2014 -15", "Author Position": "2", "Details of Research Publication": "Comparative investigation of mechanical properties in GMAW/ GTAW for various shielding gas composition. Materials and Manufacturing Processes, Taylor & Francis.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024 - 2025", "Application ID": "202541074623", "Title of the Patent": "An Oral Care Hygiene System", "Status": "Published"}
          ]
        },
        {
          title: "Consultancy",
          content: [
            {"S.No": "1", "Affiliation": "Others", "Academic Year": "2017", "Client/Organization": "Subavalar Industries", "Project": "5S implementation", "Amount": "3,000"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Received Innovative Professional Award from Society of Professional Engineers.",
            "Received Best Faculty Award from Top Engineers, Chennai.",
            "Received Best Proctor Award from Nandha Engineering College.",
            "Awarded as Top Performing Mentor from Swayam – NPTEL."
          ]
        }
      ]
    },

    "Dr. Muthu Lakshmanan": {
      name: "Dr. Muthu Lakshmanan",
      designation: "Asst. Professor",
      email: "muthulakshmanan@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/Muthu Laxmanan.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Design", "Branch": "Mechanical Engineering", "College Name/University": "SIMATS University, Chennai", "Year of Passing": "2025"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "Mechanical", "Branch": "Mechanical Engineering", "College Name/University": "Anna University, Chennai", "Year of Passing": "2011"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "Mechanical", "Branch": "Mechanical Engineering", "College Name/University": "Madurai Kamaraj University, Chennai", "Year of Passing": "2003"}
          ]
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57200605528"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/460993/NDYwOTkz"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?hl=en&authuser=2&user=VxAgjdoAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "03"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "4", "Details of Research Publication": "Analysis of Characteristics of PCM Inside Altered Design of Shell and Tube Thermal Energy Storage Unit. International Journal of Vehicle Structures & Systems, Vol. 17 No. 1 (2025)", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "6", "Details of Research Publication": "Analysis of Thermal Heat Transfer Systems Integrated with Foam of Polystyrene into Phase Change Materials. International Journal of Vehicle Structures & Systems, 12(1), 234-240 ISSN: 0975-3060 (Print), 0975-3540.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "4", "Details of Research Publication": "Mechanical, wear, hydrophobic, and thermal behavior of waste cassava root cellulose and twill- weaved banana fiber-reinforced unsaturated polyester composites DOI: 10.1007/s13399-024-05349-z", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "An investigation into cut surface quality of Al6061/Al2O3 /B4C composite using hydro-abrasive machining process. DOI: 10.1063/5.0192582.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q3"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "3", "Details of Research Publication": "Wear behavior of heat treated, and chromium nitride coated 316L SS steel against steel ball in wet condition, AIP Conference Proceedings 2747, 020012 (2023)", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q4"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "3", "Details of Research Publication": "Tribological investigation of shot peened NiP-CN electroless coating on EN31 steel.  AIP Conference Proceedings 2747, 020021 (2023)", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q4"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Grey Incidence Method on Abrasive Water Jet Machining of Al7075/Al2O3 Composite. ARPN Journal of Engineering and Applied Sciences, Vol. 17, No. 11, June 2022, ISSN 1819-6608.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "Others", "Academic Year": "2021", "Application ID": "20194104289A", "Title of the Patent": "Performance Analysis of Four Stroke SI Engine Using Distilled Water", "Status": "Granted"}
          ]
        }
      ]
    },

    "Dr. A. Pruthvi Deep": {
        "name": "Dr. A. Pruthvi Deep",
        "designation": "Asst. Professor",
        "email": "pruthvideepa@mits.ac.in",
        "officeAddress": "East Block",
        "image": "https://mits.ac.in/public/uploads/faculty/DR A PRUTVI DEEP.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Mechanical Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "National Institute of Technology, Durgapur",
                            "Year of Passing": "2025"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Refrigeration & Air Conditioning",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "JNTU Anantapuramu",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Mechatronics",
                            "Branch": "Mechatronics",
                            "College Name/University": "SASTRA University, Thanjavur",
                            "Year of Passing": "2011"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=58809013400",
                        "Vidwan: https://mits.irins.org/profile/590276",
                        "Google scholar: https://scholar.google.com/citations?hl=en&user=jTtuzfcAAAAJ",
                        "h-Index (As per Scopus Data) : 03"
                    ]
                },
                {
                    "title": "Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Techno-Economic Analysis of 500 MWe Supercritical Thermal Power Plant with the Integration of Solid Oxide Fuel Cell",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Thermodynamic and Economic Analysis of a Standalone Supercritical Thermal Power Plant Integratd with Molten Carbonate Fuel Cell",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "An equilibrium modelling and a parametric study of gasification process",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Thermodynamic analysis of a reconfigured 500 MWe supercritical thermal power plant by integrating solid oxide fuel cell and a gas turbine",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Thermodynamic analysis of a coal fired supercritical thermal power plant integrated with molten carbonate fuel cell powered by coal gasification",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Thermodynamic Analysis of Integrated Gasification Combined Cycle Integrated with Organic Rankine Cycle for Waste Heat Utilization",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "Thermodynamic analysis of a coal fired supercritical thermal power plant integrated with molten carbonate fuel cell powered by coal gasification.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Exergy. 2022;39(3):246-61. (SCIE Indexed) https://doi.org/10.1504/IJEX.2022.126546"
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "Thermodynamic Analysis of a Reconfigured 500-MWe Supercritical Thermal Power Plant by Integrating Solid Oxide Fuel Cell and a Gas Turbine.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Arabian Journal for Science and Engineering. 2022 Nov 25:1-5. (SCIE Indexed) https://doi.org/10.1007/s13369-022-07464-3"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "An equilibrium modelling and a parametric study of gasification process.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Global Warming. 2023; 31(1):1-3. (SCIE Indexed) https://doi.org/10.1504/IJGW.2023.133206"
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "Thermodynamic and Economic Analysis of a Standalone Supercritical Thermal Power Plant Integrated with Molten Carbonate Fuel Cell.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Energy Technology. 2024 Jan 12:2300941. (SCIE Indexed) https://doi.org/10.1002/ente.202300941"
                        }
                    ]
                },
                {
                    "title": "Book Chapters",
                    "content": [
                        "Deep, A.P., Jena, A. and Karmakar, S., 2019. Thermodynamic Analysis of an Integrated Gasification Fuel Cell- Combined Cycle Power Plant Using Indian Coal. In Advances in Fluid and Thermal Engineering (pp. 781-792). Springer, Singapore.",
                        "More, A., Pruthvi Deep, A. and Karmakar, S., 2021. Thermodynamic Analysis of a 500 MW e Coal-Fired Supercritical Thermal Power Plant Integrated with Molten Carbonate Fuel Cell (MCFC) at Flue Gas Stream. In Proceedings of the 7th international conference on advances in energy research (pp. 645-654). Springer, Singapore."
                    ]
                }
            ]
    },

    "Mr. S. Manoj Kumar": {
      name: "Mr. S. Manoj Kumar",
      designation: "Asst. Professor",
      email: "manojkumars@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/Mr. Manoj Kumar K.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Anna University, Chennai", "Year of Passing": "Pursuing"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "Advanced Manufacturing", "Branch": "Mechanical Engineering", "College Name/University": "Coimbature Institute Of Technology, Anna University", "Year of Passing": "2011"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "KanchiPallavan Engineering College, Anna University", "Year of Passing": "2008"}
          ]
        },
        {
          title: "Research Areas",
          content: "Material science, Polymer, Surface Engineering, Tribology"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57223696164"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/274375"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=oMIiJYAAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "06"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "2", "Details of Research Publication": "Development and characterization of Loofah vine stem fiber–volcanic pumice dust reinforced 3d printed bio composites: mechanical, wear, thermal, and wettability analysis Published: 21-May-2026 https://doi.org/10.1007/s11696-026-04894-3", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Role of biomass‑extracted natural fiber and copper oxide/nickel oxide nanoparticle‑reinforced vinyl ester composite and its characterization study. Published: 22-March-2026 https://doi.org/10.1007/s10973-025-15037-3", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "3", "Details of Research Publication": "Multi-response optimization of bamboo/PALF–TiC hybrid composites for enhanced mechanical and tribological performance. Published online: 7 January 2026 https://doi.org/10.1051/epjconf/2026345010624", "Indexing": "Scopus", "Publication": "Conference", "Journal Quartile": "Q4"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "5", "Details of Research Publication": "Optimizing Fabrication Parameters for Carbon and Hemp Fiber Reinforced Bio-Composites in Automotive Applications: A Study using Response Surface Methodology Published: 25 November 2025 https://doi.org/10.4273/ijvss.17.4.28", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "3", "Details of Research Publication": "Effect of aging conditions on surface-modified biochar and nutmeg short fiber-reinforced polyester composite: properties and performance Published: 26 Nov 2025 https://doi.org/10.1080/09276440.2025.2574156", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "3", "Details of Research Publication": "Hybrid PVA composites with basalt fibre and functionalized biocarbon: Mechanical strengthening and EMI shielding efficiency. Journal of Thermoplastic Composite Materials. 2025 Published: 07 Nov 2025 https://doi.org/10.1177/08927057251382851", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Effect of High Temperature-Treated SI2N2O on Mechanical, Tribology, Fatigue, and Creep Behavior of AA7075 Metal Matrix Composite https://doi.org/10.1142/S0218625X25501884", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Load Bearing Performance of Alkali-Silane-Treated Pineapple Fiber and Polyethylene Terephthalate Core-Reinforced Sandwich Composite for Building Applications.  https://doi.org/10.1007/s12649-025-03225-z", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "3", "Details of Research Publication": "Evaluation of Dielectric, Magnetic, Mechanical and EMI Shielding Behaviours of Flexible PVA Composites Incorporated with Bio-Carbon Particles and Basalt Fiber.  https://doi.org/10.1007/s12649-025-03182-7", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "10", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Mechanical, Tribological, Thermal Conductivity and Flame Retardant Behaviour of Natural Fibre and Biomass Derived Biochar Toughened Vinyl Ester Eco-Friendly Composite: A Sustainable Automotive Material", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "11", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "Mechanical, wear, fatigue, water absorption and flammability of silane-treated Indian squid chitin powder-dispersed pineapple fiber-polyester composite.  https://doi.org/10.1007/s00289-024-05589-z", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "12", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "Effect of wheat husk biogenic ceramic Si3N4 addition on mechanical, wear and flammability behaviour of castor sheath fibre-reinforced epoxy composite.  https://doi.org/10.1007/s41779-025-01153-8", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "13", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Enhancement of mechanical, microstructural and fatigue properties of cassava tuber peel biosilica toughened dissimilar AA 6061-AZ31B Mg welds. https://doi.org/10.1007/s00289-025-05732-4", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "14", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "IoT-Driven Mushroom Farm Automation Using Neural Turing Machines 10.1109/ICMNWC63764.2024.10872242", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Others"},
            {"S.No": "15", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Characterization of heat-treated bio silica from biomass waste fox tail millet husks and banana fiber reinforced epoxy composite. https://doi.org/10.1007/s13399-024-05411-w", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "16", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "2", "Details of Research Publication": "Mechanical, wear, hydrophobic, and thermal behavior of waste cassava root cellulose and twill-weaved banana fiber-reinforced unsaturated polyester composites.  https://doi.org/10.1007/s13399-024-05349-z", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "17", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "2", "Details of Research Publication": "Mechanical, Dielectric and Thermal Stability of Silicon Oxynitride Nanoparticle Dispersed Tamarind Fiber-Reinforced Epoxy  https://doi.org/10.1007/s12633-023-02320", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "18", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "3", "Details of Research Publication": "Wear behavior of heat treated and chromium nitride coated 316L SS steel against steel ball in wet condition. https://doi.org/10.1063/5.0132535", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Others"},
            {"S.No": "19", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "4", "Details of Research Publication": "Tribological Investigation of Shot Peened NiP-CN Electroless Coating on EN31 Steel. https://doi.org/10.1063/5.0132537", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Others"},
            {"S.No": "20", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "4", "Details of Research Publication": "Effect of Silicon Coupling Grafted Ferric Oxide and E-Glass Fibre in Thermal Stability, Wear and Tensile Fatigue Behaviour of Epoxy Hybrid Composite.  https://doi.org/10.1007/s12633-019-00347-7", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2026", "Application ID": "468338-001", "Title of the Patent": "SENSOR-BASED DEVICE FOR OPTIMIZING CARBON SEQUESTRATION AND PLANT GROWTH", "Status": "Granted"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "471917-001", "Title of the Patent": "THERMO-MECHANICAL LEAF STRAIGHTENING MACHINE", "Status": "Granted"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "471598-001", "Title of the Patent": "IOT-ENABLED DEVICE FOR THE CONTROLLED SYNTHESIS OF NANOPARTICLES", "Status": "Granted"},
            {"S.No": "4", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "459421-001", "Title of the Patent": "IOT BASED ADDITIVE MANUFACTURING DEVICE", "Status": "Granted"},
            {"S.No": "5", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "459419-001", "Title of the Patent": "CLOUD BASED HEALTHCARE MONITORING SYSTEM USING IOT", "Status": "Granted"},
            {"S.No": "6", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "448272-001", "Title of the Patent": "CONSTRUCTION MATERIAL TESTING DEVICE", "Status": "Granted"},
            {"S.No": "7", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "443274-001", "Title of the Patent": "SOLAR POWERED SEAWATER DESALINATION APPARATUS", "Status": "Granted"},
            {"S.No": "8", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "443930-001", "Title of the Patent": "AI BASED CARBON POLLUTION DETECTING DEVICE", "Status": "Granted"},
            {"S.No": "9", "Affiliation": "MITS", "Academic Year": "2024", "Application ID": "0234108659 A", "Title of the Patent": "SYSTEM AND METHOD FOR EXPLORING NEW MATERIALS AND ALLOYS FOR HIGH-PERFORMANCE WELDED STRUCTURES", "Status": "Filed"},
            {"S.No": "10", "Affiliation": "MITS", "Academic Year": "2024", "Application ID": "202341057325 A", "Title of the Patent": "MACHINE LEARNING-BASED APPROACHES TO ANALYZE THE VEHICLE ACTIVE STEERING STABILITY CONTROL BASED ON VARIABLE TIME DOMAIN INPUT AND STATE INFORMATION PREDICTION IN A SUPERCAPACITOR FOR ENERGY STORAGE", "Status": "Filed"}
          ]
        },
        {
          title: "Consultancy",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2025-2026", "Client/Organization": "MATTEST POWER PRIVATE LIMITED", "Project": "CNC MACHINING WORK", "Amount": "35000"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2024-2025", "Client/Organization": "ANNA UNIVERSITY CHENNAI", "Project": "HEAT TREATMENT", "Amount": "5000"}
          ]
        }
      ]
    },

    "Mr. Pujari Rajesh": {
        "name": "Mr. Pujari Rajesh",
        "email": "rajeshp@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Pujari Rajesh.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Welding Engineering",
                            "Branch": "Metallurgy and Materials Engineering",
                            "College Name/University": "National Institute of Technology, Tiruchirappalli",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Advanced Manufacturing Systems",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Madanapalle Institute of Technology and Science, Madanapalle",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Mechanical Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Sri Krishnadevaraya Engineering College, Gooty, Anantapuramu",
                            "Year of Passing": "2013"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Manufacturing"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus:",
                        "Vidwan: https://mits.irins.org/profile/272680",
                        "Google scholar: http://scholar.google.co.in/citations?user=UiwlnNoAAAAJ",
                        "h-Index (As per Scopus Data) :"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2014-15",
                            "Author Position": "1",
                            "Details of Research Publication": "Experimental and Parametric Studies of Nd:YAG laser Drilling on Austenitic Stainless Steel, International journal of Advanced Manufacturing Technology. Springer, August 8th 2015, ISSN: 0268-3768.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        }
                    ]
                },
                {
                    "title": "Consultancy",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Name of the Consulting Firm": "Adithya Engineering College",
                            "Title of the Project/Event": "Optimization of Machining Parameters",
                            "Amount in Rs. /-": "2,500"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "Best NSS Programme Officer by JNTU Anantapur"
                }
            ]
    },

    "Mr. G. Kumar": {
      name: "Mr. G. Kumar",
      designation: "Asst. Professor",
      email: "kumarg@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/G. Kumar.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "VELS University", "Year of Passing": "Pursuing"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "Computer Aided Design", "Branch": "Mechanical Engineering", "College Name/University": "Sathyabama University", "Year of Passing": "2009"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Adhiparasakthi Engineering college, University of Madras", "Year of Passing": "2002"}
          ]
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=59771450000"},
            {"Identifier": "Vidwan", "Link": ""},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=R83Fxd4AAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": ""}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-2026", "Author Position": "3", "Details of Research Publication": "Innovative building thermal insulation: Bamboo fiber-based eco-composite with eggshell Powder and cardboard waste reinforcement", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-2025", "Author Position": "3", "Details of Research Publication": "Mechanical and Structural Characterization of Curauá Fiber, Sugarcane Biochar, and Poly Lactic Acid Hybrid Green Composites for Sustainable Biomass Utilization.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2023-2024", "Author Position": "2", "Details of Research Publication": "Experimental investigation of mechanical and erosion properties of twill E-glass/sisal fiber reinforced hybrid polymer composite", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q3"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2022-2023", "Author Position": "6", "Details of Research Publication": "Wear behavior of heat treated and chromium nitride coated316L SS steel against steel ball in wet condition", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q4"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2022-2023", "Author Position": "6", "Details of Research Publication": "Tribological investigation of shot peened NiP-CN electroless coating on EN31 steel", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q4"}
          ]
        }
      ]
    },

    "Mr. P. Mohammed Rizwan Ali": {
        "name": "Mr. P. Mohammed Rizwan Ali",
        "email": "rizwanalip@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/MR P MOHAMMED RIZWAN ALI.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Advanced Manufacturing Systems",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Madanapalle Institute of Technology and Science, JNTUA",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Mechanical Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Fathima Institute of Technology and Management, JNTUA",
                            "Year of Passing": "2013"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "3D Printing, Additive manufacturing, composites, polymers."
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus: https://www.scopus.com/authid/detail.uri?authorId=57219993746",
                        "Vidwan: https://vidwan.inflibnet.ac.in/profile/562005",
                        "Google scholar: https://scholar.google.com/citations?user=aEmB69wAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) :"
                    ]
                },
                {
                    "title": "Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "6",
                            "Details of Research Publication": "The influence of Machine Learning in Additive Manufacturing. https://link.springer.com/chapter/10.1007/978-981-19-5347-7_29",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "3",
                            "Details of Research Publication": "Experimentation and Process Parametric Optimization of 3D printing of ABS based Polymer parts. https://link.springer.com/chapter/10.1007/978-981-15-4739-3_42",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
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
                            "Academic Year": "2024-25",
                            "Application ID": "443252-001",
                            "Title of the Patent": "Feed stock filament Extruder",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "\u201cA Review on Materials applied in Additive Manufacturing\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International journal for research in applied sciences and Engineering technology, volume 3 , Issue 7,pp16-20."
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "\u201cAdvances in Diverse Materials for Additive Manufacturing\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "NCIME-14, ISBN 978-93-82163-75-6, pp49-53."
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "\u201cEmpirical Optimization of blown film extruder for 3D Printing feed stock filament extrusion\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "NCIME-14,ISBN 978- 93-85100-53-6, pp390-393."
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "\u201cBio Mime tics \u2013Creating new frontiers in technology\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "NCIME-15,ISBN 978-93-85100-53-6, pp49-53."
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "\u201cStructural Analysis & fabrication of Femoral stem Component of a Newly designed Cemented Hip Implant through Fused Deposition modeling\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Engineering Sciences& research Technology,Issue-IJESS7,2016,pp72-80."
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "\u201cExperimentation and Process parametric Optimization of 3D printing of ABS based Polymer parts\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "ICAIASM 2019-Springer -pp 487-496."
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "\u201cThe influence of Machine Learning in Additive Manufacturing\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Recent advances in Materials Processing and Charactreization published on 30 sep 2022 -Springer pp 351-361."
                        }
                    ]
                },
                {
                    "title": "Workshop's / FDP's / Seminar's Paticipated",
                    "content": [
                        "Participated in six-day \"Drone Pilot training\" at Dhanwantari Drone Pilot Academy (DDPA), Bengaluru from 21.07.2025 to 26.07.2025.",
                        "Participated in \u201cAmaravati Drone Summit 2024\u201d at CK Conventions, Vijayawada on 22nd & 23rd October 2024."
                    ]
                }
            ]
    }
  */
};

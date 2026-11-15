/**
 * Madanapalle Institute of Technology & Science (MITS) - Training & Placement Cell Profiles
 * 
 * ============================================================================
 * HOW TO MODIFY PLACEMENT & TRAINING TEAM DETAILS / DISPLAY POSITION
 * ============================================================================
 * 
 * 1. HOW TO CHANGE DISPLAY POSITION (REORDER):
 *    - The list of placement team members is defined in the `placementTeamData` array.
 *    - Rearrange the objects inside the `placementTeamData` array to change the display
 *      order on the Placements page.
 * 
 * 2. HOW TO ADD A NEW MEMBER:
 *    - Add a new object inside `placementTeamData` following the `PlacementFacultyProfile` interface.
 *    - Ensure you specify `team: "placement"` for placement officers, or `team: "training"` for trainers.
 * 
 * 3. HOW TO EDIT DETAILS:
 *    - Locate the member by name and edit the designation, qualification, email, or sections array.
 */
// ─── Types ────────────────────────────────────────────────────────────────────

export interface PlacementFacultySection {
  title: string;
  content: string | string[] | Record<string, string>[];
}

export interface PlacementFacultyProfile {
  slug: string;
  name: string;
  designation: string;
  qualification: string;
  department: string;
  team: "placement" | "training";
  image?: string;
  email?: string;
  sections: PlacementFacultySection[];
}

// ─── Helper ───────────────────────────────────────────────────────────────────

function slug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function getPlacementFacultyProfile(s: string): PlacementFacultyProfile | undefined {
  return allPlacementFaculty.find((f) => f.slug === s);
}

// ─── Placement Team ───────────────────────────────────────────────────────────

const placementTeamData: Omit<PlacementFacultyProfile, "slug">[] = [
  {
    name: "Dr. S. V. S. Ganga Devi",
    designation: "Professor",
    qualification: "Ph.D. (SPMVV, Tirupathi)",
    department: "Placements",
    team: "placement",
    image: "https://mits.ac.in/public/uploads/faculty/Dr. S. V. S. Ganga Devi.JPG",
    sections: [
      {
        title: "Details of Educational Qualification",
        content: [
          { Course: "Ph.D.", Specialization: "Data Mining", Branch: "Computer Science", "College Name/University": "Sri Padmavathi Mahila Visva Vidyalayam, Tirupathi", "Year of Passing": "2010" },
          { Course: "M.C.A.", Specialization: "Computer Applications", Branch: "M.C.A.", "College Name/University": "Sri Padmavathi Mahila Visva Vidyalayam, Tirupathi", "Year of Passing": "1993" },
          { Course: "B.Sc.", Specialization: "M.P.E.", Branch: "B.Sc", "College Name/University": "S. V. University, Tirupathi", "Year of Passing": "1988" },
        ],
      },
      {
        title: "Research Areas",
        content: "Machine Learning, Deep Learning, Soft Computing, Advanced Databases",
      },
      {
        title: "Research Identifiers",
        content: [
          { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=57210798856" },
          { Identifier: "Vidwan", Link: "https://mits.irins.org/profile/274353" },
          { Identifier: "Google Scholar", Link: "https://scholar.google.co.in/citations?user=ICFYOX8AAAAJ&hl=en" },
          { Identifier: "h-Index (As per Scopus Data)", Link: "2" },
        ],
      },
      {
        title: "Publication Details",
        content: [
          { "S.No": "1", "Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Research Publication": "Enhancing Cyber-Physical System Security with NFT-Based Asset Digitization and Authentication. https://doi.org/10.1109/ICKECS65700.2025.11035347", Indexing: "Scopus", Type: "Conference Proceedings", "Journal Quartile": "None" },
          { "S.No": "2", "Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Research Publication": "Next-Generation Inventory Management: Blockchain-Infused GAN Forecasting with ECDH Security Layer. https://doi.org/10.1109/ICoACT63339.2025.11005085", Indexing: "Scopus", Type: "Conference Proceedings", "Journal Quartile": "None" },
          { "S.No": "3", "Affiliation": "MITS", "Academic Year": "2024", "Author Position": "1", "Research Publication": "Enhancement of Image Processing based on Deep Learning Backpropagation Approach. https://ijisae.org/index.php/IJISAE/article/view/4198", Indexing: "Scopus", Type: "Article", "Journal Quartile": "Q4" },
          { "S.No": "4", "Affiliation": "MITS", "Academic Year": "2023", "Author Position": "1", "Research Publication": "Introduction to Graph Neural Network: Types and Applications. https://doi.org/10.4018/978-1-6684-6903-3.ch003", Indexing: "Scopus", Type: "Book Chapter", "Journal Quartile": "None" },
          { "S.No": "5", "Affiliation": "MITS", "Academic Year": "2023", "Author Position": "3", "Research Publication": "IoT-driven automatic vehicle accident rescue system implemented with Proteus. https://doi.org/10.1109/ICOTL59758.2023.10435294", Indexing: "Scopus", Type: "Conference Proceedings", "Journal Quartile": "None" },
          { "S.No": "6", "Affiliation": "MITS", "Academic Year": "2021", "Author Position": "1", "Research Publication": "Cluster and Outlier Analysis for Ground Water Quality Data in the Regions of Kadapa District in Andhra Pradesh. https://doi.org/10.2174/1872212113666190211144935", Indexing: "Scopus", Type: "Article", "Journal Quartile": "Q3" },
          { "S.No": "7", "Affiliation": "MITS", "Academic Year": "2020", "Author Position": "1", "Research Publication": "Analysing ground water quality in the regions of Kadapa District using supervised learning methods. https://doi.org/10.1007/978-3-030-46943-6_34", Indexing: "Scopus", Type: "Conference Proceedings", "Journal Quartile": "None" },
          { "S.No": "8", "Affiliation": "MITS", "Academic Year": "2018", "Author Position": "1", "Research Publication": "Random forest advice for water quality prediction in the regions of Kadapa District. https://doi.org/10.35940/ijitee.F1298.0486S419", Indexing: "Scopus", Type: "Article", "Journal Quartile": "Q4" },
        ],
      },
      {
        title: "Research Projects",
        content: [
          { "S.No": "1", "Academic Year": "2017", Role: "P.I.", "Title of the Project": "Analyzing Ground water quality using data mining techniques for the regions of KADAPA district AP and developing a portal for drinking water supply management system", "Amount (Rs.)": "3,30,000", "Funding Agency": "UGC (SERO)" },
        ],
      },
      {
        title: "Patents",
        content: [
          { "S.No": "1", "Academic Year": "2022", "Application ID": "202241047490", "Title of the Patent": "IOT Based stress level Identification in EEG signal using Artificial Intelligence technique.", Status: "Published" },
        ],
      },
    ],
  },

  {
    name: "Dr. S. Rajasekaran",
    designation: "Professor & Head",
    qualification: "Ph.D. (Anna University, Chennai)",
    department: "Placements",
    team: "placement",
    image: "public/uploads/faculty/f8983b3c4255e5b248d9b51eb8f62e38.jpeg",
    sections: [
      {
        title: "Details of Educational Qualification",
        content: [
          { Course: "Ph.D.", Specialization: "Control systems and Antenna", Branch: "Information and Communication Engineering", "College Name/University": "Coimbatore Institute of Technology, Anna University, Chennai, India.", "Year of Passing": "2014" },
          { Course: "M.E.", Specialization: "Information and Communication", Branch: "Information and Communication Engineering", "College Name/University": "Bannari Amman Institute of Technology, Anna University, Chennai", "Year of Passing": "2007" },
          { Course: "B.E.", Specialization: "Electronics and Instrumentation Engineering", Branch: "Electronics and Instrumentation Engineering", "College Name/University": "Jayaram College of Engg. & Tech., Bharathidasan University, Trichy.", "Year of Passing": "2003" },
        ],
      },
      {
        title: "Research Areas",
        content: "Control Systems and Antenna",
      },
      {
        title: "Research Identifiers",
        content: [
          { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=57194531697" },
          { Identifier: "Vidwan", Link: "https://mits.irins.org/profile/274643" },
          { Identifier: "Google Scholar", Link: "https://scholar.google.com/citations?hl=en&user=u3f4IF0AAAAJ" },
          { Identifier: "h-Index (As per Scopus Data)", Link: "6" },
        ],
      },
      {
        title: "Publication Details",
        content: [
          { "S.No": "1",  "Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "3", "Research Publication": "Trident-Tree Fractal Printed Monopole Antenna for WLAN and 5G Applications. https://doi.org/10.1109/INSPECT67393.2025.11350383", Indexing: "Scopus", Type: "Conference Proceedings", "Journal Quartile": "None" },
          { "S.No": "2",  "Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "5", "Research Publication": "Design of a Star-Shaped Dual-Band Ultra-Thin Polarization-Insensitive Metamaterial Absorber for S-Band Applications. https://doi.org/10.1109/ICWITE64848.2025.11306966", Indexing: "Scopus", Type: "Conference Proceedings", "Journal Quartile": "None" },
          { "S.No": "3",  "Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "4", "Research Publication": "Design and Analysis of Triple-Band Copper-Based Metamaterial Absorber for GHz Applications. https://doi.org/10.1109/ICCAMS65118.2025.11234549", Indexing: "Scopus", Type: "Conference Proceedings", "Journal Quartile": "None" },
          { "S.No": "4",  "Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "6", "Research Publication": "Investigation of hybrid electron extraction architecture via integration of Mono-Shelled Carbon Nanotubes (MS-CNT) with perovskite oxide BaSnO3 for beyond 38% efficiency in BaZrSe3 photovoltaic cells. https://doi.org/10.1016/j.optcom.2025.131769", Indexing: "SCI", Type: "Article", "Journal Quartile": "Q2" },
          { "S.No": "5",  "Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "8", "Research Publication": "Triple band lateral 4-port flexible MIMO antenna for millimeter wave applications at 24/28/38 GHz. https://doi.org/10.1016/j.rineng.2025.104678", Indexing: "ESCI", Type: "Article", "Journal Quartile": "Q2" },
          { "S.No": "6",  "Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "6", "Research Publication": "Efficient terahertz radiation absorption using a graphene and InSb pixel-based metasurface absorber: design and simulation. https://doi.org/10.1364/JOSAB.546983", Indexing: "SCI", Type: "Article", "Journal Quartile": "Q1" },
          { "S.No": "7",  "Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Research Publication": "Device Engineering of a Novel Lead-Free Solar Cell Architecture Utilizing Inorganic CsSnCl3 and CsSnI3 Perovskite-Based Dual Absorbers for Sustainable Powering of Wireless Networks. https://doi.org/10.1007/s11664-024-11605-9", Indexing: "SCI", Type: "Article", "Journal Quartile": "Q2" },
          { "S.No": "8",  "Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Research Publication": "Comparison of SPV System Performance with DAST System Using MPPT Algorithms. https://doi.org/10.1007/978-981-97-4152-6_36", Indexing: "Scopus", Type: "Book Chapter", "Journal Quartile": "" },
          { "S.No": "9",  "Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Research Publication": "High-Speed Approximate Adder Design through Charge Recovery Logic and Hybrid Low Power Technique. https://doi.org/10.1109/VLSISATA65374.2025.11070085", Indexing: "Scopus", Type: "Conference Proceedings", "Journal Quartile": "None" },
          { "S.No": "10", "Affiliation": "MITS", "Academic Year": "2024",    "Author Position": "8", "Research Publication": "A Low-Profile Dual-Band Millimeter Wave Patch Antenna for High-Speed Wearable and Biomedical Applications. https://doi.org/10.1016/j.rineng.2024.103212", Indexing: "ESCI", Type: "Article", "Journal Quartile": "Q2" },
          { "S.No": "11", "Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Research Publication": "Device engineering of lead-free FaCsSnI3/Cs2AgBiI6-based dual-absorber perovskite solar cell architecture for powering next-generation wireless networks. https://doi.org/10.1007/s11664-024-11605-9", Indexing: "SCI", Type: "Article", "Journal Quartile": "Q2" },
          { "S.No": "12", "Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "6", "Research Publication": "Improvement of photovoltaic response in perovskite solar cell via all inorganic lead free cubic double La2NiMnO6/Cs3Bi2I9 based graded absorber architecture. https://doi.org/10.1007/s11082-024-07239-0", Indexing: "SCI", Type: "Article", "Journal Quartile": "Q2" },
          { "S.No": "13", "Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "4", "Research Publication": "Analytical investigation of CdSe/CdS/ZnSe based single core double-shell nanotextured vertical nanopillar array antenna for broadband photodetection applications. https://doi.org/10.1002/dac.5752", Indexing: "SCI", Type: "Article", "Journal Quartile": "Q2" },
          { "S.No": "14", "Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "6", "Research Publication": "Compact Dual Band 4-Port MIMO Antenna for 5G-Sub 6GHz/N38/N41/N90 and WLAN Frequency Bands. https://doi.org/10.1016/j.aeue.2023.154919", Indexing: "SCI", Type: "Article", "Journal Quartile": "Q2" },
          { "S.No": "15", "Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "6", "Research Publication": "Transmit power allocation for Sub-6GHz/mmWave based 5G cellular network. https://doi.org/10.3103/S0735272723060043", Indexing: "Scopus", Type: "Article", "Journal Quartile": "Q3" },
          { "S.No": "16", "Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "5", "Research Publication": "Power Minimization in Cell-Free Massive MIMO with AP Selection Algorithm. http://dx.doi.org/10.2174/2210327913666230314122645", Indexing: "Scopus", Type: "Conference Proceedings", "Journal Quartile": "None" },
          { "S.No": "17", "Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "4", "Research Publication": "Multi-loop Control Design for Two Input Two Output System: A Disturbance Observer Approach. https://doi.org/10.1109/RAEEUCCI57140.2023.10134280", Indexing: "Scopus", Type: "Conference Proceedings", "Journal Quartile": "" },
          { "S.No": "18", "Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "5", "Research Publication": "Capacity Maximization in Cell Free Massive MIMO Network with Access Point Selection Method. https://doi.org/10.2174/2210327913666221222145957", Indexing: "Scopus", Type: "Article", "Journal Quartile": "None" },
          { "S.No": "19", "Affiliation": "MITS", "Academic Year": "2017-18", "Author Position": "4", "Research Publication": "Moving Object Localization in Video Sequences under Static and Dynamic Background Conditions. http://dx.doi.org/10.22266/ijies2019.0430.15", Indexing: "Scopus", Type: "Article", "Journal Quartile": "None" },
          { "S.No": "20", "Affiliation": "MITS", "Academic Year": "2018-19", "Author Position": "4", "Research Publication": "Quality and Complexity Measurement of 2D-DCT Architecture Using Loeffler Algorithm Along with CSD and CSE. https://doi.org/10.1007/978-981-13-5758-9_30", Indexing: "Scopus", Type: "Book Chapter", "Journal Quartile": "None" },
          { "S.No": "21", "Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "4", "Research Publication": "Adaptive hybrid intelligent MPPT controller to approximate effectual wind speed and optimal rotor speed of variable speed wind turbine. https://doi.org/10.1016/j.isatra.2019.05.029", Indexing: "SCI", Type: "Article", "Journal Quartile": "None" },
        ],
      },
      {
        title: "Patents",
        content: [
          { "S.No": "1", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "202541080004", "Title of the Patent": "A System for Electricity Generation from Food Waste and A Method of Monitoring Using IOT", Status: "Under Examination" },
          { "S.No": "2", "Affiliation": "MITS", "Academic Year": "2023", "Application ID": "202341000087", "Title of the Patent": "Design and Performance of Charge-Plasma-Based Schottky-FET CMOS Circuit Ring Oscillator for High Density ICs", Status: "Published" },
        ],
      },
    ],
  },

  {
    name: "Mrs. Mythili N",
    designation: "Asst. Professor",
    qualification: "M.B.A. (Pondicherry University)",
    department: "Placements",
    team: "placement",
    image: "https://mits.ac.in/public/uploads/faculty/myth.JPG",
    sections: [
      {
        title: "Details of Educational Qualification",
        content: [
          { Course: "M.B.A.", Specialization: "Human Resources", Branch: "Management", "College Name/University": "Pondicherry University", "Year of Passing": "2012" },
          { Course: "B.Com.", Specialization: "Commerce", Branch: "B.Com.", "College Name/University": "Bangalore University", "Year of Passing": "1992" },
        ],
      },
    ],
  },

  {
    name: "Mr. J. T. Drupad",
    designation: "Placement Officer",
    qualification: "M.B.A.",
    department: "Placements",
    team: "placement",
    sections: [],
  },

  {
    name: "Mr. S. Naveen Kumar",
    designation: "Placement Officer",
    qualification: "M.B.A. (HR & Finance)",
    department: "Placements",
    team: "placement",
    image: "https://mits.ac.in/public/uploads/faculty/f34e520484bb61226d29fcb583cb91a3.JPG",
    sections: [
      {
        title: "Details of Educational Qualification",
        content: [
          { Course: "M.B.A.", Specialization: "HR & Finance", Branch: "Management Studies", "College Name/University": "Vel.S.R.S.College", "Year of Passing": "2010" },
          { Course: "B.B.A.", Specialization: "Business Administration", Branch: "B.B.A.", "College Name/University": "University of Madras", "Year of Passing": "2002" },
        ],
      },
    ],
  },

  {
    name: "Mr. D. V. Sameer Kumar",
    designation: "Asst. Professor",
    qualification: "M.B.A. (Sikkim Manipal University)",
    department: "MBA",
    team: "placement",
    image: "https://mits.ac.in/public/uploads/faculty/DSC_7003.JPG",
    sections: [
      {
        title: "Details of Educational Qualification",
        content: [
          { Course: "M.B.A.", Specialization: "Management Studies", Branch: "Management Studies", "College Name/University": "Sikkim Manipal University", "Year of Passing": "2010" },
          { Course: "B.Sc.", Specialization: "Garment Designing", Branch: "B.Sc.", "College Name/University": "Mangalore University", "Year of Passing": "2005" },
        ],
      },
    ],
  },

  {
    name: "Mr. G. Naresh",
    designation: "AAO",
    qualification: "M.B.A. (JNTU Anantapur)",
    department: "Placements",
    team: "placement",
    sections: [],
  },
];

// ─── Training Team ────────────────────────────────────────────────────────────

const trainingTeamData: Omit<PlacementFacultyProfile, "slug">[] = [
  {
    name: "Dr. K. Dasthagiri Basha",
    designation: "Asst. Professor",
    qualification: "Ph.D. (Sri Venkateswara University)",
    department: "MBA",
    team: "training",
    image: "https://mits.ac.in/public/uploads/faculty/f0e6516ebfe4f08e473f3c2980faf553.jpg",
    sections: [
      {
        title: "Details of Educational Qualification",
        content: [
          { Course: "Ph.D.", Specialization: "Management Studies", Branch: "Management Studies", "College Name/University": "Sri Venkateswara University", "Year of Passing": "2020" },
          { Course: "M.Sc.", Specialization: "Psychology", Branch: "Psychology", "College Name/University": "Sri Venkateswara University", "Year of Passing": "2014" },
          { Course: "M.B.A.", Specialization: "Management Studies", Branch: "Management Studies", "College Name/University": "Sri Venkateswara University", "Year of Passing": "2010" },
          { Course: "B.Sc.", Specialization: "Maths, Physics & Chemistry", Branch: "B.Sc.", "College Name/University": "S.C.N.R Govt. Degree College", "Year of Passing": "2008" },
        ],
      },
    ],
  },

  {
    name: "Dr. Rajesh Thulasidass",
    designation: "Asst. Professor",
    qualification: "Ph.D. (Annamalai University)",
    department: "E & FL",
    team: "training",
    image: "https://mits.ac.in/public/uploads/faculty/07b8118684b156622ba362fbaf1d380e.JPG",
    sections: [
      {
        title: "Details of Educational Qualification",
        content: [
          { Course: "Ph.D.", Specialization: "Linguistics", Branch: "English", "College Name/University": "Annamalai University", "Year of Passing": "2026" },
          { Course: "M.A.", Specialization: "English Language Teaching", Branch: "M.A.", "College Name/University": "Telugu University, Hyderabad", "Year of Passing": "2019" },
          { Course: "B.E.", Specialization: "ECE", Branch: "ECE", "College Name/University": "Karunya Institute of Technology", "Year of Passing": "2007" },
        ],
      },
      {
        title: "Publications",
        content: [
          { "S.No": "1", "Title of the Paper": "Accelerating the Transition from Infant-Directed Speech to Adult-Directed Speech: A Wordlist-Driven Intervention Study", "Journal / Conference": "The 52nd All India Conference of Dravidian Linguists and International Symposium on NEP" },
          { "S.No": "2", "Title of the Paper": "Role of infant-directed Speech in the Holistic development of a Child", "Journal / Conference": "Arimaa Nokku, Oct-Nov 2024 edition." },
        ],
      },
    ],
  },

  {
    name: "Mr. Anandakumar. V",
    designation: "Asst. Professor",
    qualification: "M.A., M.Phil. (Bharathidasan University)",
    department: "E & FL",
    team: "training",
    image: "https://mits.ac.in/public/uploads/faculty/0c33d86fe4d7354686893bdf16462456.jpg",
    sections: [
      {
        title: "Details of Educational Qualification",
        content: [
          { Course: "B.Ed.", Specialization: "English", Branch: "English", "College Name/University": "The Best College of Education", "Year of Passing": "2019" },
          { Course: "M.Phil", Specialization: "English", Branch: "English", "College Name/University": "Bharathidasan University", "Year of Passing": "2005" },
          { Course: "M.A.", Specialization: "English", Branch: "M.A.", "College Name/University": "Bharathidasan University", "Year of Passing": "2002" },
          { Course: "B.A.", Specialization: "English", Branch: "B.A.", "College Name/University": "Bharathiyar University", "Year of Passing": "2000" },
        ],
      },
      {
        title: "Publications",
        content: [
          { "S.No": "1", "Title of the Paper": "Distance learning strategies in Covid 19-pandemic for Engineering Institutions", "Journal / Conference": "Mukt Shabd Journal (UGC-CARE Group I), ISSN: 2347-3150, Vol. XI, Issue VII, July 2022" },
          { "S.No": "2", "Title of the Paper": "A Study of Soft skills and Personality Development", "Journal / Conference": "Gradiva Journal (UGC-CARE Group II), ISSN: 0363-8057, Vol. 8, Issue 8, August 2022" },
        ],
      },
    ],
  },

  {
    name: "Mr. T. Rama Mohan",
    designation: "Asst. Professor",
    qualification: "M.A., M.Phil. (Madurai Kamaraj University)",
    department: "E & FL",
    team: "training",
    image: "https://mits.ac.in/public/uploads/faculty/rammohan.jpg",
    sections: [
      {
        title: "Details of Educational Qualification",
        content: [
          { Course: "M.Phil", Specialization: "English", Branch: "M.Phil.", "College Name/University": "Madurai Kamaraj University, Madurai", "Year of Passing": "2006" },
          { Course: "M.A.", Specialization: "English Literature", Branch: "M.A.", "College Name/University": "Sri Venkateswara University, Tirupati", "Year of Passing": "1999" },
          { Course: "B.A.", Specialization: "English Literature", Branch: "B.A.", "College Name/University": "Acharya Nagarjuna University, Guntur", "Year of Passing": "1994" },
        ],
      },
      {
        title: "Publications",
        content: [
          "Published an article entitled 'Research on Cross Cultural Communication in English Teaching' in Mukt Shabd Journal (UGC-CARE Group I), ISSN: 2347-3150, Volume 11, Issue 5, 2022.",
          "Published an article entitled 'Mythology and Science in Amish Tripathi's Shiva Trilogy' in GIS Science Journal (UGC-CARE Group II / Scopus), ISSN: 1869-9391, Vol. 8, Issue 10, 2021, Page No: 453–461.",
          "Published an article entitled 'Hostility between the Cultures of Hinduism and Catholicism in Kiran Agarkar's Ravan and Eddie' in Research Journal of English (RJOE), ISSN: 2456-2696, Vol. 5, Issue 1, 2020, Page Number: 71–178.",
          "Published an article entitled 'Confrontation between Realism and Imagination in Anita Desai's Cry, the Peacock' in Research Journal of English Language and Literature (RJELAL), ISSN: 2395-2636, Vol. 8, Issue 1, Jan–Mar 2020, Page Number: 131–135.",
          "Published an article entitled 'The Psychological Conflicts in V S Naipaul's A House for Mr. Biswas' in International Journal of Research Culture Society (IJRCS), ISSN: 2456-6683, Vol. 3, Issue 11, November 2019, Page Number: 188–190.",
        ],
      },
    ],
  },

  {
    name: "Mr. Darshan. B. V",
    designation: "Asst. Professor",
    qualification: "M.Tech. (University BDT College of Engineering)",
    department: "ME",
    team: "training",
    image: "https://mits.ac.in/public/uploads/faculty/Darshan. B.V.JPG",
    sections: [
      {
        title: "Details of Educational Qualification",
        content: [
          { Course: "M.Tech.", Specialization: "Thermal Power Engineering", Branch: "Thermal Power Engineering", "College Name/University": "University BDT College of Engineering, Davanagere", "Year of Passing": "2017" },
          { Course: "B.E.", Specialization: "Mechanical Engineering", Branch: "Mechanical Engineering", "College Name/University": "Basaveshwara Engineering College, Bagalkot", "Year of Passing": "2012" },
        ],
      },
      {
        title: "Publications",
        content: [
          { "S.No": "1", "Title of the Paper": "Structural and thermal analysis of gas turbine blade for In-Line and Zig-Zag arrangement of cooling holes", "Journal / Conference": "International Journal for Scientific Research and Development" },
          { "S.No": "2", "Title of the Paper": "Heat Transfer Analysis of Shell and Tube Heat Exchanger Cooled Using Nano fluids", "Journal / Conference": "Recent Patents on Mechanical Engineering, ISSN 1874-477X, 2019 (Scopus indexed)" },
        ],
      },
    ],
  },

  {
    name: "Mr. A. Naveen Chandra",
    designation: "Asst. Professor",
    qualification: "M.Sc., M.Tech. (Nagarjuna University)",
    department: "MCA",
    team: "training",
    image: "https://mits.ac.in/public/uploads/faculty/Naveen.JPG",
    sections: [
      {
        title: "Details of Educational Qualification",
        content: [
          { Course: "M.Tech.", Specialization: "Computer Science", Branch: "Computer Science", "College Name/University": "Aditya College, Nagarjuna University", "Year of Passing": "2011" },
          { Course: "M.Sc.", Specialization: "Physics", Branch: "M.Sc.", "College Name/University": "K G R L College, Andhra University", "Year of Passing": "2003" },
          { Course: "B.Ed", Specialization: "Physics & Maths", Branch: "B.Ed.", "College Name/University": "Haindavi College of Education, Sri Krishna Devaraya University", "Year of Passing": "2000" },
          { Course: "B.Sc.", Specialization: "Maths, Physics & Electronics", Branch: "B.Sc.", "College Name/University": "D N R College, Andhra University", "Year of Passing": "1996" },
        ],
      },
    ],
  },

  {
    name: "Mr. Chollangi Venkata Ramu",
    designation: "Asst. Professor",
    qualification: "M.Tech. (JNTU Kakinada)",
    department: "EEE",
    team: "training",
    image: "https://mits.ac.in/public/uploads/faculty/CHOLLANGI.jpeg",
    sections: [
      {
        title: "Details of Educational Qualification",
        content: [
          { Course: "M.Tech.", Specialization: "Power Systems", Branch: "EEE", "College Name/University": "Kakinada Institute of Technological Sciences, JNTU Kakinada", "Year of Passing": "2017" },
          { Course: "B.Tech.", Specialization: "EEE", Branch: "EEE", "College Name/University": "Bonam Venkata Chalamayya Institute of Technology & Science, JNTU Kakinada", "Year of Passing": "2015" },
        ],
      },
    ],
  },

  {
    name: "Mr. Shaik Tipu Rahaman",
    designation: "Asst. Professor",
    qualification: "M.Tech., M.Sc. (SVITS Kadapa)",
    department: "ECE",
    team: "training",
    image: "https://mits.ac.in/public/uploads/faculty/Mr. Shaik Tipu Rahaman.JPG",
    sections: [
      {
        title: "Details of Educational Qualification",
        content: [
          { Course: "M.Sc.", Specialization: "Applied Psychology", Branch: "M.Sc.", "College Name/University": "Bharathiar University", "Year of Passing": "2019" },
          { Course: "M.Tech.", Specialization: "Electronics and Communication Engineering", Branch: "ECE", "College Name/University": "Sri Venkateswara Institute of Technology and Science", "Year of Passing": "2015" },
          { Course: "B.Tech.", Specialization: "Electronics and Communication Engineering", Branch: "ECE", "College Name/University": "Vaagdevi Institute of Technology and Science", "Year of Passing": "2012" },
        ],
      },
      {
        title: "Research Areas",
        content: "Photonics, Optics, Biosensors",
      },
      {
        title: "Research Identifiers",
        content: [
          { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=57212120811" },
          { Identifier: "Vidwan", Link: "NA" },
          { Identifier: "Google Scholar", Link: "https://scholar.google.com/citations?user=Zgc78NMAAAAJ&hl=en" },
          { Identifier: "h-Index (As per Scopus Data)", Link: "NA" },
        ],
      },
      {
        title: "Publication Details",
        content: [
          { "S.No": "1", "Affiliation": "Others", "Academic Year": "2013-14", "Author Position": "2", "Research Publication": "An effective 6-bit flash ADC using low power CMOS technology. https://ieeexplore.ieee.org/abstract/document/6710493/2013 — 15th International Conference on Advanced Computing Technologies (ICACT)", Indexing: "Scopus", Type: "Conference Proceedings", "Journal Quartile": "None" },
          { "S.No": "2", "Affiliation": "Others", "Academic Year": "2013-14", "Author Position": "3", "Research Publication": "Implementation of error correcting methods for asynchronous communication and modified completion detector with reduced area overhead. https://ieeexplore.ieee.org/abstract/document/6926116/2014 — 2nd International Conference on Devices, Circuits and Systems (ICDCS)", Indexing: "Scopus", Type: "Conference Proceedings", "Journal Quartile": "None" },
          { "S.No": "3", "Affiliation": "Others", "Academic Year": "2012-13", "Author Position": "3", "Research Publication": "A Novel Approach for Image Retrieval Based on ROI and Multifeatures Using Genetic Algorithm. https://doi.org/10.1109/ic-ETITE47903.2020.293 — Proceedings of International Conference on Advances in Computing", Indexing: "Scopus", Type: "Book Chapter", "Journal Quartile": "None" },
        ],
      },
      {
        title: "Awards / Achievements",
        content: [
          "Cash-prize winner for two consecutive academic years at MITS under Training & Placement",
        ],
      },
    ],
  },

  {
    name: "Mrs. V. Srilatha",
    designation: "AAO",
    qualification: "M.B.A.",
    department: "Training",
    team: "training",
    sections: [],
  },
];

// ─── Combine & Export ─────────────────────────────────────────────────────────

export const allPlacementFaculty: PlacementFacultyProfile[] = [
  ...placementTeamData.map((f) => ({ ...f, slug: slug(f.name) })),
  ...trainingTeamData.map((f) => ({ ...f, slug: slug(f.name) })),
];

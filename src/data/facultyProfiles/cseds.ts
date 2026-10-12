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

export const csedsProfiles: Record<string, FacultyProfile> = {
  /*
  // Static faculty profile data preserved in comments (Dynamic profiles fetched from EngageAI database API)
"Dr. K. Nirmala Devi": {
      name: "Dr. K. Nirmala Devi",
      designation: "Assoc. Professor",
      email: "drnirmaladevikathamuthu@mits.ac.in",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/Dr. K. Nirmala Devi.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Post-Doctoral Researcher", "Specialization": "Computer Science and Engineering", "Branch": "Computer Science and Engineering", "College Name/University": "Lincoln University College, Malaysia", "Year of Passing": "Pursuing"},
            {"S.No": "2", "Course": "Ph.D.", "Specialization": "Information and Communication Engineering", "Branch": "Information and Communication Engineering", "College Name/University": "Anna University, Chennai", "Year of Passing": "2015"},
            {"S.No": "3", "Course": "M.E.", "Specialization": "Computer Science and Engineering", "Branch": "Computer Science and Engineering", "College Name/University": "Anna University, Chennai", "Year of Passing": "2006"},
            {"S.No": "4", "Course": "M.C.A.", "Specialization": "Computer Applications", "Branch": "Computer Applications", "College Name/University": "Bharathiar University, Coimbatore", "Year of Passing": "1997"},
            {"S.No": "5", "Course": "B.Sc.", "Specialization": "Computer Science", "Branch": "B.Sc.", "College Name/University": "Bharathiar University, Coimbatore", "Year of Passing": "1994"}
          ]
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=55263791000"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/236087"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=1r81av0AAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "12"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "Others", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Deep Learning Enhanced Suicidal Detection in Social Media. In International Conference on Computational Intelligence in Data Science . IFIP Advances in Information and Communication Technology, 749, pp. 278-292. Springer Cham: Springer Nature Switzerland.", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "Q3"},
            {"S.No": "2", "Publication Affiliation": "Others", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Cyberbullying Impact Prediction Using Deep Learning Models. Emerging Trends in Artificial Intelligence and Machine Learning. SPIN 2025. Lecture Notes in Electrical Engineering, vol 1450. Springer, Singapore.", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "Q4"},
            {"S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Dynamic multipath routing for energy‐efficient and reliable communication in 6G networks with MIMO. Internet Technology Letters, 8(3), e559.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "5", "Details of Research Publication": "Efficient heart disease classification through stacked ensemble with optimized firefly feature selection. International Journal of Computational Intelligence Systems, 17(1), 174.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Novel-shaped expandable quad-port MIMO antenna using FR4 material with features of high isolation and band width for 5G networks, Wi-Fi, and satellite communication applications. Optical and Quantum Electronics, 56(7), 1272.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "5", "Details of Research Publication": "Unravelling Emotional Well-Being: Detecting Stress in Social Media Through Advanced Deep Learning Techniques. In 2025 International Conference on Emerging Smart Computing and Informatics (ESCI) (pp. 1-6). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Cyberbullying Detection using Deep Learning Algorithms. In 2025 3rd International Conference on Intelligent Data Communication Technologies and Internet of Things (IDCIoT) (pp. 1298-1306). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "AI-Driven Early Detection of Pneunomia Deficiency Based on Deep Learning Approaches. In 2024 2nd International Conference on Signal Processing, Communication, Power and Embedded System (SCOPES) (pp. 1-6). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "6", "Details of Research Publication": "Parkinson's Disease Detection Using Deep Learning. In 2024 First International Conference on Data, Computation and Communication (ICDCC) (pp. 186-191). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Cyberbullying Detection and Severity Classification Using Bi-LSTM. In 2024 9th International Conference on Communication and Electronics Systems (ICCES) (pp. 338-344). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "A Novel Intelligent Approach for Efficient Detection of Respiratory Infections Combining Face Mask Detection and Thermal Images on Embedded Devices.SN Computer Science, 4(6),pp.801.2023", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Sentiment Analysis on Covid-19 data Using BERT Model. In 2024 International Conference on Advances in Modern Age Technologies for Health and Engineering Science (AMATHE) (pp. 1-8). IEEE", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "13", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "2", "Details of Research Publication": "An Intelligent System For Skin Cancer Detection Using Deep Learning Techniques. In 2024 International Conference on Advances in Data Engineering and Intelligent Computing Systems (ADICS) (pp. 1-5). IEEE", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "14", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "5", "Details of Research Publication": "Sentimental Analysis on Twitter data using Deep Learning. In 2024 2nd International Conference on Artificial Intelligence and Machine Learning Applications Theme: Healthcare and Internet of Things (AIMLA) (pp. 1-7). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "15", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "2", "Details of Research Publication": "An enhanced method for recognition of facial expressions using convolutional neural network. In 2024 5th International Conference on Intelligent Communication Technologies and Virtual Mobile Networks (ICICV) (pp. 173-175). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "16", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Enhanced Tea Leaf Disease Detection using Deep Learning. In 2024 Second International Conference on Emerging Trends in Information Technology and Engineering (ICETITE) (pp. 1-7). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "17", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "4", "Details of Research Publication": "Point of Care Noninvasive Screening Tool for Early Detection of Anemia using Smartphone. In 2024 Second International Conference on Emerging Trends in Information Technology and Engineering (ICETITE) (pp. 1-5). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "18", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "5", "Details of Research Publication": "Design and Comparison Of Deep Learning Architecture For Image-based Detection of Plant Diseases. In AI and IoT-based intelligent Health Care & Sanitation (pp. 222-239). Bentham Science Publishers", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "19", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "A deep transfer learning-based convolution neural network model for COVID-19 detection using computed tomography scan images for medical applications. Advances in Engineering Software,175.2023", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "20", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "3", "Details of Research Publication": "Image Watermarking Based Data Hiding by Discrete Wavelet Transform Quantization Model with Convolutional Generative Adversarial Architectures. Applied Sciences,13(2),pp.804.2023", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "21", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "3", "Details of Research Publication": "Smart diagnostic system for early detection and prediction of polycystic ovary syndrome. In 2023 International Conference on Computer Communication and Informatics (ICCCI) (pp. 1-6). IEEE", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "22", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "3", "Details of Research Publication": "Empirical analysis on crime prediction using machine learning. In 2023 International conference on computer communication and informatics (ICCCI) (pp. 1-5). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "23", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "2", "Details of Research Publication": "A novel method for pneumothorax diagnosis and segmentation using deep convolution neural network. In 2023 International Conference on Computer Communication and Informatics (ICCCI) (pp. 1-8). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "24", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Analysis of COVID-19 Epidemic Disease Dynamics Using Deep Learning. Lecture Notes on Data Engineering and Communications Technologies,140, pp. 323-334", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "Q4"},
            {"S.No": "25", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "2", "Details of Research Publication": "An optimal more than one stage (MTOS) authentication model to ensure security in cloud computing. In Artificial Intelligence for Internet of Things (pp. 75-83). CRC Press", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "26", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "2", "Details of Research Publication": "Product Recommendation System using Deep Learning based Recurrent Neural Network. In 2023 International Conference on Computer Communication and Informatics (ICCCI) (pp. 1-7). IEEE", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "27", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "2", "Details of Research Publication": "Yolo based license plate detection of triple riders and violators. In 2023 International Conference on Computer Communication and Informatics (ICCCI) (pp. 1-6). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "28", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "3", "Details of Research Publication": "An Efficient AlexNet Deep Learning Architecture for Automatic Diagnosis of Cardio-Vascular Diseases in Healthcare System. Wireless Personal Communications,126, pp.493–509, 2022", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "29", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "3", "Details of Research Publication": "Biometric Authentication-Based Intrusion Detection Using Artificial Intelligence Internet of Things in Smart City.Energies,15(19), pp.7430,2022", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "30", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "Machine learning based adult obesity prediction. In 2022 International Conference on Computer Communication and Informatics (ICCCI) (pp. 1-5). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "31", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "2", "Details of Research Publication": "Diagnosis of pneumonia using deep learning techniques. In 2022 Second International Conference on Advances in Electrical, Computing, Communication and Sustainable Technologies (ICAECT) (pp. 1-5). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "32", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "Coronary artery disease prediction using machine learning techniques. In 2022 8th international conference on advanced computing and communication systems (ICACCS) (Vol. 1, pp. 1029-1034). IEEE", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "33", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "3", "Details of Research Publication": "Low power device coordination in internet of things environment using analytic hierarchy process model\", Concurrency and Computation: Practice and Experience, Vol.37, No.7, pp.e5022,2021.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "34", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Deep Q-Learning-Based Neural Network with Privacy Preservation Method for Secure Data Transmission in Internet of Things (IoT) Healthcare Application.Electronics,11(1), pp.157.2022", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "35", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "5", "Details of Research Publication": "Artificial intelligence applications in different imaging modalities for corneal topography. Survey of Ophthalmology,67(3), pp.801-816.2022", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "36", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Prediction and Analysis of Heart disease using Data mining Algorithms. Proceedings of the 3rd International Conference on Inventive Research in Computing Applications Icirca 2021 pp. 651-658", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "37", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "2", "Details of Research Publication": "Investigation and comparison of different CNN architectures on tomato leaf disease prediction using deep learning. In AIP Conference Proceedings (Vol. 2387, No. 1, p. 080001). AIP Publishing LLC.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "38", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "2", "Details of Research Publication": "Machine learning approach for detection of keratoconus. In IOP conference series: materials science and engineering (Vol. 1055, No. 1, p. 012112). IOP Publishing", "Indexing": "WoS", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "39", "Publication Affiliation": "Others", "Academic Year": "2019-20", "Author Position": "3", "Details of Research Publication": "Continuous authentication consoles in mobile ad hoc network (MANET). Cluster Computing, 22(4), pp.7777-7786.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "40", "Publication Affiliation": "Others", "Academic Year": "2019-20", "Author Position": "3", "Details of Research Publication": "Performance enhancement of IPv6 low power wireless personal area networks (6LoWPAN) by Lamport’s algorithm. Cluster Computing, 22(4), pp.7745-7750", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "41", "Publication Affiliation": "Others", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Collaborative recommendations using deep learning approaches. International Journal of Advanced Science and Technology29(3 Special Issue), pp. 955-961", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "42", "Publication Affiliation": "Others", "Academic Year": "2018-19", "Author Position": "1", "Details of Research Publication": "An efficient approach to determine number of clusters using Principal Component Analysis. In 2018 International Conference on Current Trends towards Converging Technologies (ICCTCT) (pp. 1-6). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "43", "Publication Affiliation": "Others", "Academic Year": "2016-17", "Author Position": "1", "Details of Research Publication": "Text sentiment computation for online forums hotspot detection. International Journal of Information and Communication Technology,8(4),pp.328-343.June 2016.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "44", "Publication Affiliation": "Others", "Academic Year": "2015-16", "Author Position": "1", "Details of Research Publication": "Forecasting Indian Stock Market Using Particle Swarm Optimization and Support Vector Machine. International Journal of Applied Engineering,10(1),pp.1891-1900", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "45", "Publication Affiliation": "Others", "Academic Year": "2014-15", "Author Position": "1", "Details of Research Publication": "Cuckoo optimized SVM for stock market prediction. In 2015 international conference on innovations in information, embedded and communication systems (ICIIECS) (pp. 1-5). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "46", "Publication Affiliation": "Others", "Academic Year": "2013-14", "Author Position": "1", "Details of Research Publication": "Sentiment analysis and classification based on textual reviews. In 2013 international conference on Information communication and embedded systems (ICICES) (pp. 271-276). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "47", "Publication Affiliation": "Others", "Academic Year": "2012-13", "Author Position": "1", "Details of Research Publication": "Online forums hotspot prediction based on sentiment analysis. Journal of Computer Science,8(8),pp.1219-1224.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "48", "Publication Affiliation": "Others", "Academic Year": "2012-13", "Author Position": "1", "Details of Research Publication": "A semantic enhanced approach for online hotspot forums detection. In 2012 International Conference on Recent Trends in Information Technology (pp. 497-501). IEEE", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Research Projects & Events",
          content: [
            {"S.No": "1", "Affiliation": "Others", "Academic Year": "2024-25", "Type": "Project", "Role": "Supervisor", "Title": "AI-Powered Healthcare: A Centralized Platform for Real-Time Monitoring of Attendance and Services", "Amount": "10,000", "Agency": "TNSDC"},
            {"S.No": "2", "Affiliation": "Others", "Academic Year": "2023-24", "Type": "Funded Project", "Role": "P. I.", "Title": "Development of AI-Enabled Deep Learning Models for Cyberbullying Detection in Online Social Media and its Impact on the Quality of Life among Students", "Amount": "8,64,000", "Agency": "ICSSR"},
            {"S.No": "3", "Affiliation": "Others", "Academic Year": "2022-23", "Type": "Funded Project", "Role": "Co-P. I.", "Title": "Design and Development of AI powered Deep Learning Model for COVID-19 Identification, Diagnosis and prediction of Outbreak Management", "Amount": "9,14,333", "Agency": "AICTE"},
            {"S.No": "4", "Affiliation": "Others", "Academic Year": "2022-23", "Type": "Seminar", "Role": "Coordinator", "Title": "Perspective of Probabilistic Model Construction and Bayesian Deep Learning", "Amount": "75,000", "Agency": "NBHM"},
            {"S.No": "5", "Affiliation": "Others", "Academic Year": "2015-26", "Type": "Workshop", "Role": "Co- Coordinator", "Title": "Introduction to Design of Algorithms", "Amount": "1,52,000", "Agency": "IIT, Kharagpur"},
            {"S.No": "6", "Affiliation": "Others", "Academic Year": "2008-09", "Type": "SDP", "Role": "Coordinator", "Title": "Case Tools – An Overview", "Amount": "1,85,000", "Agency": "AICTE"},
            {"S.No": "7", "Affiliation": "Others", "Academic Year": "2006-07", "Type": "Carrier Oriented Programme", "Role": "Coordinator", "Title": "Medical Transcription", "Amount": "7,00,000", "Agency": "UGC"},
            {"S.No": "8", "Affiliation": "Others", "Academic Year": "2003-04", "Type": "Student Project", "Role": "Supervisor", "Title": "Domicile Security Monitor", "Amount": "5,000", "Agency": "TNSCST"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "Others", "Academic Year": "2021", "Application ID": "202141012686", "Title of the Patent": "Development of IoT Based House Hold Health Safety System", "Status": "Published"}
          ]
        },
        {
          title: "Consultancy",
          content: [
            {"S.No": "1", "Affiliation": "Others", "Academic Year": "2024-25", "Client/Organization": "The Coimbatore Auto Sports Club, Coimbatore", "Project": "Rally results & Standings", "Amount": "11,800"},
            {"S.No": "2", "Affiliation": "Others", "Academic Year": "2024-25", "Client/Organization": "Agri Machinery INC, Thiruchengode", "Project": "Sales and Service", "Amount": "11,800"},
            {"S.No": "3", "Affiliation": "Others", "Academic Year": "2024-25", "Client/Organization": "Abi Hollow Bricks, Erode", "Project": "Billing System", "Amount": "11,800"},
            {"S.No": "4", "Affiliation": "Others", "Academic Year": "2023-24", "Client/Organization": "Sri Vinayaga Spares, Erode", "Project": "Website Development", "Amount": "5,900"},
            {"S.No": "5", "Affiliation": "Others", "Academic Year": "2023-24", "Client/Organization": "Thirumakal Auto Mobiles,Kavindapadi, Erode", "Project": "Website Development", "Amount": "5,900"},
            {"S.No": "6", "Affiliation": "Others", "Academic Year": "2022-23", "Client/Organization": "Shri Ranga Jewellery, Elatheri", "Project": "Website Development", "Amount": "5,000"},
            {"S.No": "7", "Affiliation": "Others", "Academic Year": "2022-23", "Client/Organization": "Webbase Tech, Erode", "Project": "Website Development", "Amount": "5,000"},
            {"S.No": "8", "Affiliation": "Others", "Academic Year": "2020-21", "Client/Organization": "Star Yogi Digital Studios and Videos, Kaniyur", "Project": "Website Development", "Amount": "5,000"},
            {"S.No": "9", "Affiliation": "Others", "Academic Year": "2020-21", "Client/Organization": "Sri Thirumalaivasa Labour Body Builders, Sankagiri, Salem.", "Project": "Truck Desk Web Application Development", "Amount": "5,000"},
            {"S.No": "10", "Affiliation": "Others", "Academic Year": "2019-20", "Client/Organization": "Sree Ranga Jawli Stores, Ariyalur", "Project": "Website Development", "Amount": "5,000"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Best Faculty Award, Kongu Engineering College, Perundurai, Erode (2023)",
            "Distinguished Women in Engineering Award, Venus International Foundation, Chennai (2018)",
            "Appreciation Award for producing excellent results in Anna University Examinations (Nov/Dec 2003), Kongu Engineering College, Perundurai, Erode  (2004)",
            "Reviewer in peer reviewed journals",
            "Journal of Super Computers",
            "Computers in Biology and Medicine",
            "Peer J Computer Science",
            "Journal of Computer Science",
            "Computer Methods in Biomechanics and Biomedical Engineering: Imaging & Visualization"
          ]
        }
      ]
    },

    "Dr. S. Kusuma": {
        "name": "Dr. S. Kusuma",
        "email": "dshod@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/c9fcfd6e1946a61df27003a2c31fbb64.JPG",
        "designation": "Asst. Professor &amp; Head",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Post-Doctoral Researcher",
                            "Specialization": "Deep Learning",
                            "Branch": "CSE",
                            "College Name/University": "Lincoln University College, Malaysia",
                            "Year of Passing": "2026"
                        },
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Deep Learning",
                            "Branch": "CSE",
                            "College Name/University": "VIT University",
                            "Year of Passing": "2023"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Madanapalle Institute of Technology & Science, JNTUA",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "R.L.Jalappa Institute Of Technology & Science, Bangalore/ V.T.U Belgaum.",
                            "Year of Passing": "2008"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine Learning and Deep Neural Networks, Data Science and analytics, Time-Series Data Analysis"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=37117010500",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/280514",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=TU22E6AAAAAJ&view_op=list_works&sortby=pubdate",
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
                            "Author Position": "2",
                            "Details of Research Publication": "BetelProNet Framework: Efficient Deep Learning Model for Betel Leaf Disease Detection",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Optimized Neural Network for Automated Cardiovascular Disease Classification: Meta-heuristic Enabled Model. SN Computer Science, 6(1), 53. Scopus Article Q2",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Text-Based Audio Correction Using Deep Learning Framework. In 2024 International Conference on Emerging Research in Computational Science (ICERCS) (pp. 1-6). IEEE.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Unlocking a New Era in Human-Computer Interaction with Transformative AI Virtual Mice for Unparalleled Accessibility, Hygiene, and User Experience. In 2024 International Conference on Recent Advances in Science and Engineering Technology (ICRASET) (pp. 1-5). IEEE",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "A hybrid deep learning approach for early detection and classification of lung cancer using the pelican optimization algorithm. In 2024 International Conference on Distributed Computing and Optimization Techniques (ICDCOT) (pp. 1-6). IEEE",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Early betel leaf disease detection using vision transformer and deep learning algorithms. International Journal of Information Technology, 16(1), 169-180.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "ECG based cardiac disorder classification using MobileNetV3 and LSTM",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "A hybrid model for skin disease classification using transfer learning. In 2022 Third International Conference on Intelligent Computing Instrumentation and Control Technologies (ICICICT) (pp. 1093-1096). IEEE",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Bidlnet: An integrated deep learning model for ecg-based heart disease diagnosis. International Journal of Advanced Computer Science and Applications, 13(6).",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "ECG signals-based automated diagnosis of congestive heart failure using Deep CNN and LSTM architecture. Biocybernetics and Biomedical Engineering, 42(1), 247-257",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Heart Disease Classification Using Multiple K-PCA and Hybrid Deep Learning Approach. Comput. Syst. Sci. Eng., 41(3), 1273-1289",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Cardiovascular Disease Prediction and Comparative Analysis of Varied Classifier Techniques. In 2021 2nd Global Conference for Advancement in Technology (GCAT) (pp. 1-7). IEEE",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Analysis on deep learning methods for ECG based cardiovascular disease prediction. Scalable Computing: Practice and Experience, 21(1), 127-136.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "Driver distraction detection using deep learning and computer vision. In 2019 2nd international conference on intelligent computing, instrumentation and control technologies (ICICICT) (Vol. 1, pp. 289-292). IEEE",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "IOT and Big data analytics in e-Learning: A technological perspective and review. International Journal of Engineering and Technology (UAE), 7(1), 164-167.",
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
                            "Funded Project /Event": "Event",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "ATAL VAANI",
                            "Amount in Rs. /-": "2,00,000",
                            "Funding Agency": "AICTE"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Funded Project /Event": "Event",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "ATAL FDP",
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
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "202441095830",
                            "Title of the Patent": "A system and method for detecting and mitigating vehicle horn misuse in real time",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Application ID": "6327951",
                            "Title of the Patent": "Smart Automobile Health Diagnostic Device",
                            "Status": "Granted"
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
                            "Name of the Consulting Firm": "Kmbara Data Science Consulting, USA",
                            "Title of the Project/Event": "Data Analysis Research Project on an Organ Transplant System",
                            "Amount in Rs. /-": "$150"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Name of the Consulting Firm": "Ravuru Tech Pvt. Ltd.,Bangalore",
                            "Title of the Project/Event": "A customized LMS platform tailored to corporate e-learning and content delivery needs",
                            "Amount in Rs. /-": "15,000"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Received the prestigious Jyestha Acharya Award as part of the Bharat Education Excellence Awards 2024 and 2025.",
                        "Editorial Board Member, American Journal of Artificial Intelligence &ndash; Since 2025.",
                        "Global faculty award from AKS Education Awards 2023.",
                        "AWS Acdemy Spoc for the Institution.",
                        "IBM SPOC for college from 2010 to till date.",
                        "Mentor for Google DSC program at our campus in the year 2017.",
                        "Best IBM Mentor award in 2014.",
                        "Mentor for Smart India Hackathon 2020 edition.",
                        "AWS Data Engineering Certified.",
                        "AWS GEN AI Certified",
                        "AWS Cloud Essentials Certified",
                        "Certified in &ldquo;Data analysis using R&rdquo; course at big data university.",
                        "Certified in &ldquo; LINUX &ldquo;course at edx.",
                        "IBM certified Associate Developer &ldquo;Rational application developer&rdquo; for websphere software v6.0.",
                        "Session speaker for five days online workshop on &ldquo;Recent Trends in Machine Learning and Big Data&rdquo; at MITS, Madanapalle.",
                        "Resource person on AI/ML applications in health informatics in One Week Online Faculty Induction Workshop on Thrust Areas organized by Dept. of CSE, Madanapalle Institute of Technology & Science, Madanapalle from 10th oct 2022 to 15th oct 2022.",
                        "Session speaker for five days Faculty Development Program on &ldquo;Mathematical Foundations for Computational Intelligence,&rdquo; at MITS, Madanapalle.",
                        "Resource person for guest lecture on &ldquo;Agentic AI in Action:Shaping the future of Intelligent Systems&rdquo;,at Annamacharya Institute of Technology & Science,Kadapa on 27.9.25.",
                        "Jury member for Smart India Hackathon at Aditya College of engineering,Madanapalle on 25.9.25.",
                        "Resource person for FDP on Theme Quantum Machine Learning: The Next Leap in AI ,Delivered a session on Frontiers of Quantum Computing: Innovations and Applications in Contemporary Science and Engineering organized by Department of Computer Science & Engineering, Annamacharya Institute of Technology & Science,Kadapa on 06.11.25."
                    ]
                }
            ]
    },

    "Dr. S. Gopalakrishnan": {
      name: "Dr. S. Gopalakrishnan",
      designation: "Asst. Professor",
      email: "gopalakrishnans@mits.ac.in",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/Gopalakrishnan.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "CSE", "Branch": "CSE", "College Name/University": "Anna University", "Year of Passing": "2023"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "IT", "Branch": "IT", "College Name/University": "Sathyabama University", "Year of Passing": "2010"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "IT", "Branch": "IT", "College Name/University": "University of Madras", "Year of Passing": "2004"}
          ]
        },
        {
          title: "Research Areas",
          content: "Data Science, Internet of Things, Machine Learning"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57326510000"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/397154"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?hl=en&user=LfuiC6cAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "4"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "IoT-Based environmental control System for Fish farms with sensor Integration and machine learning decision support", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "An efficient data mining technique and privacy preservation model for healthcare data using improved darts game optimizer-based weighted deep neural network and hybrid encryption", "Indexing": "SCE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Adaptive Distributed Honeypot Detection Network for Enhanced Cybersecurity Against DoS and DDoS Attacks", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "UNCA: a neutrosophic-based framework for robust clustering and enhanced data interpretation", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "2", "Details of Research Publication": "IoT-Based environmental control System for Fish farms with sensor Integration and machine learning decision support", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Sensitive product feature integrity and confidentiality using blockchain-based internet of things (IoT) architecture", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2023-24", "Application ID": "02341023252A", "Title of the Patent": "Machine learning based edge computing to handle the large amounts of data Generated by industrial machines", "Status": "Granted"}
          ]
        }
      ]
    },

    "Dr. M. Kiran Kumar": {
        "name": "Dr. M. Kiran Kumar",
        "email": "kirankumarm@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Kiran.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "AI",
                            "Branch": "CSE",
                            "College Name/University": "VIT University",
                            "Year of Passing": "2024"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Software Engineering",
                            "Branch": "CSE",
                            "College Name/University": "JNTUCEA",
                            "Year of Passing": "2011"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "MITS-JNTUCEA",
                            "Year of Passing": "2009"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine Learning, Deep Learning, Medical Image Processing"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=59333492500",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/280512",
                        "Google scholar : https://scholar.google.com/citations?user=sXEICl4AAAAJ",
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
                            "Details of Research Publication": "QuantumResist: integrating shor&rsquo;s algorithm, lattice-based cryptography, and quantum error correction for enhanced secure communication in post-quantum cryptography. J Supercomput 81, 1391 (2025). https://doi.org/10.1007/s11227-025-07837-z",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Speech Recognition and Translation using Machine Learning, 2025 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT), Bengaluru, India, 2025, pp. 1-6, doi: 10.1109/CONECCT65861.2025.11306412.",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "AI-Enabled Optimization of Fractional Order PID Controllers for Robust Stability in All-Electric Naval Energy Systems, 2025 14th International Conference on Renewable Energy Research and Applications (ICRERA), Vienna, Austria, 2025, pp. 1864-1869, doi: 10.1109/ICRERA66237.2025.11283798. keywords: {Genetic Algorithm (GA);Fractional Order PID (FOPID);Distributed Generations (DGs)}",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "Metaheuristic AI-Optimized Buck-Boost Converter for Efficient V2G and G2V Power Exchange in Electric Vehicles, 2025 14th International Conference on Renewable Energy Research and Applications (ICRERA), Vienna, Austria, 2025, pp. 1870-1875, doi: 10.1109/ICRERA66237.2025.11283851",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Advancements in Optimization Algorithms for Lung Nodule Detection and Classification: A Review, 2023 1st International Conference on Optimization Techniques for Learning (ICOTL), Bengaluru, India, 2023, pp. 1-6, doi: 10.1109/ICOTL59758.2023.10435253.",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Automated Lung Nodule Detection in CT Images by Optimized CNN: Impact of Improved Whale Optimization Algorithm. Computer Assisted Methods in Engineering and Science, 29(1-2), 7&ndash;31. https://doi.org/10.24423/cames.372",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "A Survey of Machine Learning Techniques for Cancer Disease Prediction and Diagnosis.Indian Journal of Public Health Research & Development, 2019, Vol 10, Issue 4, p157",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2016-17",
                            "Author Position": "1",
                            "Details of Research Publication": "Survey on machine learning algorithms for liver disease diagnosis and prediction, International Journal of Engineering and Technology, vol. 7, no. 1.8, pp. 998&ndash;1002, Feb. 2018, doi: 10.14419/IJET.V7I1.8.9981",
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
                            "Academic Year": "2025-26",
                            "Funded Project /Event": "Event",
                            "Role": "Co-Coordinator",
                            "Title of the Project/Event": "AI Innovations for Smart Villages and Rural Mobility for Sustainable Growth Emerging Field&rdquo;",
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
                            "Academic Year": "2025-26",
                            "Application ID": "471088-001",
                            "Title of the Patent": "Multilingual Wearable Translator",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Application ID": "202541108880",
                            "Title of the Patent": "Blockchain-Based Security Frameworks to Improve Decentralized Trust and Data Integrity",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Application ID": "202541108876",
                            "Title of the Patent": "Cloud Guardians: Elevating Security with Probabilistic Graphical Models",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "MITS- Best Teacher award for the academic year 2024-25."
                }
            ]
    },

    "Dr. K. Pugazharasi": {
        "name": "Dr. K. Pugazharasi",
        "email": "pugazharasik@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. K. Pugazharasi.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "ICE",
                            "Branch": "CSE",
                            "College Name/University": "Anna University, Chennai",
                            "Year of Passing": "2026"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "K.S.R College of Engineering, Anna University",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Velalar College of Engineering and Technology, Anna University",
                            "Year of Passing": "2009"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57750702600",
                        "Vidwan : https://mits.irins.org/profile/236145",
                        "Google scholar : https://scholar.google.co.in/citations?user=mWTBAxMAAAAJ",
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
                            "Details of Research Publication": "Enhanced glioma tumor detection and segmentation using modified deep learning with edge fusion and frequency features",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Enhancing glaucoma diagnosis: Generative adversarial networks in synthesized imagery and classification with pretrained MobileNetV2",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Machine Learning Algorithms for Predicting Depression, Anxiety and Stress in Modern Life",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "3",
                            "Details of Research Publication": "Liver Disease Prediction using Logistic Regression",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
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
                            "Academic Year": "2020-21",
                            "Application ID": "202141020113A",
                            "Title of the Patent": "Design and Method of Efficient Detection of Structural Similarity in Mammograms Using SVM Classifier",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Application ID": "202041007785A",
                            "Title of the Patent": "Novel Switching Agent for Zigbee Wireless Sensor Network using LAR",
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
                            "Academic Year": "2024-25",
                            "Name of the Consulting Firm": "OSE Labs",
                            "Title of the Project/Event": "Website Development for OSE Labs",
                            "Amount in Rs. /-": "9,440"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Name of the Consulting Firm": "VGD Textiles",
                            "Title of the Project/Event": "Website Development for VGD Textiles",
                            "Amount in Rs. /-": "9,440"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Name of the Consulting Firm": "Samy Bus Service",
                            "Title of the Project/Event": "Online Bus Ticket Reservation System",
                            "Amount in Rs. /-": "9,440"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Name of the Consulting Firm": "Vaagai Couture",
                            "Title of the Project/Event": "Online Selling Website Development for Vaagai Couture",
                            "Amount in Rs. /-": "5,900"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "NPTEL Discipline Star during July &ndash; October 2025 by IIT, Madras."
                }
            ]
    },

    "Mr. T. Balaji": {
        "name": "Mr. T. Balaji",
        "email": "balajit@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. T. Balaji.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Machine Learning",
                            "Branch": "Information Technology",
                            "College Name/University": "Anna University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Networking",
                            "Branch": "Information Technology",
                            "College Name/University": "VIT University",
                            "Year of Passing": "2009"
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
                    "content": "Machine Learning, Deep Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=59050802800",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/538079",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=VMOGL2wAAAAJ",
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
                            "Details of Research Publication": "Metaheuristic Optimization of Random Forest for Lung Cancer Prediction. Int Res J Multidiscip Scope. 2026; 7(1): 1666-1678. DOI: 10.47857/irjms.2026.v07i01.08680",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "-"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Optimizing Skin Cancer Detection Using the MobileNet Deep Learning Model: A Lightweight and Efficient Approach",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Integrating IoMT and Block chain in Smart Healthcare: Challenges and Solutions",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;A review on impacts of machine learning in diverse fields.&quot; AIP Conference Proceedings. Vol. 2935. No. 1. AIP Publishing LLC, 2024.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "4",
                            "Details of Research Publication": "&quot;A Short Overview on Various Bio-Inspired Algorithms.&quot; Machine Learning in Information and Communication Technology: Proceedings of ICICT 2021, SMIT (2022): 295-301.",
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
                            "Academic Year": "2024-25",
                            "Application ID": "202541031164 A",
                            "Title of the Patent": "DEVELOPMENT OF A FIREFIGHTING HUMANOID ROBOT FOR DEFENCE APPLICATIONS",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mrs. R. Roopa": {
        "name": "Mrs. R. Roopa",
        "email": "roopar@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. R. Roopa.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Deep Learning",
                            "Branch": "CSE",
                            "College Name/University": "Sri Venkateswara University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Chadalawada Ramanamma Engineering College",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Acharya Nagarjuna University",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Sree Vidyanikethan Engineering College",
                            "Year of Passing": "2006"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57194222872",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/451394",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=MmrdymUAAAAJ",
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
                            "Details of Research Publication": "&quot;An Optimized Convolutional Neural Network for Automated Plant Disease Classification Using Hyperparameter Tuning.&quot; 2025 3rd International Conference on Intelligent Cyber Physical Systems and Internet of Things (ICoICI). IEEE, 2025. SCOPUS CONFERENCE NONE",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "&quot;Evolutionary Algorithms and Quantum Computing&mdash;Pioneering the Next Era of Intelligence and Innovation.&quot; Quantum Computing. CRC Press, 2026. 287-307.",
                            "Indexing": "Scopus",
                            "Publication": "Bookchapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "5",
                            "Details of Research Publication": "&quot;A Robust ACLR Hybrid Approach for Real-Time Botnet Threat Detection in IoT Devices.&quot; 2026 5th International Conference on Sentiment Analysis and Deep Learning (ICSADL). IEEE, 2026.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;Real-Time Crowd Detection for Overcrowding Management Using OpenCV and PyTTSx.&quot; International Conference on Deep Sciences for Computing and Communications. Cham: Springer Nature Switzerland, 2024.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;Metaverse-assisted telesurgery in Healthcare 5.0.&quot; Metaverse in the Healthcare Industry. Elsevier, 2026. 199-211.",
                            "Indexing": "Scopus",
                            "Publication": "Bookchapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "&quot;Fuzzy Logic for ADR Uncertainty Analysis.&quot; International Conference on Information Technology and Artificial Intelligence. Singapore: Springer Nature Singapore, 2025.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "&quot;Enhanced skin lesion classification using hybrid feature extraction and CNN.&quot; AIP Conference Proceedings. Vol. 3371. No. 1. AIP Publishing LLC, 2026.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "An Optimized Hybrid CNN-AlexNet Framework for Real-Time Crime Activity and Suspicious Object Detection",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Hybrid Deep Learning Models for Anomaly Detection in CCTV Video Surveillance",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "A Generalized Deep Learning Approach for Cross-Crop Plant Disease Detection Using the Plant Village Dataset",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "A Deep Learning Framework for Human Motion RecognitionUsing &lrm;Compact CNNs and Swarm Optimization",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Metaverse-assisted telesurgery in Healthcare 5.0.",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Advancements in Real Time Human Activity Recognition via Innovative Fusion of 3DCNN and Convlstm Models",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Automated Sleepiness Detection via EEG Brainwave Analysis: A Nonlinear Ensemble Approach with Optimized Hyper-Tuning Strategies",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Enhanced Phishing URL Detection Using a Novel GRU-CNN Hybrid Approach",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Intrusion Detection System for IoT Networks",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Forecasting Online Shoppers Purchase Intentions with Cat Boost Classifier",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "5",
                            "Details of Research Publication": "Navigating Green Computing Challenges and Strategies for Sustainable Solutions",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013-14",
                            "Author Position": "3",
                            "Details of Research Publication": "A new approach for secure data transfer in audio signals using DWT",
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
                            "Application ID": "202441006903",
                            "Title of the Patent": "SYSTEM AND METHOD FOR TRACKING AND MANAGING CHRONIC DISEASES USING IOT AND MACHINE LEARNING",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Application ID": "6347613",
                            "Title of the Patent": "Artificial Intelligence Based Shopping Assistance Robot",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "202441068879",
                            "Title of the Patent": "Improving Student Performance with IoT-Enhanced Learning Environments: A Machine Learning Perspective",
                            "Status": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "202441068871",
                            "Title of the Patent": "A MACHINE LEARNING APPROACH FOR PREDICTING ENTREPRENEURIAL SUCCESS IN HIGHER EDUCATION",
                            "Status": "Published"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "202441093441",
                            "Title of the Patent": "A SYSTEM AND METHOD OF REAL-TIME WILDLIFE MONITORING",
                            "Status": "Published"
                        },
                        {
                            "S.No": "6",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Application ID": "202521116864",
                            "Title of the Patent": "PREDICTIVE MAINTENANCE SYSTEM USING MACHINE LEARNING TECHNIQUES",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Awarded the NPTEL Domain Certificate in Programming for consistent excellence across multiple programming courses.",
                        "NPTEL Discipline Star Award for outstanding performance in the Programming discipline."
                    ]
                }
            ]
    },

    "Mrs. Vidhyashree B": {
        "name": "Mrs. Vidhyashree B",
        "designation": "Asst. Professor",
        "email": "vidhyashreeb@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. Vidhyashree B.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE & ISE",
                            "Branch": "Computer Science & Engineering",
                            "College Name/University": "Visvesvaraya Technological University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Computational Engineering",
                            "Branch": "Computational Engineering",
                            "College Name/University": "NITTE, Meenakshi Institute of Technology",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Information Science and Engineering",
                            "Branch": "Information Science and Engineering",
                            "College Name/University": "Sambhram Institute of Technology, Bangalore",
                            "Year of Passing": "2013"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57771733300",
                        "Vidwan :",
                        "Google scholar :",
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
                            "Details of Research Publication": "Responsync:Real &ndash;Time Emergency Response Empowered by Machine Learning",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "A Comprehensive Survey on Skin disease detection using deep learning",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Evaluation of sequential feature selection in improving the K-nearest neighbor classifier for diabetes prediction",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Forecasting Online Shoppers Purchase Intentions with Cat Boost Classifier",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "A Comprehensive IoT-Based Automation System for Enhanced Productivity and Sustainability for Advancing Farming Efficiency",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Prediction of OPTIMIZED Stock Market Trends using Hybrid Approach Based on KNN and Bagging Classifier (KNNB)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
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
                            "Application ID": "202541068232 A",
                            "Title of the Patent": "A system and method for real time skin disease detection using deep learning based hybrid segmentation and classification with mobile approach application integration",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Application ID": "453263-001",
                            "Title of the Patent": "IOT enabled digital nursery for automated plant care",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Application ID": "405206-001",
                            "Title of the Patent": "AL and ML Based Robot for Inventory Management",
                            "Status": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "Others",
                            "Academic Year": "2022",
                            "Application ID": "114970",
                            "Title of the Patent": "Smart Miniature IOT based Water Meter",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mrs. F. Twinkle Graf": {
        "name": "Mrs. F. Twinkle Graf",
        "designation": "Asst. Professor",
        "email": "twinklegraff@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Twinkle.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "ICE",
                            "Branch": "ICE",
                            "College Name/University": "Anna University",
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
                            "Year of Passing": "2013"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=59739179600",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/530304",
                        "Google scholar : https://scholar.google.co.in/citations?hl=en&user=FCBRSHAAAAAJ",
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
                            "Details of Research Publication": "Malicious user classification in cognitive 5G networks using novel improved bidirectional encoder representations from transformers model.&quot; Scientific Reports 15.1 (2025): 43415.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "A Hybrid Intrusion Detection System using Explainable AI for Enhanced Accuracy and Transparency. In 2025 International Conference on Electronics and Renewable Systems (ICEARS) (pp. 923-929). IEEE.",
                            "Indexing": "IEEE",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                }
            ]
    },

    "Mr. A. Kalyan Kumar": {
        "name": "Mr. A. Kalyan Kumar",
        "email": "kalyankumara@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. A. Kalyan Kumar.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Machine Learning",
                            "Branch": "Computer Science & Engineering",
                            "College Name/University": "Acharya Nagarjuna University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Computer Science & Engineering",
                            "Branch": "Computer Science & Engineering",
                            "College Name/University": "SRK Institute of Technology",
                            "Year of Passing": "2017"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Computer Science & Engineering",
                            "Branch": "Computer Science & Engineering",
                            "College Name/University": "Sri Sarathi Institute of Engineering &Technology",
                            "Year of Passing": "2013"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine Learning, Data Mining"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58832808000",
                        "Vidwan : https://mits.irins.org/profile/460087",
                        "Google scholar : https://scholar.google.com/citations?user=hXzhO5cAAAAJ&hl=en",
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
                            "Details of Research Publication": "An opinionated sentiment analysis using a rule-based method, Bulletin of Electrical Engineering and Informatics 14(1), pp. 726-732",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Scalability and performance of decision tree for cardiovascular disease prediction, Iaes International Journal of Artificial Intelligence 13(3), pp. 2540-2545",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Machine Learning Driven Feature Extraction and Dimensionality Reduction for Image Classification Journal of Machine and Computing 4(3), pp. 541-552",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "The Future of Neurodiagnostic: Deep Learning for Earlier Intervention, Journal of Machine and Computing4(3), pp. 541-552",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Early prediction of chronic heart disease with recursive feature elimination and supervised learning techniques, Iaes International Journal of Artificial Intelligence 13(1), pp. 730-736",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Improving Cardiovascular Disease Prediction: Machine Learning and Cross-Fold Validation, 2024 IEEE International Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation Iatmsi 2024",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Feature Contribution to an In-Depth Understanding of the Machine Learning Model Interpretation, Przeglad Elektrotechniczny 2024(2), pp. 145-148",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Real-Time Eye-Tracking Mouse Control System Using OpenCV and Facial Landmark Detection, 2024 IEEE International Conference on Intelligent Signal Processing and Effective Communication Technologies Inspect 2024",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancing Alzheimers Disease Detection: A Comparative Study of Deep Learning Techniques with Transfer Learning and Custom CNN Models, ins 2024 2nd International Conference on Computational Intelligence and Network Systems",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "OLGV3 NET: OPTIMIZED LIGHTGBM WITH INCEPTIONV3 FOR ACCURATE MULTI-CLASS BREAST CANCER IMAGE CLASSIFICATION, Journal of Theoretical and Applied Information Technology 101(24), pp. 8147-8162",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                }
            ]
    },

    "Mrs. S. Manjula": {
        "name": "Mrs. S. Manjula",
        "email": "manjulaprabakaran@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. S. Manjula.JPG",
        "designation": "Asst. Professor",
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
                            "College Name/University": "SASTRA University",
                            "Year of Passing": "2009"
                        },
                        {
                            "Course": "M.Phil.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Bharathidasan University",
                            "Year of Passing": "2004"
                        },
                        {
                            "Course": "MCA",
                            "Specialization": "Computer Applications",
                            "Branch": "Computer Applications",
                            "College Name/University": "Bharathidasan University",
                            "Year of Passing": "2001"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Computer Science",
                            "Branch": "B.Sc.",
                            "College Name/University": "Bharathidasan University",
                            "Year of Passing": "1998"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine Learning, Cyber Security"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=59009845200",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/459932",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=8UCIheoAAAAJ",
                        "h-Index (As per Scopus Data) : 2"
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
                            "Details of Research Publication": "&quot;Hybrid Metaheuristic Optimization with Stacked Sparse Autoencoder for Enhanced Chronic Kidney Disease Detection and Classification.&quot; Diyala Journal of Engineering Sciences (2026): 158-170.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;Malware Analysis and Attribution in Human Threat Intelligence.&quot; Cyber Forensic Frameworks for User-Centric Human Threat Intelligence Analysis. IGI Global Scientific Publishing, 2026. 259-286.",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "-"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;Next-Gen Farming: Unleashing the Power of IoT and Blynk in Irrigation Management.&quot; International Conference on Deep Sciences for Computing and Communications. Cham: Springer Nature Switzerland, 2024.",
                            "Indexing": "Scopus",
                            "Publication": "Conference",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Book Chapter"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhanced chronic kidney disease detection using XGBoost with improved brainstorm optimization for hyperparameter tuning. Discover Appl Sci 7, 1181 (2025). https://doi.org/10.1007/s42452-025-07633-7",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "4",
                            "Details of Research Publication": "Meta Heuristic Image Optimisation in LiDAR Sensor Based on Cloud IoT Network and Deep Learning Algorithms.Remote Sensing in Earth Systems Sciences (2025): 1-10.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "3",
                            "Details of Research Publication": "Development of A Machine Learning-Based Security Module for &lrm;Detecting Exploit-Type Attacks in IoT Networks. International Journal of Basic and Applied Sciences, 14(3), 286-297",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Machine learning classifiers to predict the quality of semantic web queries. The Scientific Temper 15.01 (2024): 1777-1783.",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "Recent developments in flexible printed electronics and their use in food quality monitoring and intelligent food packaging. The Scientific Temper 14.03 (2023): 877-884.",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancing Kidney Stone Detection in CT scans with Image Processing and the DCNN-RELM Model. 2025 International Conference on Electronics and Renewable Systems (ICEARS).",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Unlocking a New Era in Human-Computer Interaction with Transformative AI Virtual Mice for Unparalleled Accessibility, Hygiene, and User Experience. 2024 International Conference on Recent Advances in Science and Engineering Technology (ICRASET) (pp. 1-5). IEEE.",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancing Fraud Detection with Deep Learning: A Robust Automated Counterfeit System. 2024 International Conference on Recent Advances in Science and Engineering Technology (ICRASET) (pp. 1-6). IEEE.",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "An IoT and Random Forest-DT-Based Early Enhanced Forest Fire Detection in Large and Small Targets. 2024 3rd International Conference for Innovation in Technology (INOCON) (pp. 1-6). IEEE",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Optimizing Chronic Kidney Disease Diagnosis: A Comprehensive Review of Metaheuristic Algorithms and Their Applications in Detection and Classification. 2024 8th International Conference on Electronics, Communication and Aerospace Technology (ICECA) (pp. 1654-1660). IEEE.",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancing Disease Prediction in Healthcare: A Comparative Analysis of PSO and Extreme Learning Approach. 2023 3rd International Conference on Innovative Mechanisms for Industry Applications (ICIMIA), pp. 1092-1097. IEEE, 2023.",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Cryptography and Network security ISBN: 978-81-19489-24-4",
                            "Indexing": "",
                            "Publication": "Book",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Big Data Science & Analytics ISBN: 978-81-962133-9-8",
                            "Indexing": "",
                            "Publication": "Book",
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
                            "Role": "Co-Coordinator",
                            "Title of the Project/Event": "Smart and Sustainable Waste Management Using IoT and Data Analytics",
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
                            "Affiliation": "MITS",
                            "Academic Year": "2026",
                            "Application ID": "202611051358 A",
                            "Title of the Patent": "Machine Learning-Based Iot Framework For Faculty Workload Analysis And Resource Allocation In Higher Education",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Application ID": "202521086616 A",
                            "Title of the Patent": "Machine Learning-Enabled System For Monitoring Faculty Behaviour And Optimizing Teaching Effectiveness In Higher Education",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Application ID": "202521087207 A",
                            "Title of the Patent": "Machine Learning-Driven Predictive Models For Enhancing Student Success And Entrepreneurial Skills In Higher Education",
                            "Status": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Application ID": "202441014907 A",
                            "Title of the Patent": "Analysing The Role Of Machine Learning For Driving The Future Of Autonomous Vehicles",
                            "Status": "Published"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Application ID": "202341008062 A",
                            "Title of the Patent": "Implementing Artificial Intelligence-Based Techniques For Social Media Marketing Analytics With Potential Uses Expectations",
                            "Status": "Published"
                        },
                        {
                            "S.No": "6",
                            "Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Application ID": "202341011082 A",
                            "Title of the Patent": "Internet Of Things Based Deep Learning Model To Recognize And Predict Kidney Disease Using Image Processing",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Awarded the SWAYAM&ndash;NPTEL Domain Star in Programming (October 2025), recognizing consistent excellence and active engagement in NPTEL programming courses.",
                        "Conferred with the prestigious NPTEL Discipline Star Award for the period July 1, 2024 &ndash; December 31, 2024, for sustained academic excellence across the discipline.",
                        "Recognized as a Top Performing Mentor in Privacy and Security in Online Social Media from Swayam NPTEL for the period (January 23, 2023 &ndash; April 22, 2023).",
                        "Honored as a Top Performing Mentor - Learning Analytics Tools during two academic cycles: July 17, 2023 &ndash; October 28, 2023 and July &ndash; December 2024."
                    ]
                }
            ]
    },

    "Mr. K. Durga Charan": {
        "name": "Mr. K. Durga Charan",
        "designation": "Asst. Professor",
        "email": "durgacharank@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. K. Durga Charan.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "IOT",
                            "Branch": "Information Technology",
                            "College Name/University": "JNTU, Kakinada",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Computations Engineering",
                            "Branch": "Computational Engineering",
                            "College Name/University": "IIIT, Nuzvid, RGUKT",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Information Technology",
                            "Branch": "Information Technology",
                            "College Name/University": "JNTUK",
                            "Year of Passing": "2012"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "IOT & Cloud Computing"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58153567000",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/277020",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=dnzi29AAAAAJ",
                        "h-Index (As per Scopus Data) : 1"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-2025",
                            "Author Position": "5",
                            "Details of Research Publication": "Deep Learning-Enabled Fault Diagnosis for Industrial IoT Networks: A Federated Learning Perspective, Vol. 11-No.2 (2025) pp. 1765-1772 International Journal of Computational and Experimental Science and Engineering (IJCESEN)",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-2025",
                            "Author Position": "3",
                            "Details of Research Publication": "INTRUSION DETECTION SYSTEM FOR CYBER SECURITY IN SMART AGRICULTURE WITH ABCIS TECHNIQUES 31st May 2024. Vol.102. No. 10 Journal of Theoretical and Applied Information Technology st",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-2025",
                            "Author Position": "5",
                            "Details of Research Publication": "International Journal of Computational and Experimental Science and Engineering (IJCESEN)",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-2025",
                            "Author Position": "3",
                            "Details of Research Publication": "Journal of Theoretical and Applied Information Technology",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-2022",
                            "Author Position": "2",
                            "Details of Research Publication": "Fourth International Conference on Emerging Research in Electronics, Computer Science and Technology (ICERECT)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                }
            ]
    },

    "Mrs. T. Swetha": {
        "name": "Mrs. T. Swetha",
        "email": "swethat@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. T. Swetha.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Cyber Security",
                            "Branch": "CSE",
                            "College Name/University": "Amrita Vishwa Vidyapeetham",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "JNTU Anantapur",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "JNTU Anantapur",
                            "Year of Passing": "2012"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Cyber Security"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57205732383",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/459973",
                        "Google scholar : https://scholar.google.com/citations?user=Ww9RZAUAAAAJ&hl=en&authuser=1",
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
                            "Author Position": "1",
                            "Details of Research Publication": "Leveraging AI for enhanced cybersecurity: a comprehensive review",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Intelligent Fault Diagnosis in Industrial Machinery: Leveraging AI with LSTM Autoencoder for Enhanced Fault Detection",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Fortifying Database Security: Integrating Advanced Honeypot Technology for Resilient SQL Injection Defense",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Enhancing Image Recognition for Security Applications: A Machine Learning Approach",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Forecasting Online Shoppers Purchase Intentions with Cat Boost Classifier",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Enhancing Cloud IoT Security With Blockchain and SDN",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Advanced Cardiovascular Disease Prediction: A Comparative Analysis of Ensemble Stacking and Deep Neural Networks",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Deep Learning Model for Intrusion Detection in SDN Networks",
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
                            "Application ID": "202441093441",
                            "Title of the Patent": "A System and Method of Real-Time Wildlife Monitoring",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Application ID": "",
                            "Title of the Patent": "AI Based Voice Sensitive Virtual Assistant Eye Wear Device",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "Recognized as NPTEL Discipline Star for the July&ndash;December 2025 session."
                }
            ]
    },

    "Mr. Vishnukumar Ravula": {
        "name": "Mr. Vishnukumar Ravula",
        "email": "vishnukumarr@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Vishnukumar Ravula.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "IOT Security",
                            "Branch": "CSE",
                            "College Name/University": "VIT University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "JNTUH",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "IT",
                            "Branch": "IT",
                            "College Name/University": "JNTUH",
                            "Year of Passing": "2014"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "IOT SECURITY"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=59121780300",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/594252",
                        "Google scholar : https://scholar.google.com/citations?user=w715mBUAAAAJ&hl=en&oi=ao",
                        "h-Index (As per Scopus Data) : 2"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024 -25",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancing phishing detection with dynamic optimization and character-level deep learning in cloud environments. PeerJ Computer Science, 11, e2640",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Study and Analysis of Various Smart Vehicle Vulnerable Prevention Using Digital Twin Technology: A Challenging Review, International Journal of Engineering Trends and Technology, vol. 72, no. 8, pp. 73-87, 2024",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "A hybrid wrapper technique enabled Network Intrusion Detection System for Software defined networking based IoT networks. In 2024 3rd International Conference on Artificial Intelligence For Internet of Things (AIIoT) (pp. 1-6). IEEE.",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Intelligent Connected Vehicle Intrusion Detection and Mitigation: An Analysis of Explainable AI. 2024 ICETCI 2024.IEEE (Scopus)",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "A Technologies Study on Trending for IoT Use Cases Aspires to Build Sustainable Smart Cities. Intelligent Systems and Sustainable Computational Models: Concepts, Architecture, and Practical Applications, 48.",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Exploring Explainable AI in Healthcare: Challenges and Future Directions. In Analyzing Explainable AI in Healthcare and the Pharmaceutical Industry (pp. 199-233). IGI Global",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Metaverse in Healthcare: Applications and Challenges",
                            "Indexing": "SCI",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                }
            ]
    },

    "Mr. Rajkumar. G": {
        "name": "Mr. Rajkumar. G",
        "email": "rajkumarg@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Rajkumar. G.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "St. Peters Institute Of Higher Education and Research",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Dr. M.G.R University",
                            "Year of Passing": "2009"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Priyadarshini Engineering College, Anna University",
                            "Year of Passing": "2006"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=59005449000",
                        "Vidwan : https://vidwan.inflibnet.ac.in//profile/460003",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=smrFCpcAAAAJ",
                        "h-Index (As per Scopus Data) : 4"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025 -26",
                            "Author Position": "4",
                            "Details of Research Publication": "&ldquo;A Intelligent Intrusion Mechanism for Sinkhole Attack in IOT Sensor Network&rdquo;. International Research Journal of Multidisciplinary Technovation 8 (2):166-80. https://doi.org/10.54392/irjmt26210.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025 -26",
                            "Author Position": "2",
                            "Details of Research Publication": "Machine learning-based solar power prediction for major Indian metro cities DOI: 10.11591/ijai.v15.i2.pp1362-1370",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025 -26",
                            "Author Position": "2",
                            "Details of Research Publication": "Investigating reading habits and their impact on reading performance among Indian undergraduate students DOI: 10.11591/ijere.v15i3.38490",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025 -26",
                            "Author Position": "2",
                            "Details of Research Publication": "Comparative analysis of explainable machine learning models for cardiovascular risk stratification using clinical data and shapley additive explanations",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025 -26",
                            "Author Position": "1",
                            "Details of Research Publication": "Development of an explainable machine learning model for Alzheimer&rsquo;s disease prediction using clinical and behavioural features",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024 -25",
                            "Author Position": "1",
                            "Details of Research Publication": "The Future of Neurodiagnostic: Deep Learning for Earlier Intervention",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024 -25",
                            "Author Position": "1",
                            "Details of Research Publication": "Evaluation of sequential feature selection in improving the K-nearest neighbor classifier for diabetes prediction",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024 -25",
                            "Author Position": "2",
                            "Details of Research Publication": "MACHINE LEARNING-DRIVEN ECOSYSTEM FOR EARLY DETECTION OF DoS ATTACKS IN IoT NETWORKS",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024 -25",
                            "Author Position": "1",
                            "Details of Research Publication": "Predicting Employee Attrition: A Comparative Analysis of Machine Learning Models Using the IBM Human Resource",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Improving the Performance of Machine Learning with Sequential Feature Selection and Grid Search",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "5",
                            "Details of Research Publication": "Consistency, local stability, and approximation of Shapash explanation",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Evaluation of Adaptive Synthetic Resampling Technique for Imbalanced Breast Cancer Identification",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Enhancing COVID-19 Prediction: Optimized Random Forest Classifier with Feature Selection",
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
                            "Application ID": "202641067160",
                            "Title of the Patent": "IOT BASED REAL TIME WASTE QUALITY ANALYSIS AND RECYCLING DECISION SYSTEM",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024 -25",
                            "Application ID": "202441061851 A",
                            "Title of the Patent": "NON-DOMINATED SORTING GENETIC ALGORITHM II (NSGA-II) BASED AUTOMATED TASK SCHEDULING SYSTEM FOR FOG-CLOUD COMPUTING ENVIRONMENTS",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2024 -25",
                            "Application ID": "202541031164 A",
                            "Title of the Patent": "DEVELOPMENT OF A FIREFIGHTING HUMANOID ROBOT FOR DEFENCE APPLICATIONS",
                            "Status": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Application ID": "6327994",
                            "Title of the Patent": "A system and method for detecting and mitigating vehicle horn misuse in real time",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "MITS",
                            "Academic Year": "2024 -25",
                            "Application ID": "202541031164 A",
                            "Title of the Patent": "DEVELOPMENT OF A FIREFIGHTING HUMANOID ROBOT FOR DEFENCE APPLICATIONS",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mr. G. Kiran Kumar": {
        "name": "Mr. G. Kiran Kumar",
        "designation": "Asst. Professor",
        "email": "kirankumarg@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. G. Kiran Kumar.JPG",
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
                            "College Name/University": "JNTU Kakinada",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "JNTU Kakinada",
                            "Year of Passing": "2011"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Edge Computing"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58793904200",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/551958",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=36erPYoAAAAJ",
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
                            "Author Position": "3",
                            "Details of Research Publication": "IJISAE",
                            "Indexing": "Scopus",
                            "Publication": "",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "ICETEC",
                            "Indexing": "Scopus",
                            "Publication": "",
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
                            "Academic Year": "2024",
                            "Application ID": "6327994",
                            "Title of the Patent": "SMART LOCKER SYSTEM USING DACTYLOGRAM",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Application ID": "6346513",
                            "Title of the Patent": "SMART FAKE NEWS DETECTION ENGINE USING MACHINE LEARING API",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mrs. Anuradha Prudhivi": {
        "name": "Mrs. Anuradha Prudhivi",
        "email": "anuradhaprudhivi@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. Anuradha Prudhivi.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Dayananda Sagar University, Bangalore",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Acharya Nagarjuna University",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "JNTUK",
                            "Year of Passing": "2013"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Machine Learning, Deep Learning , Medical Image Processing"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=56928120700",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/460090",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=vOBP33AAAAAJ",
                        "h-Index (As per Scopus Data) : 1"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024 -25",
                            "Author Position": "1",
                            "Details of Research Publication": "Design and Implementation of an IoT-Enabled Medication Delivery Robot for Isolated Patient Care 2nd International Conference on Self Sustainable Artificial Intelligence Systems Icssas 2024 Proceedings pp. 1053-1059 https://doi.org/10.1109/ICSSAS57918.2023.10331809",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Enhancing Emitter Prediction in Heavy Duty Vehicles Using Recurrent Convolutional Neural Network Advances in Nonlinear Variational InequalitiesISSN: 1092-910XVol 28No. 3s(2025) https://doi.org/10.52783/anvi.v28.3116",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "-"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;Federated learning for AI-powered privacy in distributed systems.&quot; International Journal of Computational and Experimental Science and Engineering 11.3 (2025).",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "-"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Comparison of Time-Series Forecasting Models based on Prophets for r Predicting Rainfall International Conference on Self Sustainable Artificial Intelligence Systems Icssas 2023 Proceedings pp. 1542-1545 https://doi.org/10.1109/ICSSAS64001.2024.10760515",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                }
            ]
    },

    "Mr. Arockia Raj Abraham": {
        "name": "Mr. Arockia Raj Abraham",
        "designation": "Asst. Professor",
        "email": "arockiaraja@mits.ac.in",
        "officeAddress": "NPN204",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Arockia Raj Abraham.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Computer Science & Engineering",
                            "Branch": "Computer Science & Engineering",
                            "College Name/University": "Saveetha University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Computer Science & Engineering",
                            "Branch": "Computer Science & Engineering",
                            "College Name/University": "Bharath University",
                            "Year of Passing": "2011"
                        },
                        {
                            "Course": "M.B.A.",
                            "Specialization": "Management Studies",
                            "Branch": "M.B.A.",
                            "College Name/University": "Bharathiar University",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Information Technology",
                            "Branch": "Information Technology",
                            "College Name/University": "Anna University",
                            "Year of Passing": "2005"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Deep Learning"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58806844800",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/460012",
                        "Google scholar : https://scholar.google.com/citations?user=mVwWN-EAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 1"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "6",
                            "Details of Research Publication": "3d based cnn for improved segmentation from the hyperspectral images",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Application of Magnetic Resin based on Grey Clustering Algorithm in Advanced Treatment of Industrial Wastewater",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "A Comparative Analysis of Machine Learning Techniques in Creating Virtual Replicas for Healthcare Simulations",
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
                            "Academic Year": "2023",
                            "Application ID": "6319705",
                            "Title of the Patent": "SOLOR BASED AUTOMATED RAILWAY TRACK INSPECTION TROLLEY",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Application ID": "202441050598 A",
                            "Title of the Patent": "Smart Locker System using Dactylogram",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Application ID": "202441050595 A",
                            "Title of the Patent": "A Time-Frequescy based Suspicious Activity Detection for Anti-Money Laundering",
                            "Status": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Application ID": "202411023346 A",
                            "Title of the Patent": "UNCOVERING THE MECHANISMS AND EVALUATING NANOPARTICLE-BASED DRUG DELIVERY METHODS USING RESVERATROL IN LUNG CANCER THERAPY",
                            "Status": "Published"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "Others",
                            "Academic Year": "2022",
                            "Application ID": "202241041223 A",
                            "Title of the Patent": "Dynamic Auto-selection and Auto-tuning of Machine Learning Models for Cloud Network Analytics",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mrs. M. Nandhini": {
        "name": "Mrs. M. Nandhini",
        "email": "nandhinim@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. M. Nandhini.JPG",
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
                            "Course": "M.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Anna University",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Anna University",
                            "Year of Passing": "2014"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Optimization Algorithms"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58682475700",
                        "Vidwan : https://vidwan.inflibnet.ac.in/myprofile",
                        "Google scholar : https://scholar.google.co.in/citations?user=QsTgQukAAAAJ&hl=en",
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
                            "Author Position": "3",
                            "Details of Research Publication": "ADVANCED WASTEWATER TREATMENT USING ENERGY &ndash; EFFICIENT FENTON PROCESS OPTIMISED WITH DEEP LEARNING",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "A Novel Approach of Stock Price Forecast Using Deep Learning Practices",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancing Image Recognition for Security Applications: A Machine Learning Approach",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-2024",
                            "Author Position": "4",
                            "Details of Research Publication": "MOJMA: A novel multi-objective optimization algorithm based Java Macaque Behavior Model",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Cloudburst Prediction in India Using Machine Learning",
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
                            "Academic Year": "2024-2025",
                            "Application ID": "471033-001",
                            "Title of the Patent": "SAI-ASSISTED SIGN LANGUAGE GLOVE",
                            "Status": "Filed"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-2024",
                            "Application ID": "6345921",
                            "Title of the Patent": "Monitoring Device",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mr. B. Bhaskar": {
        "name": "Mr. B. Bhaskar",
        "email": "bhaskarb@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. B. Bhaskar.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Madanapalle Institution of Technology and Science, JNTUA University",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Madanapalle Institution of Technology and Science, JNTUA University",
                            "Year of Passing": "2009"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Cloud Computing"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58814625800",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/280504",
                        "Google scholar : https://scholar.google.com/citations?user=csCLaxsAAAAJ&hl=en&citsig=ACUpqDfedng5PxzMJO1k3pqAMoCY",
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
                            "Author Position": "1",
                            "Details of Research Publication": "Protectors of the Android Domain: Research into Mobile Malware Detection and Defense",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "BetelProNet Framework: Efficient Deep Learning Model for Betel Leaf Disease Detection",
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
                            "Academic Year": "2023-24",
                            "Application ID": "202341000087 A",
                            "Title of the Patent": "DESIGN AND PERFORMANCE OF CHARGE-PLASMA-BASED SCHOTTKY-FET CMOS CIRCUIT RING OSCILLATOR FOR HIGH DENSITY ICS",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Letter of Appreciation by MoE&rsquo;s Innovation Cell (Govt. of India) for remarkable progress in Innovation rating",
                        "Top performing mentor for Moocs Course (PSOSM) in 2024-25",
                        "Top performing mentor for Moocs Course (E-Business) in 2023-24"
                    ]
                }
            ]
    },

    "Mr. Nukala Bhargav Krishna": {
        "name": "Mr. Nukala Bhargav Krishna",
        "email": "bhargavkrishnan@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Nukala Bhargav Krishna.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.Tech. (Integrated)",
                            "Specialization": "Software Engineering",
                            "Branch": "CSE",
                            "College Name/University": "Vellore Institute of Technology, Vellore",
                            "Year of Passing": "2021"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus :",
                        "Vidwan :",
                        "Google scholar : https://scholar.google.com/citations?user=-FJtI_YAAAAJ&hl=en",
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
                            "Details of Research Publication": "Learn Rights: A Gamified Ai-Powered Platform For Legal Literacy And Children&rsquo;s Rights Awareness In India",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                }
            ]
    },

    "Mr. Yawar Ayub Matta": {
      name: "Mr. Yawar Ayub Matta",
      designation: "Asst. Professor",
      email: "yawarayubm@mits.ac.in",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/Yawar Ayub Matta.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "M.Tech.", "Specialization": "CSE", "Branch": "CSE", "College Name/University": "NIT, Srinagar", "Year of Passing": "2022"},
            {"S.No": "2", "Course": "B.Tech.", "Specialization": "CSE", "Branch": "CSE", "College Name/University": "University of Kashmir", "Year of Passing": "2019"}
          ]
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": ""},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/611172"},
            {"Identifier": "Google scholar", "Link": ""},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": ""}
          ]
        }
      ]
    }
  */
};

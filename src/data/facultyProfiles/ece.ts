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

export const eceProfiles: Record<string, FacultyProfile> = {
  /*
  // Static faculty profile data preserved in comments (Dynamic profiles fetched from EngageAI database API)
"Dr. Rama S Komaragiri": {
      name: "Dr. Rama S Komaragiri",
      designation: "Professor & Dean-Academics",
      email: "deanacademics@mits.ac.in",
      officeAddress: "West Block",
      image: "public/uploads/faculty/rama.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Microelectronics and VLSI", "Branch": "Electrical and Information Technology", "College Name/University": "Technical University of Darmstadt, Germany", "Year of Passing": "2005"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "Solid State Technology", "Branch": "EE/Physics (Interdisciplinary)", "College Name/University": "IIT Madras", "Year of Passing": "2002"},
            {"S.No": "3", "Course": "M.Sc.", "Specialization": "Physics", "Branch": "Physics", "College Name/University": "IIT Bombay", "Year of Passing": "2000"}
          ]
        },
        {
          title: "Research Areas",
          content: "VLSI, NEMS/MEMS, Semiconductor Devices, Biomedical Systems, Pedagogy"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus Link", "Link": "https://www.scopus.com/authid/detail.uri?authorId=9845916000"},
            {"Identifier": "Vidwan Link", "Link": "https://mits.irins.org/profile/319324"},
            {"Identifier": "Google scholar Link", "Link": "https://scholar.google.com/citations?user=bO5yElsAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "18"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "4", "Details of Research Publication": "Cascaded Approach to Estimate HR Using Remote PPG,\" 2025 International Conference on Modeling, Simulation & Intelligent Computing (MoSICom), Dubai, United Arab Emirates, 2025, pp. 100-103, DOI: 10.1109/MoSICom67153.2025.11398329", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "5", "Details of Research Publication": "Cuffless Monitoring of Blood Pressure Using Photoplethysmography Signal: A Comprehensive Review of Artificial Intelligence and Edge Computing Solutions, Archives of Computational Methods in Engineering, 2025, DOI:10.1007/s11831-025-10415-4", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "3", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "5", "Details of Research Publication": "A cascaded approach of group sparse mode decomposition and deep neural network for heart rate estimation using reference signal-less PPG signal, Measurement: Journal of the International Measurement Confederation, 2025, DOI:10.1016/j.measurement.2024.116546", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "5", "Details of Research Publication": "Integrated wearable PPG: a multi-vital sign monitoring based on group sparse mode decomposition framework in remote health care using PPG signal, Physical and Engineering Sciences in Medicine, 2025, DOI:10.1007/s13246-025-01534-0", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "5", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "5", "Details of Research Publication": "A novel eXplainable AI agent for social interaction training of people with Autism Spectrum Disorder (ASD), International Journal of Information Technology (Singapore), 2025, DOI:10.1007/s41870-025-02486-0", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "6", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "4", "Details of Research Publication": "Towards the Development of eXplainable Digital Twins for Precision Agriculture, 1st International Conference on Pioneering Developments in Computer Science and Digital Technologies, IC2SDT 2024 - Proceedings, 2024, DOI:10.1109/IC2SDT62152.2024.10696477", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "4", "Details of Research Publication": "Edge-Based Computation of Super-Resolution Superlet Spectrograms for Real-Time Estimation of Heart Rate Using an IoMT-Based Reference-Signal-Less PPG Sensor, IEEE Internet of Things Journal, 2024, DOI:10.1109/JIOT.2023.3322947", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "8", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Multi-Agent Based Social Interaction Model for Neurological Disorder, 1st International Conference on Pioneering Developments in Computer Science and Digital Technologies, IC2SDT 2024 - Proceedings, 2024, DOI:10.1109/IC2SDT62152.2024.10695958", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Implementation of XOR Gate using AOI model by Reconfigurable Artificial Neural Network on FPGA, 2024 15th International Conference on Computing Communication and Networking Technologies, ICCCNT 2024, 2024, DOI:10.1109/ICCCNT61001.2024.10726252", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "ECG Signal Detection and Lossless Data Compression Techniques for Implantable Cardiac Pacemaker Systems, Energy Systems in Electrical Engineering, 2023, DOI:10.1007/978-981-19-5303-3_4", "Indexing": "", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "ECG Signal Denoising Techniques for Cardiac Pacemaker Systems, Energy Systems in Electrical Engineering, 2023, DOI:10.1007/978-981-19-5303-3_3", "Indexing": "", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "FPGA Implementation of Combined ECG Signal Denoising, Peak Detection Technique for Cardiac Pacemaker Systems, Energy Systems in Electrical Engineering, 2023, DOI:10.1007/978-981-19-5303-3_5", "Indexing": "", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "13", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Digital ECG Signal Watermarking and Compression, Energy Systems in Electrical Engineering, 2023, DOI:10.1007/978-981-19-5303-3_6", "Indexing": "", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "14", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Blood pressure estimation and classification using a reference signal-less photoplethysmography signal: a deep learning framework, Physical and Engineering Sciences in Medicine, 2023, DOI:10.1007/s13246-023-01322-8", "Indexing": "", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "15", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "4", "Details of Research Publication": "Analysis of photoplethysmogram signal to estimate heart rate during physical activity using fractional fourier transform – A sampling frequency independent and reference signal-less method, Computer Methods and Programs in Biomedicine, 2023, DOI:10.1016/j.cmpb.2022.107294", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "16", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "A novel CS-NET architecture based on the unification of CNN, SVM and super-resolution spectrogram to monitor and classify blood pressure using photoplethysmography, Computer Methods and Programs in Biomedicine, 2023, DOI:10.1016/j.cmpb.2023.107716", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "17", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "4", "Details of Research Publication": "Optimized deep neural network models for blood pressure classification using Fourier analysis-based time–frequency spectrogram of photoplethysmography signal, Biomedical Engineering Letters, 2023, DOI:10.1007/s13534-023-00296-6", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "18", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Basic Formation on Wavelet Transforms, Energy Systems in Electrical Engineering, 2023, DOI:10.1007/978-981-19-5303-3_7", "Indexing": "", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "19", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Existing Methods to Evaluate Pacemaker Device Performance, Energy Systems in Electrical Engineering, 2023, DOI:10.1007/978-981-19-5303-3_2", "Indexing": "", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "20", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "High Performance and Power Efficient Electrocardiogram Detectors, Energy Systems in Electrical Engineering, 2023, DOI:", "Indexing": "", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "21", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "4", "Details of Research Publication": "Automatic seizure detection and classification using super-resolution superlet transform and deep neural network -A preprocessing-less method, Computer Methods and Programs in Biomedicine, 2023, DOI:10.1016/j.cmpb.2023.107680", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "22", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Estimation of Respiratory Rate from a Corrupted PPG Signal using Time-Frequency Spectrogram, Proceedings of the 10th International Conference on Signal Processing and Integrated Networks, SPIN 2023, 2023, DOI:10.1109/SPIN57001.2023.10117416", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "23", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Introduction, Energy Systems in Electrical Engineering, 2023, DOI:10.1007/978-981-19-5303-3_1", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "24", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Watermarking of ECG signals compressed using Fourier decomposition method, Multimedia Tools and Applications, 2022, DOI:10.1007/s11042-021-11492-w", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "25", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Fourier Analysis Based Respiration Rate Estimation Using Corrupted Photoplethysmogram Signal, 2022 5th International Conference on Multimedia, Signal Processing and Communication Technologies, IMPACT 2022, 2022, DOI:10.1109/IMPACT55510.2022.10029065", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "26", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Via-free single metal level planar microcoil sensors for detection of magnetic microbeads, Journal of Magnetism and Magnetic Materials, 2022, DOI:10.1016/j.jmmm.2021.168469", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "27", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "A novel approach for real-time ECG signal denoising using Fourier decomposition method, Research on Biomedical Engineering, 2022, DOI:10.1007/s42600-022-00237-9", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "28", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "4", "Details of Research Publication": "Multilevel Classification and Detection of Cardiac Arrhythmias With High-Resolution Superlet Transform and Deep Convolution Neural Network, IEEE Transactions on Instrumentation and Measurement, 2022, DOI:10.1109/TIM.2022.3186355", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "29", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "4", "Details of Research Publication": "Hardware Requirements of Different Wavelet Filter Bank Architectures for ECG Signal Denoising, 2022 IEEE Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation, IATMSI 2022, 2022, DOI:10.1109/IATMSI56455.2022.10119389", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "30", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Simulation of reconfigurable fet circuits using sentaurus tcad tool, Sub-Micron Semiconductor Devices: Design and Applications, 2022, DOI:10.1201/9781003126393-11", "Indexing": "", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "31", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "4", "Details of Research Publication": "STSR: Spectro-Temporal Super-Resolution Analysis of a Reference Signal Less Photoplethysmogram for Heart Rate Estimation During Physical Activity, IEEE Transactions on Instrumentation and Measurement, 2022, DOI:10.1109/TIM.2022.3192831", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "32", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "A Review on Computational Methods for Denoising and Detecting ECG Signals to Detect Cardiovascular Diseases, Archives of Computational Methods in Engineering, 2022, DOI:10.1007/s11831-021-09642-2", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "33", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "High-performance reconfigurable FET for a simple variable gain buffer amplifier design, International Journal of Electronics, 2022, DOI:10.1080/00207217.2021.1908618", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "34", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Analytical modeling of reconfigurable transistors, Sub-Micron Semiconductor Devices: Design and Applications, 2022, DOI:10.1201/9781003126393-22", "Indexing": "", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "35", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Reference signal less Fourier analysis based motion artifact removal algorithm for wearable photoplethysmography devices to estimate heart rate during physical exercises, Computers in Biology and Medicine, 2022, DOI:10.1016/j.compbiomed.2021.105081", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "36", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "A Review on Computation Methods Used in Photoplethysmography Signal Analysis for Heart Rate Estimation, Archives of Computational Methods in Engineering, 2022, DOI:10.1007/s11831-021-09597-4", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "37", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "An analytical model for a TFET with an n-doped channel operating in accumulation and inversion modes, Journal of Computational Electronics, 2021, DOI:10.1007/s10825-021-01683-x", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "38", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Effect of Geometrical Parameters of Nonspiral microcoils on the Magnetic field Generation for Microactuating Applications, 2021 8th International Conference on Smart Computing and Communications: Artificial Intelligence, AI Driven Applications for a Smart World, ICSCC 2021, 2021, DOI:10.1109/ICSCC51209.2021.9528177", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "39", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "4", "Details of Research Publication": "A robust digital ECG signal watermarking and compression using biorthogonal wavelet transform, Research on Biomedical Engineering, 2021, DOI:10.1007/s42600-020-00108-1", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "40", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "4", "Details of Research Publication": "Stationary wavelet transform based ECG signal denoising method, ISA Transactions, 2021, DOI:10.1016/j.isatra.2020.12.029", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "41", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Design and Analysis of Induction-Balance Sensor Using Non-spiral Planar Microcoils for Biomedical Applications, Nanotechnology in the Life Sciences, 2021, DOI:10.1007/978-3-030-64410-9_22", "Indexing": "", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "42", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "4", "Details of Research Publication": "Hardware Emulation of a Biorthogonal Wavelet Transform-Based Heart Rate Monitoring Device, IEEE Sensors Journal, 2021, DOI:10.1109/JSEN.2020.3034742", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "43", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "5", "Details of Research Publication": "Classification of Normal and Abnormal ECG signals using Support Vector Machine and Fourier Decomposition Method, Proceedings - 2020 6th IEEE International Symposium on Smart Electronic Systems, iSES 2020, 2020, DOI:10.1109/iSES50453.2020.00044", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "44", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Reconfigurable circuits based on Single Gate Reconfigurable Field-Effect Transistors, Proceedings of CONECCT 2020 - 6th IEEE International Conference on Electronics, Computing and Communication Technologies, 2020, DOI:10.1109/CONECCT50063.2020.9198322", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "45", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "6", "Details of Research Publication": "Classification of epileptic seizure in EEG signal using support vector machine and EMD, Handbook of Research on Advancements of Artificial Intelligence in Healthcare Engineering, 2020, DOI:10.4018/978-1-7998-2120-5.ch005", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "46", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Performance Evaluation of Via-free Non-spiral Planar Microcoils, 15th IEEE International Conference on Nano/Micro Engineered and Molecular System, NEMS 2020, 2020, DOI:10.1109/NEMS50311.2020.9265635", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "47", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Performance analysis of non-spiral planar microcoils for biomedical electromagnetic microactuators, AIP Conference Proceedings, 2020, DOI:10.1063/5.0003966", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "48", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Performance Evaluation of Via-free Non-spiral Planar Microcoils for Biomedical Wireless Links, Proceedings - 2020 6th IEEE International Symposium on Smart Electronic Systems, iSES 2020, 2020, DOI:10.1109/iSES50453.2020.00054", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "49", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Time–frequency localization using three-tap biorthogonal wavelet filter bank for electrocardiogram compressions, Biomedical Engineering Letters, 2019, DOI:10.1007/s13534-019-00117-9", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "50", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Performance analysis of planar microcoils for biomedical wireless power transfer links, Sadhana - Academy Proceedings in Engineering Sciences, 2019, DOI:10.1007/s12046-019-1170-5", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "51", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Design of efficient fractional operator for ECG signal detection in implantable cardiac pacemaker systems, International Journal of Circuit Theory and Applications, 2019, DOI:10.1002/cta.2667", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "52", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "An analytical model for a reconfigurable tunnel field effect transistor, Superlattices and Microstructures, 2019, DOI:10.1016/j.spmi.2019.05.025", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "53", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Microfabrication and electrical characterization of non-spiral planar microcoils for biomedical applications, Lecture Notes in Electrical Engineering, 2019, DOI:10.1007/978-981-13-6447-1_16", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "54", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Fabrication, characterization, and modelling of a novel via-less single metal level magnetic microcoil sensor for biosensing applications, Sensors and Actuators, A: Physical, 2019, DOI:10.1016/j.sna.2019.02.025", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "55", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Efficient QRS complex detection algorithm based on Fast Fourier Transform, Biomedical Engineering Letters, 2019, DOI:10.1007/s13534-018-0087-y", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "56", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Modelling, microfabrication and performance evaluation of non-spiral planar microcoils for biomedical wireless power transfer systems, Micro and Nano Letters, 2019, DOI:10.1049/mnl.2019.0158", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "57", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Design and Analysis of Non-spiral Planar Microcoil-Based Electromagnetic Microactuator, Arabian Journal for Science and Engineering, 2019, DOI:10.1007/s13369-018-3639-7", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "58", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "From Pacemaker to Wearable: Techniques for ECG Detection Systems, Journal of Medical Systems, 2018, DOI:10.1007/s10916-017-0886-1", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "59", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Electromagnetic Microactuators using Non-spiral Planar Microcoils for Robotic Applications, Procedia Computer Science, 2018, DOI:10.1016/j.procs.2018.07.068", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "60", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Analysis of reconfigurable tunnel field effect transistor for improved current characteristics, Proceedings - 2018 7th International Symposium on Next-Generation Electronics, ISNE 2018, 2018, DOI:10.1109/ISNE.2018.8394667", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "61", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "4", "Details of Research Publication": "Two dimensional analytical model for a reconfigurable field effect transistor, Superlattices and Microstructures, 2018, DOI:10.1016/j.spmi.2017.12.006", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "62", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Design of wavelet transform based electrocardiogram monitoring system, ISA Transactions, 2018, DOI:10.1016/j.isatra.2018.08.003", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "63", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "P.C.; Study of Circuits Based on SOI-vertical Gate-All-Around FET, INDICON 2018 - 15th IEEE India Council International Conference, 2018, DOI:10.1109/INDICON45594.2018.8987021", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "64", "Publication Affiliation": "", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Heart rate monitoring and therapeutic devices: A wavelet transform based approach for the modeling and classification of congestive heart failure, ISA Transactions, 2018, DOI:10.1016/j.isatra.2018.05.003", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "65", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "A wavelet transform-based filter bank architecture for ECG signal denoising, Advances in Intelligent Systems and Computing, 2018, DOI:10.1007/978-981-10-8636-6_26", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "66", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Detection of Magnetic Particles Using Induction-Balance Microsensor Based on Non-Spiral Planar Microcoils, Proceedings of IEEE Sensors, 2018, DOI:10.1109/ICSENS.2018.8589879", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "67", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Design of a Biorthogonal Wavelet Transform Based R-Peak Detection and Data Compression Scheme for Implantable Cardiac Pacemaker Systems, Journal of Medical Systems, 2018, DOI:10.1007/s10916-018-0953-2", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "68", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Reconfigurable tunnel field effect transistor exhibiting reduced ambipolar behaviour, 2016 IEEE Annual India Conference, INDICON 2016, 2017, DOI:10.1109/INDICON.2016.7838995", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "69", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Modeling and simulation of non-spiral coil for magnetic sensing applications, Journal of Mechanical Science and Technology, 2017, DOI:10.1007/s12206-017-1036-x", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "70", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Significance of non-spiral planar microcoils over spiral coils for biomedical applications: Design, simulation and comparison with spiral coil, 2016 3rd International Conference on Emerging Electronics, ICEE 2016, 2017, DOI:10.1109/ICEmElec.2016.8074614", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "71", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Non-spiral planar microcoils for biomedical applications, 2017 IEEE 12th International Conference on Nano/Micro Engineered and Molecular Systems, NEMS 2017, 2017, DOI:10.1109/NEMS.2017.8017134", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "72", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Analysing the Effects of Temperature and Doping Concentration in Silicon Based MEMS Piezoresistive Pressure Sensor, Procedia Computer Science, 2016, DOI:10.1016/j.procs.2016.07.189", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "73", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Computer aided modeling for a miniature silicon-on-insulator MEMS piezoresistive pressure sensor, Photonic Sensors, 2015, DOI:10.1007/s13320-015-0239-y", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "74", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Drift region optimization by double epitaxial layer in low and medium power rated silicon power MOSFETs, Journal of Materials Science: Materials in Electronics, 2015, DOI:10.1007/s10854-015-3271-1", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "75", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Recessed MOSFET in 28 nm FDSOI for Better Breakdown Characteristics, Proceedings of the IEEE International Conference on VLSI Design, 2015, DOI:10.1109/VLSID.2015.54", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "76", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "4", "Details of Research Publication": "Dimension and doping concentration based noise and performance optimization of a piezoresistive MEMS pressure sensor, Microsystem Technologies, 2015, DOI:10.1007/s00542-014-2118-7", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "77", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Analytical studies of vertical double gate NTFET, 2014 International Conference on Electronics and Communication Systems, ICECS 2014, 2014, DOI:10.1109/ECS.2014.6892630", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "78", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Performance optimization of MEMS capacitive accelerometer, 2014 International Conference on Devices, Circuits and Communications, ICDCCom 2014 - Proceedings, 2014, DOI:10.1109/ICDCCom.2014.7024738", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "79", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "6", "Details of Research Publication": "Ferroelectric characteristics of MFIS structure with P(VDF–TrFE)/BaTiO3 nanocomposite as ferroelectric layer, Applied Physics A: Materials Science and Processing, 2014, DOI:10.1007/s00339-014-8590-1", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "80", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Performance analysis of a silicon piezoresistive pressure sensor based on diaphragm geometry and piezoresistor dimensions, 2014 International Conference on Circuits, Power and Computing Technologies, ICCPCT 2014, 2014, DOI:10.1109/ICCPCT.2014.7055011", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "81", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Sensitivity enhancement of a silicon Based MEMS pressure sensor by optimization of size and position of piezoresistor, 2014 International Conference on Electronics and Communication Systems, ICECS 2014, 2014, DOI:10.1109/ECS.2014.6892559", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "82", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Verifying finite element simulation in miniature silicon based stacked diaphragm pressure sensors, Microsystem Technologies, 2014, DOI:10.1007/s00542-013-1936-3", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "83", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Optimized design of a stacked diaphragm MEMS pressure sensor for Tsunami warning system, c2013 IEEE Global Humanitarian Technology Conference: South Asia Satellite, GHTC-SAS 2013, 2013, DOI:10.1109/GHTC-SAS.2013.6629943", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "84", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Design and simulation of pressure sensor for ocean depth measurements, Applied Mechanics and Materials, 2013, DOI:10.4028/www.scientific.net/AMM.313-314.666", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "85", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "A simulation study of multifunction double-halo field effect transistor, 2013 Annual International Conference on Emerging Research Areas, AICERA 2013 and 2013 International Conference on Microelectronics, Communications and Renewable Energy, ICMiCR 2013 - Proceedings, 2013, DOI:10.1109/AICERA-ICMiCR.2013.6575978", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "86", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Comparison of a 30nm tunnel field effect transistor and CMOS inverter characteristics, Proceedings - 2013 3rd International Conference on Advances in Computing and Communications, ICACC 2013, 2013, DOI:10.1109/ICACC.2013.36", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "87", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Mixed mode circuit simulation of a junction less transistor and a comparative study with CMOS inverter, Proceedings - 2013 3rd International Conference on Advances in Computing and Communications, ICACC 2013, 2013, DOI:10.1109/ICACC.2013.99", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "88", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "A vertical JFET with improved on to off current performance, 2013 Annual International Conference on Emerging Research Areas, AICERA 2013 and 2013 International Conference on Microelectronics, Communications and Renewable Energy, ICMiCR 2013 - Proceedings, 2013, DOI:10.1109/AICERA-ICMiCR.2013.6575962", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "89", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Germanium-source germanium-channel silicon-drain vertical TFET for low power applications, 2013 Annual International Conference on Emerging Research Areas, AICERA 2013 and 2013 International Conference on Microelectronics, Communications and Renewable Energy, ICMiCR 2013 - Proceedings, 2013, DOI:10.1109/AICERA-ICMiCR.2013.6575963", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "90", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Optimized design of a silicon based MEMS pressure sensor for wider range and better sensitivity, 2013 Annual International Conference on Emerging Research Areas, AICERA 2013 and 2013 International Conference on Microelectronics, Communications and Renewable Energy, ICMiCR 2013 - Proceedings, 2013, DOI:10.1109/AICERA-ICMiCR.2013.6575971", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "91", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Performance comparison of 4H-SiC MESFETs, 2013 Annual International Conference on Emerging Research Areas, AICERA 2013 and 2013 International Conference on Microelectronics, Communications and Renewable Energy, ICMiCR 2013 - Proceedings, 2013, DOI:10.1109/AICERA-ICMiCR.2013.6575965", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "92", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Feasibility study of AC bridges in MEMS pressure sensors, 2012 IEEE Students' Conference on Electrical, Electronics and Computer Science: Innovation for Humanity, SCEECS 2012, 2012, DOI:10.1109/SCEECS.2012.6184727", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "93", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Finite element analysis on miniature silicon and SOI pressure sensors, 2012 Annual IEEE India Conference, INDICON 2012, 2012, DOI:10.1109/INDCON.2012.6420715", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "94", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Dual gate enhancement-mode JFET (DG-JFET) for ultra low power applications, 2012 IEEE Students' Conference on Electrical, Electronics and Computer Science: Innovation for Humanity, SCEECS 2012, 2012, DOI:10.1109/SCEECS.2012.6184726", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "95", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "DG-JFET for low power applications and behavior of it as a MOS capacitor, Proceedings - 2012 International Conference on Advances in Computing and Communications, ICACC 2012, 2012, DOI:10.1109/ICACC.2012.30", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "96", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Simulation studies of tunnel field effect transistor (TFET), Proceedings - 2012 International Conference on Advances in Computing and Communications, ICACC 2012, 2012, DOI:10.1109/ICACC.2012.31", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "97", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Simulation and comparison studies of silicon carbide and silicon power devices, India International Conference on Power Electronics, IICPE 2010, 2011, DOI:10.1109/IICPE.2011.5728089", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "98", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Spinel-SiAlONs - A New Group of Silicon-Based Hard Materials, Organosilicon Chemistry V: From Molecules to Materials, 2008, DOI:10.1002/9783527619924.ch123", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "99", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Spinel-SiAlONs - A New Group of Silicon-Based Hard Materials, Organosilicon Chemistry: From Molecules to Materials, 2008, DOI:10.1002/9783527620777.ch123d", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "100", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "9", "Details of Research Publication": "Introduction of crystalline high-k gate dielectrics in a CMOS process, Journal of Non-Crystalline Solids, 2005, DOI:10.1016/j.jnoncrysol.2005.04.032", "Indexing": "", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "101", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Spinel-SiAlONs - A New Group of Silicon-Based Hard Materials, Organosilicon Chemistry Set: From Molecules to Materials, 2005, DOI:10.1002/9783527620777.ch123d", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "102", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Global and local electrical behavior of crystalline praseodymium oxide high-K gate dielectric MOSFETs, Proceedings - Electrochemical Society, 2004, DOI:", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "103", "Publication Affiliation": "Others", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Electrical characterisation of crystalline praseodymium oxide high-k gate dielectric MOSFETs, European Solid-State Device Research Conference, 2003, DOI:10.1109/ESSDERC.2003.1256859", "Indexing": "", "Publication": "Conference Proceedings", "Journal Quartile": ""}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "Others", "Academic Year": "2020-21", "Application ID": "Patent Number: 542152", "Title of the Patent": "ELECTROENCEPHALOGRAPHY (EEG) MONITORING DEVICE", "Status": "Granted"},
            {"S.No": "2", "Affiliation": "Others", "Academic Year": "2020-21", "Application ID": "202111021669", "Title of the Patent": "SELF-STARTING ENERGY HARVESTING SYSTEM", "Status": "Application Hearing"},
            {"S.No": "3", "Affiliation": "Others", "Academic Year": "2021-22", "Application ID": "Patent Number: 569081", "Title of the Patent": "AN AUTOMATED SYSTEM AND METHOD FOR MONITORING HEALTH CONDITION OF A USER", "Status": "Granted"},
            {"S.No": "4", "Affiliation": "Others", "Academic Year": "2023-24", "Application ID": "202311055234", "Title of the Patent": "A MULTI-LEVEL SECURITY MECHANISM FOR TRANSFERRING BIOMEDICAL HEALTH INFORMATION OF A USER", "Status": "Under Examination"},
            {"S.No": "5", "Affiliation": "Others", "Academic Year": "2023-24", "Application ID": "202411022166", "Title of the Patent": "AI BASED AUTISM SPECTRUM DISORDER (ASD) CARE AGENT FOR SOCIAL INTERACTION TRAINING IN B2C BUSINESS MODE", "Status": "Awaiting Examination"},
            {"S.No": "6", "Affiliation": "Others", "Academic Year": "2023-24", "Application ID": "202411022165", "Title of the Patent": "EXPLAINABLE DIGITAL TWINS (XDTS) AND ENHANCED EXPLAINABLE DIGITAL TWINS (EXDTS)", "Status": "Awaiting Examination"}
          ]
        }
      ]
    },

    "Dr. P. Ramanathan": {
        "name": "Dr. P. Ramanathan",
        "email": "drramanathanp@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/a744ebed6a293a48de32e80ba66680c8.JPG",
        "designation": "Professor &amp; Principal",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Information & Communication Engineering",
                            "Branch": "Information & Communication Engineering",
                            "College Name/University": "PSG College of Technology & Anna University, Chennai",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "VLSI Design",
                            "Branch": "VLSI Design",
                            "College Name/University": "PSG College of Technology & Anna University, Chennai",
                            "Year of Passing": "2006"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Electronics and Instrumentation",
                            "Branch": "Electronics and Instrumentation",
                            "College Name/University": "Tamilnadu College of Engineering & Bharathiar University, Coimbatore",
                            "Year of Passing": "1997"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "VLSI Design & Biomedical Engineering"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=56703722200",
                        "Vidwan Link: https://mits.irins.org/profile/460984",
                        "Google scholar Link: https://scholar.google.co.in/citations?user=x&user=2GsJ2UkAAAAJ",
                        "h-Index (As per Scopus Data) : 07"
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
                            "Details of Research Publication": "Low Power Parallel Prefix Adders Design and Power Estimation - A review https://doi.org/10.1109/AECE67531.2025.11386574",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "5",
                            "Details of Research Publication": "Efficient Noise Cancellation in Lung Signals Using Pipelined Adaptive LMS Algorithm https://doi.org/10.1109/ICSSEECC61126.2024.10649421",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Multi-Class Skin Disease Classification: A Study of Transfer Learning Strategies for Deep Learning Models https://doi.org/10.1109/IConSCEPT61884.2024.10627847",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Estimating Lithium-Ion Battery State of Health with Least Squares Approach for Accurate Assessment https://doi.org/10.1109/ic-ETITE58242.2024.10493768",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "A Compact Sierpinski Gasket Fractal Antenna for S, C, X, and Ku Band Applications http://dx.doi.org/10.2528/PIERC23110704",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "6",
                            "Details of Research Publication": "Comparative Analysis of Mice Protein Expression Data: Assessing Genotype and Behavioral Treatments Using Machine Learning Algorithms https://doi.org/10.1007/978-3-031-77075-3_21",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Koch Snowflake Fractal Embedded Octagonal Patch Antenna with Hexagonal Split Ring for Ultra-Wide Band and 5G Applications http://dx.doi.org/10.2528/PIERC23050702",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "2",
                            "Details of Research Publication": "Investigation of Techniques to Recognize Optimal Power Structuring of Vedic Multiplier https://doi.org/10.1007/978-981-15-3992-3_8",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "3",
                            "Details of Research Publication": "Indoor Channel Characterization with Multiple Hypotheses Testing in Massive Multiple Input Multiple Output https://doi.org/10.1166/jctn.2019.8030",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "3",
                            "Details of Research Publication": "Innovative Localization Algorithm Using the Line of Intersection Technique in Wireless Sensor Networks https://doi.org/10.3966/160792642020032102011",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "2",
                            "Details of Research Publication": "Modified Low-Power Built-in Self-test for Image Processing Application https://doi.org/10.1007/978-3-030-04061-1_20",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Author Position": "3",
                            "Details of Research Publication": "Optimal test suite selection in regression testing with testcase prioritization using modified Ann and Whale optimization algorithm https://doi.org/10.1007/s10586-017-1401-7",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-16",
                            "Author Position": "1",
                            "Details of Research Publication": "Modified low power Wallace Tree multiplier using higher order compressors https://doi.org/10.1080/21681724.2016.1138509",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-16",
                            "Author Position": "2",
                            "Details of Research Publication": "Comparative Analysis and Comparison of Various AQM Algorithm for High Speed https://doi.org/10.17485/ijst/2015/v8i35/81476",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-16",
                            "Author Position": "1",
                            "Details of Research Publication": "High Performance Parallel Prefix Adder for Wider Word Lengths https://www.ripublication.com/Volume/gjpamv11n2.htm",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014-15",
                            "Author Position": "2",
                            "Details of Research Publication": "Effect of BIRADS shape descriptors on breast cancer analysis https://doi.org/10.1504/IJMEI.2015.066244",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013-14",
                            "Author Position": "2",
                            "Details of Research Publication": "Area Efficient Carry Select Adder Using Negative Edge Triggered D-Flipflop https://doi.org/10.4028/www.scientific.net/AMM.573.187",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014-15",
                            "Author Position": "2",
                            "Details of Research Publication": "A new hybrid multiplier using Dadda and Wallace method https://doi.org/10.1109/ECS.2014.6892623",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013-14",
                            "Author Position": "3",
                            "Details of Research Publication": "Low Power Parallel Prefix Adder https://doi.org/10.4028/www.scientific.net/AMM.573.194",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2009-10",
                            "Author Position": "1",
                            "Details of Research Publication": "A novel logarithmic prefix adder with minimized power delay product",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2008-09",
                            "Author Position": "1",
                            "Details of Research Publication": "Decomposition algorithm for power delay product optimization in Wallace multiplier https://ieeexplore.ieee.org/abstract/document/5204369",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2007-08",
                            "Author Position": "2",
                            "Details of Research Publication": "Comparative analysis of low power high performance flip&ndash;flops in the 0.13&micro;m technology https://doi.org/10.1109/ADCOM.2007.56",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                }
            ]
    },

    "Dr. Sanjay Kumar C. Gowre": {
        "name": "Dr. Sanjay Kumar C. Gowre",
        "email": "drsanjaykumarcg@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Sanjay Kumar C. Gowre.JPG",
        "designation": "Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Photonics",
                            "Branch": "ECE",
                            "College Name/University": "IIT-Kharagpur",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Fiber Optics",
                            "Branch": "ECE",
                            "College Name/University": "IIT-Kharagpur",
                            "Year of Passing": "2006"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "E&CE",
                            "Branch": "E&CE",
                            "College Name/University": "Gulbarga University/PDACE, Gulbarga",
                            "Year of Passing": "1995"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Photonics, Optics, Biosensors"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=16401166700",
                        "Vidwan Link: https://vidwan.inflibnet.ac.in/profile/244420",
                        "Google scholar Link: https://scholar.google.co.in/citations?user=x&user=b2Vv3usAAAAJ",
                        "h-Index (As per Scopus Data) : 10"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Bimetallic-Based SPR Wavelength Interrogating Sensor with High Q-factor for Biochemical Detection",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Design of Ultra Compact Optical T Flip Flop in Two Dimensional Photonic Crystals",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Wavesteering Effect on Photonic Crystal Based Refractive Index Sensor for Milk Quality Detection",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022&ndash;23",
                            "Author Position": "3",
                            "Details of Research Publication": "Gallium Arsenide Composite 2D Photonic Crystal Biosensor for Cancer Cell Detection",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022&ndash;23",
                            "Author Position": "3",
                            "Details of Research Publication": "Gallium Arsenide Composite 2D Photonic Crystal Biosensor for Malaria Detection",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022&ndash;23",
                            "Author Position": "3",
                            "Details of Research Publication": "Two Dimensional Photonic Crystal Biosensor Based on Gallium Arsenide Composite Semi- Conductive Material for Diabetes Detection",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022&ndash;23",
                            "Author Position": "3",
                            "Details of Research Publication": "Photonic Crystal Based Ultrafast and Highly Sensitive Refractive Index Sensor",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022&ndash;23",
                            "Author Position": "3",
                            "Details of Research Publication": "Two Dimensional Photonic Crystal Biosensor for Diabetes Detection",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022&ndash;23",
                            "Author Position": "3",
                            "Details of Research Publication": "Computational Study of Photonic Crystal Based Biosensor for SARS-COV-2 Detection",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022&ndash;23",
                            "Author Position": "2",
                            "Details of Research Publication": "Optimal Image Denoising using Patch-Based CNN Architecture",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022&ndash;23",
                            "Author Position": "2",
                            "Details of Research Publication": "Reconfigurable Optical Logic Gates for Integrated Optical Circuits",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021&ndash;22",
                            "Author Position": "4",
                            "Details of Research Publication": "FDADE: Flow Direction Algorithm with Differential Evolution for measurement of Intima-Media Thickness of the Carotid Artery in Ultrasound Images",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021&ndash;22",
                            "Author Position": "2",
                            "Details of Research Publication": "Photonic Crystal Based Pressure Sensor Using Rhombic Ring Resonator",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021&ndash;22",
                            "Author Position": "2",
                            "Details of Research Publication": "Photonic Crystal Based Aslant Cavity with Infiltrated Magnetic Fluid for Sensing Magnetic Field",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021&ndash;22",
                            "Author Position": "2",
                            "Details of Research Publication": "Design of Two Dimensional Photonic Crystal based Ultra Compact Optical RS Flip Flop",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021&ndash;22",
                            "Author Position": "2",
                            "Details of Research Publication": "Design of Ultra Compact 4:2 Encoder using Two Dimensional Photonic Crystals",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021&ndash;22",
                            "Author Position": "2",
                            "Details of Research Publication": "Design of Circularly Polarized Compact Size Wearable Antenna for UWB and 5G Application",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021&ndash;22",
                            "Author Position": "3",
                            "Details of Research Publication": "Computation Study of a Compact and High Sensitive Photonic Crystal for Cancer Cells Detection",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021&ndash;22",
                            "Author Position": "2",
                            "Details of Research Publication": "Compact Flexible Monopole Antennas for UWB",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020&ndash;21",
                            "Author Position": "2",
                            "Details of Research Publication": "Tunable Optical Add/Drop Filter using Photonic Crystal Ring Resonator",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020&ndash;21",
                            "Author Position": "3",
                            "Details of Research Publication": "Modeling and Optimization of Optical Half Adder in Photonic Crystals",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019&ndash;20",
                            "Author Position": "4",
                            "Details of Research Publication": "Lossy Image Compression using SVD Algorithm",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021&ndash;22",
                            "Author Position": "1",
                            "Details of Research Publication": "Design of circular microstrip textile antenna for UWB application",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020&ndash;21",
                            "Author Position": "1",
                            "Details of Research Publication": "A New DOA Algorithm for Spectral Estimation without Source Numbers Information",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020&ndash;21",
                            "Author Position": "2",
                            "Details of Research Publication": "Photonic nano dielectric crystal cavity with infiltrated biosamples for refractive index sensing application",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014-15",
                            "Author Position": "1",
                            "Details of Research Publication": "Investigation of light behavior of all optical full adders in two dimensional photonic crystals",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012-13",
                            "Author Position": "1",
                            "Details of Research Publication": "Tunable Optical add/drop filter for CWDM systems using Photonic Crystal Ring Resonator",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012-13",
                            "Author Position": "1",
                            "Details of Research Publication": "Modeling and Optimization of Optical Half Adder in Two Dimensional Photonic Crystals",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "29",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2008-09",
                            "Author Position": "1",
                            "Details of Research Publication": "Blind source parameters for performance evaluation of despeckling filters",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "30",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2005-06",
                            "Author Position": "1",
                            "Details of Research Publication": "A modified structure for all-glass photonic bandgap fibers: Dispersion characteristics and confinement loss analysis",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "31",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2004-06",
                            "Author Position": "1",
                            "Details of Research Publication": "Dispersion Characteristics of All-Glass Photonic Crystal Fiber",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "32",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2004-05",
                            "Author Position": "1",
                            "Details of Research Publication": "Optical Time Domain Reflectometer performance improvement using Complementary Correlated Prometheus Orthonormal Sequence",
                            "Indexing": "SCI",
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
                            "Affiliation": "Others",
                            "Academic Year": "2023-25",
                            "Funded Project /Event": "Funded Research Project",
                            "Role": "Co-P.I.",
                            "Title of the Project/Event": "Design & Development of Gap-Coupled Planar Microstrip Antenna for WLAN, WI-MAX & Bluetooth Applications",
                            "Amount in Rs. /-": "15,00,000",
                            "Funding Agency": "VGST Bangalore"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2014-16",
                            "Funded Project /Event": "Funded Research Project",
                            "Role": "P.I.",
                            "Title of the Project/Event": "Design of Photonic Communication System",
                            "Amount in Rs. /-": "20,00,000",
                            "Funding Agency": "VGST Bangalore"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2010-13",
                            "Funded Project /Event": "Funded Research Project",
                            "Role": "P.I.",
                            "Title of the Project/Event": "Photonic Devices for Optical Networks",
                            "Amount in Rs. /-": "10,00,000",
                            "Funding Agency": "VTU Belagavi"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "Others",
                            "Academic Year": "2010",
                            "Funded Project /Event": "International Conference",
                            "Role": "Organizing Secretary",
                            "Title of the Project/Event": "International Conference on Communication, Computation, Control And Nanotechnology (ICN-2010)",
                            "Amount in Rs. /-": "1,00,000",
                            "Funding Agency": "DST New Delhi"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "Others",
                            "Academic Year": "2010",
                            "Funded Project /Event": "International Conference",
                            "Role": "Organizing Secretary",
                            "Title of the Project/Event": "International Conference On Communication, Computation, Control And Nanotechnology (ICN-2010)",
                            "Amount in Rs. /-": "3,00,000",
                            "Funding Agency": "MoES New Delhi"
                        },
                        {
                            "S.No": "6",
                            "Affiliation": "Others",
                            "Academic Year": "2018",
                            "Funded Project /Event": "Youth Fest",
                            "Role": "Chief Organizing Secretary",
                            "Title of the Project/Event": "VTU Youth Fest (2018)",
                            "Amount in Rs. /-": "4,20,00,000",
                            "Funding Agency": "VTU Belagavi"
                        },
                        {
                            "S.No": "7",
                            "Affiliation": "Others",
                            "Academic Year": "2014",
                            "Funded Project /Event": "FDP",
                            "Role": "Organizing Secretary",
                            "Title of the Project/Event": "Future Recent Trends & Innovations In Information Communication & Technology",
                            "Amount in Rs. /-": "3,00,000",
                            "Funding Agency": "VGST Bangalore"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2021",
                            "Application ID": "201921033981",
                            "Title of the Patent": "Design & Development of Miniaturized 2x1 square array of Micro-strip Textile Antenna using jean as dielectric material & operating at 1.9642GHz & 2.45GHz with gain of 10dBi & 8.07dBi used for wireless application&rdquo;",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Research grant of Rs. 20 lacs from VGST Bengaluru for a period of 2 years on &ldquo;DESIGN OF PHOTONIC COMMUNICATION SYSTEM&rdquo;",
                        "Research grant of Rs. 10 lacs from VTU Belgaum for a period of 3 years on &ldquo;PHOTONIC DEVICES FOR OPTICAL NETWORKS&rdquo;",
                        "Award of IEEE ICIIS-2007 grant, Peradeniya University, Kandy, Sri-Lanka with registration grant of USD220.",
                        "Award of 9500/- per month scholarship for pursuing PhD at IIT Kharagpur."
                    ]
                }
            ]
    },

    "Dr. S. Rajasekaran": {
      name: "Dr. S. Rajasekaran",
      designation: "Professor & Head",
      email: "drrajasekarans@mits.ac.in",
      officeAddress: "West Block",
      image: "public/uploads/faculty/f8983b3c4255e5b248d9b51eb8f62e38.jpeg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Control systems and Antenna", "Branch": "Information and Communication Engineering", "College Name/University": "Coimbatore Institute of Technology, Anna University, Chennai, India.", "Year of Passing": "2014"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "Information and Communication", "Branch": "Information and Communication Engineering", "College Name/University": "Bannari Amman Institute of Technology, Anna University, Chennai", "Year of Passing": "2007"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "Electronics and Instrumentation Engineering", "Branch": "Electronics and Instrumentation Engineering", "College Name/University": "Jayaram College of Engg. & Tech.,Bharathidasan University, Trichy.", "Year of Passing": "2003"}
          ]
        },
        {
          title: "Research Areas",
          content: "Control systems and Antenna"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus Link", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57194531697"},
            {"Identifier": "Vidwan Link", "Link": "https://mits.irins.org/profile/274643"},
            {"Identifier": "Google scholar Link", "Link": "https://scholar.google.com/citations?hl=en&user=u3f4IF0AAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "6"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "3", "Details of Research Publication": "Trident -Tree Fractal Printed Monopole Antenna for WLAN and 5G Applications https://doi.org/10.1109/INSPECT67393.2025.11350383", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "5", "Details of Research Publication": "Design of a Star-Shaped Dual-Band Ultra-Thin Polarization-Insensitive Metamaterial Absorber for S-Band Applications https://doi.org/10.1109/ICWITE64848.2025.11306966", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "4", "Details of Research Publication": "Design and Analysis of Triple- Band Copper- Based Metamaterial Absorber for GHz Applications https://doi.org/10.1109/ICCAMS65118.2025.11234549", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "6", "Details of Research Publication": "Investigation of hybrid electron extraction architecture via integration of Mono-Shelled Carbon Nanotubes (MS-CNT) with perovskite oxide BaSnO3 for beyond 38% efficiency in BaZrSe3 photovoltaic cells https://doi.org/10.1016/j.optcom.2025.131769", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "8", "Details of Research Publication": "Triple band lateral 4-port flexible MIMO antenna for millimeter wave applications at 24/28/38 GHz https://doi.org/10.1016/j.rineng.2025.104678", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "6", "Details of Research Publication": "Efficient terahertz radiation absorption using a graphene and InSb pixel-based metasurface absorber: design and simulation https://doi.org/10.1364/JOSAB.546983", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "Device Engineering of a Novel Lead-Free Solar Cell Architecture Utilizing Inorganic CsSnCl3 and CsSnI3 Perovskite-Based Dual Absorbers for Sustainable Powering of Wireless Networks https://doi.org/10.1007/s11664-024-11605-9", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Comparison of SPV System Performance with DAST System Using MPPT Algorithms https://doi.org/10.1007/978-981-97-4152-6_36", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "High-Speed Approximate Adder Design through Charge Recovery Logic and Hybrid Low Power Technique https://doi.org/10.1109/VLSISATA65374.2025.11070085", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "10", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "8", "Details of Research Publication": "A Low-Profile Dual-Band Millimeter Wave Patch Antenna for High-Speed Wearable and Biomedical Applications https://doi.org/10.1016/j.rineng.2024.103212", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "11", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Device engineering of lead-free FaCsSnI3/Cs2AgBiI6-based dual-absorber perovskite solar cell architecture for powering next-generation wireless networks https://doi.org/10.1007/s11664-024-11605-9", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "12", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "6", "Details of Research Publication": "Improvement of photovoltaic response in perovskite solar cell via all inorganic lead free cubic double La2NiMnO6/Cs3Bi2I9 based graded absorber architecture https://doi.org/10.1007/s11082-024-07239-0", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "13", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "4", "Details of Research Publication": "Analytical investigation of CdSe/CdS/ZnSe based single core double-shell nanotextured vertical nanopillar array antenna for broadband photodetection applications https://doi.org/10.1002/dac.5752", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "14", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "6", "Details of Research Publication": "Compact Dual Band 4-Port MIMO Antenna for 5G-Sub 6GHz/N38/N41/N90 and WLAN Frequency Bands https://doi.org/10.1016/j.aeue.2023.154919", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "15", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "6", "Details of Research Publication": "Transmit power allocation for Sub-6GHz/mmWave based 5G cellular network https://doi.org/10.3103/S0735272723060043", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "16", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "5", "Details of Research Publication": "Power Minimization in Cell-Free Massive MIMO with AP Selection Algorithm http://dx.doi.org/10.2174/2210327913666230314122645", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "17", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "4", "Details of Research Publication": "Multi-loop Control Design for Two Input Two Output System: A Disturbance Observer Approach https://doi.org/10.1109/RAEEUCCI57140.2023.10134280", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "18", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "5", "Details of Research Publication": "Capacity Maximization in Cell Free Massive MIMO Network with Access Point Selection Method https://doi.org/10.2174/2210327913666221222145957", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "19", "Publication Affiliation": "MITS", "Academic Year": "2017-18", "Author Position": "4", "Details of Research Publication": "Moving Object Localization in Video Sequences under Static and Dynamic Background Conditions http://dx.doi.org/10.22266/ijies2019.0430.15", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "20", "Publication Affiliation": "MITS", "Academic Year": "2018-19", "Author Position": "4", "Details of Research Publication": "Quality and Complexity Measurement of 2D-DCT Archietecture Using Loeffler Algorithm Along with CSD and CSE https://doi.org/10.1007/978-981-13-5758-9_30", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "21", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "4", "Details of Research Publication": "Adaptive hybrid intelligent MPPT controller to approximate effectual wind speed and optimal rotor speed of variable speed wind turbine https://doi.org/10.1016/j.isatra.2019.05.029", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "202541080004", "Title of the Patent": "A System for Electricity Generation from Food Waste and A Method of Monitoring Using IOT", "Status": "Under Examination"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2023", "Application ID": "202341000087", "Title of the Patent": "Design and Performance of Charge-Plasma-Based Schottky-FET CMOS Circuit Ring Oscillator for High Density ICs", "Status": "Published"}
          ]
        }
      ]
    },

    "Dr. Nehru Kandasamy": {
      name: "Dr. Nehru Kandasamy",
      designation: "Professor",
      email: "drnehruk@mits.ac.in",
      officeAddress: "West Block",
      image: "public/uploads/faculty/Nehru.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Low Power VLSI", "Branch": "Information and Communication Engineering", "College Name/University": "Anna University, Chennai, India.", "Year of Passing": "2014"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "VLSI Design", "Branch": "VLSI Design", "College Name/University": "R.M.K Engineering College, Chennai,Tamilnadu.", "Year of Passing": "2007"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "Electronics and Instrumentation Engineering", "Branch": "Electronics and Instrumentation Engineering", "College Name/University": "Erode Sengunthar Engineering College, Erode, Tamilnadu", "Year of Passing": "2005"}
          ]
        },
        {
          title: "Research Areas",
          content: "Low Power VLSI, Qunatum Dot Cellular Automata and Non-Volatile Memory Devices"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus Link", "Link": "https://www.scopus.com/authid/detail.uri?authorId=55208410000"},
            {"Identifier": "Vidwan Link", "Link": "https://mits.irins.org/profile/228866"},
            {"Identifier": "Google scholar Link", "Link": "https://scholar.google.com/citations?user=cORML-QAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "13"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "5", "Details of Research Publication": "A Novel Area Efficient and High‐Speed BCD Adder Using CFA and Multiplexer in Quantum‐Dot Cellular Automata. IEEJ Transactions on Electrical and Electronic Engineering.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "Parkinson’s Disease Prediction Using Artificial Neural Network. In Healthcare Recommender Systems: Techniques and Recent Developments (pp. 169-184). Cham: Springer Nature Switzerland.", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "Knee Osteoarthritis Severity Prediction Using CNN Models and Web Application. In Healthcare Recommender Systems: Techniques and Recent Developments (pp. 147-167). Cham: Springer Nature Switzerland.", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "6", "Details of Research Publication": "Implementation of IEEE 802.11 p for Vehicular Communication: Utilizing NI USRP N321 to Advance Mobile Interactive Technologies. International Journal of Interactive Mobile Technologies, 19(9).", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "Beyond 5G: Exploring Key Enabling Technologies, Use Cases, and Future Prospects of 6G Communication. Nano Communication Networks, 100560.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "1", "Details of Research Publication": "Analysis of Serial Adder Using FinFET Based GDI Technique. In 2024 International Conference on Smart Systems for applications in Electrical Sciences (ICSSES) (pp. 1-6). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "3", "Details of Research Publication": "Face Mask Detection and Temperature Scanning for the COVID-19 Surveillance System Based on Deep Learning Models. In Machine Learning and Deep Learning Techniques for Medical Image Recognition (pp. 194-216). CRC Press.", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "2", "Details of Research Publication": "Multiple Lung Disease Prediction Using X-Ray Images Based on Deep Convolutional Neural Networks. In Machine Learning and Deep Learning Techniques for Medical Image Recognition (pp. 25-39). CRC Press.", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "2", "Details of Research Publication": "Classification of Melanoma Skin Cancer Based on Transformer Deep Learning Model. In Ecological and Evolutionary Perspectives on Infections and Morbidity (pp. 208-227). IGI Global.", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "10", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "1", "Details of Research Publication": "Design of novel low power architectures of 4: 2, 5: 2 compressors and 2-bit counter using 7 nm FinFET technology. Journal of Ambient Intelligence and Humanized Computing, 14(3), 2467-2479.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "11", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "2", "Details of Research Publication": "Smart healthcare monitoring system using LoRaWAN IoT and machine learning methods. In Practical Artificial Intelligence for Internet of Medical Things (pp. 85-104). CRC Press.", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "12", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "2", "Details of Research Publication": "Smart device for women’s safety designed using iot and virtual instrumentation browser. iJIM, 17(02), 167", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "13", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "5", "Details of Research Publication": "Performance Analysis of Different SRAM Cells and Proposed 9T SRAM Cell. In 2023 8th International Conference on Communication and Electronics Systems (ICCES) (pp. 304-308). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "14", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "1", "Details of Research Publication": "Quantum dot cellular automata-based scan flip-flop and boundary scan register. IETE Journal of Research, 69(1), 535-548.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "15", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "1", "Details of Research Publication": "Novel optimized ultra-dense 1-bit magnitude comparator design in quantum-dot cellular automata technology based on MV32 gate. Journal of Supercomputing, 78(17).", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "16", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "3", "Details of Research Publication": "USRP 2901-based SISO-GFDM transceiver design experiment in virtual and remote laboratory. The International Journal of Electrical Engineering & Education, 59(4), 350-365.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "17", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "3", "Details of Research Publication": "Papr reduction of gfdm system using parallel concatenation of ldpc codes. In 2022 IEEE Fourth International Conference on Advances in Electronics, Computers and Communications (ICAECC) (pp. 1-5). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "18", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "3", "Details of Research Publication": "Performance analysis of parallel concatenation of LDPC coded SISO-GFDM system for distinctive pulse shaping filters using USRP 2901 device and its application to WiMAX. Wireless Personal Communications, 121(4), 3085-3123.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "19", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "2", "Details of Research Publication": "Review on smart farming and smart agriculture for society: Post-pandemic era. In Green Technological Innovation for Sustainable Smart Societies: Post Pandemic Era (pp. 233-256). Cham: Springer International Publishing.", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "20", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "2", "Details of Research Publication": "Review of the medical Internet of Things-based RFID security protocols. In Nanoelectronic Devices for Hardware and Software Security (pp. 163-178). CRC Press", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "21", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "1", "Details of Research Publication": "Hybrid 4: 16 decoder using variable bias GDI technique. In International Conference on Advances in Electrical and Computer Technologies (pp. 637-647). Singapore: Springer Nature Singapore", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "22", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "5", "Details of Research Publication": "Web Scraping based Smart irrigation system with telegram alerts for farmers. In 2021 Fourth International Conference on Electrical, Computer and Communication Technologies (ICECCT) (pp. 1-6). IEEE", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "23", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "5", "Details of Research Publication": "IoT based secure lock/unlock system using Google Assistant based English and French languages. iJOE, 17(10), 35.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "24", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "4", "Details of Research Publication": "Switched inductor Z-source inverter with modified space vector pulse width modulation for uninterruptible power supply. International Review of Electrical Engineering, 16(4), 368-376.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "25", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "5", "Details of Research Publication": "BER Analysis of LTE-OFDM based DWT, Haar transform and Singular Wavelet Decomposition in Stanford University Interim channel. In 2020 Third International Conference on Advances in Electronics, Computers and Communications (ICAECC) (pp. 1-5). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "26", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "1", "Details of Research Publication": "Transposed 3 Tap FIR Filter Design Using Consolidation of Pipelining and Parallel Processing Technique. In 2020 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT) (pp. 1-6). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "27", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "1", "Details of Research Publication": "Analysis of IG FINFET based N-Bit barrel shifter. International Journal of Integrated Engineering, 12(8), 141-148", "Indexing": "WOS & Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "28", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "Analysis of self checking and self resetting logic in CLA and CSA circuits using gate diffusion input technique. In 2019 International Conference on Smart Systems and Inventive Technology (ICSSIT) (pp. 1-6). IEEE", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "29", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "3", "Details of Research Publication": "Smart sensor network based fire rescue system design using lab VIEW. International Journal of Recent Technology and Engineering, 8(2), 3372-3380.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "30", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "2", "Details of Research Publication": "Smart sensor network-based atm management system using lab view.International Journal of Engineering and Advanced Technology, 8(5), 2434-2444", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "31", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "3", "Details of Research Publication": "Ber analysis of concatenated levels of encoding in GFDM system using labview. Indonesian journal of electrical engineering and computer science, 14(1), 80-91.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "32", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "3", "Details of Research Publication": "Digital audio broadcasting based gfdm transceiver using software defined radio. International journal of Innovative technology and Exploring Engineering, 8(5), 273-281.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "33", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "4", "Details of Research Publication": "Infra-red sensor and voice recognition sensors based vehicle speed control using embedded controller. Int. J. Innov. Technol. Explor. Eng, 8, 303-305.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "34", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "4", "Details of Research Publication": "USRP Based Digital Audio Broadcasting Using OFDM in Virtual and Remote Laboratory. Int. J. Online Biomed. Eng., 15(13), 77-85.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "35", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "2", "Details of Research Publication": "Design of smart GSM and GPS based rescue system for international maritime boarder crossing of Indian fisherman using AVR microcontroller. International Journal of Innovative Technology and Exploring Engineering, 8(452), 264-267", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "36", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "1", "Details of Research Publication": "Shannon logic based novel QCA full adder design with energy dissipation analysis. International Journal of Theoretical Physics, 57(12), 3702-3715.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "37", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "1", "Details of Research Publication": "Performance evolution of 4-b bit MAC unit using hybrid GDI and transmission gate based adder and multiplier circuits in 180 and 90 nm technology. Microprocessors and Microsystems, 59, 15-28.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "38", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "2", "Details of Research Publication": "Low Power Delay Product 8-bit ALU design using decoder and data selector. Majlesi Journal of Electrical Engineering, 12(1), 103-108", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "39", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "1", "Details of Research Publication": "Power analysis data set for 4-Bit MOCLA adder. Data in brief, 16, 122", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "40", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "2", "Details of Research Publication": "Analysis of DCVS and MODL Logic in CLA. Journal of Engineering and Applied Sciences. 13(7), 1844-1850", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "41", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "1", "Details of Research Publication": "A new approach for cyclic combinational circuit using TGDI. Procedia computer science, 143, 645-652", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "42", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "1", "Details of Research Publication": "Design of a low-power ALU and synchronous counter using clock gating technique. In Progress in Advanced Computing and Intelligent Engineering: Proceedings of ICACIE 2016, Volume 2 (pp. 511-518). Singapore: Springer SingaporeE", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "43", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "3", "Details of Research Publication": "USRP 2901 based FM transceiver with large file capabilities in virtual and remote laboratory. iJOE, 14(10), 193.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "44", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "3", "Details of Research Publication": "Intelligent vehicular system with speed limit. Int. J. Eng. Technol, 7, 20-23.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "45", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "1", "Details of Research Publication": "ANALYSIS OF DYNAMIC POWER CONSUMPTION IN 4 TAP FIR FILTER USING SL BASED ADDER AND MULTIPLIER CIRCUITS", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "46", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "4", "Details of Research Publication": "Shadow detection and removal in aerial images using Gaussian mixture-based background and foreground segmentation algorithm. International Journal of Engineering and Technology. 8(7), 976-982", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "47", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "4", "Details of Research Publication": "SATURATION AND NON-SATURATION THROUGHPUT AND PACKET DELAY ANALYSIS OF IEEE 802.11 DCF FOR AD-HOC NETWORKS. International Journal of Mechanical Engineering and Technology, 8(7), 566-573.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "48", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "1", "Details of Research Publication": "Design of 16 Bit Vedic Multiplier Using Semi-Custom and Full Custom Approach. Journal of Engineering Science & Technology Review, 10(2).", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "49", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "1", "Details of Research Publication": "Comparative Analysis of CNTFET and CMOS Logic based Arithmetic Logic Unit. Journal of Nano and Electronic Physics", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "50", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "1", "Details of Research Publication": "Simulation of Analog Modulation and Demodulation Techniques in Virtual Instrumentation and Remote Lab. Int. J. Online Eng., 13(10), 140-147", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "51", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "2", "Details of Research Publication": "Investigation and analysis of low power modified 14T adder and 20T adder circuits. Far East journal of electronics and communications, 23(2), 245-252", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "52", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "1", "Details of Research Publication": "Performance analysis of power gating techniques in 4-bit SISO shift register circuits. Journal of Engineering Science and Technology, 12(12), 3203-3214", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "53", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "2", "Details of Research Publication": "DESIGN OF LOW-POWER ADDER USING DOUBLE GATE & MTCMOS TECHNOLOGY. Journal of Theoretical & Applied Information Technology, 95(1)", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "54", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "2", "Details of Research Publication": "Smart sensor network based high quality air pollution monitoring system using labview. International Journal of Online Engineering (iJOE), 13(08), 79-87", "Indexing": "WOS", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "55", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "2", "Details of Research Publication": "Cruise Control of Phase Irrigation Motor Using SparkFun Sensor. Int. J. Online Eng., 13(8), 192-198", "Indexing": "WOS", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "56", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "2", "Details of Research Publication": "Smart Sensor Network based Industrial Parameters Monitoring in IOT Environment using Virtual Instrumentation Server. Int. J. Online Eng., 13(11), 111-119.", "Indexing": "WOS", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "57", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "2", "Details of Research Publication": "Human tracking system using beagle board-xm. Int’l Journal of Applied Engg. Research, 12(16), 5665-5669", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "58", "Publication Affiliation": "Others", "Academic Year": "2016", "Author Position": "2", "Details of Research Publication": "Design and study the characteristics of E-shaped micro strip patch antenna with different dielectric substrates. International Journal of Applied Engineering Research ISSN, 0973-4562", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "59", "Publication Affiliation": "Others", "Academic Year": "2016", "Author Position": "1", "Details of Research Publication": "Performance analysis of low power and high speed 16-Bit CRC Generator using GDI technique. In 2016 3rd International Conference on Advanced Computing and Communication Systems (ICACCS) (Vol. 1, pp. 1-5). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "60", "Publication Affiliation": "Others", "Academic Year": "2015", "Author Position": "1", "Details of Research Publication": "Analysis of 16-bit counter using GDI technique and CMOS logic. International Journal of Applied Engineering Research, 6(10), 16121-28.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "61", "Publication Affiliation": "Others", "Academic Year": "2014", "Author Position": "1", "Details of Research Publication": "Design of high-performance low-power full adder. International journal of computer applications in technology, 49(2), 134-140.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "62", "Publication Affiliation": "Others", "Academic Year": "2012", "Author Position": "1", "Details of Research Publication": "Design of lowpower ALU using 8T FA and PTL BasedMUX circuits. In IEEE-International Conference On Advances In Engineering, Science And Management (ICAESM-2012) (pp. 724-730). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "63", "Publication Affiliation": "Others", "Academic Year": "2012", "Author Position": "1", "Details of Research Publication": "Design of 64-bit low power parallel prefix VLSI adder for high speed arithmetic circuits. In 2012 International Conference on Computing, Communication and Applications (pp. 1-4). IEEE.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Research Projects & Events",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2025", "Type": "Funded Project", "Role": "Coordinator", "Title": "International Conference on Recent Developments in Microelectronics, Nanoelectronics and Power Electronics", "Amount": "2,40,000", "Agency": "ANRF"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2025", "Type": "Event-International Conference", "Role": "Coordinator", "Title": "Entrepreneurship and Innovation for Sustainable Development Goals", "Amount": "250 USD", "Agency": "IEEE ACEI R10 and IEEE Foundation"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2025", "Type": "Event- IEEE R10 ACEI", "Role": "Coordinator", "Title": "Directions and Ideas for Young Graduates to become Professionals", "Amount": "400 USD", "Agency": "IEEE YP and IEEE Foundation"},
            {"S.No": "4", "Affiliation": "MITS", "Academic Year": "2025", "Type": "Event- IEEE Young Professionals", "Role": "Coordinator", "Title": "Fostering Research and Developments in Academic Institutions", "Amount": "6,000", "Agency": "NITTTR Chandigarh"},
            {"S.No": "5", "Affiliation": "MITS", "Academic Year": "2024", "Type": "Event- FDP", "Role": "Coordinator", "Title": "Recent Trends in VLSI circuits, Systems and Architectures", "Amount": "1,00,000", "Agency": "SERB"},
            {"S.No": "6", "Affiliation": "MITS", "Academic Year": "2024", "Type": "Even-IEEE CAS Seasonal School", "Role": "Coordinator", "Title": "Neuromorphic Computing and Logic In Memory Computing Using Non Volatile Memory Devices", "Amount": "2173 USD", "Agency": "IEEE CASS"},
            {"S.No": "7", "Affiliation": "MITS", "Academic Year": "2024", "Type": "Event-IEEE Distinguished Lecturer Program", "Role": "Coordinator", "Title": "Analog Memory Computation", "Amount": "25,000", "Agency": "IEEE CASS"},
            {"S.No": "8", "Affiliation": "MITS", "Academic Year": "2024", "Type": "Event- Workshop", "Role": "Coordinator", "Title": "Digital ASIC Design using Open Source tools", "Amount": "20,000", "Agency": "IEEE Hyderabad Section"},
            {"S.No": "9", "Affiliation": "MITS", "Academic Year": "2024", "Type": "Event- IEEE SPAx", "Role": "Coordinator", "Title": "Project Design Contest- Engineering in Agriculture, Sustainability and Green Electronics", "Amount": "150 USD", "Agency": "IEEE SPAx Committee"},
            {"S.No": "10", "Affiliation": "MITS", "Academic Year": "2024", "Type": "Event - FDP", "Role": "Coordinator", "Title": "Free Software’s for ECE lab Practices", "Amount": "8,000", "Agency": "NITTTR Chandigarh"},
            {"S.No": "11", "Affiliation": "MITS", "Academic Year": "2024", "Type": "IEEE CAS Start Up Fund", "Role": "Coordinator", "Title": "Technical Activities", "Amount": "200 USD", "Agency": "IEEE CASS"},
            {"S.No": "12", "Affiliation": "MITS", "Academic Year": "2024", "Type": "Event- IEEE VSB", "Role": "Coordinator", "Title": "Grid Modernization: Technological Advancement Beyond Smart Grid", "Amount": "-", "Agency": "IEEE VSB"},
            {"S.No": "13", "Affiliation": "MITS", "Academic Year": "2023", "Type": "Event- ISRO START", "Role": "Coordinator", "Title": "Space Science Technology Awareness Training Program", "Amount": "-", "Agency": "ISRO"},
            {"S.No": "14", "Affiliation": "MITS", "Academic Year": "2023", "Type": "Event- IEEE VSB", "Role": "Coordinator", "Title": "Basics of Research, Paper Writing, Patent Filling, Project Proposal Submission", "Amount": "-", "Agency": "IEEE VSB"},
            {"S.No": "15", "Affiliation": "MITS", "Academic Year": "2023", "Type": "Event- IEEE VSB", "Role": "Coordinator", "Title": "VLSI Design: Processes, Devices and Circuits", "Amount": "-", "Agency": "IEEE VSB"},
            {"S.No": "16", "Affiliation": "Others", "Academic Year": "2018", "Type": "Event-STTP", "Role": "Coordinator", "Title": "VLSI System Design", "Amount": "-", "Agency": "IARE"},
            {"S.No": "17", "Affiliation": "Others", "Academic Year": "2016", "Type": "Event – International Conference", "Role": "Co-Coordinator", "Title": "Advances in Computer Science, Engineering and Communications", "Amount": "95,000", "Agency": "IARE"},
            {"S.No": "18", "Affiliation": "Others", "Academic Year": "2009", "Type": "Event-STTP", "Role": "Co-Coordinator", "Title": "Digital System Design using HDL", "Amount": "-", "Agency": "BIT"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "Others", "Academic Year": "2017", "Application ID": "201841002061", "Title of the Patent": "COMPACT MULTI-FUNCTIONAL SMART LAPTOP", "Status": "Published"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Research fellow scholarship awarded by National University of Singapore from 2023 to 2025.",
            "Editorial Board Member - Scientific Reports with effect from October 2025",
            "Editorial Board Member – International Journal of Reconfigurable Embedded Systems",
            "IEEE SPAx Award 2024",
            "IEEE YP Award 2025",
            "IEEE Indian Council Academic Mentor 2025",
            "IEEE Day 2025 Ambassador",
            "IEEE Xtreme Proctor Ambassador 2025",
            "I received certificate of appreciation from Madanapalle Institute of Technology and Science Engineering for paper publication.",
            "ISRO START Program Nodal Centre Coordinator – 2023",
            "Reviewer for more than 25 SCI indexed Journals like IEEE, Springer, Elsevier and Wiley Publications.",
            "Acted as track chair/meta reviewer/special session chair in various reputed international conferences.",
            "Young faculty award from Venus International Foundation.",
            "Membership in professional bodies like SMIEEE, LMISTE, FIETE, MESR, MIAENG, MIACSIT, MUACEE"
          ]
        }
      ]
    },

    "Dr. Murli Manohar": {
        "name": "Dr. Murli Manohar",
        "designation": "Assoc. Professor",
        "email": "drmurlimanohar@mits.ac.in",
        "officeAddress": "West Block",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Murali Manohar.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Microwave and RF Engineering",
                            "Branch": "Electronics & Communication Engineering",
                            "College Name/University": "Indian Institute of Technology, Guwahati",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Electronics System and Communication",
                            "Branch": "Electrical Engineering",
                            "College Name/University": "National Institute of Technology, Rourkela",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Electronics & Communication Engineering",
                            "Branch": "Electronics & Communication Engineering",
                            "College Name/University": "Institution of Electronics & Telecommunication Engineers (AMIETE), New Delhi",
                            "Year of Passing": "2008"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus :",
                        "Vidwan :",
                        "Google scholar : https://scholar.google.com/citations?user=kkbppg0AAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 8"
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
                            "Details of Research Publication": "&ldquo;A Quadruple Band-Notched SWB MIMO Antenna with Enhanced Isolation Using Wiggly Line,&rdquo; Radioengineering, vol. 33, No. 2, pp. 274-281, June 2024.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;A High selectivity dual band-stop antenna with wide tuning characteristics for UWB applications,&rdquo; Analog Integrated Circuits and Signal Processing (Springer), Vol. 35, Issue 15, pp. 71&ndash;79, 2022.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;A Modified SWB Hexagonal Fractal Spatial Diversity Antenna with High Isolation Using Meander Line Approach,&rdquo; IEEE Access, Vol. 10, pp. 10238 - 10250, 2022.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Wideband Circularly Polarized Triangular Monopole Antenna for High-Speed Internet Access,&rdquo; International Journal of Electromagnetic waves and Applications (Taylor & Francis), Vol. 35, Issue 15, pp. 2102-2113, 2021.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Design and Analysis of a compact wideband Monopole patch antenna for future handheld gadgets,&rdquo; Progress in Electromagnetics Research Journal, Vol. 109, pp. 227-241, 2021.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "Miniaturized Low Profile Super-wideband Koch Snowflake Fractal Monopole Slot Antenna with Improved BW and Stabilised Radiation Pattern,&rdquo; IET Microwaves, Antennas and Propagation, vol. 13, Issue 11, pp. 1948-1954, 2019.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Low Profile Dual Band-Stop Super Wideband Printed Monopole Antenna with Polarization Diversity,&rdquo; International Journal of Microwave and Wireless Technologies, vol. 11, Issue 7, pp. 694-702, Mar. 2019.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;A Compact Dual Band-notched Circular Ring Printed Monopole Antenna for Super wideband Applications,&rdquo; Radioengineering, vol. 26, No. 1, pp. 64-70, April 2017.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Superwideband Antenna with Single Band Suppression,&rdquo; International Journal of Microwave and Wireless Technologies, Vol. 9, Issue 1, pp. 143-150, Nov. 2016.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;A compact printed triangular monopole antenna for ultra-wideband application,&rdquo; Microwave and Optical Technology Letters (MOTL), vol. 56, Issue 5, May 2014, pp. 1155-1159",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Printed monopole antenna with tapered feed line, feed region, and patch for super wideband applications,&rdquo; IET Microwaves, Antennas and Propagation, vol. 8, Issue 1, Jan. 2014, pp. 39-45.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Gate qualified in 2008 with a 92.05 percentile.",
                        "Merit scholarship got for M.Tech from July 2008 to June 2010.",
                        "Merit scholarship got for PhD from July 2010 to July 2014."
                    ]
                }
            ]
    },

    "Dr. V. Jayaprakasan": {
        "name": "Dr. V. Jayaprakasan",
        "email": "drjayaprakasanv@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Jayaprakasan.JPG",
        "designation": "Assoc. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "ECE",
                            "Group": "ECE",
                            "College Name/University": "JNTUA, Ananthapuramu",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Communication Systems",
                            "Group": "ECE",
                            "College Name/University": "B. S. Abdur Rahman Crescent Engineering College, Anna University",
                            "Year of Passing": "2006"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "ECE",
                            "Group": "ECE",
                            "College Name/University": "National Institute of Technology, Bharadhidasan University",
                            "Year of Passing": "1999"
                        }
                    ]
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "&ldquo;A hybrid strategy for mitigating unbalance and improving voltage considering higher penetration of electric vehicles and distributed generation&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Sustainable Cities and Society 103489, Elsevier, Vol. 76, pp 1-16, 2021 (SCI Indexed) https://doi.org/10.1016/j.scs.2021.103489"
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "&ldquo;Mitigation of Phase Noise and BER by different CE in the MIMO-OFDM System&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Lecture Notes in Electrical Engineering, Springer Nature Singapore Pvt. Ltd. Vol. 700, pp. 3143-3158, ISSN: 1876-1100 2020 (Scopus Indexed, Web of Science) https://doi.org/10.1007/978-981-15-8221-9_293"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "&ldquo;FPGA Realization of Multi-stage Decimator for WN Applications&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Lecture Notes in Electrical Engineering, Springer Nature Singapore Pvt. Ltd. Vol. 700, pp. 2335-2348, ISSN: 1876-1100 2020 (Scopus Indexed, Web of Science) https://doi.org/10.1007/978-981-15-8221-9_218"
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "&ldquo;Aerial Combat Drone&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "High Technology Letters, Volume 26, Issue 6, 2020 ISSN No: 1006-6748 (Scopus Indexed)"
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "&ldquo;Semantic Segmentation of Brain Tumor from MRI Images and SVM Classification using GLCM Features&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "The Internationaljournal of analytical and experimental modal analysis, Volume XIII, Issue VI, pp 1115- 1130, ISSN NO:0886-9367, June 2021."
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "&ldquo;Design of CIC based Decimation Filter Structure using FPGA for WiMAX Applications&rdquo;,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "IEICE Electronics Express, Vol.17 No.6, 2019. (SCI Indexed)"
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "&ldquo;Exhaustive Approach for Multistage Filter Design to Minimize Complexity of FIR Filter for WCDMA Applications,&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Recent Technology and Engineering (IJRTE) ISSN: 2277-3878, Volume-7, Issue-6, March 2019 (Scopus Indexed)"
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "&ldquo;A Compact Planar Inverted F Antenna for RF Energy Harvesting,&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Advanced Research in Dynamical & Control Systems (JARDCS), Vol. 11, 01-Special Issue, 2019 (Scopus Indexed)"
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "&ldquo; Performance Analysis of Ultra Low Power and PDP Efficient 1- Bit Full Adder Circuit for Arithmetic Blocks,&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Scientific Journal of Contemporary Research in Engineering Science and Management (ISJCRESM), ISSN: 2456- 1134 Volume-3, Issue-4, February 2019 (Google Scholar)"
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "&ldquo;Comparative Analysis of Interpolation/Decimation FIR Filter Structures for WLAN-b and WLAN-g Applications,&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal for Innovative Research in Science & Technology, Volume 2, Issue 12, ISSN (online): 2349-6010, May 2016."
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "&ldquo;Performance Analysis of Different Decimation Filter Structure Realizations using Multistage Approach for GSM Applications,&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Applied Engineering Research, Special Issue,Volume 10, No.09 (2015), April 2015 (Scopus Indexed)"
                        },
                        {
                            "S.No": "12",
                            "Title of the Paper": "&ldquo;FPGA Implementation of FIR basedDecimation Filter Structure for WiMAX Application,&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of AdvancedResearch in Computer and Communication Engineering, Volume 2, Issue 7, July 2013."
                        },
                        {
                            "S.No": "13",
                            "Title of the Paper": "&ldquo;Implementation and Comparison of Different CIC Filter Structure for Decimation,&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "ICTACT Journal on Communication Technology, Volume04, Issue: 02, June 2013."
                        },
                        {
                            "S.No": "14",
                            "Title of the Paper": "&ldquo;Implementation of Efficient Audit Service Outsourcing for Data Integrity by Interfacing the Mobile Device in Clouds,&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Computer Applications (0975-8887), Volume 67 &ndash; No.20, April 2013."
                        },
                        {
                            "S.No": "15",
                            "Title of the Paper": "&ldquo;Design and Implementation of Efficient CIC Filter Structure for Decimation,&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Computer Applications (0975-8887), Volume 65 No.14, March 2013."
                        },
                        {
                            "S.No": "16",
                            "Title of the Paper": "&ldquo;Spectrum Sensing and Security in Cognitive Radio,&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Computer Applications (0975-8887), Volume 66&ndash;No.23, March 2013."
                        },
                        {
                            "S.No": "17",
                            "Title of the Paper": "&ldquo;Power Optimization Technique for Sensor Network,&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Computer Applications Technology and Research, Volume 2&ndash; Issue 3, 255&ndash;260, 2013."
                        },
                        {
                            "S.No": "18",
                            "Title of the Paper": "&ldquo;Improvisation of MAC Protocol for WirelessSensor Network,&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Electronics and Communication andComputer Engineering, Volume 4, Issue 3, ISSN (Online): 2249-071X, ISSN (Print):2278-4209, 2013."
                        },
                        {
                            "S.No": "19",
                            "Title of the Paper": "&ldquo;Performance Analysis for Parallel MRA in Heterogeneous Wireless Networks,&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of ComputerApplications Technology andResearch, Volume 2&ndash;Issue 3, 329&ndash;334, 2013."
                        },
                        {
                            "S.No": "20",
                            "Title of the Paper": "&ldquo;Efficient way of Communication using Fuzzy Theory,&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Science and Engineering, Volume 2 (1), 2013, 31-38."
                        },
                        {
                            "S.No": "21",
                            "Title of the Paper": "&ldquo;Design of Efficient Polyphase Multistage FIR Filter with Memory Saving Structure for Decimation,&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "European Journal of Scientific Research, Vol. 93 No 2 December, 2012, pp.289-300 (Scopus Indexed)."
                        },
                        {
                            "S.No": "22",
                            "Title of the Paper": "&ldquo;Design and Analysis of Low Poser, Area Efficient Skip Logic for CSKA Circuit in Arithmetic Unit,&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "IEEE International Conference on Emerging Devices and Smart Systems (IEEE&ndash;ICEDSS&rsquo;2018), March 2nd and 3rd 2018, Namakkal, Tamilnadu, India."
                        },
                        {
                            "S.No": "23",
                            "Title of the Paper": "&ldquo;Performance Analysis of Different Decimation Filter Structure Realizations using Multistage Approach for GSM Applications,&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Engineering Technology and Science, (ICETS&rsquo;15), March 5th and 6th, 2015, Rasipuram, Tamilnadu, India."
                        },
                        {
                            "S.No": "24",
                            "Title of the Paper": "&ldquo;Design of Efficient Decimation Filter Structure for WiMAX Applications with Memory Saving Approach,&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "IEEE Int. Symposium on Signal Processing and Information Technology, (IEEE-ISSPIT&rsquo;2014), December 15-17, 2014, Noida."
                        },
                        {
                            "S.No": "25",
                            "Title of the Paper": "&ldquo;Implementation of Two Stage FIR Decimation Filter Structure,&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "2nd International Conference on Communications and Signal Processing (ICCSP&rsquo;2013), 1st &ndash; 3rd April, 2013, Ongole, India, pp. 99-10. (Achieved Best Paper Award)"
                        },
                        {
                            "S.No": "26",
                            "Title of the Paper": "&ldquo;Cascading Sharpened CIC and Polyphase FIR Filter for Decimation Filter,&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "2nd International Conference on Advances in Electrical and Electronics Engineering (ICAEEE&rsquo;2013), March 17&ndash;18, 2013, Dubai (UAE), pp.148-154."
                        },
                        {
                            "S.No": "27",
                            "Title of the Paper": "&ldquo;Evaluation of the Conventional Vs. Ancient Computation methodology for Energy Efficient Arithmetic Architecture,&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "IEEE International Conference on Process Automation, Control and Computing (IEEE-PACC&rsquo;2011), July 20&ndash;22, 2011, Coimbatore,India."
                        }
                    ]
                }
            ]
    },

    "Dr. K. Sathesh": {
        "name": "Dr. K. Sathesh",
        "email": "drsatheshk@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. K. Sathesh.JPG",
        "designation": "Assoc. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "VLSI - Biomedical Signal Processing",
                            "Branch": "ECE",
                            "College Name/University": "Anna University, Chennai",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "M.E.",
                            "Specialization": "Communication Systems",
                            "Branch": "ECE",
                            "College Name/University": "Anna University, Chennai",
                            "Year of Passing": "2008"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "ECE",
                            "Branch": "ECE",
                            "College Name/University": "Anna University, Chennai",
                            "Year of Passing": "2006"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=36703267200",
                        "Vidwan : https://mits.irins.org/profile/273389",
                        "Google scholar : https://scholar.google.com/citations?user=rnEzokIAAAAJ",
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
                            "Details of Research Publication": "Design of Energy-Efficient TinyML Accelerators: From MATLAB Modeling to FPGA and Embedded Deployment. 2026 9th International Conference on Computing Methodologies and Communication (ICCMC). IEEE, 2026.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Design and Physical Implementation of an RV32IM RISC-V Core in 7-nm Technology Using Cadence EDA Flow, 2026 4th International Conference on Self Sustainable Artificial Intelligence Systems (ICSSAS), Erode, India, 2026, pp. 270-276, doi: 10.1109/ICSSAS68835.2026.11559546.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "5",
                            "Details of Research Publication": "Design and Analysis of a Quarter-wave Fed Hexagonal Slotted Antenna with DGS for Satellite Communication Applications, 2026 7th International Conference on Inventive Research in Computing Applications (ICIRCA), Coimbatore, India, 2026, pp. 334-338, doi: 10.1109/ICIRCA69024.2026.11570492.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "5",
                            "Details of Research Publication": "Design and Analysis of an SVR-based Optimization Technique for Multiband Koch Fractal Antennas in 5G Applications, 2026 7th International Conference on Inventive Research in Computing Applications (ICIRCA), Coimbatore, India, 2026, pp. 339-343, doi: 10.1109/ICIRCA69024.2026.11570608.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "5",
                            "Details of Research Publication": "Intelligent Dynamic Task Scheduling in Embedded Systems based on CPU Load using FreeRTOS, 2026 International Conference on Recent Advancement in Electrical, Computer and Communication Technologies (IECCT), Bangalore, India, 2026, pp. 1-5, doi: 10.1109/IECCT68664.2026.11541586.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "ASIC &ndash; Based Lung Sound Separation: Performance Analysis of Adaptive Line Enhancer with Least Mean Square Algorithm Across Scaled CMOS Technologies, 2025 IEEE International Conference for Women in Innovation, Technology & Entrepreneurship (ICWITE), Bangalore, India, 2025, pp. 1-6, doi: 10.1109/ICWITE64848.2025.11306941.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Efficient ASIC Implementation of ALE-NLMS and ANN-LMS Filters for Biomedical Signal Enhancement Across Scaled CMOS Technologies, 2025 First International Conference on Intelligent Computing and Communication Systems (CICCS), Bengaluru, India, 2025, pp. 1-6, doi: 10.1109/CICCS66437.2025.11280191.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Efficient Noise Cancellation in Lung Signals Using Pipelined Adaptive LMS Algorithm https://doi.org/10.1109/ICSSEECC61126.2024.10649421 International Conference on Smart Systems for Electrical, Electronics, Communication and Computer Engineering (ICSSEECC)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Integrated Smart Trolley System: Arduino Nano-Based RFID Billing and Weight Sensor Augmentation https://doi.org/10.1109/ICCSP60870.2024.10544371 International Conference on Communication and Signal Processing (ICCSP)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Clearer HeartBeats: Enhancement of cardiac sounds using Adaptive Filtering and Wavelet Decomposition https://doi.org/10.1109/ICCSP60870.2024.10543921 International Conference on Communication and Signal Processing (ICCSP)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Design and Implementation of Multi-Band Honeycomb Fractal Antenna for 5G Applications https://doi.org/10.1109/ICCSP60870.2024.10543430 International Conference on Communication and Signal Processing (ICCSP)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "2",
                            "Details of Research Publication": "Chip Layout for Adaptive Line Enhancer Design using Adaptive Filtering Algorithms and Metrics Computation for Auscultation Signal Separation https://doi.org/10.15918/j.jbit1004-0579.2021.102 Journal of Beijing Institute of Technology",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "2",
                            "Details of Research Publication": "Neural network-based design and evaluation of performance metrics using adaptive line enhancer with adaptive algorithms for auscultation analysis https://doi.org/10.1007/s00521-020-04864-0 Neural Computing and Applications",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Least Mean Square (LMS) based neural design and metric evaluation for auscultation signal separation https://doi.org/10.1016/j.bspc.2019.101784 Biomedical Signal Processing and Control",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014-15",
                            "Author Position": "1",
                            "Details of Research Publication": "Heart sound signal separation from lung sound signal at real time using radial basis function network International Journal of Applied Engineering Research",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014-15",
                            "Author Position": "1",
                            "Details of Research Publication": "Application of adaptive line enhancer with LMS to separate heart sound signal from lung sound signal at real time http://dx.doi.org/10.19026/rjaset.9.1424 Research Journal of Applied Sciences, Engineering and Technology",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-16",
                            "Author Position": "1",
                            "Details of Research Publication": "Separation of Real Time Heart Sound Signal from Lung Sound Signal Using Neural Network https://doi.org/10.1007/978-3-319-20294-5_25 Lecture Notes in Computer Science",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013-14",
                            "Author Position": "1",
                            "Details of Research Publication": "Real time heart and lung sound separation using adaptive line enhancer with nlms-Journal of Theoretical and Applied Information Technology",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010-11",
                            "Author Position": "2",
                            "Details of Research Publication": "Design of MEMS switch for RF applications https://doi.org/10.1007/s00542-010-1196-4 Microsystem Technologies",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                }
            ]
    },

    "Dr. Maneesh Kumar Singh": {
        "name": "Dr. Maneesh Kumar Singh",
        "email": "drmaneeshs@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr_Maneesh_Kumar_Singh.png",
        "designation": "Assoc. Professor &amp; Assistant Dean",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Audio Signal Processing",
                            "Branch": "Electrical Engineering, Computing & Mathematical Science",
                            "College Name/University": "Curtin University, Perth Australia",
                            "Year of Passing": "2017"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Optical Wireless Communication",
                            "Branch": "Communication System & Networks",
                            "College Name/University": "National Institute of Technology, Hamirpur",
                            "Year of Passing": "2011"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Electronics & Communication Engineering",
                            "Branch": "Electronics & Communication Engineering",
                            "College Name/University": "Uttar Predesh Technical University, Lucknow",
                            "Year of Passing": "2009"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Audio Signal Processing"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=58266802500",
                        "Vidwan Link: https://vidwan.inflibnet.ac.in/profile/644655",
                        "Google scholar Link: https://scholar.google.com/citations?user=KROF-BEAAAAJ&hl=en",
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
                            "Author Position": "2",
                            "Details of Research Publication": "Evaluation of speech corrupted due to Himalayan snowfall noise and wireless transmission. https://doi.org/10.1007/s12243-026-01150-3",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "4",
                            "Details of Research Publication": "Performance Evaluation of Speech Over Wireless Transmission with Real Time Weather Induced noise During Snowfall at Himalayan Regions. DOI: http://dx.doi.org/10.2139/ssrn.4651221",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "2",
                            "Details of Research Publication": "Performance analysis of speech transmission over composite wireless channels DOI: https://doi.org/10.5152/electrica.2022.22097",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "2",
                            "Details of Research Publication": "Weighted Sigmoid-based Frequency-Selective Noise Filtering for Speech Intelligibility Improvements DOI: https://doi.org/10.1007/s00034-020-01469-9",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Author Position": "1",
                            "Details of Research Publication": "Bayesian Noise Estimation in the Modulation Domain DOI: https://doi.org/10.1016/j.specom.2017.11.008",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-19",
                            "Author Position": "2",
                            "Details of Research Publication": "Sigmoid-based Adaptive Noise Estimation Method for Speech Intelligibility Improvement DOI: https://doi.org/10.1109/ICCMC.2019.8819855",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-17",
                            "Author Position": "2",
                            "Details of Research Publication": "Performance of FSO System Using PPM and MSK SCI Modulation DOI: https://doi.org/10.1109/WiSPNET.2017.8300205",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011-12",
                            "Author Position": "1",
                            "Details of Research Publication": "Power Budget Optimization for a Short Distance Optical Wireless Link over Different Atmospheric Turbulences DOI: https://doi.org/10.1063/1.3643589",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011-12",
                            "Author Position": "1",
                            "Details of Research Publication": "Bit Error Rate Analysis of Free Space Optical Link Using Different Optical Windows DOI: https://doi.org/10.1109/ICDECOM.2011.5738529",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011-12",
                            "Author Position": "1",
                            "Details of Research Publication": "To study the FSO link performance over stochastic variations in additional attenuation DOI: https://doi.org/10.1109/ICCCET.2011.5762484",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011-12",
                            "Author Position": "2",
                            "Details of Research Publication": "A Heuristic Approach for Component Selection of Low-Power Micro-sensor Nodes based on Energy Model DOI: https://doi.org/10.1109/ICECTECH.2011.5941906",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Served as a supervisor in summer internship program under INSA-IASc-NASc (2018) and supervised two external interns.",
                        "Faculty Coordinator, Society for Promotion of Electronic Culture (SPEC) at NIT Hamirpur.",
                        "Received Curtin Postgraduate Research Scholarship."
                    ]
                }
            ]
    },

    "Dr. Grande Naga Jyothi": {
      name: "Dr. Grande Naga Jyothi",
      designation: "Assoc. Professor",
      email: "drnagajyothig@mits.ac.in",
      officeAddress: "West Block",
      image: "public/uploads/faculty/Naga Jyothi.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "VLSI Design", "Branch": "Electronics and Communication Engineering", "College Name/University": "VIT University", "Year of Passing": "2020"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "VLSI Design", "Branch": "Electronics and Communication Engineering", "College Name/University": "VIT University", "Year of Passing": "2008"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "Electrical & Electronics Engineering", "Branch": "Electrical & Electronics Engineering", "College Name/University": "JNTU University, Anantapur", "Year of Passing": "2006"}
          ]
        },
        {
          title: "Research Areas",
          content: "Low Power VLSI, Quantum Computing, Machine Learning"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus Link", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57201719634"},
            {"Identifier": "Vidwan Link", "Link": "https://mits.irins.org/profile/461157"},
            {"Identifier": "Google scholar Link", "Link": "https://scholar.google.co.in/citations?user=rArFkNsAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "11"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "4", "Details of Research Publication": "AA-TransDeeplabv3+: a novel semantic segmentation framework for aerial images using adaptive and attentive based Transdeeplabv3 + with hybrid optimization technique Signal, Image and Video Processing", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "4", "Details of Research Publication": "CNN based Voice Recognition by self governing Robots to Improve computer-Human Communication Advances in Nonlinear Variational Inequalities", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "1", "Details of Research Publication": "Automatic Analysis and Detection of Multi-Channel ECG Signals Using Neural Network  International Conference on Innovations in Bio-Inspired Computing and Applications (Springer)", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "NA"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "Enhanced Diabetic Retinopathy Classification Using Inception Net V3: A Deep Learning Approach convergence-internet-medical-things-iomt/343092 (IGI Global)", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "NA"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "Deep Learning Classification of Diabetic Retinopathy Using ResNet-101 Convolutional Neural Networks convergence-internet-medical-things-iomt/343092 (IGI Global)", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "NA"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "5", "Details of Research Publication": "Novel Synchronous Counters Using Flip Flops for Low Power Applications Procedings of the 1st international conference on Intelligent Healthcare and Computational Neural Modelling", "Indexing": "Web of Science", "Publication": "Book Chapter", "Journal Quartile": "NA"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "3", "Details of Research Publication": "A Novel Low Complexity SLM for PAPR Reduction in OFDM Procedings of the 1st international conference on Intelligent Healthcare and Computational Neural Modelling", "Indexing": "Web of Science", "Publication": "Book Chapter", "Journal Quartile": "NA"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Development and Assessment of a Four-Element Ultra-Wideband (UWB) MIMO Antenna System for 5G Implementations 024 3rd International Conference on Artificial Intelligence For Internet of Things (AIIoT)", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "NA"},
            {"S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "4", "Details of Research Publication": "Enhancing network forensic and deep learning mechanism for internet of things networks Journal of Scientific & Industrial Research", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "4", "Details of Research Publication": "Utilization of IoT-assisted computational strategies in wireless sensor networks for smart infrastructure management International Journal of System Assurance Engineering and Management", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "5", "Details of Research Publication": "Breast cancer detection using deep learning model", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "NA"},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "1", "Details of Research Publication": "High-speed low area 2D FIR filter using vedic multiplier", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "NA"},
            {"S.No": "13", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "4", "Details of Research Publication": "Designing a fuzzy Q-learning power energy system using reinforcement learning International Journal of Fuzzy System Applications (IJFSA)", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "14", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "4", "Details of Research Publication": "Multiple degradation skilled network for infrared and visible image fusion based on multi-resolution svd updation Mathematics (MDPI)", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "15", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "1", "Details of Research Publication": "ASIC Implementation of Distributed Arithmetic Based FIR Filter Using RNS for High Speed DSP Systems International journal of Speech Technology (Springer)", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "16", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "1", "Details of Research Publication": "High speed low area OBC DA based decimation filter for hearing aids application International journal of Speech Technology (Springer)", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "17", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "1", "Details of Research Publication": "Asic implementation of linear equalizer using adaptive fir filter International Journal of e-Collaboration (IJeC) (IGI Global)", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "18", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "Low Power Design of 2–4 and 4–16 Line Decoders International Journal of Innovative Technology and Exploring Engineering", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "19", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "High speed and low area decision feed-back equalizer with novel memory less distributed arithmetic filter Multimedia Tools and Applications", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "20", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "ASIC Implementation of Fixed-Point Iterative, Parallel, and Pipeline CORDIC Algorithm", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "NA"},
            {"S.No": "21", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "2", "Details of Research Publication": "A Low Power 10 bit 50-MS/s Sample and Hold OTA Amplifier", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "NA"},
            {"S.No": "22", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "3", "Details of Research Publication": "High speed finfet traff comparator-based function generator", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "23", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "1", "Details of Research Publication": "Low Power, Low Area Adaptive Finite Impulse Response Filter Based on Memory Less Distributed Arithmetic Journal of Computation and Theoritical Nano Science", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "24", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "1", "Details of Research Publication": "Asic implementation of low power, area efficient adaptive fir filter using pipelined da", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "NA"},
            {"S.No": "25", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "1", "Details of Research Publication": "Distributed arithmetic architectures for fir filters-a comparative review", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "NA"},
            {"S.No": "26", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "1", "Details of Research Publication": "Asic implementation of shared lut based distributed arithmetic in fir filter", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "NA"}
          ]
        },
        {
          title: "Research Projects & Events",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024-2025", "Type": "Workshop", "Role": "Coordinator", "Title": "Hands-On EDA Tools for Semiconductor Manufacturing", "Amount": "5,000", "Agency": "IEEE ComSOC"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024", "Application ID": "202441036554", "Title of the Patent": "Real Time structural Health Monitoring System Using IOT and AI", "Status": "Published"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "465302-001", "Title of the Patent": "Agriculture field operations managing ROBOT", "Status": "Published"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Editorial Board Member in Scientific Report Journal",
            "Editorial Board member in International Journal for Interdisciplinary Sciences and Engineering Application",
            "Reviewer for many journals\n\t\nResourse person for the international workshop on “Scientific Writing Tools and AI in Technical Content Writing” from 06-10-2025 to 10-10-2025\nResourse Persson for the A one day Hands on training on Latex Tool  on 23-09-2025 by MITS\nResource person for the workshop “Hands on session of Digital System Design with Simulation Tools\" in BITS engineering College from 16-07-2025 to 18-07-2025.\nResource person for the “Challenges in VLSI design and Intelligent System\" in Mother Teresa Engineering College on 18-03-2025\nResource person for the work shop ”Advances in Electron Device Technology for IoT and Communication ” in MITS on 24-04-2024 \nResource Person for ”Essentials and Practices:LATEX” in MITS on from 26-02-2024 to 01-03- 2024in MITS on 06-02-2024 to 10-02-2024.\nResource Person for work shop ”Document preparation using Latex” from 08.01.2024 to 09.01.2024 in Chadalawada Ramanamma engineering college \nResource person for the guest lecture on ”VLSI Design:Its history and future” on 15-02-2024 in Srinivasa Institute of Technology and Science\nResource person for the workshop ”LATEX” on 26-12-2023 in Vellore Institute of Technology and Science,Vellore.",
            "Resourse person for the international workshop on “Scientific Writing Tools and AI in Technical Content Writing” from 06-10-2025 to 10-10-2025",
            "Resourse Persson for the A one day Hands on training on Latex Tool  on 23-09-2025 by MITS",
            "Resource person for the workshop “Hands on session of Digital System Design with Simulation Tools\" in BITS engineering College from 16-07-2025 to 18-07-2025.",
            "Resource person for the “Challenges in VLSI design and Intelligent System\" in Mother Teresa Engineering College on 18-03-2025",
            "Resource person for the work shop ”Advances in Electron Device Technology for IoT and Communication ” in MITS on 24-04-2024",
            "Resource Person for ”Essentials and Practices:LATEX” in MITS on from 26-02-2024 to 01-03- 2024in MITS on 06-02-2024 to 10-02-2024.",
            "Resource Person for work shop ”Document preparation using Latex” from 08.01.2024 to 09.01.2024 in Chadalawada Ramanamma engineering college",
            "Resource person for the guest lecture on ”VLSI Design:Its history and future” on 15-02-2024 in Srinivasa Institute of Technology and Science",
            "Resource person for the workshop ”LATEX” on 26-12-2023 in Vellore Institute of Technology and Science,Vellore.",
            "Session Chair:\n\t\nInternational Conference on Recent Trends in Embedded,Computing,Control Applications-20252.\nIntelligent System and Machine Learning Conference 2024",
            "International Conference on Recent Trends in Embedded,Computing,Control Applications-20252.",
            "Intelligent System and Machine Learning Conference 2024",
            "Best Paper Award:\n\t\nEnergy Efficient Compact Approximate Multiplier for Error-Resilient Applications-20252.\nDesign and Implementation of 2D FIR filter using with and without broad cast method-2025",
            "Energy Efficient Compact Approximate Multiplier for Error-Resilient Applications-20252.",
            "Design and Implementation of 2D FIR filter using with and without broad cast method-2025",
            "NPTEL:\n\t\nIntroduction to Machine Learning (Topper)\nFuzzy Logic and Neural Network ( Elite)\nIntellutual Property Rights (Elite)\nSystem Design Through Verilog HDL (Elite)\nDigital IC Design (Elite)\nBest Technology and Innovation in Education Award is given by the Artificial Intelligence Medical & Engineering Researchers Society",
            "Introduction to Machine Learning (Topper)",
            "Fuzzy Logic and Neural Network ( Elite)",
            "Intellutual Property Rights (Elite)",
            "System Design Through Verilog HDL (Elite)",
            "Digital IC Design (Elite)",
            "Best Technology and Innovation in Education Award is given by the Artificial Intelligence Medical & Engineering Researchers Society"
          ]
        }
      ]
    },

    "Dr. Rakesh Nath Tiwari": {
      name: "Dr. Rakesh Nath Tiwari",
      designation: "Assoc. Professor",
      email: "drrakeshnatht@mits.ac.in",
      officeAddress: "West Block",
      image: "public/uploads/faculty/1120faf5d8ab8c822818d9c4034e8f1f.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Electronics and Communication Engineering", "Branch": "Electronics and Communication Engineering", "College Name/University": "Uttarakhand Technical University, India", "Year of Passing": "2020"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "Optical and Wireless Communication Technology", "Branch": "Electronics and Communication Engineering", "College Name/University": "Jaypee University of Information Technology, India", "Year of Passing": "2008"},
            {"S.No": "3", "Course": "M.Sc.", "Specialization": "Electronics", "Branch": "Electronics", "College Name/University": "Deen Dayal Upadhyaya Gorakhpur University, India", "Year of Passing": "2004"},
            {"S.No": "4", "Course": "B.Sc.", "Specialization": "Electronics & Physics", "Branch": "Electronics", "College Name/University": "University of Allahabad, India", "Year of Passing": "2002"}
          ]
        },
        {
          title: "Research Areas",
          content: "Communication and Computational Electromagnetic area, Antenna Theory-Analysis and Modelling, 2D/3D Antenna Modelling, MIMO Antennas for 5G and 6G Communications, Implantable and Wearable Antennas, mmWave, THz and Biotechnology Applications, Artificial Intelligence and Machine Learning."
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus Link", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57198002672"},
            {"Identifier": "Vidwan Link", "Link": "https://mits.irins.org/profile/295615"},
            {"Identifier": "Google scholar Link", "Link": "https://scholar.google.com/citations?user=WiphX9oAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "18"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "3", "Details of Research Publication": "Multiband flexible MIMO antenna for NB-IoT/ISM/5 G and wearable applications. DOI: 10.1016/j.rineng.2025.106088", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "1", "Details of Research Publication": "Triple band lateral 4-port flexible MIMO antenna for millimeter wave applications at 24/28/38 GHz. DOI: 10.1016/j.rineng.2025.104678", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "A pocket-integrated miniature, dual-band, and high gain textile MIMO antenna for 5G Sub-6 GHz and WiFi wearable applications. DOI:  10.1038/s41598-025-86605-8", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "5", "Details of Research Publication": "Design and implementation of high isolation textile MIMO antenna for wearable applications. DOI: 10.1002/dac.70010", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "1", "Details of Research Publication": "MIMO antenna design structure using metamaterials, DOI: 10.1007/978-981-13-0261-9_52-1).", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "CSRR based decoupled dual port MIMO antenna for 5G applications DOI: 10.1109/IC3ECSBHI63591.2025.10991042", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "1", "Details of Research Publication": "A low-profile dual-band millimeter wave patch antenna for high-speed wearable and biomedical applications. DOI: 10.1016/j.rineng.2024.103212", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "An improved gain antenna array for telehealth monitoring on the internet-of-things platform. DOI: 10.1109/JIOT.2024.3476686", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "A compact wearable textile antenna for NB-IoT and ISM band patient tracking applications. DOI:  10.3390/s24155077", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "10", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "1", "Details of Research Publication": "Quad band 1×4 linear MIMO antenna for millimeter wave, wearable and biomedical telemetry applications DOI:  10.3390/s24144427", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "11", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "3", "Details of Research Publication": "On body and off body communication using a compact wideband and high gain wearable textile antenna. DOI:  10.1038/s41598-024-64932-6", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "12", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "1", "Details of Research Publication": "A flexible dual-band 4 × 4 MIMO antenna for 5G mm-wave 28/38 GHz wearable applications.DOI:  10.1038/s41598-024-65023-2", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "13", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "1", "Details of Research Publication": "Design of dual-band 4-port flexible MIMO antenna for mm-wave technologies and wearable electronics DOI:  10.1109/ACCESS.2024.3412712", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "14", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Circumferential slots based decoupled wideband MIMO antenna for 5G and sub-6 GHz applications. DOI:  10.1088/1402-4896/ad43c9", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "15", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Dual-band MIMO antenna data telemetry for dual-chamber leadless cardiac pacing on internet of things environment. DOI: 10.1109/JIOT.2023.3321903", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "16", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "1", "Details of Research Publication": "Triple-band gap coupled 4 × 4 MIMO antenna in mm-wave for high data rate and IoT applications. DOI: 10.1007/978-981-99-8646-0_39", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "17", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "1", "Details of Research Publication": "Compact dual band 4-port MIMO antenna for 5G-sub 6 GHz/N38/N41/N90 and WLAN frequency bands. DOI: 10.1016/j.aeue.2023.154919", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "18", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "1", "Details of Research Publication": "Design and validation of loop-based ultraminiature low-profile ultrawideband capsule antenna inside wistar rat DOI: 10.1109/TAP.2023.3301952", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "19", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "1", "Details of Research Publication": "Semi-flexible diversified circularly polarized millimeter-wave MIMO antenna for wearable biotechnologies DOI: 10.1109/TAP.2023.3255507", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "20", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "2", "Details of Research Publication": "High isolation dual port MIMO antenna for vehicle-to-vehicle communication DOI: 10.1109/CIEES58940.2023.10378779", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "21", "Publication Affiliation": "MITS", "Academic Year": "2022", "Author Position": "2", "Details of Research Publication": "MIMO antennas: Design approaches, techniques and applications DOI: 10.3390/s22207813", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "22", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "2", "Details of Research Publication": "Dual-band trident shaped MIMO antenna with novel ground plane for 5G applications. DOI: 10.1016/j.aeue.2022.154364", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "23", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "1", "Details of Research Publication": "High isolation 4-port UWB MIMO antenna with novel decoupling structure for high speed and 5G communication DOI: 10.1109/ICEAA49419.2022.9900029", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "24", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "2", "Details of Research Publication": "Trident-shaped dual band monopole antenna with defected ground plane for 5G applications DOI: 10.1109/WAMS54719.2022.9944980    Scopus    Conf. Proceeding    None", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "25", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "1", "Details of Research Publication": "Swastika shaped slot embedded two port dual frequency band MIMO antenna for wireless applications. DOI: 10.1007/s10470-021-01923-x    SCI    Article    Q3", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "26", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "1", "Details of Research Publication": "Compact circularly polarized MIMO printed antenna with novel ground structure for wideband applications DOI: 10.1002/mmce.22737", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "27", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "1", "Details of Research Publication": "Dual band 4-port MIMO antenna for bluetooth/5G applications DOI: 10.1109/APS/URSI47566.2021.9703806", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "28", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "1", "Details of Research Publication": "UWB MIMO antenna with decoupling strip for 5 G applications, DOI: 10.1109/ACES53325.2021.00184", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "29", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "1", "Details of Research Publication": "A coalesced kite shaped monopole antenna for UWB technology,” DOI: 10.1007/s11277-020-07516-7", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "30", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "1", "Details of Research Publication": "A low profile dual band MIMO antenna for LTE/Bluetooth/Wi-Fi/WLAN applications.  DOI: 10.1080/09205071.2020.1716859", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "31", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "1", "Details of Research Publication": "Compact printed antenna designs: Need for UWB communications. DOI: 10.1201/9780367420451-6).", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "32", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "A compact UWB MIMO antenna with neutralization line for WLAN/ISM/mobile applications. DOI: 10.1002/mmce.21907", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "33", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "Neutralization technique based two and four port high isolation MIMO antennas for UWB communication DOI: 10.1016/j.aeue.2019.152828", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "34", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "A half cut design of low profile UWB planar antenna for DCS/PCS/WLAN applications,  DOI: 10.1002/mmce.21817", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "35", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "A modified microstrip line fed compact UWB antenna for WiMAX/ISM/WLAN and wireless communications.  DOI: 10.1016/j.aeue.2019.03.008", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "36", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "Bandwidth enhancement using modified L-probe fed slotted patch antenna for WLAN and UMTS applications.  DOI: 10.1017/S175907871800154X", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "37", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "2", "Details of Research Publication": "Compact circularly polarized printed antenna with defected ground plane for multiband applications. DOI: 10.1109/PEEIC47157.2019.8976632", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "38", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "1", "Details of Research Publication": "UWB MIMO antenna with decoupling strip for 5 G applications, DOI: 10.1109/ACES53325.2021.00184", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "39", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "Wideband monopole patch antenna with stepped ground plane for WLAN/WiMAX applications. DOI: 10.1007/978-981-13-3804-5_19", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "40", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "1", "Details of Research Publication": "Asymmetric U-shaped printed monopole antenna embedded with T-shaped strip for bluetooth, WLAN/WiMAX applications DOI: 10.1007/s11276-018-1781-5", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "41", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "1", "Details of Research Publication": "Small-size scarecrow-shaped CPW and microstrip-line-fed UWB antennas, DOI: 10.1007/s10825-018-1182-0", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "42", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "1", "Details of Research Publication": "Butter fly shape compact microstrip antenna for wideband applications. DOI: 10.2528/PIERL17042703", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "43", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "1", "Details of Research Publication": "Dual U-slot loaded patch antenna with a modified L-probe feeding,” DOI: 10.1590/2179-10742017v16i3867", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "44", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "2", "Details of Research Publication": "A filter bank architecture based on wavelet transform for ECG signal denoising. DOI: 10.1109/ISPCC.2017.8269677", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "45", "Publication Affiliation": "Others", "Academic Year": "2016", "Author Position": "1", "Details of Research Publication": "Design of microstrip antenna with modified feeding technique for S-band communication system. DOI: 10.1109/SYSMART.2016.7894518", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "Others", "Academic Year": "2024", "Application ID": "202311004785", "Title of the Patent": "A loop-based ultraminiature low-profile ultrawideband capsule antenna device", "Status": "Granted"},
            {"S.No": "2", "Affiliation": "Others", "Academic Year": "2024", "Application ID": "202023107459.6", "Title of the Patent": "An enhanced gain dual-band antenna array device for implantable biomedical applications", "Status": "Granted"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Received Best Researcher Award (2023-2024), Madanapalle Institute of Technology & Science, Andhra Pradesh, India.",
            "Best research paper award 2020, AEU-International Journal of Electronics and Communications, (Elsevier, Germany).",
            "Associate Editor (Wireless Personal Communications An International Journal, Springer)",
            "Editorial Board Member (Scientific Reports, Nature)",
            "GOLD MEDALIST - during M.Tech."
          ]
        }
      ]
    },

    "Dr. R. Ravindraiah": {
        "name": "Dr. R. Ravindraiah",
        "email": "drravindraiahr@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. R. Ravindraiah.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Bio Medical Image Processing & Embedded System",
                            "Branch": "ECE",
                            "College Name/University": "JNTUA, Anantapuramu",
                            "Year of Passing": "2021"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Digital Electronics & Communication Systems",
                            "Branch": "ECE",
                            "College Name/University": "Annamacharya Institute of Technology & Science, JNTUA",
                            "Year of Passing": "2011"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "ECE",
                            "Branch": "ECE",
                            "College Name/University": "G.Pulla Reddy Engineering College, SK University",
                            "Year of Passing": "2008"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Bio-Medical Image Processing, VLSI & Embedded Systems"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=37011647300",
                        "Vidwan Link: https://vidwan.inflibnet.ac.in/profile/223479",
                        "Google scholar Link: https://scholar.google.co.in/citations?user=TrBBNhYAAAAJ&hl=en",
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
                            "Details of Research Publication": "MobileNet V2: Deep Learning Approach for Diabetic Retinal Image Classification. In: Raju, K.S., Senkerik, R., Kumar, T.K., Sellathurai, M., Naresh Kumar, V. (eds) Intelligent Computing and Communication. ICICC 2024. Lecture Notes in Networks and Systems, vol 1240. Springer, Singapore. https://doi.org/10.1007/978-981-96-1264-2_1",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Assessment of mechanical and tribological behavior of Mg-4Zn-1RE-0.7Zr alloy: Novel mixture of Si3N4/TiC/MoS2 utilizing casting technique&rdquo; Composites and Advanced Materials. Volume 33: 1&ndash;15, August 2024;33. Sage Publications Ltd; doi:10.1177/26349833241279311",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhanced Diabetic Retinopathy Classification Using Inception Net V3: A Deep Learning Approach&rdquo; Convergence of Internet of Medical Things (IoMT) and Generative AI, IGI Global Scientific Publishing, DOI: 10.4018/979-8-3693-6180-1.ch011, pp 267 &ndash; 290",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Deep Learning Classification of Diabetic Retinopathy Using ResNet-101 Convolutional Neural Networks&rdquo; Convergence of Internet of Medical Things (IoMT) and Generative AI, IGI Global Scientific Publishing, DOI: 10.4018/979-8-3693-6180-1.ch017, pp 417 &ndash; 438",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Enhancing IoT Data Quality Validation in Medical Field through Big Data&rdquo; Internet of Things and Big Data Analytics for a Green Environment, Chapter 2, 1st Edition, pp 23 &ndash; 39, Oct 2024, Chapman and Hall/CRC, Taylor & Francis group, eISBN: 9781032656830 doi: 10.1201/9781032656830",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Clinical Application of Neural Network for Cancer Detection Application&rdquo;. EAI Endorsed Trans Perv Health Tech, Vol 10, pp 1 &ndash; 6, March 2024; H index 13, ISSN: 24117145, https://doi.org/10.4108/eetpht.10.545410",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "4",
                            "Details of Research Publication": "The future of Industry 4.0: Private 5G Networks&rdquo; Advanced Signal Processing for Industry 4.0, IOP Publishing, Ch. 3 (1-25), June 2023, doi: 10.1088/978-0-7503-5247-5ch3",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "An Instinctive application of Spatially weighted Possibilistic Clustering Methods for the Detection of Lesions in Diabetic Retinopathy Images in Multi-dimensional Kernel Space&rdquo;, Volume 113 (1), pp 223-240, January 2020, https://doi.org/10.1007/s11277-020-07186-5 , ISSN: 09296212, 1572834X Wireless Personal Communications, Springer Nature, IF:1.671",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "An Instinctive method for Lesion Detection in Diabetic retinopathy images using a novel Spatial Possibilistic C means clustering in Kernel space&rdquo;, International Journal of Recent Technology and Engineering, Volume-8, Issue-2S11, pp 2380-2386, September 2019, ISSN: 2277-3878, DoI: 10.35940/ijrte.B1272.0982S1119",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Evaluation of Conventional methods for the Detection of Lesions in Diabetic Retinopathy Images: A Research&rdquo;, International Journal of Innovative Technology and Exploring Engineering ISSN: 2278-3075, Volume-8, Issue- 9S2, July 2019, pp 52&ndash;57, DOI: 10.35940/ijitee.I1010.0789S219",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Author Position": "1",
                            "Details of Research Publication": "Exudates detection in Diabetic Retinopathy images using Possibilistic C means clustering algorithm with induced Spatial constraint,&rdquo; Advances in Intelligent Systems and Computing, Springer Nature, Singapore, doi.org/10.1007/978-981-10-7868-2_44,pp 455-463",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-16",
                            "Author Position": "1",
                            "Details of Research Publication": "Detection of Exudates in Diabetic Retinopathy Images using Laplacian Kernel induced Spatial FCM Clustering algorithm&rdquo; Indian Journal of Science and Technology, ISSN: 09745645, 09746846, Vol 9 (15), pp 1-6, April 2016, DoI: 10.17485/ijst/2016/v9i15/88171",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011-12",
                            "Author Position": "1",
                            "Details of Research Publication": "Quality Improvement for Analysis of Leukemia Images through Contrast Stretch Methods&rdquo; International Conference on Communication Technology and System Design 2011, Amrita Vishwa Vidyapeetham, Coimbatore, India, ELSEVIER Procedia Engineering 30 (2012) 475 &ndash; 481",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011-12",
                            "Author Position": "1",
                            "Details of Research Publication": "Segmentation of Electron Micrograph Images for Qualitative Analysis of Diabetic Atherosclerosis&rdquo; published in International Journal of Applied Engineering Research, PP.2061-2068, Volume 6, Number 17 (2011), ISSN 0973-4562",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011-12",
                            "Author Position": "1",
                            "Details of Research Publication": "Qualitative Evaluation of Enhancement Methods for Analysis of Acute Leukemia Images,&rdquo; published in International Journal of Applied Engineering Research, PP.2051-2060, Volume 6, Number 17 (2011), ISSN 0973-4562",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011-12",
                            "Author Position": "1",
                            "Details of Research Publication": "Qualitative and Quantitative Analysis of Segmentation of Human Retinal Images&rdquo; International Conference on Computer, Communication and Electrical Technology(ICCCET 2011), archived in IEEE publication and IEEE explorer, National Engineering College, Tirunelveli, Tamilnadu, India, pp 76-80",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010-11",
                            "Author Position": "6",
                            "Details of Research Publication": "Qualitative Analysis of Segmentation Methods in Detection of Atherosclerosis in Diabetic Patients&rdquo; Proceedings of International Conference on Emerging Trends in Robotics & Communication Technologies (INTERACT 2010), Published by IEEE Press and IEEE explorer, Sathyabama University, Chennai. India, pp 263-267",
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
                            "Academic Year": "2017-18",
                            "Funded Project /Event": "Funded Project",
                            "Role": "P.I.",
                            "Title of the Project/Event": "An Optimized Learning methods for the Classification of Diabetic Retinal Imag",
                            "Amount in Rs. /-": "17,000",
                            "Funding Agency": "MITS, Madanapalle Seed Grant"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Funded Project /Event": "Funded Project",
                            "Role": "P.I.",
                            "Title of the Project/Event": "Lesion detection in Diabetic Retinopathy images using Kernal induced Spatial Fuzzy clustering approach",
                            "Amount in Rs. /-": "20,000",
                            "Funding Agency": "MITS, Madanapalle under TEQIP II Seed"
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
                            "Application ID": "202241065882",
                            "Title of the Patent": "Implementation of Surveillance Monitoring Using ESP32 CAM Module",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Application ID": "202241060187",
                            "Title of the Patent": "Tracking and Controlling of Transportation Vehicles",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Application ID": "202241020127",
                            "Title of the Patent": "A Method for Efficient Power Allocation in Multiple Input/Ouput and Small Cell Network Systems",
                            "Status": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Application ID": "202141060537",
                            "Title of the Patent": "IoT based Fish Breeding Identification System employing Image Processing",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "Resource person in &ldquo;Soft Clustering Methods in Image Processing&rdquo; a Five Days Online Faculty Development Program on &ldquo;Contemporary Research Trends in Electronics & Communications, and Computer Science&rdquo; organized by Department of ECE, Visvesvaraya Technological University Center for PG studies, Karnataka, 6th &ndash; 10th July 2020."
                }
            ]
    },

    "Dr. G. Reddy Hemantha": {
        "name": "Dr. G. Reddy Hemantha",
        "email": "drhemanthagr@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Reddy Hemantha(1).JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "VLSI Design",
                            "Branch": "Electronics and Communication Engineering",
                            "College Name/University": "JNTUA, Anantapuramum",
                            "Year of Passing": "2021"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Digital Electronics and Communication Systems",
                            "Branch": "Electronics and Communication Engineering",
                            "College Name/University": "Madanapalle Institute of Technology & Science, JNTUA, Anantapuramum",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "AMIE",
                            "Specialization": "Electronics and Communication Engineering",
                            "Branch": "Electronics and Communication Engineering",
                            "College Name/University": "Institution Of Engineers India, IEI",
                            "Year of Passing": "2008"
                        },
                        {
                            "Course": "DECE",
                            "Specialization": "Electronics and Communication Engineering",
                            "Branch": "Electronics and Communication Engineering",
                            "College Name/University": "State Board of Technical Education and Training, Hyderabad",
                            "Year of Passing": "1993"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "VLSI Design"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=57201877495",
                        "Vidwan Link: https://mits.irins.org/profile/260378",
                        "Google scholar Link: https://scholar.google.com/citations?user=j3EVrbgAAAAJ&hl=en",
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
                            "Author Position": "1",
                            "Details of Research Publication": "Analysis and Detection of Breast Cancer Using Recursive Feature Elimination",
                            "Indexing": "Scopus",
                            "Publication": "Springer Conference Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Interactive Delta Bot with Voice Recognition and Image Processing - A Review",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Characterization and Modeling of Gate-All-Around FET (GAA FET) for Low-Power and High- Performance Applications",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "An Optimized FIR Filter Design for Noise Reduction in Bio-Medical Signal Processing",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Design and Implementation of High Speed Self-Biased DTDC for Flash ADC",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "An Optimized Resource Allocation Model for Cloud Computing Using Ant Colony-based Auction Method",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Switch Controlled State Skipping Based Memory Efficient Test Pattern Generator for BIST Application",
                            "Indexing": "Scopus",
                            "Publication": "IEEE Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "4",
                            "Details of Research Publication": "A Miniature Circular Polarized Fractal based Antenna for Satellite Applications",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "Medication Alarm: A Proficient IoT-Enabled Medication Alarm for Age Old People to the Betterment of their Medication Practice",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "High performance rns-fir filter using prefix accumulation based da arithmetic for Ecg signal classification",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Low latency prefix accumulation driven compound MAC unit for efficient FIR filter implementation",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "4",
                            "Details of Research Publication": "High speed, low area exact speculative carry look ahead adder using MGDI technique",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "FPGA Implementation of Speculative Prefix Accumulation-Driven RNS for High-Performance FIR Filter",
                            "Indexing": "Scopus",
                            "Publication": "Springer Conference Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "DA based systematic approach using speculative addition for high-speed DSP applications",
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
                            "Academic Year": "2024",
                            "Application ID": "422964-001",
                            "Title of the Patent": "IOT BASED WASTE MANAGEMENT BIN",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Application ID": "412328-001",
                            "Title of the Patent": "AI BASED ROBOTIC DELIVERY DEVICE",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Application ID": "202341000087",
                            "Title of the Patent": "DESIGN AND PERFORMANCE OF CHARGE-PLASMA-BASED SCHOTTKY FET CMOS CIRCUIT RING OSCILLATOR FOR HIGH DENSITY",
                            "Status": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "Others",
                            "Academic Year": "2022",
                            "Application ID": "202221012287",
                            "Title of the Patent": "A SMART TRAFFIC MANAGEMENT SYSTEM",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "Others",
                            "Academic Year": "2022",
                            "Application ID": "202221012286",
                            "Title of the Patent": "A SYSTEM FOR TRACKING AND DETECTION COUNTERFEIT IN PHARMACEUTICALS USING BLOCKCHAIN AND A METHOD THEREOF",
                            "Status": "Granted"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Reviewer for peer-reviewed journal and conferences.",
                        "Session Chair for IEEE and International Conferences.",
                        "Advisor for IEEE Sensor Council Hyderabad Section."
                    ]
                }
            ]
    },

    "Dr. Janmoni Borah": {
        "name": "Dr. Janmoni Borah",
        "email": "drjanmonib@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Janmoni Borah.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Wireless Communication",
                            "Branch": "Electronics and Communication Engineering",
                            "College Name/University": "NERIST, Arunachal Pradesh",
                            "Year of Passing": "2021"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Mobile Communication and Computing",
                            "Branch": "Electronics and Communication Engineering",
                            "College Name/University": "NIT Arunachal Pradesh",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Electronics and Communication Engineering",
                            "Branch": "Electronics and Communication Engineering",
                            "College Name/University": "CIT Kokrajhar, Gauhati University",
                            "Year of Passing": "2013"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Optical Device Modelling, 5G and Beyond, Antenna Design"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=57190060964",
                        "Vidwan Link: https://mits.irins.org/profile/273396",
                        "Google scholar Link: https://scholar.google.co.in/citations?user=w0i7mz0AAAAJ",
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
                            "Details of Research Publication": "Numerical Analysis of a Next-Generation SW-CNT/ZnO Hybrid Charge Extraction Design in Lead-Free Cs2TiBr6 Perovskite Photovoltaic Cells Using SCAPS-1D DOI: 10.1007/s11664-025-12442-0",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Device engineering of a new lead free all inorganic CsSnI3/CsSnCl3 based graded perovskite absorber structure for high performance solar cell DOI: 10.1109/JQE.2025.3592472",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Design and Optimization of Cs2AgInBr6/CsSnI3-Based Dual-Absorber Inorganic Perovskite Solar Cell for Enhanced Broadband Absorption DOI: 10.1016/j.micrna.2025.208274",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Performance enhancement of Non-Toxic Cs2AgBiI6 based double perovskite photovoltaic cell via integration of a novel Mono-Walled carbon nanotube (MW-CNT) electron extraction layer DOI: 10.1016/j.mseb.2025.118336",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Investigation of hybrid electron extraction architecture via integration of Mono-Shelled Carbon Nanotubes (MS-CNT) with perovskite oxide BaSnO3 for beyond 38% efficiency in BaZrSe3 photovoltaic cells DOI: 10.1016/j.optcom.2025.131769",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Device Engineering of a Novel Lead-Free Solar Cell Architecture Utilizing Inorganic CsSnCl3 and CsSnI3 Perovskite-Based Dual Absorbers for Sustainable Powering of Wireless Networks DOI: 10.1007/s11664-024-11605-9",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Device optimization of all inorganic CsPbBr3/LNMO based multi-layered perovskite light harvesters for broader capturing of solar spectrum DOI: 10.1016/j.solener.2024.112858",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Improvement of photovoltaic response in perovskite solar cell via all inorganic lead free cubic double La2NiMnO6/Cs3Bi2I9 based graded absorber architecture DOI: 10.1007/s11082-024-07239-0",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Improving Network Efficiency with Antenna and User Selections in a 5G Heterogeneous Cellular Network DOI: 10.3103/S0735272724050042",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "5G cellular network coverage with KUD-based SC deployment DOI: 10.3103/S0735272723100047",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Transmit power allocation for Sub-6GHz/mmWave based 5G cellular network DOI: 10.3103/S0735272723060043",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Device engineering of lead-free FaCsSnI3/Cs2AgBiI6-based dual-absorber perovskite solar cell architecture for powering next-generation wireless networks DOI: 10.1002/dac.5903",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Analytical investigation of CdSe/CdS/ZnSe based single core double-shell nanotextured vertical nanopillar array antenna for broadband photodetection applications DOI: 10.1002/dac.5752",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Optimization of All Inorganic Perovskite Solar Cell with Dual Active Layers for Beyond 29% Efficiency DOI: 10.1016/j.solener.2023.111939",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Transmit Antenna Selection for Achieving Energy Efficiency in Massive MIMO Based 5G Cellular Network DOI: 10.3103/S0735272723020048",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Dynamic Cell Sleeping Mechanism: An Energy-Efficient Approach for Mobile 5G HetCN DOI: 10.1002/dac.5422",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Analysis of Massive MIMO and Small Cells based 5G Cellular Networks: A simulative approach DOI: 10.3103/S0735272722060024",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "6",
                            "Details of Research Publication": "Capacity Maximization in Cell Free Massive MIMO Network with Access Point Selection Method DOI: 10.2174/2210327913666221222145957",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "Optical Modelling of GaAs/GaSb Core-Shell Cone Topped Octagonal Faced Nanopillar Array with Periodic Trapezoidal Textured Cut For High Photon Trapping Efficiency DOI: 10.1007/s10825-022-01898-6",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Miniaturization and Optimization of FR4 based CPW-fed Antenna for Multi-band Applications DOI: 10.3103/S0735272721120049",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Energy-Efficient ICI Mitigation with Dynamic and Location-Based Power Allocation in Mobility-Based 5G HetCN DOI: 10.1007/s11277-020-07930-x",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Dynamic and location-based power allocation mechanism for inter-cell interference mitigation in 5G heterogeneous cellular network DOI: 10.1002/dac.4548",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Dynamic and Energy-efficient ICI Mitigation Techniques for Mobility based 5G HetCN DOI: 10.1049/iet-com.2019.0898",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "ICI effects on user mobility with different FR-schemes in a multi-cell cellular network DOI: 10.1049/iet-com.2019.0397",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of intercell interference on cell boundary users in three-cell and seven-cell HetCN DOI: 10.1002/dac.4257",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "ICI mitigation with Fixed-Number (FN) and Fixed-Region (FRgn) based BS coordination and cooperation in a multi-cell cellular network DOI: 10.1007/978-981-15-7031-5_69",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancement of Throughput for Cellular Data Network by Small cell Deployment DOI: 10.1109/ICRIEECE44171.2018.9009311",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "Small-cell intensities for cellular network affected by cell-edge and hotspot DOI: 10.1002/dac.3788",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "29",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect on energy efficiency with small cell deployment in heterogeneous cellular networks DOI: 10.1002/itl2.97",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "30",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-17",
                            "Author Position": "1",
                            "Details of Research Publication": "Traditional Macro-tower to Heterogeneous Cellular Networks: A Survey DOI: 10.14257/ijast.2017.109.02",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "31",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-17",
                            "Author Position": "1",
                            "Details of Research Publication": "Miniaturization of a CPW-fed Dual-Band Antenna for GSM 1800/1900 and WLAN 5 GHz Applications DOI: 10.4313/TEEM.2017.18.2.119",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "32",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-17",
                            "Author Position": "1",
                            "Details of Research Publication": "Compact CPW-fed Tri-band Antenna with a Defected Ground Structure for GSM, WLAN and WiMAX Applications DOI: 10.3103/S0735272716070050",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "33",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "2",
                            "Details of Research Publication": "Design a compact tri-band band pass filter using asymmetric SIRs and DGS DOI: 10.1109/EPETSG.2015.7510169",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "34",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-16",
                            "Author Position": "2",
                            "Details of Research Publication": "Design of Compact Bandpass Filter for WiMAX and UWB Application using Asymmetric SIRs and DGS DOI: 10.3103/S0735272716060066",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "35",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014-15",
                            "Author Position": "1",
                            "Details of Research Publication": "Effects of Modified Ground Structure on a CPW-fed patch Antenna DOI: 10.14257/ijfgcn.2015.8.2.15",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "36",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014-15",
                            "Author Position": "4",
                            "Details of Research Publication": "Power Saving Strategies in Green Cloud Computing Systems DOI: 10.14257/ijgdc.2015.8.1.28",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "EDITORIAL BORAD MEMBER: Scientific Reports Journal",
                        "Research Incentives: MITS Andhra Pradesh: AY 2021-2022, AY 2022-2023, AY 2023-2024",
                        "Technical Committee Member - International Journal of Advanced Engineering and Management.",
                        "Editorial Board Member - Wireless Communication Technology (WCT) journal.",
                        "NPTEL Mentor Certificates: &ldquo;Research Methodology&rdquo; held during July-Dec 2023 (TOP PERFORMING MENTOR)",
                        "&ldquo;The Joy of Computing using Python&rdquo; held during Jan-Apr 2022.",
                        "Session Chair for &ldquo;Second International Conference on Computer Science, Engineering and Applications (ICCSEA&rsquo;22)&rdquo; organized GIET University, Gunupur, Odisha, held on September 2022.",
                        "Reviewer of reputed journals - IEEE Access, Transactions on Emerging Telecommunications Technologies, IET Communications, Telecommunication Systems, Wireless Personal Communications, Renewable and Sustainable Energy Reviews, IET Electronics Letters, and Cogent Engineering and etc."
                    ]
                }
            ]
    },

    "Dr. S K Nurul Islam": {
        "name": "Dr. S K Nurul Islam",
        "designation": "Asst. Professor",
        "email": "drnurulislamsk@mits.ac.in",
        "officeAddress": "West Block",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Nurul Islam.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Microwave Engineering",
                            "Branch": "Electronics and Telecommunication Engineering",
                            "College Name/University": "Indian Institute of Engineering Science and Technology (IIEST), Shibpur",
                            "Year of Passing": "2021"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Electronics & Communication Engineering",
                            "Branch": "Electronics & Communication Engineering",
                            "College Name/University": "West Bengal University of Technology, Kolkata",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Electronics & Communication Engineering",
                            "Branch": "Electronics & Communication Engineering",
                            "College Name/University": "West Bengal University of Technology, Kolkata",
                            "Year of Passing": "2011"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "MIMO Antenna and FSS"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=57191624895",
                        "Vidwan Link: https://vidwan.inflibnet.ac.in/profile/524305",
                        "Google scholar Link: https://scholar.google.com/citations?view_op=list_works&hl=id&user=b03ZKhEAAAAJ",
                        "h-Index (As per Scopus Data) : 8"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Dual\u2010band CPW fed MIMO antenna with polarization diversity and improved gain. International Journal of RF and Microwave Computer\u2010Aided Engineering, 30(4), p.e22128.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Isosceles Triangular Resonator Based Compact Triple Band Quad Element Multi Terminal Antenna. Radioengineering, 29(1)",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "Design of a compact triple band antenna with independent frequency tuning for MIMO applications. International Journal of RF and Microwave Computer\u2010Aided Engineering, 29(3), p.e21620",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "Design of a compact quad\u2010band antenna with independent frequency tuning. Electronics Letters, 54(15), pp.920-922.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "2",
                            "Details of Research Publication": "A wideband compact antenna with quad\u2010circular polarized bands in its operating regions. International Journal of RF and Microwave Computer\u2010Aided Engineering, 30(11), p.e22405.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "3",
                            "Details of Research Publication": "Design and analysis of a compact penta-band polarization-insensitive bandstop frequency selective surface. IEEE Antennas and Wireless Propagation Letters, 19(1), pp.59-63",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "3",
                            "Details of Research Publication": "Miniaturisation of branch line couplers with a compact transmission line topology based on coupled line section. IET Microwaves, Antennas & Propagation, 14(5), pp.448-455",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "2",
                            "Details of Research Publication": "Design of filtering directional coupler with improved performance. International Journal of RF and Microwave Computer\u2010Aided Engineering, 30(7), p.e22224",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "3",
                            "Details of Research Publication": "Miniaturization and Harmonic Suppression of Power Divider using Coupled Line Section for High Power Applications. Radioengineering, 29(2).",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "3",
                            "Details of Research Publication": "Composite dual transmission lines and ITS application to miniaturization of Gysel power divider. Progress In Electromagnetics Research Letters, 90, pp.91-97.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "2",
                            "Details of Research Publication": "Compact Wilkinson power divider with higher order harmonics suppression for LTE application. Progress In Electromagnetics Research Letters, 84, pp.23-29.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "2",
                            "Details of Research Publication": "Design of compact Wilkinson power divider and branch line coupler using hairpin based line. AEU-International Journal of Electronics and Communications, 110, p.152825.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Design of miniaturized Wilkinson power divider with higher order harmonic suppression for GSM application. Progress In Electromagnetics Research C, 85, pp.25-34.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Design of miniaturized 10 dB wideband branch line coupler using dual feed and T-shape transmission lines. Radioengineering, 27(1), pp.207-213.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "3",
                            "Details of Research Publication": "Broadband metamaterial absorber on a single-layer ultrathin substrate. Waves in Random and Complex Media, 29(1), pp.153-161.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "3",
                            "Details of Research Publication": "A co-polarized microwave absorber with dual mode resonance based on dual split ring geometry for wi-max and WLAN applications. Progress In Electromagnetics Research M, 86, pp.145-152.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "2",
                            "Details of Research Publication": "Broadband perfect metamaterial absorber on thin substrate for X-band and Ku-band applications. Progress In Electromagnetics Research C, 73, pp.9-16.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "3",
                            "Details of Research Publication": "Ultra\u2010thin miniaturized metamaterial perfect absorber for x\u2010band application. Microwave and Optical Technology Letters, 58(10), pp.2367-2370.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "Wideband circularly polarized CPW fed antenna for bluetooth applications. In 2018 3rd International Conference on Microwave and Photonics (ICMAP) (pp. 1-2). IEEE",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "A compact dual-band antenna using triangular split ring resonator for bluetooth/WiMax/LTE applications. In 2018 IEEE Indian Conference on Antennas and Propogation (InCAP) (pp. 1-3). IEEE.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "A Dual-band MIMO Antenna for Bluetooth/WiMax/LTE Applications. In 2018 IEEE MTT-S International Microwave and RF Conference (IMaRC) (pp. 1-4). IEEE",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "1",
                            "Details of Research Publication": "Design and gain enhancement of a CPW-Fed dual band slot antenna using a metamaterial inspired superstrate. In 2016 International Conference on Advances in Computing, Communications and Informatics (ICACCI) (pp. 2539-2541). IEEE",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "1",
                            "Details of Research Publication": "Dual-polarized dual-band CPW-fed slot antenna for WLAN applications. In 2016 Asia-Pacific Microwave Conference (APMC) (pp. 1-3). IEEE",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "2",
                            "Details of Research Publication": "A novel AMC backed wide band wearable antenna. In 2019 IEEE Region 10 Symposium (TENSYMP) (pp. 628-630). IEEE.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "A semi circular shaped UWB body area network antenna with C-band and WLAN band rejection. In 2018 Emerging Trends in Electronic Devices and Computational Techniques (EDCT) (pp. 1-3). IEEE.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Harmonic suppressed wilkinson power divider with filtering characteristic for GSM application. In 2018 IEEE MTT-S International Microwave and RF Conference (IMaRC) (pp. 1-3). IEEE.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Design of wideband Wilkinson power divider with improved performances. In 2018 IEEE Indian Conference on Antennas and Propogation (InCAP) (pp. 1-4). IEEE.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "2",
                            "Details of Research Publication": "Miniaturization of wideband loose coupled (10db) blc using dual transmission lines. In 2017 IEEE MTT-S International Microwave and RF Conference (IMaRC) (pp. 1-5). IEEE.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "29",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "2",
                            "Details of Research Publication": "Miniaturization of dual-band Wilkinson power divider using dual transmission line. In 2017 IEEE Applied Electromagnetics Conference (AEMC) (pp. 1-2). IEEE.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "30",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "2",
                            "Details of Research Publication": "Design of compact Wilkinson power divider with harmonic suppression for GSM application. In 2017 IEEE Applied Electromagnetics Conference (AEMC) (pp. 1-2). IEEE.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "31",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "3",
                            "Details of Research Publication": "A dual band wearable metamaterial absorber with reduced cross-polarized reflection. In 2018 3rd International Conference on Microwave and Photonics (ICMAP) (pp. 1-2). IEEE.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "32",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "3",
                            "Details of Research Publication": "Design of a polarization insensitive absorptive frequency selective surface for radome applications. In 2018 IEEE Indian Conference on Antennas and Propogation (InCAP) (pp. 1-3). IEEE.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "33",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "3",
                            "Details of Research Publication": "A polarization insensitive metamaterial inspired absorber with a transparent window using complementary structure for EMI/EMC applications. In 2017 IEEE Calcutta Conference (CALCON) (pp. 193-198). IEEE.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "34",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "4",
                            "Details of Research Publication": "A dual band metamaterial inspired absorber for WLAN/Wi-MAX applications using a novel I-shaped unit cell structure. In 2016 Asia-Pacific Microwave Conference (APMC) (pp. 1-3). IEEE.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                }
            ]
    },

    "Dr. C. Kumar": {
      name: "Dr. C. Kumar",
      designation: "Asst. Professor",
      email: "drkumarc@mits.ac.in",
      officeAddress: "West Block",
      image: "public/uploads/faculty/cf383c1cdc0f26fc0b61ec41145a7dfb.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Image Processing", "Branch": "Information and Communication Engineering", "College Name/University": "Anna University", "Year of Passing": "2022"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "Applied Electronics", "Branch": "Applied Electronics", "College Name/University": "Thanthai Periyar Govt. Institute of Technology, Vellore", "Year of Passing": "2008"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "Electronics and Communication Engineering", "Branch": "Electronics and Communication Engineering", "College Name/University": "Priyadarshini Engineering College, Anna University", "Year of Passing": "2005"}
          ]
        },
        {
          title: "Research Areas",
          content: "Medical Imagining Analysis"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus Link", "Link": "http://www.scopus.com/authid/detail.url?authorId=59082158200"},
            {"Identifier": "Vidwan Link", "Link": "https://vidwan.inflibnet.ac.in/profile/280451"},
            {"Identifier": "Google scholar Link", "Link": "https://scholar.google.com/citations?user=uoiwoGAAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "1"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Performance Analysis of Routing Data Packets Energy Efficient in WSN Communication using LEACH Algorithm https://doi.org/10.1109/ICSSAS66150.2025.11081081", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Enhancing Radiologist’S Performance In Breast Cancer Screening Using PSO Algorithm With CNN Classifier https://doi.org/10.1109/CONIT61985.2024.10626732", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "2", "Details of Research Publication": "Low power design techniques for IoT devices https://doi.org/10.1109/ICONSTEM60960.2024.10568684", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "4", "Details of Research Publication": "Enhancing efficiency in electrical distribution systems: A novel approach via modified genetic optimization algorithm for loss reduction in optimal network distribution https://doi.org/10.3233/JIFS-233917", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Ultrasound medical image denoising using threshold based wavelet transformation method https://doi.org/10.1166/jmihi.2020.3195", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Research Projects & Events",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024-25", "Type": "Funded Project", "Role": "Coordinator", "Title": "NANO-CRHES: Nanotechnology for Integrated Computing, Robotics, Healthcare, and Environmental Sustainability", "Amount": "4,06,541 (4620$)", "Agency": "IEEE Nanotechnology Council, USA"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2024-25", "Type": "Event Support Fund", "Role": "MITS IEEE Counsellor", "Title": "Ashv 2K25    35,198 (400$)", "Amount": "35,198 (400$)", "Agency": "IEEE SPAX"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2024-25", "Type": "Event Support Fund", "Role": "Co-Coordinator", "Title": "Neuromorphic Computing and Logic in Memory Computing using Non-Volatile Memory Device", "Amount": "1,91,215 (2173$)", "Agency": "IEEE CAS"},
            {"S.No": "4", "Affiliation": "MITS", "Academic Year": "2024-25", "Type": "Event Support Fund", "Role": "Coordinator", "Title": "Multiple Event at ECE", "Amount": "43,998 (500$)", "Agency": "IEEE Communication Society, USA"},
            {"S.No": "5", "Affiliation": "MITS", "Academic Year": "2023-24", "Type": "Event Support Fund", "Role": "Coordinator", "Title": "Engineering Research Application of Artificial Intelligence (AI), Machine Learning (ML), and Internet of Things (IoT) using MATLAB", "Amount": "30,000", "Agency": "IEEE Communication Society, Hyderabad Section"},
            {"S.No": "6", "Affiliation": "MITS", "Academic Year": "2022-23", "Type": "Event Support Fund", "Role": "Coordinator", "Title": "Understanding of Routing and Switching Concepts in Data Communication and Networking Using Cisco Packet Tracer", "Amount": "20,000", "Agency": "IEEE Communication Society, Hyderabad Section"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2022-23", "Application ID": "202341000087", "Title of the Patent": "DESIGN AND PERFORMANCE OF CHARGE-PLASMA-BASED SCHOTTKY-FET CMOS CIRCUIT RING OSCILLATOR FOR HIGH DEN", "Status": "Published"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Cisco Trained Instructor for CCNA (Cisco Certified Network Associate)",
            "Chairman, IEEE Communication Society, Hyderabad Section (2023-2025)",
            "Received “2024 Instructor Excellence Advanced Level Award” from Cisco Networking Academy.",
            "Certified Trainer for “QNX Based Real Time Operating Systems” by QNX and Pi Square Technologies."
          ]
        }
      ]
    },

    "Dr. Smriti Baruah": {
        "name": "Dr. Smriti Baruah",
        "email": "smritib@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Smriti Baruah.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Optical Communication",
                            "Branch": "Electronics and Communication Engineering",
                            "College Name/University": "NERIST, Arunachal Pradesh",
                            "Year of Passing": "2022"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Electronics Design and Manufacturing",
                            "Branch": "Electronics Design and Manufacturing",
                            "College Name/University": "NIT, Arunachal Pradesh",
                            "Year of Passing": "2017"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Electronics and Communication Engineering",
                            "Branch": "Electronics and Communication Engineering",
                            "College Name/University": "NIT, Arunachal Pradesh",
                            "Year of Passing": "2015"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Semiconductor Optical Device Modelling, Optical & Wireless Communication"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: http://www.scopus.com/authid/detail.url?authorId=57215772386",
                        "Vidwan Link: https://mits.irins.org/profile/273398",
                        "Google scholar Link: http://scholar.google.co.in/citations?user=zOIlT4gAAAAJ",
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
                            "Details of Research Publication": "Numerical Analysis of a Next-Generation SW-CNT/ZnO Hybrid Charge Extraction Design in Lead-Free Cs2TiBr6 Perovskite Photovoltaic Cells Using SCAPS-1D DOI: 10.1007/s11664-025-12442-0",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Device engineering of a new lead free all inorganic CsSnI3/CsSnCl3 based graded perovskite absorber structure for high performance solar cell DOI: 10.1109/JQE.2025.3592472",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Design and Optimization of Cs2AgInBr6/CsSnI3-Based Dual-Absorber Inorganic Perovskite Solar Cell for Enhanced Broadband Absorption DOI: 10.1016/j.micrna.2025.208274",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Performance enhancement of Non-Toxic Cs2AgBiI6 based double perovskite photovoltaic cell via integration of a novel Mono-Walled carbon nanotube (MW-CNT) electron extraction layer DOI: 10.1016/j.mseb.2025.118336",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Investigation of hybrid electron extraction architecture via integration of Mono-Shelled Carbon Nanotubes (MS-CNT) with perovskite oxide BaSnO3 for beyond 38% efficiency in BaZrSe3 photovoltaic cells DOI: 10.1016/j.optcom.2025.131769",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Device Engineering of a Novel Lead-Free Solar Cell Architecture Utilizing Inorganic CsSnCl3 and CsSnI3 Perovskite-Based Dual Absorbers for Sustainable Powering of Wireless Networks DOI: 10.1007/s11664-024-11605-9",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Device optimization of all inorganic CsPbBr3/LNMO based multi-layered perovskite light harvesters for broader capturing of solar spectrum DOI: 10.1016/j.solener.2024.112858",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Improvement of photovoltaic response in perovskite solar cell via all inorganic lead free cubic double La2NiMnO6/Cs3Bi2I9 based graded absorber architecture DOI: 10.1007/s11082-024-07239-0",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Improving Network Efficiency with Antenna and User Selections in a 5G Heterogeneous Cellular Network DOI: 10.3103/S0735272724050042",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "5G cellular network coverage with KUD-based SC deployment DOI: 10.3103/S0735272723100047",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Transmit power allocation for Sub-6GHz/mmWave based 5G cellular network DOI: 10.3103/S0735272723060043",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Device engineering of lead-free FaCsSnI3/Cs2AgBiI6-based dual-absorber perovskite solar cell architecture for powering next-generation wireless networks DOI: 10.1002/dac.5903",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Analytical investigation of CdSe/CdS/ZnSe based single core double-shell nanotextured vertical nanopillar array antenna for broadband photodetection applications DOI: 10.1002/dac.5752",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "8",
                            "Details of Research Publication": "Hydrothermal Synthesis, Phase Analysis, and Magneto-Electronic Characterizations of Lead-Free Ferroelectric BM2+ (Zn, Ca, Mg) T&ndash;BFO System DOI: 10.1021/acsomega.3c08072",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Optimization of All Inorganic Perovskite Solar Cell with Dual Active Layers for Beyond 29% Efficiency DOI: 10.1016/j.solener.2023.111939",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Transmit Antenna Selection for Achieving Energy Efficiency in Massive MIMO Based 5G Cellular Network DOI: 10.3103/S0735272723020048",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "2",
                            "Details of Research Publication": "Analysis of Massive MIMO and Small Cells based 5G Cellular Networks: A simulative approach DOI: 10.3103/S0735272722060024",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Optical Modelling of GaAs/GaSb Core-Shell Cone Topped Octagonal Faced Nanopillar Array with Periodic Trapezoidal Textured Cut For High Photon Trapping Efficiency DOI: 10.1007/s10825-022-01898-6",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Miniaturization and Optimization of FR4 based CPW-fed Antenna for Multi-band Applications DOI: 10.3103/S0735272721120049",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "GaAs periodic half octagonal cut based nano texturized hexagonal shaped nanopillar array structure for highly responsive photodetector&rsquo;s performance DOI: 10.1007/s11082-021-02951-7",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Optical modeling of high-performance GaAs based photodetector with periodic right triangular texturization on nanopillar arrays structure DOI: 10.1088/1361-6641/abe05a",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Investigation and optimization of light trapping through hexagonal-shaped nanopillar (NP) array of indium gallium arsenide material based photodetector DOI: 10.1007/s11082-020-02496-1",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "InGaAs based square-shaped nanopillar array for high photodetector performance DOI: 10.1007/978-981-15-7031-5_70",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "High performance wide response GaAs based photo detector with nano texture on nanopillar arrays structure DOI: 10.1007/s00542-020-04804-x",
                            "Indexing": "SCI",
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
                            "Academic Year": "2022-23",
                            "Funded Project /Event": "Event",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "One Day National Level Technical Symposium &ldquo;ECLECTICA 2K23&rdquo;",
                            "Amount in Rs. /-": "-",
                            "Funding Agency": "MITS, Andhra Pradesh"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Funded Project /Event": "Event",
                            "Role": "Organizing Committee",
                            "Title of the Project/Event": "Workshop &ldquo;The Art of Patenting and Drafting&rdquo;",
                            "Amount in Rs. /-": "-",
                            "Funding Agency": "MITS, Andhra Pradesh"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "EDITORIAL BORAD MEMBER: Scientific Reports Journal",
                        "Research Incentives: MITS Andhra Pradesh: AY 2021-2022, AY 2022-2023, AY 2023"
                    ]
                }
            ]
    },

    "Dr. Rahul Mondal": {
      name: "Dr. Rahul Mondal",
      designation: "Asst. Professor",
      email: "drrahulm@mits.ac.in",
      officeAddress: "West Block",
      image: "public/uploads/faculty/rahul.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Post-Doctoral Fellow", "Specialization": "Sub-THz 6G Test-Bed & RIS", "Branch": "ECE", "College Name/University": "IIT Madras & IIT Patna", "Year of Passing": "2023-2025"},
            {"S.No": "2", "Course": "Ph.D.", "Specialization": "RF & Microwave", "Branch": "ECE", "College Name/University": "University of Kalyani", "Year of Passing": "2022"},
            {"S.No": "3", "Course": "M.Tech.", "Specialization": "ECE", "Branch": "ECE", "College Name/University": "University of Kalyani", "Year of Passing": "2017"},
            {"S.No": "4", "Course": "B.Tech.", "Specialization": "EIE", "Branch": "EIE", "College Name/University": "University of Kalyani", "Year of Passing": "2015"}
          ]
        },
        {
          title: "Research Areas",
          content: "RF & Microwave"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus Link", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57208734892"},
            {"Identifier": "Vidwan Link", "Link": "https://vidwan.inflibnet.ac.in/profile/655121/NjU1MTIx"},
            {"Identifier": "Google scholar Link", "Link": "https://scholar.google.com/citations?user=RZr-RnoAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "4"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "Others", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "\"Sub-Terahertz 2D and 3D Beam Scanning Using Graphene-Based Binary RIS for 6G Applications,\" DOI: 10.1109/TPS.2025.3586455.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "2", "Publication Affiliation": "Others", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "\"Sub-THz Graphene-Based Reconfigurable Intelligent Surface Assisted 2D Beam Steering for 6G Applications,\" 2025 Asia-Pacific Microwave Conference (APMC), Jeju, Korea, Republic of, 2025, pp. 1-3, doi: 10.1109/APMC65046.2025.11379354.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2025", "Author Position": "3", "Details of Research Publication": "Microwave assisted non-invasive detection of adulteration in milk,” Microwave Journal, vol. 68, no. 10, Oct. 2025.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2025", "Author Position": "1", "Details of Research Publication": "\"1-Bit Reconfigurable Intelligent Surface for 6G Beam Scanning Applications,\" 2025 IEEE International Symposium on Antennas and Propagation and North American Radio Science Meeting (AP-S/CNC-USNC-URSI), Ottawa, ON, Canada, 2025, pp. 1981-1984, doi: 10.1109/AP-S/CNC-USNC-URSI55537.2025.11266230.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "\"Single Mode OAM Beam Generation Using Reflective Metasurface at 140 GHz,\" 2025 IEEE International Symposium on Antennas and Propagation and North American Radio Science Meeting (AP-S/CNC-USNC-URSI), Ottawa, ON, Canada, 2025, pp. 2858-2861, doi: 10.1109/AP-S/CNC-USNC-URSI55537.2025.11266337", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Detection of adulterants in rice grains by the characteristics of reflection coefficient of the incident microwave signal”,  DOI: 10.1080/09205071.2024.2354715", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "4", "Details of Research Publication": "Design of dual-layer curved cylindrical FSS with sharp roll-off and flat bandpass property, Microwave J., vol. 67, no. 4, Apr. 2024.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Determination of percentage of adulterants in wheat grains by using microwave signal,” DOI: 10.1109/C3IT60531.2024.10829479.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "1", "Details of Research Publication": "Wideband to narrowband/dual band characteristics of monopole antenna using frequency selective surfaces”,  DOI : 10.1002/dac.5430", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "3", "Details of Research Publication": "Printed monopole antenna with tree-like radiating patch and flower vase-shaped modified ground plane useful for wideband applications, J. Electromagn. Eng. Sci., vol. 22, no. 3, pp. 256–264, 2022.", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "3", "Details of Research Publication": "Double layer frequency selective surface with broad bandwidth, high selectivity, and good angular stability, Rev. Roum. Sci. Techn.–Électrotechn. et Énerg., vol. 67, no. 4, pp. 473–478, 2022.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "2", "Details of Research Publication": "Enhancement of polarization purity in square dielectric resonator antenna using coaxial feed with metal strip loading for point-to-point communication applications,  AEÜ - Int. J. Electron. Commun., vol. 132, 153641, 2021.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "13", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "2", "Details of Research Publication": "Square DRA feed for parabolic reflector antenna for satellite communication application, Frequenz, vol. 75, no. 9–10, pp. 389–397, 2021, DOI: 10.1515/freq-2020-0178", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "14", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "2", "Details of Research Publication": "Cylindrical dielectric resonator antenna offering low cross-polarization for point-to-point communication systems, Radioengineering, vol. 30, pp. 65–72, 2021, DOI: 10.13164/re.2021.0065", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "15", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "1", "Details of Research Publication": "Design of compact monopole antenna with tunable characteristics using active FSS, DOI: 10.1109/ICORT52730.2021.9581792", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "16", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "2", "Details of Research Publication": "Single feed dual-band circularly polarized modified shape square dielectric resonator antenna for WiMAX and WLAN applications. DOI:  10.1109/ICORT52730.2021.9582045", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "17", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "2", "Details of Research Publication": "Design of a 3.5 GHz power amplifier using microstrip line technology. DOI: 10.1109/ICCISc52257.2021.9484964.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "18", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "1", "Details of Research Publication": "“Investigation on MIMO antenna for very low ECC and isolation characteristics using FSS and metal-wall DOI : 10.1016/j.aeue.2021.153708", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "19", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "1", "Details of Research Publication": "Compact ultra-wideband antenna: improvement of gain and FBR across the entire bandwidth using FSS DOI : 10.1049/iet-map.2019.0536", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "20", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "2", "Details of Research Publication": "Application-based evolution of microstrip antenna: presenting wide-bandwidth circular polarization and multi-resonating characteristics, DOI: 10.1080/09205071.2020.1796823", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "21", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "3", "Details of Research Publication": "Design of highly compact circular microstrip patch antenna using slot in the ground plane for potential WiMAX application at 2.5 GHz, Int. J. Microw. Opt. Technol., vol. 15, no. 1, pp. 1–9, Jan. 2020", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "22", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "4", "Details of Research Publication": "Advanced materials and structures for terahertz engineering,” in Terahertz Biomedical and Healthcare Technologies, A. Banerjee, B. Chakraborty, H. Inokawa, and J. N. Roy, Eds. Amsterdam, Netherlands: Elsevier, 2020, ch. 3, pp. 57–73, DOI: 10.1016/B978-0-12-818556-8.00003-3.", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "23", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "3", "Details of Research Publication": "Dual-band dual-sense circularly polarized U- and L-shaped strip monopole antenna for WiMAX/WLAN applications, J. Electromagn. Waves Appl., vol. 33, no. 18, 2019, DOI: 10.1080/09205071.2019.1684387", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "24", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "3", "Details of Research Publication": "Circularly polarized quad-band monopole antenna for wireless communication system, Int. J. RF Microw. Comput.-Aided Eng., vol. 29, no. 9, 2019, doi: 10.1002/mmce.21818", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "25", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "2", "Details of Research Publication": "A novel compact microstrip bandpass filter using cascading technique,” Int. J. Microw. Opt. Technol., vol. 14, no. 3, 2019.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": ""}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Aug 2021: IEEE ICORT Best Paper Award 2021.",
            "Nov 2019: Qualified UGC-NET for eligibility for Assistant Professor held on 21st June, 2019.",
            "Feb 2018: Recipient of University rank Certificate for securing 1st rank in the University on the result of M. Tech degree examination 2017."
          ]
        }
      ]
    },

    "Dr. V. Sai Kumar": {
        "name": "Dr. V. Sai Kumar",
        "designation": "Asst. Professor",
        "email": "saikumarv@mits.ac.in",
        "officeAddress": "West Block",
        "image": "https://mits.ac.in/public/uploads/faculty/Sai Sir.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Image Processing",
                            "Branch": "Electronics & Communication Engineering",
                            "College Name/University": "Rayalaseema University, Kurnool",
                            "Year of Passing": "2024"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "VLSI Design",
                            "Branch": "Electronics & Communication Engineering",
                            "College Name/University": "V.I.T University, Vellore",
                            "Year of Passing": "2007"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Electrical & Electronics Engineering",
                            "Branch": "Electrical & Electronics Engineering",
                            "College Name/University": "Periyar University, Salem",
                            "Year of Passing": "2004"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=60611279600",
                        "Vidwan Link: https://mits.irins.org/profile/561197",
                        "Google scholar Link: http://scholar.google.co.in/citations?user=cBMccQUAAAAJ",
                        "h-Index (As per Scopus Data) :"
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Application ID": "460121-001",
                            "Title of the Patent": "Design of a Networked IoT Security Node for Sensitive Data Protection",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Application ID": "460119-001",
                            "Title of the Patent": "Smart Waste Management System for Farms",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Application ID": "460122-001",
                            "Title of the Patent": "IoT-Based Distributed Ledger Device for Health and Security Data Management",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "441092-001",
                            "Title of the Patent": "Smart Stress Detection Treadmill Under Examination",
                            "Status": "Under Examination"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "440535-001",
                            "Title of the Patent": "Smart Anti-theft Multipurpose Lock",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "6",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "441091-001",
                            "Title of the Patent": "Smart Pest Control Device for Agricultural Applications Granted",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "7",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "441090-001",
                            "Title of the Patent": "Smart Device for Prediction of Diabetes",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "8",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "429724-001",
                            "Title of the Patent": "Textured Turing Cutting Insert",
                            "Status": "Granted"
                        }
                    ]
                }
            ]
    },

    "Dr. E. Aravindraj": {
      name: "Dr. E. Aravindraj",
      designation: "Asst. Professor",
      email: "aravindraje@mits.ac.in",
      officeAddress: "West Block",
      image: "public/uploads/faculty/ara.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Antenna & Microwave", "Branch": "ECE", "College Name/University": "Pondicherry University", "Year of Passing": "2024"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "Antenna & Microwave", "Branch": "Wireless Communication", "College Name/University": "Rajiv Gandhi College of Engg and Tech", "Year of Passing": "2017"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "Embedded System", "Branch": "ECE", "College Name/University": "Alpha College of Engg and Tech", "Year of Passing": "2015"}
          ]
        },
        {
          title: "Research Areas",
          content: "Antenna & Microwave"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus Link", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57200513828"},
            {"Identifier": "Vidwan Link", "Link": "https://mits.irins.org/profile/460846"},
            {"Identifier": "Google scholar Link", "Link": "https://scholar.google.co.in/citations?user=x&user=xPQOv-0AAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "5"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "3", "Details of Research Publication": "An Exclusive Survey on Embedded Metamaterial and Superstrate Metamaterial Antennas https://doi.org/10.1109/ICETEA64585.2025.11100130 International Conference on Emerging Technologies in Engineering Applications (ICETEA)", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "2", "Details of Research Publication": "A 1 × 4 Arrow Headed MIMO Antenna with Integrated Band Rejection and High Isolation for 6G Communication Systems https://doi.org/10.1109/ICETEA64585.2025.11099942 International Conference on Emerging Technologies in Engineering Applications (ICETEA)", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "5", "Details of Research Publication": "Design and Development of Octagonal CSRR Embedded Patch Antenna for Wireless Applications https://doi.org/10.1109/ICIMA64861.2025.11074002 International Conference on Inventive Material Science and Applications (ICIMA)", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "6", "Details of Research Publication": "Detecting Cardiovascular Diseases Using Machine Learning and Biomedical Data Classification https://doi.org/10.1109/ICCSP64183.2025.11088785 International Conference on Communication and Signal Processing (ICCSP)", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "6", "Details of Research Publication": "A Multiband Sierpinski Arrowhead Fractal Antenna with 3 × 3 CSRR Array for Various Wireless Applications https://doi.org/10.1007/978-981-97-5703-9_30 Lecture Notes in Networks and Systems", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "6", "Details of Research Publication": "Efficient Noise Cancellation in Lung Signals Using Pipelined Adaptive LMS Algorithm https://doi.org/10.1109/ICSSEECC61126.2024.10649421 International Conference on Smart Systems for Electrical, Electronics, Communication and Computer Engineering (ICSSEECC)", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Integrated Smart Trolley System: Arduino Nano-Based RFID Billing and Weight Sensor Augmentation https://doi.org/10.1109/ICCSP60870.2024.10544371 International Conference on Communication and Signal Processing (ICCSP)", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Clearer HeartBeats: Enhancement of cardiac sounds using Adaptive Filtering and Wavelet Decomposition https://doi.org/10.110/ICCSP60870.2024.10543921 International Conference on Communication and Signal Processing (ICCSP)", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "6", "Details of Research Publication": "Design and Implementation of Multi-Band Honeycomb Fractal Antenna for 5G Applications https://doi.org/10.1109/ICCSP60870.2024.10543430 International Conference on Communication and Signal Processing (ICCSP)", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "10", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "A Compact Sierpinski Gasket Fractal Antenna for S, C, X, and Ku Band Applications http://dx.doi.org/10.2528/PIERC23110704 Progress In Electromagnetics Research C/ I.F: 1.57/ Q3", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Koch Snowflake Fractal Embedded Octagonal Patch Antenna with Hexagonal Split Ring for Ultra-Wide Band and 5G Applications http://dx.doi.org/10.2528/PIERC23050702 Progress In Electromagnetics Research C/ I.F: 1.57/ Q3", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "An extensive survey on fractal structures using iterated function system in patch antennas https://doi.org/10.1002/dac.4932 International Journal of Communication Systems/ I.F: 1.8/ Q2", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "13", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "A Monopole Octagonal Sierpinski Carpet Antenna with Defective Ground Structure for SWB Applications https://doi.org/10.1007/978-981-16-0289-4_20 Lecture Notes in Electrical Engineering", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "14", "Publication Affiliation": "Others", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Design and Analysis of Recursive Square Fractal Antenna for WLAN Applications https://doi.org/10.1109/ic-ETITE47903.2020.293 International Conference on Emerging Trends in Information Technology and Engineering (ic-ETITE)", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "15", "Publication Affiliation": "Others", "Academic Year": "2017-18", "Author Position": "1", "Details of Research Publication": "Design of slotted H-shaped patch antenna for 2.4 GHz WLAN applications https://doi.org/10.1109/ICCCI.2017.8117773 International Conference on Computer Communication and Informatics (ICCCI)", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Research Projects & Events",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2025-26", "Type": "Event", "Role": "Coordinator", "Title": "Advances in Wireless Connectivity: Technologies, Systems, and Network Evolution", "Amount": "$5,000", "Agency": "IEEE ComSoc"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2024-25", "Type": "Event", "Role": "Coordinator", "Title": "Fundamentals and Recent Trends in Intellectual Property Rights, Startup Development, and Research Publication", "Amount": "35,000", "Agency": "MITS R&D Cell and MITS IEEE"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2025-26", "Application ID": "202541097681", "Title of the Patent": "A Superstrate Square Split Ring Resonator Metamaterial based Octagonal Koch Snowflake Fractal Antenna", "Status": "Filed"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2023-24", "Application ID": "202441003740", "Title of the Patent": "Trident Tree Fractal Embedded Hexagonal Printed Monopole Antenna", "Status": "Published"},
            {"S.No": "3", "Affiliation": "Others", "Academic Year": "2023-24", "Application ID": "405009-001", "Title of the Patent": "2x2 MIMO Hybrid Sierpinski Embedded Koch Fractal Patch Antenna", "Status": "Granted"},
            {"S.No": "4", "Affiliation": "Others", "Academic Year": "2023-24", "Application ID": "202441003741", "Title of the Patent": "Hybrid Koch Embedded Sierpinski Fractal Printed Monopole Antenna", "Status": "Published"},
            {"S.No": "5", "Affiliation": "Others", "Academic Year": "2022-23", "Application ID": "202341022433", "Title of the Patent": "A Koch Snowflake Fractal Embedded Octagonal Patch Antenna for Ultra-Wideband And 5G Applications", "Status": "Published"},
            {"S.No": "6", "Affiliation": "Others", "Academic Year": "2022-23", "Application ID": "202341006700", "Title of the Patent": "A Compact Hybrid Sierpinski - Koch Fractal Antenna with CPW For Super High Frequency Applications", "Status": "Examination"},
            {"S.No": "7", "Affiliation": "Others", "Academic Year": "2021-22", "Application ID": "2021104784", "Title of the Patent": "An Optimized Sierpinski Gasket Fractal Patch Antenna for S, C, X And Ku Band Applications", "Status": "Granted"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Received a grant of $5,000 from the IEEE Communication Society for conducting a School Series Event for IEEE ComSoc student members.",
            "Received the “Best Paper Award” at the Emerging Trends and Technologies on Intelligent Systems (ETTIS-2024) conference organized by C-DAC, Ministry of Electronics and Information Technology, Government of India."
          ]
        }
      ]
    },

    "Dr. Gutti Nagaswetha": {
        "name": "Dr. Gutti Nagaswetha",
        "designation": "Asst. Professor",
        "email": "nagaswethag@mits.ac.in",
        "officeAddress": "West Block",
        "image": "https://mits.ac.in/public/uploads/faculty/nagaswetha.png",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "VLSI & Embedded Systems",
                            "Branch": "Electronics & Communication Engineering",
                            "College Name/University": "Viswesaraya Technological University,Belgaum",
                            "Year of Passing": "2024"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Embedded Systems",
                            "Branch": "Electronics & Communication Engineering",
                            "College Name/University": "AITS, Rajampet Affi.to JNTU Anantapur",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "ICE",
                            "Branch": "ICE",
                            "College Name/University": "AITS, Rajampet, Affi.to JNTU Hyderabad.",
                            "Year of Passing": "2006"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "VLSI & Embedded Systems"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=58502230000",
                        "Vidwan Link: https://mits.irins.org/profile/276004",
                        "Google scholar Link: https://scholar.google.com/citations?user=AbHX0aYAAAAJ&hl=en",
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
                            "Author Position": "1",
                            "Details of Research Publication": "Creation of A Music Recommendation System using Facial Expression Recognition with MATLAB",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Extensive Challenge for Multi-Disease Identification using HYBRID Algorithm",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "A Brand-New, Area - Efficient Architecture for the FFT Algorithm Designed for Implementation of FPGAs",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Avoiding Dynamic Time Error by Implementing Prediction Logic",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Efficient Multiplier Architecture for ECC Core",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Gain parameter for various microstrip patch antenna - Survey",
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
                            "Academic Year": "2023",
                            "Application ID": "202341000087",
                            "Title of the Patent": "DEVELOPMENT OF A CONTENTION-FREE DIFFERENTIAL FLIP-FLOP USING GDI AND CLOCK GATING TECHNIQUE",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Application ID": "202541080004",
                            "Title of the Patent": "A SYSTEM FOR ELECTRICITY GENERATION FROM FOOD WASTE AND A METHOD OF MONITORING USING IoT",
                            "Status": "Under Examination"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Nominated as IEEE Signal Processing Society Advisor for MITS College under IEEE Hyderabad section Region 10.",
                        "Selected as Anantapuram subsection Representative for IEEE Hyderabad Section WIE AG Committee."
                    ]
                }
            ]
    },

    "Dr. Simadri Badatya": {
        "name": "Dr. Simadri Badatya",
        "email": "drsimadrib@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Simadri Badatya.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "2D material, Nanogenerator and self-powered sensors",
                            "Branch": "Engineering Science",
                            "College Name/University": "Academy of Scientific Innovation & Research (AcSIR), India",
                            "Year of Passing": "2024"
                        },
                        {
                            "Course": "M.Tech",
                            "Specialization": "VLSI & Embedded System",
                            "Branch": "ECE",
                            "College Name/University": "Biju Patnaik University of Technology, Rourkela",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "ECE",
                            "Branch": "ECE",
                            "College Name/University": "Biju Patnaik University of Technology, Rourkela",
                            "Year of Passing": "2012"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "VLSI, nanogenerator for energy harvesting and self-powered sensors"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=57217005008",
                        "Vidwan Link: https://vidwan.inflibnet.ac.in/myprofile_646427",
                        "Google scholar Link: https://scholar.google.com/citations?user=0_UyiiwAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 9"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Spray Fluidized Bed Assisted Flexible Robust Light Weight Hollow Metallic Sphere Based Triboelectric Nanogenerator https://doi.org/10.1021/acsaelm.4c01010, Q1, ISSN: 2637-6113",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Self-poled graphene quantum dots reinforced PVDF_HFP nanocomposites based flexible triboelectric nanogenerator https://link.springer.com/article/10.1007/s41403-024-00483-6",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Unveiling a robust and high-temperature-stable two-dimensional Zn Al layered double hydroxide nanosheet based flexible triboelectric nanogenerator https://doi.org/10.1039/D3NR03894G",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Self-poled graphene quantum dots reinforced PVDF_HFP nanocomposites based flexible triboelectric nanogenerator https://link.springer.com/article/10.1007/s41403-024-00483-6",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Blue Light Emitting Piezoelectric Few-Layered Borophene Nanosheets For Flexible Nanogenerators https://doi.org/10.1038/s43246-023-00375-2",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Sustainable Robust Waste-Recycled Ocean Water-Resistant Fly Ash-Carbon Nanotube Nanocomposite-Based Triboelectric Nanogenerator https://doi.org/10.1039/D2SE01698B , Q1, ISSN 2398-4902.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "Poling-Polarization-Mediated Centrosymmetric Charge-Transfer Organic-Cocrystal-based Flexible Triboelectric Nanogenerator https://doi.org/10.1021/acsaelm.2c00630",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "Flexible Interconnected Cu-Ni Nanoalloys Decorated Carbon Nanotube-Poly (vinylidene fluoride) Piezoelectric Nanogenerator https://doi.org/10.1002/admt.202101281",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "4",
                            "Details of Research Publication": "Tailoring of the electrochemical stability and dielectric behaviour http://doi.org/10.1088/1402-4896/ac6d20",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Humidity Sustainable Hydrophobic Poly (vinylidene fluoride)-Carbon Nanotubes Foam Based Piezoelectric Nanogenerator https://doi.org/10.1021/acsami.1c02237",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Solution-Processed High-Performance Piezoelectric Eggshell Membrane &ndash; PVDF Hybrid Composite Nanogenerator via Engineering Interfacial Polarization https://doi.org/10.1016/J.JALLCOM.2020.158406",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Transparent flexible graphene quantum dot-(PVDF-HFP) piezoelectric nanogenerator https://doi.org/10.1016/j.matlet.2021.129493",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "2",
                            "Details of Research Publication": "Unraveling Anomalous Dielectric Phase Transition In Few-Layered 2H/1T Mos2 Nanosheets https://doi.org/10.1021/acs.jpcc.1c03430",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "2",
                            "Details of Research Publication": "Observation of Anomalous Phase Transition and Band Gap Shrinkage in Zinc Germanate Nanorods https://doi.org/10.1016/j.mseb.2020.114602",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "3",
                            "Details of Research Publication": "A high performance flexible two dimensional vertically aligned ZnO nanodisc based piezoelectric nanogenerator via surface passivation https://doi.org/10.1039/C9NA00789J",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "Awarded with Gold Medal for being the Best M. Tech Graduate in 2016."
                }
            ]
    },

    "Dr. Anurag Kumar Pandey": {
        "name": "Dr. Anurag Kumar Pandey",
        "email": "dranuragkumarp@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Anurag Kumar Pandey.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Nanomaterials, Biomedical, catalysis, Carbon quantum dots",
                            "Branch": "School of Nanoscience and Technology",
                            "College Name/University": "Indian Institute of Technology (IIT), Kharagpur",
                            "Year of Passing": "2024"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Nanoscience and Technology",
                            "Branch": "Nanoscience and Technology",
                            "College Name/University": "Pondicherry Central University",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Electronics and Communication Engineering",
                            "Branch": "Electronics and Communication Engineering",
                            "College Name/University": "Feroze Gandhi Institute of Engineering and Technology (F.G.I.E.T)",
                            "Year of Passing": "2013"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Carbon quantum dots, Nanomaterials optoelectronics properties, Bioimaging, Catalysis, Antibacterial"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=57386962400",
                        "Vidwan Link: https://mits.irins.org/profile/655138",
                        "Google scholar Link: https://scholar.google.com/citations?hl=en&user=Un1E2swAAAAJ%20&user=Un1E2swAAAAJ",
                        "h-Index (As per Scopus Data) : 4"
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
                            "Details of Research Publication": "Sodium-Entrapped Carbon Nanodots from Silk Wastewater for Combating Multidrug-Resistant Bacteria in Healthcare Settings. ACS Applied Bio Materials 2025, https://doi.org/10.1021/acsabm.5c00538",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of reaction temperatures on optical properties of clove buds derived carbon dots for targeting nucleolus, Journal of Industrial and Engineering Chemistry, 141 (2025): 441-455., https://doi.org/10.1016/j.jiec.2024.07.006",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "7",
                            "Details of Research Publication": "Green Synthesis of Poly (Vinyl Alcohol)-Silver Nanoparticles Composite using Flaxseed (Linumusitatissimum L) Peel Extract: Its Cytotoxic and Antibacterial Activities. ChemistrySelect, 2024, 9, e202402917. https://doi.org/10.1002/slct.202402917",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "2",
                            "Details of Research Publication": "Iodine functionalized 2, 5-dimethoxy-2, 5-dihydrofuran (DHFI) crosslinked whey protein-derived carbon nanodots (WCND) for antibacterial application: Colloids and Surfaces B: Biointerfaces, 231, 113543",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Hydrothermal synthesis of PVP-passivated clove bud-derived carbon dots for antioxidant, catalysis, and cellular imaging applications. Colloids and Surfaces B: Biointerfaces",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "3",
                            "Details of Research Publication": "Nanotheranostics: Nanoparticles applications, perspectives, and challenges. BioSensing, Theranostics, and Medical Devices: From Laboratory to Point-of-Care Testing, 345-376, 10.1007/978-981-16-2782-8_14",
                            "Indexing": "SCI",
                            "Publication": "Book chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-19",
                            "Author Position": "3",
                            "Details of Research Publication": "Synergistic effect of bimetallic Cu: Ni nanoparticles for the efficient catalytic conversion of 4-nitrophenol. New Journal of Chemistry, 43(7), 3180-3187",
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
                            "Affiliation": "Others",
                            "Academic Year": "2023-25",
                            "Application ID": "202431037271",
                            "Title of the Patent": "Hydrothermal Synthesis of Indian Spice Derived Carbon Dots as a Fluorescent Probe for Nucleolus Imaging",
                            "Status": "Filed"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2023-25",
                            "Application ID": "202431049834",
                            "Title of the Patent": "Textile industry wastewater-derived carbon-nanodot composition for surface disinfection and sanitization",
                            "Status": "Filed"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2023-25",
                            "Application ID": "202431037165",
                            "Title of the Patent": "Surface Functionalized protein-derived carbon nano-dot (CND) for antimicrobial application and infected chronic wound management",
                            "Status": "Filed"
                        }
                    ]
                }
            ]
    },

    "Dr. H. Shree Kumar": {
      name: "Dr. H. Shree Kumar",
      designation: "Asst. Professor",
      email: "shreekumarh@mits.ac.in",
      officeAddress: "West Block",
      image: "public/uploads/faculty/sreekumar.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "VLSI Design", "Branch": "ECE", "College Name/University": "Anna University, Chennai", "Year of Passing": "2025"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "VLSI Design", "Branch": "ECE", "College Name/University": "SRM University, Chennai", "Year of Passing": "2013"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "ECE", "Branch": "ECE", "College Name/University": "Vinayaka Missions Kripananda Variyar Engineering College, Salem", "Year of Passing": "2011"}
          ]
        },
        {
          title: "Research Areas",
          content: "VLSI Design, Microstrip Antenna Design, Deep learning"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus Link", "Link": "https://www.scopus.com/authid/detail.uri?authorId=58283048300"},
            {"Identifier": "Vidwan Link", "Link": "https://mits.irins.org/profile/460840"},
            {"Identifier": "Google scholar Link", "Link": "https://scholar.google.com/citations?user=50qiSksAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "2"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "2", "Details of Research Publication": "Designing Ultra-Wide-Band MIMO Antenna between 25 to 55 GHz for 5G Applications 10.1109/ICAISS61471.2025.11041796 IEEE Xplore", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "4", "Details of Research Publication": "High-Speed Approximate Adder Design Through Charge Recovery Logic and Hybrid Low Power Technique 10.1109/VLSISATA65374.2025.11070085 IEEE Xplore", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "2", "Details of Research Publication": "CMOS Ternary logic gate implementation utilizing Domino Logic IEEE Xplore", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "4", "Details of Research Publication": "Developing a fast, energy-efficient carry skip adder with configurable delay extension utilizing the Han Carlson adder doi: 10.1109/ICCCNT61001.2024.10724590 IEEE Xplore", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "4", "Details of Research Publication": "Development of a Fast and Energy-Efficient Carrier Bypass Adder with Tunable Delay Extension doi: 10.1109/ICITEICS61368.2024.10625150 IEEE Xplore", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "A Novel IoT based Wavelet and PCA Approach for Improved Glaucoma Classification Using Retinal Images DOI: https://doi.org/10.54216/JISIoT.170113. Journal of Intelligent Systems and Internet of Things,vol. , no. , 2025, pp. 177-195", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Image Compression and Enhancement Using Deep Learning Algorithm 10.1109/ESCI63694.2025.10988240. IEEE Xplore", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "FPGA Implementation of Multi-Channel Dual frequency Decimation Filter With Wide Band Digital Receiver Journal of Environmental Protection and Ecology, Vol. 24, No. 7, pp. 2449 - 2458", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": ""}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "Others", "Academic Year": "2021-22", "Application ID": "202141058289", "Title of the Patent": "Efficient Implementation of Modern Agriculture system by using IoT and AI technologies", "Status": "Published"},
            {"S.No": "2", "Affiliation": "Others", "Academic Year": "2021-22", "Application ID": "202241006780", "Title of the Patent": "Automated medicine dispenser with reminder and method of dispensing medicine", "Status": "Under Examination"},
            {"S.No": "3", "Affiliation": "Others", "Academic Year": "2021-22", "Application ID": "202221009515", "Title of the Patent": "IoT Based Human Activity Tracking and Monitoring", "Status": "Published"},
            {"S.No": "4", "Affiliation": "Others", "Academic Year": "2022-23", "Application ID": "2022/10282", "Title of the Patent": "A System and a method for monitoring grain storage bags throughout a supply chain", "Status": "Granted"},
            {"S.No": "5", "Affiliation": "Others", "Academic Year": "2023-24", "Application ID": "6349212", "Title of the Patent": "Sun Tracking Solar Panel System", "Status": "Granted"}
          ]
        }
      ]
    },

    "Dr. Rakesh Singh": {
        "name": "Dr. Rakesh Singh",
        "email": null,
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Rakesh Singh.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "RF& Microwave",
                            "Branch": "ECE",
                            "College Name/University": "Indian Institute of Technology, Roorkee",
                            "Year of Passing": "2025"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "RF& Microwave",
                            "Branch": "ECE",
                            "College Name/University": "National Institute of Technology, Delhi",
                            "Year of Passing": "2018"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "ECE",
                            "Branch": "ECE",
                            "College Name/University": "Meerut Institute of Technology, Meerut",
                            "Year of Passing": "2012"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "RF & Microwave"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=59602251200",
                        "Vidwan Link: https://mits.irins.org/profile/666607",
                        "Google scholar Link: https://scholar.google.com/citations?hl=en&user=05BT8oAAAAAJ",
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
                            "Details of Research Publication": "Computation of Effective Dielectric Properties Using Dielectric Mixing Model Approach for Breast Cancer Detection",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Compact wideband microstrip patch antenna design for breast cancer detection",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "2",
                            "Details of Research Publication": "Circularly polarized two-port MIMO dielectric resonator antenna",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "3",
                            "Details of Research Publication": "Dimensions selection criteria of the stair-shaped slot for obtaining the wideband response of CPDRA",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "DEVELOPMENT OF AN IMAGING SYSTEM FOR BREAST CANCER DETECTION",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Liquid-based phantom preparation and dielectric characterization for breast cancer imaging",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Awarded with DST (Department of Science and Technology, Government of India) travel grant of INR 2,13,927 for participation in the European Conference on Antennas and Propagation (EuCAP) in 2023.",
                        "Academic achievement: Qualified GATE Examination 8 Times."
                    ]
                }
            ]
    },

    "Dr. G. Subbarao": {
        "name": "Dr. G. Subbarao",
        "email": "subbaraog@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Subbarao.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Microwave Absorbers",
                            "Branch": "Electronics and Communication Engineering",
                            "College Name/University": "National Institute of Technology Mizoram (NITMZ), Mizoram",
                            "Year of Passing": "2025"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Digital Electronics and Communication Systems",
                            "Branch": "Electronics and Communication Engineering",
                            "College Name/University": "VVIT, Guntur",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Electronics and Communication Engineering",
                            "Branch": "Electronics and Communication Engineering",
                            "College Name/University": "Acharya Nagarjuna University",
                            "Year of Passing": "2012"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Microwave Absorbers, MIMO Antennas for 5G and 6G Communications, Metamaterials"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=57220805557",
                        "Vidwan Link: https://mits.irins.org/profile/274820",
                        "Google scholar Link: https://scholar.google.com/citations?user=1JFnnY4AAAAJ&hl=en&oi=sra",
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
                            "Details of Research Publication": "Mutual Coupling Reduction in UWB-MIMO Antennas Using Stepped Jesus Cross Stub DOI: 10.1007/978-981-95-1058-0_31",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Trident -Tree Fractal Printed Monopole Antenna for WLAN and 5G Applications DOI: 10.1109/INSPECT67393.2025.11350383",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "4",
                            "Details of Research Publication": "Design of a Star-Shaped Dual-Band Ultra-Thin Polarization-Insensitive Metamaterial Absorber for S-Band Applications DOI: 10.1109/ICWITE64848.2025.11306966",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "5",
                            "Details of Research Publication": "Design and Analysis of Triple- Band Copper- Based Metamaterial Absorber for GHz Applications DOI: 10.1109/ICCAMS65118.2025.11234549",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "5",
                            "Details of Research Publication": "Design Analysis of We-Mo Satellite for Atmospheric Parameters DOI: 10.1109/WAMS64402.2025.11159014",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "A 1&times; 4 Arrow Headed MIMO Antenna with Integrated Band Rejection and High Isolation for 6G Communication Systems DOI: 10.1109/ICETEA64585.2025.11099942",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "5",
                            "Details of Research Publication": "A Power-Aware Algorithm for Mobile Devices Focused on Batteries DOI: 10.1109/ICCSP60870.2024.10544227",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Design of a Graphene-Based Ultra-Wideband Polarization-Insensitive Absorber for Terahertz Applications DOI: 10.1007/s11468-025-03043",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Triple band single layer microwave absorber based on closed loop resonator structures with high stability under oblique incidence DOI: 10.1016/j.aeue.2023.154629",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Triple Band Polarization Insensitive Microwave Absorber with Defected Ground Structure for EMI/EMC Applications DOI: 10.1109/IEMECON53809.2021.9689090",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Design of Polarization-Insensitive Near Unity Dual Band Microwave Absorber for EMI/EMC Applications DOI: 10.1109/WiSPNET51692.2021.9419422",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Design of polarization-insensitive dual band microwave absorber for EMI/EMC applications DOI: 10.1109/ICCCA49541.2020.9250862",
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
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Funded Project /Event": "Event",
                            "Role": "Co-Coordinator",
                            "Title of the Project/Event": "Advances in Wireless Connectivity: Technologies, Systems and Network Evolution &ldquo;2025 IEEE ComsSoc School Series&rdquo;",
                            "Amount in Rs. /-": "$5000",
                            "Funding Agency": "IEEE"
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
                            "Application ID": "448604-001",
                            "Title of the Patent": "MICROWAVE ANTENNA FOR 5G WAVE TRANSMISSION",
                            "Status": "Granted"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "Reviewer of reputed journals: Scientific Reports (Nature, UK), Advanced Electromagnetics Journal."
                }
            ]
    },

    "Mr. T. Manivannan": {
        "name": "Mr. T. Manivannan",
        "email": "manivannant@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. T. Manivannan.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "ECE",
                            "Branch": "ECE",
                            "College Name/University": "Vel Tech University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.E",
                            "Specialization": "Applied Electronics",
                            "Branch": "ECE",
                            "College Name/University": "Anna University, Chennai",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "ECE",
                            "Branch": "ECE",
                            "College Name/University": "Vellore institute of Technology, Vellore",
                            "Year of Passing": "2005"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Automotive Embedded Systems"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=59593730100",
                        "Vidwan Link: https://mits.irins.org/profile/274753",
                        "Google scholar Link: https://scholar.google.co.in/citations?user=iO84sWAAAAAJ",
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
                            "Details of Research Publication": "Detecting Cardiovascular Diseases Using Machine Learning and Biomedical Data Classification https://doi.org/10.1109/ICCSP64183.2025.11088785 International Conference on Communication and Signal Processing (ICCSP)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "A Multiband Sierpinski Arrowhead Fractal Antenna with 3 &times; 3 CSRR Array for Various Wireless Applications https://doi.org/10.1007/978-981-97-5703-9_30 Lecture Notes in Networks and Systems",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Efficient Noise Cancellation in Lung Signals Using Pipelined Adaptive LMS Algorithm https://doi.org/10.1109/ICSSEECC61126.2024.10649421 International Conference on Smart Systems for Electrical, Electronics, Communication and Computer Engineering (ICSSEECC)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Optimized High-Speed Wallace Tree Multiplier Using Parallel Prefix Adders https://doi.org/10.1109/ICSSEECC61126.2024.10649488 International Conference on Smart Systems for Electrical, Electronics, Communication and Computer Engineering (ICSSEECC)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Underground Mine Terrain Obstacle Detection based on Multi-Robot System with Swarm Intelligence https://ijisae.org/index.php/IJISAE/article/view/4723 International Journal of Intelligent Systems and Applications in in Engineering",
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
                            "Academic Year": "2023-24",
                            "Application ID": "202441003740",
                            "Title of the Patent": "Trident Tree Fractal Embedded Hexagonal Printed Monopole Antenna",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Application ID": "202341000087",
                            "Title of the Patent": "Design And Performance Of Charge-Plasma-Based Schottky-Fet Cmos Circuit Ring Oscillator For High Den",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "Received the &ldquo;Best Paper Award&rdquo; at the Emerging Trends and Technologies on Intelligent Systems (ETTIS-2024) conference organized by C-DAC, Ministry of Electronics and Information Technology, Government of India."
                }
            ]
    },

    "Mr. Asif Moiz": {
        "name": "Mr. Asif Moiz",
        "email": "asifmoiz@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Asif Moiz.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Image Processing",
                            "Branch": "ECE",
                            "College Name/University": "NIT, Patna",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Communication",
                            "Branch": "ECE",
                            "College Name/University": "Supreme Knowledge Foundation Group of Institutions, MAKAUT, W.B.",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "B.Sc.(Engg)",
                            "Specialization": "ECE",
                            "Branch": "ECE",
                            "College Name/University": "Maulana Azad College of Engineering & Technology, Maghad University,patna",
                            "Year of Passing": "2006"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Computer Vision & Image Processing"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=59929870100",
                        "Vidwan Link: https://mits.irins.org/profile/469083",
                        "Google scholar Link: https://scholar.google.com/citations?user=3D6Z9FcAAAAJ&hl=en",
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
                            "Details of Research Publication": "Image Compression and Enhancement Using Deep Learning Algorithm https://doi.org/10.1109/ESCI63694.2025.10988240",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Design and Analysis of an Energy-Efficient Full Adder Using Reversible Charge Recovery Logic https://doi.org/10.1109/ICETETSIP64213.2025.11156360",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "6",
                            "Details of Research Publication": "High-Speed Approximate Adder Design Through Charge Recovery Logic and Hybrid Low Power Technique https://doi.org/10.1109/VLSISATA65374.2025.11070085",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Un-Supervised Machine Learning for Computer Vision Image compression https://doi.org/10.4018/979-8-3373-5727-0.ch001",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                }
            ]
    },

    "Mr. V. Mustafa": {
        "name": "Mr. V. Mustafa",
        "designation": "Asst. Professor",
        "email": "mustafav@mits.ac.in",
        "officeAddress": "West Block",
        "image": "https://mits.ac.in/public/uploads/faculty/V. Mustafa.JPG",
        "sections": [
                {
                    "title": "My Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "Raspberry Pi based Real Time People Detection, Tracking and Counting System",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Engineering and Techniques, Volume 3 Issue 6, Nov-Dec 2017"
                        }
                    ]
                },
                {
                    "title": "Conferences & Workshops attended",
                    "content": "Participated in DST&ndash;SERB Sponsored KARYASHALA (High-End Workshop) &ldquo;Sensors for Healthcare Applications&rdquo; was organized by Department of Electronics and Communication Engineering NATIONAL INSTITUTE OF TECHNOLOGY, MIZORAM (An Institute of National Importance under MoE, GoI) on 12th &ndash; 18th February 2024."
                }
            ]
    },

    "Mr. G. Charan Kumar": {
        "name": "Mr. G. Charan Kumar",
        "designation": "Asst. Professor",
        "email": "charang@mits.ac.in",
        "officeAddress": "West Block",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. G. Charan Kumar.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D",
                            "Specialization": "VLSI DESIGN",
                            "Branch": "Electronics and Communication Engineering",
                            "College Name/University": "Vel Tech University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "DSCE",
                            "Branch": "Electronics and Communication Engineering",
                            "College Name/University": "Sreyas Institute of Engineering and Technology, JNTU Hyderabad",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Electronics and Communication Engineering",
                            "Branch": "Electronics and Communication Engineering",
                            "College Name/University": "Madanapalle Institute of Science & Technology, Affiliated in JNTU Anantapur",
                            "Year of Passing": "2012"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "VLSI DESIGN"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=57684009300",
                        "Vidwan Link: https://vidwan.inflibnet.ac.in/profile/611575",
                        "Google scholar Link: https://scholar.google.com/citations?user=sOGnrPsAAAAJ&hl=en",
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
                            "Details of Research Publication": "Comprehensive Survey on Internet of Medical Things (IoMT) &ndash; Applications and Challengesings None",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Efficient 32-Bit Fixed-Width Adder-Tree Design In Verilog For VLSI Applicationsone",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Parallel Processing based Image Enhancing Technique Implementation on Low-Cost FPGA",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Enhanced Deep Learning Methodology for Detection and I Identification of Brain Tumour using CNN in SCOPUS in Advances in nonlinear variational inequalities",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Efficient architectures of FIR filters using Distributed Arithmetic",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Analysis and Detection of Breast Cancer using Recursive Feature Elimination in Conference in December 2023",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "3",
                            "Details of Research Publication": "Comparative analysis of CMOS AND gate and Domino Logic AND gate design by using Nano scaling technologies",
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
                            "Application ID": "710021761",
                            "Title of the Patent": "DESIGN AND PERFORMANCE OF CHARGE-PLASMA-BASED SCHOTTKY-FETCMOS CIRCUIT RING OSCILLATOR FOR HIGH DENSITY",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mrs. K. Revathi": {
        "name": "Mrs. K. Revathi",
        "email": "revathik@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. Revathi.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D",
                            "Specialization": "ECE",
                            "Branch": "ECE",
                            "College Name/University": "NIT, Mizoram",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "VLSI & Embedded Systems",
                            "Branch": "ECE",
                            "College Name/University": "Krishnaveni Engineering College for Women, JNTUK-Kakinada",
                            "Year of Passing": "2020"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "ECE",
                            "Branch": "ECE",
                            "College Name/University": "Krishnaveni Engineering College for Women, JNTUK-Kakinada",
                            "Year of Passing": "2018"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "VLSI, Device Modelling"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=59404341900",
                        "Vidwan Link: https://mits.irins.org/profile/274612",
                        "Google scholar Link: https://scholar.google.com/citations?hl=en&user=P5njXwsAAAAJ",
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
                            "Details of Research Publication": "QCA Revolution: Transforming ALU Operations in Microprocessor Structures,&quot; 2024 10th International Conference on Advanced Computing and Communication Systems (ICACCS), Coimbatore, India, 2024, pp. 2195-2199",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "&quot;Optimizing Cost and Emissions in a 10-Unit Power Generation System using Different Optimization Techniques with Wind Energy Integration,&quot; 2025 4th International Conference on Distributed Computing and Electrical Circuits and Electronics (ICDCECE), Ballari, India, 2025, pp. 1-6",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "Received the best paper award in 4th IEEE International Conference on Distributed Computing and Electrical Circuits and Electronics (ICDCECE-2025) organized by Ballari Institute of Technology and Management, Ballari during 25-26 April, 2025."
                }
            ]
    },

    "Mr. M. Kamesh": {
      name: "Mr. M. Kamesh",
      designation: "Asst. Professor",
      email: "kameshm@mits.ac.in",
      officeAddress: "West Block",
      image: "public/uploads/faculty/1d0ccd786e3504191039a886e12fe837.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "MIMO and Antenna", "Branch": "ECE", "College Name/University": "Vel Tech University, Chennai", "Year of Passing": "Pursuing"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "Applied Electronics", "Branch": "ECE", "College Name/University": "Mookambigai College Of Engineering", "Year of Passing": "2015"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "ECE", "Branch": "ECE", "College Name/University": "Shivani Institute Of Technology, Trichy", "Year of Passing": "2013"}
          ]
        },
        {
          title: "Research Areas",
          content: "Automotive Embedded Systems"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus Link", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57219368813"},
            {"Identifier": "Vidwan Link", "Link": "https://mits.irins.org/profile/274738"},
            {"Identifier": "Google scholar Link", "Link": "https://scholar.google.co.in/citations?user=Cae_o3UAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "1"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "High Performance Metamaterial-Based Antenna Design for Compact 5G Communication  DOI:10.1109/ICICT64420.2025.11004917", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Design and Compare Microstrip Patch Antenna for 5G Wireless Communication Systems Using K-Ka DOI:10.1109/ICCSP60870.2024.10543878", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Design a Quarter-wave monopole antenna specifically designed for Wireless internet applications at 2.4 GHz DOI:10.1109/ICCSP60870.2024.10543487", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Design of a Dual Band Meta material Absorber https://warse.org /IJETE", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"}
          ]
        }
      ]
    },

    "Mrs. Kowsalya P": {
        "name": "Mrs. Kowsalya P",
        "email": "kowsalyap@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. Kowsalya P.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.E.",
                            "Specialization": "Digital Communication & Network Engineering",
                            "Branch": "Digital Communication & Network Engineering",
                            "College Name/University": "Arulmigu Kalasalingam College of Engg., Anna University",
                            "Year of Passing": "2008"
                        },
                        {
                            "Course": "B.E.",
                            "Specialization": "Electronics & Communication Engineering",
                            "Branch": "Electronics & Communication Engineering",
                            "College Name/University": "P.S.N.A College of Engg& Tech, Madurai Kamaraj University",
                            "Year of Passing": "2000"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: http://www.scopus.com/authid/detail.url?authorId=58931576400",
                        "Vidwan Link: https://mits.irins.org/profile/366744",
                        "Google scholar Link: http://scholar.google.co.in/citations?user=ubGIdToAAAAJ",
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
                            "Details of Research Publication": "&ldquo;Dynamic Infrastructure Assessment and Road Condition Monitoring using Unmanned Aerial Vehicle Images&rdquo; IEEE International Conference for Women in Innovation, Technology & Entrepreneurship (ICWITE), Bangalore https://doi.org/10.1109/ICWITE64848.2025.11307143",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "&ldquo;Efficient Noise Cancellation in Lung Signals Using Pipelined Adaptive LMS Algorithm&rdquo;, International Conference on Smart Systems for Electrical Electronics Communication and Computer Engineering ICSSEEC 2024 Proceedings, Pages 176-179 https://doi.org/10.1109/ICSSEECC61126.2024.10649421",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Integrated Smart Trolley System: Arduino Nano-Based RFID Billing and Weight Sensor Augmentation&rdquo;, 10th International Conference on Communication and Signal Processing ICCSP 2024, Pages 958-963 http://dx.doi.org/10.1109/ICCSP60870.2024.10544371",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Clearer Heart Beats: Enhancement of cardiac sounds using Adaptive Filtering and Wavelet Decomposition&rdquo;, 10th International Conference on Communication and Signal Processing ICCSP 2024, Pages 947-952 http://dx.doi.org/10.1109/ICCSP60870.2024.10543921",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "5",
                            "Details of Research Publication": "&ldquo;Design and Implementation of Multi-Band Honeycomb Fractal Antenna for 5G Applications&rdquo;, 10th International Conference on Communication and Signal Processing ICCSP 2024, Pages 1439-1444 https://doi.org/10.1109/ICCSP60870.2024.10543430",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "&ldquo;Online Fraudulence Detection Based on Decision Support System in Digital Banking&rdquo;, International Journal of Intelligent Systems and Applications in Engineering, Volume 12, Year 2024, Pages 97-105 https://ijisae.org/index.php/IJISAE/article/viev/4720",
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
                            "Application ID": "202441003740",
                            "Title of the Patent": "TRIDENT TREE FRACTAL EMBEDDED HEXAGONAL PRINTEDMONOPOLE ANTENNA",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mrs. P. Susmitha": {
        "name": "Mrs. P. Susmitha",
        "designation": "Asst. Professor",
        "email": "susmithap@mits.ac.in",
        "officeAddress": "West Block",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. P. Susmitha.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Management Studies",
                            "Group": "Management Studies",
                            "College Name/University": "National Institute Of Technology Karnataka, Surathkal",
                            "Year of Passing": "Thesis Submitted"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "VLSI",
                            "Group": "ECE",
                            "College Name/University": "CMR Institute & Technology, JNTU Hyderabad",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Information Technology",
                            "Group": "Information Technology",
                            "College Name/University": "D.M.S.Sri Venkateswara of Hindu College of Engineering, Acharya Nagarjuna University",
                            "Year of Passing": "2012"
                        }
                    ]
                }
            ]
    },

    "Mr. Shaik Tipu Rahaman": {
        "name": "Mr. Shaik Tipu Rahaman",
        "email": "tipurahamans@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. Shaik Tipu Rahaman.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Applied Psychology",
                            "Branch": "M.Sc.",
                            "College Name/University": "Bharathiar University",
                            "Year of Passing": "2019"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Electronics and Communication Engineering",
                            "Branch": "Electronics and Communication Engineering",
                            "College Name/University": "Sri Venkateswara Institute of Technology and Science",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Electronics and Communication Engineering",
                            "Branch": "Electronics and Communication Engineering",
                            "College Name/University": "Vaagdevi Institute of Technology and Science",
                            "Year of Passing": "2012"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Photonics, Optics, Biosensors"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=57212120811",
                        "Vidwan Link: NA",
                        "Google scholar Link: https://scholar.google.com/citations?user=Zgc78NMAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : NA"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013-14",
                            "Author Position": "2",
                            "Details of Research Publication": "An effective 6-bit flash ADC using low power CMOS technology https://ieeexplore.ieee.org/abstract/document/6710493/2013 15th International Conference on Advanced Computing Technologies (ICACT)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013-14",
                            "Author Position": "3",
                            "Details of Research Publication": "Implementation of error correcting methods for asynchronous communication and modified completion detector with reduced area overhead https://ieeexplore.ieee.org/abstract/document/6926116/2014 2nd International Conference on Devices, Circuits and Systems (ICDCS)",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012-13",
                            "Author Position": "3",
                            "Details of Research Publication": "A Novel Approach for Image Retrieval Based on ROI and Multifeatures Using Genetic Algorithm https://doi.org/10.1109/ic-ETITE47903.2020.293 Proceedings of International Conference on Advances in Computing",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "Cash-prize winner for two consecutive academic years at MITS under Training & Placement"
                }
            ]
    },

    "Mr. B. Subbarayudu": {
        "name": "Mr. B. Subbarayudu",
        "email": "subbarayudub@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. B. Subbarayudu - ECE.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Embedded Systems",
                            "Group": "ECE",
                            "College Name/University": "CMR College of Engineering & Technology (J.N.T.U.H)",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "ECE",
                            "Group": "ECE",
                            "College Name/University": "KSRM College of Engineering (S.V.U)",
                            "Year of Passing": "2010"
                        }
                    ]
                },
                {
                    "title": "My Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "Comparative Analysis on Sorting and Searching Algorithms",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Civil Engineering and Technology Volume 8, Issue 8, August 2017, pp. 955&ndash;978, Article ID: IJCIET_08_08_10."
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "Review and Comparison on Software Process Models",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Mechanical Engineering and Technology Volume 8, Issue 8, August 2017, pp. 967&ndash;980, Article ID: IJMET_08_08_10"
                        }
                    ]
                }
            ]
    },

    "Ms. S. Kavi Priya": {
      name: "Ms. S. Kavi Priya",
      designation: "Asst. Professor",
      email: "kavipriyas@mits.ac.in",
      officeAddress: "West Block",
      image: "public/uploads/faculty/kavi.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "M.Tech.", "Specialization": "Communication Engineering", "Branch": "ECE", "College Name/University": "VIT University", "Year of Passing": "2016"},
            {"S.No": "2", "Course": "B.E.", "Specialization": "ECE", "Branch": "ECE", "College Name/University": "Anna University", "Year of Passing": "2014"}
          ]
        },
        {
          title: "Research Areas",
          content: "Wireless Communication, Wireless Sensor Networks"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus Link", "Link": "https://www.scopus.com/authid/detail.uri?authorId=60033626800"},
            {"Identifier": "Vidwan Link", "Link": "https://mits.irins.org/profile/460834"},
            {"Identifier": "Google scholar Link", "Link": "https://scholar.google.co.in/citations?user=OI47ZlEAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": ""}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Design a Power Efficient Output-Capacitor-Less Low- Drop-Out Regulator", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""}
          ]
        }
      ]
    },

    "Mrs. V. Sai Anusha": {
        "name": "Mrs. V. Sai Anusha",
        "email": "saianushav@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/V. Sai Anusha.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Wireless Networks and Application",
                            "Branch": "ECE",
                            "College Name/University": "Amrita Vishwa Vidyapeetham, Amrita Universit",
                            "Year of Passing": "2017"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "ECE",
                            "Branch": "ECE",
                            "College Name/University": "Siddartha Educational Academy group of institutions, JNTUA",
                            "Year of Passing": "2015"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Networking and IoT, Wireless Communication"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=57195316787",
                        "Vidwan Link: https://mits.irins.org/profile/242595",
                        "Google scholar Link: https://scholar.google.com/citations?user=9fH7Q6AAAAAJ&hl=en",
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
                            "Details of Research Publication": "Deep Learning Techniques for Real-Time Natural Language Processing: Applications in Sentiment Analysis and Machine Translation. International Journal of Computer Information Systems and Industrial Management Applications 18.8s (2026): 511-520.",
                            "Indexing": "Scopus",
                            "Publication": "Journal",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026-27",
                            "Author Position": "5",
                            "Details of Research Publication": "AI Driven Intelligent Smart Irrigation System Using Multi Sensor Fusion and Embedded Machine Learning. Proceedings of the 6th International Conference on Artificial Intelligence and Smart Energy: ICAISE 2026, Volume 2. Vol. 2. Springer Nature, 2026.",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "5",
                            "Details of Research Publication": "Refining Predictive Learning Models Through Adaptive Feature Selection in Educational Data Analysis. 2025 Control Instrumentation System Conference (CISCON). IEEE, 2025.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "5",
                            "Details of Research Publication": "A Cybernetics-based Intrusion Detection System for Critical Infrastructure IoT Applications. 2025 6th International Conference on IoT Based Control Networks and Intelligent Systems (ICICNIS). IEEE, 2025.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Sewage Monitoring water using Raspberry Pi",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Analysis and Detection of Breast cancer using Recursive Feature Elimination",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Comprehensive Survey of Internet of Things (IoMT) &ndash; Applications & Challenges",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "2",
                            "Details of Research Publication": "Color Image Segmentation using Superpixel-based Fast FCM",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "A Comprehensive survey of electromagnetic propagation models Scopus",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Author Position": "1",
                            "Details of Research Publication": "Modeling rural connectivity requirements in India with case studies Scopus",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Author Position": "1",
                            "Details of Research Publication": "Comparative Analysis of wireless technology options for rural connectivity",
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
                            "Application ID": "202441083977",
                            "Title of the Patent": "IoT Driven VLSI Chip Inception Machine for Enhanced Processing and Connectivity",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "[NPTEL Topper] Communication Networks: Jan. 22, 2024 to April 8, 2024"
                }
            ]
    },

    "Mr. V. Nagaraja": {
      name: "Mr. V. Nagaraja",
      designation: "Asst. Professor",
      email: "nagarajav@mits.ac.in",
      officeAddress: "West Block",
      image: "public/uploads/faculty/nagaraju.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "M.Tech.", "Specialization": "Communication systems", "Branch": "ECE", "College Name/University": "SVU, Tirupathi", "Year of Passing": "2022"},
            {"S.No": "2", "Course": "B.Tech.", "Specialization": "ECE", "Branch": "ECE", "College Name/University": "JNTU, Kakinada", "Year of Passing": "2010"}
          ]
        },
        {
          title: "Research Areas",
          content: "Communication Systems"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus Link", "Link": "https://www.scopus.com/authid/detail.uri?authorId=59999186300"},
            {"Identifier": "Vidwan Link", "Link": "https://vidwan.inflibnet.ac.in/profile/461213"},
            {"Identifier": "Google scholar Link", "Link": "https://scholar.google.com/citations?user=TniPjOUAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": ""}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "\"Design and Optimization of a Geometric Slot-Loaded Super Wideband Antenna for Next-Generation Wireless Communication,\" 2025 Third International Conference on Augmented Intelligence and Sustainable Systems (ICAISS), Trichy, India, 2025, pp. 1047-1052, doi: 10.1109/ICAISS61471.2025.11042177.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "1", "Details of Research Publication": "\"Designing UltraWide-Band MIMO Antenna between 25 to 55 GHz for 5G Applications,\" 2025 Third International Conference on Augmented Intelligence and Sustainable Systems (ICAISS), Trichy, India, 2025, pp. 985-992, doi: 10.1109/ICAISS61471.2025.11041796", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "1", "Details of Research Publication": "\"Design Tapered Slot Antenna with AVOA Algorithm to Enhance Gain of the Patch Antenna,\" 2025 Third International Conference on Augmented Intelligence and Sustainable Systems (ICAISS), Trichy, India, 2025, pp. 1129-1134, doi: 10.1109/ICAISS61471.2025.11042239", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "Microstrip Patch Rectangular Antenna for 6G applications,Proceedings of the 4th International Conference on Information Technology, Civil Innovation, Science, and Management, ICITSM 2025,10 OCT 2025, doi={10.4108/eai.28-4-2025.2358047}", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"}
          ]
        }
      ]
    }
  */
};

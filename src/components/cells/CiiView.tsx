import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, FileText, ExternalLink, Phone, MapPin, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

const overviewPoints = [
  "Motivating students to come up with novel ideas.",
  "Developing the ideas by taking help from intellectuals.",
  "Activating the innovation with incubation.",
];

const objectives = [
  "Transfer of knowledge, methodology and practice of technology-based entrepreneurship and support for the students having creative thoughts and ideas and bring them into the limelight.",
  "To encourage students and faculty to take part in innovation, idea generation and product development.",
  "To create awareness about patenting among faculty, students and researchers.",
  "Linking higher educational institutions and industries in the field of science and technology.",
  "To create a platform to share knowledge and implementing them in real time research and applications.",
  "Continuous motivation to create a permanent network for the exchange of knowledge and practices in technology transfer among the students and researchers. So the basic idea is to connect or link companies, investors, researchers and innovating minds under MITS innovation Center.",
];

const functions = [
  "The Innovation Centre offers space, connectivity and other infrastructure facilities for the students to work.",
  "To arrange seed fund to transform an idea into a product.",
  "To arrange workshops for students and faculty in the field of Entrepreneurship.",
  "Providing training in latest technologies.",
];

const projects = [
  "Intelligent Transport System For Health Care","Storm Hero","Smart Media Player","Mr Rocket","Catch It",
  "Smart Irrigation System","Risque","Toros","Multipurpose Vehicle","Hybrid Vehicle",
  "3D Printing Feed Stock Element Extruder","Weed Remover","Missa","Remote Controlling Robot",
  "Recycling Of Tomato Plant Waste Into Packing Material","Sensor Guided Robotics / Phototropic And Photophobic Robot",
  "Vfd Controlled Multi machining Setup","Web Site For Health Care",
  "Ph Responsive Forward Osmosis Draw Agents For Desalination Of Water","Intelligence Of Breaking System",
  "Smart Home Automation System","Earthquake Detection System","Automatic Exhaust Dust Sensor",
  "IoT Based Environment Monitoring System","IoT Based Foot Neuropathy Detector And Stimulator",
  "Compact Versatile High Voltage Module","Improvement Of Geotechnical Properties Of Red Soil Using Waste Plastic Chairs",
  "Medicine Supporting System","Roof Top Agriculture And Water Harvesting","Solar Operated E-Bio Cycle",
  "Smart Garbage Management","Effortless Ploughing Setup","Traffic Density Management System",
  "Ai-Based Electrical Energy Optimization","Accident Detection & Reporting From Vehicle Using IoT",
];

const achievements = [
  "Trishant III year CSE-DS Student participate Young Scientist Conference in IISC Bangalore and got first prize project title \"Autonomous Flying Copter for Public Safety\", on 7th January 2024.",
  "Desai Rohith Reddy and Bode Reddy Prasad Student of III-year CSE-CS have participated at the iTIC, IIT Hyderabad Greenko BUILD 2023 Program and has been awarded a financial support of Rs. 1,00,000/- from iTIC incubator at IIT Hyderabad.",
  "Sasiya & Teams IV-Year CST students have attended and won the 2nd prize in the event of the 7th edition of Asia's premier technology exhibition, the India Mobile Congress (IMC), co-hosted by the Department of Telecommunication (DoT), New Delhi, held on October 27–29, 2023.",
  "SIH 2022 - 5 Teams got selected for Finale (Software Edition-4, Hardware Edition-1) Out of 5 Teams, One Team from Software Edition got Winner Price (Rs.1 Lakh) from Hyderabad Venue \"INFINITY69\".",
  "Team GSSS_TITANS (ID: VISH20192058) of MITS, Madanapalle, AP, participated and won third prize (cash award Rs. 21,000/-) in the National Convention of \"Chhatra Viswakarma Awards-2019\" held on 24th February 2020 at AICTE, New Delhi under Farm and Flock Category.",
  "Team HUNTER_SQUAD of MITS, Madanapalle, AP, selected for Grand finale of Smart India Hackathon-2020 software edition held during 1-3 August 2020.",
  "MITS is recognized as one of the best performing Institution Innovation Council from the South Central Zone (SCRO) during IIC Calendar year 2018-19.",
  "A total of 158 teams addressed problems for Smart India Hackathon-2019. Out of which 5 teams got selected under Software edition and 10 teams are short listed for Hardware edition. Team Innovative People won First Prize in Grand Finale of Smart India Hackathon-2019, Software Edition held at IIT, Roorkee. Team TRINETRA won First Prize in Grand Finale of Smart India Hackathon-2019, Hardware Edition held at SRM, Chennai.",
  "A team of 4 members is selected for Developers Tutorial and Hackathon-April 2019, organized by India European Union ICT Standard Collaboration Project at Pune.",
  "MITS is recognized as Institution Innovation Council member under the aegis of MHRD Innovation Club.",
  "MITS Innovation Club was inaugurated on 25th September 2018, with 140 students enrollment.",
  "Our students got selected for the final round of AICTE Chhatra Vishwakarma competition held at SRKR Engineering College, Bhimavaram.",
  "35 Projects were displayed during Campus Connect Program held at MITS on 9th August 2018.",
  "10 Project teams from MITS participated in JNANABHERI program held at SV University, Tirupati on 4th August 2018.",
];

const iicTable = [
  { sno: 1, type: "Competition", title: "Proof of Concept (POC) Submission", desc: "Inviting nominations of maximum 4 best Ideas/PoCs from each IICs in two major categories of themes (Category A and Category B)", from: "15-05-2019", to: "23-06-2019" },
  { sno: 2, type: "Offline Workshop", title: "Workshop on Cognitive Skills, Design Thinking and Critical Thinking using local resource persons", desc: "IICs have to organize this workshop and upload the report on the IIC portal as per parameters attached.", from: "04-09-2019", to: "15-05-2019" },
  { sno: 3, type: "Leadership Talk", title: "Episode 04 of India First Leadership Talk with Prof. Anil D. Sahasrabudhe, Chairman, AICTE", desc: "MHRD Innovation Cell (MIC) is organizing \"India First Leadership Talk Series\" with Prof. Anil D. Sahasrabudhe, Chairman, All India Council for Technical Education.", from: "04-10-2019", to: "30-05-2019" },
  { sno: 4, type: "Design Competition", title: "Design Competition for Proof of Concept Development", desc: "This is the next step after the \"Idea Competition\". Selected Ideas at the end of the Idea Competition should be invited to give a presentation to the Evaluation Committee.", from: "04-01-2019", to: "15-06-2019" },
  { sno: 5, type: "Competition", title: "Idea Competition", desc: "Invite innovative Ideas from students of your Institution from various departments to solve the problems related to Agriculture & Rural development, Health Care, Energy, Environment, Others.", from: "15-02-2019", to: "30-05-2019" },
  { sno: 6, type: "Leadership Talk", title: "Episode 03 of India First Leadership Talk with Dr. Ajit Doval, NSA, Govt. of India", desc: "MHRD Innovation Cell (MIC)", from: "21-02-2019", to: "30-05-2019" },
  { sno: 7, type: "Leadership Talk", title: "Episode 02 of India First Leadership Talk with Dr. Anand Deshpande, CMD, Persistent Systems Ltd.", desc: "Episode 02 of \"India First Leadership Talk Series\" on theme \"Planning for Career, Future industry trends and Startup\".", from: "24-01-2019", to: "24-01-2019" },
  { sno: 8, type: "Workshop", title: "Off line workshop on IPR for Students and Faculty Members", desc: "Offline session by Local expert invited by Institute for Workshop on \"IPR for Students and Faculty Members\".", from: "01-11-2019", to: "24-01-2019" },
  { sno: 9, type: "Workshop", title: "Workshop on IPR for Students and Faculty Members", desc: "Facebook Live session by MHRD Innovation Cell for Workshop on \"IPR for Students and Faculty Members\" Date: 10th January, 2019 Time: 1:30 PM to 3:30 PM.", from: "01-10-2019", to: "01-10-2019" },
  { sno: 10, type: "Leadership Talk", title: "India First Leadership Talk by Shri. Anand Mahindra, Chairman, Mahindra Group", desc: "MHRD Innovation Cell (MIC) is organising \"India First Leadership Talk Series\". Shri. Anand Mahindra, Chairman, Mahindra Group will be the speaker.", from: "01-08-2019", to: "01-08-2019" },
  { sno: 11, type: "Launch", title: "Launch of Institution Innovation Council", desc: "Launch of IICs by Hon'ble Minister of HRD, Shri Prakash Javadekar.", from: "21-11-2018", to: "21-11-2018" },
];

const committeeLinks = [
  { title: "Committee Members 2025-26", href: "https://mits.ac.in/assets/pdf/assoc/Office Order-IIC CELL-2025.pdf" },
  { title: "Committee Members 2024-25", href: "https://mits.ac.in/assets/pdf/assoc/IIC -Innovation-Office Order- sep2024.pdf" },
  { title: "Committee Members 2023-24", href: "https://mits.ac.in/assets/pdf/assoc/Institute Innovation Council (IIC) Reconstitution.pdf" },
];

export { overviewPoints, objectives, functions, projects, achievements, iicTable, committeeLinks };

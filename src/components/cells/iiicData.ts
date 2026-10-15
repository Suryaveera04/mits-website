export interface IiicActivity {
  text: string;
  href?: string;
  linkLabel?: string;
}

export interface IiicMouYear {
  year: string;
  items: string[];
}

export interface IiicDocument {
  label: string;
  href: string;
}

export interface IiicOfficial {
  name: string;
  designation: string;
}

export const iiicAboutParagraphs: string[] = [
  "The Industry-Institute Interaction Cell (IIIC) of the college is a dedicated cell to promote the close interaction of industry and various departments of the institute. The IIIC Cell facilitates industrial and academic trainings those are not prescribed in the syllabus in addition to conducting industrial exhibitions and interaction meets. Industry Institute Partnership forms an important activity for any academic institute as its stakeholders interact with the real world.",
  "Firstly, the students are benefited due to exposure to current industry practices, challenges and needs and update their skills when changes occur in technology, teaching faculty get sensitised to the latest practices leading them to blend practice with usual theoretical teaching methods. On successful interaction, Industry may realize that Academia has more to offer by way of solving their short term and long term technical problems, provide a manpower resource pool with good industry orientation and a source for updating the knowledge sets of its personnel."
];

export const iiicObjectives: string[] = [
  "To explore and identify common avenues of interaction with Industry as per the requirements of the institution.",
  "Bridging the gap between Industry and Institute.",
  "Initiate and Coordinate Industry based research.",
  "Initiate and coordinate consultancy service.",
  "Need based training to the Industry and Institute as well.",
  "Short term courses for Manpower development."
];

export const iiicDocuments: IiicDocument[] = [
  {
    "label": "MITS IRC Policy Document 2025-2026",
    "href": "https://mits.ac.in/assets/pdf/assoc/Industry Relations Cell _ Policy Document_2026.pdf"
  },
  {
    "label": "MITS IRC Committee Order 2025-2026",
    "href": "https://mits.ac.in/assets/pdf/assoc/Industry Relation Cell (IRC) Consitutions 2025.pdf"
  },
  {
    "label": "MITS IRC MOM 2025-2026",
    "href": "https://mits.ac.in/assets/pdf/assoc/MOM-iiic-2025-26.pdf"
  },
  {
    "label": "MITS Internship Guidelines 2024-25",
    "href": "https://mits.ac.in/assets/pdf/assoc/MITS-INTERNSHIP GUDELINES 2024-25.pdf"
  },
  {
    "label": "Committee Members 2024-25",
    "href": "https://mits.ac.in/assets/pdf/assoc/IIIC -Office Order-sep2024.pdf"
  },
  {
    "label": "MoM of Reconstitution of IIIC Committee 2023-24",
    "href": "https://mits.ac.in/assets/pdf/assoc/MOM_IIIC_Reconstitution.pdf"
  },
  {
    "label": "Committee Members 2023-24",
    "href": "https://mits.ac.in/assets/pdf/assoc/IIIIC.pdf"
  },
  {
    "label": "MITS Internship Committee Members 2022-23",
    "href": "https://mits.ac.in/assets/pdf/assoc/IIIC Internship Committee- 2022-23.pdf"
  },
  {
    "label": "MITS MoU Policy 2021-22",
    "href": "https://mits.ac.in/assets/pdf/assoc/MITS_MoU Policy_2021-22.pdf"
  },
  {
    "label": "Academic Year 2023-24 Report",
    "href": "https://mits.ac.in/assets/pdf/assoc/IIIC_Final_AY2023-24.pdf"
  }
];

export const iiicKeyOfficials: IiicOfficial[] = [
  {
    "name": "Prof P. M. Balaji",
    "designation": "Assistant Director - Industry Relations"
  },
  {
    "name": "Mr. G. Kumar",
    "designation": "IRO - Industry Relations"
  }
];

export const iiicMousByYear: IiicMouYear[] = [
  {
    "year": "2025-26",
    "items": [
      "Swaasthya hospitals, Madanapalle, andhra pradesh, 517325.",
      "Arran scientific’s, apiic, Madanapalle, andhra pradesh, 517325",
      "Pathvision innovations private limited, proddatur, andhra pradesh, india.",
      "Hackers Infotech, Chennai.",
      "Woollemia Infosec Private Limited, Bengaluru.",
      "Enkonix Software Services Private Limited.",
      "PARD India.",
      "Culine Solutions Pvt. Ltd.",
      "Decibels"
    ]
  },
  {
    "year": "2024-25",
    "items": [
      "CodeTantra",
      "PI Square Technologies India Pvt Ltd",
      "PCB Cupid in Collaborations with VDT EduTantr Ventures Pvt Ltd",
      "Next New Venture Studio Inc",
      "Supraja Technologies",
      "VDT EduTantr Ventures Pvt Ltd",
      "CODEON Technologies Pvt. Ltd., Vellore",
      "NAFTER Web Technologies",
      "Sabari Gateway Software Solutions (OPC) Pvt Ltd",
      "Xenovex Technologies Pvt. Ltd., Chennai",
      "APSWREIS (G), Andhra Pradesh Social Welfare Residential Educational Institution Schools, Valmikipuram",
      "Dr. B. R. AmbedkarGurukulam School & Junior College), Andhra Pradesh Social Welfare Residential Educational Institution Schools, Byrakayalakota",
      "Jawahar Navodaya Vidyalaya, Andhra Pradesh",
      "GS Co. Ltd, Gyeonggi-do, Republic of Koria",
      "M/s Peketi Ventures Private Limited, Hyderabad",
      "NASSCOM / IT - ITeS Sector Skills Council",
      "MoU with GeeksforGeeks"
    ]
  },
  {
    "year": "2023-24",
    "items": [
      "NASSCOM / IT - ITeS Sector Skills Council",
      "Government Tool Room and Training, Bangalore",
      "SmartBridge Educational Services Pvt Ltd, Hyderabad",
      "Ravuru Tech Pvt Ltd, Bangalore",
      "Gyaantrix Technologies Pvt Ltd, Madanapalle",
      "Mirthbees Technology Solutions, Chennai",
      "ACIC Kalasalingam Innovation Foundation",
      "ExcelR Edtch Pvt Ltd",
      "Altsense Technology Services, Chennai",
      "ASIA University, Taiwan",
      "Asia Management Collage, Asia University",
      "Decibels"
    ]
  },
  {
    "year": "2022-23",
    "items": [
      "Brno University of Technology",
      "Fopple Drone Tech PVT..LTD.,",
      "NITTTR, Chennai, (Ministry of Education, Government of India)",
      "Vidgan Private Limited",
      "MCore Tech Academy Pvt. Ltd. (MCoreta), Bangalore",
      "Fillip Infra Consultancy Services (OPC)Pvt Ltd, Mumbai",
      "Vernacular Consultancy Services Pvt Ltd (Vercos), Lucknow"
    ]
  },
  {
    "year": "2021-22",
    "items": [
      "SandLogic, Bangalore",
      "Ethnus Consultancy Services Pvt. Ltd, Bangalore",
      "Vernacular Consultancy Services Pvt Ltd (Vercos)",
      "NDS Eco. Motors Pvt. Ltd. Bangalore",
      "Madanapalle Municipality, Chittoor District, AP"
    ]
  },
  {
    "year": "2020-21",
    "items": [
      "Great Learning",
      "UiPath Academic Alliance"
    ]
  },
  {
    "year": "2019-20",
    "items": [
      "BRNO University of Technology"
    ]
  },
  {
    "year": "2018-19",
    "items": [
      "Shou University, Taiwan",
      "Bennett university",
      "Sakrobotics Pvt. Ltd.",
      "GEMS-German Center for Engg. & Mgmt. studies and APS European center for Mechatronics",
      "GEMS and Steinbeis Institute for sustainable Resource usage & Energy Mgmt.",
      "Teken Bim Technologies Pvt. Ltd., Chennai",
      "Oracle Academy Institution",
      "Talent Micro Innovations Pvt. Ltd. Bangalore",
      "National United University, Taiwan",
      "Ming Chuan University of Taiwan",
      "Providence University, Taiwan",
      "National YunLin University of Science & Technology, Taiwan",
      "National PingTun University of Science & Technology, Taiwan",
      "Euphonious Innovations Pvt. Ltd., Bangalore",
      "Central Manufacturing Technology Institute (CMTI)",
      "Kookmin University",
      "Dassault Systems Foundation",
      "SAMA",
      "National YunLin University of Science & Technology, Taiwan",
      "IIT Delhi",
      "Dassault Systems Foundation, Mumbai (Chemistry Project)",
      "Contrivation Labs Pvt. Ltd.",
      "Andhra pradesh state skill development corporation"
    ]
  },
  {
    "year": "2017-18",
    "items": [
      "People Care Business Solutions Pvt. Ltd.",
      "Ming Chi University, TAIWAN",
      "Asia University",
      "Aiotomate Technologies, Bangalore",
      "SmartBridge Educational services, Hyderabad",
      "Study Springs pvt. Ltd., Salem",
      "TechnoConfluence Intelligent Engineering Services, Bangalore",
      "Study Owl Education Pvt. Ltd."
    ]
  },
  {
    "year": "2016-17",
    "items": [
      "CYIENT LIMITED, Hyderabad",
      "SAP University Alliances, Germany",
      "Aspiring Minds Assesment Pvt. Ltd. Haryana, Gurgaon",
      "International Institute of Business Analysis (IIBA)",
      "ARM University",
      "ICAR-IIMR (Indian Institute of Millers Research)",
      "BEPL Blend Steel Engineering Pvt. Ltd.",
      "RedHat India Pvt. Ltd."
    ]
  },
  {
    "year": "2015-16",
    "items": [
      "Tata Consultancy Services Limited. (TCS), Mumbai",
      "National Association of Software and Service Companies (NASSCOM), New Delhi",
      "HR Services to Holy Mary Institute of Technology and Science, Hyderabad",
      "NPTEL",
      "National Stock Exchange of India Limited (NSE)",
      "e-Scrappy Recyclers, Bangalore",
      "Tech Meet, Vishakapatnam",
      "Oracle Support Services",
      "Chandra Mohan Nursing Home, Madanapalle",
      "AIT (Accendre Info. Technologies Pvt. Ltd.), Hyderabad",
      "SIEMENS Center of Excellence and Technical Skill Development Institutions, Hyderabad",
      "EDS Technologies Pvt. Ltd., Bangalore",
      "ECIL-ECIT, (A Govt. of India Enterprise), Hyderabad",
      "National Entrepreneurship Network, Bangalore"
    ]
  },
  {
    "year": "2014-15",
    "items": [
      "NSIC Technical Services Center (National Small Industries Corporation), Hyderabad [Govt. of India]",
      "APSSDC",
      "Revolve Engineers Pvt. Ltd., Hyderabad",
      "Annapurna Electronics & Services Pvt. Ltd., Hyderabad",
      "Central Institute of Tool Design (CITD), Hyderabad"
    ]
  },
  {
    "year": "2013-14",
    "items": [
      "IIT - Hyderabad",
      "Kriatec Services Pvt. Ltd., Chennai",
      "Wright State University College of Engineering & Computer Science, USA",
      "Paramount Publishing House, Hyderabad",
      "Kruthi Computer Services Pvt. Ltd.",
      "Confederation of Indian Industry (CII), New Delhi"
    ]
  },
  {
    "year": "2012-13",
    "items": [
      "NASSCOM, New Delhi",
      "Front Line Electronics Pvt. Ltd., Salem",
      "Altair Engineering",
      "Kaizen Green Technliogy Pvt. Ltd.",
      "UNISTRING Tech Sliutions Pvt. Ltd.",
      "VI-Micro Systems Pvt. Ltd.",
      "KKM Soft Pvt. Ltd. , Hyderabad",
      "NIST Institute Pvt. Ltd., Chennai",
      "Lab Tech Electronics, Chennai",
      "Unisys Innovation Labs India Pvt. Ltd.",
      "Monster.com India Pvt. Ltd.",
      "Oracle Academy",
      "Bharat Sanchar Nigam Limited (BSNL), Bangalore",
      "Pushkala Technliogies Pvt. Ltd., Bangalore",
      "National Aerospace Laboratories (NAL), Bangalore",
      "NAFEMS - UK",
      "Surface Improvements (India) Pvt. Ltd., Bangalore",
      "FELIP ( Forum for Enabling Learning Initiatives & Placement in Engineering Clileges-Bangalore",
      "EIPL (Enmax Engineering India Pvt. Ltd.), Hyderabad",
      "Enmax EPC (EEPL Pvt. Ltd.), Hyderabad"
    ]
  },
  {
    "year": "2011-12",
    "items": [
      "Engineers CADD Center (P) Ltd. Tirupathi",
      "IBM Private Limited."
    ]
  },
  {
    "year": "2007-2008",
    "items": [
      "SSS CAD Center , Tirupathi",
      "IMS Global Pvt. Ltd., Bangalore",
      "Oracle India Pvt. Ltd."
    ]
  }
];

export const iiicActivities: IiicActivity[] = [
  {
    "text": "A Career Awareness Program on “Career Opportunities in Japan: Culture Tradition & Language” was organized by Department of Mechanical Engineering in association with the MITS Industry-Institute Interaction Cell (IIIC) on 21st September 2026.",
    "href": "https://mits.ac.in/assets/pdf/mech/Career Opportunities in Japan Culture Tradition Language.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Industrial Visit to Amara Raja Skill Development Centre-I&II (ARSDC), Chittoor, Andhra Pradesh was organised by Department of Electrical & Electronics Engineering in Association with IIIC and ISTE Chapter, MITS on 08th September 2026.",
    "href": "https://mits.ac.in/assets/pdf/eee/Report%20on%20II%20Year%20EEE%20Mech%20visit%20to%20Vikram%20Solar%20Power%20Plant.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Industrial Visit to Vikram Solar Power Plant, Kosuvaripalle, Andhra Pradesh was organized by Department of Electrical & Electronics Engineering in Association with IIIC and ISTE Chapter, MITS 01st August 2026.",
    "href": "https://mits.ac.in/assets/pdf/eee/Report on II Year EEE Mech visit to Vikram Solar Power Plant.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Industrial Visit to “Bhuwalka Castings & Forging Pvt. Ltd., & Vishwakarma Refractories Pvt. Ltd” was organized by Industrial Relation Cell in Association with IIIC, IIC, MITS on 07th May 2026.",
    "href": "https://mits.ac.in/assets/pdf/ece/Bhuwalka Castings &amp; Forging Pvt. Ltd., &amp; Vishwakarma Refractories Pvt. Ltd.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Industrial Visit to “Kajaria Ceramics Limited” was organized by Industrial Relation Cell In Association with the Department of Electronics & Communication Engineering, IIIC, IIC, on 30th April 2026.",
    "href": "https://mits.ac.in/assets/pdf/ece/Kajaria Ceramics Limited.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An One Week Hands on Workshop cum Hackathon on “Ethical Hacking and Cyber Security (Level-4, 5 and 6)” was organized by Department of Computer Science & Engineering - Cyber Security In association with Industry Institute Interaction Cell and ISTE Student Chapter from 02nd to 21st March 2026.",
    "href": "https://mits.ac.in/assets/pdf/cse/Ethical Hacking and Cyber Security (Level-4, 5 and 6).pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Industry Insight on “Energy Conservation – Watt You Save Matters!” was organised by Department of Electrical and Electronics Engineering In Association with IEI Students’ Chapter and IIIC on 03rd February 2026.",
    "href": "https://mits.ac.in/assets/pdf/eee/Report on Industry Insight on Energy Conseravtion - Watt You Save Matters.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Industry Perspective Session on “Understanding EHT Substations: From Generation to Grid” was organised by Department of Electrical and Electronics Engineering In Association with IEEE Student Branch Chapter, PES Student Branch Chapter and IIIC on 03rd February 2026.",
    "href": "https://mits.ac.in/assets/pdf/eee/Report on Industry Perspective Session on Understanding EHT Substations - From Generation to Grid.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Industrial Visit to Vikram Solar Power Plant, Kosuvaripalle, Andhra Pradesh was organised by Department of Electrical & Electronics Engineering in Association with IIIC and ISTE Chapter, MITS on 09th January 2026.",
    "href": "https://mits.ac.in/assets/pdf/eee/Report on II Year EEE Industrial visit to Vikram Solar Power Plant.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A Guest Lecture on \"Hydraulics\" was organized by Department of Civil Engineering in Association with ASCE Student Chapter in Collaboration with IIIC on 6th January 2026.",
    "href": "https://mits.ac.in/assets/pdf/civil/Hydraulics.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A One Week Hands on Workshop cum Hackathon on “Ethical Hacking and Cyber Security (Level-1)” was organized by Department of Computer Science & Engineering - Cyber Security In association with Industry Institute Interaction Cell and ISTE Student Chapter from 29th December to 04th January 2026.",
    "href": "https://mits.ac.in/assets/pdf/cse/Ethical Hacking and Cyber Security Level-1.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Industrial Visit to “400 kV/220 kV Substation, Kalikiri” was organised by Department of Electrical and Electronics Engineering In Association with IIIC and ISTE Chapter, MITS on 03rd January 2026.",
    "href": "https://mits.ac.in/assets/pdf/eee/Report on III Year Industrial Visit to 400 kV to 220 kV Substation, Kalikiri-min.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Industrial Visit to “33 kV/11 kV Substation, Madanapalle” was organised by Department of Electrical and Electronics Engineering In Association with IIIC and ISTE Chapter on 02nd November 2025.",
    "href": "https://mits.ac.in/assets/pdf/eee/33 kV 11 kV Substation.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Industrial Visit to “Sathanur Hydro-Electric Power Station” was organized by Department of Electrical & Electronics Engineering In Association with IIIC and ISTE Chapter, MITS on 17th October 2025.",
    "href": "https://mits.ac.in/assets/pdf/eee/Sathanur Hydro-Electric Power Station.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An outreach event “Exploring Technology – ATAL Outreach Program” was organized by IEEE Communication Society Hyderabad Section, MITS IEEE Student Branch, and MITS IEEE Communication Society & MITS IIIC on 15th October.",
    "href": "https://mits.ac.in/assets/pdf/eee/Exploring Technology - ATAL Outreach Program.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A Guest Lecture on “Opportunities for Mechanical Engineers in Additive Manufacturing” was organized by Department of Mechanical Engineering In association with Industry Institute Interaction Cell (IIIC) on 08th October 2025.",
    "href": "https://mits.ac.in/assets/pdf/mech/Opportunities for Mechanical Engineers in Additive Manufacturing.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Online Guest Lecture on \"PCB Altium Software\" was organized by Department of Electronics & Communication Engineering in association with IEEE SB of MITS and MITS IIIC on 04th August 2025.",
    "href": "https://mits.ac.in/assets/pdf/ece/PCB Altium Software.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Alumni Guest Lecture on \"From the Classroom to the Workforce: Charting Your Path in Electrical Engineering,\" was organized by the Department of Electrical & Electronics Engineering in association with MITSAWA & IIIC, on 08th May 2025.",
    "href": "https://mits.ac.in/assets/pdf/eee/Alumni guest lecture Report &amp; Feedback.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A Workshop on “Codestrom 1.0, 5-day Event Comprising A 3-day Workshop Om Mern Stack And A 2-day Hackathon” was organized by Department of Computer Science & Technology In Association with IIIC, MITS & Careersmith Edutech Pvt. Ltd & Codeon Technologies Pvt Ltd & Nafter Web Technologies from 21st to 25th April 2025.",
    "href": "https://mits.ac.in/assets/pdf/cst/Codestrom 1.0 5-day Event Comprising A 3-day Workshop Om Mern Stack And A 2-day Hackathon.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A Workshop on \"AI & ML Product Development Bootcamp: From Idea to Deployment\" was organized by Department of Computer Science and Engineering - Artificial Intelligence & Machine Learning in association with Industry Institute Interaction Cell (IIIC) from 3rd to 5th March 2025.",
    "href": "https://mits.ac.in/assets/pdf/aids/AI &amp; ML Product Development Bootcamp From Idea to Deployment.pdf",
    "linkLabel": "Click here for Event Details"
  },
  {
    "text": "A One day Awareness Program for Teaching and Non-Teaching Staff on \"Enhancing the Understanding and Utilization of MathWorks Tools Across Various Departments\" was organized by Department of Electronics and Communication Engineering in association with IIIC on 04th March 2025.",
    "href": "https://mits.ac.in/assets/pdf/ece/Enhancing the Understanding and Utilization of MathWorks Tools Across Various Departments.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A Hands on Workshop \"Ethical Hacking and Cyber Security (Level-1)\" was organized by Computer Science & Engineering - Cyber Security in association with IIIC-MITS and Entrepreneurship Development Cell from 10th to 15th February 2025.",
    "href": "https://mits.ac.in/assets/pdf/cse/Ethical Hacking and Cyber Security (Level-1).pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An “Industry visit towards Internship and Placement opportunities for students” at Sricity, Tada, Andhra Pradesh was organised by Department of Electrical & Electronics Engineering in association with Industry Institute Interaction Cell (IIIC) on 06th February 2025.",
    "href": "https://mits.ac.in/assets/pdf/eee/Industry visit towards Internship and Placement opportunities for students.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A 3-Days Hands on Workshop on \"Web and Mobile App Development: From Basics to Deployment\" was organized by Department of Computer Science and Engineering - Artificial Intelligence & Machine Learning in association with Industry Institute Interaction Cell (IIIC) from 27th to 29th January 2025.",
    "href": "https://mits.ac.in/assets/pdf/aids/Web%20and%20Mobile%20App%20Development%20From%20Basics%20to%20Deployment.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A One-Day Industrial Visit to “Microsoft Bangalore” was organised by Department of Computer Science & Technology in Association with EduTantr & IIIC on 25th January 2025.",
    "href": "https://mits.ac.in/assets/pdf/cst/Microsoft Bangalore 25-01-2025.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A One Day Workshop Program on \"Artificial Intelligence (AI)\" was organised by Department of Computer Science & Technology in association with IIIC, MITS & VDT Edu Tantr Ventures Pvt. Ltd, Bengaluru, Karnataka on 22nd January 2025.",
    "href": "https://mits.ac.in/assets/pdf/cst/Artificial Intelligence (AI)-min.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A One Day Workshop Program on \"Virtual Reality: Digital Twin Technology\" & \"MoU Signing Ceremony\" with VDT EDU TANTR Ventures Pvt. Ltd was organised by Department of Computer Science & Technology In Collaboration with IIIC & AI, MITS on 21st January 2025.",
    "href": "https://mits.ac.in/assets/pdf/cst/Virtual Reality Digital Twin Technology.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A MoU Exchange between Department of Computer Science & Engineering - Cyber Security & Sabari Gateway Software Solutions Pvt Ltd, Coimbatore was organized by Department of Computer Science & Engineering -Cyber Security in Association with Industry Institute Interaction Cell (IIIC) on 09th December 2024.",
    "href": "https://mits.ac.in/assets/pdf/cse/Sabari Gateway Software Solutions Pvt Ltd.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Alumni interaction on “Creative Corner: Alumni Stories, Insights and Achievements” was organised by Department of Computer Science & Technology In association with MITS AWA & IIIC on 07th December 2024.",
    "href": "https://mits.ac.in/assets/pdf/cst/Creative Corner Alumni Stories, Insights and Achievements.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A Hands on Session on “GenAI Tools and App Development” was organised by Department of Computer Science and Engineering - Artificial Intelligence & Mechanical Engineering in association with Industry Institute Interaction Cell (IIIC) on 02nd December 2024.",
    "href": "https://mits.ac.in/assets/pdf/aids/GenAI Tools and App Development.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An \"Industry Collaboration – Workshop on Data Science\" was organized by Department of Computer Science & Engineering- Artificial Intelligence & Mechanical Engineering in Association with IIIC - MITS on 27th November 2024.",
    "href": "https://mits.ac.in/assets/pdf/aids/Industry Collaboration Workshop on Data Science.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A Guest Lecture on “Gate and All PSU Career Guidance Program for Engineering Students” was organised by Department of Electrical & Electronics Engineering in association with IEEE & IIIC on 19th November 2024.",
    "href": "https://mits.ac.in/assets/pdf/eee/Gate and All PSU Career Guidance Program for Engineering Students.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An One Week Online Faculty Development Programme on “Recent Trends and Predictions in Cyber Security” was organised by Department of Computer Science & Technology In Association with IIIC from 11th to 16th November 2024.",
    "href": "https://mits.ac.in/assets/pdf/cst/Recent Trends and Predictions in Cyber Security.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A Field Visit for Laying and Joining of Underground Cables at MITS was organised by Department of Electrical & Electronics Engineering in association with IIIC from 08th to 12th November 2024.",
    "href": "https://mits.ac.in/assets/pdf/eee/The Laying and Joining of Underground Cables at MITS.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A Professional Talk on “Quality Control in Construction” was organized by Builders Club in Association with ASCE MITS Students Chapter, IIIC and SAC on 30th October 2024.",
    "href": "https://mits.ac.in/assets/pdf/civil/Quality Control in Construction.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A Three-Days Workshop on \"Cyber Security Essentials & Digital Defense\" was organised by Department of Computer Science & Engineering - Cyber Security in collaboration with MITS IEEE Student Chapter, IEEE SMC and IIIC from 22nd to 24th October 2024.",
    "href": "https://mits.ac.in/assets/pdf/cse/Cyber Security Essentials &amp; Digital Defense.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A One Day Workshop on “Being Career-ready in the New AI-Driven World” was organized by Department of Mechanical Engineering In Association With IIIC, MITS on 17th October 2024.",
    "href": "https://mits.ac.in/assets/pdf/mech/Being Career-ready in the New AI-Driven World.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A Professional Talk on \"Role of Civil Engineer at the Construction Site\" was organized by ASCE MITS Student Chapter in association with Department of Civil Engineering and Industry Institute Interaction Cell (IIIC) on 10th October 2024.",
    "href": "https://mits.ac.in/assets/pdf/civil/Role of Civil Engineer at the Construction Site.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A One-day Alumni Hands-on Workshop on “Python Fundamentals for Automation: From Scripts to Solutions” was organised by Department of Computer Science & Technology In association with IIIC & AWA, MITS on 14th September 2024.",
    "href": "https://mits.ac.in/assets/pdf/cst/Python Fundamentals for Automation From Scripts to Solutions.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A One Day Alumni Guest lecture on “Navigating your Career Path: Strategies for Success” was organised by Department of Computer Science & Technology In association with IIIC on 08th August 2024.",
    "href": "https://mits.ac.in/assets/pdf/cst/Navigating your Career Path Strategies for Success.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Online Guest Lecture on “Deep Learning Techniques for Data Mining, Predictive Maintenance” was organised by Department of Computer Science & Technology In association with IEEE, IIIC & IIC on 03rd August 2024.",
    "href": "https://mits.ac.in/assets/pdf/cst/Deep Learning Techniques for Data Mining, Predictive Maintenance.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Alumni Students Interaction was organised by Department of Electrical & Electronics Engineering in association with IIIC and MITSAWA on 07th August 2024.",
    "href": "https://mits.ac.in/assets/pdf/eee/Alumni-Students Interaction.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Alumni Guest Lecture on “Opportunities for EEE Students in Core companies” was organized by Department of Electrical & Electronics Engineering in association with IIIC and MITSAWA on 06th August 2024.",
    "href": "https://mits.ac.in/assets/pdf/eee/Opportunities for EEE Students in Core companies.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A Webinar on “Emerging Trends in Automobile Engineering” was organized by Department of Mechanical Engineering In Association with IIIC- MITS on 30th April 2024.",
    "href": "https://mits.ac.in/assets/pdf/mech/Emerging Trends in Automobile Engineering.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "\"World Water Day\" was organized by Department of Civil Engineering in association with ASCE MITS Student Chapter, IIIC, MITS-NCC & MITS-NSS on 22nd March 2024.",
    "href": "https://mits.ac.in/assets/pdf/civil/World Water Day-2024.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A Workshop on \"Designing Your Digital Presence\" was organised By Department of Computer Science & Engineering - Artificial Intelligence in Association with IIC & IIIC - MITS on 22nd March 2024.",
    "href": "https://mits.ac.in/assets/pdf/aids/Designing Your Digital Presence.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A One Day Guest Lecture on “Spark for Data Analysts: Transforming Big Data into Actionable Insights” was organised by Department of Computer Science & Technology In association with IIIC on 19th March 2024.",
    "href": "https://mits.ac.in/assets/pdf/cst/Spark for Data Analysts Transforming Big Data into Actionable Insights.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Industrial Visit to Lepakshi Temple was organized by Department of Civil Engineering In association with Industry Institute Interaction Cell (IIIC) on 02 March 2024.",
    "href": "https://mits.ac.in/assets/pdf/civil/Industrial Visit to Lepakshi Temple.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A Webinar on \"Power BI End to End Project for Beginners\" was organised by Department of Computer Science & Engineering - Artificial Intelligence in Association with IEEE & IIIC - MITS on 01st March 2024.",
    "href": "https://mits.ac.in/assets/pdf/cse/Power BI End to End Project for Beginners.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Alumni Guest Lecture on “Career Opportunities for Young Graduates in the Energy Sector” was organised by Department of Electrical & Electronics Engineering in association with IIIC and MITSAWA on 29th February 2024.",
    "href": "https://mits.ac.in/assets/pdf/eee/Career Opportunities for Young Graduates in the Energy Sector.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Industrial Visit to “Sathanur Hydro-Electric Power Station” was organised by Department of Electrical & Electronics Engineering In Association with IIIC, IEEE and ISTE Chapter for II Year students on 23rd February 2024.",
    "href": "https://mits.ac.in/assets/pdf/eee/Report on II Year Industrial Visit to Sathanur Power House.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Industrial Visit to “Sathanur Hydro-Electric Power Station” was organised by Department of Electrical & Electronics Engineering In Association with IIIC, IEEE and ISTE Chapter for II Year students on 23rd February 2024.",
    "href": "https://mits.ac.in/assets/pdf/eee/Report on II Year Industrial Visit to Sathanur Power House.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Industrial Visit to “Sathanur Hydro-Electric Power Station” was organised by Department of Electrical & Electronics Engineering In Association with IIIC, IEEE and ISTE Chapter for III Year students on 23rd February 2024.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Alumni Guest Lecture on “SRE and Data Science Opportunities in USA” was organised by Department of Electrical & Electronics Engineering on 02nd February 2024.",
    "href": "https://mits.ac.in/assets/pdf/eee/SRE and Data Science Opportunities in USA.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Alumni Guest Lecture on “Career Guidance to Core Opportunities” was organised by Department of Electrical & Electronics Engineering In Association with IIIC & Alumni Welfare Association, MITS-Madanapalle on 28th November 2023.",
    "href": "https://mits.ac.in/assets/pdf/eee/Career Guidance to Core Opportunities.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Industrial Expert Lecture on Project Management office Toolkit in JIRA Environment was organized by Department of Computer Science & Technology on 15th November 2023.",
    "href": "https://mits.ac.in/assets/pdf/cst/17. Guestlecturereport-15.11.2023.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Alumni Guest Lecture on “Role of Performance tester: Sharing updates on current opportunities” was organized by Department of Computer Science & Technology In association with IIIC on 26th October 2023.",
    "href": "https://mits.ac.in/assets/pdf/cst/Role of Performance tester-Sharing updates on current opportunities.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A One-Day Guest Lecture on Converting Innovation into a Startup was organized by Department of Computer Science & Technology on 29th September 2023.",
    "href": "https://mits.ac.in/assets/pdf/cst/12. Report on innovationintostartup-29.09.2023.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An Alumni Guest Lecture on “Role of Performance tester: Sharing updates on current opportunities” was organized by Department of Computer Science & Technology In association with IIIC on 26th October 2023.",
    "href": "https://mits.ac.in/assets/pdf/cst/Role of Performance tester-Sharing updates on current opportunities.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A Guest Lecture on “Maximizing opportunities in Innovation Development” was organized by Department of Computer Science & Technology in Association With IIIC on 21st June 2023.",
    "href": "https://mits.ac.in/assets/pdf/cst/29. REPORT ON MAXMIZING OPPORTUINITIES ON INNOVATION DEVELOPMENT 21.06.2023.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A Guest Lecture on \"Mastering Change from Campus to Workplace\" was organized by Department of Computer Science & Technology in Association With IIIC on 17th June 2023.",
    "href": "https://mits.ac.in/assets/pdf/cst/28. REPORT ON MASTERING CHANGE FROM CAMPUS TO WORKPLACE 17.06.2023.pdf",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "One day Workshop on “Web Technologies” organized by Industry-Institute Interaction Cell on 13th November 2018.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A Workshop on Engineering Technologies and Opportunities for B.Tech I Year Students organized by IIIC Cell on 7th September 2018.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "Motivation & Personality Development Programme for I B.Tech Students organized by IIIC Cell on 2-4 April 2018.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A Workshop on \"Entrepreneurship & Research Proposals to various Funding Agencies\" organized by EDC cell & IIIC cell on 15-11-2017.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "Motivation & Personality Development Program for I B.Tech Students organized by IIIC Cell on 24th October 2017.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A Seminar on \"Entrepreneurship and Self Development\" organized by EDC Cell & IIIC Cell on 19th September 2017.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "Dr. Ch Rama Prasada Rao, Dean, Industry Institute Interaction Cell, Dr. R. Vara Prasad, Asst Professor & Coordinator ED Cell, Department of Management Studies & Mr. J. Saravanababu, Senior Placement Officer, attended All India Technical and Management Council (AITMC) organized 6th Annual Global Summit 2017 (In Association with: AICTE, Ministry of HRD, Govt. of India & Ministry of Labour& Employment, Govt. of India) on 14th June 2017 at New Delhi.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "Awareness Program on \"Industry Expectations from Engineering Students\" by R.Gayathri for B.Tech III Year students organised by IIIC Cell on 31st March 2017.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A Guest Lecture on Campus to Corporate by Dr. Madhu Rani for Ist B.Tech & MBA Students organised by IIIC cell on 28th March 2017.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "Dr. Ch. Rama Prasada Rao, Dean IIIC, visited Southern Region Farm Machinery Training & Testing Institute (SRFMTTI), Garladinne on 8th July 2016.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "Dr. Ch. Rama Prasada Rao, Dean IIIC, attended a workshop on “Workshop for trainers on COE & t-SDI Lab Orientation and Positioning” organized by APSSDC - Siemens Skill Development Clusters at The Plaza Hotel, Hyderabad on 18th April 2016.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "Dr. I. Gopinath, Associate Dean, Industry Institute Interaction Cell, MITS and Shri. Venu Choudary, OSD, MITS have attended a Workshop on ‘Employment, Entrepreneurship and Research opportunities in India’ organized by Society for Advancement of Aerospace Propulsion (SAAP), at Bangalore on 2nd and 3rd April 2016.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "Dr. Ch. Rama Prasada Rao, Dean, IIIC and Dr. I. Gopinath, Associate Dean, IIIC visited Hyderabad during 16th to 18th December, 2015 to visit Indian School of Business (ISB) and some other companies in connection with Industry, Institutional Interaction.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "Dr. Ch. Rama Prasada Rao, Dean, IIIC, attended a one-day workshop on “Awareness on Various programs for Foreign University Collaborations” was Organized at JNTUA, Ananthapuramu on 16th May 2015.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "Dr. I. Gopinath, participated in Newton Bhabha Innovation Workshop, Industry-Academia Engagement, Organized by FICCI and Royal Academy Engineering, U.K on 12 - 13 May 2015.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "Dr. Ch. Rama Prasada Rao, Dean, IIIC, Dr. I. Gopinath, Associate Dean, IIIC, Mr. Balaraju, Associate Professor, Dept. of ME and Mr. Srinivasaraju, Assistant Professor, Dept. of EEE visited UltraTech Cements Limited-Andhra Pradesh Cement Works, Tadipatri on 9th March, 2015.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "The Department of Mechanical Engineering & IIIC Cell organized a CEO Meet Session \"Careers in Manufacturing Sector & Journey from College to Corporate\" to the Third year Mechanical and EEE department students with Mr. Galla Vijay Naidu – Chief Executive Officer of Mangal Industries Ltd which is a subsidiary of Amara Raja Group held on 30 January 2015.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "Dr. I. Gopinath, Associate Dean, IIIC along with Dr. P. Sree Brahmanandam, Professor - Department of Physics visited & interacted with Director ISAC ISRO Bangalore on 2nd June 2015.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "A Two-Day \"Faculty Development Program on Teaching an Online Course, using Moodle (Modular Object-Oriented Dynamic Learning Environment) LMS\" was organized at MITS, Madanapalle during 19th & 20th December 2014. Dr. K. Srinivas, Professor ICT, National University of Educational Planning and Administration (NUEPA), New Delhi was the resource person.",
    "href": "https://mits.ac.in/assets/pdf/assoc/Moodle%20LMS.pdf",
    "linkLabel": "For Report on Event Click Here"
  },
  {
    "text": "Dr. Ch. Rama Prasada Rao,Dean-IIIC along with Dr. I. Gopinath, Associate Dean-IIIC, Prof. N.S. Kameswara Rao, Professor & Head, Dept. of Chemistry, Dr. Suryanaryana Raju, Professor, Dept. of Mechanical and Mr. A. Srinivasulu, Dept. of EEE visited Central Institute of Tool Design (CITD), Hyderabad on 21st November 2014.",
    "href": "https://mits.ac.in/assets/pdf/assoc/CITD%20(1).pdf",
    "linkLabel": "For Report on Event Click Here"
  },
  {
    "text": "Dr. Ch. Rama Prasada Rao, Professor & Dean, IIIC Visited Hyderabad during 8-9-2014 to 12-9-2014 for Industry Interaction.",
    "href": "https://mits.ac.in/assets/pdf/assoc/Interaction%20with%20Industry%20Personnel%20(1).pdf",
    "linkLabel": "For Report On Event Click Here"
  },
  {
    "text": "Dr. Ch. Rama Prasada Rao - Professor & Dean, Industry Institute Interaction Cell attended CII-Southern Region organized HR Summit in Hyderabad during 8-9, October, 2014.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "Dr. Ch. Rama Prasada Rao - Professor & Dean, Industry Institute Interaction Cell have participated in the British Columbia – India Education and Innovation Meet organized by British Columbia (BC) at Bangalore on 15th Oct, 2014.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "The Guest lecture from INDUSTRY Resources on \"Interview Skills\" by Mr. Pavankumar, Head – Wave Crest, Hyderabad & Mr. K. Radhakrishna, Process Consultant – HP Global Soft, Hyderabad organized by IIIC on 13th September 2014.",
    "href": "https://mits.ac.in/assets/pdf/assoc/INDUSTRY%20Resources%20on%20Interview%20Skills%20(1).pdf",
    "linkLabel": "For Report on Event Click Here"
  },
  {
    "text": "One day workshop on “Career Guidance for Engineering Graduates” conducted on 8, Dec, 2014 for all first year B.Tech students under TEQIP-II. The Resource Person was Sri. V. Phanikumar, General Manager, NCS Corporation, Pondicherry, Tamilnadu, India. &lt;",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "The Expert Lecture on “Starting a Knowledge based Enterprise – the Needs of an Entrepreneur” by Mr. G. Ajitha Prabu, Director, Kriatec Services Pvt Ltd, Chennai on 26 August, 2014.",
    "href": "https://mits.ac.in/assets/pdf/assoc/Starting%20Knowledge.pdf",
    "linkLabel": "For Report on Event Click Here"
  },
  {
    "text": "The training program on Introductory Training on ANSYS DESIGN MODELER was conducted by the Department of Mechanical Engineering on 10th March 2014.It is an Industry Institute Interaction Program organized under TEQIP-II.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "The Department of Electrical & Electronics Engineering of Madanapalle institute of Technology & Science has organized a Two Day Workshop for Students on \"EARTHING TECHNOLOGIES IN POWER SYSTEMS\" under IIIC through TEQIP-II by Mr. H. Jayakumar, Director - Technical Galaxy Earthling Electrodes (P) Ltd, Retd. Joint Director – CPRI Bangalore during 06-07, March 2014.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "The NAFEMS – CAE Certification program (phase 1) was completed successfully on May 6th to 8th 2013.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "The one-day Expert Lecture was organized by the Dept. of Mechanical Engineering in coordination with the Industry Institute Interactive Cell (IIIC), under TEQIP-II, at Madanapalle Institute of Technology and Science, Madanapalle on 21/09/2012. Mr. G. Narasimham, Vice President, Cheema Boilers Ltd., Chandigarh, was the Resource Person for this Expert Lecture.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An expert lecture by Dr. N. S. Reddy, Professor in GYEONSANG National university, JINJU, Korea on “Artificial Neural Networks” was organized.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  },
  {
    "text": "An expert lecture by Mr. Sudheer Reddy, Senior Supplier Quality Engineer in UTC - Aeroscope Systems, Bangalore on Trends in Aerospace Industry and career scope for Mechanical Engineering graduates was organized.",
    "href": "",
    "linkLabel": "Click here for Report on Event"
  }
];

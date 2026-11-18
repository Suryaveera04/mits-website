// SDG (Sustainable Development Goals) Cell Data
// Verbatim synchronized from official source: https://mits.ac.in/sdg-cell

export interface SdgGoalItem {
  goal: number;
  title: string;
  url: string;
  img: string;
}

export interface PdfDocument {
  title: string;
  url: string;
}

export interface CommitteeMember {
  sno: number;
  name: string;
  designation: string;
}

export interface CoordinatorContact {
  coordinator: string;
  designation: string;
  department: string;
  role: string;
  address: string[];
  phone: string;
  email: string;
}

export const sdgAboutData = {
  "title": "Sustainable Development Goals (SDG) Cell",
  "intro1": "MITS has constituted the SDG cell to match its academic activities with the United Nations 2030 agenda for sustainable developments. This agenda consists of 3 broad elements a. economic growth, b. social inclusion, c. environmental protection which are elaborated into 17 objectives (or goals).",
  "intro2": "Attainment of SDGs will sensitize all stakeholders of MITS Including its Students, and Staff towards various aspects required in the Community for the overall Development of the Society.",
  "posterImage": "/images/sdg/sdg_poster.png",
  "vision": "To harness the prowess of multidisciplinary synergy, for a sustainable and socio-economic development of the nation.",
  "mission": "To foster a culture of research and societal up-liftment programs for a greener, healthier and friendly environment.",
  "sustainabilityGoals": "Societal upliftment, Natural resource conservation and waste management for a safer and greener ecosystem.",
  "sustainabilityInitiatives": "Development of energy efficient devices, programs on water conservation and work on green concepts like circular economy for waste management."
};

export const sdgRankings2027: SdgGoalItem[] = [
  {
    "goal": 1,
    "title": "No Poverty",
    "url": "https://mits.ac.in/sdg1-2027",
    "img": "/images/sdg/1E-WEB-Goal-01.png"
  },
  {
    "goal": 2,
    "title": "Zero Hunger",
    "url": "https://mits.ac.in/sdg2-2027",
    "img": "/images/sdg/1E-WEB-Goal-02.png"
  },
  {
    "goal": 3,
    "title": "Good Health and Well Being",
    "url": "https://mits.ac.in/sdg3-2027",
    "img": "/images/sdg/1E-WEB-Goal-03.png"
  },
  {
    "goal": 4,
    "title": "Quality Education",
    "url": "https://mits.ac.in/sdg4-2027",
    "img": "/images/sdg/1E-WEB-Goal-04.png"
  },
  {
    "goal": 5,
    "title": "Gender Equality",
    "url": "https://mits.ac.in/sdg5-2027",
    "img": "/images/sdg/1E-WEB-Goal-05.png"
  },
  {
    "goal": 6,
    "title": "Clean Water and Sanitation",
    "url": "https://mits.ac.in/sdg6-2027",
    "img": "/images/sdg/1E-WEB-Goal-06.png"
  },
  {
    "goal": 7,
    "title": "Affordable and Clean Energy",
    "url": "https://mits.ac.in/sdg7-2027",
    "img": "/images/sdg/1E-WEB-Goal-07.png"
  },
  {
    "goal": 8,
    "title": "Decent Work and Economic Growth",
    "url": "https://mits.ac.in/sdg8-2027",
    "img": "/images/sdg/1E-WEB-Goal-08.png"
  },
  {
    "goal": 9,
    "title": "Industry, Innovation and Infrastructure",
    "url": "https://mits.ac.in/sdg9-2027",
    "img": "/images/sdg/1E-WEB-Goal-09.png"
  },
  {
    "goal": 10,
    "title": "Reduced Inequalities",
    "url": "https://mits.ac.in/sdg10-2027",
    "img": "/images/sdg/1E-WEB-Goal-10.png"
  },
  {
    "goal": 11,
    "title": "Sustainable Cities and Communities",
    "url": "https://mits.ac.in/sdg11-2027",
    "img": "/images/sdg/1E-WEB-Goal-11.png"
  },
  {
    "goal": 12,
    "title": "Responsible Consumption and Production",
    "url": "https://mits.ac.in/sdg12-2027",
    "img": "/images/sdg/1E-WEB-Goal-12.png"
  },
  {
    "goal": 13,
    "title": "Climate Action",
    "url": "https://mits.ac.in/sdg13-2027",
    "img": "/images/sdg/1E-WEB-Goal-13.png"
  },
  {
    "goal": 14,
    "title": "Life below Water",
    "url": "https://mits.ac.in/sdg14-2027",
    "img": "/images/sdg/1E-WEB-Goal-14.png"
  },
  {
    "goal": 15,
    "title": "Life on Land",
    "url": "https://mits.ac.in/sdg15-2027",
    "img": "/images/sdg/1E-WEB-Goal-15.png"
  },
  {
    "goal": 16,
    "title": "Peace, Justice and Strong Institutions",
    "url": "https://mits.ac.in/sdg16-2027",
    "img": "/images/sdg/1E-WEB-Goal-16.png"
  },
  {
    "goal": 17,
    "title": "Partnership for the Goals",
    "url": "https://mits.ac.in/sdg17-2027",
    "img": "/images/sdg/1E-WEB-Goal-17.png"
  }
];

export const sdgRankings2025: SdgGoalItem[] = [
  {
    "goal": 1,
    "title": "No Poverty",
    "url": "https://mits.ac.in/sdg1",
    "img": "/images/sdg/1E-WEB-Goal-01.png"
  },
  {
    "goal": 2,
    "title": "Zero Hunger",
    "url": "https://mits.ac.in/sdg2",
    "img": "/images/sdg/1E-WEB-Goal-02.png"
  },
  {
    "goal": 3,
    "title": "Good Health and Well Being",
    "url": "https://mits.ac.in/sdg3",
    "img": "/images/sdg/1E-WEB-Goal-03.png"
  },
  {
    "goal": 4,
    "title": "Quality Education",
    "url": "https://mits.ac.in/sdg4",
    "img": "/images/sdg/1E-WEB-Goal-04.png"
  },
  {
    "goal": 5,
    "title": "Gender Equality",
    "url": "https://mits.ac.in/sdg5",
    "img": "/images/sdg/1E-WEB-Goal-05.png"
  },
  {
    "goal": 6,
    "title": "Clean Water and Sanitation",
    "url": "https://mits.ac.in/sdg6",
    "img": "/images/sdg/1E-WEB-Goal-06.png"
  },
  {
    "goal": 7,
    "title": "Affordable and Clean Energy",
    "url": "https://mits.ac.in/sdg7",
    "img": "/images/sdg/1E-WEB-Goal-07.png"
  },
  {
    "goal": 8,
    "title": "Decent Work and Economic Growth",
    "url": "https://mits.ac.in/sdg8",
    "img": "/images/sdg/1E-WEB-Goal-08.png"
  },
  {
    "goal": 9,
    "title": "Industry, Innovation and Infrastructure",
    "url": "https://mits.ac.in/sdg9",
    "img": "/images/sdg/1E-WEB-Goal-09.png"
  },
  {
    "goal": 10,
    "title": "Reduced Inequalities",
    "url": "https://mits.ac.in/sdg10",
    "img": "/images/sdg/1E-WEB-Goal-10.png"
  },
  {
    "goal": 11,
    "title": "Sustainable Cities and Communities",
    "url": "https://mits.ac.in/sdg11",
    "img": "/images/sdg/1E-WEB-Goal-11.png"
  },
  {
    "goal": 12,
    "title": "Responsible Consumption and Production",
    "url": "https://mits.ac.in/sdg12",
    "img": "/images/sdg/1E-WEB-Goal-12.png"
  },
  {
    "goal": 13,
    "title": "Climate Action",
    "url": "https://mits.ac.in/sdg13",
    "img": "/images/sdg/1E-WEB-Goal-13.png"
  },
  {
    "goal": 14,
    "title": "Life below Water",
    "url": "https://mits.ac.in/sdg14",
    "img": "/images/sdg/1E-WEB-Goal-14.png"
  },
  {
    "goal": 15,
    "title": "Life on Land",
    "url": "https://mits.ac.in/sdg15",
    "img": "/images/sdg/1E-WEB-Goal-15.png"
  },
  {
    "goal": 16,
    "title": "Peace, Justice and Strong Institutions",
    "url": "https://mits.ac.in/sdg16",
    "img": "/images/sdg/1E-WEB-Goal-16.png"
  },
  {
    "goal": 17,
    "title": "Partnership for the Goals",
    "url": "https://mits.ac.in/sdg17",
    "img": "/images/sdg/1E-WEB-Goal-17.png"
  }
];

export const sdgNirfData: PdfDocument[] = [
  {
    "title": "Energy Generated & Consumed",
    "url": "https://mits.ac.in/assets/pdf/sdg/Energy_Generated & Consumed.pdf"
  },
  {
    "title": "Green Coverage Details",
    "url": "https://mits.ac.in/assets/pdf/sdg/Green Coverage Details.pdf"
  },
  {
    "title": "Health and Well Being Details",
    "url": "https://mits.ac.in/assets/pdf/sdg/Health and Well Being Details.pdf"
  },
  {
    "title": "Sustainable Communities and Patnership Details",
    "url": "https://mits.ac.in/assets/pdf/sdg/Sustainable Communities and Patnership Details.pdf"
  },
  {
    "title": "Waste Management Details",
    "url": "https://mits.ac.in/assets/pdf/sdg/Waste Management Details.pdf"
  },
  {
    "title": "Water Management Details",
    "url": "https://mits.ac.in/assets/pdf/sdg/Water Management Details.pdf"
  }
];

export const sdgPoliciesData: PdfDocument[] = [
  {
    "title": "Anti-Discrimination Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Anti-Discrimination Policy.pdf"
  },
  {
    "title": "Anti-Harassment Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/ANTI-HARASSMENT POLICY.pdf"
  },
  {
    "title": "Disability Accommodation Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/DISABILITY ACCOMMODATION POLICY.pdf"
  },
  {
    "title": "Energy-Efficient Renovation and Building Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/ENERGY-EFFICIENT RENOVATION AND BUILDING POLICY.pdf"
  },
  {
    "title": "Gender Equity Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/GENDER EQUITY POLICY.pdf"
  },
  {
    "title": "Life Long Learning Access Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/LIFE LONG LEARNING ACCESS POLICY.pdf"
  },
  {
    "title": "Policy Addressing Poverty",
    "url": "https://mits.ac.in/assets/pdf/iqac/POLICY ADDRESSING POVERTY.pdf"
  },
  {
    "title": "Policy Development For Clean Energy Technology",
    "url": "https://mits.ac.in/assets/pdf/iqac/POLICY DEVELOPMENT FOR CLEAN ENERGY TECHNOLOGY.pdf"
  },
  {
    "title": "Policy For Minimization Of Plastic Use",
    "url": "https://mits.ac.in/assets/pdf/iqac/POLICY FOR MINIMIZATION OF PLASTIC USE.pdf"
  },
  {
    "title": "Policy Waste Disposal – Hazardous Materials",
    "url": "https://mits.ac.in/assets/pdf/iqac/POLICY WASTE DISPOSAL – HAZARDOUS MATERIALS.pdf"
  },
  {
    "title": "Smoke-Free Campus Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/SMOKE-FREE CAMPUS POLICY.pdf"
  },
  {
    "title": "Water Reuse Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/WATER REUSE POLICY.pdf"
  },
  {
    "title": "Anti Bribery Corruption Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Anti Bribery  Corruption Policy.pdf"
  },
  {
    "title": "Climate Action Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Climate Action Policy.pdf"
  },
  {
    "title": "Sustainable Investment Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Diversity and Inclusion Policy.pdf"
  },
  {
    "title": "Equality, Diversity and Inclusion Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Equality.pdf"
  },
  {
    "title": "Sustainable Procurement Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/Sustainable Procurement Policy-compressed.pdf"
  },
  {
    "title": "Carbon Management and Greenhouse Gas Emission Reduction Policy",
    "url": "https://mits.ac.in/assets/pdf/iqac/CARBON MANAGEMENT AND GREENHOUSE GAS EMISSION REDUCTION POLICY.pdf"
  },
  {
    "title": "Energy Conservation and Energy Consumption",
    "url": "https://mits.ac.in/assets/pdf/iqac/ENERGY CONSERVATION AND ENERGY CONSUMPTION.pdf"
  },
  {
    "title": "Energy Wastage Identification and Management",
    "url": "https://mits.ac.in/assets/pdf/iqac/ENERGY WASTAGE IDENTIFICATION AND MANAGEMENT.pdf"
  },
  {
    "title": "Existing Building Energy Efficiency Upgradation",
    "url": "https://mits.ac.in/assets/pdf/iqac/EXISTING BUILDING ENERGY EFFICIENCY UPGRADATION.pdf"
  },
  {
    "title": "Water Reuse and Recycling Policy Revision",
    "url": "https://mits.ac.in/assets/pdf/iqac/WATER REUSE AND RECYCLING POLICY Revision.pdf"
  }
];

export const sdgCommitteeMembers: CommitteeMember[] = [
  {
    "sno": 1,
    "name": "Prof. Dr. C. Yuvaraj",
    "designation": "Principal, MITS, Chairman SDG Cell"
  },
  {
    "sno": 2,
    "name": "Dr. K. Ragavendran",
    "designation": "Coordinator, SDG Cell, MITS"
  },
  {
    "sno": 3,
    "name": "Prof. Dr. P. Ramanathan",
    "designation": "Vice Principal Academics, MITS"
  },
  {
    "sno": 4,
    "name": "Dr. D. Pradeep Kumar",
    "designation": "Chief Coordinator, PAARC cell, MITS"
  },
  {
    "sno": 5,
    "name": "Dr. M. Chandra Sekhar",
    "designation": "Head of the Department of Physics, MITS"
  },
  {
    "sno": 6,
    "name": "Dr. B. Renjith",
    "designation": "Head of the Department of Chemistry, MITS"
  },
  {
    "sno": 7,
    "name": "Dr. Dipankar Roy",
    "designation": "Head of the Department of Civil Engineering, MITS"
  },
  {
    "sno": 8,
    "name": "Dr. A.V. Pavan Kumar",
    "designation": "Head of the Department of Electrical and Electronics Engineering, MITS"
  },
  {
    "sno": 9,
    "name": "National Service Scheme (NSS) Coordinator",
    "designation": "Member, MITS"
  },
  {
    "sno": 10,
    "name": "Assistant Controller of Examinations",
    "designation": "Member, MITS"
  },
  {
    "sno": 11,
    "name": "National Bureau of Accreditation (NBA) Coordinator",
    "designation": "Member, MITS"
  },
  {
    "sno": 12,
    "name": "National Assessment and Accreditation Council (NAAC) Coordinator",
    "designation": "Member, MITS"
  },
  {
    "sno": 13,
    "name": "Internal Quality Assurance Cell (IQAC) Coordinator",
    "designation": "Member, MITS"
  },
  {
    "sno": 14,
    "name": "Dean-Administration",
    "designation": "Member, MITS"
  }
];

export const sdgCommitteeOfficeOrder: PdfDocument = {
  "title": "SDG Cell Office Order - SDG Cell - 09-07-2024",
  "url": "https://mits.ac.in/assets/pdf/assoc/SDG-Members.pdf"
};

export const sdgsSpecificToMitsDoc: PdfDocument = {
  "title": "SDGs Specific to MITS",
  "url": "https://mits.ac.in/assets/pdf/assoc/SDGs%20Specific%20to%20MITS1.pdf"
};

export const sdgActivitiesDoc: PdfDocument = {
  "title": "SDG Activities & Initiatives Report",
  "url": "https://mits.ac.in/assets/pdf/assoc/SDG-Activities.pdf"
};

export const sdgImpactRankingsResultsDoc: PdfDocument = {
  "title": "The Impact Rankings 2025 Results",
  "url": "https://mits.ac.in/assets/pdf/iqac/The Impact Rankings 2025 Results.pdf"
};

export const sdgContactData: CoordinatorContact = {
  "coordinator": "Mr. Ch. Srinivas",
  "designation": "Assistant Professor",
  "department": "Department of Electrical and Electronics Engineering",
  "role": "Coordinator - SDG Cell",
  "address": [
    "Madanapalle Institute of Technology & Science",
    "Deemed to be University",
    "Madanapalle-Kadiri Road",
    "kurabalakota Mandal, Madanapalle-517325",
    "Andhra Pradesh, India"
  ],
  "phone": "+91-8571-280255 (Extn: 168)",
  "email": "sdgcell@mits.ac.in"
};

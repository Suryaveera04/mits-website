export interface QsSectionItem {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface QsPdfDoc {
  title: string;
  url: string;
}

export const qsAboutData = {
  title: "About Sustainability",
  paragraphs: [
  "Madanapalle Institute of Technology & Science (MITS), Deemed to be University, is committed to advancing sustainable development through responsible academic practices, environmentally conscious campus management, and socially relevant initiatives. The institution recognises the role of higher education in addressing global challenges such as climate change, environmental protection, social equity, and responsible governance.",
  "Sustainability principles are integrated into academic programmes, research activities, institutional policies, and community engagement initiatives. Through these efforts, the University aims to promote awareness, innovation, and responsible decision-making among students, faculty members, and stakeholders.",
  "The institutional approach to sustainability is aligned with global sustainability priorities and reflects the commitment of MITS, Deemed to be University towards environmental stewardship, social responsibility, and transparent governance."
],
};

export const qsEnvironmentalImpactData: QsSectionItem[] = [
  {
    "title": "Institutional Commitment to Environmental Responsibility",
    "paragraphs": [
      "Madanapalle Institute of Technology & Science (MITS), Deemed to be University promotes environmentally responsible practices through sustainable campus initiatives, academic programmes related to environmental issues, and research addressing ecological challenges. The University encourages the responsible use of natural resources while supporting initiatives that promote environmental conservation."
    ]
  },
  {
    "title": "Environmental Education",
    "paragraphs": [
      "Environmental awareness and sustainability concepts are incorporated into the academic framework through courses, seminars, workshops, and project-based learning activities. Students are exposed to topics such as renewable energy technologies, climate change mitigation, environmental protection, and sustainable engineering practices.",
      "These initiatives help students develop an understanding of environmental challenges and encourage them to adopt environmentally responsible practices in their academic and professional pursuits."
    ]
  },
  {
    "title": "Environmental Research",
    "paragraphs": [
      "Faculty members and researchers at MITS, Deemed to be University actively engage in research that contributes to environmental sustainability. Research activities focus on areas such as renewable energy systems, environmental monitoring, sustainable resource utilisation, green technologies, and eco-friendly infrastructure.",
      "These research efforts aim to develop innovative technological solutions that contribute to sustainable development and environmental protection."
    ]
  },
  {
    "title": "Sustainable Campus Practices",
    "paragraphs": [
      "The University has implemented several initiatives to promote sustainable campus operations. These include:",
      "Students and staff members are encouraged to participate in sustainability initiatives that promote responsible resource management and environmental awareness."
    ],
    "bullets": [
      "Energy conservation measures",
      "Water management practices",
      "Waste segregation and disposal systems",
      "Development of green spaces across the campus"
    ]
  },
  {
    "title": "Climate Responsibility",
    "paragraphs": [
      "Recognising the importance of climate action, Madanapalle Institute of Technology & Science (MITS), Deemed to be University supports initiatives that promote environmental conservation and sustainable development. Institutional strategies encourage responsible energy use, environmentally friendly infrastructure development, and awareness regarding climate-related issues.",
      "Through these initiatives, the University aims to contribute to long-term environmental sustainability."
    ]
  },
  {
    "title": "Renewable Energy and Resource Efficiency",
    "paragraphs": [
      "The University promotes efficient utilisation of natural resources and supports the adoption of renewable energy solutions wherever feasible. Initiatives related to energy efficiency, sustainable infrastructure, and resource optimisation demonstrate the commitment of MITS, Deemed to be University towards environmentally responsible development."
    ]
  },
  {
    "title": "Student Engagement in Environmental Activities",
    "paragraphs": [
      "Students actively participate in environmental awareness programmes, sustainability campaigns, and community outreach initiatives.",
      "These activities encourage students to develop a sense of environmental responsibility and civic engagement."
    ],
    "bullets": [
      "Tree plantation drives",
      "Environmental awareness programmes",
      "Green campus initiatives"
    ]
  }
];

export const qsSocialImpactData = {
  title: "Social Impact",
  sections: [
  {
    "title": "Institutional Contribution to Social Development",
    "paragraphs": [
      "Madanapalle Institute of Technology & Science (MITS), Deemed to be University believes that higher education institutions must actively contribute to the welfare and development of society. Through quality education, skill development initiatives, research activities, and community engagement programmes, the University seeks to create a positive social impact."
    ]
  },
  {
    "title": "Employability and Career Development",
    "paragraphs": [
      "The University emphasises the development of professional competencies and career readiness among students.",
      "Through partnerships with industry and professional organisations, MITS, Deemed to be University facilitates opportunities that help students build successful careers."
    ],
    "bullets": [
      "Industry collaborations",
      "Internship opportunities",
      "Training programmes",
      "Career guidance initiatives"
    ]
  },
  {
    "title": "Equality and Inclusive Environment",
    "paragraphs": [
      "The University promotes an inclusive and equitable academic environment that respects diversity and provides equal opportunities for all individuals. Institutional policies ensure fairness and equal access to education irrespective of gender, background, or physical ability."
    ]
  },
  {
    "title": "Health and Wellbeing",
    "paragraphs": [
      "The wellbeing of students and staff members is an important priority for MITS, Deemed to be University. Health services, counselling facilities, and wellness programmes are provided to support physical and mental health."
    ]
  },
  {
    "title": "Educational Impact",
    "paragraphs": [
      "Academic programmes at Madanapalle Institute of Technology & Science (MITS), Deemed to be University aim to develop socially responsible graduates capable of addressing real-world challenges.",
      "Innovative teaching methods, experiential learning opportunities, and community-oriented projects enable students to apply their knowledge to societal needs."
    ]
  },
  {
    "title": "Knowledge Exchange and Community Engagement",
    "paragraphs": [
      "The University actively collaborates with industry, government organisations, and local communities through outreach programmes, training initiatives, and collaborative research activities. These engagements facilitate knowledge exchange and strengthen the relationship between academia and society."
    ]
  }
] as QsSectionItem[],
  doc: {
    title: "Disability Support Office",
    url: "https://mits.ac.in/assets/pdf/sdg/Disability%20Support%20Office.pdf",
  } as QsPdfDoc,
};

export const qsGovernanceData: QsSectionItem[] = [
  {
    "title": "Responsible Governance Framework",
    "paragraphs": [
      "Madanapalle Institute of Technology & Science (MITS), Deemed to be University follows a structured governance system that ensures transparency, accountability, and ethical institutional practices. Governance mechanisms support effective decision-making, regulatory compliance, and responsible institutional management."
    ]
  },
  {
    "title": "Ethical Institutional Practices",
    "paragraphs": [
      "The University promotes ethical conduct in academic, administrative, and research activities. Institutional policies, codes of conduct, and grievance redressal mechanisms help maintain integrity and accountability within the academic community."
    ]
  },
  {
    "title": "Research Transparency and Knowledge Sharing",
    "paragraphs": [
      "The institution encourages the dissemination of research findings through publications, institutional repositories, and collaborative academic initiatives. Open sharing of knowledge supports innovation and strengthens academic cooperation."
    ]
  },
  {
    "title": "Transparency and Accountability",
    "paragraphs": [
      "Governance practices emphasise transparency in administrative decision-making and financial management. Institutional committees and regulatory frameworks ensure that operations are conducted in a responsible and accountable manner."
    ]
  },
  {
    "title": "Institutional Support for Sustainability",
    "paragraphs": [
      "Dedicated committees and institutional units coordinate initiatives related to sustainability, environmental responsibility, and social development. These units facilitate the implementation of institutional policies and programmes related to sustainable development."
    ]
  },
  {
    "title": "Student Participation in Institutional Processes",
    "paragraphs": [
      "Students are encouraged to participate in institutional activities and governance mechanisms through student organisations, committees, and feedback systems. This participatory approach supports inclusive decision-making and strengthens institutional development."
    ]
  }
];

export const qsSdgAnnualReportsData = {
  title: "SDG Annual Reports",
  paragraphs: [
  "At Madanapalle Institute of Technology & Science (MITS), the Sustainable Development Goals (SDGs) serve as a guiding framework for the institution’s academic, financial, and strategic development, reflecting a strong commitment towards responsible and inclusive growth.",
  "During the reporting period, SDG principles have been systematically integrated into the curriculum through alignment with global challenges, promotion of interdisciplinary research, and active student participation in community engagement and social impact activities. These efforts have contributed to enhancing the quality of education while ensuring its relevance to global sustainability priorities.",
  "Financial sustainability at MITS is strengthened through dedicated investments in green infrastructure, sustainability-focused research, and outreach programmes that create long-term environmental and societal benefits.",
  "From a strategic perspective, SDGs are embedded within the institutional vision and planning processes at MITS, with clearly defined targets and monitoring mechanisms to promote sustainability across teaching, research, operations, and collaborations.",
  "By aligning its strategic priorities with the SDG framework, MITS continues to promote innovation, inclusiveness, and environmental responsibility, thereby contributing meaningfully at local, national, and global levels."
],
  doc: {
    title: "Annual Reports 2024-25",
    url: "https://mits.ac.in/assets/pdf/sdg/Annual-Report%202024-25.pdf",
  } as QsPdfDoc,
};

export const qsAdditionalInfoData = {
  title: "Additional Information",
  doc: {
    title: "Awareness Quiz on SDGs",
    url: "https://mits.ac.in/assets/pdf/iqac/Awareness%20Quiz%20on%20SDGs.pdf",
  } as QsPdfDoc,
};

// SDG Individual Goal Detail Data for all 17 Goals (2027 and 2025)
// Verbatim synchronized from official sources: https://mits.ac.in/sdg1-2027 through sdg17-2027 and sdg1 through sdg17

export interface SdgPublication {
  title: string;
  url: string;
}

export interface SdgGoalDetail {
  goal: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  publications: SdgPublication[];
  allParagraphs?: string[];
}

export const sdgGoals2027Data: Record<string, SdgGoalDetail> = {
  "sdg1-2027": {
  "goal": 1,
  "slug": "sdg1-2027",
  "title": "SDG 1: No Poverty",
  "description": "Eradicating poverty is not a task of charity, it’s an act of\n                                    justice and the key to unlocking an enormous human potential. Still, nearly half of the\n                                    world’s population lives in poverty, and lack of food and clean water is killing\n                                    thousands every single day of the year. Together, we can feed the hungry, wipe out\n                                    disease and give everyone in the world a chance to prosper and live a productive and\n                                    rich life.",
  "image": "/images/sdg/1E-WEB-Goal-01.png",
  "publications": [
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/MITS SDG 1 Publications-27.pdf"
    }
  ],
  "allParagraphs": [
    "Eradicating poverty is not a task of charity, it’s an act of\n                                    justice and the key to unlocking an enormous human potential. Still, nearly half of the\n                                    world’s population lives in poverty, and lack of food and clean water is killing\n                                    thousands every single day of the year. Together, we can feed the hungry, wipe out\n                                    disease and give everyone in the world a chance to prosper and live a productive and\n                                    rich life.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg2-2027": {
  "goal": 2,
  "slug": "sdg2-2027",
  "title": "SDG 2: Zero Hunger",
  "description": "Hunger is the leading cause of death in the world. Our planet\n                                    has provided us with tremendous resources, but unequal access and inefficient handling\n                                    leaves millions of people malnourished. If we promote sustainable agriculture with\n                                    modern technologies and fair distribution systems, we can sustain the whole world’s\n                                    population and make sure that nobody will ever suffer from hunger again.",
  "image": "/images/sdg/1E-WEB-Goal-02.png",
  "publications": [
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/MITS SDG 2 Publications-27.pdf"
    }
  ],
  "allParagraphs": [
    "Hunger is the leading cause of death in the world. Our planet\n                                    has provided us with tremendous resources, but unequal access and inefficient handling\n                                    leaves millions of people malnourished. If we promote sustainable agriculture with\n                                    modern technologies and fair distribution systems, we can sustain the whole world’s\n                                    population and make sure that nobody will ever suffer from hunger again.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg3-2027": {
  "goal": 3,
  "slug": "sdg3-2027",
  "title": "SDG 3: Good Health and Well-being",
  "description": "Over the last 15 years, the number of childhood deaths has\n                                    been cut in half. This proves that it is possible to win the fight against almost every\n                                    disease. Still, we are spending an astonishing amount of money and resources on treating\n                                    illnesses that are surprisingly easy to prevent. The new goal for worldwide Good Health\n                                    promotes healthy lifestyles, preventive measures and modern, efficient healthcare for\n                                    everyone.",
  "image": "/images/sdg/1E-WEB-Goal-03.png",
  "publications": [
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/MITS SDG 3 Publications-27.pdf"
    }
  ],
  "allParagraphs": [
    "Over the last 15 years, the number of childhood deaths has\n                                    been cut in half. This proves that it is possible to win the fight against almost every\n                                    disease. Still, we are spending an astonishing amount of money and resources on treating\n                                    illnesses that are surprisingly easy to prevent. The new goal for worldwide Good Health\n                                    promotes healthy lifestyles, preventive measures and modern, efficient healthcare for\n                                    everyone.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg4-2027": {
  "goal": 4,
  "slug": "sdg4-2027",
  "title": "SDG 4: Quality Education",
  "description": "Education liberates the intellect, unlocks the imagination and\n                                    is fundamental for self-respect. It is the key to prosperity and opens a world of\n                                    opportunities, making it possible for each of us to contribute to a progressive, healthy\n                                    society. Learning benefits every human being and should be available to all",
  "image": "/images/sdg/1E-WEB-Goal-04.png",
  "publications": [
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/MITS SDG 4 Publications-27.pdf"
    }
  ],
  "allParagraphs": [
    "Education liberates the intellect, unlocks the imagination and\n                                    is fundamental for self-respect. It is the key to prosperity and opens a world of\n                                    opportunities, making it possible for each of us to contribute to a progressive, healthy\n                                    society. Learning benefits every human being and should be available to all",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg5-2027": {
  "goal": 5,
  "slug": "sdg5-2027",
  "title": "SDG 5: Gender Equality",
  "description": "Gender bias is undermining our social fabric and devalues all\n                                    of us. It is not just a human rights issue; it is a tremendous waste of the world’s\n                                    human potential. By denying women equal rights, we deny half the population a chance to\n                                    live life at its fullest. Political, economic and social equality for women will benefit\n                                    all the world’s citizens. Together we can eradicate prejudice and work for equal rights\n                                    and respect for all.",
  "image": "/images/sdg/1E-WEB-Goal-05.png",
  "publications": [
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/MITS SDG 5 Publications-27.pdf"
    }
  ],
  "allParagraphs": [
    "Gender bias is undermining our social fabric and devalues all\n                                    of us. It is not just a human rights issue; it is a tremendous waste of the world’s\n                                    human potential. By denying women equal rights, we deny half the population a chance to\n                                    live life at its fullest. Political, economic and social equality for women will benefit\n                                    all the world’s citizens. Together we can eradicate prejudice and work for equal rights\n                                    and respect for all.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg6-2027": {
  "goal": 6,
  "slug": "sdg6-2027",
  "title": "SDG 6: Clean Water and Sanitation",
  "description": "One in three people live without sanitation. This is causing\r\n                                    unnecessary disease and death. Although huge strides have been made with access to clean\r\n                                    drinking water, lack of sanitation is undermining these advances. If we provide\r\n                                    affordable equipment and education in hygiene practices, we can stop this senseless\r\n                                    suffering and loss of life.",
  "image": "/images/sdg/1E-WEB-Goal-06.png",
  "publications": [
    {
      "title": "Events",
      "url": "https://mits.ac.in/assets/pdf/sdg/MITS_SDG6_Events-2027.pdf"
    },
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/MITS SDG 6 Publications-27.pdf"
    },
    {
      "title": "Curriculum",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-6 CURRICULUM-2027.pdf"
    },
    {
      "title": "Water Conservation Campus Facilities",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG6_Water_Conservation_Campus_Facilities-2027.pdf"
    },
    {
      "title": "Water Facilities Public",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG6_Water_Facilities_Public-2027.pdf"
    }
  ],
  "allParagraphs": [
    "One in three people live without sanitation. This is causing\r\n                                    unnecessary disease and death. Although huge strides have been made with access to clean\r\n                                    drinking water, lack of sanitation is undermining these advances. If we provide\r\n                                    affordable equipment and education in hygiene practices, we can stop this senseless\r\n                                    suffering and loss of life.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg7-2027": {
  "goal": 7,
  "slug": "sdg7-2027",
  "title": "SDG 7: Affordable and Clean Energy",
  "description": "Renewable energy solutions are becoming cheaper, more reliable\n                                    and more efficient every day.Our current reliance on fossil fuels is unsustainable and\n                                    harmful to the planet, which is why we have to change the way we produce and consume\n                                    energy. Implementing these new energy solutions as fast as possible is essential to\n                                    counter climate change, one of the biggest threats to our own survival.",
  "image": "/images/sdg/1E-WEB-Goal-07.png",
  "publications": [
    {
      "title": "Events",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG7_Events-27.pdf"
    },
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/MITS SDG 7 Publications-27.pdf"
    },
    {
      "title": "Curriculum",
      "url": "https://mits.ac.in/assets/pdf/sdg/MITS_SDG7_Curriculum-27.pdf"
    },
    {
      "title": "Institutional Energy Facilities",
      "url": "https://mits.ac.in/assets/pdf/sdg/MITS_SDG7_Institutional_Energy_Facilities-27.pdf"
    }
  ],
  "allParagraphs": [
    "Renewable energy solutions are becoming cheaper, more reliable\n                                    and more efficient every day.Our current reliance on fossil fuels is unsustainable and\n                                    harmful to the planet, which is why we have to change the way we produce and consume\n                                    energy. Implementing these new energy solutions as fast as possible is essential to\n                                    counter climate change, one of the biggest threats to our own survival.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg8-2027": {
  "goal": 8,
  "slug": "sdg8-2027",
  "title": "SDG 8: Decent Work and Economic Growth",
  "description": "Economic growth should be a positive force for the whole\n                                    planet.This is why we must make sure that financial progress creates decent and\n                                    fulfilling jobs while not harming the environment. We must protect labour rights and\n                                    once and for all put a stop to modern slavery and child labour. If we promote job\n                                    creation with expanded access to banking and financial services, we can make sure that\n                                    everybody gets the benefits of entrepreneurship and innovation.",
  "image": "/images/sdg/1E-WEB-Goal-08.png",
  "publications": [
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/MITS SDG 8 Publications-27.pdf"
    }
  ],
  "allParagraphs": [
    "Economic growth should be a positive force for the whole\n                                    planet.This is why we must make sure that financial progress creates decent and\n                                    fulfilling jobs while not harming the environment. We must protect labour rights and\n                                    once and for all put a stop to modern slavery and child labour. If we promote job\n                                    creation with expanded access to banking and financial services, we can make sure that\n                                    everybody gets the benefits of entrepreneurship and innovation.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg9-2027": {
  "goal": 9,
  "slug": "sdg9-2027",
  "title": "SDG 9: Industry, Innovation and Infrastructure",
  "description": "A functioning and resilient infrastructure is the foundation\n                                    of every successful community. To meet future challenges, our industries and\n                                    infrastructure must be upgraded. For this, we need to promote innovative sustainable\n                                    technologies and ensure equal and universal access to information and financial markets.\n                                    This will bring prosperity, create jobs and make sure that we build stable and\n                                    prosperous societies across the globe.",
  "image": "/images/sdg/1E-WEB-Goal-09.png",
  "publications": [
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/MITS SDG 9 Publications-27.pdf"
    }
  ],
  "allParagraphs": [
    "A functioning and resilient infrastructure is the foundation\n                                    of every successful community. To meet future challenges, our industries and\n                                    infrastructure must be upgraded. For this, we need to promote innovative sustainable\n                                    technologies and ensure equal and universal access to information and financial markets.\n                                    This will bring prosperity, create jobs and make sure that we build stable and\n                                    prosperous societies across the globe.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg10-2027": {
  "goal": 10,
  "slug": "sdg10-2027",
  "title": "SDG 10: Reduced inequality",
  "description": "Too much of the world’s wealth is held by a very small group\n                                    of people.This often leads to financial and social discrimination. In order for nations\n                                    to flourish, equality and prosperity must be available to everyone – regardless of\n                                    gender, race, religious beliefs or economic status. When every individual is self\n                                    sufficient, the entire world prospers.",
  "image": "/images/sdg/1E-WEB-Goal-10.png",
  "publications": [
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/MITS SDG 10 Publications-27.pdf"
    }
  ],
  "allParagraphs": [
    "Too much of the world’s wealth is held by a very small group\n                                    of people.This often leads to financial and social discrimination. In order for nations\n                                    to flourish, equality and prosperity must be available to everyone – regardless of\n                                    gender, race, religious beliefs or economic status. When every individual is self\n                                    sufficient, the entire world prospers.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg11-2027": {
  "goal": 11,
  "slug": "sdg11-2027",
  "title": "SDG 11: Sustainable cities and communities",
  "description": "The world’s population is constantly increasing.To accommodate\n                                    everyone, we need to build modern, sustainable cities. For all of us to survive and\n                                    prosper, we need new, intelligent urban planning that creates safe, affordable and\n                                    resilient cities with green and culturally inspiring living conditions.",
  "image": "/images/sdg/1E-WEB-Goal-11.png",
  "publications": [
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/MITS SDG 11 Publications-27.pdf"
    }
  ],
  "allParagraphs": [
    "The world’s population is constantly increasing.To accommodate\n                                    everyone, we need to build modern, sustainable cities. For all of us to survive and\n                                    prosper, we need new, intelligent urban planning that creates safe, affordable and\n                                    resilient cities with green and culturally inspiring living conditions.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg12-2027": {
  "goal": 12,
  "slug": "sdg12-2027",
  "title": "SDG 12: Responsible consumption and production",
  "description": "Our planet has provided us with an abundance of natural\n                                    resources.But we have not utilized them responsibly and currently consume far beyond\n                                    what our planet can provide. We must learn how to use and produce in sustainable ways\n                                    that will reverse the harm that we have inflicted on the planet.",
  "image": "/images/sdg/1E-WEB-Goal-12.png",
  "publications": [
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/MITS SDG 12 Publications-27.pdf"
    }
  ],
  "allParagraphs": [
    "Our planet has provided us with an abundance of natural\n                                    resources.But we have not utilized them responsibly and currently consume far beyond\n                                    what our planet can provide. We must learn how to use and produce in sustainable ways\n                                    that will reverse the harm that we have inflicted on the planet.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg13-2027": {
  "goal": 13,
  "slug": "sdg13-2027",
  "title": "SDG 13: Climate action",
  "description": "Climate change is a real and undeniable threat to our entire\n                                    civilization.The effects are already visible and will be catastrophic unless we act now.\n                                    Through education, innovation and adherence to our climate commitments, we can make the\n                                    necessary changes to protect the planet. These changes also provide huge opportunities\n                                    to modernize our infrastructure which will create new jobs and promote greater\n                                    prosperity across the globe.",
  "image": "/images/sdg/1E-WEB-Goal-13.png",
  "publications": [
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/MITS SDG 13 Publications-27.pdf"
    }
  ],
  "allParagraphs": [
    "Climate change is a real and undeniable threat to our entire\n                                    civilization.The effects are already visible and will be catastrophic unless we act now.\n                                    Through education, innovation and adherence to our climate commitments, we can make the\n                                    necessary changes to protect the planet. These changes also provide huge opportunities\n                                    to modernize our infrastructure which will create new jobs and promote greater\n                                    prosperity across the globe.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg14-2027": {
  "goal": 14,
  "slug": "sdg14-2027",
  "title": "SDG 14: Life below water",
  "description": "Healthy oceans and seas are essential to our existence.They\n                                    cover 70 percent of our planet and we rely on them for food, energy and water. Yet, we\n                                    have managed to do tremendous damage to these precious resources. We must protect them\n                                    by eliminating pollution and overfishing and immediately start to responsibly manage and\n                                    protect all marine life around the world.",
  "image": "/images/sdg/1E-WEB-Goal-14.png",
  "publications": [
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/MITS SDG 14 Publications-27.pdf"
    }
  ],
  "allParagraphs": [
    "Healthy oceans and seas are essential to our existence.They\n                                    cover 70 percent of our planet and we rely on them for food, energy and water. Yet, we\n                                    have managed to do tremendous damage to these precious resources. We must protect them\n                                    by eliminating pollution and overfishing and immediately start to responsibly manage and\n                                    protect all marine life around the world.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg15-2027": {
  "goal": 15,
  "slug": "sdg15-2027",
  "title": "SDG 15: Life on land",
  "description": "A flourishing life on land is the foundation for our life on\n                                    this planet.We are all part of the planet’s ecosystem and we have caused severe damage\n                                    to it through deforestation, loss of natural habitats and land degradation. Promoting a\n                                    sustainable use of our ecosystems and preserving biodiversity is not a cause. It is the\n                                    key to our own survival.",
  "image": "/images/sdg/1E-WEB-Goal-15.png",
  "publications": [
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/MITS SDG 15 Publications-27.pdf"
    }
  ],
  "allParagraphs": [
    "A flourishing life on land is the foundation for our life on\n                                    this planet.We are all part of the planet’s ecosystem and we have caused severe damage\n                                    to it through deforestation, loss of natural habitats and land degradation. Promoting a\n                                    sustainable use of our ecosystems and preserving biodiversity is not a cause. It is the\n                                    key to our own survival.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg16-2027": {
  "goal": 16,
  "slug": "sdg16-2027",
  "title": "SDG 16: Peace, justice and strong institutions",
  "description": "Compassion and a strong moral compass is essential to every\n                                    democratic society.Yet, persecution, injustice and abuse still runs rampant and is\n                                    tearing at the very fabric of civilization. We must ensure that we have strong\n                                    institutions, global standards of justice, and a commitment to peace everywhere.",
  "image": "/images/sdg/1E-WEB-Goal-16.png",
  "publications": [
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/MITS SDG 16 Publications-27.pdf"
    }
  ],
  "allParagraphs": [
    "Compassion and a strong moral compass is essential to every\n                                    democratic society.Yet, persecution, injustice and abuse still runs rampant and is\n                                    tearing at the very fabric of civilization. We must ensure that we have strong\n                                    institutions, global standards of justice, and a commitment to peace everywhere.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg17-2027": {
  "goal": 17,
  "slug": "sdg17-2027",
  "title": "SDG 17: Partnership for the goals",
  "description": "The Global Goals can only be met if we work\n                                    together.International investments and support is needed to ensure innovative\n                                    technological development, fair trade and market access, especially for developing\n                                    countries. To build a better world, we need to be supportive, empathetic, inventive,\n                                    passionate, and above all, cooperative.",
  "image": "/images/sdg/1E-WEB-Goal-17.png",
  "publications": [
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/MITS SDG 17 Publications-27.pdf"
    },
    {
      "title": "Cross-Sectoral Engagement and NGO Collaboration",
      "url": "https://mits.ac.in/assets/pdf/sdg/Cross-Sectoral%20Engagement%20and%20NGO%20Collaboration.pdf"
    }
  ],
  "allParagraphs": [
    "The Global Goals can only be met if we work\n                                    together.International investments and support is needed to ensure innovative\n                                    technological development, fair trade and market access, especially for developing\n                                    countries. To build a better world, we need to be supportive, empathetic, inventive,\n                                    passionate, and above all, cooperative.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
};

export const sdgGoals2025Data: Record<string, SdgGoalDetail> = {
  "sdg1": {
  "goal": 1,
  "slug": "sdg1",
  "title": "SDG 1: No Poverty",
  "description": "Eradicating poverty is not a task of charity, it’s an act of\n                                    justice and the key to unlocking an enormous human potential. Still, nearly half of the\n                                    world’s population lives in poverty, and lack of food and clean water is killing\n                                    thousands every single day of the year. Together, we can feed the hungry, wipe out\n                                    disease and give everyone in the world a chance to prosper and live a productive and\n                                    rich life.",
  "image": "/images/sdg/1E-WEB-Goal-01.png",
  "publications": [
    {
      "title": "Events",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-1 EVENTS.pdf"
    },
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-1-Publications.pdf"
    },
    {
      "title": "Curriculum",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-1 CURRICULUM.pdf"
    },
    {
      "title": "Bottom Financial Quintile Admission Target",
      "url": "https://mits.ac.in/assets/pdf/sdg/1.3.1%20Bottom%20Financial%20Quintile%20Admission%20Target.pdf"
    },
    {
      "title": "Bottom Financial Quintile Student Success",
      "url": "https://mits.ac.in/assets/pdf/sdg/1.3.2 Bottom Financial Quintile Student Success.pdf"
    },
    {
      "title": "Low-income Student Support",
      "url": "https://mits.ac.in/assets/pdf/sdg/1.3.3 Low-income Student Support.pdf"
    },
    {
      "title": "Bottom Financial Quintile Student Support",
      "url": "https://mits.ac.in/assets/pdf/sdg/1.3.4 Bottom Financial Quintile Student Support.pdf"
    },
    {
      "title": "Low or Lower-middle Income Countries Student Support",
      "url": "https://mits.ac.in/assets/pdf/sdg/1.3.5 Low or Lower-middle Income Countries Student Support.pdf"
    },
    {
      "title": "Local Start-up Assistance",
      "url": "https://mits.ac.in/assets/pdf/sdg/1.4.1 Local Start-up Assistance.pdf"
    },
    {
      "title": "Local Start-up Financial Assistance",
      "url": "https://mits.ac.in/assets/pdf/sdg/1.4.2 Local Start-up Financial Assistance.pdf"
    },
    {
      "title": "Programmes for Services Access",
      "url": "https://mits.ac.in/assets/pdf/sdg/1.4.3 Programmes for Services Access.pdf"
    },
    {
      "title": "Policy making Addressing Poverty",
      "url": "https://mits.ac.in/assets/pdf/sdg/1.4.4 Policy making Addressing Poverty.pdf"
    }
  ],
  "allParagraphs": [
    "Eradicating poverty is not a task of charity, it’s an act of\n                                    justice and the key to unlocking an enormous human potential. Still, nearly half of the\n                                    world’s population lives in poverty, and lack of food and clean water is killing\n                                    thousands every single day of the year. Together, we can feed the hungry, wipe out\n                                    disease and give everyone in the world a chance to prosper and live a productive and\n                                    rich life.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg2": {
  "goal": 2,
  "slug": "sdg2",
  "title": "SDG 2: Zero Hunger",
  "description": "Hunger is the leading cause of death in the world. Our planet\n                                    has provided us with tremendous resources, but unequal access and inefficient handling\n                                    leaves millions of people malnourished. If we promote sustainable agriculture with\n                                    modern technologies and fair distribution systems, we can sustain the whole world’s\n                                    population and make sure that nobody will ever suffer from hunger again.",
  "image": "/images/sdg/1E-WEB-Goal-02.png",
  "publications": [
    {
      "title": "Events",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-2 EVENTS.pdf"
    },
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-2-Publications.pdf"
    },
    {
      "title": "Curriculum",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-2 CURRICULUM.pdf"
    },
    {
      "title": "Campus Food Waste",
      "url": "https://mits.ac.in/assets/pdf/sdg/2.2.1 Campus food waste.pdf"
    },
    {
      "title": "Student Food Insecurity and Hunger",
      "url": "https://mits.ac.in/assets/pdf/sdg/2.3.1 Student Food Insecurity and Hunger.pdf"
    },
    {
      "title": "Sustainable Food Choices on Campus",
      "url": "https://mits.ac.in/assets/pdf/sdg/2.3.3 Sustainable Food Choices on Campus.pdf"
    },
    {
      "title": "Healthy and Affordable Food Choices",
      "url": "https://mits.ac.in/assets/pdf/sdg/2.3.4 Healthy and Affordable Food Choices.pdf"
    },
    {
      "title": "Events for Local Farmers and Food Producers",
      "url": "https://mits.ac.in/assets/pdf/sdg/2.5.2 Events for Local Farmers and Food Producers.pdf"
    },
    {
      "title": "College Access to Local Farmers and Food Producers",
      "url": "https://mits.ac.in/assets/pdf/sdg/2.5.3 College Access to Local Farmers and Food Producers.pdf"
    },
    {
      "title": "Sustainable Food Purchases",
      "url": "https://mits.ac.in/assets/pdf/sdg/2.5.4 Sustainable Food Purchases.pdf"
    }
  ],
  "allParagraphs": [
    "Hunger is the leading cause of death in the world. Our planet\n                                    has provided us with tremendous resources, but unequal access and inefficient handling\n                                    leaves millions of people malnourished. If we promote sustainable agriculture with\n                                    modern technologies and fair distribution systems, we can sustain the whole world’s\n                                    population and make sure that nobody will ever suffer from hunger again.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg3": {
  "goal": 3,
  "slug": "sdg3",
  "title": "SDG 3: Good Health and Well-being",
  "description": "Over the last 15 years, the number of childhood deaths has\n                                    been cut in half. This proves that it is possible to win the fight against almost every\n                                    disease. Still, we are spending an astonishing amount of money and resources on treating\n                                    illnesses that are surprisingly easy to prevent. The new goal for worldwide Good Health\n                                    promotes healthy lifestyles, preventive measures and modern, efficient healthcare for\n                                    everyone.",
  "image": "/images/sdg/1E-WEB-Goal-03.png",
  "publications": [
    {
      "title": "Events",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-3 EVENTS.pdf"
    },
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-3-Publications.pdf"
    },
    {
      "title": "Curriculum",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-3 CURRICULUM.pdf"
    },
    {
      "title": "Smoke-Free Policy",
      "url": "https://mits.ac.in/assets/pdf/sdg/3.3.6 Smoke-Free Policy.pdf"
    },
    {
      "title": "Current Collaborations with Health Institutions",
      "url": "https://mits.ac.in/assets/pdf/sdg/3.3.1 Current Collaborations with Health Institutions.pdf"
    },
    {
      "title": "Health Outreach Programmes",
      "url": "https://mits.ac.in/assets/pdf/sdg/3.3.2 Health Outreach Programmes.pdf"
    },
    {
      "title": "Shared Sports Facilities",
      "url": "https://mits.ac.in/assets/pdf/sdg/3.3.3 Shared Sports Facilities.pdf"
    },
    {
      "title": "Free Sexual Health Care for Students",
      "url": "https://mits.ac.in/assets/pdf/sdg/3.3.4 Free Sexual Health Care for Students.pdf"
    },
    {
      "title": "Mental Health Support",
      "url": "https://mits.ac.in/assets/pdf/sdg/3.3.5 Mental Health Support.pdf"
    }
  ],
  "allParagraphs": [
    "Over the last 15 years, the number of childhood deaths has\n                                    been cut in half. This proves that it is possible to win the fight against almost every\n                                    disease. Still, we are spending an astonishing amount of money and resources on treating\n                                    illnesses that are surprisingly easy to prevent. The new goal for worldwide Good Health\n                                    promotes healthy lifestyles, preventive measures and modern, efficient healthcare for\n                                    everyone.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg4": {
  "goal": 4,
  "slug": "sdg4",
  "title": "SDG 4: Quality Education",
  "description": "Education liberates the intellect, unlocks the imagination and\n                                    is fundamental for self-respect. It is the key to prosperity and opens a world of\n                                    opportunities, making it possible for each of us to contribute to a progressive, healthy\n                                    society. Learning benefits every human being and should be available to all",
  "image": "/images/sdg/1E-WEB-Goal-04.png",
  "publications": [
    {
      "title": "Events",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-4 EVENTS.pdf"
    },
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-4-Publications.pdf"
    },
    {
      "title": "Curriculum",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-4 CURRICULUM.pdf"
    },
    {
      "title": "Public Resources (Lifelong Learning)",
      "url": "https://mits.ac.in/assets/pdf/sdg/4.3.1 Public Resources (Lifelong Learning).pdf"
    },
    {
      "title": "Public Events (Lifelong Learning)",
      "url": "https://mits.ac.in/assets/pdf/sdg/4.3.2 Public Events (Lifelong Learning).pdf"
    },
    {
      "title": "Vocational Training Events (Lifelong Learning)",
      "url": "https://mits.ac.in/assets/pdf/sdg/4.3.3 Vocational Training Events (Lifelong Learning).pdf"
    },
    {
      "title": "Education Outreach Activities Beyond Campus",
      "url": "https://mits.ac.in/assets/pdf/sdg/4.3.4 Education Outreach Activities Beyond Campus.pdf"
    },
    {
      "title": "Lifelong Learning Access Policy",
      "url": "https://mits.ac.in/assets/pdf/sdg/4.3.5 Lifelong Learning Access Policy.pdf"
    }
  ],
  "allParagraphs": [
    "Education liberates the intellect, unlocks the imagination and\n                                    is fundamental for self-respect. It is the key to prosperity and opens a world of\n                                    opportunities, making it possible for each of us to contribute to a progressive, healthy\n                                    society. Learning benefits every human being and should be available to all",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg5": {
  "goal": 5,
  "slug": "sdg5",
  "title": "SDG 5: Gender Equality",
  "description": "Gender bias is undermining our social fabric and devalues all\n                                    of us. It is not just a human rights issue; it is a tremendous waste of the world’s\n                                    human potential. By denying women equal rights, we deny half the population a chance to\n                                    live life at its fullest. Political, economic and social equality for women will benefit\n                                    all the world’s citizens. Together we can eradicate prejudice and work for equal rights\n                                    and respect for all.",
  "image": "/images/sdg/1E-WEB-Goal-05.png",
  "publications": [
    {
      "title": "Events",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-5 EVENTS.pdf"
    },
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-5-Publications.pdf"
    },
    {
      "title": "Curriculum",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-5 CURRICULUM.pdf"
    },
    {
      "title": "Tracking Access Measures",
      "url": "https://mits.ac.in/assets/pdf/sdg/5.3.1 Tracking Access Measures.pdf"
    },
    {
      "title": "Policy for Women Applications and Entry",
      "url": "https://mits.ac.in/assets/pdf/sdg/5.3.2 Policy for Women Applications and Entry.pdf"
    },
    {
      "title": "Women’s Access Schemes",
      "url": "https://mits.ac.in/assets/pdf/sdg/5.3.3. Women’s Access Schemes.pdf"
    },
    {
      "title": "Women's Application in underrepresented Subjects",
      "url": "https://mits.ac.in/assets/pdf/sdg/5.3.4 Women's Application in underrepresented Subjects.pdf"
    },
    {
      "title": "Policy of Non-Discrimination against Women",
      "url": "https://mits.ac.in/assets/pdf/sdg/5.6.1 Policy of Non-Discrimination against Women.pdf"
    },
    {
      "title": "Non-Discrimination Policies for Transgender",
      "url": "https://mits.ac.in/assets/pdf/sdg/5.6.2 Non-Discrimination Policies for Transgender.pdf"
    },
    {
      "title": "Maternity and Paternity Policies",
      "url": "https://mits.ac.in/assets/pdf/sdg/5.6.3 Maternity and Paternity Policies.pdf"
    },
    {
      "title": "Childcare Facilities for Students",
      "url": "https://mits.ac.in/assets/pdf/sdg/5.6.4 Childcare Facilities for Students.pdf"
    },
    {
      "title": "Childcare Facilities for Staff and Faculty",
      "url": "https://mits.ac.in/assets/pdf/sdg/5.6.5 Childcare Facilities for Staff and Faculty.pdf"
    },
    {
      "title": "Women's Mentoring Schemes",
      "url": "https://mits.ac.in/assets/pdf/sdg/5.6.6 Women's Mentoring Schemes.pdf"
    },
    {
      "title": "Track Women's Graduation Rate",
      "url": "https://mits.ac.in/assets/pdf/sdg/5.6.7 Track Women's Graduation Rate.pdf"
    },
    {
      "title": "Policies Protecting those Reporting Discrimination",
      "url": "https://mits.ac.in/assets/pdf/sdg/5.6.8 Policies Protecting those Reporting Discrimination.pdf"
    }
  ],
  "allParagraphs": [
    "Gender bias is undermining our social fabric and devalues all\n                                    of us. It is not just a human rights issue; it is a tremendous waste of the world’s\n                                    human potential. By denying women equal rights, we deny half the population a chance to\n                                    live life at its fullest. Political, economic and social equality for women will benefit\n                                    all the world’s citizens. Together we can eradicate prejudice and work for equal rights\n                                    and respect for all.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg6": {
  "goal": 6,
  "slug": "sdg6",
  "title": "SDG 6: Clean Water and Sanitation",
  "description": "One in three people live without sanitation. This is causing\n                                    unnecessary disease and death. Although huge strides have been made with access to clean\n                                    drinking water, lack of sanitation is undermining these advances. If we provide\n                                    affordable equipment and education in hygiene practices, we can stop this senseless\n                                    suffering and loss of life.",
  "image": "/images/sdg/1E-WEB-Goal-06.png",
  "publications": [
    {
      "title": "Events",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-6 EVENTS.pdf"
    },
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-6-Publications.pdf"
    },
    {
      "title": "Curriculum",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-6 CURRICULUM.pdf"
    },
    {
      "title": "Water Consumption Tracking",
      "url": "https://mits.ac.in/assets/pdf/sdg/6.2.1 Water Consumption Tracking.pdf"
    },
    {
      "title": "Waste Water Treatment",
      "url": "https://mits.ac.in/assets/pdf/sdg/6.3.1 Waste Water Treatment.pdf"
    },
    {
      "title": "Preventing Water System Pollution",
      "url": "https://mits.ac.in/assets/pdf/sdg/6.3.2 Preventing Water System Pollution.pdf"
    },
    {
      "title": "Free Drinking Water Provided",
      "url": "https://mits.ac.in/assets/pdf/sdg/6.3.3 Free Drinking Water Provided.pdf"
    },
    {
      "title": "Water Conscious Building Standards",
      "url": "https://mits.ac.in/assets/pdf/sdg/6.3.4 Water Conscious Building Standard.pdf"
    },
    {
      "title": "Water Conscious Planting",
      "url": "https://mits.ac.in/assets/pdf/sdg/6.3.5 Water Conscious Planting.pdf"
    },
    {
      "title": "Water Reuse Policy",
      "url": "https://mits.ac.in/assets/pdf/sdg/6.4.1 Water Reuse Policy.pdf"
    },
    {
      "title": "Water Reuse Measurement",
      "url": "https://mits.ac.in/assets/pdf/sdg/6.4.2 Water Reuse Measurement.pdf"
    },
    {
      "title": "Water Management Educational Opportunities",
      "url": "https://mits.ac.in/assets/pdf/sdg/6.5.1 Water Management Educational Opportunities.pdf"
    },
    {
      "title": "Promoting Conscious Water Usage",
      "url": "https://mits.ac.in/assets/pdf/sdg/6.5.2 Promoting Conscious Water Usage.pdf"
    },
    {
      "title": "Off-Campus Water Conservation Support",
      "url": "https://mits.ac.in/assets/pdf/sdg/6.5.3 Off-Campus Water Conservation Support.pdf"
    },
    {
      "title": "Sustainable Water Extraction on Campus",
      "url": "https://mits.ac.in/assets/pdf/sdg/6.5.4 Sustainable Water Extraction on Campus.pdf"
    },
    {
      "title": "Cooperation on Water Security",
      "url": "https://mits.ac.in/assets/pdf/sdg/6.5.5 Cooperation on Water Security.pdf"
    }
  ],
  "allParagraphs": [
    "One in three people live without sanitation. This is causing\n                                    unnecessary disease and death. Although huge strides have been made with access to clean\n                                    drinking water, lack of sanitation is undermining these advances. If we provide\n                                    affordable equipment and education in hygiene practices, we can stop this senseless\n                                    suffering and loss of life.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg7": {
  "goal": 7,
  "slug": "sdg7",
  "title": "SDG 7: Affordable and Clean Energy",
  "description": "Renewable energy solutions are becoming cheaper, more reliable\n                                    and more efficient every day.Our current reliance on fossil fuels is unsustainable and\n                                    harmful to the planet, which is why we have to change the way we produce and consume\n                                    energy. Implementing these new energy solutions as fast as possible is essential to\n                                    counter climate change, one of the biggest threats to our own survival.",
  "image": "/images/sdg/1E-WEB-Goal-07.png",
  "publications": [
    {
      "title": "Events",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-7 EVENTS.pdf"
    },
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-7-Publications.pdf"
    },
    {
      "title": "Curriculum",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-7 CURRICULUM.pdf"
    },
    {
      "title": "Energy-Efficient Renovation and Building",
      "url": "https://mits.ac.in/assets/pdf/sdg/7.2.1 Energy-Efficient Renovation and Building.pdf"
    },
    {
      "title": "Upgrade Buildings to Higher Energy Efficiency",
      "url": "https://mits.ac.in/assets/pdf/sdg/7.2.2 Upgrade Buildings to Higher Energy Efficiency.pdf"
    },
    {
      "title": "Carbon Reduction and Emission Reduction Process",
      "url": "https://mits.ac.in/assets/pdf/sdg/7.2.3 Carbon Reduction and Emission Reduction Process.pdf"
    },
    {
      "title": "Plan to Reduce Energy Consumption",
      "url": "https://mits.ac.in/assets/pdf/sdg/7.2.4 Plan to Reduce Energy Consumption.pdf"
    },
    {
      "title": "Energy Wastage Identification",
      "url": "https://mits.ac.in/assets/pdf/sdg/7.2.5 Energy Wastage Identification.pdf"
    },
    {
      "title": "Divestment Policy",
      "url": "https://mits.ac.in/assets/pdf/sdg/7.2.6 Divestment Policy.pdf"
    },
    {
      "title": "Local Community Outreach for Energy Efficiency",
      "url": "https://mits.ac.in/assets/pdf/sdg/7.4.1 Local Community Outreach for Energy Efficiency.pdf"
    },
    {
      "title": "100% Renewable Energy Pledge",
      "url": "https://mits.ac.in/assets/pdf/sdg/7.4.2 100 Renewable Energy Pledge.pdf"
    },
    {
      "title": "Energy Efficiency Services for Industry",
      "url": "https://mits.ac.in/assets/pdf/sdg/7.4.3 Energy Efficiency Services for Industry.pdf"
    },
    {
      "title": "Policy Development for Clean Energy Technology",
      "url": "https://mits.ac.in/assets/pdf/sdg/7.4.4 Policy Development for Clean Energy Technology.pdf"
    },
    {
      "title": "Assistance to Low-Carbon Innovation",
      "url": "https://mits.ac.in/assets/pdf/sdg/7.4.5 Assistance to Low-Carbon Innovation.pdf"
    }
  ],
  "allParagraphs": [
    "Renewable energy solutions are becoming cheaper, more reliable\n                                    and more efficient every day.Our current reliance on fossil fuels is unsustainable and\n                                    harmful to the planet, which is why we have to change the way we produce and consume\n                                    energy. Implementing these new energy solutions as fast as possible is essential to\n                                    counter climate change, one of the biggest threats to our own survival.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg8": {
  "goal": 8,
  "slug": "sdg8",
  "title": "SDG 8: Decent Work and Economic Growth",
  "description": "Economic growth should be a positive force for the whole\n                                    planet.This is why we must make sure that financial progress creates decent and\n                                    fulfilling jobs while not harming the environment. We must protect labour rights and\n                                    once and for all put a stop to modern slavery and child labour. If we promote job\n                                    creation with expanded access to banking and financial services, we can make sure that\n                                    everybody gets the benefits of entrepreneurship and innovation.",
  "image": "/images/sdg/1E-WEB-Goal-08.png",
  "publications": [
    {
      "title": "Events",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-8 EVENTS.pdf"
    },
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-8-Publications.pdf"
    },
    {
      "title": "Curriculum",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-8 CURRICULUM.pdf"
    },
    {
      "title": "Employment Practice Living Wage",
      "url": "https://mits.ac.in/assets/pdf/sdg/8.2.1 Employment Practice Living Wage.pdf"
    },
    {
      "title": "Employment Practice Unions",
      "url": "https://mits.ac.in/assets/pdf/sdg/8.2.2 Employment Practice Unions.pdf"
    },
    {
      "title": "Employment Policy on Discrimination",
      "url": "https://mits.ac.in/assets/pdf/sdg/8.2.3 Employment Policy on Discrimination.pdf"
    },
    {
      "title": "Employment Policy Modern Slavery",
      "url": "https://mits.ac.in/assets/pdf/sdg/8.2.4 Employment Policy Modern Slavery.pdf"
    },
    {
      "title": "Employment Practice Equivalent Rights Outsourcing",
      "url": "https://mits.ac.in/assets/pdf/sdg/8.2.5 Employment Practice Equivalent Rights Outsourcing.pdf"
    },
    {
      "title": "Employment Policy Pay Scale Equity",
      "url": "https://mits.ac.in/assets/pdf/sdg/8.2.6 Employment Policy Pay Scale Equity.pdf"
    },
    {
      "title": "Tracking Pay Scale for Gender Equity",
      "url": "https://mits.ac.in/assets/pdf/sdg/8.2.7 Tracking Pay Scale for Gender Equity.pdf"
    },
    {
      "title": "Employment Practice Appeal Process",
      "url": "https://mits.ac.in/assets/pdf/sdg/8.2.8 Employment Practice Appeal Process.pdf"
    }
  ],
  "allParagraphs": [
    "Economic growth should be a positive force for the whole\n                                    planet.This is why we must make sure that financial progress creates decent and\n                                    fulfilling jobs while not harming the environment. We must protect labour rights and\n                                    once and for all put a stop to modern slavery and child labour. If we promote job\n                                    creation with expanded access to banking and financial services, we can make sure that\n                                    everybody gets the benefits of entrepreneurship and innovation.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg9": {
  "goal": 9,
  "slug": "sdg9",
  "title": "SDG 9: Industry, Innovation and Infrastructure",
  "description": "A functioning and resilient infrastructure is the foundation\n                                    of every successful community. To meet future challenges, our industries and\n                                    infrastructure must be upgraded. For this, we need to promote innovative sustainable\n                                    technologies and ensure equal and universal access to information and financial markets.\n                                    This will bring prosperity, create jobs and make sure that we build stable and\n                                    prosperous societies across the globe.",
  "image": "/images/sdg/1E-WEB-Goal-09.png",
  "publications": [
    {
      "title": "Events",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-9 EVENTS.pdf"
    },
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-9-Publications.pdf"
    },
    {
      "title": "Curriculum",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-9 CURRICULUM.pdf"
    }
  ],
  "allParagraphs": [
    "A functioning and resilient infrastructure is the foundation\n                                    of every successful community. To meet future challenges, our industries and\n                                    infrastructure must be upgraded. For this, we need to promote innovative sustainable\n                                    technologies and ensure equal and universal access to information and financial markets.\n                                    This will bring prosperity, create jobs and make sure that we build stable and\n                                    prosperous societies across the globe.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg10": {
  "goal": 10,
  "slug": "sdg10",
  "title": "SDG 10: Reduced inequality",
  "description": "Too much of the world’s wealth is held by a very small group\n                                    of people.This often leads to financial and social discrimination. In order for nations\n                                    to flourish, equality and prosperity must be available to everyone – regardless of\n                                    gender, race, religious beliefs or economic status. When every individual is self\n                                    sufficient, the entire world prospers.",
  "image": "/images/sdg/1E-WEB-Goal-10.png",
  "publications": [
    {
      "title": "Events",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-10 EVENTS.pdf"
    },
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-10-Publications.pdf"
    },
    {
      "title": "Curriculum",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-10 CURRICULUM.pdf"
    },
    {
      "title": "Non-discriminatory Admission Policy",
      "url": "https://mits.ac.in/assets/pdf/sdg/10.6.1 Non-discriminatory Admission Policy.pdf"
    },
    {
      "title": "Measures tracks applications & admissions of underrepresented",
      "url": "https://mits.ac.in/assets/pdf/sdg/10.6.2 Measurestracks applications & admissions of underrepresented.pdf"
    },
    {
      "title": "Planned action to recruit students staff faculty from under-represented\n                                                    groups",
      "url": "https://mits.ac.in/assets/pdf/sdg/10.6.3 Planned action to recruit students staff faculty from under-represented groups.pdf"
    },
    {
      "title": "Anti-discrimination and Anti-harassment policies",
      "url": "https://mits.ac.in/assets/pdf/sdg/10.6.4 Anti-discrimination and Anti-harassment policies.pdf"
    },
    {
      "title": "Diversity, Equity & Inclusion- Human Rights",
      "url": "https://mits.ac.in/assets/pdf/sdg/10.6.5 Diversity, Equity & Inclusion- Human Rights.pdf"
    },
    {
      "title": "Support for Underrepresented Groups",
      "url": "https://mits.ac.in/assets/pdf/sdg/10.6.6 Support for Underrepresented Groups.pdf"
    },
    {
      "title": "Accessible Facilities for People with Disabilities",
      "url": "https://mits.ac.in/assets/pdf/sdg/10.6.7 Accessible Facilities for People with Disabilities.pdf"
    },
    {
      "title": "Support Services for People with Disabilities",
      "url": "https://mits.ac.in/assets/pdf/sdg/10.6.8 Support Services for People with Disabilities.pdf"
    },
    {
      "title": "Access Schemes for People with Disabilities Mentoring Targeted Support",
      "url": "https://mits.ac.in/assets/pdf/sdg/10.6.9 Access Schemes for People with Disabilities Mentoring  Targeted Support.pdf"
    },
    {
      "title": "Accommodation policystrategy for persons with disability",
      "url": "https://mits.ac.in/assets/pdf/sdg/10.6.10 Accommodation policystrategy for persons with disability.pdf"
    }
  ],
  "allParagraphs": [
    "Too much of the world’s wealth is held by a very small group\n                                    of people.This often leads to financial and social discrimination. In order for nations\n                                    to flourish, equality and prosperity must be available to everyone – regardless of\n                                    gender, race, religious beliefs or economic status. When every individual is self\n                                    sufficient, the entire world prospers.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg11": {
  "goal": 11,
  "slug": "sdg11",
  "title": "SDG 11: Sustainable cities and communities",
  "description": "The world’s population is constantly increasing.To accommodate\n                                    everyone, we need to build modern, sustainable cities. For all of us to survive and\n                                    prosper, we need new, intelligent urban planning that creates safe, affordable and\n                                    resilient cities with green and culturally inspiring living conditions.",
  "image": "/images/sdg/1E-WEB-Goal-11.png",
  "publications": [
    {
      "title": "Events",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-11 EVENTS.pdf"
    },
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-11-Publications.pdf"
    },
    {
      "title": "Curriculum",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-11 CURRICULUM.pdf"
    },
    {
      "title": "Public Access to Buildings",
      "url": "https://mits.ac.in/assets/pdf/sdg/11.2.1 Public Access to Buildings.pdf"
    },
    {
      "title": "Public Access to Libraries",
      "url": "https://mits.ac.in/assets/pdf/sdg/11.2.2 Public Access to Libraries.pdf"
    },
    {
      "title": "Sustainable Practices Target's",
      "url": "https://mits.ac.in/assets/pdf/sdg/11.4.1 Sustainable Practices Target's.pdf"
    },
    {
      "title": "Promote Sustainable Commuting",
      "url": "https://mits.ac.in/assets/pdf/sdg/11.4.2 Promote Sustainable Commuting.pdf"
    },
    {
      "title": "Allow Remote Working",
      "url": "https://mits.ac.in/assets/pdf/sdg/11.4.3 Allow Remote Working.pdf"
    },
    {
      "title": "Affordable Housing for Employees",
      "url": "https://mits.ac.in/assets/pdf/sdg/11.4.4 Affordable Housing for Employees.pdf"
    },
    {
      "title": "Affordable Housing for Students",
      "url": "https://mits.ac.in/assets/pdf/sdg/11.4.5 Affordable Housing for Students.pdf"
    },
    {
      "title": "Pedestrian Priority on Campus",
      "url": "https://mits.ac.in/assets/pdf/sdg/11.4.6 Pedestrian Priority on Campus.pdf"
    },
    {
      "title": "Local Authority Collaboration Regarding Planning and Development",
      "url": "https://mits.ac.in/assets/pdf/sdg/11.4.7 Local Authority Collaboration Regarding Planning and Development.pdf"
    },
    {
      "title": "Planning Development - New Build Standards",
      "url": "https://mits.ac.in/assets/pdf/sdg/11.4.8 Planning Development - New Build Standards.pdf"
    },
    {
      "title": "Building on Brownfield Sites",
      "url": "https://mits.ac.in/assets/pdf/sdg/11.4.9 Building on Brownfield Sites.pdf"
    }
  ],
  "allParagraphs": [
    "The world’s population is constantly increasing.To accommodate\n                                    everyone, we need to build modern, sustainable cities. For all of us to survive and\n                                    prosper, we need new, intelligent urban planning that creates safe, affordable and\n                                    resilient cities with green and culturally inspiring living conditions.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg12": {
  "goal": 12,
  "slug": "sdg12",
  "title": "SDG 12: Responsible consumption and production",
  "description": "Our planet has provided us with an abundance of natural\n                                    resources.But we have not utilized them responsibly and currently consume far beyond\n                                    what our planet can provide. We must learn how to use and produce in sustainable ways\n                                    that will reverse the harm that we have inflicted on the planet.",
  "image": "/images/sdg/1E-WEB-Goal-12.png",
  "publications": [
    {
      "title": "Events",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-12 EVENTS.pdf"
    },
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-12-Publications.pdf"
    },
    {
      "title": "Curriculum",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-12 CURRICULUM.pdf"
    },
    {
      "title": "Ethical Sourcing Policy",
      "url": "https://mits.ac.in/assets/pdf/sdg/12.2.1 Ethical Sourcing Policy.pdf"
    },
    {
      "title": "Policy Waste Disposal - Hazardous Materials",
      "url": "https://mits.ac.in/assets/pdf/sdg/12.2.3 Policy Waste Disposal - Hazardous Materials.pdf"
    },
    {
      "title": "Policy Waste Disposal - Landfill Policy",
      "url": "https://mits.ac.in/assets/pdf/sdg/12.2.4 Policy Waste Disposal - Landfill Policy.pdf"
    },
    {
      "title": "Policy for Minimisation of Plastic Use",
      "url": "https://mits.ac.in/assets/pdf/sdg/12.2.5 Policy for Minimisation of Plastic Use.pdf"
    },
    {
      "title": "Disposable Policy: Extensions to Services",
      "url": "https://mits.ac.in/assets/pdf/sdg/12.2.7 Disposable Policy Extensions to Services.pdf"
    },
    {
      "title": "Minimisation Policies Extended to Suppliers",
      "url": "https://mits.ac.in/assets/pdf/sdg/12.2.8 Minimisation Policies Extended to Suppliers.pdf"
    },
    {
      "title": "Waste Tracking",
      "url": "https://mits.ac.in/assets/pdf/sdg/12.3.1 Waste Tracking.pdf"
    },
    {
      "title": "Publication of Sustainability Report",
      "url": "https://mits.ac.in/assets/pdf/sdg/12.4.1 Publication of Sustainability Report.pdf"
    }
  ],
  "allParagraphs": [
    "Our planet has provided us with an abundance of natural\n                                    resources.But we have not utilized them responsibly and currently consume far beyond\n                                    what our planet can provide. We must learn how to use and produce in sustainable ways\n                                    that will reverse the harm that we have inflicted on the planet.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg13": {
  "goal": 13,
  "slug": "sdg13",
  "title": "SDG 13: Climate action",
  "description": "Climate change is a real and undeniable threat to our entire\n                                    civilization.The effects are already visible and will be catastrophic unless we act now.\n                                    Through education, innovation and adherence to our climate commitments, we can make the\n                                    necessary changes to protect the planet. These changes also provide huge opportunities\n                                    to modernize our infrastructure which will create new jobs and promote greater\n                                    prosperity across the globe.",
  "image": "/images/sdg/1E-WEB-Goal-13.png",
  "publications": [
    {
      "title": "Events",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-13 EVENTS.pdf"
    },
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-13-Publications.pdf"
    },
    {
      "title": "Curriculum",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-13 CURRICULUM.pdf"
    },
    {
      "title": "Low-carbon energy tracking",
      "url": "https://mits.ac.in/assets/pdf/sdg/13.2.1 Low-carbon energy tracking.pdf"
    },
    {
      "title": "Local education programmes on climate",
      "url": "https://mits.ac.in/assets/pdf/sdg/13.3.1 Local education programmes on climate.pdf"
    },
    {
      "title": "Climate Action Plan, shared",
      "url": "https://mits.ac.in/assets/pdf/sdg/13.3.2 Climate Action Plan, shared.pdf"
    },
    {
      "title": "Co-operative planning for climate change disasters",
      "url": "https://mits.ac.in/assets/pdf/sdg/13.3.3 Co-operative planning for climate change disasters.pdf"
    },
    {
      "title": "Inform and support government",
      "url": "https://mits.ac.in/assets/pdf/sdg/13.3.4 Inform and support government.pdf"
    },
    {
      "title": "Environmental education collaborate with NGOs",
      "url": "https://mits.ac.in/assets/pdf/sdg/13.3.5 Environmental education collaborate with NGOs.pdf"
    },
    {
      "title": "Commitment to carbon neutral university",
      "url": "https://mits.ac.in/assets/pdf/sdg/13.4.1 Commitment to carbon neutral university.pdf"
    },
    {
      "title": "Carbon neutral achieve by date",
      "url": "https://mits.ac.in/assets/pdf/sdg/13.4.2 Carbon neutral achieve by date.pdf"
    }
  ],
  "allParagraphs": [
    "Climate change is a real and undeniable threat to our entire\n                                    civilization.The effects are already visible and will be catastrophic unless we act now.\n                                    Through education, innovation and adherence to our climate commitments, we can make the\n                                    necessary changes to protect the planet. These changes also provide huge opportunities\n                                    to modernize our infrastructure which will create new jobs and promote greater\n                                    prosperity across the globe.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg14": {
  "goal": 14,
  "slug": "sdg14",
  "title": "SDG 14: Life below water",
  "description": "Healthy oceans and seas are essential to our existence.They\n                                    cover 70 percent of our planet and we rely on them for food, energy and water. Yet, we\n                                    have managed to do tremendous damage to these precious resources. We must protect them\n                                    by eliminating pollution and overfishing and immediately start to responsibly manage and\n                                    protect all marine life around the world.",
  "image": "/images/sdg/1E-WEB-Goal-14.png",
  "publications": [
    {
      "title": "Events",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-14 EVENTS.pdf"
    },
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-14-Publications.pdf"
    },
    {
      "title": "Curriculum",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-14 CURRICULUM.pdf"
    }
  ],
  "allParagraphs": [
    "Healthy oceans and seas are essential to our existence.They\n                                    cover 70 percent of our planet and we rely on them for food, energy and water. Yet, we\n                                    have managed to do tremendous damage to these precious resources. We must protect them\n                                    by eliminating pollution and overfishing and immediately start to responsibly manage and\n                                    protect all marine life around the world.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg15": {
  "goal": 15,
  "slug": "sdg15",
  "title": "SDG 15: Life on land",
  "description": "A flourishing life on land is the foundation for our life on\n                                    this planet.We are all part of the planet’s ecosystem and we have caused severe damage\n                                    to it through deforestation, loss of natural habitats and land degradation. Promoting a\n                                    sustainable use of our ecosystems and preserving biodiversity is not a cause. It is the\n                                    key to our own survival.",
  "image": "/images/sdg/1E-WEB-Goal-15.png",
  "publications": [
    {
      "title": "Events",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-15 EVENTS.pdf"
    },
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-15-Publications.pdf"
    },
    {
      "title": "Curriculum",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-15 CURRICULUM.pdf"
    },
    {
      "title": "Events about Sustainable use of Land",
      "url": "https://mits.ac.in/assets/pdf/sdg/15.2.1 Events about Sustainable use of Land.pdf"
    },
    {
      "title": "Sustainably Farmed food on Campus",
      "url": "https://mits.ac.in/assets/pdf/sdg/15.2.2 Sustainably Farmed food on Campus.pdf"
    },
    {
      "title": "Maintain and Extend Current Ecosystem's Biodiversity",
      "url": "https://mits.ac.in/assets/pdf/sdg/15.2.3 Maintain and Extend Current Ecosystem's Biodiversity.pdf"
    },
    {
      "title": "Educational Programmes on Ecosystems",
      "url": "https://mits.ac.in/assets/pdf/sdg/15.2.4 Educational Programmes on Ecosystems.pdf"
    },
    {
      "title": "Sustainable Management of Land for Agriculture and Tourism (Educational\n                                                    Outreach)",
      "url": "https://mits.ac.in/assets/pdf/sdg/15.2.5 Sustainable Management of Land for Agriculture and Tourism (Educational Outreach).pdf"
    },
    {
      "title": "Sustainable Use, Conservation and Restoration of Land (Policy)",
      "url": "https://mits.ac.in/assets/pdf/sdg/15.3.1 Sustainable Use, Conservation and Restoration of Land (Policy).pdf"
    },
    {
      "title": "Monitoring IUCN and other Conservation Species (Policies)",
      "url": "https://mits.ac.in/assets/pdf/sdg/15.3.2 Monitoring IUCN and other Conservation Species (Policies).pdf"
    },
    {
      "title": "Local Biodiversity included in Planning and Development",
      "url": "https://mits.ac.in/assets/pdf/sdg/15.3.3 Local Biodiversity included in Planning and Development.pdf"
    },
    {
      "title": "Alien Species Impact Reduction (Policies)",
      "url": "https://mits.ac.in/assets/pdf/sdg/15.3.4 Alien Species Impact Reduction (Policies).pdf"
    },
    {
      "title": "Collaboration for Shared Land Ecosystems",
      "url": "https://mits.ac.in/assets/pdf/sdg/15.3.5 Collaboration for Shared Land Ecosystems.pdf"
    },
    {
      "title": "Water Discharge Guidelines and Standards",
      "url": "https://mits.ac.in/assets/pdf/sdg/15.4.1 Water Discharge Guidelines and Standards.pdf"
    },
    {
      "title": "Policy on Plastic Waste Reduction",
      "url": "https://mits.ac.in/assets/pdf/sdg/15.4.2 Policy on Plastic Waste Reduction.pdf"
    },
    {
      "title": "Policy on Hazardous Waste Disposal",
      "url": "https://mits.ac.in/assets/pdf/sdg/15.4.3 Policy on Hazardous Waste Disposal.pdf"
    }
  ],
  "allParagraphs": [
    "A flourishing life on land is the foundation for our life on\n                                    this planet.We are all part of the planet’s ecosystem and we have caused severe damage\n                                    to it through deforestation, loss of natural habitats and land degradation. Promoting a\n                                    sustainable use of our ecosystems and preserving biodiversity is not a cause. It is the\n                                    key to our own survival.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg16": {
  "goal": 16,
  "slug": "sdg16",
  "title": "SDG 16: Peace, justice and strong institutions",
  "description": "Compassion and a strong moral compass is essential to every\n                                    democratic society.Yet, persecution, injustice and abuse still runs rampant and is\n                                    tearing at the very fabric of civilization. We must ensure that we have strong\n                                    institutions, global standards of justice, and a commitment to peace everywhere.",
  "image": "/images/sdg/1E-WEB-Goal-16.png",
  "publications": [
    {
      "title": "Events",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-16 EVENTS.pdf"
    },
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-16-Publications.pdf"
    },
    {
      "title": "curriculum",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-16 CURRICULUM.pdf"
    },
    {
      "title": "Elected Representation",
      "url": "https://mits.ac.in/assets/pdf/sdg/16.2.1 Elected Representation.pdf"
    },
    {
      "title": "Students' Union",
      "url": "https://mits.ac.in/assets/pdf/sdg/16.2.2 Students' Union.pdf"
    },
    {
      "title": "Identify and Engage with Local Stakeholders",
      "url": "https://mits.ac.in/assets/pdf/sdg/16.2.3 Identify and Engage with Local Stakeholders.pdf"
    },
    {
      "title": "Participatory Bodies for Stakeholder Engagement",
      "url": "https://mits.ac.in/assets/pdf/sdg/16.2.4 Participatory Bodies for Stakeholder Engagement.pdf"
    },
    {
      "title": "University Principles on Corruption and Bribery",
      "url": "https://mits.ac.in/assets/pdf/sdg/16.2.5 University Principles on Corruption and Bribery.pdf"
    },
    {
      "title": "Academic Freedom Policy",
      "url": "https://mits.ac.in/assets/pdf/sdg/16.2.6 Academic Freedom Policy.pdf"
    },
    {
      "title": "Publish Financial Data",
      "url": "https://mits.ac.in/assets/pdf/sdg/16.2.7 Publish Financial Data.pdf"
    },
    {
      "title": "Provide Expert Advice to Government",
      "url": "https://mits.ac.in/assets/pdf/sdg/16.3.1 Provide Expert Advice to Government.pdf"
    },
    {
      "title": "Policy and Lawmakers Outreach and Education",
      "url": "https://mits.ac.in/assets/pdf/sdg/16.3.2 Policy and Lawmakers Outreach and Education.pdf"
    },
    {
      "title": "Participation in Government Research",
      "url": "https://mits.ac.in/assets/pdf/sdg/16.3.3 Participation in Government Research.pdf"
    },
    {
      "title": "Neutral Platform to Discuss Issues",
      "url": "https://mits.ac.in/assets/pdf/sdg/16.3.4 Neutral Platform to Discuss Issues.pdf"
    }
  ],
  "allParagraphs": [
    "Compassion and a strong moral compass is essential to every\n                                    democratic society.Yet, persecution, injustice and abuse still runs rampant and is\n                                    tearing at the very fabric of civilization. We must ensure that we have strong\n                                    institutions, global standards of justice, and a commitment to peace everywhere.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
  "sdg17": {
  "goal": 17,
  "slug": "sdg17",
  "title": "SDG 17: Partnership for the goals",
  "description": "The Global Goals can only be met if we work\n                                    together.International investments and support is needed to ensure innovative\n                                    technological development, fair trade and market access, especially for developing\n                                    countries. To build a better world, we need to be supportive, empathetic, inventive,\n                                    passionate, and above all, cooperative.",
  "image": "/images/sdg/1E-WEB-Goal-17.png",
  "publications": [
    {
      "title": "Events",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-17 EVENTS.pdf"
    },
    {
      "title": "Publications",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-17-Publications.pdf"
    },
    {
      "title": "Curriculum",
      "url": "https://mits.ac.in/assets/pdf/sdg/SDG-17 CURRICULUM.pdf"
    },
    {
      "title": "Relationship with NGOs and Governments for SDG Policy",
      "url": "https://mits.ac.in/assets/pdf/sdg/17.2.1 Relationship with NGOs and Governments for SDG Policy.pdf"
    },
    {
      "title": "Cross sectoral dialogue about SDGs",
      "url": "https://mits.ac.in/assets/pdf/sdg/17.2.2 Cross sectoral dialogue about SDGs.pdf"
    },
    {
      "title": "International collaboration data gathering for SDG",
      "url": "https://mits.ac.in/assets/pdf/sdg/17.2.3 International collaboration data gathering for SDG.pdf"
    },
    {
      "title": "Collaboration for SDG best practice",
      "url": "https://mits.ac.in/assets/pdf/sdg/17.2.4 Collaboration for SDG best practice.pdf"
    },
    {
      "title": "Collaboration with NGOs for SDGs",
      "url": "https://mits.ac.in/assets/pdf/sdg/17.2.5 Collaboration with NGOs for SDGs.pdf"
    },
    {
      "title": "Publication of SDG reports",
      "url": "https://mits.ac.in/assets/pdf/sdg/17.3 Publication of SDG reports.pdf"
    },
    {
      "title": "Education for SDGs: commitment to meaningful education",
      "url": "https://mits.ac.in/assets/pdf/sdg/17.4.1 Education for SDGs commitment to meaningful education.pdf"
    },
    {
      "title": "Education for SDGs: specific courses on sustainability",
      "url": "https://mits.ac.in/assets/pdf/sdg/17.4.2 Education for SDGs specific courses on sustainability.pdf"
    },
    {
      "title": "Education for SDGs in the wider community",
      "url": "https://mits.ac.in/assets/pdf/sdg/17.4.3 Education for SDGs in the wider community.pdf"
    }
  ],
  "allParagraphs": [
    "The Global Goals can only be met if we work\n                                    together.International investments and support is needed to ensure innovative\n                                    technological development, fair trade and market access, especially for developing\n                                    countries. To build a better world, we need to be supportive, empathetic, inventive,\n                                    passionate, and above all, cooperative.",
    "© 2026 Madanapalle Institute of Technology & Science - Deemed to be University"
  ]
},
};

export const allSdgGoalsList = [
  { goal: 1, name: "No Poverty", color: "#E5243B" },
  { goal: 2, name: "Zero Hunger", color: "#DDA63A" },
  { goal: 3, name: "Good Health and Well-being", color: "#4C9F38" },
  { goal: 4, name: "Quality Education", color: "#C5192D" },
  { goal: 5, name: "Gender Equality", color: "#FF3A21" },
  { goal: 6, name: "Clean Water and Sanitation", color: "#26BDE2" },
  { goal: 7, name: "Affordable and Clean Energy", color: "#FCC30B" },
  { goal: 8, name: "Decent Work and Economic Growth", color: "#A21942" },
  { goal: 9, name: "Industry, Innovation and Infrastructure", color: "#FD6925" },
  { goal: 10, name: "Reduced Inequalities", color: "#DD1367" },
  { goal: 11, name: "Sustainable Cities and Communities", color: "#FD9D24" },
  { goal: 12, name: "Responsible Consumption and Production", color: "#BF8B2E" },
  { goal: 13, name: "Climate Action", color: "#3F7E44" },
  { goal: 14, name: "Life Below Water", color: "#0A97D9" },
  { goal: 15, name: "Life On Land", color: "#56C02B" },
  { goal: 16, name: "Peace, Justice and Strong Institutions", color: "#00689D" },
  { goal: 17, name: "Partnership for the Goals", color: "#19486A" }
];

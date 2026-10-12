export interface TeamMember {
  name: string;
  designation: string;
  role: string;
  image: string;
}

export interface RadioDoc {
  label: string;
  url: string;
}

export interface RadioEvent {
  title: string;
  date: string;
  url: string;
}

export interface SdgInfo {
  number: number;
  title: string;
  description: string;
}

export interface PrimetimeProgram {
  title: string;
  description: string;
}

export const radioCoordinator = {
  name: "Dr. K. Sathesh",
  designation: "CRS Coordinator",
  phone: "08571-220388, 8712655126, 9100973388",
  email: "mitsradio90.8cr@mits.ac.in",
  address: "Madanapalle Institute of Technology & Science\nDeemed to be University\n Kadiri Road,\nAngallu Madanapalle-517325,\nAndhra Pradesh, India",
};

export const radioContacts = [
  { name: "Dr. K. Sathesh", role: "CRS Coordinator" },
  { name: "Dr. B. Rajesh Kumar", role: "Program Coordinator" },
  { name: "Shri. M. Narasimhacharlu", role: "Program Manager" },
  { name: "Mr. B. Pawan Kumar", role: "AV Technician" },
];

export const radioTeam: TeamMember[] = [
  {
    name: "Dr. K. Sathesh",
    designation: "CRS Coordinator",
    role: "Overall station coordination, compliance, and institutional integration.",
    image: "https://mits.ac.in/public/uploads/radio/13fab1a0c3d589eb6eddc0b189f208d8.jpg",
  },
  {
    name: "Dr. B. Rajesh Kumar",
    designation: "Program Coordinator",
    role: "Content strategy, scheduling, primetime program planning, and broadcasting quality control.",
    image: "https://mits.ac.in/public/uploads/radio/92cd170f94f0a013fce58b8633076756.jpg",
  },
  {
    name: "Shri. M. Narasimhacharlu",
    designation: "Program Manager",
    role: "Community outreach, volunteer management, script reviews, and on-air operations supervision.",
    image: "https://mits.ac.in/public/uploads/radio/2dad09bb9bda30210815d524b0693d7e.jpg",
  },
  {
    name: "Mr. B. Pawan Kumar",
    designation: "AV Technician",
    role: "Audio-visual setup, live sound mixing, equipment maintenance, and technical troubleshooting during broadcasts.",
    image: "https://mits.ac.in/public/uploads/radio/1e0f3c7d8b9a4f2c8e5b6d7a9f3c2e1b.jpg",
  }
];

export const thematicFocusAreas = [
  "Women and Child Health",
  "Science & Technology",
  "Youth Development",
  "Wellness Programs",
  "Career Counselling",
  "Life Skills Education",
  "Environment Issues",
  "Social Issues",
  "Gender Awareness",
  "Women Empowerment",
  "Spoken English Telugu Culture & Heritage",
  "Indian Constitution",
  "Social Harmony & National Unity",
  "Anubhav",
];

export const radioSdgs: SdgInfo[] = [
  {
    number: 2,
    title: "Zero Hunger",
    description: "Raise awareness about food security, promote sustainable agricultural practices, and support local crop yields.",
  },
  {
    number: 3,
    title: "Good Health and Well-Being",
    description: "Provide vital health tips, maternal advice, disease prevention strategies, and summer safety directives.",
  },
  {
    number: 4,
    title: "Quality Education",
    description: "Bridge scientific learning gap, run classes by local teachers, and support educational programs for rural youth.",
  },
  {
    number: 5,
    title: "Gender Equality",
    description: "Nurture women's empowerment initiatives, address social bias, and host discussions on legal rights.",
  },
  {
    number: 8,
    title: "Decent Work and Economic Growth",
    description: "Highlight career guidance opportunities, professional skillsets, entrepreneurship, and agricultural market trends.",
  },
  {
    number: 13,
    title: "Climate Action",
    description: "Educate rural masses on conservation, waste management, global warming, and eco-friendly practices.",
  },
];

export const primetimePrograms: PrimetimeProgram[] = [
  {
    title: "Pallelu Panta Seemalu",
    description: "Interviews with local agricultural officers covering Kisan initiatives, horticulture, animal husbandry, and poultry farming to build scientific temperament among rural farmers.",
  },
  {
    title: "Udyoga Varthalu",
    description: "Academic discussions on career counselling, vocational guides, scholarship portals, and pathways designed to map student potential to future job opportunities.",
  },
  {
    title: "Chinnarula Karyakramam",
    description: "Classes hosted by school educators covering basic sciences, languages, and moral ethics designed to enrich school children.",
  },
  {
    title: "Sastra Vignanam",
    description: "Interviews with active researchers, scientists, and faculty members summarizing latest developments, societal impacts of science, and local R&D initiatives.",
  },
  {
    title: "Sandhya Samayam",
    description: "Focused program highlighting life stories and advice from senior citizens to share traditional values and bridge generation gaps.",
  },
  {
    title: "Yuvata-mata manthi",
    description: "Dynamic talk show designed specifically to give college students and youth a platform to speak about lifestyle, goals, and technological trends.",
  },
  {
    title: "Mahilavani",
    description: "Special panels hosting advocates, women leaders, and health specialists highlighting legal awareness, domestic protection, and finance management.",
  },
  {
    title: "Matha-Sishu Karyakramam",
    description: "Maternal healthcare series outlining nutrition for pregnant mothers, child vaccination schedules, hygiene, and pediatrics updates.",
  },
];

export const radioCommittees: RadioDoc[] = [
  {
    label: "MITS Radio 90.8 - Administrative & Steering Committee 2025-26",
    url: "https://mits.ac.in/assets/pdf/radio/Radio-ASC-2025.pdf",
  },
  {
    label: "MITS Radio 90.8 - Advisory & Content Committee 2025-26",
    url: "https://mits.ac.in/assets/pdf/radio/RADIO-%20ACC-2025.pdf",
  },
  {
    label: "MITS Radio 90.8 - Department Coordinators",
    url: "https://mits.ac.in/assets/pdf/radio/MITS%20Radio%2090.8%20-Dept_Coordinators.pdf",
  },
  {
    label: "MITS Radio 90.8 - Program Committee 04.11.2022",
    url: "https://mits.ac.in/assets/pdf/radio/MITS%20Radio%2090.8%20-Program%20Committee%2004.11.2022%20001.pdf",
  },
  {
    label: "MITS Radio 90.8 - Steering committee 04.11.2022",
    url: "https://mits.ac.in/assets/pdf/radio/MITS%20Radio%2090.8-Steering%20committee%2004.11.2022.pdf",
  },
  {
    label: "MITS Radio 90.8 - Office Order - CRS Committee - 2022",
    url: "https://mits.ac.in/assets/pdf/radio/MITS%20Radio%2090.8-Office%20Order%20-%20CRS-%20Committee-%202022.pdf",
  },
];

export const radioDownloads: RadioDoc[] = [
  {
    label: "Student Volunteer Form",
    url: "https://mits.ac.in/assets/radio/Student%20Volunteer%20Form.pdf",
  },
  {
    label: "Faculty Volunteer Form",
    url: "https://mits.ac.in/assets/radio/Faculty%20Volunteer%20Form.pdf",
  },
  {
    label: "Guest Declaration Form",
    url: "https://mits.ac.in/assets/pdf/radio/Guest%20Declaration%20Form.pdf",
  },
  {
    label: "Standard Operating Procedure",
    url: "https://mits.ac.in/assets/radio/Standard%20Operating%20Procedure.pdf",
  },
  {
    label: "E-Content Standard Operating Procedure",
    url: "https://mits.ac.in/assets/pdf/radio/1.%20E-Content%20-%20SOP.pdf",
  },
  {
    label: "E-Content Facilities MITS Radio",
    url: "https://mits.ac.in/assets/pdf/radio/4.%20E-%20Content%20Facilities.pdf",
  },
  {
    label: "E-Content Sample PPT Format",
    url: "https://mits.ac.in/assets/pdf/radio/2.%20E-Content%20PPT%20_%20Sample%20Format%20_%20MITS%20DTBU.pptx",
  },
  {
    label: "E-Content Preparation - Declaration Form",
    url: "https://mits.ac.in/assets/pdf/radio/3.%20Declaration%20Form%20for%20E-%20Content%20Preparation.pdf",
  },
];

export const radioEvents: RadioEvent[] = [
  {
    title: "MITS RADIO 90.8 CR Teachers Day celebrations",
    date: "05-09-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2005-09-2026%20-%20MITS%20RADIO%2090.8%20CR%20Teachers%20Day%20celebrations.pdf",
  },
  {
    title: "MITS RADIO 900.8 CR A Special Sports Awareness and Student Motivation Programme",
    date: "28-08-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2028-08-2026%20-%20MITS%20RADIO%20900.8%20CR%20A%20Special%20Sports%20Awareness%20and%20Student%20Motivation%20Programme.pdf",
  },
  {
    title: "MITS RADIO 900.8 CR - 80th Independence Day Special Programme",
    date: "15-08-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2015-08-2026%20-%20MITS%20RADIO%20900.8%20CR%20-%2080th%20Independence%20Day%20Special%20Programme.pdf",
  },
  {
    title: "MITS RADIO 90.8 CR - National Librarians Day",
    date: "12-08-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2012-08-2026%20-%20MITS%20RADIO%2090.8%20CR%20-%20National%20Librarians%20Day.pdf",
  },
  {
    title: "MITS RADIO 90.8 CR - Community Awareness on El Nino",
    date: "12-08-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2012-08-2026%20-%20MITS%20RADIO%2090.8%20CR%20-%20Community%20Awareness%20on%20El%20Nino.pdf",
  },
  {
    title: "MITS RADIO 90.8 CR - International Academic Interaction and Scientific Awareness",
    date: "09-07-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2009-07-2026%20-%20MITS%20RADIO%2090.8%20CR%20-%20International%20Academic%20Interaction%20and%20Scientific%20Awareness.pdf",
  },
  {
    title: "MITS RADIO 90.8 CR - Special Radio Talk on World Yoga Day 2026",
    date: "17-06-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2017-06-2026%20-%20MITS%20RADIO%2090.8%20CR%20-%20Special%20Radio%20Talk%20on%20World%20Yoga%20Day%202026.pdf",
  },
  {
    title: "MITS RADIO 90.8 CR - Creating Awareness on Voluntary Blood Donation",
    date: "12-06-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2012-06-2026%20-%20MITS%20RADIO%2090.8%20CR%20-%20Creating%20Awareness%20on%20Voluntary%20Blood%20Donation.pdf",
  },
  {
    title: "MITS RADIO 90.8 CR - Inspiring Journey of Academic Excellence and Global Success",
    date: "09-06-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2009-06-2026%20-%20MITS%20RADIO%2090.8%20CR%20-%20Inspiring%20Journey%20of%20Academic%20Excellence%20and%20Global%20Success.pdf",
  },
  {
    title: "MITS RADIO 90.8 CR - Empowering Mothers and Children",
    date: "13-05-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2013-05-2026%20-%20MITS%20RADIO%2090.8%20CR%20-%20Empowering%20Mothers%20and%20Children.pdf",
  },
  {
    title: "MITS RADIO 90.8 CR - Alumni Success Stories",
    date: "05-05-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2005-05-2026%20-%20MITS%20RADIO%2090.8%20CR%20-%20Alumni%20Success%20Stories.pdf",
  },
  {
    title: "MITS RADIO 90.8 CR - Community Outreach and Social Transformation through Spiritual Service",
    date: "03-05-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2003-05-2026%20-%20MITS%20RADIO%2090.8%20CR%20-%20Community%20Outreach%20and%20Social%20Transformation%20through%20Spiritual%20Service.pdf",
  },
  {
    title: "MITS RADIO 90.8 CR - Career Guidance on Civil Services",
    date: "18-04-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2018-04-2026%20-%20MITS%20RADIO%2090.8%20CR%20-%20Career%20Guidance%20on%20Civil%20Services.pdf",
  },
  {
    title: "MITS RADIO 90.8 CR - Inspiring Civil Service Aspirants",
    date: "18-04-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2018-04-2026%20-%20MITS%20RADIO%2090.8%20CR%20-%20Inspiring%20Civil%20Service%20Aspirants.pdf",
  },
  {
    title: "MITS RADIO 90.8 CR - Ensuring Public Safety and Social Awareness",
    date: "12-04-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2012-04-2026%20-%20MITS%20RADIO%2090.8%20CR%20-%20Ensuring%20Public%20Safety%20and%20Social%20Awareness.pdf",
  },
  {
    title: "MITS RADIO 90.8 CR - Alumni Insights and Career Guidance",
    date: "11-04-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2011-04-2026%20-%20MITS%20RADIO%2090.8%20CR%20-%20Alumni%20Insights%20and%20Career%20Guidance.pdf",
  },
  {
    title: "MITS RADIO 90.8 CR - Career Insights in Data Analytics and Emerging Technologies",
    date: "08-04-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2008-04-2026%20-%20MITS%20RADIO%2090.8%20CR%20-%20Career%20Insights%20in%20Data%20Analytics%20and%20Emerging%20Technologies.pdf",
  },
  {
    title: "MITS RADIO 90.8 CR - International Workers' Day",
    date: "01-04-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2001-04-2026%20-%20MITS%20RADIO%2090.8%20CR%20-%20International%20Workers%E2%80%99%20Day.pdf",
  },
  {
    title: "MITS RADIO 90.8 CR - Maa Vooru Outreach Programme at Arogyavaram Sanatorium",
    date: "18-03-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2018-03-2026%20-%20MITS%20RADIO%2090.8%20CR%20-%20Maa%20Vooru%20Outreach%20Programme%20at%20Arogyavaram%20Sanatorium.pdf",
  },
  {
    title: "Celebration of World Radio Day 2026",
    date: "13-02-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2013.02.2026%20-%20Celebration%20of%20World%20Radio%20Day%202026.pdf",
  },
  {
    title: "MITS RADIO 90.8 CR - Promoting Sustainable Agriculture through Micro Irrigation",
    date: "12-02-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2012-02-2026%20-%20MITS%20RADIO%2090.8%20CR%20-%20Promoting%20Sustainable%20Agriculture%20through%20Micro%20Irrigation.pdf",
  },
  {
    title: "From Campus to Corporate - Inspiring Journey of MITS Alumni",
    date: "31-01-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2031.01.2026%20%20-%20From%20Campus%20to%20Corporate-%20Inspiring%20Journey%20of%20MITS%20Alumni.pdf",
  },
  {
    title: "From Classroom to Innovation - A Career Journey",
    date: "29-01-2026",
    url: "https://mits.ac.in/assets/pdf/radio/2026%20-%2029.01.2026%20%20-%20From%20Classroom%20to%20Innovation-A%20Career%20Journey.pdf",
  },
  {
    title: "Emerging Digital Technologies",
    date: "31-12-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2031.12.2025%20-%20Emerging%20Digital%20Technologies.pdf",
  },
  {
    title: "Intellectual Property Rights (IPR) and Research Methodology",
    date: "20-12-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2020.12.2025%20-%20Intellectual%20Property%20Rights%20(IPR)%20and%20Research%20Methodology.pdf",
  },
  {
    title: "Industry-Academia Interaction",
    date: "04-12-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2004.12.2025%20-%20%20Industry%E2%80%93Academia%20Interaction.pdf",
  },
  {
    title: "A Documentary Outreach at Boyakonda Gangamma Temple",
    date: "19-12-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2019.12.2025%20-%20A%20Documentary%20Outreach%20at%20Boyakonda%20Gangamma%20Temple.pdf",
  },
  {
    title: "Constitution Day: An Interaction with Madanapalle Bar Association",
    date: "26-11-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2026.11.2025%20-%20A%20Documentary%20Outreach%20at%20Boyakonda%20Gangamma%20Temple.pdf",
  },
  {
    title: "A Documentary Outreach at Yoga Bhogeswara Swamy Temple",
    date: "17-11-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2017.11.2025%20-%20A%20Documentary%20Outreach%20at%20Yoga%20Bhogeswara%20Swamy%20Temple.pdf",
  },
  {
    title: "Career Guidance in DevOps and IT Consulting",
    date: "15-11-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2015.11.2025%20-%20Career%20Guidance%20in%20DevOps%20and%20IT%20Consulting.pdf",
  },
  {
    title: "Entrepreneurship Insights for a Fast-Changing World",
    date: "15-11-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2015.11.2025%20%20-%20Entrepreneurship%20Insights%20for%20a%20Fast-Changing%20World.pdf",
  },
  {
    title: "Voices of the Loom",
    date: "14-11-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2014.11.2025%20-%20Voices%20of%20the%20Loom.pdf",
  },
  {
    title: "Awareness Program: Precautions for Safe Celebration of Vinayaka Chavithi",
    date: "26-08-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2026.08.2025%20-%20Awareness%20Program%20Precautions%20for%20Safe%20Celebration%20of%20Vinayaka%20Chavithi.pdf",
  },
  {
    title: "Interview with 1st Batch MITS Alumni",
    date: "30-07-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%30.07.2025%20-%20Interview%20with%201st%20Batch%20MITS%20Alumni.pdf",
  },
  {
    title: "Maa Vooru – A Journey to Mudivedu Village",
    date: "18-07-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2018.07.2025%20-%20Maa%20Vooru%20%E2%80%93%20A%20Journey%20to%20Mudivedu%20Village.pdf",
  },
  {
    title: "Honouring the Guiding Lights – Guru Purnima",
    date: "10-07-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2010.07.2025%20-%20Honouring%20the%20Guiding%20Lights%20%E2%80%93%20Guru%20Purnima.pdf",
  },
  {
    title: "A Documentary Outreach at Thettu Village",
    date: "05-07-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2005.07.2025%20-%20A%20Documentary%20Outreach%20at%20Thettu%20Village.pdf",
  },
  {
    title: "Pre-Yogandhra Awareness on International Yoga Day",
    date: "19-06-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2019.06.2025%20-%20MITS%20RADIO%2090.8%20CR%20-%20Pre-Yogandhra%20Awareness%20on%20International%20Yoga%20Day.pdf",
  },
  {
    title: "Inspirational Talk with Dr. G. Subramanya Sarma",
    date: "30-04-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2030.04.2025%20-%20Inspirational%20Talk%20with%20Dr.%20G.%20Subramanya%20Sarma.pdf",
  },
  {
    title: "A Documentary Outreach at Arogyavaram Sanatorium",
    date: "18-03-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2018.03.2025%20-%20MITS%20RADIO%2090.8%20CR%20-%20A%20Documentary%20Outreach%20at%20Arogyavaram%20Sanatorium.pdf",
  },
  {
    title: "1000 Days for Baby Caring",
    date: "12-03-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2022.04.2025%20-%20MITS%20RADIO%2090.8%20CR%20-%201000%20Days%20for%20Baby%20Caring.pdf",
  },
  {
    title: "Pathway to Success: Workshop for Civil Service Aspirants (SDG 4, 8 & 16)",
    date: "17-02-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2017-02-2025%20-%20MITS%20RADIO%2090.8%20CR%20-%20Report%20on%20Pathway%20to%20Success%20_%20Workshop%20for%20Civil%20Service%20Aspirants%20(SDG%204%2C%208%20%26%2016).pdf",
  },
  {
    title: "MITS Collaboration with Bowling Green State University (BGSU) (SDG 4)",
    date: "17-02-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2017-02-2025%20-%20MITS%20RADIO%2090.8%20CR%20-%20Report%20on%20MITS%20Collaboration%20with%20Bowling%20Green%20State%20University%20(BGSU)%20(SDG%204).pdf",
  },
  {
    title: "The Role of Radio and Community Radio in Social Development",
    date: "17-02-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2017.02.2025%20-%20MITS%20RADIO%2090.8%20CR%20-%20The%20Role%20of%20Radio%20and%20Community%20Radio%20in%20Social%20Development.pdf",
  },
  {
    title: "World Radio Day at MITS (SDG 4, 5, 8, 9 & 10)",
    date: "13-02-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2013-02-2025%20-%20MITS%20RADIO%2090.8%20CR%20-%20Report%20on%20World%20Radio%20Day%20at%20MITS%20(SDG%204%2C%205%2C%208%2C%209%20%26%2010).pdf",
  },
  {
    title: "Crop Harvesting Insights from Shri Rama Reddy (Farmer) (SDG 4)",
    date: "05-02-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2005-02-2025%20-%20MITS%20RADIO%2090.8%20CR%20-%20Report%20on%20Crop%20Harvesting%20Insights%20from%20Shri%20Rama%20Reddy%20_%20Farmer%20(SDG%204).pdf",
  },
  {
    title: "Out-broadcast Visit to TERRAKOTA Kalakendram (SDG 4)",
    date: "05-02-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2005-02-2025%20-%20MITS%20RADIO%2090.8%20CR%20-%20Report%20on%20Out-broadcast%20Visit%20to%20TERRAKOTA%20Kalakendram%20(SDG%204).pdf",
  },
  {
    title: "Emerging Trends in Data Architecture and Industry Practices",
    date: "03-02-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2003.02.2025%20-%20MITS%20RADIO%2090.8%20CR%20-%20Emerging%20Trends%20in%20Data%20Architecture%20and%20Industry%20Practices.pdf",
  },
  {
    title: "Special Interaction Session on the Benefits of IETE for Students (SDG 4)",
    date: "24-01-2025",
    url: "https://mits.ac.in/assets/pdf/radio/2025%20-%2024-01-2025%20-%20MITS%20RADIO%2090.8%20CR%20-%20Report%20on%20Special%20Interaction%20Session%20on%20the%20Benefits%20of%20IETE%20for%20Students%20(SDG%204).pdf",
  },
  {
    title: "Bridging Academia and Industry with Dr. Vinay Raj (SDG 4)",
    date: "21-12-2024",
    url: "https://mits.ac.in/assets/pdf/radio/21.12.2024%20-%20Bridging%20Academia%20and%20Industry%20with%20Dr.%20Vinay%20Raj%20(SDG%204).pdf",
  },
  {
    title: "Exploring Research Excellence (SDG 4)",
    date: "23-11-2024",
    url: "https://mits.ac.in/assets/pdf/radio/23.11.2024%20-%20Exploring%20Research%20Excellence%20(SDG%204).pdf",
  },
  {
    title: "Empowering Lives: Blood Donation Drive at MITS (SDG 3)",
    date: "20-11-2024",
    url: "https://mits.ac.in/assets/pdf/radio/20.11.2024%20-%20Empowering%20Lives%20Blood%20Donation%20Drive%20at%20MITS%20in%20Association%20with%20MITS%20Radio%2090.8%20and%20NCC%20(SDG%203).pdf",
  },
  {
    title: "Expert Talk on Women Empowerment: Shaping the Future Together (SDG 5)",
    date: "19-11-2024",
    url: "https://mits.ac.in/assets/pdf/radio/19.11.2024%20-%20Expert%20Talk%20on%20Women%20Empowerment%20Shaping%20the%20Future%20Together%20(SDG%205).pdf",
  },
  {
    title: "Children's Day Celebration with Jawahar Navodaya Vidyalaya (SDG 4)",
    date: "14-11-2024",
    url: "https://mits.ac.in/assets/pdf/radio/14.11.2024%20-%20MITS%20Radio%2090.8%20CR%20-%20Children's%20Day%20Celebration%20with%20Jawahar%20Navodaya%20Vidyalaya%20(SDG%204).pdf",
  },
  {
    title: "MITS Conducted Radio Jockey Training Programme - 2 (SDG 4)",
    date: "29-10-2024",
    url: "https://mits.ac.in/assets/pdf/radio/2024%20-%2029-10-2024%20-%20MITS%20RADIO%2090.8%20CR%20-%20MITS%20conducted%20Radio%20Jockey%20Training%20Programme%20-2%20(SDG%204).pdf",
  },
  {
    title: "Expert Talk on Promoting Solar Energy Adoption by Sri Mutyala Vamsi Krishna (SDG 4)",
    date: "08-10-2024",
    url: "https://mits.ac.in/assets/pdf/radio/08.10.2024%20-%20Expert%20Talk%20on%20Promoting%20Solar%20Energy%20Adoption%20by%20Sri%20Mutyala%20Vamsi%20Krishna%20at%20MITS%20Radio%2090.8%20(SDG%204).pdf",
  },
  {
    title: "Expert Talk on Economic Indicators Insights by Dr. R. Venkatamuni Reddy (SDG 4)",
    date: "01-10-2024",
    url: "https://mits.ac.in/assets/pdf/radio/01.10.2024%20-%20Expert%20Talk%20on%20Economic%20Indicators%20Insights%20from%20Dr.%20R.%20Venkatamuni%20Reddy%20at%20MITS%20Radio%2090.8%20(SDG%204).pdf",
  },
  {
    title: "NMIMS Business School Team Visit to MITS Radio 90.8 CR (SDG 4)",
    date: "26-09-2024",
    url: "https://mits.ac.in/assets/pdf/radio/26.09.2024%20-%20NMIMS%20Business%20School%20Team%20Visit%20to%20MITS%20Radio%2090.8%20CR%20(SDG%204).pdf",
  },
  {
    title: "Teachers' Day with MITS Radio 90.8 (SDG 4)",
    date: "05-09-2024",
    url: "https://mits.ac.in/assets/pdf/radio/2024%20-%2005-09-2024%20-%20MITS%20Radio%2090.8%20CR%20-%20Report%20on%20Teachers'%20Day%20with%20MITS%20RADIO%2090.8%20(SDG%204).pdf",
  },
  {
    title: "Radio Jockey Training Program (SDG 4)",
    date: "30-08-2024",
    url: "https://mits.ac.in/assets/pdf/radio/2024%20-%2030-8-2024%20-%20MITS%20RADIO%2090.8%20CR%20-%20Report%20on%20Radio%20Jockey%20Training%20Program%20(SDG%204).pdf",
  },
  {
    title: "Expert Talk on Ethical Horizons with Mr. Sukhiraman Manivannan",
    date: "20-08-2024",
    url: "https://mits.ac.in/assets/pdf/radio/2024%20-%2020-08-2024%20-%20MITS%20Radio%2090.8%20CR%20-%20Expert%20Talk%20on%20Ethical%20Horizons%20with%20Mr.%20Sukhiraman%20Manivannan%2C%20Practice%20Lead%20at%20CPX%2C%20Abu%20Dhabi.pdf",
  },
  {
    title: "World Breastfeeding Week (SDG 3)",
    date: "07-08-2024",
    url: "https://mits.ac.in/assets/pdf/radio/2024%20-%2007-08-2024%20-%20MITS%20Radio%2090.8%20CR%20-%20Report%20on%20World%20Breastfeeding%20Week%20(SDG%203).pdf",
  },
  {
    title: "World Hepatitis Day (SDG 3)",
    date: "29-07-2024",
    url: "https://mits.ac.in/assets/pdf/radio/2024%20-%2029-07-2024%20-%20MITS%20Radio%2090.8%20CR%20-%20Report%20on%20World%20Hepatitis%20Day%20(SDG%203).pdf",
  },
  {
    title: "Sustainability Transport (SDG 3 & 8)",
    date: "27-07-2024",
    url: "https://mits.ac.in/assets/pdf/radio/2024%20-%2027-7-2024%20-%20MITS%20RADIO%2090.8%20CR%20-%20Sustainability%20Transport%20(SDG%203%20%26%208).pdf",
  },
  {
    title: "Road Safety (SDG 3 & 8)",
    date: "26-07-2024",
    url: "https://mits.ac.in/assets/pdf/radio/2024%20-%2026-7-2024%20-%20MITS%20RADIO%2090.8%20CR%20-%20Road%20Safety%20(SDG%203%20%26%208).pdf",
  },
  {
    title: "International Yoga Day Awareness Session (SDG 3)",
    date: "21-06-2024",
    url: "https://mits.ac.in/assets/pdf/radio/International%20Yoga%20day%20%2021.06.2024.pdf",
  },
  {
    title: "Medical Interaction Programme (SDG 3)",
    date: "14-06-2024",
    url: "https://mits.ac.in/assets/pdf/radio/Medical%20Interaction%20program%20Report-14.07.2024%20(SDG%203).pdf",
  },
  {
    title: "World Environment Day: Informative Talk by Students (SDG 13)",
    date: "05-06-2024",
    url: "https://mits.ac.in/assets/pdf/radio/World%20Environment%20Day%2005.06.2024.pdf",
  },
  {
    title: "Benefits of Blood Donation: Informative Talk by Students (SDG 3)",
    date: "02-05-2024",
    url: "https://mits.ac.in/assets/radio/MITS%20Students%20_%20Benefits%20of%20Blood%20Donation%20_%20Report%20_%2002.05.2024%20-%20SDG%203.pdf",
  },
  {
    title: "Do's and Don'ts in Summer by Dr. Chennaiah, Deputy Civil Surgeon (SDG 3 & 13)",
    date: "02-05-2024",
    url: "https://mits.ac.in/assets/radio/Dr.%20R.%20Chennaiah%20_%20Do's%20and%20Don'ts%20in%20%20Summer%20_%20Report%20_%2002.05.2024%20-%20SDG%203%20%26%2013.pdf",
  },
  {
    title: "Mrs. Ritu Sharma (University Relations, Emerging Talent) Visit (SDG 5)",
    date: "30-04-2024",
    url: "https://mits.ac.in/assets/radio/Mrs.%20Ritu%20Sharma_%20Report%20_%2030%20April%202024%20-%20SDG%205.pdf",
  },
  {
    title: "Shri. Ram Singh (Scientist 'G' at RCMA) Visit (SDG 4 & 8)",
    date: "30-04-2024",
    url: "https://mits.ac.in/assets/radio/Shri.%20Ram%20Singh_%20Report%20_%2030%20April%202024%20-%20SDG%204%20%26%208.pdf",
  },
  {
    title: "Dr. Narasimhulu Thoti Visit to Community Radio Station (SDG 4 & 8)",
    date: "24-04-2024",
    url: "https://mits.ac.in/assets/radio/Dr.%20Narasimhulu%20Thoti%20_%20Report%20_%2024%20April%202024%20-%20SDG%204%20%26%208.pdf",
  },
  {
    title: "How Can We Make Our Radio Become Interesting (SDG 4)",
    date: "19-04-2024",
    url: "https://mits.ac.in/assets/radio/MITS%20Students%20_%20How%20can%20make%20our%20Radio%20become%20Interesting%20_%20Report%20_%2019.04.2024%20-%20SDG%204.pdf",
  },
  {
    title: "ATL's Boot Camp: Students of Jawahar Navodaya Vidyalaya, Chittoor Visit (SDG 4)",
    date: "21-02-2024",
    url: "https://mits.ac.in/assets/radio/ATL's%20Boot%20Camp%20%E2%80%93%20Students%20of%20Jawahar%20Navodaya%20Vidyalaya%2C%20Chittoor%20Visit%20_%2021.02.2024.pdf",
  },
  {
    title: "Visit to CR Sammelan (South)",
    date: "13-02-2024",
    url: "https://mits.ac.in/assets/radio/Visit%20to%20CR%20Sammelan%20(South)%20_%2013.02.2024%20and%2014.02.2024.pdf",
  },
  {
    title: "PKM-UDA (Palamaner Kuppam Madanapalle Urban Development Authority) Visit (SDG 8)",
    date: "18-01-2024",
    url: "https://mits.ac.in/assets/radio/Palamaner%20Kuppam%20Madanapalle%20Urban%20Development%20Authority%20(PKM-UDA)%20Visit%20_%2018.01.2024.pdf",
  },
  {
    title: "Major General M. K. Hada Visit (SDG 4 & 5)",
    date: "16-12-2023",
    url: "https://mits.ac.in/assets/radio/Maj%20Gen%20M%20K%20HADA%20Visit_%2016th%20December%202023.pdf",
  },
  {
    title: "Sri. S. Chandran (President, Koyambed Market) Visit (SDG 2 & 3)",
    date: "02-12-2023",
    url: "https://mits.ac.in/assets/radio/S%20Chadran%2C%20President%2C%20Koyambed%20Vegetable%20Market%20Visit%20_%2002.12.23.pdf",
  },
  {
    title: "Madanapalle Advocate Bar Association Members Visit (SDG 5 & 8)",
    date: "26-11-2023",
    url: "https://mits.ac.in/assets/radio/Madanapalle%20Advocate%20Bar%20Association%20Members%20Visit%20_%2026.11.23.pdf",
  },
  {
    title: "Celebration of Live Broadcast of 100th Episode of Mann Ki Baat (SDG 4)",
    date: "30-04-2023",
    url: "https://mits.ac.in/assets/radio/MANN%20KI%20BAAT.pdf",
  },
  {
    title: "RED FM 93.5 Team Visit to MITS Radio Station",
    date: "22-01-2023",
    url: "https://mits.ac.in/assets/pdf/radio/MITS%20RADIO%2090.8%20CR_Report_RED%20FM_Mr%20Sridhar%20Visit_22.01.2023.pdf",
  },
  {
    title: "First Field Recording by Garimella Balakrishna Prasad (T.T.D Asthana Vidwaan)",
    date: "12-01-2023",
    url: "https://mits.ac.in/assets/pdf/radio/MITS%20RADIO%2090.8%20CR_Trupati_Field%20Interview_12-01-2023.pdf",
  },
  {
    title: "Guest Lecture on Technical Aspects of Community Radio Station",
    date: "10-01-2023",
    url: "https://mits.ac.in/assets/pdf/radio/MITS%20RADIO%2090.8%20CR%20_Guest%20Lecture_%20Report_10_jan_2023.pdf",
  },
  {
    title: "One Day Visit by Dr. R. Sreedhar ('Father of Community Radio in India')",
    date: "17-12-2022",
    url: "https://mits.ac.in/assets/pdf/radio/MITS%20RADIO%2090.8%20CR_Report_Dr%20Sreedher%20Visit_17.12.2022.pdf",
  },
  {
    title: "Participation of MITS Faculty in Community Radio Workshop at SVCE Tirupati",
    date: "16-12-2022",
    url: "https://mits.ac.in/assets/pdf/radio/MITS%20RADIO%2090.8%20CR_Workshop_participation_Report_16.12.2022.pdf",
  },
  {
    title: "Radio Jockeys Selection at MITS Radio 90.8 CRS",
    date: "16-10-2022",
    url: "https://mits.ac.in/assets/pdf/radio/MITS%20RADIO%2090.8%20CR%20__RADIO%20JOCKEYS%20SELECTION_16.10.2022.pdf",
  },
  {
    title: "A 3 Day Workshop on Skills needed for Radio Jockeys & Content Creation",
    date: "03-12-2022",
    url: "https://mits.ac.in/assets/pdf/radio/MITS%20RADIO%2090.8%20CR_3%20DAY%20WORKSHOP%20Report_01-12-2022%20to%2003-12-2022.pdf",
  },
];

export const radioGallery = [
  "https://mits.ac.in/public/uploads/radio/index1.jpg",
  "https://mits.ac.in/public/uploads/radio/index2.jpg",
  "https://mits.ac.in/public/uploads/radio/index4.jpg",
  "https://mits.ac.in/public/uploads/radio/5.jpg",
  "https://mits.ac.in/public/uploads/radio/image.png",
  "https://mits.ac.in/public/uploads/radio/image1.png",
  "https://mits.ac.in/public/uploads/radio/image2.png",
  "https://mits.ac.in/public/uploads/radio/2d6f8cfe40d5a48360db277e15be5cf5.JPG",
  "https://mits.ac.in/public/uploads/radio/inau.JPG",
  "https://mits.ac.in/public/uploads/radio/radio5.JPG",
  "https://mits.ac.in/public/uploads/radio/radio6.JPG",
  "https://mits.ac.in/public/uploads/radio/radio1.JPG",
  "https://mits.ac.in/public/uploads/radio/radio2.JPG",
  "https://mits.ac.in/public/uploads/radio/radio3.JPG",
  "https://mits.ac.in/public/uploads/radio/radio4.JPG",
  "https://mits.ac.in/public/uploads/radio/hl-28914178242.jpg",
  "https://mits.ac.in/public/uploads/radio/hl-28914178354.jpg",
  "https://mits.ac.in/public/uploads/radio/hl-28914178367.jpg",
  "https://mits.ac.in/public/uploads/radio/hl-28914178375.jpg",
  "https://mits.ac.in/public/uploads/radio/hl-28914178312.jpg",
  "https://mits.ac.in/public/uploads/radio/111-min.jpg",
  "https://mits.ac.in/public/uploads/radio/222-min.jpg",
  "https://mits.ac.in/public/uploads/radio/333-min.jpg",
  "https://mits.ac.in/public/uploads/radio/444-min.jpg",
  "https://mits.ac.in/public/uploads/radio/DSC_9224-min.JPG",
  "https://mits.ac.in/public/uploads/radio/DSC_9237-min.JPG",
  "https://mits.ac.in/public/uploads/radio/DSC_9241-min.JPG",
  "https://mits.ac.in/public/uploads/radio/DSC_9229.JPG",
  "https://mits.ac.in/public/uploads/radio/DSC_6894.JPG",
  "https://mits.ac.in/public/uploads/radio/DSC_6896.JPG",
  "https://mits.ac.in/public/uploads/radio/DSC_6904.JPG",
  "https://mits.ac.in/public/uploads/radio/DSC_6912.JPG",
];

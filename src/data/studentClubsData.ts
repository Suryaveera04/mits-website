export interface ClubReport {
  title: string;
  url: string;
  year?: string;
}

export interface StudentClubItem {
  id: string;
  name: string;
  sno?: number;
  category?: string;
  facultyAdvisor: string;
  studentCoordinator: string;
  contactNumber: string;
  image?: string;
  about: string;
  vision?: string;
  mission?: string;
  activities?: string[];
  events: ClubReport[];
}

export interface OfficialClubTab {
  id: string;
  name: string;
  logo: string;
  intro: string;
  sections: { heading: string; text: string }[];
  reports: ClubReport[];
  tab1Docs?: ClubReport[];
}

export const officialClubsTabs: OfficialClubTab[] = [
  {
    "id": "ug-tab1",
    "name": "About Student Clubs",
    "logo": "",
    "intro": "",
    "sections": [
      {
        "heading": "Inauguration of AI Learning Hub",
        "text": ""
      },
      {
        "heading": "Workshop",
        "text": ""
      },
      {
        "heading": "Workshop",
        "text": ""
      },
      {
        "heading": "Anti-Ragging Logo League",
        "text": "Anti-Ragging Logo League under Skill Bee Club was organized by Student Activity Center & Anti-Ragging Cell at MITS in association with Department of CSE - Data Science. Date: 14th August 2025"
      },
      {
        "heading": "Anti-Ragging Art Competition",
        "text": "Anti-Ragging Art Competition was organized at MITS in association Arts and Clutural Club. Date: 14th August 2025"
      },
      {
        "heading": "Zero Tolerance Ralley",
        "text": "Zero Tolerance Ralley was organized at MITS in association MSR Club Date: 12th August 2025"
      },
      {
        "heading": "Anti-Ragging Week",
        "text": "Anti-Ragging Week was organized at MITS in association with Film Makers Club, SAC and Anti-Ragging Cell. Date: 12th August 2025"
      },
      {
        "heading": "Importance of Student Clubs :",
        "text": "Students\u2019 Clubs are the main hub of student activity. They provide an outlet and a stage for the creative juices of young minds and hearts. The clubs give you the chance to apply classroom learning in the outside world. This helps you to gain invaluable leadership as well as life skills. In addition to connecting other students who have similar interests, students\u2019 clubs make students to interact with alumni and professionals in their fields of interest."
      },
      {
        "heading": "Benefits of Students Clubs:",
        "text": "Students\u2019 clubs enrich your experience, create a diverse community, encourage involvement, and provide opportunities for students to build valuable skills This helps you to build formal and informal networks while exploring career opportunities. Open to all students, these clubs organize programs, events, and meetings throughout the academic year. Clubs listed here are officially recognized.\n\nClubs\n\nName of the Club Faculty Advisor Student Coordinator Contact Number Arts and Cultural Club Mr. Y. Pradeep Kumar B. Amrutha 6281360083 R. Nikhil 9666685646 Film Makers Club Mr. K. Md.Riyaz Ali M.K. Sudheer 7013242253 G. Ramanjeneyulu Reddy 8555946223 Web Club Dr. P. Kavitha R. Baba Fakhruddin 9704290783 Syed Mansoor 8096126294 MSR Club Mr. B.S.H. Shayeez Ahamed V. Venkata Tarun 6303544711 Sports Club Dr. C. Damodharan M.G. Lokesh 9515771641 P. Vyshnavi 9154790706 Yoga & Meditation Club Mr. K. Manju Vikram Muppireddy Keerthi 7569116140 Sai Phani Charan S.M 6361772686 ARC Club Mr. Rajkumar. G C. Usman Gani 9441578782 T. Yugesh 6281185755 Tech Club Mr. D. Abdul Jaleel Y. Charan Teja Reddy 8341484199 K. Ayesha 8978703213 Anchors Club Mr. Narasimha Charlu Gavvala Narendra Kumar 9010735719 Literary club Mr. T. Rama Mohan Yangala Likitha 9391504875 J. Naveen Kumar 7013255586 Builders Club Dr. K. Imran Kopparthi Nandini Reddy 7793933029 Sabir Shaik 7815970442 Drone Technology Club Mr. P. Mohammed Rizwan Ali B.Sathvik 9030304850 AI Learning Hub Club Mr. Shaik Tipu Rahaman N. Ashraf Vali 6281025228 Palagiri Mahammad Aman 9989706451 Enterprenuers Club Dr. Kosaraju Sireesha Yasheen Khan Nyazi 7993657748 Thoppireddy Sai Poojitha - Skill Bee club Mr. K. Durga Charan K. Nikhil 9390125801 G. Gangaiah Coding Club Mrs. Komala Anamalamudi Mogili Kushal vardhan 7382545438 S C Sujan 6309959667 Cisco Networking Club Dr. V. Jayaprakasan K. Lokeswar Reddy 7989239624"
      }
    ],
    "reports": [
      {
        "title": "Click here for Report on Event",
        "url": "https://mits.ac.in/public/uploads/sac/Inauguration of AI Learning Hub.pdf"
      },
      {
        "title": "Click here for Report on Event",
        "url": "https://mits.ac.in/public/uploads/sac/28th Annual Day Celebrations 2026.pdf"
      },
      {
        "title": "Click here for Event Details",
        "url": "https://mits.ac.in/public/uploads/sac/Introduction to Development Environment.pdf"
      },
      {
        "title": "Student Club Constitution",
        "url": "https://mits.ac.in/public/uploads/sac/SOP of SAC 2025-26.pdf"
      },
      {
        "title": "Consolidate Student Club Activities 2024-2025",
        "url": "https://mits.ac.in/public/uploads/sac/STUDENT CLUB ACTIVITIES -ACADEMIC YEAR 2024-25.pdf"
      }
    ],
    "tab1Docs": [
      {
        "title": "Student Club Constitution",
        "url": "https://mits.ac.in/public/uploads/sac/SOP of SAC 2025-26.pdf"
      },
      {
        "title": "Event Calender",
        "url": "https://calendar.google.com/calendar/u/0/embed?src=69849e23341ca5a7ae2952df17e3fb78318e6d704f514726f577a8391f650481@group.calendar.google.com&ctz=Asia/Kolkata"
      },
      {
        "title": "Consolidate Student Club Activities 2025-2026",
        "url": "https://mits.ac.in/public/uploads/sac/AY 2025-26 Odd Semester_ Consolidated Activities List 2025-26.pdf"
      },
      {
        "title": "Consolidate Student Club Activities 2024-2025",
        "url": "https://mits.ac.in/public/uploads/sac/STUDENT CLUB ACTIVITIES -ACADEMIC YEAR 2024-25.pdf"
      },
      {
        "title": "Consolidate Student Club Activities 2023-2024",
        "url": "https://mits.ac.in/public/uploads/sac/Consolidate Student Club Activities-2023-2024.pdf"
      },
      {
        "title": "Consolidate Student Club Activities 2022-2023",
        "url": "https://mits.ac.in/public/uploads/sac/Consolidate Student Club Activities-2022-2023.pdf"
      },
      {
        "title": "Consolidate Student Club Activities 2021-2022",
        "url": "https://mits.ac.in/public/uploads/sac/Consolidate Student Club Activities-2021-2022.pdf"
      }
    ]
  },
  {
    "id": "ug-tab2",
    "name": "Arts & Cultural Club",
    "logo": "images/club/ac.jpg",
    "intro": "\u201cArt is not what you see but what you make others see\u201d. With this belief in mind, MITS endeavors to showcase life as they see it through the eyes of art. Arts and Cultural Club is an ambitious, all-inclusive one. It is a tempting, artistic, beautiful meeting-place for anybody with passion. The clubs\u2019 mission is to bring out the hidden talents among students and also provide them a stage where they can showcase their arts and cultural talent and interest. The club provides lot of opportunities in the form of competitions and workshops for igniting the spark of interest present in the budding technocrats and honing their skills towards showcasing their talents.",
    "sections": [],
    "reports": [
      {
        "title": "Arts & Cultural Club Activities 2025-26",
        "url": "https://mits.ac.in/public/uploads/sac/Arts & cultural Club 2025-26.pdf"
      },
      {
        "title": "Arts & Cultural Club Activities 2024-25",
        "url": "https://mits.ac.in/public/uploads/sac/Arts & Cultural Club Activities 2024-25.pdf"
      },
      {
        "title": "Arts & Cultural Club Activities 2023-24",
        "url": "https://mits.ac.in/public/uploads/sac/Apna time Aayega2.pdf"
      },
      {
        "title": "Arts & Cultural Club Activities 2022-23",
        "url": "https://mits.ac.in/public/uploads/sac/2022-23 Cultural.pdf"
      },
      {
        "title": "Arts & Cultural Club Activities 2021-22",
        "url": "https://mits.ac.in/public/uploads/sac/2021-22 Cultural.pdf"
      },
      {
        "title": "Arts & Cultural Club Activities 2020-21",
        "url": "https://mits.ac.in/public/uploads/sac/5228488c7cd6f098759641f231a79fb6.pdf"
      },
      {
        "title": "Arts & Cultural Club Activities 2019-20",
        "url": "https://mits.ac.in/public/uploads/sac/2a15bdb77e5d651b9cb33bb342847ddf.pdf"
      },
      {
        "title": "Arts & Cultural Club Activities 2018-19",
        "url": "https://mits.ac.in/public/uploads/sac/3aa02e9480f257016a30ebcd8acf3d92.pdf"
      },
      {
        "title": "Arts & Cultural Club Activities 2017-18",
        "url": "https://mits.ac.in/public/uploads/sac/fc58b77d7e0dacd27d5b213c6e5c2f29.pdf"
      },
      {
        "title": "Arts & Cultural Club Activities 2016-17",
        "url": "https://mits.ac.in/public/uploads/sac/7a1a1c93daeba450e9c171cdf571be24.pdf"
      },
      {
        "title": "Arts & Cultural Club Activities 2015-16",
        "url": "https://mits.ac.in/public/uploads/sac/a792504508eecaea36157decc9c0dd0a.pdf"
      },
      {
        "title": "Arts & Cultural Club Activities 2014-15",
        "url": "https://mits.ac.in/public/uploads/sac/b5f08d81b6f6fd813e9a45562bb5e09c.pdf"
      },
      {
        "title": "Awards - Medals for Sport Cultural",
        "url": "https://mits.ac.in/public/uploads/sac/c788fe0d2acb77c96f6642c2bdeb70fb.pdf"
      }
    ],
    "tab1Docs": []
  },
  {
    "id": "ug-tab3",
    "name": "Film Makers Club",
    "logo": "images/club/fm.jpg",
    "intro": "",
    "sections": [
      {
        "heading": "About Us:",
        "text": "This Film Makers Club is open to all students interested in making, directing, filming, acting in, or editing student films and photography in our campus. Our goal is to bring together students who are interested in film and film making in order to encourage and provide support and guidance for student filmmaking, photography interests and activities."
      },
      {
        "heading": "Objectives:",
        "text": "To encourage and motivate the creating aspirants in MITS. To bring together students from all backgrounds, with all kinds of interests and areas of expertise, and allow them to work in the field of their interest and hone their skills in video production. Our club intends to encourage students in the field of dramatics by enacting plays, making short films and thereby enabling students to develop their interpersonal skills."
      },
      {
        "heading": "Activities Planned:",
        "text": "Coming up with different stage shows and short films at a constant basis. Organizing various short film competitions as well as stage shows showcasing acting talent. Preparing a firm editing team and a good team. Making short films on society and environmental issues. Learning both about film and film-making. To engage the students in a common interest of photography. To spot the shots that shows the defects in nature and in students. To get promote the college in films by conducting contests on short film. The camera for short film has to be brought by student. Our College Short films will be promoted in Social Media.\n\nJoining in our club might expose you to new genres, directors and pictures you\u2019ve never heard of before. You may also get to work on your own feature that will be screened to the rest of the student body.\n\nAll stages of film making are completely student-run, from writing screenplays to final editing.\n\nNO EXPERIENCE IS REQUIRED!\n\nTo anyone who is interested in film making: come join the best film making club on campus! See you on the big screen!"
      }
    ],
    "reports": [
      {
        "title": "Film Maker Club Events 2025-26",
        "url": "https://mits.ac.in/public/uploads/sac/Film Making Club 2025-26.pdf"
      },
      {
        "title": "Film Maker Club Events 2024-25",
        "url": "https://mits.ac.in/public/uploads/sac/Film Maker Club Activities 2024-25.pdf"
      },
      {
        "title": "Cine Craft 2023-24",
        "url": "https://mits.ac.in/public/uploads/sac/cd1c86e1d87c4ffe88c11c56af593731.pdf"
      },
      {
        "title": "Short Film Contest 2022-23",
        "url": "https://mits.ac.in/public/uploads/sac/Short Film Contest Report-17-12-2022.pdf"
      },
      {
        "title": "Film Makers Club Events 2022-2023",
        "url": "https://mits.ac.in/public/uploads/sac/Film Makers Club Events 2022-2023.pdf"
      },
      {
        "title": "Film Makers Club Events",
        "url": "https://mits.ac.in/public/uploads/sac/Film Makers Club Events Summary.pdf"
      },
      {
        "title": "Film Makers Club Events 2021-2022",
        "url": "https://mits.ac.in/public/uploads/sac/a83d18f2a6f05ff36a11346fd9a45526.pdf"
      },
      {
        "title": "Film Makers Club Events 2018-19",
        "url": "https://mits.ac.in/public/uploads/sac/f150a65ebc83259882969dd54da1c762.pdf"
      },
      {
        "title": "Film Makers Club Events 2017-18",
        "url": "https://mits.ac.in/public/uploads/sac/7f1e2a5f5f7902c674ebbbf90e910c15.pdf"
      },
      {
        "title": "Film Makers Club Events 2016-17",
        "url": "https://mits.ac.in/public/uploads/sac/b248f532e51f89c1c5b71ec25acbf35f.pdf"
      },
      {
        "title": "Film Makers Club Events 2015-16",
        "url": "https://mits.ac.in/public/uploads/sac/530f7804fe9e7c8ad3b3615e6f6cd8a1.pdf"
      }
    ],
    "tab1Docs": []
  },
  {
    "id": "ug-tab4",
    "name": "Sports Club",
    "logo": "images/club/sp.jpg",
    "intro": "Sports club encourages students to develop their sports skills in various outdoor and indoor games like Football, Handball, Tennis, Cricket, Ball Badminton, Kabaddi, Volleyball, Athletics, Chess, Carom Board, Table Tennis, Shuttle Badminton, Physical Fitness Program (will be conducted in Gym), Weight Lifting. Our college has grounds and equipment for each of these sports. The club also encourages the students to participate in Inter College and Intramural College sports competitions.",
    "sections": [],
    "reports": [
      {
        "title": "Sports Club Activities 2025-26",
        "url": "https://mits.ac.in/public/uploads/sac/Sports  2025-26.pdf"
      },
      {
        "title": "Sports Club Activities 2024-25",
        "url": "https://mits.ac.in/public/uploads/sac/Sports Club Activities 2024-25.pdf"
      },
      {
        "title": "Sports Club Activities 2023-24",
        "url": "https://mits.ac.in/public/uploads/sac/Sports Club Activities 2023-2024.pdf"
      },
      {
        "title": "Sports Club Activities 2022-23",
        "url": "https://mits.ac.in/public/uploads/sac/Sports Club Activities 2022-2023.pdf"
      },
      {
        "title": "Sports Club Activities 2021-22",
        "url": "https://mits.ac.in/public/uploads/sac/Sports Club-2021-2022.pdf"
      }
    ],
    "tab1Docs": []
  },
  {
    "id": "ug-tab5",
    "name": "MSR Club",
    "logo": "images/club/msr.jpg",
    "intro": "MITS Social Responsibility Club",
    "sections": [
      {
        "heading": "Vision:",
        "text": "To awakening the inner person with spirit of service for the betterment of society and to inculcate mutual helpingness among the people."
      },
      {
        "heading": "Mission:",
        "text": "Social service oriented activities that makes people understand the society."
      },
      {
        "heading": "Activities:",
        "text": ""
      }
    ],
    "reports": [
      {
        "title": "MITS Social Responsibility Club Events 2025-26",
        "url": "https://mits.ac.in/public/uploads/sac/MSR 2025 - 2026.pdf"
      },
      {
        "title": "MITS Social Responsibility Club Events 2024-25",
        "url": "https://mits.ac.in/public/uploads/sac/MSR Club Activities 2024-25.pdf"
      },
      {
        "title": "MITS Social Responsibility Club Events 2023-24",
        "url": "https://mits.ac.in/public/uploads/sac/MITS Social Responsibility Club Events 2023-24.pdf"
      },
      {
        "title": "MITS Social Responsibility Club Events 2022-23",
        "url": "https://mits.ac.in/public/uploads/sac/MITS Social Responsibility Club Events 2022-23.pdf"
      },
      {
        "title": "MITS Social Responsibility Club Events 2021-22",
        "url": "https://mits.ac.in/public/uploads/sac/MSR Club-2021-22.pdf"
      },
      {
        "title": "MITS Social Responsibility Club Events 2020-21",
        "url": "https://mits.ac.in/public/uploads/sac/ac82cb1aba576a01d2e642de5f8b78ff.pdf"
      },
      {
        "title": "MITS Social Responsibility Club Events 2019-20",
        "url": "https://mits.ac.in/public/uploads/sac/6c49871302600c41c03bddfa0c049c67.pdf"
      },
      {
        "title": "MITS Social Responsibility Club Events 2018-19",
        "url": "https://mits.ac.in/public/uploads/sac/77b7d7159df6492ac35fd6dcbea95b29.pdf"
      },
      {
        "title": "MITS Social Responsibility Club Events 2017-18",
        "url": "https://mits.ac.in/public/uploads/sac/7b59bd2c14705390ace0321218dab3ab.pdf"
      },
      {
        "title": "MITS Social Responsibility Club Events 2016-17",
        "url": "https://mits.ac.in/public/uploads/sac/9aacf5fad9c5f294765475370d7c8305.pdf"
      }
    ],
    "tab1Docs": []
  },
  {
    "id": "ug-tab6",
    "name": "Web Club",
    "logo": "images/club/webclub.jpg",
    "intro": "",
    "sections": [
      {
        "heading": "About MITS Web Club",
        "text": "\"Empowering Innovation, Connecting Creators\u201d. Our MITS Web Club envisions a dynamic and inclusive community where students passionate about web development and technology come together to foster innovation, share knowledge, and create meaningful connections. Our web club provides a vibrant platform for students to explore, learn, and excel in web development. Through collaborative initiatives, skill-building activities, and a supportive community, we aim to empower our members to become proficient, innovative, and socially conscious web developers."
      },
      {
        "heading": "Activities:",
        "text": "Conducting workshops regularly. Organize the guest lectures on web development. Organizing the competitions to encourage the student\u2019s participation in web related activities. We also assign tasks to and providing them with practical challenges to reinforce and apply the concepts learned during the sessions. We further enhance participants' skills by offering small projects that provide hands-on experience and allow for the application of workshop concepts."
      },
      {
        "heading": "Achivements:",
        "text": "NASA Conference Web site:\n\nhttps://mits-cse-nasa23.netlify.app\n\nICOTL 2K23 Conference Web site:\n\nhttp://www.icotl.in"
      }
    ],
    "reports": [
      {
        "title": "https://mits-cse-nasa23.netlify.app",
        "url": "https://mits-cse-nasa23.netlify.app"
      },
      {
        "title": "http://www.icotl.in",
        "url": "http://www.icotl.in"
      },
      {
        "title": "Web Club Activities Report 2025-26",
        "url": "https://mits.ac.in/public/uploads/sac/MITS WEB CLUB 2025 - 2026.pdf"
      },
      {
        "title": "Web Club Activities Report 2024-25",
        "url": "https://mits.ac.in/public/uploads/sac/Web Club Activities 2024-25.pdf"
      },
      {
        "title": "Full Stack Development - Backend",
        "url": "https://mits.ac.in/public/uploads/sac/Full Stack Development -Backend.pdf"
      },
      {
        "title": "Web Club Activities Report 2023-24",
        "url": "https://mits.ac.in/public/uploads/sac/db61017e8a6ecb104cd37c5d9f9283eb.pdf"
      },
      {
        "title": "Web Club Activities Report 2022-23",
        "url": "https://mits.ac.in/public/uploads/sac/WebClub Report 2022-23.pdf"
      }
    ],
    "tab1Docs": []
  },
  {
    "id": "ug-tab7",
    "name": "Tech Club",
    "logo": "images/club/tech.jpg",
    "intro": "For the all-round development of the students and to enrich their technical knowledge the institute provides a platform for various students\u2019 activities. This club envisages conducive platform to explore student\u2019s latent talents and also to enable them to come out with their innovative ideas.\n\nThe students are encouraged to become the member of Tech Club to help broaden their skills and horizons. The Tech Club not only help the students explore their hidden talent but also help in areas such as personality development and inculcating in the students the spirit of organization by providing them with a platform for hosting their technical talents.\n\nThe focus of the Tech club primarily is to help the students gain practical as well as theoretical technical knowledge. Students are provided with an opportunity to implement what they learn in their respective class rooms.",
    "sections": [
      {
        "heading": "Activities under Tech Club:",
        "text": ""
      }
    ],
    "reports": [
      {
        "title": "Tech Club Events 2025-26",
        "url": "https://mits.ac.in/public/uploads/sac/Tech Club Events for the AY - 2025-2026.pdf"
      },
      {
        "title": "Tech Club Events 2024-25",
        "url": "https://mits.ac.in/public/uploads/sac/Tech Club Activities 2024-25.pdf"
      },
      {
        "title": "Tech Club Events 2023-24",
        "url": "https://mits.ac.in/public/uploads/sac/Tech Kriti.pdf"
      },
      {
        "title": "Tech Club Events 2022-23",
        "url": "https://mits.ac.in/public/uploads/sac/FUN WITH TECH-min.pdf"
      },
      {
        "title": "Tech Club Events 2021-22",
        "url": "https://mits.ac.in/public/uploads/sac/2021-2022-tech club.pdf"
      },
      {
        "title": "Tech Club Events 2018-19",
        "url": "https://mits.ac.in/public/uploads/sac/5ecda49684050ddc72199329a11932d3.pdf"
      },
      {
        "title": "Tech Club Events 2017-18",
        "url": "https://mits.ac.in/public/uploads/sac/8d221fe2707781154273feb3349bd178.pdf"
      },
      {
        "title": "Tech Club Events 2016-17",
        "url": "https://mits.ac.in/public/uploads/sac/903e4e374851f00967b595d40ee19e0d.pdf"
      },
      {
        "title": "Tech Club Events 2016",
        "url": "https://mits.ac.in/public/uploads/sac/7cf2448d688108d390eaa4f19ad127a2.pdf"
      }
    ],
    "tab1Docs": []
  },
  {
    "id": "ug-tab15",
    "name": "Coding Club",
    "logo": "",
    "intro": "",
    "sections": [
      {
        "heading": "Vision:",
        "text": "To cultivate a community of skilled and industry-ready programmers by fostering innovation, problem-solving, and collaboration, ensuring engineering students excel in placements and technical careers."
      },
      {
        "heading": "Mission:",
        "text": "1) Empower students with coding skills through workshops, hackathons, and mentorship programs. 2) Encourage innovation and creativity by working on projects, competitive coding, and AI/ML applications. 3) Engage with industry experts and tech leaders to provide real-world exposure and career guidance. 4) Enhance problem-solving and logical thinking abilities by participating in coding challenges and technical discussions. 5) Expand our reach by building an inclusive and collaborative environment for all skill levels, from beginners to experts."
      }
    ],
    "reports": [
      {
        "title": "Coding Club Activities 2024-25",
        "url": "https://mits.ac.in/public/uploads/sac/Coding Club Activities 2024-25.pdf"
      }
    ],
    "tab1Docs": []
  },
  {
    "id": "ug-tab8",
    "name": "Builders Club",
    "logo": "images/club/buildersclub.png",
    "intro": "",
    "sections": [
      {
        "heading": "Vision:",
        "text": "To bring in astonishing innovation for the benefit of the society through the Civil Engineering domain, including innovative buildings, innovative building materials, innovative bridges, green buildings, green pavement etc., which will serve the community and develop the nation."
      },
      {
        "heading": "Mission:",
        "text": "1) Explore the unknown and unlock new possibilities in the field of Civil Engineering. 2) Design innovative Civil Engineering structures which are sustainable, economical and beneficial to the society. 3) Conduct various competitive events to promote innovation. 4) Periodic interaction with field experts to share their ideas with the students."
      }
    ],
    "reports": [
      {
        "title": "Builder's Club Activities 2025-26",
        "url": "https://mits.ac.in/public/uploads/sac/Builders Club Events 2025-26.pdf"
      },
      {
        "title": "Builder's Club Activities 2024-25",
        "url": "https://mits.ac.in/public/uploads/sac/Builders Club Activities 2024-25.pdf"
      },
      {
        "title": "Builder's Club Activities 2023-24",
        "url": "https://mits.ac.in/public/uploads/sac/7d8a9b93ec0e765a3e787d15b7054b6a.pdf"
      },
      {
        "title": "Builder's Club Activities 2022-23",
        "url": "https://mits.ac.in/public/uploads/sac/Report of Guest Lecture on Low-Cost Housing-1-min.pdf"
      }
    ],
    "tab1Docs": []
  },
  {
    "id": "ug-tab9",
    "name": "Literary Club",
    "logo": "images/club/lc.jpg",
    "intro": "The English Literary Club of MITS was inaugurated by the Department of English and Foreign Languages in 2022. The club aims at nurturing the zeal for English literature among the students, thereby augmenting their creativity and language acquisition. It provides a platform to exhibit their innate literary potential.",
    "sections": [
      {
        "heading": "Vision:",
        "text": "The club envisions kindling the literary interests and providing an exemplary platform for the students to immerse themselves in the ocean of English literature and art, thereby fostering their creative potential to enhance their personality, thoughts, ideas, and expression."
      },
      {
        "heading": "Mission:",
        "text": "The club\u2019s mission is to organize literary activities and events, with an unflinching determination to help students build their personality holistically.\n\nActivities:\n\nThe club conducts literary activities such as debates, dramas, group discussions, interactive sessions, skits, poetry and short story writing, storytelling, and quiz contests."
      }
    ],
    "reports": [
      {
        "title": "\"The Critical Pen\u201d on 9th September 2026",
        "url": "https://mits.ac.in/public/uploads/sac/The Critical Pen.pdf"
      },
      {
        "title": "Literary Club Activities 2025-26",
        "url": "https://mits.ac.in/public/uploads/sac/Literary Club 2025-26.pdf"
      },
      {
        "title": "Literary Club Activities 2024-25",
        "url": "https://mits.ac.in/public/uploads/sac/Literary Club Activities 2024-25.pdf"
      },
      {
        "title": "Kaizen - The Thoughts Caf\u00e9 (24th October 2024)",
        "url": "https://mits.ac.in/public/uploads/sac/Kaizen-TTC Report Oct 24 2024.pdf"
      },
      {
        "title": "Kaizen - The Thoughts Caf\u00e9 (17th October 2024)",
        "url": "https://mits.ac.in/public/uploads/sac/Kaizen-TTC Report Oct 17 2024.pdf"
      },
      {
        "title": "Kaizen - The Thoughts Caf\u00e9 (3rd October 2024)",
        "url": "https://mits.ac.in/public/uploads/sac/Kaizen-TTC Report Oct 3 2024.pdf"
      },
      {
        "title": "Kaizen - The Thoughts Caf\u00e9 (5th September 2024)",
        "url": "https://mits.ac.in/public/uploads/sac/Kaizen-TTC Report Sep 5 2024.pdf"
      },
      {
        "title": "Ink and Imagination September 2024",
        "url": "https://mits.ac.in/public/uploads/sac/Ink and Imagination September 2024.pdf"
      },
      {
        "title": "Toonverse Adventure September 2024",
        "url": "https://mits.ac.in/public/uploads/sac/Toonverse Adventure - September 2024.pdf"
      },
      {
        "title": "Kaizen - The Thoughts Caf\u00e9 (29th August 2024)",
        "url": "https://mits.ac.in/public/uploads/sac/Kaizen-TTC Report Aug 29 2024.pdf"
      },
      {
        "title": "Kaizen - The Thoughts Caf\u00e9 (22nd August 2024)",
        "url": "https://mits.ac.in/public/uploads/sac/Kaizen-TTC Report August 22nd 2024.pdf"
      },
      {
        "title": "Kaizen - The Thoughts Caf\u00e9 (7th August 2024)",
        "url": "https://mits.ac.in/public/uploads/sac/Kaizen-TTC Report August 7th 2024.pdf"
      },
      {
        "title": "Kaizen - The Thoughts Caf\u00e9 (16th February 2024)",
        "url": "https://mits.ac.in/public/uploads/sac/Kaizen-TTC%20Report%20feb%2016th%202024.pdf"
      },
      {
        "title": "Kaizen - The Thoughts Caf\u00e9 (18th January 2024)",
        "url": "https://mits.ac.in/public/uploads/sac/Kaizen-TTC%20Report%20Jan%2018%202024.pdf"
      },
      {
        "title": "Kaizen - The Thoughts Caf\u00e9 (16th November 2023)",
        "url": "https://mits.ac.in/public/uploads/sac/Kaizen-TTC Report Nov 16 2023.pdf"
      },
      {
        "title": "Kaizen - The Thoughts Caf\u00e9 (2nd November 2023)",
        "url": "https://mits.ac.in/public/uploads/sac/Kaizen-TTC Report Nov 2 2023.pdf"
      },
      {
        "title": "Kaizen - The Thoughts Caf\u00e9 (14th September 2023)",
        "url": "https://mits.ac.in/public/uploads/sac/Kaizen-TTC Report September 14 2023.pdf"
      },
      {
        "title": "Kaizen - The Thoughts Caf\u00e9 (7th September 2023)",
        "url": "https://mits.ac.in/public/uploads/sac/Kaizen-TTC Report September 7 2023.pdf"
      },
      {
        "title": "The International Day of Peace - 2023",
        "url": "https://mits.ac.in/public/uploads/sac/Peace Day 2024.pdf"
      },
      {
        "title": "Kaizen - The Thoughts Caf\u00e9 (22 June 2023)",
        "url": "https://mits.ac.in/public/uploads/sac/Kaizen-TTC Report June 22.pdf"
      },
      {
        "title": "Kaizen - The Thoughts Caf\u00e9 (15 June 2023)",
        "url": "https://mits.ac.in/public/uploads/sac/Kaizen-TTC Report June 15.pdf"
      },
      {
        "title": "Kaizen - The Thoughts Caf\u00e9 (08 June 2023)",
        "url": "https://mits.ac.in/public/uploads/sac/Kaizen-TTC Report June 08.pdf"
      },
      {
        "title": "Kaizen - The Thoughts Caf\u00e9 (Week 3)",
        "url": "https://mits.ac.in/public/uploads/sac/3.Kaizen - The Thoughts Caf\u00e9 (Week 3).pdf"
      },
      {
        "title": "Kaizen - The Thoughts Caf\u00e9 (Week 2)",
        "url": "https://mits.ac.in/public/uploads/sac/Kaizen - The Thoughts Caf\u00e9 (Week 2).pdf"
      },
      {
        "title": "Kaizen - The Thoughts Caf\u00e9 (Week 1)",
        "url": "https://mits.ac.in/public/uploads/sac/cde32369320cbd5d65cb3ee34e44ee33.pdf"
      },
      {
        "title": "Kaizen - The Thoughts Caf\u00e9 Manifesto",
        "url": "https://mits.ac.in/public/uploads/sac/1.Kaizen-TTC Manifesto.pdf"
      },
      {
        "title": "Literary Club - Express your Extremes",
        "url": "https://mits.ac.in/public/uploads/sac/Literary Club-Express your Extremes.pdf"
      },
      {
        "title": "Literary Club - Talent Hunt",
        "url": "https://mits.ac.in/public/uploads/sac/Literary Club-Talent Hunt.pdf"
      }
    ],
    "tab1Docs": []
  },
  {
    "id": "ug-tab10",
    "name": "Yoga & Meditation Club",
    "logo": "images/club/yg.jpg",
    "intro": "Yoga & Meditation Club\n\nYoga and meditation club helps in understanding the physical and psychical controls whose aim is to make practitioner aware of the identity of Atma (soul) and Brahman (supreme soul). Yoga and meditation club not only provides health, vigour, brightness and alertness to the body and mind, it also fills the life with satisfaction, happiness and pleasure. The Main objective of the club is to reduces tension, stress, anxiety, weakness, helplessness, fear, negative thoughts etc. which are increased day by day in this mechanical human life",
    "sections": [
      {
        "heading": "Activities",
        "text": "Conducts yoga and meditation training classes Organizes guest lectures on spiritual education and ethical values Conducts competitions related yoga and meditation Renders services such as yoga classes, donations and awareness programs to needy people"
      }
    ],
    "reports": [
      {
        "title": "Yoga and Meditation Club 2025-26",
        "url": "https://mits.ac.in/public/uploads/sac/YOGA 2025-2026 Reports.pdf"
      },
      {
        "title": "Yoga and Meditation Club 2024-25",
        "url": "https://mits.ac.in/public/uploads/sac/Yoga and Meditation Club Activities 2024-25.pdf"
      },
      {
        "title": "Yoga and Meditation Club 2021-22",
        "url": "https://mits.ac.in/public/uploads/sac/Yoga and Meditation Club-21.pdf"
      },
      {
        "title": "Yoga and Meditation Club 2019-20",
        "url": "https://mits.ac.in/public/uploads/sac/Yoga and Meditation Club-20.pdf"
      },
      {
        "title": "Yoga and Meditation Club 2018-19",
        "url": "https://mits.ac.in/public/uploads/sac/e084990353163f3739e54e4415b2c856.pdf"
      },
      {
        "title": "Yoga and Meditation Club 2017-18",
        "url": "https://mits.ac.in/public/uploads/sac/79a2a8b77410d06107edd7053524b5f9.pdf"
      },
      {
        "title": "Yoga and Meditation Club 2016-17",
        "url": "https://mits.ac.in/public/uploads/sac/3179ccaf093f0f8bd8f777ccb45935d0.pdf"
      },
      {
        "title": "Yoga and Meditation Club 2015-16",
        "url": "https://mits.ac.in/public/uploads/sac/432b42454df5005a70dfa94b42c20cb1.pdf"
      },
      {
        "title": "Yoga and Meditation Club 2014-15",
        "url": "https://mits.ac.in/public/uploads/sac/6db0029ac41c2fb2d69d5ed5d6eaa76c.pdf"
      }
    ],
    "tab1Docs": []
  },
  {
    "id": "ug-tab11",
    "name": "SKILL BEE Club",
    "logo": "images/club/skillbee.png",
    "intro": "",
    "sections": [
      {
        "heading": "Vision :",
        "text": ""
      },
      {
        "heading": "Mission :",
        "text": "To ensure the improvement of the capability of students in learning, understanding, teaching and also expressing their skills confidently. About Skill Bee Club :\n\nIn Skill bee club, students will be functioning as mentors for other students, which means that if one student is knowledgeable about a particular skill or certain talent, He or she will be sharing that skill with other students."
      },
      {
        "heading": "About Skill Bee Club :",
        "text": ""
      }
    ],
    "reports": [
      {
        "title": "Skill Bee Club Activities 2025-2026",
        "url": "https://mits.ac.in/public/uploads/sac/Skill Bee Club Activities 2025-26.pdf"
      },
      {
        "title": "Skill Bee Club Activities 2024-2025",
        "url": "https://mits.ac.in/public/uploads/sac/Skill Bee Activities 2024-25.pdf"
      },
      {
        "title": "Skill Bee Club Activities 2023-2024",
        "url": "https://mits.ac.in/public/uploads/sac/Open Mic Mastering the arts of Public Speaking.pdf"
      },
      {
        "title": "Skill Bee Club Activities 2022-2023",
        "url": "https://mits.ac.in/public/uploads/sac/Skill Bee Build Your First Mobile App event.pdf"
      }
    ],
    "tab1Docs": []
  },
  {
    "id": "ug-tabarc",
    "name": "ARC Club",
    "logo": "",
    "intro": "",
    "sections": [],
    "reports": [
      {
        "title": "ARC Club Activities 2025 - 26",
        "url": "https://mits.ac.in/public/uploads/sac/ARC Club - 2025-2026.pdf"
      }
    ],
    "tab1Docs": []
  },
  {
    "id": "ug-tabdtc",
    "name": "Drone Technology Club",
    "logo": "images/club/drone.JPG",
    "intro": "Drone Technology Club is a dedicated club for students to engage in cutting-edge research, development, and application of drone technologies. It provides an opportunity for students to explore areas like drone hardware design, sensor integration, battery technologies, and communication systems. The club encourages hands-on learning and innovation, allowing students to work on real-world drone applications in sectors such as agriculture, logistics, defense, and disaster management. It also offers specialized training and workshops to help students develop expertise in drone technology, preparing them for careers in this rapidly growing field. The club facilitates collaboration between students of various departments fostering a vibrant ecosystem of knowledge exchange. By integrating academic learning with industry needs, the Drone technology club enhances students' skills and opens up opportunities for entrepreneurship and research in drone technology.",
    "sections": [
      {
        "heading": "Vision :",
        "text": "To be a leading hub of innovation and excellence in drone technology, fostering creativity, research, and practical applications while empowering students to explore the future of aerial systems and contribute to transformative advancements in industries such as robotics, automation, and communication. Mission : 1. To provide students with hands-on experience in drone design, development, and operation.. 2. To encourage collaborative learning and problem-solving through drone technology projects and challenges.. 3. To promote research and development in UAV (Unmanned Aerial Vehicle) systems for real-world applications across various domains.. 4. To foster innovation, critical thinking, and technical expertise among members while aligning with the goals of Indian drone ecosystem and ethical technology development.. 5. To establish strong partnerships with industry professionals and organizations for knowledge sharing, skill enhancement, and career growth opportunities.. Plan of action for Drone Technology Club: Club Formation and Initial Setup \u2022 Define Roles and Responsibilities: Establish the core team (President, Vice-President, Secretary, Treasurer, Event Coordinators, etc.) and assign responsibilities. \u2022 Club Registration: Register the club with the college administration, ensuring that all necessary paperwork and formalities are completed. \u2022 Set Up Online Presence: Create social media profiles, a website, or a forum for the club to share updates, events, and resources. Organize Introductory Workshops \u2022 Drone Basics Workshop: Conduct an introductory session on drone technology, components, and applications to get everyone started. \u2022 Safety and Regulations Workshop: Host workshops on drone flying safety, rules, and regulations to ensure responsible operation of drones. Skill Development and Hands-On Learning \u2022 Drone Building and Assembly Sessions: Organize hands-on workshops where members can learn how to assemble drones from scratch, covering key components like motors, controllers, sensors, and batteries. \u2022 Flight Training: Provide practical flight training to members, either through simulator software or real-life flying sessions on campus or in controlled environments. Collaborative Projects \u2022 Themed Drone Challenges: Host regular internal challenges, such as obstacle courses, aerial photography, or delivery simulations, to promote team-building and skill enhancement. \u2022 Industry Collaboration: Partner with industries or local businesses to identify real-world problems that drones can solve, and work together on relevant projects (e.g., agricultural monitoring, search and rescue simulations). \u2022 Research and Development Projects: Initiate research-based projects on improving drone technologies, such as better battery life, improved stability, or new applications for drones. Industry and Expert Engagement \u2022 Invite Guest Speakers: Organize talks, seminars, or webinars by experts in drone technology to expose members to the latest trends, challenges, and breakthroughs in the field. \u2022 Industry Visits: Plan field trips to companies or research centers working on cutting-edge drone technologies for hands-on learning and career insights."
      },
      {
        "heading": "Mission :",
        "text": "1. To provide students with hands-on experience in drone design, development, and operation.. 2. To encourage collaborative learning and problem-solving through drone technology projects and challenges.. 3. To promote research and development in UAV (Unmanned Aerial Vehicle) systems for real-world applications across various domains.. 4. To foster innovation, critical thinking, and technical expertise among members while aligning with the goals of Indian drone ecosystem and ethical technology development.. 5. To establish strong partnerships with industry professionals and organizations for knowledge sharing, skill enhancement, and career growth opportunities.."
      },
      {
        "heading": "Plan of action for Drone Technology Club:",
        "text": ""
      }
    ],
    "reports": [
      {
        "title": "Drone Technology Club Activities 2025-26",
        "url": "https://mits.ac.in/public/uploads/sac/Drone technology Club 2025-26.pdf"
      },
      {
        "title": "Drone Technology Club Activities 2024-25",
        "url": "https://mits.ac.in/public/uploads/sac/Drone Technology Club Activities 2024-25.pdf"
      }
    ],
    "tab1Docs": []
  },
  {
    "id": "ug-tabed",
    "name": "Entrepreneur\u2019s Club",
    "logo": "images/club/edcell.jpg",
    "intro": "",
    "sections": [
      {
        "heading": "Vision :",
        "text": "To empower aspiring entrepreneurs by transforming ideas into impactful products, fostering innovation, and building a thriving community where entrepreneurs at different stages can collaborate and grow together Mission : 1. To educate and inspire students on entrepreneurship, helping them develop essential skills. 2. To nurture creativity and innovation by guiding students in turning their ideas into viable products. 3. To foster a collaborative environment that encourages networking, learning, and shared growth. 4. To create opportunities for students to connect with funding sources to support their entrepreneurial ventures. 5. To build a strong entrepreneurial community that connects individuals at different stages of their journey, enabling continuous learning and support. The Entrepreneurs Club of Madanapalle Institute of Technology & Science aims at nurturing the spirit of entrepreneurship amongst students by providing a platform for challenging minds to think differently and experience entrepreneurship through hands-on learning. Together we share knowledge and skills to help out our members to expand their horizons and get more familiar with the \u201cEntrepreneur Style of thinking and working\u201d."
      },
      {
        "heading": "Mission :",
        "text": "1. To educate and inspire students on entrepreneurship, helping them develop essential skills. 2. To nurture creativity and innovation by guiding students in turning their ideas into viable products. 3. To foster a collaborative environment that encourages networking, learning, and shared growth. 4. To create opportunities for students to connect with funding sources to support their entrepreneurial ventures. 5. To build a strong entrepreneurial community that connects individuals at different stages of their journey, enabling continuous learning and support. The Entrepreneurs Club of Madanapalle Institute of Technology & Science aims at nurturing the spirit of entrepreneurship amongst students by providing a platform for challenging minds to think differently and experience entrepreneurship through hands-on learning. Together we share knowledge and skills to help out our members to expand their horizons and get more familiar with the \u201cEntrepreneur Style of thinking and working\u201d."
      }
    ],
    "reports": [
      {
        "title": "Entrepreneurs Club Activities 2025-26",
        "url": "https://mits.ac.in/public/uploads/sac/Entrepreneurs Club 2025-26.pdf"
      },
      {
        "title": "Entrepreneurs Club Activities 2024-25",
        "url": "https://mits.ac.in/public/uploads/sac/Entrepreneurs Club Activities 2024-25.pdf"
      }
    ],
    "tab1Docs": []
  }
];

export const clubsDirectoryTable: string[][] = [
  [
    "Name of the Club",
    "Faculty Advisor",
    "Student Coordinator",
    "Contact Number"
  ],
  [
    "Arts and Cultural Club",
    "Mr. Y. Pradeep Kumar",
    "B. Amrutha",
    "6281360083"
  ],
  [
    "R. Nikhil",
    "9666685646"
  ],
  [
    "Film Makers Club",
    "Mr. K. Md.Riyaz Ali",
    "M.K. Sudheer",
    "7013242253"
  ],
  [
    "G. Ramanjeneyulu Reddy",
    "8555946223"
  ],
  [
    "Web Club",
    "Dr. P. Kavitha",
    "R. Baba Fakhruddin",
    "9704290783"
  ],
  [
    "Syed Mansoor",
    "8096126294"
  ],
  [
    "MSR Club",
    "Mr. B.S.H. Shayeez Ahamed",
    "V. Venkata Tarun",
    "6303544711"
  ],
  [
    "Sports Club",
    "Dr. C. Damodharan",
    "M.G. Lokesh",
    "9515771641"
  ],
  [
    "P. Vyshnavi",
    "9154790706"
  ],
  [
    "Yoga & Meditation Club",
    "Mr. K. Manju Vikram",
    "Muppireddy Keerthi",
    "7569116140"
  ],
  [
    "Sai Phani Charan S.M",
    "6361772686"
  ],
  [
    "ARC Club",
    "Mr. Rajkumar. G",
    "C. Usman Gani",
    "9441578782"
  ],
  [
    "T. Yugesh",
    "6281185755"
  ],
  [
    "Tech Club",
    "Mr. D. Abdul Jaleel",
    "Y. Charan Teja Reddy",
    "8341484199"
  ],
  [
    "K. Ayesha",
    "8978703213"
  ],
  [
    "Anchors Club",
    "Mr. Narasimha Charlu",
    "Gavvala Narendra Kumar",
    "9010735719"
  ],
  [
    "Literary club",
    "Mr. T. Rama Mohan",
    "Yangala Likitha",
    "9391504875"
  ],
  [
    "J. Naveen Kumar",
    "7013255586"
  ],
  [
    "Builders Club",
    "Dr. K. Imran",
    "Kopparthi Nandini Reddy",
    "7793933029"
  ],
  [
    "Sabir Shaik",
    "7815970442"
  ],
  [
    "Drone Technology Club",
    "Mr. P. Mohammed Rizwan Ali",
    "B.Sathvik",
    "9030304850"
  ],
  [
    "AI Learning Hub Club",
    "Mr. Shaik Tipu Rahaman",
    "N. Ashraf Vali",
    "6281025228"
  ],
  [
    "Palagiri Mahammad Aman",
    "9989706451"
  ],
  [
    "Enterprenuers Club",
    "Dr. Kosaraju Sireesha",
    "Yasheen Khan Nyazi",
    "7993657748"
  ],
  [
    "Thoppireddy Sai Poojitha",
    "-"
  ],
  [
    "Skill Bee club",
    "Mr. K. Durga Charan",
    "K. Nikhil",
    "9390125801"
  ],
  [
    "G. Gangaiah"
  ],
  [
    "Coding Club",
    "Mrs. Komala Anamalamudi",
    "Mogili Kushal vardhan",
    "7382545438"
  ],
  [
    "S C Sujan",
    "6309959667"
  ],
  [
    "Cisco Networking Club",
    "Dr. V. Jayaprakasan",
    "K. Lokeswar Reddy",
    "7989239624"
  ]
];

export const noticeBoardData = {
  title: "Workshop on Development Environment",
  description: 'The MITS Web Club under Student Activity Center (SAC), organized a workshop on "Introduction to Development Environment".',
  date: "12th September 2025",
  reportUrl: "https://mits.ac.in/public/uploads/sac/Introduction to Development Environment.pdf"
};

export const aboutClubsContent = {
  intro: "The dynamism of academic life spills out of the classrooms. It is a credit to the mental and intellectual focus of the students that many of the clubs are extensions of their academic and career aspirations. There are several annual 'fests' and entertainment events organized by the institution every year. Students' clubs provide a forum for interaction among themselves and the outside world events, however varied, it may be formal or informal, but brings out the passion in youngsters and develop their organizational skills. The clubs bring about a good balance of work, fun and leisure activities and ensure the all round development of students.",
  importance: "Students' Clubs are the main hub of student activity. They provide an outlet and a stage for the creative juices of young minds and hearts. The clubs give you the chance to apply classroom learning in the outside world. This helps you to gain invaluable leadership as well as life skills. In addition to connecting other students who have similar interests, students' clubs make students to interact with alumni and professionals in their fields of interest.",
  benefits: [
    "Students' clubs enrich your experience, create a diverse community, encourage involvement, and provide opportunities for students to build valuable skills",
    "This helps you to build formal and informal networks while exploring career opportunities.",
    "Open to all students, these clubs organize programs, events, and meetings throughout the academic year. Clubs listed here are officially recognized."
  ],
  quickLinks: [
    { title: "Student Club Constitution", url: "https://mits.ac.in/public/uploads/sac/SOP of SAC 2025-26.pdf" },
    { title: "Event Calender", url: "https://calendar.google.com/calendar/u/0/embed?src=69849e23341ca5a7ae2952df17e3fb78318e6d704f514726f577a8391f650481@group.calendar.google.com&ctz=Asia/Kolkata" },
    { title: "Consolidate Student Club Activities 2025-2026", url: "https://mits.ac.in/public/uploads/sac/Consolidate Student Club Activities-2025-2026.pdf" },
    { title: "Consolidate Student Club Activities 2024-2025", url: "https://mits.ac.in/public/uploads/sac/Consolidate Student Club Activities-2024-2025.pdf" },
    { title: "Consolidate Student Club Activities 2023-2024", url: "https://mits.ac.in/public/uploads/sac/Consolidate Student Club Activities-2023-2024.pdf" },
    { title: "Consolidate Student Club Activities 2022-2023", url: "https://mits.ac.in/public/uploads/sac/Consolidate Student Club Activities-2022-2023.pdf" },
    { title: "Consolidate Student Club Activities 2021-2022", url: "https://mits.ac.in/public/uploads/sac/Consolidate Student Club Activities-2021-2022.pdf" }
  ]
};

export const studentClubsDirectory = [
  { sno: 1, name: "Arts & Cultural Club", tabId: "ug-tab2", facultyAdvisor: "Mr. Y. Pradeep Kumar", studentCoordinator: "B. Amrutha, R. Nikhil", contactNumber: "6281360083, 9666685646" },
  { sno: 2, name: "Film Makers Club", tabId: "ug-tab3", facultyAdvisor: "Mr. K. Md.Riyaz Ali", studentCoordinator: "M.K. Sudheer, G. Ramanjeneyulu Reddy", contactNumber: "7013242253, 8555946223" },
  { sno: 3, name: "Web Club", tabId: "ug-tab6", facultyAdvisor: "Dr. P. Kavitha", studentCoordinator: "R. Baba Fakhruddin, Syed Mansoor", contactNumber: "9704290783, 8096126294" },
  { sno: 4, name: "MSR Club", tabId: "ug-tab5", facultyAdvisor: "Mr. B.S.H. Shayeez Ahamed", studentCoordinator: "V. Venkata Tarun", contactNumber: "6303544711" },
  { sno: 5, name: "Sports Club", tabId: "ug-tab4", facultyAdvisor: "Dr. C. Damodharan", studentCoordinator: "M.G. Lokesh, P. Vyshnavi", contactNumber: "9515771641, 9154790706" },
  { sno: 6, name: "Yoga & Meditation Club", tabId: "ug-tab10", facultyAdvisor: "Mr. K. Manju Vikram", studentCoordinator: "Muppireddy Keerthi, Sai Phani Charan S.M", contactNumber: "7569116140, 6361772686" },
  { sno: 7, name: "ARC Club", tabId: "ug-tabarc", facultyAdvisor: "Mr. Rajkumar. G", studentCoordinator: "C. Usman Gani, T. Yugesh", contactNumber: "9441578782, 6281185755" },
  { sno: 8, name: "Tech Club", tabId: "ug-tab7", facultyAdvisor: "Mr. D. Abdul Jaleel", studentCoordinator: "Y. Charan Teja Reddy, K. Ayesha", contactNumber: "8341484199, 8978703213" },
  { sno: 9, name: "Anchors Club", tabId: "anchors", facultyAdvisor: "Mr. Narasimha Charlu", studentCoordinator: "Gavvala Narendra Kumar", contactNumber: "9010735719" },
  { sno: 10, name: "Literary club", tabId: "ug-tab9", facultyAdvisor: "Mr. T. Rama Mohan", studentCoordinator: "Yangala Likitha, J. Naveen Kumar", contactNumber: "9391504875, 7013255586" },
  { sno: 11, name: "Builders Club", tabId: "ug-tab8", facultyAdvisor: "Dr. K. Imran", studentCoordinator: "Kopparthi Nandini Reddy, Sabir Shaik", contactNumber: "7793933029, 7815970442" },
  { sno: 12, name: "Drone Technology Club", tabId: "ug-tabdtc", facultyAdvisor: "Mr. P. Mohammed Rizwan Ali", studentCoordinator: "B.Sathvik", contactNumber: "9030304850" },
  { sno: 13, name: "AI Learning Hub Club", tabId: "ai-learning-hub", facultyAdvisor: "Mr. Shaik Tipu Rahaman", studentCoordinator: "N. Ashraf Vali, Palagiri Mahammad Aman", contactNumber: "6281025228, 9989706451" },
  { sno: 14, name: "Enterprenuers Club", tabId: "ug-tabed", facultyAdvisor: "Dr. Kosaraju Sireesha", studentCoordinator: "Yasheen Khan Nyazi, Thoppireddy Sai Poojitha", contactNumber: "7993657748" },
  { sno: 15, name: "Skill Bee club", tabId: "ug-tab11", facultyAdvisor: "Mr. K. Durga Charan", studentCoordinator: "K. Nikhil, G. Gangaiah", contactNumber: "9390125801" },
  { sno: 16, name: "Coding Club", tabId: "ug-tab15", facultyAdvisor: "Mrs. Komala Anamalamudi", studentCoordinator: "Mogili Kushal vardhan, S C Sujan", contactNumber: "7382545438, 6309959667" },
  { sno: 17, name: "Cisco Networking Club", tabId: "cisco", facultyAdvisor: "Dr. V. Jayaprakasan", studentCoordinator: "K. Lokeswar Reddy", contactNumber: "7989239624" }
];

export const studentClubsList: StudentClubItem[] = studentClubsDirectory.map(d => ({
  id: d.tabId,
  name: d.name,
  sno: d.sno,
  facultyAdvisor: d.facultyAdvisor,
  studentCoordinator: d.studentCoordinator,
  contactNumber: d.contactNumber,
  about: '',
  events: []
}));

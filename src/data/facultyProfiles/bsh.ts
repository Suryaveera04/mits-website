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

export const bshProfiles: Record<string, FacultyProfile> = {
  /*
  // Static faculty profile data preserved in comments (Dynamic profiles fetched from EngageAI database API)
"Dr. Sudhakar Beedam": {
        "name": "Dr. Sudhakar Beedam",
        "designation": "Assoc. Professor &amp; Head (I/c)",
        "email": "drsudhakarb@mits.ac.in",
        "officeAddress": "BSH Block",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Sudhakar Beedam.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Linguistics and Phonetics",
                            "Branch": "English",
                            "College Name/University": "EFLU, Hyderabad",
                            "Year of Passing": "2011"
                        },
                        {
                            "Course": "M.Phil.",
                            "Specialization": "Linguistics and Phonetics",
                            "Branch": "English",
                            "College Name/University": "EFLU, Hyderabad",
                            "Year of Passing": "2007"
                        },
                        {
                            "Course": "B.Ed",
                            "Specialization": "English Language Education",
                            "Branch": "Education",
                            "College Name/University": "CIEFL, Hyderabad",
                            "Year of Passing": "2005"
                        },
                        {
                            "Course": "M.A.",
                            "Specialization": "English Literature",
                            "Branch": "English",
                            "College Name/University": "CIEFL, Hyderabad",
                            "Year of Passing": "2004"
                        },
                        {
                            "Course": "M.A.",
                            "Specialization": "Linguistics",
                            "Branch": "Linguistics",
                            "College Name/University": "SV University, Tirupati",
                            "Year of Passing": "2002"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "English Literature, Linguistics, English Language Education, Cultural Studies and Communication"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus :",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/658553",
                        "Google scholar : https://scholar.google.com/citations?view_op=list_works&hl=en&user=LWnH30wAAAAJ",
                        "h-Index (As per Scopus Data) :"
                    ]
                }
            ]
    },

    "Dr. S. Shanmuga Priya": {
        "name": "Dr. S. Shanmuga Priya",
        "email": "shanmugapriyas@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. S. Shanmuga Priya.JPG",
        "designation": "Assoc. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "English Literature",
                            "Branch": "Common Wealth Literature",
                            "College Name/University": "Sri Padmavathi Mahila Visva Vidyalayam (Women&rsquo;s University), Tirupati, A.P.",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "M.A.",
                            "Specialization": "English Language & Literature",
                            "Branch": "English Language & Literature",
                            "College Name/University": "Sri Padmavathi Mahila Visvavidyalayam, Tirupati, A.P",
                            "Year of Passing": "2001"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Zoology, Physics, Chemistry",
                            "Branch": "B.Sc.",
                            "College Name/University": "Sri Padmavathi Women&rsquo;s Degree College, Tirupati, Sri Venkateswara University, A.P.",
                            "Year of Passing": "1998"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=59664384900",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/273679",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=A3ps-0kAAAAJ",
                        "h-Index (As per Scopus Data) :"
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
                            "Details of Research Publication": "The Role of Digital Humanities and Machine Learning in Enhancing Critical Thinking among Select B. Tech ESL Students: A Case Study",
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
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Application ID": "471036-001",
                            "Title of the Patent": "AI-Assisted Sign Language Glove",
                            "Status (Filed/Published/Under Examination/Granted)": "Granted"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Application ID": "202641046811 A",
                            "Title of the Patent": "Machine Learning Framework for Gender-Inclusive Language Assessment in Academic and Professional Communication",
                            "Status (Filed/Published/Under Examination/Granted)": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Application ID": "202541091924 A",
                            "Title of the Patent": "A Machine Learning Driven System Tool for Automated Grammar Correction and Contextual Feedback in English Writing",
                            "Status (Filed/Published/Under Examination/Granted)": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "202541032233 A",
                            "Title of the Patent": "An analysis of the role of English Teachers in Engineering Colleges",
                            "Status (Filed/Published/Under Examination/Granted)": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Received the Best Teacher Award from MITS, Madanapalle for the academic year 2023&ndash;24.",
                        "Appreciated by the Quality Enhancement in Engineering Education (QEEE), IIT Madras, for being a proactive participant in the Spoken English program conducted during January&ndash;April 2015.",
                        "Cleared the APSET (English) examination in 2012.",
                        "Honoured with the S.P. Lingamurthy Gold Medal for securing First Rank in the M.A. English University Examinations, presented by the then Governor of Andhra Pradesh, Dr. Sushil Kumar Shinde, in 2005.",
                        "Won the Maddi Sudarsan Rao Endowment Prize for obtaining the highest marks in the S.V. University examinations (1999&ndash;2000).",
                        "Guided one Ph.D. scholar and has authored two books and four book chapters to date."
                    ]
                },
                {
                    "title": "My Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "The Role of Digital Humanities and Machine Learning in Enhancing Critical Thinking among Select B. Tech ESL Students: A Case Study",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "IEEE 6th International Conference on Cybernetics, Cognition and Machine Learning Applications (ICCCMLA 2024) DOI: 10.1109/ICCCMLA63077.2024.10871471 indexed in SCOPUS, Publisher: IEEE, E-ISBN:979-8-3315-0579-0, Pp: 517-521, 11 February 2025."
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "Moodle and Its Role in English Language Teaching",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Knowledge Management in Higher Education Institutions, Volume \u2013 I, International Conference on Knowledge Management in Higher Education Institutions (ICKHI 2024), Pp:166-170, ISBN: 978-81-952757-8-6, Manipal University Jaipur & University of Technology, North Bangkok, Thailand, 30-31 Jan 2024."
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "Enhancing Language Acquisition through Literary Texts: A Comprehensive Approach to English Language Instruction",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "African Journal of Biological Sciences (SCOPUS) ISSN: 2663-2187, Pp:1-10, 6(SI1) 2024."
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "Vikram Seth\u2019s A Suitable Boy as Ecocritical Novel",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal Of English and Studies (IJOES) Pp:42-45, 5 (8): August 2023."
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "Arundhati Roy: The Empowered Indian Woman Writer",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "SATRAACHEE (UGC CARE Journal), ISSN: 2348-8425, Pp: 149-152, 40(28) Special Issue Women Empowerment II, July-Sep 2023."
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "Black Feminism Movement: An Inherently Precious Articulation",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of New Zealand Studies (SCOPUS), Pp: 801-805, 2022."
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "English Language Teaching and E-Learning",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Knowledge Management in Higher Education Institutions, Volume \u2013 III, International Conference on Knowledge Management in Higher Education Institutions (ICKHI 2022), Pp:47-53, ISBN: 978-81-952757-3-1, Manipal University Jaipur & University of Dubai, 11-12 April 2022."
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "Dynamics of Teaching English and Engineering Education in the Post-COVID-19 Pandemic Era",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Research, Innovations and Practices in Science, Technology and Management for Societal Benefits, ISBN: 978-93-91535-30-8, Poddar International College, Mansarovar, Jaipur, 8 & 9 April 2022."
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "Marginalised Voice in Manju Kapur\u2019s Difficult Daughters",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference & Academic Excellence Award on Recent Innovation and Interdisciplinary Research, SNDT Women\u2019s University, Mumbai, Pp:212-216, ISBN: 978-81-943584-4-2, 07 Dec 2019."
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "Wilson's View from the Mountain We Are Not in Pakistan by Shauna Singh\u201d Baldwin",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Literary Endeavour, ISSN: 0976-299X, Pp:294-298,10(5): Oct 2019."
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "Devika in Delusion English Lessons and Other Stories by Shauna Singh Baldwin",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Literary Endeavour (UGC approved Journal No. 44728) Laxmi Publication, Osmanabad, ISSN: 0976-299X, Pp:294-298, 10(2): April 2019."
                        },
                        {
                            "S.No": "12",
                            "Title of the Paper": "Pen Portrayal of Mother\u2019s Role in Short Stories of Diasporic Women Writers",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Research in Social Sciences (IJRSS), ISSN: 2249-2496, IF: 7.081, Pp: 250-263, 8(6): June 2018."
                        },
                        {
                            "S.No": "13",
                            "Title of the Paper": "Symbolism in Arranged Marriage and Other Stories of Chitra Banerjee Divakaruni",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Labyrinth: An International Refereed Journal of Postmodern Studies (UGC Approved Journal No. 41765) ISSN: 0976-0814, pp: 140-149, 9(1): Jan 2018."
                        },
                        {
                            "S.No": "14",
                            "Title of the Paper": "Ecocriticism of Aravind Adiga\u2019s The White Tiger",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "13th International Conference on Recent trends in Engineering Science and Management, Pp: 401-405, ISBN: 978-93-86171-93-1, Vedant College of Engineering & Technology, Bundi, Rajasthan, 21-22 Jan 2018."
                        },
                        {
                            "S.No": "15",
                            "Title of the Paper": "Nature as Depicted in Anton Chekhov\u2019s Select Short Stories",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "GNOSIS, Impact Factor: 4.147. Jaipur. UGC Approved Journal no. 48815, IF: 4.147, ISSN: 23940131, pp: 44-48. 3(4): July 2017."
                        },
                        {
                            "S.No": "16",
                            "Title of the Paper": "The Theme of Humour and Irony in R. K. Narayan\u2019s Short Stories",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Innovative Research in Science, Technology and Management, ISBN: 978-93-86171-20-7, Modi Institute of Management & Technology, Dadabari, Kota, Rajasthan, 22-23 Jan 2017."
                        },
                        {
                            "S.No": "17",
                            "Title of the Paper": "Psyche of Mother and Daughter: A Study of Toni Morrison\u2019s Beloved and A Mercy",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Innovative Trends in Science, Engineering and Management, Pp:9-14, ISBN: 978-93-86171-27-6, YMCA, Connaught Place, New Delhi, 07 Jan 2017."
                        },
                        {
                            "S.No": "18",
                            "Title of the Paper": "English and Blended Learning",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Research Journal of English (RJOE): An International Peer Reviewed Journal, IF: 7.613, ISSN: 2456-2696, pp:65-68, 2 Special issue (3): 2017."
                        },
                        {
                            "S.No": "19",
                            "Title of the Paper": "Rushdie\u2019s The Moor\u2019s Last Sigh as a Family Chronicle",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Physical and Social Science, U.S.A., IF: 5.712, ISSN: 2249-5894, pp.8-12, 6(9): Sep 2016."
                        },
                        {
                            "S.No": "20",
                            "Title of the Paper": "Political Turmoil and Yoruba Mythology in Ben Okri\u2019s The Famished Road",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "ROOTS: International Journal of Multidisciplinary Research, Peer Reviewed & Refereed Journal, IF:0.811, ISSN: 2349-8684, Print. pp:154-156, 3(4): Sep 2016."
                        },
                        {
                            "S.No": "21",
                            "Title of the Paper": "Religious Beliefs as Depicted in Raja Rao\u2019s Kanthapura and Ruth Prawar Jhabwala\u2019s Heat and Dust",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of English Language, English Literature and Humanities (IJELLH), UGC Approved Journal no. 43979, IF: 4.287, ISSN: 2321-7065, pp:375-380,4(6): June 2016."
                        },
                        {
                            "S.No": "22",
                            "Title of the Paper": "Displacement in Arundhati Roy\u2019s The God of Small Things",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "ROOTS: International Journal of Multidisciplinary Research, Peer Reviewed & Refereed Journal, IF:0.811, ISSN: 2349-8684, Print. pp: 74-76, 2(1): Jan 2016."
                        },
                        {
                            "S.No": "23",
                            "Title of the Paper": "The Spiritually Bent Indians: A Study of Ruth Prawar Jhabvala\u2019s Heat and Dust and Rohinton Mistry\u2019s Such a Long Journey",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "ROOTS: International Journal of Multidisciplinary Research, Peer Reviewed & Refereed Journal, IF: 0.811, ISSN: 2349-8684, Print. pp: 74-76, 2(5): Oct 2015."
                        },
                        {
                            "S.No": "24",
                            "Title of the Paper": "Man-Woman Relationship in Arundhati Roy\u2019s The God of Small Things",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Indian Diaspora, ed. A Tara Lakshmi, pp.76-79, ISBN: 978-15-08587-21-7, Createspace - Amazon Publications, North Charleston, USA, 2015."
                        },
                        {
                            "S.No": "25",
                            "Title of the Paper": "Use of History in the Select Novels of Manohar Malgonkar",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Seminar on Narrative Literature in English and Sanskrit, pp.138-143, ISBN: 978-93-83934-80-5, Rashtriya Sanskrit Vidyapeetha, Tirupati, 2014."
                        },
                        {
                            "S.No": "26",
                            "Title of the Paper": "Tagore's Binodini and Bimala: The Emancipated Indian Women",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Research Scholar: An International Refereed e-Journal of Literary Explorations, IF: 0.998, ISSN: 2320-6101, pp:1-6, 1(4): Nov 2013."
                        },
                        {
                            "S.No": "27",
                            "Title of the Paper": "Secular Spirit in Khushwant Singh\u2019s Delhi",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Research Spectrum, ISSN 0976-5964, pp:103-105, Vol.4, Issue1, Feb 2013."
                        },
                        {
                            "S.No": "28",
                            "Title of the Paper": "Authentic Realities of Life: An Approach to Rohinton Mistry\u2019s Such a Long Journey",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "SVU Journal of English Studies, ISSN: 2230-7923, pp:105-112, Vol: 12, January 2013."
                        },
                        {
                            "S.No": "29",
                            "Title of the Paper": "The Docile and Domineering Women in Rohinton Mistry's Novels Such Long Journey, A Fine Balance and Family Matters",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal Contemporary Research in India, IF:4.582, ISSN: 2231-2137, pp: 76-79, 2(4): Dec 2012"
                        }
                    ]
                },
                {
                    "title": "Book Publications",
                    "content": [
                        "\"Socio-political Realities of India in Select Novels of Manohar Malgonkar, Khushwant Singh and Rohinton Mistry: A Study\" published by GRIN Verlag: Germany, ISSN: 9783346290373 in November 2020.",
                        "Rohinton Mistry\u2019s India: A Socio-Political View published by Lambert Academic Publishing: Germany, ISSN: 978-3-659-12007-7, dt.21-11-2012."
                    ]
                },
                {
                    "title": "Book Chapters",
                    "content": [
                        "Contributed a chapter \u201cPolitical Consciousness in Dina Mehta\u2019s And Some Take a Lover and Bapsi Sidhwa\u2019s Ice-Candy-Man (Cracking India)\u201d in Women\u2019s Literature: Exploring Gender & Inequality, ed. Thummapudi Bharathi, Mark Publishers, Jaipur, pp:58-69, ISBN: 978-93-82159-54-4, 2014. Print.",
                        "\u201cToni Morrison\u2019s Sula: A Postmodern Woman\u201d in Commonwealth Literature: A Critical Reorientation, Dr.P.Venkateswarlu, Dr.S.Shanmuga Priya, eds. J Samuel Kirubahar, R. Suriya Prakash Narayanan, Publisher: VHNSN College, Virudhunagar, pp:6-14, ISBN: 978-93-81723-33-3, Feb 2015. Print.",
                        "\u201cEnriching English of Engineering Students with Gamification Tools\u201d, Trends in Language Teaching, Literature, Cultural Studies, and Linguistics, eds. Athahar et al, JEC Publication, Chandauli, ISBN: 978-93-6175-127-1, pp:206-211, 2024. Print."
                    ]
                },
                {
                    "title": "Paper Presentations",
                    "content": [
                        "Presented a paper \u201cAravind Adiga\u2019s The White Tiger and Last Man in Tower as Life Narratives\u201d at International Conference and Workshops on Language and Literature, MITS, Madanapalle, May 29 & 30, 2025.",
                        "\u201cTiger of the Jungle: Aravind Adiga's The White Tiger\u201d, One-day International Conference: Enriching Minds: Latest Trends in English Literature and English Language Teaching in the Digital Era, CSTS Government Kalasala, Eluru, 21 March 2024.",
                        "\u201cIdeology of Creating Space in the Selected Plays of Mahesh Dattani\u201d, Two-day International Conference-cum-Workshop on Language and Literature, MITS, Madanapalle,14-15 Oct 2022.",
                        "\u201cKasturi and Virmati, The Marginalised Women: A Study Of Manju Kapur\u2019s Difficult Daughters\u201d, International Conference: English Language, Literature, Translation Studies and Humanities, Ratnam College of Arts & Science, Coimbatore,16 Sep 2022",
                        "\u201cNature and the Memory Lane: Vikram Seth\u2019s A Suitable Boy as a Green Literature\u201d, International Conference: Ecosystems in the Poetics of Experiences, Kristu Jayanti College, Bengaluru, 22-23 April 2022.",
                        "\u201cCultural Conflict in Jhumpa Lahari\u2019s Namesake and Manju Kapur\u2019s The Immigrant\u201d, UGC sponsored National Seminar: Cultural Studies organised, Sri Padmavati Mahila Visvavidyalayam, Tirupati, 24-25 March 2017.",
                        "\u201cReflections of Multiculturalism in Rohinton Mistry\u2019s Such a Long Journey and A Fine Balance\u201d, UGC sponsored Two Day National Seminar: Contemporary Literatures in English: Critical Perspectives, Sri Padmavati Women\u2019s University, Tirupati, 7- 8 Jan 2015.",
                        "\u201cDalits as Portrayed by Rohinton Mistry in A Fine Balance\u201d, UGC sponsored Two Day National Seminar: Dalit Literature in English and English Translations, Dravidian University, Kuppam, 21- 22 March 2014.",
                        "\u201cIndo-Canadian Diaspora and Diasporic Writings: An Overview\u201d, A Three-Day International Conference: Cultural Spaces: Canada & India, Sri Venkateswara University, Tirupati, 27 - 29 Jan 2014.",
                        "\u201cWomen as portrayed in Rohinton Mistry\u2019s Family Matters and Arundhati Roy\u2019s The God of Small Things\u201d, UGC sponsored Two Day National Seminar: Emerging Trends in Indian Writing in English in 21st Century, Sri Durga Malleswara Siddhartha Mahila Kalasa, Vijayawada & Krishna University, 1-2 Aug 2013.",
                        "\u201cExperiences of South Asian Immigrants in the Novels of Chitra Banerjee Divakaruni and Jhumpa Lahiri\u201d, 42nd Annual Conference of the Indian Association for American Studies, Sri Venkateswara University, 29- 31 July 2013.",
                        "\u201cTeaching English Language through Technology\u201d, National Seminar: English in the Classroom: The Science of Communication, Vikrama Simhapuri University, Nellore, 23-24 March 2013.",
                        "\u201cVictorian Society of Charles Dickens's Hard Times\u201d, National Seminar: Novelist as Social Reformer: Dickens and Mulk Raj Anand, Besant Theosophical College, Madanapalle, 2-3 March 2013.",
                        "\u201cSocial Realities in Rohinton Mistry\u2019s Such a Long Journey\u201d, UGC sponsored National Seminar: Current Trends in Indian English Fiction, Govt. Degree College, Porumamilla, 27-28 Feb 2013.",
                        "\u201cRabindranath Tagore\u2019s Belief on the Emancipation of Women: A Study of The Home and the World\u201d, National Seminar: Rabindranath Tagore the Humanist, Educationist and Social Reformer, Besant Theosophical College, Madanapalle, 25-27 Feb 2012.",
                        "\u201cCross cultural Discourse in the Novels of Rohinton Mistry\u201d, International Seminar: Teaching Literatures in English for Cross Cultural Communications, Dravidian University, Kuppam,8-10 Aug 2011.",
                        "\u201cThe Poetic Craft of Vikram Seth \u2013 An Approach to his Select Poems\u201d, UGC sponsored National Seminar: Contemporary Poetry: Critical Perspectives, Sri Padmavati Women\u2019s University, Tirupati, 28-29 June 2011.",
                        "\u201cEnglish Language Teaching Learning and the Role of Technology\u201d, APSCHE sponsored National Seminar on Current Trends in Teaching English Language and Literature, Yogi Vemana University, Kadapa, 4-5 Feb 2011.",
                        "\u201cThe Theme of Alienation in Arundhati Roy\u2019s The God of Small Things\u201d, World Conference on Globalisation and Literature and Indian English Novel in the New Millennium organised by Nehru Arts, Science College, Hubli, Karnataka, on 23- 24 April 2010."
                    ]
                },
                {
                    "title": "Conferences & Seminars attended",
                    "content": [
                        "UGC Sponsored One Day On-line National Seminar on English Language Teaching - Alternative Perspectives and Issues, KVR, KVR & MKR College, Khajipalem, AP, 28 Aug 2023.",
                        "Two-day virtual international seminar on Research, Society and Development: Social Usefulness through Multidisciplinary Research and Teaching Paradigm, VIT, Chennai, 19-20 June 2023.",
                        "One-Day International Seminar on Innovative Research: The Need of the Hour, VIT, Chennai, 16 June 2023.",
                        "Seminar on Student Autonomy and Data-driven Learning in English for Academic Purposes, University of Queensland, Australia, 7 Oct 2022.",
                        "Oxford Professional Development Event ELTOC (English Language Teachers Online Conference) Chapter 3, 24 Sep 2022.",
                        "One Day Online Seminar on National Education Policy 2020: Perspective, JNTUA College of Engineering(A) Ananthapuramu & University College of Engineering & Technology, Bikaner Technical University, Bikaner, Rajasthan, 26 Feb 2021.",
                        "Research into Practice: Evidence-based decision-making in international education organised by Cambridge Assessment English,18 Nov 2020.",
                        "The 5th Annual Conference on Future of English Language Teaching Online Conference, Trinity College London & Regent\u2019s University London, 17 Oct 2020."
                    ]
                },
                {
                    "title": "Training Programmes attended",
                    "content": [
                        "Author training on Building Writing Skills organised by Oxford University Press, 13 & 14 December 2023.",
                        "A Two-week Teacher Training Program conducted by APSCHE & British Council, 11 - 15 July 2017 & 24-28 July 2017.",
                        "Three Day IELTS Train the Trainer Course at British Council, Chennai, 25-27 May 2015.",
                        "Train the Trainers session for the Spoken English Course organized by Quality Enhancement in Engineering Education (QEEE) Phase II at IIT Madras, Chennai on 23 July 2014.",
                        "AICTE-ATAL FDPs attended",
                        "ROAD Response effectiveness, Organising self, Attitudinal shift and Decision making at SRM Institute of Science and Technology, 20-24 Sep 2021.",
                        "Imparting Soft Skills and Life Skills for Holistic Development at PSGR Krishnammal College for Women, 6-10 Sep 2021.",
                        "Team building and Co-ordination at GITAM University, 15- 19 Feb 2021.",
                        "Capacity Building at Dr H. S. Gour Vishwavidyalaya (A Central University) Sagar, M.P., 5-9 Oct 2020.",
                        "Leadership & Excellence at IIT Hyderabad during 7-11 Sept 2020."
                    ]
                },
                {
                    "title": "Workshops attended",
                    "content": [
                        "International Workshop: Differentiated Learning in Higher Education, Presidency University, Bengaluru, April 30, 2024.",
                        "International Workshop: Diasporic Dreaming and The Post-colonial Imagination - A Creative Writing Journey, St Mary\u2019s College, Thoothukudi, TN on 07 October 2022.",
                        "One-Day National Virtual Workshop: Narrative Nuances in Text and Screen, Vellore Institute of Technology, Chennai, 4 June 2022.",
                        "A One Day National Online Workshop: Effective Online Teaching-Learning Using Google Forms, Mahanth Madhusudhan College, Patna, 5 Aug 2020.",
                        "Two Day Cambridge English Teachers Support Workshop: Developing the four skills in preparation for Cambridge English: Business Certificates (BEC), Cambridge English: Language Assessment, part of the University of Cambridge at Bangalore, 7-8 Oct 2016.",
                        "One Day Workshop: Prevention of Sexual Harrassment (POSH) of Women at Workplace, National Institute of Personnel Management, Karnataka Chapter, Bengaluru, 21 Sep 2016.",
                        "IDA Connect Workshop: Creative Teaching of English, Academy of Creative Teaching (ACT), Bangalore, 9-11 Sep 2015.",
                        "Three Day Workshop: Outcome Based Learning Workshop, BITS Pilani, Hyderabad, 14-16 Nov 2014.",
                        "Three Day Workshop: Outcome Based Learning Workshop, BITS Pilani, Hyderabad, 22-24 Aug 2014.",
                        "One Day Workshop: Engineering Inner Excellence, JNTUCE, Anantapuramu, 5 July 2014.",
                        "Two Day Workshop: Activating the ESL Classroom by US English Language Fellow Joseph Dwailbee, Sri Padmavati Women\u2019s University, Tirupati, 23-24 May 2012.",
                        "Attended FUSION: A Three-Day National Workshop on Soft Skills conducted by the Department of Training & Placements & Industry Relations of Sir C.R.Reddy College of Engineering, Eluru during 15-17 Nov 2007."
                    ]
                }
            ]
    },

    "Dr. Bishnu Paramguru Mahapatra": {
        "name": "Dr. Bishnu Paramguru Mahapatra",
        "designation": "Assoc. Professor",
        "email": "drbishnupm@mits.ac.in",
        "officeAddress": "BSH Block",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Bishnu Paramguru Mahapatra.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "English Language Teaching",
                            "Branch": "English",
                            "College Name/University": "Berhampur University",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "M.A.",
                            "Specialization": "American Literature",
                            "Branch": "English",
                            "College Name/University": "Khallikote College (Autonomous), Berhampur University",
                            "Year of Passing": "1999"
                        },
                        {
                            "Course": "B.A.",
                            "Specialization": "English Honours",
                            "Branch": "English",
                            "College Name/University": "Berhampur University",
                            "Year of Passing": "1997"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "English Language Teaching"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=59209063900",
                        "Vidwan : https://mits.irins.org/profile/476033",
                        "Google scholar : https://scholar.google.com/citations?user=XZBaShQAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 1"
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
                            "Details of Research Publication": "Activities of Listening skill in conjunction with Speaking help enhancing language competence of Engineering graduates.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Better Pedagogical Practices Could Enhance the Learning Performance of Students by Adopting a Hybrid Learning Approach.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "IoT Powered Training for Employee Potential through Smart Embedded Tools and Technologies",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
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
                            "Academic Year": "2024",
                            "Application ID": "411378-110",
                            "Title of the Patent": "A Pen for Converting Text into Speech with Grammar Check",
                            "Status (Filed/Published/Under Examination/Granted)": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2023",
                            "Application ID": "389053-001",
                            "Title of the Patent": "Teaching Device for Students",
                            "Status (Filed/Published/Under Examination/Granted)": "Published"
                        }
                    ]
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "Activities of Listening skill in conjunction with Speaking help enhancing language competence of Engineering graduates.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Engineering Education Transformations: Print ISSN:2349-2473), Online ISSN:2394-1707, Volume:37, Issue:4, Pages:7-13, 2024. (Scopus Indexed)"
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "Better Pedagogical Practices Could Enhance the Learning Performance of Students by Adopting a Hybrid Learning Approach.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Electrical Systems: ISSN:1112-5209, Volume:20, Issue-5s, Page:1076-1087, 2024. (Scopus Indexed)"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "Using Semiotic Resources to Improve the Level of Learning among Young Learners in Rural India.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Advanced Zoology, ISSN: 0253-7214, Volume 44 Special Issue -2 Year 2023 Page 2911:2916. (Web of Science)"
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "Installations from Privilege to Survival: Emergence and Evolution of Dalit Voice on Instagram Accounts.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Advanced Zoology ISSN: 0253-7214 Volume 44 Special Issue -2 Year 2023 Page 2801:2811."
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "EFFECTIVE READING STRATEGIES: AN EASY APPROACH TO BE ADOPTED BY TECHNICAL STUDENTS FOR BETTER READING COMPREHENSION.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Strad Research, ISSN NO- 0039-2049, Volume 8, Issue3, page-141-144, 2021."
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "ENGLISH DEFICIENCY OF THE PROFESSIONAL STUDENTS IN KBK DISTRICTS OF ODISHA: ISSUES, CHALLENGES AND SOLUTIONS",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Xi'an University of Architecture & Technology, ISSN NO-1006-7930, Volume XII, ISSUE III, PAGE-3801-3809, 2020."
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "Attainment of Course Outcomes - a tool to assess the proficiency of L S R W SKILLS in English?",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Creative Research Thoughts (IJCRT) Volume 8, Issue 2, Page- 1057-1069, February 2020."
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "Vocabulary Acquisition Plays an important role in shaping the career of Engineering students.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "An Overview. \u00a9 2018 JETIR December 2018, Volume 5, Issue 12 (ISSN-2349-5162) 2349- 5162, PAGE-599-602."
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "The Problem of Silent Letters in ESL Teaching And Learning",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Creative Research Thoughts ISSN: 2320-2882 Vol 5 Issue 4, Page No pp.3032-3040, December 2017."
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "Do Engineering Graduates Posses Active Listening Skill?",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "English Research Express.Issn- 2321-1164(Online);2347-2642(Print). Volume:4 Issue:13 Page-170-174, Year-2016."
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "Error Analysis plays an important role in improving Writing skills of Engineering students-A Case Study",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "The International Research Specialist (A Peer Reviewed International Journal), ISSN: 2350-1499 (Online); 2350-0751 (Print) Volume: 2nd & Issue: 7th (July September 2015) pp. 01-25 Date: 25-05-2015."
                        },
                        {
                            "S.No": "12",
                            "Title of the Paper": "Acquisition of Effective Speaking Skill-Issues and Challenges for the Second Language Learners of English in The Criterion",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "An International Journal in English (ISSN-0976-8165) VOL-5, issue 03, page 80-85 2014.ISSN-NO-0976-8165."
                        },
                        {
                            "S.No": "13",
                            "Title of the Paper": "Teacher Written feedback helps in developing student s writing skill",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "An Explorative study in IJELL (ISSN: 2321-1164). 2014.VOL-2, ISSUE-1, PAGE 111-116."
                        },
                        {
                            "S.No": "14",
                            "Title of the Paper": "Acquisition of effective writing skill issues and challenges for the second language learner of English",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "An explorative study in Indian stream research journal (ISSN:2230-7850), VOL-4, No.3, 2014."
                        },
                        {
                            "S.No": "15",
                            "Title of the Paper": "The Importance of Reading Skill in Cyberage",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of literature, culture and media studies (ISSN: 0974-7192), VOl-2, No.-3, 2010."
                        }
                    ]
                },
                {
                    "title": "Books & Chapters",
                    "content": [
                        "Sw Skills: Problems and Challenges in South Odisha. Authors Press Advertisers, New Delhi. Page-No.-01-To-234, ISBN- 9388859391.",
                        "Continuous Professional Development as a Means of Teachers Getting a Grip on Marginalized Students Learning in Multilingual Matters, St Nicholas House, 31-34 High Street, Bristol, BS1 2AW, UK (Accepted)",
                        "IoT Powered Training for Employee Potential through Smart Embedded Tools and Technologies. Chapter 11 in the book Embedded Devices and Internet of Things, Technologies, and Applications.ISBN-9781032606002.Routledge, Taylor & Francis Group"
                    ]
                }
            ]
    },

    "Dr. P. Athahar": {
        "name": "Dr. P. Athahar",
        "email": "atharsaminakhand@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/sam.JPG",
        "designation": "Assoc. Professor  &amp; Senior Manager-Student Affairs",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "English",
                            "Branch": "Ph.D.",
                            "College Name/University": "Dravidian University",
                            "Year of Passing": "2020"
                        },
                        {
                            "Course": "M.Phil.",
                            "Specialization": "African American Literature",
                            "Branch": "M.Phil.",
                            "College Name/University": "S. V. University",
                            "Year of Passing": "2000"
                        },
                        {
                            "Course": "M.A.",
                            "Specialization": "English",
                            "Branch": "M.A.,",
                            "College Name/University": "S.V. University",
                            "Year of Passing": "2007"
                        },
                        {
                            "Course": "B.Com.",
                            "Specialization": "Accounts",
                            "Branch": "B.Com.",
                            "College Name/University": "S. V. University",
                            "Year of Passing": "1992"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "African American Literature, Women Studies"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=59469553500",
                        "Vidwan Link: https://vidwan.inflibnet.ac.in/profile/273697",
                        "Google scholar Link: https://scholar.google.com/citations?hl=en&user=ymMXHNUAAAAJ",
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
                            "Details of Research Publication": "Leveraging Renewable Energy Solutions to Enhance Language Acquisition in English Classrooms",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Energy Management System in Language Laboratories: Enhancing efficiency for language faculty in communication and soft skill training. DOI: https://doi.org/10.1051/e3sconf/202459101012",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Cognitive Computing in English Language Classrooms DOI: 10.1109/ICCCMLA63077.2024.10871285 Conference Location: Hamburg, Germany",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Black Feminism Movement: An Inherently Precious Articulation",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                },
                {
                    "title": "Research Projects & Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2014-16",
                            "Funded Project /Event": "Funded",
                            "Role": "P.I.",
                            "Title of the Project/Event": "Rendition of English Language in the Class Rooms of Higher Education: A Study",
                            "Amount in Rs. /-": "2,70,000",
                            "Funding Agency": "UGC-SERO"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Application ID": "202541025780",
                            "Title of the Patent": "Analysis of how language can be learnt through literature",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Application ID": "471087-001",
                            "Title of the Patent": "Augmented Literacy Pen in pursuance of and subject to the provisions of the Designs",
                            "Status": "Under Examination"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Application ID": "471032-001",
                            "Title of the Patent": "Acoustic Dialect Profiler Device in pursuance of and subject to the provisions of the Designs Act",
                            "Status": "Under Examination"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Application ID": "24088",
                            "Title of the Patent": "Interactive Language Learning System for Teaching English to Toddlers",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Received Best Teacher Award in the year 2008 for adopting good techniques and best practices in teaching.",
                        "Awarded a cash incentive in the year 2016 for successfully accommodating bulk scholarships for students in need.",
                        "Received Certificate of appreciation for presenting the topic entitled Student Welfare Activities during the Induction program held at Madanapalle Institute of Technology and Science during 29/09/2022 for I B. Tech students."
                    ]
                }
            ]
    },

    "Dr. B. Anitha": {
        "name": "Dr. B. Anitha",
        "email": "dranithab@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. B. Anitha.JPG",
        "designation": "Sr. Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "TEFL/TESOL",
                            "Specialization": "English Language",
                            "Branch": "English",
                            "College Name/University": "London College of Teachers",
                            "Year of Passing": "2020"
                        },
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Canadian Literature",
                            "Branch": "English",
                            "College Name/University": "Sri Venkateswara University",
                            "Year of Passing": "2017"
                        },
                        {
                            "Course": "MBA",
                            "Specialization": "Management Studies",
                            "Branch": "MBA",
                            "College Name/University": "Sri Venkateswara University",
                            "Year of Passing": "2012"
                        },
                        {
                            "Course": "PGDTE PGCTE",
                            "Specialization": "English",
                            "Branch": "English",
                            "College Name/University": "English and Foreign Languages University",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "M.A.",
                            "Specialization": "English Literature",
                            "Branch": "M.A.",
                            "College Name/University": "Sri Venkateswara University",
                            "Year of Passing": "2006"
                        },
                        {
                            "Course": "M.Com.",
                            "Specialization": "Commerce",
                            "Branch": "M.Com.",
                            "College Name/University": "Sri Venkateswara University",
                            "Year of Passing": "2003"
                        },
                        {
                            "Course": "B.Com.",
                            "Specialization": "Commerce",
                            "Branch": "B.Com.",
                            "College Name/University": "Indirapriyadarshini Degree College for Women, Osmania University",
                            "Year of Passing": "1992"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Canadian Literature, Cultural Studies & English Language"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link:",
                        "Vidwan Link:",
                        "Google scholar Link:",
                        "h-Index (As per Scopus Data) :"
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
                            "Details of Research Publication": "Between Companionship and Alienation in Literature and Cinema: Reimagining Personal Law through Mahasweta Devi&rsquo;s Story &ldquo;The Divorce (Talaq)&rdquo; and B.R. Chopra&rsquo;s &ldquo;Nikaah&rdquo;&rdquo;",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Second Deep Learning Algorithms for Stock Market Trend Prediction in Financial Risk Management&rdquo;. Revista Latinoamericana de la Papa, ISSN 1019-6609 eISSN 1853-4961, Vol. 29, No. 1, 2025",
                            "Indexing": "(ESCI)",
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
                            "Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Application ID": "202541065504 A",
                            "Title of the Patent": "AI and Machine Learning-Based Framework for Enhancing English Literature Studies in Higher Education",
                            "Status (Filed/Published/Under Examination/Granted)": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Application ID": "202541033592 A",
                            "Title of the Patent": "A System and Method for Personalized Treatment Planning of Brain Tumors Using Integrated Genomic and Imaging Data",
                            "Status (Filed/Published/Under Examination/Granted)": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Application ID": "202541033973 A",
                            "Title of the Patent": "Machine Learning-Based System and Method for Predicting Brain Tumor Progression Using Multimodal Data Fusion",
                            "Status (Filed/Published/Under Examination/Granted)": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Application ID": "202541033594 A",
                            "Title of the Patent": "AI-Powered System and Method for Early Detection and Classification of Brain Tumors Using Medical Imaging",
                            "Status (Filed/Published/Under Examination/Granted)": "Published"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Application ID": "202541009608 A",
                            "Title of the Patent": "Unique Method and Strategy for Cross Cultural Management to Aid International Businesses",
                            "Status (Filed/Published/Under Examination/Granted)": "Published"
                        },
                        {
                            "S.No": "6",
                            "Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Application ID": "435826-00113",
                            "Title of the Patent": "English Language Translation Device",
                            "Status (Filed/Published/Under Examination/Granted)": "Granted"
                        },
                        {
                            "S.No": "7",
                            "Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Application ID": "202441088836 A",
                            "Title of the Patent": "Natural Language Processing Method for Contextual Understanding of English Idioms and Phrases",
                            "Status (Filed/Published/Under Examination/Granted)": "Published"
                        },
                        {
                            "S.No": "8",
                            "Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Application ID": "202441077490 A",
                            "Title of the Patent": "Automated System for Grammar and Syntax Correction in English Texts",
                            "Status (Filed/Published/Under Examination/Granted)": "Published"
                        },
                        {
                            "S.No": "9",
                            "Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Application ID": "202441068918 A",
                            "Title of the Patent": "A Comprehensive Language Learning System: Harnessing Contextual Feedback for Improved Proficiency",
                            "Status (Filed/Published/Under Examination/Granted)": "Granted"
                        }
                    ]
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "A Young Woman\u2019s Quest for Empowerment and the Challenges Met\u201d in Alice Munro\u2019s Short Story \u201cThe Office\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Creative Research Thoughts, 11(7), Pg. 545-550, July 2023 DOI: http://doi.one/10.1729/Journal.36920"
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "\u201cNot fastened down\u201d \u2013 A Self-Reliant Journey in the Short Fiction of Alice Munro \u201cOranges and Apples",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Current Science and Humanities, 12(3), Pg. 395-399, December 2024"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "Deep Learning Algorithms for Stock Market Trend Prediction in Financial Risk Management",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Revista Latinoamericana de la Papa, 29 (1), July 2025 (ESCI)"
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "Between the Dream and the Reality: Middle Aged Woman Cravings and Contentment in \u201cLabor Day Dinner\u201d.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "The International Journal of Creative Research Thoughts, ISSN \u2013 2320-2882. Impact Factor: 7.97 (UGC Listed)"
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "A Mother a Myth: Portrayal of a Mother in Mahasweta Devi\u2019s Breast Giver.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Think India Journal. ISSN-0971-1260. Impact Factor: 5.97 (UGC Listed)"
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "The Theme of Expectations and Estrangement in Alice Munro\u2019s Short Stories \u201cAmundsen\u201d and \u201cHow I met My Husband\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "New Academia: An International Journal of English Language, Literature, Literary Theory. ISSN-2347-2073. (UGC Listed)"
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "Transformation of relationships into power relationships in Alice Munro\u2019s Short stories \u2018Runaway\u2019 and \u2018Haven\u2019",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Literary Insight A Refereed International Journal ISSN-0975-6248. (UGC Listed)"
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "Changing Perceptions: A Portrayal of Childhood and Adolescent Girls in the Selected Short Stories of Alice Munro.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "SVU Journal of English Studies. ISSN-2230-7923. (UGC Listed)"
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "Multi - Culturalism in Descriptive Sense: Indo-Canadian Interethnic Marriage",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Cultural Spaces: Canada & India organized by Department of English, Sri Venkateswara University and Indian Association for Canadian Studies. SVU Journal of English Studies. ISSN-2230-7923. (UGC Listed)"
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "Developing Language Skills through Literature and Communicative Approach Techniques",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "ISBN-978-93-5126-355-5."
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "The Influential Role of Literature in Enhancing Language Skills",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "ISBN-819085672-3."
                        }
                    ]
                },
                {
                    "title": "Books Published",
                    "content": [
                        "Mastering Business Communication Skills Tools for Success, Scicrafthub Publication, Thane 2025, ISBN: 978-81-985542-6-0 (2nd Author)",
                        "English Communication Skills for Engineers, Indo-Continental Academic Publishers ISBN No. 978-93-48684-81-3 (1st Author) DOI: 10.5281/zenodo.14994753"
                    ]
                }
            ]
    },

    "Dr. K. Lakshmi Devi": {
        "name": "Dr. K. Lakshmi Devi",
        "email": "drlakshmidevik@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/lakshmidevi.png",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "American Literature",
                            "Branch": "English Literature",
                            "College Name/University": "Sri Venkateswara University, Tirupati",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "M.Phil.",
                            "Specialization": "Indian Literature",
                            "Branch": "English Literature",
                            "College Name/University": "Sri Venkateswara University, Tirupati",
                            "Year of Passing": "2012"
                        },
                        {
                            "Course": "M.A.",
                            "Specialization": "English Literature",
                            "Branch": "English Language & Literature",
                            "College Name/University": "Sri Venkateswara University, Tirupati",
                            "Year of Passing": "2006"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Mathematics, Computer Science, & Statistics",
                            "Branch": "B.Sc.",
                            "College Name/University": "Sri Venkateswara University, Tirupati",
                            "Year of Passing": "2003"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus :",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/273938",
                        "Google scholar : https://scholar.google.co.in/citations?user=Gp983EgAAAAJ&hl=e",
                        "h-Index (As per Scopus Data) :"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026-27",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;AI-Driven Journalism as a Digital Governance Mechanism for Quality Education and Access to Information: Advancing Sustainable Development through SDG 4 and SDG 16.&quot; Journal of Daoist Studies 19.S7 (2026): 1127-1140.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "3",
                            "Details of Research Publication": "Black Feminism Movement: An Inherently Precious Articulation, Journal of New Zealand Studies, NS34 https://doi.org/ 10.5281/zenodo.7652179 (2022)",
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
                            "Academic Year": "2025-2026",
                            "Application ID": "202641022604 A",
                            "Title of the Patent": "A System and Method for Improving English Speaking Skills for Job Seekers Using Interactive Digital Learning Modules",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-2026",
                            "Application ID": "202641036621 A",
                            "Title of the Patent": "AI-Enhanced Daily Pronunciation Mastery Protocol (DPM System)",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-2024",
                            "Application ID": "202441032686 A",
                            "Title of the Patent": "Artificial Intelligence Based Detection and Prevention Of Thyroid Disease On Hormone Level For All Ages Of People Using IOT and Machine Learning For Smart Health Care Management System",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Dr.  G. Hemalatha": {
      name: "Dr.  G. Hemalatha",
      designation: "Asst. Professor",
      email: "drhemalathag@mits.ac.in",
      officeAddress: "BSH Block",
      image: "https://mits.ac.in/public/uploads/faculty/Hemalatha.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "PG Diploma", "Specialization": "English", "Branch": "English", "College Name/University": "PG Diploma in Communicative English, School of Distance Education, Bharathiar University", "Year of Passing": "2023"},
            {"S.No": "2", "Course": "Ph.D.", "Specialization": "English Literature", "Branch": "English Literature", "College Name/University": "Govt.Arts College, Bharathiar University", "Year of Passing": "2018"},
            {"S.No": "3", "Course": "B.Ed.", "Specialization": "English", "Branch": "English", "College Name/University": "PPG College of Education, Coimbatore", "Year of Passing": "2012"},
            {"S.No": "4", "Course": "M.A.", "Specialization": "English Literature", "Branch": "English Literature", "College Name/University": "Govt.Arts College, Bharathiar University", "Year of Passing": "2011"},
            {"S.No": "5", "Course": "B.A.", "Specialization": "English Literature", "Branch": "English Literature", "College Name/University": "Govt.Arts College, Bharathiar University", "Year of Passing": "2009"}
          ]
        },
        {
          title: "Research Areas",
          content: "Indian English Literature"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=59352400200"},
            {"Identifier": "Vidwan", "Link": "https://mits.irins.org/profile/576324"},
            {"Identifier": "Google scholar", "Link": ""},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "2"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024-2025", "Author Position": "4", "Details of Research Publication": "“Fostering English Language and Communication Skills in Engineering Students: A Study on the Eclectic Method”", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2023-2024", "Author Position": "3", "Details of Research Publication": "“Implementation of OBFS using Feature Extraction and information gain techniques for skin disease classification”", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "Others", "Academic Year": "2025-2026", "Application ID": "463638-001", "Title of the Patent": "E Learning Soft skill Analytics Device", "Status (Filed/Published/Under Examination/Granted)": "Published"},
            {"S.No": "2", "Affiliation": "Others", "Academic Year": "2025-2026", "Application ID": "202541071277", "Title of the Patent": "Methods and Apparatus for Teaching English Language to Indian Students Using AI- Powered Adaptive Learning", "Status (Filed/Published/Under Examination/Granted)": "Published"},
            {"S.No": "3", "Affiliation": "Others", "Academic Year": "2025-2026", "Application ID": "202541069601", "Title of the Patent": "Machine Learning- Enhanced Movie Recommendation Engine That Adapts to User Preferences for Customized Viewing Suggestions", "Status (Filed/Published/Under Examination/Granted)": "Published"},
            {"S.No": "4", "Affiliation": "Others", "Academic Year": "2024-2025", "Application ID": "202541040319", "Title of the Patent": "Personalized Learning in Literature and Language: The AI Revolution", "Status (Filed/Published/Under Examination/Granted)": "Published"},
            {"S.No": "5", "Affiliation": "Others", "Academic Year": "2024-2025", "Application ID": "407764-001", "Title of the Patent": "Design to AI Based English Language Learning Device, in pursuance of and subject to the provisions of the Designs Act, 2000 and the Designs Rules 2001", "Status (Filed/Published/Under Examination/Granted)": "Published"}
          ]
        }
      ]
    },

    "Dr. S. Mohankumar": {
      name: "Dr. S. Mohankumar",
      designation: "Asst. Professor",
      email: "drmohankumars@mits.ac.in",
      officeAddress: "BSH Block",
      image: "https://mits.ac.in/public/uploads/faculty/Dr.Mohankumar S_English.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Emotive Writng, ELT", "Branch": "English", "College Name/University": "VIT University, Chennai", "Year of Passing": "2020"},
            {"S.No": "2", "Course": "M.Phil.", "Specialization": "Prose", "Branch": "English", "College Name/University": "Bharathiar University", "Year of Passing": "2016"},
            {"S.No": "3", "Course": "M.A.", "Specialization": "Literature", "Branch": "English", "College Name/University": "Bharathiar University", "Year of Passing": "2014"},
            {"S.No": "4", "Course": "B.A.", "Specialization": "Literature", "Branch": "English", "College Name/University": "NGM College, Bharathiar University", "Year of Passing": "2012"}
          ]
        },
        {
          title: "Research Areas",
          content: "Emotive Writing, Film Studies"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57214401453"},
            {"Identifier": "Vidwan", "Link": "https://mits.irins.org/profile/238368"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.co.in/citations?user=ynHTFbAAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "1"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2023 - 24", "Author Position": "1", "Details of Research Publication": "Marginalised Life of Manual Scavengers: Questions of Witness Towards Society", "Indexing": "Scopus /WOS", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "2", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "1", "Details of Research Publication": "Digital Poetry: Edifying Strategy in Technological Era", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "1", "Details of Research Publication": "The Effectiveness of ICT in Edifying Language Learning: A Quasi-Experimental Study", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "3", "Details of Research Publication": "\"Journey from Reality to Virtuality\": the Impact of ICT in Education", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2016", "Author Position": "1", "Details of Research Publication": "Augmenting Emotional Intellect of Students Through Expressive Poems in ELT Classrooms", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024", "Application ID": "445629-001", "Title of the Patent": "English Grammar Sentence Checking Device", "Status (Filed/Published/Under Examination/Granted)": "Published"}
          ]
        }
      ]
    },

    "Dr. R. Sriganesh": {
        "name": "Dr. R. Sriganesh",
        "designation": "Asst. Professor",
        "email": "sriganeshr@mits.ac.in",
        "officeAddress": "BSH Block",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. R. Sriganesh.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "ELT / Biolinguistics",
                            "Branch": "English",
                            "College Name/University": "National Institute of Technology, Tiruchirappalli",
                            "Year of Passing": "2022"
                        },
                        {
                            "Course": "M.A.",
                            "Specialization": "English Language and Linguistics",
                            "Branch": "Linguistics",
                            "College Name/University": "Madurai Kamaraj University, Madurai",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Mechanical Engineering",
                            "Branch": "Mechanical Engineering",
                            "College Name/University": "Amrita Vishwa Vidyapeetham, Coimbatore",
                            "Year of Passing": "2007"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Biolinguistics, English Language Teaching, and Queer Studies"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus :",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/464958",
                        "Google scholar : https://scholar.google.com/citations?user=Q3aMzfcAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 2"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "Genetics of language and its implications on language interventions. Journal of Genetics. Volume 97, pages 1485&ndash;1491, (2018)",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "Genetics of reading ability and its role in solving reading difficulties. In The Idea and Practice of Reading. Eds. R. Joseph Ponniah and Sathyaraj Venkatesan. (2018)",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "Genetics of language and its implications on language interventions.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of genetics, 97(5), 1485-1491."
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "Impact of Reading on the Biological Foundations of Language, Cognition, and Emotion.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Rupkatha Journal on Interdisciplinary Studies in Humanities, 12(6)."
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "Genetics of reading ability and its role in solving reading difficulties.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "In The idea and practice of reading (pp. 125-139). Springer, Singapore."
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "An A to Z of second language assessment: How language teachers understand assessment concepts.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "London, UK: British Council, 46."
                        }
                    ]
                }
            ]
    },

    "Dr. Saktheeswar V. B.": {
      name: "Dr. Saktheeswar V. B.",
      designation: "Asst. Professor",
      email: "saktheeswarvb@mits.ac.in",
      officeAddress: "BSH Block",
      image: "https://mits.ac.in/public/uploads/faculty/Saktheeswar.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "English Literature – Fiction", "Branch": "English", "College Name/University": "Bharathiar University", "Year of Passing": "2023"},
            {"S.No": "2", "Course": "M.Phil.", "Specialization": "English Language Teaching", "Branch": "English", "College Name/University": "PSG College of Arts and Science, Coimbatore", "Year of Passing": "2009"},
            {"S.No": "3", "Course": "M.A.", "Specialization": "English Literature", "Branch": "M.A.", "College Name/University": "PSG College of Arts and Science, Coimbatore", "Year of Passing": "2004"},
            {"S.No": "4", "Course": "B.A.", "Specialization": "English Literature", "Branch": "B.A.", "College Name/University": "Sri Ramakrishna Mission Vidyalaya Arts and Science College, Coimbatore", "Year of Passing": "2002"}
          ]
        }
      ]
    },

    "Dr. Suresh Chimata": {
      name: "Dr. Suresh Chimata",
      designation: "Asst. Professor",
      email: "drsureshc@mits.ac.in",
      officeAddress: "BSH Block",
      image: "https://mits.ac.in/public/uploads/faculty/sureshchimata.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Indian English Literature", "Branch": "Indian English Literature", "College Name/University": "Acharya Nagarjuna University", "Year of Passing": "2023"},
            {"S.No": "2", "Course": "M.A.", "Specialization": "English Literature", "Branch": "English", "College Name/University": "Acharya Nagarjuna University", "Year of Passing": "2012"},
            {"S.No": "3", "Course": "B.A.", "Specialization": "English Literature", "Branch": "English", "College Name/University": "Acharya Nagarjuna University", "Year of Passing": "2005"}
          ]
        },
        {
          title: "Research Areas",
          content: "Language & Literature"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": ""},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/370290"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=e0ubocoAAAAJ&hl=en&oi=ao"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": ""}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2025-26", "Application ID": "", "Title of the Patent": "AI LINGUISTIC DATA LOGGER", "Status": "Filed"}
          ]
        }
      ]
    },

    "Dr. M. Parvathi": {
        "name": "Dr. M. Parvathi",
        "email": "parvathim@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. M. Parvathi.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Indo-American Literature",
                            "Branch": "Indo-American Literature",
                            "College Name/University": "S. V. University, Tirupati",
                            "Year of Passing": "2024"
                        },
                        {
                            "Course": "M.A.",
                            "Specialization": "American Literature",
                            "Branch": "M.A., (Litt.)",
                            "College Name/University": "S. V. University, Tirupati",
                            "Year of Passing": "1992"
                        },
                        {
                            "Course": "B.A.",
                            "Specialization": "English Literature",
                            "Branch": "B.A., (Litt.)",
                            "College Name/University": "S. P. W. College, S. V. University, Tirupati",
                            "Year of Passing": "1990"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "English Language & Literature"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=59533547700",
                        "Vidwan : https://mits.irins.org/profile/273632",
                        "Google scholar : https://scholar.google.com/citations?user=dXq5KCQAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) :"
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
                            "Details of Research Publication": "Review of ChatGPT Tools in Education Systems based on Literature: IAES International Journal of Artificial ntelligence (IJ-AI) Vol. 15, No. 1, February 2026, pp. 12~19; ISSN: 2252-8938, DOI: 10.11591/ijai.v15.i1.pp12-19",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "SEER: SECURED ENERGY EFFICIENT ROUTING ALGORITHMS FOR ATTACKS IN WIRELESS SENSOR NETWORK. Journal of Theoretical and Applied Information Technology 15th January 2025. Vol.103. No.1 &copy; Little Lion Scientific ISSN: 1992-8645 www.jatit.org E-ISSN: 1817-3195",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        }
                    ]
                },
                {
                    "title": "Research Projects and Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2014",
                            "Funded Project /Event": "Funded Project",
                            "Role": "P.I.",
                            "Title of the Project/Event": "Wise Usage of Technology in English Language Class Room by Professional Students: A Study",
                            "Amount in Rs. /-": "2,75,000",
                            "Funding Agency": "UGC-SERO, Hyderabad"
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
                            "Application ID": "202541084361 A",
                            "Title of the Patent": "A Device and Method for Personalized Letter Writing and Communication Coach for Students Using Machine Learning and IoT Devices",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Application ID": "Design Number: 471088-001, Class 14-03",
                            "Title of the Patent": "MULTILINGUAL WEARABLE TRANSLATOR",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Application ID": "202441025043 A",
                            "Title of the Patent": "BLOCKCHAIN-BASED FRAMEWORK FOR ANALYZING THE SECURITY AND PRIVACY OF IOT DEVICES FOR FUTURE ENHANCEMENT OF SOURCE LOCATION",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "NPTEL Domian Scholar in English Studies in April 2026.",
                        "NPTEL Discipline Star &ndash; Humanities and Social Sciences - Jan-Apr 2024",
                        "Certificate of Appreciation from NPTEL in recognition of a Mentor for the Effective Writing course - Jan-Apr 2025",
                        "Certificate of Appreciation from NPTEL in recognition of a Mentor for the Employment Communication A Lab Based Course - Jan-Apr 2025",
                        "Certificate of Appreciation from NPTEL in recognition of a Mentor for the Soft Skills Course - July-Dec 2021"
                    ]
                },
                {
                    "title": "Research Project",
                    "content": [
                        {
                            "S.No": "1",
                            "Name of the Faculty": "Dr. M. Parvathi",
                            "Title of the Project/Event": "Wise Usage of Technology in English Class Room by Professional Students - A Study",
                            "Funding Agency": "UGC-SERO",
                            "Sanctioned Amount": "2,75,000/-",
                            "Reference Number": "MRP-4606/14 (SER/UGC) March 2014",
                            "Duration": "2014-16 (Two Years)",
                            "Status": "Completed"
                        }
                    ]
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "\u201cSeer: Secured Energy Efficient Routing Algorithms for Attacks in Wireless Sensor Networks\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Theoretical and Applied Information Technology, Volume Vol. 103. No. 1- 2025, Year 2025, Pages 175-185 (Scopus)."
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "\u201cExploring Ernest Hemingway's Impact on the Legacy of American Short Fiction\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "\u00c7ankaya University Journal of Humanities and Social Sciences, Cankaya University, Turkey. Volume 17, Issue 2, Year 2024, Pages 172-181. (UGC-CARE list Group 1)"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "\u201cA Brief Study of Malgudi and Yoknapatawpha.\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Research Scholars and Professionals of English Language Teachers- JRSP-ELT, ISSN: 2456-8104, Issue 15, Vol. 3, 2019, www.jrspelt.com. Impact Factor: 4.928 (SJIF)"
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "\u201cStream of Consciousness, a Literary Technique in William Faulkner\u2019s Fictions.\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Research Scholars and Professionals of English Language Teachers- JRSP-ELT, ISSN: 2456-8104, Issue 12, Vol. 3, 2019. Impact Factor: 4.928 (SJIF)"
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "\u201cR K Narayan and William Faulkner: Prolific Regional Writers.\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Research Scholars and Professionals of English Language Teachers- JRSP-ELT, ISSN: 2456-8104, Issue 10, Vol. 2, 2018, www.jrspelt.com. Impact Factor: 4.928 (SJIF)"
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "\u201cThe Evolution of Indian Short Story in English.\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Research Scholars and Professionals of English Language Teachers- JRSP-ELT, ISSN: 2456-8104 Issue 9, Vol. 2, 2018, http://www.jrspelt.com. Impact Factor: 4.928 (SJIF)"
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "\u201cThe Theme of Humour and Irony in R. K. Narayan\u2019s Short Stories\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Innovative Research in Science, Technology and Management (ICIRSTM-17), Paper Id: 1020, Pp:92-97, ISBN: 978-93-86171-20-7, Modi Institute of Management & Technology, Dadabari, Kota, Rajasthan, 22-23 January 2017."
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "\u201cLanguage and Its Contribution to Intercultural and Cross-Cultural Studies in R K Narayan\u2019s Under the Banyan Tree\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "The Journal ROOTS: International Journal of Multidisciplinary Researchers. ISSN 2347-8684, Vol.3 Special Issue: 8 October 2016. Pg. No.94-96."
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "\u201cR. K. Narayan\u2019s Malgudi-An Imaginative and Live Landscape.\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "American International Journal of Research in Humanities, Arts and Social Sciences - (AIJRHASS) ISSN (Print): 2328-3734, ISSN (Online): 2328-3696, ISSN (CD-ROM): 2328-3688, June-August 2016; Issue 15 Volume 2, pg. no.122-125. Impact Factor: 5.80"
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "\u201cWise Usage of Technology in English Language-A Study,.\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journals of Multidisciplinary Research Academy (IJMRA), July 2016, Issue 7 Volume 6. Pg. no. 144-159. Impact Factor: 7.081. (UGC approved)"
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "\u201cYokanapatawpha Country as A Regional Element in William Faulkner\u2019s Short Stories.\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "American International Journal of Research in Humanities, Arts and Social Sciences - (AIJRHASS) ISSN (Print): 2328-3734, ISSN (Online): 2328-3696, ISSN (CD-ROM): 2328-3688, March-May 2016 Issue 14 Volume 2, pg. no. 166-169. Impact Factor: 5.80"
                        },
                        {
                            "S.No": "12",
                            "Title of the Paper": "\u201cThe East-West Conflict in R. K. Narayan\u2019s The Vendors of Sweets.\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "The Indian Diaspora. ISBN: 978-15-08587-21-7. Pg No: 90-93, on 26 & 27 Feb 2015."
                        },
                        {
                            "S.No": "13",
                            "Title of the Paper": "\u201cProperty, Wealth and the American Dream in William Faulkner's Barn Burning.\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "A Conference Proceedings with a special volume by The Indian Association for American Studies (IAAS)."
                        },
                        {
                            "S.No": "14",
                            "Title of the Paper": "\u201cUsage of Technology in English Language Class Room by Professional Students-A Study.\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "American International Journal of Research in Humanities, Arts and Social Sciences - (AIJRHASS) ISSN (Print): 2328-3734, ISSN (Online): 2328-3696-Volume 1, Issue 7, June-August, 2014, pp. 49-51. Impact Factor: 5.80"
                        },
                        {
                            "S.No": "15",
                            "Title of the Paper": "\u201cClassical Indian Narrative Technique in Short stories of R. K. Narayan\u201d.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Research Scholar - an International Refereed e-journal of Literary Explorations, ISSN 2320-6101, volume 2: issue 1, Feb, 2014. pg no: 188-195. Impact Factor: 0.998 (IIFS) (UGC approved)."
                        },
                        {
                            "S.No": "16",
                            "Title of the Paper": "\u201cFaulkner's Short Stories and His Depiction of Indians\u201d.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Pageant: Confident Foundation' an International Refereed Journal. ISBN: 8186067-15-9. pg no: 22-30."
                        },
                        {
                            "S.No": "17",
                            "Title of the Paper": "\u201cTragi-Comedy and Comi-Tragedy in Faulkner's Pantaloon in Black\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "IJMRA an International Journals of Multidisciplinary Research Academy, an Online International Journal, ISSN: 2249-5894, Volume-3: Issue-7: July, 2013. p. 341-349. Impact Factor: 5.7. (UGC approved)"
                        },
                        {
                            "S.No": "18",
                            "Title of the Paper": "\u201cChanging Portraits in A Rose for Emily\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Contemporary Research in India\", a peer-reviewed Multi-Disciplinary International Journal, ISSN: 2231-2137, Volume-3: Issue-1: March, 2013. p. 171-174. Impact Factor: 0.956. (ICI indexed)"
                        },
                        {
                            "S.No": "19",
                            "Title of the Paper": "\u201cWilliam Faulkner's use of Shakespearean Materials\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Forum for Musings, the JNTUH Journal of English Studies, ISSN: 2231-0266, volume VII: Issue 1, March 2013. p. 98-117. (UGC approved)"
                        },
                        {
                            "S.No": "20",
                            "Title of the Paper": "\u201cThe Influences of East and West in Tagore\u2019s The Gora and The Home and the World\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Journal-TJELLS, ISBN: 978-81-23897-0-7, Volume-I: April 2012. Pg no. 168-175."
                        },
                        {
                            "S.No": "21",
                            "Title of the Paper": "\"The Influence of East and West in Rabindranath Tagore\u2019s Gora and The Home and The World\"",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "TJELLS, during 2 & 3 April 2012, ISBN: 978-81-23897-0-7, Volume-I: Pg. no. 168-175."
                        },
                        {
                            "S.No": "22",
                            "Title of the Paper": "\u201cEffective ways of Professional English\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference Proceedings, VELTECH, University, Chennai, Feb 2012, ISBN: 9788189843496. p. 457-459."
                        },
                        {
                            "S.No": "23",
                            "Title of the Paper": "\u201cSymbolism in Tagore's Plays, The Post Office and Muktadhara\u201d",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "S.V.U Journal of English Studies. ISSN: 2230-7923, Volume-X: Issue-2: Dec, 2011. Pg.no. 120-126"
                        },
                        {
                            "S.No": "24",
                            "Title of the Paper": "\"Symbolism in Tagore\u2019s plays The Post Office and The Muktadhara\"",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "April 2011. ISSN: 2230-7923, Volume-X: Issue-2: Pg.no. 120-126."
                        }
                    ]
                },
                {
                    "title": "Patent",
                    "content": [
                        "Koushik Reddy Chaganti, Research Scholar, Dept. of Computer and Information Systems, University of the Cumberlands, KY USA, Dr. Parvathi Malepati, Assistant Professor of English, Department of English & Foreign Languages, Madanapalle Institute of Technology & Science, Madanapalle, Andhra Pradesh, India on \u201cBlockchain-Based Framework for Analyzing the Security and Privacy of IoT Devices for Future Enhancement of Source Location\u201d with Application No.202441025043 A and Publication Date: 05/04/2024.",
                        "Reviewer For \"Exploring the relationship between Teacher and parent support and student non-cognitive outcomes: A Latent Profile Analysis Approach\" [Paper #HSSCOMMS-20018R], HSSCOMMS-20018R for Humanities and Social Sciences Communications."
                    ]
                },
                {
                    "title": "Book Chapters",
                    "content": "\u201cInnovation in English Language Teaching and Learning: Enriching Education in the Digital Era\u201d Journal of Crafting Resources for Language Pedagogy in the Digital Era, LSSLT 30: Crafting Resources for Language Pedagogy in the Digital Era Product no.: ISBN 9783969392119, Volume 30, Year 2024, Pages 284pp."
                },
                {
                    "title": "Conferences",
                    "content": [
                        "Presented a paper on \u201cOutrageous but Insightful: Satire and Social Chaos in A Confederacy of Dunces\u201d in an International Conference-cum-Workshop ICWLL on \u201cLanguage and Literature\u201d on 29th & 30th May 2024 and presented a paper on \u201cOutrageous but Insightful: Satire and Social Chaos in A Confederacy of Dunces\u201d organised by the Department of English & Foreign Languages, MITS, Madanapalle",
                        "A Two Day International Conference-cum-Workshop ICWLL on \u201cAcademic Reading and Writing\u201d \u201con 12th & 13th June 2024 organised by the Department of English & Foreign Languages, MITS, Madanapalle",
                        "A Two Day International Conference Cum Workshop ICWLL on \u201cLanguage and Literature \u201corganised by the Department of English & Foreign Languages, MITS, Madanapalle. on 14th & 15th October 2022.",
                        "A One Day International Conference on \u201cHemingway\u2019s Contribution to The Tradition of American Short Fiction\u201d at an International Conference on \u201cEnglish Language, Language, Transactions Studies and Humanities\u201d organized by the Department of English, Rathinam on 16th September 2022.",
                        "A Three Day International Conference and present a paper on \"The Role of Indian Diaspora in Canada\" on Cultural Spaces: India & Canada, organized by the Department of English, S.V. University, Tirupati, during 27-29 January 2014.",
                        "A Three Day International Conference on \u2018Indian Association for American Studies (IAAS)\u2019 and presented a paper \"Property, Wealth and the American Dream in William Faulkner's Barn Burning\" organized by the Department of History, S.V. University, Tirupati, by The Indian Association for American Studies (IAAS). during 29-30 July 2013.",
                        "A Two Day International Conference on \u2018Teaching Language through Literature\u2019 and presented a paper on \"Teaching Language through Literature\" organized by the Department of Humanities & Social Sciences, MNIT, Jaipur, Gandhi Nagar on 17 & 18 Jan 2013.",
                        "A Three Day International Conference on \"Lexica Grammar and The New Millennium Learners\" and presented a paper on \"Activity Based Grammar Teaching\" at VIT University, Vellore from 3-5 January 2013.",
                        "A Three Day National Conference on \"Elements of Classical Indian Narrative and The Short Stories of R. K. Narayan\" at the 58th All India English Teacher's Conference on the theme 'New Dimensions in English Studies ' held from 27-29 Dec 2013.",
                        "A Two Day National Conference on \u201cEnhancing quality of Teaching English in Indian Classrooms in India\", in a Two-Day National Conference on \u2018A Pragmatic Shift in ELT: Empowerment of English Classroom\u2019 by the Department of Humanities & Social Sciences, Vasavi Engineering College, Hyderabad, 1-2 February 2013.",
                        "A Two Day National Conference on \u2018Emerging Trends in ELT Today\u2019, in a Two-Day National Conference on \u2018Innovations in the Teachings of English Language and Literature\u2019 by the Department of English, GITAM University, Hyderabad, 24-25 February 2012.",
                        "A Two Day National Conference on \u2018Employability Skills and Industry Needs\u2019, at a National Conference, MGIT, Hyderabad, November 2012."
                    ]
                },
                {
                    "title": "Seminars",
                    "content": [
                        "A One-day online Seminar on \u201cAI Powered Language Tools: Enhancing English Language Proficiency through Chat GPT, Grammarly and Beyond\u201d by the Department of English $ Foreign Languages, MITS, Madanapalle, on 05th December 2024.",
                        "A One-day online National Seminar on \u201cRecent Trends in Literature\u201d conducted by the Department of English, School of Social Science and Languages (SSL), Vellore Institute of Technology, Vellore. on 9th December 2023.",
                        "A One-day online National Seminar on \u201cDevelopment of Teaching Learning Material in the Age of AI\u201d organised by the Department of English & Foreign Languages, MITS, Madanapalle, on 30th November 2023.",
                        "A One-day online National Seminar on \u201cInnovative Research: The Need of the Hour\u201d conducted by the Department of English, School of Social Science and Languages (SSL), Vellore Institute of Technology, Chennai, on 16th June 2023.",
                        "A One-day online National Seminar on \u201cGames and Activities to Make Grammar Teaching and Learning Really Fascinating\u201d organised by the Department of English & Foreign Languages, MITS, Madanapalle, on 14th June 2023.",
                        "A Five Day online program on \u201cIELTS TTT\u201d from Acharya Nagarjuna IELTS Training Centre, Guntur during 16 \u2013 20 May 2022.",
                        "A National Webinar on \u201cBlooms Taxonomy for OBE\u201d conducted by the Department of English, Hindu College, Guntur on 28th March 2022.",
                        "A Two Day UGC National Seminar in English \u201cWilliam Faulkner\u2019s A Rose for Emily: A Tragic Love Story\u201d organised by Sree Padmavathi Mahila University, Tirupati, on February 2015.",
                        "A Two Day UGC National Seminar on \"Emerging Trends in Indian Writing in English in 21st Century\" at Sri Durga Malleswara Siddartha Malleswara Mahila Kalasa, Vijayawada in collaboration with the Department of English, Krishna University and presented a paper on 'Gender Issues in the Writings of Chitra Mukhargee Devakarne\", on 1-2 August 2013.",
                        "A One Day UGC National Seminar on Rabindranath Tagore and presented a paper entitled, \"Rabindranath Tagore and His India,\" organized by the Department of English, S.V. University, Tirupati, on February 2012."
                    ]
                },
                {
                    "title": "FDPs and Workshops",
                    "content": [
                        "Participated in a Teacher Training Programme the NEP 2020 Orientation & Sensitization Programme under Malaviya Mission Teacher Training Programme (MM-TTP) of University Grants Commission (UGC) Organized by UGC MMTTC, Andhra University, Visakapatnam, Andhra Pradesh, from 18th to 26th June 2025.",
                        "Participated in a Teacher Training Programme the NEP 2020 Orientation & Sensitization Programme under Malaviya Mission Teacher Training Programme (MM-TTP) of University Grants Commission (UGC) Organized by UGC MMTTC, Maulana Azad National Urdu University, Hyderabad from 21st to 30th April 2025.",
                        "Attended a Five-day Faculty Development Programme on Redefining the Role of English Teachers: Teaching Methodology with new Perspectives\u201d organized by the Department of English & Foreign Languages in Collaboration with MITS IEEE Student Branch, MITS-Madanapalle from 20 \u2013 25 January 2025.",
                        "Participated in an International Webinar on \u201cTribal Development and Law\u201d organized by Nucleus of Learning and Development, India on 6th August 2024.",
                        "Participated in an IP Awareness/Training Programme under National Intellectual Property Awareness Mission on 19 July 2024, organized by Intellectual Property Office, India.",
                        "Participated in an International Webinar on \u201cUnderstanding South Asia Through SAARC Literature\u201d organized by Nucleus of Learning and Development, India on 18th July 2024.",
                        "Participated in National Webinar on \u201cCommunicative Cum Soft Skills in English\u201d organized by Nucleus of Learning and Development, India on 25th June 2024.",
                        "Attended a Five-day Professional Development Programme on Futuristic Trends of Language Learning: Impact of AI on 21st Century Learners\u201d conducted by the Department of English & Foreign Languages on 12-13 June 2024.",
                        "Successfully completed a One Week Faculty Development Programme on \u201cOBE & NEP 2020\u201d during 10th to 14th June 2024 jointly organized by Internal quality Assurance Cell \u2013 IQAC, PBR VITS, Kavali and VIT-AP University, Amaravathi.",
                        "Participated in a two-day international workshop on \u201cAcademic Writing: Action Research in English Language Classrooms and incorporating Technology in ELT\u201d conducted by the Department of English & Foreign Languages on 12-13 June 2024.",
                        "Participated in a Teacher Training Programme the NEP 2020 Orientation & Sensitization Programme under Malaviya Mission Teacher Training Programme (MM-TTP) of University Grants Commission (UGC) Organized by UGC MMTTC, Maulana Azad National Urdu University, Hyderabad from 3rd - 12th June, 2024.",
                        "Successfully completed 12 weeks NPTEL-AICTE Faculty Development Programme course on \u201cLiterary Criticism\u201d during Jan-April 2024.",
                        "Successfully completed 8 weeks NPTEL-AICTE Faculty Development Programme course on \u201cEnglish Literature of the Romantic Period: 1798-1832\u201d during Jan-March 2024.",
                        "Successfully participated in an International Workshop on \u201cCrafting Knowledge: A Comprehensive Guidance on Research Design and Academic Writing for Humanities and Social Sciences\u201d held at SR University, Warangal, from 18-24 March 2024.",
                        "Participated in a Professional Development Program Free Software for Collaborative Learning conducted by NITTTR, Chennai from 11/03/24 to 15/03/24 with Notional learning hours: 20 through online mode.",
                        "Participated in a Professional Development Program on Design Thinking Pedagogy conducted by NITTTR, Chennai from 19/02/24 to 23/02/24 (Notional Learning Hrs: 20).",
                        "Participated in a Professional Development Program on NBA Accreditation conducted by NITTTR, Chennai from 12/02/24 to 16/02/24 at Madanapalle Institute of Technology and Science, Madanapalle.",
                        "Attended a Five-day FDP on \u201cFuturistic Trends of Language Learning: Impact of AI on 21st Century Learners\u201d conducted by the Department of English & Foreign Languages during 22-26 January 2024.",
                        "Attended a Five-day Professional Development Programme on \u201cGamification Practices in Language Pedagogy\u201d organized by the NITTTR-Chennai, from 01.01.2024 to 05.01.2024.",
                        "A one-week Online Faculty Development Programme on \u201cIntegrating 21st Century Skills into English Curriculum\u201d organized by the Department of Humanities and Sciences (ENGLISH), S. A. Engineering College, Chennai, from 17.11.2023 to 24.11.23.",
                        "A one-week Online Faculty Development Programme on \u201cArtificial Intelligence and Language Learning organized by the Department of English and Other Foreign Languages, SRM Institute of Science and Technology from 30.10.2023 to 04.11.2023.",
                        "A one-week Online Faculty Development Programme on \u201cDeconstructing Folklore\u201d organized by the Career Development Cell (CDC), Gokul Global University, Siddhpur, Gujarat from 16-22 October 2023.",
                        "A Five-Day Online Faculty Development Programme on \u201cMixed Research Methods in Social Sciences\u201d organized by the AMITY University, Kolkata, from 24 \u2013 28 July 2023.",
                        "A Five-Day Online Faculty Development Programme on \u201cAdapting English Language Teaching to the Fourth Industrial Revolution\u201d organized by the Department of English, Bharath Institute of Engineering and Technology, Hyderabad from 21 \u2013 27 June 2023.",
                        "A Five-Day Online Faculty Development Programme on \u201cContemporary Literary Themes and Techniques\u201d organized by the School of Social Sciences and Languages, VIT, Chennai from 19 \u2013 23 June 2023.",
                        "Successfully completed 12 weeks NPTEL-AICTE Faculty Development Programme course on \u201cIndian Fiction in English\u201d during Jan-April 2023.",
                        "A one-day Workshop on \u201cLeadership Skills for Teachers\u201d organized by Gurusahala & K R Mangalam University, Gurugram, Haryana on 11th January 2023.",
                        "A one-week Online Faculty Development Programme on \u201cIndian Knowledge Systems\u201d organized in association with Council for Teacher Education Foundation (CTEF), Delhi-NCR Chapter & Viva Education., K R Mangalam University, Gurugram, Haryana from 02 January 2023 to 08 January 2023.",
                        "A Five-Day Online Faculty Development Programme on \u201cCommunication Skills for Research Paper Writing and Professional Practices\u201d organized by the Department of Basic Sciences and Humanities GMR Institute of Technology, Rajam, Andhra Pradesh, India from 4th \u2013 8th December 2022.",
                        "A one-week Online Faculty Development Programme on \u201cPedagigical Techniques for Quality Higher Education\u201d organized by the School of Humanities, K R Mangalam University, Gurugram, Haryana from 1-7 December 2022.",
                        "A one-day Workshop on \u201cDigital Skills for Educators and E-Content Development\u201d organized by Gurusahala & K R Mangalam University, Gurugram, Haryana on 29th November 2022.",
                        "A one-week Online Faculty Development Programme on \u201cDate Science for Social Sciences\u201d organized by the Teaching Learning Centre, Ramanujan College, University of Delhi, under the aegis of MINISTRY OF EDUCATION, PANDIT MADAN MOHAN MALAVIYA NATIONAL MISSION ON TEACHERS AND TEACHING from 01 \u2013 07 November 2022.",
                        "Successfully completed 12 weeks NPTEL-AICTE Faculty Development Programme course on \u201cSoft Skills\u201d during July-October 2022.",
                        "A One Day Online IP Awareness/Training Programme under National Intellectual Property Awareness Mission organized by the Intellectual Property Office, India on 17th October 2022.",
                        "A Six-Day Faculty Development Programme on \u201cTask Based English Language Teaching\u201d organized by the Department of Humanities and Sciences, Vardhaman College of Engineering, Kacharam, Shamshabad, Hyderabad from 26th September 2022 to 1st October 2022.",
                        "A Five-Day Faculty Development Programme on \u201cGendered Contours of Feminism\u201d organized by the Department of Languages, Presidency University, Bangalore from 26th to 30th September 2022.",
                        "A one-week Faculty Development Programme on \u201cAdvanced Pedagogical Techniques\u201d organized by Teaching Learning Centre, Ramanujan College University of Delhi under the aegis of Ministry of Education Pandit Madan Mohan Malaviya National Mission On Teachers and Teaching from 19 \u2013 25 September 2022.",
                        "A One Day Virtual International Meeting Room on August 2022 on the \u201cBasics of Research Methodology\u201d between Kanpur Institute of Technology, Kanpur, India, and APTIKOM SULUT \u2013 Indonesia.",
                        "A One Day International FDP-cum-Workshop on Plagiarism Detection and Removal in Research Paper and Ph.D. Thesis using Software organized by BlueCrest University, Liberin & Research Indian Foundation, India on 31st July 2022.",
                        "A Five-Day Online Faculty Development Programme on \u201cIndustry of Teaching English: Practical Strategies, Research, and Insights\u201d during May 23-27, 2022 organized by the Department of English & Foreign Languages, MITS, Madanapalle.",
                        "A Three-day Programme on n \u201cCapacity Building towards achieving Good Governance\u201d (in association with DoPT,GoI), organised by AP HRDI in association with DoPT, GoI during 08th - 10th November 2021.",
                        "A Five Day online FDP program on \u201cIndustry of Teaching English: Practical Strategies, Research, and Insights\u201d during May 23-27, 2020 organized by the Department of English and Foreign Languages, Madanapalle Institute of Technology and Sciences, Madanapalle.",
                        "A two-day workshop for Research Scholars in English on Post-Modern and Post-Colonial Critical Theories, by the Department of English, Sri Padmavathi Mahila Viswavidyalayam, Tirupati, on 10-11 November 2016.",
                        "A three-day Faculty Development Programme on \u201cTeaching towards Excellence\u201d, organized by the Department of English & Foreign Languages, MITS, Madanapalle from 26-28 October 2016.",
                        "A One Day Workshop on Effective Research Methodologies in association with Indo-US Collaboration for Engineering Education at MITS, Madanapalle on 11th Feb 2015.",
                        "A Two Day National Level Workshop on Train the Trainers at MITS, Madanapalle on 24th& 25th Feb 2015.",
                        "A Three Day Workshop by Open Kite - Ignis Careers, Hyderabad on their interaction with I B Tech students and English faculty during 2 - 4 Dec 2014.",
                        "A Three Day Outcome-based Learning Workshop organized by BITS PILANI, Hyderabad Campus from November 14-16, 2014.",
                        "A Three Day Outcome-based Learning Workshop organised by BITS PILANI, Hyderabad Campus from August 22-24, 2014.",
                        "A Two Day National Faculty Development Programme on Pragmatic Strategies For Professional Communication (Under TEQIP-II) organised by Sree Vidyanikethan Engineering College, Sree Sainath Nagar, A.Rangampet\u2013 517102 Department of GEBH, 26th & 27th September 2014.",
                        "A one-day National Workshop on 'Moral Values and Professional Ethics' entitled \u201cEngineering the Inner Excellence\u201d at JNTU, Anantapuram, on 05 July 2014.",
                        "A one-day National Level Workshop on Employability & Technical English for engineering students, on 11 April 2014 under PHOTON-14 at Madanapalle Institute of Technology & Science, Madanapalle, Andhra Pradesh.",
                        "A Two-day National Symposium on \"Teacher-Text-Student Interaction\", organised by JNTUH, Hyderabad, during 13-14 December 2013.",
                        "A Two-day National Level Faculty Development Programme on \"Techniques in Teaching English\" organised by Sri Vidyanikethan Engineering College, Tirupati, on 8 & 9 March 2013.",
                        "A one-day National Level Workshop on Technical English for engineering students in March 2011 under PHOTON-11 at Madanapalle Institute of Technology & Science, Madanapalle, Andhra Pradesh.",
                        "A One Week JKC Training Programme on Communication & Soft Skills organized by the JKC the Government of Andhra Pradesh, March 2006."
                    ]
                }
            ]
    },

    "Dr. Md Nasir Hossain": {
      name: "Dr. Md Nasir Hossain",
      designation: "Asst. Professor",
      email: "drnasirhossainmd@mits.ac.in",
      officeAddress: "BSH Block",
      image: "../public/uploads/faculty/Dr. Md Nasir Hossain.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Drama", "Branch": "English", "College Name/University": "School of LL&I, MANU University (A Central University), Hyderabad", "Year of Passing": "2025"},
            {"S.No": "2", "Course": "M.Phil.", "Specialization": "ELS", "Branch": "English Language Studies", "College Name/University": "Centre for English Language Studies, School of Humanities, University of Hyderabad,", "Year of Passing": "2021"},
            {"S.No": "3", "Course": "M.A.", "Specialization": "English", "Branch": "English", "College Name/University": "MANU University, Hyderabad", "Year of Passing": "2019"},
            {"S.No": "4", "Course": "B.A. (Honours)", "Specialization": "English (Hons)", "Branch": "English", "College Name/University": "Aligarh Muslim University, Aligarh", "Year of Passing": "2017"}
          ]
        },
        {
          title: "Research Areas",
          content: "Cultural Studies, Performance Studies, Drama, Critical Discourse Analysis, South Asian Literature, Literary Criticism & Theory"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": ""},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/586261"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?hl=en&user=v0_KE6QAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": ""}
          ]
        }
      ]
    },

    "Mr. Naresh Maruboina": {
      name: "Mr. Naresh Maruboina",
      designation: "Asst. Professor",
      email: "nareshm@mits.ac.in",
      officeAddress: "BSH Block",
      image: "https://mits.ac.in/public/uploads/faculty/naresh.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "M.A.", "Specialization": "English", "Branch": "M.A.", "College Name/University": "Andhra University", "Year of Passing": "2014"},
            {"S.No": "2", "Course": "B.A.", "Specialization": "English", "Branch": "B.A.", "College Name/University": "Andhra Loyola College", "Year of Passing": "2010"}
          ]
        },
        {
          title: "Conferences & Workshops attended",
          content: [
            "An International Conference and Workshops on Language and Literature (ICWLL 2025), organized by the Department of English & Foreign Languages, MITS, Madanapalle, from 29 May 2025 to 30 May 2025.",
            "A 5 -Day online Faculty Development Program on Futuristic trends of Language Learning: Impact of AI 21st Century Learners, organized by Department of English & Foreign Languages, Madanapalle Institute of Technology & Science, Madanapalle from 22 January 2024 to 26 January 2024.",
            "An International Conference and Workshops on Trends in Language Teaching, Literature, Cultural Studies, and Linguistics” (ICWLL 2024), organized by the Department of English & Foreign Languages, MITS, Madanapalle on 12 & 13 June 2024."
          ]
        },
        {
          title: "Moocs",
          content: [
            "NPTEL Online Certification (Funded by the Ministry of HRD, Govt. of India) for passing the course Employment Communication A Lab Based Course with a score of 65% during Jan-March 2025.",
            "NPTEL Online Certification (Funded by the Ministry of HRD, Govt. of India) for passing the course Effective Writing with a score of 75% during Jan-Feb 2024."
          ]
        }
      ]
    },

    "Dr. R. Saravana": {
        "name": "Dr. R. Saravana",
        "email": "drsaravanar@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. R. Saravana.JPG",
        "designation": "Assoc. Professor & Head (I/c)",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Fluid Dynamics",
                            "Branch": "Mathematics",
                            "College Name/University": "S. V. University, Tirupati",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "M.Phil.",
                            "Specialization": "Fluid Dynamics",
                            "Branch": "Mathematics",
                            "College Name/University": "S. V. University, Tirupati",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "B.Ed.",
                            "Specialization": "Mathematics, English",
                            "Branch": "Mathematics, English",
                            "College Name/University": "S. V. University, Tirupati",
                            "Year of Passing": "2007"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Mathematics",
                            "Branch": "M.Sc",
                            "College Name/University": "S. V. University, Tirupati",
                            "Year of Passing": "2005"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Mathematics, Physics, Computer Science",
                            "Branch": "B.Sc",
                            "College Name/University": "S. V. University, Tirupati",
                            "Year of Passing": "2003"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Peristaltic Transport, Fluid Dynamics, Meteorology"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=54936019100",
                        "Vidwan : https://mits.irins.org/profile/272818",
                        "Google scholar : https://scholar.google.co.in/citations?user=s26Gv8EAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 13"
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
                            "Details of Research Publication": "Pulsatile flow of nonlinear radiative Carreau&ndash;Yasuda nanofluid with temperature-dependent properties and exo/endothermic reactions in a Darcy&ndash;Forchheimer porous channel",
                            "Indexing": "ESCI/Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Hydromagnetic Peristaltic Propulsion of a Pseudoplastic Fluid Through a Porous Symmetric Channel with Wall Properties, Heat Transfer, 54(7), 4444-4456, 2025",
                            "Indexing": "ESCI/Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Robust finite difference scheme for the magnetohydrodynamics natural convection in a quadrant-shaped enclosure with radiation effect, The European Physical Journal Plus, 139(8), Article Id: 702, 2024. (Impact Factor:2.8)",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Characterization and prediction of southwest monsoon rainfall patterns in Central India as a linear state space modeling, Natural Hazards, 120 (3), 2553-2569, 2024. (Impact Factor:4)",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Thermal radiation and diffusion effects in MHD Williamson and Casson fluid flows past a slandering stretching surface, Heat Transfer, 51 (4), 3187-3200, 2022",
                            "Indexing": "ESCI/Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "Modelling and forecasting for monthly surface air temperature patterns in India, 1951-2016: Structural time series approach&rdquo; Journal of Earth System Science, 130(1), 1-20, 2021. (Impact Factor: 1.7)",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Peristaltic-Ciliary flow of a Casson fluid through an inclined tube, Communication in Biomathematical Sciences, 4(1), 23-38, 2021",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "5",
                            "Details of Research Publication": "Physical Significance of Rotation and Hall Current Effects on Hemodynamic Physiological Jeffrey Fluid with Porous Medium through a Tapered Channel, Advances in Fluid Dynamics, 573-587, 2021",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Peristaltic pumping of Ellis fluid through a flexible tube with complete slip effects, Journal of Naval Architecture and Marine Engineering, 17(2), 79-88, 2020",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "2",
                            "Details of Research Publication": "Modelling and predicating the patterns of seasonal rainfall in Tamil Nadu, India 1951-2017: an UCM approach&rdquo; Arabian Journal of Geosciences, 13 (5), 1-11, 2020",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "3",
                            "Details of Research Publication": "Peristaltic flow of a Jeffrey fluid in contact with a Newtonian fluid in a vertical channel, Applied Mathematics and Scientific Computing, 181-189, 2019",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "2",
                            "Details of Research Publication": "Stochastic modelling of the monthly average maximum and minimum temperature patterns in India 1981&ndash;2015, Meteorology and Atmospheric Physics, 131 (4), 775-787, 2019. (Impact Factor: 2.1)",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "2",
                            "Details of Research Publication": "Unobserved component modeling for seasonal rainfall patterns in Rayalaseema region, India 1951&ndash;2015&rdquo;, Meteorology and Atmospheric Physics, 131 (5), 1387-1399, 2019",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of aligned magnetic field on Casson fluid flow over a stretched surface of non-uniform thickness, Nonlinear Engineering 8(1), 283-292, 2019",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "2",
                            "Details of Research Publication": "Unobservable Components Modelling of Monthly Average Maximum and Minimum Temperature Patterns in India 1981&ndash;2015&rdquo; Pure and Applied Geophysics 176(1), 463-482, 2019. (Impact Factor: 1.9)",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "Influence of Compliant Walls and Heat Transfer on the Peristaltic Transport of a Rabinowitsch Fluid in an Inclined Channel, Zeitschrift f&uuml;r Naturforschung A, 73(9), 833-843, 2018. (Impact Factor: 1.3)",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "2",
                            "Details of Research Publication": "Critical Comparison of North East Monsoon Rainfall for Different Regions through Analysis of Means Technique, Mausam 69(3), 411-418, 2018. (Impact Factor: 1)",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "1",
                            "Details of Research Publication": "Peristaltic flow of a Bingham fluid in contact with a Jeffrey fluid, Applications of Fluid Dynamics. Lecture Notes in Mechanical Engineering, 505-513, 2018",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "3",
                            "Details of Research Publication": "Peristaltic flow of an Ellis fluid model in an inclined uniform tube with wall properties, International Journal of Mechanical Engineering and Technology, 9(2), 15-27, 2018",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "2",
                            "Details of Research Publication": "Modeling and forecasting rainfall patterns of southwest monsoons in North-East India as a SARIMA process, Meteorology and Atmospheric Physics 130(1), 99-106, 2018. (Impact Factor: 2.1)",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "1",
                            "Details of Research Publication": "MHD peristaltic flow of a Hyperbolic tangent fluid in a non-uniform channel with heat and mass transfer, IOP Conf. Series: Materials Science and Engineering 263 (2017) 062006, 1-15",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "3",
                            "Details of Research Publication": "Aligned magnetic field effect on unsteady liquid film flow of Casson fluid over a stretching surface, IOP Conf. Series: Materials Science and Engineering 263 (2017) 062008, 1-8",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "3",
                            "Details of Research Publication": "Peristaltic motion of a Bingham fluid in contact with a Newtonian fluid in a vertical channel, IOP Conf. Series: Materials Science and Engineering 263 (2017) 062005, 1-10",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "3",
                            "Details of Research Publication": "Hall effects on peristaltic flow of couple stress fluid in a vertical asymmetric channel, IOP Conf. Series: Materials Science and Engineering 263 (2017) 062021, 1-18",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "3",
                            "Details of Research Publication": "Peristaltic transport of a Jeffrey fluid in contact with a Newtonian fluid in an inclined channel, Ain Shams Engineering Journal, 8(4), 683-687, 2017. (Impact Factor: 6)",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2016-17",
                            "Author Position": "3",
                            "Details of Research Publication": "Influence of velocity slip conditions on MHD peristaltic flow of a Prandtl fluid in a non-uniform channel, Malaysian Journal of Mathematical Sciences, 10(1), 35-47, 2016",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2014-15",
                            "Author Position": "3",
                            "Details of Research Publication": "Influence of elasticity on MHD peristaltic transport of a Jeffrey fluid through porous medium channel with heat and mass transfer, Advances and Applications in Fluid Mechanics, 17(1), 1-16, 2015",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013-14",
                            "Author Position": "3",
                            "Details of Research Publication": "Peristaltic transport of a Fourth-grade fluid between porous walls with suction and injection, International Journal of Pure and Applied Mathematics, 86(2), 293-300, 2013",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "29",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013-14",
                            "Author Position": "4",
                            "Details of Research Publication": "Peristaltic pumping of a Bingham fluid in contact with a Newtonian fluid in an inclined channel under long wave length approximation, Advances and Applications in Fluid Mechanics, 13(2), 127-139, 2013",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "30",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013-14",
                            "Author Position": "3",
                            "Details of Research Publication": "Combined influence of velocity slip, temperature and concentration jump conditions on MHD peristaltic transport of a Carreau fluid in a non-uniform channel with wall properties, Applied Mathematics and Computation, 225, 656-676, 2013. (Impact Factor: 3.4)",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "31",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011-12",
                            "Author Position": "5",
                            "Details of Research Publication": "Peristaltic transport of a Jeffrey fluid in a porous channel with suction and injection, International Journal of Mechanical and Materials Engineering, 7(2), 152-157, 2012",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "32",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011-12",
                            "Author Position": "4",
                            "Details of Research Publication": "Effect of induced magnetic field on peristaltic transport of a Carreau fluid in an inclined channel filled with porous material, International Journal of Mechanical and Materials Engineering, 6(2), 240-249, 2011",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
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
                            "Application ID": "202441015699 A",
                            "Title of the Patent": "A Self-Induced laser MHD for operating turbocharged gas turbine engine",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Qualified APSET 2021.",
                        "NPTEL Discipline Star Award January-April 2024"
                    ]
                }
            ]
    },

    "Dr. K. V. Narasimha Murthy": {
      name: "Dr. K. V. Narasimha Murthy",
      designation: "Assoc. Professor",
      email: "murthyk@mits.ac.in",
      officeAddress: "BSH Block",
      image: "https://mits.ac.in/public/uploads/faculty/Dr. K.V N. Murthy.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Stochastic Modeling", "Branch": "Mathematical Sciences", "College Name/University": "S. K. University, Anantapur", "Year of Passing": "2007"},
            {"S.No": "2", "Course": "M.Sc.", "Specialization": "Mathematics", "Branch": "Mathematical Sciences", "College Name/University": "University of Madras, Chennai", "Year of Passing": "2005"},
            {"S.No": "3", "Course": "M.Sc.", "Specialization": "Statistics", "Branch": "Mathematical Sciences", "College Name/University": "S. V. University, Tirupati", "Year of Passing": "1996"},
            {"S.No": "4", "Course": "B.Sc.", "Specialization": "Mathematics, Physics, Statistics", "Branch": "Mathematical Sciences", "College Name/University": "S. V. University, Tirupati", "Year of Passing": "1994"}
          ]
        },
        {
          title: "Research Areas",
          content: "Stochastic Modelling, Regression Analysis and Geo-Statistical Modelling"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=55516049700"},
            {"Identifier": "Vidwan", "Link": "https://mits.irins.org/profile/273369"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.co.in/citations?hl=en&user=qGTl8YQAAAAJ&view_op=list_works&sortby=pubdate"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "9"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Hydromagnetic Peristaltic Propulsion of a Pseudoplastic Fluid Through a Porous Symmetric Channel With Wall Properties. https://doi.org/10.1002/htj.70004", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Numerical simulation of natural convection in a rectangular enclosure filled with porous medium saturated with magnetic nanofluid using Buongiorno's two-component model. https://doi.org/10.1002/cjce.25300", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "", "Author Position": "1", "Details of Research Publication": "Dynamic Linear modeling for Characterizing and Predicting the patterns of summer Monsoon Rainfall in Northwest India. Pure and Applied Geophysics (2024)1420-9136.  https://doi.org/10.1007/s00024-023-03425-5", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "", "Author Position": "1", "Details of Research Publication": "Characterization and prediction of southwest monsoon rainfall patterns in Central India as a linear state space modelling. Nat Hazards (2023). https://doi.org/10.1007/s11069-023-06293-3", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "", "Author Position": "1", "Details of Research Publication": "Distribution and prediction of monsoon rainfall in homogeneous regions of India: A stochastic approach. Pure Appl. Geophys. 179, 2577–2590 (2022). https://doi.org/10.1007/s00024-022-03042-8", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Thermal radiation and diffusion effects in MHD Williamson and Casson fluid flows past a slendering stretching surface. Heat Transfer, 51(4): 3187-3200. (2022).https://doi.org/10.1002/htj.22443", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "", "Author Position": "1", "Details of Research Publication": "Modelling and forecasting for monthly surface air temperature patterns in India, 1951–2016: Structural time series approach. J Earth Syst Sci 130, 21 (2021).  https://doi.org/10.1007/s12040-020-01521-x", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "", "Author Position": "1", "Details of Research Publication": "Structural time-series modelling for seasonal surface air temperature patterns in India 1951–2016. Meteorol Atmos Phys 133, 27–39 (2021). https://doi.org/10.1007/s00703-020-00732-7", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "", "Author Position": "1", "Details of Research Publication": "A UCM Approach for Forecasting the Seasonal Rainfall Patterns in Coastal Andhra Pradesh, India 1901–2017. Pure Appl. Geophys. 177, 5551–5565 (2020).", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "10", "Publication Affiliation": "MITS", "Academic Year": "", "Author Position": "1", "Details of Research Publication": "Modeling and predicting the patterns of seasonal rainfall in Tamil Nadu, India 1951–2017: an UCM approach. Arab J Geosci 13, 226 (2020).  https://doi.org/10.1007/s12517-020-5216-0.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "11", "Publication Affiliation": "MITS", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Structural time series modelling for monthly rainfall patterns in Rayalaseema region, India. The Andhra Agric J 36 (spl): 142-151, 2019. ISSN 0003 - 2950. logo. NAAS Rating : 4.14", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "12", "Publication Affiliation": "MITS", "Academic Year": "", "Author Position": "1", "Details of Research Publication": "Unobserved component modeling for seasonal rainfall patterns in Rayalaseema region, India 1951–2015. Meteorol Atmos Phys 131, 1387–1399 (2019).  https://doi.org/10.1007/s00703-018-0645-y", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "13", "Publication Affiliation": "MITS", "Academic Year": "", "Author Position": "1", "Details of Research Publication": "Unobservable Components Modelling of Monthly Average Maximum and Minimum Temperature Patterns in India 1981–2015. Pure Appl. Geophys. 176, 463–482 (2019).  https://doi.org/10.1007/s00024-018-1970-2.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "14", "Publication Affiliation": "MITS", "Academic Year": "", "Author Position": "1", "Details of Research Publication": "Stochastic modelling of the monthly average maximum and minimum temperature patterns in India 1981–2015. Meteorol Atmos Phys 131, 775–787 (2019). https://doi.org/10.1007/s00703-018-0606-5.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "15", "Publication Affiliation": "MITS", "Academic Year": "", "Author Position": "2", "Details of Research Publication": "Use of ANN models in the prediction of meteorological data. Model. Earth Syst. Environ. 5, 1051–1058 (2019).https://doi.org/10.1007/s40808-019-00590-2", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "16", "Publication Affiliation": "MITS", "Academic Year": "", "Author Position": "1", "Details of Research Publication": "Critical comparison of north-east monsoon rainfall for different regions through analysis of means technique. MAUSAM, 69, 3 (July 2018), 411-418. Impact Factor: 1.3", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "17", "Publication Affiliation": "MITS", "Academic Year": "", "Author Position": "1", "Details of Research Publication": "Modeling and forecasting rainfall patterns of southwest monsoons in North–East India as a SARIMA process. Meteorol Atmos Phys 130, 99–106 (2018).  https://doi.org/10.1007/s00703-017-0504-2", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "18", "Publication Affiliation": "MITS", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Potential distribution in a nano channel of an electrolytic solution by Finite Element Method. International Jr. of Control Theory and Applications, Vol. 9, No. 32, pp. 145-151 (2016). ISSN:0974-5572", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "19", "Publication Affiliation": "MITS", "Academic Year": "", "Author Position": "3", "Details of Research Publication": "Numerical Modeling of Non-Similar Mixed Convection Heat Transfer over a Stretching Surface with Slip Conditions.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": ""},
            {"S.No": "20", "Publication Affiliation": "MITS", "Academic Year": "", "Author Position": "1", "Details of Research Publication": "A Stochastic Approach for the Determination of Share Prices. LAP LAMBERT, Academic Publishing. 978-3-659-45576-6", "Indexing": "", "Publication": "Book", "Journal Quartile": ""}
          ]
        },
        {
          title: "Research Projects & Events",
          content: [
            {"S.No": "1", "Affiliation": "", "Academic Year": "2017-18", "Type": "Funded Project", "Role": "Principal Investigator", "Title": "STOCHASTIC MODELLING OF SEASONAL AND ANNUAL RAINFALL PATTERNS IN RYALASEEMA REGION", "Amount": "2,80,000", "Agency": "SERO/UGC"}
          ]
        }
      ]
    },

    "Dr. M. Sudhakar Reddy": {
        "name": "Dr. M. Sudhakar Reddy",
        "designation": "Assoc. Professor",
        "email": "drsudhakarreddym@mits.ac.in",
        "officeAddress": "BSH Block",
        "image": "https://mits.ac.in/public/uploads/faculty/sudhakar.jpg",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Mathematics",
                            "Group": "Mathematics",
                            "College Name/University": "Sri Venkateswara University",
                            "Year of Passing": "2009"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Mathematics",
                            "Group": "M.Sc.",
                            "College Name/University": "Sri Venkateswara University",
                            "Year of Passing": "2001"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "MPE",
                            "Group": "B.Sc.",
                            "College Name/University": "Sri Venkateswara University",
                            "Year of Passing": "1997"
                        }
                    ]
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "Peristaltic pumping of a Jeffery fluid with variable viscosity in a tube under the effect of a magnetic field.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Mathematics and Computer Science, 2 (4), (20012): 907-925."
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "Effect of variable viscosity on the peristaltic viscosity on the peristaltic flow of a Jeffrey fluid in a uniform tube.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Advances in Applied Science, 3(1), (2012): 900-908."
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "Non-linear peristaltic flow of a fourth grade fluid through a porous medium in an inclined asymmetric channel.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Fluid Engineering, 3(3), (2011): 381-395."
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "Long wavelength approximation to mhd peristaltic flow of a Bingham fluid through a porous medium in an inclined channel.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Dynamics of Fluid, 7(2), (2011): 157-170."
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "Peristaltic motion of a carreau fluid through a porous medium in a channel under the effect of a magnetic field.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Fairest Journal of Applied Mathematics, 35 (2), (2010): 141-158."
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "Peristaltic motion of a Newtonian with variable viscosity through a porous medium in a channel.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Indian Academy of Mathematics, 32(1), (2010): 1-13."
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "Magnetic field in an inclined non linear peristaltic motion of a fourth grade fluid under the effect of a planar channel.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Pure and Applied Physics, 20(4), (2008): 235-247."
                        }
                    ]
                },
                {
                    "title": "Book Publication",
                    "content": "Peristaltic Transport Problems. Lambert Academic Publishing, Germany, (2012) (108 pages), ISSN-13: 978-3-8454-3068-3 ISBN-10: 3845430683"
                }
            ]
    },

    "Dr. T. Chalapathi": {
        "name": "Dr. T. Chalapathi",
        "email": "drchalapathit@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. T. Chalapathi.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Algebraic Graph Theory",
                            "Branch": "Mathematics",
                            "College Name/University": "Sri VenkateswaraUniversity, Tirupati",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "CSE",
                            "Branch": "CSE",
                            "College Name/University": "Acharya Nagarjuna University, Guntur",
                            "Year of Passing": "2009"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Mathematics",
                            "Branch": "M.Sc.",
                            "College Name/University": "Sri Venkateswara University, Tirupati,",
                            "Year of Passing": "1994"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Mathematics",
                            "Branch": "B.Sc.",
                            "College Name/University": "Sri Venkateswara University, Tirupati,",
                            "Year of Passing": "1991"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Algebraic Graph Theory"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57219741582",
                        "Vidwan : https://mits.irins.org/profile/459949",
                        "Google scholar : https://scholar.google.co.in/citations?user=Jqk5Mo0AAAAJ",
                        "h-Index (As per Scopus Data) : 4"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "4",
                            "Details of Research Publication": "The radiative composite (NiCr + TC4/H2O) mixture nanofluid flow over a non-linear spinning stretching sheet with the impact of variable Lorenz force and slip condition, Numerical Heat Transfer Part A Applications, Volume 86, Year 2025, Pages1186-1200, IF-3.5, DOI:10.1080/10407782.2023.2272793",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Enumeration of Neutrosophic Involutions over Finite Commutative Neutrosophic Rings, Neutrosophic Sets and Systems, Vol. 58, 2023, IF-2.429 DOI:10.5281/zenodo.8404443",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Theory on Duplicity of Finite Neutrosophic Rings, Neutrosophic Sets and Systems, Volume 55, Year 2023, Pages 203-215, IF-2.429, DOI:10.5281/zenodo.7832741",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "4",
                            "Details of Research Publication": "Convective Flow of Prandtl Hybrid Nanofluid (Swcnt-Mwcnt/Eg) Over An Exponentially Elongated Sheet With Second-Order Slip, Journal of Porous Media, Volume 25, Year 2022, Pages 43-57, IF-2.4 DOI:10.1615/JPorMedia.2022041669",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "Algebraic Properties of Finite Neutrosophic Fields, Neutrosophic Sets and Systems, Volume 49, Year 2022, Pages 253-261, IF-2.429",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Unitary Invertible Graphs of Finite Rings, Discussiones Mathematicae General Algebra and Applications, Volume 41, Year 2021, Pages 195-208, IF-1.4 DOI:10.7151/dmgaa.1350",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Enumeration of Involutions of Finite Rings, Journal of New Theory, Year 2021, IF-3.5, DOI:10.53570/jnt.971924",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Neutrosophic Boolean Rings, Neutrosophic Sets and Systems, Volume 33, Year 2020, Pages 59-66, IF-2.429",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "A Study on Neutrosophic Zero Rings, Neutrosophic Sets and Systems, Volume 30, Year 2019, Pages 193-201, IF-2.429 DOI:10.5281/zenodo.3569794",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "Invertible graphs of finite groups, Computer Science Journal of Moldova 77 (2), 126-145, IF-0.67",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Difference Divisor Graph of the Finite Group, Int. J. Res. Ind. Eng. Vol 7 (2), 235-2422, IF-3.5",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "Neutrosophic Units of Neutrosophic Rings and Fields, Neutrosophic Sets and Systems, vol. 21, 2018, IF-2.429",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "1",
                            "Details of Research Publication": "Graphs of Permutation Groups International Journal of Computers and Applications 179 (3), 14-19, IF-0.821",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                },
                {
                    "title": "Achievements",
                    "content": [
                        "Qualified CSIR-UGC National Eligibility Test (NET) &ndash; 10 August 2018: Demonstrated advanced research aptitude and subject expertise, earning eligibility for Junior Research Fellowship (JRF) and Lectureship at the national level through the prestigious CSIR-UGC examination.",
                        "Qualified State Level Eligibility Test (SLET) &ndash; 10 December 2016: Secured eligibility for Assistant Professorship by successfully clearing the SLET examination, reflecting strong conceptual understanding and teaching competence at the state level."
                    ]
                }
            ]
    },

    "Dr. A. Subba Rao": {
        "name": "Dr. A. Subba Rao",
        "email": "subbaraoa@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/6d4daba8d4b2624f111fde2850c07c8f.JPG",
        "designation": "Asst. Professor &amp; Assistant Dean",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Fluid Dynamics",
                            "Branch": "Mathematics",
                            "College Name/University": "S.V. University, Tirupati",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Mathematics",
                            "Branch": "M.Sc",
                            "College Name/University": "S.V. University, Tirupati",
                            "Year of Passing": "2005"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Maths, Physics, Computer Science",
                            "Branch": "B.Sc",
                            "College Name/University": "S.V. University, Tirupati",
                            "Year of Passing": "2003"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Fluid Dynamics"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=56943245400",
                        "Vidwan : https://mits.irins.org/profile/272842",
                        "Google scholar : https://scholar.google.com/citations?user=HkX5qx4AAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 14"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026",
                            "Author Position": "5",
                            "Details of Research Publication": "Numerical study of hydromagnetic gyrotactic bioconvection nanofluid coating flow from an exponentially stretching surface with wall suction/injection effects. Nano-Structures & Nano-Objects 46 (2026): https://doi.org/10.1016/j.nanoso.2026.101640",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "3",
                            "Details of Research Publication": "Computational study of Radiative Magneto hydrodynamic Non-Newtonian MgO-TiO2-CH3OH Hybrid Nanofluid Transport from a Stretching Substrate: Nano-Cosmetic Manufacturing Simulation. https://doi.org/10.1177/23977914251349271",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "5",
                            "Details of Research Publication": "Computation of Casson Non-Newtonian Thermo-Magnetic Swcnt/Mwcnt-Based Hybrid Nanofluid Coating Flow from A Cylinder with Multiple Slip and Radiative Flux Effects. https://doi.org/10.1142/S2047684125500186",
                            "Indexing": "ESCI, Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "6",
                            "Details of Research Publication": "Two-phase numerical simulation of thermal and solutal transport exploration of a non-Newtonian nanomaterial flow past a stretching surface with chemical reaction. https://doi.org/10.1515/phys-2024-0036",
                            "Indexing": "Web of Science, Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "Effect of Inclined Lorentzian force on Radiated Nanoflow Williamson Model under Asymmetric Energy Source/Sink: Keller box method. https://doi.org/10.1063/5.0201939",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "4",
                            "Details of Research Publication": "Security of Connected Cars that Promise Zero Accidents, 202310.1109/ITEC-India59098.2023.10471495",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020",
                            "Author Position": "5",
                            "Details of Research Publication": "Numerical simulation and energy flux vector visualization of radiative-convection heat transfer in a porous triangular enclosure.10.1615/JPorMedia.2020033653",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020",
                            "Author Position": "2",
                            "Details of Research Publication": "Impact of haematocrit on the flow of Casson fluid in contact with Jeffery fluid over a narrow pipe. http://nopr.niscpr.res.in/handle/123456789/55508",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020",
                            "Author Position": "4",
                            "Details of Research Publication": "Viscoelastic Micro Polar Convection flows from an inclined plane with non-Linear Temperature: Numerical Study. 10.22055/JACM.2019.28695.1498",
                            "Indexing": "Web of Science",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019",
                            "Author Position": "3",
                            "Details of Research Publication": "Mathematical Modelling to Incorporate the Uncertainty Costs of Electric Power. International Journal of Innovative Technology and Exploring Engineering, Vol. 8, No.11, pp. 2623- 2631 (2019)",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019",
                            "Author Position": "2",
                            "Details of Research Publication": "Identification of Non-linear Systems through Convolutional Neural Network. International Journal of Recent Technology and Engineering, Vol. 8, No.3, pp. 3429-3434.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "Mathematical Modelling of Hydro magnetic Casson non-Newtonian Nanofluid Convection Slip Flow from an Isothermal Sphere. https://doi.org/10.1515/nleng-2018-0016",
                            "Indexing": "ESCI, Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019",
                            "Author Position": "3",
                            "Details of Research Publication": "umerical study of viscoelastic micro polar heat transfers from a vertical cone for thermal polymer coating. https://doi.org/10.1515/nleng-2018-0064",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019",
                            "Author Position": "3",
                            "Details of Research Publication": "Use of ANN models in the prediction of meteorological data. https://doi.org/10.1007/s40808-019-00590-2",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Prediction of drug solubility on parallel computing architecture by support vector machines. https://doi.org/10.1007/s13721-018-0174-0",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018",
                            "Author Position": "3",
                            "Details of Research Publication": "Experimental investigations to reduce unwanted evaporative losses of drinking water from a clay pot, https://iopscience.iop.org/article/10.1088/1757-899X/377/1/012162",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "Free Convection Heat and Mass Transfer of a Nanofluid past a Horizontal Cylinder embedded in a non-Darcy porous medium. https://sl1nk.com/DIj7O",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "Heat Transfer in Viscoplastic Boundary Layer flow from a vertical permeable Cone with momentum and thermal wall slip: Numerical study. 10.1615/HeatTransRes.2017018153",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018",
                            "Author Position": "3",
                            "Details of Research Publication": "Numerical Exploration of Thermal Radiation and Biot Number Effects on the Flow of a non-Newtonian MHD Williamson Fluid over a vertical convective surface; https://doi.org/10.1002/htj.21303",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "Hydro magnetic Non-Newtonian Nanofluid Transport Phenomena Past an Isothermal Vertical Cone with Partial Slip: Aerospace Nanomaterial Enrobing Simulation; https://doi.org/10.1002/htj.21299",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Numerical Study of Hydro Magnetic Non-Newtonian Nanofluid Transport Phenomena from A Horizontal Cylinder with Thermal Slip: Aerospace Nanomaterial Enrobing Simulation; https://doi.org/10.1166/jon.2018.1423",
                            "Indexing": "Scopus, Web of Science",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017",
                            "Author Position": "4",
                            "Details of Research Publication": "Numerical Simulation of Boundary Layer Flow Parameters by using Wrf-Arw Model over a Tropical Region. https://shorturl.at/Y1gQA",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017",
                            "Author Position": "1",
                            "Details of Research Publication": "Numerical Study of non-Newtonian Polymeric Boundary Layer Flow and Heat Transfer from a Permeable Horizontal Isothermal Cylinder; Vol. 9(1), https://doi.org/10.5098/hmt.9.2",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017",
                            "Author Position": "4",
                            "Details of Research Publication": "Mathematical Study of Non-Newtonian Nanofluid Transport Phenomena from an Isothermal Sphere; Vol. 8 -29. https://doi.org/10.5098/hmt.8.29",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Steady-State Transport Phenomena On Induced Magnetic Field Modelling for Non-Newtonian Tangent Hyperbolic Fluid from an Isothermal Sphere with Soret and Dufour Effects&rdquo;. https://doi.org/10.5098/hmt.9.17",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017",
                            "Author Position": "1",
                            "Details of Research Publication": "Computational analysis of Non-Newtonian Boundary Layer Flow of Nanofluid Past a Vertical Plate with Partial Slip; Modelling. https://doi.org/10.18280/mmc_b.860119",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017",
                            "Author Position": "1",
                            "Details of Research Publication": "Hydromagnetic Flow and Heat Transfer in a Williamson non-Newtonian Fluid from a Horizontal Circular Cylinder with Newtonian Heating. https://doi.org/10.1007/s40819-017-0304-x",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2016",
                            "Author Position": "1",
                            "Details of Research Publication": "Non-Similar Computational Solution for Boundary layer flows of non-Newtonian fluid from an Inclined Plate with Thermal Slip. 10.18869/ACADPUB.JAFM.68.225.24664",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "29",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2016",
                            "Author Position": "1",
                            "Details of Research Publication": "Thermal Radiation Effects on Non-Newtonian Fluid in Variable Porosity Regime with Partial Slip. https://l1nq.com/xYDch",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "30",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2016",
                            "Author Position": "2",
                            "Details of Research Publication": "Potential Distribution in a Nano Channel of an Electrolytic Solution by Finite Element Method. https://sl1nk.com/esep2",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "31",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2015",
                            "Author Position": "1",
                            "Details of Research Publication": "Thermal Radiation Effects on Oldroyd-B Nano fluid from a Stretching Sheet in a non- Darcy porous medium&rdquo;. https://l1nq.com/DvH5k",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "32",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2015",
                            "Author Position": "1",
                            "Details of Research Publication": "Heat Transfer in a non-Newtonian Jeffrey&rsquo;s fluid over a non-Isothermal Wedge&rdquo;. https://doi.org/10.1016/j.proeng.2015.11.412",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "33",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2015",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Heat transfer in a Casson Rheological fluid from a semi-infinite vertical plate with partial slip&rdquo;. https://doi.org/10.1002/htj.21115",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "34",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2015",
                            "Author Position": "1",
                            "Details of Research Publication": "Modelling Laminar Transport Phenomena In A Casson Rheological Fluid From An Isothermal Sphere With Partial Slip&rdquo;. Journal: Thermal science, Vol. 19, No.5, pp. 1507-1519; Impact factor-1.222 ; 10.2298/TSCI120828098S",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "35",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2013",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Modelling Laminar Transport Phenomena in a Casson rheological fluid from a Horizontal Circular Cylinder with Partial Slip&rdquo;. Journal: I. Mech E. Journal of Process Engineering, Vol. 227 Issue 4 pp. 309-326 (2013); (SAGE Publications). 2041-3009(online) 0954-4089(print) Impact factor-1.448 DOI: 10.1177/0954408912466350",
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
                            "Academic Year": "2014",
                            "Funded Project /Event": "UGC-SERO MRP-4613/14",
                            "Role": "Principal Investigator",
                            "Title of the Project/Event": "Thermal Radiation Effects on a non-Newtonian Oldroyd-B Nano Fluid from a Stretching Sheet in a non- Darcy Porous Medium",
                            "Amount in Rs. /-": "3,20,000",
                            "Funding Agency": "UGC"
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
                            "Application ID": "202341047864-A Journal No. 35/2023",
                            "Title of the Patent": "Influence of Thermophoresis and Brownian Motion of Nanoparticles on Radiative Chemically-Reacting MHD Hiemenz Flow Over a Nonlinear Stretching Sheet with Heat Generation.",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Dr. P. Ramesh Reddy": {
      name: "Dr. P. Ramesh Reddy",
      designation: "Asst. Professor",
      email: "rameshreddyp@mits.ac.in",
      officeAddress: "BSH Block",
      image: "https://mits.ac.in/public/uploads/faculty/DSC_7332.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Multi Variate Analysis", "Branch": "Statistics", "College Name/University": "S. K. University", "Year of Passing": "2016"},
            {"S.No": "2", "Course": "M.Sc.", "Specialization": "Statistics", "Branch": "M.Sc", "College Name/University": "S. K. University", "Year of Passing": "2001"},
            {"S.No": "3", "Course": "B.A.", "Specialization": "Mathematics, Statistics & Economics", "Branch": "B.A", "College Name/University": "S. V. University, Tirupati", "Year of Passing": "1997"}
          ]
        },
        {
          title: "Research Areas",
          content: "Multivariate Analysis, Statistical Inference, Operations Research , Data Analysis"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57200583965"},
            {"Identifier": "Vidwan", "Link": "https://mits.irins.org/profile/273390"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.co.in/citations?user=16D0BQYAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "5"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "5", "Details of Research Publication": "Analysis of external magnetized dissipative thermo-convective tangent hyperbolic-micropolar flow on a rotating non-isothermal cone with Hall current and joule dissipation - Journal of Applied and Computational Mechanics, Vol.11, issue 4, pg 1039-1059", "Indexing": "ESCI, Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "5", "Details of Research Publication": "Simulating Magneto-Convective Radiative Nanofluid Flow from a Non-Isothermal Rotating Cone with Heat Generation and Chemical Reaction- Journal of Nanofluids, Vol.14, issue 3, pg 447-465", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "3", "Details of Research Publication": "Numerical analysis of radiative magnetoviscoelastic micropolar flow external to a sphere with a convective boundary surface condition- Heat Transfer, Vol.54, issue 5", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "5", "Details of Research Publication": "Micropolar eyring-powell magneto-convection flow from a revolving cone with hall current and ohmic heating effects- Numerical Heat Transfer,Nov 2024, Taylor and Francis", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "1", "Details of Research Publication": "Chemical Reaction and Viscous Dissipative Effects on Buongiorno’s Nanofluid Model Past an Inclined Plane: A Numerical Investigation- International Journal of Applied and Computational Mathematics , Vol.10,issue 2, No 81", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "3", "Details of Research Publication": "Influence of performance feedback and academic performance on parent–family involvement and parent satisfaction in US schools- Journal of Community Psychology, Volume52, Issue1 January 2024 Pages 27-38", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2022", "Author Position": "1", "Details of Research Publication": "Hall and ion‐slip effects on Nano fluid transport from a vertical surface: Buongiorno's model.- ZAMM‐Journal of Applied Mathematics and Mechanics, vol.102, No.3, pages. e202000174", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2021", "Author Position": "1", "Details of Research Publication": "Mixed convection flows of tangent hyperbolic fluid past an isothermal wedge with entropy: A mathematical study- Heat Transfer, vol.50, No.3, pp. 2895-2928", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2020", "Author Position": "2", "Details of Research Publication": "Viscoelastic micro polar convection flows from an inclined plane with nonlinear temperature: A numerical study- Journal of Applied and Computational Mechanics, vol.6, No.2, pp.183-199", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "10", "Publication Affiliation": "MITS", "Academic Year": "2020", "Author Position": "5", "Details of Research Publication": "Computation of Eyring-Powell micropolar convective boundary layer flow from an inverted non-isothermal cone: thermal polymer coating simulation- Computational Thermal Sciences: An International Journal, vol.12, No.4,", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "11", "Publication Affiliation": "MITS", "Academic Year": "2019", "Author Position": "3", "Details of Research Publication": "Magneto hydrodynamic Non-Darcy Flows of Nano fluid from Horizontal Circular Permeable Cylinder: A Buongiorno's Mathematical Model- Journal of Nano Fluids, vol.8, No.2, pp. 276-286", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "12", "Publication Affiliation": "MITS", "Academic Year": "2019", "Author Position": "3", "Details of Research Publication": "Radiative flow of third grade non-Newtonian fluid from a horizontal circular cylinder- Nonlinear Engineering, vol.8, No.1, pp. 673-687", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "13", "Publication Affiliation": "MITS", "Academic Year": "2019", "Author Position": "3", "Details of Research Publication": "Powell–Eyring fluid flow towards an isothermal sphere in a non-Darcy porous medium- Canadian Journal of Physics, vol.97, No.10, pp.1039-1048", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024", "Application ID": "202441021516", "Title of the Patent": "Universal fixed-point finder: a system for analysing fixed point theorems for generalized contractive maps across various metric spaces", "Status": "Published"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2024", "Application ID": "202441021453", "Title of the Patent": "Magneto flow shield: A system for Controlling Jeffrey Fluid flow with magnetohydrodynamic and Porus media interactions", "Status": "Published"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "202541101532", "Title of the Patent": "Hybrid Finite Element–Spectral Method Framework for High-Precision Analysis of Nonlinear Differential Equations in Turbulent Flow Systems", "Status": "Published"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Best Faculty Award for the A.Y. 2002-2003 from Viswam Group of Institutions."
          ]
        }
      ]
    },

    "Dr. Kata Sreelakshmi": {
        "name": "Dr. Kata Sreelakshmi",
        "email": "drsreelakshmik@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Kata Sreelakshmi.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Fluid Mechanics",
                            "Branch": "Mathematics",
                            "College Name/University": "Sri Padmavathi Mahila Visvavidyalayam",
                            "Year of Passing": "2018"
                        },
                        {
                            "Course": "M.Phil.",
                            "Specialization": "Applied Mathematics",
                            "Branch": "Mathematics",
                            "College Name/University": "Sri Padmavathi Mahila Visvavidyalayam",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Applied Mathematics",
                            "Branch": "M.Sc.",
                            "College Name/University": "Sri Padmavathi Mahila Visvavidyalayam",
                            "Year of Passing": "2011"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Maths, Physics & Chemistry",
                            "Branch": "B.Sc.",
                            "College Name/University": "Sri Venkateswara University",
                            "Year of Passing": "2009"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57189487541",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/459965",
                        "Google scholar : https://scholar.google.co.in/citations?user=xM379TgAAAAJ",
                        "h-Index (As per Scopus Data) : 9"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "2",
                            "Details of Research Publication": "Effects of non-Fourier heat flux and viscous dissipation on Sutterby Ag&ndash;Au/blood hybrid nanofluid flow. Results in Surfaces and Interfaces.Volume 23, May 2026, 100736, https://doi.org/10.1016/j.rsurfi.2026.100736",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Nonlinear thermal radiative unsteady stagnation point flow of engine oil-based nanofluid with carbon nanotubes. https://doi.org/10.1007/s40042-025-01482-8",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Darcy-Forchheimer dynamics of Cu-TiO2/H2O hybrid nanofluid flow over a nonlinearly stretching sheet with shape effect. https://doi.org/10.1016/j.nanoso.2025.101528",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "4",
                            "Details of Research Publication": "Multiple thermal impact of the hybrid nanofluid (Al2O3&ndash;Ag)/(C2H6O2&ndash;H2O) on the stagnation point flow with nonlinear radiated effects: https://doi.org/10.1007/s12043-025-02985-6",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Insight into 3-D Darcy-Forchheimer micropolar fluid flow over a nonlinear elongated sheet. https://doi.org/10.1080/10407790.2025.2529521",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "8",
                            "Details of Research Publication": "Thermally developed radiated flow of single and multiple carbon nanotubes (SWCNTs-MWCNTs) with variable thermal conductivity. Journal of Radiation Research and Applied Sciences 18, no. 1 (2025): 101244.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Applications of nonlinear thermal radiation on performance of hybrid nanofluid (Al2O3-Ag)/(C2H6O2-H2O) for stagnation point flow: blade and spherical shaped nanoparticles. Journal of Radiation Research and Applied Sciences, 17(4), 101171. (2024)",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Evaluation of heat transfer for unsteady thin film flow of mono and hybrid nanomaterials with five different shape features. Case Studies in Thermal Engineering 62 (2024): 105168.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Darcy-Forchheimer hybrid nanofluid flow in an asymmetric channel with an exponential heat source, variable thermal conductivity, and activation energy. https://doi.org/10.1080/10407782.2023.2300746",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "2",
                            "Details of Research Publication": "Effect of stratification and non-linear radiant energy on the MHD unsteady flow of Ag&ndash;Al2O3/(C2H6O2&ndash;H2O) on an elongated surface, https://doi.org/10.1080/01430750.2022.2029766",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "Synthesis of entropy generation in Cu&ndash;Al2O3 water\u2010based thin film nanofluid flow, https://doi.org/10.1007/s10973-022-11540-z",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "Transport of thermal energy in the magnetohydrodynamic oblique stagnation point flow in a hybrid nanofluid with nanoparticle shape effect, https://doi.org/10.1002/htj.22502",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "3",
                            "Details of Research Publication": "Coupled effect of multislips and activation energy in a micropolar nanoliquid on a convectively heated elongated surface. https://doi.org/10.1002/htj.22170",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "4",
                            "Details of Research Publication": "Unsteady Casson nanofluid thin film flow over a stretching sheet with viscous dissipation and chemical reaction. https://doi.org/10.1140/epjs/s11734-021-00033-z",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "2",
                            "Details of Research Publication": "Influence of homogeneous and heterogeneous chemical reactions and variable thermal conductivity on the MHD maxwell fluid flow due to a surface of variable thickness. https://doi.org/10.4028/www.scientific.net/DDF.401.148",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "3",
                            "Details of Research Publication": "Dual stratification effects on double-diffusive convective heat and mass transfer of a sheet-driven micropolar fluid flow. Journal of King Saud University &ndash; Science 32(1), 366&ndash;376. (2020) https://doi.org/10.1016/j.jksus.2018.05.027",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "2",
                            "Details of Research Publication": "Effects of Buoyancy, Activation Energy on the Stagnation Point Flow of a Chemically Reactive Magneto Radiative Non-Newtonian Nanofluid. Advances in Computational and Bio-Engineering. CBE 2019. https://doi.org/10.1007/978-3-030-46943-6_47",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of thermophoresis and Brownian motion on the melting heat transfer of a Jeffrey fluid near a stagnation point towards a stretching surface: Buongiornos model. https://doi.org/10.1002/htj.21544",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "2",
                            "Details of Research Publication": "Numerical study of non-linear thermal radiative heat transfer in a non-Darcy chemically reactive Casson fluid flow. https://doi.org/10.1007/s42452-019-1159-z",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "3",
                            "Details of Research Publication": "Heat transfer analysis in a Micropolar fluid with non-linear thermal radiation and second-order velocity slip. Applied Mathematics and Scientific Computing. https://doi.org/10.1007/978-3-030-01123-9_38 , ISBN N0. 978-3-030-01122-2.",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "3",
                            "Details of Research Publication": "Nonlinear radiative unsteady flow of a non-Newtonian fluid past a stretching surface. Applied Mathematics and Scientific Computing. https://doi.org/10.1007/978-3-030-01123-9_37 , ISBN N0. 978-3-030-01122-2.",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "Heat transfer analysis in the non-orthogonal flow of a non-Newtonian nanofluid with non-linear thermal radiation. https://doi.org/10.1016/j.trmi.2018.01.004",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Effects of dual stratification on non-orthogonal non-Newtonian fluid flow and heat transfer. https://doi.org/10.18280/ijht.360128",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "Homotopy analysis of an unsteady flow heat transfer of a Jeffrey nanofluid over a radially stretching convective surface. https://doi.org/10.1166/jon.2018.1432",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Effect of non-linear thermal radiation, thermo diffusion on MHD non-Darcy flow of a maxwell fluid induced by a permeable stretching sheet with wall slip. International Journal of Mechanical Engineering and Technology (IJMET) 9(5), 383&ndash;391. (2018)",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "Dual Stratification on the Darcy-Forchheimer Flow of a Maxwell Nanofluid over a Stretching Surface. https://doi.org/10.4028/www.scientific.net/DDF.387.207",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "2",
                            "Details of Research Publication": "Unsteady boundary layer flow of a Casson fluid past a wedge with wall slip velocity. https://doi.org/10.22075/JHMTR.2017.1647.1110",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "3",
                            "Details of Research Publication": "ual solutions of an unsteady flow, heat and mass transfer of an electrically conducting fluid over a shrinking sheet in the presence of radiation and viscous dissipation. https://doi.org/10.1016/j.ijmecsci.2017.05.040",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "29",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of thermocapillarity and variable thermal conductivity on the heat transfer analysis of a non-Newtonian liquid thin film over a stretching surface in the presence of thermal radiation and heat source/sink. https://doi.org/10.1515/nleng-2017-0015",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "30",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "2",
                            "Details of Research Publication": "Mathematical model of MHD unsteady flow induced by a stretching surface embedded in a rotating Casson fluid with thermal radiation. 3rd International Conference on Computing for Sustainable Global Development (INDIACom), pp. 1590-1595. (2016) ISBN N0. 978-9-3805-4421-2",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "31",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "1",
                            "Details of Research Publication": "Unsteady boundary layer flow induced by a stretching sheet in a rotating fluid with thermal radiation. https://doi.org/10.1016/j.proeng.2015.11.365",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "32",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "2",
                            "Details of Research Publication": "Study of thermophoresis on the MHD flow due to an exponentially stretching sheet in the presence of viscous dissipation. https://doi.org/10.1016/j.proeng.2015.11.379",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "33",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "2",
                            "Details of Research Publication": "MHD heat and mass transfer flow over a stretching wedge with convective boundary condition and thermophoresis. https://doi.org/10.1016/j.proeng.2015.11.444",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "34",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "3",
                            "Details of Research Publication": "Effect of Hall currents on the boundary layer flow induced by an exponentially stretching surface. https://doi.org/10.1016/j.proeng.2015.11.396",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                }
            ]
    },

    "Dr. Bibin Mathew": {
        "name": "Dr. Bibin Mathew",
        "email": "drbibinmathew@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Bibin Mathew.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Generalized Set Theory",
                            "Branch": "Discrete Mathematics",
                            "College Name/University": "NIT, Calicut",
                            "Year of Passing": "2021"
                        },
                        {
                            "Course": "B.Ed.",
                            "Specialization": "Mathematics",
                            "Branch": "Mathematics",
                            "College Name/University": "Mahatma Gandhi University, Kottayam",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Pure Mathematics",
                            "Branch": "M.Sc.",
                            "College Name/University": "Mahatma Gandhi University, Kottayam",
                            "Year of Passing": "2012"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Mathematics",
                            "Branch": "B.Sc.",
                            "College Name/University": "Mahatma Gandhi University, Kottayam",
                            "Year of Passing": "2010"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Rough Set, Soft Set, Fuzzy Set, Topology, Graph Theory, Soft Computing"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57209393591",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/302466",
                        "Google scholar : https://scholar.google.com/citations?user=tKYtra0AAAAJ&hl=en&authuser=2",
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
                            "Author Position": "",
                            "Details of Research Publication": "Integrating Rough Sets and Multidimensional Fuzzy Sets for Approximation Techniques: A Novel Approach, IEEE Access",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "A Study of Dual Hesitant Fuzzy Rough Sets Using Dual Hesitant Fuzzy Covers, AIP Conference Proceedings, 2336 (1), 040001",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Vertex Rough Graphs, Complex & Intelligent Systems,6 (2), Springer",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Multi-Granulation Picture Hesitant Fuzzy Rough Sets, Symmetry (MDPI), 2 (3)",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "",
                            "Details of Research Publication": "A Topological Structure Involving Hesitant Fuzzy Sets, Journal of Intelligent & Fuzzy Systems, 36 (6)",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "",
                            "Details of Research Publication": "TOPSIS Techniques on q-Rung Orthopair Fuzzy Sets and Its Extensions",
                            "Indexing": "Springer",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "",
                            "Details of Research Publication": "Pendant Graphs: Unveiling Regularity, Irregularity, and Support Vertices., IAENG International Journal of Applied Mathematics 55 (1)",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        }
                    ]
                }
            ]
    },

    "Dr. Ramesh . P": {
      name: "Dr. Ramesh . P",
      designation: "Asst. Professor",
      email: "drrameshp@mits.ac.in",
      officeAddress: "BSH Block",
      image: "https://mits.ac.in/public/uploads/faculty/DSC_7448.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Fractional differential Equations & Mathematical Biology", "Branch": "Mathematics", "College Name/University": "Periyar University", "Year of Passing": "2021"},
            {"S.No": "2", "Course": "M.Phil.", "Specialization": "Mathematics", "Branch": "Mathematics", "College Name/University": "Periyar University", "Year of Passing": "2016"},
            {"S.No": "3", "Course": "M.Sc.", "Specialization": "Mathematics", "Branch": "M.Sc.", "College Name/University": "Periyar University", "Year of Passing": "2015"},
            {"S.No": "4", "Course": "B.Sc.", "Specialization": "Mathematics", "Branch": "B.Sc.", "College Name/University": "College of Arts & Science, Periyar University", "Year of Passing": "2013"}
          ]
        },
        {
          title: "Research Areas",
          content: "Nonlinear dynamics, Hopf bifurcation Analysis, Fractional Differential Equations, Numerical methods"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/feedback/author/reviewAuthorProfile.uri?authorIds=57203779038"},
            {"Identifier": "Vidwan", "Link": "https://mits.irins.org/profile/460166"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=A1QBuGwAAAAJ&hl=en&oi=sra"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "2"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "Stability analysis of fractional order predator-prey system with square root functional response, Discontinuity, Nonlinearity and Complexity", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "Stability and bifurcation analysis of a fractional-order prey–predator model with ratio-dependent functional response, AIMS Mathematics", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "2", "Details of Research Publication": "Stability analysis of harvested fractional-order prey-predator model with Holling type IV response International, Journal of Nonlinear Analysis and Applications", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "2", "Details of Research Publication": "Stability analysis of fractional-order predator-prey model with anti-predator behaviour and prey refuge, Journal of Mathematical Modeling", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "1", "Details of Research Publication": "Stability analysis of fractional-order CHIKV infection model with latency, Discontinuity, Nonlinearity, and Complexity", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "1", "Details of Research Publication": "Hopf bifurcation and synchronization of a fractional-order butterfly-fish chaotic system, Journal of Control and Decision", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "1", "Details of Research Publication": "Bifurcation analysis of fractional-order VD model, International Journal of Dynamical Systems and Differential Equations", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "2", "Details of Research Publication": "Asymptotic behaviour of the fractional-order three species prey-predator model, International Journal of Nonlinear Sciences and Numerical Simulation", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "1", "Details of Research Publication": "Stability analysis of the fractional-order prey-predator model with infection, International Journal of Modelling and Simulation", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q2"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Received the best Ph.D. Thesis Award from Periyar University for the academic year 2020–2021.",
            "Qualified the TNSET-2017 and GATE -2024 examination in the Mathematics discipline."
          ]
        }
      ]
    },

    "Dr. Pujari Bharath Kumar": {
      name: "Dr. Pujari Bharath Kumar",
      designation: "Asst. Professor",
      email: "drbharathkumarp@mits.ac.in",
      officeAddress: "BSH Block",
      image: "https://mits.ac.in/public/uploads/faculty/DSC_7461.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Fluid Dynamics – Nanofluid flows", "Branch": "Mathematics", "College Name/University": "Vellore Institute of Technology, Amaravati", "Year of Passing": "2023"},
            {"S.No": "2", "Course": "M.Sc.", "Specialization": "Applied Mathematics", "Branch": "Mathematics", "College Name/University": "Sri Venkateswara University, Tirupati,", "Year of Passing": "2014"},
            {"S.No": "3", "Course": "B.Sc.", "Specialization": "Mathematics, Electronics & Computer Science", "Branch": "MECs", "College Name/University": "Osmania University, Hyderabad", "Year of Passing": "2012"}
          ]
        },
        {
          title: "Research Areas",
          content: "Fluid Dynamics, MHD Flows, Nanofluids, Heat and Mass Transfer."
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57201301745"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/460052"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?hl=en&user=oxRONAkAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "3"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "6", "Details of Research Publication": "An Analysis of Magnetohydrodynamic Free Convective Flow past an Infinite Vertical Porous Plate, Communications on Applied Nonlinear Analysis, Page: 284-295, Volume: 32, Issue: 2s", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "2", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "4", "Details of Research Publication": "Pulsatile Powell-Eyring Nanofluid Flow in a Channel with Inclined Magnetic Field and Chemical Reaction, Engineering Transactions, Page: 519-535, Volume: 71, Issue: 4.", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "MHD Eyring-Powell nanofluid flow in a channel with oscillatory pressure gradient: A note, Bulgarian Chemical Communications, Page: 134-140, Volume: 54, Issue: 2", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "A note on the pulsatile flow of hydromagnetic Eyring–Powell nanofluid through a vertical porous channel, The European Physical Journal Special Topics, Page: 1465-1474, Volume: 230, Issue: 5.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Unsteady Hydromagnetic Flow of Eyring-Powell Nanofluid over an Inclined Permeable Stretching Sheet with Joule Heating and Thermal Radiation, Journal of Applied and Computational Mechanics, Page: 259-270, Volume: 6, Issue: 2", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2018-19", "Author Position": "1", "Details of Research Publication": "Pulsating flow of a non-Newtonian nanofluid in a porous channel with magnetic field, Materials Today: Proceedings, Page: 320-332, Volume: 9", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q2"}
          ]
        }
      ]
    },

    "Dr. T. Thamizharasan": {
      name: "Dr. T. Thamizharasan",
      designation: "Asst. Professor",
      email: "drthamizharasant@mits.ac.in",
      officeAddress: "BSH Block",
      image: "https://mits.ac.in/public/uploads/faculty/DSC_7456.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Fluid Dynamics", "Branch": "Mathematics", "College Name/University": "Vellore Institute of Technology, Vellore", "Year of Passing": "2023"},
            {"S.No": "2", "Course": "M.Phil.", "Specialization": "Mathematics", "Branch": "Mathematics", "College Name/University": "Sacred Heart College, Tirupattur", "Year of Passing": "2018"},
            {"S.No": "3", "Course": "M.Sc.", "Specialization": "Mathematics", "Branch": "M.Sc.", "College Name/University": "Islamiash College, Vaniyambadi", "Year of Passing": "2017"},
            {"S.No": "4", "Course": "B.Sc.", "Specialization": "Mathematics", "Branch": "B.Sc.", "College Name/University": "Sacred Heart College, Tirupattur", "Year of Passing": "2015"}
          ]
        },
        {
          title: "Research Areas",
          content: "Fluid dynamics, Heat Transfer, Nanofluids"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57544083300"},
            {"Identifier": "Vidwan", "Link": "https://mits.irins.org/profile/459916"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.co.in/citations?user=JH430YkAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "4"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "5", "Details of Research Publication": "Magnetohydrodynamic micropolar nanofluid flow with pulsation in a vertical permeable channel with Brownian motion, thermophoresis, and thermal radiation: a Buongiorno model approach. Physica Scripta. Vol. 100 (1), pp. 015205. 2024", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "4", "Details of Research Publication": "Numerical investigation on MHD non-Newtonian pulsating Fe3O4-blood nanofluid flow through vertical channel with nonlinear thermal radiation, entropy generation, and Joule heating. Numerical Heat Transfer, Part A: Applications. pp. 1-20. 2024", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "2", "Details of Research Publication": "A Comparative Study on Pulsating Flow of Au+SWCNTs/Blood and Au+MWCNTs/Blood Based Jeffrey Hybrid Nanofluid in a Vertical Porous Channel with Entropy Generation. Numerical Heat Transfer, Part A: Applications. Vol. 85 (15), pp. 2517-2533. 2023", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Pulsatile Flow of Jeffrey Hybrid Nanofluid in a Vertical Channel with Entropy Generation. Indian Journal of Chemical Technology. Vol. 30 (4), pp. 534-546. 2023", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Pulsating Hydromagnetic Flow and Heat Transfer of Jeffrey Ferro-nanofluid in a Porous Channel: a dynamics of blood. The European Physical Journal Special Topics. Vol. 231, pp. 1205-1214.  2022.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Entropy Generation on Pulsatile Hydromagnetic Flow of Jeffrey Nanofluid in a Porous Channel with Brownian Motion, Thermophoresis, and Heat Source/Sink Using Cattaneo-Christov Heat Flux. Indian Journal of Pure & Applied Physics. Vol. 60, pp. 680-694. 2022", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "Pulsating Hydromagnetic Flow of Au-blood Jeffrey Nanofluid in a Channel with Joule Heating and Viscous Dissipation. Nanoscience and Technology: An International Journal. Vol. 13, No. 2, pp. 1-13. 2022", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "3", "Details of Research Publication": "Comparison of unsteady incompressible micropolar and nanofluid flow with heat transfer applications. Micro and Nanofluid Convection with Magnetic Field Effects for Heat and Mass Transfer Applications Using MATLAB. pp. 153-168. 2022.", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2023-24", "Application ID": "202441015699 A", "Title of the Patent": "Method and System for Optimizing MHD Flow Control in Non-Newtonian Fluids Through Numerical Analysis", "Status": "Published"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Received the Raman Research Award for outstanding research performance in 2022 at Vellore Institute of Technology (VIT), Vellore."
          ]
        }
      ]
    },

    "Dr. Murugan. P": {
      name: "Dr. Murugan. P",
      designation: "Asst. Professor",
      email: "drmuruganp@mits.ac.in",
      officeAddress: "BSH Block",
      image: "https://mits.ac.in/public/uploads/faculty/DSC_7451.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Mathematics", "Branch": "Mathematics", "College Name/University": "Pondicherry University", "Year of Passing": "2023"},
            {"S.No": "2", "Course": "M.Sc.", "Specialization": "Mathematics", "Branch": "M.Sc.", "College Name/University": "Pondicherry University", "Year of Passing": "2017"},
            {"S.No": "3", "Course": "B.Sc.", "Specialization": "Mathematics", "Branch": "B.Sc.", "College Name/University": "Pondicherry University", "Year of Passing": "2015"}
          ]
        },
        {
          title: "Research Areas",
          content: "Number Theory and Partition Functions"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": ""},
            {"Identifier": "Vidwan", "Link": ""},
            {"Identifier": "Google scholar", "Link": ""},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "1"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "New Arithmetic Properties of t-colored Overpartitions, Palestine Journal of Mathematics, 14(2), 31-42 (2025)", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Arithmetic Density of Certain-Regular Overpartitions, Integers, 25 (#3) (2025).", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Ramanujan-type Congruences for (l, m)-Regular Bipartitions Modulo 25 and 7, Vietnam Journal of Mathematics, 1-14(2024).", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Some New General Congruence Properties for p_r(n), Proceedings of the Jangjeon Mathematical Society 27(4), 753-762(2024).", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"}
          ]
        }
      ]
    },

    "Dr. Bhanupriya C. K": {
        "name": "Dr. Bhanupriya C. K",
        "designation": "Asst. Professor",
        "email": "drbhanupriyack@mits.ac.in",
        "officeAddress": "BSH Block",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Bhanupriya C. K.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Graph Theory",
                            "Branch": "Mathematics",
                            "College Name/University": "National Institute of Technology, Calicut",
                            "Year of Passing": "2024"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Mathematics",
                            "Branch": "M.Sc.",
                            "College Name/University": "National Institute of Technology, Calicut",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Mathematics",
                            "Branch": "B.Sc.",
                            "College Name/University": "WMO Arts and Science College Muttil, Wayand, Kerala",
                            "Year of Passing": "2014"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Graph Theory"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57222672194",
                        "Vidwan :",
                        "Google scholar :",
                        "h-Index (As per Scopus Data) :"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Injective coloring of generalized Mycielskian of graphs, Communications in Combinatorics and Optimization, 10(2), 463-482",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "On the injective chromatic number of splitting graph and shadow graph of certain regular and biregular graphs, , TWMS Journal of Applied and Engineering Mathematics, V.15, N.1, 79-88",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Injective edge coloring of product graphs and some complexity results, Filomat, Volume 37, Number 12, 3963-3983",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;Injective chromatic number of lexicographic product of two graphs, Malaya Journal of Matematik (MJM) 1",
                            "Indexing": "",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;Injective chromatic sum of Mycielskian of certain regular and bi-regular graphs, AIP Conference Proceedings. Vol. 2336. No. 1. AIP Publishing LLC",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                }
            ]
    },

    "Dr. Sangeeta Dhawan": {
        "name": "Dr. Sangeeta Dhawan",
        "designation": "Asst. Professor",
        "email": "drsangeetad@mits.ac.in",
        "officeAddress": "BSH Block",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Sangeeta Dhawan.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Mathematics",
                            "Branch": "Mathematics",
                            "College Name/University": "Birla Institute of Technology & Science - Pilani, Hyderabad",
                            "Year of Passing": "2025"
                        },
                        {
                            "Course": "M.Phil.",
                            "Specialization": "Mathematical Sciences",
                            "Branch": "Mathematical Sciences",
                            "College Name/University": "Banasthali Vidyapith, Rajasthan",
                            "Year of Passing": "2021"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Mathematics",
                            "Branch": "M.Sc.",
                            "College Name/University": "University of Delhi",
                            "Year of Passing": "2017"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Mathematics",
                            "Branch": "B.Sc.(H)",
                            "College Name/University": "University of Delhi",
                            "Year of Passing": "2015"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "DISCRETE FRACTIONAL CALCULUS"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57677943100",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/655041",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=qsghcp4AAAAJ",
                        "h-Index (As per Scopus Data) : 3"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Asymptotic behavior of discrete fractional keynesian cross models",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Discrete fractional boundary value problems with nonlinear nonlocal boundary conditions in banach spaces",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Periodic solutions of the discrete fractional relaxation equation",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Terminal value problems for discrete fractional relaxation equations",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Discrete relaxation equations of arbitrary order with periodic boundary conditions",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Nonnegative solutions of the arbitrary ordered discrete relaxation equation",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Nontrivial solutions for arbitrary order discrete relaxation equations with periodic boundary conditions",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Positive solutions of the discrete fractional relaxation equation using lower and upper solutions",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Positive solutions of the discrete fractional oscillation equation",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "On the exchange property for the wavelet transform",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                }
            ]
    },

    "Dr. M. Chandra Sekhar": {
        "name": "Dr. M. Chandra Sekhar",
        "email": "drchandrasekharm@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. M. Chandra Sekhar.JPG",
        "designation": "Assoc. Professor &amp; Head",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "International Research Professor",
                            "Specialization": "III-V Compound and Elemental Semiconductor Devices",
                            "Branch": "Thin films",
                            "College Name/University": "Yeungnam University, Republic of Korea",
                            "Year of Passing": "2018"
                        },
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Thin Film Science and Technology",
                            "Branch": "Thin films",
                            "College Name/University": "Sri Venkateswara University",
                            "Year of Passing": "2012"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Electronics and Condense matter Physics",
                            "Branch": "Physics",
                            "College Name/University": "Sri Venkateswara University",
                            "Year of Passing": "2005"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Physics",
                            "Branch": "Maths, Physics, Computer Science",
                            "College Name/University": "Sri Venkateswara University",
                            "Year of Passing": "2001"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Materials Science"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=7003745077",
                        "Vidwan : https://mits.irins.org/profile/244354",
                        "Google scholar : https://scholar.google.com/citations?user=JjJN0IgAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 20"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "A hydrothermally engineered MoS2&ndash;ZnS&ndash;MWCNT nanocomposite for superior oxygen evolution and visible light photocatalytic dye degradation. J Mater Sci (2026). https://doi.org/10.1007/s10853-026-12221-0",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "Nd3+ -doped oxyfluoride silicate glasses and glass-ceramics with emphasis on sodium yttrium fluoride crystal structure, thermal, and near-infrared luminescence properties, Optical Materials, 171 (2026) DOI: 10.1016/j.optmat.2025.117792",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Growth of epitaxial 2D Zn NDs and transform to 3D ZnO nanostructures for UV photodetector, Inorganic Chemistry Communications, 180 (2025) 114928",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Prussian blue analog derived carbon-rich FeS2@CoS2 nano composites as bifunctional electrocatalyst for water splitting, Materials Science in Semiconductor Processing, 189, (2025) 109287",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Recent breakthroughs in non-conjugated polymers for thermally activated delayed fluorescent OLEDs: emitters, hosts, and hole-transport materials, Materials Chemistry Frontiers, 9 (2025) 367-402",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhanced solar-driven photocatalytic hydrogen production, dye degradation, and supercapacitor functionality using MoS2&ndash;TiO2 nanocomposite, Ceramics International, 50 (2024) 38679&ndash;38687",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Bimetallic Cu&ndash;Zn Prussian blue analogue nanoparticles for enhanced oxygen evolution reaction, Journal of Materials Science, 59 (2024) 17359-17366",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Poly (ethylene glycol)/poly(vinylidene) fluoride/TiO2 nanoparticle composite for sandwiched solid-state dye-sensitized solar cells, Journal of Materials Science: Materials in Electronics, 35 (2024)",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Unveiling the potential of nanoconjugate linkers (sp3-cores) in through-space charge transfer emitters and host materials for thermally activated delayed fluorescence organic light emitting diodes, Journal of Materials Chemistry C, 12 (2024) 6743-6769",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "7",
                            "Details of Research Publication": "Highly Performing MSM Type Ag/n-titanium Dioxide Nanotubes/p-Si Heterojunction Based Ultraviolet-A Photodetectors, Silicon, 16 (2024) 2815-2826",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Highly stable CsPbBr3/ PMA perovskite nanocrystals for improved optical performance, Helion, 10 (2024) e24497",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Mn&ndash;Co Prussian blue analogue cubic frames for efficient aqueous Zn ion batteries, Microporous and Mesoporous Materials, 362 (2024) 112793",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Recent endeavors and perspectives in developing solution-processable host materials for thermally activated delayed fluorescence organic light-emitting diodes, Journal of Materials Chemistry C, 11 (2023) 13603-13624",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhancing Electrochemical Performance with g-C3N4/CeO2 Binary Electrode Material, Molecules, 28 (2023) 2489",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "3",
                            "Details of Research Publication": "Ni-Co PBA-decorated CNTs as battery-type cathode materials for potassium-ion hybrid capacitors, Journal of Energy Storage,62 (2023) 106870",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "5",
                            "Details of Research Publication": "Deposition and characterization of CuI thin film as hole transporting layer for perovskite solar cells, Bulletin of Materials Science, 45 (2022) Article ID 249",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "Binder-free Co&ndash;Ni hexacyaOtherferrate as a battery-type electrode material for hybrid supercapacitors, Ceramics International, 48 (2021) 11849-11857",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "3",
                            "Details of Research Publication": "Electrochemical performance of coin cell-type symmetric supercapacitor electrode consisting of three-dimensional molybdenum disulfide microflowers, Materials Letters, 285 (2021) 129203",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "4",
                            "Details of Research Publication": "Highly porous metal organic framework derived NiO hollow spheres and flowers for oxygen evolution reaction and supercapacitors, Ceramics International, 47 (2020) 3312-3321",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Effects of Annealing Temperature on Phase Transformation of CoTiO3 Nanoparticles and on their Structural, Optical, and Magnetic Properties, Journal of Superconductivity and Othervel Magnetism, 33 (2019) 407-415",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "3",
                            "Details of Research Publication": "Influence of Gd doping on the visible-light photocatalytic activity and magnetic properties of BiFeO3 particles, Materials Research Express, 6 (2019) 115044",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "4",
                            "Details of Research Publication": "Enhanced fluorescence efficiency and photocatalytic activity of ZnS quantum dots through Ga doping, Ceramics International, 45 (2018) 2289-2294",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "3",
                            "Details of Research Publication": "Effect of Eu3+ on the morphology, structural, optical, magnetic, and photocatalytic properties of ZnO nanoparticles, Superlattices and Microstructures, 123 (2018) 154-163",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "Structural, Magnetic, and Catalytic Properties of Mn-Doped Titania Nanoparticles Synthesized by a Sol&ndash;Gel Process, Journal of Cluster Science, 29 (2018) 1255-1267",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "2",
                            "Details of Research Publication": "Photocatalytic, magnetic, and electrochemical properties of La doped BiFeO3 nanoparticles, Ceramics International, 44 (2018) 19512-19521",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "2",
                            "Details of Research Publication": "Solution-based spin-coated tin sulfide thin films for photovoltaic and supercapacitor applications, Materials Research Bulletin, 103 (2018) 13-18",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "3",
                            "Details of Research Publication": "Influence of Ta2O5 Interfacial Oxide Layer Thickness on Electronic Parameters of Al/Ta2O5/p-Si/Al Heterostructure, Silicon, 11 (2017) 159-164",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "1",
                            "Details of Research Publication": "Influence of substrate bias voltage on crystallographic structure, optical and electronic properties of Al/(Ta2O5)0.85 (TiO2)0.15/p-Si MIS Schottky barrier diodes fabricated by dc magnetron sputtering, Materials Science in Semiconductor Processing, 76 (2018) 80-86",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "29",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Author Position": "3",
                            "Details of Research Publication": "Particle size effects on the photocatalytic activity of BiFeO3 particles, Digest Journal of Nanomaterials and Biostructures, 13 (2018) 87-95",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "30",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "1",
                            "Details of Research Publication": "Biogenic Fabrication of Au/Pd Bimetallic Quantum Dots from Mushroom Extract and their Application to Organic Dye Pollutant Reduction, Current NaOtherscience, 14 (2018) 313-318",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "31",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Author Position": "1",
                            "Details of Research Publication": "Synthesis, characterization, and analysis of enhanced photocatalytic activity of Zr-doped TiO2 structured powders under UV light, Materials Research Express, 5 (2017) 015024",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "32",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "1",
                            "Details of Research Publication": "Zr-doped SnO2 thin films synthesized by spray pyrolysis technique for barrier layers in solar cells, Applied Physics A, 123 (2017) 761.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "33",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Author Position": "2",
                            "Details of Research Publication": "Influence of Cu doping on physical properties of sol-gel processed SnS Thin films, Materials science in semiconductor Processing, 71 (2017) 139&ndash;144",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "34",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2016-17",
                            "Author Position": "1",
                            "Details of Research Publication": "Role of interfacial oxide layer thickness and annealing temperature on structural and electronic properties of Al/Ta2O5/TiO2/Si metal&ndash;insulator&ndash;semiconductor structure, Journal of Alloys and Compounds, 718 (2017) 104-111",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "35",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2016-17",
                            "Author Position": "1",
                            "Details of Research Publication": "Thickness Dependent Structural and Electrical Properties of Magnetron Sputtered Nanostructured CrN Thin Films, Materials Research, 20 (3) (2017) 712-717",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "36",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2016-17",
                            "Author Position": "1",
                            "Details of Research Publication": "Influence of Sm Doping on the Structural, Optical, and Magnetic Properties of ZnO Nanopowders, Journal of Superconductivity and Novelmagnetism, 30 (2017) 1937-1941",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "37",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-17",
                            "Author Position": "5",
                            "Details of Research Publication": "Effect of TWEEN 80 on the morphology and antibacterial properties of ZnO nano particles, Journal of materials science: Materials in electronics, 28 (2017) 3272-3277",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "38",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2016-17",
                            "Author Position": "1",
                            "Details of Research Publication": "Synthesis and Characterization of ZnS, Zn0.96 Eu0.04S, and Zn 0.95Eu0.04 Tb0.01S Nano particles, Journal of Superconductivity and Novelmagnetism, 30 (2017) 529-532",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "39",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2016-17",
                            "Author Position": "1",
                            "Details of Research Publication": "Structural, optical and electrical properties of DC reactive magnetron sputtered (Ta2O5)1&minus;x(TiO2)x thin films, Ceramics International, 42(2016)18870&ndash;18878",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "40",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2016-17",
                            "Author Position": "4",
                            "Details of Research Publication": "FABRICATION OF CAST ALUMINIUM-SILICON (Al-Si) AND ALUMINIUM-MAGNESIUM (Al-Mg) ALLOYS AND THEIR PROPERTIES, Acta Metallurgica Slovaca, 22 (2016) 212-221",
                            "Indexing": "None",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "41",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2014-15",
                            "Author Position": "1",
                            "Details of Research Publication": "Influence of post deposition annealing on structural and electrical properties of magnetron sputtered Al/(Ta2O5)0.85(TiO2)0.15/p-Si structure, Journal of optoelectronics and advanced materials, 16 (2014) 1295 &ndash; 1299.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "42",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014-15",
                            "Author Position": "3",
                            "Details of Research Publication": "Growth of TiO2 films by RF magnetron sputtering for MOS gate dielectrics: Influence of substrate temperature, Science of Advanced Materials, 7 (2015) 1 &ndash; 9.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "43",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2013-14",
                            "Author Position": "1",
                            "Details of Research Publication": "Influence of sputter power on structural and electrical properties of TiO2 films for Al/TiO2/Si gate capacitors, Surface and Interface Analysis, 46 (2014) 465-471.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "44",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2013-14",
                            "Author Position": "1",
                            "Details of Research Publication": "Post-deposition annealing influenced structural and electrical properties of Al/TiO2/Si gate capacitors, Superlattices and Microstructures, 62 (2013) 68-80",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "45",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012-13",
                            "Author Position": "2",
                            "Details of Research Publication": "Structural, electrical and dielectric properties of sputtered TiO2 films for Al/TiO2/Si Capacitors, Science of Advanced Materials, 5 (2013) 398-405",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "46",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012-13",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of Oxygen Partial Pressure on the Electrical and Optical Properties of DC Magnetron Sputtered Amorphous TiO2 Films, Journal of Spectroscopy, 2013 (2013) Article ID 462734.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "47",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012-13",
                            "Author Position": "1",
                            "Details of Research Publication": "Substrate temperature influenced physical properties of Si metal oxide semiconductor devices with TiO2 gate dielectric, Surface and Interface Analysis, 44 (2012) 1299-1304",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "48",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011-12",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of substrate bias voltage on the structure, electric and dielectric Properties of TiO2 thin films by DC magnetron sputtering, Applied Surface Science, 258 (2011) 1789-96",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "49",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011-12",
                            "Author Position": "2",
                            "Details of Research Publication": "Effect of Oxygen Partial Pressure on the Structural and Electrical Properties of DC Sputtered (Ta2O5)0.85(TiO2)0.15 Thin Films on Si, American Institute of Physics: Conference Proceedings, 1451 (2012) 100-102.",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "50",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011-12",
                            "Author Position": "1",
                            "Details of Research Publication": "Influence of substrate temperature on the physical and electrical properties of (Ta2O5)0.85(TiO2)0.15 thin films by DC magnetron sputtering, IOP Conference Series: Materials Science and Engineering, 34 (2012) 012009.",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "51",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2011-12",
                            "Author Position": "2",
                            "Details of Research Publication": "Influence of substrate bias voltage on the physical, electrical and dielectric properties of RF magnetron sputtered TiO2 films, IOP Conference Series: Materials Science and Engineering, 30 (2012) 012005.",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "52",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010-11",
                            "Author Position": "3",
                            "Details of Research Publication": "Post-deposition annealing influenced structural and optical properties of RF magnetron sputtered TiO2 films, International Journal of Nanoscience, 10 (2011) 279 - 283.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "53",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2009-10",
                            "Author Position": "2",
                            "Details of Research Publication": "Structural and electrical characterization of magnetron sputtered MoO3 thin films, Journal of Physics: Conference series, 208 (2010) 012101",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "54",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2008-09",
                            "Author Position": "2",
                            "Details of Research Publication": "Characterization of molybdenum oxide films prepared by bias magnetron sputtering, Journal of Optoelectronics and Advanced Materials, 11 (2009) 320 - 325.",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "55",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2008-09",
                            "Author Position": "1",
                            "Details of Research Publication": "Characterization of bias magnetron sputtered tantalum oxide films for capacitors, Indian Journal of Pure & Applied Physics, 47 (2009) 49.",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "56",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2008-09",
                            "Author Position": "2",
                            "Details of Research Publication": "Effect of post-deposition annealing on the physical properties of dc magnetron sputtered molybdenum oxide films, American Institute of Physics: Conference Proceedings, 1004 (2008) 53.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "57",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2007-08",
                            "Author Position": "2",
                            "Details of Research Publication": "Substrate bias voltage influenced structural, electrical and optical properties of dc magnetron sputtered Ta2O5 films, Journal of Materials Science: Materials in Electronics, 20 (4) (2008) 295-300.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Achieved the top rank in M.Sc. Physics at SVU PG Centre, Kavali.",
                        "Ratified as Associate Professor JNTUA, Ananthapuramu."
                    ]
                }
            ]
    },

    "Dr. N. Nanda Kumar Reddy": {
        "name": "Dr. N. Nanda Kumar Reddy",
        "email": "nandakumarreddy@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/nanda.jpg",
        "designation": "Assoc. Professor &amp; Associate Dean",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Studies on Electrical & Structural Properties of GaN based Schottky Barrier Diodes",
                            "Branch": "Material Science",
                            "College Name/University": "Sri Venkateswara University",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "M.Phil.",
                            "Specialization": "Schottky Contacts to InP Semiconductor at Cryogenic Temperatures",
                            "Branch": "Material Science",
                            "College Name/University": "Sri Venkateswara University",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Condensed matter physics and electronics",
                            "Branch": "Physics",
                            "College Name/University": "Sri Venkateswara University",
                            "Year of Passing": "2006"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Maths, Physics, Computer Science",
                            "Branch": "M.P.C.S",
                            "College Name/University": "Sri Venkateswara University",
                            "Year of Passing": "2003"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Thin Film Based Ultraviolet/Broadband Photodetector devices using III-V Compound and Elemental Semiconductors, Gas Sensors and Nanotechnology."
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=36682766600",
                        "Vidwan : https://mits.irins.org/profile/244426",
                        "Google scholar : https://scholar.google.com/citations?user=vEevIYkAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 16"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026-27",
                            "Author Position": "1",
                            "Details of Research Publication": "Bifunctional WO\u2083 NPs/p-Si heterojunction for integrated acetone gas sensing and broadband photodetection",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "Facile single-step electrodeposition of flower-shaped Cu doped ZnO nanostructures for optical, photoluminescence and photocatalytic assessment, Optical Materials, 169 (2026) 117624.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Improved Ultraviolet Photodetector Performance using Sol&ndash;Gel Spin Coated Cost-Effective TiO2 Nano Belts on p-Si, Silicon, 17 (2025) 4395-4407.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Improved ultraviolet photodetection and oxygen gas sensing performance using CeO2 rare-earth oxide thin films deposited on GaN, Physica B: Condensed Matter. 714 (2025) 417514.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "7",
                            "Details of Research Publication": "Optimizing energy transfer in Er3+/Yb3+ Co-doped heavy metal oxide bismuth borate glasses for C-band optical amplifiers, Optical Materials. 163 (2025) 116939.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "6",
                            "Details of Research Publication": "Eco-Innovation in Bi-Metallic Oxides: Pioneering Solutions for Dye Contamination and Bacterial Challenges, Journal of Cluster Science. 36 (2025) 86.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Enhanced microstructure and electrical performance of a cost-effective Ni/Cu/n-GaN Schottky diode with a V2O5 interlayer for optoelectronic applications, Journal of Materials Science: Materials in Electronics. 36 (2025) 430.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "6",
                            "Details of Research Publication": "Enhancing Ni/Cr/n-GaN schottky junction performance using a novel Bi2O3 insulating layer for advanced optoelectronic device applications, Materials Science and Engineering: B. 313 (2025) 117885.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "6",
                            "Details of Research Publication": "Self-powered broadband ultraviolet photodetector based on MoSe2/n-GaN heterojunction, Journal of Alloys and Compounds. 1014 (2025) 178813.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Influence of high-k La2O3 interfacial oxide layer on the performance of GaN based Schottky barrier ultraviolet-B and A photodetection sensors, Optical Materials. 158 (2025) 116499.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "7",
                            "Details of Research Publication": "Effects of Zn doped MoO3 nanocomposite interlayer on electrical and surface chemical state properties of Ni/Cr/n-GaN Schottky junction, Materials Science and Engineering: B. 308 (2024) 117602",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "5- Corresponding",
                            "Details of Research Publication": "Realization of CO2 gas sensors and broadband photodetectors using metal/high-k CeO2/p-Si heterojunction, Ceramics International. 50 (2024) 31845-31858.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "6",
                            "Details of Research Publication": "Optical, vibrational, and photoluminescence properties of holmium-doped boro-bismuth-germanate glasses, Luminescence. 39 (2024) e4822.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Highly Performing MSM Type Ag/n-titanium Dioxide Nanotubes/p-Si Heterojunction Based Ultraviolet-A Photodetectors, Silicon. 16 (2024) 2815&ndash;2826.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Enhanced pursuance of dye-sensitized solar cell for indoor and outdoor stability using reduced graphene oxide @ Mn2O3 nanocomposite, Carbon Letters. 34 (2024) 1021-1030",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhanced self-driven ultraviolet photodetection performance of high-k Ta2O5/GaN heterostructure, Materials Science in Semiconductor Processing. 170 (2024) 107954.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "7",
                            "Details of Research Publication": "Yttria activated lanthanum -barium titanate ceramic electrode for fast charging supercapacitor applications, Journal of Molecular Structure. 1294 (2023) 136352.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Flexible Photocapacitor Device Using Reduced Graphene Oxide@MOS2 Nano Sheets for Future Flexible and Wearable Electronic and IoT Devices, DOI: 10.1109/PowerMEMS59329.2023.10417597",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "10",
                            "Details of Research Publication": "Structure, morphology, photonconversion and energy transfer characteristics of Er3+/Yb3+:BaYF5 nanocrystals synthesized by hydrothermal method for photovoltaics, Ceramics International. 49 (2023) 26879-26889",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Evaluation of Photosensing Parameters of Au/polystyrene/n-Si Heterojunction Based Self-Powered Organic Broadband Photodetectors, Silicon. 15 (2023) 5623-5633.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "UV-to-NIR broadband photodetecting sensors using n-TiO2 nanorods/p-Si heterojunction in lateral and vertical configurations, Applied Physics A. 129 (2023) 412.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Self-powered and improved photoresponsive broadband photodetecting sensors using Au/NiFe2O4/p-Si heterojunction architecture, Materials Science in Semiconductor Processing. 156 (2023) 107266. SCI Article Q1",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "3",
                            "Details of Research Publication": "Synthesis and photocatalytic activity of bismuth carbonate micro-nanoplates, Inorganic Chemistry Communications. 143 (2022) 109820.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "4",
                            "Details of Research Publication": "INVESTIGATIONS ON FUNCTIONAL PROPERTIES OF Al0.8 EuyLa0.2&minus;yTiO3 (y=0.01&minus;0.04) NANOPARTICLES SYNTHESIZED BY HYDROTHERMAL METHOD, Surface Review and Letters. 29 (2022) 2250097.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhanced photoresponse performance in GaN based symmetric type MSM ultraviolet-A and MIS ultraviolet-A to C photodetectors, Sensors and Actuators A: Physical. 339 (2022) 113502.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Highly sensitive and cost-effective metal-semiconductor-metal asymmetric type Schottky metallization based ultraviolet photodetecting sensors fabricated on n-type GaN, Materials Science in Semiconductor Processing. 138 (2022) 106297.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "A Study on Annealing Process Influenced Electrical Properties of Ni/CeO2/p-Si/Al Schottky Barrier Diodes, Macromolecular Symposia. 398 (2021).",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "3",
                            "Details of Research Publication": "Onion-Ring-like Carbon and Nitrogen from ZIF-8 on TiO2/Fe2O3 Nanostructure for Overall Electrochemical Water Splitting, J. Phys. Chem. Lett. 12, 25 (2021) 5909&ndash;5918.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "29",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "4",
                            "Details of Research Publication": "Electrochemical performance of coin cell-type symmetric supercapacitor electrode consisting of three-dimensional molybdenum disulfide microflowers, Materials Letters. 285 (2021) 129203.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "30",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "",
                            "Author Position": "2-corresponding",
                            "Details of Research Publication": "Statistical analysis of current&ndash;voltage characteristics in Au/Ta2O5/n-GaN Schottky barrier heterojunction using different methods, Applied Physics A. 127 (2021) 46.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "31",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "3",
                            "Details of Research Publication": "Role of excitation wavelength and dopant concentration on white light tunability of dysprosium doped titania-fluorophosphate glasses, Optical Materials. 111 (2021) 110593.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "32",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "High performance, self-powered and thermally stable 200&ndash;750 nm spectral responsive gallium nitride (GaN) based broadband photodetectors, Solar Energy Materials and Solar Cells. 225 15 (2021) 111033.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "33",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "5",
                            "Details of Research Publication": "Influence of Ga doping on structural, optical and electrical properties of transparent conducting SnO2 thin films, Optik. 226 (2021) 165859.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "34",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "3-corresponding",
                            "Details of Research Publication": "Evaluation of electrical parameters of Ni/n-type Si Schottky barrier diodes using polyvinyl alcohol (PVA) as an interfacial layer,AIP Conf. Proc. 2269 (2020) 030098.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "35",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Structural, optical and photoresponse characteristics of metal-insulator-semiconductor (MIS) type Au/Ni/CeO2/GaN Schottky barrier ultraviolet photodetector, Materials Science in Semiconductor Processing. 117 (2020) 105190.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "36",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Author Position": "4",
                            "Details of Research Publication": "Near infrared broadband and visible upconversion emissions of erbium ions in oxyfluoride glasses for optical amplifier applications, Optics & Laser Technology. 127 (2020) 106167",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "37",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "5",
                            "Details of Research Publication": "Optical and spectroscopic properties of Ho3+-doped fluorophosphate glasses for visible lighting applications, Materials Research Bulletin. 124 (2020) 110753.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "38",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Analysis of Double Gaussian Distribution at the Interface of Ni/Ta2O5/P-Si Schottky Barrier Diodes Using Temperature Dependent Current-Voltage (I-V) Measurements, Silicon. 13 (2021) 65-71.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "39",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-20",
                            "Author Position": "2",
                            "Details of Research Publication": "Transformation of g-C3N4 into onion like carbon on nickel nanoparticles for ultrafast hydrogenation, Materials Chemistry and Physics. 240 (2020) 122157",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "40",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "An assessment on electrical characterization of ni/n-si schottky rectifiers with and without Ta2O5 interfacial oxide layer, Surface Review and Letters. 26 (2019) 1950073.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "41",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "Evaluation of temperature dependent electrical transport parameters in Fe3O4/SiO2/n-Si metal&ndash;insulator-semiconductor (MIS) type Schottky barrier heterojunction in a wide temperature range, Journal of Materials Science: Materials in Electronics. 30 (2019) 8955-8966.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "42",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-19",
                            "Author Position": "2-corresponding",
                            "Details of Research Publication": "Impact of annealing process on electrical characteristics of Ni Schottky rectifiers fabricated on p-type Si, J. Indian Chem. Soc. 96 (2019) 85-89",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "43",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "1",
                            "Details of Research Publication": "Influence of Ta2O5 Interfacial Oxide Layer Thickness on Electronic Parameters of Al/Ta2O5/p-Si/Al Heterostructure, Silicon. 11 (2019) 159-164.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "44",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "2-corresponding",
                            "Details of Research Publication": "Influence of substrate bias voltage on crystallographic structure, optical and electronic properties of Al/(Ta2O5)0.85(TiO2)0.15/p-Si MIS Schottky barrier diodes fabricated by dc magnetron sputtering, Materials Science in Semiconductor Processing. 76 (2018) 80-86.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "45",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "1",
                            "Details of Research Publication": "Zr-doped SnO2 thin films synthesized by spray pyrolysis technique for barrier layers in solar cells, Applied Physics A. 123 (2017) 761.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "46",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "2",
                            "Details of Research Publication": "Role of interfacial oxide layer thickness and annealing temperature on structural and electronic properties of Al/Ta2O5/TiO2/Si metal&ndash;insulator&ndash;semiconductor structure, Journal of Alloys and Compounds. 718 (2017) 104-111.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "47",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2016-17",
                            "Author Position": "2",
                            "Details of Research Publication": "Thickness Dependent Structural and Electrical Properties of Magnetron Sputtered Nanostructured CrN Thin Films, Mat. Res. 20 (3) (2017) 712-717",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "48",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2015-16",
                            "Author Position": "3",
                            "Details of Research Publication": "FAbrication of cast aluminium-silicon (al-si) and aluminium-magnesium (al-mg) alloys and their properties, Acta Metallurgica Slovaca. 22 (2016) 212-221.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "49",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2015-16",
                            "Author Position": "2",
                            "Details of Research Publication": "Structural, optical and electrical properties of DC reactive magnetron sputtered (Ta2O5)1&minus;x(TiO2)x thin films, Ceramics International. 42 (2016) 18870-18878",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "50",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2013-14",
                            "Author Position": "2",
                            "Details of Research Publication": "Influence of post deposition annealing on structural and electrical properties of magnetron sputtered Al/(Ta2O5)0.85(TiO2)0.15/p-Si structure, JOURNAL OF OPTOELECTRONICS AND ADVANCED MATERIALS. 16 (2014) 11-12.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "51",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2013-14",
                            "Author Position": "2",
                            "Details of Research Publication": "Influence of sputter power on structural and electrical properties of TiO2 films for Al/TiO2/Si gate capacitors, Surface and Interface analysis. 46 (2014) 465-471.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "52",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012-13",
                            "Author Position": "2",
                            "Details of Research Publication": "Current transport mechanisms in Ru/Pd/n-GaN Schottky barrier diodes and deep level defect studies, Superlattices and Microstructures. 52 (2012) 484-499.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "53",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011-12",
                            "Author Position": "1",
                            "Details of Research Publication": "Barrier characteristics of Pt/Ru Schottky contacts on n-type GaN based on I&ndash;V&ndash;T and C&ndash;V&ndash;T measurements. Bulletin of Materials Science. 35 (2012) 53-61.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "54",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011-12",
                            "Author Position": "1",
                            "Details of Research Publication": "Influence of rapid thermal annealing effect on electrical and structural properties of Pd/Ru Schottky contacts to n-type GaN, Materials Chemistry and Physics. 130 (2011) 1000-1006.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "55",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011-12",
                            "Author Position": "1",
                            "Details of Research Publication": "Double Gaussian Distribution of Inhomogeneous Barrier Height in Ru/Pt/n\u2010GaN Schottky Barrier Diodes, AIP Conf. Proc. 1349 (2011) 1067-1068.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Others"
                        },
                        {
                            "S.No": "56",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010-11",
                            "Author Position": "1",
                            "Details of Research Publication": "Electrical characteristics and interfacial reactions of rapidly annealed Pt/Ru Schottky contacts on n-type GaN, Physica Status Solidi A. 208 (2011) 1670-1677",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "57",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010-11",
                            "Author Position": "3",
                            "Details of Research Publication": "Schottky Barrier Parameters of Pd/Ti Contacts on N-Type InP Revealed from I-V-T And C-V-T Measurements, Journal of Modern Physics 02 (03) (2011) 113-123.",
                            "Indexing": "SCOPUS",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "58",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010-11",
                            "Author Position": "1",
                            "Details of Research Publication": "Electrical transport parameters of Pt/Au Schottky contacts on n-type InP in a wide temperature range, OPTOELECTRONICS AND ADVANCED MATERIALS-RAPID COMMUNICATIONS. 4 (2010) 1229- 1238.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "59",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2012-13",
                            "Author Position": "1",
                            "Details of Research Publication": "A Study on Platinum/Gold Schottky Contacts to n-type Indium Phosphide&rdquo; German publisher LAP (Lambert Academic Publishing) ISBN-13: 978-3-659-45174-4, ISBN-10: 3659451746, EAN: 9783659451744, August, 2013.",
                            "Indexing": "",
                            "Article/ Conference/ Book/ Book Chapter": "Book",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "60",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2015-16",
                            "Author Position": "1",
                            "Details of Research Publication": "Studies of Pt/Ru and Pd/Ru Schottky contacts to n-type Gallium Nitride&rdquo; Scholar&rsquo;s Press, Germany, ISBN: 978-3-659-84344-0. October, 2016.",
                            "Indexing": "",
                            "Article/ Conference/ Book/ Book Chapter": "Book",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "61",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-18",
                            "Author Position": "2",
                            "Details of Research Publication": "Studies on Cast Aluminium-Silicon and Aluminium-Magnesium Alloys&rdquo; VSRD Academic Publishing, ISBN-13: 978-93-87610-08-8 July, 2018.",
                            "Indexing": "",
                            "Article/ Conference/ Book/ Book Chapter": "Book",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "62",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Types of Photodetectors and their applications&rdquo; Nova Science Publishers, USA. With DOI: https://doi.org/10.52305/QTIQ1152 .",
                            "Indexing": "SCOPUS",
                            "Article/ Conference/ Book/ Book Chapter": "BOOK CHAPTER",
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
                            "Academic Year": "2018-19",
                            "Funded Project /Event": "Funded Project",
                            "Role": "Principal Investigator",
                            "Title of the Project/Event": "Development of High Photoresponsivity Gallium Nitride-Based Metal/Insulator/Semiconductor (MIS) Schottky Barrier Ultraviolet Photodetectors",
                            "Amount in Rs. /-": "43,89,784",
                            "Funding Agency": "DST-SERB, ECRA-India."
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
                            "Application ID": "Indian Patent Application No. IN202641032789, March 2026",
                            "Title of the Patent": "Rare earths doped nanocrystalline thin films for solar energy harvesting for improving the efficiency of solar cells",
                            "Status": "Published"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "United states patent No: US 12268033 B1, April-2025",
                            "Title of the Patent": "Self-powered ultraviolet photodetection performance using Au/Ta2O5/GAN: metal-insulator-semiconductor (MIS) heterostructure",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "Indian Patent Application No. 202541023139, March-2025",
                            "Title of the Patent": "A heterojunction for optoelectronic system and a method of fabrication thereof",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "Early Career Research Awardee 2018, Department of Science and Technology-SERB, Govt. of India."
                }
            ]
    },

    "Dr. Sanjaya Brahma": {
        "name": "Dr. Sanjaya Brahma",
        "email": "drsanjayabrahma@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Sanjaya-Brahma.jpg",
        "designation": "Research Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Post Doctoral Fellow",
                            "Specialization": "Experimental condensed matter Physics",
                            "Branch": "Department of Materials Science and Engineering",
                            "College Name/University": "National Cheng Kung University, Tainan, Taiwan",
                            "Year of Passing": "1st Aug 2023 &ndash; 31st July 2025"
                        },
                        {
                            "Course": "Post Doctoral Fellow",
                            "Specialization": "Experimental condensed matter Physics",
                            "Branch": "Hierarchical Green-Energy Materials Research Center",
                            "College Name/University": "National Cheng Kung University, Tainan, Taiwan,",
                            "Year of Passing": "1st June 2018 &ndash; 31st July 2023"
                        },
                        {
                            "Course": "Post Doctoral Fellow",
                            "Specialization": "Experimental condensed matter Physics",
                            "Branch": "Department of Materials Science and Engineering",
                            "College Name/University": "National Cheng Kung University, Tainan, Taiwan",
                            "Year of Passing": "1st Feb 2016 &ndash; 31st May 2018"
                        },
                        {
                            "Course": "Post Doctoral Fellow",
                            "Specialization": "Experimental condensed matter Physics",
                            "Branch": "Department of Physics",
                            "College Name/University": "National Cheng Kung University, Tainan, Taiwan",
                            "Year of Passing": "1st Feb 2014 &ndash; 31st Jan 2016"
                        },
                        {
                            "Course": "Post Doctoral Fellow",
                            "Specialization": "Experimental condensed matter Physics",
                            "Branch": "Department of Materials Science and Engineering",
                            "College Name/University": "National Cheng Kung University, Tainan, Taiwan",
                            "Year of Passing": "1st Augt 2013 &ndash; 31st Jan 2014"
                        },
                        {
                            "Course": "Post Doctoral Fellow",
                            "Specialization": "Experimental condensed matter Physics",
                            "Branch": "Micro/Nano Science and Technology",
                            "College Name/University": "National Cheng Kung University, Tainan, Taiwan",
                            "Year of Passing": "16 Nov 2011 - 31 July 2013"
                        },
                        {
                            "Course": "CSIR Research Associate",
                            "Specialization": "Experimental condensed matter Physics",
                            "Branch": "Materials Research Centre",
                            "College Name/University": "Indian Institute of Science (IISC) Bangalore, India.",
                            "Year of Passing": "24th June 2009 &ndash; 15 Nov 2011"
                        },
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Experimental condensed matter Physics",
                            "Branch": "Materials Research Centre",
                            "College Name/University": "Indian Institute of Science (IISC), Bangalore, India",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Solid State Technology",
                            "Branch": "Physics",
                            "College Name/University": "Indian Institute of Technology-Kharagpur, India",
                            "Year of Passing": "2004"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Electronics",
                            "Branch": "Physics",
                            "College Name/University": "Utkal University, Odisha, India",
                            "Year of Passing": "2000"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Physics",
                            "Branch": "Physics",
                            "College Name/University": "Utkal University, Odisha, India",
                            "Year of Passing": "1998"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": [
                        "Semiconductor Materials and devices (optical properties, electron-phonon coupling piezoelectric properties, semiconductor piezotronics pressure sensor, gas sensor)",
                        "Development of anode materials in Li ion batteries",
                        "Ceramics thin films, powder materials processing",
                        "Metal organic compounds synthesis and characterisation",
                        "Water splitting"
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=55500382800",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/654951",
                        "Google scholar : https://scholar.google.com/citations?user=2Ti7XngAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 21"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Post-Annealing Induced Interdiffusion Layer Enhancing the Stability and Electrochemical Properties of LiCoO2 Thin Film Battery, ChemNanoMat (2025) 11, e202500057 (1-8).",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "One pot, bottom up synthesis of SiO2 quantum dots and reduced graphene oxide (rGO) nanocomposite as anode material in lithium ion battery, C-J. Carbon Res. 11 (2025) 1, 23 (1-8)",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Crystal structure evolution of piezoelectric Fe-doped ZnO film by magnetron co-sputtering technique, Condens. Matter 2025, 10, 6 (1-11).",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Electrochemical etching of the CuIn0.7Ga0.3Se2 absorber films prepared by non\u2010vacuum process.Journal of Alloys and Compounds 1010 (2025) 177995 (1-15).",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "MOF-derived molybdenum carbide-copper as an electrocatalyst for the hydrogen evolution reaction, Journal of Alloys and Compounds Communications, 3 (2024) 100027 (1-11).",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Defect induced crystal lattice disorder and its effect on the electron-phonon coupling in Fe doped ZnO thin films. J. Phys. Chem. Solids 190 (2024) 111999",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Boosting High Voltage (4.5V) Stability and Fast-Charging Capability of LiCoO&not;2 Thin-Film Battery through MgO Co-Sputtering, Materials Today Energy 40 (2024) 101486",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-2024",
                            "Author Position": "1",
                            "Details of Research Publication": "SnOx (x=0,1,2) and Mo doped SnO 2 nanocomposite as possible anode materials in lithium ion battery, Energy Storage and Conversion Materials: Properties, Methods, and Applications, (2023), CRC Press Publisher, Taylor&Francis Group",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Not available"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Cd doped ZnOnanorods for efficient room temperature NH3 sensing, Materials Chemistry and Physics, 294 (2023) 127053 (1-10).",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Methylboronic acid MIDA ester as an effective additive in electrolyte to improve cathode electrolyte interlayer performance of LiNiCoAlO2 electrode, Scientific Reports, 13, (2023) 10025",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Effect of Mo-addition over a large enhancement of the hydrogen evolution reaction in WC/rGO nanocomposite, Materials Letters 341 (2023) 134238.",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Enhanced capacity and cyclability of Si@NiSi2 nanocomposite anodes fabricated by facile electroless Ni plating, J. Phys. Chem. C 127, (2023) 169&minus;176",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Combined effects of citric acid and ascorbic acid used as low temperature (~150&deg;C) surface modifiers to enhance the cyclability of an Si anode in an Li ion battery, J. Electrochem. Energy Convers. Storage, 20 (2023) 011001(1-9).",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Mn based oxide nanocomposite with reduced graphene oxide as anode material in Li-ion battery, Lithium-related batteries: Recent advances and remaining challenges, (2022) 167-191, CRC Press Publisher, Taylor&Francis Group",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Not available"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-2023",
                            "Author Position": "6",
                            "Details of Research Publication": "Zn dots coherently grown on Si(111) as the seed and buffer layer for ZnO thin film: Mechanism, in-situ analysis and simulation, Journal of Vacuum Science & Technology A 40, (2022) 063403",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Enhanced piezoelectric coefficient and the piezoelectric nanogenerator output voltage/current in Y doped ZnO thin films, Materials Science in Semiconductor Processing 146 (2022) 106703",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Molybdenum carbide (Mo2C) and reduced graphene oxide (rGO) nano-composites as an efficient electrocatalyst for water splitting, Materials letters 316 (2022)",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Mo doped SnO2-reduced graphene oxide (RGO) nanocomposite as high capacity and superior rate capability anode materials in lithium ion batteries, J. Electrochem. Energy Convers. Storage, 19 (2022) 011006 (1-7)",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-2022",
                            "Author Position": "1",
                            "Details of Research Publication": "Graphene as an anode material in lithium ion battery, Lithium-ion Batteries and Solar Cells: Physical, Chemical, and Materials Properties, (2021) 151-168, CRC press,Taylor and Francis group",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Not available"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-2022",
                            "Author Position": "1",
                            "Details of Research Publication": "Cu-doped p-type ZnO nanostructures as unique acetone sensor at room temperature, Applied Surface Science, 564 (2021) 150351",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-2022",
                            "Author Position": "1",
                            "Details of Research Publication": "Competitive effect of dopant concentration and the size of the nanorods over the electron phonon coupling in Cd doped ZnOnanorod arrays, J. Phys. Chem. Solids, 148 (2021) 109728 (1-10).",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-2022",
                            "Author Position": "2",
                            "Details of Research Publication": "Synergistic effect of Ga doping and Mg alloying over the enhancement of strain sensitivity of Ga doped MgZnO pressure sensor, Nanoscale Advances, 3 (2021) 3909&ndash;3917",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-2022",
                            "Author Position": "1",
                            "Details of Research Publication": "Room temperature synthesis of SiOx/rGO composite as anode material in lithium ion battery, Materials Letters, 299 (2021) 130043",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-2022",
                            "Author Position": "2",
                            "Details of Research Publication": "The Petroleum Waste Hydrocarbon Resin as Carbon Source Modified on Si Composite as superior Anode Material in Lithium Ion Batteries, Mater. Chem. Phys. 259 (2021) 124011(1-11)",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-2022",
                            "Author Position": "3",
                            "Details of Research Publication": "Review on ZnO-based piezotronics and piezoelectric nanogenerators: Aspects of piezopotential and screening effect&quot;, J. Phys. Mater. 4 (2021) 044011",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-2021",
                            "Author Position": "2",
                            "Details of Research Publication": "Fabrication of flexible UV-B photodetectors made of MgxZn1-xO films on PI substrate for enhanced sensitivity by piezophototronic effect, Applied Materials Today 20 (2020) 100705 (1-10)",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Microwave irradiation assisted rapid growth of ZnOnanorods over electrically conducting substrate, Materials Letters, 264 (2020) 127370 (1-4)",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-2021",
                            "Author Position": "2",
                            "Details of Research Publication": "Enhanced capacity and excellent rate capability Mn3O4microsheet-reduced graphene oxide (rGO) nanocomposite as anode material in lithium-ion batteries, Appl. Surf. Sci. 505 (2020) 144629",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "29",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-2021",
                            "Author Position": "2",
                            "Details of Research Publication": "Reduced graphene oxide-SnOx (x=0,1,2) nanocomposite as high performance anode material for lithium-ion batteries, J. Alloys Compd. 818 (2020) 152889 (1-11)",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "30",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-2021",
                            "Author Position": "2",
                            "Details of Research Publication": "Synthesis of Tungsten Bronze by a solution-based chemical route and the NIR Shielding Properties of Tungsten Bronze thin films, Applied Physics A, 126 (2) (2020) 98",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "31",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-2021",
                            "Author Position": "3",
                            "Details of Research Publication": "MoS2-Carbon Interoverlapped Structures as Effective Electrocatalyts for the Hydrogen Evolution Reaction. Nanomaterials, 10(2020)1389 (1-13).",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "32",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-2021",
                            "Author Position": "2",
                            "Details of Research Publication": "Multi-layer graphene/ SnO2 nanocomposites as negative electrode materials for lithium-ion batteries,J. Electrochem. Energy Convers. Storage,17 (2020) 031003 (1-7)",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "33",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Graphene-Metal oxide composite as anode materials in Li ion batteries, Advanced Materials Series, CengizOzkan (ed.) Handbook of Graphene, Volume 4, Graphene Composite Materials: (2019) 323&ndash;352. John Wiley & Sons &Scrivener Publishing",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Not available"
                        },
                        {
                            "S.No": "34",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Metal oxide-reduced graphene oxide (MO-RGO) nanocomposite as high performance anode materials in Lithium ion batteries, Green Energy Materials Handbook, Ming-Fa Lin, Wen-Dung Hsu (ed.)(2019) 145-163, CRC press, Taylor and Francis group",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "35",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-2020",
                            "Author Position": "2",
                            "Details of Research Publication": "2nd Microstructure and piezoelectric properties of hexagonal MgxZn1-xO/ZnO films at lower Mg compositions, Thin Solid Films 690 (2019) 137459(1-8)",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "36",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-2020",
                            "Author Position": "2",
                            "Details of Research Publication": "Strong correlation between optical properties and mechanism in deficiency of normalized self-assembly ZnOnanorods, Sci. Reports, 9, 905 (2019).ISSN 2045-2322",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "37",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-2020",
                            "Author Position": "2",
                            "Details of Research Publication": "Recent progress in microstructure development of inorganic one-dimensional nanostructures for enhancing performance of piezotronics and piezoelectric nanogenerators, Nano Energy, 55 (2019) 1-21",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "38",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-2020",
                            "Author Position": "2",
                            "Details of Research Publication": "Synthesis of self-assembled Hollow-Sphere ZnO/rGO Nanocomposite as Anode Materials for Lithium-Ion Batteries, Int. J. Electrochem. Sci., 14 (2019) 3727 &ndash; 3739",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "39",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-2019",
                            "Author Position": "2",
                            "Details of Research Publication": "Atmospheric Air Plasma Treated SnS Films: An Efficient Electrocatalyst for HER, Catalysts 8 (10) (2018) 462.",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "40",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-2019",
                            "Author Position": "3",
                            "Details of Research Publication": "Enhanced sensitivity and selectivity of H2S sensing through controlled Ni doping into ZnOnanorods by using single metal organic precursors, Sensors & Actuators: B.,273, (2018) 1278-1290",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "41",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-2019",
                            "Author Position": "5",
                            "Details of Research Publication": "Migration Energy Barriers for the Surface and Bulk of Self-Assembly ZnO Nanorods, Nanomaterials 8 (10) (2018) 811",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "42",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-2019",
                            "Author Position": "1",
                            "Details of Research Publication": "The optical response of ZnOnanorods induced by oxygen chemisorption and desorption, Sensors & Actuators: B., 259 (2018) 900-907",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "43",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-2018",
                            "Author Position": "3",
                            "Details of Research Publication": "Epitaxial Zn quantum dots coherently grown on Si(111): growth mechanism, nonlinear optical and chemical state analyses, J. Phys. D: Applied Physics, 50 (2017) 175301",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "44",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-2018",
                            "Author Position": "1",
                            "Details of Research Publication": "Microwave irradiation assisted, one pot synthesis of simple and complex metal oxide nanoparticles: (A general approach), J. Phys. D: Appl. Phys., 50 (2017) 40LT03 (1-5).",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "45",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Enhancement of the Piezoelectric coefficient in hexagonal MgxZn1-xO films at lower Mg compositions, J. Alloys Compd. 728 (2017) 1248-1253",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "46",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Cu doped ZnOnanorods with controllable Cu content by using single metal organic precursors and their photocatalytic and luminescence properties, J. Alloys Comp.691 (2017) 936-945",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "47",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-2018",
                            "Author Position": "3",
                            "Details of Research Publication": "SnSx (x=1,2) nanocrystals as effective materials for photoelectrochemical water splitting, Catalysts, 7 (2017) 252 (1-12)",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "48",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Facile, low temperature synthesis of SnO2-RGO nanocomposite as negative electrode materials for lithium-ion batteries, Appl. Surf. Sci.413 (2017) 160-168.",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "49",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-2018",
                            "Author Position": "3",
                            "Details of Research Publication": "Effects of annealing on thermochromic properties of W-doped vanadium dioxide thin films deposited by electron beam evaporation, Thin Solid Films, 644 (2017) 52-56",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "50",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-2018",
                            "Author Position": "3",
                            "Details of Research Publication": "MoS2-MoO2 composite electrocatalysts by hot-injection method for hydrogen evolution reaction, Ceram. Int. 43(1) (2017) s621-s627",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "51",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Synthesis, characterization and magnetic properties of hybrid complexes diaquabis (acetylacetonato &kappa;-O, O&rsquo;) [nickel (&Pi;)/zinc (&Pi;)] as solid metalorganic precursor, Applied Organometallic Chemistry 31(11) (2017) e3746 (1-12)",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "52",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-2018",
                            "Author Position": "3",
                            "Details of Research Publication": "Synthesis and characteristics of layered SnS2 nanostructures via hot injection method, J. Cryst. Growth.468 (2017) 162-168",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "53",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Synthesis of MnOx/reduced graphene oxide nanocomposite as an anode for lithium-ion battery, Ceram. Int. 43 (2017) 50-54",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "54",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-2017",
                            "Author Position": "1",
                            "Details of Research Publication": "The evolution of restructure and defects in the implanted Si surface: inspecting by reflective second harmonic generation, Appl. Surf. Sci.,388 Part A (2016) 517-523",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "55",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-2017",
                            "Author Position": "1",
                            "Details of Research Publication": "Yellow-red luminescence in ZnO nanoparticles synthesized from zinc acetylacetonatephenanthroline, Mater. Lett. 164 (2016) 235-238",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "56",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-2017",
                            "Author Position": "2",
                            "Details of Research Publication": "Ultraviolet Photodetectors Based on MgZnO Thin Film Grown by RF Magnetron Sputtering, Thin Solid Films 620 (2016) 170-174",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "57",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-2017",
                            "Author Position": "3",
                            "Details of Research Publication": "The effect of high concentration of phosphorus in aluminum-induced crystallization of amorphous silicon films, Thin Solid Films 618 Part A (2016) 50-54",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "58",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-2017",
                            "Author Position": "3",
                            "Details of Research Publication": "Stabilized copper plating method by programmed electroplated current: Accumulation of densely packed Cu grains in the interconnect, Appl. Surf. Sci. 388 Part A (2016) 228-233",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "59",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-2016",
                            "Author Position": "6",
                            "Details of Research Publication": "Crystal orientation dynamics of collective Zn dots before preferential nucleation, Sci. Reports, 5 (2015) 12533 (1-10).",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "60",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-2016",
                            "Author Position": "3",
                            "Details of Research Publication": "Synthesis and characterization of Bis (acetylacetonato &kappa;-O, O) [zinc (II)/copper (II)] hybrid organic-inorganic complexes as solid metal organic precursor, Dalton Transactions, 44 (2015) 7982",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "61",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-2016",
                            "Author Position": "1",
                            "Details of Research Publication": "Self-assembled ZnO nanoparticles on ZnOmicrosheet: ultrafast synthesis and tunable photoluminescence properties, J. Phys. D: Applied Physics, 48 (2015) 225305",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "62",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-2016",
                            "Author Position": "3",
                            "Details of Research Publication": "Enhancement in the structure quality of ZnOnanorods by diluted Co dopants: analyses via optical second harmonic generation, J. Appl. Phys. 117 (2015) 084315(1-8)",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "63",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-2016",
                            "Author Position": "1",
                            "Details of Research Publication": "Facile, low temperature growth of vertically aligned ZnOnanorodsover a disordered substrate, Mater. Lett. 140 (2015) 177-179",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "64",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-2016",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of substrates and surfactants over the evolution of crystallographic texture of nanostructured ZnO thin films deposited through microwave irradiation, Thin Solid Films, 593 (2015) 81-90",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "65",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-2016",
                            "Author Position": "1",
                            "Details of Research Publication": "Flower-like ZnOnanorod arrays grown on HF-etched Si (111): constraining relation between ZnO seed layer and Si (111), Mater. Res. Exp. 2 (2015) 115003 (1-10)",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "66",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-2016",
                            "Author Position": "1",
                            "Details of Research Publication": "Zinc acetylacetonatehydrate adducted with nitrogen donor ligands: synthesis, spectroscopic characterization, and thermal analysis, J. Mol. Struct. 1101(2015) 41-49",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "67",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014-2015",
                            "Author Position": "1",
                            "Details of Research Publication": "Preparation of zinc oxide coatings by using newly designed metal-organic complexes of Zn: effect of molecular structure of the precursor and surfactant over the crystallization, growth and luminescence, J. Alloys Compd. 584 (2014) 331-338",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "68",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014-2015",
                            "Author Position": "2",
                            "Details of Research Publication": "Platinum containing amorphous hydrogenated carbon (a-C:H/Pt)thin films as selective solar absorbers, Appl. Surf. Sci. 316 (2014) 398",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "69",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014-2015",
                            "Author Position": "6",
                            "Details of Research Publication": "Symmetrical dipole contribution from planar defects on m-plane ZnO epitaxial films, Current Nanoscience, 10 (6) (2014) 883",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "70",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013-2014",
                            "Author Position": "1",
                            "Details of Research Publication": "Low temperature and rapid deposition of ZnOnanorods on Si(100)substrate with tunable optical emissions, Mater. Chem. Phys, 140 (2013) 634-642",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "71",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013-2014",
                            "Author Position": "1",
                            "Details of Research Publication": "Contrast in luminescence characteristics (intense UV to bright visible light) of ZnO nanostructures with the variation in microstructure, Phys. Status Solidi A, 210 (2013) 2600-2610",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "72",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013-2014",
                            "Author Position": "2",
                            "Details of Research Publication": "Effect of Indium concentration on luminescence and electrical property of Indium doped ZnO nanowires, Thin solid films. 549 (2013) 165",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "73",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013-2014",
                            "Author Position": "1",
                            "Details of Research Publication": "New metal-organic precursors for MOCVD applications: synthesis, characterization, crystal structure and thermal properties of mixed-ligand Mg(II) complexes, J.Mol. Struct. 1035 (2013) 416-420",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "74",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013-2014",
                            "Author Position": "4",
                            "Details of Research Publication": "Characterization of electrochromic tungsten oxide films from electrochemical anodized RF sputtered tungsten films, Ceramic International, 39 (2013) 4293",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "75",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013-2014",
                            "Author Position": "1",
                            "Details of Research Publication": "Surfactant free, non-aqueous method, for the deposition of ZnO nanoparticle thin films on Si(100) substrate with tunable ultraviolet (UV) emission, Current Nanoscience, 9(3) (2013) 346-350",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "76",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012-2013",
                            "Author Position": "1",
                            "Details of Research Publication": "An Efficient and Environment Friendly Universal White Light Emitting ZnO Nanophosphors, Current Nanoscience. 8(6) (2012) 914-918. Bentham Science Publishers, I.F &ndash; 1.35",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "77",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012-2013",
                            "Author Position": "1",
                            "Details of Research Publication": "Shape transformation of ZnOnanorods /nanotubes at low temperature, Current Nanoscience, 8 (2012) 156-160",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "78",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012-2013",
                            "Author Position": "1",
                            "Details of Research Publication": "Structural, thermal and electrical characterization of NdLiMo2O8 electroceramics, using impedance spectroscopy, J. Phys. Chem. Solids, 73 (2012) 357-362",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "79",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011-2012",
                            "Author Position": "1",
                            "Details of Research Publication": "bis(acetylacetonato - k2, O, O) (pyridine-kN) Zinc(II), ActaCrystallogr., Sect. E: Struct. Rep. Online, 67 (2011) m819",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "80",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010-2011",
                            "Author Position": "1",
                            "Details of Research Publication": "Microwave irradiation-assisted method for the deposition of adherent oxide films on semiconducting and dielectric substrates, Thin Solid Films, 518 (2010) 5905-5911",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "81",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010-2011",
                            "Author Position": "1",
                            "Details of Research Publication": "Rapid growth of nanotubes and nanorods of w&uuml;rtziteZnO through microwave-irradiation of a metal-organic complex of zinc and a surfactant, Bull. Mater. Sci. 33(2) (2010) 89-95",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "82",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2008-2009",
                            "Author Position": "1",
                            "Details of Research Publication": "Adducts of bis(acetylacetonato)-zinc(II) with 1,10-phenanthroline and 2,2 &ndash; bipyridine, ActaCryst. C, 64 (2008) m140&ndash;m143",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Not available"
                        },
                        {
                            "S.No": "83",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2005-2006",
                            "Author Position": "1",
                            "Details of Research Publication": "AC impedance analysis of LaLiMo2O8 electroceramics, Physica B: Condensed Matter, 355(1-4) (2005) 188-201",
                            "Indexing": "SCI/Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2016-17",
                            "Application ID": "2449/CHE/2008",
                            "Title of the Patent": "A method for obtaining a coating of a metal compound onto a substrate and an apparatus thereof.",
                            "Status": "&bull; Indian Patent Granted, Patent No. 273333 (31/05/2016). &bull; International Publication Number -WO 2010/ 041278 A1 (15th April 2010)."
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Application ID": "2905/CHE/2010",
                            "Title of the Patent": "White light source using nanostructures",
                            "Status": "&bull; Indian Patent Granted, Patent No. 288854 (27/10/2017)"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Best Poster award, Pei-Jung Tsai, Sanjaya Brahma, Jow-Lay Huang, Undergraduate Poster Presentation, June 2024,Department of Materials Science and Engineering, National Cheng Kung University, Tainan, Taiwan.",
                        "International Travel Grant (Project No: 113-2914-I-006-021-A1), Awarded by National Science and Technology Council, Taiwan: (2024) to attend The 10th international conference on technological advances of thin films and surface coatings (ThinFilms2024), 15-19 July 2016 at Holiday Inn Atrium, Thin film society, Nanyang technological university, Singapore.",
                        "Best Poster Award,Ya-Chuen Chang, Sanjaya Brahma, Jow-Lay Huang, Department of Materials Science and Engineering, National Cheng Kung University, Electron Phonon Coupling in ZnO Thin films, The 2022 International Conference on Hierarchical Green Energy Materials (2022HIGEM), January 17-18, 2022, Hierarchical Green Energy Materials Research Center, National Cheng Kung University, Taiwan. (Poster presentation).",
                        "Out Standing Contribution In Reviewing (2017), Applied Surface Science.",
                        "International Travel Grant, Awarded by Ministry of Science and Technology, Taiwan: (2016) to attend The 8th international conference on technological advances of thin films and surface coatings (ThinFilms2016), 12-15 July 2016 at Holiday Inn Atrium, Thin film society, Nanyang technological university, Singapore.",
                        "Engineering Paper Award, 6th June 2014, Chinese Institute of Engineers, Taiwan.",
                        "International Travel Grant, Awarded by CSIR, India: (2009) to attend MRS meeting in San francisco (USA).",
                        "International Travel Grant, Awarded by CEN (Center of excellence in Nanoelectronics, IISc), India: (2009) to attend MRS meeting in San francisco (USA).",
                        "Research Associateship, CSIR, India, 2009",
                        "Senior Research Fellowship (SRF), IISC, India: January 2007 &ndash; March 2009.",
                        "Junior Research Fellowship (JRF), Indian Institute of Science (IISC), India: January 2005 &ndash; December 2007.",
                        "Ministry of Human Resource Development (MHRD), Fellowship, India: July 2002 - June 2004.",
                        "Graduate Aptitude Test in Engineering (GATE-PHYSICS, 2002), India: 97.59 percentile score & all India rank 50.",
                        "Reviewer of reputed National/International journals"
                    ]
                }
            ]
    },

    "Dr. N. Reddeppa": {
        "name": "Dr. N. Reddeppa",
        "email": "drreddeppan@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. N. Reddeppa.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Research Professor",
                            "Specialization": "School of Convergence and energy research centre",
                            "Branch": "Li-ion batteries and solar cells",
                            "College Name/University": "Seoul National University of Science & Technology, Seoul, Republic of Korea",
                            "Year of Passing": "July 2023-May 2024"
                        },
                        {
                            "Course": "Senior Researcher",
                            "Specialization": "Materials Science Institute",
                            "Branch": "Li-sulfur batteries",
                            "College Name/University": "Sun Yat-Sen University, Guangzhou, P.R. China",
                            "Year of Passing": "Dec 2016-November 2019"
                        },
                        {
                            "Course": "Senior Postdoctoral Fellow",
                            "Specialization": "Solid state Ionics",
                            "Branch": "Gas sensor devices and Li-ion batteries",
                            "College Name/University": "Huazhong University of science and Technology, Wuhan, P.R. China",
                            "Year of Passing": "June 2014- November 2016"
                        },
                        {
                            "Course": "Postdoctoral Fellow",
                            "Specialization": "Materials Science",
                            "Branch": "Lithium-ion batteries",
                            "College Name/University": "Wuhan University of Technology, Wuhan, P.R. China",
                            "Year of Passing": "May 2011-April 2013"
                        },
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Physics",
                            "Branch": "Physics",
                            "College Name/University": "S.V. University",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "M.Phil.",
                            "Specialization": "Physics",
                            "Branch": "M.Phil.",
                            "College Name/University": "S. V. University",
                            "Year of Passing": "2006"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Physics",
                            "Branch": "M.Sc.",
                            "College Name/University": "S.V. University",
                            "Year of Passing": "2001"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "MPC",
                            "Branch": "B.Sc.",
                            "College Name/University": "B.T. College",
                            "Year of Passing": "1996"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Energy storage devices"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=55931274800",
                        "Vidwan :",
                        "Google scholar : https://scholar.google.com/citations?user=twvsEhgAAAAJ&hl=en&oi=ao",
                        "h-Index (As per Scopus Data) : 19"
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
                            "Details of Research Publication": "Investigation on synthesis and characterization of ZnO nanostructure photoelectrode for dye-sensitized solar cells, Journal of Materials Science: Materials in Electronics, Volume: 36, Issue: 3",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Ultra-stable lithium-sulfur batteries using nitrogen-doped porous carbon nanosheets implanted with both Fe and Ni New Carbon Materials, New Carbon Materials, Page: 188-198, Volume: 40, Issue: 1",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "PPy@h-MoO3 nanorods as the cathode material for high-efficiency lithium-ion batteries, New Journal of Chemistry, Page: 12315-12322, Volume: 48, Issue: 27",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Poly(ethylene glycol)/poly(vinylidene) fluoride/TiO2 nanoparticle composite for sandwiched solid-state dye-sensitized solar cells, Journal of Materials Science: Materials in Electronics, Volume: 35, Issue: 15",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "6",
                            "Details of Research Publication": "FeS/FeNC decorated N,S-co-doped porous carbon for enhanced ORR activity in alkaline media, Chemical Communications, Page: 12921-12924, Volume: 56, Issue: 85.",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "4",
                            "Details of Research Publication": "A new supramolecular binder strongly enhancing the electrochemistry performance for lithium&ndash;sulfur batteries, Chemical Communications, Page: 13924-13927, Volume: 55, Issue: 92",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "2",
                            "Details of Research Publication": "Advanced lithium-ion batteries, synthesis of various cathode and anode materials, LAP Lambert Academic Publishing 978, 88",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Book",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "7",
                            "Details of Research Publication": "In-situ preparation of porous carbon nanosheets loaded with metal chalcogenides for a superior oxygen evolution reaction, Carbon, Page: 144-151, Volume: 149",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "3",
                            "Details of Research Publication": "Nitrogen self-doped carbon aerogels derived from trifunctional benzoxazine monomers as ultralight supercapacitor electrodes, Nanoscale, Page: 6549-6557, Volume: 10, Issue: 14",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "7",
                            "Details of Research Publication": "Preparation of versatile yolk-shell nanoparticles with a precious metal yolk and a microporous polymer shell for high-performance catalysts and antibacterial agents, Polymer, Page: 195-200, Volume: 137",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "1",
                            "Details of Research Publication": "SnO2 doped MoO3 nanofibers and their carbon monoxide gas sensing performances, Solid State Ionics, Page: 128-134, Volume: 300",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "4",
                            "Details of Research Publication": "Double dimensionally ordered nanostructures: toward a multifunctional reinforcing nanohybrid for epoxy resin, RSC Advances, Page: 1177-1190, Volume: 7, Issue: 2. Published: Dec. 13, 2016",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "1",
                            "Details of Research Publication": "Single crystalline flowerlike &alpha;-MoO3 nanorods and their application as anode material for lithium-ion batteries Journal of Alloys and Compounds, Page: 79-86, Volume: 687",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "4",
                            "Details of Research Publication": "Lotus pollen derived 3-dimensional hierarchically porous NiO microspheres for NO2 gas sensing Sensors and Actuators B: Chemical, Page: 554-560, Volume: 227",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "5",
                            "Details of Research Publication": "Ionic liquid incorporated biodegradable gel polymer electrolyte for lithium ion battery applications Journal of Materials Science: Materials in Electronics, Page: 1370-1377, Volume: 27, Issue: 2",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "1",
                            "Details of Research Publication": "Effects of potassium iodide (KI) on crystallinity, thermal stability, and electrical properties of polymer blend electrolytes (PVC/PEO:KI) Solid State Ionics, Page: 260-267, Volume: 278",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "2",
                            "Details of Research Publication": "Ultraviolet photocatalytic degradation of methyl orange by nanostructured TiO2/ZnO heterojunctions Journal of Materials Chemistry A, Page: 6565-6574, Volume: 3, Issue: 12",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "1",
                            "Details of Research Publication": "Synthesis and characterization of &alpha;-MoO3 nanobelt composite positive electrode materials for lithium battery application Materials Research Bulletin, Page: 140-146, Volume: 66",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "1",
                            "Details of Research Publication": "Electrical and solid-state battery performance of a new PVC/PEO + KBr blend-based polymer electrolyte system Ionics, Page: 1587-1594, Volume: 21, Issue: 6",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "2",
                            "Details of Research Publication": "Morphology engineering of nanostructured TiO2 particles RSC Advances, Page: 6481-6488, Volume: 5",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "2",
                            "Details of Research Publication": "Cadmium removal in waste water by nanostructured TiO2 particles J. Mater. Chem. A, Page: 13932-13941, Volume: 2, Issue: 34",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "1",
                            "Details of Research Publication": "Electrochemical performance of new &alpha;-MoO3 nanobelt cathode materials for rechargeable Li-ion batteries Solid State Sciences, Page: 43-48, Volume: 34",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of polyethylene glycol on vanadium oxide nanotubes in lithium-ion batteries Microelectronic Engineering, Page: 81-85, Volume: 127",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013",
                            "Author Position": "1",
                            "Details of Research Publication": "AC conduction mechanism and battery discharge characteristics of (PVC/PEO) polyblend films complexed with potassium chloride Measurement, Page: 33-41, Volume: 47",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013",
                            "Author Position": "1",
                            "Details of Research Publication": "Preparation and characterization of pure and KBr doped polymer blend (PVC/PEO) electrolyte thin films Microelectronic Engineering, Page: 57-62, Volume: 112",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013",
                            "Author Position": "1",
                            "Details of Research Publication": "Preparation and Characterization of PEG Surfactant V2O5 Nanotubes as Cathode Materials International Photonics and Optoelectronics Meetings (POEM), Page: ASa3A.34",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2008",
                            "Author Position": "1",
                            "Details of Research Publication": "Electrical and optical characterization of (PEO+PVAc) polyblend films Ionics, Page: 255-259, Volume: 15, Issue: 2",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2008",
                            "Author Position": "1",
                            "Details of Research Publication": "Structural and optical characterization of (PEO+ PVAc) polymer blend electrolyte films, AIP Conference Proceedings, Page: 159-163, Volume: 1004",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "29",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2008",
                            "Author Position": "2",
                            "Details of Research Publication": "Electrical, Optical and Structural Characterization of Pure and Potassium Doped PVC Based Polymer Electrolyte Films AIP Conference Proceedings, Page: 176-181, Volume: 1004",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "Published Book on Advanced Lithium Ion batteries, (synthesis of anode and cathode materials)."
                }
            ]
    },

    "Dr. Jagadeesh Babu Bellam": {
        "name": "Dr. Jagadeesh Babu Bellam",
        "email": "jagadeeshbabub@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/fbbd46bc1db8ec973c35f6bca55a3663.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Post-Doctoral Fellow",
                            "Specialization": "Thin films for photocatalytic",
                            "Branch": "Materials",
                            "College Name/University": "University of Maine, Le Mans-CNRS, France",
                            "Year of Passing": "Nov-Dec 2014"
                        },
                        {
                            "Course": "Post-Doctoral Fellow",
                            "Specialization": "Thin films for photocatalytic",
                            "Branch": "Materials",
                            "College Name/University": "University of Maine, Le Mans, France",
                            "Year of Passing": "Nov 2013 - Oct 2014"
                        },
                        {
                            "Course": "D.Sc.",
                            "Specialization": "Solid State Electronics",
                            "Branch": "Electrical Engineering",
                            "College Name/University": "CINVESTAV-IPN, Mexico City, Mexico",
                            "Year of Passing": "2012"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Physics",
                            "Branch": "M.Sc.",
                            "College Name/University": "VIT Deemed University, Vellore, T.N., India",
                            "Year of Passing": "2006"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Physics, Computers & Maths",
                            "Branch": "B.Sc.",
                            "College Name/University": "PVKN College, Sri Venkateswara University (SVU), Tirupati, A.P., India.",
                            "Year of Passing": "2003"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Thin films for Photovoltaic and Photocatalytic applications"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57191082990",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/244355",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=2opLj3YAAAAJ",
                        "h-Index (As per Scopus Data) : 10"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025- 2026",
                            "Author Position": "6",
                            "Details of Research Publication": "Tailoring electronic structure and magnetic anisotropy in spray-pyrolyzed NiFe2O4 thin films for spintronic applications&rdquo;, Scientific Reports 16 (2026) 13485",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024- 2025",
                            "Author Position": "5",
                            "Details of Research Publication": "Self-powered, ultrabroad band photodetectors with large open circuit voltage using colloidal PbSe QDs, Nanoscale Advances, 7(13) (2025) 4067-4076",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024- 2025",
                            "Author Position": "3",
                            "Details of Research Publication": "Solution-processed, ultrasensitive, high current density vertical phototransistor using porous carbon nanotube electrode, Applied Surface Science, 680 (2025) 161414",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Highly stable CsPbBr3/ PMA perovskite nanocrystals for improved optical performance, Heliyon, 10 (2024) e24497",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021-2022",
                            "Author Position": "1",
                            "Details of Research Publication": "Deposition and Characterization of CuI thin film as hole transporting layer for perovskite solar cells, Bulletin of Materials Science 45, 249 (2022)",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020-2021",
                            "Author Position": "1",
                            "Details of Research Publication": "DC sputter deposited TiO2 thin film on ITO/glass substrate for perovskite based solar cell application, Materials Today: Proceedings, 45 (2021) 3886&ndash;3890",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019-2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Statistical experimental design to optimize RF-sputtered NiTiO 3 thin films, Journal of Materials Science: Materials in Electronics, 31 (2020) 7434 - 7444",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018-2019",
                            "Author Position": "1",
                            "Details of Research Publication": "Selenization of CIS and CIGS layers deposited by chemical spray pyrolysis, Journal of Materials Science: Materials in Electronics, 29 (2018) 15369&ndash;15375",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-2018",
                            "Author Position": "4",
                            "Details of Research Publication": "Optimization of high efficiency tin halide perovskite solar cell using SCAPS-1D, International Journal of Simulation and Process Modelling, 13(3) (2018) 221-227",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2017-2018",
                            "Author Position": "5",
                            "Details of Research Publication": "Design and Simulation of High Efficiency Tin Halide Perovskite Solar Cell, International Journal of Renewable Energy Research, 7(4) (2017) 1603-1612",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-2016",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of sodium doping on graded Cu(In1-XGaX)Se2 thin films prepared by spray pyrolysis, Materials Science in Semiconductor Processing, 37 (2015) 37-45",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-2016",
                            "Author Position": "1",
                            "Details of Research Publication": "Deposition and characterization of graded Cu(In1-XGaX)Se2 thin film by spray pyrolysis, Materials Chemistry and Physics, 162 (2015) 59-68",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014-2015",
                            "Author Position": "1",
                            "Details of Research Publication": "Structural properties of ultrasonically sprayed Al-doped ZnO (AZO) thin films: Effect of ZnO buffer layer on AZO, Journal of Electronic Materials, 44(2) (2015) 699-705",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014-2015",
                            "Author Position": "1",
                            "Details of Research Publication": "Visible-light photocatalytic activity of nitrogen-doped NiTiO3 thin film prepared by co-sputtering process, RSC Advances, 5 (2015) 10551-10559",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012-2013",
                            "Author Position": "3",
                            "Details of Research Publication": "Effect of the Milling Time of the Precursors on the Physical Properties of Sprayed Aluminum-Doped Zinc Oxide (ZnO:Al) Thin Films, Materials, 5(8) (2012) 1404-1412",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011-2012",
                            "Author Position": "7",
                            "Details of Research Publication": "Group III-Nitrides Nanostructures, AIP Conf. Proc., 1420 (2012) 164-168 Scopus Conference Proceedings Q3",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011-2012",
                            "Author Position": "1",
                            "Details of Research Publication": "Structural and di electrical studies on mechano-chemically synthesized In doped CdS nano powders, Journal of Material Science, 46 (2011) 5417-5422",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010-2011",
                            "Author Position": "2",
                            "Details of Research Publication": "Preparation, deposition of Cu(In1-xGax)Se2 nanopowder thin films by non-vacuum processes and its characterization, 37th IEEE PVSC 2011, Seattle, WA, June 19-24, 2011, 000440-000445",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010-2011",
                            "Author Position": "1",
                            "Details of Research Publication": "An (ITO OR AZO)/ZnO/Cu(In1-xGax)Se2 superstrate thin film solar cell structure prepared by spray pyrolysis, 37th IEEE PVSC 2011, Seattle, WA, June 19-24, 2011, 001238-001243",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010-2011",
                            "Author Position": "3",
                            "Details of Research Publication": "Fluorine doped zinc oxide thin films deposited by chemical spray, starting from zinc pentanedionate and hydrofluoric acid: Effect of the aging time of the solution, Materials Science and Engineering B 174 (2010) 46-49",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010-2011",
                            "Author Position": "1",
                            "Details of Research Publication": "Electrical and optical properties of ultrasonically sprayed Al doped Zinc oxide thin films, Materials Science and Engineering B 174 (2010) 31-37",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010-2011",
                            "Author Position": "1",
                            "Details of Research Publication": "Properties of CuInGaSe thin films prepared by chemical spray pyrolysis, 7th CCE 2010, Tuxtla Guti&eacute;rrez, Chiapas, M&eacute;xico, September 8-10, 2010",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2009-2010",
                            "Author Position": "1",
                            "Details of Research Publication": "Deposition and characterization of ZnO: Al thin films by ultrasonic spray pyrolysis, 6th CCE 2009, Toluca, Mexico, November 10-13, 2009",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2006-2007",
                            "Author Position": "2",
                            "Details of Research Publication": "Laser remelting of plasma sprayed Zirconia based ceramic coating for pyrochemical reprocessing applications, Surface Engineering, 23(2) (2007) 147-154",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        }
                    ]
                },
                {
                    "title": "Research Projects & Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2018 &ndash; 19",
                            "Funded Project /Event": "Funded Project",
                            "Role": "P.I.",
                            "Title of the Project/Event": "Studies on TCO/TiO2 and TiO2/CH3NH3SnI3 interfaces deposited by sputtering and spin coating for perovskite-type solar cell applications",
                            "Amount in Rs. /-": "35,59,310",
                            "Funding Agency": "DST- SERB: ECRA, New Delhi"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "SWAYAM-NPTEL Domain certificate (Electronic Materials) in the period October 2025.",
                        "Appointed as UHV Regional coordinator for SCR by AICTE-NCCIP, New Delhi from 9th May 2023.",
                        "Best Teacher Award from Madanapalle Institute of Technology & Science, Madanapalle, A.P., India for the academic year 2019-2020.",
                        "Early career research Award (ECRA) from DST-SERB, Govt. of India on 16th March 2018.",
                        "Best oral presentation in symposium S9 of XIX IMRC 2010, Cancun, M&eacute;xico.",
                        "Best poster award in symposium S9-P9 of XIX IMRC 2010, Cancun, M&eacute;xico.",
                        "Achievement of Gold Medal at VIT, Vellore, T.N, India, 2006."
                    ]
                }
            ]
    },

    "Dr. Sunku Sreedhar": {
        "name": "Dr. Sunku Sreedhar",
        "email": "drsreedhars@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Sunku Sreedhar.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Post-doctoral Fellow",
                            "Specialization": "Single molecular Fluorescence microscopy / Spectroscopy",
                            "Branch": "Solid State materials",
                            "College Name/University": "SSCU, Indian Institute of Sciences, Bangalore, India",
                            "Year of Passing": "2016-2018"
                        },
                        {
                            "Course": "Research Professor / Post-doctoral Fellow",
                            "Specialization": "Ultrafast laser spectroscopy",
                            "Branch": "Laser Spectroscopy",
                            "College Name/University": "CMSD,Korea University, Seoul, South korea",
                            "Year of Passing": "2015-2016"
                        },
                        {
                            "Course": "Post-doctoral Fellow",
                            "Specialization": "Femtosecond LIBS",
                            "Branch": "Physics, Laser",
                            "College Name/University": "ACRHEM, University of Hyderabad.",
                            "Year of Passing": "Feb-Jul 2015"
                        },
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Laser plasma, femtosecond laser spectroscopy",
                            "Branch": "Physics",
                            "College Name/University": "University of Hyderabad (UoH), Hyderabad, India",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Physics",
                            "Branch": "M.Sc.",
                            "College Name/University": "Vellore Institute of Technology University, Vellore, Tamilnadu, India",
                            "Year of Passing": "2006"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Mathematics, Physics & Computer science",
                            "Branch": "B.Sc.",
                            "College Name/University": "Sri Krishnadevaraya University, Anantapur, Andhra Pradesh, India",
                            "Year of Passing": "2003"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Spectroscopy, Ultrafast laser applications, Microfluidic devices"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=36351060600",
                        "Vidwan : https://mits.irins.org/profile/244535",
                        "Google scholar : https://scholar.google.co.in/citations?user=VQuBOtYAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 11"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Highly stable CsPbBr3/ PMA perovskite nanocrystals for improved optical performance. HeliyonVolume 10, Issue 2, 30 January 2024, doi.org/10.1016/j.heliyon.2024.e24497",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-17",
                            "Author Position": "4",
                            "Details of Research Publication": "&ldquo;Femtosecond and nanosecond LIBS studies of nitroimidazoles: correlation between molecular structure and LIBS data&rdquo;, J. Anal. At. Spectrom., 31, 737&ndash;750 (2016).DOI: 10.1039/c5ja00445d",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-16",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Femtosecond Laser-Induced Breakdown Spectroscopy Studies of Nitropyrazoles: The Effect of Varying Nitro Groups&rdquo;, Appl. Spec. 69 (11), 1342-1354, (2015). DOI: 10.1366/14-07810",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "2",
                            "Details of Research Publication": "Femtosecond time-resolved laser-induced breakdown spectroscopy studies of nitroimidazoles, International Conference on Fibre Optics and Photonics, 2014, 2014 | EID: 2-s2.0-84929011649",
                            "Indexing": "ESCI/ Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference paper",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "1",
                            "Details of Research Publication": "Laser induced breakdown spectroscopy for classification of high energy materials using elemental intensity ratios, Defense Science Journal, 64(4), 332-338 (2014). DOI: 10.2478/jppr-2014-0022",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "2",
                            "Details of Research Publication": "Femtosecond time resolved laser induced breakdown spectroscopy studies of nitroimidazoles, Proceedings 12th International Conference on Fiber Optics and Photonics, Photonics, 2014.EID: 2-s2.0-84937134714",
                            "Indexing": "ESCI/ Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference paper",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013",
                            "Author Position": "1",
                            "Details of Research Publication": "Molecular formation dynamics of 5-nitro-2,4-dihydro-3H-1,2,4-triazol-3-one, 1,3,5-trinitroperhydro-1,3,5-triazine, and 2,4,6-trinitrotoluene in air, nitrogen, and argon atmospheres studied using femtosecond laser induced breakdown spectroscopy,&rdquo; Spectrochim. Acta Part B, 87, 121&ndash;129 (2013) DOI: 10.1016/j.sab.2013.05.006",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013",
                            "Author Position": "1",
                            "Details of Research Publication": "Investigation of molecular and elemental species dynamics in NTO, TNT, and ANTA using femtosecond LIBS technique. Proceedings of SPIE - The International Society for Optical Engineering 2013. DOI: 10.1117/12.2015685 EID: 2-s2.0-84881083834",
                            "Indexing": "ESCI/ Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference paper",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None (SJR score 0.23)"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013",
                            "Author Position": "1",
                            "Details of Research Publication": "Discrimination methodologies using femtosecond LIBS and correlation techniques, Proceedings of SPIE - The International Society for Optical Engineering 2013 DOI: 10.1117/12.2015749",
                            "Indexing": "ESCI/ Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference paper",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None (SJR score 0.23)"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013",
                            "Author Position": "1",
                            "Details of Research Publication": "Femtosecond LIBS studies of nitropyrazoles, Proceedings of SPIE - The International Society for Optical Engineering 2013. DOI: 10.1117/12.2015760 EID: 2-s2.0-84881083767",
                            "Indexing": "ESCI/ Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference paper",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None (SJR score 0.23)"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013",
                            "Author Position": "1",
                            "Details of Research Publication": "Femtosecond and nanosecond laser induced breakdown spectroscopic studies of NTO, HMX, and RDX, Spectrochimica Acta - Part B Atomic Spectroscopy 79-80, 31-38, Spectrochim. Acta B, (2013). DOI: 10.1016/j.sab.2012.11.002",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013",
                            "Author Position": "2",
                            "Details of Research Publication": "On-axis timeresolved spatial characterization of shock-induced refractive fringes in liquid water,&rdquo; J. Opt.Soc. Am. B, 30(8), 2206-2214 (2013). DOI: 10.1364/JOSAB.30.002206",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013",
                            "Author Position": "3",
                            "Details of Research Publication": "Silver nano-entities through ultrafast double ablation in aqueous media for SERS and photonics applications, &rdquo;J. Appl. Phys.,113, 073106-14 (2013). DOI: 10.1063/1.4792483",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012",
                            "Author Position": "2",
                            "Details of Research Publication": "CN, C2 Molecular Emissions from Pyrazole Studied Using Femtosecond LIBS,&quot; in International Conference on Fibre Optics and Photonics. Conference paper EID: 2-s2.0-84881182228",
                            "Indexing": "ESCI/ Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference paper",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012",
                            "Author Position": "3",
                            "Details of Research Publication": "Fabrication and characterization of aluminum nanostructures and nanoparticles obtained using femtosecond ablation technique,&rdquo; Chemical Physics Letters, 530, 93-97 (2012). DOI: 10.1016/j.cplett.2012.01.081 EID: 2-s2.0-84857997964",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012",
                            "Author Position": "3",
                            "Details of Research Publication": "Fabrication of metal nano-entities using ultrafast ablation for SERS, photonics, and biomedical applications, 2012 International Conference on Fiber Optics and Photonics, PHOTONICS 2012 EID:2-s2.0-84881152410",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference paper",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012",
                            "Author Position": "3",
                            "Details of Research Publication": "Femtosecond and picosecond ablation of aluminum for synthesis of nanoparticles and nanostructures and their optical characterization.Proceedings of SPIE - The International Society for Optical Engineering DOI: 10.1117/12.906962",
                            "Indexing": "ESCI/ Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference paper",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None (SJR score 0.23)"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012",
                            "Author Position": "2",
                            "Details of Research Publication": "Time resolved spectral emission from AP & AN: Comparison with LIBS. Solid-State and Organic Lighting, SOLED 2012. EID: 2-s2.0-84925358373",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference paper",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012",
                            "Author Position": "2",
                            "Details of Research Publication": "Time resolved spectral emission from AP & AN: Comparison with LIBS Optical Instrumentation for Energy and Environmental Applications, E2 2012 2012 EID: 2-s2.0-84893129119",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference paper",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011",
                            "Author Position": "2",
                            "Details of Research Publication": "Laser-induced breakdown spectroscopy-based investigation and classification of pharmaceutical tablets using multivariate chemometric analysis&rdquo;, Talanta, 87, 53-59 (2011). DOI: 10.1016/j.talanta.2011.09.040",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011",
                            "Author Position": "2",
                            "Details of Research Publication": "Enhancement of the crystalline perfection of <0 0 1> directed KDP single crystal. Current Applied Physics2011.DOI: 10.1016/j.cap.2011.03.076",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011",
                            "Author Position": "1",
                            "Details of Research Publication": "Laser induced breakdown spectroscopy of high energy materials using nanosecond, picosecond, and femtosecond pulses: Challenges and opportunities. Proceedings of SPIE - The International Society for Optical Engineering 2011 DOI: 10.1117/12.897821 EID: 2-s2.0-81355127374",
                            "Indexing": "ESCI/ Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference paper",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None (SJR score 0.23)"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011",
                            "Author Position": "4",
                            "Details of Research Publication": "Supercontinuum emission from focused femtosecond laser pulses in air.AIP Conference Proceedings 2011 DOI: 10.1063/1.3643527 EID: 2-s2.0-81855203494",
                            "Indexing": "ESCI/ Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference paper",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011",
                            "Author Position": "1",
                            "Details of Research Publication": "Supercontinuum emission from water using 40 fs pulses in the external tight focusing limit. AIP Conference Proceedings 2011 DOI: 10.1063/1.3646863 EID: 2-s2.0-81855180592",
                            "Indexing": "ESCI/ Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference paper",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010",
                            "Author Position": "1",
                            "Details of Research Publication": "Laser-induced breakdown spectroscopy of RDX and HMX with nanosecond, picosecond, and femtosecond pulses.Proceedings of SPIE - The International Society for Optical Engineering 2010 DOI: 10.1117/12.850007 EID: 2-s2.0-77955904003",
                            "Indexing": "ESCI/ Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference paper",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None (SJR score 0.23)"
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010",
                            "Author Position": "1",
                            "Details of Research Publication": "Stoichiometric analysis of ammonium nitrate and ammonium perchlorate with nanosecond laser induced breakdown spectroscopy.Proceedings of SPIE &ndash; The International Society for Optical Engineering 2010 DOI: 10.1117/12.850014 EID: 2-s2.0-77955858959",
                            "Indexing": "ESCI/ Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference paper",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None (SJR score 0.23)"
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010",
                            "Author Position": "2",
                            "Details of Research Publication": "Synthesis, growth, structural, thermal, linear and nonlinear optical properties of a new organic crystal: Dimethylammonium picrate.Journal of Crystal Growth 2010 DOI: 10.1016/j.jcrysgro.2010.03.017 EID: 2-s2.0-77955231942",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        }
                    ]
                },
                {
                    "title": "Research Projects & Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Funded Project /Event": "Funded Project",
                            "Role": "PI",
                            "Title of the Project/Event": "Ag-Au nano array microfluidic Lab on chip fabrication for detection of bio samples using Raman Spectroscopy",
                            "Amount in Rs. /-": "18,30,000",
                            "Funding Agency": "ANRF-(TARE scheme)"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Funded Project /Event": "Funded Project",
                            "Role": "PI",
                            "Title of the Project/Event": "Nanofabrication of ferroelectric multi-layered thin films based of BTO, BFO and Hf(Zr)O2 for integration into semiconductor electronic and photonic device applications",
                            "Amount in Rs. /-": "1,35,000",
                            "Funding Agency": "UGC-DAE CSR Collaborative Research Scheme (CRS)"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Funded Project /Event": "Event (Conference)",
                            "Role": "Co-Coordinator",
                            "Title of the Project/Event": "International Conference on Recent Trends in Energy Harvesting (ICRTEH-2024) 23rd September &ndash; 25th September 2024",
                            "Amount in Rs. /-": "",
                            "Funding Agency": "Department of Physics, MITS sponsored"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Funded Project /Event": "Event (FDP)",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "One week FDP on Computational modelling of materials&rdquo; (online mode) May 08th to May 12th, 2023",
                            "Amount in Rs. /-": "",
                            "Funding Agency": "Department of Physics, MITS sponsored"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Funded Project /Event": "Event (FDP)",
                            "Role": "Coordinator",
                            "Title of the Project/Event": "One-Week Faculty Development Program on &ldquo;Frontiers in Material Science Research&rdquo; August 24-28, 2020",
                            "Amount in Rs. /-": "",
                            "Funding Agency": "Department of Physics, MITS sponsored"
                        }
                    ]
                }
            ]
    },

    "Dr. Rajesh Dagupati": {
        "name": "Dr. Rajesh Dagupati",
        "email": "drrajeshd@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Rajesh Dagupati.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Researcher",
                            "Specialization": "Glass Science and Technology",
                            "Branch": "Department of Functional Materials",
                            "College Name/University": "The Alexander Dub\u010dek University of Tren\u010d&iacute;n, Slovakia, Europe",
                            "Year of Passing": "2023"
                        },
                        {
                            "Course": "Visiting Researcher",
                            "Specialization": "Glass Science and Technology",
                            "Branch": "Ceramic and Glass research group",
                            "College Name/University": "Institute of Ceramic and Glass (ICV), CSIC, Madrid, Spain",
                            "Year of Passing": "2019"
                        },
                        {
                            "Course": "Visiting Researcher",
                            "Specialization": "Glass Science and Technology",
                            "Branch": "Ceramic and Glass research group",
                            "College Name/University": "Institute of Ceramic and Glass (ICV), CSIC, Madrid, Spain",
                            "Year of Passing": "2018"
                        },
                        {
                            "Course": "FAPESP Postdoctoral Fellow",
                            "Specialization": "Glass Science and Technology",
                            "Branch": "Magnetic Resonance, Spectroscopy and Magnetism",
                            "College Name/University": "Physics institute of Sao Carlos, University of Sao Paulo (USP), Sao Carlos, Brazil",
                            "Year of Passing": "2017"
                        },
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Applied Spectroscopy",
                            "Branch": "Physics",
                            "College Name/University": "Sri Venkateswara University, Tirupati",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "M.Tech.",
                            "Specialization": "Energy management",
                            "Branch": "Physics",
                            "College Name/University": "Sri Venkateswara University, Tirupati",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Electronics and Condense matter Physics",
                            "Branch": "M.Sc.",
                            "College Name/University": "Sri Venkateswara University, Tirupati",
                            "Year of Passing": "2005"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Mathematics, Physics and Chemistry",
                            "Branch": "B.Sc.",
                            "College Name/University": "Sri Venkateswara University, Tirupati",
                            "Year of Passing": "2002"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Glass, Glass-Ceramics, Phosphors, Nanomaterials, Optical properties of materails"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=54792200400",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/463546",
                        "Google scholar : https://scholar.google.com/citations?user=z9A-QLsAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 22"
                    ]
                },
                {
                    "title": "Research Projects & Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2023",
                            "Funded Project /Event": "Project (1/0170/23)",
                            "Role": "PI",
                            "Title of the Project/Event": "Nano/Micro Structured Fluoride-based Materials functionalized with a combination of different thermal quenching luminescent centers for ratiometric optical thermometry application.",
                            "Amount in Rs. /-": "15,00,000",
                            "Funding Agency": "Scientific Grant Agency of the Ministry of Education, Slovakia"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "FAPESP Fellowship: Physics Institute of S&atilde;o Carlos, S&atilde;o Paulo University, S&atilde;o Carlos, Brazil.",
                        "Senior Research Fellowship, Council of Scientific and Industrial Research (CSIR-SRF).",
                        "Research Fellowships in Science for Meritorious Students, University Grants Commission (UGC-BSR).",
                        "Received a gold medal award for graduating from college in 2002 as the topper in the physics subject."
                    ]
                }
            ]
    },

    "Dr. Charan Kuchi": {
        "name": "Dr. Charan Kuchi",
        "email": "drcharank@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Charan Kuchi.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Materials Science &ndash; Energy storage devices",
                            "Branch": "Physics",
                            "College Name/University": "Sri Venkateswara University, Tirupati",
                            "Year of Passing": "2020"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Thin films",
                            "Branch": "Physics",
                            "College Name/University": "Sri Venkateswara University, Tirupati",
                            "Year of Passing": "2011"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Physics, Chemistry & Mathematics",
                            "Branch": "B.Sc.",
                            "College Name/University": "Sri Venkateswara University, Tirupati",
                            "Year of Passing": "2009"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Supercapacitors, Electrocatalysis, Gas sensors, Photocatalysis"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57200115267",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/459173",
                        "Google scholar : https://scholar.google.com/citations?view_op=list_works&hl=en&authuser=4&hl=en&user=TT8UMQIAAAAJ&sortby=pubdate&authuser=4",
                        "h-Index (As per Scopus Data) : 12"
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
                            "Details of Research Publication": "Optical and magnetic properties of Gd and Bi-doped yttrium iron garnet (YIG) nanoparticles; Ceramics International; https://doi.org/10.1016/j.ceramint.2026.02.307",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "2D layered perovskites: stability, tunability, and their role in next-generation solar energy conversion. J Mater Sci 61, 3577&ndash;3615 (2026). https://doi.org/10.1007/s10853-025-11886-3",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "A hydrothermally engineered MoS2&ndash;ZnS&ndash;MWCNT nanocomposite for superior oxygen evolution and visible light photocatalytic dye degradation. J Mater Sci (2026). https://doi.org/10.1007/s10853-026-12221-0",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "Facile Green Synthesis of Gold Nanoparticles Using Catunaregam Spinosa Extract for Environmental Remediation and Antimicrobial Activity; Chemistry Select, 10, 31, 2025. https://doi.org/10.1002/slct.202503121",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Growth of epitaxial 2D Zn NDs and transform to 3D ZnO nanostructures for UV photodetector; Inorganic Chemistry Communications, 180, 1, 2025. https://doi.org/10.1016/j.inoche.2025.114928",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Oleic acid-ligated Co0.7 doped Ca0.3Fe2O4 nanoparticles: A synergistic approach for enhanced wastewater purification and magnetic hyperthermia applications; Physica B: Condensed Matter, 705, 2025. https://doi.org/10.1016/j.physb.2025.417079",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Dielectric and Electrochemical Properties of BaO-Doped NiO: A Study on Optimized Composition for Enhanced Performance; ECS Journal of Solid State Science and Technology, 14, 2025. https://doi.org/10.1149/2162-8777/adcfc3",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Enhanced solar-driven photocatalytic hydrogen production, dye degradation, and supercapacitor functionality using MoS2&ndash;TiO2 nanocomposite, Ceramics International, 50, 20, 2025. https://doi.org/10.1016/j.ceramint.2024.07.239",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Graphitic carbon nitride (g-C3N4) decorated on CuCo2O4 nanosphere composites for Enhanced Electrochemical Performance for Energy Storage Applications, Materials today Communications, Vol. 39, 108688, 2024. ( https://doi.org/10.1016/j.mtcomm.2024.108688 )",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Synthesis and Properties of Eu and Ni Co-Doped ZnS Nanoparticles for the Detection of Ammonia Gas, ECS Journal of Solid State Science and Technology, Vol. 13, 037009, 2024. ( https://doi.org/10.1149/2162-8777/ad34fb )",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Zinc oxide nanoparticles as an efficient antioxidant, photocatalyst, and heterogeneous catalyst in C&ndash;P bond synthesis, Results in Chemistry, Vol. 6, 101227, 2023. ( https://doi.org/10.1016/j.rechem.2023.101227 )",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "5",
                            "Details of Research Publication": "Hierarchical NiCo2O4/NiO mixed nanofibers for enhanced supercapacitor and ammonia gas sensor applications, Inorganic Chemistry Communications, Vol. 157, 111405, 2023. ( https://doi.org/10.1016/j.inoche.2023.111405 )",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Synthesis and characterization of rGO wrapped 1-D NiO nanofibers for ammonia gas sensing application, Surfaces and Interfaces, Vol. 40, 103012, 2023. ( https://doi.org/10.1016/j.surfin.2023.103012 )",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Solvothermal synthesis of ZnCo2O4@rGO nanostructures for high-performance supercapacitor applications, Synthetic Metals (Corresponding author)- https://doi.org/10.1016/j.synthmet.2023.117283",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "3",
                            "Details of Research Publication": "Deposition and Characterization of CuI thin film as hole transporting layer for perovskite solar cells, Bulletin of Materials Science, https://doi.org/10.1007/s12034-022-02831-0",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "2",
                            "Details of Research Publication": "Construction of ultrasensitive electrochemical sensor using TiO2 reduced graphene oxide nanofibers nanocomposite for epinephrine detection, Surfaces and Interfaces, Vol. 35, 102455, 2022. ( https://doi.org/10.1016/j.surfin.2022.102455 )",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "2",
                            "Details of Research Publication": "Effect of Annealing Temperature on Morphology, Structural and Magnetic Properties of Electrospun Nickel Oxide Nanofibers, Indian Journal of Science and Technology, 2022, Vol.15, Issue:27, pages 1356-1363, (DOI: 10.17485/IJST/v15i27.430)",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "Solvothermal synthesis of MnCo2O4 microspheres for high-performance electrochemical supercapacitors, Colloids and Surfaces A: Physicochemical and Engineering Aspects, Vol. 640, 128443, 2022. ( https://doi.org/10.1016/j.colsurfa.2022.128443 )",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "Self-assembled three-dimensional intertwined zinc cobaltite nanocubes for high-performance supercapacitors: A solvothermal route, Materials Science in Semiconductor Processing, Vol. 142, 106453, 2022. ( https://doi.org/10.1016/j.mssp.2022.106453 )",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "In-situ TiO2-rGO nanocomposite for low concentration NO gas sensor, ECS Journal of Solid State Science and Technology, Vol. 10, 037008, 2021. ( https://doi.org/10.1149/2162-8777/abeff0 )",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Electrospun TiO2 nanofiber electrodes for high performance supercapacitors, Material Research Express, Vol. 7, pp. 015098, 2020. ( https://doi.org/10.1088/2053-1591/ab688c )",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of polymer concentration and annealing temperature on TiO2-PVP composite nanofiber mats prepared with homemade electrospinning, AIP Conference Proceedings, Vol. 1953, pp.030241, 2018. ( https://doi.org/10.1063/1.5032576 )",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of polymer concentration, needle diameter and annealing temperature on TiO2-PVP composite nanofibers synthesized by electrospinning technique, Ceramics International, Vol. 44, pp. 5266-5272, 2018. ( https://doi.org/10.1016/j.ceramint.2017.12.138 )",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        }
                    ]
                }
            ]
    },

    "Dr. Usuf Rahaman": {
      name: "Dr. Usuf Rahaman",
      designation: "Asst. Professor",
      email: "usufrahaman@mits.ac.in",
      officeAddress: "BSH Block",
      image: "https://mits.ac.in/public/uploads/faculty/Dr. Usuf Rahaman.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Nuclear Physics", "Branch": "Physics", "College Name/University": "Aligarh Muslim University", "Year of Passing": "2022"},
            {"S.No": "2", "Course": "M.Sc.", "Specialization": "Physics", "Branch": "M.Sc.", "College Name/University": "Aligarh Muslim University", "Year of Passing": "2014"},
            {"S.No": "3", "Course": "B.Sc.", "Specialization": "Physics", "Branch": "B.Sc.", "College Name/University": "Aligarh Muslim University", "Year of Passing": "2013"}
          ]
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57202919127"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/284569"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.co.in/citations?user=sxvBKUIAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "3"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Investigation of ground state properties and shape evolution in Hf isotopes using the CDFT approach Published in: Int.J.Mod.Phys.E 35 (2025) 2550043", "Indexing": "SCI", "Article/ Conference/ Book/ Book Chapter": "Article", "Journal Quartile": "Q3"},
            {"S.No": "2", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Microscopic Investigation of Ground State Properties and Shape Evolution in Osmium Isotopes Published in: Braz.J.Phys. 54 (2024) 105", "Indexing": "SCI", "Article/ Conference/ Book/ Book Chapter": "Article", "Journal Quartile": "Q3"},
            {"S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "2", "Details of Research Publication": "Heavy magnetic neutron stars Published in: Astrophys.J. 917 (2021) 1, 46", "Indexing": "SCI", "Article/ Conference/ Book/ Book Chapter": "Article", "Journal Quartile": "Q1"},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "2", "Details of Research Publication": "Rotating neutron stars with quark cores Published in: Phys.Rev.C 103 (2021) 5, 055814", "Indexing": "SCI", "Article/ Conference/ Book/ Book Chapter": "Article", "Journal Quartile": "Q1"},
            {"S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "A study of nuclear radii and neutron skin thickness of neutron-rich nuclei near the neutron drip line Published in: Int.J.Mod.Phys.E 29 (2020) 09, 2050076", "Indexing": "SCI", "Article/ Conference/ Book/ Book Chapter": "Article", "Journal Quartile": "Q3"},
            {"S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Towards a consistent understanding of the exotic nucleus 42Si Published in: Indian J.Pure Appl.Phys. 58 (2020) 5, 418-422", "Indexing": "SCI", "Article/ Conference/ Book/ Book Chapter": "Article", "Journal Quartile": "Q3"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Structural analysis of Z=125 nuclei Published in: Indian J.Pure Appl.Phys. 57 (2019) 09, 630-633", "Indexing": "SCI", "Article/ Conference/ Book/ Book Chapter": "Article", "Journal Quartile": "Q3"},
            {"S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2018-19", "Author Position": "3", "Details of Research Publication": "The role of the elemental nature of  nuclei in neutron-rich nuclei Published in: Int.J.Mod.Phys.E 27 (2018) 07, 1850060", "Indexing": "SCI", "Article/ Conference/ Book/ Book Chapter": "Article", "Journal Quartile": "Q3"}
          ]
        }
      ]
    },

    "Dr. K. Chandrakanta": {
        "name": "Dr. K. Chandrakanta",
        "email": "chandrakantak@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. K. Chandrakanta.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Experimental Condensed Matter Physics",
                            "Branch": "Physics",
                            "College Name/University": "National Institute of Technology, Rourkela",
                            "Year of Passing": "2023"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Physics",
                            "Branch": "Physics",
                            "College Name/University": "Berhampur University, Odisha",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Physics",
                            "Branch": "B.Sc.",
                            "College Name/University": "Berhampur University, Odisha",
                            "Year of Passing": "2013"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Multiferroic Materials applications, Spintronics, Magnetism, Dielectrics, Composite materials, Energy materials, and Storage systems"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57203875326",
                        "Vidwan : https://mits.irins.org/profile/460216",
                        "Google scholar : https://scholar.google.com/citations?user=UVsiNBYAAAAJ&hl=en&oi=ao",
                        "h-Index (As per Scopus Data) : 8"
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "2025 Young scientist International Traveler Grant Award by ANRF for ITG",
                        "2025 Editor of Scientific Report",
                        "2024 Convenor of ICRTEH-2024 International Conference",
                        "2022 Best Oral Award at International conference KIIT Deemed University",
                        "24,23,25 Best Students Feedback Appreciations from MITS"
                    ]
                }
            ]
    },

    "Dr. Alok Barik": {
        "name": "Dr. Alok Barik",
        "email": "dralokbarik@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Alok Barik.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Experimental Condensed Matter Physics",
                            "Branch": "Physics",
                            "College Name/University": "National Institute of Technology, Rourkela",
                            "Year of Passing": "2023"
                        },
                        {
                            "Course": "M.Phil",
                            "Specialization": "Nuclear Physics",
                            "Branch": "Physics",
                            "College Name/University": "Sambalpur University",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Nuclear Physics",
                            "Branch": "M.Sc.",
                            "College Name/University": "Sambalpur University",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Physics, Chemistry & Mathematics",
                            "Branch": "B.Sc.",
                            "College Name/University": "Sambalpur University",
                            "Year of Passing": "2011"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Experimental Condensed Matter Physics and Materials Science"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57193653307",
                        "Vidwan : https://mits.irins.org/profile/522127",
                        "Google scholar : https://scholar.google.com/citations?user=GLCvUiQAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 9"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Critical exponent study of the hexagonal Sr1-xBixFe12O19 compound&rdquo;, J. Alloys Compd. 1021, 179532 (2025), IF-6.3, Q1, https://doi.org/10.1016/j.jallcom.2025.179532",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Investigation of Structural Changes in Bismuth Substituted SrFe12O19 Compound Using In-Situ Raman Spectroscopy&rdquo;, J. Cond. Matt. 02 (02), 110-113 (2024), https://doi.org/10.61343/jcm.v2i02.109",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "5",
                            "Details of Research Publication": "&ldquo;Above room temperature multiferroic and magnetoelectric properties of (1-&Phi;) PZTFT-&Phi; CZFMO particulate composites&rdquo;, J. Am. Ceram. Soc. 108, e20268 (2024), IF-3.8, Q1, https://doi.org/10.1111/jace.20268",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Tuning the Magnetic and Electrical Properties of LaYFe2O6 by Mn Substitution&rdquo;, J. Supercond. Nov. Magn. 37, 1257&ndash;1268, (2024), IF-1.7, Q3, https://doi.org/10.1007/s10948-024-06770-1",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "6",
                            "Details of Research Publication": "&ldquo;Enhanced polishing characteristics of Al-6061 via composite magnetic abrasives (EIP&ndash;Al2O3) assisted hybrid CMMRF process&rdquo;, Wear 205528, 556-557, (2024), IF-6.1, Q1, https://doi.org/10.1016/j.wear.2024.205528",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Extrinsic Effects on the Impedance Spectra of LaYFe2O6&rdquo;, JMEPEG 33, 5340&ndash;5347 (2024), IF-2.3, Q2, https://doi.org/10.1007/s11665-023-08840-2",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "3",
                            "Details of Research Publication": "&ldquo;Sm substitution induced spin reorientation and stabilization of double perovskite structure resulting in enhanced magnetoelectricity in LaYFe2O6&rdquo;, J. Appl. Phys. 135, 104101 (2024), IF-2.7, Q2, https://doi.org/10.1063/5.0179678",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Energy-harvesting performance in a LaYFe2O6/P(VDF-HFP) nanocomposite by boosting the magnetoelectric effect&rdquo;, ACS Appl. Nano Mater. 6, 6841&minus;6848 (2023), IF-5.5, Q1, https://doi.org/10.1021/acsanm.3c00557",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Manganese substitution induced magnetic transformation and magnetoelectricity in SrFe12O19&rsquo;&rsquo;, Phys. Chem. Chem. Phys. 25, 2386 (2023), IF-2.9, Q2, https://DOI: 10.1039/d2cp03057h",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Display of direct and converse magnetoelectric effect in double perovskite YLaFe2O6&rdquo;, J. Appl. Phys. 132, 224107 (2022), IF-2.7, Q2, https://doi.org/10.1063/5.0123357",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Towards room-temperature and above magnetoelectricity in CoFe2O4/Cr2O3 core/shell nanoparticles&rdquo;, J. Phys. D: Appl. Phys. 55, 345001 (2022), IF-3.1, Q1, https://doi.org/10.1088/1361-6463/ac73c3",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Magnetic and electrical transport studies of polycrystalline Sr1-xBixFe12O19&rdquo;, J. Phys. D: Appl. Phys. 55, 265001 (2022), IF-3.1, Q1, https://doi.org/10.1088/1361-6463/ac5a8d",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Indication of above-room temperature magnetoelectricity in CoFe2O4/Cr2O3 nanocomposite&rdquo;, J. Magn. Magn. Mater. 495, 165880 (2020), IF-3, Q2, https://doi.org/10.1016/j.jmmm.2019.165880",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "4",
                            "Details of Research Publication": "&ldquo;Effect of crystal symmetries and phase boundaries on the magnetoelectricity of La2NiMnO6 prepared under ambient conditions&rdquo;, J. Appl. Phys. 127, 214101 (2020), IF-2.7, Q2, https://doi.org/10.1063/5.0003395",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "4",
                            "Details of Research Publication": "&ldquo;La2NiMnO6/poly(vinylidene fluoride) nanocomposites with enhanced magnetoelectric voltage&rdquo;, J. Appl. Phys. 127, 134103 (2020), IF-2.7, Q2, https://doi.org/10.1063/1.5140710",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Enhanced magnetoelectricity in bismuth substituted SrFe12O19 hexaferrite&rdquo;, J. Appl. Phys. 126, 074104 (2019), IF-2.7, Q2, https://doi.org/10.1063/1.5095979",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "4",
                            "Details of Research Publication": "&ldquo;Magnetoresistance in CoFe2O4/BiFeO3 core-shell nanoparticles near room temperature&rdquo;, J. Appl. Phys. 124, 15414 (2018), IF-2.7, Q2, https://doi.org/10.1063/1.5031170",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "4",
                            "Details of Research Publication": "&ldquo;Study of magnetization and magnetoelectricity in CoFe2O4/BiFeO3 core-shell composites&rdquo;, J. Appl. Phys. 123, 064101 (2018), IF-2.7, Q2, https://doi.org/10.1063/1.5008542",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "4",
                            "Details of Research Publication": "&ldquo;Magnetoelectricity in La2NiMnO6 and its PVDF impregnated derivative&rdquo;, J. Appl. Phys. 124, 044101 (2018), IF-2.7, Q2, https://doi.org/10.1063/1.5037736",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "4",
                            "Details of Research Publication": "&ldquo;Measurement of temperature-dependent magnetoelectricity in BiFe(1-x)CoxO3; x = 0, 0.01, 0.02&rdquo;, J. Alloys Compd. 709, 158 (2017), IF-6.3, Q1, http://dx.doi.org/10.1016/j.jallcom.2017.03.118",
                            "Indexing": "SCI",
                            "Article/ Conference/ Book/ Book Chapter": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Cobalt substitution effect on structural and magnetic property of Barium hexaferrite&rdquo;, AIP Conf. Proc. 2995, 020154 (2024). https://doi.org/10.1063/5.0178151",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Investigation of structural and magnetic properties of Sm Substituted LaYFe2O6&rdquo;, AIP Conf. Proc. 2995, 020156 (2024). https://doi.org/10.1063/5.0178152",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Investigation of cation distributions and temperature-dependent magnetic properties of polycrystalline CoFe2O4&rdquo;, AIP Conf. Proc. 2265, 030533 (2020). https://doi.org/10.1063/5.0017171",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "2",
                            "Details of Research Publication": "&ldquo;Evolution of structural and magnetic property of Mn-doped barium hexaferrite&rdquo;, AIP Conf. Proc. 2265, 030510 (2020). https://doi.org/10.1063/5.0017154",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "5",
                            "Details of Research Publication": "&ldquo;Investigation of magnetoelectricity in La2NiMnO6 thin film deposited by pulsed laser deposition&rdquo;, AIP Conf. Proc. 2265, 030297 (2020). https://doi.org/10.1063/5.0017571",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Signature of magnetoelectric coupling in CoFe2O4/Cr2O3 nanocomposites&rdquo;, AIP Conf. Proc. 2115, 030528 (2019). https://doi.org/10.1063/1.5113367",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "4",
                            "Details of Research Publication": "&ldquo;PVDF impregnated La2NiMnO6 as a new form of magnetoelectric materials&rdquo;, AIP Conf. Proc. 2115, 030070 (2019). https://doi.org/10.1063/1.5112909",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "4",
                            "Details of Research Publication": "&ldquo;Magnetic proximity effect in CoFe2O4 @ BiFeO3 core-shell nanoparticles&rdquo;, AIP Conf. Proc. 2115, 030509 (2019). https://doi.org/10.1063/1.5113348",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "29",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "4",
                            "Details of Research Publication": "&ldquo;Effect of bismuth substitution in strontium hexaferrite&rdquo;, AIP Conf. Proc. 1953, 030237 (2018). https://doi.org/10.1063/1.5032572",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "30",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "4",
                            "Details of Research Publication": "&ldquo;An unconventional magnetoresistance in CoFe2O4 core-BiFeO3 shell composite&rdquo;, AIP Conf. Proc. 1942, 110030 (2018). https://doi.org/10.1063/1.5029013",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "31",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "4",
                            "Details of Research Publication": "&ldquo;Effect of Disappearance of Rhombohedral Phase on The Dielectric Properties of Novel BiFe1- xCoxO3&rdquo;, AIP Conf. Proc. 1942, 110044 (2018). https://doi.org/10.1063/1.5029027",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "32",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "4",
                            "Details of Research Publication": "&ldquo;Effect of Sintering Time on the Phase Evolution of Biphasic La2NiMnO6&rdquo;, AIP Conf. Proc. 1832, 140034 (2017). http://dx.doi.org/10.1063/1.4980816",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "33",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "4",
                            "Details of Research Publication": "&ldquo;Setup for magnetoelectric measurement in a wide temperature range&rdquo;, AIP Conf. Proc. 1832, 060009 (2017). http://dx.doi.org/10.1063/1.4980414",
                            "Indexing": "Scopus",
                            "Article/ Conference/ Book/ Book Chapter": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                }
            ]
    },

    "Dr. K. Chandra Mohan": {
        "name": "Dr. K. Chandra Mohan",
        "email": "drkchandramohan@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Chandra Mohan.JPG",
        "designation": "Assoc. Professor &amp; Assistant Dean",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Analytical Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "S. V. University, Tirupati",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Organic Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "S. V. University, Tirupati",
                            "Year of Passing": "2005"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Chemistry-Botany-Zoology",
                            "Branch": "CBZ",
                            "College Name/University": "Nagarjuna University, Guntur",
                            "Year of Passing": "2002"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": [
                        "Electroanalysis of Drugs and Pesticides",
                        "Thin films for photovoltaic cells"
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57190847789",
                        "Vidwan : https://mits.irins.org/profile/273652",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=MaWUXlkAAAAJ",
                        "h-Index (As per Scopus Data) : 3"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021 - 22",
                            "Author Position": "7",
                            "Details of Research Publication": "Evaluation of Photosensing Parameters of Au/polystyrene/n-Si Heterojunction Based Self-Powered Organic Broadband Photodetectors. Silicon (2022) 15:5623&ndash;5633",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020 - 21",
                            "Author Position": "7",
                            "Details of Research Publication": "Investigations on functional properties of Al0.8EuyLa0.2-yTiO3 (y = 0.01 - 0.04) nanoparticles synthesized by hydrothermal method. Surface Review and Letters, Vol. 29, No. 7 (2022) 2250097 (8 pages)",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2020 - 21",
                            "Author Position": "4",
                            "Details of Research Publication": "Statistical analysis of current&ndash;voltage characteristics in Au/Ta 2 O 5/n-GaN Schottky barrier heterojunction using different methods. Applied Physics A, 127 (1), 46, 1-12, 2021",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019 - 20",
                            "Author Position": "2",
                            "Details of Research Publication": "Analysis of Double Gaussian Distribution at the Interface of Ni/Ta2O5/P-Si Schottky Barrier Diodes Using Temperature Dependent Current-Voltage (I-V) Measurements. Silicon, volume 13, pages 65&ndash;71 (2021)",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2016-17",
                            "Author Position": "5",
                            "Details of Research Publication": "ZnS nanoparticles capped with watermelon rind extract and their potential application in dye degradation. Research on Chemical Intermediates, March 2017, Volume 43, Issue 3, pp 1329&ndash;1339",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2014-15",
                            "Author Position": "1",
                            "Details of Research Publication": "Elucidation of electrochemical reduction behavior of dinitro group containing pesticides Chlornidine, Dipropalin and Prodiamine residues in soil, water and agricultural formulations. Journal of the Indian Chemical Society, Vol. 92, April 2015, pp. 467-471",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                },
                {
                    "title": "Research Projects and Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Funded Project /Event": "Self-Funded",
                            "Role": "Local Program Coordinator",
                            "Title of the Project/Event": "A Three &ndash; Days FDP on Introductory Universal Human Values on 5th &ndash; 7th October 2023",
                            "Amount in Rs. /-": "57,835",
                            "Funding Agency": "MITS"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2020-21",
                            "Funded Project /Event": "Self-Funded",
                            "Role": "Co-Convener",
                            "Title of the Project/Event": "International Virtual Conference on Recent Trends in Nanomaterials Synthesis & Applications (RTNSA-2020) July 16 -18, 2020",
                            "Amount in Rs. /-": "-",
                            "Funding Agency": "MITS"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2016 - 17",
                            "Funded Project /Event": "Funded Project",
                            "Role": "PI",
                            "Title of the Project/Event": "&ldquo;Development of ZnO-SnO2 thin films &ndash; characterization and study of their solar cell applications&rdquo;",
                            "Amount in Rs. /-": "2,95,000",
                            "Funding Agency": "UGC SERO"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Sri Madhavapeddi Koteswara Rao Endowment Scholarship for highest marks in Organic Chemistry of B.Sc., SRR & CVR Govt. Degree college, Vijayawada.",
                        "Smt. V. Anasuyamma memorial prize for highest marks in Botany of B.Sc., SRR & CVR Govt. Degree College, Vijayawada."
                    ]
                }
            ]
    },

    "Dr. Gajanan Kunde": {
      name: "Dr. Gajanan Kunde",
      designation: "Assoc. Professor",
      email: "drgajanank@mits.ac.in",
      officeAddress: "BSH Block",
      image: "https://mits.ac.in/public/uploads/faculty/kunde.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Postdoc Fellow", "Specialization": "Chemistry", "Branch": "Chemistry", "College Name/University": "Indian Institute Technology, Delhi, India", "Year of Passing": "July 2017 - June 2023"},
            {"S.No": "2", "Course": "Postdoc Fellow", "Specialization": "Chemistry", "Branch": "Chemistry", "College Name/University": "University of Saskatchewan, Canada", "Year of Passing": "June 2014 - Jan 2015"},
            {"S.No": "3", "Course": "Ph.D.", "Specialization": "Chemistry", "Branch": "Chemistry", "College Name/University": "ICT Mumbai", "Year of Passing": "2014"},
            {"S.No": "4", "Course": "M.Sc.", "Specialization": "Chemistry", "Branch": "Chemistry", "College Name/University": "SGB Amravati University", "Year of Passing": "1995"},
            {"S.No": "5", "Course": "B.Sc.", "Specialization": "Chemistry", "Branch": "Chemistry", "College Name/University": "SGB Amravati University", "Year of Passing": "1993"}
          ]
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=7004126799"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/655135"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?hl=en&user=Km2B3GsAAAAJ&view_op=list_works&sortby=pubdate"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "7"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "Synthesis of mesoporous rebar MWCNT/Alumina composite (RMAC) nodules for the effective removal of Methylene blue and Cr (VI) from an aqueous medium. https://doi.org/10.1016/j.jhazmat.2019.03.099", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "2", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "1", "Details of Research Publication": "Green strategy for the synthesis of mesoporous, free standing MAl2O4 (M= Fe, Co, Ni, Cu) spinel films by sol–gel method. Materials Science and Engineering: B, 271, 115244.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "1", "Details of Research Publication": "Application of sol-gel assisted ultrasound-induced atomisation in the mesostructuring of nickel aluminate UF membranes, Microporous and Mesoporous Materials, https://doi.org/10.1016/j.micromeso.2021.111299. (JIF 4.7) Q1", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "1", "Details of Research Publication": "Modified EISA synthesis of NiAl2O4/MWCNT composite mesoporous free-standing film as a potential electrochemical capacitor material, Journal of Alloys and Compounds, 856, 158019. DOI: https://doi.org/10.1016/j.jallcom.2020.158019. (JIF 6.3) Q1", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "1", "Details of Research Publication": "Eco-designed iron aluminate (FeAl2O4) freestanding mesoporous film and supported ultrafiltration membrane for wastewater treatment. Journal of Environmental Chemical Engineering, 104201. DOI:https://doi.org/10.1016/j.jece.2020.104201. (JIF 7.2). Q1", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "Synergistic effect of control parameters and morphology on synthesis and performance of the Al2O3/MWCNT composite as a promising capacitor material. Journal of Sol-Gel Science DOI:https://doi.org/10.1007/s10971-019-05158-1. (JIF 3.2) Q1", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "1", "Details of Research Publication": "Environmentally benign synthesis of mesoporous cobalt aluminate nodules as catalyst and its effect on the selective oxidation of benzhydrol to benzophenone. Journal of Environmental Chemical Engineering, 7(1), 102834. DOI: https://doi.org/10.1016/j.jece.2018.102834. (JIF 7.2) Q1", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2016", "Author Position": "1", "Details of Research Publication": "Sol–gel synthesis and characterization of defect-free alumina films and its application in the preparation of supported ultrafiltration membranes. Journal of Sol-Gel Science and Technology, 77(1), 266-277. DOI: https://doi.org/10.1007/s10971-015 3852-8. (JIF 3.2) Q1", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2015", "Author Position": "1", "Details of Research Publication": "Green approach in the sol–gel synthesis of defect free unsupported mesoporous alumina films. Microporous and Mesoporous Materials, 224, 43-50. DOI: https://doi.org/10.1016/j.micromeso.2015.10.045. (JIF 4.7) Q1", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2015", "Author Position": "1", "Details of Research Publication": "Synthesis, characterization and application of iron aluminate nodules in advanced Fenton’s oxidation process. Journal of Environmental Chemical Engineering, 3(3), 2010-2021. DOI:https://doi.org/10.1016/j.jece.2015.07.013. (JIF 7.2) Q1", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "1", "Details of Research Publication": "Industrial innovation through sustainable materials,‘in MRW Handbook of Smart Materials, Technologies, and Devices - Applications of Industry 4.0’, Editors, Hussain C. M., Sia P. D., Springer, (https://doi.org/10.1007/978-3-030-58675-1_142-1).", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "\"Role and Mechanism of Membrane Separators in Supercapacitors: Synthesis and Performance of Different Separator Materials.\" Nanostructured Materials for Energy Storage 4 (2024): 1571-1606.", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "13", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "2", "Details of Research Publication": "Recent Advances in the Catalytic Applications of Magnetic Nanomaterials. Emerging Applications of Low Dimensional Magnets, 9-31.", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "14", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "2", "Details of Research Publication": "Assessment of performance of photocatalytic nanostructured materials with varied morphology based on reaction conditions. Molecules, 27(22), 7778.  (JIF: 4.6) Q2", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "15", "Publication Affiliation": "Others", "Academic Year": "2008", "Author Position": "2", "Details of Research Publication": "Physico–chemical studies of pollutant in waste water of Nashik express highway, thane region, Journal of Industrial Pollution Control, 24 (2) (2008) pp 183-185. (JIF 2.82) Q2", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q2"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "Others", "Academic Year": "2014", "Application ID": "Indian Patent (Granted) No. 369729", "Title of the Patent": "Environmentally benign heterogeneous catalyst for Fenton process", "Status": "Granted"},
            {"S.No": "2", "Affiliation": "Others", "Academic Year": "2012", "Application ID": "Indian Patent (Granted) No. 395768", "Title of the Patent": "System for Production of Membrane", "Status": "Granted"},
            {"S.No": "3", "Affiliation": "Others", "Academic Year": "2012", "Application ID": "Indian Patent (Granted) No. 396067", "Title of the Patent": "Method for the Production of Membrane", "Status": "Granted"},
            {"S.No": "4", "Affiliation": "Others", "Academic Year": "2013", "Application ID": "International Patent WO2013/164840A2", "Title of the Patent": "System and Method for Production of Membranes", "Status": "Published"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "2013, Best paper award at international conference, Aluminas-2013, CGCRI Kolkata.",
            "2017 Outstanding reviewer award Journal of Environmental Chemical Engineering (Elsevier)",
            "2018 Outstanding reviewer award Journal of Hazardous Materials (Elsevier)"
          ]
        }
      ]
    },

    "Dr. P. Amaladass": {
        "name": "Dr. P. Amaladass",
        "email": "amaladass@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Amaladass.JPG",
        "designation": "Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Research professor",
                            "Specialization": "Organic Chemistry",
                            "Branch": "Polymeric materials",
                            "College Name/University": "Korea University, South Korea",
                            "Year of Passing": "2018"
                        },
                        {
                            "Course": "Post-doctoral Fellow",
                            "Specialization": "Organic Chemistry",
                            "Branch": "Organic functional Materials",
                            "College Name/University": "Dankook University, South Korea",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "Post-doctoral Fellow",
                            "Specialization": "Organic Chemistry",
                            "Branch": "Polymeric materials",
                            "College Name/University": "Seoul National University, South Korea",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "Post-doctoral Fellow",
                            "Specialization": "Organic Chemistry",
                            "Branch": "Organic functional Materials",
                            "College Name/University": "Nanyang technological University, Singapore.",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "Post-doctoral Fellow",
                            "Specialization": "Organic Chemistry",
                            "Branch": "Organic functional Materials",
                            "College Name/University": "Weizmann Institute of Science, (Rehovot, Israel).",
                            "Year of Passing": "2009"
                        },
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Chemistry",
                            "Branch": "Organic Chemistry",
                            "College Name/University": "University of Madras, Chennai",
                            "Year of Passing": "2007"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "Loyola College, Chennai, India.",
                            "Year of Passing": "2001"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "Loyola College, Chennai, India.",
                            "Year of Passing": "1999"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Organic Chemistry"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=8875240900",
                        "Vidwan : https://mits.irins.org/profile/281183",
                        "Google scholar : https://scholar.google.com/citations?user=MsAUUu4AAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 20"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "5",
                            "Details of Research Publication": "Recent synthetic strategies for the functionalization of fused bicyclic heteroaromatics using organo-Li, -Mg and -Zn reagents Chemical Society Reviews Page: 11045-11099, Volume: 53, Issue: 22. Published: Oct. 4, 2024",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "5",
                            "Details of Research Publication": "Synthesis of carbon quantum dots derived from mango-leaves (M&minus;CQDs): M&minus;CQDs/ZnO nanorods heterostructure thin films for efficient self-powered UV photodetector applications Applied Surface Science Page: 162032, Volume: 685, Published: Dec. 5, 2024.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "",
                            "Details of Research Publication": "A Review on Functionalization of Benzo\u20105,6\u2010Fused Bicyclic Heteroaromatic Compounds Chemistry&ndash;An Asian Journal, Published: July 16, 2024.",
                            "Indexing": "SCI",
                            "Publication": "Review Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "A Comprehensive Exploration of Synthetic Methods for Functionalized Benzo[c]]Thiophene Derivatives and Their Material Science Applications Asian Journal of Organic Chemistry (SCI ) Volume: 14, Issue: 6. Published: March 25, 2025.",
                            "Indexing": "SCI",
                            "Publication": "Review Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Recent synthetic strategies for the construction of functionalized carbazoles and their heterocyclic motifs enabled by Lewis acids RSC Advances Page: 32596-32626, Volume: 13, Issue: 46. Published: Nov. 6, 2023.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "5",
                            "Details of Research Publication": "Nitrogen-doped carbon quantum dots decorated ZnO nanorods array film for efficient UV photodetector applications Journal of Materials Science: Materials in Electronics. Volume: 35, Issue: 1. Published: Jan. 8, 2024",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "5",
                            "Details of Research Publication": "Improved ultraviolet photodetector performances using solution-processed nitrogen-doped carbon quantum dots/ZnO hybrid thin films Thin Solid Films Page: 140221, Volume: 790, Published: Jan. 14, 2024",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "5",
                            "Details of Research Publication": "Transparent nitrogen-doped carbon quantum dots/ZnO hybrid thin films: A study on structural and enhanced UV emission Applied Surface Science Page: 155664, Volume: 611, Published: Nov. 13, 2022.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "5",
                            "Details of Research Publication": "Synthesis, Molecular Docking Study and Biological Evaluation of Novel &gamma;-Carboline Derivatives of Latrepirdine (Dimebon) as Potent Anticancer Agents Molecules Page: 4965, Volume: 28, Issue: 13. Published: June 24, 2023.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "3",
                            "Details of Research Publication": "Polymethacrylic acid functionalised with dihydroxy benzene as an adsorbent for the removal of Malachite Green dye IOP Conference Series Materials Science and Engineering Page: 012020, Volume: 1070, Issue: 1. Published: Feb. 2, 2021",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "3",
                            "Details of Research Publication": "Anticorrosion activities of polymethacrylic acid and grafted/modified polymethacrylic acid on pure aluminium in acid medium Materials Today: Proceedings Page: 1184-1194, Volume: 42, Published: Feb. 8, 2021",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "4",
                            "Details of Research Publication": "Corrosion Inhibition Efficiencies of Polymethacrylic Acid and Substituted Polymethacrylic Acid on Aluminium in 0.3M NaOH ECS Journal of Solid State Science and Technology Page: 101004, Volume: 10, Issue: 10. Published: Oct. 11, 2021",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "5",
                            "Details of Research Publication": "Improved hole injection/extraction using PEDOT:PSS interlayer coated onto high temperature annealed ITO electrode for efficient device performances Superlattices and Microstructures Page: 106953, Volume: 156, Published: June 7, 2021",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "5",
                            "Details of Research Publication": "Stereoselective synthesis, structural determination, computational studies and antimicrobial activity of novel class of spiropyrroloquinoxaline engrafted ferrocenoindole hybrid heterocycle Journal of Molecular Structure Page: 132131, Volume: 1252, Published: Dec. 9, 2021",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "Synthesis of a new wide-bandgap conjugated copolymer with 3-trifluoromethylthiophene monomer and Its application to non-fullerene polymer solar cells Molecular Crystals and Liquid Crystals Page: 30-37, Volume: 686, Issue: 1. Published: Oct. 10, 2019.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "2",
                            "Details of Research Publication": "Preparing DNA-mimicking multi-line nanocaterpillars via in situ nanoparticlisation of fully conjugated polymers Polymer Chemistry. Page: 1422-1428, Volume: 7, Issue: 7. Published: Jan. 19, 2016",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "2",
                            "Details of Research Publication": "One-pot synthesis of nanocaterpillar structures via in situ nanoparticlization of fully conjugated poly(p-phenylene)-block-polythiophene Chem. Commun. Page: 7945-7948, Volume: 50, Issue: 59. Published: June 13, 2014",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013",
                            "Author Position": "2",
                            "Details of Research Publication": "Nanostar and Nanonetwork Crystals Fabricated by in Situ Nanoparticlization of Fully Conjugated Polythiophene Diblock Copolymers. Journal of the American Chemical Society Page: 17695-17698, Volume: 135, Issue: 47. Published: Nov. 13, 2013",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011",
                            "Author Position": "3",
                            "Details of Research Publication": "Enhancement of Photogenerated Electron Transport in Dye\u2010Sensitized Solar Cells with Introduction of a Reduced Graphene Oxide&ndash;TiO 2 Junction Chemistry &ndash; A European Journal Page: 10832-10837, Volume: 17, Issue: 39. Published: Aug. 23, 2011",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011",
                            "Author Position": "1",
                            "Details of Research Publication": "Facile synthesis and characterization of new polymerizable conjugated 2,5-di(selenophen-2-yl)pyrroles and 2,5-difuranylpyrroles Tetrahedron Letters Page: 711-714, Volume: 52, Issue: 6. Published: Feb. 9, 2011 (Verified)",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011",
                            "Author Position": "4",
                            "Details of Research Publication": "Synthesis, characterization and application of trans-D&ndash;B&ndash;A-porphyrin based dyes in dye-sensitized solar cells Journal of Photochemistry and Photobiology A: Chemistry Page: 219-225, Volume: 218, Issue: 2-3. Published: Feb. 25, 2011",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010",
                            "Author Position": "2",
                            "Details of Research Publication": "Aryl/hetero-arylethyne bridged dyes: the effect of planar &pi;-bridge on the performance of dye-sensitized solar cells New J. Chem. Page: 127-136, Volume: 35, Issue: 1. Published: Oct. 18, 2010.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2010",
                            "Author Position": "2",
                            "Details of Research Publication": "Studies on the Fluorescence of Tris-(8-hydroxyquinoline)Aluminum and the Effect of Light Exposure Polymer-Plastics Technology and Engineering Page: 1289-1291, Volume: 49, Issue: 12. Published: Sept. 15, 2010.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2009",
                            "Author Position": "2",
                            "Details of Research Publication": "Studies on influence of light on fluorescence of Tris-(8-hydroxyquinoline)aluminum thin films Applied Surface Science Page: 5760-5763, Volume: 255, Issue: 11. Published: March 15, 2009.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2008",
                            "Author Position": "1",
                            "Details of Research Publication": "Synthesis and characterization of 1,3-diarylbenzo[c]selenophenes Tetrahedron , Page: 7992-7998, Volume: 64, Issue: 34. Published: Aug. 13, 2008",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2008",
                            "Author Position": "3",
                            "Details of Research Publication": "Synthesis and characterization of 9,9-dialkylfluorene capped benzo[c]thiophene/benzo[c]selenophene analogs as potential OLEDs Tetrahedron Letters Page: 4792-4795, Volume: 49, Issue: 32. Published: Aug. 4, 2008",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2007",
                            "Author Position": "1",
                            "Details of Research Publication": "Synthesis and Characterization of Benzannelated Thienyl Oligomer/European Journal of Organic Chemistry, Page: 3798-3810, Volume: 2008, Issue: 22. Published: July 23, 2008.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "28",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2007",
                            "Author Position": "1",
                            "Details of Research Publication": "Pd-mediated C&ndash;H arylation of EDOT and synthesis of push&ndash;pull systems incorporating EDOT Tetrahedron Page: 10363-10371, Volume: 63, Issue: 41. Published: Oct. 8, 2007",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "29",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2007",
                            "Author Position": "2",
                            "Details of Research Publication": "Synthesis of mono- and bis-arylated 3,4-(ethylenedioxythiophenes) via direct palladium catalyzed arylation reactions Tetrahedron Letters, Page: 539-544, Volume: 48, Issue: 4. Published: Jan. 22, 2007.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "30",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2007",
                            "Author Position": "2",
                            "Details of Research Publication": "Synthesis of end-blocked thienyl oligomers incorporating benzo[c]thiophene Tetrahedron Letters Page: 779-784, Volume: 48, Issue: 5. Published: Jan. 29, 2007.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "31",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2007",
                            "Author Position": "3",
                            "Details of Research Publication": "Synthesis of 1,3-disubstituted benzo[c]thiophene analogs containing benzo[b]thiophene/benzo[b]pyrrole Tetrahedron Letters, Page: 8715-8720, Volume: 48, Issue: 49. Published: Dec. 3, 2007",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "32",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2006",
                            "Author Position": "2",
                            "Details of Research Publication": "Study on photoluminescence from tris-(8-hydroxyquinoline) aluminum thin films and influence of light Applied Physics Letters Volume: 89, Issue: 8. Published: Aug. 21, 2006",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "33",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2006",
                            "Author Position": "2",
                            "Details of Research Publication": "3-(4-Hexyloxyphenyl)isobenzofuran-1(3 H )-one Acta Crystallographica Section E Page: o1941-o1943, Volume: 62, Issue: 5. Published: April 12, 2006.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "34",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2005",
                            "Author Position": "1",
                            "Details of Research Publication": "Synthesis of 1,3-diaryl benzo[c]thiophenes Tetrahedron Letters Page: 4225-4229, Volume: 46, Issue: 24. Published: June 13, 2005",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "35",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2005",
                            "Author Position": "1",
                            "Details of Research Publication": "Synthesis of 1,3-diarylbenzo[c]selenophenes Tetrahedron Letters Page: 7201-7204, Volume: 46, Issue: 42. Published: Oct. 17, 2005",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "36",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2005",
                            "Author Position": "2",
                            "Details of Research Publication": "1,3-Bis(4-methoxyphenyl)-2-benzothiophene Acta Crystallographica Section E Page: o49-o51, Volume: 62, Issue: 1. Published: Dec. 7, 2005",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "37",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2005",
                            "Author Position": "2",
                            "Details of Research Publication": "3-(Anthracen-9-yl)-3 H -isobenzofuran-1-one Acta Crystallographica Section E Page: o55-o57, Volume: 62, Issue: 1. Published: Dec. 7, 2005",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "38",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2006",
                            "Author Position": "2",
                            "Details of Research Publication": "3-(4-Hexyloxyphenyl)isobenzofuran-1(3 H )-one Acta Crystallographica Section E Page: o1941-o1943, Volume: 62, Issue: 5. Published: April 12, 2006.",
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
                            "Academic Year": "2025-26",
                            "Application ID": "",
                            "Title of the Patent": "Chalcone-Triazine based metal complexes and their applications as Antioxidant and Anti-Diabetic Agents",
                            "Status": "Filed"
                        }
                    ]
                }
            ]
    },

    "Dr. Renjith Bhaskaran": {
        "name": "Dr. Renjith Bhaskaran",
        "email": "drrenjithb@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/renjithbhaskar.png",
        "designation": "Asst. Professor &amp; Head",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Postdoctoral Research Associate",
                            "Specialization": "Theoretical Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "Texas A&M University",
                            "Year of Passing": "2017"
                        },
                        {
                            "Course": "Research Associate",
                            "Specialization": "Theoretical Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "IISc. Bangalore",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Theoretical Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "Indian Institute of Technology, Guwahati,Assam",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "Mahatma Gandhi University, Kottayam, Kerala",
                            "Year of Passing": "2008"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "Union Christian College, Aluva, Kerala",
                            "Year of Passing": "2006"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Computational Chemistry & Biology"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=55823780200",
                        "Vidwan : https://mits.irins.org/profile/272622",
                        "Google scholar : https://scholar.google.co.in/citations?user=a3LwagUAAAAJ",
                        "h-Index (As per Scopus Data) : 8"
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
                            "Details of Research Publication": "Rhodamine B Functionalised Schiff Base Chemosensor for Effective Detection of Cu (II) Ions in Water Sample, S. S. Dash, P. K. Kar, R. Bhaskaran, J. Fluoresc. (2025).",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "Selective Detection of Water in Methanol by 2, 4-Dihydroxy Benzaldehyde Schiff Base and Its Applications: An Experimental and Theoretically Approach, P. P. Dash, S. Mishra, S. Puri, R. Bhaskaran, S. K. Sahoo, B. R. Jali, J. Fluoresc. (2025)",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "8",
                            "Details of Research Publication": "Thiourea Based Fluorescent Chemosensor for Selective Detection of Mercury Ions in Real Samples and Live Cells Imaging, P. Mohanty, P. P. Dash, S. Mishra, S. Naik, M. Mishra, P. Behera, M. Barik, R. Bhaskaran, S. K. Sahoo, A. K. Barick, P. Mohapatra, B. R. Jali, J. Mol. Struct., 1324, 140817 (2025).",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "A Novel Rhodamine Functionalized Schiff Base Type Ratiometric Fluorescent Chemosensor for the Sensing of Hg2+ Ions; Experimental and Theoretical Approach, S. S. Dash, P. Mohanty, P. K. Kar, R. Bhaskaran, J. Fluoresc. (2025).",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "9",
                            "Details of Research Publication": "A Schiff-Base Molecular Probe for Selective Fluorescence Sensing of Maleic Acid with Recognition of Maleic Acid in Food Additives and Cell Imaging, S. Mishra, P. P Dash, P. Mohanty, M. K. Panda, M. Mohanty, P. K. Nanda, S. K. Behera, S. K. Sahoo, R. Bhaskaran, B. R. Jali, J. Fluoresc. (2024).",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "9",
                            "Details of Research Publication": "Unveiling Fluorescence Spectroscopy, Molecular Docking and Dynamic Simulations: Interactions Between Protein and 2, 4-Dinitrophenylhydrazine Schiff Base, T. K. Rana, P. Mohanty, P. P. Dash, S. Mishra, S. S. Tripathi, P. Mohapatra, A. K. Barick, P. K. Jena, R. Bhaskaran, Md. S. Khan, Md. R. Khan, L. Behera, B. R. Jali, J. Fluoresc. (2024).",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Thiourea Functionalised Receptor for Selective Detection of Mercury Ions and its Application in Serum Sample, P. Mohanty, P. P. Dash, S. Mishra, R. Bhaskaran, B. R. Jali, J. Fluoresc. (2024).",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Detecting Moisture in Building Materials and Commercial Food adducts by 2-Hydroxy-naphthaldehyde Derived Chromo-Fluorogenic Chemosensor, P. P. Dash, P. Mohanty, S. Mishra, R. Bhaskaran, S. K. Sahoo, P. Mohapatra, A. K. Barick, B. R. Jali, J. Fluoresc. (2024).",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Lowest electronic states of neutral and ionic LiN, M. D. Mohammadi, R. Bhaskaran, H. Y. Abdullah, H. H. Abdallah, G. Biskos, S. Bhowmick, Int. J. Quantum Chem, 124, e27288 (2023).",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "9",
                            "Details of Research Publication": "A highly selective Schiff base fluorescent sensor for Zn2+, Cd2+ and Hg2+ based on 2,4-dinitrophenylhydrazine derivative, R. Behura, P. Mohanty, G. Sahu, P. P. Dash, S. Behera, R. Dinda, P. R. Hota, H. Sahoo, R. Bhaskaran, A. K. Barick, P. Mohapatra, B. R. Jali, Inorg. Chem. Comm, 154, 110959, 2023",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "1",
                            "Details of Research Publication": "Low Energy Electron Interaction with the Phosphate Group in DNA Molecule and the Characteristics of Single Strand Break Pathways, R. Bhaskaran and M. Sarma, J. Phys. Chem. A, 119, 10130, 2015",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "1",
                            "Details of Research Publication": "Role of Shape Resonance State During Low-Energy Electron-Induced Single Strand Breaks In 2&prime;-Deoxycytidine-5&prime;-Monophosphate, R. Bhaskaran and M. Sarma, Phys. Chem. Chem. Phys., 17, 15250, 2015",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "1",
                            "Details of Research Publication": "Low Energy Electron Induced Cytosine Base Release in 2&prime;-Deoxycytidine-3&prime;-Monophosphate via Glycosidic Bond Cleavage: A Time-Dependent Wavepacket Study, R. Bhaskaran and M. Sarma, J. Chem. Phys., 141, 104309, 2014",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013",
                            "Author Position": "1",
                            "Details of Research Publication": "Effect of Quantum Tunneling on Single Strand Breaks in a Modeled Gas Phase Cytidine Nucleotide Induced by Low Energy Electron: A Theoretical Approach, R. Bhaskaran and M. Sarma, J. Chem. Phys., 139, 045103, 2013",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2012",
                            "Author Position": "2",
                            "Details of Research Publication": "Investigation of Dissociative Electron Attachment to 2&prime;-Deoxycytidine-3&prime;-Monophosphate Using DFT Method and Time Dependent Wave Packet Approach, S. Bhowmick, R. Bhaskaran, M. K. Mishra and M. Sarma, J. Chem. Phys., 137, 064310, 2012",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011",
                            "Author Position": "1",
                            "Details of Research Publication": "Low-Energy Electron-Induced Single Strand Breaks in 2&prime;-Deoxycytidine-3&prime;-Monophosphate Using the Local Complex Potential Based Time-Dependent Wave Packet Approach, R. Bhaskaran, S. Bhowmick, M. K. Mishra and M. Sarma, J. Phys. Chem. A, 115, 13753, 2011",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                },
                {
                    "title": "Research Projects and Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2019-2020",
                            "Funded Project /Event": "Funded Project",
                            "Role": "P.I.",
                            "Title of the Project/Event": "Modelling Potential Radiosensitizer Molecules for Chemotherapy",
                            "Amount in Rs. /-": "14,50,000",
                            "Funding Agency": "Dassault Syst&egrave;mes Fondation"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "International Travel Support (ITS) received from DST, India on 01/09/2013 to participate in &ldquo;European Summer School in Quantum Chemistry&rdquo; held at Italy",
                        "Graduate Aptitude Test in Engineering (GATE) fellowship received from MHRD, India on 15/03/2009 for pursuing PhD program in Chemistry"
                    ]
                }
            ]
    },

    "Dr. M. Balaji": {
      name: "Dr. M. Balaji",
      designation: "Asst. Professor",
      email: "drbalajim@mits.ac.in",
      officeAddress: "BSH Block",
      image: "https://mits.ac.in/public/uploads/faculty/Mr. T. Balaji.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Post-Doctoral Fellow", "Specialization": "Nanocatalysis", "Branch": "Chemistry", "College Name/University": "Pusan National University, South Korea", "Year of Passing": "2023"},
            {"S.No": "2", "Course": "Post-Doctoral Fellow", "Specialization": "Chemistry", "Branch": "Chemistry", "College Name/University": "University of Ulsan, South Korea", "Year of Passing": "2021"},
            {"S.No": "3", "Course": "Post-Doctoral Fellow", "Specialization": "Nanocatalysis", "Branch": "Chemistry", "College Name/University": "Pusan National University, South Korea", "Year of Passing": "2016"},
            {"S.No": "4", "Course": "Ph.D.", "Specialization": "Chemistry", "Branch": "Chemistry", "College Name/University": "Pusan National University, South Korea", "Year of Passing": "2015"},
            {"S.No": "5", "Course": "M.Sc.", "Specialization": "Chemistry", "Branch": "Chemistry", "College Name/University": "C. Abdul Hakeem College (University of Madras), Vellore, Tamil Nadu, India", "Year of Passing": "2003"},
            {"S.No": "6", "Course": "B.Sc.", "Specialization": "Chemistry", "Branch": "Chemistry", "College Name/University": "C. Abdul Hakeem College (University of Madras), Vellore, Tamil Nadu, India", "Year of Passing": "2001"}
          ]
        },
        {
          title: "Research Areas",
          content: "Morphology dependent nanocatalysis, Metal Nanoparticles for Organic Transformations, and Photocatalysis"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=55761265700"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/288057"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?hl=en&user=o7TTthAAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "10"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "1", "Details of Research Publication": "Surfactant-Free Synthesis of Uniform Cu3Pd Alloy Nanoparticles on Graphene for Enhanced Domino Sonogashira Cyclization.  Langmuir 2025, 41, 21, 13637–13644", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "1", "Details of Research Publication": "Controlled Synthesis and Uniform Anchoring of Hollow CuxO Nanocubes on Carbon Nanofiber for Enhanced Se(S)–Se(S) Bond Activation Inorg. Chem. 2023, 62, 31, 12573–12581", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2022", "Author Position": "1", "Details of Research Publication": "A simple synthesis of surfactant-free polycrystalline CuO nanoparticles supported on carbon nanofibers for regioselective hydroboration of alkynes RSC Adv., 2022,12, 24998-25005", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "Others", "Academic Year": "2015", "Application ID": "US14/862,632", "Title of the Patent": "METHOD OF PREPARING CORE-SHELL COPPER NANOPARTICLES IMMOBILIZED ON ACTIVATED CARBON AND METHOD OF PREPARING CHALCOGENIDE COMPOUND USING NANOPARTICLES AS CATALYST", "Status": "Granted"}
          ]
        }
      ]
    },

    "Dr. K. V. Vivekananda": {
        "name": "Dr. K. V. Vivekananda",
        "email": "drvivekanandakv@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/90949dbc63eb24468711fe5cf72dadcb.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Post Doctoral Research",
                            "Specialization": "Radiation induced bio-degradable polymers",
                            "Branch": "Polymer Chemistry",
                            "College Name/University": "Bhabha Atomic Research Centre, Mumbai, India",
                            "Year of Passing": "2024"
                        },
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Supramolecular Chemistry of Pt/Pd Complexes",
                            "Branch": "Organometallic Chemistry",
                            "College Name/University": "Bhabha Atomic Research Centre, Mumbai, India",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Organic Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "Andhra University",
                            "Year of Passing": "2007"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Mathematics, Physics, Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "Andhra University",
                            "Year of Passing": "2005"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Supramolecular Chemistry, Organometallics, Homogenous Catalysis, Anti-cancer activity, Radiation induced Polymers, Hydrogels, Multiferroics & Ferroelectrics"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=55857183100",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/186061",
                        "Google scholar : https://scholar.google.com/citations?user=wSa38ikAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 10"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "2",
                            "Details of Research Publication": "Anisotropic stressed radiation induced synthesis of N-Isopropylacrylamide gel: Effect on swelling extent and types of waters.Radiation Physics & Chemistry, 2025 (232) 112647",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "Anticancer Activity of Pt-Selenolate Metallacycles.New J. Chem., 2022 (46) 23198-23212",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Enhanced magnetoelectric coupling in Bi0.95Mn0.05FeO3&ndash;Ni0.5Zn0.5Fe2O4 nanocomposites for spintronic applications.Applied Physics A, 2021 (127) 187",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "3",
                            "Details of Research Publication": "Enhanced dielectric and magnetic properties in Mn doped Bismuth Ferrite Multiferroic Nanoceramics. Applied Physics A, 2020 (126) 557",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "2",
                            "Details of Research Publication": "Superparamagnetism in BMFO &ndash; NZFO multiferroic nanocomposites. Physica-B: Condensed Matter, 571 (2019) 5-9",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Supramolecular Pt and Pd complexes of 4,4&rsquo;-dipyridylditelluride/diselenide ligands through self-assembly. Eur. J. Inorg. Chem., (2018) 3579&ndash;3586",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "2",
                            "Details of Research Publication": "Reactivity of 4-Pyridyltellurolate with Pd(II)/Pt(II) Complexes.ChemistrySelect, 2 (2017) 5073&ndash;5079",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "3",
                            "Details of Research Publication": "Macrocyclic Pd(II) dithiolate complexes as catalysts in Heck reactions. Tetrahedron Letters, 58 (2017) 25-29",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "2",
                            "Details of Research Publication": "Hemilabile silver(I) complexes containing pyridyl chalcogenolate (S, Se) ligands and their utility as molecular precursors for silver chalcogenides. CrystEngComm., 17 (2015) 4367-4376",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "1",
                            "Details of Research Publication": "Supramolecular macrocyclic Pd(II) and Pt(II) squares and rectangles with aryldithiolate ligands and their unprecedented catalytic activity in Suzuki C&minus;C coupling reaction. Inorg. Chem., 54 (2015) 10153-10162",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "2",
                            "Details of Research Publication": "Silver(I) coordination polymer of 4,4-dipyridyl selenide and its solvothermolysis. International Journal of Chemistry, 3 (3) (2014) 263-268",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "1",
                            "Details of Research Publication": "Supramolecular 3-/4-mercaptobenzoic acid complexes of palladium (II) and platinum (II) stabilized by hydrogen bonding. Eur. J. Inorg. Chem., (2014) 2153-2161",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013",
                            "Author Position": "1",
                            "Details of Research Publication": "Syntheses of Pd(II)/Pt(II) complexes with non-chelating 4-pyridylselenolate ligand ranging from mononuclear to macrocyclic structures and their utility as catalysts in Suzuki C&minus;C coupling reaction. Dalton Trans., 42 (2013) 14158-14167",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Awarded NPTEL Elite Certificate for successfully completing the course of &ldquo;Mechanisms in Organic Chemistry&rdquo; certified by IIT Bombay.",
                        "Rewarded as the &ldquo;First ever research scholar to present yearly work of all the Scientists from Chemistry Division&rdquo; during Annual review meeting of BARC, Department of Atomic Energy.",
                        "Best Poster award in &ldquo;4th DAE-BRNS Interdisciplinary Symposium on Materials Chemistry&rdquo; during 11th-15th December 2012, held at Bhabha Atomic Research Centre, Mumbai.",
                        "Best Poster award in &ldquo;5th DAE-BRNS Interdisciplinary Symposium on Materials Chemistry&rdquo; during 9th-13th December 2014, held at Bhabha Atomic Research Centre, Mumbai.",
                        "Got the 1st prize in Chemistry interviews conducted at Coastal Andhra Zonal Level during Brain Share Events at graduation level, 2004.",
                        "Got the 1st prize in Chemistry Seminars conducted at Coastal Andhra Zonal Level during Brain Share Events at graduation level, 2004.",
                        "ot the First prize in District Level in Maths, Physics and Chemistry Talent tests conducted by District Science Association at graduation level, 2004."
                    ]
                }
            ]
    },

    "Dr. Rajaram. R": {
        "name": "Dr. Rajaram. R",
        "email": "drrajaramr@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Rajaram.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Post-doctoral Fellow",
                            "Specialization": "Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "Indian Institute of Technology, Madras",
                            "Year of Passing": "Jan 2021 to July 2023"
                        },
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "CSIR-Central Electrochemical Research Institute, Karaikudi",
                            "Year of Passing": "2018"
                        },
                        {
                            "Course": "M.S.",
                            "Specialization": "Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "The American College, Madurai",
                            "Year of Passing": "2012"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "The American College, Madurai",
                            "Year of Passing": "2010"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Organic Chemistry"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=56195519100",
                        "Vidwan : https://mits.irins.org/profile/460253",
                        "Google scholar : https://scholar.google.com/citations?user=zu3Cs-kAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 11"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "Synergistic Effect of Graphene/NiO-&beta;-Ni(OH)2-CuO Cathode and rGO/NiO-V2O5 Anode for Asymmetric Supercapacitors (ACS Energy & Fuels, 2025, 39, 40, 19476&ndash;19495) https://doi.org/10.1021/acs.energyfuels.5c01923",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "2",
                            "Details of Research Publication": "Molecular and Electronic Structure of 5-coordinated [Fe(CO)\u2084(X\u2082)] Complexes: A Quantum Chemical Study (Inorganica Chimica Acta 588 (2025) 122879) https://doi.org/10.1016/j.ica.2025.122879",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Recent advances in the development of various electrocatalysts for CO2 reduction Reactions: A review (Journal of Alloys and Compounds, 1038 (2025) 182601) https://doi.org/10.1016/j.jallcom.2025.182601",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Carbon embedded Ru/NiO&minus;CuO cathode and rGO/&alpha;&minus;Co3O4 anode for synergetic charge transfer for high-performance solid-state asymmetric supercapacitor. (ACS Energy & Fuels, 2024, 38, 16, 15744-15761) https://doi.org/10.1021/acs.energyfuels.4c01570",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Bismuth tungstate nanocomposites for simultaneous detection of hydroquinone and resorcinol. (Materials Advances, 2024, 5, 1691-1701) https://doi.org/10.1039/D3MA00533J",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Unraveling the Secrets of Molecular and Electronic Structures of [Fe(CO)4(GeX)]: A DFT Study (Chemical Physics Impact 8 (2024) 100415) https://doi.org/10.1016/j.chphi.2023.100415",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "4",
                            "Details of Research Publication": "Insight into the crystal structure analysis, vibrational studies, reactivities (MESP, HOMO-LUMO, NBO), and the anticancer activities of ruthenium diazide [Ru(POP)(PPh3)(N3)2] complex by molecular docking approach. (Inorganic Chemistry Communications 158 (2023) 111714) https://doi.org/10.1016/j.inoche.2023.111714",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Copper oxide anchored polyaniline modified glassy carbon electrode: A new sensor platform for the Amperometric determination of Chlorpyrifos (Electrochimica Acta 471 (2023) 143305) https://doi.org/10.1016/j.electacta.2023.143305",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "5",
                            "Details of Research Publication": "Investigating the structure, bonding, and energy decomposition analysis of group 10 transition metal carbonyls with substituted terminal germanium chalcogenides [M(CO)3GeX] (M = Ni, Pd, and Pt; X = O, S, Se, and Te) complexes: Insight from first-principles calculations (Journal of Molecular Modeling (2023) 29:344) https://doi.org/10.1007/s00894-023-05745-8",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Electrochemical determination of paraquat using ordered mesoporous carbon modified glassy carbon electrode (Journal of The Electrochemical Society, 2023 170 087514) https://doi.org/10.1149/1945-7111/acedd0",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Amperometric determination of Hydrazine using Au nanoparticle incorporated CMK-3 modified glassy carbon electrode (Journal of The Electrochemical Society, 2023 170 087511) https://doi.org/10.1149/1945-7111/aced70",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Recent advances in estimation of paraquat using various analytical techniques: A review (Results in Chemistry, 5 (2023) 100703) https://doi.org/10.1016/j.rechem.2022.100703",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "5",
                            "Details of Research Publication": "Guar Gum Supported ZIF-8 as an Effective Catalyst for Electrochemical Sensing of Gallic Acid in Liquid Food Samples (Journal of The Electrochemical Society, 2023 170 057504) https://doi.org/10.1149/1945-7111/acc556",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "2",
                            "Details of Research Publication": "Electrochemical sensing of NADH using 4-nitrobenzediazonium tetrafluoroborate salt functionalized multiwalled carbon nanotubes (Dalton Transactions 52 2023 6041-6051) https://doi.org/10.1039/D3DT00216K",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "4",
                            "Details of Research Publication": "Facile synthesis of raphene/Polyaniline Nanocomposite as Electrocatalyst for Oxygen Reduction Reaction. (Inorganic chemistry Communications 146 (2022) 110192). https://doi.org/10.1016/j.inoche.2022.110192",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "1",
                            "Details of Research Publication": "Electrochemical determination of paraquat using Au nanoparticle incorporated MWCNT (Journal of Electrochemical Society 169 (2022) 047522). https://doi.org/10.1149/1945-7111/ac5bae",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "2",
                            "Details of Research Publication": "A web of poly(bisbenzimidazolatocopper(II)) around multiwalled carbon nanotubes for the electrochemical detection of hydrogen peroxide New Journal of Chemistry 46 (2022) 1222- 1231. https://doi.org/10.1039/D1NJ04903H",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Amperometric determination of myoinosol by using a glassy carbon electrode modified with nanostructured copper sulfide, Microchimica Acta, 187 (2020) 334-342. https://doi.org/10.1007/s00604-020-04300-z",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "Au Nanoparticle-decorated Nanoporous PEDOT Modified Glassy Carbon Electrode: A New Electrochemical Sensing Platform for the Detection of Glutathione. Biotechnology and Bioprocess Engineering 25 (5), (2020) 715-723. https://doi.org/10.1007/s12257-020-0065-y",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019-20",
                            "Author Position": "1",
                            "Details of Research Publication": "Understanding the Role of Glucose Oxidase on Carbon Felt as Electrodes in Biocapacitor Studies. Bulletin of Materials Science 42 (3) (2019) 90. https://doi.org/10.1007/s12034-019-178 7-3",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "An electrochemical sensor for homocysteine detection using gold nanoparticle incorporated porated reduced graphene oxide, Colloids and Surfaces B: Biointerfaces, 170 (2018) 109-114. https://doi.org/10.1016/j.colsurfb.2018.05.066",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017-18",
                            "Author Position": "2",
                            "Details of Research Publication": "Tuning the oxygen reduction reactivity of interconnected porous carbon by incorporation of phosphorus and activity enhancement through blending with 2D metal dichalcogenides materials, International Journal of Hydrogen Energy, 43 (2018) 4738-4745. https://doi.org/10.1016/j.ijhydene.2017.12.009",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014-15",
                            "Author Position": "1",
                            "Details of Research Publication": "Electrocatalytic oxidation of NADH at low overpotential using nanoporous poly(3,4)-ethylenedioxythiophene modified glassy carbon electrode, Journal of Electroanalytical Chemistry, 746 (2015) 75&ndash;81. http://dx.doi.org/10.1016/j.jelechem.2015.03.028",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014-15",
                            "Author Position": "2",
                            "Details of Research Publication": "Unusual seedless approach to gold 5 nanoparticle synthesis: application to selective rapid naked eye detection of mercury (II) Analyst, 139 (2014) 3356-3359. https://doi.org/10.1039/C4AN00480A",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "25",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "Non-Noble Metal Catalysts in Oxygen Reduction Reaction in Nano electrocatalyst for Oxygen Reduction Reaction: Fundamentals to Applications, (CRC Press, 2024, 246 - 270) https://doi.org/10.1201/9781003334903",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "26",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022-23",
                            "Author Position": "3",
                            "Details of Research Publication": "Functionalised Carbon Material Based Electrochemical Sensor for Day-to-Day Applications in Functionalised materials based Electrochemical sensors. (Elsevier, 2022, 73-95) DOI: https://doi.org/10.1016/B978-0-12823788-5.00024-7",
                            "Indexing": "SCI",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "27",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "The Design and Fabrication of Disposable Sensors: an Overview in Disposable Electrochemical Sensors for Healthcare Monitoring: Material Properties and Design, Royal Society of Chemistry, 2021, pp.1-26 DOI: https://doi.org/10.1039/9781839163364-00001",
                            "Indexing": "SCI",
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
                            "Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Application ID": "569320",
                            "Title of the Patent": "PROCESS FOR FORMING PATINA LAYER ON BIDRI ALLOY SURFACE, PATINATION SOLUTION, AND ITS IMPLEMENTATION THEREOF.",
                            "Status": "Granted"
                        }
                    ]
                }
            ]
    },

    "Dr. V. Raju": {
        "name": "Dr. V. Raju",
        "email": "drrajuv@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/6bba97aa042cf03062920fdcaa74422f.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Analytical Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "VIT University",
                            "Year of Passing": "2019"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Organic Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "S.V. University",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Mathematics, Physics, Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "S.V. University",
                            "Year of Passing": "2008"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Supramolecular Chemistry, Inorganic Chemistry and Material Chemistry"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=7102157267",
                        "Vidwan : https://mits.irins.org/profile/272651",
                        "Google scholar : https://scholar.google.com/citations?user=AAD-2636-2022",
                        "h-Index (As per Scopus Data) : 14"
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
                            "Details of Research Publication": "Influence of calcination temperature of GdFeO3 fillers on the mechanical energy harvesting, dielectric, ferroelectric, and energy storage properties of PVDF composites",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "An imidazole-carbaldehyde-appended Schiff base for selective colorimetricdetection of Cu2+ ions, Inorganic Chemistry Communications 182 (2025) 115534.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Excellent energy storage and high stability achieved in lead free BZT-SrBiT ceramics synthesized via conventional solid state method, Materials Chemistry and Physics (SCI ) Page: 131032, Volume: 343",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "A lead-free flexible piezoelectric nanocomposite nanogenerator, utilizing a hybrid approach based on high-performance synthesized NBT-BCZT nanopowders Applied Physics A Volume: 131, Issue: 5.",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "5",
                            "Details of Research Publication": "A tris-buffer appended Schiff base as a fluorescent probe for Al3+ and its potential application in Zebrafish imaging Synthetic Metals Page: 117870, Volume: 312",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Impact of the Lead\u2010Free Crystal Matrix 0.94NBaTiO 3 \u20100.06SrTiO 3 on the Photoluminescence Properties of Eu +3 physica status solidi (b) (SCI ) Volume: 262, Issue: 4",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Enhanced pyroelectric property in lead-free 0.94 Na0.5Bi0.5TiO3- 0.06 Ba0.85Ca0.15Ti0.90Zr0.10O3 solid solution for thermal energy harvesting Ceramics International (ESCI ) Page: 2278-2284, Volume: 51, Issue: 2",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020-21",
                            "Author Position": "1",
                            "Details of Research Publication": "A ninhydrin&ndash;thiosemicarbazone based highly selective and sensitive chromogenic sensor for Hg2+ and F&minus; ions Journal of Chemical Sciences Volume: 132, Issue: 1",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "A multifunctional Schiff-base as chromogenic chemosensor for Mn2+ and fluorescent chemosensor for Zn2+ in semi-aqueous environment Inorganica Chimica Acta Page: 49-56, Volume: 493",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018-19",
                            "Author Position": "1",
                            "Details of Research Publication": "Development of highly selective chemosensor for chomium(III) estimation in aqueous environment. Inorganic Chemistry Communications Volume 101, Pages 74-80",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-17",
                            "Author Position": "1",
                            "Details of Research Publication": "Isatin-3-Phenylhydrazone: A Highly Selective Colorimetric Chemosensor for Copper, Chromium and Cobalt Ions in Semi-Aqueous Medium Sensor Letters (Scopus ) Page: 266-275, Volume: 15, Issue: 3.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        }
                    ]
                }
            ]
    },

    "Dr. K. Imran": {
        "name": "Dr. K. Imran",
        "email": "imrank@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Imran.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Analytical Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "SVU College of Sciences, S V University",
                            "Year of Passing": "2020"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "SVU College of Sciences, S V University",
                            "Year of Passing": "2012"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Biotechnology, Microbiology & Chemistry",
                            "Branch": "B.Sc.",
                            "College Name/University": "S V Degree College, S K University",
                            "Year of Passing": "2010"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Supramolecular Chemistry, Inorganic Chemistry and Material Chemistry"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57188829561",
                        "Vidwan : https://vidwan.inflibnet.ac.in/272658",
                        "Google scholar : https://scholar.google.com/citations?user=IB_rQSwAAAAJ&hl=en",
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
                            "Author Position": "1",
                            "Details of Research Publication": "Two-Dimensional Carbon-Based Electrochemical Sensors for Pesticide Detection: Recent Advances and Environmental Monitoring Applications",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "Label-free electrochemical sensing of Hg2+ using aBi2WO6&ndash;DNA nanocomposite interface",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "4",
                            "Details of Research Publication": "Antimicrobial and Food Coating Applications of Iron Oxide Composite Embedded with Pectin and Xanthan Gum",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Tin tungstate nanoparticles based electrochemical sensor for highly sensitive detection of Bisphenol A",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Development of MOF-derived zinc oxide/cobalt oxide@ carbon nanospheres composite for improved methanol electro-oxidation",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "6",
                            "Details of Research Publication": "Enhanced Acetaminophen Detection in Dolo-650 Tablets Using Electrocatalyst SnWO4-DNA Composite and Its Antibacterial Efficacy",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Anticancer Efficacy and Folic Acid Biosensing using poly (3, 4-ethylene dioxythiophene)-Cadmium oxide Composite Platform",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "3",
                            "Details of Research Publication": "Simultaneous electrochemical detection of dopamine and uric acid based on tri-composite of poly-pyrrole and &alpha;-Fe2O3 embedded MoS2 sheets modified electrode",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "A new hybrid sorbent 2, 2&rsquo;-pyridil functionalized SBA-15 (Pyl-SBA-15) synthesis and its applications in solid phase extraction of Cu (II) from water samples.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "2",
                            "Details of Research Publication": "Synthesis of new hybrid sorbent 2-mercaptobenzaldehyde SBA-15 and its application in solid phase extraction of Cd (II) from water and food samples",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "2",
                            "Details of Research Publication": "Synthesis and characterisation of new hybrid sorbent, 2,2&rsquo;- dipyridyl ketone functionalised SBA 15 and its application in solid-phase extraction of Pb(II) & Cd(II) from environmental samples.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                }
            ]
    },

    "Dr. C. Venkateswara Raju": {
        "name": "Dr. C. Venkateswara Raju",
        "email": "drvenkateswararajuc@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/raju.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Post Doctoral",
                            "Specialization": "Electrochemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "Chung Ang University",
                            "Year of Passing": "2023"
                        },
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Electrochemiluminescence",
                            "Branch": "Chemical Sciences",
                            "College Name/University": "CSIR-Central Electrochemical Research Institute",
                            "Year of Passing": "2020"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Medicinal Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "Sri Venkateswara University",
                            "Year of Passing": "2012"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Maths, Physics, Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "Sri Venkateswara University",
                            "Year of Passing": "2009"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Electrochemical biosensor, Electrocatalysis, Electrochemiluminescence, Immunosensors"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : www.scopus.com/authid/detail.uri?authorId=56967787300",
                        "Vidwan : https://vidwan.inflibnet.ac.in/myprofile",
                        "Google scholar : https://scholar.google.com/citations?user=zWUzr4kAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 15"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Versatility of MXene based materials for the electrochemical detection of phenolic contaminants",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "",
                            "Details of Research Publication": "Gold Nanoparticle Functionalized Carrageenan Polysaccharide and Zeolitic Imidazolate Framework-8: Biopolymer Nanocomposite for Selective Serotonin Sensing",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Electrochemical peptide-based biosensor for the detection of the inflammatory disease biomarker, interleukin-1beta",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "",
                            "Details of Research Publication": "Anticancer Efficacy and Folic Acid Biosensing using poly (3, 4-ethylene dioxythiophene)-Cadmium oxide Composite Platform",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Simultaneous electrochemical detection of dopamine and uric acid based on tri-composite of poly-pyrrole and &alpha;-Fe2O3 embedded MoS2 sheets modified electrode",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Highly sensitive electrochemical peptide-based biosensor for marine biotoxin detection using a bimetallic platinum and ruthenium nanoparticle-tethered metal&ndash;organic framework modified electrode",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "Highly sensitive and label-free electrochemical detection of C-reactive protein on a peptide receptor&minus; gold nanoparticle&minus; black phosphorous nanocomposite modified electrode",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "",
                            "Details of Research Publication": "Guar gum supported ZIF-8 as an effective catalyst for electrochemical sensing of gallic acid in liquid food samples",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "",
                            "Details of Research Publication": "Ultrasensitive detection of bovine serum albumin on DNA modified protein microcapsules-based electrodes",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Emerging insights into the use of carbon-based nanomaterials for the electrochemical detection of heavy metal ions",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "2",
                            "Details of Research Publication": "Recent advances in the use of graphitic carbon nitride-based composites for the electrochemical detection of hazardous contaminants",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "Flow injection analysis-based electrochemiluminescence: an overview of experimental design and its biosensing applications",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "6",
                            "Details of Research Publication": "Current insight into 3D printing in solid\u2010state lithium\u2010ion batteries: a perspective",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "4",
                            "Details of Research Publication": "Current insight into 3D printing in solid\u2010state lithium\u2010ion batteries: a perspective",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "2",
                            "Details of Research Publication": "Bimodal electrogenerated chemiluminescence of the luminol/dicyclohexylamine (DCHA) system: a novel and highly sensitive detection of DCHA via ECL-flow injection analysis",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "Co-reactant-free self-enhanced solid-state electrochemiluminescence platform based on polyluminol-gold nanocomposite for signal-on detection of mercury ion",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Unraveling the reaction mechanism of co-reactant free in-situ cathodic solid state ECL of Ru (bpy) 32+ molecule immobilized on Nafion coated nanoporous gold electrode",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "1",
                            "Details of Research Publication": "Phosphorous doped carbon quantum dots as an efficient solid state electrochemiluminescence platform for highly sensitive turn-on detection of Cu2+ ions",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "2",
                            "Details of Research Publication": "Impact of aminated carbon quantum dots as a novel co-reactant for Ru(bpy)32+: resolving specific electrochemiluminescence for butein detection",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "2",
                            "Details of Research Publication": "Electrogenerated Chemiluminescence of Phosphate-Modified Polymeric Carbon Nitride for Sensing of NADH: Role of Luminophore&ndash;Coreactant Interactions in Enhancing the Signal",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "1",
                            "Details of Research Publication": "Highly sensitive novel cathodic electrochemiluminescence of tris (2, 2&prime;-bipyridine) ruthenium (II) using glutathione as a co-reactant",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "2",
                            "Details of Research Publication": "Synthesis of poly(N-vinyl-2-pyrrolidone) adsorbed-AuPt/C bimetallic nanoparticles and their unusual electrocatalytic activity towards methanol tolerant oxygen reduction reaction",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "23",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "2",
                            "Details of Research Publication": "Cerium doped nickel-oxide nanostructures for riboflavin biosensing and antibacterial applications",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "24",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "2",
                            "Details of Research Publication": "Au&ndash;Pd bimetallic nanoparticles anchored on &alpha;-Fe\u2082O\u2083 nonenzymatic hybrid nanoelectrocatalyst for simultaneous electrochemical detection of dopamine and uric acid in the presence of ascorbic acid",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        }
                    ]
                }
            ]
    },

    "Dr. Sanoop P": {
        "name": "Dr. Sanoop P",
        "email": "drsanoopp@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Sanoop P.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Material Science",
                            "Branch": "Chemistry",
                            "College Name/University": "University of Kerala",
                            "Year of Passing": "2023"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "Mahatma Gandhi University, Kerala",
                            "Year of Passing": "2017"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "University of Calicut, Kerala",
                            "Year of Passing": "2015"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Nanomaterials, Raman spectroscopy, and Electocatalysis"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : http://www.scopus.com/authid/detail.url?authorId=57497449100",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/460476",
                        "Google scholar : https://scholar.google.com/citations?user=YJc96xIAAAAJ&hl=en",
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
                            "Author Position": "1",
                            "Details of Research Publication": "Innovative Phototherapy Approaches for Cancer Diagnosis with SERSGuidance (Accepted).",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Bridging Pandemic and Oncology Challenges: Surface-Enhanced RamanSpectroscopy in the Fight Against COVID-19 and Cancer",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Impact of Nanoparticles on Immune Cells and Their Potential Applications in Cancer Immunotherapy",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-24",
                            "Author Position": "4",
                            "Details of Research Publication": "A Practical Nanoplasmonic SERS Substrate for Differential Diagnosis of Lung Normal and Cancer Cells through Multivariate Statistical Analysis",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "Rapid Iodine Value Estimation Using Handheld Raman spectrometer for On-site, Reagent-free Authentication of Coconut Oil",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2020",
                            "Author Position": "3",
                            "Details of Research Publication": "Smartphone Assisted Colourimetric Detection and Quantification of Pb2+ and Hg2+ Ions Using Ag Nanoparticles from Aqueous Medium",
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
                            "Academic Year": "2021",
                            "Application ID": "PCT/IN2022/050806",
                            "Title of the Patent": "A Raman Signal Enhancing Substrates (Sensor) for Trace Level detection and Method of Fabrication thereof",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Dr. Ugrabadi Sahoo": {
        "name": "Dr. Ugrabadi Sahoo",
        "email": "ugrabadisahoo@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Ugrabadi Sahoo.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Materials Science",
                            "Branch": "Material Chemistry",
                            "College Name/University": "National Institute of Technology, Rourkela",
                            "Year of Passing": "2024"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Industrial Chemistry",
                            "Branch": "M.Sc.",
                            "College Name/University": "Veer Surendra Sai University of Technology",
                            "Year of Passing": "2017"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Chemistry",
                            "Branch": "Chemistry",
                            "College Name/University": "Utkal University",
                            "Year of Passing": "2014"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Materials Chemistry (Photocatalysis and Energy Materials)"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57734451100",
                        "Vidwan : https://vidwan.inflibnet.ac.in/myprofile",
                        "Google scholar : https://scholar.google.com/citations?user=Mj00cvwAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) : 7"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2026",
                            "Author Position": "1",
                            "Details of Research Publication": "MIL-53 (Fe)-derived &alpha;-Fe2O3 coupled with CuO hybrid nanoarchitecture: A dual-functional photocatalyst for ibuprofen removal and hydrogen production DOI: 10.1016/j.seppur.2026.137004",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "5",
                            "Details of Research Publication": "MOF-derived S-scheme g-C\u2083N\u2084/Fe\u2082O\u2083 heterojunction with intercalated carbon for enhanced multifunctional photocatalysis DOI: 10.1016/j.seppur.2025.136390",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Iron based metal&ndash;organic frameworks MIL-53 (Fe): A comprehensive review on advanced synthesis strategies and photocatalytic energy & environmental applications. DOI: 10.1016/j.ica.2025.123001",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Synergistic Charge Channelization in ZnO Quantum Dots/g-C3N4 Nanosheet Z-Scheme Heterostructure: A Bifunctional Photocatalyst for Environmental Remediation and Sustainable H2 Production DOI: 10.1016/j.jics.2025.102282",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Temperature-induced linker defect engineering in MIL-53 Fe-MOF: A novel approach to enhance photocatalytic degradation of bromoxynil DOI: 10.1016/j.jece.2025.115996",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "B, S co-doped g-C3N4 hollow nanotubes/MIL-53 heterostructure: A MOF derived high performance Z scheme photocatalyst for bisphenol A degradation and H2 evolution DOI: 10.1016/j.optmat.2025.116778",
                            "Indexing": "Scopus/ SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "3",
                            "Details of Research Publication": "l-Cysteine-Functionalized Boron-Doped Graphitic Carbon Nitride Quantum Dots: A Biocompatible Fluorescent Sensor for Cadmium Detection in Water DOI: 10.1021/acs.iecr.4c03757",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "2",
                            "Details of Research Publication": "Designing ZnBi2O4/ZIF-67 Derived Hollow Co3O4 Decorated Reduced Graphene Oxide: A Hybrid Nanocatalyst with Boosted Visible-Light Photocatalytic Activities DOI: 10.1021/acsaenm.4c00203",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "3",
                            "Details of Research Publication": "Combinatorial Photoactivity Enhancement of Ternary Nanohybrids: Ag Cocatalyst-Dispersed Monoclinic Bi2O3/g-C3N4 through the Synergistic Action of Induced Oxygen Defect and Porosity for Abatement of Fluoroquinolones and Boosted Antimicrobial Activity DOI: 10.1021/acsaenm.4c00087",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "Facile synthesis of defect induced CeO2/MIL-53(Fe) nanocatalyst: Strategically switching the charge transfer dynamics for remarkable enhancement of photocatalytic Bisphenol A degradation and H2 evolution DOI: 10.1016/j.apcatb.2023.123524",
                            "Indexing": "Scopus/ SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "Visible light-responsive heterogeneous photocatalysts for photocatalytic wastewater treatment",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "L-Glutathione modified graphitic carbon nitride quantum dots: an ultrasensitive fluorescent sensor for detection of Pb2+ in water DOI: 10.1016/j.jphotochem.2023.114819",
                            "Indexing": "Scopus/ SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Strategic growth engineering of Ag self-doped Ag2CO3 on MIL-53 MOF: A novel p-n heterostructure facilitates serendipitous charge migration and remarkable multimodal photocatalytic activity DOI: 10.1016/j.mtcomm.2023.105842",
                            "Indexing": "Scopus/ SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "S-Doped rGO-Enwrapped Magnetically Porous NiFe2O4/CuS Heterojunction: An Efficient Z-Scheme Nano-Photocatalyst for Visible-Light-Driven Tetracycline Degradation and 4-Nitrophenol Reduction DOI: 10.1021/acs.iecr.3c00213",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Green Synthesis of Carbon Dot-Based Materials for Toxic Metal Detection and Environmental Remediation",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "3",
                            "Details of Research Publication": "Double charge transfer mechanistic insights into the tailoring of BiOI nanoplates and boron-doped graphitic carbon nitride: a 2D/2D anchored p&ndash;n heterojunction nanocatalyst for improved photodegradation DOI: 10.1039/D3NJ01122D",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "2",
                            "Details of Research Publication": "Silver nanoparticles embedded sulfur doped graphitic carbon nitride quantum dots: A fluorescent nanosensor for detection of mercury ions in aqueous media DOI: 10.1016/j.colsurfa.2022.129377",
                            "Indexing": "Scopus/ SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "Silver-Nanoparticle-Decorated g-C3N4/MIL-53(Fe) Nanocomposites: A Pre-Eminent Visible-Light-Driven Photocatalyst toward Multimodal Photocatalytic applications DOI: 10.1021/acs.iecr.2c01819",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "2",
                            "Details of Research Publication": "Hematite nanoparticles decorated nitrogen-doped reduced graphene oxide/graphitic carbon nitride multifunctional heterostructure photocatalyst towards environmental applications DOI: 10.1039/D2NJ01301K",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        }
                    ]
                }
            ]
    },

    "Dr. Prageetha G Raju": {
      name: "Dr. Prageetha G Raju",
      designation: "Professor",
      email: "drprageethagraju@mits.ac.in",
      officeAddress: "BSH Block",
      image: "https://mits.ac.in/public/uploads/faculty/pragathi.png",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Entrepreneurial HRM", "Branch": "Business Management", "College Name/University": "Osmania University", "Year of Passing": "2006"},
            {"S.No": "2", "Course": "M.B.A.", "Specialization": "Human Resource Management", "Branch": "Business Management", "College Name/University": "Osmania University", "Year of Passing": "1995"},
            {"S.No": "3", "Course": "B.A.", "Specialization": "Psychology, Philosophy, Modern English, German", "Branch": "Arts", "College Name/University": "Osmania University", "Year of Passing": "1993"}
          ]
        },
        {
          title: "Research Areas",
          content: "Early career (1990s–2010s) → Strong emphasis on core HRM/OB topics (performance, leadership, stress, learning styles, emotional intelligence) + case method transition + knowledge networks, Mid-career (2010s) → Added social entrepreneurship, women empowerment, rural consumers, frugal innovation, change management in academia/industry, Recent (2020–2026) → Shift toward analytics/AI in HR, sustainability/climate resilience linked to empowerment, tribal/rural entrepreneurship, public sector efficiency, and systems thinking for engagement/retention"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=56195591200"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/654850"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?hl=en&user=E_Hmv3wAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "3"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "2", "Details of Research Publication": "Getting to the root! A Systems Thinking Approach to Employee (Dis) Engagement at an Indian Public Sector Unit, South Asian Journal of HRM, October, 12(2), 334-353pp DOI:10.1177/23220937231222699", "Indexing": "ESCI/Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "2", "Publication Affiliation": "Others", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Reinventing and Reimagining umbrellas of Kerala – An epic showdown, The Case Journal March 2025, 21(8), 1212-1223pp DOI: 10.1108/TCJ-10-2024-0288le", "Indexing": "ESCI/Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Container Schools in Telangana: A Colloquium on Pioneering Sustainable Education, April, 2025, in 12(2) Contemporary Issues in Early Childhood  DOI:10.1177/14639491251338415", "Indexing": "ESCI/Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Pedagogies to Foster Critical Thinking and Reflection: A Case of Teaching Human Resource Management to Law Students”, in Fostering Teacher Skills and Critical Thinking in Modern Education IGI Global  DOI: 10.4018/979-8-3373-1692-5.ch009", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Climate-Resilient Crops and Tribal Women Empowerment: A Model of Odisha Millets Mission in India in Global Perspectives on Climate Change, Social Resilience, and Social Inclusion, IGI GLOBAL DOI: 10.4018/978-1-6684-8963-5.ch004", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Teaching Human Resource Management in Law Schools: A Scrutiny of Pedagogies for Critical and Reflective Teaching Practice, in Implementing Interactive Learning Strategies in Higher Education IGI Global 429-454pp DOI: 10.4018/979-8-3693-3559-8.ch016", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Boosting gender integration in Indian social enterprises as a solution to poverty - analysis of cases in Handbook of Research on Designing Sustainable Strategies to Develop Entrepreneurial Intention, IGI GLOBAL; ISBN13: 9781668487815 DOI:10.4018/978-1-6684-8781-5.ch004", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "A Systematic Literature Review on Entrepreneurship Intention among Engineering Students – Impact of Personal,  Academic, and Social Factors in Handbook of Research on Designing Sustainable Strategies to Develop  Entrepreneurial Intention, IGI GLOBAL ISBN13: 9781668487815|ISBN10: 1668487810 1 - 28pp", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Nidra Daan” - A Unique and A Revolutionary Corporate Social Innovation for Safe Driving – A Case of Agarwal Movers Group in India”, Vikalpa, 48.4. Oct-Dec., 283–293 pp DOI:10.1177/02560909231214923", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2018-19", "Author Position": "1", "Details of Research Publication": "Integrating unbanked rural populations through frugal innovation - a case of Gramateller in India”, South Asian Journal of Business and Management Cases,  7(2), July, 1-14 pp", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2014-15", "Author Position": "2", "Details of Research Publication": "Analysing the role of Social Networks in mapping knowledge flows: A case of pharmaceutical company in India” Journal of Knowledge Management & E-Learning 6(1), March, 49-65pp", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2014-15", "Author Position": "1", "Details of Research Publication": "Impact of longer usage of lean manufacturing system (Toyotism) on employment outcomes – a study in garment manufacturing industries in India”, International Journal of Services and Operations Management 18(3), June, 305 – 320 pp   DOI: 10.1504/IJSOM.2014.062233", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "13", "Publication Affiliation": "Others", "Academic Year": "2014-15", "Author Position": "3", "Details of Research Publication": "Impact of Emotional Labor on Organizational Role Stress - A Study in the Services Sector in India” Shaping The Future of Business and Society (Ed), Procedia Economics and Finance, Vol 11, 110-121 pp ISBN: 9781632669032 DOI:10.1016/S2212-5671(14)00181-6", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "14", "Publication Affiliation": "Others", "Academic Year": "2013-14", "Author Position": "2", "Details of Research Publication": "Reverse Innovation-Create far from home win everywhere” in Competitiveness Review, Vol. 23 (3) 299-302 pp DOI: 10.22610/jsds.v4i12.796", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "15", "Publication Affiliation": "Others", "Academic Year": "2011-12", "Author Position": "1", "Details of Research Publication": "Sharing the Challenge – An Experiment with Joint CEO Structure –A Case of WIPRO technologies, Asian Journal of Management Cases (SAGE Publication) 9.1 Feb., 23-32 pp DOI 10.1177/097282011100900104", "Indexing": "ESCI/Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "16", "Publication Affiliation": "Others", "Academic Year": "2011-12", "Author Position": "1", "Details of Research Publication": "Developing Generic Competency Profiles for Middle Level Managers across Functional Areas– A Field Case Study in an Indian BPO, Prabandhan – Indian Journal of Management, 4(10), Oct pp 42-55 DOI:10.17010//2011/v4i10/62631", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "17", "Publication Affiliation": "Others", "Academic Year": "2011-12", "Author Position": "1", "Details of Research Publication": "Marketing Hollywood films (dubbed and original) in India: A case of planning and executing marketing strategy” Indian Journal of Marketing, April – June, 41(4)  30-38 pp ISSN 0973 – 8703", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3/Q4"}
          ]
        },
        {
          title: "Research Projects & Events",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "Others", "Type": "Funded", "Role": "Co-PI", "Title": "Training need analysis at Goa Shipyard", "Amount": "5,00,000", "Agency": "Goa Shipyard"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "Others", "Type": "Funded", "Role": "Coordinator (Prepared expression of willingness)", "Title": "Organizational Climate Survey at Neyveli Lignite Corporation, Tamilnadu", "Amount": "10,00,000", "Agency": "Neyveli Lignite Corporation, Tamilnadu"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "Others", "Type": "Funded", "Role": "PI", "Title": "Employee Performance Management in a Lean Manufacturing Scenario", "Amount": "2,00,000", "Agency": "IBS Hyderabad and Usha Martin Academy, Jharkhand"}
          ]
        },
        {
          title: "Consultancy",
          content: [
            {"S.No": "1", "Affiliation": "Others", "Academic Year": "2024-25", "Client/Organization": "CNGSN & ASSOCIATES LLP, Hyderabad", "Project": "Talent Acquisition and On-boarding", "Amount": "2,00,000"},
            {"S.No": "2", "Affiliation": "Others", "Academic Year": "2024-25", "Client/Organization": "Praxsol Engineering Designs, Visakhapatnam", "Project": "Organization Culture Assessment", "Amount": "1,50,000"},
            {"S.No": "3", "Affiliation": "Others", "Academic Year": "2023 - 24", "Client/Organization": "Political Party in Telangana", "Project": "Citizen survey of Telangana State", "Amount": "12,00,000"},
            {"S.No": "4", "Affiliation": "Others", "Academic Year": "2023 - 24", "Client/Organization": "Citizens Hospital Hyderabad", "Project": "Set up L&D Division", "Amount": "75,000"},
            {"S.No": "5", "Affiliation": "Others", "Academic Year": "2023 - 24", "Client/Organization": "Anupam Sanghi Associates, New Delhi", "Project": "Performance appraisal for legal associates", "Amount": "90,000"},
            {"S.No": "6", "Affiliation": "Others", "Academic Year": "2022 - 23", "Client/Organization": "Citizens Hospital Hyderabad", "Project": "Set up L&D Division", "Amount": "70,000"},
            {"S.No": "7", "Affiliation": "Others", "Academic Year": "2019 - 20", "Client/Organization": "Custom Flavors India Pvt Ltd", "Project": "Handling Employee Attrition and design innovative reward system", "Amount": ""},
            {"S.No": "8", "Affiliation": "Others", "Academic Year": "2018-19", "Client/Organization": "Centre for Communication & Change, An affiliate to John Hopkins Bloomberg School of Public Health, Centre for Communication Programs, Delhi", "Project": "Translated Focus Group Discussions from Telugu to English on ROSHNI projects and Anaemia among adolescent girls in Tirupati, Andhra Pradesh", "Amount": "32,000"},
            {"S.No": "9", "Affiliation": "Others", "Academic Year": "2017 - 18", "Client/Organization": "Centre for Communication & Change, An affiliate to John Hopkins Bloomberg School of Public Health, Centre for Communication Programs, Delhi", "Project": "Translated Focus Group Discussions from Telugu to English on ROSHNI projects and Anaemia among adolescent girls in Tirupati, Andhra Pradesh", "Amount": "30,000"},
            {"S.No": "10", "Affiliation": "Others", "Academic Year": "2016 - 17", "Client/Organization": "Centre for Communication & Change, An affiliate to John Hopkins Bloomberg School of Public Health, Centre for Communication Programs, Delhi", "Project": "Translated Focus Group Discussions from Telugu to English on ROSHNI projects and Anaemia among adolescent girls in Tirupati, Andhra Pradesh", "Amount": "30,000"},
            {"S.No": "11", "Affiliation": "Others", "Academic Year": "2014-15", "Client/Organization": "United Nations Development Program, Turkey but stationed at UNDP, New Delhi", "Project": "Subject Matter Expert and Independent Consultant for Analysis of National Skill Development Policy", "Amount": "7,28,000"},
            {"S.No": "12", "Affiliation": "Others", "Academic Year": "2014-15", "Client/Organization": "Mastermentors Advisory Pvt Ltd, Hyderabad", "Project": "Development of online masters program on Fundamentals of Consulting", "Amount": "4,50,000"},
            {"S.No": "13", "Affiliation": "Others", "Academic Year": "2013 - 14", "Client/Organization": "Tata Business Support Services, Hyderabad", "Project": "Developing generic competencies for middle level managers at Tata Business Support Services", "Amount": "45,000"},
            {"S.No": "14", "Affiliation": "Others", "Academic Year": "2013 - 14", "Client/Organization": "Icfai Management Research Centre, Hyderabad", "Project": "Personality and Learning Styles- Lessons for Indian Corporate Trainers", "Amount": "40,000"},
            {"S.No": "15", "Affiliation": "Others", "Academic Year": "2007 - 08", "Client/Organization": "Yashoda Hospitals Hyderabad", "Project": "Training Need Analysis", "Amount": "50,000"},
            {"S.No": "16", "Affiliation": "Others", "Academic Year": "2006 - 07", "Client/Organization": "Scorelogix India Pvt Ltd", "Project": "Design online recruitment test", "Amount": "25,000"},
            {"S.No": "17", "Affiliation": "Others", "Academic Year": "2005- 06", "Client/Organization": "Apollo Hospitals, Hyderabad", "Project": "Drafting competency based job descriptions", "Amount": "20,000"},
            {"S.No": "18", "Affiliation": "Others", "Academic Year": "2006 - 07", "Client/Organization": "Speck Systems Pvt Ltd", "Project": "Design Performance Appraisal systems and Training systems", "Amount": "60,000"},
            {"S.No": "19", "Affiliation": "Others", "Academic Year": "2006 - 07", "Client/Organization": "Ned Energy Pvt Ltd", "Project": "HR Audit", "Amount": "65,000"},
            {"S.No": "20", "Affiliation": "Others", "Academic Year": "2004 - 05", "Client/Organization": "Apollo Hospitals, Hyderabad", "Project": "Assessment of Clinician Leadership styles", "Amount": "18,000"},
            {"S.No": "21", "Affiliation": "Others", "Academic Year": "1998 - 99", "Client/Organization": "Nagarjuna Finance Limited", "Project": "Total Employee Satisfaction", "Amount": "12,000"},
            {"S.No": "22", "Affiliation": "Others", "Academic Year": "1998 - 99", "Client/Organization": "Visisht Foods Pvt Ltd", "Project": "Setup HR department", "Amount": "14,000"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Won fifth prize in the Udyam Mahila Ideathon Challenge organized by Access Development Services supported by Gates Foundation; Assessment by National Urban Livelihoods Mission and National Rural Livelihoods Mission in May 2025.",
            "Won second prize for the case titled, “Farm related services via Mobile Phones in India – A Case of Micro-warehousing for Maize Farmers in Bihar”, written for the Sitaram Rao Livelihoods Case Competition conducted by Access Development Services, New Delhi and sponsored by Rabo Bank in Nov., 2019 .",
            "Won Sage Research Methods Contest from Sage Publishing in 2019    Secured ‘A’ grade in 100th Faculty Orientation Program organized by HRD Centre, University of Hyderabad   from 11 November to 8 Dec., 2018.",
            "Secured ‘A’ grade in 100th Faculty Orientation Program organized by HRD Centre, University of Hyderabad   from 11 November to 8 Dec., 2018.",
            "Secured ‘A’ Grade @ UN International Paris Climate Summit Assessment in 2016.",
            "Awarded “Best Faculty at Symbiosis Center for Management and HRD, Pune in 2011.",
            "Awarded “Best Faculty” at Symbiosis Law School, Hyderabad in 2018 and 2019."
          ]
        }
      ]
    },

    "Dr. N. Venkata Ramana": {
        "name": "Dr. N. Venkata Ramana",
        "email": "drvenkataramanan@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Humanities.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Finance",
                            "Branch": "Management Studies",
                            "College Name/University": "Sri Venkateswara University, Tirupati",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "M.B.A",
                            "Specialization": "Finance",
                            "Branch": "Management Studies",
                            "College Name/University": "Dr. B. R. Ambedkar Open University, Hyderabad",
                            "Year of Passing": "2007"
                        },
                        {
                            "Course": "Diploma in Industrial Relations & Personnel Management",
                            "Specialization": "HR",
                            "Branch": "Management Studies",
                            "College Name/University": "Sri Venkateswara University, Tirupati",
                            "Year of Passing": "2001"
                        },
                        {
                            "Course": "Post Graduate Diploma in Business Administration",
                            "Specialization": "Marketing",
                            "Branch": "Management Studies",
                            "College Name/University": "Institute of Business Administration and Management, New Delhi",
                            "Year of Passing": "2000"
                        },
                        {
                            "Course": "M.Com.",
                            "Specialization": "Commerce",
                            "Branch": "Commerce",
                            "College Name/University": "Sri Venkateswara University, Tirupati",
                            "Year of Passing": "1996"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Accounting, Finance & Banking"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58148011700",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/107384",
                        "Google scholar : https://scholar.google.co.in/citations?user=B1Y69_kAAAAJ&hl=en",
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
                            "Details of Research Publication": "&ldquo;Financial Behavior Analysis for Payment Bank Adoption Using Random Forest and PCA: An Indian Perspective&rdquo; International Conference on Emerging Trends in Computing and Communication (ETCOM) Mangalore, India. IEEE Xplore March, 2026, DOI: 10.1109/ETCOM66606.2025.11437052.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "Forecasting Stock Market trends with an optimized fuzzy hybrid SVM technique, International Conference on Emerging Research in Electronics, Computer Science and Technology (ICERECT), Karnataka (12-13 Sep, 2025) DOI: 10.1109/ICERECT65215.2025.11376162",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Machine Learning for Energy Consumption Prediction in Smart Homes, DOI:10.1109/ICFTS62006.2025.11031694",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Enhanced Demand &ndash; Side Management for Electric Vehicle Charging Stations Using Pyramidal Dilat Attention Neural Networks, DOI: 10.1109/ICMCS164620.2025.10883404",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Dynamic Ensemble Machine Learning Classifier based Credit Card Financial Risk Management and Prediction, DOI: 10.1109/ICDSCNC62492.2024.10939444",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "3",
                            "Details of Research Publication": "Economic Growth Study and Inferences from Developments in E-Mobility&rdquo; A Sustainable Future with E-Mobility: Concepts, Challenges, and Implementations, DOI: 10.4018/979-8-3693-5247-2.ch010",
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
                            "Academic Year": "2025-26",
                            "Application ID": "202641042427",
                            "Title of the Patent": "A System and Method for Dynamic Risk-Reward Assessment and Adaptive Decision Optimization in Business Planning Environments",
                            "Status": ""
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Application ID": "202441023748",
                            "Title of the Patent": "Device for Providing Business Knowledge Management Based Configuration Management System and Method Thereof",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Application ID": "202441033647",
                            "Title of the Patent": "Motives for Social Entrepreneurship among College Students",
                            "Status": "Published"
                        },
                        {
                            "S.No": "4",
                            "Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Application ID": "420617-001",
                            "Title of the Patent": "Device for Predictive Accounting Analytics for Business Forecasting",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "5",
                            "Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Application ID": "202521065624",
                            "Title of the Patent": "A System and Method for Automated Financial Forecasting Using Adaptive Machine Learning Models for Business Decision Support",
                            "Status": "Published"
                        }
                    ]
                }
            ]
    },

    "Mr. T. Gangadharam": {
        "name": "Mr. T. Gangadharam",
        "email": "gangadharamt@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. T. Gangadharam.png",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Health Economics",
                            "Branch": "Arts and Social Science",
                            "College Name/University": "S.V. University Tirupati",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "B. Ed.",
                            "Specialization": "Social Studies",
                            "Branch": "Social Studies & Telugu",
                            "College Name/University": "S.V. University Tirupati",
                            "Year of Passing": "2022"
                        },
                        {
                            "Course": "M.A.",
                            "Specialization": "Economics",
                            "Branch": "Arts and Social Science",
                            "College Name/University": "S.V. University Tirupati",
                            "Year of Passing": "2009"
                        },
                        {
                            "Course": "B.A.",
                            "Specialization": "Economics, Public Administration, Political Science",
                            "Branch": "Arts",
                            "College Name/University": "S.V. University Tirupati",
                            "Year of Passing": "2006"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Health Economics"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus :",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/560921",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=vLnauZkAAAAJ",
                        "h-Index (As per Scopus Data) :"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025 -26",
                            "Author Position": "2",
                            "Details of Research Publication": "Predictive Modeling of Credit Risk in Banking Systems Using a Hybrid SVM&ndash;Random Forest Approach, 5th International Conference on Emerging Research in Electronics, Computer Science and Technology (ICERECT), Karnataka (12-13 Sep, 2025) DOI: 10.1109/ICERECT65215.2025.11378182",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                }
            ]
    },

    "Mr. Chandran Krishnamurthy": {
      name: "Mr. Chandran Krishnamurthy",
      designation: "Asst. Professor",
      email: "chandrank@mits.ac.in",
      officeAddress: "BSH Block",
      image: "https://mits.ac.in/public/uploads/faculty/253e1b744bcefdad07d24bf986db6060.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Computer Applications", "Branch": "Computer Applications", "College Name/University": "Karunya University, Coimbatore", "Year of Passing": "Pursuing"},
            {"S.No": "2", "Course": "M.Sc.", "Specialization": "Information Technology", "Branch": "M.Sc.", "College Name/University": "Annamalai University", "Year of Passing": "2006"},
            {"S.No": "3", "Course": "Diploma in Computer Applications", "Specialization": "Computer Applications", "Branch": "Computer Applications", "College Name/University": "Madurai Kamaraj University", "Year of Passing": "1994"},
            {"S.No": "4", "Course": "B.A. (CS)", "Specialization": "Economics", "Branch": "B.A.", "College Name/University": "New College, University of Madras", "Year of Passing": "1993"}
          ]
        },
        {
          title: "Research Areas",
          content: "ARTIFICIAL INTELLIGENCE, BLOCKCHAIN, IOT"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=59150650800"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/560920"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=dVI9DmsAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "1"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "6", "Details of Research Publication": "Investigating the Impact of Compressed Sensing Techniques and IoT in Medical Imaging, Journal of Intelligent Systems and Internet of Things, 12(2), 187-194pp DOI: https://doi.org/10.54216/JISIoT.120214", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "Exploring Hybrid Techniques for Enhanced Pitch Estimation in Speech Processing, Recent Patents on Engineering, 19(9), DOI: 10.2174/0118722121312618240612093010", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2022-23", "Application ID": "202241063764", "Title of the Patent": "DESIGN IoT-DRIVEN SYSTEMS OF USING MACHINE LEARNING TO RECOGNISE HANDWRITTEN TEXT", "Status": "Published"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "464937-001", "Title of the Patent": "Cloud-Enabled Social Virtual Reality IoT Ecosystem with Real-to-Virtual Device Synchronization", "Status": "Published"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2025-26", "Application ID": "464937-001", "Title of the Patent": "AI BASED CHATBOT FOR PRELIMINARY MEDICAL DIAGNOSIS", "Status": "Published"}
          ]
        }
      ]
    },

    "Dr. C. Srinivasa Raju": {
        "name": "Dr. C. Srinivasa Raju",
        "email": "drsrinivasarajuc@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. C. Srinivasa Raju.JPG",
        "designation": "Librarian",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "User Studies",
                            "Branch": "Library & Information science",
                            "College Name/University": "J.N.T.U. Kakinada",
                            "Year of Passing": "2019"
                        },
                        {
                            "Course": "PGDLAN",
                            "Specialization": "Library Automation",
                            "Branch": "Library Automation",
                            "College Name/University": "University of Hyderabad",
                            "Year of Passing": "2004"
                        },
                        {
                            "Course": "M.L.I.Sc.",
                            "Specialization": "Library & Information science",
                            "Branch": "Library & Information science",
                            "College Name/University": "S.V.University",
                            "Year of Passing": "1995"
                        },
                        {
                            "Course": "M.A.",
                            "Specialization": "Sociology",
                            "Branch": "Arts",
                            "College Name/University": "S.V.University",
                            "Year of Passing": "1993"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Library and Information Science"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57217016212",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/561267/NTYxMjY3",
                        "Google scholar :",
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
                            "Details of Research Publication": "Employ Machine Learning to Optimize Resource Utilization and Response Time in Energy Efficient Task Scheduling in Edge-Cloud Environmental variables. https://ieeexplore.ieee.org/document/11405242",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "4",
                            "Details of Research Publication": "Microstructure Residual Stresses, and wear behaviour of SS316L and H13 parts manufactured by laser powder bed fusion process, Lasers in Manufacturing and Materials processing, Springer, 12th Feb.DOI: https://doi.org/10.1007/s40516-025-00328-2",
                            "Indexing": "SCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024 -25",
                            "Author Position": "2",
                            "Details of Research Publication": "A Novel learning based secured data evaluation scheme using cybersecurity principles with Artificial intelligence logic, WSEAS Transactions on Systems, 24, 455-465pp DOI: 10.37394/23202.2025.24.40",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2021-22",
                            "Author Position": "1",
                            "Details of Research Publication": "An Opinion Survey of Faculty members on ICT facilities in the libraries of Engineering colleges affiliated to JNTU &ndash; Anantapur, Andhra Pradesh, India. https://scholarworks.sjsu.edu/libphilprac/4927/",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016-17",
                            "Author Position": "1",
                            "Details of Research Publication": "A Study on Perceptions of Faculty members on Information sources of libraries of Engineering colleges affiliated to JNTU- Anantapur, Andhra Pradesh, India. https://scholarworks.sjsu.edu/libphilprac/1399/",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015-16",
                            "Author Position": "1",
                            "Details of Research Publication": "A Study on evaluation of libraries of Engineering colleges affiliated to JNTU &ndash; Anantapur as per AICTE norms. https://scholarworks.sjsu.edu/libphilprac/1341/",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        }
                    ]
                }
            ]
    },

    "Dr. C. Damodharan": {
        "name": "Dr. C. Damodharan",
        "email": "drdamodharanc@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/damodaran.jpeg",
        "designation": "Physical Director",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D",
                            "Specialization": "Physical Education & Sports",
                            "Branch": "Physical Education",
                            "College Name/University": "Karpagam university, Coimbatore",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "M.Phil.",
                            "Specialization": "Physical Education & Sports",
                            "Branch": "Physical Education",
                            "College Name/University": "Tamil Nadu Physical Education and Sports University",
                            "Year of Passing": "2008"
                        },
                        {
                            "Course": "M.P.Ed.",
                            "Specialization": "Physical Education & Sports",
                            "Branch": "Physical Education",
                            "College Name/University": "Alagappa University College of Physical Education",
                            "Year of Passing": "2007"
                        },
                        {
                            "Course": "B.P.Ed.",
                            "Specialization": "Physical Education & Sports",
                            "Branch": "Physical Education",
                            "College Name/University": "Y.M.C.A. College, TNPESU University",
                            "Year of Passing": "2005"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Sports and Games"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus :",
                        "Vidwan : https://vidwan.inflibnet.ac.in/myprofile",
                        "Google scholar : https://scholar.google.com/citations?user=Iwu4GQYAAAAJ&hl=en",
                        "h-Index (As per Scopus Data) :",
                        "Publication Details: Cuestiones De Fisioterapia (Journal Physical Therapy Issues) ISSN: 1135-8599 And ISSN: 2695-7639"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "4",
                            "Details of Research Publication": "&quot;Anthropometric and Physiological Profiles of University Volleyball and Basketball Players: A Comparative Analysis.&quot; Cuestiones de Fisioterapia 53.03 (2024): 1049-1064.",
                            "Indexing": "SCI",
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
                            "Academic Year": "2026",
                            "Application ID": "202621033088",
                            "Title of the Patent": "Machine Learning&ndash;Based Automated Writing Evaluation and Feedback System For ESL/EFL in Higher Education",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2026",
                            "Application ID": "202611051615",
                            "Title of the Patent": "IoT and Machine Learning-based System for Student Health Monitoring and Stress Detection in Higher Education",
                            "Status": "Granted"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Secured 3rd Prize (Bronze Medal) in the Research Paper Presentation (Physical Education &ndash; Offline Mode) in Paper titled: &ldquo;Role of Physical Education and Sports Sciences in Promoting Physical Fitness, Health, Wellness and Lifelong Active Lifestyles.&rdquo; at the 3rd International Conference on Advanced Sports Science and Intelligence Performance Technologies (IC-ASSIPT) &ndash; SPORTINTEL 2026, held at SRM University, Chennai in March 2026.",
                        "Topper And Gold Medal in NIS Coaching organzied by Nethaji Subhas Chandra Bose National Institute of Sports Held at SRM University (6 Weeks Training)"
                    ]
                }
            ]
    },

    "Mrs. Kadithi Radha": {
        "name": "Mrs. Kadithi Radha",
        "designation": "Assistant Physical Director",
        "email": "radhak@mits.ac.in",
        "officeAddress": "BSH Block",
        "image": "https://mits.ac.in/public/uploads/faculty/Mrs. Kadithi Radha.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D",
                            "Specialization": "Physical Education",
                            "Branch": "Physical Education",
                            "College Name/University": "Sri Krishnadevaraya University",
                            "Year of Passing": "Pursuing"
                        },
                        {
                            "Course": "M.P.Ed.",
                            "Specialization": "Physical Education",
                            "Branch": "Physical Education",
                            "College Name/University": "Sri Krishnadevaraya University",
                            "Year of Passing": "2020"
                        },
                        {
                            "Course": "B.P.Ed.",
                            "Specialization": "Physical Education",
                            "Branch": "Physical Education",
                            "College Name/University": "Rayalaseema College of Physical Education",
                            "Year of Passing": "2018"
                        },
                        {
                            "Course": "B.A.",
                            "Specialization": "H.T.P",
                            "Branch": "B.A.",
                            "College Name/University": "Sri Venkateswara Degree college, Sri krishnadevaraya university",
                            "Year of Passing": "2016"
                        }
                    ]
                }
            ]
    }
  */
};

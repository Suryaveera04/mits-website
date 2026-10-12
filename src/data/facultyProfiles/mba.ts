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

export const mbaProfiles: Record<string, FacultyProfile> = {
  /*
  // Static faculty profile data preserved in comments (Dynamic profiles fetched from EngageAI database API)
"Dr. Bhanu Sree Reddy": {
        "name": "Dr. Bhanu Sree Reddy",
        "email": "drbhanusreereddy@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Bhanu Sree Reddy.JPG",
        "designation": "Professor &amp; Dean-School of Management",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "International Relations",
                            "Branch": "International Relations",
                            "College Name/University": "Sri Venkateswara University, Tirupati",
                            "Year of Passing": "2002"
                        },
                        {
                            "Course": "M.B.A.",
                            "Specialization": "Marketing and Foreign Trade",
                            "Branch": "Marketing",
                            "College Name/University": "University of Madras, Chennai",
                            "Year of Passing": "1996"
                        },
                        {
                            "Course": "M.A.",
                            "Specialization": "Southeast Asian Studies",
                            "Branch": "History",
                            "College Name/University": "Sri Venkateswara University, Tirupati",
                            "Year of Passing": "1987"
                        },
                        {
                            "Course": "B.A.",
                            "Specialization": "Economics, Political Science and History",
                            "Branch": "General",
                            "College Name/University": "Sri Venkateswara University, Tirupati",
                            "Year of Passing": "1985"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "International Business, Marketing and Entrepreneurship & Start ups"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=57210250809",
                        "Vidwan Link: https://vidwan.inflibnet.ac.in/profile/662673",
                        "Google scholar Link: https://scholar.google.com/citations?hl%3Den=&user=HdJt5ZQAAAAJ",
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
                            "Author Position": "2",
                            "Details of Research Publication": "Role of Generative Artificial Intelligence (AI) in Social Media Engagement and Brand Loyalty: An Empirical Study https://doi.org/10.52783/jier.v5i4.3935",
                            "Indexing": "-",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "5",
                            "Details of Research Publication": "Social capital as a catalyst for leadership excellence: the mediating role of institutional reputation in Indian higher education. https://doi.org/10.1504/IJLC.2025.149598",
                            "Indexing": "-",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2022",
                            "Author Position": "2",
                            "Details of Research Publication": "Modelling and Sentiment Analysis of online reviews in Hospitality Industry&rdquo;, International Journal on recent and innovation trends in Computing and communication https://doi.org/10.17762/ijritcc.v10i2s.5916",
                            "Indexing": "-",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2019",
                            "Author Position": "2",
                            "Details of Research Publication": "A conceptual study on insights into using selfie as a Marketing tool by Companies: Catching the young Minds",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Recruitment through Artificial Intelligence: A conceptual Study",
                            "Indexing": "-",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2017",
                            "Author Position": "2",
                            "Details of Research Publication": "Psychological climate, Affective commitment: Mediating Effect of job Satisfaction: Evidence form Private Sector Banks",
                            "Indexing": "-",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "7",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "2",
                            "Details of Research Publication": "Mediation role of Customer advocacy in customer Loyalty and Brand equity relationship-An empirical study in context to Instore Brands Q3",
                            "Indexing": "-",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "8",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "2",
                            "Details of Research Publication": "Impact of Psychological Climate, Learning Culture On Job Satisfaction: An Empirical Study In Indian Private Banks",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "9",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "2",
                            "Details of Research Publication": "A Study on the Relationship between Demographic Factors and E-Learning Readiness among Students in Higher Education",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "10",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "2",
                            "Details of Research Publication": "Customer Loyalty and Customer Advocacy as Brand Equity enhancers of In-store Brands- A conceptual View",
                            "Indexing": "-",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "11",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "1",
                            "Details of Research Publication": "An analysis on opinion mining: Techniques and Tools",
                            "Indexing": "-",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "12",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2016",
                            "Author Position": "1",
                            "Details of Research Publication": "A review on the Concept of Sentiment Analysis and its role in Marketing strategies in E commerce",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                        },
                        {
                            "S.No": "13",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "2",
                            "Details of Research Publication": "Current Trends in E-Learning and Future Scenario",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "14",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "2",
                            "Details of Research Publication": "An exploratory study on Learner&rsquo;s perception towards E-Learning Courses",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "15",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2015",
                            "Author Position": "2",
                            "Details of Research Publication": "Challenges and Opportunity of E-Learning in Developed and Developing Countries- A Review",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "16",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "2",
                            "Details of Research Publication": "Factors which influence the decision-making process for the repeat buyers for two wheelers",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "17",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "2",
                            "Details of Research Publication": "Management Consulting Attitude: A way to enhance Management Education",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "18",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2014",
                            "Author Position": "2",
                            "Details of Research Publication": "Conceptualizing Dimensions of Enterprise Resource Planning Success: A Socio-Technical Perspective",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "19",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2013",
                            "Author Position": "2",
                            "Details of Research Publication": "Role of private garage mechanics in influencing car purchase",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "20",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011",
                            "Author Position": "2",
                            "Details of Research Publication": "Exploring leadership styles during Conflict management in cross cultural scenario With Special reference to Transactional and Transformational leadership styles",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "21",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2011",
                            "Author Position": "2",
                            "Details of Research Publication": "A Framework for ERP Implementation: Conceptualized on Leavitt&rsquo;s Model",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        },
                        {
                            "S.No": "22",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2009",
                            "Author Position": "2",
                            "Details of Research Publication": "An Analytic Framework for Evaluation of ERP Implementation",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "NA"
                        }
                    ]
                },
                {
                    "title": "Research Projects & Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others-IISER Tiruapti",
                            "Academic Year": "2025",
                            "Funded Project /Event": "5 Days FDP on Innovation and Entrepreneurship",
                            "Role": "P.I.",
                            "Title of the Project/Event": "FDP on Innovation and Entrepreneurship",
                            "Amount in Rs. /-": "3,50,000",
                            "Funding Agency": "MIC-AICTE, New Delhi"
                        }
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2022",
                            "Application ID": "362132-001",
                            "Title of the Patent": "Smart Grocery Design",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Consultancy",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others (VIT)",
                            "Academic Year": "2016",
                            "Name of the Consulting Firm": "TVS Motors Pvt Ltd, Hosur",
                            "Title of the Project/Event": "A market study report on TVS Apache- Consideration and Non-Consideration factors",
                            "Amount in Rs. /-": "25,000"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Gold Medalist in Post-graduation",
                        "Research with ICHR fellowship during PHD",
                        "Received Best Woman Academician awards in 2021 and 2022 from UK based NGO"
                    ]
                }
            ]
    },

    "Dr. Nagarajan. G": {
        "name": "Dr. Nagarajan. G",
        "email": "drnagarajang@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/DSC_6987.JPG",
        "designation": "Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "PGDM-AICTE",
                            "Specialization": "Business Analytics",
                            "Group": "Business Analytics",
                            "College Name/University": "ISBR",
                            "Year of Passing": "2023"
                        },
                        {
                            "Course": "M.Com.",
                            "Specialization": "Commerce",
                            "Group": "Commerce",
                            "College Name/University": "PMP College,Periyar University",
                            "Year of Passing": "2023"
                        },
                        {
                            "Course": "LLB",
                            "Specialization": "Law",
                            "Group": "Law",
                            "College Name/University": "Basavashree College of Law, Bagnalore University",
                            "Year of Passing": "2013"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Psychology",
                            "Group": "Psychology",
                            "College Name/University": "KSOU-Mysore",
                            "Year of Passing": "2015"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "IT",
                            "Group": "IT",
                            "College Name/University": "Periyar University",
                            "Year of Passing": "2007"
                        },
                        {
                            "Course": "M.B.A",
                            "Specialization": "HR",
                            "Group": "M.B.A",
                            "College Name/University": "S.R.N Adarsh College, Sam Higginbottom University of Agriculture, Technology and Sciences",
                            "Year of Passing": "2005"
                        },
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Banking",
                            "Group": "Banking",
                            "College Name/University": "T.B.M.L College, Bharathidasan University",
                            "Year of Passing": "2002"
                        },
                        {
                            "Course": "PGDCA",
                            "Specialization": "Computer Application",
                            "Group": "Computer Application",
                            "College Name/University": "T.B.M.L College, Bharathidasan University",
                            "Year of Passing": "1999"
                        },
                        {
                            "Course": "M.Cop (Cooperative Banking)",
                            "Specialization": "Cooperative Banking",
                            "Group": "Cooperative Banking",
                            "College Name/University": "T.B.M.L College, Bharathidasan University",
                            "Year of Passing": "1996"
                        },
                        {
                            "Course": "Bachelors in Cooperation & Banking",
                            "Specialization": "Cooperation & Banking",
                            "Group": "Bachelors in Cooperation & Banking",
                            "College Name/University": "Government College, Madras University",
                            "Year of Passing": "1993"
                        }
                    ]
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "&ldquo;Analysis on selected anthropometric and physiological variables among university volleyball and basketball men players&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "IJFANS International Journal of Food and Nutritional Sciences; ISSN PRINT 2319 1775 Online 2320 7876; Journal Volume 13, Issue 01, 2024; Page No 124-140; https://ijfans.org/uploads/paper/eb9aa1b31ce1d30cfaab1976b9a7f6f7.pdf"
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "&ldquo;Impact of passenger perception of airline customer loyalty, service quality, trust, commitment factors that influence the customer&rsquo;s Buying Behavior in airlines&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "IPE Journal of Management; ISSN2249-9040 with IF 7.138; Volume-14, No: 06, January-June 2024"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "&quot;360-Degree Comparative Performance Analysis By Using 30 Different Financial Ratios Between Public & Private Sector Banks In India&quot;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Creative Research Thoughts (IJCRT), ISSN:2320-2882, Volume.6, Issue 1, Page No pp.771-784, March 2019, Available at : http://www.ijcrt.org/IJRAR19J5124.pdf"
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "&quot;Human CapitalManagement Towards Organizational Performance with Special Reference to Banking Industry in Bangalore Region&quot;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Creative Research Thoughts (IJCRT), ISSN:2320-2882, Volume.6, Issue 1, Page No pp.670-687, January 2019, Available at : http://www.ijcrt.org/IJRAR19J5111.pdf"
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "Effectiveness of Human Capital Management towards Organizational Performance in Indian Banking Sector- A Conceptual Study",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "ROOTS-International Journal of Multidisciplinary Researches- Special issue 4, March 2018; ISSN 2349-8684, UGC Approved Journal N0.48991"
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "Non-Performing Assets Trend Analysis of Selected Public Sector Banks in India",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "ROOTS-International Journal of Multidisciplinary Researches-Special issue 4, March 2018; ISSN 2349-8684, UGC Approved Journal N0.48991"
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "An Empirical analysis of the relationship between Currency Futures and Currency Exchange Rate,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Economical formulas, prediction models and volatility in India with reference to US Dollar, Great Britain Pound and Euro Currency; International Journal of Business and Administration Research Review, (IJBARR) peer reviewed and refereed journal, Volume- 3, Issue- 18, April 2017, pp. 169-180.&quot;"
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "Impact on Information Technology on Public Sector Banks in India with Special Reference to Bangalore,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Applied Engineering Research; ISSN 0973- 4562; (IJAER) Volume 10, Number 6 (2015), pp. 14115-14148"
                        },
                        {
                            "S.No": "9",
                            "Title of the Paper": "Impact on Customer Buying Behaviour Towards Residential Properties In Bangalore,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Applied Engineering Research; ISSN 0973-4562; (IJAER)Volume 10, Number 6 (2015), pp. 14149-14174,"
                        },
                        {
                            "S.No": "10",
                            "Title of the Paper": "&quot;Effectiveness of HCM Practices Towards Public & Private Sector Banks In Karnataka Region&quot;,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal Of Creative Research Thoughts (Ijcrt), Issn:2320-2882, Volume.1, Issue 1, Page No pp.832-845, January 2014, Available at : http://www.ijcrt.org/IJRAR19D3120.pdf"
                        },
                        {
                            "S.No": "11",
                            "Title of the Paper": "A Study on Comparison of Buy and Hold Strategy V/S Technical Analysis;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Business and Administration Research Review; Vol.2, Issue.6 July- Sep, 2014. Page No.144-160"
                        },
                        {
                            "S.No": "12",
                            "Title of the Paper": "Impact on Mutual Funds towards Risk and Returnsin Various Investment Avenues:",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Management and Social Science Research Review, Vol.1, Issue.2, Aug - 2014. Page No.245-265"
                        },
                        {
                            "S.No": "13",
                            "Title of the Paper": "Constructing an Optimal Portfolio Using Sharpe&rsquo;s Single Index Model:",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Management and Social Science Research Review, Vol.1, Issue.5, Nov - 2014. Page No. 204-216."
                        },
                        {
                            "S.No": "14",
                            "Title of the Paper": "&ldquo;A Study on Impact of Job Enrichment Practices towards Employee Satisfaction at HDFC Standard Life Insurance&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Advanced Research in Management and Social Sciences (ISSN 2278 - 6236) Vol-2, Issue-12, Dec 2013, pp. 205-218."
                        },
                        {
                            "S.No": "15",
                            "Title of the Paper": "&ldquo;Analysis of Perception of Customers towards Newspapers Publishing Industry with Special Reference to The New Indian Express in Bangalore&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Management, IT and Engineering (ISSN: 2249-0558) Vol-3, Issue- 12, Dec 2013, pp. 124-139."
                        },
                        {
                            "S.No": "16",
                            "Title of the Paper": "&ldquo;Non-Performing Assets is a Threat to India Banking Sector - A Comparative study between Priority and Non-Priority Sector Lending in Public sector banks&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Advanced Research in Management and Social Sciences (ISSN 2278 - 6236) Vol-2, Issue-11, Nov 2013, pp. 29-43."
                        },
                        {
                            "S.No": "17",
                            "Title of the Paper": "&ldquo;A Study on Risk & Return Analysis of Indian I.T. Industry&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "The International Journal of Management Research & Reviews (IJMRR) (ISSN 2249- 7196), Nov 2013, Volume 3, Issue 11, Article No-12, pp. 3790-3800."
                        },
                        {
                            "S.No": "18",
                            "Title of the Paper": "&ldquo;Analysis of Employee Perception towards Talent Management practices with special reference to Retail Industry in Bangalore Region&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "The International Journal of Management Research & Reviews (IJMRR)) (ISSN 2249- 7196), Nov 2013, Volume 3, Issue 11, Article No-5, pp. 3737-3745."
                        },
                        {
                            "S.No": "19",
                            "Title of the Paper": "&ldquo;Financial Performance Analysis of State Bank of India and ICICI Bank in India: A Comparative Study&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "The International Journal of Management Research & Reviews (IJMRR) (ISSN 2249-7196), Oct 2013, Volume 3, Issue 9, ArticleNo-12, pp. 3649- 3657."
                        },
                        {
                            "S.No": "20",
                            "Title of the Paper": "&ldquo;A Study on impact of Work Life Stress on Job with Special Reference to BPO Employees in Bangalore&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "PREVOYANCE - 2013 &ldquo;Re-engineering of Indian Economy Opportunities & Challenges&rdquo; National conference, Organized by Shirdi Sai Engineering College on 24th October 2013."
                        },
                        {
                            "S.No": "21",
                            "Title of the Paper": "&ldquo;A Study on Customer Awareness towards Loan Products & Services in Bangalore with Special Reference to State Bank of India&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "PREVOYANCE - 2013 &ldquo;Re-engineering of Indian Economy Opportunities & Challenges&rdquo; National conference, Organized by Shirdi Sai Engineering College on 24th October 2013."
                        },
                        {
                            "S.No": "22",
                            "Title of the Paper": "&ldquo;Asset & Liability Management of Public sector banks in India&quot;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Convergence of Science, Engineering & Management in Education and Research&ndash; 2013 held at Dayananda Sagar Institutions Campus, Bangalore on 26th & 27th Sept 2013."
                        },
                        {
                            "S.No": "23",
                            "Title of the Paper": "&ldquo;A Study on Performance of Unit-Linked Insurance Plans (ULIP) offered by Indian Private Insurance Companies&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Advanced Research in Management and Social Sciences (ISSN 2278 - 6236), Vol-2, Issue-8, Aug 2013, pp.114-127."
                        },
                        {
                            "S.No": "24",
                            "Title of the Paper": "&ldquo;A Study on Employee Engagement towards Organizational Performance at Private Hospitals in Bangalore&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference on Emerging Trends in Engineering Management &ndash; 2013 organized by JSS Academy of Technical Education, Bangalore on July 4-5, 2013"
                        },
                        {
                            "S.No": "25",
                            "Title of the Paper": "&ldquo;Analysis on the Performance of Non-Performing Assets in India &ndash; A Comparative Study of Public and Private Sector Banks&rdquo;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference on Emerging Trends in Engineering Management &ndash; 2013 organized by JSS Academy of Technical Education, Bangalore on July4-5, 2013"
                        },
                        {
                            "S.No": "26",
                            "Title of the Paper": "Production with Reference to Productivity in Arignar Anna Industrial Weavers Co- operatives.",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "&quot;Indian Co-operative Review&quot; National Co-operativeUnion of India, July 1998."
                        },
                        {
                            "S.No": "27",
                            "Title of the Paper": "Risk Management in Co-operative Banks,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "&quot;The Tamil Nadu Journal of Co- operation Tamil Nadu Co-operative Union, Vol. 91, No. 8, No. 1999."
                        },
                        {
                            "S.No": "28",
                            "Title of the Paper": "Financing Non-Farm Sector,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Kisan World Vol. 27, No.1, Page No 55 Jan. 2000"
                        },
                        {
                            "S.No": "29",
                            "Title of the Paper": "Need for Sustainable Development in Co-operatives,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "The Tamil Nadu Journal of Co-operation&quot;, Tamil Nadu Co-operative Union Vol. 94, March 2000."
                        },
                        {
                            "S.No": "30",
                            "Title of the Paper": "An Analysis of NPA, Prudential Norms & Income Recognition for DCCBs in Tamil Nadu,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "The Tamil Nadu Journal of Co-operation, Tamil Nadu Co- operative Union Vol. 29, April 2000."
                        },
                        {
                            "S.No": "31",
                            "Title of the Paper": "Towards Organizational Changes and Development in Co-operatives&quot;,",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "The Tamil Nadu Journal of Co-operation, TNCU Vol. 95. July 2000."
                        },
                        {
                            "S.No": "32",
                            "Title of the Paper": "E-Commerce and on-Credit Co-operative Organizations",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "&quot;Kisan World&quot; Vol.27 No. 12 Dec. 2000."
                        },
                        {
                            "S.No": "33",
                            "Title of the Paper": "Emergence of E-Commerce in Sectoral Co-operative Organizations&quot;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": ". The Tamil Nadu Journal of Co-operation, TNCU, Vol.2, Nov 2001."
                        },
                        {
                            "S.No": "34",
                            "Title of the Paper": "Control Techniques and Management of Co-operative Organizations&quot;",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "&quot;Kisan World&quot; Vol. No. 13. June 2002."
                        }
                    ]
                },
                {
                    "title": "Book Publications",
                    "content": [
                        "Management & Organizational Behavior; Jayvee International Publications I Edition; Bengaluru, ISBN No. 9788194100218",
                        "Human Resource Management: Jayvee International Publications I Edition; Bengaluru, ISBN No.9788193740347",
                        "Accounting for Management: Jayvee International Publications I Edition; Bengaluru, ISBN No. 9788193740348",
                        "Accounting for Managers: Jayvee International Publications; ISBN No: 978819374034",
                        "Strategic Management: Jayvee International Publications I Edition; Bengaluru, ISBN No.9788193740385",
                        "Entrepreneurship Development; Jayvee International Publications I Edition;Bengaluru, ISBN No.9788193740378",
                        "Legal and Business Environment; Jayvee International Publications I Edition; Bengaluru, ISBN No.9788193740354",
                        "Written a book for IVth Semester MBA (VTU) &ndash; Work Place Ethics & Value Systems &ndash; Thakur Publishers at New Delhi with ISBN:978-93-5163-892-6",
                        "Written a book for IVth Semester MBA (VTU) &ndash; Principles & Practices of Banking &ndash; Thakur Publishers at New Delhi with ISBN:978-93-5163-629-8",
                        "Written a book for IIIrd Semester MBA (VTU) &ndash; Principles & Practices of Banking &ndash; Thakur Publishers at New Delhi with ISBN:978-93-83130-95-5",
                        "Written a book for IInd Semester MBA (VTU) &ndash; Entrepreneurial Development &ndash; Thakur Publishers at New Delhi with ISBN:978-93-5163-423-2",
                        "Written a book for IIIrd Semester MBA (VTU) &ndash; Strategic Management &ndash;Thakur Publishers at New Delhi with ISBN:978-93-83130-86-3",
                        "Written a book for 1st Semester MBA (VTU) &ndash; Managerial Economics for Managers &ndash; Thakur Publishers at New Delhi with ISBN:978-93-83130-86-3",
                        "Written a book for IIrd Semester MBA (VTU) &ndash; Strategic Management &ndash;Thakur Publishers at New Delhi with ISBN:978-93-5163-425-6",
                        "Written a book for Ist Semester MCA (VTU) &ndash; Fundamentals of Computers &ndash;Thakur Publishers at Bangalore with ISBN:978-93-83130-86-5",
                        "Written a book for III Semester MBA (Mysore University) &ndash; Business Environment &ndash;AMP Publishers at Bangalore",
                        "Written a book for Ist Semester MBA (Mysore University) &ndash; Management Information System &ndash; AMP Publishers at Bangalore",
                        "Written a Book for Ist Semester MBA (Mysore University)- Managerial Economics- AMP Publishers, Bangalore."
                    ]
                }
            ]
    },

    "Dr. D. Pradeep Kumar": {
        "name": "Dr. D. Pradeep Kumar",
        "email": "drpradeep@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. D. Pradeep.JPG",
        "designation": "Professor &amp; Registrar (I/c)",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Strategic Marketing",
                            "Branch": "Management Studies",
                            "College Name/University": "Sri Krishnadevaraya University, Anantapur",
                            "Year of Passing": "2004"
                        },
                        {
                            "Course": "M.B.A.",
                            "Specialization": "HR, Marketing",
                            "Branch": "Management Studies",
                            "College Name/University": "Sri Krishnadevaraya University, Anantapur",
                            "Year of Passing": "1988"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "MPC",
                            "Branch": "B.Sc. (MPC)",
                            "College Name/University": "Govt Arts College for Men, Kadapa, AP.",
                            "Year of Passing": "1986"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Marketing Management, Human Resource Management and Strategy, Business Analytics and Digital Marketing."
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=56578829200",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/274669",
                        "Google scholar : https://scholar.google.com/citations?pli=1&authuser=1&user=ab_wxIcAAAAJ",
                        "h-Index (As per Scopus Data) : 14"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023",
                            "Author Position": "1",
                            "Details of Research Publication": "Reduction of dimensions of Customer Satisfaction in Food Delivery Apps using Confirmatory Factor Analysis, 2023 1st International Conference on Optimization Techniques for Learning, ICOTL 2023 - Proceedings",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2021",
                            "Author Position": "1",
                            "Details of Research Publication": "A secure information discovery using mobile agents in wireless industry 4.0 networks",
                            "Indexing": "SCI & Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018",
                            "Author Position": "3",
                            "Details of Research Publication": "A Study on Marketing Constraints of Cotton and Groundnut farmers with reference to Kurnool District",
                            "Indexing": "SCI & Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Efficiency Scores of Commercial Banks in India: Data Envelopment Analysis",
                            "Indexing": "SCI & Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018",
                            "Author Position": "2",
                            "Details of Research Publication": "Determinants of Foreign Direct Investment in Indian Automobile Industry-An Empirical Study",
                            "Indexing": "SCI & Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "An introduction to universal accounting (IFRS) basic understanding on international gaap (Is it an original office system or a new standard)-in connection with India",
                            "Indexing": "SCI & Scopus",
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
                            "Academic Year": "",
                            "Funded Project / Event": "Funded Project",
                            "Role": "",
                            "Title of the Project/Event": "Skill and Personality Development Program for SC/ST students",
                            "Amount in Rs. /-": "18,53,000",
                            "Funding Agency": "AICTE"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "A reviewer of certain international journals and Editor-in-Chief of MIJBR, an international Journal",
                        "Organized one national and two international conferences with AICTE funding and many workshops, seminars and training programs",
                        "ISTE Life Member",
                        "Member of Bangalore management Association (BMA)",
                        "Achieved NPTEL Domain Scholar status in the Fundamental faculty domain."
                    ]
                },
                {
                    "title": "My Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "Impact of High Performance Work Practices (HPWP) on Employee Retention in IT Industry",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Contemporary Issues in Business and Government, 28(3), 731-742. doi: 10.47750/cibg.2022.28.03.057"
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "A Study On Employee Satisfaction and Performance at Cement Industries in Rayalaseema Region",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Applied Business and Economic Research, Vol 6, Iss.6,495-506"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "Impact of GST on Automobile Sector In India",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Mechanical Engineering and Technology, Vol 6, Iss.6"
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "Employee Engagement and its Impact on Employee Performance \u2013 A Comparative Study of Cement Companies in Rayalaseema Region",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Asia Pacific Journal of Research, special Issue pp:60-67"
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "Impact of Foreign Direct Investment on India\u2019s Automobile Companies with Reference to Maruthi Suzuki and Tata Motors",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Asia Pacific Journal of Research, special issue pp:78-86"
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "Impact Of FDI In Automobile Industry In India",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Anveshana\u2019s International Journal Of Research In Regional Studies. Law, Social Sciences, Journalism And Management Practices, Volume 2, Issue 2"
                        },
                        {
                            "S.No": "7",
                            "Title of the Paper": "An Empirical Research Paper on The Consequences Of Employee Engagement on Employee Performance Of Indian Cement Industry",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Management and Applied Science, Volume-3, Issue-3, pages:38-42"
                        },
                        {
                            "S.No": "8",
                            "Title of the Paper": "Impact of Foreign Direct Investment on India\u2019s Automobile Companies With Reference To M & M And Ashok Leyland",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal Of Management And Applied Science, Volume-3, Issue-3"
                        }
                    ]
                },
                {
                    "title": "Conferences & Workshops attended",
                    "content": [
                        "Participated in 5 Day Workshop on \u201cNBA & NAAC Accreditation Process\u201d Sponsored by AICTE under Margadarshana Scheme at M S Ramaiah Institute of Technology, Bengaluru on 10th Dec - 14th Dec 2018.",
                        "Two day Convention on Business Analysis on 4th and 5th of August, 2016 at Nimhans Convention Centre, Bangalore.",
                        "The Management Development Programme for Senior Representatives of TEQIP Institutions in Andhra Pradesh during 2-3, September, 2013 at Indian School of Business, Gachibowli, Hyderabad \u2013 500032.",
                        "Two Day TEQIP 2nd PERIODIC STATE LEVEL WORKSHOP AT JNTUH, HYDERABAD from 25-26 June 2013.",
                        "A Valuation of Property in India, Presented at an International Conference by Dr. D. Pradeep Kumar organised by Osmania University, March 3rd , 4th 2010.",
                        "A Study on Housing Insurance in Indian Scenario, Presented at St.Gaits Institution of Technology and Management, Kathari Kerala, Sep 3rd, 4th, 5th 2010.",
                        "A Study on Housing Index, presented at Symbyosis, A Summit",
                        "\u201cA Study on Banking Operational Efficiency\u201d presented at SRNIT Bengaluru."
                    ]
                }
            ]
    },

    "Dr. N. Gangisetty": {
        "name": "Dr. N. Gangisetty",
        "email": "gangisetty@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Gangi Setty.JPG",
        "designation": "Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Commerce",
                            "Branch": "Commerce",
                            "College Name/University": "Sri Venkateswara University, Tirupati",
                            "Year of Passing": "2007"
                        },
                        {
                            "Course": "M.Com.",
                            "Specialization": "Commerce",
                            "Branch": "Commerce",
                            "College Name/University": "Sri Venkateswara University, Tirupati",
                            "Year of Passing": "1997"
                        },
                        {
                            "Course": "B.Com.",
                            "Specialization": "Commerce",
                            "Branch": "Commerce",
                            "College Name/University": "Sri Venkateswara University, Tirupati",
                            "Year of Passing": "1995"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=57200986866",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/274035",
                        "Google scholar : https://scholar.google.co.in/citations?user=eRFqcysAAAAJ",
                        "h-Index (As per Scopus Data) : 2"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Author Position": "5",
                            "Details of Research Publication": "&ldquo;Residual stresses and microstructure analysis of SS316L impeller part using selective laser melting: simulation and experimental validation&rdquo;, DOI: https://doi.org/10.1007/s12008-025-02333-3",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Impact of Hybrid Work Model on Job Satisfaction of Techies during the COVID-19 Pandemic. https://doi.org/10.62754/joe.v3i4.3502",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Author Position": "3",
                            "Details of Research Publication": "&ldquo;Impact of COVID-19 Pandemic on Digital Payments in India: A Study&rdquo;. DOI: 10.47750/cibg.2022.28.02.059",
                            "Indexing": "ABDC-C",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "ABDC-C"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;Structural Equation Model (SEM)-Predicting Shoppers Shopping Experience in Malls&rdquo; DOI: 10.47750/cibg.2022.28.03.009",
                            "Indexing": "ABDC-C",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "ABDC-C"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2019",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;The impact of Visual Merchandising on Consumer Buying Behaviour: A case of Bangalore Big Bazar&rdquo; &lsquo;INTERNATIONAL JOURNAL OF ADVANCED SCIENCE AND TECHNOLOGY&rsquo;, (SCOUPUS); Volume 28, No.9, (2019), pp.: 360-371, ISSN: 2005-4238 (Print)",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2018",
                            "Author Position": "1",
                            "Details of Research Publication": "&ldquo;A Predictive Investigation of Shoppers shopping experience in malls&rdquo;, &lsquo;INTERNATIONAL JOURNAL OF MECHANICAL ENGINEERING AND TECHNOLOGY&rsquo;, (SCOUPUS); Volume 9, Issue 2, January-2018, pp.: 482-492, ISSN: 0976-6359 (Print), (Impact factor 2) ( http://www.iaeme.com/IJMET/index.asp )",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                }
            ]
    },

    "Dr. K. V. Geetha Devi": {
      name: "Dr. K. V. Geetha Devi",
      designation: "Assoc. Professor",
      email: "drgeethadevi@mits.ac.in",
      officeAddress: "South Block",
      image: "https://mits.ac.in/public/uploads/faculty/DSC_6966.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Human Resource", "Branch": "Management", "College Name/University": "S.K. University, Anantapur", "Year of Passing": "2013"},
            {"S.No": "2", "Course": "M.B.A.", "Specialization": "Finance & Human Resource", "Branch": "Management", "College Name/University": "S.K. University, Anantapur", "Year of Passing": "2014"},
            {"S.No": "3", "Course": "Executive M.B.A.", "Specialization": "Management", "Branch": "Management", "College Name/University": "Acharya Nagarjuna University, Guntur", "Year of Passing": "2010"},
            {"S.No": "4", "Course": "PGDBA", "Specialization": "Management", "Branch": "Management", "College Name/University": "S.K. University, Anantapur", "Year of Passing": "2008"},
            {"S.No": "5", "Course": "M.Com.", "Specialization": "Finance", "Branch": "Commerce", "College Name/University": "Kakatiya University, Warangal", "Year of Passing": "1998"},
            {"S.No": "6", "Course": "B.Com.", "Specialization": "Accounting & Finance", "Branch": "Commerce", "College Name/University": "Kakatiya University, Warangal", "Year of Passing": "1996"}
          ]
        },
        {
          title: "Research Areas",
          content: "Entrepreneurship, Finance and HR"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57195930280"},
            {"Identifier": "Vidwan", "Link": "https://mits.irins.org/profile/274014"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=bPlMhWgAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "1"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "4", "Details of Research Publication": "Assessing the Impact of ESG factors on Firm performance: Empirical Evidence from CRIP sector. DOI: 10.1007/978-981-97-7206-3_19", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "4", "Details of Research Publication": "AI for Personalization : Transforming Customer Journeys in Self-Service Technology. DOI: 10.4018/979-8-3373-4667-0.ch010", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "2", "Details of Research Publication": "Women coginitive buying behaviour towards online shopping: A study of households in India. a0acbc8cbf474fa450297e6614a5bffa.pdf (eurchembull.com)", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "Assessing the Performances of Vendor Firms by Optimization Technique Industry 4.0 GSC Architectures.DOI: 10.4018/IJSESD.2021070101", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2016-17", "Author Position": "3", "Details of Research Publication": "Role of induction in enhancing the skills of civil engineering Students and reaching expectations a case study with reference to engineering education Andhra Pradesh”", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2017-18", "Author Position": "3", "Details of Research Publication": "“Are Certain brand Personality Dimensions More Valuable at Driving Loyalty than Others?”", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "202541049385 A", "Title of the Patent": "PREDICTIVE CASH FLOW FORECASTING USING HISTORICAL DATA AND BEHAVIORAL DATA AND OUTPUT", "Status": "Published"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Ratified as Assistant Professor  by JNTUA, Ananthapuramu.",
            "Life Member: Indian Accounting Association, Membership No. TR-39.(07/12/24)"
          ]
        }
      ]
    },

    "Dr. N. Seshadri": {
        "name": "Dr. N. Seshadri",
        "email": "seshadrin@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/DSC_6973.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Banking",
                            "Group": "Management",
                            "College Name/University": "J.N.T.U. Anantapuramu",
                            "Year of Passing": "2017"
                        },
                        {
                            "Course": "M.B.A.",
                            "Specialization": "Finance",
                            "Group": "M.B.A",
                            "College Name/University": "A.I.T.S Rajampet / J.N.T.U. Hyderabad",
                            "Year of Passing": "2003"
                        },
                        {
                            "Course": "B.Com.",
                            "Specialization": "Commerce",
                            "Group": "Commerce",
                            "College Name/University": "Govt Degree College Anantapuramu/ S.K.University",
                            "Year of Passing": "2000"
                        }
                    ]
                },
                {
                    "title": "My Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "Study on Efficiency Indicators of Public and Private sector banks in India",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "IOSR Journal of Economics and Finance (IOSR-JEF) e-ISSN: 2321-5933, p-ISSN: 2321-5925 PP 21-25",
                            "Overall similarity % Index received from Turnitin": "15"
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "Efficiency of Public & Private Commercial Banks in India A Comparative Study",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Volume : 3 | Issue : 1 | January 2014 &bull; ISSN No 2277 - 8179",
                            "Overall similarity % Index received from Turnitin": "18"
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "A Study on Efficiency and Productivity of Commercial banks using Accounting Measures",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Volume : 4 | Issue : 1 | Jan 2014 | ISSN - 2249-555X",
                            "Overall similarity % Index received from Turnitin": "15"
                        },
                        {
                            "Column_1": "4",
                            "Column_2": "Role of induction in enhancing the skills of civil engineering Students and reaching expectations a case study with reference to engineering education Andhra Pradesh",
                            "Column_3": "International Journal of Civil Engineering & Technology (IJCIET), vol.8,Iss.12,316-323"
                        }
                    ]
                },
                {
                    "title": "Conferences & Workshops attended",
                    "content": "Participated in Five-day Train the Trainers Programme (PDP) on &quot;Entrepreneurship and venture creation&quot; was organized by JNTUA in association with Wadhwani Foundation from 10.03.2025 to 14.03.2025 at JNTU College of Engineering, Anantapuram."
                }
            ]
    },

    "Dr. Venkateswarlu Karumuri": {
        "name": "Dr. Venkateswarlu Karumuri",
        "email": "drvenkateswarluk@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/DSC_6997.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Marketing",
                            "Branch": "Management Studies",
                            "College Name/University": "Andhra university",
                            "Year of Passing": "2019"
                        },
                        {
                            "Course": "M.B.A.",
                            "Specialization": "HR & Marketing",
                            "Branch": "M.B.A.",
                            "College Name/University": "GVP College for Degree and PG Courses, Andhra university",
                            "Year of Passing": "2009"
                        },
                        {
                            "Course": "M.A.",
                            "Specialization": "English",
                            "Branch": "M.A.",
                            "College Name/University": "Acharya Nagarjuna University",
                            "Year of Passing": "2007"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=57430080200",
                        "Vidwan Link: https://vidwan.inflibnet.ac.in/profile/214945",
                        "Google scholar Link: https://scholar.google.com/citations?user=cKW_hrIAAAAJ&hl=en",
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
                            "Author Position": "",
                            "Details of Research Publication": "A Study on Digital Green Marketing and Its Role in &lrm;Promoting Eco-Friendly Products in Urban Markets. International Journal of Accounting and Economics Studies, 13(1), 309-315. https://doi.org/10.14419/n3q34m94",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "",
                            "Details of Research Publication": "HRM Unleashed: Modelling Employee Engagement Through the Mediating Lens of Job Satisfaction with SEM. Indian Journal of Information Sources and Services, 16(1), 231&ndash;239. https://doi.org/10.51983/ijiss-2026.16.1.24",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "1",
                            "Details of Research Publication": "Optimizing Financial Outcomes: An Analysis of Individual Investment Decision Factors. Indian Journal of Information Sources and Services, 15(1), 83&ndash;90. https://doi.org/10.51983/ijiss-2025.IJISS.15.1.13",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "IoE Integration in Real-Time Pharmaceutical Supply Chains, Role of Internet of Everything (IoE), VLSI Architecture, and AI in Real-Time Systems edited by Digvijay Pandey, Balakumar Muniandi, Binay Kumar Pandey, A. Shaji George, IGI Global Scientific Publishing, New Delhi, Dec 2024, pp.433 &ndash; 447 with DOI: 10.4018/979-8-3693-7367-5.ch029",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "5",
                            "Details of Research Publication": "Optimizing Supply Chain Management With IoE and AI, Interdisciplinary Approaches to AI, Internet of Everything, and Machine Learning edited by edited by Digvijay Pandey, Balakumar Muniandi, Binay Kumar Pandey, A. Shaji George, IGI Global Scientific Publishing, New Delhi, Dec 2024, pp.423 &ndash; 436 with DOI: 10.4018/979-8-3373-1032-9.ch027",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                },
                {
                    "title": "Research Projects & Events",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2015-16",
                            "Funded Project /Event": "Funded Project",
                            "Role": "P.I",
                            "Title of the Project/Event": "A study on sales force engagement practices in real estate (Housing and Property Development) sector with reference to Visakhapatnam city",
                            "Amount in Rs. /-": "90,000",
                            "Funding Agency": "UGC"
                        }
                    ]
                },
                {
                    "title": "Consultancy",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2012-13",
                            "Name of the Consulting Firm": "NTPC Simhadri, Visakhapatnam",
                            "Title of the Project/Event": "Society Perception Survey",
                            "Amount in Rs. /-": "1,10,000"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "Others",
                            "Academic Year": "2014-15",
                            "Name of the Consulting Firm": "NTPC Simhadri, Visakhapatnam",
                            "Title of the Project/Event": "Society Perception Survey",
                            "Amount in Rs. /-": "1,15,000"
                        }
                    ]
                }
            ]
    },

    "Dr. E. Gnanaprasuna": {
        "name": "Dr. E. Gnanaprasuna",
        "email": "drgnanaprasunae@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. E. Gnanaprasuna MBA.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "HR",
                            "Branch": "Management Studies",
                            "College Name/University": "S V University, Tirupati",
                            "Year of Passing": "2021"
                        },
                        {
                            "Course": "M.B.A.",
                            "Specialization": "Finance",
                            "Branch": "M.B.A.",
                            "College Name/University": "SIMS, Puttur",
                            "Year of Passing": "2009"
                        },
                        {
                            "Course": "B.Com",
                            "Specialization": "Commerce",
                            "Branch": "Commerce",
                            "College Name/University": "SPW Degree College, Tirupathi",
                            "Year of Passing": "2007"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Finance & HR"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=59335717400",
                        "Vidwan : https://mits.irins.org/profile/460177",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=qU3WVcsAAAAJ",
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
                            "Details of Research Publication": "Impact of Capital Structure on The Performance of Non-Financial Firms in Emerging Markets: &lrm;Evidence from The Bombay Stock Exchange Using GMM Estimation DOI: https://doi.org/10.14419/wdz50q51",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Exploring Financial Innovation Through Cryptocurrency: A Global Systematic and Bibliometric Analysis.DOI: https://doi.org/10.14419/1rv9b847",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Smart Cognitive Mobile Clouds for Revolutionizing HRM and Financial IoT Solution,&quot; 2025 2nd International Conference on Artificial Intelligence and Knowledge Discovery in Concurrent Engineering (ICECONF), Chennai, India, 2025, pp. 1-9, doi: 10.1109/ICECONF65644.2025.11379681.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "3",
                            "Details of Research Publication": "Designing a FinTech Adoption Index: A Strategic Framework for Measuring Digital Transformation in Asian Banks.&quot; Determinants of FinTech Adoption and Banks Financial Performance. IGI Global Scientific Publishing, 2027. 195-226.",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Novel Metrics Introduced to Quantify the Level of Circularity in Business Models Enabled by Open Innovation.DOI: 10.1109/TQCEBT59414.2024.10545093",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2024-25",
                            "Author Position": "2",
                            "Details of Research Publication": "Interface Technology: Increasing the effectiveness of medical financial decision &ndash;making.DOI: 10.4018/979-8-3373-5122-3.ch007",
                            "Indexing": "Scopus",
                            "Publication": "Book Chapter",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": "Ratified as Assistant Professor by JNTUA, Ananthapuramu."
                }
            ]
    },

    "Dr. B. Rajesh Kumar": {
        "name": "Dr. B. Rajesh Kumar",
        "email": "drrajeshkumarb@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. B. Rajesh Kumar.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Human Resource Management",
                            "Branch": "Management Studies",
                            "College Name/University": "Andhra University, Visakhapatnam",
                            "Year of Passing": "2022"
                        },
                        {
                            "Course": "M.B.A.",
                            "Specialization": "Human Resource Management",
                            "Branch": "Management Studies",
                            "College Name/University": "Aditya Institute of Technology And Management, JNUT Kakinada",
                            "Year of Passing": "2010"
                        },
                        {
                            "Course": "M.Sc.",
                            "Specialization": "Sciences",
                            "Branch": "M.Sc.",
                            "College Name/University": "Acharya Nagarjuna University",
                            "Year of Passing": "2007"
                        },
                        {
                            "Course": "B.Ed.",
                            "Specialization": "Education",
                            "Branch": "B.Ed.",
                            "College Name/University": "Dr PVJRAJAH Sahib College Of Education, Vizianagaram",
                            "Year of Passing": "2004"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Sciences",
                            "Branch": "B.Sc.",
                            "College Name/University": "MR A College, Vizianagaram",
                            "Year of Passing": "2002"
                        }
                    ]
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=59280802700",
                        "Vidwan : https://mits.irins.org/profile/319326",
                        "Google scholar : https://scholar.google.com/citations?user=hzTyBnIAAAAJ&hl=en",
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
                            "Details of Research Publication": "A Novel Optimized Hybrid LSTM-Based Dynamic Demand Forecasting Model for Resilient Supply Chains DOI: 10.1109/I2ITCON65200.2025.11210705",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "IEEE"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "5",
                            "Details of Research Publication": "An Efficient Classification Algorithms for Prediction of Employee Performance Based on Mask RCNN-BILSTM Techniques DOI: 10.1109/ICDSNS65743.2025.11168777",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "IEEE"
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
                            "Application ID": "202441060622 A",
                            "Title of the Patent": "Lean six sigma for enhancing hospital patient safety and quality improvement in healthcare",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Received the Best Faculty Award (Education Excellence Award) from ESN Publications, Chennai, on 30 January 2021.",
                        "Honored with the Best Teacher Award by CAPE Forum &ndash; You Trust, Kanyakumari District, on 5 September 2020.",
                        "Qualified National Eligibility Test (NET) for Assistant Professor/Lectureship conducted by the University Grants Commission (UGC) in Labor Welfare, Personnel Management, Industrial Relations, Labour and Social Welfare, and Human Resource Management (June 2015).",
                        "Qualified National Eligibility Test (NET) for Assistant Professor/Lectureship in Management, conducted by UGC (December 2013).",
                        "Qualified State Eligibility Test (SET/SLET) for Assistant Professor/Lectureship, conducted by Osmania University (2012).",
                        "Received Best Faculty Award from the MBA Department, Gokul Institute of Technology and Sciences, for the academic year 2012&ndash;2013.",
                        "Published a book AI & ML in Business and Human Resource Management, Amaravathi Publishing House.",
                        "Published a book Human Resource Management, Blue International Publishers."
                    ]
                }
            ]
    },

    "Dr. G. Thouseef Ahamed": {
      name: "Dr. G. Thouseef Ahamed",
      designation: "Asst. Professor",
      email: "drthouseefahamedg@mits.ac.in",
      officeAddress: "South Block",
      image: "https://mits.ac.in/public/uploads/faculty/DSC_7021.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Finance    Management", "Branch": "Management Studies", "College Name/University": "Sri Krishnadevaraya University, Anantapuramu", "Year of Passing": "2022"},
            {"S.No": "2", "Course": "M.B.A", "Specialization": "Finance    Management", "Branch": "Management Studies", "College Name/University": "St. Johns College of Engineering & Technology, JNTUA", "Year of Passing": "2011"},
            {"S.No": "3", "Course": "B.B.M.", "Specialization": "Business Management", "Branch": "B.B.M.", "College Name/University": "Dr. Jyothirmayi Degree College, SKU University", "Year of Passing": "2009"}
          ]
        },
        {
          title: "Research Areas",
          content: "Corporate Finance, Financial Markets & Institutions, Investment Management and Financial Derivatives"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": ""},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/585400"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=K_Bhqx0AAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": ""}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Qualified Andhra Pradesh State Eligibility Test (APSET) a state level Eligibility test for lectureship in the subject of Management conducted by Osmania University, Hyderabad on behalf of University Grants Commission (UGC).",
            "Ratified as Associated Professor by Osmania University, Hyderabad",
            "Ratified as Assistant Professor by the JNTU, Anantapuram."
          ]
        }
      ]
    },

    "Dr. V V Subba Rao Adhikari": {
        "name": "Dr. V V Subba Rao Adhikari",
        "email": "drsubbaraoavv@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/subba.jpg",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "HR & IR",
                            "Group": "Management Studies",
                            "College Name/University": "School of Management & Labour Studies, Tata Institute of Social Sciences (TISS), Mumbai",
                            "Year of Passing": "2023"
                        },
                        {
                            "Course": "M.Phil",
                            "Specialization": "HR & IR",
                            "Group": "Management Studies",
                            "College Name/University": "School of Management & Labour Studies, Tata Institute of Social Sciences (TISS), Mumbai",
                            "Year of Passing": "2019"
                        },
                        {
                            "Course": "M.B.A.",
                            "Specialization": "H.R. & Marketing",
                            "Group": "Management Studies",
                            "College Name/University": "JNTUK, Kakinada",
                            "Year of Passing": "2014"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Mathematics, Statistics & Computer Science",
                            "Group": "B.Sc.",
                            "College Name/University": "Andhra University",
                            "Year of Passing": "2010"
                        }
                    ]
                },
                {
                    "title": "List of Publications",
                    "content": [
                        {
                            "S.No": "1",
                            "Title of the Paper": "Technology spurred productivity in India: Higher growth in output at a much lower employment",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "Public Policy & Management: Emerging issues, 7th PAN-IIM World Management Conference (7th PAN IIM WMC), 11th- 14th December, 2019, ISBN No. 978-93-5396-084- 1, Indian Institute of Management (IIM) Rohtak, India."
                        },
                        {
                            "S.No": "2",
                            "Title of the Paper": "Artificial Intelligence (AI) centric future of work: The HR Challenges - A thematic analysis",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "First PAN IIT International Management Conference (PANIITIMC&rsquo;18), Nov. 30- Dec. 02 2018, Department of Management Studies, Indian Institute of Technology (IIT), Roorkee, India."
                        },
                        {
                            "S.No": "3",
                            "Title of the Paper": "The plight of contract workers in an Indian state-controlled Maharatna status manufacturing company: A Qualitative analysis with the legal perspective of The Contract Labour Regulation and Abolition Act (CLRA Act) 1970",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on &lsquo;Co-operatives in the Changing World of Work&rsquo; (IIM Kozhikode- COOPATHON&rsquo;18), 29th April -1st May 2018, Indian Institute of Management (IIM), ISBN No. 978-81-926239-4-8, Kozhikode, India."
                        },
                        {
                            "S.No": "4",
                            "Title of the Paper": "Use of Nanotechnology in Smart Cities",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "International Conference on Smart Cities (ICSC&rsquo;16), 15 &ndash; 17 December 2016, RGMCET, Nandyal, India."
                        },
                        {
                            "S.No": "5",
                            "Title of the Paper": "Innovative Marketing of FMCG Products - Case Studies on Some Socio-Spiritual Organizations",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "2nd International Conference on CSR Commitmentfor Sustainable Development (VIT-CSRCON&rsquo;17), 19-20 January 2017, VIT, Vellore, India."
                        },
                        {
                            "S.No": "6",
                            "Title of the Paper": "An Exploration of Welfare Amenities Provided by the Employer in Indian Steel Company and Their Impact on Quality of Work Life",
                            "Full Journal Name / Conference Name, Volume number, page number, Date": "National Conference on Management and Business Opportunities in the Present Competitive Scenario, 3rd December 2016, VIT, Vellore, India."
                        }
                    ]
                }
            ]
    },

    "Dr. Kosaraju Sireesha": {
        "name": "Dr. Kosaraju Sireesha",
        "designation": "Asst. Professor",
        "email": "drsireeshak@mits.ac.in",
        "officeAddress": "South Block",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Kosaraju Sireesha.JPG",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Intelligence Systems",
                            "Branch": "Management Studies",
                            "College Name/University": "SPMVV, Tirupati",
                            "Year of Passing": "2025"
                        },
                        {
                            "Course": "M.B.A.",
                            "Specialization": "Finance Systems",
                            "Branch": "Management Studies",
                            "College Name/University": "SPMVV, Tirupati",
                            "Year of Passing": "2017"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Power Systems",
                            "Branch": "Electrical & Electronics Engineering",
                            "College Name/University": "K.L.University",
                            "Year of Passing": "2014"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Data Analytics, Artificial Intelligence"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus :",
                        "Vidwan : https://vidwan.inflibnet.ac.in/profile/650926",
                        "Google scholar : https://scholar.google.com/citations?hl=en&user=dNj9I0YAAAAJ",
                        "h-Index (As per Scopus Data) :"
                    ]
                },
                {
                    "title": "Patents",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "Others",
                            "Academic Year": "2025",
                            "Application ID": "464982-001",
                            "Title of the Patent": "AUTONOMOUS MOBILE INSPECTION DEVICE FOR CLASSROOM",
                            "Status": "Granted"
                        },
                        {
                            "S.No": "2",
                            "Affiliation": "MITS",
                            "Academic Year": "2025",
                            "Application ID": "202541114115",
                            "Title of the Patent": "WIRELESS CHARGING SYSTEM FOR ELECTRIC VEHICLES USING RESONANT INDUCTIVE COUPLING",
                            "Status": "Published"
                        },
                        {
                            "S.No": "3",
                            "Affiliation": "MITS",
                            "Academic Year": "2026",
                            "Application ID": "202641004819",
                            "Title of the Patent": "Digital image watermarking and tamper detection for intellectual property protection",
                            "Status": "Published"
                        }
                    ]
                },
                {
                    "title": "Awards/Achievements",
                    "content": [
                        "Guest Lecture on Entrepreneurship Awareness Program from Dec. 13, 2025 to Dec. 13, 2025",
                        "Research Excellence Award from Nov. 22, 2025 to Nov. 22, 2025"
                    ]
                }
            ]
    },

    "Dr. Prem Sundar. M": {
        "name": "Dr. Prem Sundar. M",
        "email": "drpremsundarm@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Prem Sundar. M.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Predictive Analytics",
                            "Branch": "Management Studies",
                            "College Name/University": "National Institute of Technology - Tiruchirappalli",
                            "Year of Passing": "2025"
                        },
                        {
                            "Course": "State Eligibility Test (SET)",
                            "Specialization": "Management Studies",
                            "Branch": "Management Studies",
                            "College Name/University": "Mother Teresa University",
                            "Year of Passing": "2016"
                        },
                        {
                            "Course": "M.B.A.",
                            "Specialization": "Systems and Analytics",
                            "Branch": "Management Studies",
                            "College Name/University": "National Institute of Technology - Tiruchirappalli",
                            "Year of Passing": "2011"
                        },
                        {
                            "Course": "B.Tech.",
                            "Specialization": "Information Technology",
                            "Branch": "Information Technology",
                            "College Name/University": "Amrita Vishwa Vidyapeetham - Coimbatore",
                            "Year of Passing": "2009"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Predictive Analytics, Applied Machine Learning, Data Science"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus:",
                        "Vidwan: https://researchid.co/rid144114",
                        "Google scholar: https://scholar.google.com/citations?user=kZHBt0cAAAAJ&hl=en",
                        "h-Index (As per Scopus Data):"
                    ]
                },
                {
                    "title": "Publication Details",
                    "content": [
                        {
                            "S.No": "1",
                            "Publication Affiliation": "Others",
                            "Academic Year": "",
                            "Author Position": "2",
                            "Details of Research Publication": "The Predictive influence of Age, Obesity, and Blood pressure on Diabetes prevalence in India: A Multivariate Regression analysis utilizing AHS CAB data",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "Others",
                            "Academic Year": "",
                            "Author Position": "2",
                            "Details of Research Publication": "Demographic Analysis on the prevalence of Diabetes in nine states of India",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                }
            ]
    },

    "Dr. Kolati Yeliyya": {
        "name": "Dr. Kolati Yeliyya",
        "email": "dryeliyyak@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. Kolati Yeliyya.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "Ph.D.",
                            "Specialization": "Environmental and Energy Economics",
                            "Branch": "Economics",
                            "College Name/University": "National Institute of Technology - Puducherry",
                            "Year of Passing": "2025"
                        },
                        {
                            "Course": "M.A.",
                            "Specialization": "Economics",
                            "Branch": "M.A.",
                            "College Name/University": "Mahatma Gandhi University Nalgonda, Telangana",
                            "Year of Passing": "2020"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Environmental Economics, Macro Economics, Financial Economics"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58104929400",
                        "Vidwan : https://www.researchid.co/rid144115",
                        "Google scholar : https://scholar.google.com/citations?user=zHsP39wAAAAJ&hl=en",
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
                            "Author Position": "1",
                            "Details of Research Publication": "Public&ndash;private partnership investments and the sustainability of India&rsquo;s transport sector. Discover Environment 4.1 (2026): 333.",
                            "Indexing": "ESCI",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "Financialization and fintech as drivers of solar, wind, and hydropower development. Humanities and Social Sciences Communications (2026).",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025",
                            "Author Position": "1",
                            "Details of Research Publication": "Do Renewable Energy Sources and Energy Infrastructure Contribute to Mitigating Energy Poverty? Exploring Uncharted Dynamics. Energy Strategy Reviews, Volume 58, pp. 101687, 2025.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2025-26",
                            "Author Position": "1",
                            "Details of Research Publication": "&quot;The influence of renewable energy sources on CO2 emissions: a multi-factor analysis across leading countries.&quot; Environmental Science and Pollution Research 32.34 (2025): 20461-20477.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Public-Private Partnerships Investment in Energy as New Determinant of Renewable Energy: The Role of Political Cooperation in China and India. Energy Reports, Volume 10, pp. 3092-3101, 2023.",
                            "Indexing": "SCIE",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                        },
                        {
                            "S.No": "6",
                            "Publication Affiliation": "Others",
                            "Academic Year": "2023",
                            "Author Position": "2",
                            "Details of Research Publication": "Does Renewable Energy Improve Environmental Quality? Evidence from RECAI Countries. Environmental Science and Pollution Research, Volume 30, pp. 100717&ndash; 100730, 2023.",
                            "Indexing": "Scopus",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                        }
                    ]
                }
            ]
    },

    "Mr. Roja Kiran": {
      name: "Mr. Roja Kiran",
      designation: "Asst. Professor",
      email: "rojakiranb@mits.ac.in",
      officeAddress: "South Block",
      image: "https://mits.ac.in/public/uploads/faculty/DSC_7005.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Human Resource", "Branch": "Management", "College Name/University": "S.K. University, Anantapur", "Year of Passing": "2013"},
            {"S.No": "2", "Course": "Ph.D.", "Specialization": "Finance", "Branch": "Finance", "College Name/University": "Andhra University", "Year of Passing": "Pursuing"},
            {"S.No": "3", "Course": "M.B.A.", "Specialization": "Management Studies", "Branch": "Management Studies", "College Name/University": "Andhra University", "Year of Passing": "2015"},
            {"S.No": "4", "Course": "B.Tech.", "Specialization": "EEE", "Branch": "EEE", "College Name/University": "Swarnandhra College of Engineering Technology", "Year of Passing": "2013"}
          ]
        },
        {
          title: "Research Areas",
          content: "Marketing Analytics"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": ""},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/459824"},
            {"Identifier": "Google scholar", "Link": ""},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": ""}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "UGC NET QUALIFIED IN MANAGEMENT FOR 2 TIMES IN 2020 AND 2019"
          ]
        }
      ]
    },

    "Mr. V. Venkata Rao": {
      name: "Mr. V. Venkata Rao",
      designation: "Asst. Professor",
      email: "venkataraov@mits.ac.in",
      officeAddress: "South Block",
      image: "https://mits.ac.in/public/uploads/faculty/DSC_7012.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "M.Phil.", "Specialization": "Finance", "Branch": "Finance", "College Name/University": "S.V. University", "Year of Passing": "2012"},
            {"S.No": "2", "Course": "M.B.A.", "Specialization": "MBA-Finance", "Branch": "M.B.A.", "College Name/University": "Acharya Nagarjuna University", "Year of Passing": "2007"},
            {"S.No": "3", "Course": "M.Com.", "Specialization": "Accounting", "Branch": "M.Com", "College Name/University": "Osmaniya University", "Year of Passing": "2000"},
            {"S.No": "4", "Course": "B.Com.", "Specialization": "Management Accounting", "Branch": "B.Com", "College Name/University": "Acharya Nagarjuna University", "Year of Passing": "1998"}
          ]
        },
        {
          title: "Research Areas",
          content: "Non-Performing Assets in DCCB"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": ""},
            {"Identifier": "Vidwan", "Link": "https://mits.irins.org/profile/274029"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=GxE6w0AAAAAJ&hl=en&oi=ao"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": ""}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2022", "Author Position": "2", "Details of Research Publication": "A Systematic Assessment for Investigating the Designed Atmospherics, attitude, behavioral impact, and its relationships in retail environment (with respect to Reliance trends, Bangalore).  Vol. 28 No. 4 (2022): The journal of contemporary issues in business and government.Pg no 121-137 https://cibgp.com/au/index.php/1323-6903/article/view/2442/2446", "Indexing": "ABDC-C", "Publication": "Research Article", "Journal Quartile": ""},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "1", "Details of Research Publication": "Impact of Non-Performing Assets towards Agricultural and Non-Agricultural Sector lending with special reference to District Cooperative Central Banks: A Comparative Study of Rayalaseema, Coastal, and North Andhra in Andhra Pradesh. DOI: https://doi.org/10.52783/jier.v5i1.2229 https://jier.org/index.php/journal/article/view/2229", "Indexing": "ABDC-C", "Publication": "Research Article", "Journal Quartile": ""}
          ]
        }
      ]
    },

    "Mr. B. Sreekanth": {
        "name": "Mr. B. Sreekanth",
        "email": "sreekanthb@mits.ac.in",
        "image": "https://mits.ac.in/public/uploads/faculty/Mr. B. Sreekanth.JPG",
        "designation": "Asst. Professor",
        "sections": [
                {
                    "title": "Details of Educational Qualification",
                    "content": [
                        {
                            "Course": "M.B.A.",
                            "Specialization": "International Marketing",
                            "Branch": "Management",
                            "College Name/University": "Edith Cowan University",
                            "Year of Passing": "2008"
                        },
                        {
                            "Course": "B.Sc.",
                            "Specialization": "Maths, Physics, Chemistry",
                            "Branch": "B.Sc.",
                            "College Name/University": "B T College",
                            "Year of Passing": "1993"
                        }
                    ]
                },
                {
                    "title": "Research Areas",
                    "content": "Marketing, Sustainable Development Goals"
                },
                {
                    "title": "Research Identifiers",
                    "content": [
                        "Scopus : https://www.scopus.com/authid/detail.uri?authorId=58919993200",
                        "Vidwan : https://vidwan.inflibnet.ac.in/myprofile",
                        "Google scholar : https://scholar.google.com/citations?user=AJ90G8EAAAAJ&hl=en&oi=sra",
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
                            "Details of Research Publication": "&quot;Towards 2030: Comparative Analysis of SDG Achievements in India, Indonesia and Japan Using Machine Learning Techniques,&quot; 2025 IEEE 13th Region 10 Humanitarian Technology Conference (R10-HTC), Ichikawa, Japan, 2025, pp. 1-6, doi: 10.1109/R10-HTC63995.2025.11394206.",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "2",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "1",
                            "Details of Research Publication": "SDGs Gender Equality Analysis in India by using SHAP Interpretation 1st International Conference on Optimization Techniques for Learning ICOTL 2023 Proceedings https://doi.org/10.1109/ICOTL59758.2023.10435062",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "3",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2023-24",
                            "Author Position": "2",
                            "Details of Research Publication": "Reduction of dimensions of Customer Satisfaction in Food Delivery Apps using Confirmatory Factor Analysis 1st International Conference on Optimization Techniques for Learning ICOTL 2023 Proceedings https://doi.org/10.1109/ICOTL59758.2023.10435045",
                            "Indexing": "Scopus",
                            "Publication": "Conference Proceedings",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "4",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "3",
                            "Details of Research Publication": "Impact of Covid- 19 Pandemic on Digital Payments in India: A Study - Journal of Contemporary Issues in Business and Government Journal of Contemporary Issues in Business and Government, 28(3), 757-767. http://doi.org/10.47750/cibg.2022.28.02.059",
                            "Indexing": "ABDC C",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        },
                        {
                            "S.No": "5",
                            "Publication Affiliation": "MITS",
                            "Academic Year": "2022-23",
                            "Author Position": "3",
                            "Details of Research Publication": "Impact of High Performance Work Practices (HPWP) on Employee Retention in IT Industry Journal of Contemporary Issues in Business and Government, 28(3), 731-742. http://doi.org/10.47750/cibg.2022.28.03.057",
                            "Indexing": "ABDC C",
                            "Publication": "Article",
                            "Journal Quartile (Q1/Q2/Q3/Q4)": ""
                        }
                    ]
                },
                {
                    "title": "Consultancy",
                    "content": [
                        {
                            "S.No": "1",
                            "Affiliation": "MITS",
                            "Academic Year": "2015-16",
                            "Name of the Consulting Firm": "Holy Mary Institute of Technology & Science, Hyderabad",
                            "Title of the Project/Event": "HR Consultancy",
                            "Amount in Rs. /-": "8,00,000"
                        }
                    ]
                }
            ]
    }
  */
};

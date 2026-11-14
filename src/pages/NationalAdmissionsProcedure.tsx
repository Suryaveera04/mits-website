import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const sectionHeadingClass =
  "flex items-center rounded-r-md border-l-[5px] border-[#B20710] bg-[#fdf1f1] px-5 py-3.5 mt-10 mb-6";
const subsectionHeadingClass =
  "mb-2 mt-7 border-b border-[#E4E7EF] pb-1.5 text-base font-semibold text-[#1E1E2C]";
const tableClass =
  "my-4 w-full min-w-[700px] border-separate border-spacing-0 overflow-hidden rounded-md text-left text-sm shadow-sm";
const tableHeaderClass =
  "bg-[#B20710] px-4 py-3 text-left text-[13px] font-semibold tracking-wide text-white";
const tableCellClass =
  "border-b border-[#E4E7EF] px-4 py-3 align-top text-[#4A4A5A]";

const NationalAdmissionsProcedure = () => {
  return (
    <div className="min-h-screen bg-[#F6F7FB] font-sans text-[#1E1E2C]">
      <SEO
        title="National Admission Procedure – MITS Deemed to be University"
        description="Official national admission policies, quotas, seat matrix, tie-breaker rules, and lateral entry guidelines at MITS."
        canonical="/national-admissions-procedure"
      />
      <Header />

      <main className="flex-grow px-0 pt-20 md:px-4 md:pt-32">
        <article className="mx-auto my-0 max-w-[980px] overflow-hidden bg-white shadow-md md:my-9 md:rounded-xl">
          <header className="relative overflow-hidden bg-gradient-to-br from-[#8C0509] to-[#B20710] px-6 py-8 md:px-12 md:pb-9 md:pt-12">
            <p className="relative mb-2.5 text-[11px] font-semibold uppercase tracking-[2px] text-white/70">
              MITS Deemed to be University · Madanapalle
            </p>
            <h1 className="relative mb-2.5 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
              National Admission Policy
            </h1>
            <p className="relative mb-4 text-sm text-white/80">
              For Academic Programs: B.Tech, BBA, BCA, M.Tech, MBA, MCA
            </p>
            <div className="relative">
              <span className="inline-flex rounded-full bg-[#EEB311] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#1E1E2C]">
                AY 2026-27
              </span>
            </div>
          </header>

          <div className="px-4 pb-8 pt-6 sm:px-6 md:px-12 md:pb-12 md:pt-10">
            <p className="mb-9 border-l-[3px] border-[#EEB311] pl-4 text-[15px] leading-7 text-[#4A4A5A]">
              This Admission Policy of Madanapalle Institute of Technology &amp;
              Science (MITS) Deemed to be University, Madanapalle covers admissions
              into the regular programs offered by the University within the Country
              and for International Students, and also the Lateral Entry Admissions
              into the 2nd year of the B.Tech Program.
            </p>

            <section aria-labelledby="general-policy">
              <div className={sectionHeadingClass}>
                <h2
                  id="general-policy"
                  className="font-display text-xl font-bold text-[#B20710]"
                >
                  A. General Policy
                </h2>
              </div>

              <h3 className={subsectionHeadingClass}>A.1. Admission Procedure</h3>
              <p className="mb-3 leading-7 text-[#4A4A5A]">
                The admission process is merit-based and follows these sequential
                steps:
              </p>
              <ol className="mb-5 space-y-1.5">
                {[
                  {
                    title: "Notification",
                    text: "An official admission notification will be published on the institute's website.",
                  },
                  {
                    title: "Application",
                    text: "Candidates must submit their applications online via the admission portal.",
                  },
                  {
                    title: "Entrance Examination / Merit List",
                    text: "Admissions will be based on the rank secured in the applicable Tests.",
                  },
                  {
                    title: "Direct Merit-Based",
                    text: "If direct merit-based, a merit list will be prepared based on the aggregate marks scored in the qualifying examination/degree.",
                  },
                  {
                    title: "Counselling",
                    text: "Shortlisted candidates will be invited for counselling rounds where branch allocation will be finalized based on merit rank, category/reservation norms, and seat availability.",
                  },
                  {
                    title: "Seat Allotment & Fee Payment",
                    text: "Upon seat allotment, candidates must secure their admission by paying the stipulated tuition and admission fees within the given timeframe. Failure to do so will result in the forfeiture of the seat.",
                  },
                ].map((step, index) => (
                  <li
                    key={step.title}
                    className="relative flex items-start gap-3 rounded-md bg-[#F6F7FB] px-3 py-2.5 pl-11 text-sm leading-6 text-[#4A4A5A]"
                  >
                    <span className="absolute left-2.5 top-2.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#B20710] text-[11px] font-bold text-white">
                      {index + 1}
                    </span>
                    <span>
                      <strong className="text-[#1E1E2C]">{step.title}:</strong>{" "}
                      {step.text}
                    </span>
                  </li>
                ))}
              </ol>

              <h3 className={subsectionHeadingClass}>
                A.2. Branch Allocation and Change Policy
              </h3>
              <p className="leading-7 text-[#4A4A5A]">
                Once a branch is allotted during admission, no branch change will
                be permitted under any circumstances.
              </p>

              <h3 className={subsectionHeadingClass}>A.3. Reservation Policy</h3>
              <p className="leading-7 text-[#4A4A5A]">
                Reservations for SC, ST, OBC, EWS, and Persons with Disabilities
                (PwD) categories will be strictly implemented as per the norms
                defined by the Central Government.
              </p>
            </section>

            <section aria-labelledby="national-policy">
              <div className={sectionHeadingClass}>
                <h2
                  id="national-policy"
                  className="font-display text-xl font-bold text-[#B20710]"
                >
                  B. National Admission Policy
                </h2>
              </div>

              <h3 className={subsectionHeadingClass}>
                B.I. Admissions into the Regular Programmes
              </h3>
              <h4 className="mb-2 mt-6 text-sm font-semibold uppercase tracking-wide text-[#4A4A5A]">
                B.I.1. Program Eligibility &amp; Approved Admission Channels
              </h4>
              <p className="leading-7 text-[#4A4A5A]">
                Admissions are granted strictly on merit through recognized
                entrance examinations and qualifying degree performance.
              </p>

              <div className="my-4 overflow-x-auto rounded-md border border-[#E4E7EF]">
                <table className={tableClass}>
                  <thead>
                    <tr>
                      <th className={tableHeaderClass}>Program</th>
                      <th className={tableHeaderClass}>
                        Minimum Eligibility (Qualifying Exam)
                      </th>
                      <th className={tableHeaderClass}>Admission Channels</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-[#fdf1f1]">
                      <td className={`${tableCellClass} font-semibold`}>B.Tech</td>
                      <td className={tableCellClass}>
                        10+2 with Physics, Mathematics, Chemistry (Min. 45%
                        aggregate).
                        <br />
                        10+2 with Physics, Chemistry, Biology (PCB) for B.Tech in
                        Bioinformatics (Min. 45% aggregate).
                      </td>
                      <td className={tableCellClass}>
                        MITSUCET, JEE, National Level Entrance tests, State level
                        Entrance tests, 10+2 Merit
                      </td>
                    </tr>
                    <tr className="bg-[#fafbfd] hover:bg-[#fdf1f1]">
                      <td className={`${tableCellClass} font-semibold`}>
                        BBA &amp; BCA
                      </td>
                      <td className={tableCellClass}>
                        10+2 in any stream (Min. 45% aggregate).
                      </td>
                      <td className={tableCellClass}>MITSUCET, 10+2 Merit</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#fdf1f1]">
                      <td className={`${tableCellClass} font-semibold`}>MBA</td>
                      <td className={tableCellClass}>
                        Bachelor's Degree of minimum 3 years duration (Min. 50%
                        aggregate).
                      </td>
                      <td className={tableCellClass}>
                        National Level Entrance tests, CAT, MAT, State level
                        Entrance tests, MITSUCET, UG Merit
                      </td>
                    </tr>
                    <tr className="bg-[#fafbfd] hover:bg-[#fdf1f1]">
                      <td className={`${tableCellClass} font-semibold`}>MCA</td>
                      <td className={tableCellClass}>
                        BCA/Bachelor Degree in Comp. Sci. OR B.Sc/B.A./B.Com with
                        Math at 10+2 or Undergraduate level (Min. 50%).
                      </td>
                      <td className={tableCellClass}>
                        NIMCET, State level Entrance tests, MITSUCET, UG Merit
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-[#fdf1f1]">
                      <td className={`${tableCellClass} font-semibold`}>M.Tech</td>
                      <td className={tableCellClass}>
                        B.E./B.Tech in relevant discipline (Min. 50% aggregate).
                        <br />
                        M.Tech CSE and M.Tech CSE-AI&amp;ML: Candidates who have
                        completed B.E./B.Tech in Computer Science &amp; Engineering
                        and allied branches, ECE, EEE, MCA (Master of Computer
                        Applications), M.Sc. Computer Science / IT / Software
                        Engineering / Data Science or related branches are eligible.
                      </td>
                      <td className={tableCellClass}>
                        GATE, State level Entrance tests, UG Merit
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <aside className="my-4 rounded-r-md border-l-4 border-[#EEB311] bg-[#FFF8E1] px-4 py-3.5 text-sm leading-6 text-[#5a4800]">
                <strong>Note:</strong> A statutory relaxation of 5% in the
                qualifying examination marks is applicable for reserved categories
                (SC, ST, OBC) as per Government of India norms.
              </aside>

              <h4 className="mb-2 mt-7 border-b border-[#E4E7EF] pb-1.5 text-base font-semibold text-[#1E1E2C]">
                B.I.2. Admission Quota &amp; Seat Matrix
              </h4>
              <p className="leading-7 text-[#4A4A5A]">
                The approved intake for all academic programs is divided into
                delineated quotas.
              </p>
              <div className="my-4 overflow-x-auto rounded-md border border-[#E4E7EF]">
                <table className={tableClass}>
                  <thead>
                    <tr>
                      <th className={tableHeaderClass}>Quota Category</th>
                      <th className={tableHeaderClass}>Sub-Quota Allocation</th>
                      <th className={tableHeaderClass}>
                        Admission Channel / Applicable Exams
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-[#fdf1f1]">
                      <td className={`${tableCellClass} font-semibold`}>
                        Category B
                      </td>
                      <td className={tableCellClass}>10% of Total Intake</td>
                      <td className={tableCellClass}>
                        Management: Exempt from entrance exam mandate; satisfying
                        qualifying criteria.
                      </td>
                    </tr>
                    <tr className="bg-[#fafbfd] hover:bg-[#fdf1f1]">
                      <td className={`${tableCellClass} font-semibold`}>
                        Category A (General Merit Quota)
                      </td>
                      <td className={tableCellClass}>90% of Total Intake</td>
                      <td className={tableCellClass}>
                        Divided strictly into sub-quotas as detailed below.
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-[#fdf1f1]">
                      <td className={`${tableCellClass} pl-8`}>Sub-Quota A1</td>
                      <td className={tableCellClass}>25% of Total Intake</td>
                      <td className={tableCellClass}>
                        National Level Exams: JEE Main (B.Tech), CAT/MAT (MBA),
                        NIMCET (MCA), GATE (M.Tech).
                      </td>
                    </tr>
                    <tr className="bg-[#fafbfd] hover:bg-[#fdf1f1]">
                      <td className={`${tableCellClass} pl-8`}>Sub-Quota A2</td>
                      <td className={tableCellClass}>45% of Total Intake</td>
                      <td className={tableCellClass}>
                        University Exam: MITSUCET (Proctored CBT or PBT).
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-[#fdf1f1]">
                      <td className={`${tableCellClass} pl-8`}>Sub-Quota A3</td>
                      <td className={tableCellClass}>10% of Total Intake</td>
                      <td className={tableCellClass}>
                        State Level Exams: State CET (B.Tech), State ICET
                        (MBA/MCA).
                      </td>
                    </tr>
                    <tr className="bg-[#fafbfd] hover:bg-[#fdf1f1]">
                      <td className={`${tableCellClass} pl-8`}>Sub-Quota A4</td>
                      <td className={tableCellClass}>10% of Total Intake</td>
                      <td className={tableCellClass}>
                        Merit/Qualifying Exam: 10+2 equivalent (UG) or Bachelor's
                        Degree (PG).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <aside className="my-5 rounded-md border border-[#B20710]/15 bg-[#fdf1f1] px-4 py-4 text-sm leading-6 text-[#8C0509]">
                <h4 className="mb-1 font-semibold">
                  The Cascade Rule (Sliding Mechanism)
                </h4>
                <p>
                  To ensure maximum seat occupancy, vacant seats in any sub-quota
                  automatically cascade to the next in the sequence:
                </p>
                <p className="mt-2 inline-flex items-center gap-2 rounded bg-[#8C0509] px-3.5 py-1.5 font-semibold text-white">
                  A1 <span aria-hidden="true">→</span> A2{" "}
                  <span aria-hidden="true">→</span> A3{" "}
                  <span aria-hidden="true">→</span> A4
                </p>
              </aside>

              <h4 className="mb-2 mt-7 border-b border-[#E4E7EF] pb-1.5 text-base font-semibold text-[#1E1E2C]">
                B.I.4. Tie-Breaker Rules (Applicable to All Streams)
              </h4>
              <p className="leading-7 text-[#4A4A5A]">
                In the event of identical normalized scores or ranks within any
                sub-quota, the following tie-breaking rules are applied strictly
                in descending order:
              </p>
              <ol className="my-4 space-y-1.5">
                <li className="rounded-md bg-[#F6F7FB] px-4 py-3 text-sm leading-6 text-[#4A4A5A]">
                  <strong className="text-[#8C0509]">
                    Subject-Specific Performance:
                  </strong>{" "}
                  Priority is given to candidates with higher normalized scores or
                  percentages in core subjects relevant to their chosen field. For
                  B.Tech admission: higher 10+2 scores in Physics, Chemistry, and
                  Mathematics/Biology.
                </li>
                <li className="rounded-md bg-[#F6F7FB] px-4 py-3 text-sm leading-6 text-[#4A4A5A]">
                  <strong className="text-[#8C0509]">Candidate Age:</strong> If a
                  tie persists after reviewing core subject performance, the older
                  candidate by date of birth is given preference.
                </li>
                <li className="rounded-md bg-[#F6F7FB] px-4 py-3 text-sm leading-6 text-[#4A4A5A]">
                  <strong className="text-[#8C0509]">
                    Application Chronology:
                  </strong>{" "}
                  As a final measure, the candidate with the lower registration
                  number (i.e. chronologically earlier application registration
                  number) will be ranked higher.
                </li>
              </ol>
              <div className={sectionHeadingClass}>
                <h2
                  id="lateral-entry"
                  className="font-display text-xl font-bold text-[#B20710]"
                >
                  B.II. B.Tech Lateral Entry (Direct Second Year)
                </h2>
              </div>

              <p className="mb-4 text-sm font-semibold leading-6 text-[#4A4A5A]">
                Applicable Programs: B.Tech (All Branches) · Entry Level: Second
                Year (3rd Semester)
              </p>
              <h3 className={subsectionHeadingClass}>B.II.1. Intake Capacity</h3>
              <p className="leading-7 text-[#4A4A5A]">
                Lateral entry admissions are subject to seat availability and
                statutory body guidelines:
              </p>
              <ul className="my-3 space-y-1.5">
                <li className="rounded-md bg-[#F6F7FB] px-4 py-2.5 text-sm leading-6 text-[#4A4A5A]">
                  <strong className="text-[#1E1E2C]">Supernumerary Seats:</strong>{" "}
                  Up to 10% of the approved intake capacity of the previous
                  academic year for each branch.
                </li>
                <li className="rounded-md bg-[#F6F7FB] px-4 py-2.5 text-sm leading-6 text-[#4A4A5A]">
                  <strong className="text-[#1E1E2C]">Vacant Seats:</strong> Any
                  unfilled or vacant seats carried forward from the first year of
                  the respective B.Tech program.
                </li>
              </ul>

              <h3 className={subsectionHeadingClass}>
                B.II.2. Minimum Eligibility (Qualifying Exam)
              </h3>
              <h4 className="mb-1 mt-5 text-sm font-semibold uppercase tracking-wide text-[#4A4A5A]">
                Diploma Holders
              </h4>
              <p className="leading-7 text-[#4A4A5A]">
                Passed a minimum 3-year / 2-year (Lateral Entry) Diploma
                examination with at least 50% marks in any branch of Engineering
                and Technology.
              </p>
              <h4 className="mb-1 mt-5 text-sm font-semibold uppercase tracking-wide text-[#4A4A5A]">
                B.Sc. Graduates
              </h4>
              <p className="leading-7 text-[#4A4A5A]">
                Passed B.Sc. Degree from a recognized University (as defined by
                UGC) with at least 50% marks and passed 10+2 examination with
                Mathematics as a subject.
              </p>
              <aside className="my-4 rounded-r-md border-l-4 border-[#B20710] bg-[#fdf1f1] px-4 py-3.5 text-sm leading-6 text-[#4A4A5A]">
                <strong className="text-[#8C0509]">Note:</strong> B.Sc. stream
                students shall clear Engineering Graphics/Engineering Drawing and
                Engineering Mechanics of the First-Year Engineering Programme
                along with Second-Year subjects.
              </aside>
              <aside className="my-4 rounded-r-md border-l-4 border-[#EEB311] bg-[#FFF8E1] px-4 py-3.5 text-sm leading-6 text-[#5a4800]">
                <strong>Statutory Relaxation:</strong> A statutory relaxation of
                5% in the qualifying examination marks is applicable for reserved
                categories as per Government of India norms.
              </aside>

              <h3 className={subsectionHeadingClass}>B.II.3. Quota Allocation</h3>
              <p className="leading-7 text-[#4A4A5A]">
                The approved intake for lateral entry is divided into three legally
                delineated quotas:
              </p>
              <div className="my-4 overflow-x-auto rounded-md border border-[#E4E7EF]">
                <table className={tableClass}>
                  <thead>
                    <tr>
                      <th className={tableHeaderClass}>Sl. No.</th>
                      <th className={tableHeaderClass}>Quota Category</th>
                      <th className={tableHeaderClass}>Sub-Quota Allocation</th>
                      <th className={tableHeaderClass}>
                        Admission Channel / Criteria
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-[#fdf1f1]">
                      <td className={tableCellClass}>1.</td>
                      <td className={`${tableCellClass} font-semibold`}>
                        Management Quota
                      </td>
                      <td className={tableCellClass}>20% of Total LE Intake</td>
                      <td className={tableCellClass}>
                        Exempt from entrance exam mandate; satisfying basic diploma
                        qualifying criteria.
                      </td>
                    </tr>
                    <tr className="bg-[#fafbfd] hover:bg-[#fdf1f1]">
                      <td className={tableCellClass}>2.</td>
                      <td className={`${tableCellClass} font-semibold`}>
                        Entrance Exam Merit Quota
                      </td>
                      <td className={tableCellClass}>40% of Total LE Intake</td>
                      <td className={tableCellClass}>
                        Ranked strictly based on performance in recognized State
                        Level Lateral Entry Exams (e.g., AP ECET) or the University
                        Entrance Exam.
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-[#fdf1f1]">
                      <td className={tableCellClass}>3.</td>
                      <td className={`${tableCellClass} font-semibold`}>
                        Diploma Merit Quota
                      </td>
                      <td className={tableCellClass}>40% of Total LE Intake</td>
                      <td className={tableCellClass}>
                        Ranked strictly based on the academic merit (aggregate
                        percentage) achieved in the qualifying Engineering Diploma.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className={subsectionHeadingClass}>
                B.II.4. The Cascade Rule (Sliding Mechanism)
              </h3>
              <p className="leading-7 text-[#4A4A5A]">
                To ensure maximum seat occupancy, if seats remain vacant in the
                Entrance Exam Merit Quota after the final round of counselling,
                those vacant seats will automatically cascade to the Diploma Merit
                Quota.
              </p>

              <h3 className={subsectionHeadingClass}>
                B.II.5. Tie-Breaker Rule (Applicable to All Lateral Entry Streams)
              </h3>
              <p className="leading-7 text-[#4A4A5A]">
                In the event of identical normalized scores or ranks within any
                sub-quota, the following tie-breaking rule is applied: the
                candidate with the lower, chronologically earlier application
                registration number will be ranked higher.
              </p>
            </section>

            <section aria-labelledby="refund-policy">
              <div className={sectionHeadingClass}>
                <h2
                  id="refund-policy"
                  className="font-display text-xl font-bold text-[#B20710]"
                >
                  Fee Refund Policy
                </h2>
              </div>
              <div className="flex flex-wrap items-start gap-3 rounded-md border-l-[3px] border-[#B20710] bg-[#F6F7FB] px-4 py-3.5 text-sm leading-6 text-[#4A4A5A]">
                <strong className="text-[#8C0509]">Fee Refund Policy:</strong>
                <span>
                  Cancellations and refunds are processed strictly aligned with
                  the prevailing UGC Notification/Circular (D.O.No.F.2-71/2022
                  (CPP-II) (c-114546) Dated 12.06.2024) on the Refund of Fees and
                  Non-Retention of Original Certificates. Standard percentages of
                  fee refunds shall be applicable as per the mandate.
                </span>
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default NationalAdmissionsProcedure;

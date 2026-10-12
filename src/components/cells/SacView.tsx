import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const notices = [
  {
    title: "Freshers' Day Celebrations 2025",
    body: "A \"Freshers' Day Celebrations 2025\" was organized by Student Activity Center for the Academic Year 2025-26 on 10th November 2025.",
    link: "https://mits.ac.in/assets/pdf/assoc/Freshers' Day Celebrations 2025.pdf",
    linkText: "Click here for Report on Event",
  },
  {
    title: "Apna Time Aayega - S2",
    body: "An Arts & Cultural Club Event",
    link: "https://mits.ac.in/assets/pdf/assoc/Arts & Culture Poster-2023.pdf",
    linkText: "Click here for Event Details",
  },
  {
    title: "Group Discussion",
    body: 'A Group Discussion on - "Strong Minds, Safe Lives: Youth at Risk" organized by MITS ANCHOR\'S CLUB Under SAC (Student Activity Center) at MITS Radio Station on 18th December 2025.',
    link: "https://mits.ac.in/assets/pdf/assoc/Strong Minds, Safe Lives.pdf",
    linkText: "Click here for Event Details",
  },
  {
    title: "Awareness Programme",
    body: 'TECH CLUB conducted an awareness programme on "Cloud Computing" on 24-05-2022',
    link: "https://mits.ac.in/assets/pdf/swc/TechClub.png",
    linkText: "Click here for Details",
  },
  {
    title: "Investiture Ceremony",
    body: "Investiture Ceremony of Student Council was organized at MITS on 19th November 2022.",
    link: "https://mits.ac.in/assets/event/Investiture Ceremony.pdf",
    linkText: "Click here for Details",
  },
];

export default function SacView() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % notices.length);
    }, 4000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const go = (dir: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrent((c) => (c + dir + notices.length) % notices.length);
    startTimer();
  };

  const navigate = useNavigate();
  const BASE = import.meta.env.BASE_URL;

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      <Header />

      {/* Hero */}
      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffb300] font-bold tracking-[0.25em] uppercase text-sm mb-4">
            Student Support & Welfare
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto">
            Student Activity Center (SAC)
          </h1>
        </div>
        <nav className="absolute bottom-4 left-6 z-10">
          <ol className="flex items-center gap-1.5 text-sm text-white/80">
            <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
            <li className="text-white/50">›</li>
            <li><Link to="/cells" className="text-white/70 hover:text-white transition-colors">Cells & Committees</Link></li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-semibold">Student Activity Center (SAC)</li>
          </ol>
        </nav>
      </section>

      {/* Tab bar */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav className="flex items-center gap-0 overflow-x-auto">
            {["SAC", "Student Clubs"].map((label, i) => (
              <button
                key={label}
                onClick={() => i === 1 && navigate("/student-clubs-sac")}
                className={`relative flex items-center gap-2 px-4 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                  i === 0
                    ? "text-[#b31317] border-b-2 border-[#b31317]"
                    : "text-[#0f2a44]/70 hover:text-[#0f2a44]"
                }`}
              >
                {i > 0 && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 text-base select-none">|</span>
                )}
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 md:py-16 max-w-6xl">
        <Link
          to="/cells"
          className="mb-8 flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cells & Committees
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">

            {/* Office Order */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">

                {/* Preamble */}
                <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-3">Preamble</h2>
                <p className="text-[#0f2a44]/80 text-sm leading-relaxed mb-3 text-justify">
                  Intellectual Innovation, social engagement, and universal sustainability demand the students to groom their diverse values, communication skills and hidden talents. These diverse values would complement the academic and co-curricular streams of the institution. Hence, club activities play a pivotal in transforming students' passion and hobbies into socially skills desirable for the present global demands. With more self-efficacy, students would get an opportunity to enhance their performance skills in diverse social scenarios.
                </p>
                <p className="text-[#0f2a44]/80 text-sm leading-relaxed mb-4 text-justify">
                  Student clubs will take forward all activities under Student Council.
                </p>
                <ul className="mb-6 space-y-1">
                  <li>
                    <a
                      href="https://mits.ac.in/assets/pdf/assoc/Office Order-SAC Committe.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#b31317] hover:underline text-sm font-medium flex items-center gap-1"
                    >
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      Office Order - SAC Committee - 05.11.2025
                    </a>
                  </li>
                </ul>

                {/* Article I */}
                <h2 className="font-display text-lg font-bold text-[#0f2a44] mt-6 mb-1">Article-I</h2>
                <h3 className="font-semibold text-[#0f2a44] mb-3">Name, Purpose &amp; Membership</h3>
                <p className="text-sm text-[#0f2a44]/80 mb-2 text-justify"><strong>Name:</strong> The official name is Student Activity Center</p>
                <p className="text-sm text-[#0f2a44]/80 mb-2 text-justify"><strong>Purpose:</strong> Encouraging student to move over to activities for which he/she has a passion</p>
                <p className="text-sm text-[#0f2a44]/80 mb-3 text-justify"><strong>Membership:</strong></p>

                <h4 className="font-semibold text-[#0f2a44] text-sm mb-1">SECTION I</h4>
                <p className="text-sm text-[#0f2a44]/80 mb-3 text-justify">The coordinators at the top level would invite students those who are interested to be as members of the individual club to look after the activities as per schedules. (duration of the membership may vary as per the requirement)</p>

                <h4 className="font-semibold text-[#0f2a44] text-sm mb-1">SECTION 2</h4>
                <p className="text-sm text-[#0f2a44]/80 mb-3 text-justify">Membership is open to all students irrespective of their, gender, caste, creed, colour, race, religion, national origin, disability, age veteran status, marital status, public assistance status, or sexual orientation.</p>

                <h4 className="font-semibold text-[#0f2a44] text-sm mb-1">SECTION 3</h4>
                <p className="text-sm text-[#0f2a44]/80 mb-3 text-justify">To become a member, one must show up to club meetings at the beginning of the semester. The club, as a unit, will decide when it is appropriate to finalize the official roster for the semester.</p>

                <h4 className="font-semibold text-[#0f2a44] text-sm mb-1">SECTION 4</h4>
                <p className="text-sm text-[#0f2a44]/80 mb-4 text-justify">Any member may be impeached for misconduct (to be defined by the group). For example: Failure to perform duties, attendance, and misuse of funds, etc. The member shall be given a seven-day notice and an opportunity to defend him/herself. This impeachment vote shall be in the discretion of club advisors.</p>

                {/* Article II */}
                <h2 className="font-display text-lg font-bold text-[#0f2a44] mt-6 mb-1">Article-II</h2>
                <h3 className="font-semibold text-[#0f2a44] mb-3">Coordinators &amp; Meetings</h3>

                <h4 className="font-semibold text-[#0f2a44] text-sm mb-1">SECTION I</h4>
                <p className="text-sm text-[#0f2a44]/80 mb-3 text-justify">It is mandatory for the Coordinator, (both student &amp; faculty as well) to attend meetings.</p>

                <h4 className="font-semibold text-[#0f2a44] text-sm mb-1">SECTION 2</h4>
                <p className="text-sm text-[#0f2a44]/80 mb-3 text-justify">Meeting shall be conducted once in a month to initiate discussion on the progression of the club activities.</p>

                <h4 className="font-semibold text-[#0f2a44] text-sm mb-1">SECTION 3</h4>
                <p className="text-sm text-[#0f2a44]/80 mb-4 text-justify">Any kind of amendments can be carried down with ¾ majority (Quorum) of the Coordinators attended the meeting.</p>

                {/* Article III */}
                <h2 className="font-display text-lg font-bold text-[#0f2a44] mt-6 mb-1">Article-III</h2>
                <h3 className="font-semibold text-[#0f2a44] mb-3">Schedule and duties of the Coordinators</h3>

                <h4 className="font-semibold text-[#0f2a44] text-sm mb-1">SECTION I</h4>
                <p className="text-sm text-[#0f2a44]/80 mb-2 text-justify">Event Calendar must be constructed and it is mandatory to follow it. The calendar for each semester consists of….</p>
                <ul className="list-disc list-inside text-sm text-[#0f2a44]/80 mb-3 space-y-1 ml-2">
                  <li>Awareness programs</li>
                  <li>Workshops</li>
                  <li>Events</li>
                </ul>

                <h4 className="font-semibold text-[#0f2a44] text-sm mb-1">SECTION 2</h4>
                <p className="text-sm text-[#0f2a44]/80 mb-3 text-justify">Every club Coordinator should maintain a logbook for meetings. Coordinators should attend the meetings without fail. If anyone fails to attend the two successive meetings, they should be answerable to the Student Council.</p>

                <h4 className="font-semibold text-[#0f2a44] text-sm mb-1">SECTION 3</h4>
                <p className="text-sm text-[#0f2a44]/80 mb-6 text-justify">Club Coordinators should maintain proper documentation of event and finance. Club Coordinators are responsible for the funds and resources that are issued by the management.</p>

                {/* Calendar */}
                <h3 className="font-semibold text-[#0f2a44] mb-4">
                  <a
                    href="https://calendar.google.com/calendar/embed?src=69849e23341ca5a7ae2952df17e3fb78318e6d704f514726f577a8391f650481%40group.calendar.google.com&ctz=Asia%2FKolkata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b31317] hover:underline flex items-center gap-1"
                  >
                    <ExternalLink className="w-4 h-4 shrink-0" />
                    Student Activity Calendar 2025-26
                  </a>
                </h3>

                <img
                  src="https://mits.ac.in/assets/images/sac1.jpg"
                  alt="Student Activity Calendar 2025-26"
                  className="w-full rounded-lg border border-gray-100"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* E-Notice Board */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="bg-[#b31317] px-5 py-3">
                  <h2 className="text-white font-display font-bold text-base">E-Notice Board</h2>
                </div>
                <div className="relative p-5 min-h-[160px]">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-[#0f2a44] text-sm">{notices[current].title}</h3>
                    <p className="text-xs text-[#0f2a44]/70 leading-relaxed">{notices[current].body}</p>
                    <a
                      href={notices[current].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#b31317] hover:underline font-medium"
                    >
                      {notices[current].linkText}
                    </a>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <button
                      onClick={() => go(-1)}
                      className="p-1 rounded hover:bg-gray-100 transition-colors text-[#0f2a44]/50 hover:text-[#b31317]"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <div className="flex gap-1">
                      {notices.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => { if (timerRef.current) clearInterval(timerRef.current); setCurrent(i); startTimer(); }}
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? "bg-[#b31317]" : "bg-gray-300"}`}
                          aria-label={`Go to notice ${i + 1}`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={() => go(1)}
                      className="p-1 rounded hover:bg-gray-100 transition-colors text-[#0f2a44]/50 hover:text-[#b31317]"
                      aria-label="Next"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                <div className="bg-[#b31317] px-5 py-3">
                  <h2 className="text-white font-display font-bold text-base">Contact</h2>
                </div>
                <div className="p-5 space-y-3">
                  <p className="font-semibold text-[#0f2a44] text-sm">Dr. G. Reddy Hemantha</p>
                  <p className="text-xs text-[#b31317] font-medium">Coordinator for Student Activity Center (SAC)</p>
                  <div className="space-y-2 text-xs text-[#0f2a44]/70">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#b31317]" />
                      <span>
                        Madanapalle Institute of Technology &amp; Science<br />
                        Deemed to be University<br />
                        Madanapalle-Kadiri Road<br />
                        Kurabalakota Mandal, Madanapalle-517325<br />
                        Andhra Pradesh, India
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 shrink-0 text-[#b31317]" />
                      <span>+91-8571-280255; 280706</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 shrink-0 text-[#b31317]" />
                      <a href="mailto:sac@mits.ac.in" className="hover:text-[#b31317] transition-colors">sac@mits.ac.in</a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Compliance portals */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-5">
                <h3 className="font-display text-sm font-bold text-[#0f2a44] uppercase tracking-wider mb-3">
                  Compliance Portals
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "IQAC", to: "/iqac" },
                    { label: "NAAC", to: "/naac" },
                    { label: "NIRF Rankings", to: "/nirf" },
                    { label: "Public Disclosures", to: "/psd" },
                  ].map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="flex items-center justify-between text-sm text-[#0f2a44] hover:text-[#b31317] transition-colors py-1.5 border-b border-gray-50 last:border-0 group"
                    >
                      {p.label}
                      <ChevronRight className="w-3.5 h-3.5 text-[#caa74d] group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <a
                href="https://mits.ac.in/student-activity-center-sac"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 text-sm text-[#0f2a44]/50 hover:text-[#b31317] transition-colors px-1"
              >
                <span>View original source page</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

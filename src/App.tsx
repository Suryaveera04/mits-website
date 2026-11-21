import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, Suspense, lazy } from "react";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ErrorBoundary from "@/components/ErrorBoundary";

// Lazy load components for code splitting
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Academics = lazy(() => import("./pages/Academics"));
const Admissions = lazy(() => import("./pages/Admissions"));
const Research = lazy(() => import("./pages/Research"));
const Placements = lazy(() => import("./pages/Placements"));
const CampusLife = lazy(() => import("./pages/CampusLife"));
const Contact = lazy(() => import("./pages/Contact"));
const Infrastructure = lazy(() => import("./pages/Infrastructure"));
const Departments = lazy(() => import("./pages/Departments"));
const Library = lazy(() => import("./pages/Library"));
const Examinations = lazy(() => import("./pages/Examinations"));
const NewsEvents = lazy(() => import("./pages/NewsEvents"));
const NewsEventDetail = lazy(() => import("./pages/NewsEventDetail"));
const EligibilityAndFees = lazy(() => import("./pages/EligibilityAndFees"));
const AcademicCalendar = lazy(() => import("./pages/AcademicCalendar"));
const AcademicRegulations = lazy(() => import("./pages/AcademicRegulations"));
const Gallery = lazy(() => import("./pages/Gallery"));
const CampusLifeDetail = lazy(() => import("./pages/CampusLifeDetail"));
const DepartmentPage = lazy(() => import("./pages/DepartmentPage"));
const CSEEventsPage = lazy(() => import("./pages/CSEEventsPage"));
const FacultyProfilePage = lazy(() => import("./pages/FacultyProfilePage"));
const PlacementFacultyProfilePage = lazy(() => import("./pages/PlacementFacultyProfilePage"));
const Leadership = lazy(() => import("./pages/about/Leadership"));
const LeadershipProfile = lazy(() => import("./pages/about/LeadershipProfile"));
const AcademicLeadership = lazy(() => import("./pages/about/AcademicLeadership"));
const AboutDeans = lazy(() => import("./pages/about/Deans"));
const AboutDepartmentHeads = lazy(() => import("./pages/about/DepartmentHeads"));
const ExecutiveCouncil = lazy(() => import("./pages/about/ExecutiveCouncil"));
const AcademicCouncil = lazy(() => import("./pages/about/AcademicCouncil"));
const BoardOfStudies = lazy(() => import("./pages/about/BoardOfStudies"));
const Organogram = lazy(() => import("./pages/about/Organogram"));
const MandatoryDisclosures = lazy(() => import("./pages/about/MandatoryDisclosures"));
const BogPage = lazy(() => import("./pages/about/BogPage"));
const MinutesAcPage = lazy(() => import("./pages/about/MinutesAcPage"));
const UniversityFinanceCommitteePage = lazy(() => import("./pages/about/UniversityFinanceCommitteePage"));
const FinanceCommitteePage = lazy(() => import("./pages/about/FinanceCommitteePage"));
const NIRF = lazy(() => import("./pages/NIRF"));
const NAAC = lazy(() => import("./pages/NAAC"));
const IQAC = lazy(() => import("./pages/IQAC"));
const ISO = lazy(() => import("./pages/ISO"));
const AffiliationsAccreditations = lazy(() => import("./pages/AffiliationsAccreditations"));
const PublicSelfDisclosures = lazy(() => import("./pages/PublicSelfDisclosures"));
const InternationalRelations = lazy(() => import("./pages/InternationalRelations"));
const InternationalRelationsPartner = lazy(() => import("./pages/InternationalRelationsPartner"));
const StanfordInitiative = lazy(() => import("./pages/StanfordInitiative"));
const MitsRadio = lazy(() => import("./pages/MitsRadio"));
const TermsConditionsPolicy = lazy(() => import("./pages/TermsConditionsPolicy"));
const NationalAdmissionsProcedure = lazy(() => import("./pages/NationalAdmissionsProcedure"));
const InternationalAdmissionsProcedure = lazy(() => import("./pages/InternationalAdmissionsProcedure"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const RefundPolicyPage = lazy(() => import("./pages/RefundPolicyPage"));
const AQARCriterionPage = lazy(() => import("./pages/AQARCriterionPage").then(m => ({ default: m.AQARCriterionPage })));
const EContentPage = lazy(() => import("./pages/EContentPage"));
const NewsletterPage = lazy(() => import("./pages/NewsletterPage"));
const Cells = lazy(() => import("./pages/Cells"));
const CellDetail = lazy(() => import("./pages/CellDetail"));
const SdgGoalDetailView = lazy(() => import("./components/cells/SdgGoalDetailView"));
const Careers = lazy(() => import("./pages/Careers"));
const CiscoNetworkingAcademy = lazy(() => import("./pages/CiscoNetworkingAcademy"));
const CiscoSelfPacedCourses = lazy(() => import("./pages/CiscoSelfPacedCourses"));
const CurriculumSyllabus = lazy(() => import("./pages/CurriculumSyllabus"));
const SportsAthletics = lazy(() => import("./pages/SportsAthletics"));
const VentureStudio = lazy(() => import("./pages/VentureStudio"));
const SkillDevelopmentCentre = lazy(() => import("./pages/SkillDevelopmentCentre"));
const StudentClubs = lazy(() => import("./pages/StudentClubs"));
const FacultyInformation = lazy(() => import("./pages/FacultyInformation"));
const PhdAdmissions = lazy(() => import("./pages/PhdAdmissions"));
const ResearchAreas = lazy(() => import("./pages/ResearchAreas"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();
const Router = BrowserRouter;

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (!hash && !/^\/placements\//.test(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router basename="/university" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/leadership" element={<Leadership />} />
            <Route path="/about/leadership/:slug" element={<LeadershipProfile />} />
            <Route path="/about/academic-leadership" element={<AcademicLeadership />} />
            <Route path="/about/deans" element={<AboutDeans />} />
            <Route path="/about/department-heads" element={<AboutDepartmentHeads />} />
            <Route path="/about/executive-council" element={<ExecutiveCouncil />} />
            <Route path="/about/academic-council" element={<AcademicCouncil />} />
            <Route path="/about/bos" element={<BoardOfStudies />} />
            <Route path="/about/organogram" element={<Organogram />} />
            <Route path="/about/mandatory-disclosures" element={<MandatoryDisclosures />} />
            <Route path="/mandatory-disclosures" element={<MandatoryDisclosures />} />
            <Route path="/bog" element={<BogPage />} />
            <Route path="/minutes-ac" element={<MinutesAcPage />} />
            <Route path="/about/minutes-ac" element={<MinutesAcPage />} />
            <Route path="/mits-minutes-ac" element={<MinutesAcPage />} />
            <Route path="/university-finance-committee" element={<UniversityFinanceCommitteePage />} />
            <Route path="/finance-committee" element={<FinanceCommitteePage />} />
            <Route path="/about/university-finance-committee" element={<UniversityFinanceCommitteePage />} />
            <Route path="/about/finance-committee" element={<FinanceCommitteePage />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/academic-regulations" element={<AcademicRegulations />} />
            <Route path="/curriculum-academic-syllabus" element={<CurriculumSyllabus />} />
            <Route path="/academic-syllabus" element={<CurriculumSyllabus />} />
            <Route path="/syllabus" element={<CurriculumSyllabus />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/phd-admissions" element={<PhdAdmissions />} />
            <Route path="/phd-admissions-2026-27-july-session" element={<PhdAdmissions />} />
            <Route path="/phd-supervisors" element={<PhdAdmissions />} />
            <Route path="/phd-supervisors-2026-27-july-session" element={<PhdAdmissions />} />
            <Route path="/university/phd-supervisors" element={<PhdAdmissions />} />
            <Route path="/university/phd-supervisors-2026-27-july-session" element={<PhdAdmissions />} />
            <Route path="/phd" element={<PhdAdmissions />} />
            <Route path="/research-areas" element={<ResearchAreas />} />
            <Route path="/research" element={<Research />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/placements/:section" element={<Placements />} />
            <Route path="/cisco-networking-academy" element={<CiscoNetworkingAcademy />} />
            <Route path="/cisco-self-paced-courses" element={<CiscoSelfPacedCourses />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/campus-life/student-clubs" element={<Navigate to="/studentclubs" replace />} />
            <Route path="/university/campus-life/student-clubs" element={<Navigate to="/studentclubs" replace />} />
            <Route path="/studentclub" element={<Navigate to="/studentclubs" replace />} />
            <Route path="/campus-life/cultural-life" element={<CampusLifeDetail categoryKey="cultural" />} />
            <Route path="/sports" element={<CampusLifeDetail categoryKey="sports" />} />
            <Route path="/sports-athletics" element={<SportsAthletics />} />
            <Route path="/hostels" element={<CampusLife />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/facilities" element={<Infrastructure />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/library" element={<Library />} />
            <Route path="/examinations" element={<Examinations />} />
            <Route path="/nirf" element={<NIRF />} />
            <Route path="/naac" element={<NAAC />} />
            <Route path="/iqac" element={<IQAC />} />
            <Route path="/iso" element={<ISO />} />
            <Route path="/university/iso" element={<ISO />} />
            <Route path="/aqarcriteria" element={<AQARCriterionPage />} />
            <Route path="/aqar-criterion" element={<AQARCriterionPage />} />
            <Route path="/affiliations-accreditations" element={<AffiliationsAccreditations />} />
            <Route path="/psd" element={<PublicSelfDisclosures />} />
            <Route path="/public-self-disclosures" element={<PublicSelfDisclosures />} />
            <Route path="/international-relations" element={<InternationalRelations />} />
            <Route path="/international-relations/mou/:slug" element={<InternationalRelationsPartner />} />
            <Route path="/international-relations/stanford-initiative" element={<StanfordInitiative />} />
            <Route path="/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/university/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/academic-calenders" element={<AcademicCalendar />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news-events" element={<NewsEvents />} />
            <Route path="/news-events/:slug" element={<NewsEventDetail />} />
            <Route path="/eligibility-and-fees" element={<EligibilityAndFees />} />
            <Route path="/cse-events" element={<CSEEventsPage />} />
            <Route path="/department/:deptKey" element={<DepartmentPage />} />
            <Route path="/department/:deptKey/faculty/:slug" element={<FacultyProfilePage />} />
            <Route path="/department/:deptKey/:section" element={<DepartmentPage />} />
            <Route path="/department/:deptKey/:section/:subSection" element={<DepartmentPage />} />
            <Route path="/department/:deptKey/:section/:subSection/:subTab" element={<DepartmentPage />} />
            <Route path="/mits-radio" element={<MitsRadio />} />
            <Route path="/terms-conditions-policy" element={<TermsConditionsPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="/national-admissions-procedure" element={<NationalAdmissionsProcedure />} />
            <Route path="/international-admissions-procedure" element={<InternationalAdmissionsProcedure />} />
            <Route path="/placements/team/:slug" element={<PlacementFacultyProfilePage />} />
            <Route path="/e-content" element={<EContentPage />} />
            <Route path="/newsletter" element={<NewsletterPage />} />
            <Route path="/cells" element={<Cells />} />
            <Route path="/cells/:id" element={<CellDetail />} />
            <Route path="/university/cells" element={<Cells />} />
            <Route path="/university/cells/:id" element={<CellDetail />} />
            <Route path="/iete" element={<CellDetail overrideId="iete" />} />
            <Route path="/csi" element={<CellDetail overrideId="csi" />} />
            <Route path="/csi-content" element={<CellDetail overrideId="csi" />} />
            <Route path="/iste" element={<CellDetail overrideId="iste" />} />
            <Route path="/iste-chapter" element={<CellDetail overrideId="iste" />} />
            <Route path="/ncc" element={<CellDetail overrideId="ncc-army" />} />
            <Route path="/ncc-army" element={<CellDetail overrideId="ncc-army" />} />
            <Route path="/ncc-air" element={<CellDetail overrideId="ncc-air" />} />
            <Route path="/ncc-airwing" element={<CellDetail overrideId="ncc-air" />} />
            <Route path="/nep" element={<CellDetail overrideId="nep" />} />
            <Route path="/nep-cell" element={<CellDetail overrideId="nep" />} />
            <Route path="/sdg" element={<CellDetail overrideId="sdg" />} />
            <Route path="/sdg-cell" element={<CellDetail overrideId="sdg" />} />
            {/* QS Sustainability & Sub-Tabs */}
            <Route path="/qs-sustainability" element={<CellDetail overrideId="qs-sustainability" />} />
            <Route path="/qs-environmental-impact" element={<CellDetail overrideId="qs-environmental-impact" />} />
            <Route path="/qs-environmental%20impact" element={<CellDetail overrideId="qs-environmental-impact" />} />
            <Route path="/qs-social-impact" element={<CellDetail overrideId="qs-social-impact" />} />
            <Route path="/qs-social%20impact" element={<CellDetail overrideId="qs-social-impact" />} />
            <Route path="/qs-governance" element={<CellDetail overrideId="qs-governance" />} />
            <Route path="/qs-sdg-annual-reports" element={<CellDetail overrideId="qs-sdg-annual-reports" />} />
            <Route path="/qs-sdg%20annual%20reports" element={<CellDetail overrideId="qs-sdg-annual-reports" />} />

            {/* UI GreenMetric */}
            <Route path="/ui-greenmetric-sustainable-university-ranking" element={<CellDetail overrideId="ui-greenmetric-sustainable-university-ranking" />} />
            <Route path="/ui-greenmetric" element={<CellDetail overrideId="ui-greenmetric" />} />

            {/* R&D Cell */}
            <Route path="/r&d-cell" element={<CellDetail overrideId="rd-cell" />} />
            <Route path="/rd-cell" element={<CellDetail overrideId="rd-cell" />} />

            {/* Centre of Innovation & Incubation */}
            <Route path="/innovation-center" element={<CellDetail overrideId="cii" />} />
            <Route path="/centre-of-innovation-and-incubation" element={<CellDetail overrideId="cii" />} />

            {/* NASSCOM Cell */}
            <Route path="/nasscom-cell" element={<CellDetail overrideId="nasscom" />} />
            <Route path="/nasscom" element={<CellDetail overrideId="nasscom" />} />

            {/* IEEE Student Branch */}
            <Route path="/ieee" element={<CellDetail overrideId="ieee" />} />
            <Route path="/ieee-student-branch" element={<CellDetail overrideId="ieee" />} />

            {/* PAARC Cell */}
            <Route path="/paarc-cell" element={<CellDetail overrideId="paarcc" />} />
            <Route path="/paarc" element={<CellDetail overrideId="paarcc" />} />
            <Route path="/paarcc" element={<CellDetail overrideId="paarcc" />} />

            {/* Student Activity Center (SAC) */}
            <Route path="/student-activity-center-sac" element={<CellDetail overrideId="sac" />} />
            <Route path="/student-activity-center" element={<CellDetail overrideId="sac" />} />
            <Route path="/sac" element={<CellDetail overrideId="sac" />} />
            {/* Individual SDG Goals (2027) */}
            <Route path="/sdg1-2027" element={<SdgGoalDetailView overrideSlug="sdg1-2027" />} />
            <Route path="/sdg2-2027" element={<SdgGoalDetailView overrideSlug="sdg2-2027" />} />
            <Route path="/sdg3-2027" element={<SdgGoalDetailView overrideSlug="sdg3-2027" />} />
            <Route path="/sdg4-2027" element={<SdgGoalDetailView overrideSlug="sdg4-2027" />} />
            <Route path="/sdg5-2027" element={<SdgGoalDetailView overrideSlug="sdg5-2027" />} />
            <Route path="/sdg6-2027" element={<SdgGoalDetailView overrideSlug="sdg6-2027" />} />
            <Route path="/sdg7-2027" element={<SdgGoalDetailView overrideSlug="sdg7-2027" />} />
            <Route path="/sdg8-2027" element={<SdgGoalDetailView overrideSlug="sdg8-2027" />} />
            <Route path="/sdg9-2027" element={<SdgGoalDetailView overrideSlug="sdg9-2027" />} />
            <Route path="/sdg10-2027" element={<SdgGoalDetailView overrideSlug="sdg10-2027" />} />
            <Route path="/sdg11-2027" element={<SdgGoalDetailView overrideSlug="sdg11-2027" />} />
            <Route path="/sdg12-2027" element={<SdgGoalDetailView overrideSlug="sdg12-2027" />} />
            <Route path="/sdg13-2027" element={<SdgGoalDetailView overrideSlug="sdg13-2027" />} />
            <Route path="/sdg14-2027" element={<SdgGoalDetailView overrideSlug="sdg14-2027" />} />
            <Route path="/sdg15-2027" element={<SdgGoalDetailView overrideSlug="sdg15-2027" />} />
            <Route path="/sdg16-2027" element={<SdgGoalDetailView overrideSlug="sdg16-2027" />} />
            <Route path="/sdg17-2027" element={<SdgGoalDetailView overrideSlug="sdg17-2027" />} />
            {/* Individual SDG Goals (2025) */}
            <Route path="/sdg1" element={<SdgGoalDetailView overrideSlug="sdg1" />} />
            <Route path="/sdg2" element={<SdgGoalDetailView overrideSlug="sdg2" />} />
            <Route path="/sdg3" element={<SdgGoalDetailView overrideSlug="sdg3" />} />
            <Route path="/sdg4" element={<SdgGoalDetailView overrideSlug="sdg4" />} />
            <Route path="/sdg5" element={<SdgGoalDetailView overrideSlug="sdg5" />} />
            <Route path="/sdg6" element={<SdgGoalDetailView overrideSlug="sdg6" />} />
            <Route path="/sdg7" element={<SdgGoalDetailView overrideSlug="sdg7" />} />
            <Route path="/sdg8" element={<SdgGoalDetailView overrideSlug="sdg8" />} />
            <Route path="/sdg9" element={<SdgGoalDetailView overrideSlug="sdg9" />} />
            <Route path="/sdg10" element={<SdgGoalDetailView overrideSlug="sdg10" />} />
            <Route path="/sdg11" element={<SdgGoalDetailView overrideSlug="sdg11" />} />
            <Route path="/sdg12" element={<SdgGoalDetailView overrideSlug="sdg12" />} />
            <Route path="/sdg13" element={<SdgGoalDetailView overrideSlug="sdg13" />} />
            <Route path="/sdg14" element={<SdgGoalDetailView overrideSlug="sdg14" />} />
            <Route path="/sdg15" element={<SdgGoalDetailView overrideSlug="sdg15" />} />
            <Route path="/sdg16" element={<SdgGoalDetailView overrideSlug="sdg16" />} />
            <Route path="/sdg17" element={<SdgGoalDetailView overrideSlug="sdg17" />} />
            <Route path="/sdg-goal/:slug" element={<SdgGoalDetailView />} />
            <Route path="/student-clubs-sac" element={<StudentClubs />} />
            <Route path="/studentclubs" element={<StudentClubs />} />
            <Route path="/university/studentclubs" element={<StudentClubs />} />
            <Route path="/student-clubs" element={<StudentClubs />} />
            <Route path="/university/student-clubs" element={<StudentClubs />} />
            <Route path="/faculty-information" element={<FacultyInformation />} />
            <Route path="/university/faculty-information" element={<FacultyInformation />} />
            <Route path="/faculty" element={<FacultyInformation />} />
            <Route path="/university/faculty/:slug" element={<FacultyProfilePage />} />
            <Route path="/faculty/:slug" element={<FacultyProfilePage />} />
            <Route path="/iei" element={<CellDetail overrideId="iei" />} />
            <Route path="/ipfc" element={<CellDetail overrideId="ipfc" />} />
            <Route path="/edc" element={<CellDetail overrideId="edc" />} />
            <Route path="/ed-cell" element={<CellDetail overrideId="edc" />} />
            <Route path="/pcc" element={<CellDetail overrideId="pcc" />} />
            <Route path="/psychological-counselling-cell" element={<CellDetail overrideId="pcc" />} />
            <Route path="/career" element={<Careers />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/career/leadership-positions" element={<Careers initialTab="leadership" />} />
            <Route path="/career/faculty-positions" element={<Careers initialTab="faculty" />} />
            <Route path="/career/benefits" element={<Careers initialTab="benefits" />} />
            <Route path="/career/press-release" element={<Careers initialTab="press" />} />
            <Route path="/career/contact" element={<Careers initialTab="contact" />} />
            <Route path="/leadership-positions" element={<Careers initialTab="leadership" />} />
            <Route path="/positionsoffered" element={<Careers initialTab="faculty" />} />
            <Route path="/positions-offered" element={<Careers initialTab="faculty" />} />
            <Route path="/Venture-Studio" element={<VentureStudio />} />
            <Route path="/venture-studio" element={<VentureStudio />} />
            <Route path="/skill-development-centre" element={<SkillDevelopmentCentre />} />
            <Route path="/skill-development-center" element={<SkillDevelopmentCentre />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <FloatingWhatsApp />
       </Router>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;

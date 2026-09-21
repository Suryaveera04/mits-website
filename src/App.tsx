import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, Suspense, lazy } from "react";

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
const Careers = lazy(() => import("./pages/Careers"));
const CiscoNetworkingAcademy = lazy(() => import("./pages/CiscoNetworkingAcademy"));
const CiscoSelfPacedCourses = lazy(() => import("./pages/CiscoSelfPacedCourses"));
const CurriculumSyllabus = lazy(() => import("./pages/CurriculumSyllabus"));
const SportsAthletics = lazy(() => import("./pages/SportsAthletics"));
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
            <Route path="/bog" element={<BogPage />} />
            <Route path="/minutes-ac" element={<MinutesAcPage />} />
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
            <Route path="/research" element={<Research />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/placements/:section" element={<Placements />} />
            <Route path="/cisco-networking-academy" element={<CiscoNetworkingAcademy />} />
            <Route path="/cisco-self-paced-courses" element={<CiscoSelfPacedCourses />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/campus-life/student-clubs" element={<CampusLifeDetail categoryKey="clubs" />} />
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
            <Route path="/aqarcriteria" element={<AQARCriterionPage />} />
            <Route path="/aqar-criterion" element={<AQARCriterionPage />} />
            <Route path="/affiliations-accreditations" element={<AffiliationsAccreditations />} />
            <Route path="/psd" element={<PublicSelfDisclosures />} />
            <Route path="/public-self-disclosures" element={<PublicSelfDisclosures />} />
            <Route path="/international-relations" element={<InternationalRelations />} />
            <Route path="/international-relations/mou/:slug" element={<InternationalRelationsPartner />} />
            <Route path="/international-relations/stanford-initiative" element={<StanfordInitiative />} />
            <Route path="/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news-events" element={<NewsEvents />} />
            <Route path="/news-events/:slug" element={<NewsEventDetail />} />
            <Route path="/eligibility-and-fees" element={<EligibilityAndFees />} />
            <Route path="/department/:deptKey" element={<DepartmentPage />} />
            <Route path="/department/:deptKey/faculty/:slug" element={<FacultyProfilePage />} />
            <Route path="/department/:deptKey/:section" element={<DepartmentPage />} />
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
            <Route path="/iei" element={<CellDetail overrideId="iei" />} />
            <Route path="/career" element={<Careers />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
       </Router>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;

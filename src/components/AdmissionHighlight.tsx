import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, ClipboardCheck, ShieldCheck, UserRoundPlus } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

const processSteps = [
  { title: "Registration",  description: "Fill the online form with basic details.",                      icon: UserRoundPlus },
  { title: "Verification",  description: "Verify email and mobile number via OTP.",                       icon: ShieldCheck    },
  { title: "Application",   description: "Upload documents and submit the application.",                  icon: ClipboardCheck },
  { title: "MITSUCET 2027", description: "Appear for entrance test and proceed to counseling.",           icon: CalendarDays   },
];

const AdmissionHighlight = () => (
  <section
    id="admissions"
    className="relative py-12 md:py-14 overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url("${BASE}admissions/admission1.jpg")`,
    }}
  >
    <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(10,24,41,0.82)_0%,rgba(10,24,41,0.74)_45%,rgba(125,0,0,0.64)_100%)]" />
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b30000] via-[#ffffff]/60 to-[#0f2a44]" />

    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <div className="rounded-2xl border border-[#d6ddea] bg-[#eaf0f8] p-3 md:p-4 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.55)]">
          <div className="rounded-xl bg-[#0f2a44] p-6 md:p-10 border border-[#1f4266] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <p className="inline-flex rounded-full border border-white/25 bg-[#2a4a6b] px-4 py-1 text-sm md:text-sm font-semibold tracking-wide text-white mb-3">
                  Register for Admissions 2027
                </p>
                <h2 className="font-display text-2xl md:text-4xl font-bold text-white leading-tight">
                  Admissions 2027  -  MITS Deemed to be University
                </h2>
                <p className="mt-2 text-sm md:text-base text-white/90 leading-relaxed max-w-3xl">
                  Join MITS through the official admission portal. Explore industry-aligned programs and complete your admission process for AY 2027-28.
                </p>
              </div>
              <a href="https://admission.mits.ac.in/" target="_blank" rel="noreferrer" className="shrink-0">
                <Button className="bg-[#b30000] text-white hover:bg-[#cd0000] font-bold px-8 py-5 rounded-xl shadow-[0_0_0_0_rgba(179,0,0,0)] hover:shadow-[0_0_24px_1px_rgba(179,0,0,0.45)] transition-all duration-300 text-base">
                  Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 text-sm md:text-sm mb-8">
              {["28+ Years of Legacy", "100% Placement Support", "21 LPA Highest Package", "15+ Global Partners", "NAAC A+ Accredited", "UGC Recognized"].map(b => (
                <span key={b} className="rounded-full border border-white/20 bg-[#2a4a6b] px-3 py-1 text-white">{b}</span>
              ))}
            </div>

            {/* Process Steps */}
            <div className="rounded-xl bg-[#f9fbff] p-5 md:p-6 border border-[#d8e2ee]">
              <p className="text-sm font-semibold text-[#0f2a44] mb-4">Admission Process</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="rounded-lg border border-[#d7e0ea] bg-white px-4 py-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-md bg-[#0f2a44]/10 text-[#0f2a44]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-[#b30000]">Step {index + 1}</p>
                      </div>
                      <p className="text-sm font-semibold text-[#0f2a44]">{step.title}</p>
                      <p className="text-sm text-slate-600 mt-1">{step.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AdmissionHighlight;


import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { CreditCard, FileText, CheckCircle2, Mail, ShieldAlert } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const REFUND_TABLE_DATA = [
  { category: "1", percentage: "100 %", timeline: "15 Days or more before the formally notified last date of admission" },
  { category: "2", percentage: "90 %", timeline: "Less than 15 Days before the formally notified last date of admission" },
  { category: "3", percentage: "80 %", timeline: "15 Days or less after the formally notified last date of admission" },
  { category: "4", percentage: "50 %", timeline: "30 days or less, but more than 15 days after formally notified last date of admission" },
  { category: "5", percentage: "00 %", timeline: "More than 30 days after formally notified last date of admission" },
];

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <SEO
        title="Fee Refund Policy | MITS Deemed to be University"
        description="Official Fee Refund Policy for Madanapalle Institute of Technology & Science (Deemed to be University) in compliance with UGC Guidelines."
        canonical="/refund-policy"
      />
      <Header />

      {/* Hero Banner matching About page */}
      <section
        className="relative pt-32 md:pt-44 pb-24 overflow-hidden"
        style={{
          backgroundImage: `url("${BASE}Hero-Section/image-5.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffb300] font-bold tracking-[0.2em] uppercase text-sm sm:text-sm mb-4 flex items-center justify-center gap-2">
            <CreditCard className="w-4 h-4" /> Financial Policy
          </p>
          <h1
            className="font-display text-4xl md:text-6xl font-bold mb-5 text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Fee Refund Policy
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-4">
            Madanapalle Institute of Technology &amp; Science (Deemed to be University)
          </p>
        </div>
        <div className="absolute bottom-4 left-6 z-10">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-white/80">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/50">›</li>
              <li className="text-[#ffd15c] font-semibold">Fee Refund Policy</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Content - Utilizing full container space matching Website Privacy Policy */}
      <main className="container mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-16 flex-1 w-full max-w-7xl">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-12 space-y-10">
          
          {/* UGC Reference Box */}
          <div className="bg-gradient-to-br from-[#faf7f2] to-white rounded-2xl p-6 md:p-8 border border-[#caa74d]/40 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#b31317]/10 text-[#b31317] text-sm font-bold uppercase tracking-wider">
              <FileText className="w-4 h-4" /> UGC Circular Reference
            </div>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed">
              With reference to the University Grants Commission (UGC) Circular No. F.2-71/2022 (CPP-II) (C-114546) dated 12 June 2024, it is hereby informed to all stakeholders that Madanapalle Institute of Technology &amp; Science (MITS), Deemed to be University, has formulated a Fee Refund Policy in compliance with the provisions of the UGC Notification on Refund of Fees. This policy shall be applicable to all programs offered by MITS Deemed to be University. Students admitted to the first semester of any course (after payment of the application fee) may apply for cancellation or withdrawal of admission during the academic year of admission. For fee refund, the last date of admission shall be considered as one day prior to the commencement of the Induction Programme.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Procedure for Cancellation/Withdrawal of admission */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">1</span>
              Procedure for Cancellation / Withdrawal of Admission
            </h2>
            <div className="space-y-4 font-body text-slate-700 text-sm md:text-base leading-relaxed">
              <p>
                A student seeking cancellation or withdrawal of admission must submit an application in the prescribed format, duly signed by both the student and the parent, to the Registrar of MITS Deemed to be University. Only a handwritten application will be accepted, and it must be accompanied by the original fee receipt.
              </p>
              <p>
                The application for cancellation or withdrawal of admission must be submitted by the student to the Registrar of MITS Deemed to be University. The Registrar shall process and approve the application based on the recommendations of the Admission Cell and in accordance with the policy guidelines provided below.
              </p>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Guidelines & UGC October 2018 provisions */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">2</span>
              Refund Guidelines &amp; Processing Deductions
            </h2>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start bg-slate-50 rounded-xl p-5 border border-slate-200 text-slate-700 text-sm md:text-base leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Notwithstanding anything contained in any guidelines / prospectus / notification / Schedule, a full refund of fee shall be made by MITS Deemed to be university on account of cancellation of admission / migration of students up to the last date of admission cancellation and with a deduction of not more than <strong>Rs. 1,000</strong>, as a processing fee.
                </span>
              </li>
              <li className="flex gap-3 items-start bg-slate-50 rounded-xl p-5 border border-slate-200 text-slate-700 text-sm md:text-base leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  For any admission schedule that extends beyond or commences after the last date for admission cancellation, the provisions of the UGC Notification issued in October 2018 regarding refund of fees and non-retention of original certificates shall apply.
                </span>
              </li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Refund Percentage Table */}
          <section className="space-y-4">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44]">
                Refund Percentage Matrix
              </h2>
              <p className="text-slate-600 text-sm mt-1">(Reproduced below for ready reference)</p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
              <table className="w-full text-left text-sm font-body border-collapse">
                <thead>
                  <tr className="bg-[#0f2a44] text-white">
                    <th className="p-4 font-bold text-center w-24 border-r border-white/10">Category</th>
                    <th className="p-4 font-bold text-center w-36 border-r border-white/10">Percentage of Refund of Fees</th>
                    <th className="p-4 font-bold">Point of Time When Notice of Withdrawal of Admission is Received in MITS Deemed to be University</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {REFUND_TABLE_DATA.map((row) => (
                    <tr key={row.category} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 text-center font-extrabold text-[#0f2a44] border-r border-slate-100 bg-slate-50/50">{row.category}</td>
                      <td className="p-4 text-center font-bold text-emerald-700 border-r border-slate-100">{row.percentage}</td>
                      <td className="p-4 text-slate-700 font-medium">{row.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Duration Note */}
          <div className="bg-gradient-to-br from-[#0f2a44] to-[#152f4f] text-white rounded-xl p-6">
            <p className="text-[#caa74d] text-sm font-semibold uppercase tracking-wider mb-1">Duration &amp; Validity</p>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              Note: This Policy will remain in force for subsequent academic sessions until the issuance of revised policy by the UGC.
            </p>
          </div>

          {/* Contact Box */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-[#0f2a44]">Questions regarding fee refund or admission withdrawal?</p>
              <p className="text-slate-600 text-sm">Contact the Registrar’s office or Admission Cell.</p>
            </div>
            <a
              href="mailto:registrar@mits.ac.in"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0f2a44] text-white text-sm font-semibold hover:bg-primary transition-colors shrink-0"
            >
              <Mail className="w-4 h-4" /> Contact Registrar
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

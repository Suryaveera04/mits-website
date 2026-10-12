import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { ShieldCheck, Mail, MapPin, Globe } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

export default function TermsConditionsPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <SEO
        title="Terms & Conditions Policy | MITS Deemed to be University"
        description="Official Terms & Conditions Policy for Madanapalle Institute of Technology & Science (Deemed to be University)."
        canonical="/terms-conditions-policy"
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
            <ShieldCheck className="w-4 h-4" /> Institutional Policy
          </p>
          <h1
            className="font-display text-4xl md:text-6xl font-bold mb-5 text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Terms &amp; Conditions Policy
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
              <li className="text-[#ffd15c] font-semibold">Terms &amp; Conditions Policy</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Content - Continuous Single Column Flow matching Website Privacy Policy */}
      <main className="container mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-16 flex-1 w-full max-w-7xl">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-12 space-y-10">
          
          {/* Introduction */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              Introduction
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              Welcome to Madanapalle Institute of Technology &amp; Science Deemed to be University. These Terms &amp; Conditions (“Terms”) govern your access to and use of our website [www.mits.ac.in] and any services provided through it.
            </p>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base font-medium">
              By accessing or using this Site, you agree to be bound by these Terms. If you do not agree, you must discontinue using this Site immediately.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 1. Acceptance of Terms */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">1</span>
              Acceptance of Terms
            </h2>
            <ul className="space-y-2.5">
              {[
                "These Terms apply to all visitors, users, applicants, students, parents, and any other individuals accessing the Site.",
                "Certain sections of the Site (such as online applications, fee payments, or LMS/ERP access) may require you to accept additional terms and conditions specific to those services."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-700 text-sm md:text-base items-start">
                  <span className="w-2 h-2 rounded-full bg-[#caa74d] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* 2. About the Website */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">2</span>
              About the Website
            </h2>
            <p className="text-slate-700 text-sm md:text-base">The Site provides information and services related to:</p>
            <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 pt-1">
              {[
                "Academic programs",
                "Admissions",
                "Online applications",
                "Fee payment services",
                "Examination details",
                "Research activities",
                "Downloads & resources",
                "Communication updates"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2.5 text-slate-700 text-sm items-center bg-slate-50 rounded-xl p-3.5 border border-slate-200/80">
                  <span className="w-2 h-2 rounded-full bg-[#caa74d] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 text-sm italic pt-2">
              We reserve the right to modify, suspend, or discontinue any part of the Site at any time without prior notice.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 3. User Responsibilities */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">3</span>
              User Responsibilities
            </h2>
            <p className="text-slate-700 text-sm md:text-base">By using this Site, you agree that:</p>
            <ul className="grid md:grid-cols-2 gap-3">
              {[
                "You must provide information that is accurate, complete, and up to date.",
                "You must not hack, disrupt, damage, or interfere with the Site.",
                "You must not use the Site for any unlawful or harmful activities.",
                "You are responsible for keeping your login credentials (if any) confidential."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-700 text-sm md:text-base items-start bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                  <span className="w-2 h-2 rounded-full bg-[#caa74d] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 text-sm font-medium pt-1">
              Any misuse of the Site may result in suspended access, legal action, or both.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 4. Online Payments (If Applicable) */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">4</span>
              Online Payments (If Applicable)
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed">
              If the Site provides fee payment or online services, the following terms will be applied:
            </p>
            <ul className="space-y-2.5">
              {[
                "Payments must be made using valid and authorized methods (such as credit/debit cards, net banking, UPI, or digital wallets).",
                "You are responsible for ensuring that all payment information provided is accurate."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-700 text-sm md:text-base items-start">
                  <span className="w-2 h-2 rounded-full bg-[#caa74d] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-2 text-sm text-slate-700 mt-4">
              <p className="font-bold text-[#0f2a44]">The institution is not responsible for:</p>
              <ul className="space-y-1.5">
                {[
                  "Failed transactions caused by bank or server issues",
                  "Incorrect details entered by the user",
                  "Delays in payment confirmation from payment gateway providers"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-slate-700 text-sm md:text-base leading-relaxed pt-2">
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-2">
                <p className="font-bold text-[#0f2a44]">Refund Policy:</p>
                <ul className="space-y-1.5 text-sm text-slate-600">
                  <li>• Refunds, when applicable, will be processed according to the institution’s refund policy.</li>
                  <li>• Approved refunds will be issued to the original payment method within 5–10 working days.</li>
                  <li>• Admission or registration fees are generally non-refundable unless specifically stated.</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-2">
                <p className="font-bold text-[#0f2a44]">Cancellation Policy:</p>
                <ul className="space-y-1.5 text-sm text-slate-600">
                  <li>• Cancellations must be made in accordance with the relevant departmental or institutional guidelines.</li>
                  <li>• All cancellation decisions are final and binding.</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* 5. Accuracy of Information */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">5</span>
              Accuracy of Information
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              We strive to ensure that the content on the Site is accurate and up to date. However, we do not guarantee its:
            </p>
            <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 pt-1">
              {["Completeness", "Correctness", "Timeliness", "Uninterrupted Availability"].map((item, idx) => (
                <li key={idx} className="flex gap-2.5 text-slate-700 text-sm items-center bg-slate-50 rounded-xl p-3.5 border border-slate-200/80">
                  <span className="w-2 h-2 rounded-full bg-[#caa74d] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base pt-1">
              In case of any discrepancies official institutional notifications or records will take precedence.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 6. Intellectual Property Rights */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">6</span>
              Intellectual Property Rights
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">Unless stated:</p>
            <ul className="space-y-2.5">
              {[
                "All the text, photographs, graphics, videos, logos, and design elements on the Site are the intellectual property of MITS Deemed to be University.",
                "Users may view or download content only for personal, non-commercial use.",
                "Copying, editing, reproducing, distributing, or publishing any content without written permission is strictly prohibited."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-700 text-sm md:text-base items-start">
                  <span className="w-2 h-2 rounded-full bg-[#caa74d] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* 7. Third-Party Links */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">7</span>
              Third-Party Links
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              The Site may include links to external websites for your convenience.
            </p>
            <ul className="space-y-2.5">
              {[
                "We do not endorse or control these third-party websites.",
                "We are not responsible for their content, privacy practices, or services.",
                "Accessing any third-party links is entirely at your own risk."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-700 text-sm md:text-base items-start">
                  <span className="w-2 h-2 rounded-full bg-[#caa74d] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* 8. Privacy & Data Security */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">8</span>
              Privacy &amp; Data Security
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">We respect your privacy.</p>
            <ul className="space-y-2.5">
              {[
                "Personal data collected through forms, applications, or online services is used solely for official purposes.",
                "We may share this data with authorized internal departments or statutory bodies when required.",
                "For more information, please refer to our Privacy Policy."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-700 text-sm md:text-base items-start">
                  <span className="w-2 h-2 rounded-full bg-[#caa74d] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* 9. Limitation of Liability */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">9</span>
              Limitation of Liability
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">To the maximum extent &amp; permitted by the law:</p>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              The Site and its services are provided on an “as is” and “as available” basis, without any warranties of any kind. We are not responsible for any direct, indirect, incidental, or consequential damages arising from:
            </p>
            <ul className="grid md:grid-cols-2 gap-3 pt-1">
              {[
                "Use of the Site",
                "Inability to use the Site",
                "Technical issues, viruses, or service interruptions",
                "Data loss or unauthorized access"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-700 text-sm md:text-base items-start bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                  <span className="w-2 h-2 rounded-full bg-[#caa74d] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base font-medium pt-1">
              Your sole remedy for dissatisfaction with the Site is to discontinue its use.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 10. Indemnification */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">10</span>
              Indemnification
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              You agree to indemnify and hold Madanapalle Institute of Technology &amp; Science Deemed to be University including its management, employees, and partners, harmless from any claims or demands arising from:
            </p>
            <ul className="space-y-2.5">
              {[
                "Your use or misuse of the Site",
                "Your violation of these Terms",
                "Your infringement of the rights of others"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-700 text-sm md:text-base items-start">
                  <span className="w-2 h-2 rounded-full bg-[#caa74d] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* 11. Modifications to Terms */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">11</span>
              Modifications to Terms
            </h2>
            <ul className="space-y-2.5">
              {[
                "We may revise these Terms at any time.",
                "Any changes will become effective immediately upon being posted on the Site.",
                "Your continued use of the Site after such changes indicates your acceptance of the updated Terms."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-700 text-sm md:text-base items-start">
                  <span className="w-2 h-2 rounded-full bg-[#caa74d] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* 12. Governing Law & Jurisdiction */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">12</span>
              Governing Law &amp; Jurisdiction
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base font-medium">
              These Terms are governed by the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Madanapalle, Andhra Pradesh.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 13. Contact Information */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">13</span>
              Contact Information
            </h2>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200 space-y-3 text-slate-700 text-sm md:text-base">
              <p className="font-bold text-[#0f2a44]">For any questions or clarifications, please contact:</p>
              <div className="space-y-1.5">
                <p className="font-semibold text-slate-900">Web Master</p>
                <p>Madanapalle Institute of Technology &amp; Science (Deemed to be University)</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0" /> Kadiri Road, Angallu, Madanapalle – 517325, Andhra Pradesh, India</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary shrink-0" /> Email: <a href="mailto:webmaster@mits.ac.in" className="text-primary hover:underline font-medium">webmaster@mits.ac.in</a></p>
                <p className="flex items-center gap-2"><Globe className="w-4 h-4 text-primary shrink-0" /> Website: <a href="https://www.mits.ac.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">https://www.mits.ac.in</a></p>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { ShieldCheck, Mail, Globe, MapPin } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <SEO
        title="Website Privacy Policy | MITS Deemed to be University"
        description="Official Website Policy for Madanapalle Institute of Technology & Science (Deemed to be University)."
        canonical="/privacy-policy"
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
            Website Privacy Policy
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-4">
            Madanapalle Institute of Technology & Science (Deemed to be University)
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
              <li className="text-[#ffd15c] font-semibold">Privacy Policy</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Content - Utilizing full container space */}
      <main className="container mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-16 flex-1 w-full max-w-7xl">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-12 space-y-10">
          
          {/* 1. Introduction */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">1</span>
              Introduction
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              The official website of Madanapalle Institute of Technology & Science (Deemed to be University) serves as the primary digital platform for disseminating authentic and up-to-date information about the University’s academic programs, research initiatives, events, and services. This policy defines the guidelines to maintain the accuracy, consistency, accessibility, and integrity of all information published on the University’s website and its associated subdomains.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 2. Objectives */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">2</span>
              Objectives
            </h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {[
                "Boost employability and productivity of youth by providing training on updated technologies",
                "Encourage standardization and initiate a process of creating a registry of skills",
                "Impart training through Industry & Academia experts in close interaction to produce readily employable graduates",
                "Empower students living in rural areas so as to bridge the urban rural divide",
                "Develop and deploy e-Governance applications in cost effective manner"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-700 text-sm md:text-base items-start bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                  <span className="w-2 h-2 rounded-full bg-[#caa74d] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* 3. Governance and Responsibility */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">3</span>
              Governance and Responsibility
            </h2>
            <ul className="space-y-3">
              {[
                "The Website Committee of MITS oversees all content published on the University website.",
                "Each department or cell is responsible for ensuring that its web content is accurate, up to date, and compliant with this policy.",
                "The Web Master is responsible for technical maintenance, design consistency, and ensuring adherence to accessibility standards."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-700 text-sm md:text-base items-start">
                  <span className="w-2 h-2 rounded-full bg-[#caa74d] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* 4. Content Policy */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">4</span>
              Content Policy
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              All the content published on the University website aligns with the University’s mission and upholds its reputation. Information shared by the departments needs to be accurate, up-to-date, and approved by the respective Head of Department or an authorized official. Content that is offensive, misleading, copyrighted without permission, or otherwise unauthorized is strictly prohibited. Outdated or irrelevant information must be promptly reviewed and updated or removed.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 5. Copyright and Intellectual Property */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">5</span>
              Copyright and Intellectual Property
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              Unless otherwise stated, all text, images, videos, and design elements on this website are the intellectual property of MITS Deemed to be University. Users may reproduce content for personal or educational purposes, provided that the source is properly acknowledged and the material is not altered or misused. Permission must be obtained before reproducing any third party material.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 6. Privacy Policy */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">6</span>
              Privacy Policy
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              The University does not sell, share, or disclose personal information to third parties, except as required by law or in connection with officially approved activities such as contests or hackathons. Visitor data, including IP addresses, browser types, and visit duration, may be collected anonymously for analytical and website improvement purposes.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 7. Cookies Policy */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">7</span>
              Cookies Policy
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              The website uses cookies to enhance user experience and collect statistical information. Cookies assist in managing sessions, remembering user preferences, and analyzing browsing behavior. Users can disable cookies through their browser settings; however, some website features may not function properly if cookies are turned off.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 8. Accessibility and Standards */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">8</span>
              Accessibility and Standards
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              MITS is committed to making its website accessible in accordance with the Web Content Accessibility Guidelines (WCAG). Website pages are regularly tested to ensure compatibility with modern browsers and devices. All non-text content includes appropriate text alternatives to support accessibility and inclusivity.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 9. Hyperlinking Policy */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">9</span>
              Hyperlinking Policy
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-slate-700 text-sm md:text-base leading-relaxed">
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-1">
                <p className="font-bold text-[#0f2a44]">External Links:</p>
                <p>Links to external websites are provided solely for users’ convenience and informational purposes. MITS does not endorse or take responsibility for the content or reliability of such external sites.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-1">
                <p className="font-bold text-[#0f2a44]">Incoming Links:</p>
                <p>Other websites may link to the MITS website without prior permission, as long as the links are not misleading, defamatory, or presented in a way that embeds MITS content within another website’s frame.</p>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* 10. Security and Misuse */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">10</span>
              Security and Misuse
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              MITS implements appropriate security measures to protect data transmitted through its website. Any unauthorized attempts to upload, alter, or damage website content are strictly prohibited and may be subject to legal action.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 11. Policy Review and Updates */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">11</span>
              Policy Review and Updates
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              This Website Policy will be reviewed and updated periodically to reflect technological advancements, legal requirements, and institutional changes. All updates will be published on the University’s website, and users are encouraged to review the policy regularly.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 12. Contact Information */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2a44] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">12</span>
              Contact Information
            </h2>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200 space-y-3 text-slate-700 text-sm md:text-base">
              <p className="font-bold text-[#0f2a44]">For queries, suggestions, or to report any issues related to this website, please contact:</p>
              <div className="space-y-1.5">
                <p className="font-semibold text-slate-900">Web Master</p>
                <p>Madanapalle Institute of Technology & Science (Deemed to be University)</p>
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

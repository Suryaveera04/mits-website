import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: 'MITS International ranking "Times Higher Education (THE) Interdisciplinary Science Rankings 2027"',
    link: 'https://mits.ac.in/assets/pdf/assoc/THE_Interdisciplinary_Science_Rankings_2027_MITS_Report.pdf',
  },
];

export default function PaarcEvents() {
  return (
    <div className="min-h-screen bg-[#fafaf7] text-slate-800">
      <Header />
      <section className="relative pt-32 md:pt-44 pb-20 text-center">
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900">
          PAARC Cell Events
        </h1>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <ScrollReveal>
          <ul className="space-y-4">
            {events.map((e) => (
              <li key={e.id} className="p-4 border rounded bg-white shadow-sm">
                <h2 className="text-xl font-semibold text-[#003366] mb-2">
                  {e.title}
                </h2>
                <a
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B1D1D] hover:underline"
                >
                  View PDF
                </a>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
      <Footer />
    </div>
  );
}

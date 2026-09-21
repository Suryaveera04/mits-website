import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Globe, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

const BASE = import.meta.env.BASE_URL;

const contactCards = [
  { icon: MapPin, title: "Address", lines: ["Madanapalle Institute of Technology & Science", "Deemed to be University", "Madanapalle-Kadiri Road, NH-42, Kurabalakota Mandal, Madanapalle-517325, Andhra Pradesh, India"], accent: "from-[#b30000] to-[#d93030]" },
  { icon: Phone, title: "Phone & WhatsApp", lines: ["Phone: +91-7330803555 / 7330852555", "Landline: +91-8712655132 / 4 / 8", "WhatsApp: +91 7330803555"], accent: "from-[#0f2a44] to-[#1a3d5c]" },
  { icon: Mail, title: "Email Address", lines: ["admissions@mits.ac.in", "principal@mits.ac.in", "info@mits.ac.in"], accent: "from-[#8a6a1a] to-[#caa74d]" },
  { icon: Clock, title: "Office Hours", lines: ["Mon — Fri: 9:00 AM — 5:00 PM", "1st & 3rd Saturdays: 9:00 AM — 5:00 PM", "4th Saturday: 9:00 AM — 1:00 PM (Half Day)", "2nd Saturdays & Sundays: Holiday"], accent: "from-[#7a0000] to-[#b30000]" },
];

const departments = [
  { name: "Admissions Office", phone: "+91 7330803555", email: "admissions@mits.ac.in" },
  { name: "Examinations Cell", phone: "+91 8571 280255", email: "coe@mits.ac.in" },
  { name: "Placement Cell", phone: "+91 7330852557", email: "placements@mits.ac.in" },
  { name: "Research & Development", phone: "+91 8571 280256", email: "rnd@mits.ac.in" },
  { name: "Library", phone: "+91 8571 280258", email: "library@mits.ac.in" },
  { name: "Student Affairs & Helpdesk", phone: "+91 7330852558", email: "studentaffairs@mits.ac.in" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <SEO
        title="Contact MITS Madanapalle – Admissions, Placements & Enquiries"
        description="Contact Madanapalle Institute of Technology & Science. Address: Angallu, Madanapalle – 517325, AP. Phone: +91 7330803555. Email: info@mits.ac.in. Admissions, placements & general enquiries."
        canonical="/contact"
      />
      <main>
        {/* Hero */}
        <section
          className="relative pt-32 md:pt-44 pb-24 overflow-hidden"
          style={{
            backgroundImage: `url("${BASE}Hero-Section/image-2.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        >
          <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <ScrollReveal>
              <p className="text-[#ffd15c] font-bold tracking-[0.2em] uppercase text-sm sm:text-sm mb-4">Get In Touch</p>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-5 text-white">Contact MITS</h1>
              <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-4">
                We're here to answer your questions about admissions, programmes, and campus life.
              </p>
            </ScrollReveal>
          </div>
          <div className="absolute bottom-4 left-6 z-10">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-sm text-white/80">
                <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/50">›</li>
                <li className="text-[#ffd15c] font-semibold">Contact</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Contact info cards */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {contactCards.map((c, i) => {
                const Icon = c.icon;
                return (
                  <ScrollReveal key={c.title} delay={i * 0.08}>
                    <div className="group relative h-full bg-white border border-border/70 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                      <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${c.accent} opacity-10 group-hover:opacity-20 transition-opacity`} />
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.accent} text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-[#0f2a44] mb-2">{c.title}</h3>
                      <div className="space-y-1">
                        {c.lines.map((l, j) => (
                          <p key={j} className="text-sm text-foreground/75 leading-relaxed">{l}</p>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form + Map */}
        <section className="py-12 md:py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="bg-white border border-border/70 rounded-2xl p-6 md:p-8 shadow-sm h-full">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-5 h-5 text-[#b30000]" />
                    <p className="text-[#b30000] text-sm font-semibold uppercase tracking-[0.2em]">Send Message</p>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0f2a44] mb-6">We'd love to hear from you</h2>
                  <form onSubmit={submit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-sm focus:outline-none focus:border-[#b30000] focus:bg-white transition" />
                      <input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-sm focus:outline-none focus:border-[#b30000] focus:bg-white transition" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Phone (optional)" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-sm focus:outline-none focus:border-[#b30000] focus:bg-white transition" />
                      <input required value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} placeholder="Subject" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-sm focus:outline-none focus:border-[#b30000] focus:bg-white transition" />
                    </div>
                    <textarea required rows={5} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Your message..." className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-sm focus:outline-none focus:border-[#b30000] focus:bg-white transition resize-none" />
                    <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#7a0000] to-[#b30000] text-white text-sm font-semibold shadow-md shadow-[#b30000]/25 hover:shadow-lg hover:shadow-[#b30000]/40 hover:-translate-y-0.5 transition-all">
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                    {submitted && <p className="text-sm text-green-700 font-medium">Thank you! We will get back to you soon.</p>}
                  </form>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="bg-white border border-border/70 rounded-2xl overflow-hidden shadow-sm h-full flex flex-col">
                  <div className="p-6 border-b border-border/70 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#b30000]" />
                    <h3 className="font-display font-bold text-lg text-[#0f2a44]">Find Us On Map</h3>
                  </div>
                  <div className="flex-1 min-h-[300px]">
                    <iframe
                      title="MITS Location"
                      src="https://www.google.com/maps?q=Madanapalle+Institute+of+Technology+%26+Science&output=embed"
                      className="w-full h-full min-h-[300px] border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Department directory */}
            <ScrollReveal>
              <div className="mt-10 max-w-6xl mx-auto">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0f2a44] mb-6 text-center">Department Directory</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {departments.map((d) => (
                    <div key={d.name} className="bg-white border border-border/70 rounded-xl p-5 hover:shadow-md hover:border-[#b30000]/30 transition-all">
                      <h4 className="font-display font-bold text-[#0f2a44] mb-2">{d.name}</h4>
                      <a href={`tel:${d.phone}`} className="flex items-center gap-2 text-sm text-foreground/75 hover:text-[#b30000]">
                        <Phone className="w-3.5 h-3.5" />{d.phone}
                      </a>
                      <a href={`mailto:${d.email}`} className="flex items-center gap-2 text-sm text-foreground/75 hover:text-[#b30000] mt-1">
                        <Mail className="w-3.5 h-3.5" />{d.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

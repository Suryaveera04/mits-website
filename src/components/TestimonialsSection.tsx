import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "C. Sneha",
    role: "B.Tech CSE (Placed at Wells Fargo — ₹24 LPA)",
    type: "Alumna",
    text: "MITS gave me the technical foundation, coding hackathons, and placement bootcamps that directly enabled me to clear competitive technical assessments. The faculty mentorship in machine learning and data structures was indispensable.",
  },
  {
    name: "K. Sai Praneeth",
    role: "B.Tech ECE (Stanford University UIF Fellow)",
    type: "Student",
    text: "Being selected as a University Innovation Fellow at Stanford University through MITS transformed how I look at design thinking and systemic challenges. The encouragement from leadership here is unmatched anywhere.",
  },
  {
    name: "R. Haritha",
    role: "B.Tech AI & Data Science (Placed at Cognizant / TCS Digital)",
    type: "Student",
    text: "The state-of-the-art AI labs and practical project exposure at MITS made transition to industry effortless. The guidance through mock interviews and soft-skills sessions gave me immense confidence.",
  },
  {
    name: "M. Dinesh Reddy",
    role: "MBA (Senior Business Analyst, Deloitte)",
    type: "Alumnus",
    text: "The case-study pedagogy, corporate MoUs, and executive guest lectures in the Department of Management Studies provided me with a strategic perspective that continues to accelerate my career growth.",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-[#b30000] font-body font-semibold tracking-[0.18em] uppercase text-sm md:text-sm mb-3">Student Voices</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-4 leading-tight">Testimonials</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border min-h-[260px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[active].name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45 }}
                  className="w-full"
                >
                  <Quote className="w-8 h-8 text-[#caa74d] mb-4" aria-hidden="true" />
                  <p className="font-body text-[#1a1a1a] mb-6 leading-[1.8] italic text-base md:text-lg">"{testimonials[active].text}"</p>
                  <div>
                    <p className="font-display font-bold text-[#0f172a] text-xl">{testimonials[active].name}</p>
                    <p className="font-body text-[#b30000] text-sm font-semibold mt-1">{testimonials[active].type}  -  {testimonials[active].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${active === i ? "w-8 bg-primary" : "w-2.5 bg-secondary/25"}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;


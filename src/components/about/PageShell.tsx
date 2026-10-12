import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  bannerImage?: string;
}

const BASE = import.meta.env.BASE_URL;

const PageShell = ({ eyebrow = "About", title, intro, children, bannerImage }: Props) => {
  const splitTitle = (text: string) => {
    const words = text.trim().split(/\s+/);
    if (words.length <= 1) {
      return <span className="text-white">{text}</span>;
    }
    const splitIndex = Math.ceil(words.length / 2);
    const firstHalf = words.slice(0, splitIndex).join(" ");
    const secondHalf = words.slice(splitIndex).join(" ");
    return (
      <>
        <span className="text-white">{firstHalf}</span>{" "}
        <span className="text-[#ffd15c]">{secondHalf}</span>
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero banner */}
        <section
          className="relative pt-32 md:pt-44 pb-24 overflow-hidden"
          style={{
            backgroundImage: `url("${bannerImage || `${BASE}Hero-Section/image-5.jpg`}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/25" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            {eyebrow && (
              <p className="text-[#ffb300] font-bold tracking-[0.2em] uppercase text-sm sm:text-sm mb-4">
                {eyebrow}
              </p>
            )}
            <h1
              className="font-display text-4xl md:text-6xl font-bold mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {splitTitle(title)}
            </h1>
            {intro && (
              <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-4">
                {intro}
              </p>
            )}
          </div>
          <div className="absolute bottom-4 left-6 z-10">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-sm text-white/80">
                <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/50">›</li>
                <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About</Link></li>
                <li className="text-white/50">›</li>
                <li className="text-[#ffd15c] font-semibold">{title}</li>
              </ol>
            </nav>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 md:py-16">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export { BASE };
export default PageShell;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft, MapPin } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getNewsEventBySlug, getNewsEventImageSrc } from "@/data/newsEvents";

const NewsEventDetail = () => {
  const { slug } = useParams();

  if (!slug) {
    return <Navigate to="/news-events" replace />;
  }

  const item = getNewsEventBySlug(slug);

  if (!item) {
    return <Navigate to="/news-events" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEO
        title={`${item.title} – MITS Madanapalle`}
        description={item.excerpt}
        canonical={`/news-events/${slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Event",
          "name": item.title,
          "description": item.excerpt,
          "startDate": item.date,
          "location": {
            "@type": "Place",
            "name": item.location,
            "address": "Madanapalle Institute of Technology & Science, Madanapalle, Andhra Pradesh"
          },
          "organizer": {
            "@type": "CollegeOrUniversity",
            "name": "Madanapalle Institute of Technology & Science"
          }
        }}
      />
      <main className="pt-24 pb-20">
        <section className="py-14">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button asChild variant="outline" className="mb-6">
              <Link to="/news-events" className="inline-flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back to Events
              </Link>
            </Button>

            <article className="bg-card border border-border rounded-2xl overflow-hidden shadow-md">
              <img src={getNewsEventImageSrc(item.image)} alt={item.title} className="w-full h-64 md:h-80 object-cover" />
              <div className="p-6 md:p-8">
                <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">{item.category}</p>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                  {item.title}
                </h1>

                <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">{item.details}</p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewsEventDetail;

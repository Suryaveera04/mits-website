import { useMemo, useState } from "react";
import { ArrowLeft, CalendarDays, ExternalLink, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { cseEventArchive } from "@/data/cseEventArchive";

const CSEEventsPage = () => {
  const [query, setQuery] = useState("");

  const filteredEvents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return cseEventArchive;
    return cseEventArchive.filter((event) =>
      `${event.academicYear} ${event.description}`.toLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  const eventsByAcademicYear = useMemo(() => {
    const groups = new Map<string, typeof cseEventArchive>();
    filteredEvents.forEach((event) => {
      const events = groups.get(event.academicYear) ?? [];
      events.push(event);
      groups.set(event.academicYear, events);
    });
    return [...groups.entries()].sort(([yearA], [yearB]) => yearB.localeCompare(yearA));
  }, [filteredEvents]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F7FB]">
      <SEO
        title="CSE Department Events – MITS Deemed to be University"
        description="Browse events organized by the Department of Computer Science and Engineering at MITS."
        canonical="/cse-events"
      />
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#0f2a44] to-[#173f63] px-4 pb-12 pt-28 text-white md:pt-36">
          <div className="mx-auto max-w-6xl">
            <a
              href={`${import.meta.env.BASE_URL}department/cse#tab-14`}
              className="mb-6 inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to CSE Department
            </a>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffd15c]">
              Computer Science &amp; Engineering
            </p>
            <h1 className="font-display text-3xl font-bold text-white drop-shadow-md md:text-5xl">
              CSE Department Events
            </h1>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground" aria-live="polite">
              Showing {filteredEvents.length} of {cseEventArchive.length} events
            </p>
            <label className="relative block w-full sm:max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <span className="sr-only">Search events</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search CSE events"
                className="w-full rounded-xl border border-border bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
              />
            </label>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border bg-white p-10 text-center text-sm text-muted-foreground">
              No events match your search.
            </div>
          ) : (
            <div className="space-y-10">
              {eventsByAcademicYear.map(([academicYear, events]) => (
                <section key={academicYear} aria-labelledby={`events-${academicYear}`}>
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3">
                    <h2
                      id={`events-${academicYear}`}
                      className="flex items-center gap-2 text-xl font-bold text-secondary"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      <CalendarDays className="h-5 w-5 text-primary" />
                      Academic Year {academicYear}
                    </h2>
                    <span className="text-sm text-muted-foreground">
                      {events.length} {events.length === 1 ? "event" : "events"}
                    </span>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {events.map((event, index) => (
                      <article
                        key={`${academicYear}-${event.href ?? event.description}-${index}`}
                        className="rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                      >
                        <p className="text-sm leading-6 text-foreground">{event.description}</p>
                        {event.href ? (
                          <a
                            href={event.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                          >
                            View event report
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        ) : (
                          <p className="mt-4 text-xs text-muted-foreground">
                            No report link is listed on the department page.
                          </p>
                        )}
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CSEEventsPage;

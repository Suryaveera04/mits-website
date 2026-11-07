import { FileText, ExternalLink, BookOpen, Calendar, Archive } from "lucide-react";
import PageShell from "@/components/about/PageShell";
import { Button } from "@/components/ui/button";
import { academicCouncil } from "@/data/aboutData";

const AcademicCouncil = () => {
  return (
    <PageShell eyebrow="Governance" title={academicCouncil.title} intro={academicCouncil.description}>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-border rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
                  Constitution of the Academic Council
                </h3>
                <p className="text-sm text-secondary/70 mt-1 leading-relaxed">
                  Composition and academic responsibilities of the Council under the
                  MITS Deemed to be University statutes.
                </p>
                <Button asChild className="mt-4 bg-primary hover:bg-primary/90">
                  <a href={academicCouncil.constitutionUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="w-4 h-4 mr-2" />
                    View Constitution
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-3 border-b border-border">
              <h3 className="text-lg font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
                Minutes of Academic Council Meetings
              </h3>
              <Button asChild size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                <a href="https://mits.ac.in/minutes-ac" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold">
                  <Archive className="w-3.5 h-3.5" />
                  View All Minutes (2014-2026) <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Minutes of 4th Academic Council Meeting",
                  date: "August 14, 2026",
                  url: "https://mits.ac.in/assets/pdf/admin/Minutes of the 4th Academic Council.pdf",
                },
                {
                  title: "Minutes of 3rd Academic Council Meeting",
                  date: "June 2026",
                  url: "https://mits.ac.in/public/uploads/mandatory/MoM-%203rd%20AC%20meeting%20DTBU%20Jun%202026.pdf",
                },
                {
                  title: "Minutes of 2nd Academic Council Meeting",
                  date: "August 25, 2025",
                  url: "https://mits.ac.in/public/uploads/mandatory/Minutes-2nd AC meeting.pdf",
                },
                {
                  title: "Minutes of 1st Academic Council Meeting",
                  date: "August 5, 2025",
                  url: "https://mits.ac.in/public/uploads/mandatory/Minutes-1st_AC COUNCIL-Meeting.pdf",
                },
              ].map((meeting, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all bg-card/30"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary text-sm sm:text-base">
                        {meeting.title}
                      </h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <Calendar className="w-3.5 h-3.5" />
                        Meeting Date: {meeting.date}
                      </p>
                    </div>
                  </div>
                  <Button asChild variant="outline" size="sm" className="shrink-0 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                    <a href={meeting.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                      View Minutes <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </Button>
                </div>
              ))}

              <div className="mt-4 pt-4 border-t border-dashed border-border/80 flex items-center justify-between bg-primary/5 p-4 rounded-xl">
                <div className="flex items-center gap-2">
                  <Archive className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-secondary">Complete Academic Council Minutes Repository (2014-2026)</span>
                </div>
                <a
                  href="https://mits.ac.in/minutes-ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  <span>Explore Archive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <aside>
          <div className="bg-gradient-to-br from-primary to-[#7a0a0d] text-primary-foreground rounded-2xl p-6 shadow-md">
            <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold mb-2">Governance</p>
            <h4 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>Apex Academic Authority</h4>
            <p className="text-sm text-primary-foreground/85 leading-relaxed">
              The Academic Council is responsible for the regulation of academic standards,
              evaluation policy, curriculum reforms and research programmes across the University.
            </p>
          </div>
        </aside>
      </div>
    </PageShell>
  );
};

export default AcademicCouncil;

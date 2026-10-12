import { FileText, ExternalLink, Calendar, ShieldCheck } from "lucide-react";
import PageShell from "@/components/about/PageShell";
import { Button } from "@/components/ui/button";
import { executiveCouncil } from "@/data/aboutData";

const ExecutiveCouncil = () => {
  return (
    <PageShell eyebrow="Governance" title={executiveCouncil.title} intro={executiveCouncil.description}>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-border rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
                  Constitution of the Executive Council
                </h3>
                <p className="text-sm text-secondary/70 mt-1 leading-relaxed">
                  The composition, powers and responsibilities of the Executive Council as approved for MITS Deemed to be University.
                </p>
                <Button asChild className="mt-4 bg-primary hover:bg-primary/90">
                  <a href={executiveCouncil.constitutionUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="w-4 h-4 mr-2" />
                    View Constitution
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl p-6">
            <h3 className="text-lg font-bold text-secondary mb-5" style={{ fontFamily: "var(--font-display)" }}>
              Minutes of Executive Council Meetings
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Minutes of 4th Executive Council Meeting",
                  date: "August 2026",
                  url: "https://mits.ac.in/assets/pdf/admin/Minutes%204th%20EC%20Meeting.pdf",
                },
                {
                  title: "Minutes of 3rd Executive Council Meeting",
                  date: "March 11, 2026",
                  url: "https://mits.ac.in/assets/pdf/admin/MoM -Scan-3rd EC- 11.03.2026-MITS DTBU.pdf",
                },
                {
                  title: "Minutes of 2nd Executive Council Meeting",
                  date: "August 25, 2025",
                  url: "https://mits.ac.in/assets/pdf/admin/EC-Minutes-2nd-Meeting-25.8.2025.pdf",
                },
                {
                  title: "Minutes of 1st Executive Council Meeting",
                  date: "August 5, 2025",
                  url: "https://mits.ac.in/assets/pdf/admin/EC-Minutes-1st Meeting-5.08.2025.pdf",
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
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="bg-gradient-to-br from-primary to-[#7a0a0d] text-primary-foreground rounded-2xl p-6">
            <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold mb-2">Governance</p>
            <h4 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>Apex Administrative Body</h4>
            <p className="text-sm text-primary-foreground/85 leading-relaxed">
              The Executive Council exercises supervisory powers over the University and ensures
              compliance with the UGC Regulations for Deemed to be Universities.
            </p>
          </div>
        </aside>
      </div>
    </PageShell>
  );
};

export default ExecutiveCouncil;

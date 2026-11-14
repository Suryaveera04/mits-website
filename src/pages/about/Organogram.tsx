import { FileText, ExternalLink, Download } from "lucide-react";
import PageShell from "@/components/about/PageShell";
import { Button } from "@/components/ui/button";
import { organogramPdfUrl } from "@/data/aboutData";

const Organogram = () => {
  return (
    <PageShell
      eyebrow="Governance"
      title="University Organogram"
      intro="The official organisational hierarchy of MITS Deemed to be University, showing the chain of academic and administrative authority."
    >
      <div className="flex flex-wrap gap-3 mb-6">
        <Button asChild className="bg-primary hover:bg-primary/90">
          <a href={organogramPdfUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" /> Open in new tab
          </a>
        </Button>
        <Button asChild variant="outline" className="border-primary text-primary">
          <a href={organogramPdfUrl} download>
            <Download className="w-4 h-4 mr-2" /> Download PDF
          </a>
        </Button>
      </div>

      <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
        <div className="flex items-center gap-3 px-5 py-3 bg-secondary/5 border-b border-border">
          <FileText className="w-4 h-4 text-primary" />
          <p className="text-sm font-semibold text-secondary">
            Organogram — MITS Deemed to be University
          </p>
        </div>
        <div className="w-full" style={{ aspectRatio: "8.5 / 11" }}>
          <iframe
            title="MITS Organogram"
            src={organogramPdfUrl}
            className="w-full h-full"
            style={{ minHeight: 720 }}
          />
        </div>
      </div>
    </PageShell>
  );
};

export default Organogram;

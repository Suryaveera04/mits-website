import { FileText, ExternalLink, Download } from "lucide-react";
import PageShell from "@/components/about/PageShell";
import { Button } from "@/components/ui/button";
import { bosPdfUrl } from "@/data/aboutData";

const BoardOfStudies = () => {
  return (
    <PageShell
      eyebrow="Governance"
      title="Board of Studies (BoS)"
      intro="The Board of Studies of every department at MITS Deemed to be University drives curriculum design, evaluation reforms and academic alignment with global standards."
    >
      <div className="flex flex-wrap gap-3 mb-6">
        <Button asChild className="bg-primary hover:bg-primary/90">
          <a href={bosPdfUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" /> Open in new tab
          </a>
        </Button>
        <Button asChild variant="outline" className="border-primary text-primary">
          <a href={bosPdfUrl} download>
            <Download className="w-4 h-4 mr-2" /> Download PDF
          </a>
        </Button>
      </div>

      <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
        <div className="flex items-center gap-3 px-5 py-3 bg-secondary/5 border-b border-border">
          <FileText className="w-4 h-4 text-primary" />
          <p className="text-sm font-semibold text-secondary">MITS-DTBU-BOS-AY(2025-2026).pdf</p>
        </div>
        <div className="w-full" style={{ aspectRatio: "8.5 / 11" }}>
          <iframe
            title="MITS Board of Studies"
            src={bosPdfUrl}
            className="w-full h-full"
            style={{ minHeight: 720 }}
          />
        </div>
      </div>
    </PageShell>
  );
};

export default BoardOfStudies;

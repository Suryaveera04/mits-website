export interface UiGreenMetricItem {
  id: string;
  title: string;
  category: string;
  url: string;
  description: string;
}

export const uiGreenMetricData: UiGreenMetricItem[] = [
  {
    id: "settings-infrastructure",
    title: "Settings and Infrastructure",
    category: "SI",
    url: "https://mits.ac.in/assets/pdf/sdg/Settings & Infrastructure.pdf",
    description: "Campus land area, green open spaces, budget allocation for sustainable development, and environmental campus infrastructure.",
  },
  {
    id: "energy-climate",
    title: "Energy and Climate Change",
    category: "EC",
    url: "https://mits.ac.in/assets/pdf/sdg/Energy & Climate.pdf",
    description: "Energy-efficient campus appliances, rooftop solar power generation, electricity conservation, and carbon footprint reduction.",
  },
  {
    id: "waste",
    title: "Waste Management",
    category: "WS",
    url: "https://mits.ac.in/assets/pdf/sdg/Waste.pdf",
    description: "Campus recycling systems, electronic and toxic waste handling, organic composting, and single-use plastic reduction initiatives.",
  },
  {
    id: "water",
    title: "Water Conservation",
    category: "WR",
    url: "https://mits.ac.in/assets/pdf/sdg/Water.pdf",
    description: "Water conservation infrastructure, rainwater harvesting sumps, recycled water irrigation, and campus wastewater treatment.",
  },
  {
    id: "transportation",
    title: "Transportation",
    category: "TR",
    url: "https://mits.ac.in/assets/pdf/sdg/Transportation-TR.pdf",
    description: "Sustainable transit policies, pedestrian-friendly walkways, EV charging & usage, and carbon-minimizing fleet operations.",
  },
  {
    id: "education-research",
    title: "Education and Research",
    category: "ED",
    url: "https://mits.ac.in/assets/pdf/sdg/Education and Research.pdf",
    description: "Academic sustainability curriculum, research grants, high-impact publications, environmental clubs, and community outreach.",
  },
  {
    id: "governance-digitalization",
    title: "Governance and Digitalization",
    category: "GD",
    url: "https://mits.ac.in/assets/pdf/sdg/Governance & Digitalisation.pdf",
    description: "Paperless administration, digitized institutional workflows, transparent governance committees, and statutory compliance.",
  },
];

export const uiGreenMetricExternalRanking = {
  title: "UI GreenMetric World University Rankings 2026",
  url: "https://uigreenmetric.com/university/mits.ac.in",
  badge: "Global Ranking Portal",
  description: "View Madanapalle Institute of Technology & Science's official worldwide performance scores, criteria points, and global ranking profile.",
};

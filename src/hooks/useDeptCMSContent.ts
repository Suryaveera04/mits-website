// Re-exports from useDeptCMSData so DeptCMSStrip stays compatible
export type { CMSEvent, CMSMoU } from "./useDeptCMSData";
export { useDeptCMSData as useDeptCMSContent } from "./useDeptCMSData";

// Alias shape DeptCMSStrip expects
export interface CMSNews {
  id: number;
  title: string;
  date?: string;
  category?: string;
  content?: string;
  image?: string;
}

// Re-exports from useDeptCMSData so DeptCMSStrip stays compatible
export type { CMSEvent, CMSMoU, CMSDeptData } from "./useDeptCMSData";
export { useDeptCMSData as useDeptCMSContent, useAllCMSEvents, fetchAllCMSEvents, CMS_CODE } from "./useDeptCMSData";

// Alias shape DeptCMSStrip expects
export interface CMSNews {
  id: number;
  title: string;
  date?: string;
  category?: string;
  content?: string;
  image?: string;
}

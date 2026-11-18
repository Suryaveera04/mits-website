import { describe, it, expect } from "vitest";
import { examinationCommittee } from "@/data/examData";
import fs from "fs";
import path from "path";

describe("Examinations Portal - Committee Tab", () => {
  it("examinationCommittee must contain the official Constitution of Examination Committee order", () => {
    expect(examinationCommittee.length).toBe(1);
    expect(examinationCommittee[0].title).toBe("Office Order - Constitution of Examination Committee");
    expect(examinationCommittee[0].href).toBe(
      "https://mits.ac.in/public/uploads/ugc/Office Order No - 60 - Constitution of Examination Committee.pdf"
    );
    expect(examinationCommittee[0].kind).toBe("pdf");
    expect(examinationCommittee[0].no).toBe(1);
  });

  it("Examinations page must register the committee section under Results & Records", () => {
    const pagePath = path.resolve(__dirname, "../pages/Examinations.tsx");
    const content = fs.readFileSync(pagePath, "utf-8");
    expect(content).toContain('id: "committee"');
    expect(content).toContain('label: "Committee"');
    expect(content).toContain('group: "Results & Records"');
    expect(content).toContain('examinationCommittee');
    expect(content).toContain('tab-9');
  });
});

import { describe, it, expect } from "vitest";
import { examResults, ugResults, pgResults, phdResults } from "@/data/examData";
import fs from "fs";
import path from "path";

describe("Examinations Portal - Results Tab", () => {
  it("examResults must contain the unified student portal link for UG, PG, and Ph.D.", () => {
    expect(examResults.length).toBe(1);
    expect(examResults[0].href).toBe("https://studentportal.universitysolutions.in/");
    expect(examResults[0].title).toContain("UG");
    expect(examResults[0].title).toContain("PG");
    expect(examResults[0].title).toContain("Ph.D.");
    expect(examResults[0].kind).toBe("link");
  });

  it("ugResults, pgResults, and phdResults alias examResults", () => {
    expect(ugResults).toBe(examResults);
    expect(pgResults).toBe(examResults);
    expect(phdResults).toBe(examResults);
  });

  it("Examinations page must not contain toggle buttons in Results or Committee view", () => {
    const pagePath = path.resolve(__dirname, "../pages/Examinations.tsx");
    const content = fs.readFileSync(pagePath, "utf-8");
    expect(content).not.toContain("Results Portal</button>");
  });

  it("examData must not contain legacy internal IP links for results", () => {
    const examDataPath = path.resolve(__dirname, "../data/examData.ts");
    const content = fs.readFileSync(examDataPath, "utf-8");
    expect(content).not.toContain("125.16.54.154");
    expect(content).not.toContain("mitsresults");
    expect(content).not.toContain("recountingugresults");
    expect(content).not.toContain("recountingpgresults");
  });
});

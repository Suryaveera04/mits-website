import { describe, it, expect } from "vitest";
import { ugResults, pgResults } from "@/data/examData";
import fs from "fs";
import path from "path";

describe("Examinations Portal - Results Tab", () => {
  it("ugResults must contain only the official student portal link", () => {
    expect(ugResults.length).toBe(1);
    expect(ugResults[0].href).toBe("https://studentportal.universitysolutions.in/");
    expect(ugResults[0].title).toContain("UG");
  });

  it("pgResults must contain only the official student portal link", () => {
    expect(pgResults.length).toBe(1);
    expect(pgResults[0].href).toBe("https://studentportal.universitysolutions.in/");
    expect(pgResults[0].title).toContain("PG");
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

import { describe, it, expect } from "vitest";
import officialList from "@/data/officialFacultyList.json";
import fallbackData from "@/data/facultyApiFallback.json";

describe("Official University Faculty Roster", () => {
  it("must contain 188 faculty members after removing the CSE (AI) listing", () => {
    expect(officialList.length).toBe(188);
  });

  it("must not include Dr. Ben Sujin in the CSE (AI) faculty listing", () => {
    expect(
      officialList.some((faculty) => faculty.deptKey === "ai" && faculty.name === "Dr. Ben Sujin")
    ).toBe(false);
  });

  it("every official faculty member must map to a valid department key and have non-empty slugs", () => {
    const validKeys = new Set(["ce", "me", "eee", "ece", "cse", "ai", "cseds", "csecs", "aiml", "mba", "mca", "bsh"]);
    officialList.forEach((f) => {
      expect(validKeys.has(f.deptKey)).toBe(true);
      expect(f.name.trim().length).toBeGreaterThan(0);
      expect(f.designation.trim().length).toBeGreaterThan(0);
      expect(f.slug.trim().length).toBeGreaterThan(0);
    });
  });

  it("must contain exactly 19 faculty members in CSE (AI & ML) matching their database records in CSE-AIML", () => {
    const aimlFaculty = officialList.filter((f) => f.deptKey === "aiml");
    expect(aimlFaculty.length).toBe(19);

    const dbList = fallbackData.data;
    aimlFaculty.forEach((f) => {
      const match = dbList.find((db) => db._id === f.dbId);
      expect(match).toBeDefined();
      const code = (match?.department?.code || "").toUpperCase();
      const name = (match?.department?.name || "").toUpperCase();
      expect(code.includes("AIML") || name.includes("AIML") || name.includes("MACHINE LEARNING")).toBe(true);
    });
  });

  it("every official faculty member across all departments must resolve to a valid database record", () => {
    const dbList = fallbackData.data;
    let resolved = 0;

    officialList.forEach((f) => {
      const match = dbList.find((db) => db._id === f.dbId);
      if (match) resolved++;
    });

    expect(resolved).toBe(188);
  });

  it("must contain no duplicate dbIds across all 188 faculty members", () => {
    const ids = officialList.map((f) => f.dbId).filter(Boolean);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("filtering by department must strictly return only faculty belonging to that department", () => {
    const departments = ["ce", "me", "eee", "ece", "cse", "ai", "cseds", "csecs", "aiml", "mba", "mca", "bsh"];
    departments.forEach((deptKey) => {
      const deptMembers = officialList.filter((f) => f.deptKey === deptKey);
      expect(deptMembers.length).toBeGreaterThan(0);
      deptMembers.forEach((member) => {
        expect(member.deptKey).toBe(deptKey);
      });
    });
  });
});

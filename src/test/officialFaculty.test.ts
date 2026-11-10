import { describe, it, expect } from "vitest";
import officialList from "@/data/officialFacultyList.json";
import fallbackData from "@/data/facultyApiFallback.json";
import { slugifyFaculty } from "@/lib/facultySlug";

describe("Official University Faculty Roster", () => {
  it("must contain exactly the 189 faculty members from mits.ac.in/faculty-information", () => {
    expect(officialList.length).toBe(189);
  });

  it("every official faculty member must map to a valid department key", () => {
    const validKeys = new Set(["ce", "me", "eee", "ece", "cse", "ai", "cseds", "csecs", "aiml", "mba", "mca", "bsh"]);
    officialList.forEach((f) => {
      expect(validKeys.has(f.deptKey)).toBe(true);
      expect(f.name.trim().length).toBeGreaterThan(0);
      expect(f.designation.trim().length).toBeGreaterThan(0);
      expect(f.slug.trim().length).toBeGreaterThan(0);
    });
  });

  it("every official faculty member must resolve to a rich profile in the faculty database", () => {
    const dbList = fallbackData.data;
    let resolved = 0;

    officialList.forEach((f) => {
      const match = dbList.find(
        (db) =>
          db._id === f.dbId ||
          slugifyFaculty(db.fullName) === f.slug ||
          slugifyFaculty(db.fullName) === slugifyFaculty(f.name)
      );
      if (match) resolved++;
    });

    expect(resolved).toBe(189);
  });
});

import { describe, it, expect } from "vitest";
import officialList from "@/data/officialFacultyList.json";

describe("BSH Faculty Segregation into 4 Constituent Departments", () => {
  const bshMembers = officialList.filter((f) => f.deptKey === "bsh");

  const matchEnglish = (f: { department?: string }) => {
    const d = (f.department || "").toLowerCase();
    return d.includes("english") || d.includes("fl") || d.includes("efl") || d.includes("humanit");
  };

  const matchMath = (f: { department?: string }) => {
    const d = (f.department || "").toLowerCase();
    return d.includes("math");
  };

  const matchPhysics = (f: { department?: string }) => {
    const d = (f.department || "").toLowerCase();
    return d.includes("physic");
  };

  const matchChemistry = (f: { department?: string }) => {
    const d = (f.department || "").toLowerCase();
    return d.includes("chemis");
  };

  it("contains exactly 35 faculty members in BSH", () => {
    expect(bshMembers.length).toBe(35);
  });

  it("segregates into exactly 4 constituent departments with zero unassigned faculty", () => {
    const english = bshMembers.filter(matchEnglish);
    const math = bshMembers.filter(matchMath);
    const physics = bshMembers.filter(matchPhysics);
    const chemistry = bshMembers.filter(matchChemistry);

    expect(english.length).toBe(8);
    expect(math.length).toBe(9);
    expect(physics.length).toBe(10);
    expect(chemistry.length).toBe(8);

    const totalSegregated = english.length + math.length + physics.length + chemistry.length;
    expect(totalSegregated).toBe(35);

    const unassigned = bshMembers.filter(
      (f) => !matchEnglish(f) && !matchMath(f) && !matchPhysics(f) && !matchChemistry(f)
    );
    expect(unassigned.length).toBe(0);
  });

  it("correctly assigns key leadership and professors to their respective constituent departments", () => {
    // English & Foreign Languages
    const englishNames = bshMembers.filter(matchEnglish).map((f) => f.name);
    expect(englishNames).toContain("Dr. Sudhakar Beedam");
    expect(englishNames).toContain("Dr. Shanmuga Priya");

    // Mathematics
    const mathNames = bshMembers.filter(matchMath).map((f) => f.name);
    expect(mathNames).toContain("Dr. R. Saravana");
    expect(mathNames).toContain("Dr. M. Sudhakar Reddy");

    // Physics
    const physicsNames = bshMembers.filter(matchPhysics).map((f) => f.name);
    expect(physicsNames).toContain("Dr. Vivekanand Mishra");
    expect(physicsNames).toContain("Dr. Jagadeesh Babu Bellam");
    expect(physicsNames).toContain("Dr. M. Chandra Sekhar");

    // Chemistry
    const chemistryNames = bshMembers.filter(matchChemistry).map((f) => f.name);
    expect(chemistryNames).toContain("Dr. Renjith Bhaskaran");
    expect(chemistryNames).toContain("Dr. K. Chandra Mohan");
  });
});

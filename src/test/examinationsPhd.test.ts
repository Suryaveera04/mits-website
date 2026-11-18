import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("Examinations Portal - Ph.D Programmes Tab", () => {
  it("Examinations page registers all 6 Ph.D subtabs in NAV", () => {
    const pagePath = path.resolve(__dirname, "../pages/Examinations.tsx");
    const content = fs.readFileSync(pagePath, "utf-8");

    expect(content).toContain('"phd-notif"');
    expect(content).toContain('"phd-circulars"');
    expect(content).toContain('"phd-timetables"');
    expect(content).toContain('"phd-fac"');
    expect(content).toContain('"phd-stu"');
    expect(content).toContain('"phd-down"');
    expect(content).toContain("Ph.D Programmes");
  });

  it("Each Ph.D subtab renders a Coming Soon card", () => {
    const pagePath = path.resolve(__dirname, "../pages/Examinations.tsx");
    const content = fs.readFileSync(pagePath, "utf-8");

    expect(content).toContain('active === "phd-notif"');
    expect(content).toContain('Notifications — Coming Soon');

    expect(content).toContain('active === "phd-circulars"');
    expect(content).toContain('Circulars — Coming Soon');

    expect(content).toContain('active === "phd-timetables"');
    expect(content).toContain('ComingSoonCard');

    expect(content).toContain('active === "phd-fac"');
    expect(content).toContain('Faculty Formats — Coming Soon');

    expect(content).toContain('active === "phd-stu"');
    expect(content).toContain('Student Formats — Coming Soon');

    expect(content).toContain('active === "phd-down"');
    expect(content).toContain('Downloads — Coming Soon');
  });
});

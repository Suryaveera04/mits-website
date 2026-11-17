import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("Academic Calendars Directory & Ph.D Calendar Data", () => {
  const academicCalPath = path.resolve(__dirname, "../pages/AcademicCalendar.tsx");
  const academicCalContent = fs.readFileSync(academicCalPath, "utf-8");

  const appPath = path.resolve(__dirname, "../App.tsx");
  const appContent = fs.readFileSync(appPath, "utf-8");

  it("must contain the official Ph.D Academic Calendar for 2026-27", () => {
    expect(academicCalContent).toContain("Ph.D Academic Calendar July Session - 2026-27");
    expect(academicCalContent).toContain(
      "https://mits.ac.in/assets/pdf/syllabus/MITS%20DTBU_Ph.D_July%202026%20Session_I%20&%20II%20Semester_Academic%20Calender.pdf"
    );
  });

  it("must provide tabs for UG, PG, and Ph.D. Academic Calendars", () => {
    expect(academicCalContent).toContain("UG Academic Calendars");
    expect(academicCalContent).toContain("PG Academic Calendars");
    expect(academicCalContent).toContain("Ph.D. Academic Calendar");
  });

  it("App.tsx must register /academic-calendar and /university/academic-calendar routes", () => {
    expect(appContent).toContain('path="/academic-calendar"');
    expect(appContent).toContain('path="/university/academic-calendar"');
    expect(appContent).toContain('path="/academic-calenders"');
  });
});

import { describe, it, expect } from "vitest";
import {
  ugMidTermTimetables,
  ugModelLabTimetables,
  ugPracticalSecTimetables,
  ugTheoryEndTimetables,
  pgMidTermTimetables,
  pgModelLabTimetables,
  pgPracticalSecTimetables,
  pgTheoryEndTimetables,
} from "@/data/examData";

describe("Examinations Portal - Time Tables Segregation", () => {
  it("UG Time Tables segregation correctly classifies all items", () => {
    expect(ugMidTermTimetables.length).toBe(21);
    expect(ugModelLabTimetables.length).toBe(13);
    expect(ugPracticalSecTimetables.length).toBe(4);
    expect(ugTheoryEndTimetables.length).toBe(7);

    // UG Model Lab items must all be model lab exams
    for (const item of ugModelLabTimetables) {
      const t = item.title.toLowerCase();
      expect(t.includes("model laboratory") || t.includes("model lab")).toBe(true);
    }

    // UG Practical items must be practical end semester exams
    for (const item of ugPracticalSecTimetables) {
      const t = item.title.toLowerCase();
      expect(t.includes("practical") || t.includes("sec")).toBe(true);
      expect(t.includes("model")).toBe(false);
    }

    // UG Theory items must be end semester exams without practical or model
    for (const item of ugTheoryEndTimetables) {
      const t = item.title.toLowerCase();
      expect(t.includes("end semester") || t.includes("end exams")).toBe(true);
      expect(t.includes("practical")).toBe(false);
      expect(t.includes("model")).toBe(false);
    }

    // UG Mid Term items must be mid exams
    for (const item of ugMidTermTimetables) {
      const t = item.title.toLowerCase();
      expect(t.includes("mid")).toBe(true);
      expect(t.includes("model")).toBe(false);
    }
  });

  it("PG Time Tables segregation correctly classifies all items", () => {
    expect(pgMidTermTimetables.length).toBe(38);
    expect(pgModelLabTimetables.length).toBe(0);
    expect(pgPracticalSecTimetables.length).toBe(10);
    expect(pgTheoryEndTimetables.length).toBe(9);

    // PG Practical items must be practical end semester exams
    for (const item of pgPracticalSecTimetables) {
      const t = item.title.toLowerCase();
      expect(t.includes("practical")).toBe(true);
      expect(t.includes("end semester") || t.includes("end exams")).toBe(true);
    }

    // PG Theory items must be theory end semester exams
    for (const item of pgTheoryEndTimetables) {
      const t = item.title.toLowerCase();
      expect(t.includes("end semester") || t.includes("end exams")).toBe(true);
      expect(t.includes("practical")).toBe(false);
    }

    // PG Mid Term items must be mid term tests
    for (const item of pgMidTermTimetables) {
      const t = item.title.toLowerCase();
      expect(t.includes("mid")).toBe(true);
    }
  });

  it("All PDF links use valid HTTPS URLs", () => {
    const all = [
      ...ugMidTermTimetables,
      ...ugModelLabTimetables,
      ...ugPracticalSecTimetables,
      ...ugTheoryEndTimetables,
      ...pgMidTermTimetables,
      ...pgPracticalSecTimetables,
      ...pgTheoryEndTimetables,
    ];

    for (const item of all) {
      expect(item.href).toMatch(/^https:\/\/mits\.ac\.in\//);
      expect(item.kind).toBe("pdf");
      expect(item.title.trim().length).toBeGreaterThan(0);
    }
  });
});

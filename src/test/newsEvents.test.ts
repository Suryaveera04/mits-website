import { describe, it, expect } from "vitest";
import { hasValidEventImage, getNewsEventImageSrc } from "@/data/newsEvents";

describe("Event Image Validation & Homepage Filtering", () => {
  it("hasValidEventImage correctly identifies valid images", () => {
    expect(hasValidEventImage("https://example.com/poster.jpg")).toBe(true);
    expect(hasValidEventImage("https://example.com/banner.png")).toBe(true);
    expect(hasValidEventImage("news-events/image.webp")).toBe(true);
    expect(hasValidEventImage("data:image/jpeg;base64,...")).toBe(true);
  });

  it("hasValidEventImage rejects missing, null, empty, and PDF files", () => {
    expect(hasValidEventImage(null)).toBe(false);
    expect(hasValidEventImage(undefined)).toBe(false);
    expect(hasValidEventImage("")).toBe(false);
    expect(hasValidEventImage("   ")).toBe(false);
    expect(hasValidEventImage("null")).toBe(false);
    expect(hasValidEventImage("undefined")).toBe(false);
    expect(hasValidEventImage("0")).toBe(false);
    expect(hasValidEventImage("false")).toBe(false);
    expect(hasValidEventImage("#")).toBe(false);
    // PDFs must not be treated as displayable event images
    expect(hasValidEventImage("https://aicampus.mits.ac.in/events/report.pdf")).toBe(false);
    expect(hasValidEventImage("event_report.PDF")).toBe(false);
    expect(hasValidEventImage("https://aicampus.mits.ac.in/events/proceedings.pdf?id=123")).toBe(false);
  });

  it("getNewsEventImageSrc returns empty string for PDF and missing files", () => {
    expect(getNewsEventImageSrc(null)).toBe("");
    expect(getNewsEventImageSrc("")).toBe("");
    expect(getNewsEventImageSrc("null")).toBe("");
    expect(getNewsEventImageSrc("https://example.com/doc.pdf")).toBe("");
  });
});

import { describe, it, expect, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import FacultyProfilePage from "@/pages/FacultyProfilePage";
import { HelmetProvider } from "react-helmet-async";

describe("FacultyProfilePage Component", () => {
  beforeAll(() => {
    global.IntersectionObserver = class IntersectionObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    } as any;
  });

  it("renders faculty profile without throwing reference errors", async () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={["/department/aiml/faculty/mr-sri-ramakrishna-v-g"]}>
          <Routes>
            <Route path="/department/:deptKey/faculty/:slug" element={<FacultyProfilePage />} />
          </Routes>
        </MemoryRouter>
      </HelmetProvider>
    );

    // Profile page should mount cleanly without ReferenceError: hasPhdDegree is not defined
    const headings = await screen.findAllByText(/Sri Ramakrishna/i);
    expect(headings.length).toBeGreaterThanOrEqual(1);
  });
});

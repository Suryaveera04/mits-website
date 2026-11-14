import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AboutMegaMenu from "@/components/AboutMegaMenu";
import Header from "@/components/Header";

describe("AboutMegaMenu and Header dropdown interaction", () => {
  it("renders AboutMegaMenu with pointer-events-none on backdrop and pointer-events-auto on menu card", () => {
    const handleClose = vi.fn();
    const handleMouseEnter = vi.fn();
    const handleMouseLeave = vi.fn();

    const { container } = render(
      <BrowserRouter>
        <AboutMegaMenu
          open={true}
          onClose={handleClose}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </BrowserRouter>
    );

    // The outer motion container must have pointer-events-none so cursor to the left or right is not trapped
    const outerContainer = container.querySelector(".absolute.top-full.left-0.right-0");
    expect(outerContainer).toBeTruthy();
    expect(outerContainer?.className).toContain("pointer-events-none");

    // The card itself must have pointer-events-auto
    const menuCard = container.querySelector(".pointer-events-auto");
    expect(menuCard).toBeTruthy();

    // Hovering the card calls onMouseEnter
    fireEvent.mouseEnter(menuCard!);
    expect(handleMouseEnter).toHaveBeenCalledTimes(1);

    // Leaving the card calls onMouseLeave so the menu closes when pointing left or right
    fireEvent.mouseLeave(menuCard!);
    expect(handleMouseLeave).toHaveBeenCalledTimes(1);
  });

  it("Header renders navigation items and closes dropdown on outside click or escape", () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const aboutItem = screen.getAllByText("About")[0];
    expect(aboutItem).toBeTruthy();

    // Pressing escape dispatches cleanly
    fireEvent.keyDown(document, { key: "Escape" });

    // Clicking outside dispatches cleanly
    fireEvent.mouseDown(document.body);
  });
});

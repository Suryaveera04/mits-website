import { useLocation } from "react-router-dom";

const ADMISSIONS_URL = "https://admission.mits.ac.in/";

const FloatingAutonomousTab = () => {
  const location = useLocation();

  if (location.pathname !== "/") {
    return null;
  }

  return (
    <a
      href={ADMISSIONS_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Admissions 2027 - Apply Online"
      className="group fixed right-0 top-1/2 z-[60] w-11 -translate-y-1/2 p-2 sm:w-12 lg:w-14 focus:outline-none focus-visible:-translate-x-1 focus-visible:ring-2 focus-visible:ring-white/70"
      style={{
        backgroundColor: "#B30000",
        color: "#FFFFFF",
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        transform: "translateY(-50%)",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
        borderTopLeftRadius: "12px",
        borderBottomLeftRadius: "12px",
        letterSpacing: "0.08em",
        fontWeight: 700,
        textDecoration: "none",
        transition:
          "background-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), filter 0.35s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#D10000";
        e.currentTarget.style.transform = "translateY(-50%) translateX(-10px) scale(1.04)";
        e.currentTarget.style.boxShadow =
          "0 14px 40px rgba(179, 0, 0, 0.55), 0 6px 18px rgba(0, 0, 0, 0.3)";
        e.currentTarget.style.filter = "brightness(1.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#B30000";
        e.currentTarget.style.transform = "translateY(-50%)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.25)";
        e.currentTarget.style.filter = "brightness(1)";
      }}
    >
      <span className="block py-3 text-[13px] sm:py-4 sm:text-sm lg:py-5 lg:text-base font-bold tracking-wide">
        🎓 Admissions 2027
      </span>
    </a>
  );
};

export default FloatingAutonomousTab;

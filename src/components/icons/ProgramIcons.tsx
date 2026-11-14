import React from "react";

// All icons are detailed SVG illustrations in the MITS red style
const svgBase: React.SVGAttributes<SVGSVGElement> = {
  viewBox: "0 0 64 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
};

// CSE — Monitor with code brackets and circuit nodes
export const IconCSE = ({ className }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <rect x="12" y="10" width="40" height="30" rx="3" stroke="currentColor" strokeWidth="2" />
    <line x1="24" y1="40" x2="40" y2="40" stroke="currentColor" strokeWidth="2" />
    <line x1="32" y1="40" x2="32" y2="46" stroke="currentColor" strokeWidth="2" />
    <line x1="24" y1="46" x2="40" y2="46" stroke="currentColor" strokeWidth="2" />
    <text x="22" y="30" fontSize="14" fontFamily="monospace" fill="currentColor" fontWeight="bold">&lt;/&gt;</text>
    <circle cx="14" cy="50" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.4" />
    <line x1="14" y1="50" x2="24" y2="46" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="50" y1="50" x2="40" y2="46" stroke="currentColor" strokeWidth="1" opacity="0.3" />
  </svg>
);

// AI & DS — Brain with data nodes/connections
export const IconAIDS = ({ className }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <path d="M32 12C24 12 18 18 18 25C18 30 21 34 25 36L25 42H39L39 36C43 34 46 30 46 25C46 18 40 12 32 12Z" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M25 28C28 24 36 24 39 28" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="25" cy="28" r="2" fill="currentColor" />
    <circle cx="39" cy="28" r="2" fill="currentColor" />
    <circle cx="32" cy="22" r="2" fill="currentColor" />
    <line x1="25" y1="28" x2="32" y2="22" stroke="currentColor" strokeWidth="1" />
    <line x1="39" y1="28" x2="32" y2="22" stroke="currentColor" strokeWidth="1" />
    <rect x="27" y="42" width="10" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <line x1="29" y1="45" x2="29" y2="50" stroke="currentColor" strokeWidth="1.5" />
    <line x1="35" y1="45" x2="35" y2="50" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="20" r="3" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <circle cx="52" cy="20" r="3" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <line x1="15" y1="20" x2="18" y2="23" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <line x1="49" y1="20" x2="46" y2="23" stroke="currentColor" strokeWidth="1" opacity="0.4" />
  </svg>
);

// AI and ML — Head profile with neural network/gear
export const IconAIML = ({ className }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <path d="M22 48V44C16 42 12 36 12 28C12 18 20 10 30 10C40 10 48 18 48 28C48 32 46 36 44 38" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="30" cy="26" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="40" cy="22" r="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="38" cy="34" r="3" stroke="currentColor" strokeWidth="1.5" />
    <line x1="33" y1="24" x2="37" y2="22" stroke="currentColor" strokeWidth="1.2" />
    <line x1="33" y1="28" x2="35" y2="33" stroke="currentColor" strokeWidth="1.2" />
    <line x1="40" y1="25" x2="39" y2="31" stroke="currentColor" strokeWidth="1.2" />
    <path d="M44 40L48 44L52 40" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="48" cy="48" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M46 46L50 50M50 46L46 50" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// AI and Robotics — Robot head with antenna
export const IconRobotics = ({ className }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <rect x="18" y="20" width="28" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="26" cy="30" r="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="38" cy="30" r="3" stroke="currentColor" strokeWidth="1.5" />
    <line x1="28" y1="38" x2="36" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="32" y1="20" x2="32" y2="14" stroke="currentColor" strokeWidth="2" />
    <circle cx="32" cy="11" r="3" fill="currentColor" opacity="0.6" />
    <line x1="18" y1="32" x2="12" y2="32" stroke="currentColor" strokeWidth="2" />
    <line x1="46" y1="32" x2="52" y2="32" stroke="currentColor" strokeWidth="2" />
    <circle cx="10" cy="32" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="54" cy="32" r="2" fill="currentColor" opacity="0.4" />
    <rect x="24" y="44" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="28" y1="50" x2="28" y2="54" stroke="currentColor" strokeWidth="1.5" />
    <line x1="36" y1="50" x2="36" y2="54" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

// Bioinformatics — DNA helix with gear
export const IconBioinfo = ({ className }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <path d="M20 10C20 10 26 18 26 24C26 30 20 38 20 38" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M36 10C36 10 30 18 30 24C30 30 36 38 36 38" stroke="currentColor" strokeWidth="2" fill="none" />
    <line x1="22" y1="16" x2="34" y2="16" stroke="currentColor" strokeWidth="1.5" />
    <line x1="21" y1="24" x2="35" y2="24" stroke="currentColor" strokeWidth="1.5" />
    <line x1="22" y1="32" x2="34" y2="32" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="48" cy="44" r="8" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="48" cy="44" r="3" fill="currentColor" opacity="0.3" />
    <line x1="48" y1="36" x2="48" y2="38" stroke="currentColor" strokeWidth="1.5" />
    <line x1="48" y1="50" x2="48" y2="52" stroke="currentColor" strokeWidth="1.5" />
    <line x1="40" y1="44" x2="42" y2="44" stroke="currentColor" strokeWidth="1.5" />
    <line x1="54" y1="44" x2="56" y2="44" stroke="currentColor" strokeWidth="1.5" />
    <path d="M36 38L40 42" stroke="currentColor" strokeWidth="1" opacity="0.5" />
  </svg>
);

// ECE — Circuit board with chip
export const IconECE = ({ className }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <rect x="18" y="18" width="28" height="28" rx="2" stroke="currentColor" strokeWidth="2" />
    <rect x="24" y="24" width="16" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="32" cy="32" r="4" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.15" />
    {/* Pins */}
    <line x1="22" y1="18" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" />
    <line x1="28" y1="18" x2="28" y2="12" stroke="currentColor" strokeWidth="1.5" />
    <line x1="36" y1="18" x2="36" y2="12" stroke="currentColor" strokeWidth="1.5" />
    <line x1="42" y1="18" x2="42" y2="12" stroke="currentColor" strokeWidth="1.5" />
    <line x1="22" y1="46" x2="22" y2="52" stroke="currentColor" strokeWidth="1.5" />
    <line x1="28" y1="46" x2="28" y2="52" stroke="currentColor" strokeWidth="1.5" />
    <line x1="36" y1="46" x2="36" y2="52" stroke="currentColor" strokeWidth="1.5" />
    <line x1="42" y1="46" x2="42" y2="52" stroke="currentColor" strokeWidth="1.5" />
    <line x1="18" y1="26" x2="12" y2="26" stroke="currentColor" strokeWidth="1.5" />
    <line x1="18" y1="38" x2="12" y2="38" stroke="currentColor" strokeWidth="1.5" />
    <line x1="46" y1="26" x2="52" y2="26" stroke="currentColor" strokeWidth="1.5" />
    <line x1="46" y1="38" x2="52" y2="38" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

// EEE — Lightning bolt with circular circuit
export const IconEEE = ({ className }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
    <polygon points="30,16 24,34 32,34 28,50 40,28 32,28 36,16" fill="currentColor" opacity="0.85" />
    <circle cx="14" cy="20" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="50" cy="20" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="14" cy="44" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="50" cy="44" r="2" fill="currentColor" opacity="0.4" />
    <line x1="16" y1="21" x2="20" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="48" y1="21" x2="44" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.3" />
  </svg>
);

// CIVIL — Building with crane
export const IconCivil = ({ className }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <rect x="14" y="24" width="22" height="28" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="18" y="28" width="5" height="5" stroke="currentColor" strokeWidth="1" />
    <rect x="27" y="28" width="5" height="5" stroke="currentColor" strokeWidth="1" />
    <rect x="18" y="37" width="5" height="5" stroke="currentColor" strokeWidth="1" />
    <rect x="27" y="37" width="5" height="5" stroke="currentColor" strokeWidth="1" />
    <rect x="22" y="46" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
    {/* Crane */}
    <line x1="44" y1="52" x2="44" y2="12" stroke="currentColor" strokeWidth="2" />
    <line x1="44" y1="12" x2="54" y2="12" stroke="currentColor" strokeWidth="2" />
    <line x1="44" y1="12" x2="38" y2="12" stroke="currentColor" strokeWidth="2" />
    <line x1="54" y1="12" x2="54" y2="24" stroke="currentColor" strokeWidth="1.5" />
    <line x1="44" y1="16" x2="54" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <rect x="51" y="24" width="6" height="4" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.2" />
  </svg>
);

// MECH — Gear with wrench
export const IconMech = ({ className }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <circle cx="28" cy="28" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="28" cy="28" r="5" stroke="currentColor" strokeWidth="1.5" />
    {/* Gear teeth */}
    <line x1="28" y1="14" x2="28" y2="18" stroke="currentColor" strokeWidth="3" />
    <line x1="28" y1="38" x2="28" y2="42" stroke="currentColor" strokeWidth="3" />
    <line x1="14" y1="28" x2="18" y2="28" stroke="currentColor" strokeWidth="3" />
    <line x1="38" y1="28" x2="42" y2="28" stroke="currentColor" strokeWidth="3" />
    <line x1="18.5" y1="18.5" x2="21.3" y2="21.3" stroke="currentColor" strokeWidth="3" />
    <line x1="34.7" y1="34.7" x2="37.5" y2="37.5" stroke="currentColor" strokeWidth="3" />
    <line x1="18.5" y1="37.5" x2="21.3" y2="34.7" stroke="currentColor" strokeWidth="3" />
    <line x1="34.7" y1="21.3" x2="37.5" y2="18.5" stroke="currentColor" strokeWidth="3" />
    {/* Wrench */}
    <line x1="42" y1="42" x2="54" y2="54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M52 52L56 48C57 47 57 46 56 45L54 47L52 45L54 43C53 42 52 42 51 43L47 47" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

// BBA — Briefcase with chart
export const IconBBA = ({ className }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <rect x="10" y="20" width="44" height="30" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M24 20V16C24 14 26 12 28 12H36C38 12 40 14 40 16V20" stroke="currentColor" strokeWidth="2" fill="none" />
    <line x1="10" y1="30" x2="54" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    {/* Bar chart */}
    <rect x="20" y="36" width="5" height="8" fill="currentColor" opacity="0.3" />
    <rect x="28" y="32" width="5" height="12" fill="currentColor" opacity="0.5" />
    <rect x="36" y="28" width="5" height="16" fill="currentColor" opacity="0.7" />
    <circle cx="32" cy="24" r="2" fill="currentColor" opacity="0.4" />
  </svg>
);

// BCA — Desktop with code
export const IconBCA = ({ className }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <rect x="10" y="10" width="44" height="32" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
    <line x1="10" y1="36" x2="54" y2="36" stroke="currentColor" strokeWidth="1.5" />
    <line x1="32" y1="42" x2="32" y2="48" stroke="currentColor" strokeWidth="2" />
    <line x1="22" y1="48" x2="42" y2="48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Code lines */}
    <line x1="18" y1="18" x2="30" y2="18" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <line x1="18" y1="23" x2="38" y2="23" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <line x1="18" y1="28" x2="34" y2="28" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <circle cx="44" cy="18" r="3" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.2" />
    <path d="M42 23L44 25L48 21" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
  </svg>
);

// VLSI — Microchip detailed
export const IconVLSI = ({ className }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <rect x="16" y="16" width="32" height="32" rx="2" stroke="currentColor" strokeWidth="2" />
    <rect x="22" y="22" width="20" height="20" rx="1" stroke="currentColor" strokeWidth="1" />
    <rect x="28" y="28" width="8" height="8" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1" />
    {/* Many pins */}
    {[22, 28, 34, 40].map(x => (
      <React.Fragment key={`t${x}`}>
        <line x1={x} y1="16" x2={x} y2="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1={x} y1="48" x2={x} y2="54" stroke="currentColor" strokeWidth="1.5" />
      </React.Fragment>
    ))}
    {[22, 28, 34, 40].map(y => (
      <React.Fragment key={`l${y}`}>
        <line x1="16" y1={y} x2="10" y2={y} stroke="currentColor" strokeWidth="1.5" />
        <line x1="48" y1={y} x2="54" y2={y} stroke="currentColor" strokeWidth="1.5" />
      </React.Fragment>
    ))}
  </svg>
);

// EV Tech — Car with plug
export const IconEVTech = ({ className }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <path d="M14 36L18 24H46L50 36" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="10" y="36" width="44" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="20" cy="46" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.15" />
    <circle cx="44" cy="46" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.15" />
    <rect x="22" y="28" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1" />
    <polygon points="24,34 23,30 27,32" fill="currentColor" opacity="0.6" />
    {/* Plug */}
    <line x1="38" y1="20" x2="38" y2="14" stroke="currentColor" strokeWidth="2" />
    <line x1="42" y1="20" x2="42" y2="14" stroke="currentColor" strokeWidth="2" />
    <rect x="36" y="10" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

// MBA — Graduation cap with star
export const IconMBA = ({ className }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <polygon points="32,12 8,26 32,40 56,26" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
    <line x1="48" y1="28" x2="48" y2="44" stroke="currentColor" strokeWidth="2" />
    <path d="M20 30V42C20 42 26 48 32 48C38 48 44 42 44 42V30" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="48" cy="46" r="3" fill="currentColor" opacity="0.4" />
    <polygon points="32,34 30,38 32,37 34,38" fill="currentColor" opacity="0.5" />
  </svg>
);

// MCA — Laptop with app grid
export const IconMCA = ({ className }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <path d="M14 40L10 46H54L50 40" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="14" y="14" width="36" height="26" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <line x1="14" y1="36" x2="50" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    {/* App grid */}
    <rect x="20" y="20" width="7" height="6" rx="1" fill="currentColor" opacity="0.25" />
    <rect x="29" y="20" width="7" height="6" rx="1" fill="currentColor" opacity="0.4" />
    <rect x="38" y="20" width="7" height="6" rx="1" fill="currentColor" opacity="0.25" />
    <rect x="20" y="28" width="7" height="6" rx="1" fill="currentColor" opacity="0.4" />
    <rect x="29" y="28" width="7" height="6" rx="1" fill="currentColor" opacity="0.25" />
    <rect x="38" y="28" width="7" height="6" rx="1" fill="currentColor" opacity="0.4" />
  </svg>
);

// Automation & Robotics — Robotic arm
export const IconAutoRobot = ({ className }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <rect x="12" y="48" width="20" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
    <line x1="22" y1="48" x2="22" y2="38" stroke="currentColor" strokeWidth="3" />
    <circle cx="22" cy="36" r="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.2" />
    <line x1="24" y1="34" x2="38" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <circle cx="38" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.2" />
    <line x1="40" y1="18" x2="50" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M50 10L54 14L50 18L46 14Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.3" />
  </svg>
);

// CEM (Construction Engineering Management) — Hard hat with blueprint
export const IconCEM = ({ className }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <path d="M16 32C16 22 22 14 32 14C42 14 48 22 48 32" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="12" y="32" width="40" height="6" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
    {/* Blueprint */}
    <rect x="18" y="42" width="28" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <line x1="22" y1="46" x2="36" y2="46" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <line x1="22" y1="50" x2="42" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <rect x="38" y="43" width="6" height="5" stroke="currentColor" strokeWidth="1" opacity="0.4" />
  </svg>
);

// CSE PG — Server with network
export const IconCSEPG = ({ className }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <rect x="14" y="10" width="36" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="14" y="28" width="36" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="22" cy="17" r="2" fill="currentColor" opacity="0.5" />
    <circle cx="22" cy="35" r="2" fill="currentColor" opacity="0.5" />
    <line x1="28" y1="17" x2="42" y2="17" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <line x1="28" y1="35" x2="42" y2="35" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <line x1="32" y1="42" x2="32" y2="48" stroke="currentColor" strokeWidth="2" />
    <circle cx="32" cy="52" r="4" stroke="currentColor" strokeWidth="1.5" />
    <line x1="22" y1="48" x2="32" y2="52" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <line x1="42" y1="48" x2="32" y2="52" stroke="currentColor" strokeWidth="1" opacity="0.4" />
  </svg>
);



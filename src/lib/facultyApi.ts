/**
 * MITS Faculty API Service and Data Mapper
 * Fetches and transforms faculty data from the live database API.
 */

import fallbackData from "@/data/facultyApiFallback.json";
import { slugifyFaculty } from "./facultySlug";
import type { FacultyMember } from "@/data/departmentData";
import type { FacultyProfile, FacultySection } from "@/data/facultyProfiles";

export interface APIRole {
  _id?: string;
  roleTitle?: string;
  level?: string;
  startDate?: string;
  endDate?: string | null;
  isCurrentlyHolding?: boolean;
  description?: string;
}

export interface APIPhd {
  topic?: string;
  university?: string;
  yearOfAward?: number | string;
  status?: string;
}

export interface APIEducationDegree {
  degree?: string;
  university?: string;
  school?: string;
  board?: string;
  percentage?: number | string;
  yearOfPassing?: number | string;
}

export interface APIPublication {
  _id?: string;
  faculty?: string;
  title?: string;
  type?: string;
  authors?: string[];
  journalOrConferenceName?: string;
  publicationDate?: string;
  issnIsbn?: string;
  doiUrl?: string;
  status?: string;
  abstract?: string;
  keywords?: string[];
  volume?: string;
  issue?: string;
  pages?: string;
  citationCount?: number;
  publisher?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface APICertification {
  _id?: string;
  title?: string;
  issuingOrganization?: string;
  issueDate?: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface APIPreviousEmployment {
  _id?: string;
  organization?: string;
  designation?: string;
  employmentType?: string;
  startDate?: string;
  endDate?: string | null;
  isCurrent?: boolean;
  responsibilities?: string;
}

export interface APISubjectTaught {
  _id?: string;
  name?: string;
  programLevel?: string;
  semester?: string;
  year?: string | number;
}

export interface APICourseDeveloped {
  _id?: string;
  name?: string;
  programLevel?: string;
}

export interface APILaboratoryHandled {
  _id?: string;
  name?: string;
  programLevel?: string;
  semester?: string;
  year?: string | number;
  toolsUsed?: string;
  manualUrl?: string;
}

export interface APIFacultyDepartment {
  _id?: string;
  name?: string;
  code?: string;
}

export interface APIFacultyMember {
  _id: string;
  fullName: string;
  email: string;
  department: APIFacultyDepartment;
  designation: string;
  profilePhoto?: string;
  experience?: number;
  specialization?: string[];
  phd?: APIPhd;
  pg?: APIEducationDegree;
  ug?: APIEducationDegree;
  tenth?: APIEducationDegree;
  twelfth?: APIEducationDegree;
  academicAdministrationRoles?: APIRole[];
  publications?: APIPublication[];
  certifications?: APICertification[];
  previousEmployment?: APIPreviousEmployment[];
  subjectsTaught?: APISubjectTaught[];
  coursesDeveloped?: APICourseDeveloped[];
  laboratoriesHandled?: APILaboratoryHandled[];
}

export interface APIFacultyResponse {
  success: boolean;
  count: number;
  data: APIFacultyMember[];
}

export const FACULTY_API_URL = "https://engageai.mits.ac.in/mitsfaculty/api/v1/faculty/public-profiles";
export const FACULTY_API_KEY = "mits_faculty_public_api_key_2026";
export const PHOTO_BASE_URL = "https://engageai.mits.ac.in/mitsfaculty/api/v1";

/**
 * Maps department code or name from the API to website department keys
 */
export function mapApiDeptToDeptKey(code?: string, name?: string): string {
  const c = (code || "").toUpperCase().trim();
  const n = (name || "").toUpperCase().trim();

  // 1. Exact Department Code Checks
  if (c === "CSE-AIML" || c === "AIML" || c === "AI&ML" || c === "AI-ML" || c.includes("AIML")) return "aiml";
  if (c === "CSE-AIDS" || c === "CSE-DS" || c === "AIDS" || c === "DS") return "cseds";
  if (c === "CSE-AI" || c === "AI") return "ai";
  if (c === "CSE") return "cse";
  if (c === "CST") return "cse";
  if (c === "CSE-CS") return "csecs";
  if (c === "ECE") return "ece";
  if (c === "EEE") return "eee";
  if (c === "CE" || c === "CIVIL") return "ce";
  if (c === "ME" || c === "MECH") return "me";
  if (c === "MCA") return "mca";
  if (c === "MBA") return "mba";
  if (c === "CHY" || c === "PHY" || c === "EFL" || c === "MATH" || c === "HUM" || c === "BSH") return "bsh";
  if (c === "BIO" || c === "BIOINFO") return "bioinfo";
  if (c === "CTO" || c === "ADMIN") return "admin";

  // 2. Exact / Partial Department Name Checks
  if (n.includes("MACHINE LEARNING") || n.includes("AIML") || n.includes("AI & ML") || n.includes("AI AND ML")) return "aiml";
  if (n.includes("DATA SCIENCE") || n.includes("AIDS")) return "cseds";
  if (n.includes("ARTIFICIAL INTELLIGENCE")) return "ai";
  if (n.includes("ELECTRICAL AND ELECTRONICS") || n.includes("ELECTRICAL & ELECTRONICS")) return "eee";
  if (n.includes("ELECTRONICS & COMMUNICATION") || n.includes("ELECTRONICS AND COMMUNICATION")) return "ece";
  if (n.includes("CYBER SECURITY")) return "csecs";
  if (n.includes("COMPUTER SCIENCE AND TECHNOLOGY")) return "cse";
  if (n.includes("COMPUTER SCIENCE")) return "cse";
  if (n.includes("CIVIL")) return "ce";
  if (n.includes("MECHANICAL")) return "me";
  if (n.includes("COMPUTER APPLICATIONS") || n.includes("MCA")) return "mca";
  if (n.includes("MANAGEMENT") || n.includes("BUSINESS") || n.includes("MBA")) return "mba";
  if (
    n.includes("CHEMISTRY") ||
    n.includes("PHYSICS") ||
    n.includes("ENGLISH") ||
    n.includes("MATHEMATICS") ||
    n.includes("HUMANITIES") ||
    n.includes("BASIC SCIENCES")
  ) {
    return "bsh";
  }
  if (n.includes("BIOINFORMATICS") || n.includes("BIOTECHNOLOGY")) return "bioinfo";
  if (n.includes("CTO") || n.includes("ADMINISTRATION")) return "admin";

  return "cse"; // default fallback
}

/**
 * Returns the specific sub-department title for BSH members
 */
export function getBshSubDepartment(code?: string, name?: string): string {
  const c = (code || "").toUpperCase().trim();
  const n = (name || "").toUpperCase().trim();

  if (c === "CHY" || n.includes("CHEMISTRY")) return "Department of Chemistry";
  if (c === "PHY" || n.includes("PHYSICS")) return "Department of Physics";
  if (c === "EFL" || n.includes("ENGLISH")) return "Department of English & Foreign Languages";
  if (c === "MATH" || n.includes("MATH")) return "Department of Mathematics";
  if (c === "HUM" || n.includes("HUMANITIES")) return "Department of Humanities";
  return "Department of Basic Sciences";
}

/**
 * Builds the full URL for a faculty photo with fallback handling
 */
export function getFacultyPhotoUrl(photoPath?: string): string | undefined {
  if (!photoPath) return undefined;
  if (photoPath.startsWith("http://") || photoPath.startsWith("https://")) {
    return photoPath;
  }
  const cleanPath = photoPath.startsWith("/") ? photoPath : `/${photoPath}`;
  const isLocal = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
  const base = isLocal ? "/faculty-api/v1" : PHOTO_BASE_URL;
  return `${base}${cleanPath}`;
}

/**
 * Converts an API faculty object into a standard FacultyMember for department listings
 */
export function apiFacultyToFacultyMember(f: APIFacultyMember, staticImageFallback?: string): FacultyMember {
  const deptKey = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
  const subDept = deptKey === "bsh" ? getBshSubDepartment(f.department?.code, f.department?.name) : undefined;
  const qualification = f.phd?.status === "Awarded" || f.phd?.topic ? "Ph.D." : (f.pg?.degree || f.ug?.degree || "M.Tech / M.Sc");

  return {
    name: f.fullName,
    designation: f.designation,
    qualification,
    email: f.email,
    image: getFacultyPhotoUrl(f.profilePhoto) || staticImageFallback,
    subDepartment: subDept,
    profileUrl: `/department/${deptKey}/faculty/${slugifyFaculty(f.fullName)}`,
    profile: {
      researchAreas: f.specialization?.join(", "),
      publications: f.publications?.map((p) => ({
        title: p.title || "",
        year: p.publicationDate ? new Date(p.publicationDate).getFullYear().toString() : "",
        index: p.journalOrConferenceName || "Journal",
      })),
      education: [
        ...(f.phd?.topic
          ? [{
              degree: "Ph.D.",
              specializatio: f.phd.topic,
              university: f.phd.university || "",
              year: String(f.phd.yearOfAward || ""),
            }]
          : []),
        ...(f.pg?.degree
          ? [{
              degree: f.pg.degree,
              specializatio: "",
              university: f.pg.university || "",
              year: String(f.pg.yearOfPassing || ""),
            }]
          : []),
        ...(f.ug?.degree
          ? [{
              degree: f.ug.degree,
              specializatio: "",
              university: f.ug.university || "",
              year: String(f.ug.yearOfPassing || ""),
            }]
          : []),
      ],
    },
  };
}

/**
 * Converts an API faculty record into a rich FacultyProfile with structured sections
 */
export function apiFacultyToFacultyProfile(f: APIFacultyMember): FacultyProfile {
  const sections: FacultySection[] = [];

  // 1. Educational Qualifications Section
  const eduRows: Record<string, string>[] = [];
  if (f.phd?.topic || f.phd?.university) {
    eduRows.push({
      "Degree / Program": "Ph.D.",
      "Topic / Specialization": f.phd.topic || "Research Work",
      "University / Institution": f.phd.university || "-",
      "Year / Status": f.phd.yearOfAward ? String(f.phd.yearOfAward) : (f.phd.status || "Awarded"),
    });
  }
  if (f.pg?.degree) {
    eduRows.push({
      "Degree / Program": f.pg.degree,
      "Topic / Specialization": "-",
      "University / Institution": f.pg.university || "-",
      "Year / Status": f.pg.yearOfPassing ? String(f.pg.yearOfPassing) : (f.pg.percentage ? `${f.pg.percentage}%` : "-"),
    });
  }
  if (f.ug?.degree) {
    eduRows.push({
      "Degree / Program": f.ug.degree,
      "Topic / Specialization": "-",
      "University / Institution": f.ug.university || "-",
      "Year / Status": f.ug.yearOfPassing ? String(f.ug.yearOfPassing) : (f.ug.percentage ? `${f.ug.percentage}%` : "-"),
    });
  }
  if (eduRows.length > 0) {
    sections.push({
      title: "Details of Educational Qualification",
      content: eduRows,
    });
  }

  // 2. Specialization & Research Areas
  if (f.specialization && f.specialization.length > 0) {
    sections.push({
      title: "Research Areas / Specialization",
      content: f.specialization,
    });
  }

  // 3. Publications Section
  if (f.publications && f.publications.length > 0) {
    const pubRows: Record<string, string>[] = f.publications.map((p, idx) => {
      const year = p.publicationDate ? new Date(p.publicationDate).getFullYear().toString() : "-";
      return {
        "S.No": String(idx + 1),
        "Title of Publication": p.title || "-",
        Type: p.type || "Journal",
        "Journal / Conference": p.journalOrConferenceName || "-",
        Year: year,
        DOI: p.doiUrl || "-",
        Citations: p.citationCount !== undefined ? String(p.citationCount) : "-",
      };
    });

    sections.push({
      title: "Publication Details",
      content: pubRows,
    });
  }

  // 4. Academic Administration Roles
  if (f.academicAdministrationRoles && f.academicAdministrationRoles.length > 0) {
    const roleRows: Record<string, string>[] = f.academicAdministrationRoles.map((r, idx) => ({
      "S.No": String(idx + 1),
      "Role / Portfolio": r.roleTitle || "-",
      Level: r.level || "-",
      Status: r.isCurrentlyHolding ? "Currently Holding" : "Completed",
    }));

    sections.push({
      title: "Academic & Administrative Roles",
      content: roleRows,
    });
  }

  // 5. Previous Employment History
  if (f.previousEmployment && f.previousEmployment.length > 0) {
    const empRows: Record<string, string>[] = f.previousEmployment.map((e, idx) => ({
      "S.No": String(idx + 1),
      Organization: e.organization || "-",
      Designation: e.designation || "-",
      "Employment Type": e.employmentType || "Full-Time",
      Period: e.startDate ? new Date(e.startDate).getFullYear().toString() : "-",
    }));

    sections.push({
      title: "Previous Employment & Experience",
      content: empRows,
    });
  }

  // 6. Subjects Taught
  if (f.subjectsTaught && f.subjectsTaught.length > 0) {
    const subRows: Record<string, string>[] = f.subjectsTaught.map((s, idx) => ({
      "S.No": String(idx + 1),
      Subject: s.name || "-",
      "Program Level": s.programLevel || "-",
      Semester: s.semester || "-",
      Year: String(s.year || "-"),
    }));

    sections.push({
      title: "Subjects Taught",
      content: subRows,
    });
  }

  // 7. Laboratories Handled
  if (f.laboratoriesHandled && f.laboratoriesHandled.length > 0) {
    const labRows: Record<string, string>[] = f.laboratoriesHandled.map((l, idx) => ({
      "S.No": String(idx + 1),
      Laboratory: l.name || "-",
      "Program Level": l.programLevel || "-",
      Semester: l.semester || "-",
      Year: String(l.year || "-"),
    }));

    sections.push({
      title: "Laboratories Handled",
      content: labRows,
    });
  }

  // 8. Certifications
  if (f.certifications && f.certifications.length > 0) {
    const certRows: Record<string, string>[] = f.certifications.map((c, idx) => ({
      "S.No": String(idx + 1),
      Certification: c.title || "-",
      "Issuing Organization": c.issuingOrganization || "-",
      "Credential ID": c.credentialId || "-",
    }));

    sections.push({
      title: "Certifications",
      content: certRows,
    });
  }

  return {
    name: f.fullName,
    designation: f.designation,
    email: f.email,
    image: getFacultyPhotoUrl(f.profilePhoto),
    officeAddress: `Department of ${f.department?.name || "Engineering"}, MITS Madanapalle`,
    sections,
  };
}

const CACHE_KEY = "mits_faculty_api_cache_v1";
const CACHE_TIME_KEY = "mits_faculty_api_cache_time_v1";
const CACHE_TTL_MS = 1000 * 60 * 30; // 30 minutes

/**
 * Fetches all faculty profiles from the live API with caching and fallback
 */
export async function fetchFacultyProfiles(forceRefresh = false): Promise<APIFacultyMember[]> {
  // 1. Check client-side localStorage cache if available
  if (!forceRefresh && typeof window !== "undefined") {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      const cacheTime = localStorage.getItem(CACHE_TIME_KEY);
      if (cached && cacheTime && Date.now() - parseInt(cacheTime, 10) < CACHE_TTL_MS) {
        const parsed = JSON.parse(cached) as APIFacultyMember[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // ignore storage access error
    }
  }

  // 2. Determine fetch endpoint (local dev proxy vs production)
  const isLocal = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
  const endpoint = isLocal ? "/faculty-api/v1/faculty/public-profiles" : FACULTY_API_URL;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    const res = await fetch(endpoint, {
      method: "GET",
      headers: {
        "x-api-key": FACULTY_API_KEY,
        Accept: "application/json",
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const json = (await res.json()) as APIFacultyResponse;
      if (json.success && Array.isArray(json.data) && json.data.length > 0) {
        if (typeof window !== "undefined") {
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(json.data));
            localStorage.setItem(CACHE_TIME_KEY, String(Date.now()));
          } catch {
            // storage limit or disabled
          }
        }
        return json.data;
      }
    }
  } catch {
    // API request failed or timed out, fallback gracefully
  }

  // 3. Fallback to bundled fallback snapshot
  if (fallbackData && Array.isArray((fallbackData as APIFacultyResponse).data)) {
    return (fallbackData as APIFacultyResponse).data;
  }

  return [];
}

import { useState, useEffect, useCallback, useMemo } from "react";
import {
  fetchFacultyProfiles,
  apiFacultyToFacultyMember,
  apiFacultyToFacultyProfile,
  mapApiDeptToDeptKey,
  getBshSubDepartment,
  getInitialFacultyData,
  getFacultyPhotoUrl,
  compareFacultyByApiOrder,
  resolveFacultyQualification,
  type APIFacultyMember,
} from "@/lib/facultyApi";
import { slugifyFaculty, cleanFacultyName, hasPhdDegree } from "@/lib/facultySlug";
export { hasPhdDegree } from "@/lib/facultySlug";
import { departmentsData, getDepartmentByKey, type FacultyMember } from "@/data/departmentData";
import { departmentHeads } from "@/data/aboutData";
import officialFacultyList from "@/data/officialFacultyList.json";

// Shared in-memory cache pre-populated with bundled snapshot for instant 0ms initial render
let sharedFacultyCache: APIFacultyMember[] = getInitialFacultyData();
let sharedFetchPromise: Promise<APIFacultyMember[]> | null = null;

/**
 * Robust token-based matching score between two Indian faculty names
 */
export function matchFacultyNameScore(name1: string, name2: string): number {
  const tokenize = (n: string) =>
    cleanFacultyName(n)
      .replace(/^Dr\.?\s*/i, "")
      .replace(/^Prof\.?\s*/i, "")
      .replace(/\b[A-Za-z]\b/g, "")
      .replace(/[^a-zA-Z\s]/g, "")
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .filter(Boolean);

  const t1 = tokenize(name1);
  const t2 = tokenize(name2);
  if (t1.length === 0 || t2.length === 0) return 0;

  let matches = 0;
  for (const token of t1) {
    if (
      t2.some(
        (other) =>
          other === token ||
          (token.length > 3 && other.startsWith(token)) ||
          (other.length > 3 && token.startsWith(other))
      )
    ) {
      matches++;
    }
  }
  return matches / Math.max(t1.length, t2.length);
}

export const DEPT_KNOWN_HODS: Record<string, string> = {
  // Civil Engineering
  ce: "Dr. Vijayakumar Natesan",
  civil: "Dr. Vijayakumar Natesan",
  "civil-engineering": "Dr. Vijayakumar Natesan",

  // Mechanical Engineering
  me: "Dr. S. Baskaran",
  mech: "Dr. S. Baskaran",
  mechanical: "Dr. S. Baskaran",
  "mechanical-engineering": "Dr. S. Baskaran",

  // Electrical and Electronics Engineering
  eee: "Dr. Manavaalan Gunasekaran",
  "electrical-electronics-engineering": "Dr. Manavaalan Gunasekaran",
  "electrical-and-electronics-engineering": "Dr. Manavaalan Gunasekaran",

  // Electronics & Communication Engineering
  ece: "Dr. Sanjay Kumar C. Gowre",
  "electronics-communication-engineering": "Dr. Sanjay Kumar C. Gowre",
  "electronics-and-communication-engineering": "Dr. Sanjay Kumar C. Gowre",

  // Computer Science & Engineering
  cse: "Dr. M. Sreedevi",
  "computer-science-and-engineering": "Dr. M. Sreedevi",

  // Computer Science & Technology
  cst: "Dr. K. Dinesh",
  "computer-science-technology": "Dr. K. Dinesh",
  "computer-science-and-technology": "Dr. K. Dinesh",

  // Computer Science & Engineering (Artificial Intelligence and Data Science)
  cseds: "Dr. S. Kusuma",
  "cse-ds": "Dr. S. Kusuma",
  csd: "Dr. S. Kusuma",
  ds: "Dr. S. Kusuma",
  aids: "Dr. S. Kusuma",
  "cse-aids": "Dr. S. Kusuma",

  // Computer Science & Engineering (Cyber Security)
  csecs: "Dr. Brahm Prakash",
  "cse-cs": "Dr. Brahm Prakash",
  csc: "Dr. Brahm Prakash",
  cs: "Dr. Brahm Prakash",
  "cyber-security": "Dr. Brahm Prakash",
  csec: "Dr. Brahm Prakash",

  // Computer Science & Engineering (Artificial Intelligence)
  ai: "Dr. R. Kalpana",
  "cse-ai": "Dr. R. Kalpana",

  // Computer Science & Engineering (AI & ML)
  aiml: "Dr. S. Padma",
  "cse-aiml": "Dr. S. Padma",
  "cse-ai-ml": "Dr. S. Padma",
  cai: "Dr. S. Padma",
  "ai-ml": "Dr. S. Padma",
  "ai&ml": "Dr. S. Padma",

  // Master of Computer Applications
  mca: "Dr. N. Naveen Kumar",
  "computer-applications": "Dr. N. Naveen Kumar",
  "master-of-computer-applications": "Dr. N. Naveen Kumar",

  // Management Studies (MBA)
  mba: "Dr. Bhanu Sree Reddy",
  management: "Dr. Bhanu Sree Reddy",
  "management-studies": "Dr. Bhanu Sree Reddy",
  "master-of-business-administration": "Dr. Bhanu Sree Reddy",

  // Basic Sciences & Humanities
  bsh: "Dr. Sudhakar Beedam",
  "basic-sciences": "Dr. Sudhakar Beedam",
  "basic-sciences-humanities": "Dr. Sudhakar Beedam",
  humanities: "Dr. Sudhakar Beedam",
};

/**
 * Calculates faculty seniority ranking priority:
 * 1. Vice Principal (Highest priority if present in department)
 * 2. Principal / Vice Chancellor
 * 3. Registrar
 * 4. HOD (Head of Department)
 * 4.5. Deans / Directors
 * 5.1. Professors WITH Ph.D.
 * 5.2. Other Professors (without Ph.D.)
 * 6.1. Associate Professors WITH Ph.D.
 * 6.2. Other Associate Professors (without Ph.D.)
 * 7.1. Senior / Selection Grade Assistant Professors WITH Ph.D.
 * 7.2. Senior / Selection Grade Assistant Professors WITHOUT Ph.D.
 * 7.3. Assistant Professors WITH Ph.D.
 * 7.4. Other Assistant Professors (without Ph.D.)
 * 8.1. Other Academic Roles (Lecturer / Practice / Adjunct) WITH Ph.D.
 * 8.2. Other Academic Roles WITHOUT Ph.D.
 * 9.0. Others
 */
export function getFacultySeniorityPriority(
  member: {
    fullName?: string;
    name?: string;
    designation?: string;
    qualification?: string;
    academicAdministrationRoles?: { roleTitle?: string }[];
    phd?: { status?: string; yearOfAward?: number | string; university?: string; topic?: string };
    roles?: string;
  },
  deptKey?: string
): number {
  const des = (member.designation || "").toLowerCase();
  const rawRoles = member.academicAdministrationRoles
    ? member.academicAdministrationRoles.map((r) => (r.roleTitle || "").toLowerCase()).join(" ")
    : (member.roles || "").toLowerCase();
  const name = (member.fullName || member.name || "").trim();
  const cleanName = cleanFacultyName(name).toLowerCase();
  const isPhd = hasPhdDegree(name, member.qualification, member.phd);

  // 1. Vice Principal (Highest priority in any department)
  if (
    des.includes("vice principal") ||
    des.includes("vice-principal") ||
    rawRoles.includes("vice principal") ||
    rawRoles.includes("vice-principal") ||
    cleanName.includes("kamal basha")
  ) {
    return 1;
  }

  // 2. Principal / Vice Chancellor
  if (
    des.includes("vice chancellor") ||
    des.includes("pro-vice-chancellor") ||
    des.includes("principal") ||
    rawRoles.includes("principal") ||
    rawRoles.includes("vice chancellor") ||
    cleanName.includes("yuvaraj") ||
    cleanName.includes("ramanathan")
  ) {
    return 2;
  }

  // 3. Registrar
  if (
    des.includes("registrar") ||
    rawRoles.includes("registrar") ||
    (cleanName.includes("pradeep") &&
      cleanName.includes("kumar") &&
      (des.includes("registrar") ||
        rawRoles.includes("registrar") ||
        cleanName.includes("pradeep kumar d") ||
        cleanName.includes("d pradeep kumar") ||
        cleanName.includes("d. pradeep kumar")))
  ) {
    return 3;
  }

  // 4. HOD (Head of Department)
  const canonicalKey = getDepartmentByKey(deptKey || "")?.key || (deptKey ? deptKey.toLowerCase().trim() : "");
  const knownHod = canonicalKey ? DEPT_KNOWN_HODS[canonicalKey] : null;
  const isNamedHod = knownHod ? matchFacultyNameScore(knownHod, name) >= 0.4 : false;

  if (
    isNamedHod ||
    des.includes("head of department") ||
    des.includes("head of the department") ||
    des.includes("& head") ||
    rawRoles.includes("head of department") ||
    rawRoles.includes("head of the department") ||
    rawRoles.includes("hod") ||
    (/\b(hod|head)\b/.test(des) && !des.includes("lab") && !des.includes("club"))
  ) {
    return 4;
  }

  // 4.5 Deans / Directors
  if (
    des.includes("dean") ||
    des.includes("director") ||
    rawRoles.includes("dean") ||
    rawRoles.includes("director")
  ) {
    return 4.5;
  }

  // 5. Professors (with PhD before non-PhD)
  if (
    des.includes("professor") &&
    !des.includes("assistant") &&
    !des.includes("associate")
  ) {
    return isPhd ? 5.1 : 5.2;
  }

  // 6. Associate Professors (with PhD before non-PhD)
  if (
    des.includes("associate professor") ||
    des.includes("assoc. prof") ||
    des.includes("associate professors")
  ) {
    return isPhd ? 6.1 : 6.2;
  }

  // 7. Assistant Professors (with PhD before non-PhD)
  if (
    des.includes("assistant professor") ||
    des.includes("asst. prof") ||
    des.includes("assistant professors")
  ) {
    const isSr =
      des.includes("sr") || des.includes("senior") || des.includes("selection");
    if (isSr) {
      return isPhd ? 7.1 : 7.2;
    }
    return isPhd ? 7.3 : 7.4;
  }

  // 8. Other Academic Roles (Lecturer, Adjunct, Practice, Teaching Fellow)
  if (
    des.includes("lecturer") ||
    des.includes("adjunct") ||
    des.includes("practice") ||
    des.includes("teaching")
  ) {
    return isPhd ? 8.1 : 8.2;
  }

  // 9. Staff / Technical / Others
  return 9;
}

export function useFacultyData() {
  const [facultyList, setFacultyList] = useState<APIFacultyMember[]>(sharedFacultyCache);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const loadData = useCallback(async (forceRefresh = false) => {
    try {
      if (!sharedFetchPromise || forceRefresh) {
        sharedFetchPromise = fetchFacultyProfiles(forceRefresh);
      }
      const data = await sharedFetchPromise;
      if (Array.isArray(data) && data.length > 0) {
        sharedFacultyCache = data;
        setFacultyList(data);
        setError(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to load faculty profiles"));
    } finally {
      setLoading(false);
      sharedFetchPromise = null;
    }
  }, []);

  useEffect(() => {
    // Non-blocking background sync with live API using cache
    loadData(false);
  }, [loadData]);

  /**
   * Returns list of FacultyMember objects formatted for department grids.
   * Shows ALL faculty belonging to the respective department from the institutional database,
   * enriched with verified official profile metadata (slugs, photos) where available.
   */
  const getFacultyByDept = useCallback(
    (deptKey: string): FacultyMember[] => {
      const rawKey = deptKey.toLowerCase().trim();
      const normalizedKey =
        rawKey === "civil" || rawKey === "civil-engineering" ? "ce" :
        rawKey === "mechanical" || rawKey === "mech" || rawKey === "mechanical-engineering" ? "me" :
        rawKey === "mna" || rawKey === "management" || rawKey === "management-studies" ? "mba" :
        rawKey === "computer-applications" ? "mca" :
        rawKey === "basic-sciences" || rawKey === "basic-sciences-humanities" || rawKey === "humanities" ? "bsh" :
        rawKey === "cse-aiml" || rawKey === "ai-ml" || rawKey === "ai&ml" ? "aiml" :
        rawKey === "cse-ai" || rawKey === "cai" ? "ai" :
        rawKey === "cse-ds" || rawKey === "aids" ? "cseds" :
        rawKey === "cse-cs" || rawKey === "cyber-security" ? "csecs" :
        rawKey;

      // Filter all faculty belonging to this department from the institutional database
      const filtered = facultyList.filter((f) => {
        const mapped = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
        return mapped === normalizedKey;
      });

      // Sort database faculty strictly by API teamDisplayOrder ascending, then clean name
      const sortedDbFaculty = [...filtered].sort(compareFacultyByApiOrder);

      const result: FacultyMember[] = sortedDbFaculty.map((f) => {
        const member = apiFacultyToFacultyMember(f);

        if (normalizedKey === "bsh") {
          member.subDepartment = getBshSubDepartment(f.department?.code, f.department?.name);
        }

        return member;
      });

      return result;
    },
    [facultyList]
  );

  /**
   * Returns raw API faculty records for a department, sorted by API order
   */
  const getRawFacultyByDept = useCallback(
    (deptKey: string): APIFacultyMember[] => {
      const normalizedKey = deptKey.toLowerCase().trim();
      const filtered = facultyList.filter((f) => {
        const mapped = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
        return mapped === normalizedKey;
      });
      return [...filtered].sort(compareFacultyByApiOrder);
    },
    [facultyList]
  );

  /**
   * Finds a faculty member by URL slug and builds their rich profile
   */
  const getFacultyProfileBySlug = useCallback(
    (deptKey: string, slug: string): ReturnType<typeof apiFacultyToFacultyProfile> | undefined => {
      const normalizedKey = deptKey.toLowerCase().trim();
      const cleanSlug = slug.replace(/^(?:dr|mr|mrs|ms|prof)-+/i, "");

      // 1. Check official match first within the requested department
      const matchOfficial = (o: any) => {
        const oSlug = o.slug || "";
        const cleanOSlug = oSlug.replace(/^(?:dr|mr|mrs|ms|prof)-+/i, "");
        const nameSlug = slugifyFaculty(o.name);
        const dbNameSlug = o.dbFullName ? slugifyFaculty(o.dbFullName) : "";
        return (
          o.slug === slug ||
          cleanOSlug === cleanSlug ||
          nameSlug === slug ||
          nameSlug === cleanSlug ||
          dbNameSlug === slug ||
          dbNameSlug === cleanSlug ||
          o.dbId === slug
        );
      };

      const officialMatch =
        (officialFacultyList as any[]).find(
          (o) =>
            (normalizedKey === "" || normalizedKey === "all" || o.deptKey === normalizedKey) &&
            matchOfficial(o)
        ) ||
        (officialFacultyList as any[]).find((o) => matchOfficial(o));

      let found: APIFacultyMember | undefined;
      if (officialMatch?.dbId) {
        found = facultyList.find((f) => f._id === officialMatch.dbId);
      }
      if (!found && officialMatch?.dbFullName) {
        found = facultyList.find((f) => cleanFacultyName(f.fullName).toLowerCase() === cleanFacultyName(officialMatch.dbFullName).toLowerCase());
      }
      if (!found && officialMatch?.name) {
        found = facultyList.find((f) => matchFacultyNameScore(officialMatch.name, f.fullName) >= 0.6);
      }

      // 2. Direct database lookup
      if (!found) {
        found = facultyList.find((f) => {
          const memberDept = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
          const memberSlug = slugifyFaculty(f.fullName);
          const cleanMemberSlug = memberSlug.replace(/^(?:dr|mr|mrs|ms|prof)-+/i, "");
          const matchesDept = memberDept === normalizedKey || normalizedKey === "all";
          return (memberSlug === slug || cleanMemberSlug === cleanSlug) && matchesDept;
        }) || facultyList.find((f) => {
          const memberSlug = slugifyFaculty(f.fullName);
          const cleanMemberSlug = memberSlug.replace(/^(?:dr|mr|mrs|ms|prof)-+/i, "");
          return memberSlug === slug || cleanMemberSlug === cleanSlug || f._id === slug;
        });
      }

      if (found) {
        const prof = apiFacultyToFacultyProfile(found);
        const resolvedOfficial =
          officialMatch ||
          (officialFacultyList as any[]).find(
            (o) => o.dbId === found?._id || cleanFacultyName(o.name).toLowerCase() === cleanFacultyName(found?.fullName || "").toLowerCase()
          );

        if (resolvedOfficial) {
          if (resolvedOfficial.name && (prof.name.toLowerCase() === "chandra sekhar" || !prof.name)) {
            prof.name = resolvedOfficial.name;
          }
          if (resolvedOfficial.qualification && (!prof.qualification || prof.qualification === "M.Tech / M.Sc")) {
            prof.qualification = resolvedOfficial.qualification;
          }
          // STRICT RULE: Only use resolvedOfficial.profilePhoto as fallback if prof.image from live API is missing!
          if (!prof.image && resolvedOfficial.profilePhoto) {
            const photoUrl =
              getFacultyPhotoUrl(resolvedOfficial.profilePhoto) ||
              (resolvedOfficial.profilePhoto.startsWith("http") ? resolvedOfficial.profilePhoto : undefined);
            if (photoUrl) prof.image = photoUrl;
          }
        }

        // Ensure qualification is properly resolved if missing or default generic string
        if (!prof.qualification || prof.qualification === "M.Tech / M.Sc" || prof.qualification.toLowerCase() === "m.tech") {
          prof.qualification = resolveFacultyQualification(found, prof.qualification);
        }

        return prof;
      }
      return undefined;
    },
    [facultyList]
  );

  /**
   * Finds raw API faculty member by slug or ID
   */
  const getRawFacultyBySlug = useCallback(
    (slugOrId: string, deptKey?: string): APIFacultyMember | undefined => {
      const normalizedKey = deptKey?.toLowerCase().trim();
      // 1. Check official match first within the requested department
      const officialMatch =
        (officialFacultyList as any[]).find(
          (o) =>
            (!normalizedKey || normalizedKey === "all" || o.deptKey === normalizedKey) &&
            (o.slug === slugOrId || slugifyFaculty(o.name) === slugOrId || o.dbId === slugOrId)
        ) ||
        (officialFacultyList as any[]).find(
          (o) => o.slug === slugOrId || slugifyFaculty(o.name) === slugOrId || o.dbId === slugOrId
        );
      if (officialMatch?.dbId) {
        const found = facultyList.find((f) => f._id === officialMatch.dbId);
        if (found) return found;
      }

      // 2. Direct database lookup
      return (
        facultyList.find((f) => {
          if (f._id === slugOrId) return true;
          const memberSlug = slugifyFaculty(f.fullName);
          if (memberSlug !== slugOrId) return false;
          if (normalizedKey) {
            const memberDept = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
            return memberDept === normalizedKey;
          }
          return true;
        }) || facultyList.find((f) => slugifyFaculty(f.fullName) === slugOrId || f._id === slugOrId)
      );
    },
    [facultyList]
  );

  /**
   * Matches any faculty member by name or slug across the database
   */
  const findFacultyByName = useCallback(
    (name: string): APIFacultyMember | undefined => {
      if (!name) return undefined;
      const cleanName = cleanFacultyName(name);
      const targetSlug = slugifyFaculty(cleanName);
      const direct = facultyList.find((f) => slugifyFaculty(f.fullName) === targetSlug);
      if (direct) return direct;

      let best: APIFacultyMember | undefined;
      let bestScore = 0;
      for (const f of facultyList) {
        const score = matchFacultyNameScore(cleanName, f.fullName);
        if (score > bestScore) {
          bestScore = score;
          best = f;
        }
      }
      return bestScore >= 0.5 ? best : undefined;
    },
    [facultyList]
  );

  /**
   * Dynamically resolves the HOD for any department from live API data,
   * strictly scoped to that department's faculty (never leaking faculty from other departments).
   */
  const getDepartmentHod = useCallback(
    (deptKey: string, targetNameOrSubDept?: string): FacultyMember | undefined => {
      const deptStatic = getDepartmentByKey(deptKey);
      const canonicalKey = deptStatic?.key || (deptKey ? deptKey.toLowerCase().trim() : "");
      const staticHod = deptStatic?.hod;
      const knownHead = departmentHeads.find((h) => h.deptKey === canonicalKey);

      // 1. Strictly get raw faculty for THIS department
      const deptRawFaculty = facultyList.filter((f) => {
        const mapped = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
        return mapped === canonicalKey;
      });

      let apiHodMatch: APIFacultyMember | undefined;

      // 2. Target name or sub-discipline specified (e.g. BSH sub-disciplines or specific head)
      if (targetNameOrSubDept) {
        const cleanTarget = cleanFacultyName(targetNameOrSubDept);
        let bestScore = 0;
        for (const f of deptRawFaculty) {
          const score = matchFacultyNameScore(cleanTarget, f.fullName);
          if (score > bestScore) {
            bestScore = score;
            apiHodMatch = f;
          }
        }
        if (bestScore < 0.4) {
          apiHodMatch = undefined;
        }

        // Sub-discipline check for BSH (English -> EFL, Maths -> M, Physics -> PHY, Chemistry -> CHY)
        if (!apiHodMatch && canonicalKey === "bsh") {
          const subTarget = targetNameOrSubDept.toLowerCase();
          apiHodMatch = deptRawFaculty.find((f) => {
            const code = (f.department?.code || "").toLowerCase();
            const name = (f.department?.name || "").toLowerCase();
            const des = (f.designation || "").toLowerCase().trim();
            const roles = (f.academicAdministrationRoles || []).map((r) => (r.roleTitle || "").toLowerCase()).join(" ");
            const isHead = des === "hod" || des.includes("head") || roles.includes("head") || roles.includes("hod");
            if (!isHead) return false;
            if (subTarget.includes("english") && (code === "efl" || name.includes("english"))) return true;
            if (subTarget.includes("math") && (code === "m" || code === "math" || name.includes("math"))) return true;
            if (subTarget.includes("physic") && (code === "phy" || name.includes("physic"))) return true;
            if (subTarget.includes("chem") && (code === "chy" || name.includes("chem"))) return true;
            return false;
          });
        }
      }

      // 3. General department HOD resolution (no specific target name)
      if (!apiHodMatch && !targetNameOrSubDept) {
        const hodTargetName = DEPT_KNOWN_HODS[canonicalKey] || staticHod?.name || knownHead?.name;

        // Try matching known official HOD name inside THIS department's faculty
        if (hodTargetName) {
          const cleanTarget = cleanFacultyName(hodTargetName);
          let bestScore = 0;
          for (const f of deptRawFaculty) {
            const des = (f.designation || "").toLowerCase().trim();
            const roles = (f.academicAdministrationRoles || []).map((r) => (r.roleTitle || "").toLowerCase()).join(" ");
            const isExplicitHod = des === "hod" || des.includes("head of department") || roles.includes("head of department");
            let score = matchFacultyNameScore(cleanTarget, f.fullName);
            if (isExplicitHod && score > 0.3) {
              score += 0.5; // Boost candidate holding HOD role/title
            }
            if (score > bestScore) {
              bestScore = score;
              apiHodMatch = f;
            }
          }
          if (bestScore < 0.4) {
            apiHodMatch = undefined;
          }
        }

        // If no named match, find the faculty member in this department explicitly designated as HOD
        if (!apiHodMatch) {
          apiHodMatch = deptRawFaculty.find((f) => {
            const des = (f.designation || "").toLowerCase().trim();
            const roles = (f.academicAdministrationRoles || [])
              .map((r) => (r.roleTitle || "").toLowerCase())
              .join(" ");
            return (
              des === "hod" ||
              des.includes("head of the department") ||
              des.includes("head of department") ||
              des.includes("& head") ||
              roles.includes("head of department") ||
              roles.includes("head of the department") ||
              roles.includes("hod")
            );
          });
        }

        // For MBA or executive-led departments, check Dean
        if (!apiHodMatch && (canonicalKey === "mba" || canonicalKey === "ce")) {
          apiHodMatch = deptRawFaculty.find((f) => {
            const des = (f.designation || "").toLowerCase();
            return des.includes("dean");
          });
        }
      }

      // 4. Build enriched FacultyMember if an API match in this department was found
      if (apiHodMatch) {
        const member = apiFacultyToFacultyMember(apiHodMatch);
        // Photo: API profile photo > static hod image > knownHead image
        member.image = getFacultyPhotoUrl(apiHodMatch.profilePhoto) || staticHod?.image || knownHead?.image;
        member.name = cleanFacultyName(apiHodMatch.fullName);
        if (staticHod?.qualification && (!member.qualification || member.qualification === "M.Tech / M.Sc")) {
          member.qualification = staticHod.qualification;
        }
        member.profileUrl = `/department/${canonicalKey}/faculty/${slugifyFaculty(member.name)}`;

        const desLower = member.designation.toLowerCase();
        if (!desLower.includes("head") && !desLower.includes("hod") && !desLower.includes("dean")) {
          member.designation = `${member.designation.replace(/s$/, "")} & Head`;
        }
        return member;
      }

      // 5. Fallback strictly to matched head from departmentHeads or static department HOD
      if (targetNameOrSubDept) {
        const matchedHead = departmentHeads.find(
          (h) => (h.deptKey === canonicalKey || canonicalKey === "bsh") && matchFacultyNameScore(targetNameOrSubDept, h.name) >= 0.5
        );
        if (matchedHead) {
          return {
            name: cleanFacultyName(matchedHead.name),
            designation: "Head of Department",
            qualification: staticHod?.qualification || "",
            image: matchedHead.image,
            profileUrl: matchedHead.externalProfile || `/department/${canonicalKey}/faculty/${slugifyFaculty(matchedHead.name)}`,
          };
        }
      }

      if (staticHod) {
        return {
          ...staticHod,
          name: cleanFacultyName(staticHod.name),
          image: staticHod.image || knownHead?.image,
          profileUrl: staticHod.profileUrl || `/department/${canonicalKey}/faculty/${slugifyFaculty(staticHod.name)}`,
        };
      }

      if (knownHead) {
        return {
          name: cleanFacultyName(knownHead.name),
          designation: "Head of Department",
          qualification: "",
          image: knownHead.image,
          profileUrl: knownHead.externalProfile || `/department/${canonicalKey}/faculty/${slugifyFaculty(knownHead.name)}`,
        };
      }

      return undefined;
    },
    [facultyList]
  );

  /**
   * Search across all faculty members
   */
  const searchFaculty = useCallback(
    (query: string, deptKey?: string): APIFacultyMember[] => {
      if (!query && !deptKey) return facultyList;
      const q = query.toLowerCase().trim();
      const normalizedKey = deptKey?.toLowerCase();

      return facultyList.filter((f) => {
        if (normalizedKey) {
          const memberDept = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
          if (memberDept !== normalizedKey) return false;
        }
        if (!q) return true;

        const nameMatch = cleanFacultyName(f.fullName).toLowerCase().includes(q);
        const desMatch = f.designation?.toLowerCase().includes(q);
        const emailMatch = f.email?.toLowerCase().includes(q);
        const specMatch = f.specialization?.some((s) => s.toLowerCase().includes(q));
        const pubMatch = f.publications?.some((p) => p.title?.toLowerCase().includes(q));

        return nameMatch || desMatch || emailMatch || specMatch || pubMatch;
      });
    },
    [facultyList]
  );

  return {
    facultyList,
    loading,
    error,
    refresh: () => loadData(true),
    getFacultyByDept,
    getRawFacultyByDept,
    getFacultyProfileBySlug,
    getRawFacultyBySlug,
    findFacultyByName,
    getDepartmentHod,
    searchFaculty,
  };
}

export { compareFacultyByApiOrder };

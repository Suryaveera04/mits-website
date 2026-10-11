import { useState, useEffect, useCallback, useMemo } from "react";
import {
  fetchFacultyProfiles,
  apiFacultyToFacultyMember,
  apiFacultyToFacultyProfile,
  mapApiDeptToDeptKey,
  getInitialFacultyData,
  getFacultyPhotoUrl,
  type APIFacultyMember,
} from "@/lib/facultyApi";
import { slugifyFaculty, cleanFacultyName } from "@/lib/facultySlug";
import { departmentsData, type FacultyMember } from "@/data/departmentData";
import { departmentHeads } from "@/data/aboutData";

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
    // Non-blocking background sync with live API
    loadData();
  }, [loadData]);

  /**
   * Returns list of FacultyMember objects formatted for department grids
   */
  const getFacultyByDept = useCallback(
    (deptKey: string): FacultyMember[] => {
      const normalizedKey = deptKey.toLowerCase().trim();
      const filtered = facultyList.filter((f) => {
        const mapped = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
        return mapped === normalizedKey;
      });

      // Designation sorting priority (Professors -> Associate -> Assistant -> Others)
      const getPriority = (d: string) => {
        const des = (d || "").toLowerCase();
        if (des.includes("hod") || des.includes("head")) return 1;
        if (des.includes("professor") && !des.includes("assistant") && !des.includes("associate")) return 2;
        if (des.includes("associate professor")) return 3;
        if (des.includes("assistant professor")) return 4;
        return 5;
      };

      return [...filtered]
        .sort((a, b) => {
          const pA = getPriority(a.designation);
          const pB = getPriority(b.designation);
          if (pA !== pB) return pA - pB;
          return cleanFacultyName(a.fullName).localeCompare(cleanFacultyName(b.fullName));
        })
        .map((f) => {
          // Strictly only database images; no old static image fallback
          return apiFacultyToFacultyMember(f);
        });
    },
    [facultyList]
  );

  /**
   * Returns raw API faculty records for a department
   */
  const getRawFacultyByDept = useCallback(
    (deptKey: string): APIFacultyMember[] => {
      const normalizedKey = deptKey.toLowerCase().trim();
      return facultyList.filter((f) => {
        const mapped = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
        return mapped === normalizedKey;
      });
    },
    [facultyList]
  );

  /**
   * Finds a faculty member by URL slug and builds their rich profile
   */
  const getFacultyProfileBySlug = useCallback(
    (deptKey: string, slug: string): ReturnType<typeof apiFacultyToFacultyProfile> | undefined => {
      const normalizedKey = deptKey.toLowerCase().trim();
      const match = facultyList.find((f) => {
        const memberDept = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
        const memberSlug = slugifyFaculty(f.fullName);
        const matchesDept = memberDept === normalizedKey || normalizedKey === "all";
        return memberSlug === slug && matchesDept;
      }) || facultyList.find((f) => slugifyFaculty(f.fullName) === slug);

      if (match) {
        return apiFacultyToFacultyProfile(match);
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
      return facultyList.find((f) => {
        if (f._id === slugOrId) return true;
        const memberSlug = slugifyFaculty(f.fullName);
        if (memberSlug !== slugOrId) return false;
        if (normalizedKey) {
          const memberDept = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
          return memberDept === normalizedKey;
        }
        return true;
      }) || facultyList.find((f) => slugifyFaculty(f.fullName) === slugOrId || f._id === slugOrId);
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
   * checking HOD roles/designations first, matching with known HOD name.
   * Strictly keeps image blank if not present in the database.
   */
  const getDepartmentHod = useCallback(
    (deptKey: string, targetNameOrSubDept?: string): FacultyMember | undefined => {
      const normalizedKey = deptKey.toLowerCase().trim();
      const deptStatic = departmentsData[normalizedKey];
      const staticHod = deptStatic?.hod;
      const knownHead = departmentHeads.find((h) => h.deptKey === normalizedKey);
      const hodTargetName = targetNameOrSubDept || staticHod?.name || knownHead?.name;

      // 1. Get raw faculty for this department
      const deptRawFaculty = facultyList.filter((f) => {
        const mapped = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
        return mapped === normalizedKey;
      });

      // 2. Check if any faculty member in this department is designated as HOD (only when no specific target name is requested)
      let apiHodMatch: APIFacultyMember | undefined;
      if (!targetNameOrSubDept) {
        apiHodMatch = deptRawFaculty.find((f) => {
          const des = (f.designation || "").toLowerCase();
          const roles = (f.academicAdministrationRoles || [])
            .map((r) => (r.roleTitle || "").toLowerCase())
            .join(" ");
          return des.includes("hod") || des.includes("head") || roles.includes("head of department");
        });
      }

      // 3. If not found by explicit HOD designation, match by known HOD name
      if (!apiHodMatch && hodTargetName) {
        const cleanTarget = cleanFacultyName(hodTargetName);
        let bestScore = 0;
        for (const f of deptRawFaculty) {
          const score = matchFacultyNameScore(cleanTarget, f.fullName);
          if (score > bestScore) {
            bestScore = score;
            apiHodMatch = f;
          }
        }
        if (bestScore < 0.5) {
          apiHodMatch = undefined;
        }

        // Check globally across all departments if needed
        if (!apiHodMatch) {
          let globalBestScore = 0;
          for (const f of facultyList) {
            const score = matchFacultyNameScore(cleanTarget, f.fullName);
            if (score > globalBestScore) {
              globalBestScore = score;
              apiHodMatch = f;
            }
          }
          if (globalBestScore < 0.5) {
            apiHodMatch = undefined;
          }
        }
      }

      // 4. If an API match is found, build the enriched FacultyMember
      if (apiHodMatch) {
        const member = apiFacultyToFacultyMember(apiHodMatch);
        // Only set image if API match has a profile photo in the database; do not use any old URL
        member.image = getFacultyPhotoUrl(apiHodMatch.profilePhoto) || undefined;
        member.name = cleanFacultyName(apiHodMatch.fullName);
        member.profileUrl = `/department/${normalizedKey}/faculty/${slugifyFaculty(member.name)}`;

        const desLower = member.designation.toLowerCase();
        if (!desLower.includes("head") && !desLower.includes("hod")) {
          member.designation = `${member.designation.replace(/s$/, "")} & Head`;
        }
        return member;
      }

      // 5. Fallback to matched head from departmentHeads or static department HOD
      if (targetNameOrSubDept) {
        const matchedHead = departmentHeads.find(
          (h) => matchFacultyNameScore(targetNameOrSubDept, h.name) >= 0.5
        );
        if (matchedHead) {
          return {
            name: cleanFacultyName(matchedHead.name),
            designation: "Head of Department",
            qualification: "",
            image: matchedHead.image,
            profileUrl: matchedHead.externalProfile || `/department/${normalizedKey}/faculty/${slugifyFaculty(matchedHead.name)}`,
          };
        }
      }

      if (staticHod) {
        return {
          ...staticHod,
          name: cleanFacultyName(staticHod.name),
          image: undefined, // Blank image if not in database
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

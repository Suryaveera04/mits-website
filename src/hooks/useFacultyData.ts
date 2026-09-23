import { useState, useEffect, useCallback, useMemo } from "react";
import {
  fetchFacultyProfiles,
  apiFacultyToFacultyMember,
  apiFacultyToFacultyProfile,
  mapApiDeptToDeptKey,
  type APIFacultyMember,
} from "@/lib/facultyApi";
import { slugifyFaculty } from "@/lib/facultySlug";
import { departmentsData, type FacultyMember } from "@/data/departmentData";
import { facultyProfiles, type FacultyProfile } from "@/data/facultyProfiles";
import { departmentHeads, deansList } from "@/data/aboutData";

// Shared in-memory cache to avoid duplicate network fetches across components
let sharedFacultyCache: APIFacultyMember[] | null = null;
let sharedFetchPromise: Promise<APIFacultyMember[]> | null = null;

// Precompute static images map for seamless fallback across departments, heads, and deans
const staticImageMap: Record<string, string> = {};
if (typeof window !== "undefined" || true) {
  try {
    Object.values(departmentsData).forEach((dept) => {
      if (dept.hod?.image && dept.hod?.name) {
        staticImageMap[slugifyFaculty(dept.hod.name)] = dept.hod.image;
      }
      dept.faculty?.forEach((f) => {
        if (f.image) {
          staticImageMap[slugifyFaculty(f.name)] = f.image;
        }
      });
    });
    Object.values(facultyProfiles).forEach((deptProfiles) => {
      Object.values(deptProfiles).forEach((p) => {
        if (p.image) {
          staticImageMap[slugifyFaculty(p.name)] = p.image;
        }
      });
    });
    departmentHeads.forEach((h) => {
      if (h.image && h.name) {
        staticImageMap[slugifyFaculty(h.name)] = h.image;
      }
    });
    deansList.forEach((d) => {
      if (d.image) {
        if (d.name) staticImageMap[slugifyFaculty(d.name)] = d.image;
        if (d.facultyName) staticImageMap[slugifyFaculty(d.facultyName)] = d.image;
      }
    });
  } catch {
    // ignore
  }
}

/**
 * Robust token-based matching score between two Indian faculty names
 */
export function matchFacultyNameScore(name1: string, name2: string): number {
  const tokenize = (n: string) =>
    n
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
  const [facultyList, setFacultyList] = useState<APIFacultyMember[]>(sharedFacultyCache || []);
  const [loading, setLoading] = useState<boolean>(!sharedFacultyCache);
  const [error, setError] = useState<Error | null>(null);

  const loadData = useCallback(async (forceRefresh = false) => {
    if (!forceRefresh && sharedFacultyCache) {
      setFacultyList(sharedFacultyCache);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      if (!sharedFetchPromise || forceRefresh) {
        sharedFetchPromise = fetchFacultyProfiles(forceRefresh);
      }
      const data = await sharedFetchPromise;
      sharedFacultyCache = data;
      setFacultyList(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to load faculty profiles"));
    } finally {
      setLoading(false);
      sharedFetchPromise = null;
    }
  }, []);

  useEffect(() => {
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
          return a.fullName.localeCompare(b.fullName);
        })
        .map((f) => {
          const slug = slugifyFaculty(f.fullName);
          return apiFacultyToFacultyMember(f, staticImageMap[slug]);
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
    (deptKey: string, slug: string): FacultyProfile | undefined => {
      const normalizedKey = deptKey.toLowerCase().trim();
      const match = facultyList.find((f) => {
        const memberDept = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
        const memberSlug = slugifyFaculty(f.fullName);
        const matchesDept = memberDept === normalizedKey || normalizedKey === "all";
        return memberSlug === slug && matchesDept;
      }) || facultyList.find((f) => slugifyFaculty(f.fullName) === slug);

      if (match) {
        const profile = apiFacultyToFacultyProfile(match);
        if (!profile.image) {
          const s = slugifyFaculty(match.fullName);
          profile.image = staticImageMap[s];
        }
        return profile;
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
      const targetSlug = slugifyFaculty(name);
      const direct = facultyList.find((f) => slugifyFaculty(f.fullName) === targetSlug);
      if (direct) return direct;

      let best: APIFacultyMember | undefined;
      let bestScore = 0;
      for (const f of facultyList) {
        const score = matchFacultyNameScore(name, f.fullName);
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
   * checking HOD roles/designations first, matching with known HOD name,
   * and providing clean static fallback.
   */
  const getDepartmentHod = useCallback(
    (deptKey: string): FacultyMember | undefined => {
      const normalizedKey = deptKey.toLowerCase().trim();
      const deptStatic = departmentsData[normalizedKey];
      const staticHod = deptStatic?.hod;
      const knownHead = departmentHeads.find((h) => h.deptKey === normalizedKey);
      const hodTargetName = staticHod?.name || knownHead?.name;

      // 1. Get raw faculty for this department
      const deptRawFaculty = facultyList.filter((f) => {
        const mapped = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
        return mapped === normalizedKey;
      });

      // 2. Check if any faculty member in this department is designated as HOD
      let apiHodMatch = deptRawFaculty.find((f) => {
        const des = (f.designation || "").toLowerCase();
        const roles = (f.academicAdministrationRoles || [])
          .map((r) => (r.roleTitle || "").toLowerCase())
          .join(" ");
        return des.includes("hod") || des.includes("head") || roles.includes("head of department");
      });

      // 3. If not found inside this department with an explicit HOD designation, match by known HOD name
      if (!apiHodMatch && hodTargetName) {
        let bestScore = 0;
        for (const f of deptRawFaculty) {
          const score = matchFacultyNameScore(hodTargetName, f.fullName);
          if (score > bestScore) {
            bestScore = score;
            apiHodMatch = f;
          }
        }
        if (bestScore < 0.5) {
          apiHodMatch = undefined;
        }

        // Check globally if needed
        if (!apiHodMatch) {
          let globalBestScore = 0;
          for (const f of facultyList) {
            const score = matchFacultyNameScore(hodTargetName, f.fullName);
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

      // 4. If we found an API match, build the enriched FacultyMember
      if (apiHodMatch) {
        const fallbackImg =
          staticImageMap[slugifyFaculty(apiHodMatch.fullName)] ||
          (hodTargetName ? staticImageMap[slugifyFaculty(hodTargetName)] : undefined) ||
          staticHod?.image ||
          knownHead?.image;

        const member = apiFacultyToFacultyMember(apiHodMatch, fallbackImg);
        member.profileUrl = `/department/${normalizedKey}/faculty/${slugifyFaculty(apiHodMatch.fullName)}`;

        const desLower = member.designation.toLowerCase();
        if (!desLower.includes("head") && !desLower.includes("hod")) {
          member.designation = `${member.designation.replace(/s$/, "")} & Head`;
        }
        return member;
      }

      // 5. Fallback to static department HOD
      return staticHod;
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

        const nameMatch = f.fullName.toLowerCase().includes(q);
        const desMatch = f.designation?.toLowerCase().includes(q);
        const emailMatch = f.email?.toLowerCase().includes(q);
        const specMatch = f.specialization?.some((s) => s.toLowerCase().includes(q));
        const pubMatch = f.publications?.some((p) => p.title?.toLowerCase().includes(q));

        return nameMatch || desMatch || emailMatch || specMatch || pubMatch;
      });
    },
    [facultyList]
  );

  return useMemo(
    () => ({
      facultyList,
      loading,
      error,
      refresh: () => loadData(true),
      getFacultyByDept,
      getRawFacultyByDept,
      getFacultyProfileBySlug,
      getRawFacultyBySlug,
      searchFaculty,
      findFacultyByName,
      getDepartmentHod,
    }),
    [
      facultyList,
      loading,
      error,
      loadData,
      getFacultyByDept,
      getRawFacultyByDept,
      getFacultyProfileBySlug,
      getRawFacultyBySlug,
      searchFaculty,
      findFacultyByName,
      getDepartmentHod,
    ]
  );
}

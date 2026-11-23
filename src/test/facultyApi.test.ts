import { describe, it, expect } from "vitest";
import {
  mapApiDeptToDeptKey,
  getBshSubDepartment,
  getFacultyPhotoUrl,
  apiFacultyToFacultyMember,
  apiFacultyToFacultyProfile,
  resolveFacultyQualification,
  cleanInstitutionName,
  cleanDegreeName,
  formatDegreeWithInstitution,
  type APIFacultyMember,
} from "@/lib/facultyApi";
import { slugifyFaculty } from "@/lib/facultySlug";
import fallbackData from "@/data/facultyApiFallback.json";

describe("Faculty API & Department Segregation", () => {
  it("should map standard department codes correctly", () => {
    expect(mapApiDeptToDeptKey("ECE")).toBe("ece");
    expect(mapApiDeptToDeptKey("EEE")).toBe("eee");
    expect(mapApiDeptToDeptKey("CE")).toBe("ce");
    expect(mapApiDeptToDeptKey("ME")).toBe("me");
    expect(mapApiDeptToDeptKey("MCA")).toBe("mca");
    expect(mapApiDeptToDeptKey("CSE")).toBe("cse");
    expect(mapApiDeptToDeptKey("CST")).toBe("cst");
    expect(mapApiDeptToDeptKey("CSE-AI")).toBe("ai");
    expect(mapApiDeptToDeptKey("AI")).toBe("ai");
    expect(mapApiDeptToDeptKey("CSE-AIML")).toBe("aiml");
    expect(mapApiDeptToDeptKey("AIML")).toBe("aiml");
    expect(mapApiDeptToDeptKey("CSE-CS")).toBe("csecs");
    expect(mapApiDeptToDeptKey("CSE-DS")).toBe("cseds");
    expect(mapApiDeptToDeptKey("CSE-AIDS")).toBe("cseds");
    expect(mapApiDeptToDeptKey("CHY")).toBe("bsh");
    expect(mapApiDeptToDeptKey("PHY")).toBe("bsh");
    expect(mapApiDeptToDeptKey("EFL")).toBe("bsh");
    expect(mapApiDeptToDeptKey("CTO")).toBe("admin");
  });

  it("should map department names correctly when code is missing", () => {
    expect(mapApiDeptToDeptKey(undefined, "ELECTRONICS & COMMUNICATION ENGG")).toBe("ece");
    expect(mapApiDeptToDeptKey(undefined, "ELECTRICAL AND ELECTRONICS ENGINEERING")).toBe("eee");
    expect(mapApiDeptToDeptKey(undefined, "CIVIL ENGINEERING")).toBe("ce");
    expect(mapApiDeptToDeptKey(undefined, "MECHANICAL ENGINEERING")).toBe("me");
    expect(mapApiDeptToDeptKey(undefined, "MASTER OF COMPUTER APPLICATIONS")).toBe("mca");
    expect(mapApiDeptToDeptKey(undefined, "COMPUTER SCIENCE AND ENGINEERING (ARTIFICIAL INTELLIGENCE)")).toBe("ai");
    expect(mapApiDeptToDeptKey(undefined, "COMPUTER SCIENCE AND ENGINEERING (ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING)")).toBe("aiml");
    expect(mapApiDeptToDeptKey(undefined, "COMPUTER SCIENCE AND ENGINEERING (ARTIFICIAL INTELLIGENCE AND DATA SCIENCE)")).toBe("cseds");
    expect(mapApiDeptToDeptKey(undefined, "COMPUTER SCIENCE AND ENGINEERING (CYBER SECURITY)")).toBe("csecs");
    expect(mapApiDeptToDeptKey(undefined, "CHEMISTRY")).toBe("bsh");
    expect(mapApiDeptToDeptKey(undefined, "PHYSICS")).toBe("bsh");
    expect(mapApiDeptToDeptKey(undefined, "ENGLISH & FOREIGN LANGUAGES")).toBe("bsh");
  });

  it("should identify BSH sub-departments correctly", () => {
    expect(getBshSubDepartment("CHY", "CHEMISTRY")).toBe("Department of Chemistry");
    expect(getBshSubDepartment("PHY", "PHYSICS")).toBe("Department of Physics");
    expect(getBshSubDepartment("EFL", "ENGLISH & FOREIGN LANGUAGES")).toBe("Department of English & Foreign Languages");
    expect(getBshSubDepartment("MATH", "MATHEMATICS")).toBe("Department of Mathematics");
    expect(getBshSubDepartment("HUM", "HUMANITIES")).toBe("Department of Humanities");
  });

  it("should build full photo URL with proper prefix", () => {
    expect(getFacultyPhotoUrl(undefined)).toBeUndefined();
    expect(getFacultyPhotoUrl("https://example.com/photo.jpg")).toBe("https://example.com/photo.jpg");
    expect(getFacultyPhotoUrl("/uploads/profile/photo.jpg")).toContain("/uploads/profile/photo.jpg");
    expect(getFacultyPhotoUrl("uploads/profile/photo.jpg")).toContain("/uploads/profile/photo.jpg");
  });

  it("should transform raw API faculty member to FacultyMember object", () => {
    const raw: APIFacultyMember = {
      _id: "test1",
      fullName: "Dr. Test Faculty",
      email: "test@mits.ac.in",
      department: { _id: "d1", name: "ELECTRONICS & COMMUNICATION ENGG", code: "ECE" },
      designation: "Professor",
      profilePhoto: "/uploads/profile/test.jpg",
      experience: 10,
      specialization: ["VLSI", "Embedded Systems"],
      phd: {
        topic: "Low power VLSI design",
        university: "IIT Madras",
        yearOfAward: 2018,
        status: "Awarded",
      },
    };

    const transformed = apiFacultyToFacultyMember(raw);
    expect(transformed.name).toBe("Dr. Test Faculty");
    expect(transformed.designation).toBe("Professor");
    expect(transformed.qualification).toBe("Ph.D. (IIT Madras)");
    expect(transformed.image).toContain("/uploads/profile/test.jpg");
    expect(transformed.profileUrl).toBe("/department/ece/faculty/test-faculty");
  });

  it("should transform raw API faculty to rich FacultyProfile with structured sections", () => {
    const raw: APIFacultyMember = {
      _id: "test2",
      fullName: "Dr. Jane Doe",
      email: "janedoe@mits.ac.in",
      department: { _id: "d2", name: "CHEMISTRY", code: "CHY" },
      designation: "Associate Professor",
      profilePhoto: "/uploads/profile/jane.jpg",
      specialization: ["Nanotechnology", "Electrochemistry"],
      phd: {
        topic: "Nanocomposites for Biosensors",
        university: "IISc Bangalore",
        yearOfAward: 2019,
        status: "Awarded",
      },
      publications: [
        {
          _id: "pub1",
          title: "Advanced Biosensing Using Nanoparticles",
          type: "Journal",
          journalOrConferenceName: "Biosensors and Bioelectronics",
          publicationDate: "2023-05-10T00:00:00.000Z",
          doiUrl: "https://doi.org/10.1016/j.bios.2023.115382",
          citationCount: 42,
        },
      ],
      academicAdministrationRoles: [
        {
          _id: "role1",
          roleTitle: "Department Coordinator",
          level: "Department Level",
          isCurrentlyHolding: true,
        },
      ],
    };

    const profile = apiFacultyToFacultyProfile(raw);
    expect(profile.name).toBe("Dr. Jane Doe");
    expect(profile.designation).toBe("Associate Professor");
    expect(profile.email).toBe("janedoe@mits.ac.in");
    expect(profile.sections.length).toBeGreaterThanOrEqual(4);

    const eduSection = profile.sections.find((s) => s.title === "Details of Educational Qualification");
    expect(eduSection).toBeDefined();

    const pubSection = profile.sections.find((s) => s.title === "Publication Details");
    expect(pubSection).toBeDefined();
    expect(Array.isArray(pubSection?.content)).toBe(true);

    const roleSection = profile.sections.find((s) => s.title === "Academic & Administrative Roles");
    expect(roleSection).toBeDefined();
  });

  it("should validate all records in fallback snapshot map cleanly", () => {
    const records = fallbackData.data as APIFacultyMember[];
    expect(records.length).toBeGreaterThanOrEqual(300);

    const departmentMap: Record<string, number> = {};
    records.forEach((f) => {
      const deptKey = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
      expect(deptKey).toBeDefined();
      expect(typeof deptKey).toBe("string");
      departmentMap[deptKey] = (departmentMap[deptKey] || 0) + 1;

      const slug = slugifyFaculty(f.fullName);
      expect(slug.length).toBeGreaterThan(0);
    });

    expect(departmentMap.ece).toBeGreaterThanOrEqual(25);
    expect(departmentMap.cse).toBeGreaterThanOrEqual(35);
    expect(departmentMap.bsh).toBeGreaterThanOrEqual(35);
    expect(departmentMap.mca).toBeGreaterThanOrEqual(20);
    expect(departmentMap.eee).toBeGreaterThanOrEqual(15);
    expect(departmentMap.me).toBeGreaterThanOrEqual(15);
    expect(departmentMap.ai).toBeGreaterThanOrEqual(15);
    expect(departmentMap.aiml).toBeGreaterThanOrEqual(15);
    expect(departmentMap.cseds).toBeGreaterThanOrEqual(15);
    expect(departmentMap.csecs).toBeGreaterThanOrEqual(15);
    expect(departmentMap.ce).toBeGreaterThanOrEqual(8);
  });

  it("should accurately resolve qualification based strictly on Ph.D. status and college name", () => {
    // 1. Awarded Ph.D. with university
    const awardedWithUni: APIFacultyMember = {
      _id: "aw1",
      fullName: "Dr. Alice Smith",
      phd: {
        status: "Awarded",
        university: "University of Kota",
        topic: "Machine Learning",
      },
      pg: {
        degree: "M.Tech",
        university: "JNTUA",
      },
    };
    expect(resolveFacultyQualification(awardedWithUni)).toBe("Ph.D. (University of Kota)");

    // 2. Awarded Ph.D. without university
    const awardedNoUni: APIFacultyMember = {
      _id: "aw2",
      fullName: "Dr. Bob Jones",
      phd: {
        status: "Awarded",
      },
    };
    expect(resolveFacultyQualification(awardedNoUni)).toBe("Ph.D.");

    // 3. Pursuing Ph.D. -> MUST display PG degree and Ph.D. college
    const pursuingFaculty: APIFacultyMember = {
      _id: "pur1",
      fullName: "Mr. Charlie Brown",
      phd: {
        status: "Pursuing",
        university: "VTU Belagavi",
        topic: "Cloud Computing",
      },
      pg: {
        degree: "M.Tech",
        university: "NIT Warangal",
      },
      ug: {
        degree: "B.Tech",
        university: "JNTUH",
      },
    };
    expect(resolveFacultyQualification(pursuingFaculty)).toBe("M.Tech (VTU Belagavi)");

    // 3b. Pursuing Ph.D. with empty phd.university -> falls back to PG college
    const pursuingEmptyPhdUni: APIFacultyMember = {
      _id: "pur1b",
      fullName: "Mr. Alan Turing",
      phd: {
        status: "Pursuing",
      },
      pg: {
        degree: "M.Tech",
        university: "NIT Warangal",
      },
    };
    expect(resolveFacultyQualification(pursuingEmptyPhdUni)).toBe("M.Tech (NIT Warangal)");

    // 4. Pursuing Ph.D. with PG degree but no PG university
    const pursuingNoPgUni: APIFacultyMember = {
      _id: "pur2",
      fullName: "Ms. Daisy Miller",
      phd: {
        status: "Pursuing",
        topic: "Cybersecurity",
      },
      pg: {
        degree: "M.Sc Mathematics",
      },
    };
    expect(resolveFacultyQualification(pursuingNoPgUni)).toBe("M.Sc Mathematics");

    // 5. Pursuing Ph.D. with only UG degree and university
    const pursuingOnlyUg: APIFacultyMember = {
      _id: "pur3",
      fullName: "Mr. Edward Norton",
      phd: {
        status: "Pursuing",
      },
      ug: {
        degree: "B.Tech",
        university: "SV University",
      },
    };
    expect(resolveFacultyQualification(pursuingOnlyUg)).toBe("B.Tech (SV University)");

    // 6. Not Applicable -> should display PG degree and college
    const notApplicableFaculty: APIFacultyMember = {
      _id: "na1",
      fullName: "Mrs. Fiona Gallagher",
      phd: {
        status: "Not Applicable",
      },
      pg: {
        degree: "MBA",
        university: "Indian Institute of Science",
      },
    };
    expect(resolveFacultyQualification(notApplicableFaculty)).toBe("MBA (Indian Institute of Science)");

    // 8. Degrees with parentheses in degree name must still append college name
    const pursuingDegreeWithParens: APIFacultyMember = {
      _id: "pur4",
      fullName: "Mr. Gangadharam T",
      phd: {
        status: "Pursuing",
        university: "S V UNIVERSITY",
      },
      pg: {
        degree: "MA (Economics)",
        university: "S V UNIVERSITY",
      },
    };
    expect(resolveFacultyQualification(pursuingDegreeWithParens)).toBe("MA (Economics) (S V UNIVERSITY)");

    const pursuingMtechWithBranch: APIFacultyMember = {
      _id: "pur5",
      fullName: "Mr. Noorbhasha Junnu Babu",
      phd: {
        status: "Pursuing",
        university: "Pondicherry University, Karaikal Campus",
      },
      pg: {
        degree: "M.Tech. (Computer Science and Engineering)",
        university: "Bapatla Engineering College, Bapatla",
      },
    };
    expect(resolveFacultyQualification(pursuingMtechWithBranch)).toBe("M.Tech. (Computer Science and Engineering) (Pondicherry University, Karaikal Campus)");

    const notApplicableWithBranch: APIFacultyMember = {
      _id: "na3",
      fullName: "Mr. Sabarishkumar P",
      phd: {
        status: "Not Applicable",
      },
      pg: {
        degree: "M.E (Structural Engineering)",
        university: "Institute of Road and Transport Technology, Erode",
      },
    };
    expect(resolveFacultyQualification(notApplicableWithBranch)).toBe("M.E (Structural Engineering) (Institute of Road and Transport Technology, Erode)");

    // 9. Do not duplicate college name if degree already mentions the university
    expect(formatDegreeWithInstitution("M.Tech (IIT Madras)", "IIT Madras")).toBe("M.Tech (IIT Madras)");

    // 10. Clean leading bullets and formatting artifacts from degree strings
    expect(cleanDegreeName("•\tM. Tech. (Information Technology) ")).toBe("M. Tech. (Information Technology)");
    expect(formatDegreeWithInstitution("•\tM. Tech. (Information Technology) ", "Vignan University")).toBe("M. Tech. (Information Technology) (Vignan University)");
  });

  it("should clean institution names properly removing placeholders and whitespace", () => {
    expect(cleanInstitutionName("  IIT   Madras  \t")).toBe("IIT Madras");
    expect(cleanInstitutionName("-")).toBe("");
    expect(cleanInstitutionName("N/A")).toBe("");
    expect(cleanInstitutionName("None")).toBe("");
    expect(cleanInstitutionName("Not Applicable")).toBe("");
    expect(cleanInstitutionName(undefined)).toBe("");
  });
});

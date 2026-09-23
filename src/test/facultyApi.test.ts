import { describe, it, expect } from "vitest";
import {
  mapApiDeptToDeptKey,
  getBshSubDepartment,
  getFacultyPhotoUrl,
  apiFacultyToFacultyMember,
  apiFacultyToFacultyProfile,
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
    expect(mapApiDeptToDeptKey("CST")).toBe("cse");
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
    expect(transformed.qualification).toBe("Ph.D.");
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

  it("should validate all 320 records in fallback snapshot map cleanly", () => {
    const records = fallbackData.data as APIFacultyMember[];
    expect(records.length).toBe(320);

    const departmentMap: Record<string, number> = {};
    records.forEach((f) => {
      const deptKey = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
      expect(deptKey).toBeDefined();
      expect(typeof deptKey).toBe("string");
      departmentMap[deptKey] = (departmentMap[deptKey] || 0) + 1;

      const slug = slugifyFaculty(f.fullName);
      expect(slug.length).toBeGreaterThan(0);
    });

    expect(departmentMap.ece).toBe(220);
    expect(departmentMap.bsh).toBe(28);
    expect(departmentMap.mca).toBe(20);
    expect(departmentMap.eee).toBe(17);
    expect(departmentMap.ai).toBe(11);
    expect(departmentMap.ce).toBe(8);
    expect(departmentMap.cse).toBe(7);
    expect(departmentMap.admin).toBe(6);
    expect(departmentMap.me).toBe(2);
    expect(departmentMap.csecs).toBe(1);
  });
});

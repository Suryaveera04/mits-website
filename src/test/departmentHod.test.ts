import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useFacultyData, DEPT_KNOWN_HODS } from "@/hooks/useFacultyData";
import { departmentsData, getDepartmentByKey } from "@/data/departmentData";
import { departmentHeads } from "@/data/aboutData";

describe("Department Head of Department (HOD) Resolution", () => {
  it("DEPT_KNOWN_HODS must map all departments and their common route aliases to correct HOD names", () => {
    expect(DEPT_KNOWN_HODS.ce).toBe("Dr. Vijayakumar Natesan");
    expect(DEPT_KNOWN_HODS.civil).toBe("Dr. Vijayakumar Natesan");

    expect(DEPT_KNOWN_HODS.me).toBe("Dr. S. Baskaran");
    expect(DEPT_KNOWN_HODS.mechanical).toBe("Dr. S. Baskaran");

    expect(DEPT_KNOWN_HODS.eee).toBe("Dr. Manavaalan Gunasekaran");

    expect(DEPT_KNOWN_HODS.ece).toBe("Dr. Sanjay Kumar C. Gowre");

    expect(DEPT_KNOWN_HODS.cse).toBe("Dr. M. Sreedevi");

    expect(DEPT_KNOWN_HODS.cst).toBe("Dr. K. Dinesh");

    expect(DEPT_KNOWN_HODS.cseds).toBe("Dr. S. Kusuma");
    expect(DEPT_KNOWN_HODS["cse-ds"]).toBe("Dr. S. Kusuma");
    expect(DEPT_KNOWN_HODS.aids).toBe("Dr. S. Kusuma");

    expect(DEPT_KNOWN_HODS.csecs).toBe("Dr. Brahm Prakash");
    expect(DEPT_KNOWN_HODS["cse-cs"]).toBe("Dr. Brahm Prakash");
    expect(DEPT_KNOWN_HODS["cyber-security"]).toBe("Dr. Brahm Prakash");

    expect(DEPT_KNOWN_HODS.ai).toBe("Dr. R. Kalpana");
    expect(DEPT_KNOWN_HODS["cse-ai"]).toBe("Dr. R. Kalpana");

    expect(DEPT_KNOWN_HODS.aiml).toBe("Dr. S. Padma");
    expect(DEPT_KNOWN_HODS["cse-aiml"]).toBe("Dr. S. Padma");

    expect(DEPT_KNOWN_HODS.mca).toBe("Dr. N. Naveen Kumar");

    expect(DEPT_KNOWN_HODS.mba).toBe("Dr. Bhanu Sree Reddy");

    expect(DEPT_KNOWN_HODS.bsh).toBe("Dr. Sudhakar Beedam");
  });

  it("departmentsData static configuration must have verified HODs for each department", () => {
    expect(departmentsData.ce.hod.name).toBe("Dr. Vijayakumar Natesan");
    expect(departmentsData.me.hod.name).toBe("Dr. S. Baskaran");
    expect(departmentsData.eee.hod.name).toBe("Dr. Manavaalan Gunasekaran");
    expect(departmentsData.ece.hod.name).toBe("Dr. Sanjay Kumar C. Gowre");
    expect(departmentsData.cse.hod.name).toBe("Dr. M. Sreedevi");
    expect(departmentsData.cst.hod.name).toBe("Dr. K. Dinesh");
    expect(departmentsData.cseds.hod.name).toBe("Dr. S. Kusuma");
    expect(departmentsData.csecs.hod.name).toBe("Dr. Brahm Prakash");
    expect(departmentsData.ai.hod.name).toBe("Dr. R. Kalpana");
    expect(departmentsData.aiml.hod.name).toBe("Dr. S. Padma");
    expect(departmentsData.mca.hod.name).toBe("Dr. N. Naveen Kumar");
    expect(departmentsData.mba.hod.name).toBe("Dr. Bhanu Sree Reddy");
    expect(departmentsData.bsh.hod.name).toBe("Dr. Sudhakar Beedam");
  });

  it("getDepartmentHod must resolve strictly the correct HOD from live API data for each department", async () => {
    const { result } = renderHook(() => useFacultyData());
    const { getDepartmentHod } = result.current;

    // Civil Engineering: Dr. Vijayakumar Natesan / Dr Vijayakumar N (NOT Dr. Brahm Prakash)
    const ceHod = getDepartmentHod("ce");
    expect(ceHod).toBeDefined();
    expect(ceHod?.name.toLowerCase()).toContain("vijayakumar");
    expect(ceHod?.name.toLowerCase()).not.toContain("brahm prakash");
    expect(ceHod?.profileUrl).toContain("/department/ce/faculty/");

    const civilHod = getDepartmentHod("civil");
    expect(civilHod).toBeDefined();
    expect(civilHod?.name.toLowerCase()).toContain("vijayakumar");

    // Cyber Security (CSE-CS): Dr. Brahm Prakash
    const csecsHod = getDepartmentHod("csecs");
    expect(csecsHod).toBeDefined();
    expect(csecsHod?.name.toLowerCase()).toContain("brahm prakash");
    expect(csecsHod?.profileUrl).toContain("/department/csecs/faculty/");

    // Computer Science & Technology (CST): Dr. K. Dinesh / Dr Dinesh K (NOT Dr. Vijayakumar N)
    const cstHod = getDepartmentHod("cst");
    expect(cstHod).toBeDefined();
    expect(cstHod?.name.toLowerCase()).toContain("dinesh");
    expect(cstHod?.name.toLowerCase()).not.toContain("vijayakumar");

    // Mechanical Engineering (ME): Dr. S. Baskaran / Dr Baskaran S (NOT Dr. Sanjay Kumar Gowre)
    const meHod = getDepartmentHod("me");
    expect(meHod).toBeDefined();
    expect(meHod?.name.toLowerCase()).toContain("baskaran");
    expect(meHod?.name.toLowerCase()).not.toContain("sanjay");

    // Electronics & Communication (ECE): Dr. Sanjay Kumar C. Gowre (NOT Dr. Baskaran)
    const eceHod = getDepartmentHod("ece");
    expect(eceHod).toBeDefined();
    expect(eceHod?.name.toLowerCase()).toContain("sanjay");
    expect(eceHod?.name.toLowerCase()).not.toContain("baskaran");

    // Computer Science & Engineering (CSE): Sreedevi Maddipatla / Dr. M. Sreedevi
    const cseHod = getDepartmentHod("cse");
    expect(cseHod).toBeDefined();
    expect(cseHod?.name.toLowerCase()).toContain("sreedevi");

    // CSE (AI & Data Science): Kusuma S / Dr. S. Kusuma
    const csedsHod = getDepartmentHod("cseds");
    expect(csedsHod).toBeDefined();
    expect(csedsHod?.name.toLowerCase()).toContain("kusuma");

    // CSE (Artificial Intelligence): Dr. Kalpana R / Dr. R. Kalpana
    const aiHod = getDepartmentHod("ai");
    expect(aiHod).toBeDefined();
    expect(aiHod?.name.toLowerCase()).toContain("kalpana");

    // CSE (AI & ML): Dr. Padma S / Dr. S. Padma
    const aimlHod = getDepartmentHod("aiml");
    expect(aimlHod).toBeDefined();
    expect(aimlHod?.name.toLowerCase()).toContain("padma");

    // MCA: N Naveen Kumar / Dr. N. Naveen Kumar
    const mcaHod = getDepartmentHod("mca");
    expect(mcaHod).toBeDefined();
    expect(mcaHod?.name.toLowerCase()).toContain("naveen");

    // MBA: Bhanu Sree Reddy Dornadula / Dr. Bhanu Sree Reddy
    const mbaHod = getDepartmentHod("mba");
    expect(mbaHod).toBeDefined();
    expect(mbaHod?.name.toLowerCase()).toContain("bhanu sree");

    // BSH: Dr. Sudhakar Beedam
    const bshHod = getDepartmentHod("bsh");
    expect(bshHod).toBeDefined();
    expect(bshHod?.name.toLowerCase()).toContain("sudhakar");
  });

  it("getDepartmentHod with sub-department targets in BSH must resolve constituent division heads", async () => {
    const { result } = renderHook(() => useFacultyData());
    const { getDepartmentHod } = result.current;

    const englishHead = getDepartmentHod("bsh", "Dr. Sudhakar Beedam");
    expect(englishHead).toBeDefined();
    expect(englishHead?.name.toLowerCase()).toContain("sudhakar");

    const mathsHead = getDepartmentHod("bsh", "Dr. Saravana R");
    expect(mathsHead).toBeDefined();
    expect(mathsHead?.name.toLowerCase()).toContain("saravana");

    const physicsHead = getDepartmentHod("bsh", "Jagadeesh Babu Bellam");
    expect(physicsHead).toBeDefined();
    expect(physicsHead?.name.toLowerCase()).toContain("jagadeesh");

    const chemistryHead = getDepartmentHod("bsh", "Renjith Bhaskaran");
    expect(chemistryHead).toBeDefined();
    expect(chemistryHead?.name.toLowerCase()).toContain("renjith");
  });

  it("getFacultyByDept for BSH must categorize all members into their specific constituent subDepartments", () => {
    const { result } = renderHook(() => useFacultyData());
    const { getFacultyByDept } = result.current;

    const bshMembers = getFacultyByDept("bsh");
    expect(bshMembers.length).toBe(35);

    const validSubDepts = new Set([
      "Department of English & Foreign Languages",
      "Department of Mathematics",
      "Department of Physics",
      "Department of Chemistry",
    ]);

    bshMembers.forEach((m) => {
      expect(m.subDepartment).toBeDefined();
      expect(validSubDepts.has(m.subDepartment!)).toBe(true);
    });

    const counts: Record<string, number> = {};
    bshMembers.forEach((m) => {
      counts[m.subDepartment!] = (counts[m.subDepartment!] || 0) + 1;
    });

    expect(counts["Department of English & Foreign Languages"]).toBe(8);
    expect(counts["Department of Mathematics"]).toBe(9);
    expect(counts["Department of Physics"]).toBe(10);
    expect(counts["Department of Chemistry"]).toBe(8);
  });
});

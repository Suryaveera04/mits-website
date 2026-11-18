/**
 * Cleans faculty names by stripping accidental trailing " a" or " a." added during database exports.
 * Preserves legitimate uppercase initials like "Dr. John A" or "Suresh A".
 * Standardizes common prefixes (Dr., Mr., Mrs., Ms., Prof.).
 */
export function cleanFacultyName(name: string): string {
  if (!name) return "";
  let cleaned = name.replace(/\s+a\.?$/g, "").trim();
  // Standardize title prefixes
  cleaned = cleaned.replace(/^Dr\s+/i, "Dr. ");
  cleaned = cleaned.replace(/^Dr\.([A-Za-z])/i, "Dr. $1");
  cleaned = cleaned.replace(/^Mr\s+/i, "Mr. ");
  cleaned = cleaned.replace(/^Mr\.([A-Za-z])/i, "Mr. $1");
  cleaned = cleaned.replace(/^Mrs\s+/i, "Mrs. ");
  cleaned = cleaned.replace(/^Mrs\.([A-Za-z])/i, "Mrs. $1");
  cleaned = cleaned.replace(/^Ms\s+/i, "Ms. ");
  cleaned = cleaned.replace(/^Ms\.([A-Za-z])/i, "Ms. $1");
  cleaned = cleaned.replace(/^Prof\s+/i, "Prof. ");
  cleaned = cleaned.replace(/^Prof\.([A-Za-z])/i, "Prof. $1");
  cleaned = cleaned.replace(/\s+/g, " ");
  return cleaned.trim();
}

/**
 * Detects whether a faculty member possesses a Ph.D. degree
 */
export function hasPhdDegree(
  name?: string,
  qualification?: string,
  phdObj?: { status?: string; yearOfAward?: number | string; university?: string; topic?: string }
): boolean {
  const n = (name || "").trim();
  const q = (qualification || "").toLowerCase();

  if (/^dr\.?\s+/i.test(n) || /\bdr\.?\s+[a-z]/i.test(n)) {
    return true;
  }
  if (q.includes("ph.d") || q.includes("phd") || q.includes("doctorate") || q.includes("d.phil")) {
    return true;
  }
  if (phdObj) {
    if (phdObj.status === "Awarded") return true;
    if (phdObj.yearOfAward && Number(phdObj.yearOfAward) > 1900) return true;
    if (phdObj.university && phdObj.status !== "Not Applicable" && phdObj.status !== "Pursuing") return true;
  }
  return false;
}

export function slugifyFaculty(name: string): string {
  return cleanFacultyName(name)
    .toLowerCase()
    .replace(/dr\.?|prof\.?|mr\.?|mrs\.?|ms\.?/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

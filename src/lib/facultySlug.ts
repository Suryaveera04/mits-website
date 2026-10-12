/**
 * Cleans faculty names by stripping accidental trailing " a" or " a." added during database exports.
 * Preserves legitimate uppercase initials like "Dr. John A" or "Suresh A".
 */
export function cleanFacultyName(name: string): string {
  if (!name) return "";
  return name.replace(/\s+a\.?$/g, "").trim();
}

export function slugifyFaculty(name: string): string {
  return cleanFacultyName(name)
    .toLowerCase()
    .replace(/dr\.?|prof\.?|mr\.?|mrs\.?|ms\.?/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

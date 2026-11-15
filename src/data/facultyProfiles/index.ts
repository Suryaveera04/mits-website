/**
 * Faculty Profiles Data Schema
 * 
 * ============================================================================
 * HOW TO EDIT FACULTY PROFILE DATA (PUBLICATIONS, PATENTS, PROJECTS, ETC.)
 * ============================================================================
 * 
 * 1. HOW TO EDIT A SPECIFIC SECTION (e.g., Publication Details):
 *    - Each faculty member's profile is a dictionary entry. Under the `sections` array,
 *      each section has a `title` and a `content` array of objects (representing tables)
 *      or string/array of strings (representing bullet lists).
 *    - To add a publication or patent, locate the correct object under `content` and append
 *      or edit a row object matching the table column keys.
 * 
 * 2. HOW TO REORDER SECTIONS:
 *    - Rearrange the objects inside the `sections` array to change which tabs/sections
 *      display first on the faculty details page.
 */
import { aimlProfiles } from './aiml';
import { ceProfiles } from './ce';
import { eceProfiles } from './ece';
import { cseProfiles } from './cse';
import { csedsProfiles } from './cseds';
import { csecsProfiles } from './csecs';
import { mcaProfiles } from './mca';
import { eeeProfiles } from './eee';
import { aiProfiles } from './ai';
import { meProfiles } from './me';
import { mbaProfiles } from './mba';
import { bshProfiles } from './bsh';

export type FacultyContentItem = string | Record<string, string>;

export interface FacultySection {
  title: string;
  content: string | FacultyContentItem[];
}

export interface FacultyProfile {
  name: string;
  designation: string;
  image?: string;
  email?: string;
  officeAddress?: string;
  sections: FacultySection[];
}

export { aimlProfiles } from './aiml';
export { ceProfiles } from './ce';
export { eceProfiles } from './ece';
export { cseProfiles } from './cse';
export { csedsProfiles } from './cseds';
export { csecsProfiles } from './csecs';
export { mcaProfiles } from './mca';
export { eeeProfiles } from './eee';
export { aiProfiles } from './ai';
export { meProfiles } from './me';
export { mbaProfiles } from './mba';
export { bshProfiles } from './bsh';

export const facultyProfiles: Record<string, Record<string, FacultyProfile>> = {
  aiml: aimlProfiles,
  ce: ceProfiles,
  ece: eceProfiles,
  cse: cseProfiles,
  cseds: csedsProfiles,
  csecs: csecsProfiles,
  mca: mcaProfiles,
  eee: eeeProfiles,
  ai: aiProfiles,
  me: meProfiles,
  mba: mbaProfiles,
  bsh: bshProfiles,
};

export function getFacultyProfile(deptKey: string, facultyName: string): FacultyProfile | undefined {
  return facultyProfiles[deptKey]?.[facultyName];
}
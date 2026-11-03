/**
 * Configuration for Dynamic Trending, Instagram & Events Feeds
 * 
 * College staff can update and pin items without touching code by editing a Google Sheet:
 * 1. Create a Google Sheet with tabs: "Trending" and "Events"
 * 2. Set Share -> "Anyone with the link can view"
 * 3. Paste the Spreadsheet ID below
 */

export const SHEETS_CONFIG = {
  // Set to your college Google Sheet ID (from the sheet URL: /spreadsheets/d/<ID>/edit)
  SPREADSHEET_ID: "1-3K6POxhEvBqOpwlVtO63AoLYrh72KMThsJ_uUdS_b0",

  // Tab names inside the Google Sheet
  TRENDING_TAB: "Trending",
  EVENTS_TAB: "Events",

  // Local storage cache lifetime in minutes (ensures 0ms load while syncing in background)
  CACHE_TTL_MINUTES: 5,

  // Official Instagram profile for fallback and links
  INSTAGRAM_HANDLE: "mits_mpl",
  INSTAGRAM_PROFILE_URL: "https://www.instagram.com/mits_mpl/",
};

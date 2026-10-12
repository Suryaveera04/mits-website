// Export all gallery data modules
export * from "./gallery1";
export * from "./gallery2";
export * from "./gallery3";
export * from "./gallery4";
export * from "./gallery5";
export * from "./gallery6";
export * from "./gallery7";
export * from "./campusLife";

import { gallery1Images } from "./gallery1";
import { gallery2Images } from "./gallery2";
import { gallery3Images } from "./gallery3";
import { gallery4Images } from "./gallery4";
import { gallery5Images } from "./gallery5";
import { gallery6Images } from "./gallery6";
import { gallery7Images } from "./gallery7";

export const allGalleryImages = [
  ...gallery1Images.map(url => ({ url, album: "Gallery 1" })),
  ...gallery2Images.map(url => ({ url, album: "Gallery 2" })),
  ...gallery3Images.map(url => ({ url, album: "Gallery 3" })),
  ...gallery4Images.map(url => ({ url, album: "Gallery 4" })),
  ...gallery5Images.map(url => ({ url, album: "Gallery 5" })),
  ...gallery6Images.map(url => ({ url, album: "Gallery 6" })),
  ...gallery7Images.map(url => ({ url, album: "Gallery 7" })),
];

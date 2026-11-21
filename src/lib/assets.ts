/**
 * Remote public server URL for MITS media assets (images, banners, logos, recruiters).
 * Assets are hosted remotely on the production server (https://mits.edu/),
 * allowing heavy image directories to be removed from the Git repository.
 */
export const REMOTE_ASSET_BASE = "https://mits.edu/";

/**
 * Standard BASE export for media assets across all components, pages, and data models.
 * Points strictly to https://mits.edu/
 */
export const BASE = REMOTE_ASSET_BASE;

/**
 * Resolves an asset path to its remote public URL on https://mits.edu/.
 * If already an absolute URL (e.g. https://..., data:, blob:), returns it as-is.
 */
export function getAssetUrl(path?: string): string {
  if (!path) return "";
  if (/^https?:\/\//i.test(path) || path.startsWith("data:") || path.startsWith("blob:")) {
    return path;
  }
  const clean = path.replace(/^\/+/, "");
  return `${REMOTE_ASSET_BASE}${clean}`;
}

export default getAssetUrl;

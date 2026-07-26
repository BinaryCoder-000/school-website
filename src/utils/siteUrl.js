/** Canonical site origin for SEO (no trailing slash). */
export function getSiteOrigin() {
  const raw = import.meta.env.VITE_SITE_URL;
  if (typeof raw === "string" && raw.trim()) {
    return raw.trim().replace(/\/$/, "");
  }

  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }

  return "";
}

export function getCanonicalUrl(pathname = "/") {
  const origin = getSiteOrigin();
  if (!origin) return pathname || "/";

  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (path === "/") return `${origin}/`;
  return `${origin}${path}`;
}

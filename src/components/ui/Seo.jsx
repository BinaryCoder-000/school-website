import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { school } from "../../data/school";
import { getCanonicalUrl, getSiteOrigin } from "../../utils/siteUrl";

function ensureMeta(attr, key, content) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function ensureLink(rel, href) {
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

export default function Seo({
  title,
  description = "Official website of Sharada Shishu Mandir, Alekhapada — academics, admissions, notices, and school life.",
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${school.shortName}`
      : `${school.fullName} | Official Website`;

    document.title = fullTitle;

    const origin = getSiteOrigin();
    const canonical = getCanonicalUrl(pathname);
    const ogImage = origin ? `${origin}/og-image.jpg` : "/og-image.jpg";

    ensureMeta("name", "description", description);
    ensureLink("canonical", canonical);

    ensureMeta("property", "og:type", "website");
    ensureMeta("property", "og:title", fullTitle);
    ensureMeta("property", "og:description", description);
    ensureMeta("property", "og:url", canonical);
    ensureMeta("property", "og:image", ogImage);

    ensureMeta("name", "twitter:card", "summary_large_image");
    ensureMeta("name", "twitter:title", fullTitle);
    ensureMeta("name", "twitter:description", description);
    ensureMeta("name", "twitter:image", ogImage);
  }, [title, description, pathname]);

  return null;
}

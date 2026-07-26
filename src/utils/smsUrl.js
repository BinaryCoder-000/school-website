function readConfiguredSmsUrl() {
  const raw = import.meta.env.VITE_SMS_URL;
  if (typeof raw === "string" && raw.trim()) {
    return raw.trim();
  }
  return "";
}

function isHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

let hasWarnedMissing = false;
let hasWarnedInvalid = false;

/**
 * Public SMS portal URL for the Login control.
 * - Production: requires a valid VITE_SMS_URL (no localhost fallback).
 * - Development: warns when missing/invalid; may use localhost for local SMS.
 */
export function getSmsLoginUrl() {
  const configured = readConfiguredSmsUrl();
  const isProd = import.meta.env.PROD;

  if (configured) {
    if (!isHttpUrl(configured)) {
      if (!hasWarnedInvalid && import.meta.env.DEV) {
        hasWarnedInvalid = true;
        console.warn(
          "[school-website] VITE_SMS_URL must be a valid http(s) URL. Login will be disabled until fixed."
        );
      }
      return "";
    }
    return configured;
  }

  if (isProd) {
    if (!hasWarnedMissing) {
      hasWarnedMissing = true;
      console.error(
        "[school-website] VITE_SMS_URL is not set. Login button is disabled in production."
      );
    }
    return "";
  }

  if (!hasWarnedMissing && import.meta.env.DEV) {
    hasWarnedMissing = true;
    console.warn(
      "[school-website] VITE_SMS_URL is missing. Using http://localhost:5174 for local development only. Set VITE_SMS_URL in .env."
    );
  }

  return "http://localhost:5174";
}

export function hasSmsLoginUrl() {
  return Boolean(getSmsLoginUrl());
}

/** Canonical origin. Override per environment with NEXT_PUBLIC_SITE_URL. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://texora.jp"
).replace(/\/$/, "");

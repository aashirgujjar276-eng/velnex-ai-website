/**
 * Site redirect map: { from, to }.
 * Add an entry any time a page's URL changes, so old links (search
 * results, backlinks, bookmarks) never dead-end in a 404.
 *
 * This list drives two things:
 *  1. worker.js — a real edge-level HTTP 301 redirect, served before
 *     static assets. This is what search engines and old backlinks need.
 *  2. A client-side <Navigate> fallback in main.jsx, as a safety net for
 *     any request that reaches the SPA directly (e.g. a cached old build).
 */
export const redirects = [
  // Legal pages moved from /legal/{slug} to a flat /{slug} in the site
  // restructure — keep these for as long as old links might exist.
  { from: "/legal/privacy-policy", to: "/privacy-policy" },
  { from: "/legal/terms-of-service", to: "/terms-of-service" },
  // Cookie Policy, Security, and GDPR Compliance were retired as
  // separate pages — their content now lives inside Privacy Policy.
  { from: "/legal/cookie-policy", to: "/privacy-policy" },
  { from: "/cookie-policy", to: "/privacy-policy" },
  { from: "/legal/security", to: "/privacy-policy" },
  { from: "/security", to: "/privacy-policy" },
  { from: "/legal/gdpr-compliance", to: "/privacy-policy" },
  { from: "/legal/gdpr", to: "/privacy-policy" },
  { from: "/gdpr", to: "/privacy-policy" },
  // The standalone Book a Demo page was retired — everything that used
  // to link there now points straight at Contact.
  { from: "/book-demo", to: "/contact" },
  // These pages were removed from the site structure — send any old
  // links back to the relevant listing page instead of a dead end.
  { from: "/industries/auto-repair-shops", to: "/industries" },
  { from: "/ai-software/ai-workflow-automation", to: "/ai-software" },
  { from: "/our-team", to: "/about" },
  { from: "/partners", to: "/contact" },
  { from: "/press", to: "/contact" },
];

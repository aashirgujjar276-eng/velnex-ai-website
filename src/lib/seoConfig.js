/**
 * Site-wide SEO constants.
 * Single source of truth for the domain and sitewide defaults — every
 * canonical URL, OG tag, and the sitemap generator all read from here.
 */
export const SITE_URL = "https://velnexai.com";
export const SITE_NAME = "Velnex AI";
export const DEFAULT_TITLE = "AI Automation Agency | AI Agents & Business Automation | Velnex AI";
export const DEFAULT_DESCRIPTION =
  "Velnex AI is an AI automation agency for small businesses — AI agents, chatbots, and voice AI that handle calls, bookings, and leads. Book a demo.";
export const DEFAULT_OG_IMAGE = "/og-image.png"; // 1280x720, already in /public
export const DEFAULT_LOCALE = "en_US";

// Set this once a real X/Twitter handle exists. Left blank means the
// twitter:site tag is simply omitted rather than guessed.
export const TWITTER_HANDLE = "";

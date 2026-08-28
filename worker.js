/**
 * Cloudflare Worker entry point.
 *
 * This runs BEFORE static assets are served, which is what lets us do real
 * edge-level 301 redirects — something `public/_redirects` cannot do here,
 * since that file is a Cloudflare *Pages* feature and is silently ignored
 * by a Workers Static Assets deployment (which is what this project uses,
 * per the [assets] block in wrangler.toml).
 *
 * Redirect rules are read from src/data/redirects.js — the same single
 * source of truth used by the client-side <Navigate> fallback in
 * main.jsx, so the two can never drift out of sync.
 */
import { redirects } from "./src/data/redirects.js";

const REDIRECT_MAP = Object.fromEntries(redirects.map((r) => [r.from, r.to]));

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const target = REDIRECT_MAP[url.pathname];

    if (target) {
      return Response.redirect(url.origin + target, 301);
    }

    return env.ASSETS.fetch(request);
  },
};

# Velnex AI — Website

A React + Vite + Tailwind site with 4 pages (Home, Pricing, Privacy Policy,
Terms of Service) and a floating live AI agent widget on every page.

## Run locally
```
npm install
npm run dev
```

## Build
```
npm run build
```
Output goes to the `dist/` folder — this is what gets deployed.

## Deploy to Cloudflare Pages

1. Push this project to a new GitHub repository (e.g. `velnex-ai-website`).
2. Go to https://dash.cloudflare.com → **Workers & Pages → Create → Pages → Connect to Git**.
3. Select your repository.
4. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**. You'll get a live link like `velnex-ai.pages.dev`.

## Connect velnexai.com

1. In your Cloudflare Pages project → **Custom domains → Add**.
2. Type `velnexai.com`, follow the prompts.
3. Cloudflare will give you a DNS record (usually a CNAME).
4. Add that record in Squarespace → Settings → Domains → velnexai.com → DNS Settings.
5. Wait for DNS to propagate (usually minutes, can take up to 24-48 hours).

## Notes
- The `_redirects` file in `public/` makes client-side routing (Pricing/Privacy/Terms pages)
  work correctly on Cloudflare Pages — don't remove it.
- The live agent widget points to the Streamlit URL set in `src/theme.js` (`AGENT_URL`).
  Update it there if the agent's URL ever changes.
- Replace the `[Insert launch date]` and `[Insert your country/province]` placeholders in
  the Privacy Policy and Terms of Service pages before going live.

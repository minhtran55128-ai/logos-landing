# Logos — landing page

Marketing/waitlist site for Logos, built with React, TypeScript, Tailwind CSS v4 and Vite.

## Getting started

```bash
npm install
npm run dev
```

## Waitlist form

The "Join early access" form in the join section posts to [Formspree](https://formspree.io). To enable it:

1. Create a free form at [formspree.io](https://formspree.io).
2. Copy `.env.example` to `.env.local` and set `VITE_FORMSPREE_ENDPOINT` to your form's endpoint (e.g. `https://formspree.io/f/abcdwxyz`).
3. Restart the dev server.

Until an endpoint is set, submitting the form shows a clear inline notice instead of failing silently.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production (outputs to `dist/`)
- `npm run preview` — preview the production build locally
- `npm run lint` — run Oxlint

## Deploying

`dist/` is a static build with no server-side requirements — it deploys as-is to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static host. Set `VITE_FORMSPREE_ENDPOINT` as an environment variable on the host so the waitlist form works in production.

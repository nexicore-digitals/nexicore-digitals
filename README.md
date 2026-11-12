# Nexicore Digitals

Main web experience for **Nexicore Digital Hub (Nexicore Digitals)**.

## Scripts

- `pnpm dev` - start local development server
- `pnpm build` - run TypeScript build and Vite production build
- `pnpm lint` - run oxlint checks
- `pnpm format` - format repository files with Prettier
- `pnpm format:check` - validate formatting without modifying files
- `pnpm preview` - preview production build locally

## Current experience structure

The app is a one-page premium startup presentation designed for low-friction scanning by business, technical, and investor audiences:

1. **Hero overview** - clear value proposition and primary CTA.
2. **Audience quick paths** - direct links for:
   - business leaders (`#context`)
   - technical teams (`#technology`)
   - investors (`#proof`)
3. **Business context card** - capability scope, delivery ownership, compliance posture, trust baseline, and representative outcomes.
4. **Engagement process card** - 3-step process from initial context to execution brief, plus enterprise/investor CTA tracks.
5. **Case-study proof row** - challenge, intervention, and measurable outcomes for representative engagements.
6. **Product dashboard section** - visual operating snapshot and priorities.
7. **Services and technology sections** - deeper capability and implementation rationale.
8. **Enquiry section (`#enquiry`)** - real submission form + WhatsApp business chat path.
9. **Founder section** - leadership profile and trust signals.

## Real enquiry implementation

- Form submissions are posted to **FormSubmit** via:
  - `https://formsubmit.co/info@nexicore.dev`
- First submission requires inbox activation on FormSubmit for `info@nexicore.dev`.
- Users can choose:
  - enquiry track (general / enterprise / investor / service-specific)
  - service interest
  - timeline and project brief
- WhatsApp Business fallback is available throughout the UI:
  - `https://wa.me/2348102573331`

## UX and performance notes

- Legacy 3D/WebGL and terminal-like interaction layers were removed to reduce fragility and improve accessibility.
- Hero mockup is optimized as WebP for faster LCP.
- Responsive overflow guards are in place to prevent mobile horizontal scrolling.
- Founder portrait crop is tuned for mobile so the face remains visible.

## Developer quality gates (Husky)

- A pre-commit hook is configured through Husky at [pre-commit](/home/owen/nexicore/repos/nexicore-digitals/.husky/pre-commit).
- On each commit:
  1. `lint-staged` runs Prettier on staged files.
  2. `pnpm lint` runs repository lint checks.
- If hooks are missing in a fresh clone, run `pnpm prepare`.
- PR CI checks run in [pr-checks.yml](/home/owen/nexicore/repos/nexicore-digitals/.github/workflows/pr-checks.yml) and enforce `pnpm lint` + `pnpm build` on pull requests to `main`/`master`.

## Crawl and metadata setup

- Core SEO and social meta tags are defined in [index.html](/home/owen/nexicore/repos/nexicore-digitals/index.html) (description, robots, Open Graph, Twitter).
- Crawl policy is declared in [robots.txt](/home/owen/nexicore/repos/nexicore-digitals/public/robots.txt).
- Site URL discovery is declared in [sitemap.xml](/home/owen/nexicore/repos/nexicore-digitals/public/sitemap.xml).
- AI crawler/readability context is available at [llms.txt](/home/owen/nexicore/repos/nexicore-digitals/public/llms.txt).

## Vercel deployment (recommended)

- Vercel project settings are defined in [vercel.json](/home/owen/nexicore/repos/nexicore-digitals/vercel.json):
  - install: `pnpm install --frozen-lockfile`
  - build: `pnpm build`
  - output: `dist`
- Import the repository in Vercel and deploy from the default branch.
- Attach your custom domain in Vercel Project Settings → Domains and keep DNS records exactly as Vercel provides.

## GitHub Pages deployment

A GitHub Actions workflow is included at:

- `.github/workflows/deploy-pages.yml`

What it does:

1. Installs dependencies with pnpm
2. Builds the app with a dynamic Vite base path:
   - `/` when a custom domain is defined in `public/CNAME`
   - `/` for `owner.github.io` repos
   - `/<repo-name>/` for project pages without a custom domain
3. Uploads `dist/` as Pages artifact
4. Deploys to GitHub Pages
5. Uses pnpm version from `packageManager` in [package.json](/home/owen/nexicore/repos/nexicore-digitals/package.json) to avoid CI version mismatch

To use it:

1. In GitHub repository settings, set **Pages source** to **GitHub Actions**
2. Push to `main` or run the workflow manually from the Actions tab
3. For custom domains, keep [CNAME](/home/owen/nexicore/repos/nexicore-digitals/public/CNAME) committed with your exact domain

## Source references

- Strategic brief PDF: `docs/Nexicore Digital Hub - Company Pitch, 3D App Architecture & Service Matrix - Google Docs.pdf`
- Runtime brand assets: `public/brand/`

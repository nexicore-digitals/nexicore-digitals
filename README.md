# Nexicore Digitals Website

This repository powers the public website for **Nexicore Digital Hub (Nexicore Digitals)**.

## What this site is for (business view)

The website is designed to help business, technical, and investor audiences quickly understand:

- what Nexicore builds
- how engagement works
- what outcomes can be expected
- how to start a real enquiry

It is intentionally structured for fast scanning on mobile and desktop, with visual-first sections before deep text.

## How visitors can engage

Visitors can use either route:

1. **Structured enquiry form** (project, enterprise, investor, or service-specific)
2. **Direct WhatsApp Business chat** for quick alignment

Primary contact destination:

- `info@nexicore.dev`
- `+234 810 257 3331`

## Experience highlights

- **Visual-first section flow** across story, dashboard, services, technology, proof, and enquiry.
- **Progressive image loading** for section visuals:
  - lightweight blurred preview first
  - smooth transition to full image after load
  - responsive `srcset` delivery for smaller screens and slow networks
- **Staged section rendering** so above-the-fold story/dashboard render first, then deeper sections mount shortly after for smoother startup on low-power devices.
- **Local technology logo assets** in `public/brand/tech-icons` so stack badges stay visual without shipping a large icon runtime bundle.
- **Trust-first messaging** with clear proof blocks and verification signals.

## Trust and verification content

The site includes verification-oriented content such as:

- CAC registration references
- Corporate status and readiness signals
- Founder profile and focus areas

## Technical quick start

### Scripts

- `pnpm dev` – run local development server
- `pnpm build` – run TypeScript + Vite production build
- `pnpm lint` – run oxlint checks
- `pnpm format` – format files with Prettier
- `pnpm format:check` – validate formatting only
- `pnpm preview` – preview production build

### Quality checks

- Husky pre-commit hook runs formatting and lint checks.
- Pull request checks validate:
  - `pnpm lint`
  - `pnpm build`

## Deployment

### Recommended: Vercel

Configured through `vercel.json`:

- install: `pnpm install --frozen-lockfile`
- build: `pnpm build`
- output: `dist`

### Optional: GitHub Pages

Workflow file: `.github/workflows/deploy-pages.yml`

Includes dynamic base-path handling and uses pnpm version from `package.json`.

## Project structure (high level)

- `src/App.tsx` – top-level layout and orchestration
- `src/components/landing-sections.tsx` – section-level presentation components
- `src/components/ProgressiveImage.tsx` – progressive image loading component
- `src/components/SectionVisual.tsx` – reusable section visual wrapper
- `src/landing/constants.ts` – UI/config constants and shared helpers
- `src/content.ts` – primary business/marketing content blocks
- `public/brand/` – runtime brand assets

## Source references

- Strategic brief PDF:
  - `docs/Nexicore Digital Hub - Company Pitch, 3D App Architecture & Service Matrix - Google Docs.pdf`

# The Court Room CLAT Website PRD

## Original Problem Statement
The repo already had a homepage. The task was to upgrade and polish it, arrange everything properly, and make it mobile-compatible so even a 15-year-old student browsing on an old 3G phone gets a strong experience.

Follow-up direction: expand the site into modern CLAT coaching content hubs that convert visitors into leads, rank on Google, answer AI search engines, and build trust with students/parents. User chose to keep the current TanStack/Vite repo, build an MVP of all main hubs with sample static content, and leave CMS/admin for later.

## Architecture Decisions
- Kept current TanStack Start/Vite architecture instead of migrating to Next.js.
- Added static content source in `src/lib/hub-data.ts` for initial MVP; CMS/admin can replace this later.
- Added reusable hub UI in `src/components/marketing/HubPages.tsx` for listing/detail/utility pages.
- Preserved mobile-first design with sticky bottom CTAs, large tap targets, lightweight WebP hero, and structured detail pages.
- Added per-page metadata through route `head()` and JSON-LD blocks on detail pages.

## Implemented
- Polished homepage with premium lightweight layout, optimized mobile UX, readable typography, CTA hierarchy, and WebP hero image.
- Added content hubs:
  - `/blog` and `/blog/$slug`
  - `/courses` and `/courses/$slug`
  - `/faculties` and `/faculties/$slug`
  - `/branches` and `/branches/$slug`
  - `/toppers` and `/toppers/$slug`
  - `/testimonials` and `/testimonials/$slug`
  - `/results`, `/events`, `/scholarships`, `/resources`, `/faqs`
- Added hub features: search UI, filters, cards, trending/sidebar, sticky mobile CTA bar, breadcrumbs, TOC, share/copy/bookmark controls, FAQs, key facts, summaries, internal CTA blocks, JSON-LD.
- Added clean fallback page for unknown dynamic hub slugs.
- Added supervisor compatibility wrapper and minimal backend health endpoint for local environment stability.
- Added premium admin panel frontend:
  - `/admin` redirect-style landing to `/admin/dashboard`
  - `/admin/login` and `/admin/forgot-password` UI-only authentication screens
  - Collapsible desktop sidebar, mobile sidebar, global command palette, breadcrumbs, dark mode, analytics dashboard
  - CRUD module routes for CMS, Academics, Results, Organization, Marketing, SEO, Users, and Settings
  - Detailed Blogs CRUD screen with searchable table, filters, bulk actions, sorting controls, pagination, responsive cards, state templates, confirmation dialog, editor drawer, sticky save bar, auto-save indicator, validation, live preview, SEO preview, media picker, tags, and rich text placeholder

## Verification
- `yarn build` passes.
- JavaScript/TypeScript lint passes.
- Browser smoke tests passed for homepage, blog listing/detail, courses mobile listing, and sticky bottom bar.
- Testing agent verified all requested hub routes and mobile layouts; no MOCKED APIs or broken flows in tested scope.
- Admin panel build/lint passed. Browser checks verified dashboard, command palette, dark mode, blog create drawer from page/topbar CTAs, confirmation dialog, and mobile sidebar.

## Known Notes
- Public preview edge still returned 403 during this session; user chose to continue building and handle preview later.
- Content is static sample content, not connected to a CMS/admin yet.
- Admin panel is UI-only and uses sample/static data; backend auth and CRUD APIs are not connected yet.

## Prioritized Backlog
### P0
- Resolve public preview edge 403 if full external preview remains inaccessible.
- Add real enquiry forms and lead capture flow.
- Replace sample hub content with verified institute content.
- Connect admin auth, role permissions, and CRUD modules to backend APIs.

### P1
- Add sitemap, robots, canonical engine, and richer reusable schema engine.
- Add Google Map embeds and real geo coordinates for branch pages.
- Add real faculty/topper photos, videos, reviews, and gallery sections.

### P2
- Add CMS/admin for managing blogs, courses, faculties, branches, toppers, testimonials, events, and FAQs.
- Add reading progress, font-size controls, audio reader, bookmarks, recently viewed, and comments.
- Add analytics events for lead CTAs and content engagement.
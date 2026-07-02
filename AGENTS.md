<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Cursor Cloud specific instructions

- **Product:** A single TanStack Start (Vite) marketing/content site for "TCR" (The Court Room), a CLAT/AILET law-coaching brand. `backend/server.py` is only a minimal FastAPI health stub for supervisor/emergent compatibility — it is not part of the app runtime and does not need to run.
- **Package manager is Bun** (`bun.lock`, `bunfig.toml`), not npm/yarn — even though `frontend/package.json` mentions `yarn dev`. Standard scripts are in the root `package.json`: `bun run dev`, `bun run build`, `bun run lint`, `bun run format`.
- **Dev server runs on port 8080** (fixed by `@lovable.dev/vite-tanstack-config` sandbox detection), not 3000. Start it with `bun run dev`.
- **`bunfig.toml` has a 24h supply-chain guard** (`minimumReleaseAge`): `bun install` silently skips package versions published less than a day ago unless they are in `minimumReleaseAgeExcludes`. Keep this in mind when adding brand-new dependency versions.
- **Lint caveat:** `bun run lint` reports hundreds of *pre-existing* `prettier/prettier` formatting errors across the repo (not build-breaking). When you edit a file, run `bunx prettier --write <file>` on just that file to keep your own changes clean rather than reformatting the whole repo.
- **Design system:** Theme tokens live in `src/styles.css` (all colors in `oklch`); web fonts are loaded in `src/routes/__root.tsx`. Brand = Midnight Navy `#081E45` (`--primary`), Heritage Gold `#C58A47` (`--gold`, use sparingly), Ivory Paper `#FAF8F4` (`--background`). Headings use Cormorant Garamond (`font-serif`), body uses Inter (`font-sans`), numerals use Manrope (`font-numeric`). Use `TCR` as the hero brand everywhere with the signature line "A Brand by NLU Alumnus"; reserve "The Court Room" for formal/legal contexts (e.g. footer copyright).
- **Routing:** file-based (`src/routes/**`); `routeTree.gen.ts` is auto-generated — do not hand-edit it.

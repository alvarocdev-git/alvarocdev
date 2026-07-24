# alvarocdev.com

> Entry point for any AI/agent working on this project. It follows Alvaro's standards system (the `alvaro` repo, alvarocdev.com). Keep this file updated: persist here any important context that comes up during work sessions.
> This repo is public — no secrets, credentials, or sensitive infrastructure details in this file.

## What this project is

Alvaro Carrizales' personal website and technical portfolio — the "cara técnica" of the Nexo ecosystem — live at https://alvarocdev.com. A static, trilingual (ES/EN/PT) one-page site: hero, about, the **Nexo ecosystem** (his own developments — 6 open-source tools), client work (currently hidden, carousel scaffold ready), and contact. Status: **production** since 2026-07-15; rebuilt as the ecosystem portfolio in 2026-07-24.

This is the special case of the brand system: it is the *destination* of every "powered by alvarocdev.com" footer, so it does not carry the branding footer itself.

**Brand framing (M6):** the personal brand (dark, green accent `#4ade80`) is the frame/portfolio; the **Nexo ecosystem is shown inside it with its own violet accent** (`--eco` = `#a78bfa`/`#8b5cf6`) and its violet isotypes. Green stays the personal signal; violet marks Nexo as a system of its own — the site is not tinted violet globally. Both share the same system-font stack and token architecture (see `templates/nexo-brand/BRAND.md`). The 6 tool marks + the `nexo` mark live in `public/ecosystem/` (copied from `nexo-brand/marks/`).

## Stack

- **Astro 5** (see `package-lock.json` for the exact version), static output, no client-side JavaScript by default.
- No database, no external services, no cookies, no trackers. System fonts only — zero external requests.
- Hosting: Hostinger shared hosting (LiteSpeed), deployed via GitHub Actions + FTP.

### Optional env (build-time, `PUBLIC_*` only)

Everything is OFF by default; with nothing set the site ships zero JS. Template in `.env.example` (local `.env` is gitignored).

- `PUBLIC_NEXO_BEACON_ENABLED` (default `false`) — opt-in cookieless page-view beacon for the nexotools `/admin` dashboard (M5). When `true`, `Base.astro` emits a single inline `navigator.sendBeacon('<hub>/beacon', {origin:'alvarocdev', path, event:'pageview'})` on pageload. It **respects Do Not Track** and sends no cookies/IP/UA. If the visitor arrives from an ecosystem subdomain (`nexo*.alvarocdev.com`), the referring host is included as `ref` (feeds the "which tool did they come from" admin view). Payload contract: nexotools `inbox/brand-unification/M5-spec.md` (AC-BEACON-8). When disabled, no `<script>` is emitted at all.
- `PUBLIC_NEXO_HUB_URL` (default unset; example `https://nexotools.alvarocdev.com`) — base URL the beacon POSTs to. Required for the beacon to render.

## How to run it

Verified commands (Node 20):

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:4321
npm run build    # static build into dist/
npm run preview  # serve dist/ locally
```

There are no tests yet (see Accumulated context).

## Architecture

- `src/i18n/translations.ts` — **all site content** for the 3 languages, plus contact email, social links and the Nexo ecosystem entry points (`site.nexoHub`, `site.nexoGithubOrg`). The ecosystem cards live in `products.items` (typed `EcosystemTool`: `key`, `name`, `description`, `tags`, `status`, `demo?`); the client carousel data lives in `work.clients` (typed `ClientCase`, empty until real clients are loaded). To change any text, edit only this file.
- `public/ecosystem/` — the 7 Nexo isotypes (`nexo` + 6 tools), copied verbatim from `templates/nexo-brand/marks/`. Regenerate there and re-copy if the brand marks change (don't hand-edit).
- `src/components/Home.astro` — the whole page markup + scoped styles. One component, rendered once per language.
- `src/layouts/Base.astro` — `<head>`, SEO/hreflang, global styles (colors as CSS variables in `:root`).
- `src/pages/` — one page per locale: `/` (es, default), `/en/`, `/pt/`. Locale routing configured in `astro.config.mjs` (`prefixDefaultLocale: false`).

## Production & deploy

- Live at https://alvarocdev.com (`/en/`, `/pt/`). DNS + hosting on Hostinger.
- **Every push to `main` deploys automatically** via `.github/workflows/deploy.yml` (build + FTP upload of `dist/`). Credentials live in GitHub Actions secrets (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`).
- The FTP account used for deploys is a dedicated one, chrooted directly to the site's docroot — `server-dir` is `./`. Do not "fix" this to a path; the chroot is intentional (see Decisions).
- **Never enable `dangerous-clean-slate`** in the FTP action: the same docroot also contains a symlink to another of Alvaro's apps. The action must only sync its own files.
- Hostinger's FTPS certificate does not match the site's domain (shared-server cert). The deploy action tolerates this; strict TLS clients (e.g. plain `curl`) need loose verification against this server.

## Project conventions

- Content changes never touch markup: text lives in `translations.ts`, structure in `Home.astro`.
- Any new user-facing string must be added in all three languages at once.
- Feature flags as plain consts in the component (see `showClientWork` in `Home.astro`).
- Site principles: no cookies, no trackers, no external requests, no client-side JS unless strictly necessary. The site itself is a demo of how Alvaro works.
- Commit messages in Spanish (project predates the standards system; language convention for commits TBD).

## Important decisions

- **2026-07-15** — Astro static instead of Laravel: the site is content-only; Laravel is reserved for the Nexo products. Performance and zero maintenance win.
- **2026-07-15** — Dark minimal dev design, system fonts, single accent color. "Hecho con Astro" credit removed from the footer by Alvaro's preference; footer keeps only "Sin cookies, sin trackers".
- **2026-07-15** — Deploys switched to a dedicated FTP account chrooted to the docroot after the main hosting FTP account turned out to land outside it (cost hours of debugging). Binary rule: the deploy account cannot write anywhere else.
- **2026-07-15** — Client-work section built but hidden behind `showClientWork = false` until real case studies (with client permission) are ready.
- **2026-07-24** — Products section reframed as **the Nexo ecosystem** (own real developments): the 6 tools from nexotools' `config/nexo-ecosystem.php`, with truthful `live`/`soon` status (no "WIP"), violet isotypes, a live-demo link only for live tools, and a single "code" link to the GitHub org `nexo-tools` (no guessed per-repo URLs that 404). Green stays the personal accent; violet is scoped to this section only.
- **2026-07-24** — Client-work scaffold upgraded to a **horizontal carousel** (scroll-snap, each card links straight to the client's public site) plus **one** optional `<details>` panel for case studies (native, no JS). Still `showClientWork = false`; renders placeholder cards while `work.clients` is empty. No invented clients.
- **2026-07-24** — Beacon emitter added, env-gated and OFF by default (see Optional env). Personal-brand green vs ecosystem violet split is the M6 recommendation from BRAND.md, applied here.
- **2026-07-19** — AGENTS.md created (standards-system initial validation). Repo is public → project docs in English per the standards; `README.md` predates this and is still in Spanish (pending decision).

## Accumulated context

<!-- Work-session notes: gotchas, non-obvious behavior, known pendings. Dated, newest first. -->

- **2026-07-19** — No analytics at all: the site ships zero JS, so `?utm_source=<project>&utm_medium=powered-by` visits from the brand-circle footers are not being captured anywhere (only Hostinger raw access logs). Reported as debt to the standards system with a proposal.
- **2026-07-19** — No tests exist. For a static content site the build itself catches most breakage, but the standards require necessary tests; at minimum a build + link/i18n consistency check could run in CI before deploy.
- **2026-07-24** — The beacon is defined and wired here, but the actual emitter integration (turning `PUBLIC_NEXO_BEACON_ENABLED` on in production) is owner-gated / M6, pending the nexotools `/beacon` ingest endpoint being live. Off until then.
- **2026-07-15** — Pending: fill `work.clients` in `translations.ts` (per client: `name`, `tagline`, `url`, and optionally `problem`/`solution`/`outcome`, with each client's permission), then flip `showClientWork` to `true` in `Home.astro`. The carousel + case-study panel render automatically from that data.
- **2026-07-15** — The old default `default.php` page was deleted manually from the docroot; if the site ever shows a Hostinger placeholder again, look for a stray `default.php`/`index.php` shadowing `index.html`.

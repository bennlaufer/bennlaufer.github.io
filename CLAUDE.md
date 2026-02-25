# Portfolio Site — CLAUDE.md

## Project Overview

Personal portfolio site for Ben Laufer. Astro 5 + Tailwind CSS, statically generated, deployed to GitHub Pages.

- **Live**: https://bennlaufer.github.io
- **Repo**: `bennlaufer/bennlaufer.github.io`

## Quick Start

```bash
npm run dev      # Dev server at localhost:4321
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

Requires `.env` with `GITHUB_TOKEN=<PAT>` for the GitHub repos loader.

## Visual Development with Playwright MCP

You have access to Playwright MCP tools for visual feedback while building. Use them:

1. **Start the dev server** — Run `npm run dev` in the background via Bash
2. **Navigate** — Use `browser_navigate` to go to `http://localhost:4321` (or any route like `/projects`, `/resume`)
3. **Screenshot** — Use `browser_take_screenshot` to see the current state of the page after changes
4. **Interact** — Use `browser_click`, `browser_hover`, `browser_fill_form` to test interactive elements (mobile menu, links, hover effects)
5. **Inspect DOM** — Use `browser_snapshot` to get an accessibility tree / DOM snapshot
6. **Resize** — Use `browser_resize` to test responsive breakpoints (e.g., 375x812 for mobile, 768x1024 for tablet, 1440x900 for desktop)

**Workflow**: After editing any component or page, take a screenshot to verify the visual result before moving on. This catches layout issues, broken styles, and animation problems immediately.

## Architecture

```
src/
├── components/
│   ├── Navbar.astro            # Top navigation bar — site title + 5 page links (desktop) / hamburger menu (mobile)
│   ├── Footer.astro            # Site-wide footer — social links (Email, LinkedIn, GitHub) + copyright
│   └── ProjectCard.astro       # Glassmorphism card — title, desc, tags, GitHub stats
├── content/
│   └── project-overrides/      # Required empty dir for github-repos-astro-loader
├── data/
│   └── projects.json           # 8 projects — source of truth for project metadata
├── layouts/
│   └── BaseLayout.astro        # Shared layout — Navbar + centered main + Footer, View Transitions, SEO meta
├── pages/
│   ├── index.astro             # Home — landing page with hero, featured projects, skills
│   ├── about.astro             # About — bio, education, skills & interests
│   ├── contact.astro           # Contact — email, LinkedIn, GitHub cards
│   ├── resume.astro            # Resume — PDF iframe (desktop) / download (mobile)
│   └── projects/
│       ├── index.astro         # Projects index — all projects grouped by category with filter links
│       └── [category].astro    # Dynamic route — projects filtered by category with filter links
├── content.config.ts           # Two collections: githubRepos (API) + projects (JSON)
└── env.d.ts                    # Astro client types
```

## Data Flow

Projects are defined in `src/data/projects.json` with metadata (title, description, category, tags, featured, displayOrder). At build time, the `github-repos-astro-loader` fetches live repo data (stars, forks, language) from GitHub. Pages merge these two sources by matching `repoName` to the GitHub collection, enriching each project with live stats.

```
projects.json ──→ projects collection ──┐
                                        ├──→ merged data ──→ ProjectCard
GitHub API ──→ githubRepos collection ──┘
```

## Design System

- **Theme**: Dark only — `slate-900`/`950` backgrounds, white/gray text
- **Accent**: Blue `#3b82f6` → Purple `#8b5cf6` gradient (used in hover borders, active nav links, CTAs)
- **Cards**: Glassmorphism (`bg-white/5 backdrop-blur-sm`) with hover scale + glow
- **Animations**: `fade-in`, `fade-in-up`, `slide-in` with staggered delays (defined in tailwind.config.mjs)
- **Responsive**: Mobile-first. 1 col → 2 cols (md) → 3 cols (lg) grid

## Key Conventions

- Tailwind `darkMode: 'class'` — `<html>` always has `class="dark"`
- Top navbar layout: fixed top navbar with 5 page links (Home, Resume, Projects, About, Contact)
- Mobile hamburger menu uses vanilla JS, re-initialized on `astro:page-load` for View Transitions
- No client-side framework (React, Vue, etc.) — all components are Astro (server-rendered)
- SEO meta (canonical, OG, Twitter) set in BaseLayout via `Astro.url`
- All pages use `<BaseLayout title="...">` wrapper

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`):
- Triggers on push to `main` or manual dispatch
- Node 20 + npm ci + npm run build
- `GITHUB_TOKEN` injected from `secrets.GH_REPOS_TOKEN`
- Uploads `dist/` to GitHub Pages

## Adding a New Project

1. Add entry to `src/data/projects.json` with all required fields
2. Create empty file in `src/content/project-overrides/` if needed by loader
3. Ensure the `repoName` matches the exact GitHub repo name
4. Set `featured: true` and low `displayOrder` to show on homepage
5. Assign one of: `data-science-ml`, `statistical-research`, `software-tools`

## Gotchas

- The `.env` file is gitignored — it must exist locally with a valid `GITHUB_TOKEN` for builds to fetch GitHub data
- `github-repos-astro-loader` requires the `src/content/project-overrides/` directory to exist even if empty
- The resume PDF is at `public/resume.pdf`
- No light mode exists — all styling assumes dark background

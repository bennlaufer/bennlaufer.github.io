# Portfolio Site — Product Requirements Document

## 1. Purpose

A personal portfolio website for Ben Laufer that showcases data science, machine learning, statistical research, and software development projects. The site serves as a professional presence for potential employers, collaborators, and peers.

## 2. Target Audience

- Hiring managers and recruiters in data science / ML / software engineering
- Technical collaborators evaluating project quality
- Professional peers in the data science and AI community

## 3. Core Pages

### 3.1 Home (`/`)

- **Hero section**: Name, tagline ("Data Science | AI Agent Development"), short bio, social links (GitHub, LinkedIn, email)
- **Featured projects**: 3 highlighted projects displayed as interactive cards with live GitHub stats
- **Contact section**: Email, GitHub, and LinkedIn buttons

### 3.2 Projects (`/projects`)

- All 8 projects displayed in 3 categorized sections:
  - **Data Science & Machine Learning** (4 projects)
  - **Statistical Analysis & Research** (3 projects)
  - **Software & Developer Tools** (1 project)
- Each project card shows: title, description, tags, GitHub stars/forks/language
- Cards link to the GitHub repository
- Projects sorted by `displayOrder` within each category

### 3.3 Resume (`/resume`)

- Embedded PDF viewer (iframe) on desktop/tablet
- Fallback message + download button on mobile
- Always-visible download button

## 4. Project Data

### 4.1 Current Projects

| # | Title | Category | Featured |
|---|-------|----------|----------|
| 1 | Text Summarization with BART | Data Science & ML | Yes |
| 2 | Named Entity Recognition with Transformers | Data Science & ML | Yes |
| 3 | Metric Learning Image Search | Data Science & ML | Yes |
| 4 | Sentiment Analysis Algorithm | Data Science & ML | No |
| 5 | Body Composition & Anthropometric Analysis | Statistical Research | No |
| 6 | SARS-CoV-2 Seroprevalence Analysis | Statistical Research | No |
| 7 | tidyWorldCupR | Statistical Research | No |
| 8 | Claude MCP Extension | Software Tools | No |

### 4.2 Data Sources

- **Static metadata**: `src/data/projects.json` — title, description, category, tags, featured flag, display order
- **Live GitHub stats**: Fetched at build time via `github-repos-astro-loader` — stars, forks, primary language

## 5. Design Requirements

### 5.1 Visual Identity

- **Dark theme only** — slate-900/950 background, no light mode
- **Accent gradient**: Blue (`#3b82f6`) to Purple (`#8b5cf6`)
- **Typography**: System font stack, white primary text, gray secondary
- **Cards**: Glassmorphism effect (semi-transparent white background + backdrop blur)

### 5.2 Interactions

- Card hover: subtle scale (1.02) + accent border glow + shadow
- Page entrance animations: staggered fade-in-up (0.1s, 0.2s, 0.3s delays)
- View Transitions: smooth cross-page navigation via Astro View Transitions API
- Mobile: hamburger menu toggle

### 5.3 Responsive Breakpoints

- **Mobile** (<640px): Single column, hamburger nav, no PDF iframe
- **Tablet** (640-1023px): 2-column project grid
- **Desktop** (1024px+): 3-column project grid, full nav, PDF iframe

## 6. Technical Requirements

### 6.1 Stack

- **Framework**: Astro 5 (static output)
- **Styling**: Tailwind CSS 3 with custom config
- **TypeScript**: Strict mode
- **No client-side framework** — Astro components only (server-rendered)

### 6.2 Performance

- Static pre-rendered HTML (no SSR at runtime)
- No JavaScript frameworks shipped to client (only vanilla JS for mobile menu)
- Optimized assets via Astro build pipeline

### 6.3 SEO

- Canonical URLs via `Astro.url`
- Open Graph and Twitter Card meta tags
- Semantic HTML structure
- Descriptive page titles

### 6.4 Deployment

- **Host**: GitHub Pages
- **CI/CD**: GitHub Actions on push to `main`
- **Build**: Node 20, npm ci, npm run build
- **Secrets**: `GH_REPOS_TOKEN` for GitHub API access at build time

## 7. Current State & Known Limitations

- No individual project detail pages (cards link directly to GitHub)
- No light mode toggle
- No contact form (external links only)
- No blog or writing section
- No analytics integration
- GitHub stats are build-time only (not live-updated)

## 8. Future Considerations

Potential enhancements (not currently scoped):

- Individual project detail pages with READMEs or write-ups
- Light/dark mode toggle
- Blog or writing section
- Contact form with serverless backend
- Analytics (Plausible, Fathom, or similar)
- Search/filter on projects page
- Project screenshots or demo GIFs
- Lighthouse score optimization tracking

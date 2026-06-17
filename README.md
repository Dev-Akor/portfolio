# AkorSolomon.dev

Personal portfolio, blog, and business profile for **Solomon Akor** — Full Stack Developer and co-founder of [Kira Scales Limited](https://kirascales.com).

## Live Site

[solomonakor.dev](https://solomonakor.dev)

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Contentlayer2 | MDX content management |
| MDX | Rich markdown with React components |
| next-themes | Dark/light mode |
| Vercel | Deployment & hosting |

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Navbar, Footer, ThemeProvider
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── blog/               # Blog index + [slug] + category + tag pages
│   ├── projects/           # Projects index + [slug] pages
│   ├── kira/               # Kira Scales business page
│   ├── contact/            # Contact page
│   ├── api/contact/        # Contact form API route
│   ├── feed.xml/           # RSS feed
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── layout/             # Navbar, Footer, ThemeProvider, ThemeToggle
│   ├── home/               # Hero, AboutSummary, Skills, FeaturedProjects, LatestArticles
│   ├── blog/               # BlogCard, BlogSearch, TableOfContents, ShareButtons
│   ├── contact/            # ContactForm
│   └── Analytics.tsx       # GA4 + Microsoft Clarity
├── content/
│   ├── blog/               # MDX blog posts
│   └── projects/           # MDX project pages
├── lib/
│   ├── utils.ts            # Utility functions + siteConfig
│   └── metadata.ts         # SEO metadata helper
├── contentlayer.config.ts  # Contentlayer schema
├── next.config.js          # Next.js config (with Contentlayer)
├── tailwind.config.ts      # Tailwind config with typography plugin
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm / pnpm / yarn

### Installation

```bash
git clone https://github.com/solomonakor/portfolio.git
cd portfolio
npm install
```

### Environment Variables

Copy the example and fill in your values:

```bash
cp .env.local.example .env.local
```

Key variables:
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics 4 ID
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — Google Search Console
- `NEXT_PUBLIC_CLARITY_ID` — Microsoft Clarity
- `RESEND_API_KEY` — For contact form email sending
- `CONTACT_EMAIL` — Email to receive contact form submissions

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

## Content Management

### Adding a Blog Post

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
description: "A brief description for SEO and previews."
date: 2024-06-01
category: Tech          # Tech | Business | Scales
tags: ["Next.js", "React"]
author: Solomon Akor
featured: false         # Shows in featured section on home page
---

Your MDX content here...
```

### Adding a Project

Create a new `.mdx` file in `content/projects/`:

```mdx
---
title: Project Name
description: Short description.
date: 2024-06-01
technologies: ["Next.js", "TypeScript", "Tailwind CSS"]
githubUrl: https://github.com/you/project
liveUrl: https://project.com
status: active          # active | completed | archived
featured: false
---

Project details in MDX...
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Configure custom domain: `solomonakor.dev`

Vercel auto-detects Next.js — no additional configuration needed.

### Manual Build

```bash
npm run build
npm start
```

## Performance

The site targets:
- Lighthouse score 90+
- Core Web Vitals: all green
- Static generation for all content pages
- Edge-cached via Vercel CDN

## SEO Features

- Dynamic metadata per page
- Open Graph + Twitter Card tags
- JSON-LD structured data (Article, CreativeWork schemas)
- Auto-generated sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- RSS feed at `/feed.xml`
- Canonical URLs on all pages

## Contact Form

The contact form at `/contact` validates client-side (Zod + React Hook Form) and server-side (API route). To enable email delivery:

1. Sign up for [Resend](https://resend.com) (free tier available)
2. Add `RESEND_API_KEY` to environment variables
3. Uncomment the Resend code in `app/api/contact/route.ts`

## License

MIT — use freely for personal and commercial projects.

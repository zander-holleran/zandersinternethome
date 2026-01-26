# Project Context for Claude

## Overview
Personal blog site using **11ty (Eleventy)** with tag-based article filtering and themed views.

## Tech Stack
- 11ty v3.1.2 (static site generator)
- Nunjucks templates
- Pure CSS (no frameworks)
- GitHub Pages deployment via Actions

## Key Architecture Decisions

### Tag-Based Filtering
- Articles use tags in frontmatter (`mind`, `body`, or both)
- 11ty auto-creates collections for each tag
- `/mind/` and `/body/` pages filter by tag

### Theming System
- **Base theme**: Dark (#0b0b0b), used for /all/, /about/, article pages
- **Mind theme**: Parallax background (Garden of Earthly Delights painting), serif font
- **Body theme**: Parallax background (Patagonia glacier photo), sans-serif
- CSS custom properties define each theme in `src/assets/css/themes.css`

### Home Page
- Ambient blurred background effect fills viewport
- Centered hand-drawn sketch with clickable zones
- Links to: /mind/, /body/, /about/, /latest/, /all/

## File Structure
```
src/
├── index.html          # Home page with ambient bg
├── all.njk             # All articles list
├── mind.njk            # Mind-tagged articles (mind theme)
├── body.njk            # Body-tagged articles (body theme)
├── about.njk           # Static about page
├── latest.njk          # Redirect to newest article
├── articles/
│   ├── articles.json   # Default layout/tags for articles
│   └── *.md            # Article files
├── _includes/
│   ├── layouts/
│   │   ├── base.njk    # HTML shell
│   │   ├── list.njk    # Article list pages
│   │   └── article.njk # Single article view
│   └── partials/
│       └── article-card.njk
└── assets/
    ├── css/themes.css
    └── images/         # Background images go here
```

## Article Format
```markdown
---
title: "Title"
date: 2026-01-26
tags:
  - mind           # and/or body
excerpt: "Card description"
thumbnail: /assets/images/thumb.jpg  # optional
---

Content with {% youtube "videoId" %} shortcode support
```

## Commands
- `npm run dev` - Local dev server at localhost:8080
- `npm run build` - Build to _site/

## Outstanding Items
1. User needs to add background images:
   - `src/assets/images/garden-of-earthly-delights.jpg`
   - `src/assets/images/patagonia-torre.jpg`
2. Enable GitHub Pages (Settings > Pages > Source: GitHub Actions)
3. Push to deploy

## Full Plan
See `/Users/zanderholleran/.claude/plans/abstract-giggling-porcupine.md` for detailed design decisions.

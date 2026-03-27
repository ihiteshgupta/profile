# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

Personal portfolio website with 3D visualization using Three.js. Built with Next.js 16 and React Three Fiber.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack, `output: "export"`)
- **Runtime**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3 + shadcn/ui (New York style, slate base)
- **3D**: Three.js via React Three Fiber and Drei
- **Animations**: Framer Motion + CSS keyframe animations (globals.css) + `tw-animate-css`
- **Theming**: next-themes (dark mode default)
- **Analytics**: Vercel Analytics
- **Font**: Inter via `next/font/google`

## Development Commands

```bash
# Development (with Turbopack)
npm run dev

# Build
npm run build

# Production server
npm start

# Static export
npm run build:static

# Linting
npm run lint
```

## Project Structure

```
profile/
├── app/
│   ├── layout.tsx        # Root layout: Inter font, ThemeProvider, Analytics
│   ├── page.tsx          # Single-page portfolio (all sections inline)
│   └── globals.css       # Custom CSS classes, design tokens, keyframe animations
├── components/
│   ├── three-background.tsx  # R3F canvas (MovingStars, CosmicNebula, ProfileGlow) — built, not currently mounted in page
│   ├── floating-nav.tsx      # Scroll-activated bottom nav with Framer Motion — built, not currently mounted in page
│   ├── scroll-progress.tsx   # Scroll progress indicator
│   ├── theme-provider.tsx    # next-themes wrapper
│   └── ui/               # shadcn/ui primitives
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── tabs.tsx
│       └── theme-toggle.tsx
├── hooks/
│   └── use-mouse-position.ts # Normalized [-1, 1] mouse coords for 3D scene
├── lib/
│   └── utils.ts          # cn() helper: clsx + tailwind-merge
├── public/               # Static assets (favicon, etc.)
├── components.json       # shadcn/ui config
├── tailwind.config.ts    # Custom colors: cosmic.blue, cosmic.purple + CSS variable tokens
├── next.config.ts        # output: "export", images.unoptimized: true
└── tsconfig.json
```

## Key Dependencies

### 3D Rendering
- `three` - Three.js core
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Stars, Float, and other helpers

### UI Components
- `shadcn/ui` (New York style) — component scaffolding via `components.json`
- Radix UI primitives (`@radix-ui/react-slot`, `@radix-ui/react-tabs`)
- `class-variance-authority` - Component variant definitions
- `lucide-react` - Icons
- `clsx` + `tailwind-merge` — combined in `lib/utils.ts` as `cn()`

### Animations
- `framer-motion` - Used in FloatingNav for spring/slide animations
- `tailwindcss-animate` + `tw-animate-css` - CSS animation utilities

## Architecture Patterns

### Path Aliases
All imports use `@/` aliases configured in `tsconfig.json`:
- `@/components` → `./components`
- `@/components/ui` → `./components/ui`
- `@/lib` → `./lib`
- `@/hooks` → `./hooks`

### Client Components
Every component that uses browser APIs, mouse events, or animation must declare `"use client"` at the top. The root layout is a Server Component; `page.tsx` is a Client Component.

### Hydration Guard
`page.tsx` uses a `mounted` state guard to prevent SSR/hydration mismatch:
```tsx
const [mounted, setMounted] = useState(false)
useEffect(() => setMounted(true), [])
if (!mounted) return null
```
Apply this pattern to any new page-level Client Components that depend on browser state.

### Custom CSS Class System
Rather than composing long Tailwind strings inline, shared visual patterns are defined as named classes in `app/globals.css`:
- `.card-dark` / `.card-glow-amber` / `.card-glow-blue` — card styles with hover effects
- `.pill` / `.pill-highlight` — skill/tag chips
- `.status-live` / `.status-soon` — animated status badges
- `.section-label` — small uppercase section headers
- `.gradient-orb` — blurred radial gradient blob
- `.noise-overlay` — fixed SVG noise texture
- `.animate-fade-in-up`, `.animate-fade-in`, `.animate-float` — keyframe utility classes
- `.delay-100` … `.delay-700` — stagger delay helpers
- `.horizontal-scroll` — overflow-x scroll container for open-source cards
- `.mono` — monospace font stack for email/code

### Design Tokens
Custom dark palette defined as CSS variables in `globals.css` and Tailwind custom colors:
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#0A0A0A` | Page background |
| `--bg-card` | `#141414` | Card backgrounds |
| `--bg-elevated` | `#1A1A1A` | Pill/tag backgrounds |
| `--accent-blue` | `#3B82F6` | Primary accent |
| `--accent-amber` | `#F59E0B` | Sakha / warm accent |
| `--accent-green` | `#22C55E` | Live status indicator |
| `cosmic.blue` | `#2563eb` | Tailwind custom color for 3D scene |
| `cosmic.purple` | `#6d28d9` | Tailwind custom color for 3D scene |

### 3D Scene (ThreeBackground)
`components/three-background.tsx` contains a full R3F canvas with:
- `MovingStars` — 5000-point particle cloud, mouse-driven rotation
- `CosmicNebula` — wireframe sphere with Float animation
- `ProfileGlow` — pulsating torus ring
- `CameraController` — subtle camera parallax from mouse position
- `useMousePosition` hook provides normalized coords in `[-1, 1]` range

> **Note:** `ThreeBackground` and `FloatingNav` are fully implemented but not currently rendered in `page.tsx`. To add them, import and place above/below the page content.

## Development Notes

- Turbopack enabled in dev (`next dev --turbopack`)
- `next build` + `next export` for static output (`npm run build:static`)
- `next.config.ts` sets `output: "export"` and `images.unoptimized: true` — no server-side features, no Next.js Image optimization
- Dark mode only in practice (ThemeProvider defaults to `"dark"`)
- Deployed on Vercel as a static site

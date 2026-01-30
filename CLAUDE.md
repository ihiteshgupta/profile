# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

Personal portfolio website with 3D visualization using Three.js. Built with Next.js 16 and React Three Fiber.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **3D**: Three.js via React Three Fiber and Drei
- **Animations**: Framer Motion
- **Theming**: next-themes
- **Analytics**: Vercel Analytics

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
├── app/                  # Next.js App Router
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── components/      # Page components
├── components/
│   └── ui/              # Reusable UI components
├── public/              # Static assets
└── styles/              # Global styles
```

## Key Dependencies

### 3D Rendering
- `three` - Three.js core
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers and abstractions

### UI Components
- Radix UI primitives (Slot, Tabs)
- `class-variance-authority` - Component variants
- `lucide-react` - Icons

### Animations
- `framer-motion` - Declarative animations

## Development Notes

- Uses Turbopack for faster dev builds
- Supports light/dark mode via next-themes
- Static export compatible (no server-side features)
- Deployed on Vercel

## 3D Scene

The portfolio includes interactive 3D elements:
- React Three Fiber for declarative 3D
- Drei helpers for common Three.js patterns
- Optimized for web performance

## Styling

- Tailwind CSS with custom configuration
- `tailwindcss-animate` for animation utilities
- Responsive design
- Dark mode support

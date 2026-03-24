# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with HMR
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
```

No linting or test suite configured.

Deployment is automated via GitHub Actions on push to `master` — builds and deploys `dist/` to GitHub Pages at `/cubeland/`.

## Architecture

Single-page Three.js animation experiment. All logic lives in two files:

- `js/script.js` — All scene logic. `bricks()` creates 200 randomly sized/coloured box meshes and starts an animation loop (`render()` via `requestAnimationFrame`) that rotates and drops them. Triggered by `.trigger` button click; **not idempotent** — multiple clicks stack shape sets. Shapes are disposed and removed once they fall below y=-15. Tunable parameters (count, size, speed, drift) are defined in a config object at the top of the file.
- `css/style.css` — Full-viewport canvas, noise texture overlay via `::after` pseudo-element, styled `.trigger` button positioned bottom-center.

`vite.config.js` sets `base: '/cubeland/'` for GitHub Pages subdirectory hosting.

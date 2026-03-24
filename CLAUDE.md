# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

See README.md for setup and deployment instructions.

## Architecture

- `js/script.js` — All scene logic. `bricks()` creates 200 randomly sized/coloured box meshes and starts an animation loop that rotates and drops them. Triggered on body click; not idempotent — multiple clicks stack shape sets.
- `css/style.css` — Full-viewport canvas, noise texture overlay via `::after`, styled `.trigger` button.

# Cubeland

A Three.js browser experiment — 200 colourful, randomly sized boxes fall and spin when you click.

## Development

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Deploy

Pushes to `master` automatically build and deploy to GitHub Pages via `.github/workflows/deploy.yml`.

In the repo settings, set Pages source to **GitHub Actions**.

# cube-land

A Three.js browser experiment — 200 randomly sized and coloured boxes fall and spin when you click.

Live at: https://jackbush.github.io/cubeland/

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

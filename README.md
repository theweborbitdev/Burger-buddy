# Burger Buddy

Burger Buddy is a React-based food web application.

## Scripts

In the project directory, you can run:

- `npm start` — run the app locally in development mode.
- `npm test` — run unit tests.
- `npm run build` — create a production build in the `build/` folder.

## Deployment

This repository includes a GitHub Actions workflow that deploys the app to **GitHub Pages** whenever changes are pushed to `main`.

### One-time setup

1. In your GitHub repository, go to **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.

### Automatic deploy

- Push to `main`.
- The workflow in `.github/workflows/deploy.yml` will:
  1. Install dependencies
  2. Build the app
  3. Publish the generated `build/` output to GitHub Pages

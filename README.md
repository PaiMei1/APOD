# APOD

A small site that shows NASA's Astronomy Picture of the Day, with its title, image (or video) and explanation. It updates automatically every day.

**Live demo:** https://paimei1.github.io/APOD/

Built for the [Hack Club Stardance](https://stardance.hackclub.com/) "Give Your Website a Pulse" mission.

## Features

- Fetches today's picture from NASA's APOD API
- Shows the title, explanation, and either an image or a video
- Loading and error messages
- Custom styling with zigzag side strips (hidden on small screens)

## Built with

- React + TypeScript
- Vite
- [NASA APOD API](https://api.nasa.gov)
- GitHub Pages, deployed with GitHub Actions

## Run it locally

1. Get a free API key at [api.nasa.gov](https://api.nasa.gov)
2. Clone the repo and install dependencies:

```bash
git clone https://github.com/PaiMei1/APOD.git
cd APOD
npm install
```

3. Create a `.env` file in the project root:

```
VITE_NASA_API_KEY=your_key_here
```

4. Start the dev server and open the URL it prints:

```bash
npm run dev
```

## Deploying

Pushing to `main` builds and deploys the site through the GitHub Actions workflow in `.github/workflows/deploy.yml`. The API key is stored as a repository secret named `VITE_NASA_API_KEY`, and `base` in `vite.config.ts` is set to `/APOD/` for GitHub Pages.

Note: because this is a frontend-only project, the key is included in the built JavaScript. That's fine for NASA's free public API.

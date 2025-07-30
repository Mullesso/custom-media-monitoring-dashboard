# Custom Media Monitoring Dashboard (Front‑End)

This repository contains a **React** front‑end for a media monitoring system.  It provides a modern, professional user interface that allows non‑technical users to search for press releases and news articles, sort and filter results, and download reports.  The UI is responsive and leverages [React Bootstrap](https://react-bootstrap.github.io/) for a clean, enterprise‑ready look.

## Features

* **Search and filter** – Enter keywords or company names to fetch articles from the back‑end.  Drop‑down controls allow sorting by date, relevance or source credibility.
* **Responsive design** – Optimised for both desktop and mobile devices using Bootstrap’s grid system.
* **Article list** – Displays headlines, short summaries, publication dates, sources and links.  Each row can be clicked to reveal the full article text.
* **Integration ready** – Uses `axios` to communicate with a back‑end API.  Set the API base URL via an environment variable (`REACT_APP_API_BASE_URL`) so that credentials and hosts are not hard‑coded.
* **Clean separation of concerns** – All back‑end fetching, scraping and prioritisation happens on the server; this front‑end simply consumes the API.  Users never see any of the background processes.

## Getting started

1. **Install dependencies**

   This project uses [npm](https://www.npmjs.com/) to manage dependencies.  From the project root run:

   ```bash
   npm install
   ```

2. **Configure the API endpoint**

   The dashboard expects a back‑end API that exposes an endpoint returning articles as JSON.  You can point the front‑end to your existing Streamlit back‑end or any other service.  To configure the API base URL, create a file named `.env` at the project root and set the following variable:

   ```env
   REACT_APP_API_BASE_URL=https://your-backend-host/api
   ```

   The front‑end will append `/articles` to this base URL when fetching data.  See `src/api.js` for details.

3. **Run the development server**

   Start the React development server with:

   ```bash
   npm start
   ```

   This will open the app at [http://localhost:3000](http://localhost:3000).  The server hot‑reloads on file changes.

4. **Build for production**

   To create an optimised build for deployment, run:

   ```bash
   npm run build
   ```

   The compiled files will be placed in the `build/` directory.  These static files can be hosted on any static hosting platform.

## Deployment on Netlify

Netlify is a hosting platform that automatically builds and deploys static sites from a Git repository.  It offers a generous free tier with 100 GB of bandwidth【781674835439591†L100-L104】 and works well with frameworks such as React【781674835439591†L137-L144】.

To deploy this dashboard on Netlify:

1. **Push this repository to GitHub** – Netlify integrates directly with GitHub, GitLab or Bitbucket.
2. **Create a new site** on [Netlify](https://www.netlify.com/) and select your repository.
3. **Set the build command** to `npm run build` and the publish directory to `build/`.
4. **Add environment variables** – In the Netlify site settings, define `REACT_APP_API_BASE_URL` under *Site settings → Environment variables* with the URL of your back‑end API.  Netlify will inject this variable during the build.
5. **Deploy** – Netlify will install dependencies, run the build and deploy your site on a global CDN.  Subsequent commits to the repository will automatically trigger new deployments.

## Project structure

```
custom-media-monitoring-dashboard/
├── package.json       # NPM metadata and scripts
├── .gitignore         # Excludes node_modules, build output and env files
├── README.md          # This file
├── public/
│   └── index.html     # HTML shell loaded by the browser
└── src/
    ├── index.js       # Entry point that mounts the React app
    ├── App.js         # Root component that contains the layout and state
    ├── api.js         # Helper to call the back‑end API
    ├── components/
    │   ├── SearchBar.js
    │   ├── Filters.js
    │   ├── ArticleTable.js
    │   └── ArticleModal.js
    └── styles.css     # Custom CSS overrides
```

## Security and best practices

* **Do not commit secrets** – Store API keys or host names in environment variables (`.env` file) and never commit them to version control.
* **Use HTTPS** – Ensure that your back‑end API is served over HTTPS to prevent man‑in‑the‑middle attacks.
* **Respect source terms** – When displaying news articles, always link back to the original source and respect copyright.

## License

This project is licensed under the MIT License.  See the `LICENSE` file in the back‑end repository for details.
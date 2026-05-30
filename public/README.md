# Render Sample Site

A minimal Node.js + Express site, ready to deploy on Render.

## Run locally

```bash
npm install
npm start
```

Then open http://localhost:3000

## Deploy to Render

### Option A — Manual (recommended for first deploy)

1. Push this folder to a new GitHub repo.
2. Sign in at https://render.com and click **New +** → **Web Service**.
3. Connect your GitHub account and select the repo.
4. Fill in:
   - **Name:** anything you like
   - **Region:** closest to you
   - **Branch:** main
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free
5. Click **Create Web Service**. Render will build and deploy it. Your live URL will appear at the top of the service page.

### Option B — Blueprint (uses `render.yaml`)

1. Push this folder (including `render.yaml`) to GitHub.
2. In Render: **New +** → **Blueprint** → pick the repo.
3. Render reads `render.yaml` and provisions everything automatically.

## Notes

- Free instances spin down after periods of inactivity, so the first request after a pause may take ~30s.
- Render auto-redeploys on every push to your selected branch.
- The `/healthz` endpoint is used by Render's health checks.
- `PORT` is provided by Render via environment variable — the server already reads it.

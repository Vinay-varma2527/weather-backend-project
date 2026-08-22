# weather-backend-project
Full-stack weather application using Node.js, Express and OpenWeather API

## GitHub Pages deployment

GitHub Pages hosts the files in `frontend/` through the workflow in
`.github/workflows/deploy-pages.yml`. The backend must be deployed separately
to a service that runs Node.js.

After deploying the backend, add a repository variable named `WEATHER_API_URL`
under **Settings > Secrets and variables > Actions > Variables**. Set it to
the public backend URL, without a trailing slash, then rerun the workflow.

The OpenWeather API key belongs only in the backend's `.env` file and must not
be added to the frontend or committed to Git.

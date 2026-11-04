# AWMS showcase site

A one-page static site that presents AWMS (Academic Workload Management System)
to other University of Toronto units. The product screens are HTML mock-ups
with fictional names and figures: no real faculty data appears anywhere.

## Develop

    npm install
    npm run dev       # http://localhost:5173

## Build and deploy

    npm run build     # static files in dist/

`dist/` is plain HTML and CSS with no server or third-party scripts, so it can
be hosted anywhere static files are served (GitHub Pages, U of T web hosting).

## Editing

- Content: `index.html`
- Brand colours and shared styles: `src/style.css` (teal matches the AWMS app)
- The "Request a demo" buttons are `mailto:` links; change the address in
  `index.html` (three places) if demo requests should go elsewhere.
- Keep claims to what the app actually does, and keep mock-up data fictional.

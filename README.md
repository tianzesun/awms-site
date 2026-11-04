# AWMS showcase site

A one-page static site that presents AWMS (Academic Workload Management System)
to universities. The product screens are HTML mock-ups
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
- Brand colours, fonts and shared styles: `src/style.css`. Fonts (Inter, Source Serif 4, both OFL) are bundled from @fontsource, so the site makes no third-party requests.
- "Book a demo" buttons scroll to the contact section, which has the one
  `mailto:` link and the address shown beside it; change both together.
- Keep claims to what the app actually does, and keep mock-up data fictional.

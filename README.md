# School Website — Sharada Shishu Mandir, Alekhapada

Public marketing website for the school. Completely independent from the School Management System (`SSMAlekhapada`).

## Stack

- React 19 + Vite
- Tailwind CSS 4
- React Router DOM
- Lucide icons

## Pages

- Home
- About School
- Principal's Message
- Academics
- Facilities
- Gallery
- Admissions
- Notices & Events
- Contact

## Development

```bash
npm install
cp .env.example .env
npm run dev
```

Dev server: [http://localhost:5173](http://localhost:5173)

## Environment

| Variable | Purpose |
|----------|---------|
| `VITE_SMS_URL` | Destination for the Login button (SMS portal). Required in production (no localhost fallback). In development, missing values warn and temporarily use `http://localhost:5174`. |
| `VITE_SITE_URL` | Canonical site origin for Open Graph, canonical tags, `robots.txt`, and `sitemap.xml` (example: `https://www.your-domain.edu.in`). |

Production build writes absolute `dist/robots.txt` and `dist/sitemap.xml` from `VITE_SITE_URL`.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite on port 5173 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
  components/
    layout/     Navbar, Footer, ScrollToTop, MainLayout
    home/       Homepage sections
    ui/         Shared presentational helpers
  data/         Static school content
  pages/        Route pages
  utils/        Helpers (SMS URL, dates)
  assets/       Images
```

## Independence

Do not share `package.json`, `node_modules`, configs, or source with `SSMAlekhapada`. The Login control only redirects to `VITE_SMS_URL`.

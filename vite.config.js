import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

const SITE_PATHS = [
  '/',
  '/about',
  '/principal-message',
  '/academics',
  '/facilities',
  '/gallery',
  '/admissions',
  '/notices',
  '/contact',
]

function seoStaticFiles() {
  let mode = 'production'

  return {
    name: 'seo-static-files',
    configResolved(config) {
      mode = config.mode
    },
    closeBundle() {
      const env = loadEnv(mode, process.cwd(), '')
      const siteUrl = (env.VITE_SITE_URL || 'https://www.example.com').replace(
        /\/$/,
        '',
      )
      const distDir = path.resolve(process.cwd(), 'dist')

      const robots = [
        'User-agent: *',
        'Allow: /',
        '',
        `Sitemap: ${siteUrl}/sitemap.xml`,
        '',
      ].join('\n')

      const urls = SITE_PATHS.map((route) => {
        const loc = route === '/' ? `${siteUrl}/` : `${siteUrl}${route}`
        const priority = route === '/' ? '1.0' : '0.8'
        return [
          '  <url>',
          `    <loc>${loc}</loc>`,
          '    <changefreq>weekly</changefreq>',
          `    <priority>${priority}</priority>`,
          '  </url>',
        ].join('\n')
      }).join('\n')

      const sitemap = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        urls,
        '</urlset>',
        '',
      ].join('\n')

      fs.writeFileSync(path.join(distDir, 'robots.txt'), robots)
      fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoStaticFiles()],
  server: {
    port: 5173,
    strictPort: true,
  },
})

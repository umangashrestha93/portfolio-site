import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://umangastha.com.np';
const SITEMAP_CONTENT = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${DOMAIN}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

const ROBOTS_CONTENT = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;

function generate() {
  const workspaceRoot = path.resolve(__dirname, '..');
  const publicDir = path.join(workspaceRoot, 'public');
  const distDir = path.join(workspaceRoot, 'dist');

  // Create public directory if it doesn't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write to public folder
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), SITEMAP_CONTENT);
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), ROBOTS_CONTENT);
  console.log('✓ Successfully generated sitemap.xml and robots.txt in public/');

  // Also write to dist if it exists
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), SITEMAP_CONTENT);
    fs.writeFileSync(path.join(distDir, 'robots.txt'), ROBOTS_CONTENT);
    console.log('✓ Successfully copied sitemap.xml and robots.txt to dist/');
  } else {
    console.log('⚠ dist/ directory not found. Files generated in public/ only.');
  }
}

generate();

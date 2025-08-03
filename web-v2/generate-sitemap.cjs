// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://weblocators.com' });
const writeStream = createWriteStream('./public/sitemap.xml');

(async () => {
  const pages = ['/', '/about', '/contact'];

  for (const page of pages) {
    sitemap.write({
      url: page,
      changefreq: 'monthly',
      priority: page === '/' ? 1.0 : 0.8,
    });
  }

  sitemap.end();

  const sitemapData = await streamToPromise(sitemap);
  writeStream.end(sitemapData);
  console.log('✅ Sitemap generated at public/sitemap.xml');
})();

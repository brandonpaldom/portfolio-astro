import { getCollection } from 'astro:content';

export async function GET({ site }) {
  const baseUrl = site || 'https://brandonpalmeros.dev/';
  // Get all blog posts
  const posts = await getCollection('blog');
  
  const blogUrls = posts.map(post => ({
    url: `${baseUrl}blog/${post.slug}`,
    lastmod: new Date(post.data.pubDate).toISOString(),
  }));

  const staticPages = [
    { url: baseUrl, lastmod: new Date().toISOString() },
    { url: `${baseUrl}blog/`, lastmod: new Date().toISOString() },
    { url: `${baseUrl}resume/`, lastmod: new Date().toISOString() },
  ];

  const allUrls = [...staticPages, ...blogUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(({ url, lastmod }) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
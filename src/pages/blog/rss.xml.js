import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  
  const items = posts
    .filter(post => post.data.pubDate)
    .sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate))
    .map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.pubDate),
      link: `/blog/${post.slug}`,
      author: post.data.author || 'Brandon Palmeros',
    }));

  return rss({
    title: 'Blog de Brandon Palmeros',
    description: 'Artículos sobre desarrollo web frontend, JavaScript, React, Astro y las últimas tendencias en tecnología web.',
    site: context.site || 'https://brandonpalmeros.dev',
    items,
    customData: `<language>es-es</language>`,
  });
}
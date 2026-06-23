import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    tags: z.array(z.string()),
    images: z.array(z.string()).optional(),
    squareImage: z.boolean().optional(),
    development: z.boolean().optional(),
    offline: z.boolean().optional(),
  }),
});

export const collections = {
  blog,
  projects,
};

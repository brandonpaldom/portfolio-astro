import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
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

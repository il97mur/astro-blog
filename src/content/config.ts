import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string().max(50),
    description: z.string().max(100),
    href: z.string(),
    technologies: z.array(z.string()).optional(),
    order: z.number(),
  }),
});

export const collections = {
  projects: projectsCollection,
};

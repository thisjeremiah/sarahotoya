import {defineCollection, z} from "astro:content";

const projects = defineCollection({
  schema: ({image}) => z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    company: z.string().optional(),
    order: z.number().optional(),
    thumbnail: image().optional(),
  }),
});

export const collections = {
  projects: projects,
};

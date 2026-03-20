import { defineCollection, reference } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const company = defineCollection({
  loader: file("./src/data/companies.json"),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
      location: z.string(),
      logo: image(),
      logoDark: image().optional(),
    }),
});

const work = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    company: reference("company"),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    skills: z.array(z.string()),
    responsibilities: z.array(z.string()),
  }),
});

export const collections = { company, work };

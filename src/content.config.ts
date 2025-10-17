import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({ pattern: "*.md", base: "./src/blog" }),
	schema: z.object({
		name: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		publish_date: z.coerce.date(),
		last_updated: z.coerce.date().optional(),
	})
});

export const collections = { blog };
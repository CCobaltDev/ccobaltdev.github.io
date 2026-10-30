import { defineCollection, reference } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({
		pattern: "*.md",
		base: "./src/blog"
	}),
	schema: z.object({
		name: z.string(),
		description: z.string(),
		related_posts: z.array(reference("blog")),
		publish_date: z.coerce.date(),
		last_updated: z.coerce.date().optional(),
	})
});

export const collections = { blog };
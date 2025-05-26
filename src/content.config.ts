import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const MDX_PATTERN = "./**/[^_]*.{md,mdx}";

const books = defineCollection({
	loader: glob({ pattern: MDX_PATTERN, base: "./src/content/books" }),
	schema: () =>
		z.object({
			title: z.string(),
			subtitle: z.string().optional(),
			authors: z.array(z.string()),
			genres: z.array(z.string()),
			draft: z.boolean().optional(),
			drunk: z.boolean().optional(),
			date: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			published: z.coerce.string(),
			openlibrary: z.string(),
		}),
});

const posts = defineCollection({
	loader: glob({ pattern: MDX_PATTERN, base: "./src/content/posts" }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			subtitle: z.string().optional(),
			description: z.string(),
			draft: z.boolean().optional(),
			// Transform string to Date object
			date: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			cover: z
				.object({
					src: image(),
					alt: z.string(),
					description: z.string().optional(),
					attribution: z
						.object({
							name: z.string(),
							link: z.string().url().optional(),
							license: z
								.object({
									name: z.string(),
									link: z.string().url().optional(),
								})
								.optional(),
						})
						.optional(),
				})
				.optional(),
		}),
});

const pages = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/pages" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

export const collections = { posts, pages, books };

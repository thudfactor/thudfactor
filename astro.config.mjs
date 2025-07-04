import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { remarkDefinitionList, defListHastHandlers } from "remark-definition-list";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

//import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
	site: "https://www.thudfactor.com",
	integrations: [mdx(), sitemap()],
	adapter: vercel({
		imageService: true,
		imagesConfig: { formats: ["image/webp"], sizes: [300, 600, 900, 1200, 2400] },
	}),

	vite: {
		plugins: [tailwindcss()],
	},

	devToolbar: {
		enabled: false,
	},

	markdown: {
		remarkPlugins: [[remarkDefinitionList, {}]],
		remarkRehype: {
			handlers: {
				...defListHastHandlers,
			},
		},
	},
});

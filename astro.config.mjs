import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { remarkDefinitionList, defListHastHandlers } from "remark-definition-list";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://www.thudfactor.com",
  integrations: [mdx(), sitemap()],

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

  adapter: cloudflare(),
});
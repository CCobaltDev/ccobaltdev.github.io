// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import { unified } from "@astrojs/markdown-remark";
import remarkToc from "remark-toc";
import { remark_reading_time } from "./src/remark_reading_time.mjs";

// https://astro.build/config
export default defineConfig({
	site: "https://ccobaltdev.github.io",

	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [expressiveCode()],
	markdown: {
		processor: unified({ remarkPlugins: [[remarkToc, { heading: 'Contents' }], remark_reading_time] })
	},

});
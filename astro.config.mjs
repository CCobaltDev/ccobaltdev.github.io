import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site:'https://cobalbar.github.io',
	output: 'static',
	build: {
		assets: 'astro'
	}
});

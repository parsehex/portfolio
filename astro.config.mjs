import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import { astroImageTools } from 'astro-imagetools';

// https://astro.build/config
export default defineConfig({
	base: './', // Set a path prefix.
	site: 'https://www.thomasmays.net/',
	trailingSlash: 'always', // Use to always append '/' at end of url
	markdown: {
		shikiConfig: {
			// Choose from Shiki's built-in themes (or add your own)
			// https://github.com/shikijs/shiki/blob/main/docs/themes.md
			theme: 'one-dark-pro',
		},
	},
	integrations: [
		react(),
		tailwind({}),
		sitemap(),
		robotsTxt(),
		astroImageTools,
	],
});

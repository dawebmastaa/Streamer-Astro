import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
export default defineConfig({
  outDir: './docs',
  site: 'https://streamer.ruletheweb.us/',
  integrations: [tailwind(),  sitemap()]
});
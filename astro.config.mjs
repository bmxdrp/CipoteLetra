import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";
import auth from 'auth-astro';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: 'https://cipoteletra.netlify.app',
  integrations: [tailwind(), auth(), sitemap()],
  output: "server",
  adapter: netlify(),
  renderers: ['@astrojs/node', 'auth-astro']
});
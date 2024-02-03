import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";
import auth from 'auth-astro';


// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321',
  integrations: [tailwind(), auth()],
  output: "server",
  adapter: netlify(),
  renderers: ['@astrojs/node', 'auth-astro']
});
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // 🟢 CORREGIDO: Tu URL completa de GitHub Pages
  site: 'https://GottliebBustos.github.io',
  
  // 🟢 CORREGIDO: Al ser tu repositorio principal de usuario, va en la raíz '/'
  base: '/',
  
  integrations: [mdx(), sitemap(), tailwind()]
});

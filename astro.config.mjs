import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

// https://astro.build
export default defineConfig({
  site: 'https://GottliebBustos.github.io',
  base: '/',
  // 🟢 CORREGIDO: Se removió sitemap() para evitar el error de incompatibilidad
  integrations: [mdx(), tailwind()] 
});

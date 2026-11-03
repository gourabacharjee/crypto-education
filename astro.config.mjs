import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gourabacharjee.github.io',
  base: '/crypto-education',
  build: {
    format: 'directory',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});

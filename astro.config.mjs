import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://github.com/gourabacharjee/crypto-education.git',
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

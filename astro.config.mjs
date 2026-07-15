// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alvarocdev.com',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'pt'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

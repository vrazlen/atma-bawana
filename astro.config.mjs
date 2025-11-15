import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://atma-bawana.example.com',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    })
  ]
});

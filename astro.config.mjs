import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import { loadEnv } from "vite";

const { URL_SITE } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: URL_SITE,
  vite: {
    plugins: [
      tailwindcss()
    ],
  },
  integrations: [sitemap()],
  env: {
    schema: {
      PHONE_NUMBER: envField.string({
        context: "client",
        access: "public",

      }),
      URL_SITE: envField.string({
        context: "client",
        access: "public",
      }),
    }
  },
});
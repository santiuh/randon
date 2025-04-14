// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      IG_TOKEN: process.env.IG_TOKEN,
      IG_ID: process.env.IG_ID,
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  compatibilityDate: "2024-11-01",
  css: ["~/assets/css/tailwind.css"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/image",
    "nuxt-svgo",
    "@nuxtjs/leaflet",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Raleway: {
            wght: [300, 400, 500, 600, 700, 800],
          },
        },
      },
    ],
  ],
  svgo: {
    autoImportPath: "./public/svg",
  },
});

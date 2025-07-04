// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      IG_TOKEN: process.env.IG_TOKEN,
      IG_ID: process.env.IG_ID,
    },
    mail: {
      message: {
        to: process.env.MAIL_TO || "ventas@randon.com.ar",
      },
      smtp: {
        host: process.env.SMTP_HOST || "smtp.tu-servidor.com",
        port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
        auth: {
          user: process.env.SMTP_USER || "usuario",
          pass: process.env.SMTP_PASS || "contraseña",
        },
      },
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
    "nuxt-mail",
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

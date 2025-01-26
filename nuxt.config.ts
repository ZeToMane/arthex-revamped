// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["~/styles/index.scss"],
  hooks: {
    "prerender:routes"({ routes }) {
      routes.clear()
    }
  },
  ssr: false,
  router: {
    options: {
      hashMode: true,
    }
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
        { charset: 'utf-8' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;700&family=Silkscreen:wght@400;700&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap',
        },
      ],
    },
  },
})

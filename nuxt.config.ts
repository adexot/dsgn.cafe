// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'use-credentials',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap',
        },
      ],
      style: [
        // <style type="text/css">:root { color: red }</style>
        { children: ":root { font-family: 'Poppins', sans-serif }" },
      ],
    },
  },
});

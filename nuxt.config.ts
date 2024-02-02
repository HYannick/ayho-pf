// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in', appear: true }
  },
  googleFonts: {
    families: {
      Inter: '200..700',
      "Istok Web": true,
    }
  }
})

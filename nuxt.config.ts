// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: 'template',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [],
      script: []
    }
  },
  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify']
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
      }
    ]
  ],
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  }
});

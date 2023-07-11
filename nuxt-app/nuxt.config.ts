// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt',],
  typescript: {
    typeCheck: true
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ['@/assets/css/tailwind.css'],
  // nitro: {
  //   plugins: ['@/server/nitro/plugin.js']
  // }
  
  
  runtimeConfig: {
    token: "abcABC123",
    public:{
      apiBase:"/api",
      googleClientId: `93828998499-mebk2r53ggojrs3e0padtvu14r1er77u.apps.googleusercontent.com`
    }
  },

  
})

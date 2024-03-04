// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:['@/assets/styles/bootstrap.scss'],
  postcss: { // CSS 屬性加上瀏覽器相容性前綴
    plugins: {
      autoprefixer: true
    }
  },
  modules:['nuxt-icon',
    
  ],
})

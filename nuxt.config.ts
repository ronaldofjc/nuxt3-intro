// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: "@/shared/icons", prefix: "Icon"
    }, "@/components"
  ],
  alias: {
    css: "/<rootDir>/assets/css",
  },
  css: ["@/assets/css/main.css"],
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  pinia: {
    storesDirs: ["./stores/**"]
  },
  build: {
    extend(config) {
        const hmrIndex = config.plugins.findIndex(p => p.constructor.name === 'HotModuleReplacementPlugin')
        config.plugins.splice(hmrIndex, 1)
    } 
  }
});

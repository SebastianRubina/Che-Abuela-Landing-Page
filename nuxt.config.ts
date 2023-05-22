// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        'nuxt-icon',
    ],
    googleFonts: {
        families: {
            Poppins: [300, 400, 600, 700, 800]
        }
    }
})

export default defineNuxtConfig({
    ssr: false,
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    css: ['~/assets/styles/main.scss'],
    devtools: {
        enabled: true,
    },
    imports: {
        dirs: ['./stores'],
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                    @import "@/assets/styles/variables.scss";
                    @import "@/assets/styles/mixins.scss";
                    `,
                }
            }
        }
    },
    modules: [
        '@pinia/nuxt',
        'nuxt-swiper'
    ],
    swiper: {
        prefix: 'Swiper',
        styleLang: 'scss',
    }
})
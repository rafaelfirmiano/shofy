// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
    'nuxt-directus'
  ],
  runtimeConfig: {
    public: {
      directus: {
        url: "https://yp7ns4.stackhero-network.com",
        token: 'BQbfvSpOT46-lsokoDYleqBf7ctI-KaZ'
      }
    }
  },
  app: {
    head: {
      title: "Midwayautorv.com",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js",
        },
      ],
      link: [
        { rel:'preconnect',href:'https://fonts.googleapis.com' },
        { rel:'preconnect',href:'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
      ]
    }
  },
  css: [
    "bootstrap/scss/bootstrap.scss",
    "swiper/css/bundle",
    "@/assets/css/font-awesome-pro.css",
    "@/assets/css/flaticon_shofy.css",
    "@/assets/css/custom.css",
    "@/assets/scss/main.scss",
  ],

})

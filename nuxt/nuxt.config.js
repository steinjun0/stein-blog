import colors from 'vuetify/es5/util/colors'
import webpack from 'webpack'

export default {
  dev: process.env.NODE_ENV !== 'production',
  env: {
    API_URL: process.env.API_URL || 'cant loading .env',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Stein.log',
    title: 'Stein.log',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:image', property: 'og:image', content: 'https://blog.steinjun.net' + '/blog-icon-512-1200x630.png' }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/blog-icon-512.png' }],
  },
  server: {
    host: '0.0.0.0', // default: localhost,
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/global.scss',
    //   'quill/dist/quill.core.css',
    //   'quill/dist/quill.snow.css',
    //   'quill/dist/quill.bubble.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-echarts', ssr: false },
    { src: '~plugins/nuxt-quill-plugin', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    "@nuxtjs/composition-api/module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-fonts',
    'vue-sweetalert2/nuxt',
  ],

  googleFonts: {
    families: {
      Roboto: false,
      "Noto+Sans+KR": [100, 200, 300, 400, 500, 600, 700, 800, 900],

    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Stein.log',
      short_name: 'Stein.log'
    },
    icon: {
      sizes: [64, 120, 144, 152, 167, 180, 192, 384, 512, 1024],
      fileName: 'blog-icon-512.png'
    }
  },


  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/echarts/, /zrender/],
    plugins: [
      new webpack.ProvidePlugin({
        'window.Quill': 'quill/dist/quill.js',
        'Quill': 'quill/dist/quill.js'
      })
    ]
  },

}

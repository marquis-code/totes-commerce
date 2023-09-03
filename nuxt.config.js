export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ToteCommerce',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/toastr.js', mode: 'client' },
    { src: '~/plugins/localstorage.client.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/moment', '@nuxt/postcss8'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-leaflet',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // 'nuxt-social-meta',
    'nuxt-paystack'
    // {
    //   url: 'Site url',
    //   title: 'TotesCommerce',
    //   site_name: 'TotesCommerce',
    //   description:
    //     'We know how large objects will act, but things on a small scale',
    //   img: './static',
    //   locale: 'en_US',
    //   twitter: '@user',
    //   twitter_card: 'summary_large_image',
    //   themeColor: '#8B4E96'
    // }
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: ''
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'Amazing Totes',
      author: '',
      lang: 'en'
    },
    manifest: {
      name: 'TotesCommerce',
      short_name: 'TotesCommerce',
      description:
        'We know how large objects will act, but things on a small scale.',
      lang: 'en',
      theme_color: '#8B4E96',
      background_color: '#8B4E96',
      orientation: 'portrait',
      display: 'standalone'
    },
    icon: {
      filename: ''
    }
  },

  // generate: {
  //   fallback: true
  // },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  }
}

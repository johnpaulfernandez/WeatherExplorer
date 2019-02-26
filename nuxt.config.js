module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Weather Explorer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~/plugins/chart', ssr: false }, '~/plugins/fontawesome.js', '~/plugins/highcharts-vue.js'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
  // See https://github.com/nuxt-community/axios-module#options
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  serverMiddleware: [
    // API middleware
    '~/api/index.js'
  ]
}

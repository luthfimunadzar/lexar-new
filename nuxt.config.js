const tls = require('tls')
tls.DEFAULT_ECDH_CURVE = 'auto'

require('dotenv').config()

module.exports = {
  target: 'static',
  /*
   ** Headers of the page
   */
  css: [
    /* Import Font Awesome Icons Set */
    '~/node_modules/font-awesome/css/font-awesome.min.css',
    /* Import Vue Multiselect Style */
    '~/node_modules/vue-multiselect/dist/vue-multiselect.min.css',
    // SCSS file in the project
    '@/assets/main.scss',
  ],
  head: {
    title: 'LEXAR - Your Legal & Administrative Solution',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=0.8'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'We empower entrepreneurial generation ' +
          'by providing simple legal administration service, ' +
          'so you can focus on your core business. ' +
          'We do things swiftly like startup. ' +
          'We don\'t work in layer of bureaucracy nor conventional firms, ' +
          'and we use technology as enabler to serve you in more efficient way.'
      }
    ],
    link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Playfair+Display&display=swap'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png'
      }
    ],
    script: [
      // {
      //   src: '//js.hs-scripts.com/7011038.js',
      //   id: 'hs-script-loader',
      //   type: 'text/javascript',
      //   async: true,
      //   defer: true
      // },
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-66126363-3',
        type: 'text/javascript',
        async: true
      }, 
      {
        src: 'analytics.js',
        type: 'text/javascript'
      }, 
      {
      src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyArgn80DCrw9opXdu9cOKD3v-5n04ZhF3k&libraries=places'
      }
    ]
  },

  /*
   ** Load modules and depedencies
   */
  modules: [
    // Doc: https://github.com/nuxt-community/nuxt-i18n
    'nuxt-i18n',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/pwa-module
    '@nuxtjs/onesignal',
    ['@nuxtjs/pwa', { icon: false }],
    // Doc: https://github.com/nuxt-community/auth-module
    '@nuxtjs/auth',
    // Doc: https://github.com/nuxt-community/axios-module
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    // Doc: https://github.com/bootstrap-vue/bootstrap-vue
    'bootstrap-vue/nuxt',
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/toast
    '@nuxtjs/toast',
    // Doc: https://github.com/rigor789/vue-scrollto
    'vue-scrollto/nuxt',
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/google-tag-manager
    ['@nuxtjs/google-tag-manager', {
      id: process.env.GOOGLE_TAG_MANAGER_ID
    }],
    // Doc: https://github.com/lewyuburi/nuxt-validate
    ['nuxt-validate', {
      lang: 'en'
    }],
  ],
  // router: {
  //   middleware: ['auth']
  // },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [

    // Plugins
    {
      src: '~plugins/vue-carousel',
      mode: 'client'
    },
    {
      src: '~/plugins/vue2-google-maps.js',
      mode: 'client'
    },
    {
      src: '~/plugins/vue-lodash.js',
      mode: 'client'
    },
    // {
    //   src: '~/plugins/vue-multiselect.js',
    //   mode: 'client'
    // },
    {
      src: '~/plugins/vue-select.js',
      mode: 'client'
    },
    {
      src: '~/plugins/terbilang-vue.js',
      mode: 'client'
    },
    {
      src: '~/plugins/v-money.js',
      mode: 'client'
    },
    {
      src: '~/plugins/vue-currency-input.js',
      mode: 'client'
    },
    // {
    //   src: '~/plugins/awesome-mask.js',
    //   mode: 'client'
    // },
    {
      src: '~/plugins/vue-fullcalendar.js',
      mode: 'client'
    },
    {
      src: '~/plugins/vue2-datepicker.js',
      mode: 'client'
    },
    // {
    //   src: '~/plugins/vue-tawk.js',
    //   mode: 'client'
    // },
    {
      src: '~/plugins/vue-clipboard2.js',
      mode: 'client'
    },
    {
      src: '~/plugins/vue-plyr.js',
      mode: 'client'
    },
    {
      src: '~/plugins/hotjar.js',
      mode: 'client'
    },
    {
      src: '~/plugins/facebook-pixel.js',
      mode: 'client'
    },
    {
      src: '~/plugins/filewrapper.js',
      mode: 'client'
    },

    // Filters
    '~filters/currency',
    '~filters/date',

    // Model
    '~/models/user',
    '~/models/contact',
    '~/models/incorp',
    '~/models/profile',
    '~/models/matrix',
    '~/models/career',
    '~/models/publication',
    '~/models/trademark',
  ],

  /*
   ** Auth module configuration
   ** Doc: https://github.com/nuxt-community/axios-module
   */
  auth: {
    strategies: {
      password: {
        _scheme: '~/auth/schemes/PassportPasswordScheme.js',
        client_id: process.env.API_CLIENT_ID,
        client_secret: process.env.API_CLIENT_SECRET,
        endpoints: {
          login: {
            url: 'oauth/token',
            method: 'post',
            propertyName: 'access_token'
          },
          logout: false,
          user: {
            url: 'api/profile'
          }
        }
      },
    },
    resetOnError: true,
    redirect: {
      callback: "/callback",
      home: false
    },
  },

  /*
   ** Axios module configuration
   ** Doc: https://github.com/nuxt-community/axios-module#options
   */
  axios: {
    baseURL: process.env.API_URL,
    browserBaseURL: process.env.API_URL
  },

  /*
   ** Nuxt I18n module configuration
   ** Doc: https://github.com/nuxt-community/nuxt-i18n
   */
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'id',
    locales: [{
        code: 'en',
        file: 'en-EN.js'
      },
      {
        code: 'id',
        file: 'id-ID.js'
      },
    ],
    lazy: true,
    langDir: 'lang/'
  },

  oneSignal: {
    init: {
      appId: process.env.ONESIGNAL_APP_ID,
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true
      }
    }
  },

  /*
   ** Nuxt Sitemap module configuration
   ** Doc: https://github.com/nuxt-community/sitemap-module
   */
  sitemap: {
    gzip: true,
    exclude: [
      '/dashboard/**'
    ],
    routes: []
  },

  /*
   ** Nuxt Generate
   */
  generate:{
    fallback: true,
  },

  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070',
    height: '2px'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      config.module.rules.push({
        resourceQuery: /blockType=i18n/,
        loader: '@kazupon/vue-i18n-loader'
      })
    }
  }
}

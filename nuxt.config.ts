// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: Boolean(process.env.DEVTOOLS_ENABLE),
    timeline: {
      enabled: Boolean(process.env.DEVTOOLS_ENABLE)
    }
  },
  runtimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL,
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      appUrl: process.env.APP_URL,
      appName: process.env.APP_NAME,
      appStorageName: process.env.APP_STORAGE_NAME,
      cryptSecretKey: process.env.CRYPT_SECRET_KEY
    },
  },
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'title', content: '[title]' },
        { name: 'description', content: '[description]' },
        { name: 'og:title', content: '[og:title]' },
        { name: 'og:description', content: '[og:description]' },
        { name: 'og:image', content: '[og:image]' },
        { name: 'og:url', content: '[og:url]' },
        { name: 'twitter:title', content: '[twitter:title]' },
        { name: 'twitter:description', content: '[twitter:description]' },
        { name: 'twitter:image', content: '[twitter:image]' },
        { name: 'twitter:card', content: 'summary' },
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' },
      ],
    },
  },
  modules: [
    'vuetify-nuxt-module',
    'nuxt3-aos',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    'dayjs-nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/test-utils/module',
    '@nuxt/eslint',
    '@nuxt/content',
    '@dargmuesli/nuxt-cookie-control',
    '@unocss/nuxt',
    'nuxt-snackbar'
  ],
  site: {
    url: process.env.APP_URL,
    name: process.env.APP_NAME,
    description: 'nuxt frontend template',
    locales: ['fr', 'en'],
    defaultLocale: 'fr', // not needed if you have @nuxtjs/i18n installed
  },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: './vuetify.config.ts'
  },
  eslint: {
    config: {
      stylistic: true // <---
    }
  },
  schemaOrg: {
    identity: 'Person'
  },
  snackbar: {
    top: true,
    // right: true,
    duration: 5000,
  },
  i18n: {
    strategy: 'prefix_except_default',
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  dayjs: {
    locales: ['fr', 'en'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'fr',
    defaultTimezone: 'Europe/Paris',
  },
  ogImage: { enabled: false },
  content: {
    watch: false,
    highlight: {
      langs: [
        'c',
        'cpp',
        'ruby'
      ],
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: {
        dark: 'github-dark',
        default: 'github-light',
      },
    },
    markdown: {
      tags: {
        code: 'code',
      },
    },
  },
  cookieControl: {
    cookies: {
      necessary: [
        {
          id: 'theme',
          name:  'Cookies par défaut',
          description:  'Préférence du thème (clair / sombre).'
        }
      ],
      optional: []
    },
  
    // The locales to include.
    locales: ['fr'],
    localeTexts: {
      fr: {
        bannerDescription: 'Nous utilisons des cookies d’origine. Ces cookies sont destinés à vous offrir une navigation optimisée sur ce site web. En poursuivant votre navigation, nous considérons que vous acceptez l’usage des cookies.'
      }
    }
  },
  vite: { // @see https://github.com/nuxt/nuxt/issues/27558
    server: {
      hmr: {
        protocol: "wss",
        clientPort: Number(process.env.HMR_PORT),
        path: "hmr/",
      },
    },
  },
  hooks: { // @see https://github.com/nuxt/nuxt/issues/27558
    'vite:extendConfig': (config) => {
      if (typeof config.server === 'object' && typeof config.server.hmr === 'object') {
        config.server.hmr.protocol = 'wss';
        config.server.hmr.clientPort = Number(process.env.HMR_PORT);
        config.server.hmr.path = "hmr/";
      }
    },
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ["vitest/globals"] // TypeScript support for globals
      }
    }
  }
})

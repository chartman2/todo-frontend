// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
  ],
  site: {
    url: 'https://nuxt-frontend-template.traefik.me/',
    name: 'nuxt-frontend-template',
    description: 'nuxt frontend template',
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
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  dayjs: {
    locales: ['fr', 'en'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'fr',
    defaultTimezone: 'Europe/Paris',
  },
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
  }
})

import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  // any custom Vitest config you require
  plugins: [
  ],
  test: {
    environment: 'nuxt',
    mockReset: true,
    environmentOptions: {
        nuxt: {
          domEnvironment: 'happy-dom',
          
          mock: {
            intersectionObserver: true,
            indexedDb: true,
          },
        },
    },
    globals: true,
    include: ['tests/**/*.nuxt.spec.ts'],
    exclude: ['api', '.nuxt', 'server', 'middleware', 'layouts', 'pages', 'tests', '*.config.ts', '*.d.ts', 'app.vue'],
    coverage: {
        reporter: 'lcov',
        provider: 'v8',
        include: ['components', 'composables', 'stores', 'pages', 'app'],
        all: true
    }
  },
})
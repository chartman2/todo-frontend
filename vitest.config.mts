import { defineVitestConfig } from '@nuxt/test-utils/config'
import { fileURLToPath } from 'node:url'

export default defineVitestConfig({
  // plugins: [vue()],
  test: {
    environment: 'nuxt',
    pool: 'threads',
    poolOptions: {
      threads: {
        // Threads related options here
        maxThreads: 2,
        minThreads: 1
      },
    },
    // root: '/app/',
    dir: 'tests/',
    // mockReset: true,
    environmentOptions: {
        nuxt: {
          domEnvironment: 'happy-dom',
          mock: {
            intersectionObserver: true,
            indexedDb: true,
          },
          dotenv: {
            fileName: '.env.test',
          },
          overrides: {
            // other Nuxt config you want to pass
          },
          rootDir: fileURLToPath(new URL('./', import.meta.url)),
        },
    },
    // server: {
      // debug: {
      //   dumpModules: true
      // }
    // },
    globals: true,
    include: ['**/*.nuxt.spec.ts'],
    exclude: [
      '*.config.mts', 
      '*.d.ts', 
      '*.yml',
      '*.yaml',
      // '*.ts',
      '*.txt',
      'Dockerfile.*',
      'app.vue',
      // '**/{cypress,server,types,node_modules,dist,coverage}/**',
      '**/.{nuxt,continue,plandex,vscode,idea,git,cache,output,temp}/**'
    ],
    coverage: {
        reporter: 'lcov',
        provider: 'v8',
        include: ['components', 'composables', 'stores', 'pages', 'app'],
        exclude: [
          '*.config.mts', 
          '*.d.ts', 
          '*.yml',
          '*.yaml',
          '*.ts',
          '*.txt',
          'Dockerfile.*',
          'app.vue',
          '**/{cypress,app,layouts,middleware,plugins,public,server,types,node_modules,dist,stores}/**', 
          '**/.{nuxt,continue,plandex,vscode,idea,git,cache,output,temp,coverage}/**'
        ],
        all: true
    }
  }
})
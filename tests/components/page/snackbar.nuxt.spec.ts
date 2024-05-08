// @ts-nocheck
// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import TestResource from '~~/components/page/snackbar.vue'

mockNuxtImport('useI18n', () => {
  return () => ({ 
    t: (tKey) => tKey, 
    locale: 'fr' 
  })
})

describe('Components - page/snackbar', async () => {
  it('is a Vue instance', async () => {
    const wrapper = await mountSuspended(TestResource, {
      shallow: true
    })

    expect(wrapper.vm).toBeTruthy()
  })
})
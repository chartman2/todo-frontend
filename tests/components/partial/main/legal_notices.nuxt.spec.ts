// @ts-nocheck
// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import TestResource from '~~/components/partial/main/legal_notices.vue'
import { vuetifyStubs } from '~/tests/stubs/vuetify'

describe('Components - partial/legal_notices', async () => {
  const wrapper = await mountSuspended(TestResource, {
    shallow: true,
    global: {
      stubs: {
        ...vuetifyStubs,
      },
    },
  })

  it('is a Vue instance', async () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
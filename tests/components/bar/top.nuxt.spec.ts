// @ts-nocheck
// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import TestResource from '~~/components/bar/top.vue'
import { vuetifyStubs } from '~/tests/stubs/vuetify'

describe('Components - bar/top', async () => {
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

  it('has initialized values', async () => {
    expect(wrapper.vm.menuItems).toEqual([
      {
        name: 'legal_notices.title',
        icon: 'i-mdi:scale-balance',
        to: '/legal_notices',
      },
      {
        name: 'log_in.title',
        icon: 'i-mdi:log-in',
        to: '/log_in',
      }
    ])
  })
})
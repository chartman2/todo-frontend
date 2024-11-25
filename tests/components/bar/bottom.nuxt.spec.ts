// @ts-nocheck
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import TestResource from '~~/components/bar/bottom.vue'
import { vuetifyStubs } from '~/tests/stubs/vuetify'

describe('Components - bar/bottom', () => {
  it('is a Vue instance', async () => {
    const wrapper = await mountSuspended(TestResource, {
      shallow: true,
      global: {
        stubs: {
          ...vuetifyStubs,
        },
      },
    })

    expect(wrapper.vm).toBeTruthy()
  })

  it('has initialized values', async () => {
    const wrapper = await mountSuspended(TestResource, {
      shallow: true,
      global: {
        stubs: {
          ...vuetifyStubs,
        },
      },
    })
    const dayjs = useDayjs()

    expect(wrapper.vm.currentYear.value).toEqual(dayjs().year())
    expect(wrapper.vm.currentRangeYears.value).toEqual('2022-' + dayjs().year())
  })
})
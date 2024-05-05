// @ts-nocheck
// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import TestResource from '~~/components/bar/bottom.vue'

describe('Components - bar/bottom', async () => {
  it('is a Vue instance', async () => {
    const wrapper = await mountSuspended(TestResource, {
      shallow: true
    })

    expect(wrapper.vm).toBeTruthy()
  })

  it('has initialized values', async () => {
    const wrapper = await mountSuspended(TestResource, {
      shallow: true
    })
    const dayjs = useDayjs()

    expect(wrapper.vm.currentYear.value).toEqual(dayjs().year())
    expect(wrapper.vm.currentRangeYears.value).toEqual('2022-' + dayjs().year())
  })
})
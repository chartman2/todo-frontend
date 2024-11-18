// @ts-nocheck
// @vitest-environment nuxt
import { describe, it, expect, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import TestResource from '~~/components/button/back_to_top.vue'
import { vuetifyStubs } from '~/tests/stubs/vuetify'

describe('Components - button/back_to_top', async () => {
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
    expect(wrapper.vm.showBackToTop.value).toEqual(false)
  })

  it('has functions worked', async () => {
    expect(wrapper.vm.showBackToTop.value).toEqual(false)

    vi.spyOn(window, 'scrollTo').mockImplementation(() => {})

    wrapper.vm.scrollToTop()

    expect(window.scrollTo).toHaveBeenCalled()

    wrapper.vm.showBackToTop.value = true

    expect(wrapper.vm.showBackToTop.value).toEqual(true)

    wrapper.vm.handleScroll()

    expect(wrapper.vm.showBackToTop.value).toEqual(false)
  })
})

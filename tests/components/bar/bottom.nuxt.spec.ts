// @ts-nocheck
// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended, mockNuxtImport } from '@nuxt/test-utils/runtime'

// import TestResource from '~~/components/bar/bottom.vue'
import { BarBottom }from '#components'
import { vuetifyStubs } from '~/tests/stubs/vuetify'

const vueUse = vi.fn()
const nuxtAppMock = {
  vueApp: { use: vueUse}
}
const defineNuxtPluginMock = vi.fn((callbackfn) => {
  return callbackfn(nuxtAppMock)
})

vi.doMock('#imports', () => {
  return {
    defineNuxtPlugin: defineNuxtPluginMock
  }
})
describe('Components - bar/bottom', async () => {
  
  it('is a Vue instance', async () => {
    const wrapper = await mountSuspended(BarBottom, {
      shallow: true,
      global: {
        stubs: {
          ...vuetifyStubs,
        },
      },
    })

    expect(wrapper.vm).toBeTruthy()

    const dayjs = useDayjs()

    expect(wrapper.vm.currentYear.value).toEqual(dayjs().year())
    expect(wrapper.vm.currentRangeYears.value).toEqual('2022-' + dayjs().year())
  })

  // it('has initialized values', async () => {
  //   const wrapper = await mountSuspended(BarBottom, {
  //     shallow: true,
  //     global: {
  //       stubs: {
  //         ...vuetifyStubs,
  //       },
  //     },
  //   })
  //   const dayjs = useDayjs()

  //   expect(wrapper.vm.currentYear.value).toEqual(dayjs().year())
  //   expect(wrapper.vm.currentRangeYears.value).toEqual('2022-' + dayjs().year())
  // })
})
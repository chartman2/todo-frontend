// @ts-nocheck
// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import TestResource from '~~/components/partial/todo/list.vue'

describe('Components - todo/list', async () => {
  it('is a Vue instance', async () => {
    const wrapper = await mountSuspended(TestResource, {
      shallow: true
    })

    expect(wrapper.vm).toBeTruthy()
  })

  it('perform task', async () => {
    const wrapper = await mountSuspended(TestResource, {
      shallow: true
    })

    wrapper.vm.todoStore.addItem({
      name: 'test name',
      done: false,
      scope: 'personnal'
    })

    expect(wrapper.vm.todoStore.getList).toEqual([
      {
        name: 'test name',
        done: false,
        scope: 'personnal'
      }
    ])

    wrapper.vm.performTask(0)

    expect(wrapper.vm.todoStore.getList).toEqual([
      {
        name: 'test name',
        done: true,
        scope: 'personnal'
      }
    ])
  })
})
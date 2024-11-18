// @ts-nocheck
// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import TestResource from '~~/components/partial/todo/new.vue'

describe('Components - todo/new', async () => {
  const wrapper = await mountSuspended(TestResource)

  it('is a Vue instance', async () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('can add task item', async () => {
    wrapper.vm.newTaskName.value = 'test name'
    wrapper.vm.newTaskScope.value = 'personnal'
    wrapper.vm.addTask()

    expect(wrapper.vm.todoStore.getList).toEqual([
      {
        name: 'test name',
        done: false,
        scope: 'personnal'
      }
    ])
  })
})
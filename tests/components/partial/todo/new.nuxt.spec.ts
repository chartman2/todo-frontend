// @ts-nocheck
// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended, mockNuxtImport } from '@nuxt/test-utils/runtime'

import TestResource from '~~/components/partial/todo/new.vue'

mockNuxtImport('useI18n', () => {
  return () => ({ 
    t: (tKey) => tKey, 
    locale: 'fr' 
  })
})

describe('Components - todo/new', async () => {
  it('is a Vue instance', async () => {
    const wrapper = await mountSuspended(TestResource, {
      shallow: true
    })

    expect(wrapper.vm).toBeTruthy()
  })

  it('can add task item', async () => {
    const wrapper = await mountSuspended(TestResource, {
      shallow: true
    })

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
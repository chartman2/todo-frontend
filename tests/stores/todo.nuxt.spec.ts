// @ts-nocheck
import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useTodoStore } from '~/stores/todo.ts'

describe('Store: Todo', () => {
  let store = null

  beforeEach(() => {
    // create a fresh Pinia instance and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // useStore(pinia)
    setActivePinia(createPinia())

    // create an instance of the data store
    store = useTodoStore()
  })

  it('initializes with correct values', () => {
    expect(store.list).toEqual([])
  })
  
  it('can add task', () => {
    expect(store.list).toEqual([])

    store.addItem({
        name: 'test name',
        done: false,
        scope: 'personnal'
    })

    expect(store.list).toEqual([
      {
        name: 'test name',
        done: false,
        scope: 'personnal'
      }
    ])
  })

  it('can perform task', () => {
    expect(store.list).toEqual([])
    
    store.addItem({
        name: 'test name',
        done: false,
        scope: 'personnal'
    })

    expect(store.list).toEqual([
      {
        name: 'test name',
        done: false,
        scope: 'personnal'
      }
    ])

    store.performItem(0)
    
    expect(store.list).toEqual([
      {
        name: 'test name',
        done: true,
        scope: 'personnal'
      }
    ])
  })
})

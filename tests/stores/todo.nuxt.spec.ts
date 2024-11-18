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
    expect(store.getItems).toEqual([])
    expect(store.getScopes).toEqual([])
  })
  
  it('can set items', () => {
    expect(store.getItems).toEqual([])

    store.setItems([{
        name: 'test name',
        done: false,
        scope: 'personnal'
    }])

    expect(store.getItems).toEqual([
      {
        name: 'test name',
        done: false,
        scope: 'personnal'
      }
    ])
  })

  it('can set scopes', () => {
    expect(store.getScopes).toEqual([])
    
    store.setScopes([
      {
        id: 1,
        type: 'scope',
        attributes: {
          id: 1,
          name: 'test 1',
          nickname: 'nickanme 1'
        }
      }
    ])

    expect(store.getScopes).toEqual([
      {
        id: 1,
        type: 'scope',
        attributes: {
          id: 1,
          name: 'test 1',
          nickname: 'nickanme 1'
        }
      }
    ])
  })
})

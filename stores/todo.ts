
import { defineStore, acceptHMRUpdate } from 'pinia'
import type { IItemData, IScopeData } from '~/types/todo'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    items: [] as IItemData[],
    scopes: [] as IScopeData[],
    filteredItems: [] as IItemData[],
  }),
  getters: {
    getItems: state => state.items,
    getScopes: state => state.scopes,
    // getFilteredItems: state => state.filteredItems
  },
  actions: {
    setItems(items: IItemData[]) {
      this.items = items
    },
    setScopes(scopes: IScopeData[]) {
      this.scopes = scopes
    },
  },
  persist: {
      storage: persistedState.localStorage,
  },
})

if (Object.hasOwn(import.meta, 'hot')) {
    // @ts-ignore
    import.meta.hot.accept(acceptHMRUpdate(useTodoStore, import.meta.hot))
}

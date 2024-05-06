
import { defineStore, acceptHMRUpdate } from 'pinia'
import type { ITodoItem } from '~/types/todo'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    list: [] as ITodoItem[]
  }),
  getters: {
    getList: state => state.list
  },
  actions: {
    addItem(item: ITodoItem) {
      this.list.push(item)
    },
    performItem(key: number) {
      this.list[key].done = true
    }
  },
  persist: {
      storage: persistedState.localStorage,
  },
})

if (Object.hasOwn(import.meta, 'hot')) {
    // @ts-ignore
    import.meta.hot.accept(acceptHMRUpdate(useTodoStore, import.meta.hot))
}

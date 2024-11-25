import { defineStore, acceptHMRUpdate } from 'pinia'
import type { IStatus } from '~/types/snackbar/type'
import type { IUserResponse } from '~/types/user'

export const useApplicationStore = defineStore('application', {
  state: () => ({
    isDarkTheme: true,
    isThemeDefined: false,
    category: '' as IStatus,
    message: '' as string,
    show: false as boolean,
    current: {},
    isConnected: false,
  }),
  getters: {
    getIsDarkTheme: state => state.isDarkTheme,
    getIsThemeDefined: (state) => state.isThemeDefined,
    getCategory: (state) => state.category,
    getMessage: (state) => state.message,
    getShow: (state) => state.show,
    getCurrent: (state) => state.current,
    getIsConnected: (state) => state.isConnected,
  },
  actions: {
    setIsDarkTheme(isDarkTheme: boolean) {
      this.isDarkTheme = isDarkTheme
      this.isThemeDefined = true
    },
    setCategory(category: IStatus) {
      this.category = category
    },
    setMessage(message: string) {
      this.message = message
    },
    setShow(show: boolean) {
      this.show = show
    },
    toggleDarkTheme() {
      this.isDarkTheme = !this.isDarkTheme
      this.isThemeDefined = true
    },
    setCurrent(user: IUserResponse) {
      this.current = user
    },
    setIsConnected(isConnected: boolean) {
      this.isConnected = isConnected
    }
  },
  persist: {
    storage: piniaPluginPersistedstate.localStorage,
  },
})

if (Object.hasOwn(import.meta, 'hot')) {
  // @ts-ignore
  import.meta.hot.accept(acceptHMRUpdate(useApplicationStore, import.meta.hot))
}

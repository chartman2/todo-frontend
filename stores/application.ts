
import { defineStore, acceptHMRUpdate } from 'pinia'
import type { IStatus } from '~/types/snackbar/type'

export const useApplicationStore = defineStore('application', {
    state: () => ({
        isDarkTheme: true,
        isThemeDefined: false,
        category: '' as IStatus,
        message: '' as string,
        show: false as boolean
    }),
    getters: {
        getIsDarkTheme: state => state.isDarkTheme,
        getIsThemeDefined: (state) => state.isThemeDefined,
        getCategory: (state) => state.category,
        getMessage: (state) => state.message,
        getShow: (state) => state.show,
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
        }
    },
    persist: {
        storage: persistedState.localStorage,
    },
})

if (Object.hasOwn(import.meta, 'hot')) {
    // @ts-ignore
    import.meta.hot.accept(acceptHMRUpdate(useApplicationStore, import.meta.hot))
}

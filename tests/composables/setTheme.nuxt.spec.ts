
import { describe, it, expect, vi } from 'vitest'

import { setActivePinia, createPinia } from 'pinia'
import { useApplicationStore } from '~/stores/application'

import { setTheme } from '~/composables/setTheme'

describe('Composable: SetTheme', () => {
    let store = null

    it('set theme dark', () => {
        setActivePinia(createPinia())

        // create an instance of the data store
        store = useApplicationStore()

        store.setIsDarkTheme(true)

        vi.stubGlobal('usePreferredDark', () => true)

        expect(setTheme()).toEqual('DarkTheme')
    })

    it('set theme dark', () => {
        setActivePinia(createPinia())

        // create an instance of the data store
        store = useApplicationStore()

        store.setIsDarkTheme(false)

        vi.stubGlobal('usePreferredDark', () => true)

        expect(setTheme()).toEqual('LightTheme')
    })

    it('set theme light', () => {
        setActivePinia(createPinia())

        // create an instance of the data store
        store = useApplicationStore()

        vi.stubGlobal('usePreferredDark', () => true)

        expect(setTheme()).toEqual('LightTheme')
    })

    it('set theme light', () => {
        setActivePinia(createPinia())

        // create an instance of the data store
        store = useApplicationStore()

        vi.stubGlobal('usePreferredDark', () => false)

        expect(setTheme()).toEqual('LightTheme')
    })
})

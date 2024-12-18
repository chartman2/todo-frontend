import { usePreferredDark } from '@vueuse/core'
import { useApplicationStore } from '~/stores/application'

export const setTheme = () => {
  const applicationStore = useApplicationStore()
  const colorMode = usePreferredDark()
  const storeThemeDark = computed(() => applicationStore.getIsDarkTheme)
  const storeThemeDefined = computed(() => applicationStore.getIsThemeDefined)

  if (storeThemeDefined.value === true) {
    return storeThemeDark.value === true
      ? 'DarkTheme'
      : 'LightTheme'
  }
  else if (colorMode.value === true) {
    return 'DarkTheme'
  }
  else {
    return 'LightTheme'
  }
}

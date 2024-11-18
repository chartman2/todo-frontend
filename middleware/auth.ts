import { useApplicationStore } from '~/stores/application'

export default defineNuxtRouteMiddleware(async (to) => {
  const nuxtApp = useNuxtApp()

  useRuntimeHook('page:finish', async () => {
    const usersStore = useApplicationStore()
    
    if (! usersStore.getIsConnected) {
      return navigateTo('/log_in')
    }

    // @ts-ignore
    if (nuxtApp.$api.auth.getStorageAttribut('token') === '' ) {
      return navigateTo('/log_in')
    }

    // @ts-ignore
    const { data, statusCode } = await nuxtApp.$api.auth.info()

    if (statusCode !== 200) {
      return navigateTo('/log_in')
    }
  })
})
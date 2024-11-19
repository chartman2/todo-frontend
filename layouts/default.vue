<template>
  <v-layout>
    <bar-top />
    <v-app>
      <v-main
        dark="isDark"
        class="d-flex align-center fill-height pb-24"
        background-color="background"
      >
        <NuxtLoadingIndicator />
        <slot /> 

        <button-back-to-top />
      </v-main>
    </v-app>
    <CookieControl locale="fr" />
    <NuxtSnackbar />
    <bar-bottom />
  </v-layout>
</template>

<script setup lang="ts">
  import { useApplicationStore } from '~/stores/application'

  const config = useRuntimeConfig()
  const applicationStore = useApplicationStore()
  const theme = useTheme()
  const { locale } = useI18n()

  useHead({
    title: config.public.appName as string,
    htmlAttrs: {
      lang: locale.value || 'fr',
    },
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.ico',
      },
    ],
  })

  const storeThemeDark = computed(() => applicationStore.isDarkTheme)
  
  useRuntimeHook('page:finish', () => {
    theme.global.name.value = setTheme()

    applicationStore.setIsDarkTheme(theme.global.name.value === 'DarkTheme')
  })

  watch(storeThemeDark, (value) => {
    theme.global.name.value =
      value === false ? 'LightTheme' : 'DarkTheme'
  })
</script>

<style>
  .page-enter-active,
  .page-leave-active,
  .component-fade-in {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to,
  .component-fade-out {
    opacity: 0;
    filter: blur(1rem);
  }

  .pb-24 {
    padding-bottom: 96px !important;
  }
</style>

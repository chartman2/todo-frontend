<template>
  <v-row class="d-flex align-self-start py-12">
    <v-container>
      <page-title
        class="py-12"
        :title="$t('legal_notices.title')"
        icon="i-mdi:scale-balance"
      />

      <partial-main-legal-notices />
    </v-container>
  </v-row>
</template>
<script setup>
useHead({
  charset: 'UTF-8',
  author: 'Nuxt author',
  title: 'Mentions Légales',
  description:
    'Todo app',
  keywords:
    'Todo app - nuxt - vuejs',
})
</script>

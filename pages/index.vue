<template>
  <v-row class="d-flex align-self-start py-12">
    <v-container>
      <page-title :title="$t('global.name')" icon="i-mdi:format-list-checks" />

      <section-title :title="$t('tasks.form.title')" />

      <v-row align="center" justify="center">
        <v-col cols="auto">
          <v-btn size="x-large" :nuxt="true" to="todo"> 
            Todo list
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>
<script setup lang="ts">
  definePageMeta({
    middleware: 'auth',
  })
</script>
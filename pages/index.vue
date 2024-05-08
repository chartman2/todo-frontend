<template>
  <v-row class="d-flex align-self-start py-12">
    <v-container>
      <page-title :title="$t('global.name')" icon="i-mdi:format-list-checks" />

      <section-title :title="$t('tasks.form.title')" />

      <partial-todo-new />

      <section-title :title="$t('tasks.list.title')" />
      
      <partial-todo-list />
    </v-container>
  </v-row>
</template>

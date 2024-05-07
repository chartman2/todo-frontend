<template>
  <section-title :title="$t('tasks.list.title')" />
  <v-row
    v-for="(task, key) in listTasks"
    :key="key"
  >
    <v-col cols="4">
      <div :class="{'text-decoration-line-through': task.done === true}">
        {{ $t('tasks.scope.' + task.scope) }}
      </div>
    </v-col>
    <v-col cols="4">
      <div :class="{'text-decoration-line-through': task.done === true}">
        {{ task.name }}
      </div>
    </v-col>
    <v-col cols="4">
      <v-btn 
        v-if="task.done === false"
        type="button" 
        block
        @click.prevent="performTask(key)"
      >
        <v-icon icon="i-mdi:checkbox-marked-circle-plus-outline" />
      
        {{ $t('tasks.form.done') }}
      </v-btn>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { useTodoStore } from '~/stores/todo'

const todoStore = useTodoStore()
const listTasks = computed(() => todoStore.getList)

const performTask = (key: number) => {
  todoStore.performItem(key)
}

</script>
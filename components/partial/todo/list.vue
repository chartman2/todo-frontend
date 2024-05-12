<template>
  <v-row>
    <v-radio-group
      v-model="filterTaskScope"
      inline
    >
      <v-radio
        v-for="(scopeName, scopeKey) in scopeValues"
        :key="scopeKey"
        :label="$t('tasks.scope.' + scopeName)"
        :value="scopeName"
      />
      <v-radio
        :label="$t('tasks.list.all')"
        value="all"
      />
    </v-radio-group>
  </v-row>
  <v-row
    v-for="(task, key) in listTasksFiltred"
    :key="key"
  >
    <v-col cols="4">
      <v-chip color="primary">
        <div :class="{'text-decoration-line-through': task.done === true}">
          {{ $t('tasks.scope.' + task.scope) }}
        </div>
      </v-chip>
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
import { scopeValues } from '~/types/scope'
import type { ITodoItem } from '~/types/todo';

const todoStore = useTodoStore()
const listTasks = computed(() => todoStore.getList)
const filterTaskScope = ref('all')
const listTasksFiltred: Ref<ITodoItem[]> = ref(listTasks.value)

const performTask = (key: number) => {
  todoStore.performItem(key)
}

watch(filterTaskScope, async (newFilter, oldFilter) => {
  if (newFilter === 'all') {
    listTasksFiltred.value = listTasks.value
  } else {
    listTasksFiltred.value = listTasks.value.filter( (task) => {
      return task.scope === newFilter
    })
  }
})
</script>

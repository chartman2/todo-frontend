<template>
  <v-row>
    <v-radio-group
      v-model="filterTaskScope"
      inline
    >
      <template 
        v-for="scope in scopes"
        :key="scope.attributes.id"
        >
        <v-radio
          :label="scope.attributes.nickname"
          :value="scope.attributes.id"
        />
      </template>
      <v-radio
        :label="$t('tasks.list.all')"
        :value="0"
      />
    </v-radio-group>
  </v-row>
  <v-row
    v-for="task in listTasksFiltred"
    :key="task.attributes.id"
  >
    <v-col cols="4">
      <v-chip color="primary">
        <div :class="{'text-decoration-line-through': task.attributes.done === true}">
          {{ $t('tasks.scope.' + getScopeNicknameFromItem(task.attributes.scopeId)) }}
          {{ task.attributes.done === true ? 'Y' : 'N' }}
        </div>
      </v-chip>
    </v-col>
    <v-col cols="4">
      <div :class="{'text-decoration-line-through': task.attributes.done === true}">
        {{ task.attributes.name }}
      </div>
    </v-col>
    <v-col cols="4">
      <v-btn 
        v-if="task.attributes.done === false"
        type="button" 
        block
        @click.prevent="performTask(task)"
      >
        <v-icon icon="i-mdi:checkbox-marked-circle-plus-outline" />
      
        {{ $t('tasks.form.done') }}
      </v-btn>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { useTodoStore } from '~/stores/todo'
import type { IItemData } from '~/types/todo';

const emit = defineEmits(['onUpdateItem'])

const todoStore = useTodoStore()
const items = computed(() => todoStore.getItems)
const scopes = computed(() => todoStore.getScopes)
const filterTaskScope = ref(0)
const listTasksFiltred = computed(() => {
  if (filterTaskScope.value !== 0) {
    return items.value.filter( (item) => {
      return item.attributes.scopeId === filterTaskScope.value
    })
  }

  return items.value
})

const performTask = (task: IItemData) => {
  emit('onUpdateItem', task.attributes.id, task.attributes.name, task.attributes.scopeId, true)
}

const getScopeNicknameFromItem = (scopeId: number) => {
  return scopes.value.find(scope => scope.attributes.id === scopeId)?.attributes.nickname
}
</script>

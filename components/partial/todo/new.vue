<template>
  <v-form 
    @submit.prevent="addTask" 
    v-model="formValid"
  >
    <v-row>
      <v-col cols="8">
        <v-text-field
          v-model="newTaskName"
          :rules="rules"
          :label="$t('tasks.form.name')"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-btn type="submit" block :disabled="!formValid">
          {{ $t('tasks.form.add') }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-radio-group
        v-model="newTaskScope"
        :rules="rules"
        inline
      >
        <v-radio
          v-for="(scopeName, scopeKey) in scopeValues"
          :key="scopeKey"
          :label="$t('tasks.scope.' + scopeName)"
          :value="scopeName"
        ></v-radio>
      </v-radio-group>
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
import { useTodoStore } from '~/stores/todo'
import type { IScope } from '~/types/scope'
import { scopeValues } from '~/types/scope'

const todoStore = useTodoStore()
const { t } = useI18n()
const newTaskName = ref('')
const newTaskScope = ref(null as IScope | null)
const formValid = ref(false)
const rules = reactive([
  (value: string) => {
    if (value) return true

    return t('tasks.form.required')
  },
])

const addTask = () => {
  todoStore.addItem({
    name: newTaskName.value,
    done: false,
    scope: newTaskScope.value as IScope
  })

  newTaskName.value = ''
  newTaskScope.value = null
}
</script>

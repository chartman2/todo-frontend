<template>
  <v-row class="d-flex align-self-start py-12">
    <v-container>
      <page-title :title="$t('global.name')" icon="i-mdi:format-list-checks" />

      <section-title :title="$t('tasks.form.title')" />

      <v-row class="py-3" v-if="formErrors.length > 0">
        <v-alert
          
          class="py-3"
          density="compact"
          :text="formErrors"
          :title="$t('httpCode.warning')"
          type="warning"
        />
      </v-row>

      <partial-todo-new @on-create-item="onCreateItem" />
        
      <section-title :title="$t('tasks.list.title')" />

      <partial-todo-list @on-update-item="onUpdateItem" />
    </v-container>
  </v-row>
</template>
<script setup lang="ts">
import type { ReturnedResponseType } from '~/types/common';

definePageMeta({
  middleware: 'auth',
})

const nuxtApp = useNuxtApp()
const { t } = useI18n()
const snackbar = useSnackbar()
const formErrors = ref('')

useRuntimeHook('page:finish', async () => {
  await getScopesList()

  await getTasksList()
})

const onCreateItem = async (name: string, scopeId: number) => {
  formErrors.value = ''

  // @ts-ignore
  const result: ReturnedResponseType = await nuxtApp.$services.items.create({
    name,
    scope_id: scopeId,
    done: false
  })

  checkResults(result, 'tasks.form.created', 'tasks.form.failed')

  getTasksList()
}

const onUpdateItem = async (itemId: number, name: string, scopeId: number, done: boolean) => {
  // @ts-ignore
  const result: ReturnedResponseType = await nuxtApp.$services.items.update(itemId, {
    name,
    done,
    scope_id: scopeId
  })

  checkResults(result, 'tasks.form.updated', 'tasks.form.failed')

  getTasksList()
}

const getTasksList = async () => {
  // @ts-ignore
  const result: ReturnedResponseType = await nuxtApp.$services.items.list()

  checkResults(result, 'tasks.fetch.successed', 'tasks.fetch.failed')
}

const getScopesList = async () => {
  // @ts-ignore
  const result: ReturnedResponseType = await nuxtApp.$services.scopes.list()

  checkResults(result, 'tasks.fetch.successed', 'tasks.fetch.failed')
}

const checkResults = (result: ReturnedResponseType, successed: string, failed: string) => {
  let text = t(failed)

  if (result.success) {
    text = t(successed)
  } else {
    // @ts-ignore
    formErrors.value = nuxtApp.$services.apiErrors.format(result.data, t)
  }

  snackbar.add({
    type: result.type,
    title: t(result.title),
    text: text
  })
}
</script>
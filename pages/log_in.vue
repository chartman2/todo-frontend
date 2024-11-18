<template>
  <v-row class="d-flex align-self-start py-12">
    <v-container class="py-12">
      <page-title
        :title="$t('auth.log_in')"
        icon="i-mdi:login-variant"
        subtitle=""
      />
      <client-only>
        <card-log-in @on-sign-in="onSignIn" />
      </client-only>
    </v-container>
  </v-row>
</template>

<script setup>
const { $procedures, $api } = useNuxtApp()
const snackbar = useSnackbar()
const { t } = useI18n()


const onSignIn = async (email, password) => {
  const result = await $procedures.auth.signIn(email.value, password.value)
  const router = useRouter()

  let text = t('auth.failed')

  if (result.success) {
    text = t('auth.successed') 

    router.push({ path: '/' })
  }

  snackbar.add({
    type: result.type,
    title: t(result.title),
    text: text
  })
}
</script>

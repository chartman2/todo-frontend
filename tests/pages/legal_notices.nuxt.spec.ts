// @ts-nocheck
// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('Pages - legal_notices', async () => {
  await setup({ host: 'http://localhost:3000', port: 3000 })

  it('is a Vue instance', async () => {
    const html = await $fetch('http://localhost:3000/legal_notices')
    
    expect(html).toContain('Todo application')
  })
})
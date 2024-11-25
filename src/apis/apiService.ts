// @ts-nocheck
import { useStorage, createFetch } from '@vueuse/core'
import type { RemovableRef } from '@vueuse/core'
import type { IFetchResponse } from '~/types/common'
import { DefaultStorage, type IStorage } from '~/types/auth/storage'

import * as CryptoJS from 'crypto-js'

class ApiService {
  static readonly MAX_ATTEMPS = 3
  protected REFRESH_TOKEN: string = '/users/tokens/refresh'

  protected storage: RemovableRef<string>

  private myFetch: any
  private maxAttempts: number = 2
  private key: string
  private iv: string

  constructor() {
    const config = useRuntimeConfig()
    
    this.key = CryptoJS.enc.Utf8.parse(config.public.cryptSecretKey)
    this.iv = CryptoJS.enc.Utf8.parse('7061737323313233')

    this.storage = useStorage(
      config.public.appStorageName, 
      this.setStorageValue(DefaultStorage.token, DefaultStorage.refresh_token),
      window.localStorage,
      {
        // mergeDefaults: true,
        serializer: {
          read: (v) => v,
          write: (v) => String(v)
        },
      }
    )

    this.myFetch = createFetch({
      baseUrl: config.public.apiBaseUrl,
      fetchOptions: {
        mode: 'cors',
        
      },
      options: {
        updateDataOnError: true,
        onFetchError(ctx) {
          if (ctx.error.statusCode === 422) {
            ctx.data = ctx.data
          }

          return ctx
        }
      }
    })
  }

  async fetch (path: string, method: string, headers: HeadersInit, payload: object | null): Promise<IFetchResponse> {
    const requestInit: RequestInit = { method, headers };
    
    let data = { data: {}, statusCode: 0 }
    let attempts = 0
  
    if (payload) {
      requestInit.body = JSON.stringify(payload);
    }

    while (attempts < this.maxAttempts) {
      const response = await this.myFetch(path, requestInit).json()

      if (response.error.value && response.statusCode.value !== 422) {
        attempts++
        
        // @ts-ignore
        if (path !== this.REFRESH_TOKEN) {
          // @ts-ignore
          await this.refreshToken()
        }

        data = { data: response.error.value, statusCode: response.statusCode.value }
      } else {
        data = { data: response.data.value, statusCode: response.statusCode.value }

        attempts = this.maxAttempts
      }
    }
  
    return data
  }

  getAuthHeaders () {
    const authorization: string = this.getStorageAttribut('token')

    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: authorization
    }
  }

  getRefreshHeaders () {
    const authorization: string = this.getStorageAttribut('refresh_token')

    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: authorization
    }
  }

  getHeaders () {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  getUploadHeaders () {
    const authorization: string = this.getStorageAttribut('token')

    return {
      Authorization: authorization
    }
  }

  getStorageAttribut (attribut: string) {
    const storageValue: IStorage = JSON.parse(this.decrypt(this.storage.value))
    
    if (storageValue.hasOwnProperty(attribut)) {
      return storageValue[attribut]
    }

    return undefined
  }

  setStorageValue (token: string, refreshToken: string) {
    return this.encrypt(JSON.stringify({
      token: token,
      refresh_token: refreshToken
    }))
  }

  // https://stackoverflow.com/questions/41671267/encrypt-the-string-in-typescript-and-decrypt-in-c-sharp-using-advanced-encryptio/41792242
  encrypt (message: string | null) {
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(message), this.key, {
      keySize: 128 / 8,
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })

    return encrypted.toString()
  }

  decrypt (encryptedMessage: string | null) {
    const decrypted = CryptoJS.AES.decrypt(encryptedMessage, this.key, {
      keySize: 128 / 8,
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })

    return decrypted.toString(CryptoJS.enc.Utf8)
  }
}

export default ApiService

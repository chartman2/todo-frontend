import ApiService from '~/src/apis/apiService'
import type { IFetchResponse } from '~/types/common'
import type { ILoginInput } from '~/types/auth/log_in'
import { DefaultStorage } from '~/types/auth/storage'

class AuthModule extends ApiService {
  static readonly moduleName = "auth"

  private LOGIN: string = '/users/tokens/sign_in'
  private LOGOUT: string = '/users/tokens/sign_out'
  // private REFRESH_TOKEN: string = '/users/tokens/refresh'
  private INFO: string = '/users/tokens/info'

  async signIn (credentials: ILoginInput): Promise<IFetchResponse> {
    const { data, statusCode } = await this.fetch(this.LOGIN, 'POST', this.getHeaders(), credentials)
    
    if (statusCode === 200) {
      const storageValue = this.setStorageValue(data.token, data.refresh_token)

      this.storage.value = storageValue
    }

    return { data, statusCode }
  }

  async signOut (): Promise<IFetchResponse> {
    const { data, statusCode } = await this.fetch(this.LOGOUT, 'DELETE', this.getAuthHeaders(), null)

    this.storage.value = JSON.stringify(DefaultStorage)

    return { data, statusCode }
  }

  async refreshToken (): Promise<IFetchResponse> {
    const { data, statusCode } = await this.fetch(this.REFRESH_TOKEN, 'POST', this.getRefreshHeaders(), null)

    if (statusCode === 200) {
      const storageValue = this.setStorageValue(data.token, data.refresh_token)

      this.storage.value = storageValue
    }

    return { data, statusCode }
  }

  async info (): Promise<IFetchResponse> {
    return await this.fetch(this.INFO, 'GET', this.getAuthHeaders(), null)
  }
}

export default AuthModule
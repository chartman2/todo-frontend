import AppService from '~/src/appService'
import { useApplicationStore } from '~/stores/application'
import type { ReturnedResponseType } from '~/types/common'

class AuthModule extends AppService {
  static readonly moduleName: string = 'auth'

  async signIn (email: string, password: string): Promise<ReturnedResponseType> {
    const usersStore = useApplicationStore()

    // @ts-ignore
    const { data, statusCode } = await this.nuxtApp.$api.auth.signIn({ email, password })
    
    // @ts-ignore
    const { success, type, title } = this.nuxtApp.$services.httpCodes.checkApiResponse(data, statusCode)

    usersStore.setIsConnected(success)

    return { success, type, title, data }
  }
}

export default AuthModule
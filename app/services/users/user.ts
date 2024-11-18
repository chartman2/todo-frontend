import AppFactory from "~/app/factory"
import type { ReturnedResponseType } from "~/types/common"

class UserModule extends AppFactory {
  static readonly moduleName: string = 'user'

  async current (): Promise<ReturnedResponseType> {
    // @ts-ignore
    const { data, statusCode } = await this.nuxtApp.$api.auth.info()

    // @ts-ignore
    const { success, type, title } = this.nuxtApp.$services.httpCodes.checkApiResponse(data, statusCode)

    return { success, type, title, data }
  }
}

export default UserModule
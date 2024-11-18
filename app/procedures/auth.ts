import AppFactory from '~/app/factory'
import type { ReturnedResponseType } from "~/types/common"

class AuthModule extends AppFactory {
  static readonly moduleName = "auth"

  async signIn (email: string, password: string): Promise<ReturnedResponseType> {
    // @ts-ignore
    const { success, type, title, data } = await this.nuxtApp.$services.auth.signIn(email, password)

    if (! success) {
      return { success, type, title, data }
    }

    // @ts-ignore
    return await this.nuxtApp.$services.user.current()
  }
}

export default AuthModule
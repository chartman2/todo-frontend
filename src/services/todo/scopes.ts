import AppService from '~/src/appService'
import { useTodoStore } from '~/stores/todo'

class ScopesModule extends AppService {
  static readonly moduleName = 'scopes'

  async list () {
    // const { $api } = useNuxtApp()
    const todoStore = useTodoStore()

    // @ts-ignore
    const { data, statusCode } = await this.nuxtApp.$api.scopes.index()

    // @ts-ignore
    const { success, type, title } = this.nuxtApp.$services.httpCodes.checkApiResponse(data, statusCode)

    if (success) {
      todoStore.setScopes(data.data)
    }

    return { success, type, title, data }
  }

  async create (params: any) {
    // @ts-ignore
    const { data, statusCode } = await this.nuxtApp.$api.scopes.create(params)

    // @ts-ignore
    const { success, type, title } = this.nuxtApp.$services.httpCodes.checkApiResponse(data, statusCode)

    return { success, type, title, data }
  }

  async update (id: number, params: any) {
    // @ts-ignore
    const { data, statusCode } = await this.nuxtApp.$api.scopes.update(id, params)

    // @ts-ignore
    const { success, type, title } = this.nuxtApp.$services.httpCodes.checkApiResponse(data, statusCode)

    return { success, type, title, data }
  }

  async destroy (id: number) {
    // @ts-ignore
    const { data, statusCode } = await this.nuxtApp.$api.scopes.destroy(id)

    // @ts-ignore
    const { success, type, title } = this.nuxtApp.$services.httpCodes.checkApiResponse(data, statusCode)

    return { success, type, title, data }
  }
}

export default ScopesModule
import AppFactory from '~/app/factory'
import { useTodoStore } from '~/stores/todo'
import type { ReturnedResponseType } from '~/types/common'

class ItemsModule extends AppFactory {
  static readonly moduleName = 'items'

  async list (): Promise<ReturnedResponseType> {
    const todoStore = useTodoStore()

    // @ts-ignore
    const { data, statusCode } = await this.nuxtApp.$api.items.index()
    
    // @ts-ignore
    const { success, type, title } = this.nuxtApp.$services.httpCodes.checkApiResponse(data, statusCode)

    if (success) {
      todoStore.setItems(data.data)
    }

    return { success, type, title, data }
  }

  async create (params: any): Promise<ReturnedResponseType> {
    // @ts-ignore
    const { data, statusCode } = await this.nuxtApp.$api.items.create(params)

    // @ts-ignore
    const { success, type, title } = this.nuxtApp.$services.httpCodes.checkApiResponse(data, statusCode)

    return { success, type, title, data }
  }

  async update (id: number, params: any): Promise<ReturnedResponseType> {
    // @ts-ignore
    const { data, statusCode } = await this.nuxtApp.$api.items.update(id, params)

    // @ts-ignore
    const { success, type, title } = this.nuxtApp.$services.httpCodes.checkApiResponse(data, statusCode)

    return { success, type, title, data }
  }

  async destroy (id: number): Promise<ReturnedResponseType> {
    // @ts-ignore
    const { data, statusCode } = await this.nuxtApp.$api.items.destroy(id)

    // @ts-ignore
    const { success, type, title } = this.nuxtApp.$services.httpCodes.checkApiResponse(data, statusCode)

    return { success, type, title, data }
  }
}

export default ItemsModule
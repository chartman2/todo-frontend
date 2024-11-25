import ApiService from '~/src/apis/apiService'
import type { IFetchResponse } from '~/types/common'

class ScopesModule extends ApiService {
  static readonly moduleName = "scopes"

  private URL: string = '/api/v1/todo/scopes'

  async index (): Promise<IFetchResponse> {
    return await this.fetch(this.URL, 'GET', this.getAuthHeaders(), null)
  }

  async create (params: any): Promise<IFetchResponse> {
    return await this.fetch(this.URL, 'POST', this.getAuthHeaders(), params)
  }

  async update (id: number, params: any): Promise<IFetchResponse> {
    return await this.fetch(`${this.URL}/${id}`, 'PUT', this.getAuthHeaders(), params)
  }

  async destroy (id: number): Promise<IFetchResponse> {
    return await this.fetch(`${this.URL}/${id}`, 'DELETE', this.getAuthHeaders(), null)
  }
}

export default ScopesModule
export interface IStorage {
  token: string
  refresh_token: string

  [key: string]: any
}

export const DefaultStorage = {
  token: '',
  refresh_token: ''
}
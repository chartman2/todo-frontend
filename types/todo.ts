export type IScopeAttribute = {
  id: number
  name: string
  nickname: string
}

export type IScopeData = {
  id: string
  type: string
  attributes: IScopeAttribute
}

export type IScopeApiResponse = {
  data: IScopeData[]
}

export type IItemAttributes = {
  id: number
  done: boolean
  name: string
  userId: number
  scopeId: number
}

export type IItemData = {
  id: string
  type: string
  attributes: IItemAttributes
}

export type IITemApiResponse = {
  data: IItemData[]
}
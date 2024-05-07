import type { IScope } from "~/types/scope"

export interface ITodoItem {
  name: string
  done: boolean
  scope: IScope
}

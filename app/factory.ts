class AppFactory {
  protected nuxtApp: any

  constructor() {
    this.nuxtApp = useNuxtApp()
  }
}

export default AppFactory
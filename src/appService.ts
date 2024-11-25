class AppService {
  protected nuxtApp: any

  constructor() {
    this.nuxtApp = useNuxtApp()
  }
}

export default AppService
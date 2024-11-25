export default defineNuxtPlugin((nuxtApp) => {
  // @ts-ignore
  const modulesToImport = import.meta.glob('../src/services/**/*.ts')
  const modules = {}

  for (const path in modulesToImport) {
    // @ts-ignore
    modulesToImport[path]().then((module) => {
      const moduleName = module.default.moduleName // Récupérer l'attribut statique "name"
      const moduleInstance = new module.default() // Créer une instance du module

      // @ts-ignore
      modules[moduleName] = moduleInstance // Ajouter le module à l'objet addedModules
    })
  }

  return {
    provide: {
      services: modules,
    },
  }
})
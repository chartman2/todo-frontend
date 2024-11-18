import AppFactory from "~/app/factory";

class ApiErrors extends AppFactory {
  static readonly moduleName: string = 'apiErrors'

  getIndividualItems (errors: { [key: string]: any }, key: string, translate: any) {
    if (Array.isArray(errors[key])) {
      return errors[key].map((item: string) => translate(`errors.${key}.${item}`));
    }

    return [];
  }

  format(errors: { [key: string]: any }, translate: any) {
    if (errors instanceof Object) {
      const formatedErrors = []

      for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
          formatedErrors.push(this.getIndividualItems(errors, key, translate))
        }
      }

      return formatedErrors.join("\n")
    }

    return errors
  }
}

export default ApiErrors
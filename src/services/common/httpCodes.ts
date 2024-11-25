import AppService from "~/src/appService"
import { StatusCode1xx, StatusCode2xx, StatusCode3xx, StatusCode4xx, StatusCode5xx } from "~/types/common"

class HttpCodesModule extends AppService {
  static readonly moduleName: string = 'httpCodes'

  checkApiResponse (data: string, statusCode: number | null) {
    if (data === 'NetworkError when attempting to fetch resource.'
    || statusCode === null
    || StatusCode5xx.hasOwnProperty(statusCode.toString())) {
      return { success: false, type: 'error', title: 'httpCode.error' }
    }

    if (StatusCode1xx.hasOwnProperty(statusCode.toString())
    || StatusCode3xx.hasOwnProperty(statusCode.toString())) {
      return { success: true, type: 'info', title: 'httpCode.info' }
    }

    if (StatusCode2xx.hasOwnProperty(statusCode.toString())) {
      return { success: true, type: 'success', title: 'httpCode.success' }
    }

    if (StatusCode4xx.hasOwnProperty(statusCode.toString())) {
      return { success: false, type: 'warning', title: 'httpCode.warning' }
    }
  }
}

export default HttpCodesModule
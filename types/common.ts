// import { RemovableRef } from "@vueuse/core"

export type stringFunction = (name: string | null) => string;

export interface IFetchResponse {
  data: any
  statusCode: number
}
export type MessageType = "warning" | "error" | "info" | "success" | null | undefined

export type ReturnedResponseType = {
  success: boolean
  type: MessageType
  title: string
  data: any
}

export const StatusCode1xx = {
  100: 'CONTINUE',
  101: 'SWITCHING_PROTOCOLS',
  102: 'PROCESSING',
  103: 'EARLY_HINTS'
}

export const StatusCode2xx = {
  200: 'SUCCESSFUL',
  201: 'CREATED',
  202: 'ACCEPTED',
  203: 'NON_AUTHORITATIVE_INFORMATION',
  204: 'NO_CONTENT',
  205: 'RESET_CONTENT',
  206: 'PARTIAL_CONTENT',
  207: 'MULTI_STATUS',
  208: 'ALREADY_REPORTED',
  226: 'IM_USED6'
}

export const StatusCode3xx = {
   300: 'REDIRECTION',
   301: 'MOVED_PERMANENTLY',
   302: 'FOUND',
   303: 'SEE_OTHER',
   304: 'NOT_MODIFIED',
   305: 'USE_PROXY',
   306: 'SWITCH_PROXY',
   307: 'TEMPORARY_REDIRECT',
   308: 'PERMANENT_REDIRECT'
}

export const StatusCode4xx = {
  400: 'BAD_REQUEST',
  401: 'UNAUTHORIZED',
  402: 'PAYMENT_REQUIRED',
  403: 'FORBIDDEN',
  404: 'NOT_FOUND',
  405: 'METHOD_NOT_ALLOWED',
  406: 'NOT_ACCEPTABLE',
  407: 'PROXY_AUTHENTICATION_REQUIRED',
  408: 'REQUEST_TIMEOUT',
  409: 'CONFLICT',
  410: 'GONE',
  411: 'LENGTH_REQUIRED',
  412: 'PRECONDITION_FAILED',
  413: 'PAYLOAD_TOO_LARGE',
  414: 'URI_TOO_LONG',
  415: 'UNSUPPORTED_MEDIA_TYPE',
  416: 'RANGE_NOT_SATISFIABLE',
  417: 'EXPECTATION_FAILED',
  418: 'I_AM_A_TEAPOT',
  421: 'MISDIRECTED_REQUEST',
  422: 'UNPROCESSABLE_ENTITY',
  423: 'LOCKED',
  424: 'FAILED_DEPENDENCY',
  425: 'TOO_EARLY',
  426: 'UPGRADE_REQUIRED',
  428: 'PRECONDITION_REQUIRED',
  429: 'TOO_MANY_REQUESTS',
  431: 'REQUEST_HEADER_FIELDS_TOO_LARGE'
}

export const StatusCode5xx = {
  500: 'SERVER_ERROR',
  501: 'NOT_IMPLEMENTED',
  502: 'BAD_GATEWAY',
  503: 'SERVICE_UNAVAILABLE',
  504: 'GATEWAY_TIMEOUT',
  505: 'VERSION_NOT_SUPPORTED',
  507: 'INSUFFICIENT_STORAGE'
}
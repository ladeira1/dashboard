import { useState } from "react"
import { MakeRequestOptions, UseFetchParams, UseFetchState } from "./useFetch.interface"
import { api } from "../../services/api"

const DEFAULT_ERROR = {
  status: 400,
  data: {
    message: "API error"
  }
}

const TIMEOUT_CODES = [408, 504]

const DEFAULT_VALUES = {
  isLoading: false,
  data: undefined,
  error: undefined,
  timeout: false
}

export const useFetch = <T>({ url, method }: UseFetchParams) => {
  const [state, setState] = useState<UseFetchState<T>>(DEFAULT_VALUES)

  const makeRequest = async (options?: MakeRequestOptions<T>) => {
    setState({
      isLoading: true,
      data: undefined,
      error: undefined,
      timeout: false,
    })

    await api({
      method,
      url,
      data: options?.data,
      headers: options?.headers,
      params: options?.params
    }).then(response => {
      setState({
        isLoading: false,
        data: response.data,
        error: undefined,
        timeout: false
      })
      options?.onSuccess?.(response)
    }).catch(error => {
      const errorObject = {
        status: error?.response?.status ?? DEFAULT_ERROR.status,
        data: error?.response?.data ?? DEFAULT_ERROR.data,
      }

      setState({
        isLoading: false,
        data: undefined,
        error: errorObject,
        timeout: TIMEOUT_CODES.includes(errorObject.status)
      })
      options?.onError?.(errorObject)
    })
  }

  return { ...state, makeRequest }
}
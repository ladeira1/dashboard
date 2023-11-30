import { AxiosResponse, Method } from "axios";

export interface UseFetchParams {
  url: string;
  method: Method;
}

export interface UseFetchError {
  status: number;
  data: Record<string, any>;
}

export interface UseFetchState<T> {
  data?: T;
  error?: UseFetchError;
  isLoading?: boolean;
  timeout: boolean;
}

export interface MakeRequestOptions<T> {
  data?: Record<string, any>;
  headers?: Record<string, any>;
  params?:Record<string, any>;
  onSuccess?: (response: AxiosResponse<T>) => void;
  onError?: (error: UseFetchError) => void;
}

export interface UseFetchReturnValues<T> extends UseFetchState<T> {
  makeRequest: (options?: MakeRequestOptions<T>) => Promise<void>;
}
import { AxiosError } from 'axios';
import { QueryClient } from '@tanstack/react-query';

export type CustomAxiosError = AxiosError & { response: { data: { message: string } } }

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export function handleError(err: CustomAxiosError) {
  if (err.message == 'Network Error') {
    return { message: 'تعذر الأتصال بالخادم' }
  }
  // else if (error.message === TIMEOUT_ERROR_MESSAGE) {
  //   throw { message: 'تعذر الأتصال بالخادم قي الوقت المحدد' }
  // }
  else {
    // Make sure custom error from API is thrown as err.msg
    return { message: err.response.data.message }
  }
}
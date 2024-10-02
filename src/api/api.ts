import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { axiosInstance } from '@/api/axios'
import { type loginFormData } from '@/pages/login-page/login-page.tsx'
import { AxiosError, AxiosResponse } from 'axios'
import { LoginResponse } from '@/types/types.ts'

type customAxiosError = AxiosError & { response: { data: { message: string } } }
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

// Authentication requests
export function useLogin() {
  return useMutation({
    mutationFn: async (formData: loginFormData): Promise<LoginResponse> => {
      try {
        const response = await axiosInstance.post<LoginResponse>('CSOIntegAuth/csoapi/auth/signin', formData)
        return response.data
      } catch (error) {
        const err = error as customAxiosError
        if (err.message == 'Network Error') {
          throw { message: 'تعذر الأتصال بالخادم' }
        }
        // else if (error.message === TIMEOUT_ERROR_MESSAGE) {
        //   throw { message: 'تعذر الأتصال بالخادم قي الوقت المحدد' }
        // }
        else {
          throw { message: err.response.data.message }
        }
      }
    },
  })
}

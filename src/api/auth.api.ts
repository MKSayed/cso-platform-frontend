import { useMutation } from '@tanstack/react-query'
import { type loginFormData } from '@/pages/login-page/login-page.tsx'
import axios from 'axios'
import { LoginResponse } from '@/types/auth.types.ts'
import { CustomAxiosError, handleError } from '@/api/deps.api.ts';


export function useLogin() {
  return useMutation({
    mutationFn: async (formData: loginFormData): Promise<LoginResponse> => {
      try {
        // Didn't use axiosInstance here because login service is served by another port
        const response = await axios.post<LoginResponse>(
          'http://10.10.60.153:8080/CSOIntegAuth/csoapi/auth/signin',
          formData,
        )
        return response.data
      } catch (error) {
        throw handleError(error as CustomAxiosError)
      }
    },
  })
}
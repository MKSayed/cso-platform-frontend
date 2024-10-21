import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { axiosInstance } from '@/api/axios'
import { type loginFormData } from '@/pages/login-page/login-page.tsx'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { LoginResponse } from '@/types/auth.types.ts'
import {
  BirthCertGovernoratesResponse,
  BirthCertGovernoratesRequest,
  BirthCertRegionalCentersResponse,
  BirthCertRegCentersRequest,
} from '@/types/statistics.types.ts'

type CustomAxiosError = AxiosError & { response: { data: { message: string } } }

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function handleError(err: CustomAxiosError) {
  if (err.message == 'Network Error') {
    return { message: 'تعذر الأتصال بالخادم' }
  }
  // else if (error.message === TIMEOUT_ERROR_MESSAGE) {
  //   throw { message: 'تعذر الأتصال بالخادم قي الوقت المحدد' }
  // }
  else {
    return { message: err.response.data.message }
  }
}

// Authentication requests
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

export function useFetchBirthGovStats() {
  return useMutation({
    mutationFn: async (reqData: BirthCertGovernoratesRequest): Promise<BirthCertGovernoratesResponse> => {
      try {
        const response = await axiosInstance.post(
          'CSOIntegService/cso-api/stats/cert/birth/get-governorates-in-period',
          reqData,
        )
        return response.data
      } catch (error) {
        throw handleError(error as CustomAxiosError)
      }
    },
  })
}

export function useFetchBirthRegCenStats() {
  return useMutation({
    mutationFn: async (reqData: BirthCertRegCentersRequest): Promise<BirthCertRegionalCentersResponse> => {
      try {
        const response = await axiosInstance.post(
          'CSOIntegService/cso-api/stats/cert/birth/governorate/get-regional-centers-in-period',
          reqData,
        )
        return response.data
      } catch (error) {
        throw handleError(error as CustomAxiosError)
      }
    },
  })
}

import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { axiosInstance } from '@/api/axios'
import { type loginFormData } from '@/pages/login-page/login-page.tsx'
import { AxiosError, AxiosResponse } from 'axios'
import {
  LoginResponse,
} from '@/types/auth.types.ts'
import {
  BirthCertGovernoratesResponse,
  BirthCertGovernoratesRequest,
  BirthCertRegionalCentersResponse, BirthCertRegCentersRequest
} from '@/types/statistics.types.ts';

type customAxiosError = AxiosError & { response: { data: { message: string } } }

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function handleError(err: customAxiosError) {
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
        const response = await axiosInstance.post<LoginResponse>('CSOIntegAuth/csoapi/auth/signin', formData)
        return response.data
      } catch (error) {
        throw handleError(error as customAxiosError)
      }
    },
  })
}

export function useFetchBirthGovStats() {
  return useMutation({
    mutationFn: async (reqData: BirthCertGovernoratesRequest): Promise<BirthCertGovernoratesResponse> => {
      try {
        const response = await axiosInstance.post(
          'CSOIntegService/cso-api/stats/cert/birth/governorates',
           reqData,
        )
        return response.data
      } catch (error) {
        throw handleError(error as customAxiosError)
      }
    },
  })
}


export function useFetchBirthRegCenStats() {
  return useMutation({
    mutationFn: async (reqData: BirthCertRegCentersRequest): Promise<BirthCertRegionalCentersResponse> => {
      try {
        const response = await axiosInstance.post(
          'CSOIntegService/cso-api/stats/cert/birth/governorate/regional-centers',
           reqData,
        )
        return response.data
      } catch (error) {
        throw handleError(error as customAxiosError)
      }
    },
  })
}
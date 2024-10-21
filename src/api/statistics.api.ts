import {
  BirthCertGovernoratesResponse,
  BirthCertGovernoratesRequest,
  BirthCertRegionalCentersResponse,
  BirthCertRegCentersRequest,
} from '@/types/statistics.types.ts'
import { useMutation } from '@tanstack/react-query'
import { axiosInstance } from '@/api/axios'
import { CustomAxiosError, handleError } from '@/api/deps.api.ts';


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

export function useFetchAllGovernorates() {
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
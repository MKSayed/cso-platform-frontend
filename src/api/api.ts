import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { axiosInstance } from '@/api/axios'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

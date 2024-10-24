import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { LoginResponse } from '@/types/auth.types.ts'

type UseUserStoreType = {
  user: LoginResponse | null
  setUser: (data: LoginResponse | null) => void
}

export const useUserStore = create(
  persist<UseUserStoreType>(
    (set, get) => ({
      user: null,
      setUser: (userData) => {
        set({ user: userData })
      },
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

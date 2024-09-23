import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type useSidebarToggleStore = {
  isOpen: boolean
  setIsOpen: () => void
}

export const useSidebarStore = create(
  persist<useSidebarToggleStore>(
    (set, get) => ({
      isOpen: true,
      setIsOpen: () => {
        set({ isOpen: !get().isOpen })
      },
    }),
    {
      name: 'sidebarOpen',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

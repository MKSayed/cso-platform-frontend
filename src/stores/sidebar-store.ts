import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { sidebarItem } from '@/types/types.ts'

type useSidebarStoreType = {
  isOpen: boolean
  setIsOpen: () => void
  items: sidebarItem[]
  setItems: (items: sidebarItem[]) => void
}

export const useSidebarStore = create(
  persist<useSidebarStoreType>(
    (set, get) => ({
      isOpen: true,
      setIsOpen: () => {
        set({ isOpen: !get().isOpen })
      },
      // Do not persist sidebar menu items because they contain lucid react icons which is not savable in session or local storage
      items: [],
      // Setter for sidebar items (not persisted)
      setItems: (items) => set({ items }),
    }),
    {
      name: 'sidebar',
      storage: createJSONStorage(() => sessionStorage),
      // @ts-expect-error Ignore the type difference error as I meant to persist the state of isOpen only and
      // not the whole store to avoid conversion of icon prop in items list to a string
      partialize: (state) => ({ isOpen: state.isOpen }), // Persist only `isOpen` state
    },
  ),
)

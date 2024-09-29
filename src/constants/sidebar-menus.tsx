import { sidebarItem } from '@/types/types.ts'
import {
  IdCard,
  Presentation,
  Users,
  Container,
  Languages,
  Settings,
  ShieldCheck,
  ChartNoAxesCombined,
} from 'lucide-react'

// Define the menu items for the "Home" sidebar
export const homeSidebarMenu: sidebarItem[] = [
  {
    label: 'لوحة المعلومات',
    active: false,
    to: '/info-board',
    icon: Presentation,
  },
  {
    label: 'تطبيقات الاحوال المدنية',
    active: false,
    to: '/cso-apps',
    icon: Users,
  },
  {
    label: 'بطاقات',
    active: false,
    to: '/cards',
    icon: IdCard,
  },
  // {
  //   label: 'مخازن',
  //   active: false,
  //   to: '/storage',
  //   icon: Container,
  // },
  {
    label: 'ترجمة',
    active: false,
    to: '/translate',
    icon: Languages,
  },
  {
    label: 'اعدادات النظام',
    active: false,
    to: '/settings',
    icon: Settings,
  },
  {
    label: 'الصلاحيات',
    active: false,
    to: '/permissions',
    icon: ShieldCheck,
  },
  {
    label: 'احصائيات',
    active: false,
    to: '/statistics',
    icon: ChartNoAxesCombined,
  },
]

// Define a TypeScript type for possible menu keys
// Extend this type with additional keys as needed for other menus
export type menuKey = 'main'

// Function to retrieve the appropriate sidebar menu based on the current pathname and menu key
export function getSidebarMenu({
  pathname, // The current URL path
  menuKey, // The key identifying which menu to retrieve
}: {
  pathname: string
  menuKey: menuKey
}): sidebarItem[] {
  let activatedSidebarMenu // Variable to hold the activated sidebar menu items

  // Determine which menu to return based on the `menuKey`
  switch (menuKey) {
    case 'main':
      // Map through the `homeSidebarMenu` items to set the `active` property
      activatedSidebarMenu = homeSidebarMenu.map((menuItem) => ({
        ...menuItem, // Spread the existing properties of the menu item
        active: pathname.includes(menuItem.to), // Set `active` to true if the current pathname includes the menu item's route
      }))
      return activatedSidebarMenu // Return the updated menu with active states

    default:
      // If the `menuKey` doesn't match any case, return an empty array
      return []
  }
}

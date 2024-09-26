import { useSidebarStore } from '@/stores/sidebar-store.ts'
import { useLocation } from 'react-router-dom'
import { getSidebarMenu } from '@/constants/sidebar-menus.tsx'
import { type menuKey } from '@/constants/sidebar-menus.tsx'

/**
 * @description This would be used in all pages to update the sidebar menu items by changing the menuKey only
 */
//
export default function useSidebarMenuLoader() {
  const setSidebarItems = useSidebarStore((store) => store.setItems)
  const pathname = useLocation().pathname

  const loadSidebarMenu = ({ menuKey }: { menuKey: menuKey }) => {
    // useEffect hook to perform side effects when `pathname` changes
    // Retrieve the activated sidebar menu items based on the current pathname and menu key 'home'
    const activatedHomeSidebarMenu = getSidebarMenu({ pathname, menuKey: menuKey })
    // Update the sidebar items in the store with the home sidebar menu
    setSidebarItems(activatedHomeSidebarMenu)
  }
  return { loadSidebarMenu }
}

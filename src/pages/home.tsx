import { ContentLayout } from '@/containers/content-layout.tsx'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Link, useLocation } from 'react-router-dom'
import { Home } from 'lucide-react'
import { PageContent } from '@/components/page-content.tsx'
import { useSidebarStore } from '@/stores/sidebar-store.ts'
import { useEffect } from 'react'
import { getSidebarMenu } from '@/constants/sidebar-menus.tsx'

export default function HomePage() {
  const setSidebarItems = useSidebarStore((store) => store.setItems)
  const pathname = useLocation().pathname
  // useEffect hook to perform side effects when `pathname` changes
  // This would be copied and pasted in all pages to update the sidebar menu items by changing the menuKey only
  useEffect(() => {
    // Retrieve the activated sidebar menu items based on the current pathname and menu key 'home'
    const activatedHomeSidebarMenu = getSidebarMenu({ pathname, menuKey: 'home' })
    // Update the sidebar items in the store with the home sidebar menu
    setSidebarItems(activatedHomeSidebarMenu)
  }, [pathname])

  return (
    <ContentLayout navbarTitle={'مرحباً... احمد شاهر'}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to='/home'>
                {' '}
                <Home size={20} />
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>تطبيقات الاحوال المدنية</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <PageContent>
        <div>Place holder</div>
      </PageContent>
    </ContentLayout>
  )
}

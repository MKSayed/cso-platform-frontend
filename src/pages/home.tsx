import { ContentLayout } from '@/containers/content-layout.tsx'
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Home } from 'lucide-react'
import { PageContent } from '@/components/page-content.tsx'
import useSidebarMenuLoader from '@/hooks/sidebarMenuLoader.ts'

export default function HomePage() {
  // Load corresponding sidebar menu
  const { loadSidebarMenu } = useSidebarMenuLoader()
  loadSidebarMenu({ menuKey: 'main' })

  return (
    <ContentLayout navbarTitle={'مرحباً... احمد شاهر'}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>
              <Home size={20} />
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <PageContent>
        <div className={'flex min-h-[75vh] w-full items-center justify-center'}>مرحباً بك في قطاع الاحوال المدنية</div>
      </PageContent>
    </ContentLayout>
  )
}

import { ContentLayout } from '@/containers/content-layout.tsx'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb.tsx'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import { PageContent } from '@/components/page-content.tsx'
import useSidebarMenuLoader from '@/hooks/sidebarMenuLoader.ts'
import { BirthInquiryForms } from '@/components/birth-inquiry-forms.tsx'

export default function BirthApp() {
  // Load corresponding sidebar menu
  const { loadSidebarMenu } = useSidebarMenuLoader()
  loadSidebarMenu({ menuKey: 'main' })

  return (
    <ContentLayout navbarTitle={'مرحباً... احمد شاهر'}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to={'/home'}>
                <Home size={20} />
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to={'/cso-apps'}>تطبيقات الاحوال المدنية</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>تطبيق المواليد</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>استعلام بالاسم</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <PageContent>
        <div className={'flex w-full justify-start'}>
          <BirthInquiryForms />
        </div>
      </PageContent>
    </ContentLayout>
  )
}
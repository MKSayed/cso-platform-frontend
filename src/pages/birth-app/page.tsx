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
import { PageContent } from '@/containers/page-content.tsx'
import useSidebarMenuLoader from '@/hooks/sidebarMenuLoader.ts'
import { BirthInquiryForms } from '@/pages/birth-app/birth-inquiry-forms.tsx'
import { useState } from 'react'
import { columns } from './columns.tsx'
import { DataTable } from '@/components/ui/data-table.tsx'

export default function BirthApp() {
  const [activeInquiryTab, setActiveInquiryTab] = useState<string>('name')

  // Load corresponding sidebar menu
  const { loadSidebarMenu } = useSidebarMenuLoader()
  loadSidebarMenu({ menuKey: 'main' })

  return (
    <ContentLayout navbarTitle={'مرحباً... احمد شاهر'}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={'/home'}>
                <Home size={20} />
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={'/cso-apps'}>تطبيقات الاحوال المدنية</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>تطبيق المواليد</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{activeInquiryTab === 'name' ? 'استعلام بالاسم' : 'استعلام بالرقم القومي'}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <PageContent>
        <div className={'flex w-full justify-start gap-5'}>
          <div className={'hidden lg:block'}>
            <BirthInquiryForms defaultTabValue={activeInquiryTab} onTabValueChange={setActiveInquiryTab} />
          </div>
          <div className={'w-full overflow-x-hidden'}>
            <DataTable
              columns={columns}
              // Dummy data for UI testing purpose
              data={[
                {
                  firstName: 'محمود',
                  fatherFullName: 'خالد سيد عبدالرحيم ابراهيم محمد خليل',
                  motherFullName: 'حنان سليمان محمد',
                  birthDate: '10/10/2024',
                  idnum: 23423423423432,
                },
              ]}
            />
          </div>
        </div>
      </PageContent>
    </ContentLayout>
  )
}

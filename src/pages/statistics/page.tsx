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
import { StatisticsInquiryForms } from '@/components/statistics-inquiry-forms.tsx'
import { columns } from './governorate-tab-table-columns.tsx'
import { DataTable } from '@/components/ui/data-table.tsx'
import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs.tsx'
import { StyledTabTrigger } from '@/components/styled-tap-trigger.tsx'
import { BirthTapContent } from '@/components/birth-tap-content.tsx'
import { useState } from 'react'

export default function Statistics() {
  const [activeTab, setActiveTab] = useState<string>('governorate')

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
            <BreadcrumbPage>asdsad</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <PageContent>
        <Tabs onValueChange={setActiveTab} defaultValue={activeTab}>
          <div className={'-mt-3 mb-4 flex justify-center'}>
            <TabsList className={'h-[42px] rounded-[6px] border border-gray-200 bg-white text-[#0B0367]'} dir='rtl'>
              <StyledTabTrigger value='governorate'>المحافظة</StyledTabTrigger>
              <StyledTabTrigger value='workLocations'>مواقع العمل</StyledTabTrigger>

              <StyledTabTrigger value='employees'>الموظفين</StyledTabTrigger>
            </TabsList>
          </div>
          <TabsContent value={'governorate'}>
            <div className={'flex w-full justify-start gap-5'} dir={'rtl'}>
              <div className={'hidden lg:block'}>
                <StatisticsInquiryForms withWorkLocation={activeTab !== 'governorate'} />
              </div>
              <div className={'w-full overflow-x-hidden'}>
                <DataTable
                  columns={columns}
                  // Dummy data for UI testing purpose
                  data={[
                    {
                      issued: 22,
                      repeated: 33,
                      canceled: 23,
                      taxed: 222,
                      total: 234,
                    },
                  ]}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </PageContent>
    </ContentLayout>
  )
}

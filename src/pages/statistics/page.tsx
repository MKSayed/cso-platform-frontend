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
import { DataTable } from '@/components/ui/data-table.tsx'
import { Tabs, TabsList } from '@/components/ui/tabs.tsx'
import { StyledTabTrigger } from '@/components/styled-tap-trigger.tsx'
import { useEffect, useState } from 'react'
import { columns as birthGovernorateColumns } from './birth-governorate-tab-table-columns.tsx'
import { GovCertType } from '@/types/types.ts'
import data from '@/constants/birth-gov-stats-in-period.json'

export default function Statistics() {
  const [activeTab, setActiveTab] = useState<string>('governorate')
  const [tableData, setTableData] = useState<GovCertType[]>([])
  const [variant, setVariant] = useState<string>('') // State linked with document type field of the statistics inquiry forms

  const { loadSidebarMenu } = useSidebarMenuLoader()
  useEffect(() => {
    // Load corresponding sidebar menu
    loadSidebarMenu({ menuKey: 'main' })
  }, [])

  // const columns = activeTab ?

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
            <BreadcrumbPage>الاحصائيات</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>إحصائيات الوثائق الممكينة</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <PageContent>
        <Tabs onValueChange={setActiveTab} defaultValue={activeTab}>
          <div className={'-mt-3 mb-4 flex justify-center'}>
            <TabsList className={'h-[42px] rounded-[6px] border border-gray-200 bg-white text-[#0B0367]'} dir='rtl'>
              <StyledTabTrigger value='governorate'>المحافظة</StyledTabTrigger>
              <StyledTabTrigger value='workSite'>مواقع العمل</StyledTabTrigger>

              <StyledTabTrigger value='employee'>الموظفين</StyledTabTrigger>
            </TabsList>
          </div>
          <div className={'flex w-full justify-start gap-5'} dir={'rtl'}>
            <div className={'hidden lg:block'}>
              <StatisticsInquiryForms
                variant={variant}
                setVariant={setVariant}
                setTableData={setTableData}
                activeTab={activeTab}
              />
            </div>
            <div className={'w-full overflow-x-hidden'}>
              <DataTable
                columns={birthGovernorateColumns}
                // Dummy data for UI testing purpose
                data={data.govCertType}
              />
            </div>
          </div>
        </Tabs>
      </PageContent>
    </ContentLayout>
  )
}

import { Home } from 'lucide-react'
import { ContentLayout } from '@/containers/content-layout.tsx'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb.tsx'
import { PageContent } from '@/containers/page-content.tsx'
import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs.tsx'
import { BirthTapContent } from '@/components/birth-tap-content.tsx'
import { StyledTabTrigger } from '@/components/styled-tap-trigger.tsx'
import { Link } from 'react-router-dom'

export default function PersonFullDetails() {
  // Call the sidebar loader hook with the appropriate menuKey when design is ready
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
            <BreadcrumbLink asChild>
              <Link to={'/cso-apps/birth'}>تطبيق المواليد</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>28609010206511</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <PageContent>
        <Tabs defaultValue={'birth'}>
          <div className={'-mt-3 mb-4 flex justify-center'}>
            <TabsList className={'h-[42px] rounded-[6px] border border-gray-200 bg-white text-[#0B0367]'} dir='rtl'>
              <StyledTabTrigger value='birth'>بيانات المولود التفصيلية</StyledTabTrigger>
              <StyledTabTrigger value='marriageAndDivroce'>حالات الزواج و الطلاق</StyledTabTrigger>

              <StyledTabTrigger value='sons'>بيانات الأبناء</StyledTabTrigger>

              <StyledTabTrigger value='death'>بيانات الوفاة التفصيلية</StyledTabTrigger>
              <StyledTabTrigger value='familyTree'>القيد العائلي</StyledTabTrigger>
            </TabsList>
          </div>
          <TabsContent value={'birth'}>
            <BirthTapContent />
          </TabsContent>
        </Tabs>
      </PageContent>
    </ContentLayout>
  )
}

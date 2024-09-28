import { Home } from 'lucide-react'
import { Button } from '@/components/ui/button.tsx'
import { ContentLayout } from '@/containers/content-layout.tsx'
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from '@/components/ui/breadcrumb.tsx'
import { PageContent } from '@/containers/page-content.tsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.tsx';
import { ReactNode } from 'react'
import { cn, copyToClipboard } from '@/lib/utils.ts';
import { TextField } from '@/components/text-field.tsx';
import { BirthTapContent } from '@/pages/person-full-details/birth-tap-content.tsx';
import { StyledTabTrigger } from '@/components/styled-tap-trigger.tsx';


export default function PersonFullDetails() {
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
            <BirthTapContent/>
            </TabsContent>
        </Tabs>
      </PageContent>
    </ContentLayout>
  )
}
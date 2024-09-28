import { ContentLayout } from '@/containers/content-layout.tsx'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb.tsx'
import { Home } from 'lucide-react'
import { PageContent } from '@/containers/page-content.tsx'
import { AppCard } from '@/components/app-card.tsx'
import useSidebarMenuLoader from '@/hooks/sidebarMenuLoader.ts'
import babyIcon from '@/assets/baby.svg'
import graveIcon from '@/assets/grave.svg'
import marriageIcon from '@/assets/marriage.svg'
import divorceIcon from '@/assets/divorce.svg'
import familyTreeIcon from '@/assets/family-tree.svg'
import statisticsIcon from '@/assets/statistics.svg'
import { Link } from 'react-router-dom'

// Next lines is needed to cause tailwind engine to load these classes into the output bundle
// bg-[#24B755] hover:bg-[#24B755]/70
// bg-[#F9F3DB] hover:bg-[#F9F3DB]/70
// bg-[#E9E1EC] hover:bg-[#E9E1EC]/70
// bg-[#F5C5A8] hover:bg-[#F5C5A8]/70
// bg-[#FDDB51] hover:bg-[#FDDB51]/70
// bg-[#67E8F9] hover:bg-[#67E8F9]/70

export default function CsoApps() {
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
            <BreadcrumbPage>تطبيقات الاحوال المدنية</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <PageContent>
        <div
          className={
            'grid w-full justify-items-center gap-y-12 px-32 pt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }
        >
          <AppCard
            title={'تطبيق المواليد'}
            description={'استعلامات و طباعات الخاصة بحالات المواليد'}
            color={'#24B755'}
            textColor={'white'}
            icon={<img src={babyIcon} alt='baby' />}
            to={'birth'}
          />
          <AppCard
            title={'تطبيق الوفاة'}
            description={'استعلامات و طباعات الخاصة بحالات الوفاة'}
            color={'#F9F3DB'}
            textColor={'black'}
            icon={<img src={graveIcon} alt='grave' />}
            to={''}
          />
          <AppCard
            title={'تطبيق الزواج'}
            description={'استعلامات و طباعات الخاصة بحالات الزواج'}
            color={'#E9E1EC'}
            textColor={'black'}
            icon={<img src={marriageIcon} alt='marriage' />}
            to={''}
          />
          <AppCard
            title={'تطبيق الطلاق'}
            description={'استعلامات و طباعات الخاصة بحالات الطلاق'}
            color={'#F5C5A8'}
            textColor={'black'}
            icon={<img src={divorceIcon} alt='divorce' />}
            to={''}
          />
          <AppCard
            title={'تطبيق القيد العائلي'}
            description={'استعلامات و طباعات الخاصة بقيد العائلي'}
            color={'#FDDB51'}
            textColor={'black'}
            icon={<img src={familyTreeIcon} alt='family tree' />}
            to={''}
          />
          <AppCard
            title={'احصائيات'}
            description={'استعلامات و طباعات الخاصة بالاحصائيات'}
            color={'#67E8F9'}
            textColor={'black'}
            icon={<img src={statisticsIcon} alt='statistics' />}
            to={''}
          />
        </div>
      </PageContent>
    </ContentLayout>
  )
}

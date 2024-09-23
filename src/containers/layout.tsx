import { Outlet } from 'react-router-dom'
import { ContentLayout } from '@/containers/content-layout.tsx';

export default function Layout() {
  return (
    <main>
      <ContentLayout title={'مرحباً... احمد شاهر'}>
        <Outlet/>
      </ContentLayout>

      <div />
    </main>
  )
}

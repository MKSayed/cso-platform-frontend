import { Navbar } from '@/components/navbar'
import { ReactNode } from 'react'

type props = {
  navbarTitle: string
  children: ReactNode
}

export function ContentLayout({ navbarTitle, children }: props) {
  return (
    <div>
      <Navbar title={navbarTitle} />
      <div className='w-full px-5 pt-4 '>{children}</div>
    </div>
  )
}

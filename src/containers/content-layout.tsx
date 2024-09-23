import { Navbar } from '@/components/navbar'
import { ReactNode } from 'react'

type props = {
  title: string
  children: ReactNode
}

export function ContentLayout({ title, children }: props) {
  return (
    <div>
      <Navbar title={title} />
      <div className='container px-4 pb-8 pt-8 sm:px-8'>{children}</div>
    </div>
  )
}

import { Card, CardContent } from '@/components/ui/card'
import { ReactNode } from 'react'

type props = {
  children: ReactNode
}
export function PageContent({ children }: props) {
  return (
    <Card className='mt-5 rounded-lg border-none shadow-[0px_0px_2px_1px_rgba(0,0,0,0.15)]'>
      <CardContent className='p-6'>
        {/* Add - 48px or more if you need to add a footer*/}
        <div className='min-h-[calc(100vh-56px-64px-20px-24px-22px)]'>{children}</div>
      </CardContent>
    </Card>
  )
}

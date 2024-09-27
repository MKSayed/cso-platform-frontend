import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import { ReactNode } from 'react'

type props = {
  title: string
  description: string
  color: string
  icon: ReactNode
}

export function AppCard({ title, description, color, icon }: props) {
  return (
    <div className='p-4'>
      <Card className='min-h-[202px] min-w-[277px] overflow-hidden rounded-md shadow-[0px_0px_5px_2px_rgba(0,_0,_0,_0.15)]'>
        <CardContent className='p-0'>
          <div className={`px-3 pt-3 bg-[${color}]`}>
            <div className='flex min-h-[145px] justify-between'>
              <div className='h-[74px] w-[82px] self-end'>{icon}</div>
              <div className='space-y-1 pt-2'>
                <h1 className='text-xl font-medium text-white'>{title}</h1>
                <p className='w-[177px] text-pretty text-[16px] font-light text-green-100'>{description}</p>
              </div>
            </div>
          </div>
          <div className='flex max-h-14 items-center justify-end bg-white p-4'>
            <Button
              className={`flex w-fit gap-2 bg-green-500 text-white hover:bg-green-600 bg-[${color}] hover:bg-[${color}]/80 rounded-[8px]`}
            >
              بدء الخدمة
              <ArrowLeft />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

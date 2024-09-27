import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type props = {
  title: string
  description: string
  color: string
  textColor: string
  icon: ReactNode
  to: string
}

export function AppCard({ title, description, color, textColor, icon, to }: props) {
  return (
    <Card className='min-h-[202px] min-w-[320px] overflow-hidden rounded-md shadow-[0px_0px_5px_2px_rgba(0,_0,_0,_0.20)]'>
      <CardContent className='p-0'>
        <div className={`px-3 pt-3 bg-[${color}]`}>
          <div className='flex min-h-[145px] justify-between'>
            <div className='h-[74px] w-[82px] self-end'>{icon}</div>
            <div className='space-y-1 pt-2'>
              <h1 className={`text-xl font-medium text-${textColor}`}>{title}</h1>
              <p className={`w-[177px] text-pretty text-[16px] font-light text-${textColor}`}>{description}</p>
            </div>
          </div>
        </div>
        <div className='flex max-h-14 items-center justify-end bg-white p-4'>
          <Link to={to}>
            <Button className={`flex w-fit gap-2 text-${textColor} bg-[${color}] hover:bg-[${color}]/70 rounded-[8px]`}>
              بدء الخدمة
              <ArrowLeft />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

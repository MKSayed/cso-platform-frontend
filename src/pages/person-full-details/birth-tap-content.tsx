import { TextField } from '@/components/text-field.tsx'
import { cn, copyToClipboard } from '@/lib/utils.ts'
import { Button } from '@/components/ui/button.tsx'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover.tsx'
import { useState } from 'react'
import { Maximize2, Minimize2 } from 'lucide-react'

export function BirthTapContent() {
  // State of actions button
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <h2 className='mb-2 text-right text-lg font-normal'>بيانات المواليد التفصيلية</h2>
      <div className='text-right' dir={'rtl'}>
        <div className=' rounded-t-lg border-t border-[#99FFBB] bg-[#E5FFEE] px-3 pt-2'>
          <div className='grid grid-cols-3 place-items-start gap-2 py-2 lg:gap-32 xl:grid-cols-4'>
            <TextField
              className={'gap-2 xl:col-span-1'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[190px] [direction:_ltr] justify-end'}
              label='الرقم القومي'
              value='2 86090 10206 511'
            />
            <TextField
              className={'gap-2 xl:col-span-1'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[190px]'}
              label='الرقم الطلب'
              value='0139911970'
            />
            <TextField
              className={'gap-2 xl:col-span-1'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[190px]'}
              label='الرقم التأميني'
              value='2216225'
            />
          </div>
          <div className='grid grid-cols-4 place-items-start gap-2 border-t-2 border-white py-2 xl:grid-cols-5 xl:gap-32'>
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label='الاسم'
              value='احمد'
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label='اسم الشهرة'
              value='احمد'
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label='الديانة'
              value='مسلم'
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label='النوع'
              value='ذكر'
            />
          </div>
          <div className='grid grid-cols-5 grid-rows-1 place-items-start items-center gap-2 border-t-2 border-white py-2 xl:gap-32'>
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label='تاريخ الميلاد'
              value='1986/09/01'
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label='الجنسية'
              value='مصر'
            />

            <div className={cn(`col-span-3 flex items-center gap-2`)}>
              <span className={cn('text-sm font-medium xl:w-[100px]')}>محل الميلاد</span>
              <div className='flex items-center justify-start gap-2 rounded-[8px] border border-dashed border-[#646466] p-2'>
                <TextField
                  className={'gap-2'}
                  labelClassName={'xl:w-[40px]'}
                  buttonClassName={'p-2 xl:w-[70px]'}
                  label='الدولة'
                  value='مصر'
                />
                <TextField
                  className={'gap-2'}
                  labelClassName={'xl:w-60px]'}
                  buttonClassName={'p-2 xl:w-[87px]'}
                  label='المحافظة'
                  value='مصر'
                />
                <TextField
                  className={'gap-2'}
                  labelClassName={'xl:w-[40px]'}
                  buttonClassName={'p-2 xl:w-[116px]'}
                  label='مركز/قسم'
                  value='الدرب الاحمر'
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className='mx-2 my-2 text-right text-lg font-normal'>بيانات الأب</h2>

        <div className='rounded-t-lg border-t border-[#66E6FF] bg-[#E5FBFF] px-3 py-2'>
          <div className='grid grid-cols-4 place-items-start gap-2 py-2 xl:grid-cols-5 xl:gap-32'>
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label='الاسم'
              value='محمد'
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label='الجد'
              value='محمود'
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label='اللقب'
              value='الازهري'
            />
          </div>

          <div className='grid grid-cols-4 place-items-start gap-2 border-t-2 border-white py-2 xl:grid-cols-5 xl:gap-32'>
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label='الديانة'
              value='مسلم'
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label='الجنسية'
              value='مصر'
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[182px]'}
              label='الرقم القومي'
              value='22401240100639'
            />
          </div>
        </div>

        <h2 className='mx-2 my-2 text-right text-lg font-normal'>بيانات الأم</h2>

        <div className='rounded-t-lg border-t border-[#FF9999] bg-[#FFE4E4] px-3 py-2'>
          <div className='grid grid-cols-4 place-items-start gap-2 py-2 xl:grid-cols-5 xl:gap-32'>
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label='الاسم'
              value='فاطمة'
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label='الجد'
              value='محمود'
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label='اللقب'
              value='الازهري'
            />
          </div>

          <div className='grid grid-cols-4 place-items-start gap-2 border-t-2 border-white py-2 xl:grid-cols-5 xl:gap-32'>
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label='الديانة'
              value='مسلمة'
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label='الجنسية'
              value='مصر'
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[182px]'}
              label='الرقم القومي'
              value='22401240100639'
            />
          </div>
        </div>

        <h2 className='mx-2 my-2 text-right text-lg font-normal'>بيانات القيد</h2>

        <div className='rounded-t-lg border-t border-[#FCEEA6] bg-[#FFFDF5] px-3 py-2 '>
          <div className='grid grid-cols-3 place-items-center items-center gap-2 py-2 xl:grid-cols-10  xl:place-items-start'>
            <div className='flex items-center justify-start gap-2 rounded-[8px] border border-dashed border-[#646466] p-2 xl:col-span-3'>
              <span className={'text-sm font-medium xl:w-[100px]'}>سجل مدني</span>
              <Button
                variant='outline'
                className='justify-start rounded-[8px] border border-black text-right text-sm font-normal xl:w-[116px]'
                onClick={() => copyToClipboard('الدرب الأحمر')}
              >
                الدرب الأحمر
              </Button>

              <Button
                variant='outline'
                className='justify-start rounded-[8px] border border-black text-right text-sm font-normal xl:w-[64px]'
                onClick={() => copyToClipboard('108')}
              >
                108
              </Button>
            </div>

            <TextField
              className={'flex items-center gap-2 xl:col-span-3'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label='رقم'
              value='281'
            />

            <TextField
              className={'gap-2 xl:col-span-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label='التاريخ'
              value='1986/09/02'
            />
          </div>

          <div className='grid grid-cols-3 place-items-center items-center gap-2 border-t-2 border-white py-2 xl:grid-cols-10 xl:place-items-start'>
            <div className='flex items-center justify-start gap-2 rounded-[8px] border border-dashed border-[#646466] p-2 xl:col-span-3'>
              <span className={'text-sm font-medium xl:w-[100px]'}>مكتب صحة</span>
              <Button
                variant='outline'
                className='justify-start rounded-[8px] border border-black text-right text-sm font-normal xl:w-[116px]'
                onClick={() => copyToClipboard('الدرب الأحمر')}
              >
                الدرب الأحمر
              </Button>

              <Button
                variant='outline'
                className='justify-start rounded-[8px] border border-black text-right text-sm font-normal xl:w-[64px]'
                onClick={() => copyToClipboard('221')}
              >
                221
              </Button>
            </div>

            <TextField
              className={'flex items-center gap-2 xl:col-span-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label='دفتر'
              value='108'
            />
          </div>
        </div>

        <div className='fixed bottom-0 left-8 flex justify-end'>
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <div className='mb-4 flex items-center justify-between'>
                <Button className={'flex w-40 justify-between'} onClick={() => setIsOpen(true)} variant={'outline'}>
                  قائمة الاجراءات
                  <Maximize2 size={20} />
                </Button>
              </div>
            </PopoverTrigger>

            <PopoverContent className='max-w-[200px] rounded-lg border-dashed border-black bg-gray-100 font-readex opacity-90'>
              <div className='mb-4 flex items-center justify-between'>
                <Button onClick={() => setIsOpen(false)} variant={'ghost'}>
                  <Minimize2 size={20} />
                </Button>
                <span className='text-center text-sm font-semibold'>قائمة الاجراءات</span>
              </div>
              <div className='flex flex-col gap-4'>
                <Button className='w-full rounded bg-blue-900 py-2 text-white'>طباعة شهادة الميلاد</Button>
                <Button className='w-full rounded bg-blue-900 py-2 text-white'>تفصيلي بطاقة</Button>
                <Button className='w-full rounded bg-blue-900 py-2 text-white '>حركات المعاملات</Button>
                <Button className='w-full rounded bg-blue-900 py-2 text-white'>بيانات معلقة</Button>
                <Button className='w-full rounded bg-red-500 py-2 text-white'>بحث عن الغرامات</Button>
              </div>
            </PopoverContent>
          </Popover>
          {isOpen && (
            <div
              className='fixed inset-0 bg-black bg-opacity-50 transition-opacity'
              aria-hidden='true'
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
      </div>
    </>
  )
}

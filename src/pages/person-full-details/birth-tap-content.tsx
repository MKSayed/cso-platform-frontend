import { TextField } from '@/components/text-field.tsx';
import { cn, copyToClipboard } from '@/lib/utils.ts';
import { Button } from '@/components/ui/button.tsx';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover.tsx';
import { useState } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';

export function BirthTapContent(){
  // State of actions button
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <h2 className='mb-2 text-right text-lg font-normal'>بيانات المواليد التفصيلية</h2>
      <div className="text-right" dir={'rtl'}>
        <div className=" rounded-t-lg bg-[#E5FFEE] px-3 pt-2 border-t border-[#99FFBB]">
          <div className="grid grid-cols-3 place-items-start gap-2 py-2 lg:gap-32 xl:grid-cols-9">
            <TextField
              className={'gap-2 xl:col-span-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[190px]'}
              label="الرقم القومي"
              value="28609010206511"
            />
            <TextField
              className={'gap-2 xl:col-span-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[190px]'}
              label="الرقم الطلب"
              value="0139911970"
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[190px]'}
              label="الرقم التأميني"
              value="2216225"
            />
          </div>
          <div
            className="grid grid-cols-4 place-items-start gap-2 border-t-2 border-white py-2 xl:grid-cols-5 xl:gap-32">
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label="الاسم"
              value="احمد"
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label="اسم الشهرة"
              value="احمد"
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label="الديانة"
              value="مسلم"
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label="النوع"
              value="ذكر"
            />
          </div>
          <div
            className="grid grid-cols-5 items-center grid-rows-1 place-items-start gap-2 border-t-2 border-white py-2 xl:gap-32">
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label="تاريخ الميلاد"
              value="1986/09/01"
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label="الجنسية"
              value="مصر"
            />

            <div className={cn(`flex items-center col-span-3 gap-2`)}>
              <span className={cn('text-sm font-medium xl:w-[100px]')}>محل الميلاد</span>
              <div
                className="flex p-2 gap-2 items-center justify-start rounded-[8px] border-dashed border border-[#646466]">
                <TextField
                  className={'gap-2'}
                  labelClassName={'xl:w-[100px]'}
                  buttonClassName={'p-2 xl:w-[70px]'}
                  label="الدولة"
                  value="مصر"
                />
                <TextField
                  className={'gap-2'}
                  labelClassName={'xl:w-[100px]'}
                  buttonClassName={'p-2 xl:w-[87px]'}
                  label="المحافظة"
                  value="مصر"
                />
                <TextField
                  className={'gap-2'}
                  labelClassName={'xl:w-[100px]'}
                  buttonClassName={'p-2 xl:w-[116px]'}
                  label="مركز/قسم"
                  value="الدرب الاحمر"
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className="mx-2 my-2 text-right text-lg font-normal">بيانات الأب</h2>

        <div className="rounded-t-lg bg-[#E5FBFF] px-3 py-2 border-t border-[#66E6FF]">

          <div
            className="grid grid-cols-4 place-items-start gap-2 py-2 xl:grid-cols-5 xl:gap-32">
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label="الاسم"
              value="محمد"
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label="الجد"
              value="محمود"
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label="اللقب"
              value="الازهري"
            />
          </div>

          <div
            className="grid grid-cols-4 place-items-start gap-2 py-2 border-t-2 border-white xl:grid-cols-5 xl:gap-32">
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label="الديانة"
              value="مسلم"
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label="الجنسية"
              value="مصر"
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[182px]'}
              label="الرقم القومي"
              value="22401240100639"
            />
          </div>

        </div>

        <h2 className="mx-2 my-2 text-right text-lg font-normal">بيانات الأم</h2>

        <div className="rounded-t-lg bg-[#FFE4E4] px-3 py-2 border-t border-[#FF9999]">

          <div
            className="grid grid-cols-4 place-items-start gap-2 py-2 xl:grid-cols-5 xl:gap-32">
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label="الاسم"
              value="فاطمة"
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label="الجد"
              value="محمود"
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label="اللقب"
              value="الازهري"
            />
          </div>

          <div
            className="grid grid-cols-4 place-items-start gap-2 py-2 border-t-2 border-white xl:grid-cols-5 xl:gap-32">
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label="الديانة"
              value="مسلمة"
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label="الجنسية"
              value="مصر"
            />
            <TextField
              className={'gap-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[182px]'}
              label="الرقم القومي"
              value="22401240100639"
            />
          </div>

        </div>


        <h2 className="mx-2 my-2 text-right text-lg font-normal">بيانات القيد</h2>


        <div className="rounded-t-lg bg-[#FFFDF5] px-3 py-2 border-t border-[#FCEEA6] ">

          <div
            className="grid grid-cols-3 place-items-center xl:place-items-start items-center gap-2 py-2  xl:grid-cols-12">

            <div
              className="flex xl:col-span-3 p-2 gap-2 items-center justify-start rounded-[8px] border-dashed border border-[#646466]">
              <span className={'text-sm font-medium xl:w-[100px]'}>سجل مدني</span>
              <Button
                variant="outline"
                className='justify-start xl:w-[116px] rounded-[8px] border border-black text-right text-sm font-normal'

                onClick={() => copyToClipboard('الدرب الأحمر')}
              >
                الدرب الأحمر
              </Button>

              <Button
                variant="outline"
                className='justify-start xl:w-[64px] rounded-[8px] border border-black text-right text-sm font-normal'

                onClick={() => copyToClipboard('108')}
              >
                108
              </Button>
            </div>

            <TextField
              className={'gap-2 xl:col-span-3 flex items-center'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label="رقم"
              value="281"
            />

            <TextField
              className={'gap-2 xl:col-span-2'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label="التاريخ"
              value="1986/09/02"
            />
          </div>

          <div
            className="grid grid-cols-3 place-items-center xl:place-items-start items-center gap-2 border-t-2 border-white py-2 xl:grid-cols-12">

            <div
              className="flex xl:col-span-3 p-2 gap-2 items-center justify-start rounded-[8px] border-dashed border border-[#646466]">
              <span className={'text-sm font-medium xl:w-[100px]'}>مكتب صحة</span>
              <Button
                variant="outline"
                className='justify-start xl:w-[116px] rounded-[8px] border border-black text-right text-sm font-normal'

                onClick={() => copyToClipboard('الدرب الأحمر')}
              >
                الدرب الأحمر
              </Button>

              <Button
                variant="outline"
                className='justify-start xl:w-[64px] rounded-[8px] border border-black text-right text-sm font-normal'

                onClick={() => copyToClipboard('221')}
              >
                221
              </Button>
            </div>

            <TextField
              className={'gap-2 xl:col-span-2 flex items-center'}
              labelClassName={'xl:w-[100px]'}
              buttonClassName={'p-2 xl:w-[140px]'}
              label="دفتر"
              value="108"
            />

          </div>
        </div>


        <div className="relative flex justify-end">
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <div className="flex justify-between items-center mb-4">
                <Button className={'flex w-40 justify-between'} onClick={() => setIsOpen(true)} variant={'outline'}>
                  قائمة الاجراءات
                  <Maximize2 size={20} />
                </Button>
              </div>
            </PopoverTrigger>

            <PopoverContent className="max-w-[200px] border-dashed border-black rounded-lg bg-gray-100 font-readex opacity-90">
              <div className="flex justify-between items-center mb-4">
                <Button onClick={() => setIsOpen(false)} variant={'ghost'}>
                  <Minimize2 size={20} />
                </Button>
                  <span className="font-semibold text-center text-sm">قائمة الاجراءات</span>
                </div>
                <div className="flex flex-col gap-4">
                  <Button className="w-full py-2 bg-blue-900 text-white rounded">
                    طباعة شهادة الميلاد
                  </Button>
                  <Button className="w-full py-2 bg-blue-900 text-white rounded">
                    تفصيلي بطاقة
                  </Button>
                  <Button className="w-full py-2 bg-blue-900 text-white rounded ">
                    حركات المعاملات
                  </Button>
                  <Button className="w-full py-2 bg-blue-900 text-white rounded">
                    بيانات معلقة
                  </Button>
                  <Button className="w-full py-2 bg-red-500 text-white rounded">
                    بحث عن الغرامات
                  </Button>
                </div>
            </PopoverContent>
          </Popover>
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
              aria-hidden="true"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>

      </div>
    </>
  )
}


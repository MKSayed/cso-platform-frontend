import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form.tsx'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { DateFormField } from '@/components/date-picker/date-form-field.tsx'
import { SearchableSelectFormField } from '@/components/searchable-select-form-field.tsx'
import { LoadingButton } from '@/components/loading-button.tsx'
import { Printer } from 'lucide-react'
import { Card } from '@/components/ui/card.tsx'
import excelIcon from '@/assets/excel.svg'
import pdfIcon from '@/assets/pdf.svg'
import { Button } from '@/components/ui/button.tsx'
import MultipleSelector from '@/components/multi-select.tsx'

const multiSelectOptionSchema = z.object({
  label: z.string(),
  value: z.string(),
  disable: z.boolean().optional(),
})

const statisticsInquiryFormSchema = z.object({
  birthDateStart: z.date().nullish(),
  birthDateEnd: z.date().nullish(),
  birthGovernorate: z.array(multiSelectOptionSchema).min(1),
})

export function StatisticsInquiryForms({ withWorkLocation }: { withWorkLocation: boolean }) {
  // Define form
  const statisticsInquiryForm = useForm<z.infer<typeof statisticsInquiryFormSchema>>({
    resolver: zodResolver(statisticsInquiryFormSchema),
  })

  // Define form submit handlers
  function onStatisticsInquiryForm() {}

  return (
    <Form {...statisticsInquiryForm}>
      <form
        onSubmit={statisticsInquiryForm.handleSubmit(onStatisticsInquiryForm)}
        className={
          'shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05) flex min-h-[70vh] w-[240px] shrink-0 flex-col gap-5 rounded-lg border-[1.5px] border-[#E2E8F0] px-6'
        }
      >
        {/*Form fields*/}
        <div className={'flex flex-col gap-1 text-right'} dir={'ltr'}>
          <SearchableSelectFormField
            className={'mt-2'}
            placeholder={'نوع المصدر'}
            formLabel={'نوع المصدر'}
            form={statisticsInquiryForm}
            name={'birthGovernorate'}
            selectList={[]}
            elementValueKey={'id'}
            elementLabelKey={'name'}
          />
          <DateFormField
            side={'left'}
            className={'mt-1 w-full'}
            form={statisticsInquiryForm}
            formLabel={'فترة البحث من'}
            name={'birthDateStart'}
            fromYear={1800}
          />
          <DateFormField
            side={'left'}
            className={'mt-1'}
            form={statisticsInquiryForm}
            formLabel={'الى'}
            name={'birthDateEnd'}
            fromYear={1800}
          />
          <FormField
            control={statisticsInquiryForm.control}
            name='birthGovernorate'
            render={({ field }) => (
              <FormItem>
                <FormLabel className={'text-foreground'}>المحافطة</FormLabel>
                <FormControl>
                  <MultipleSelector
                    {...field}
                    defaultOptions={[
                      { label: 'القاهرة', value: '1' },
                      { label: 'الجيزة', value: '2' },
                    ]}
                    placeholder='اختر المحافظة'
                    emptyIndicator={
                      <p className='text-center text-sm leading-10 text-gray-600 dark:text-gray-400'>.لا توجد نتائج</p>
                    }
                    hidePlaceholderWhenSelected
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {withWorkLocation && (
            <FormField
              control={statisticsInquiryForm.control}
              name='birthGovernorate'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={'text-foreground'}>مواقع العمل</FormLabel>
                  <FormControl>
                    <MultipleSelector
                      {...field}
                      defaultOptions={[
                        { label: 'القاهرة', value: '1' },
                        { label: 'الجيزة', value: '2' },
                      ]}
                      placeholder='اختر مواقع العمل'
                      emptyIndicator={
                        <p className='text-center text-sm leading-10 text-gray-600 dark:text-gray-400'>
                          .لا توجد نتائج
                        </p>
                      }
                      hidePlaceholderWhenSelected
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>
        {/*End of form fields*/}

        <LoadingButton className={'bg-[#0B0367] text-sm font-normal'}>بحث</LoadingButton>

        {/*Export document*/}
        <div className='flex flex-col gap-2'>
          <div className={'flex justify-between rounded-md bg-[#2EA154] px-4 py-2 text-white'}>
            <span className={'text-sm font-medium'}> طباعة </span>
            <Printer size={22} />
          </div>

          <div className={'flex h-10 gap-2'}>
            <Card className='w-full max-w-24'>
              <Button
                variant={'ghost'}
                className={'flex h-full w-full items-center justify-center rounded-sm px-4 py-2 '}
              >
                <img className={'size-6'} src={excelIcon} alt='excel' />
              </Button>
            </Card>
            <Card className='w-full max-w-24'>
              <Button
                variant={'ghost'}
                className={'flex h-full w-full items-center justify-center rounded-sm px-4 py-2 '}
              >
                <img className={'size-6'} src={pdfIcon} alt='pdf' />
              </Button>
            </Card>
          </div>
        </div>
        {/* End of export document*/}
      </form>
    </Form>
  )
}

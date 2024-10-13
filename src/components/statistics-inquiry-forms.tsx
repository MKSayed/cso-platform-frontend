import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form.tsx'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { DateFormField } from '@/components/date-picker/date-form-field.tsx'
import { LoadingButton } from '@/components/loading-button.tsx'
import { Printer } from 'lucide-react'
import { Card } from '@/components/ui/card.tsx'
import excelIcon from '@/assets/excel.svg'
import pdfIcon from '@/assets/pdf.svg'
import { Button } from '@/components/ui/button.tsx'
import MultipleSelector from '@/components/multi-select.tsx'
import { GovCertType } from '@/types/types.ts'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const multiSelectOptionSchema = z.object({
  label: z.string(),
  value: z.string(),
  fixed: z.boolean().optional(),
  disable: z.boolean().optional(),
})

const statisticsInquiryFormSchema = z.object({
  startDate: z.date(),
  endDate: z.date(),
  birthGovernorate: z.array(multiSelectOptionSchema).min(1),
})

export function StatisticsInquiryForms({
  withWorkSite,
  setTableData,
}: {
  withWorkSite: boolean
  setTableData: (v: GovCertType[]) => void
}) {
  // Define form
  const statisticsInquiryForm = useForm<z.infer<typeof statisticsInquiryFormSchema>>({
    resolver: zodResolver(statisticsInquiryFormSchema),
    defaultValues: {
      startDate: new Date(),
      endDate: new Date(),
      birthGovernorate: [{ label: 'الكل', value: 'all', fixed: true }],
    },
  })

  // Define form submit handlers
  function onStatisticsInquiryForm(formData: z.infer<typeof statisticsInquiryFormSchema>) {
    console.log(formData)
  }

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
          {/*Select field controls the type statistics needed and is not included in the form*/}
          <FormLabel className={'mb-1 mt-2 text-foreground'}>نوع المصدر</FormLabel>
          <Select>
            <SelectTrigger className={'text-foreground'}>
              <SelectValue placeholder='نوع المصدر' />
            </SelectTrigger>
            <SelectContent className='text-foreground'>
              <SelectItem value='شهادات ميلاد'>شهادات ميلاد</SelectItem>
              <SelectItem value='شهادات وفاة'>شهادات وفاة</SelectItem>
              <SelectItem value='شهادات زواج'>شهادات زواج</SelectItem>
              <SelectItem value='شهادات طلاق'>شهادات طلاق</SelectItem>
              <SelectItem value='قيد عائلي'>قيد عائلي</SelectItem>
              <SelectItem value='قيد فردي'>قيد فردي</SelectItem>
              <SelectItem value='تعذر'>تعذر</SelectItem>
              <SelectItem value='بطاقات مصدرة'>بطاقات مصدرة</SelectItem>
              <SelectItem value='استمارات'>استمارات</SelectItem>
            </SelectContent>
          </Select>

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
                    // Override field.onChange
                    onChange={(selectedOptions) => {
                      // Force adding 'all' object if user removed all selected options of the multipleSelector
                      if (selectedOptions.length === 0) {
                        field.onChange([{ label: 'الكل', value: 'all', fixed: true }])
                      } else {
                        field.onChange(selectedOptions.filter((item) => item.value !== 'all'))
                      }
                    }}
                    defaultOptions={[
                      { label: 'القاهرة', value: '1' },
                      { label: 'الجيزة', value: '2' },
                      { label: 'اسكندرية', value: '3' },
                      { label: 'المنوفية', value: '4' },
                      { label: 'قنا', value: '5' },
                      { label: 'الغربية', value: '6' },
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
          {withWorkSite && (
            <FormField
              control={statisticsInquiryForm.control}
              name='birthGovernorate'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={'text-foreground'}>مواقع العمل</FormLabel>
                  <FormControl>
                    <MultipleSelector
                      {...field}
                      onChange={(selectedOptions) => {
                        if (selectedOptions.length === 0) {
                          field.onChange([{ label: 'الكل', value: 'all', fixed: true }])
                        } else {
                          field.onChange(selectedOptions.filter((item) => item.value !== 'all'))
                        }
                      }}
                      selectFirstItem={true}
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

import { Form } from '@/components/ui/form.tsx'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { DateFormField } from '@/components/date-picker/date-form-field.tsx'
import { SearchableSelectFormField } from '@/components/searchable-select-form-field.tsx'
import { LoadingButton } from '@/components/loading-button.tsx'
import { Printer } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card.tsx'
import excelIcon from '@/assets/excel.svg'
import pdfIcon from '@/assets/pdf.svg'
import { Button } from '@/components/ui/button.tsx'

const nameInquiryFormSchema = z.object({ birthDateStart: z.date().nullish(), birthDateEnd: z.date().nullish() })

export function StatisticsInquiryForms({ withWorkLocation }: { withWorkLocation: boolean }) {
  // Define form
  const statisticsInquiryForm = useForm<z.infer<typeof nameInquiryFormSchema>>({
    resolver: zodResolver(nameInquiryFormSchema),
  })

  // Define form submit handlers
  function onStatisticsInquiryForm() {}

  return (
    <Form {...statisticsInquiryForm}>
      <form
        onSubmit={statisticsInquiryForm.handleSubmit(onStatisticsInquiryForm)}
        className={
          'shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05) flex min-h-[80vh] min-w-[240px] shrink-0 flex-col gap-5 rounded-lg border-[1.5px] border-[#E2E8F0] px-6'
        }
      >
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
            className={'mt-1 w-full'}
            form={statisticsInquiryForm}
            formLabel={'فترة البحث من'}
            name={'birthDateStart'}
            fromYear={1800}
          />
          <DateFormField
            className={'mt-1'}
            form={statisticsInquiryForm}
            formLabel={'الى'}
            name={'birthDateEnd'}
            fromYear={1800}
          />
          <SearchableSelectFormField
            className={'mt-2'}
            placeholder={'المحافظة'}
            formLabel={'المحافظة'}
            form={statisticsInquiryForm}
            name={'birthGovernorate'}
            selectList={[]}
            elementValueKey={'id'}
            elementLabelKey={'name'}
          />
          {withWorkLocation && (
            <SearchableSelectFormField
              className={'mt-2'}
              placeholder={'مواقع العمل'}
              formLabel={'مواقع العمل'}
              form={statisticsInquiryForm}
              name={'birthGovernorate'}
              selectList={[]}
              elementValueKey={'id'}
              elementLabelKey={'name'}
            />
          )}
        </div>
        <div>
          <div className={'flex justify-between rounded-md bg-[#2EA154] px-4 py-2 text-white'}>
            <span className={'text-sm font-medium'}> طباعة </span>
            <Printer size={22} />
          </div>
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

        <LoadingButton className={'bg-[#0B0367] text-sm font-normal'}>بحث</LoadingButton>
      </form>
    </Form>
  )
}

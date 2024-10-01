import { InputFormField } from '@/components/input-form-field.tsx'
import { Form } from '@/components/ui/form.tsx'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.tsx'
import { DateFormField } from '@/components/date-picker/date-form-field.tsx'
import { SearchableSelectFormField } from '@/components/searchable-select-form-field.tsx'
import { Switch } from '@/components/ui/switch.tsx'
import { useState } from 'react'
import { LoadingButton } from '@/components/loading-button.tsx'

const nameInquiryFormSchema = z.object({ birthDateStart: z.date().nullish(), birthDateEnd: z.date().nullish() })

const idnumInquiryFormSchema = z.object({})

export function BirthInquiryForms({
  onTabValueChange,
  defaultTabValue,
}: {
  onTabValueChange: (v: string) => void
  defaultTabValue: string
}) {
  const [birthSwitch, setIsBirthSwitch] = useState<boolean>(false)
  // Define forms
  const nameInquiryForm = useForm<z.infer<typeof nameInquiryFormSchema>>({
    resolver: zodResolver(nameInquiryFormSchema),
  })
  const idnumInquiryForm = useForm<z.infer<typeof idnumInquiryFormSchema>>({
    resolver: zodResolver(idnumInquiryFormSchema),
  })

  // Define form submit handlers
  function onNameInquirySubmit() {}
  function onIdnumInquirySubmit() {}

  // Define other handles
  function onSwitchChangeHandler(v: boolean) {
    setIsBirthSwitch(v)
    if (!v) {
      nameInquiryForm.setValue('birthDateStart', null)
      nameInquiryForm.setValue('birthDateEnd', null)
    }
  }

  return (
    <Tabs onValueChange={onTabValueChange} defaultValue={defaultTabValue}>
      <TabsList className={'h-[42px] bg-[#0B0367] text-white'}>
        <TabsTrigger className={'h-[32px] min-w-28 text-sm font-light data-[state=active]:font-medium'} value='idnum'>
          بالرقم القومي
        </TabsTrigger>
        <TabsTrigger className={'h-[32px] min-w-32 text-sm font-light data-[state=active]:font-medium'} value='name'>
          بالاسم
        </TabsTrigger>
      </TabsList>
      <TabsContent value='name'>
        {/*Shadcn Forms*/}
        <Form {...nameInquiryForm}>
          <form
            onSubmit={nameInquiryForm.handleSubmit(onNameInquirySubmit)}
            className={
              'shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05) flex min-h-[80vh] min-w-[240px] shrink-0 flex-col justify-around  rounded-lg border-[1.5px] border-[#E2E8F0] px-6'
            }
          >
            <div className={'flex flex-col gap-1 text-right'}>
              <span>الاسم بالكامل او جزء منه</span>
              <InputFormField
                className='border-gray-400'
                form={nameInquiryForm}
                name={'firstName'}
                formLabel={''}
                placeholder={'الاسم الاول'}
              />
              <InputFormField
                className='border-gray-400'
                form={nameInquiryForm}
                name={'fatherFirstName'}
                formLabel={''}
                placeholder={'الاسم الثاني'}
              />
              <InputFormField
                className='border-gray-400'
                form={nameInquiryForm}
                name={'fatherSecondName'}
                formLabel={''}
                placeholder={'الاسم الثالث'}
              />
              <InputFormField
                className='border-gray-400'
                form={nameInquiryForm}
                name={'familyName'}
                formLabel={''}
                placeholder={'اسم العائلة'}
              />
              <InputFormField
                labelClassName={'py-1'}
                className='border-gray-400'
                form={nameInquiryForm}
                name={'motherFullName'}
                formLabel={'اسم الام'}
              />
              <InputFormField
                labelClassName={'py-1'}
                className='border-gray-400'
                form={nameInquiryForm}
                name={'fullNickName'}
                formLabel={'اسم الشهرة'}
              />

              <SearchableSelectFormField
                className={'mt-2'}
                placeholder={'محافظة الميلاد'}
                formLabel={'محافظة الميلاد'}
                form={nameInquiryForm}
                name={'birthGovernorate'}
                selectList={[]}
                elementValueKey={'id'}
                elementLabelKey={'name'}
              />

              <div className={'relative mt-3'}>
                <Switch
                  onCheckedChange={onSwitchChangeHandler}
                  className={'absolute left-0 data-[state=checked]:bg-blue-800'}
                />
                <DateFormField
                  disabled={!birthSwitch}
                  className={'mt-1 w-full'}
                  form={nameInquiryForm}
                  formLabel={'فترة الميلاد من'}
                  name={'birthDateStart'}
                  fromYear={1800}
                />
              </div>
              <DateFormField
                disabled={!birthSwitch}
                className={'mt-1'}
                form={nameInquiryForm}
                formLabel={'الى'}
                name={'birthDateEnd'}
                fromYear={1800}
              />
            </div>
            <LoadingButton className={'bg-[#0B0367] text-sm font-normal'}>بحث</LoadingButton>
          </form>
        </Form>
      </TabsContent>
      <TabsContent value='idnum'>
        <Form {...idnumInquiryForm}>
          <form
            onSubmit={idnumInquiryForm.handleSubmit(onIdnumInquirySubmit)}
            className={
              'shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05) flex min-h-[75vh] min-w-[240px] shrink-0  flex-col justify-start  rounded-lg border-[1.5px] border-[#E2E8F0] px-6 pt-3'
            }
          >
            <InputFormField
              labelClassName={'py-1'}
              className='border-gray-400'
              form={idnumInquiryForm}
              name={'idnum'}
              formLabel={'الرقم القومي'}
            />
            <LoadingButton className={'mt-7 bg-[#0B0367] text-sm font-normal'}>بحث</LoadingButton>
          </form>
        </Form>
      </TabsContent>
    </Tabs>
  )
}

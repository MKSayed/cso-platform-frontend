import bgImg from '@/assets/login-page-bg.jpg'
import '@/pages/login-page/login-page.css'
import csoLogo from '@/assets/logo_big.png'
import { InputFormField } from '@/components/input-form-field.tsx';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form.tsx';
import personSvg from '@/assets/person-icon.svg'
import keySvg from '@/assets/key-fill.svg'
import { LoadingButton } from '@/components/loading-button.tsx';
import { PasswordInputFormField } from '@/components/password-input-form-field.tsx';


export default function LoginPage() {
  const form = useForm();
  return (
    <main className='w-100% h-screen flex items-center justify-center'>
      <img className='fixed
       w-full h-full z-[-1]' src={bgImg}
      alt='background' />
      {/*Refer to this link for explanation of the box border https://stackoverflow.com/questions/5706963/possible-to-use-border-radius-together-with-a-border-image-which-has-a-gradient*/}
      <div className='relative w-[85%] h-[65%] max-h-[40rem] box flex justify-center'> {/* box class is a custom class in login-page.css*/}
        <img className='duration-300 ease-in-out size-32 absolute -top-16 md:-top-20 md:w-[182px] md:h-[180px] md:size-32' src={csoLogo} alt='Civil status sector logo'/>
        <div className=' duration-300 ease-in-out mt-20 md:mt-28 md:w-[454px] flex flex-col items-center gap-4'>
          <p className=' duration-300 ease-in-out text-customBlue text-2xl md:text-4xl font-medium' > قطاع الاحوال المدنية</p>
          <p className=' duration-300 ease-in-out text-customBlue text-lg md:text-2xl font-normal' >وزارة الداخلية</p>
          <div className='z-10 w-full -mt-4'>
            <Form {...form}>
            <form   onSubmit={form.handleSubmit(() => {})}>

          <InputFormField rightContent={<PersonIcon/>} form={form} name={'username'} formLabel={'اسم المستخدم'} labelClassName={'w-full text-customBlue text-[16px] leading-[24px]'} className={'bg-white rounded-[10px] border-[#010B3899] border-t-[0.5px] border-l-[0.5px] border-r-[2px] border-b-[2px] min-h-14 pr-11 text-[14px]'}/>
          <PasswordInputFormField rightContent={<KeyIcon/>} form={form} name={'password'} formLabel={'كلمة السر'} labelClassName={'w-full text-customBlue text-[16px] leading-[24px] mt-2'} className={'bg-white rounded-[10px] border-[#010B3899] border-t-[0.5px] border-l-[0.5px] border-r-[2px] border-b-[2px] min-h-14 pr-11 text-[14px]'}/>
              <LoadingButton loading={false} className={'w-full mt-6 h-12 bg-[#1002A8] text-[18px] font-normal'}> تسجيل دخول </LoadingButton>
              </form>
            </Form>
            </div>

        </div>

      </div>
    </main>
  )
}

function PersonIcon ()
{
  return  <img className='pt-5 pr-2' src={personSvg} alt='person icon'/>
}

function KeyIcon ()
{
  return  <img className='pt-9 -mr-1 size-16' src={keySvg} alt='key icon'/>
}


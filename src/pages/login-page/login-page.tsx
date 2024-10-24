import bgImg from '@/assets/login-page-bg.jpg'
import '@/pages/login-page/login-page.css'
import csoLogo from '@/assets/logo_big.png'
import { InputFormField } from '@/components/input-form-field.tsx'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form.tsx'
import personSvg from '@/assets/person-icon.svg'
import keySvg from '@/assets/key-fill.svg'
import { LoadingButton } from '@/components/loading-button.tsx'
import { PasswordInputFormField } from '@/components/password-input-form-field.tsx'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLogin } from '@/api/auth.api.ts'
import { Alert, AlertDescription } from '@/components/ui/alert.tsx'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '@/stores/user.ts'

const loginFormSchema = z.object({
  username: z.string().min(1, 'يجب ادخال اسم المستخدم'),
  password: z.string().min(1, 'يجب ادخال كلمة السر'),
})

export type loginFormData = z.infer<typeof loginFormSchema>
export default function LoginPage() {
  const navigate = useNavigate()
  const loginForm = useForm<loginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      password: '',
      username: '',
    },
  })
  const { mutate: login, error, isPending, data } = useLogin()
  const setUser = useUserStore((state) => state.setUser)

  const loginFormSubmitHandler = (formData: loginFormData) => {
    login(formData, {
      onSuccess: (responseData) => {
        // Set user in zustand store
        setUser(responseData)
        localStorage.setItem('token', responseData.accessToken)

        navigate('/cso-apps')
      },
    })
  }

  return (
    <main className='w-100% flex h-screen items-center justify-center'>
      <img
        className='fixed
       z-[-1] h-full w-full'
        src={bgImg}
        alt='background'
      />
      {/*Refer to this link for explanation of the box border https://stackoverflow.com/questions/5706963/possible-to-use-border-radius-together-with-a-border-image-which-has-a-gradient*/}
      <div className='box relative flex h-[65%] max-h-[40rem] w-[85%] justify-center'>
        {' '}
        {/* box class is a custom class in login-page.css*/}
        <img
          className='absolute -top-16 size-32 duration-300 ease-in-out md:-top-20 md:size-32 md:h-[180px] md:w-[182px]'
          src={csoLogo}
          alt='Civil status sector logo'
        />
        <div className=' mt-20 flex flex-col items-center gap-4 duration-300 ease-in-out md:mt-28 md:w-[454px]'>
          <p className=' text-2xl font-medium text-customBlue duration-300 ease-in-out md:text-4xl'>
            {' '}
            قطاع الاحوال المدنية
          </p>
          <p className=' text-lg font-normal text-customBlue duration-300 ease-in-out md:text-2xl'>وزارة الداخلية</p>
          <div className='z-10 -mt-4 w-full'>
            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(loginFormSubmitHandler)}>
                <InputFormField
                  rightContent={<PersonIcon />}
                  form={loginForm}
                  name={'username'}
                  formLabel={'اسم المستخدم'}
                  labelClassName={'w-full text-customBlue text-[16px] leading-[24px]'}
                  className={
                    'min-h-14 rounded-[10px] border-b-[2px] border-l-[0.5px] border-r-[2px] border-t-[0.5px] border-[#010B3899] bg-white pr-11 text-[14px]'
                  }
                />
                <PasswordInputFormField
                  rightContent={<KeyIcon />}
                  form={loginForm}
                  name={'password'}
                  formLabel={'كلمة السر'}
                  labelClassName={'w-full text-customBlue text-[16px] leading-[24px] mt-2'}
                  className={
                    'min-h-14 rounded-[10px] border-b-[2px] border-l-[0.5px] border-r-[2px] border-t-[0.5px] border-[#010B3899] bg-white pr-11 text-[14px]'
                  }
                />
                <LoadingButton loading={isPending} className={'mt-6 h-12 w-full bg-[#1002A8] text-[18px] font-normal'}>
                  تسجيل دخول
                </LoadingButton>
              </form>
            </Form>
            {error && (
              <div className={'mt-4'}>
                <Alert variant='destructive' className={'bg-red-200'}>
                  <ExclamationTriangleIcon className='h-4 w-4' />
                  {/*<AlertTitle className={"mr-5"}>Error</AlertTitle>*/}
                  <AlertDescription className={'text-center'}>{error.message}</AlertDescription>
                </Alert>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

function PersonIcon() {
  return <img className='pr-2 pt-5' src={personSvg} alt='person icon' />
}

function KeyIcon() {
  return <img className='-mr-1 size-16 pt-9' src={keySvg} alt='key icon' />
}

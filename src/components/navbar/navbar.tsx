import { UserNav } from '@/components/navbar/user-nav.tsx'

type props = {
  title: string
}

export function Navbar({ title }: props) {
  return (
    <header className='sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary'>
      <div className='mx-4 flex h-14 items-center justify-between sm:mx-8'>
        <span className={'text-lg'}> {title} </span>
        <UserNav />
      </div>
    </header>
  )
}

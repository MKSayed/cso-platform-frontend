import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils.ts'
import { ReactNode, useState } from 'react'
import { Button } from '@/components/ui/button.tsx'
import { EyeIcon, EyeOffIcon } from 'lucide-react'

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any
  name: string
  formLabel: string
  placeholder?: string
  description?: ReactNode
  className?: string
  labelClassName?: string
  rightContent?: ReactNode
}

/**
 * @description
 * This React component is designed to be used within the ShadCN UI Form component.
 * It handles form input fields, labels, descriptions, and optional left/right content.
 * The `className` prop controls the classes applied to the input element itself.
 * Add in `className` tne necessary padding to compensate for the presence of left or right content and avoid having input hidden by the left or right content.
 *
 * @param {React.ReactNode} [leftContent] - Optional 'styled' content displayed on the left side of the inside of input field.
 * @param {React.ReactNode} [rightContent] - Optional 'styled' content displayed on the right side of the inside of the input field.
 * @param {object} form - The form object containing `control` and `formState` from React Hook Form.
 * @param {string} name - The name of the input field.
 * @param {string} formLabel - The label text displayed above the input field.
 * @param {string} [placeholder=''] - Placeholder text for the input field.
 * @param {React.ReactNode} [description] - Additional description text displayed below the input.
 * @param {string} [className] - CSS classes applied to the input element.
 * @param {string} [labelClassName] - CSS classes applied to the label element.
 */
export function PasswordInputFormField({
  form,
  name,
  formLabel,
  placeholder = '',
  description,
  className,
  labelClassName,
  rightContent,
}: Props) {
  const [showPassword, setShowPassword] = useState(false)
  const disabled = form.watch(name) === '' || form.watch(name) === undefined

  return (
    <div className='relative'>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className='flex flex-col items-start'>
            <FormLabel className={labelClassName}>{formLabel}</FormLabel>
            <FormControl>
              <div className='relative w-full'>
                <Input
                  placeholder={placeholder}
                  type={showPassword ? 'text' : 'password'}
                  className={cn('pl-12', className)}
                  {...field}
                />
                <Button
                  type='button'
                  variant='ghost'
                  size='sm'
                  className='absolute left-0 top-0 h-full px-3 py-2 hover:bg-transparent'
                  onClick={() => setShowPassword((prev) => !prev)}
                  disabled={disabled}
                >
                  {showPassword && !disabled ? (
                    <EyeIcon className='size-5' aria-hidden='true' />
                  ) : (
                    <EyeOffIcon className='size-5' aria-hidden='true' />
                  )}
                </Button>
                {/* hides browser's password toggle icon */}
                <style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
              </div>
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )}
      />
      {rightContent && (
        <span className='absolute right-0 top-1/3 flex h-10 items-center rounded-md'>{rightContent}</span>
      )}
    </div>
  )
}

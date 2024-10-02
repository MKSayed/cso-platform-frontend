import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils.ts'
import { ReactNode } from 'react'

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any
  name: string
  formLabel: string
  placeholder?: string
  description?: ReactNode
  className?: string
  labelClassName?: string
  leftContent?: ReactNode
  rightContent?: ReactNode
}

/**
 * @description
 * This React component is designed to be used within the ShadCN UI Form component.
 * It handles form input fields, labels, descriptions, and optional left/right content.
 * The `className` prop controls the classes applied to the input element itself.
 * Add in `className` tne necessary padding to compensate for the presence of left or right content and avoid having input hidden by the left or right content.
 *
 * @param {React.ReactNode} [leftContent] - Optional content displayed on the left side of the inside of input field.
 * @param {React.ReactNode} [rightContent] - Optional content displayed on the right side of the inside of the input field.
 * @param {object} form - The form object containing `control` and `formState` from React Hook Form.
 * @param {string} name - The name of the input field.
 * @param {string} formLabel - The label text displayed above the input field.
 * @param {string} [placeholder=''] - Placeholder text for the input field.
 * @param {React.ReactNode} [description] - Additional description text displayed below the input.
 * @param {string} [className] - CSS classes applied to the input element.
 * @param {string} [labelClassName] - CSS classes applied to the label element.
 */
export function InputFormField({
  form,
  name,
  formLabel,
  placeholder = '',
  description,
  className,
  labelClassName,
  leftContent,
  rightContent,
}: Props) {
  return (
    <div className='relative'>
      {leftContent && <span className='absolute left-0 top-1/3 flex h-10 items-center rounded-md'>{leftContent}</span>}
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className='items- flex flex-col'>
            <FormLabel className={cn('text-right', labelClassName)}>{formLabel}</FormLabel>
            <FormControl>
              <Input placeholder={placeholder} className={cn('text-right', className)} {...field} />
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

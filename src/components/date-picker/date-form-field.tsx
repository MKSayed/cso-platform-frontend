import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/date-picker/calendar'
import { DateInput } from '@/components/date-picker/date-input'
import { ar } from 'date-fns/locale'
import { format } from 'date-fns'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form.tsx'
import { UseFormReturn } from 'react-hook-form'
import { cn } from '@/lib/utils.ts'
import { CalendarIcon } from 'lucide-react'

export interface DatePickerProps {
  /** Click handler for applying the updates from DateFormField. */
  onUpdate?: (values: { date: Date }) => void
  /** Alignment of popover content */
  align?: 'start' | 'center' | 'end'
  /** Alignment of popover window */
  side?: 'top' | 'bottom' | 'left' | 'right'
  /** Option for range of selectable years */
  fromYear?: number
  /** Option for range of selectable years */
  toYear?: number
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any
  formLabel?: string
  placeholder?: string
  formDescription?: string
  disabled?: boolean
  className?: string
}

const formatDate = (date: Date): string => {
  return format(date, 'yyyy-MM-dd')
}

const getDateAdjustedForTimezone = (dateInput: Date | string): Date => {
  if (typeof dateInput === 'string') {
    // Split the date string to get year, month, and day parts
    const parts = dateInput.split('-').map((part) => parseInt(part, 10))
    // Create a new Date object using the local timezone
    // Note: Month is 0-indexed, so subtract 1 from the month part
    const date = new Date(parts[0], parts[1] - 1, parts[2])
    return date
  } else {
    // If dateInput is already a Date object, return it directly
    return dateInput
  }
}

/**
 * @description
 * The DateFormField component allows a user to select a single date
 * @authors Mahmoud Khaled, John Polacek
 * @see https://github.com/MKSayed
 * @see https://github.com/johnpolacek/date-range-picker-for-shadcn
 * */
export function DateFormField({
  onUpdate,
  align = 'end',
  side = 'bottom',
  fromYear = 1800,
  toYear = new Date().getFullYear(),
  name,
  form,
  formLabel,
  placeholder,
  formDescription,
  disabled,
  className,
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [date, setDate] = useState<Date>(new Date()) // Internal date state, needed for reset values on cancel functionality
  const [hasUpdatedOnce, setHasUpdatedOnce] = useState<boolean>(false)

  // Ref to store the value of date when the date picker is opened
  const openedDateRef = useRef<Date>(new Date())

  function resetValues() {
    if (hasUpdatedOnce) {
      form.setValue(name, openedDateRef.current)
      setDate(openedDateRef.current)
    } else {
      form.setValue(name, undefined)
    }
  }

  // Helper function to check if two dates are equal
  const areDatesEqual = (a?: Date, b?: Date): boolean => {
    if (!a || !b) return a === b // If either is undefined, return true if both are undefined
    return a.getTime() === b.getTime()
  }

  useEffect(() => {
    if (isOpen) {
      openedDateRef.current = date
    }
  }, [isOpen])

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn('flex flex-col', className)}>
          <FormLabel className='text-right text-foreground'>{formLabel}</FormLabel>
          <Popover
            modal={true}
            open={isOpen}
            onOpenChange={(open: boolean) => {
              if (!open) {
                resetValues()
              }
              setIsOpen(open)
            }}
          >
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  disabled={disabled}
                  variant={'outline'}
                  className={cn('text-right font-normal', !field.value && 'text-muted-foreground')}
                >
                  <CalendarIcon className='mr-auto h-4 w-4 opacity-50' />

                  {field.value ? formatDate(field.value) : <span className='text-right'>{placeholder}</span>}
                </Button>
              </FormControl>
            </PopoverTrigger>

            {formDescription && <FormDescription>{formDescription}</FormDescription>}

            <PopoverContent side={side} align={align} className='w-auto'>
              <div className='flex py-2'>
                <div className='flex'>
                  <div className='flex flex-col'>
                    <div className='flex flex-col items-center justify-end gap-2 px-3 pb-4'>
                      <DateInput
                        value={date}
                        onChange={(v) => {
                          setDate(v)
                        }}
                      />
                    </div>
                    <div>
                      <Calendar
                        locale={ar} // Control the rendered calendar locale
                        dir='rtl'
                        mode='single'
                        numberOfMonths={1}
                        defaultMonth={new Date()}
                        month={date}
                        selected={date}
                        onSelect={(v) => {
                          // @ts-expect-error Typescript issue
                          setDate(v)
                        }}
                        onMonthChange={(v) => {
                          setDate(v)
                        }}
                        fromYear={fromYear}
                        toYear={toYear}
                        initialFocus
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex justify-end gap-2 py-2 pr-4'>
                <Button
                  onClick={() => {
                    setIsOpen(false)
                    resetValues()
                  }}
                  variant='ghost'
                >
                  الغاء
                </Button>
                <Button
                  onClick={() => {
                    setIsOpen(false)
                    if (!areDatesEqual(date, openedDateRef.current)) {
                      field.onChange(date)
                      onUpdate?.({ date })
                    }
                    if (date) setHasUpdatedOnce(true)
                  }}
                >
                  موافق
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

DateFormField.displayName = 'DateFormField'
DateFormField.filePath = 'libs/shared/ui-kit/src/lib/date-picker/date-form-field.tsx'

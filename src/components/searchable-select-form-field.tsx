import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form.jsx'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils.ts'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { useState } from 'react'
import { UseFormReturn } from 'react-hook-form'

type props<T> = {
  form: UseFormReturn
  formLabel?: string
  placeholder?: string
  description?: string
  name: string
  selectList: T[]
  selectListTitles?: string[]
  elementValueKey: string
  elementLabelKey: string
  className?: string
  labelFormattingFn?: (v: string | undefined) => string
  onSelect?: (item: T) => void
}

/**
 * A searchable select form field component integrated with React Hook Form and must be used inside Shadcn/ui Form.
 *
 * This component renders a dropdown select field with search capabilities. It supports both a single and multiple select lists with a title for each.
 *
 * If an array of arrays is to be provided selectListTitles must be provided as well to give titles to different array's items
 *
 * @template T - The type of items in the select list.
 */
export function SearchableSelectFormField<T>({
  form,
  formLabel,
  placeholder,
  description,
  name,
  selectList,
  selectListTitles,
  elementValueKey,
  elementLabelKey,
  className,
  labelFormattingFn,
  onSelect = () => {},
}: props<T>) {
  const [open, setOpen] = useState(false)

  // If the selectList is an array of arrays, then we need to handle it differently
  // by adding separators between the command groups and adding the titles of the groups
  // Note: All groups must have the same elementValueKey and elementLabelKey
  function isArrayOfArrays(arr: T[]) {
    return arr.every((item: T) => Array.isArray(item))
  }
  const hasMultipleSelectLists = isArrayOfArrays(selectList)

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <div className={'flex-start flex'}>
            <FormLabel className={'w-full text-right'}>{formLabel}</FormLabel>
          </div>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant='outline'
                  role='combobox'
                  className={cn('w-full justify-between text-wrap', !field.value && 'text-muted-foreground')}
                >
                  <CaretSortIcon className='hidden h-4 w-4 opacity-50 sm:block' />

                  {/* selectList.flat() Flatten the array to make sure it works correctly when array of arrays is passed*/}
                  {field.value
                    ? labelFormattingFn
                      ? labelFormattingFn(
                          // @ts-expect-error Ignore this
                          selectList?.flat(1).find((item) => item[elementValueKey] === field.value)?.[elementLabelKey],
                        )
                      : // @ts-expect-error Ignore this
                        selectList?.flat(1).find((item) => item[elementValueKey] === field.value)?.[elementLabelKey]
                    : placeholder && `اختر ${placeholder}`}
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className={'p-0'}>
              <Command>
                <CommandInput placeholder={placeholder && `...اختر ${placeholder}`} className='h-9 text-right' />
                <CommandList className={'overflow-auto'}>
                  <CommandEmpty>
                    <span className={'font-medium'}> لا يوجد نتائج </span>
                  </CommandEmpty>
                  {!hasMultipleSelectLists ? (
                    <CommandGroup>
                      {selectList?.map((item) => (
                        <CommandItem
                          // Value is referring to the label key. This is correct and intended
                          // @ts-expect-error Ignore this
                          value={item[elementLabelKey]}
                          // @ts-expect-error Ignore this
                          key={item[elementValueKey]}
                          onSelect={() => {
                            // @ts-expect-error Ignore this
                            form.setValue(name, item[elementValueKey])
                            onSelect(item)
                            setOpen(false)
                          }}
                        >
                          {/* @ts-expect-error Ignore this*/}
                          {labelFormattingFn ? labelFormattingFn(item[elementLabelKey]) : item[elementLabelKey]}
                          <CheckIcon
                            className={cn(
                              'ml-auto h-4 w-4',
                              // @ts-expect-error Ignore this
                              item[elementValueKey] === field.value ? 'opacity-100' : 'opacity-0',
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  ) : (
                    selectList.map((element, index) => (
                      <CommandGroup key={index} heading={selectListTitles ? selectListTitles : [index]}>
                        {Array.isArray(element) &&
                          element?.map((item) => (
                            <CommandItem
                              // Value is referring to the label key. This is correct and intended
                              value={labelFormattingFn ? labelFormattingFn(item) : item[elementLabelKey]}
                              key={item[elementValueKey]}
                              onSelect={() => {
                                form.setValue(name, item[elementValueKey])
                                onSelect(item)
                                setOpen(false)
                              }}
                            >
                              {labelFormattingFn ? labelFormattingFn(item) : item[elementLabelKey]}
                              <CheckIcon
                                className={cn(
                                  'ml-auto h-4 w-4',
                                  item[elementValueKey] === field.value ? 'opacity-100' : 'opacity-0',
                                )}
                              />
                            </CommandItem>
                          ))}
                      </CommandGroup>
                    ))
                  )}
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          {description && <FormDescription>{description}</FormDescription>}

          <FormMessage />
        </FormItem>
      )}
    />
  )
}

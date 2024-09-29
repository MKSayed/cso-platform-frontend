import { cn, copyToClipboard } from '@/lib/utils.ts'
import { Button } from '@/components/ui/button.tsx'

interface TextFieldProps {
  label: string
  value: string
  className?: string
  labelClassName?: string
  buttonClassName?: string
}

export function TextField({ label, value, className, labelClassName, buttonClassName }: TextFieldProps) {
  return (
    <div className={cn(`flex items-center justify-between`, className)}>
      <span className={cn('text-sm font-medium', labelClassName)}>{label}</span>
      <Button
        variant='outline'
        className={cn(
          'justify-start rounded-[8px] border border-black text-right text-sm font-normal',
          buttonClassName,
        )}
        onClick={() => copyToClipboard(value)}
      >
        {value}
      </Button>
    </div>
  )
}

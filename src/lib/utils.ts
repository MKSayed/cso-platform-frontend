import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { toast } from 'sonner'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function copyToClipboard(value: string) {
  navigator.clipboard.writeText(value)
  toast.info('تم النسخ إلى الحافظة')
}

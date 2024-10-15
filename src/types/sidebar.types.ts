import { type LucideIcon } from 'lucide-react'

export type SidebarItem = {
  label: string
  to: string
  active: boolean
  icon: LucideIcon
}
import { type LucideIcon } from 'lucide-react'

export type sidebarItem = {
  label: string
  to: string
  active: boolean
  icon: LucideIcon
}

export type birthData = {
  firstName: string
  fatherFullName: string
  motherFullName: string
  birthDate: string
  idnum: number
}

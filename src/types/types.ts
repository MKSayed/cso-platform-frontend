import { type LucideIcon } from 'lucide-react'

export type SidebarItem = {
  label: string
  to: string
  active: boolean
  icon: LucideIcon
}

export type BirthData = {
  firstName: string
  fatherFullName: string
  motherFullName: string
  birthDate: string
  idnum: number
}

export type LoginResponse = {
  accessToken: string
  fullName: string
  id: number
  refreshToken: string
  regCenCode: string
  regCenDescr: string
  roles: string[]
  userName: string
}

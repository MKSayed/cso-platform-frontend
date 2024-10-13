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

export type BirthGovStatsInPeriodResponse = {
  startDate: string
  endDate: string
  certTypeCode: string
  certTypeDescr: string
  certTypeCount: number
  govCertType: GovCertType[]
}

export type GovCertType = {
  serial: number
  govCode: string
  govDescr: string
  govCertTypeCode: string
  govCertTypeDescr: string
  govCertTypeTotalCount: number
  certType: CertType[]
}

export type CertType = {
  certTypeCode: string
  certTypeDescr: string
  certTypeCount: number
}

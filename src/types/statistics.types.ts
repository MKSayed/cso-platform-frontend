export type BirthCertGovernoratesRequest = {
  startDate: string
  endDate: string
}

export type BirthCertRegCentersRequest = {
  govCode: string
  startDate: string
  endDate: string
}

export type BirthCertGovernoratesResponse = {
  startDate: string
  endDate: string
  birthCertDescr: string
  birthCertTotalCount: number
  govList: GovList[]
}

export type GovList = {
  serial: number
  govCode: string
  govDescr: string
  govCertTotalCount: number
  birthCertType: BirthCert
}

export type RegCenList = {
  serial: number
  regCenCode: string
  regCenDescr: string
  regCenTotalCount: number
  birthCertType: BirthCert
}

type BirthCert = {
  normalTotal: CertData
  normalIssued: CertData
  normalRepeated: CertData
  normalCancelled: CertData
  firstTotal: CertData
  firstPrinted: CertData
  firstCancelled: CertData
  normalSpecial: CertData
  firstSpecial: CertData
}

type CertData = {
  code: string
  descr: string
  count: number
}

// Omit multiple attributes (`govCertType` and `govList`)
export type BirthCertRegionalCentersResponse = Omit<BirthCertGovernoratesResponse, 'govCertType' | 'govList'> & {
  govCode: string
  govDescr: string
  regCenList: RegCenList[]
}



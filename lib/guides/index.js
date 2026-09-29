import { divorceCertificateGuide } from './divorce-certificate'
import { nadraSuccessionCertificateGuide } from './nadra-succession-certificate'
import { childRegistrationCertificateGuide } from './child-registration-certificate'
import { rentalTenancyGuide } from './rental-and-tenancy-law'
import { fbrIncomeTaxReturnGuide } from './fbr-income-tax-return'
import { shiaSunniNikahGuide } from './shia-sunni-nikah'
import { successionCertificateGuide } from './succession-certificate'

export const guides = {
  [divorceCertificateGuide.slug]: divorceCertificateGuide,
  [nadraSuccessionCertificateGuide.slug]: nadraSuccessionCertificateGuide,
  [childRegistrationCertificateGuide.slug]: childRegistrationCertificateGuide,
  [rentalTenancyGuide.slug]: rentalTenancyGuide,
  [fbrIncomeTaxReturnGuide.slug]: fbrIncomeTaxReturnGuide,
  [shiaSunniNikahGuide.slug]: shiaSunniNikahGuide,
  [successionCertificateGuide.slug]: successionCertificateGuide,
}

export const guideList = Object.values(guides)

import { divorceCertificateGuide } from './divorce-certificate'
import { nadraSuccessionCertificateGuide } from './nadra-succession-certificate'
import { childRegistrationCertificateGuide } from './child-registration-certificate'
import { rentalTenancyGuide } from './rental-and-tenancy-law'
import { fbrIncomeTaxReturnGuide } from './fbr-income-tax-return'
import { shiaSunniNikahGuide } from './shia-sunni-nikah'
import { successionCertificateGuide } from './succession-certificate'
import { deathCertificateGuide } from './death-certificate'
import { nadraMarriageCertificateGuide } from './nadra-marriage-certificate'
import { secpCompanyRegistrationGuide } from './secp-company-registration'
import { divorceTalaqFamilyLawsGuide } from './divorce-talaq-family-laws'
import { pakistaniPropertyLawGuide } from './pakistani-property-law'
import { familyLawPakistanGuide } from './family-law-in-pakistan'

export const guides = {
  [divorceCertificateGuide.slug]: divorceCertificateGuide,
  [nadraSuccessionCertificateGuide.slug]: nadraSuccessionCertificateGuide,
  [childRegistrationCertificateGuide.slug]: childRegistrationCertificateGuide,
  [rentalTenancyGuide.slug]: rentalTenancyGuide,
  [fbrIncomeTaxReturnGuide.slug]: fbrIncomeTaxReturnGuide,
  [shiaSunniNikahGuide.slug]: shiaSunniNikahGuide,
  [successionCertificateGuide.slug]: successionCertificateGuide,
  [deathCertificateGuide.slug]: deathCertificateGuide,
  [nadraMarriageCertificateGuide.slug]: nadraMarriageCertificateGuide,
  [secpCompanyRegistrationGuide.slug]: secpCompanyRegistrationGuide,
  [divorceTalaqFamilyLawsGuide.slug]: divorceTalaqFamilyLawsGuide,
  [pakistaniPropertyLawGuide.slug]: pakistaniPropertyLawGuide,
  [familyLawPakistanGuide.slug]: familyLawPakistanGuide,
}

export const guideList = Object.values(guides)

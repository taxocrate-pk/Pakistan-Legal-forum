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
import { nikahNikahNamaMarriageCertificateGuide } from './nikah-nikah-nama-marriage-certificate'
import { jactitationOfMarriageGuide } from './jactitation-of-marriage'
import { incomeTaxReturnFilingLawyersGuide } from './income-tax-return-filing-lawyers'
import { pakistaniNikahNamaRegistrationGuide } from './pakistani-nikah-nama-registration'
import { nikahKhawanKarachiGuide } from './nikah-khawan-services-karachi'
import { rentalDisputesGuide } from './rental-disputes'
import { adoptionsGuardianshipsGuide } from './adoptions-guardianships'
import { courtMarriageProcessGuide } from './court-marriage-process-fee-pakistan'

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
  [nikahNikahNamaMarriageCertificateGuide.slug]: nikahNikahNamaMarriageCertificateGuide,
  [jactitationOfMarriageGuide.slug]: jactitationOfMarriageGuide,
  [incomeTaxReturnFilingLawyersGuide.slug]: incomeTaxReturnFilingLawyersGuide,
  [pakistaniNikahNamaRegistrationGuide.slug]: pakistaniNikahNamaRegistrationGuide,
  [nikahKhawanKarachiGuide.slug]: nikahKhawanKarachiGuide,
  [rentalDisputesGuide.slug]: rentalDisputesGuide,
  [adoptionsGuardianshipsGuide.slug]: adoptionsGuardianshipsGuide,
  [courtMarriageProcessGuide.slug]: courtMarriageProcessGuide,
}

export const guideList = Object.values(guides)

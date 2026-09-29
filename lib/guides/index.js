import { divorceCertificateGuide } from './divorce-certificate'
import { nadraSuccessionCertificateGuide } from './nadra-succession-certificate'
import { childRegistrationCertificateGuide } from './child-registration-certificate'

export const guides = {
  [divorceCertificateGuide.slug]: divorceCertificateGuide,
  [nadraSuccessionCertificateGuide.slug]: nadraSuccessionCertificateGuide,
  [childRegistrationCertificateGuide.slug]: childRegistrationCertificateGuide,
}

export const guideList = Object.values(guides)

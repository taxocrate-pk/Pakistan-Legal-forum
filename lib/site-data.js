export const site = {
  name: 'Pakistan Legal Forum',
  shortName: 'PakLegal.com.pk',
  url: 'https://paklegal.com.pk',
  email: 'info@paklegal.com.pk',
  phones: {
    karachi: '0333 1127830',
    lahore: '0333 1127835',
    rawalpindi: '0333 1127836',
    islamabad: '0333 1127837',
  },
  offices: [
    {
      city: 'Karachi',
      label: 'Head Office',
      address: 'M-51, M-52, Muneer Mobile Mall, Near Perfume Chowk, Johar Chowrangi, Block 17, Gulistan-e-Johar, Karachi, Pakistan.',
      phones: ['0333-2316871', '0316-6644789', '0316-1119655', '0331-6644789'],
    },
    {
      city: 'Islamabad',
      label: 'Islamabad Office',
      address: 'Pakistan Legal Advisors, Office No. 5, 2nd Floor, Laraib Plaza, Karachi Company, G-9 Markaz, Islamabad.',
      phones: ['0333 1127837'],
    },
    {
      city: 'Lahore',
      label: 'Lahore Office',
      address: 'Qanoon Online, 2nd Floor, Al-Mairaj Arcade, Near Surayya Azeem Trust Hospital, Chauburji Chowk, Lahore.',
      phones: ['0333 1127835'],
    },
  ],
}

export const specialistResources = [
  {
    name: 'Qanoon Group',
    url: 'https://qanoongroup.com/',
    description: 'Pakistan-wide legal information network and specialist referral resource.',
  },
  {
    name: 'Qanoon House',
    url: 'https://qanoonhouse.com/',
    description: 'Legal information and professional resources for family, civil and related matters.',
  },
  {
    name: 'Advocates of Pakistan',
    url: 'https://advocates.com.pk/',
    description: 'Specialist legal information and professional assistance across major practice areas.',
  },
  {
    name: 'Right Law Associates',
    url: 'https://rightlaw.pk/',
    description: 'Family, property, corporate and litigation-focused professional legal resource.',
  },
  {
    name: 'Taxocrate',
    url: 'https://taxocrate.com/',
    description: 'Corporate, taxation, FBR and SECP-focused professional resource.',
  },
]

// PakLegal is a knowledge-base site. Keep every substantive guide discoverable
// from the primary navigation while grouping related intents to avoid a flat,
// overcrowded navbar.
export const megaNavGroups = [
  {
    label: 'Family & Divorce Law',
    href: '/family-law-in-pakistan/',
    items: [
      { label: 'Family Law in Pakistan', href: '/family-law-in-pakistan/' },
      { label: 'Family Lawyers in Pakistan', href: '/family-lawyers-in-pakistan/' },
      { label: 'Divorce & Khula', href: '/divorce-khula/' },
      { label: 'Divorce / Talaq in Pakistan', href: '/divorce-talaq-in-islam-and-divorce-pakistan-family-laws/' },
      { label: 'Divorce Certificate', href: '/divorce-certificate/' },
      { label: 'Adoption & Guardianship', href: '/adoptions-guardianships/' },
      { label: 'Guardianship Laws in Pakistan', href: '/guardianship-laws-in-pakistan/' },
      { label: 'Jactitation of Marriage', href: '/suit-for-jactitation-of-marriage-and-perpetual-silence/' },
    ],
  },
  {
    label: 'Marriage & Nikah',
    href: '/court-marriage-process-and-fee-in-pakistan-2026/',
    items: [
      { label: 'Court Marriage Process & Fee', href: '/court-marriage-process-and-fee-in-pakistan-2026/' },
      { label: 'Court Marriage Rights & Protection', href: '/court-marriage-in-pakistan-rights-protections-in-family-law/' },
      { label: 'Online Nikah in Pakistan', href: '/online-nikah-in-pakistan-legal-registered-verified-and-protected/' },
      { label: 'Nikah, Nikah Nama & Marriage Certificate', href: '/nikah-and-nikah-nama-pakistani-nikah-nama-nadra-marriage-certificate/' },
      { label: 'Pakistani Nikah Nama Registration', href: '/pakistani-nikah-nama-registration-of-marriage-certificate/' },
      { label: 'NADRA Marriage Certificate', href: '/nadra-marriage-certificate/' },
      { label: 'Nikah Khawan Services Karachi', href: '/nikah-khawan-services-in-karachi/' },
      { label: 'Shia & Sunni Nikah Difference', href: '/difference-of-shia-nikah-and-sunni-nikah/' },
      { label: 'Love Marriage in Islam', href: '/love-marriage-in-islam/' },
      { label: 'Mehar / Dower in Islam', href: '/mehar-dower-in-islam/' },
    ],
  },
  {
    label: 'Property, Tenancy & Recovery',
    href: '/pakistani-property-law/',
    items: [
      { label: 'Property Law in Pakistan', href: '/pakistani-property-law/' },
      { label: 'Property Lawyers in Pakistan', href: '/property-lawyers-in-karachi-lahore-islamabad-rawalpindi-pakistan/' },
      { label: 'Rental & Tenancy Law', href: '/rental-and-tenancy-law/' },
      { label: 'Rental Disputes', href: '/rental-disputes/' },
      { label: 'Legal Notice for Recovery of Money', href: '/legal-notice-for-recovery-of-money/' },
    ],
  },
  {
    label: 'Succession & Certificates',
    href: '/succession-certificate/',
    items: [
      { label: 'Succession Certificate', href: '/succession-certificate/' },
      { label: 'NADRA Succession & Letter of Administration', href: '/nadra-succession-certificate-nadra-letter-of-administration-succession-certificate-for-legal-heirs/' },
      { label: 'Child Registration Certificate (CRC)', href: '/child-registration-certificate-crc/' },
      { label: 'Death Certificate', href: '/death-certificate/' },
      { label: 'NADRA Marriage Certificate', href: '/nadra-marriage-certificate/' },
      { label: 'Divorce Certificate', href: '/divorce-certificate/' },
    ],
  },
  {
    label: 'Tax, Corporate & Business',
    href: '/secp-company-registration-in-pakistan/',
    items: [
      { label: 'SECP Company Registration', href: '/secp-company-registration-in-pakistan/' },
      { label: 'FBR Income Tax Return Filing', href: '/fbr-income-tax-return-filing-pakistan/' },
      { label: 'Income Tax Return Filing Lawyers', href: '/income-tax-return-filing-lawyers/' },
      { label: 'Tax Planning for Small Businesses', href: '/tax-planning-for-small-businesses-in-pakistan-how-to-avoid-penalties/' },
    ],
  },
  {
    label: 'Criminal, Lawyers & Legal Practice',
    href: '/criminal-law-criminal-defence-lawyers-attorneys-advocates-of-pakistan-legal-forum/',
    items: [
      { label: 'Criminal Defence Law & Lawyers', href: '/criminal-law-criminal-defence-lawyers-attorneys-advocates-of-pakistan-legal-forum/' },
      { label: 'Good Criminal Defence Lawyer', href: '/qualities-and-responsibilities-of-a-good-criminal-defence-lawyer-in-pakistan/' },
      { label: 'Lawyers & Advocates in Pakistan', href: '/lawyers-advocates-in-pakistan-attorneys-in-karachi-solicitors-in-islamabad/' },
    ],
  },
  {
    label: 'IP, Citizenship & Immigration',
    href: '/trademark-registration-in-pakistan-role-of-intellectual-property-lawyers/',
    items: [
      { label: 'Trademark Registration', href: '/trademark-registration-in-pakistan-role-of-intellectual-property-lawyers/' },
      { label: 'Copyright Registration', href: '/copyright-registration-in-pakistan-role-of-intellectual-property-lawyers/' },
      { label: 'Immigration & Pakistan Passport', href: '/immigration-to-pakistan-pakistan-passport-process/' },
      { label: 'Citizenship, NICOP & Record Correction', href: '/pakistan-citizenship-nicop-passport-linkage-record-correction/' },
    ],
  },
]

export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'Legal Guides', href: '/blogs/', mega: true },
  { label: 'Family Law', href: '/family-law-in-pakistan/' },
  { label: 'Property Law', href: '/pakistani-property-law/' },
  { label: 'Tax & Corporate', href: '/secp-company-registration-in-pakistan/' },
  { label: 'About', href: '/about-us/' },
  { label: 'Contact', href: '/contact-us/' },
]

// Legal Q&A section (/legal-questions/). Owner-approved plan, 24 Nov 2026.
// Question pages are written in-house and reviewed by the named lawyer before
// publication. Nothing submitted through the "Ask a Legal Question" form is
// published automatically. Remaining questions: docs/qa-backlog.md.
//
// Inline links inside paragraphs/items use [anchor](href). Internal hrefs start
// with '/', external ones with 'https://'.

import { site } from '@/lib/site-data'

export const QA_BASE = '/legal-questions'

export const reviewers = {
  pirzada: { name: 'Shafiq Ahmed Pirzada', title: 'Advocate High Court' },
  khakh: { name: 'Fiaz Ahmed Khakh', title: 'Advocate Supreme Court' },
  mumtaz: { name: 'Kashif Mumtaz', title: 'Advocate High Court & Taxation Expert' },
  shah: { name: 'Mohsin Ali Shah', title: 'Senior Corporate & Taxation Consulting Lawyer' },
}

export const qaCategories = [
  {
    slug: 'marriage-nikah',
    name: 'Marriage & Nikah',
    short: 'Nikah',
    description: 'Questions about Nikah validity, wali consent, registration, marriage age and second marriage under the Muslim Family Laws Ordinance, 1961.',
    intro: 'A Nikah in Pakistan is a civil contract under Muslim personal law, and the Muslim Family Laws Ordinance, 1961 (MFLO) adds registration duties on top of it. These answers explain where the law draws the line between what makes a Nikah valid and what only makes it properly recorded.',
    reviewers: ['pirzada'],
    guides: [
      { label: 'Court Marriage Process in Pakistan', href: '/court-marriage-process-and-fee-in-pakistan-2026/' },
      { label: 'Pakistani Nikah Nama Registration', href: '/pakistani-nikah-nama-registration-of-marriage-certificate/' },
      { label: 'Love Marriage in Islam', href: '/love-marriage-in-islam/' },
      { label: 'Online Nikah in Pakistan', href: '/online-nikah-in-pakistan-legal-registered-verified-and-protected/' },
    ],
  },
  {
    slug: 'divorce-khula',
    name: 'Divorce & Khula',
    short: 'Divorce',
    description: 'Questions about talaq, khula, iddat, the Union Council notice under section 7 MFLO, mehr after divorce and the NADRA divorce certificate.',
    intro: 'Divorce in Pakistan follows two tracks: talaq pronounced by the husband (with notice to the Union Council under section 7 of the MFLO) and dissolution or khula obtained by the wife from the Family Court. These answers set out the law, the procedure and the mistakes that most often delay a case.',
    reviewers: ['pirzada'],
    guides: [
      { label: 'Khula in Pakistan', href: '/divorce-khula/' },
      { label: 'Talaq in Pakistan', href: '/divorce-talaq-in-islam-and-divorce-pakistan-family-laws/' },
      { label: 'NADRA Divorce Certificate', href: '/divorce-certificate/' },
      { label: 'Mehar / Dower in Islam', href: '/mehar-dower-in-islam/' },
    ],
  },
  {
    slug: 'family-law',
    name: 'Family Law',
    short: 'Family',
    description: 'Questions about child custody, guardianship, visitation and maintenance before the Family Court and Guardian Court.',
    intro: 'Custody, guardianship and maintenance cases are heard by Family Courts under the Family Courts Act, 1964, applying the Guardians and Wards Act, 1890 and Muslim personal law. The welfare of the child is the deciding factor in every custody question.',
    reviewers: ['pirzada'],
    guides: [
      { label: 'Family Law in Pakistan', href: '/family-law-in-pakistan/' },
      { label: 'Guardianship Laws in Pakistan', href: '/guardianship-laws-in-pakistan/' },
      { label: 'Adoption & Guardianship', href: '/adoptions-guardianships/' },
      { label: 'Family Lawyers in Pakistan', href: '/family-lawyers-in-pakistan/' },
    ],
  },
  {
    slug: 'succession-inheritance',
    name: 'Succession & Inheritance',
    short: 'Inheritance',
    description: 'Questions about Islamic inheritance shares, succession certificates, letters of administration and claims by legal heirs.',
    intro: 'Inheritance among Muslims in Pakistan follows Muslim personal law, while the Succession Act, 1925 and the Letters of Administration and Succession Certificates Act, 2020 provide the paperwork that lets heirs actually collect and transfer assets.',
    reviewers: ['khakh'],
    guides: [
      { label: 'Succession Certificate', href: '/succession-certificate/' },
      { label: 'NADRA Succession Certificate & Letter of Administration', href: '/nadra-succession-certificate-nadra-letter-of-administration-succession-certificate-for-legal-heirs/' },
      { label: 'Property Law in Pakistan', href: '/pakistani-property-law/' },
    ],
  },
  {
    slug: 'property-tenancy',
    name: 'Property & Tenancy',
    short: 'Property',
    description: 'Questions about rent agreements, eviction of tenants, benami property and landlord–tenant disputes in Sindh, Punjab and Islamabad.',
    intro: 'Tenancy law in Pakistan is provincial: Sindh, Punjab and Islamabad each have their own rent statute and rent forum. These answers explain what the law requires and where a written agreement fits in.',
    reviewers: ['khakh'],
    guides: [
      { label: 'Rental and Tenancy Law', href: '/rental-and-tenancy-law/' },
      { label: 'Rental Disputes', href: '/rental-disputes/' },
      { label: 'Property Law in Pakistan', href: '/pakistani-property-law/' },
      { label: 'Property Lawyers in Pakistan', href: '/property-lawyers-in-karachi-lahore-islamabad-rawalpindi-pakistan/' },
    ],
  },
  {
    slug: 'company-tax',
    name: 'Company & Tax',
    short: 'Tax',
    description: 'Questions about NTN registration, income tax returns, the Active Taxpayers List and SECP company registration.',
    intro: 'Tax registration and filing are governed by the Income Tax Ordinance, 2001 and handled through the FBR’s IRIS portal; company incorporation is handled by the SECP under the Companies Act, 2017. These answers cover the first steps and the common errors.',
    reviewers: ['mumtaz', 'shah'],
    guides: [
      { label: 'FBR Income Tax Return Filing', href: '/fbr-income-tax-return-filing-pakistan/' },
      { label: 'SECP Company Registration', href: '/secp-company-registration-in-pakistan/' },
      { label: 'Income Tax Return Filing Lawyers', href: '/income-tax-return-filing-lawyers/' },
      { label: 'Tax Planning for Small Businesses', href: '/tax-planning-for-small-businesses-in-pakistan-how-to-avoid-penalties/' },
    ],
  },
  {
    slug: 'documents-nadra',
    name: 'Documents & NADRA',
    short: 'Documents',
    description: 'Questions about Nikah Nama corrections, lost Nikah Nama copies, MOFA attestation and NADRA certificates such as the B-Form (CRC).',
    intro: 'Most family documents in Pakistan start at the Union Council and are then computerised by NADRA. When a record is wrong, the correction usually has to begin where the record was first made.',
    reviewers: ['pirzada'],
    guides: [
      { label: 'NADRA Marriage Certificate', href: '/nadra-marriage-certificate/' },
      { label: 'Nikah, Nikah Nama & Marriage Certificate', href: '/nikah-and-nikah-nama-pakistani-nikah-nama-nadra-marriage-certificate/' },
      { label: 'Child Registration Certificate (CRC)', href: '/child-registration-certificate-crc/' },
      { label: 'Citizenship, NICOP & Record Correction', href: '/pakistan-citizenship-nicop-passport-linkage-record-correction/' },
    ],
  },
  {
    slug: 'criminal-basics',
    name: 'Criminal Law Basics',
    short: 'Criminal',
    description: 'Questions about FIRs, false cases, bail and pre-arrest bail under the Code of Criminal Procedure, 1898.',
    intro: 'Criminal cases in Pakistan usually begin with an FIR under section 154 of the Code of Criminal Procedure, 1898. These answers explain the first legal steps for a person named in a case, and the remedies available against a false complaint.',
    reviewers: ['khakh'],
    guides: [
      { label: 'Criminal Law & Criminal Defence Lawyers', href: '/criminal-law-criminal-defence-lawyers-attorneys-advocates-of-pakistan-legal-forum/' },
      { label: 'Good Criminal Defence Lawyer', href: '/qualities-and-responsibilities-of-a-good-criminal-defence-lawyer-in-pakistan/' },
      { label: 'Lawyers & Advocates in Pakistan', href: '/lawyers-advocates-in-pakistan-attorneys-in-karachi-solicitors-in-islamabad/' },
    ],
  },
]

const PUBLISHED = '2026-11-24'

export const questions = [
  // ---------------------------------------------------------------- 1
  {
    slug: 'is-nikah-valid-without-wali-consent',
    oneLine: "Yes. An adult Muslim woman’s Nikah is valid without her wali’s consent, but it must still be registered.",
    category: 'marriage-nikah',
    question: 'Is a Nikah valid without the wali’s (guardian’s) consent in Pakistan?',
    urdu: 'Kya wali ki ijazat ke baghair nikah ho jata hai?',
    metaTitle: 'Is Nikah Valid Without Wali Consent in Pakistan?',
    description: 'Yes. Under Pakistani law an adult Muslim woman can marry without her wali’s consent (Saima Waheed case, PLD 2004 SC 219). Conditions, registration and common mistakes explained.',
    shortAnswer: 'Yes. Pakistani courts hold that an adult Muslim woman may contract her own Nikah, and it is valid without her wali’s consent (Hafiz Abdul Waheed v. Asma Jahangir, the “Saima Waheed case”, PLD 2004 SC 219). Both parties must be of legal age and consent freely, and the Nikah must still be registered under section 5 of the MFLO.',
    keywords: ['wali', 'guardian', 'love marriage', 'court marriage', 'consent', 'father permission'],
    reviewer: 'pirzada',
    sections: [
      {
        title: 'What the law says',
        paragraphs: [
          'Pakistan has no statute that makes a wali’s consent a condition for the Nikah of an adult woman. The question was settled by the courts. In the Saima Waheed case, the Lahore High Court held that the Nikah of an adult Muslim woman contracted without her father’s consent was valid, and the Supreme Court upheld that result in Hafiz Abdul Waheed v. Mrs. Asma Jahangir, PLD 2004 SC 219. Courts have followed this position since.',
          'The ruling rests on Hanafi principles, which most Sunni Muslims in Pakistan follow. If the parties follow another school of thought, ask a lawyer how it applies to them.',
        ],
      },
      {
        title: 'Conditions for a valid Nikah',
        items: [
          'Both parties are adults. The minimum age for marriage is 18 in Punjab (2026 Act), Sindh (2013 Act) and Islamabad Capital Territory (2025 Act).',
          'Free consent of both the bride and the groom, given in an offer and acceptance (ijab-o-qabool) at the Nikah.',
          'Two adult Muslim witnesses, as required under Muslim personal law.',
          'Mehr (dower) agreed and written in the Nikah Nama.',
          'No legal bar between the parties, such as a prohibited relationship or an existing marriage of the woman.',
        ],
      },
      {
        title: 'Procedure',
        items: [
          'The Nikah is performed by a licensed Nikah Registrar, or by a Nikah Khawan who must then report it to the Nikah Registrar.',
          'The Nikah Nama is filled in, signed by the bride, groom, witnesses and the person solemnising the Nikah.',
          'The Nikah is registered with the Union Council under section 5 of the Muslim Family Laws Ordinance, 1961.',
          'The couple can then obtain the NADRA computerised marriage certificate from the Union Council. See our [NADRA marriage certificate guide](/nadra-marriage-certificate/).',
        ],
      },
      {
        title: 'Documents usually needed',
        items: [
          'Original CNICs of the bride and groom (or other proof of age).',
          'CNICs of the two witnesses.',
          'Passport-size photographs, if the Nikah Registrar asks for them.',
          'An affidavit of free consent is commonly prepared in “court marriage” cases as additional evidence.',
        ],
      },
      {
        title: 'Common mistakes',
        items: [
          'Believing a “court marriage” is a separate kind of marriage. For Muslims it is an ordinary Nikah, registered with the Union Council. Our [court marriage guide](/court-marriage-process-and-fee-in-pakistan-2026/) explains the process.',
          'Leaving the Nikah unregistered. Registration is a legal duty and the main proof of the marriage. See [what happens if a Nikah is not registered](/legal-questions/what-happens-if-nikah-is-not-registered/).',
          'Signing a Nikah Nama with blank columns, especially the mehr and column 18 (delegated right of divorce).',
          'Ignoring threats from family. Where a couple faces harassment, a lawyer can seek protection from the court and the police.',
        ],
      },
    ],
    note: 'This is the general legal position. Family circumstances, age records and the school of thought followed can change the advice, so consult a lawyer for your case.',
    related: ['what-happens-if-nikah-is-not-registered', 'how-to-correct-mistake-in-nikah-nama', 'can-wife-get-khula-without-husband-consent'],
    guides: [
      { label: 'Love Marriage in Islam', href: '/love-marriage-in-islam/' },
      { label: 'Court Marriage Process in Pakistan', href: '/court-marriage-process-and-fee-in-pakistan-2026/' },
      { label: 'Family Law in Pakistan', href: '/family-law-in-pakistan/' },
    ],
    money: { href: 'https://pakistanmarriage.com.pk/', text: 'Pakistan Marriage Services can arrange a properly registered Nikah with a licensed Nikah Registrar', anchor: 'arranging a registered Nikah' },
    sources: [
      { label: 'Pakistan Code — Muslim Family Laws Ordinance, 1961 (section 5)', url: 'https://pakistancode.gov.pk/' },
      { label: 'NADRA — Pakistan Registration Ecosystem (marriage registration)', url: 'https://www.nadra.gov.pk/ecosystem' },
    ],
  },
  // ---------------------------------------------------------------- 2
  {
    slug: 'what-happens-if-nikah-is-not-registered',
    oneLine: "The Nikah is not void, but non-registration is an offence and the marriage becomes hard to prove.",
    category: 'marriage-nikah',
    question: 'What happens if a Nikah is not registered?',
    urdu: 'Agar nikah register na ho to kya nikah sahi hai?',
    metaTitle: 'What Happens If a Nikah Is Not Registered in Pakistan?',
    description: 'An unregistered Nikah is not void, but failing to register it is an offence under section 5 MFLO and makes the marriage hard to prove. How to register late and what to avoid.',
    shortAnswer: 'An unregistered Nikah is not void: if the Nikah was validly performed under Muslim law, the marriage exists. But section 5 of the Muslim Family Laws Ordinance, 1961 requires registration, failing to report a Nikah is a punishable offence, and without registration you cannot get a NADRA marriage certificate and will struggle to prove the marriage.',
    keywords: ['registration', 'unregistered', 'union council', 'nikah registrar', 'marriage certificate', 'proof of marriage'],
    reviewer: 'pirzada',
    sections: [
      {
        title: 'What the law says',
        paragraphs: [
          'Section 5(1) of the MFLO requires every marriage solemnised under Muslim law to be registered. Section 5(2) provides for licensed Nikah Registrars. Under section 5(3), where the Nikah is solemnised by someone other than the Nikah Registrar, that person must report it to the Nikah Registrar. Failure to report is an offence under section 5(4), punishable with simple imprisonment, a fine, or both. Punjab has added further duties for Registrars through its amendments.',
          'Registration is a legal duty and the primary evidence of a marriage. It is not what makes the Nikah valid. Courts treat a Nikah that meets the requirements of Muslim law (consent, witnesses, offer and acceptance) as a valid marriage even if it was never registered, though the parties and the solemniser may face penalties.',
        ],
      },
      {
        title: 'Practical consequences of no registration',
        items: [
          'No NADRA computerised marriage certificate, so the wife’s CNIC, the Family Registration Certificate and children’s B-Forms may be harder to update.',
          'Difficulty with visas, immigration and spouse applications that ask for registered marriage proof.',
          'Weak evidence if the marriage is later denied, for example in a claim for mehr, maintenance or inheritance.',
          'Risk of the solemniser and parties being prosecuted under section 5(4).',
        ],
      },
      {
        title: 'How to register a Nikah late',
        items: [
          'Contact the Nikah Registrar of the area where the Nikah took place, or the Secretary of the Union Council.',
          'Provide the Nikah Nama (if one was filled in), CNICs of both spouses and witnesses, and a statement of the person who performed the Nikah.',
          'Where no Nikah Nama exists, the Union Council may ask for affidavits of the spouses and witnesses; practice differs between councils and provinces.',
          'Once the entry is made, apply for the NADRA marriage certificate through the Union Council.',
          'If the other spouse denies the marriage, registration cannot be completed by one side alone. The marriage then has to be proved in court with witnesses and other evidence.',
        ],
      },
      {
        title: 'Common mistakes',
        items: [
          'Relying on a Nikah performed by a relative or cleric with no Nikah Nama at all.',
          'Waiting until a dispute arises, when witnesses may be unavailable.',
          'Confusing the Nikah Nama with the NADRA certificate. Our [Nikah Nama registration guide](/pakistani-nikah-nama-registration-of-marriage-certificate/) explains the difference.',
          'Preparing back-dated or altered documents, which can amount to forgery.',
        ],
      },
    ],
    note: 'Whether a particular unregistered Nikah can be proved depends on the evidence available. Consult a lawyer for your case before approaching the Union Council.',
    related: ['is-nikah-valid-without-wali-consent', 'how-to-correct-mistake-in-nikah-nama', 'how-is-property-divided-among-heirs-in-islam'],
    guides: [
      { label: 'Pakistani Nikah Nama Registration', href: '/pakistani-nikah-nama-registration-of-marriage-certificate/' },
      { label: 'NADRA Marriage Certificate', href: '/nadra-marriage-certificate/' },
      { label: 'Jactitation of Marriage', href: '/suit-for-jactitation-of-marriage-and-perpetual-silence/' },
    ],
    money: { href: 'https://courtmarriagekarachi.pk/online-nikah-in-karachi/', text: 'For a Nikah registered correctly from the start, see', anchor: 'Nikah registration help in Karachi' },
    sources: [
      { label: 'Pakistan Code — Muslim Family Laws Ordinance, 1961 (section 5)', url: 'https://pakistancode.gov.pk/' },
      { label: 'NADRA — Pakistan Registration Ecosystem / CRMS', url: 'https://www.nadra.gov.pk/ecosystem' },
    ],
  },
  // ---------------------------------------------------------------- 6
  {
    slug: 'how-long-is-iddat-after-talaq-or-khula',
    oneLine: "Generally three menstrual cycles, three months, or until delivery, alongside the 90-day Union Council period.",
    category: 'divorce-khula',
    question: 'How long does iddat last after talaq or khula?',
    urdu: 'Talaq ya khula ke baad iddat kitne din ki hoti hai?',
    metaTitle: 'How Long Is Iddat After Talaq or Khula in Pakistan?',
    description: 'General rule: three menstrual cycles, three months if the woman does not menstruate, or until delivery if pregnant. How iddat fits with the 90-day Union Council period under section 7 MFLO.',
    shortAnswer: 'As a general rule, iddat after talaq or khula is three menstrual cycles; three months if the woman does not menstruate; and until delivery if she is pregnant. Separately, Pakistani law makes a talaq or khula effective only after the 90-day Union Council period under section 7 MFLO. Consult a lawyer for your case.',
    keywords: ['iddat', 'waiting period', 'remarriage', '90 days', 'union council', 'pregnant'],
    reviewer: 'pirzada',
    sections: [
      {
        title: 'The general rule on iddat',
        paragraphs: [
          'Iddat is the waiting period a woman observes after her marriage ends before she may remarry. Under Muslim personal law, the general rule after divorce is:',
        ],
        items: [
          'Three menstrual cycles, for a woman who menstruates.',
          'Three months, for a woman who does not menstruate (for example because of age).',
          'Until delivery, if she is pregnant.',
        ],
        after: 'The rule can differ where the marriage was never consummated, and the iddat of a widow follows a separate rule. Schools of thought also differ on some details, so consult a lawyer or a qualified scholar for your case.',
      },
      {
        title: 'The 90-day period under section 7 MFLO',
        paragraphs: [
          'Pakistani statute adds a separate legal timeline. Under section 7 of the Muslim Family Laws Ordinance, 1961, a husband who pronounces talaq must give written notice to the Chairman of the Union Council and a copy to the wife. The talaq does not take effect until 90 days after the notice is delivered to the Chairman (section 7(3)). If the wife is pregnant, it does not take effect until the 90 days end or the pregnancy ends, whichever is later (section 7(5)). During this period the Chairman constitutes an Arbitration Council to attempt reconciliation.',
          'For khula or a dissolution decree, section 21 of the Family Courts Act, 1964 requires the Family Court to send a certified copy of the decree to the Chairman, who then proceeds as if a talaq notice had been received. So the 90-day period applies to khula as well.',
          'In practice, a woman should not remarry until the 90-day Union Council period has run and her iddat is complete, and she has the divorce effectiveness certificate. Our [NADRA divorce certificate guide](/divorce-certificate/) explains how that certificate is issued.',
        ],
      },
      {
        title: 'Maintenance during iddat',
        paragraphs: [
          'A divorced wife can generally claim maintenance for the iddat period, in addition to any unpaid mehr. Claims are filed before the Family Court under the Family Courts Act, 1964, which lists dower and maintenance among the matters it decides.',
        ],
      },
      {
        title: 'Common mistakes',
        items: [
          'Remarrying before the Union Council issues its certificate, which can expose both parties to serious legal risk.',
          'Assuming iddat and the 90-day period are the same thing. They overlap but come from different rules.',
          'Not sending a section 7 notice at all after a verbal talaq. See our [talaq guide](/divorce-talaq-in-islam-and-divorce-pakistan-family-laws/).',
          'Overlooking maintenance and mehr claims for the iddat period.',
        ],
      },
    ],
    note: 'Iddat questions depend on the facts of each marriage. This page states the general rule only; consult a lawyer for your case.',
    related: ['can-wife-get-khula-without-husband-consent', 'who-gets-child-custody-after-divorce', 'what-happens-if-nikah-is-not-registered'],
    guides: [
      { label: 'Khula in Pakistan', href: '/divorce-khula/' },
      { label: 'Talaq in Pakistan', href: '/divorce-talaq-in-islam-and-divorce-pakistan-family-laws/' },
      { label: 'NADRA Divorce Certificate', href: '/divorce-certificate/' },
    ],
    money: { href: 'https://divorce.com.pk/', text: 'If you need the Union Council notice and divorce certificate handled properly, see', anchor: 'talaq and khula case support' },
    sources: [
      { label: 'Pakistan Code — Muslim Family Laws Ordinance, 1961 (section 7)', url: 'https://pakistancode.gov.pk/' },
      { label: 'Pakistan Code — Family Courts Act, 1964 (section 21)', url: 'https://pakistancode.gov.pk/' },
      { label: 'NADRA — Pakistan Registration Ecosystem (divorce registration)', url: 'https://www.nadra.gov.pk/ecosystem' },
    ],
  },
  // ---------------------------------------------------------------- 7
  {
    slug: 'can-wife-get-khula-without-husband-consent',
    oneLine: "Yes. The Family Court can decree khula even if the husband refuses to agree.",
    category: 'divorce-khula',
    question: 'Can a wife get khula without the husband’s consent?',
    urdu: 'Kya shohar ki marzi ke baghair khula mil sakta hai?',
    metaTitle: 'Can a Wife Get Khula Without Husband’s Consent in Pakistan?',
    description: 'Yes. The Family Court can decree khula even if the husband refuses (Khurshid Bibi, PLD 1967 SC 97; section 10(4) Family Courts Act 1964). Procedure, documents and mistakes.',
    shortAnswer: 'Yes. In Pakistan the Family Court can dissolve a marriage by khula even if the husband refuses. The Supreme Court recognised this in Khurshid Bibi v. Muhammad Amin (PLD 1967 SC 97), and section 10(4) of the Family Courts Act, 1964 lets the court pass a khula decree when reconciliation fails. The wife may be asked to return benefits such as dower.',
    keywords: ['khula', 'divorce by wife', 'family court', 'husband refuses', 'dissolution', 'DMMA'],
    reviewer: 'pirzada',
    sections: [
      {
        title: 'What the law says',
        paragraphs: [
          'A wife has two routes to end the marriage through court. First, the Dissolution of Muslim Marriages Act, 1939 (section 2) lists grounds such as the husband’s failure to maintain her, cruelty, desertion, and other grounds recognised as valid under Muslim law. Second, she may seek khula: she tells the court she cannot live with the husband within the limits prescribed by Allah, and the court dissolves the marriage.',
          'The husband’s consent is not required for khula. The Supreme Court held in Khurshid Bibi v. Muhammad Amin, PLD 1967 SC 97, that the court may grant khula where it is satisfied the spouses cannot live together in harmony. Section 10(4) of the Family Courts Act, 1964 directs the court to pass a decree for dissolution by khula where reconciliation at the pre-trial stage fails. The court may order the wife to restore benefits received from the husband, usually the dower; the exact rule differs by province after amendments (Punjab has its own provisions).',
        ],
      },
      {
        title: 'Procedure',
        items: [
          'File a suit for dissolution of marriage (on the basis of khula, and any DMMA grounds) in the Family Court, usually where the wife ordinarily resides.',
          'The court issues summons to the husband. If he does not appear despite service, the case can proceed ex parte.',
          'At the pre-trial stage the court attempts reconciliation under section 10 of the Family Courts Act, 1964.',
          'If reconciliation fails, the court passes the khula decree.',
          'The court sends a copy of the decree to the Union Council Chairman under section 21 of the Act. The divorce becomes effective after the 90-day period, and the Union Council issues the certificate. See [how long iddat lasts after khula](/legal-questions/how-long-is-iddat-after-talaq-or-khula/).',
          'Apply for the NADRA divorce certificate. Our [divorce certificate guide](/divorce-certificate/) explains the step.',
        ],
      },
      {
        title: 'Documents usually needed',
        items: [
          'Nikah Nama (copy) and NADRA marriage certificate if available.',
          'CNIC of the wife, and the husband’s CNIC number and last known address.',
          'Children’s B-Forms, if custody or maintenance is also claimed.',
          'Any evidence relevant to DMMA grounds or to claims for dowry articles and maintenance.',
        ],
      },
      {
        title: 'Common mistakes',
        items: [
          'Believing the husband can block khula by refusing to appear or sign.',
          'Not combining claims. Under the Family Courts Act, dower, maintenance, dowry articles and custody claims can be joined with the dissolution suit.',
          'Giving a wrong address for the husband, which delays service.',
          'Remarrying before the Union Council certificate is issued.',
        ],
      },
    ],
    note: 'Whether dower must be returned, and how much, depends on the facts and the province. Our detailed [Khula in Pakistan guide](/divorce-khula/) covers the provincial differences; consult a lawyer for your case.',
    related: ['how-long-is-iddat-after-talaq-or-khula', 'who-gets-child-custody-after-divorce', 'is-nikah-valid-without-wali-consent'],
    guides: [
      { label: 'Khula in Pakistan', href: '/divorce-khula/' },
      { label: 'Mehar / Dower in Islam', href: '/mehar-dower-in-islam/' },
      { label: 'NADRA Divorce Certificate', href: '/divorce-certificate/' },
    ],
    money: { href: 'https://divorce.com.pk/', text: 'To file a khula suit with an experienced family lawyer, see', anchor: 'khula filing in Pakistan' },
    sources: [
      { label: 'Pakistan Code — Dissolution of Muslim Marriages Act, 1939', url: 'https://pakistancode.gov.pk/' },
      { label: 'Pakistan Code — Family Courts Act, 1964 (sections 10 and 21)', url: 'https://pakistancode.gov.pk/' },
    ],
  },
  // ---------------------------------------------------------------- 11
  {
    slug: 'who-gets-child-custody-after-divorce',
    oneLine: "The court decides on the child’s welfare; mothers usually keep young children and fathers remain guardians.",
    category: 'family-law',
    question: 'Who gets custody of children after divorce in Pakistan?',
    urdu: 'Talaq ke baad bachon ki custody kis ko milti hai?',
    metaTitle: 'Who Gets Child Custody After Divorce in Pakistan?',
    description: 'Custody is decided on the welfare of the child under the Guardians and Wards Act 1890 (section 17). Mother’s right of hizanat, father’s guardianship, visitation and common mistakes.',
    shortAnswer: 'The court decides on the welfare of the child, which is the paramount consideration under section 17 of the Guardians and Wards Act, 1890. Under Muslim personal law the mother generally has the right to keep young children (hizanat) and the father remains the natural guardian, but the court can depart from these rules if the child’s welfare requires it.',
    keywords: ['custody', 'hizanat', 'guardian court', 'visitation', 'children', 'mother', 'father'],
    reviewer: 'pirzada',
    sections: [
      {
        title: 'What the law says',
        paragraphs: [
          'Custody (hizanat) and guardianship are decided by the Family Court acting as Guardian Court. The Family Courts Act, 1964 gives it jurisdiction over custody and visitation, and it applies the Guardians and Wards Act, 1890 (GWA). Section 17 of the GWA requires the court to be guided by the welfare of the minor, considering the child’s age, sex, religion, the character and capacity of the proposed guardian, and the child’s own preference if old enough to form one. Section 25 allows the court to order the return of a child to the custody of a guardian.',
          'Under Hanafi personal law, the mother is generally entitled to custody of a son until about seven years and of a daughter until puberty, while the father remains the natural guardian of the child’s person and property. Courts treat these ages as guidance, not fixed rules: welfare decides the case.',
        ],
      },
      {
        title: 'Factors courts commonly look at',
        items: [
          'Who has been caring for the child and the child’s routine and schooling.',
          'Each parent’s home, conduct and ability to look after the child.',
          'The mother’s remarriage, which under personal law can affect hizanat, though courts still weigh welfare.',
          'The wishes of an older child.',
          'Any risk to the child’s safety or health.',
        ],
      },
      {
        title: 'Procedure',
        items: [
          'File a guardianship or custody petition before the Family Court / Guardian Court with jurisdiction where the child ordinarily resides.',
          'Ask for interim custody or a visitation schedule while the case is pending, if needed.',
          'The non-custodial parent normally gets visitation (meeting) rights by court order.',
          'Child maintenance is a separate claim and remains the father’s obligation.',
        ],
      },
      {
        title: 'Documents usually needed',
        items: [
          'Children’s B-Forms (CRC) or birth certificates.',
          'Nikah Nama and divorce certificate or khula decree, if available.',
          'Evidence of the child’s schooling, health and living arrangements.',
        ],
      },
      {
        title: 'Common mistakes',
        items: [
          'Taking the child to another city or abroad during proceedings without the court’s permission.',
          'Stopping the other parent from meeting the child despite a visitation order.',
          'Assuming custody automatically shifts at a particular age.',
          'Treating custody and maintenance as the same case.',
        ],
      },
    ],
    note: 'Custody always turns on the facts of the particular child. Our [Guardianship Laws in Pakistan guide](/guardianship-laws-in-pakistan/) explains the GWA in more depth; consult a lawyer for your case.',
    related: ['can-wife-get-khula-without-husband-consent', 'how-long-is-iddat-after-talaq-or-khula', 'is-nikah-valid-without-wali-consent'],
    guides: [
      { label: 'Guardianship Laws in Pakistan', href: '/guardianship-laws-in-pakistan/' },
      { label: 'Family Law in Pakistan', href: '/family-law-in-pakistan/' },
      { label: 'Adoption & Guardianship', href: '/adoptions-guardianships/' },
    ],
    money: { href: 'https://divorce.com.pk/', text: 'For custody and visitation cases alongside a divorce, see', anchor: 'child custody lawyers for divorce cases' },
    sources: [
      { label: 'Pakistan Code — Guardians and Wards Act, 1890 (sections 17 and 25)', url: 'https://pakistancode.gov.pk/' },
      { label: 'Pakistan Code — Family Courts Act, 1964', url: 'https://pakistancode.gov.pk/' },
    ],
  },
  // ---------------------------------------------------------------- 14
  {
    slug: 'how-is-property-divided-among-heirs-in-islam',
    oneLine: "After debts and any valid will, heirs take fixed Islamic shares; a son takes twice a daughter’s share.",
    category: 'succession-inheritance',
    question: 'How is property divided among heirs in Islam (Pakistan)?',
    urdu: 'Wirasat mein jaidad heirs mein kaise taqseem hoti hai?',
    metaTitle: 'How Is Property Divided Among Heirs in Islam in Pakistan?',
    description: 'Muslim inheritance in Pakistan follows fixed Islamic shares after funeral costs, debts and any valid will. Common shares, transfer steps and section 498-A PPC on depriving women.',
    shortAnswer: 'Among Muslims in Pakistan, the estate is divided under Islamic law of inheritance: first funeral expenses and debts are paid, then any valid will (up to one-third, to non-heirs), and the rest goes to the legal heirs in fixed shares. Sons and daughters inherit together, with a son taking twice a daughter’s share. Depriving a woman of her inheritance is an offence under section 498-A PPC.',
    keywords: ['inheritance', 'wirasat', 'heirs', 'shares', 'daughter share', 'wife share', 'mutation'],
    reviewer: 'khakh',
    sections: [
      {
        title: 'What the law says',
        paragraphs: [
          'For Muslims, succession is governed by Muslim personal law (Shariat), applied by the West Pakistan Muslim Personal Law (Shariat) Application Act, 1962 and the courts. The Succession Act, 1925 and the Letters of Administration and Succession Certificates Act, 2020 deal with the documents heirs need to collect assets, not with the shares themselves.',
          'Before any distribution, the estate pays the deceased’s funeral expenses and debts (including unpaid mehr owed to the wife). A will (wasiyat) can then take effect up to one-third of the remainder, and in favour of a non-heir unless the other heirs consent. The balance goes to the heirs.',
        ],
      },
      {
        title: 'Common shares (general Sunni Hanafi rule)',
        table: {
          headers: ['Heir', 'Share'],
          rows: [
            ['Husband', 'One-half if the wife left no children; one-quarter if she did'],
            ['Wife (or wives together)', 'One-quarter if the husband left no children; one-eighth if he did'],
            ['Sons and daughters', 'Residue, each son taking twice the share of each daughter'],
            ['Only daughters (no son)', 'One daughter: one-half; two or more: two-thirds together'],
            ['Father', 'One-sixth where there are children (plus residue in some cases)'],
            ['Mother', 'One-sixth where there are children or two or more siblings; otherwise one-third'],
          ],
        },
        after: 'Shia (Fiqh-e-Jafaria) rules differ in several respects, and complex families (grandchildren of a predeceased child, siblings, no direct heirs) need a full calculation. Consult a lawyer for your case.',
      },
      {
        title: 'How the property is actually transferred',
        items: [
          'Get the Family Registration Certificate and death certificate from NADRA to identify heirs. See our [death certificate guide](/death-certificate/).',
          'For bank balances, shares and other movable assets, obtain a succession certificate from NADRA’s Succession Facilitation Unit or the civil court. Our [succession certificate guide](/succession-certificate/) explains both routes.',
          'For land, the revenue record is updated through inheritance mutation; for urban property, through the relevant authority or society, often on a letter of administration.',
          'If heirs disagree, a suit for partition and administration can be filed in the civil court.',
        ],
      },
      {
        title: 'Common mistakes',
        items: [
          'Pressuring sisters or daughters to sign gift deeds or relinquishment papers. Section 498-A of the Pakistan Penal Code makes depriving a woman of her inheritance by deceitful or illegal means an offence.',
          'Selling property before all heirs’ shares are recorded.',
          'Ignoring the deceased’s debts and the widow’s unpaid mehr.',
          'Assuming an adopted child inherits automatically. Under Muslim law, provision for an adopted child is made through a gift or will.',
        ],
      },
    ],
    note: 'Shares depend on exactly who survives the deceased. Ask a lawyer to calculate the shares for your family before signing any document.',
    related: ['what-should-a-rent-agreement-contain', 'what-happens-if-nikah-is-not-registered', 'what-to-do-if-false-fir-is-registered'],
    guides: [
      { label: 'Succession Certificate', href: '/succession-certificate/' },
      { label: 'NADRA Succession Certificate & Letter of Administration', href: '/nadra-succession-certificate-nadra-letter-of-administration-succession-certificate-for-legal-heirs/' },
      { label: 'Property Law in Pakistan', href: '/pakistani-property-law/' },
    ],
    money: { href: 'https://advocates.com.pk/', text: 'For help with inheritance mutation, partition or a disputed estate, see', anchor: 'inheritance and succession lawyers' },
    sources: [
      { label: 'Pakistan Code — Succession Act, 1925', url: 'https://pakistancode.gov.pk/' },
      { label: 'Pakistan Code — Letters of Administration and Succession Certificates Act, 2020', url: 'https://pakistancode.gov.pk/' },
      { label: 'Pakistan Code — Pakistan Penal Code, 1860 (section 498-A)', url: 'https://pakistancode.gov.pk/' },
      { label: 'NADRA — Succession Certificate official guidance', url: 'https://www.nadra.gov.pk/identityDocument/certificates/succession?tab=succession' },
    ],
  },
  // ---------------------------------------------------------------- 18
  {
    slug: 'what-should-a-rent-agreement-contain',
    oneLine: "Parties, premises, rent, deposit, term, repairs, use and notice, within the provincial rent law.",
    category: 'property-tenancy',
    question: 'What should a rent agreement contain in Pakistan?',
    urdu: 'Kiraya nama (rent agreement) mein kya kya likha hona chahiye?',
    metaTitle: 'What Should a Rent Agreement Contain in Pakistan?',
    description: 'A rent agreement should identify the parties and premises, rent, deposit, term, repairs, notice and use. Provincial rent laws, registration of leases over one year and common mistakes.',
    shortAnswer: 'A rent agreement should name the landlord and tenant with CNIC numbers, describe the premises, and state the rent, due date, payment method, security deposit, term, renewal and increase terms, repairs and utilities, permitted use, subletting and notice for ending the tenancy. It cannot override the provincial rent law, and a lease for more than one year must be registered.',
    keywords: ['rent agreement', 'kiraya nama', 'tenancy', 'landlord', 'tenant', 'security deposit', 'lease'],
    reviewer: 'khakh',
    sections: [
      {
        title: 'Which law applies',
        paragraphs: [
          'Tenancy in Pakistan is governed by provincial law: the Sindh Rented Premises Ordinance, 1979 in urban Sindh, the Punjab Rented Premises Act, 2009 in Punjab, and the Islamabad Rent Restriction Ordinance, 2001 in Islamabad. The Punjab Act requires tenancy agreements to be in writing and provides for their registration with the Rent Registrar. Our [Rental and Tenancy Law guide](/rental-and-tenancy-law/) compares the three regimes.',
          'Under section 17(1)(d) of the Registration Act, 1908, a lease of immovable property from year to year, for more than one year, or reserving a yearly rent must be registered. A rent agreement must also be stamped under the applicable provincial stamp law.',
        ],
      },
      {
        title: 'Checklist of clauses',
        items: [
          'Full names, CNIC numbers and addresses of the landlord and tenant.',
          'Exact description of the premises (house/flat number, block, area) and any fixtures or furniture included.',
          'Monthly rent, the date it is due, and payment by bank transfer or against written receipts.',
          'Security deposit amount and the conditions for its return.',
          'Start date, term and renewal; any agreed annual rent increase.',
          'Who pays utility bills, maintenance charges and minor and major repairs.',
          'Permitted use (residential or commercial) and a bar on subletting without written consent.',
          'Notice period for either side to end the tenancy and the condition in which the premises must be returned.',
          'Signatures of both parties and two witnesses, with the date.',
        ],
      },
      {
        title: 'Other legal steps',
        items: [
          'Tenant information must be given to the local police in Punjab and Sindh under their temporary-residents laws; landlords are commonly held responsible for this.',
          'Keep rent receipts or bank records; they are the main evidence in any later dispute.',
          'Attach an inventory of fixtures and the condition of the premises.',
        ],
      },
      {
        title: 'Common mistakes',
        items: [
          'Clauses that let the landlord lock out or evict the tenant without going to the Rent Controller. Eviction is only through the rent forum. See [our rental disputes guide](/rental-disputes/).',
          'Paying rent in cash with no receipts.',
          'Leaving the agreement unstamped, or unregistered when the term is over one year.',
          'Copying an agreement from another province without checking the local law.',
        ],
      },
    ],
    note: 'The requirements differ by province and by the type of premises. Consult a lawyer for your case before signing a long or commercial lease.',
    related: ['how-is-property-divided-among-heirs-in-islam', 'what-to-do-if-false-fir-is-registered', 'how-to-get-ntn-in-pakistan'],
    guides: [
      { label: 'Rental and Tenancy Law', href: '/rental-and-tenancy-law/' },
      { label: 'Rental Disputes', href: '/rental-disputes/' },
      { label: 'Property Lawyers in Pakistan', href: '/property-lawyers-in-karachi-lahore-islamabad-rawalpindi-pakistan/' },
    ],
    money: { href: 'https://advocates.com.pk/', text: 'To have a tenancy agreement drafted or checked by a property advocate, see', anchor: 'property and rent agreement advocates' },
    sources: [
      { label: 'Pakistan Code — Registration Act, 1908 (section 17)', url: 'https://pakistancode.gov.pk/' },
      { label: 'Pakistan Code — Islamabad Rent Restriction Ordinance, 2001', url: 'https://pakistancode.gov.pk/' },
    ],
  },
  // ---------------------------------------------------------------- 22
  {
    slug: 'how-to-get-ntn-in-pakistan',
    oneLine: "Register on the FBR IRIS portal; for individuals the CNIC number becomes the NTN.",
    category: 'company-tax',
    question: 'How do I get an NTN in Pakistan?',
    urdu: 'NTN number kaise banwaya jata hai?',
    metaTitle: 'How to Get an NTN in Pakistan (FBR Registration)',
    description: 'Register on the FBR IRIS portal under section 181 of the Income Tax Ordinance 2001. For individuals the CNIC number is the NTN. Steps for individuals, AOPs and companies, and common mistakes.',
    shortAnswer: 'You get an NTN by registering with the FBR on its IRIS portal under section 181 of the Income Tax Ordinance, 2001. Individuals register with their CNIC, a mobile number in their own name and an email address, and their CNIC number becomes their NTN. Firms (AOPs) and companies register with their own documents.',
    keywords: ['NTN', 'FBR', 'IRIS', 'tax registration', 'national tax number', 'income tax'],
    reviewer: 'mumtaz',
    sections: [
      {
        title: 'What the law says',
        paragraphs: [
          'Section 181 of the Income Tax Ordinance, 2001 requires persons liable to tax, or otherwise required by the Ordinance, to register with the FBR, and the FBR issues a National Tax Number (NTN). For individuals, the FBR uses the 13-digit CNIC number as the NTN.',
          'Having an NTN does not by itself make you a “filer”. You appear on the Active Taxpayers List only after filing your income tax return. Our [FBR income tax return guide](/fbr-income-tax-return-filing-pakistan/) explains filing.',
        ],
      },
      {
        title: 'Steps for an individual',
        items: [
          'Open the FBR IRIS portal (iris.fbr.gov.pk) and choose registration for an unregistered person.',
          'Enter your CNIC, a mobile number registered in your own name, and your email address.',
          'Enter the verification codes sent to the mobile and email.',
          'Log in and complete the registration form (Form 181): address, bank account and, if you run a business, its name, address and nature.',
          'Submit. Once registration is complete, your CNIC number works as your NTN.',
        ],
      },
      {
        title: 'Firms (AOP) and companies',
        items: [
          'An association of persons (partnership) registers with its partnership deed, registration certificate if registered, and the partners’ CNICs; the principal officer completes registration.',
          'A company registers after incorporation with the SECP. Companies are generally issued an NTN through the SECP–FBR integration at incorporation; confirm the status on IRIS. See our [SECP company registration guide](/secp-company-registration-in-pakistan/).',
          'Sales tax registration (STRN) is a separate registration under the Sales Tax Act, 1990.',
        ],
      },
      {
        title: 'Common mistakes',
        items: [
          'Using a mobile number registered in someone else’s name, which causes verification problems.',
          'Letting an agent keep your IRIS password and PIN. Keep your own credentials.',
          'Assuming registration alone makes you a filer. You must file your return.',
          'Entering an incorrect business address or bank account, which leads to notices later.',
        ],
      },
    ],
    note: 'Registration requirements change through FBR circulars and Finance Acts. Check the current IRIS instructions and consult a tax lawyer for your case.',
    related: ['what-should-a-rent-agreement-contain', 'how-is-property-divided-among-heirs-in-islam', 'how-to-correct-mistake-in-nikah-nama'],
    guides: [
      { label: 'FBR Income Tax Return Filing', href: '/fbr-income-tax-return-filing-pakistan/' },
      { label: 'Income Tax Return Filing Lawyers', href: '/income-tax-return-filing-lawyers/' },
      { label: 'SECP Company Registration', href: '/secp-company-registration-in-pakistan/' },
    ],
    money: { href: 'https://taxocrate.com/', text: 'For NTN registration and return filing by tax professionals, see', anchor: 'Taxocrate’s NTN and tax services' },
    sources: [
      { label: 'FBR — IRIS portal', url: 'https://iris.fbr.gov.pk/' },
      { label: 'Federal Board of Revenue — Official Portal', url: 'https://www.fbr.gov.pk/' },
      { label: 'Pakistan Code — Income Tax Ordinance, 2001 (section 181)', url: 'https://pakistancode.gov.pk/' },
      { label: 'SECP — Official Portal', url: 'https://www.secp.gov.pk/' },
    ],
  },
  // ---------------------------------------------------------------- 25
  {
    slug: 'how-to-correct-mistake-in-nikah-nama',
    oneLine: "Clerical errors are fixed at the Union Council; disputed terms such as mehr need both spouses or a court.",
    category: 'documents-nadra',
    question: 'How do I correct a mistake in the Nikah Nama?',
    urdu: 'Nikah nama mein ghalti kaise theek karwayein?',
    metaTitle: 'How to Correct a Mistake in the Nikah Nama in Pakistan',
    description: 'Clerical errors are corrected at the Union Council where the Nikah was registered; NADRA then re-issues the certificate. Disputed entries such as mehr need both spouses or a court. Steps and mistakes.',
    shortAnswer: 'Start at the Union Council where the Nikah was registered. Clerical mistakes such as a misspelt name or wrong CNIC number can usually be corrected on an application supported by CNICs and the Nikah Registrar’s record, after which the NADRA marriage certificate is re-issued. Changes to substantive terms, such as the mehr or column 18, need both spouses’ agreement or a court order.',
    keywords: ['nikah nama correction', 'spelling mistake', 'union council', 'NADRA marriage certificate', 'mehr', 'column 18'],
    reviewer: 'pirzada',
    sections: [
      {
        title: 'Why the Union Council comes first',
        paragraphs: [
          'Under section 5 of the Muslim Family Laws Ordinance, 1961 the Nikah is registered by the Nikah Registrar and kept in the Union Council record. NADRA’s computerised marriage certificate is generated from that Union Council entry. NADRA cannot change what the Union Council record says, so a correction must be made in the original record first. Our [NADRA marriage certificate guide](/nadra-marriage-certificate/) explains how the two records connect.',
        ],
      },
      {
        title: 'Clerical errors (names, spellings, CNIC numbers, dates)',
        items: [
          'Obtain a certified copy of the Nikah Nama from the Union Council or the Nikah Registrar.',
          'Apply to the Secretary of the Union Council explaining the error, with copies of both spouses’ CNICs and the Nikah Nama.',
          'The Union Council may ask for the Nikah Registrar’s statement or the original register, and an affidavit from the applicant.',
          'Once the Union Council record is corrected, apply for a fresh NADRA marriage certificate.',
          'Practice differs between provinces and councils; some ask for a court order even for small changes.',
        ],
      },
      {
        title: 'Substantive entries (mehr, conditions, column 18)',
        paragraphs: [
          'Entries such as the amount and type of mehr, special conditions, and the delegated right of divorce in column 18 are terms of the marriage contract. One spouse cannot have them altered alone. If both spouses agree on what was actually settled, take advice on how to record that properly; if they disagree, the dispute is decided by the court, and dower disputes go to the Family Court under the Family Courts Act, 1964.',
        ],
      },
      {
        title: 'Common mistakes',
        items: [
          'Overwriting or altering the original Nikah Nama by hand. Tampering with a public record can amount to forgery.',
          'Asking NADRA to correct a certificate when the Union Council entry itself is wrong.',
          'Ignoring a spelling mismatch until a visa or passport application is refused.',
          'Not checking every column before signing at the Nikah. See [what happens if a Nikah is not registered](/legal-questions/what-happens-if-nikah-is-not-registered/) for related registration issues.',
        ],
      },
    ],
    note: 'Correction procedures vary by Union Council and province. Consult a lawyer for your case, especially if the other spouse disputes the entry.',
    related: ['what-happens-if-nikah-is-not-registered', 'is-nikah-valid-without-wali-consent', 'how-long-is-iddat-after-talaq-or-khula'],
    guides: [
      { label: 'Pakistani Nikah Nama Registration', href: '/pakistani-nikah-nama-registration-of-marriage-certificate/' },
      { label: 'NADRA Marriage Certificate', href: '/nadra-marriage-certificate/' },
      { label: 'Nikah, Nikah Nama & Marriage Certificate', href: '/nikah-and-nikah-nama-pakistani-nikah-nama-nadra-marriage-certificate/' },
    ],
    money: { href: 'https://pakistanmarriage.com.pk/', text: 'For help with Nikah Nama records and marriage certificates, see', anchor: 'Nikah Nama and marriage certificate assistance' },
    sources: [
      { label: 'Pakistan Code — Muslim Family Laws Ordinance, 1961 (section 5)', url: 'https://pakistancode.gov.pk/' },
      { label: 'NADRA — Pakistan Registration Ecosystem / CRMS', url: 'https://www.nadra.gov.pk/ecosystem' },
      { label: 'NADRA — Family Registration Certificate', url: 'https://www.nadra.gov.pk/identityDocument/certificates/frc' },
    ],
  },
  // ---------------------------------------------------------------- 29
  {
    slug: 'what-to-do-if-false-fir-is-registered',
    oneLine: "Get the FIR copy, consider pre-arrest bail, join the investigation and use quashment or acquittal remedies.",
    category: 'criminal-basics',
    question: 'What should I do if a false FIR is registered against me?',
    urdu: 'Agar mere khilaf jhooti FIR darj ho jaye to kya karun?',
    metaTitle: 'What to Do If a False FIR Is Registered Against You in Pakistan',
    description: 'Get the FIR copy, consider pre-arrest bail (section 498 CrPC), give your version to the investigating officer, and use quashment (section 561-A CrPC) or acquittal remedies. Action against a false complainant.',
    shortAnswer: 'Get a copy of the FIR, speak to a criminal lawyer at once, and if arrest is likely apply for pre-arrest bail under section 498 CrPC. Give your version and evidence to the investigating officer. Depending on the case, the High Court can quash a baseless FIR under section 561-A CrPC, and a false complainant can face action under sections 182 and 211 PPC.',
    keywords: ['false FIR', 'jhooti FIR', 'bail', 'pre-arrest bail', 'quash', '561-A', 'police'],
    reviewer: 'khakh',
    sections: [
      {
        title: 'Immediate steps',
        items: [
          'Get a copy of the FIR (FIR number, police station, date and offences). Section 154 of the Code of Criminal Procedure, 1898 governs registration of an FIR.',
          'Consult a criminal lawyer before visiting the police station.',
          'If the offence is one where arrest is possible, apply for pre-arrest (protective) bail under section 498 CrPC before the Sessions Court or the High Court. Courts grant it where the case appears to be motivated by mala fide or ulterior motives.',
          'If already arrested, apply for bail after arrest under section 497 CrPC (non-bailable offences) or section 496 CrPC (bailable offences).',
          'Do not hide or ignore summons. If you abscond, the court may issue a proclamation under section 87 CrPC and attach property under section 88.',
        ],
      },
      {
        title: 'During the investigation',
        items: [
          'Join the investigation and give your version and documents (call records, CCTV, travel records, witnesses) to the investigating officer.',
          'If the police find no evidence, the officer can release the accused under section 169 CrPC and submit a report under section 173 CrPC recommending cancellation; the Magistrate decides whether to accept it.',
          'If police are harassing you or refusing to record your version, an application can be made to the Justice of Peace under section 22-A(6) CrPC or to senior police officers.',
        ],
      },
      {
        title: 'Court remedies against the case',
        items: [
          'Quashing: the High Court may quash an FIR or proceedings under section 561-A CrPC (or in its constitutional jurisdiction under Article 199) where the case is clearly an abuse of process. Courts use this power sparingly at the investigation stage.',
          'Acquittal at an early stage: once the case is in court, the accused may apply for acquittal under section 249-A CrPC (before a Magistrate) or section 265-K CrPC (before a Sessions Court) where there is no probability of conviction.',
        ],
      },
      {
        title: 'Action against the false complainant',
        items: [
          'Section 182 PPC (false information to a public servant) and section 211 PPC (false charge of an offence with intent to injure). A complaint under these sections is subject to section 195 CrPC, which generally requires a complaint by the public servant or the court concerned.',
          'A civil suit for damages for malicious prosecution, usually after the criminal case ends in your favour.',
        ],
      },
      {
        title: 'Common mistakes',
        items: [
          'Approaching or threatening the complainant, which can lead to a further case and cancellation of bail.',
          'Posting about the case on social media.',
          'Missing court dates after bail is granted, which can lead to cancellation.',
          'Waiting until arrest before seeing a lawyer.',
        ],
      },
    ],
    note: 'The right remedy depends on the offence, the stage of the case and the evidence. Our [criminal law guide](/criminal-law-criminal-defence-lawyers-attorneys-advocates-of-pakistan-legal-forum/) covers bail and trial in more depth; consult a lawyer for your case.',
    related: ['what-should-a-rent-agreement-contain', 'how-is-property-divided-among-heirs-in-islam', 'who-gets-child-custody-after-divorce'],
    guides: [
      { label: 'Criminal Law & Criminal Defence Lawyers', href: '/criminal-law-criminal-defence-lawyers-attorneys-advocates-of-pakistan-legal-forum/' },
      { label: 'Good Criminal Defence Lawyer', href: '/qualities-and-responsibilities-of-a-good-criminal-defence-lawyer-in-pakistan/' },
    ],
    money: { href: 'https://advocates.com.pk/', text: 'For bail and FIR matters, you can reach', anchor: 'criminal defence advocates in Pakistan' },
    sources: [
      { label: 'Pakistan Code — Code of Criminal Procedure, 1898', url: 'https://pakistancode.gov.pk/' },
      { label: 'Pakistan Code — Pakistan Penal Code, 1860', url: 'https://pakistancode.gov.pk/' },
      { label: 'Pakistan Code — Constitution of Pakistan (Article 199)', url: 'https://pakistancode.gov.pk/' },
    ],
  },
].map((q) => ({ ...q, published: PUBLISHED, updated: PUBLISHED }))

export const questionsBySlug = Object.fromEntries(questions.map((q) => [q.slug, q]))
export const categoriesBySlug = Object.fromEntries(qaCategories.map((c) => [c.slug, c]))

// Questions in the backlog, shown as plain text (no link) on category pages
// until each one is written and reviewed. Keep in sync with docs/qa-backlog.md.
export const upcomingQuestions = {
  'marriage-nikah': [
    'Can a Nikah be done online if the groom is abroad?',
    'What is the minimum age for marriage in Punjab, Sindh and Islamabad?',
    'Can a second marriage be done without the first wife’s permission?',
  ],
  'divorce-khula': [
    'What is the talaq notice procedure under section 7 MFLO?',
    'Does the wife get her mehr after khula?',
    'How do I get a NADRA divorce certificate?',
  ],
  'family-law': [
    'How is child maintenance decided?',
    'Can a father take children abroad without the mother’s consent?',
  ],
  'succession-inheritance': [
    'What is a succession certificate and when is it needed?',
    'Letter of administration vs succession certificate – what is the difference?',
    'Can a daughter claim her share years later?',
  ],
  'property-tenancy': [
    'How to evict a tenant legally?',
    'What is benami property?',
  ],
  'company-tax': [
    'How to register a company (SMC) with SECP?',
    'Who must file an income tax return?',
    'What is the Active Taxpayers List (ATL)?',
  ],
  'documents-nadra': [
    'How to get a lost Nikah Nama copy?',
    'What is MOFA attestation and when is it needed?',
    'How to make a B-Form (CRC)?',
  ],
  'criminal-basics': [
    'How to get pre-arrest bail?',
  ],
}

export function reviewerFor(q) {
  return reviewers[q.reviewer]
}

export function questionUrl(slug) {
  return `${QA_BASE}/${slug}/`
}

// Plain text of an inline-link string ("[a](b)" -> "a").
export function plain(text = '') {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
}

export function answerPlainText(q) {
  const parts = [q.shortAnswer]
  for (const s of q.sections) {
    parts.push(s.title + '.')
    s.paragraphs?.forEach((p) => parts.push(plain(p)))
    s.items?.forEach((i) => parts.push(plain(i)))
    s.table?.rows.forEach((r) => parts.push(`${r[0]}: ${r[1]}.`))
    if (s.after) parts.push(plain(s.after))
  }
  if (q.note) parts.push(plain(q.note))
  return parts.join(' ')
}

// The site's main WhatsApp number (same one the header uses).
export const WHATSAPP_NUMBER = site.phones.karachi.replace(/\D/g, '').replace(/^0/, '92')

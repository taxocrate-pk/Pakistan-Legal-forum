# Legal Q&A backlog (/legal-questions/)

Source: owner-approved plan "paklegal.com.pk – Legal Q&A Section Plan" (Google Doc, Nov 2026), section 4 (first batch of 30).

First release (24 Nov 2026) published 10 questions: #1, #2, #6, #7, #11, #14, #18, #22, #25, #29 — at least one in each of the 8 categories.
#15 and #21 were held back from the first release because the existing guides `/succession-certificate/` and `/secp-company-registration-in-pakistan/` already cover them in depth; when written, keep them as short answers that link to those guides rather than repeating them.

## How to add a question

1. Add an entry to `questions` in `lib/legal-qa.js` (slug without a year, `category`, `question`, `urdu`, `oneLine`, `shortAnswer`, `sections`, `related` (published slugs only), `guides`, one `money` link, `sources`, `reviewer`).
2. Remove the question from `upcomingQuestions` in the same file and tick it below.
3. Set the real publication date (do not back-date). The sitemap picks up new questions automatically.
4. Check an existing PakLegal guide does not already answer the same question; link to it instead of duplicating.
5. Reviewer by category: Marriage/Nikah, Divorce/Khula, Family, Documents/NADRA → Shafiq Ahmed Pirzada (Advocate High Court); Succession/Inheritance, Property/Tenancy, Criminal → Fiaz Ahmed Khakh (Advocate Supreme Court); tax/NTN/returns → Kashif Mumtaz (Advocate High Court & Taxation Expert); company/SECP → Mohsin Ali Shah (Senior Corporate & Taxation Consulting Lawyer).
6. Money link (one per page, vary the anchor): divorce.com.pk (divorce/khula), courtmarriagekarachi.pk/online-nikah-in-karachi/ or pakistanmarriage.com.pk (nikah), taxocrate.com (company/NTN/tax), advocates.com.pk (succession/property/criminal).
7. Rules: Act + section with official links; no government fee figures; no guessed timelines; no invented people or statistics; WhatsApp only (no tel: links).

## Remaining 20 questions

| # | Question | Category | Suggested slug | Reviewer | Existing guide to link |
|---|---|---|---|---|---|
| 3 | Can a Nikah be done online if the groom is abroad? | marriage-nikah | can-nikah-be-done-online-if-groom-is-abroad | Pirzada | /online-nikah-in-pakistan-legal-registered-verified-and-protected/ |
| 4 | What is the minimum age for marriage in Punjab, Sindh and Islamabad? | marriage-nikah | minimum-age-for-marriage-punjab-sindh-islamabad | Pirzada | /court-marriage-process-and-fee-in-pakistan-2026/ |
| 5 | Can a second marriage be done without the first wife's permission? | marriage-nikah | second-marriage-without-first-wife-permission | Pirzada | /family-law-in-pakistan/ |
| 8 | What is the talaq notice procedure under section 7 MFLO? | divorce-khula | talaq-notice-procedure-section-7-mflo | Pirzada | /divorce-talaq-in-islam-and-divorce-pakistan-family-laws/ |
| 9 | Does the wife get her mehr after khula? | divorce-khula | does-wife-get-mehr-after-khula | Pirzada | /mehar-dower-in-islam/, /divorce-khula/ |
| 10 | How do I get a NADRA divorce certificate? | divorce-khula | how-to-get-nadra-divorce-certificate | Pirzada | /divorce-certificate/ |
| 12 | How is child maintenance decided? | family-law | how-is-child-maintenance-decided | Pirzada | /family-law-in-pakistan/ |
| 13 | Can a father take children abroad without the mother's consent? | family-law | can-father-take-children-abroad-without-mother-consent | Pirzada | /guardianship-laws-in-pakistan/ |
| 15 | What is a succession certificate and when is it needed? | succession-inheritance | what-is-succession-certificate-when-needed | Khakh | /succession-certificate/ (short answer + link only) |
| 16 | Letter of administration vs succession certificate – difference? | succession-inheritance | letter-of-administration-vs-succession-certificate | Khakh | /nadra-succession-certificate-nadra-letter-of-administration-succession-certificate-for-legal-heirs/ |
| 17 | Can a daughter claim her share years later? | succession-inheritance | can-daughter-claim-inheritance-share-years-later | Khakh | /succession-certificate/ |
| 19 | How to evict a tenant legally? | property-tenancy | how-to-evict-tenant-legally | Khakh | /rental-disputes/, /rental-and-tenancy-law/ |
| 20 | What is benami property? | property-tenancy | what-is-benami-property | Khakh | /pakistani-property-law/ |
| 21 | How to register a company (SMC) with SECP? | company-tax | how-to-register-smc-company-with-secp | Mohsin Ali Shah | /secp-company-registration-in-pakistan/ (short answer + link only) |
| 23 | Who must file an income tax return? | company-tax | who-must-file-income-tax-return | Kashif Mumtaz | /fbr-income-tax-return-filing-pakistan/ |
| 24 | What is the Active Taxpayers List (ATL)? | company-tax | what-is-active-taxpayers-list-atl | Kashif Mumtaz | /income-tax-return-filing-lawyers/ |
| 26 | How to get a lost Nikah Nama copy? | documents-nadra | how-to-get-lost-nikah-nama-copy | Pirzada | /pakistani-nikah-nama-registration-of-marriage-certificate/ |
| 27 | What is MOFA attestation and when is it needed? | documents-nadra | what-is-mofa-attestation | Pirzada | /nadra-marriage-certificate/ |
| 28 | How to make a B-Form (CRC)? | documents-nadra | how-to-make-b-form-crc | Pirzada | /child-registration-certificate-crc/ |
| 30 | How to get pre-arrest bail? | criminal-basics | how-to-get-pre-arrest-bail | Khakh | /criminal-law-criminal-defence-lawyers-attorneys-advocates-of-pakistan-legal-forum/ |

## Published

- [x] #1 /legal-questions/is-nikah-valid-without-wali-consent/
- [x] #2 /legal-questions/what-happens-if-nikah-is-not-registered/
- [x] #6 /legal-questions/how-long-is-iddat-after-talaq-or-khula/
- [x] #7 /legal-questions/can-wife-get-khula-without-husband-consent/
- [x] #11 /legal-questions/who-gets-child-custody-after-divorce/
- [x] #14 /legal-questions/how-is-property-divided-among-heirs-in-islam/
- [x] #18 /legal-questions/what-should-a-rent-agreement-contain/
- [x] #22 /legal-questions/how-to-get-ntn-in-pakistan/
- [x] #25 /legal-questions/how-to-correct-mistake-in-nikah-nama/
- [x] #29 /legal-questions/what-to-do-if-false-fir-is-registered/

# PakLegal.com.pk Next.js Migration Status

Updated: 2026-09-29

## Migration rules

- Preserve established indexed/ranking URLs unless GSC evidence supports consolidation.
- Do not merge `/succession-certificate/` with the long NADRA succession URL: they serve different query intent.
- All substantive knowledge pages target long-form source-led content with one H1, structured H2/H3 sections, tables, FAQs, official-source links, canonical metadata, Article/Breadcrumb/FAQ schema and related internal links.
- Do not production-cut over from WordPress until important legacy URLs are either rebuilt or intentionally redirected.

## GSC priority pages rebuilt

| URL | GSC clicks (2026-06-01 to 2026-09-26) | GSC impressions | Status |
|---|---:|---:|---|
| `/divorce-certificate/` | 393 | 18,195 | READY |
| `/nadra-succession-certificate-nadra-letter-of-administration-succession-certificate-for-legal-heirs/` | 162 | 20,545 | READY |
| `/child-registration-certificate-crc/` | 119 | 43,475 | READY |
| `/rental-and-tenancy-law/` | 78 | 4,176 | READY |
| `/fbr-income-tax-return-filing-pakistan/` | 48 | 4,956 | READY |
| `/difference-of-shia-nikah-and-sunni-nikah/` | 46 | 2,653 | READY |
| `/death-certificate/` | 30 | 5,215 | READY |
| `/nadra-marriage-certificate/` | 28 | 3,080 | READY |
| `/secp-company-registration-in-pakistan/` | 22 | 6,444 | READY |
| `/divorce-talaq-in-islam-and-divorce-pakistan-family-laws/` | 19 | 1,394 | READY |
| `/succession-certificate/` | 12 | 6,600 | READY as separate broad-intent guide |
| `/pakistani-property-law/` | 4 | 497 | READY pillar; canonical target for property duplicate |
| `/family-law-in-pakistan/` | 0 | 369 | READY pillar |

## Utility / structural routes rebuilt

- `/`
- `/about-us/`
- `/contact-us/`
- `/blogs/`
- `/privacy-policy/`
- `/terms-of-service/`
- `/robots.txt` via Next metadata route
- `/sitemap.xml` via Next metadata route

## Redirects approved from GSC evidence

- `/home` -> `/`
- `/fbr-income-tax-return-filing-pakistan/0.6.10` -> `/fbr-income-tax-return-filing-pakistan/`
- `/fbr-income-tax-return-filing-pakistan/DFD` -> `/fbr-income-tax-return-filing-pakistan/`
- `/property-law-in-pakistan` -> `/pakistani-property-law/`

## Important legacy URLs still pending

Priority next batch:

1. `/nikah-and-nikah-nama-pakistani-nikah-nama-nadra-marriage-certificate/`
2. `/suit-for-jactitation-of-marriage-and-perpetual-silence/`
3. `/income-tax-return-filing-lawyers/`
4. `/nikah-khawan-services-in-karachi/`
5. `/rental-disputes/`
6. `/adoptions-guardianships/`
7. `/guardianship-laws-in-pakistan/`
8. `/love-marriage-in-islam/`
9. `/mehar-dower-in-islam/`
10. `/online-nikah-in-pakistan-legal-registered-verified-and-protected/`
11. `/pakistani-nikah-nama-registration-of-marriage-certificate/` — cannibalisation review before deciding merge/retarget
12. `/court-marriage-process-and-fee-in-pakistan-2026/`
13. `/court-marriage-in-pakistan-rights-protections-in-family-law/`
14. criminal-law cluster — differentiate authority page vs supporting article before migration
15. remaining property, civil, immigration, IP, banking and legal-document pages.

## Cannibalisation notes

### Succession
Keep both URLs:
- `/succession-certificate/` — broad succession/heirship/fee intent.
- long NADRA succession URL — NADRA process, documents, online application and Letter of Administration intent.

### Nikah Nama / Marriage Certificate
Three legacy pages overlap. Do not redirect yet until page-level query intent is finalized:
- `/nikah-and-nikah-nama-pakistani-nikah-nama-nadra-marriage-certificate/`
- `/pakistani-nikah-nama-registration-of-marriage-certificate/`
- `/nadra-marriage-certificate/`

The rebuilt `/nadra-marriage-certificate/` is focused on the computerized civil-registration certificate. The remaining Nikah Nama page should focus on the marriage contract/registration form rather than repeat certificate content.

### Criminal law
Maintain one main criminal-law authority page and retarget the “qualities and responsibilities” URL as a supporting informational article rather than duplicating the main commercial/legal intent.

## Production cut-over gate

Do not point `paklegal.com.pk` production traffic at this Next.js repository until:

1. CI build passes.
2. Top legacy URLs are covered or redirected intentionally.
3. Contact/footer data is rechecked immediately before cut-over.
4. Sitemap is complete for all migrated pages.
5. Canonical and trailing-slash behavior is verified in preview.
6. No important GSC URL returns 404.
7. Preview receives a crawl/Lighthouse/on-page check before DNS/domain switch.

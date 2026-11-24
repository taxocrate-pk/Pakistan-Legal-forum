/** @type {import('next').NextConfig} */
const nextConfig = {
  // Canonicals, sitemap and legacy WordPress URLs all end in '/'. Without this,
  // Next.js 308-redirected every '/slug/' to '/slug', so each canonical pointed at a redirect.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Old WordPress URLs reported as 404 in GSC (25 Nov 2026) -> closest live guide
      { source: '/law-site-of-the-law-firm-in-karachi-islamabad-rawalpindi', destination: '/lawyers-advocates-in-pakistan-attorneys-in-karachi-solicitors-in-islamabad/', permanent: true },
      { source: '/corporate-lawyers-in-karachi-islamabad-lahore', destination: '/secp-company-registration-in-pakistan/', permanent: true },
      { source: '/illegal-dispossession-act-2005-legal-rights-procedures-case-law-in-pakistan', destination: '/pakistani-property-law/', permanent: true },
      { source: '/banking-financial-law-and-lawyers-in-karachi-islamabad-rawalpindi-lahore', destination: '/lawyers-advocates-in-pakistan-attorneys-in-karachi-solicitors-in-islamabad/', permanent: true },
      { source: '/best-accounting-software-in-pakistan', destination: '/tax-planning-for-small-businesses-in-pakistan-how-to-avoid-penalties/', permanent: true },
      { source: '/case-family-violence', destination: '/family-law-in-pakistan/', permanent: true },
      { source: '/marriage-in-islam', destination: '/love-marriage-in-islam/', permanent: true },
      { source: '/category/family-law', destination: '/family-law-in-pakistan/', permanent: true },
      { source: '/court-marriage-process-and-fee-in-pakistan-2025', destination: '/court-marriage-process-and-fee-in-pakistan-2026/', permanent: true },
      { source: '/tax-lawyers-pakistan', destination: '/income-tax-return-filing-lawyers/', permanent: true },
      // www.paklegal.com.pk -> paklegal.com.pk is handled in proxy.js (keeps the trailing slash, one hop).
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/fbr-income-tax-return-filing-pakistan/0.6.10',
        destination: '/fbr-income-tax-return-filing-pakistan/',
        permanent: true,
      },
      {
        source: '/fbr-income-tax-return-filing-pakistan/DFD',
        destination: '/fbr-income-tax-return-filing-pakistan/',
        permanent: true,
      },
      {
        source: '/property-law-in-pakistan',
        destination: '/pakistani-property-law/',
        permanent: true,
      },
      {
        source: '/property-lawyers-plead-in-all-property-cases',
        destination: '/property-lawyers-in-karachi-lahore-islamabad-rawalpindi-pakistan/',
        permanent: true,
      },
      {
        source: '/guardianship-lawyers-in-karachi-lahore-islamabad',
        destination: '/guardianship-laws-in-pakistan/',
        permanent: true,
      },
      {
        source: '/online-nikah-service-in-karachi-lahore-islamabad-rawalpindi-pakistan',
        destination: '/online-nikah-in-pakistan-legal-registered-verified-and-protected/',
        permanent: true,
      },
      {
        source: '/divorce-divorce-law-in-pakistan',
        destination: '/divorce-talaq-in-islam-and-divorce-pakistan-family-laws/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig

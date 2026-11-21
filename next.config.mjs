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

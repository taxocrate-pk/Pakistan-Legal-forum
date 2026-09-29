/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
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
    ]
  },
}

export default nextConfig

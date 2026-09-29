import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import './knowledge-base.css'
import './utility.css'

export const metadata = {
  metadataBase: new URL('https://paklegal.com.pk'),
  title: {
    default: 'Pakistan Legal Forum | Pakistani Law, Legal Guides & Resources',
    template: '%s | Pakistan Legal Forum',
  },
  description: 'Source-led legal information about Pakistani family, property, succession, corporate, taxation, civil and documentation law, with professional references for further guidance.',
  applicationName: 'Pakistan Legal Forum',
  generator: 'PakLegal.com.pk',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://paklegal.com.pk/',
    siteName: 'Pakistan Legal Forum',
    title: 'Pakistan Legal Forum | Pakistani Law, Legal Guides & Resources',
    description: 'Practical, source-led Pakistani legal information and specialist legal resources.',
  },
  robots: { index: true, follow: true },
}

export const viewport = { colorScheme: 'light', themeColor: '#0c1c2c', userScalable: true }

export default function RootLayout({ children }) {
  return <html lang="en-PK"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}

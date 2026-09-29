import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata = {
  title: 'PakLegal.com.pk | Pakistan Legal Forum',
  description: 'Practical legal information and access to professional legal assistance across Pakistan.',
  generator: 'PakLegal.com.pk',
}

export const viewport = { colorScheme: 'light', themeColor: '#0c1c2c', userScalable: true }

export default function RootLayout({ children }) {
  return <html lang="en"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}

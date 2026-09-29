import { guideList } from '@/lib/guides'

const staticRoutes = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: 'blogs/', priority: 0.9, changeFrequency: 'weekly' },
  { path: 'about-us/', priority: 0.6, changeFrequency: 'monthly' },
  { path: 'contact-us/', priority: 0.6, changeFrequency: 'monthly' },
  { path: 'privacy-policy/', priority: 0.3, changeFrequency: 'yearly' },
  { path: 'terms-of-service/', priority: 0.3, changeFrequency: 'yearly' },
]

export default function sitemap() {
  const now = new Date()
  return [
    ...staticRoutes.map((item) => ({
      url: `https://paklegal.com.pk/${item.path}`,
      lastModified: now,
      changeFrequency: item.changeFrequency,
      priority: item.priority,
    })),
    ...guideList.map((guide) => ({
      url: `https://paklegal.com.pk/${guide.slug}/`,
      lastModified: new Date(guide.reviewed),
      changeFrequency: 'monthly',
      priority: 0.9,
    })),
  ]
}

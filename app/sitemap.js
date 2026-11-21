import { listArticles } from '@/lib/articles-store'
import { guideList } from '@/lib/guides'

const staticRoutes = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: 'blogs/', priority: 0.9, changeFrequency: 'weekly' },
  { path: 'about-us/', priority: 0.6, changeFrequency: 'monthly' },
  { path: 'contact-us/', priority: 0.6, changeFrequency: 'monthly' },
  { path: 'privacy-policy/', priority: 0.3, changeFrequency: 'yearly' },
  { path: 'terms-of-service/', priority: 0.3, changeFrequency: 'yearly' },
]

export const dynamic = 'force-dynamic'

export default async function sitemap() {
  const now = new Date()
  let articles = []
  try {
    articles = (await listArticles()).filter((a) => a.status === 'published')
  } catch {}
  return [
    { url: 'https://paklegal.com.pk/articles/', lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    ...articles.map((a) => ({ url: `https://paklegal.com.pk/articles/${a.slug}/`, lastModified: new Date(a.updatedAt || a.createdAt), changeFrequency: 'monthly', priority: 0.7 })),
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

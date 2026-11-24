import { listArticles } from '@/lib/articles-store'
import { guideList } from '@/lib/guides'
import { qaCategories, questions } from '@/lib/legal-qa'

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
    { url: 'https://paklegal.com.pk/legal-questions/', lastModified: new Date(questions.reduce((d, q) => (q.updated > d ? q.updated : d), '')), changeFrequency: 'daily', priority: 0.9 },
    ...qaCategories.map((c) => ({
      url: `https://paklegal.com.pk/legal-questions/${c.slug}/`,
      lastModified: new Date(questions.filter((q) => q.category === c.slug).reduce((d, q) => (q.updated > d ? q.updated : d), '2026-11-24')),
      changeFrequency: 'weekly',
      priority: 0.7,
    })),
    ...questions.map((q) => ({
      url: `https://paklegal.com.pk/legal-questions/${q.slug}/`,
      lastModified: new Date(q.updated),
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ]
}

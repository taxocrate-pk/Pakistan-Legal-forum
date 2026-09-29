import { guideList } from '@/lib/guides'

export default function sitemap() {
  const now = new Date()
  return [
    {
      url: 'https://paklegal.com.pk/',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...guideList.map((guide) => ({
      url: `https://paklegal.com.pk/${guide.slug}/`,
      lastModified: new Date(guide.reviewed),
      changeFrequency: 'monthly',
      priority: 0.9,
    })),
  ]
}

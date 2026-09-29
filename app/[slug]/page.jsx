import { notFound } from 'next/navigation'
import LegalGuidePage from '@/components/legal-guide-page'
import { guides, guideList } from '@/lib/guides'
import { site } from '@/lib/site-data'

export function generateStaticParams() {
  return guideList.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const guide = guides[slug]
  if (!guide) return {}
  const url = `${site.url}/${guide.slug}/`
  return {
    title: `${guide.shortTitle || guide.h1} | Pakistan Legal Forum`,
    description: guide.description,
    alternates: { canonical: url },
    openGraph: {
      title: guide.h1,
      description: guide.description,
      url,
      siteName: site.name,
      type: 'article',
      locale: 'en_PK',
    },
    robots: { index: true, follow: true },
  }
}

export default async function KnowledgeGuide({ params }) {
  const { slug } = await params
  const guide = guides[slug]
  if (!guide) notFound()
  return <LegalGuidePage guide={guide} />
}

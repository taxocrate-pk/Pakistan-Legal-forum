import { notFound } from 'next/navigation'
import { CategoryPage, QuestionPage } from '@/components/legal-qa'
import { QA_BASE, categoriesBySlug, qaCategories, questionUrl, questions, questionsBySlug } from '@/lib/legal-qa'
import { site } from '@/lib/site-data'
import '../../legal-qa.css'

// One segment serves both category pages and question pages; slugs never overlap.
export const dynamicParams = false

export function generateStaticParams() {
  return [...qaCategories.map((c) => ({ slug: c.slug })), ...questions.map((q) => ({ slug: q.slug }))]
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const cat = categoriesBySlug[slug]
  if (cat) {
    const url = `${site.url}${QA_BASE}/${cat.slug}/`
    const title = `${cat.name} Questions & Answers`
    return {
      title,
      description: cat.description,
      alternates: { canonical: url },
      openGraph: { title, description: cat.description, url, siteName: site.name, type: 'website', locale: 'en_PK' },
      robots: { index: true, follow: true },
    }
  }
  const q = questionsBySlug[slug]
  if (!q) return {}
  const url = `${site.url}${questionUrl(q.slug)}`
  return {
    title: q.metaTitle,
    description: q.description,
    alternates: { canonical: url },
    openGraph: { title: q.question, description: q.description, url, siteName: site.name, type: 'article', locale: 'en_PK', modifiedTime: q.updated, publishedTime: q.published },
    robots: { index: true, follow: true },
  }
}

export default async function LegalQuestionRoute({ params }) {
  const { slug } = await params
  if (categoriesBySlug[slug]) return <CategoryPage cat={categoriesBySlug[slug]} />
  const q = questionsBySlug[slug]
  if (!q) notFound()
  return <QuestionPage q={q} />
}

import Link from 'next/link'
import { SiteFooter, SiteHeader } from '@/components/site-shell'
import { guideList } from '@/lib/guides'

export const metadata = {
  title: 'Legal Guides & Resources',
  description: 'Browse Pakistan Legal Forum knowledge guides covering family law, succession, civil registration, property, taxation, tenancy and company law.',
  alternates: { canonical: 'https://paklegal.com.pk/blogs/' },
}

export default function ResourcesPage() {
  const sorted = [...guideList].sort((a, b) => a.category.localeCompare(b.category) || a.shortTitle.localeCompare(b.shortTitle))
  return <>
    <SiteHeader interior />
    <main>
      <section className="utility-hero"><div className="container"><p className="eyebrow">Pakistan Legal Forum Knowledge Base</p><h1>Legal guides & resources</h1><p>Long-form Pakistani legal guides organised by legal intent. Each rebuilt page keeps a focused subject, clear H1/H2 structure, practical tables, FAQs and links to current official sources.</p></div></section>
      <section className="utility-page"><div className="container">
        <div className="utility-copy"><h2>Browse the rebuilt knowledge base</h2><p>Pakistan Legal Forum is being migrated from its older WordPress structure to a source-led Next.js knowledge base. Existing search URLs are preserved where they have useful Google Search Console history, while overlapping pages are differentiated or consolidated so that one strong page answers each main legal intent.</p></div>
        <div className="resource-directory">{sorted.map((guide) => <article key={guide.slug}><span className="resource-category">{guide.category}</span><h2>{guide.shortTitle}</h2><p>{guide.description}</p><Link href={`/${guide.slug}/`}>Read legal guide →</Link></article>)}</div>
      </div></section>
    </main>
    <SiteFooter />
  </>
}

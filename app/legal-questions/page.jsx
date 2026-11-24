import Link from 'next/link'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-shell'
import { JsonLd } from '@/components/legal-qa'
import { AskQuestionForm, QaExplorer } from '@/components/legal-qa-client'
import { QA_BASE, WHATSAPP_NUMBER, categoriesBySlug, qaCategories, questionUrl, questions, reviewers } from '@/lib/legal-qa'
import { site } from '@/lib/site-data'
import '../legal-qa.css'

const url = `${site.url}${QA_BASE}/`

export const metadata = {
  title: { absolute: 'Legal Questions & Answers – Pakistan Legal Forum' },
  description: 'Clear answers to common Pakistani legal questions on Nikah, khula, custody, inheritance, tenancy, NTN, NADRA documents and FIRs, each reviewed by a practising advocate.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Legal Questions & Answers – Pakistan Legal Forum',
    description: 'Lawyer-reviewed answers to common Pakistani legal questions, with the Act and section behind each answer.',
    url,
    siteName: site.name,
    type: 'website',
    locale: 'en_PK',
  },
  robots: { index: true, follow: true },
}

export default function LegalQuestionsHub() {
  const items = questions.map((q) => ({
    slug: q.slug,
    question: q.question,
    oneLine: q.oneLine,
    category: q.category,
    categoryName: categoriesBySlug[q.category].name,
    keywords: q.keywords,
  }))
  const cats = qaCategories.map((c) => ({ slug: c.slug, name: c.name }))
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${url}#collection`,
        url,
        name: 'Legal Questions & Answers',
        description: metadata.description,
        inLanguage: 'en-PK',
        publisher: { '@type': 'Organization', '@id': `${site.url}/#organization`, name: site.name, url: site.url },
        mainEntity: { '@type': 'ItemList', itemListElement: questions.map((q, i) => ({ '@type': 'ListItem', position: i + 1, url: `${site.url}${questionUrl(q.slug)}`, name: q.question })) },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
          { '@type': 'ListItem', position: 2, name: 'Legal Q&A', item: url },
        ],
      },
    ],
  }
  return (
    <>
      <JsonLd data={ld} />
      <SiteHeader interior />
      <main>
        <section className="kb-hero qa-hero">
          <div className="container">
            <nav className="kb-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Legal Q&amp;A</span></nav>
            <p className="eyebrow">Pakistan Legal Forum</p>
            <h1>Legal questions &amp; answers</h1>
            <p className="kb-dek">Short, direct answers to the legal questions people in Pakistan ask most, with the Act and section behind each answer, the procedure, the documents and the mistakes to avoid. Every answer is reviewed by a practising advocate before it is published.</p>
            <div className="kb-meta"><span>{questions.length} answers published</span><span>{qaCategories.length} subjects</span><span>Lawyer-reviewed</span></div>
          </div>
        </section>

        <section className="qa-section">
          <div className="container">
            <h2 className="qa-section-title">Browse the questions</h2>
            <QaExplorer items={items} categories={cats} />
          </div>
        </section>

        <section className="qa-section qa-section-alt">
          <div className="container">
            <h2 className="qa-section-title">Questions by subject</h2>
            <div className="qa-cat-grid">
              {qaCategories.map((c) => {
                const n = questions.filter((q) => q.category === c.slug).length
                return (
                  <Link className="qa-cat-card" key={c.slug} href={`${QA_BASE}/${c.slug}/`}>
                    <strong>{c.name}</strong>
                    <span>{c.description}</span>
                    <em>{n} {n === 1 ? 'answer' : 'answers'} <ArrowUpRight size={13} /></em>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <section className="qa-section" id="ask" aria-labelledby="ask-title">
          <div className="container qa-ask-grid">
            <div>
              <p className="eyebrow">Ask a legal question</p>
              <h2 id="ask-title" className="qa-section-title">Can’t find your question?</h2>
              <p>Write your question below. When you press send, WhatsApp opens with your question already typed, and you choose whether to send it. We do not store anything on this website.</p>
              <ul className="qa-ask-points">
                <li>Keep it general: do not include names, CNIC numbers, phone numbers or addresses.</li>
                <li>Nothing is published automatically. Useful questions may be answered on this page later, only after review by a lawyer and with all personal details removed.</li>
                <li>For urgent matters such as an arrest or a court date, say so in your message.</li>
              </ul>
            </div>
            <AskQuestionForm whatsappNumber={WHATSAPP_NUMBER} categories={cats} />
          </div>
        </section>

        <section className="qa-section qa-section-alt">
          <div className="container">
            <h2 className="qa-section-title">Who reviews the answers</h2>
            <div className="qa-reviewers">
              {[
                ['pirzada', 'Marriage & Nikah, Divorce & Khula, Family Law, Documents & NADRA'],
                ['khakh', 'Succession & Inheritance, Property & Tenancy, Criminal Law Basics'],
                ['mumtaz', 'Tax, NTN and income tax returns'],
                ['shah', 'Company registration and SECP matters'],
              ].map(([key, area]) => (
                <div className="qa-reviewer" key={key}>
                  <ShieldCheck size={18} aria-hidden="true" />
                  <div><strong>{reviewers[key].name}</strong><span>{reviewers[key].title}</span><em>{area}</em></div>
                </div>
              ))}
            </div>
            <p className="qa-disclaimer">Answers give general legal information for Pakistan. They are not legal advice for an individual case. For detailed subject guides, see <Link href="/blogs/">all PakLegal guides</Link>.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

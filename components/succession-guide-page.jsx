import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ConsultationBand, SiteFooter, SiteHeader } from '@/components/site-shell'
import { site, specialistResources } from '@/lib/site-data'
import styles from './succession-guide-page.module.css'

function idFromTitle(value = '') {
  return value.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '')
}

function JsonLd({ guide }) {
  const url = `${site.url}/${guide.slug}/`
  const logoUrl = `${site.url}/icon.svg`
  const images = (guide.images || []).map((image) => ({ '@type': 'ImageObject', url: `${site.url}${image.src}`, width: image.width, height: image.height, name: image.title, description: image.description, caption: image.caption }))
  const organization = {
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: { '@type': 'ImageObject', url: logoUrl },
    email: site.email,
  }
  const graph = [
    organization,
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: guide.h1,
      description: guide.description,
      ...(images.length ? { image: images } : {}),
      dateModified: guide.reviewed,
      datePublished: guide.published || guide.reviewed,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      author: { '@id': `${site.url}/#organization` },
      publisher: { '@id': `${site.url}/#organization` },
      inLanguage: guide.language || 'en-PK',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: guide.category, item: `${site.url}/${guide.categorySlug || 'blogs'}/` },
        { '@type': 'ListItem', position: 3, name: guide.h1, item: url },
      ],
    },
  ]
  if (guide.faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: guide.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    })
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c') }} />
}

// Link only explicit editorial anchors, once per text block. Never render raw HTML.
function ContextText({ text, links = {} }) {
  if (!text) return null
  const entries = Object.entries(links).filter(([anchor, href]) => anchor && (href.startsWith('/') || /^https:\/\//.test(href))).sort((a, b) => b[0].length - a[0].length)
  const parts = []
  let rest = text
  const used = new Set()
  while (rest) {
    let match = null
    for (const [anchor, href] of entries) {
      if (used.has(anchor)) continue
      const index = rest.indexOf(anchor)
      if (index >= 0 && (!match || index < match.index)) match = { index, anchor, href }
    }
    if (!match) { parts.push(rest); break }
    if (match.index) parts.push(rest.slice(0, match.index))
    parts.push(<a key={`${parts.length}-${match.anchor}`} href={match.href}>{match.anchor}</a>)
    used.add(match.anchor)
    rest = rest.slice(match.index + match.anchor.length)
  }
  return parts
}
function GuideImage({ image, priority = false }) {
  if (!image) return null
  return <div className={styles.image}><img src={image.src} width={image.width} height={image.height} alt={image.alt} title={image.title} loading={priority ? 'eager' : 'lazy'} decoding="async" /></div>
}

export default function SuccessionGuidePage({ guide }) {
  const urdu = guide.language === 'ur-PK'
  const text = (value) => <ContextText text={value} links={guide.contextLinks} />
  const labels = urdu ? {
    home: 'صفحۂ اول', keyPosition: 'اہم قانونی نکات', note: 'عملی رہنمائی: ', faq: 'سکسیشن سرٹیفکیٹ کے متعلق عام سوالات',
    sources: 'سرکاری ماخذ اور مزید مطالعہ', sourcesNote: 'قوانین، قواعد اور سرکاری طریقۂ کار میں تبدیلی ہوسکتی ہے۔ درخواست یا ادائیگی سے پہلے متعلقہ سرکاری ماخذ کی موجودہ ہدایات ضرور دیکھیں۔',
    disclaimer: 'یہ رہنمائی پاکستان کے قانون سے متعلق عمومی معلومات فراہم کرتی ہے۔ کسی مخصوص معاملے میں حقائق، دستاویزات، دائرۂ اختیار اور موجودہ قانون کے مطابق قانونی مشورہ ضروری ہوسکتا ہے۔',
    toc: 'اس صفحے کے موضوعات', related: 'پاک لیگل کی متعلقہ رہنمائی', updated: 'آخری تازہ کاری:', knowledge: 'پاکستانی قانون کی معلومات',
  } : {
    home: 'Home', keyPosition: 'Key legal position', note: 'Practical note: ', faq: 'Frequently Asked Questions',
    sources: 'Official Sources and Further Reading', sourcesNote: 'Legal procedures change through statutes, rules, notifications and administrative practice. Check the current official source before acting on a time-sensitive requirement.',
    disclaimer: 'This guide provides general legal information for Pakistan. It does not replace advice based on the facts, documents, jurisdiction and current law applicable to an individual matter.',
    toc: 'On this page', related: 'Related PakLegal guides', updated: 'Last Updated:', knowledge: 'Pakistan legal information',
  }

  return (
    <>
      <JsonLd guide={guide} />
      <SiteHeader interior />
      <main className={`${styles.page} ${urdu ? styles.urdu : ''}`} lang={guide.language || 'en-PK'} dir={urdu ? 'rtl' : 'ltr'}>
        <section className="kb-hero">
          <div className="container">
            <div className="kb-breadcrumbs"><Link href="/">{labels.home}</Link><span>/</span><span>{guide.category}</span><span>/</span><span>{guide.shortTitle || guide.h1}</span></div>
            <p className="eyebrow">{guide.eyebrow || guide.category}</p>
            <h1>{guide.h1}</h1>
            <h2 className={styles.openingHeading}>{guide.openingH2}</h2>
            <p className="kb-dek">{text(guide.dek)}</p>
            <div className="kb-meta"><span>{labels.knowledge}</span></div>
            <nav className={styles.languages} aria-label={urdu ? 'زبان منتخب کریں' : 'Read in another language'}><Link href="/succession-certificate/" lang="en-PK" hrefLang="en-PK" aria-current={!urdu ? 'page' : undefined}>English</Link><Link href="/succession-certificate-urdu/" lang="ur-PK" hrefLang="ur-PK" aria-current={urdu ? 'page' : undefined}>اردو</Link></nav>
          </div>
        </section>

        <div className="container kb-layout">
          <article className="kb-article">
            <GuideImage image={guide.images?.[0]} priority />
            <div className="kb-summary"><strong>{guide.summaryTitle || labels.keyPosition}</strong><p>{text(guide.summary)}</p></div>
            {guide.intro?.map((paragraph, index) => <p key={`intro-${index}`}>{text(paragraph)}</p>)}

            {guide.sections.map((section, sectionIndex) => {
              const sectionId = section.id || idFromTitle(section.title) || `section-${sectionIndex + 1}`
              return (
                <section key={section.title} id={sectionId}>
                  <h2>{section.title}</h2>
                  {section.lead && <p><strong>{text(section.lead)}</strong></p>}
                  {section.paragraphs?.map((paragraph, index) => <p key={`${sectionId}-p-${index}`}>{text(paragraph)}</p>)}
                  {section.subsections?.map((sub) => (
                    <div key={sub.title}>
                      <h3>{sub.title}</h3>
                      {sub.paragraphs?.map((paragraph, index) => <p key={`${idFromTitle(sub.title)}-${index}`}>{text(paragraph)}</p>)}
                      {sub.items && <ul>{sub.items.map((item) => <li key={item}>{text(item)}</li>)}</ul>}
                    </div>
                  ))}
                  {section.items && <ul>{section.items.map((item) => <li key={item}>{text(item)}</li>)}</ul>}
                  {section.table && (
                    <div className="kb-table-wrap"><table className="kb-table"><thead><tr>{section.table.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>
                  )}
                  {section.note && <div className="kb-note"><strong>{labels.note}</strong>{text(section.note)}</div>}
                </section>
              )
            })}

            {guide.images?.slice(1).map((image) => <GuideImage key={image.src} image={image} />)}
            {guide.faqs?.length > 0 && <section className="kb-faq" id="frequently-asked-questions"><h2>{labels.faq}</h2>{guide.faqs.map((faq) => <details className={`kb-faq-item ${styles.faq}`} key={faq.q}><summary><h3>{faq.q}</h3></summary><p>{text(faq.a)}</p></details>)}</section>}

            {guide.sources?.length > 0 && <section className="kb-sources" id="official-sources"><h2>{labels.sources}</h2><p>{labels.sourcesNote}</p><div className="kb-source-list">{guide.sources.map((source) => <a href={source.url} key={source.url} target="_blank" rel="noreferrer"><span>{source.label}</span><ArrowUpRight size={14} /></a>)}</div></section>}

            <p className="kb-disclaimer">{labels.disclaimer}</p>
            <p className={styles.updated}>{labels.updated} <time dateTime={guide.reviewed}>{guide.reviewedLabel}</time></p>
          </article>

          <aside className="kb-sidebar">
            <div className="kb-sticky">
              <div className="kb-toc"><h2>{labels.toc}</h2>{guide.sections.map((section) => <a key={section.title} href={`#${section.id || idFromTitle(section.title)}`}>{section.title}</a>)}{guide.faqs?.length > 0 && <a href="#frequently-asked-questions">{labels.faq}</a>}{guide.sources?.length > 0 && <a href="#official-sources">{labels.sources}</a>}</div>
              <div className="kb-related"><h2>{labels.related}</h2>{guide.related?.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
            </div>
          </aside>
        </div>

        <section className="kb-network" lang="en-PK" dir="ltr"><div className="container kb-network-grid"><div><p className="eyebrow">Specialist network</p><h2>Use the right resource for the legal question.</h2><p>PakLegal is structured as a knowledge base. Where a reader needs deeper specialist material or individual professional assistance, these established legal resources provide subject-focused guidance.</p></div><div className="kb-network-links">{specialistResources.map((resource) => <a className="kb-network-card" key={resource.url} href={resource.url} target="_blank" rel="noreferrer"><strong>{resource.name}</strong><span>{resource.description}</span></a>)}</div></div></section>
        <div lang="en-PK" dir="ltr"><ConsultationBand /></div>
      </main>
      <SiteFooter />
    </>
  )
}

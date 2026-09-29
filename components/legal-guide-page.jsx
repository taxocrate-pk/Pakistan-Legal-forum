import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ConsultationBand, SiteFooter, SiteHeader } from '@/components/site-shell'
import { site, specialistResources } from '@/lib/site-data'

function idFromTitle(value = '') {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function JsonLd({ guide }) {
  const url = `${site.url}/${guide.slug}/`
  const graph = [
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: guide.h1,
      description: guide.description,
      dateModified: guide.reviewed,
      datePublished: guide.published || guide.reviewed,
      mainEntityOfPage: url,
      author: { '@type': 'Organization', name: site.name, url: site.url },
      publisher: { '@type': 'Organization', name: site.name, url: site.url },
      inLanguage: 'en-PK',
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }} />
}

export default function LegalGuidePage({ guide }) {
  return (
    <>
      <JsonLd guide={guide} />
      <SiteHeader interior />
      <main>
        <section className="kb-hero">
          <div className="container">
            <div className="kb-breadcrumbs"><Link href="/">Home</Link><span>/</span><span>{guide.category}</span><span>/</span><span>{guide.shortTitle || guide.h1}</span></div>
            <p className="eyebrow">{guide.eyebrow || guide.category}</p>
            <h1>{guide.h1}</h1>
            <p className="kb-dek">{guide.dek}</p>
            <div className="kb-meta"><span>Guide reviewed: {guide.reviewedLabel}</span><span>Pakistan legal information</span><span>Official-source checks included</span></div>
          </div>
        </section>

        <div className="container kb-layout">
          <article className="kb-article">
            <div className="kb-summary"><strong>{guide.summaryTitle || 'Key legal position'}</strong><p>{guide.summary}</p></div>
            {guide.intro?.map((paragraph, index) => <p key={`intro-${index}`}>{paragraph}</p>)}

            {guide.sections.map((section) => {
              const sectionId = idFromTitle(section.title)
              return (
                <section key={section.title} id={sectionId}>
                  <h2>{section.title}</h2>
                  {section.lead && <p><strong>{section.lead}</strong></p>}
                  {section.paragraphs?.map((paragraph, index) => <p key={`${sectionId}-p-${index}`}>{paragraph}</p>)}
                  {section.subsections?.map((sub) => (
                    <div key={sub.title}>
                      <h3>{sub.title}</h3>
                      {sub.paragraphs?.map((paragraph, index) => <p key={`${idFromTitle(sub.title)}-${index}`}>{paragraph}</p>)}
                      {sub.items && <ul>{sub.items.map((item) => <li key={item}>{item}</li>)}</ul>}
                    </div>
                  ))}
                  {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
                  {section.table && (
                    <div className="kb-table-wrap"><table className="kb-table"><thead><tr>{section.table.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>
                  )}
                  {section.note && <div className="kb-note"><strong>Practical note: </strong>{section.note}</div>}
                </section>
              )
            })}

            {guide.faqs?.length > 0 && <section className="kb-faq" id="frequently-asked-questions"><h2>Frequently Asked Questions</h2>{guide.faqs.map((faq) => <div className="kb-faq-item" key={faq.q}><h3>{faq.q}</h3><p>{faq.a}</p></div>)}</section>}

            {guide.sources?.length > 0 && <section className="kb-sources" id="official-sources"><h2>Official Sources and Further Reading</h2><p>Legal procedures change through statutes, rules, notifications and administrative practice. Check the current official source before acting on a time-sensitive requirement.</p><div className="kb-source-list">{guide.sources.map((source) => <a href={source.url} key={source.url} target="_blank" rel="noreferrer"><span>{source.label}</span><ArrowUpRight size={14} /></a>)}</div></section>}

            <p className="kb-disclaimer">This guide provides general legal information for Pakistan. It does not replace advice based on the facts, documents, jurisdiction and current law applicable to an individual matter.</p>
          </article>

          <aside className="kb-sidebar">
            <div className="kb-sticky">
              <div className="kb-toc"><h2>On this page</h2>{guide.sections.map((section) => <a key={section.title} href={`#${idFromTitle(section.title)}`}>{section.title}</a>)}{guide.faqs?.length > 0 && <a href="#frequently-asked-questions">Frequently Asked Questions</a>}{guide.sources?.length > 0 && <a href="#official-sources">Official Sources</a>}</div>
              <div className="kb-related"><h2>Related PakLegal guides</h2>{guide.related?.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
            </div>
          </aside>
        </div>

        <section className="kb-network"><div className="container kb-network-grid"><div><p className="eyebrow">Specialist network</p><h2>Use the right resource for the legal question.</h2><p>PakLegal is structured as a knowledge base. Where a reader needs deeper specialist material or individual professional assistance, these established legal resources provide subject-focused guidance.</p></div><div className="kb-network-links">{specialistResources.map((resource) => <a className="kb-network-card" key={resource.url} href={resource.url} target="_blank" rel="noreferrer"><strong>{resource.name}</strong><span>{resource.description}</span></a>)}</div></div></section>
        <ConsultationBand />
      </main>
      <SiteFooter />
    </>
  )
}

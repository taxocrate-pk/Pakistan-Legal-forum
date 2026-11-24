import Link from 'next/link'
import { ArrowUpRight, MessageCircle, ShieldCheck } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-shell'
import { site } from '@/lib/site-data'
import {
  QA_BASE, WHATSAPP_NUMBER, answerPlainText, categoriesBySlug, questionUrl,
  questions, questionsBySlug, reviewerFor, reviewers, upcomingQuestions,
} from '@/lib/legal-qa'

const dateLabel = (iso) => new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

// Renders "[anchor](href)" inline links inside content strings.
export function RichText({ text }) {
  const out = []
  const re = /\[([^\]]+)\]\(([^)]+)\)/g
  let last = 0
  let m
  let i = 0
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index))
    const [, anchor, href] = m
    out.push(href.startsWith('/')
      ? <Link key={i++} href={href}>{anchor}</Link>
      : <a key={i++} href={href} target="_blank" rel="noopener">{anchor}</a>)
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return <>{out}</>
}

export function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}

export function QaCard({ q, headingLevel = 'h3' }) {
  const cat = categoriesBySlug[q.category]
  const H = headingLevel
  return (
    <article className="qa-card">
      <span className="qa-tag">{cat.name}</span>
      <H className="qa-card-title"><Link href={questionUrl(q.slug)}>{q.question}</Link></H>
      <p>{q.oneLine}</p>
      <Link className="qa-card-link" href={questionUrl(q.slug)} aria-hidden="true" tabIndex={-1}>Read the answer <ArrowUpRight size={13} /></Link>
    </article>
  )
}

export function HelpBox({ q, categoryName }) {
  const text = `Assalam o Alaikum, I read "${q.question}" on paklegal.com.pk and need help with my case.`
  return (
    <section className="qa-help" aria-labelledby="qa-help-title">
      <h2 id="qa-help-title">Need help with your case?</h2>
      <p>Every case turns on its own documents and facts. Send us a short WhatsApp message about your {categoryName.toLowerCase()} matter and a lawyer from our network will guide you on the next step.</p>
      <div className="qa-help-actions">
        <a className="button button-gold" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`} target="_blank" rel="noopener"><MessageCircle size={16} /> Ask on WhatsApp</a>
      </div>
      <p className="qa-help-money">{q.money.text} <a href={q.money.href} target="_blank" rel="nofollow noopener">{q.money.anchor}</a>.</p>
    </section>
  )
}

function questionJsonLd(q) {
  const cat = categoriesBySlug[q.category]
  const url = `${site.url}${questionUrl(q.slug)}`
  const rev = reviewerFor(q)
  const org = { '@type': 'Organization', '@id': `${site.url}/#organization`, name: site.name, url: site.url }
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'QAPage',
        '@id': `${url}#qapage`,
        url,
        name: q.question,
        inLanguage: 'en-PK',
        lastReviewed: q.updated,
        reviewedBy: { '@type': 'Person', name: rev.name, jobTitle: rev.title },
        publisher: org,
        mainEntity: {
          '@type': 'Question',
          name: q.question,
          text: q.question,
          answerCount: 1,
          dateCreated: q.published,
          author: org,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answerPlainText(q),
            dateCreated: q.published,
            url: `${url}#answer`,
            author: org,
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
          { '@type': 'ListItem', position: 2, name: 'Legal Q&A', item: `${site.url}${QA_BASE}/` },
          { '@type': 'ListItem', position: 3, name: cat.name, item: `${site.url}${QA_BASE}/${cat.slug}/` },
          { '@type': 'ListItem', position: 4, name: q.question, item: url },
        ],
      },
    ],
  }
}

const sectionId = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export function QuestionPage({ q }) {
  const cat = categoriesBySlug[q.category]
  const rev = reviewerFor(q)
  const related = q.related.map((s) => questionsBySlug[s]).filter(Boolean)
  return (
    <>
      <JsonLd data={questionJsonLd(q)} />
      <SiteHeader interior />
      <main>
        <section className="kb-hero qa-hero">
          <div className="container">
            <nav className="kb-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href={`${QA_BASE}/`}>Legal Q&amp;A</Link><span>/</span><Link href={`${QA_BASE}/${cat.slug}/`}>{cat.name}</Link></nav>
            <p className="eyebrow">Legal Q&amp;A · {cat.name}</p>
            <h1>{q.question}</h1>
            <p className="kb-dek qa-urdu" lang="ur-Latn">{q.urdu}</p>
            <div className="kb-meta"><span>Reviewed by {rev.name}</span><span>Updated {dateLabel(q.updated)}</span></div>
          </div>
        </section>

        <div className="container kb-layout">
          <article className="kb-article qa-article" id="answer">
            <div className="kb-summary qa-short">
              <h2 className="kb-summary-h2">Short answer</h2>
              <p>{q.shortAnswer}</p>
            </div>

            {q.sections.map((s) => (
              <section key={s.title} id={sectionId(s.title)}>
                <h2>{s.title}</h2>
                {s.paragraphs?.map((p, i) => <p key={i}><RichText text={p} /></p>)}
                {s.items && <ul>{s.items.map((it, i) => <li key={i}><RichText text={it} /></li>)}</ul>}
                {s.table && (
                  <div className="kb-table-wrap"><table className="kb-table"><thead><tr>{s.table.headers.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead><tbody>{s.table.rows.map((r) => <tr key={r[0]}>{r.map((c, ci) => <td key={ci}>{c}</td>)}</tr>)}</tbody></table></div>
                )}
                {s.after && <p><RichText text={s.after} /></p>}
              </section>
            ))}

            {q.note && <div className="kb-note"><strong>Please note: </strong><RichText text={q.note} /></div>}

            <section className="qa-related" aria-labelledby="qa-related-title">
              <h2 id="qa-related-title">Related questions</h2>
              <ul>{related.map((r) => <li key={r.slug}><Link href={questionUrl(r.slug)}>{r.question}</Link></li>)}</ul>
            </section>

            <HelpBox q={q} categoryName={cat.name} />

            <section className="kb-sources" id="official-sources">
              <h2>Official sources</h2>
              <div className="kb-source-list">{q.sources.map((s) => <a href={s.url} key={s.label} target="_blank" rel="noreferrer"><span>{s.label}</span><ArrowUpRight size={14} /></a>)}</div>
            </section>

            <p className="kb-credit qa-reviewed"><ShieldCheck size={15} aria-hidden="true" /> <span><strong>Reviewed by:</strong> {rev.name}, {rev.title}<br /><strong>Published by:</strong> Pakistan Legal Forum<br /><strong>Updated:</strong> <time dateTime={q.updated}>{dateLabel(q.updated)}</time></span></p>
            <p className="kb-disclaimer">This answer gives general legal information for Pakistan. It is not legal advice for your individual case.</p>
          </article>

          <aside className="kb-sidebar">
            <div className="kb-sticky">
              <nav className="kb-toc" aria-label="In this answer"><h2>In this answer</h2><a href="#answer">Short answer</a>{q.sections.map((s) => <a key={s.title} href={`#${sectionId(s.title)}`}>{s.title}</a>)}<a href="#qa-related-title">Related questions</a></nav>
              <div className="kb-related"><h2>Related PakLegal guides</h2>{q.guides.map((g) => <Link key={g.href} href={g.href}>{g.label}</Link>)}</div>
              <div className="kb-related"><h2>More in {cat.name}</h2><Link href={`${QA_BASE}/${cat.slug}/`}>All {cat.name} questions</Link><Link href={`${QA_BASE}/`}>Legal Q&amp;A home</Link></div>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

export function CategoryPage({ cat }) {
  const items = questions.filter((q) => q.category === cat.slug)
  const upcoming = upcomingQuestions[cat.slug] || []
  const url = `${site.url}${QA_BASE}/${cat.slug}/`
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${url}#collection`,
        url,
        name: `${cat.name} – Legal Questions & Answers`,
        description: cat.description,
        inLanguage: 'en-PK',
        mainEntity: { '@type': 'ItemList', itemListElement: items.map((q, i) => ({ '@type': 'ListItem', position: i + 1, url: `${site.url}${questionUrl(q.slug)}`, name: q.question })) },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
          { '@type': 'ListItem', position: 2, name: 'Legal Q&A', item: `${site.url}${QA_BASE}/` },
          { '@type': 'ListItem', position: 3, name: cat.name, item: url },
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
            <nav className="kb-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href={`${QA_BASE}/`}>Legal Q&amp;A</Link><span>/</span><span>{cat.name}</span></nav>
            <p className="eyebrow">Legal Q&amp;A</p>
            <h1>{cat.name}: legal questions &amp; answers</h1>
            <p className="kb-dek">{cat.intro}</p>
            <div className="kb-meta"><span>Answers reviewed by {cat.reviewers.map((r) => `${reviewers[r].name}, ${reviewers[r].title}`).join(' and ')}</span></div>
          </div>
        </section>
        <section className="qa-section">
          <div className="container">
            <CategoryTabs active={cat.slug} />
            <h2 className="qa-section-title">Answered questions</h2>
            {items.length > 0
              ? <div className="qa-grid">{items.map((q) => <QaCard key={q.slug} q={q} />)}</div>
              : <p className="qa-empty">The first answers in this category are being reviewed.</p>}
            {upcoming.length > 0 && (
              <div className="qa-upcoming">
                <h2 className="qa-section-title">Questions being reviewed</h2>
                <p>These answers are being written and checked by our reviewing lawyer. They will appear here once reviewed.</p>
                <ul>{upcoming.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            )}
            <div className="qa-guides">
              <h2 className="qa-section-title">Detailed PakLegal guides</h2>
              <div className="kb-source-list">{cat.guides.map((g) => <Link key={g.href} href={g.href}><span>{g.label}</span><ArrowUpRight size={14} /></Link>)}</div>
            </div>
            <div className="qa-ask-cta">
              <p>Have a question that is not answered here?</p>
              <Link className="button button-gold" href={`${QA_BASE}/#ask`}>Ask a legal question</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export function CategoryTabs({ active }) {
  return (
    <nav className="qa-tabs" aria-label="Legal Q&A categories">
      <Link href={`${QA_BASE}/`} aria-current={!active ? 'page' : undefined}>All</Link>
      {Object.values(categoriesBySlug).map((c) => (
        <Link key={c.slug} href={`${QA_BASE}/${c.slug}/`} aria-current={active === c.slug ? 'page' : undefined}>{c.name}</Link>
      ))}
    </nav>
  )
}

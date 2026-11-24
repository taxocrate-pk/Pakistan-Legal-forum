'use client'

import { useId, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, MessageCircle, Search } from 'lucide-react'

// Hub explorer: category filter buttons + search over the published questions.
// `items`: [{ slug, question, oneLine, category, categoryName, keywords }]
export function QaExplorer({ items, categories }) {
  const [active, setActive] = useState('all')
  const [query, setQuery] = useState('')
  const searchId = useId()

  const filtered = useMemo(() => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
    return items.filter((q) => {
      if (active !== 'all' && q.category !== active) return false
      if (!terms.length) return true
      const hay = `${q.question} ${q.oneLine} ${q.categoryName} ${q.keywords.join(' ')}`.toLowerCase()
      return terms.every((t) => hay.includes(t))
    })
  }, [items, active, query])

  return (
    <div className="qa-explorer">
      <div className="qa-search">
        <label htmlFor={searchId}>Search the questions</label>
        <div className="qa-search-field">
          <Search size={17} aria-hidden="true" />
          <input id={searchId} type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="e.g. khula, iddat, NTN, FIR" autoComplete="off" />
        </div>
      </div>
      <div className="qa-tabs qa-tabs-buttons" role="group" aria-label="Filter by category">
        <button type="button" aria-pressed={active === 'all'} onClick={() => setActive('all')}>All</button>
        {categories.map((c) => (
          <button type="button" key={c.slug} aria-pressed={active === c.slug} onClick={() => setActive(c.slug)}>{c.name}</button>
        ))}
      </div>
      <p className="qa-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'question' : 'questions'}{active !== 'all' ? ` in ${categories.find((c) => c.slug === active)?.name}` : ''}{query ? ` matching “${query}”` : ''}</p>
      {filtered.length > 0 ? (
        <div className="qa-grid">
          {filtered.map((q) => (
            <article className="qa-card" key={q.slug}>
              <span className="qa-tag">{q.categoryName}</span>
              <h3 className="qa-card-title"><Link href={`/legal-questions/${q.slug}/`}>{q.question}</Link></h3>
              <p>{q.oneLine}</p>
              <Link className="qa-card-link" href={`/legal-questions/${q.slug}/`} aria-hidden="true" tabIndex={-1}>Read the answer <ArrowUpRight size={13} /></Link>
            </article>
          ))}
        </div>
      ) : (
        <p className="qa-empty">No published answer matches yet. You can <a href="#ask">ask your question</a> below.</p>
      )}
    </div>
  )
}

// Rough checks for personal data people should not send (CNIC, phone, email).
const personalPatterns = [
  /\b\d{5}-?\d{7}-?\d\b/, // CNIC
  /(\+?92|0)3\d{2}[\s-]?\d{7}\b/, // Pakistani mobile
  /[^\s@]+@[^\s@]+\.[^\s@]+/, // email
]

export function AskQuestionForm({ whatsappNumber, categories }) {
  const [category, setCategory] = useState('')
  const [question, setQuestion] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')
  const ids = { cat: useId(), q: useId(), hint: useId(), err: useId() }

  function onSubmit(e) {
    e.preventDefault()
    setStatus('')
    const text = question.trim()
    if (text.length < 15) {
      setError('Please write your question in at least 15 characters.')
      return
    }
    if (personalPatterns.some((re) => re.test(text))) {
      setError('Please remove phone numbers, CNIC numbers and email addresses before sending.')
      return
    }
    setError('')
    const catName = categories.find((c) => c.slug === category)?.name || 'Not sure'
    const message = `Legal question from paklegal.com.pk\nCategory: ${catName}\n\n${text}`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    const win = window.open(url, '_blank')
    if (win) {
      win.opener = null
      setStatus('WhatsApp has opened in a new tab with your question. Press send in WhatsApp to deliver it.')
    } else {
      window.location.href = url
    }
  }

  return (
    <form className="qa-form" onSubmit={onSubmit} noValidate>
      <div className="qa-field">
        <label htmlFor={ids.cat}>Category</label>
        <select id={ids.cat} value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Not sure</option>
          {categories.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
        </select>
      </div>
      <div className="qa-field">
        <label htmlFor={ids.q}>Your question <span aria-hidden="true">*</span></label>
        <textarea
          id={ids.q}
          rows={5}
          maxLength={800}
          required
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          aria-describedby={`${ids.hint}${error ? ` ${ids.err}` : ''}`}
          aria-invalid={error ? 'true' : undefined}
          placeholder="e.g. Can a khula case be filed in the city where the wife now lives?"
        />
        <p className="qa-hint" id={ids.hint}>Do not include names, CNIC numbers, phone numbers, addresses or other personal details. {question.length}/800</p>
        {error && <p className="qa-error" id={ids.err} role="alert">{error}</p>}
      </div>
      <button type="submit" className="button button-gold"><MessageCircle size={16} /> Send on WhatsApp</button>
      <p className="qa-status" role="status" aria-live="polite">{status}</p>
    </form>
  )
}

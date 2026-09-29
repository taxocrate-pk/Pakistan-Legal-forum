import Link from 'next/link'
import { ArrowUpRight, Mail, MapPin, Menu, MessageCircle, Scale } from 'lucide-react'
import { mainNav, site, specialistResources } from '@/lib/site-data'

function cleanPhone(phone) {
  return phone.replace(/\D/g, '').replace(/^0/, '92')
}

export function SiteHeader({ interior = false }) {
  return (
    <header className={`site-header ${interior ? 'interior-header' : ''}`}>
      <div className="utility">
        <div className="container utility-inner">
          <span>Pakistan&apos;s legal information &amp; knowledge platform</span>
          <div className="utility-links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`https://wa.me/${cleanPhone(site.phones.karachi)}`}>Karachi {site.phones.karachi}</a>
            <a href={`https://wa.me/${cleanPhone(site.phones.lahore)}`}>Lahore {site.phones.lahore}</a>
          </div>
        </div>
      </div>
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="Pakistan Legal Forum home">
          <span className="brand-mark"><Scale size={21} strokeWidth={1.4} /></span>
          <span><strong>PakLegal</strong><small>.com.pk</small><em>Pakistan Legal Forum</em></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {mainNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="nav-actions">
          <a className="nav-cta" href={`https://wa.me/${cleanPhone(site.phones.karachi)}`}>Ask a legal question <ArrowUpRight size={15} /></a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><Menu size={21} /></summary>
            <nav className="mobile-menu-panel" aria-label="Mobile navigation">
              {mainNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
              <a href={`https://wa.me/${cleanPhone(site.phones.karachi)}`}>WhatsApp enquiry</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid footer-grid-expanded">
        <div className="footer-brand">
          <Link className="brand brand-footer" href="/">
            <span className="brand-mark"><Scale size={21} strokeWidth={1.4} /></span>
            <span><strong>PakLegal</strong><small>.com.pk</small><em>Pakistan Legal Forum</em></span>
          </Link>
          <p>Practical, source-led information about Pakistani law, legal documents and procedures, with specialist professional references where individual advice is required.</p>
          <a className="footer-contact-line" href={`mailto:${site.email}`}><Mail size={14} /> {site.email}</a>
        </div>
        <div>
          <h4>Knowledge base</h4>
          <Link href="/divorce-certificate/">Divorce Certificate</Link>
          <Link href="/child-registration-certificate-crc/">Child Registration Certificate</Link>
          <Link href="/succession-certificate/">Succession Certificate</Link>
          <Link href="/rental-and-tenancy-law/">Rental &amp; Tenancy Law</Link>
          <Link href="/secp-company-registration-in-pakistan/">Company Registration</Link>
        </div>
        <div>
          <h4>Specialist resources</h4>
          {specialistResources.map((item) => <a key={item.url} href={item.url} target="_blank" rel="noreferrer">{item.name}</a>)}
        </div>
        <div className="footer-offices">
          <h4>Office network</h4>
          {site.offices.map((office) => (
            <div className="footer-office" key={office.city}>
              <strong><MapPin size={13} /> {office.label}</strong>
              <span>{office.address}</span>
              {office.phones.map((phone) => <a key={phone} href={`tel:${cleanPhone(phone)}`}>{phone}</a>)}
            </div>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Pakistan Legal Forum · General legal information, not a substitute for advice on individual facts.</span>
        <div><Link href="/privacy-policy/">Privacy</Link><Link href="/terms-of-service/">Terms</Link><Link href="/contact-us/">Contact</Link></div>
      </div>
    </footer>
  )
}

export function ConsultationBand() {
  const phone = site.phones.karachi
  return (
    <section className="consultation">
      <div className="container consultation-inner">
        <div><p className="eyebrow">Need individual guidance?</p><h2>Start with the correct legal route.</h2><p>Use this knowledge base to understand the general position, then obtain professional advice where the result depends on documents, jurisdiction, dates or disputed facts.</p></div>
        <div className="consultation-actions">
          <a className="button button-gold" href={`mailto:${site.email}`}>Email enquiry <ArrowUpRight size={16} /></a>
          <a className="button button-outline-light" href={`https://wa.me/${cleanPhone(phone)}`}><MessageCircle size={16} /> WhatsApp</a>
        </div>
      </div>
    </section>
  )
}

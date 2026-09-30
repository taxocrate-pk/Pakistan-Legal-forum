import Link from 'next/link'
import { ArrowUpRight, ChevronDown, Mail, MapPin, Menu, MessageCircle, Phone } from 'lucide-react'
import { mainNav, megaNavGroups, site, specialistResources } from '@/lib/site-data'

function cleanPhone(phone) {
  return phone.replace(/\D/g, '').replace(/^0/, '92')
}

function BrandLogo({ footer = false }) {
  return (
    <Link
      className={`brand brand-image-link${footer ? ' brand-footer' : ''}`}
      href="/"
      aria-label="Pakistan Legal Forum home"
      style={{ background: 'none' }}
    >
      <img
        src="/pakistan-legal-forum-logo.webp?v=2"
        alt="Pakistan Legal Forum"
        className="navbar-brand-logo"
        width="990"
        height="240"
        loading={footer ? 'lazy' : 'eager'}
      />
    </Link>
  )
}

function MegaNavigation() {
  return (
    <nav className="desktop-nav" aria-label="Main navigation">
      {mainNav.map((item) => {
        if (!item.mega) return <Link key={item.href} href={item.href}>{item.label}</Link>
        return (
          <details className="mega-nav-item" key={item.href}>
            <summary>{item.label} <ChevronDown size={13} /></summary>
            <div className="mega-panel">
              <div className="container mega-panel-inner">
                <div className="mega-intro">
                  <span className="mega-kicker">Pakistan Legal Forum</span>
                  <h2>Legal knowledge by subject</h2>
                  <p>Browse Pakistan-focused legal guides, procedures, certificates and professional reference material by practice area.</p>
                  <Link href="/blogs/" className="mega-all-link">View all legal resources <ArrowUpRight size={14} /></Link>
                </div>
                <div className="mega-groups">
                  {megaNavGroups.map((group) => (
                    <section className="mega-group" key={group.label}>
                      <Link className="mega-group-title" href={group.href}>{group.label}</Link>
                      {group.items.map((child) => <Link key={child.href + child.label} href={child.href}>{child.label}</Link>)}
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </details>
        )
      })}
    </nav>
  )
}

function MobileNavigation() {
  return (
    <details className="mobile-menu">
      <summary aria-label="Open navigation"><Menu size={21} /></summary>
      <nav className="mobile-menu-panel" aria-label="Mobile navigation">
        <Link href="/">Home</Link>
        <details className="mobile-nav-groups">
          <summary>Legal Guides <ChevronDown size={14} /></summary>
          <div className="mobile-nav-group-list">
            {megaNavGroups.map((group) => (
              <details className="mobile-nav-group" key={group.label}>
                <summary>{group.label}</summary>
                <div>
                  {group.items.map((child) => <Link key={child.href + child.label} href={child.href}>{child.label}</Link>)}
                </div>
              </details>
            ))}
          </div>
        </details>
        <Link href="/family-law-in-pakistan/">Family Law</Link>
        <Link href="/pakistani-property-law/">Property Law</Link>
        <Link href="/secp-company-registration-in-pakistan/">Tax &amp; Corporate</Link>
        <Link href="/blogs/">Legal Resources</Link>
        <Link href="/about-us/">About</Link>
        <Link href="/contact-us/">Contact</Link>
        <a href={`https://wa.me/${cleanPhone(site.phones.karachi)}`}>WhatsApp enquiry</a>
      </nav>
    </details>
  )
}

export function SiteHeader({ interior = false }) {
  return (
    <header className={`site-header ${interior ? 'interior-header' : ''}`}>
      <div className="utility">
        <div className="container utility-inner">
          <span>Pakistan&apos;s legal information &amp; knowledge platform</span>
          <div className="utility-links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`https://wa.me/${cleanPhone(site.phones.karachi)}`}>{site.phones.karachi}</a>
          </div>
        </div>
      </div>
      <div className="container nav-wrap">
        <BrandLogo />
        <MegaNavigation />
        <div className="nav-actions">
          <a className="nav-cta" href={`https://wa.me/${cleanPhone(site.phones.karachi)}`}>Ask a legal question <ArrowUpRight size={15} /></a>
          <MobileNavigation />
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
          <BrandLogo footer />
          <p>Practical, source-led information about Pakistani law, legal documents and procedures, with specialist professional references where individual advice is required.</p>
          <a className="footer-contact-line" href={`mailto:${site.email}`}><Mail size={14} /> {site.email}</a>
        </div>
        <div>
          <h4>Knowledge base</h4>
          <Link href="/family-law-in-pakistan/">Family Law</Link>
          <Link href="/divorce-certificate/">Divorce Certificate</Link>
          <Link href="/succession-certificate/">Succession Certificate</Link>
          <Link href="/pakistani-property-law/">Property Law</Link>
          <Link href="/fbr-income-tax-return-filing-pakistan/">Taxation</Link>
          <Link href="/secp-company-registration-in-pakistan/">Company Registration</Link>
          <Link href="/blogs/">All Legal Guides</Link>
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
            </div>
          ))}
          <a className="footer-contact-line" href={`tel:+${cleanPhone(site.phones.karachi)}`}><Phone size={14} /> {site.phones.karachi}</a>
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

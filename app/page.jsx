import Image from 'next/image'
import { ArrowUpRight, ChevronDown, Search, Scale, ShieldCheck, FileText, Building2, Users, MapPin, Menu, MessageCircle } from 'lucide-react'

const services = [
  ['Family Law', 'Practical guidance for family disputes, rights, and legal proceedings.', Users],
  ['Divorce & Khula', 'Understand the legal process, documentation, and next steps clearly.', Scale],
  ['Child Custody & Guardianship', 'Focused support for custody, visitation, and guardianship matters.', ShieldCheck],
  ['Court Marriage', 'A clear route through documentation and registration requirements.', FileText],
  ['Succession & Inheritance', 'Navigate succession certificates, estate matters, and family rights.', FileText],
  ['Property Law', 'Guidance on transfers, disputes, documentation, and due diligence.', Building2],
  ['Corporate & Tax', 'Legal support for companies, businesses, compliance, and taxation.', Building2],
  ['Intellectual Property', 'Protect brands, creative work, inventions, and commercial identity.', ShieldCheck],
  ['Civil Litigation', 'Informed assistance for civil claims, disputes, and court processes.', Scale],
  ['Legal Documentation', 'Contracts, notices, affidavits, applications, and other legal documents.', FileText],
]

const guides = [
  ['SUCCESSION & INHERITANCE', 'Succession Certificate in Pakistan: a practical legal guide', 'What it is, who can apply, and the documents commonly required.'],
  ['CORPORATE LAW', 'Company Registration in Pakistan', 'A clear overview of the registration journey for new businesses.'],
  ['PROPERTY LAW', 'Property Transfer & Documentation', 'Important considerations before buying, selling, or transferring property.'],
]

const cities = ['Karachi', 'Islamabad', 'Rawalpindi', 'Lahore', 'Faisalabad', 'Hyderabad']

function SectionIntro({ eyebrow, title, children, light = false }) {
  return <div className={`section-intro ${light ? 'section-intro-light' : ''}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{children && <p className="intro-copy">{children}</p>}</div>
}

function Header() {
  return <header className="site-header">
    <div className="utility"><div className="container utility-inner"><span>Pakistan&apos;s Legal Information &amp; Services Platform</span><div className="utility-links"><span>Karachi</span><span>Islamabad</span><span>Lahore</span><a href="tel:+922135111111">+92 21 3511 1111</a></div></div></div>
    <div className="container nav-wrap">
      <a className="brand" href="#top" aria-label="PakLegal home"><span className="brand-mark"><Scale size={21} strokeWidth={1.4} /></span><span><strong>PakLegal</strong><small>.com.pk</small><em>Pakistan Legal Forum</em></span></a>
      <nav className="desktop-nav" aria-label="Main navigation"><a href="#services">Legal Services <ChevronDown size={13} /></a><a href="#guides">Legal Resources</a><a href="#guides">Blog</a><a href="#why">About</a><a href="#contact">Contact</a></nav>
      <div className="nav-actions"><button className="icon-button" aria-label="Search"><Search size={18} /></button><a className="nav-cta" href="#contact">Speak with a Lawyer <ArrowUpRight size={15} /></a><button className="mobile-menu" aria-label="Open menu"><Menu size={21} /></button></div>
    </div>
  </header>
}

function ServiceCard({ item }) { const [title, copy, Icon] = item; return <a className="service-card" href="#contact"><span className="card-icon"><Icon size={21} strokeWidth={1.35} /></span><h3>{title}</h3><p>{copy}</p><span className="learn">Learn more <ArrowUpRight size={14} /></span></a> }

function ArticleCard({ item, featured = false }) { return <article className={`article-card ${featured ? 'article-featured' : ''}`}><div className="article-meta"><span>{item[0]}</span><span>Legal guide</span></div><h3>{item[1]}</h3><p>{item[2]}</p><a href="#guides">Read guide <ArrowUpRight size={15} /></a></article> }

export default function Page() {
  return <main id="top"><Header />
    <section className="hero"><div className="hero-image"><Image src="/paklegal-court.png" alt="Historic courthouse architecture in Pakistan" fill priority sizes="100vw" /></div><div className="hero-overlay" /><div className="container hero-content"><p className="eyebrow hero-eyebrow">Pakistan Legal Forum</p><h1>Legal knowledge.<br /><i>Professional guidance.</i><br />Across Pakistan.</h1><p className="hero-copy">Practical legal information and access to professional assistance for individuals, families, and businesses navigating legal matters in Pakistan.</p><div className="hero-actions"><a className="button button-gold" href="#services">Explore legal services <ArrowUpRight size={16} /></a><a className="button button-outline-light" href="#contact">Speak with a lawyer</a></div><p className="hero-note"><span /> Clear, Pakistan-focused legal guidance</p></div><div className="hero-side-label">EST. PAKISTAN <span>·</span> LEGAL AUTHORITY</div></section>

    <section className="trust-strip"><div className="container trust-grid"><div><span className="trust-number">01</span><strong>Guidance across<br />Pakistan</strong></div><div><span className="trust-number">02</span><strong>Family &amp; civil<br />law</strong></div><div><span className="trust-number">03</span><strong>Corporate &amp;<br />taxation</strong></div><div><span className="trust-number">04</span><strong>Property &amp;<br />inheritance</strong></div><div><span className="trust-number">05</span><strong>Legal<br />documentation</strong></div></div></section>

    <section className="section services-section" id="services"><div className="container"><SectionIntro eyebrow="01 — Practice areas" title="Legal matters, explained with clarity." children="Whether you are protecting your family, building a business, or resolving a dispute, find a clear starting point for your legal matter." /><div className="service-grid">{services.map((item) => <ServiceCard key={item[0]} item={item} />)}</div></div></section>

    <section className="section guides-section" id="guides"><div className="container"><div className="section-heading-row"><SectionIntro eyebrow="02 — The legal journal" title="Legal guides & resources" children="Straightforward, Pakistan-focused information to help you understand the law before you take the next step." /><a className="text-link" href="#guides">View all resources <ArrowUpRight size={15} /></a></div><div className="articles-grid"><ArticleCard item={guides[0]} featured /><div className="article-stack"><ArticleCard item={guides[1]} /><ArticleCard item={guides[2]} /></div></div></div></section>

    <section className="why-section" id="why"><div className="container why-grid"><div className="why-statement"><p className="eyebrow">03 — Why PakLegal</p><h2>A more informed way to approach the law.</h2><p>Legal matters are often complicated before they ever reach a courtroom. PakLegal brings practical information and professional direction together, so you can understand your options with confidence.</p><a className="text-link text-link-light" href="#contact">Discover PakLegal <ArrowUpRight size={15} /></a></div><div className="why-list"><div><span>01</span><h3>Practical legal information</h3><p>Clear explanations of procedures, documents, and important considerations.</p></div><div><span>02</span><h3>Pakistan-focused guidance</h3><p>Content shaped around the laws, courts, and processes that apply locally.</p></div><div><span>03</span><h3>Professional direction</h3><p>Connect with experienced professionals when your matter needs a deeper review.</p></div></div></div></section>

    <section className="section locations-section"><div className="container"><SectionIntro eyebrow="04 — Nationwide assistance" title="A legal resource for every region." children="Access reliable information and professional legal assistance in the cities that shape Pakistan." /><div className="city-grid">{cities.map((city, i) => <a href="#contact" className="city-card" key={city}><span>0{i + 1}</span><h3>{city}</h3><MapPin size={17} /></a>)}</div></div></section>

    <section className="consultation" id="contact"><div className="container consultation-inner"><div><p className="eyebrow">Start with a conversation</p><h2>Need legal guidance?</h2><p>Discuss your legal matter with an experienced professional and understand the appropriate legal route before taking the next step.</p></div><div className="consultation-actions"><a className="button button-gold" href="mailto:consult@paklegal.com.pk">Request consultation <ArrowUpRight size={16} /></a><a className="button button-outline-light" href="https://wa.me/923001111111"><MessageCircle size={16} /> WhatsApp</a></div></div></section>

    <section className="section latest-section"><div className="container"><div className="section-heading-row"><SectionIntro eyebrow="05 — Latest insights" title="From the legal desk" /><a className="text-link" href="#guides">Read the journal <ArrowUpRight size={15} /></a></div><div className="latest-grid">{guides.map((item) => <ArticleCard item={item} key={item[1]} />)}</div></div></section>

    <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><a className="brand brand-footer" href="#top"><span className="brand-mark"><Scale size={21} strokeWidth={1.4} /></span><span><strong>PakLegal</strong><small>.com.pk</small><em>Pakistan Legal Forum</em></span></a><p>A trusted legal information and professional services platform for Pakistan.</p></div><div><h4>Legal services</h4><a href="#services">Family law</a><a href="#services">Property law</a><a href="#services">Corporate &amp; tax</a><a href="#services">Legal documentation</a></div><div><h4>Resources</h4><a href="#guides">Legal guides</a><a href="#guides">Legal journal</a><a href="#guides">FAQs</a><a href="#why">About PakLegal</a></div><div><h4>Major cities</h4>{cities.slice(0, 4).map((city) => <a href="#contact" key={city}>{city}</a>)}</div><div><h4>Contact</h4><a href="mailto:consult@paklegal.com.pk">consult@paklegal.com.pk</a><a href="tel:+922135111111">+92 21 3511 1111</a><span className="footer-note">Mon — Sat<br />9:00 am — 6:00 pm</span></div></div><div className="container footer-bottom"><span>© 2026 PakLegal.com.pk. All rights reserved.</span><div><a href="#top">Privacy</a><a href="#top">Disclaimer</a><a href="#top">Terms</a><a href="#top">Sitemap</a></div></div></footer>
  </main>
}

// Reusable interior-page patterns can compose SectionIntro, ArticleCard, ServiceCard, and the consultation CTA above.
// They are intentionally content-first so long-form legal pages can add breadcrumbs, TOCs, FAQs, and related links without changing the visual system.

export { Header, SectionIntro, ServiceCard, ArticleCard }
                                                 

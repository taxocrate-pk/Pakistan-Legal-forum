import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Building2, FileText, MapPin, Scale, ShieldCheck, Users } from 'lucide-react'
import { ConsultationBand, SiteFooter, SiteHeader } from '@/components/site-shell'

const services = [
  ['Family Law', 'Family rights, dissolution, maintenance, guardianship and related procedures.', Users, '/family-law-in-pakistan/'],
  ['Divorce & Khula', 'Talaq, khula, Union Council procedure and divorce documentation.', Scale, '/divorce-certificate/'],
  ['Child Registration', 'CRC / B-Form, birth registration, identity records and corrections.', ShieldCheck, '/child-registration-certificate-crc/'],
  ['Succession & Inheritance', 'Succession certificates, legal heirs, estate records and administration.', FileText, '/nadra-succession-certificate-nadra-letter-of-administration-succession-certificate-for-legal-heirs/'],
  ['Property Law', 'Title, possession, tenancy, transfer and property disputes in Pakistan.', Building2, '/pakistani-property-law/'],
  ['Corporate & Tax', 'SECP, FBR, companies, compliance and taxation resources.', Building2, '/secp-company-registration-in-pakistan/'],
  ['Rental & Tenancy', 'Landlord, tenant, rent and possession issues under applicable law.', FileText, '/rental-and-tenancy-law/'],
  ['Legal Documentation', 'Certificates, notices, affidavits and procedural legal records.', FileText, '/blogs/'],
]

const guides = [
  {
    category: 'FAMILY LAW',
    title: 'Divorce Certificate in Pakistan',
    copy: 'Talaq, khula, Union Council registration and documentary proof explained from the legal process outward.',
    href: '/divorce-certificate/',
  },
  {
    category: 'SUCCESSION & INHERITANCE',
    title: 'NADRA Succession Certificate & Letter of Administration',
    copy: 'Legal heirs, FRC, estate documents, biometrics, publication and the line between administrative and court routes.',
    href: '/nadra-succession-certificate-nadra-letter-of-administration-succession-certificate-for-legal-heirs/',
  },
  {
    category: 'IDENTITY & CIVIL REGISTRATION',
    title: 'Child Registration Certificate (CRC / B-Form)',
    copy: 'Birth registration, NADRA identity requirements, age-based biometrics and correction of record mismatches.',
    href: '/child-registration-certificate-crc/',
  },
]

const cities = ['Karachi', 'Islamabad', 'Rawalpindi', 'Lahore', 'Faisalabad', 'Hyderabad']

function SectionIntro({ eyebrow, title, children }) {
  return <div className="section-intro"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{children && <p className="intro-copy">{children}</p>}</div>
}

function ServiceCard({ item }) {
  const [title, copy, Icon, href] = item
  return <Link className="service-card" href={href}><span className="card-icon"><Icon size={21} strokeWidth={1.35} /></span><h3>{title}</h3><p>{copy}</p><span className="learn">Read guide <ArrowUpRight size={14} /></span></Link>
}

function ArticleCard({ item, featured = false }) {
  return <article className={`article-card ${featured ? 'article-featured' : ''}`}><div className="article-meta"><span>{item.category}</span><span>Knowledge guide</span></div><h3>{item.title}</h3><p>{item.copy}</p><Link href={item.href}>Read guide <ArrowUpRight size={15} /></Link></article>
}

export default function Page() {
  return <main id="top">
    <SiteHeader />

    <section className="hero">
      <div className="hero-image"><Image src="/paklegal-court.png" alt="Courthouse architecture representing Pakistan legal information" fill priority sizes="100vw" /></div>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <h1>Pakistan Legal Forum:<br />Pakistani law &amp; legal guides<br />in one place.</h1>
        <p className="hero-copy">A knowledge base for individuals, families, businesses and professionals who need to understand Pakistani law, documents and procedure before choosing the next legal step.</p>
        <div className="hero-actions"><a className="button button-gold" href="#knowledge-base">Explore legal guides <ArrowUpRight size={16} /></a><Link className="button button-outline-light" href="/contact-us/">Contact Pakistan Legal Forum</Link></div>
        <p className="hero-note"><span /> Informative, Pakistan-focused and official-source conscious</p>
      </div>
      <div className="hero-side-label">LEGAL KNOWLEDGE <span>·</span> PAKISTAN</div>
    </section>

    <section className="trust-strip"><div className="container trust-grid"><div><span className="trust-number">01</span><strong>Family &amp;<br />civil status</strong></div><div><span className="trust-number">02</span><strong>Succession &amp;<br />inheritance</strong></div><div><span className="trust-number">03</span><strong>Corporate &amp;<br />taxation</strong></div><div><span className="trust-number">04</span><strong>Property &amp;<br />tenancy</strong></div><div><span className="trust-number">05</span><strong>Legal<br />documentation</strong></div></div></section>

    <section className="section services-section" id="knowledge-base"><div className="container"><SectionIntro eyebrow="01 — Knowledge base" title="Pakistani legal topics, organised by the problem you need to understand.">Each guide is structured around the law, documents, procedure, jurisdiction and current official source rather than promotional claims.</SectionIntro><div className="service-grid">{services.map((item) => <ServiceCard key={item[0]} item={item} />)}</div></div></section>

    <section className="section guides-section"><div className="container"><div className="section-heading-row"><SectionIntro eyebrow="02 — Priority guides" title="Start with the strongest legal reference pages.">Pakistan Legal Forum is being migrated to Next.js while preserving its established search URLs and rebuilding each important page as a deeper knowledge resource.</SectionIntro><Link className="text-link" href="/blogs/">Browse resources <ArrowUpRight size={15} /></Link></div><div className="articles-grid"><ArticleCard item={guides[0]} featured /><div className="article-stack"><ArticleCard item={guides[1]} /><ArticleCard item={guides[2]} /></div></div></div></section>

    <section className="why-section"><div className="container why-grid"><div className="why-statement"><p className="eyebrow">03 — Editorial approach</p><h2>Understand the legal status before acting on the procedure.</h2><p>PakLegal separates statutes, rules, administrative practice and professional guidance. Current laws and official authority pages are checked before time-sensitive procedures, fees or requirements are described as current.</p><Link className="text-link text-link-light" href="/about-us/">About Pakistan Legal Forum <ArrowUpRight size={15} /></Link></div><div className="why-list"><div><span>01</span><h3>One page, one primary legal intent</h3><p>Overlapping pages are consolidated or differentiated so readers and search engines can identify the correct legal topic.</p></div><div><span>02</span><h3>Documents and jurisdiction matter</h3><p>Legal answers are connected to the actual record, authority, place and date rather than generic promises.</p></div><div><span>03</span><h3>Specialist resources where needed</h3><p>Readers can move to established Qanoon Group, Qanoon House, Advocates, Right Law and Taxocrate resources when deeper specialist help is appropriate.</p></div></div></div></section>

    <section className="section locations-section"><div className="container"><SectionIntro eyebrow="04 — Pakistan-wide context" title="Legal information across major cities.">Federal law may apply nationally, while local government, provincial law, court jurisdiction and administrative practice can change the procedure from one place to another.</SectionIntro><div className="city-grid">{cities.map((city, i) => <Link href="/contact-us/" className="city-card" key={city}><span>0{i + 1}</span><h3>{city}</h3><MapPin size={17} /></Link>)}</div></div></section>

    <ConsultationBand />

    <section className="section latest-section"><div className="container"><div className="section-heading-row"><SectionIntro eyebrow="05 — Legal desk" title="Recently rebuilt knowledge guides" /><Link className="text-link" href="/blogs/">See all topics <ArrowUpRight size={15} /></Link></div><div className="latest-grid">{guides.map((item) => <ArticleCard item={item} key={item.href} />)}</div></div></section>

    <SiteFooter />
  </main>
}

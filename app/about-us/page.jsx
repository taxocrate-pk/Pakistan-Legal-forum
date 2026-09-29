import { SiteFooter, SiteHeader } from '@/components/site-shell'
import { specialistResources } from '@/lib/site-data'

export const metadata = {
  title: 'About Pakistan Legal Forum',
  description: 'About PakLegal.com.pk, Pakistan Legal Forum’s source-led legal knowledge base and its approach to Pakistani legal information and specialist resources.',
  alternates: { canonical: 'https://paklegal.com.pk/about-us/' },
}

export default function AboutPage() {
  return <>
    <SiteHeader interior />
    <main>
      <section className="utility-hero"><div className="container"><p className="eyebrow">About PakLegal.com.pk</p><h1>Pakistani legal information built around the actual legal question.</h1><p>Pakistan Legal Forum is being developed as a broad legal knowledge base: detailed guides, official-source references, practical document checklists and clear routes to specialist professional resources where a live matter requires individual advice.</p></div></section>
      <section className="utility-page"><div className="container utility-copy">
        <h2>What Pakistan Legal Forum is</h2><p>PakLegal.com.pk covers recurring legal questions faced by individuals, families, businesses and overseas Pakistanis. The site is intentionally broader than a single-practice law-firm website. Its role is to explain Pakistani legal procedures in a form that a reader can understand before deciding whether the matter requires a lawyer, accountant, company adviser or government authority.</p><p>The knowledge base includes family law, marriage and divorce records, succession and inheritance, property and tenancy, company law, taxation, identity and civil registration, intellectual property and other procedural subjects. Each major page is designed around one primary legal intent so closely related topics can link to each other without repeating the same paragraphs across several URLs.</p>
        <h2>Editorial method</h2><p>Legal accuracy comes before keyword volume. Current procedures, fees and government systems are checked against official sources where available. Statutes are separated from administrative practice, and proposed law is not described as enacted law. When a rule varies by province, personal law, court jurisdiction or date, the page says so rather than presenting a single national shortcut.</p><p>Long guides use one clear H1, a structured H2/H3 hierarchy, tables where comparison helps, practical notes, FAQs and an official-source section. Search performance data is used to protect established URLs during the Next.js migration and to identify pages competing for the same query. Strong pages are preserved; weak duplicates are consolidated or retargeted only where the evidence supports doing so.</p>
        <h2>Legal information is not individual legal advice</h2><div className="legal-notice"><p>A public article cannot examine every document, deadline, province, court order or disputed fact in an individual case. PakLegal guides provide general information and a starting framework. A reader dealing with litigation, limitation, arrest risk, property transfer, tax exposure, immigration deadlines or other fact-sensitive matters should obtain advice on the actual record.</p></div>
        <h2>Specialist legal resources</h2><p>Where a reader needs deeper subject-specific information or professional assistance, PakLegal can point to established specialist resources. Those links are used contextually within relevant guides rather than being inserted as unrelated site-wide SEO links.</p>
        <div className="network-directory">{specialistResources.map((resource) => <a href={resource.url} key={resource.url} target="_blank" rel="noreferrer"><strong>{resource.name}</strong><span>{resource.description}</span></a>)}</div>
        <h2>How the Next.js migration is being handled</h2><p>The migration preserves useful indexed routes instead of replacing the entire historical URL structure with new slugs. Google Search Console data is being used to identify high-impression and high-click pages, query cannibalisation and malformed legacy URLs. New pages use reusable components, canonical metadata, Article/Breadcrumb/FAQ structured data, responsive tables and a consistent premium editorial design.</p><p>This approach allows Pakistan Legal Forum to improve its design and technical stack while retaining the search history of pages readers already find through Google.</p>
      </div></section>
    </main>
    <SiteFooter />
  </>
}

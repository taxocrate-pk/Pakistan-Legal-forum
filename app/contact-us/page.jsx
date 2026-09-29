import { SiteFooter, SiteHeader } from '@/components/site-shell'
import { site } from '@/lib/site-data'

export const metadata = {
  title: 'Contact Pakistan Legal Forum',
  description: 'Contact Pakistan Legal Forum and view the current Karachi, Islamabad and Lahore office details published by PakLegal.com.pk.',
  alternates: { canonical: 'https://paklegal.com.pk/contact-us/' },
}

function phoneHref(phone) {
  return `tel:+${phone.replace(/\D/g, '').replace(/^0/, '92')}`
}

export default function ContactPage() {
  return <>
    <SiteHeader interior />
    <main>
      <section className="utility-hero"><div className="container"><p className="eyebrow">Pakistan Legal Forum</p><h1>Contact & office information</h1><p>Use the published PakLegal contact details below for a legal-information or professional-services enquiry. For urgent court deadlines, identify the city, court, next date and nature of the proceeding in your first message.</p></div></section>
      <section className="utility-page"><div className="container">
        <div className="utility-copy"><h2>General contact</h2><p>Email: <a href={`mailto:${site.email}`}>{site.email}</a>. Pakistan Legal Forum provides legal information through this knowledge base and can direct an individual matter to an appropriate professional resource where case-specific review is required.</p><div className="legal-notice"><p>Do not send passwords, banking PINs, original identity documents or other unnecessary sensitive material through an initial website enquiry. A lawyer-client relationship should not be assumed merely from reading the website or sending a general message.</p></div></div>
        <div className="contact-grid">{site.offices.map((office) => <article className="contact-card" key={office.city}><div className="office-label">{office.label}</div><h2>{office.city}</h2><p>{office.address}</p>{office.phones.map((phone) => <a href={phoneHref(phone)} key={phone}>{phone}</a>)}</article>)}</div>
        <div className="utility-copy"><h2>What to include in a legal enquiry</h2><p>A useful first message is short and factual. State the type of matter, city or jurisdiction, important dates, whether any court case is already pending and what document or outcome you need. Where a notice, order or certificate is central to the question, identify the issuing authority and date. This allows the matter to be directed to the right subject specialist without unnecessary back-and-forth.</p><h2>Website information and specialist resources</h2><p>PakLegal.com.pk is structured as an informative legal knowledge base. Articles explain general Pakistani law and procedure and link to official sources. Where a matter requires individual professional assistance, the site also identifies specialist resources within the broader legal network. General web information is not a substitute for advice on a live case file.</p></div>
      </div></section>
    </main>
    <SiteFooter />
  </>
}

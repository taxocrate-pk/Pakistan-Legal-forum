import { SiteFooter, SiteHeader } from '@/components/site-shell'

export const metadata = {
  title: 'Terms of Service & Legal Disclaimer',
  description: 'Terms of website use and legal-information disclaimer for PakLegal.com.pk and Pakistan Legal Forum.',
  alternates: { canonical: 'https://paklegal.com.pk/terms-of-service/' },
}

export default function TermsPage() {
  return <>
    <SiteHeader interior />
    <main>
      <section className="utility-hero"><div className="container"><p className="eyebrow">Website terms</p><h1>Terms of Service & Legal Disclaimer</h1><p>Important terms governing use of Pakistan Legal Forum’s public legal-information website.</p></div></section>
      <section className="utility-page"><div className="container utility-copy">
        <h2>General legal information</h2><p>PakLegal.com.pk publishes general information about Pakistani law, procedure, documents and government processes. Articles are written for informational purposes and are not a substitute for advice based on an individual file. Laws, rules, fees, forms and administrative practices can change, and the correct answer may depend on province, court, personal law, dates and disputed facts.</p>
        <h2>No automatic lawyer-client relationship</h2><p>Reading the website, following a link or sending a general enquiry does not by itself create a lawyer-client relationship or professional retainer. A professional relationship arises only through the appropriate acceptance of an individual engagement and its terms.</p>
        <h2>Official sources and external links</h2><p>Where practical, guides link to statutes, regulators and other official sources. PakLegal also links to specialist legal resources. External websites are controlled by their respective operators and can change without notice. Visitors should verify a time-sensitive legal requirement with the current official authority before acting.</p>
        <h2>No guarantee of outcome</h2><p>Legal proceedings, registrations, tax matters, property transfers and government applications depend on facts and decision-makers. Pakistan Legal Forum does not guarantee a court result, registration approval, visa outcome, ranking result or completion date merely because a procedure is described on the website.</p>
        <h2>Responsible use</h2><p>Visitors must not use the website to impersonate another person, submit forged material, obtain unauthorized access to identity systems, interfere with the site or use legal information to facilitate unlawful conduct. Official portals linked from PakLegal remain subject to their own security and use conditions.</p>
        <h2>Professional and emergency matters</h2><p>Website information should not be relied on where a limitation period, arrest risk, urgent injunction, child-safety issue, deportation deadline, tax deadline or other immediate legal consequence requires prompt professional review. Contact an appropriate lawyer or authority with the actual documents and dates.</p>
        <h2>Updates</h2><p>These terms may be revised as the website, services or legal-information model changes. Continued use of the website is subject to the version displayed at the time of access.</p>
      </div></section>
    </main>
    <SiteFooter />
  </>
}

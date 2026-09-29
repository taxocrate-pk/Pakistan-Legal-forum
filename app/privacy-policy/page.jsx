import { SiteFooter, SiteHeader } from '@/components/site-shell'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for PakLegal.com.pk and Pakistan Legal Forum.',
  alternates: { canonical: 'https://paklegal.com.pk/privacy-policy/' },
}

export default function PrivacyPage() {
  return <>
    <SiteHeader interior />
    <main>
      <section className="utility-hero"><div className="container"><p className="eyebrow">Website policy</p><h1>Privacy Policy</h1><p>How Pakistan Legal Forum handles information submitted through PakLegal.com.pk and how visitors should use the website safely.</p></div></section>
      <section className="utility-page"><div className="container utility-copy">
        <h2>Information you choose to provide</h2><p>Visitors may provide contact details and information about a legal enquiry by email, telephone, WhatsApp or another contact method displayed on the website. Do not send passwords, PINs, card details or unnecessary identity-document images in an initial enquiry. Where a professional later needs documents for a specific matter, use the channel and instructions provided for that engagement.</p>
        <h2>Website and analytics information</h2><p>The website may use ordinary technical and analytics information such as pages viewed, device/browser information, approximate traffic source and performance measurements to improve the site and understand which legal resources are useful. Hosting, analytics and security providers may process technical data as part of delivering the service.</p>
        <h2>Legal enquiries and confidentiality</h2><p>Sending a general message through a public website does not by itself create a lawyer-client relationship. Confidentiality and professional duties should be assessed in the context of an accepted professional engagement. Avoid sending highly sensitive material until the recipient and purpose are confirmed.</p>
        <h2>Third-party and official links</h2><p>PakLegal links to official government resources and specialist legal websites. Those destinations operate their own privacy practices and security systems. A link does not mean Pakistan Legal Forum controls the third-party site or its data processing.</p>
        <h2>Security and retention</h2><p>Reasonable steps should be used to protect information, but no public internet transmission is guaranteed to be completely secure. Information should be retained only as reasonably necessary for the purpose for which it was received, professional/legal obligations, record keeping or dispute prevention.</p>
        <h2>Updates</h2><p>This policy may be updated as the Next.js website, analytics stack or contact workflow changes. The current version displayed on this page applies to website use at the time of access.</p>
      </div></section>
    </main>
    <SiteFooter />
  </>
}

import { PrivacyStyles } from './styles/Privacy'
import Head from '../Head'

export default function Privacy() {
  return (
    <PrivacyStyles>
      <Head title="Privacy" />
      <div className="content">
        <h1>Privacy Policy</h1>
        <p>
          This privacy policy has been compiled to better serve those who are concerned with how
          their 'Personally Identifiable Information' (PII) is being used online. PII, as described
          in US privacy law and information security, is information that can be used on its own or
          with other information to identify, contact, or locate a single person, or to identify an
          individual in context. Please read our privacy policy carefully to get a clear
          understanding of how we collect, use, protect or otherwise handle your Personally
          Identifiable Information in accordance with our website.
        </p>
        <h2>What personal information do we collect from the people that visit?</h2>
        <p>
          When ordering or registering on our site, as appropriate, you may be asked to enter your
          name, email address, mailing address, credit card information or other details to help you
          with your experience.
        </p>
        <h2> When do we collect information?</h2>
        <p>
          We collect information from you when you place an order or enter information on our site.
        </p>
        <h2>How do we use your information?</h2>
        <p>
          To allow us to better service you in responding to your customer service requests. To
          quickly process your transactions.
        </p>
        <h2>How do we protect your information?</h2>
        <p>
          Our website is scanned on a regular basis for security holes and known vulnerabilities in
          order to make your visit to our site as safe as possible. Your personal information is
          contained behind secured networks and is only accessible by a limited number of persons
          who have special access rights to such systems, and are required to keep the information
          confidential. In addition, all sensitive/credit information you supply is encrypted via
          Secure Socket Layer (SSL) technology. We do NOT save credit card data on any of our
          servers. All credit card information goes directly to Stripe, a well known payment
          processing company. All transactions are processed through a gateway provider and are not
          stored or processed on our servers.
        </p>
        <h2>Third-party disclosure</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your Personally
          Identifiable Information.
        </p>
      </div>
    </PrivacyStyles>
  )
}

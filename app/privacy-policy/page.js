import styles from './PrivacyPolicy.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.effectiveDate}>Effective Date: January 1, 2026</p>

          <div className={styles.section}>
            <p className={styles.paragraph}>
              Metaratus® (“Metaratus,” “we,” “our,” or “us”) respects your privacy and is committed to protecting it through this Privacy Policy (“Policy”). This Policy explains how we collect, use, disclose, and safeguard information when you access or use <a href="https://metaratus.ai" className={styles.link}>https://metaratus.ai</a> (the “Website”).
            </p>
            <p className={styles.paragraph}>
              By accessing or using the Website, you acknowledge that you have read and understood this Policy and consent to the practices described herein.
            </p>

            <h2 className={styles.heading2}>1. Scope and Applicability</h2>
            <p className={styles.paragraph}>
              This Policy applies to information collected through the Website. It does not apply to information collected offline, through separate contractual engagements, or via third-party platforms unless expressly stated in writing.
            </p>
            <p className={styles.paragraph}>
              Where Metaratus® provides services under a separate written agreement, that agreement governs data handling to the extent of any inconsistency.
            </p>

            <h2 className={styles.heading2}>2. Information We Collect</h2>
            <h3 className={styles.heading3}>2.1 Information You Voluntarily Provide</h3>
            <p className={styles.paragraph}>
              We may collect personal information that you voluntarily submit, including:
            </p>
            <ul className={styles.list}>
              <li>Name</li>
              <li>Email address</li>
              <li>Company or organizational affiliation</li>
              <li>Inquiry or message content</li>
            </ul>
            <p className={styles.paragraph}>
              You are not required to provide personal information to browse the Website.
            </p>

            <h3 className={styles.heading3}>2.2 Automatically Collected Information</h3>
            <p className={styles.paragraph}>
              When you access the Website, we may automatically collect limited technical information, such as:
            </p>
            <ul className={styles.list}>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and interaction timestamps</li>
              <li>Referring URLs</li>
            </ul>
            <p className={styles.paragraph}>
              This information is used for security, analytics, and operational integrity.
            </p>

            <h3 className={styles.heading3}>2.3 Cookies and Similar Technologies</h3>
            <p className={styles.paragraph}>
              We may use cookies or similar technologies to enhance functionality, analyze usage patterns, and maintain security. You may manage cookie preferences through your browser settings. Disabling cookies may limit certain Website features.
            </p>

            <h2 className={styles.heading2}>3. How We Use Information</h2>
            <p className={styles.paragraph}>
              We use information collected through the Website for purposes including:
            </p>
            <ul className={styles.list}>
              <li>Responding to inquiries or communications</li>
              <li>Operating, maintaining, and improving the Website</li>
              <li>Monitoring usage and performance</li>
              <li>Maintaining security and preventing misuse</li>
              <li>Complying with legal and regulatory obligations</li>
            </ul>
            <p className={styles.paragraph}>
              Metaratus® does not sell personal information.
            </p>

            <h2 className={styles.heading2}>4. Legal Bases for Processing (GDPR)</h2>
            <p className={styles.paragraph}>
              For individuals located in the European Union or European Economic Area, Metaratus® processes personal data only where a lawful basis exists, including:
            </p>
            <ul className={styles.list}>
              <li>Consent</li>
              <li>Performance of a contract or pre-contractual steps</li>
              <li>Compliance with legal obligations</li>
              <li>Legitimate interests, where such interests are not overridden by individual rights</li>
            </ul>

            <h2 className={styles.heading2}>5. Humanocentric™ AI and Automated Processing</h2>
            <p className={styles.paragraph}>
              Metaratus® does not use automated decision-making or profiling on this Website that produces legal or similarly significant effects.
            </p>
            <p className={styles.paragraph}>
              Where artificial intelligence or analytical tools are referenced or demonstrated, they are used solely as analytical instruments. Interpretation, judgment, and decision-making remain human responsibilities.
            </p>

            <h2 className={styles.heading2}>6. Disclosure of Information</h2>
            <p className={styles.paragraph}>
              We may disclose information:
            </p>
            <ul className={styles.list}>
              <li>To service providers assisting in Website operations (subject to confidentiality obligations)</li>
              <li>To comply with legal requirements, court orders, or lawful governmental requests</li>
              <li>To protect the rights, property, or safety of Metaratus®, users, or others</li>
            </ul>
            <p className={styles.paragraph}>
              We do not knowingly disclose personal information to unauthorized third parties.
            </p>

            <h2 className={styles.heading2}>7. Data Security</h2>
            <p className={styles.paragraph}>
              We implement reasonable administrative, technical, and organizational safeguards designed to protect information against unauthorized access, disclosure, alteration, or destruction.
            </p>
            <p className={styles.paragraph}>
              However, no method of transmission or storage is completely secure. Accordingly, we cannot guarantee absolute security.
            </p>

            <h2 className={styles.heading2}>8. Data Retention</h2>
            <p className={styles.paragraph}>
              We retain personal information only for as long as reasonably necessary to fulfill the purposes described in this Policy, unless a longer retention period is required or permitted by law.
            </p>

            <h2 className={styles.heading2}>9. Your Privacy Rights</h2>
            <h3 className={styles.heading3}>9.1 Rights of EU/EEA Residents (GDPR)</h3>
            <p className={styles.paragraph}>
              Subject to applicable law, you have the right to:
            </p>
            <ul className={styles.list}>
              <li>Access personal data</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request erasure (“right to be forgotten”)</li>
              <li>Restrict processing</li>
              <li>Object to processing based on legitimate interests</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time, where processing is based on consent</li>
            </ul>
            <p className={styles.paragraph}>
              You also have the right to lodge a complaint with your local data protection authority.
            </p>

            <h3 className={styles.heading3}>9.2 Rights of California Residents (CCPA / CPRA)</h3>
            <p className={styles.paragraph}>
              If you are a California resident, you have the right to:
            </p>
            <ul className={styles.list}>
              <li>Know what personal information is collected, used, or disclosed</li>
              <li>Request deletion of personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Opt out of the sale or sharing of personal information (if applicable)</li>
              <li>Limit use of sensitive personal information (if applicable)</li>
              <li>Not be discriminated against for exercising privacy rights</li>
            </ul>
            <p className={styles.paragraph}>
              Metaratus® does not sell or share personal information for cross-context behavioral advertising.
            </p>

            <h3 className={styles.heading3}>9.3 Exercising Your Rights</h3>
            <p className={styles.paragraph}>
              Privacy requests may be submitted to:<br />
              📧 <a href="mailto:info@metaratus.ai" className={styles.link}>info@metaratus.ai</a>
            </p>
            <p className={styles.paragraph}>
              We may require identity verification before fulfilling requests. Authorized agents may submit requests where permitted by law.
            </p>

            <h2 className={styles.heading2}>10. International Data Transfers</h2>
            <p className={styles.paragraph}>
              If you access the Website from outside the United States, you acknowledge that your information may be transferred to and processed in the United States or other jurisdictions where data protection laws may differ.
            </p>
            <p className={styles.paragraph}>
              Where required, appropriate safeguards are used to protect transferred data.
            </p>

            <h2 className={styles.heading2}>11. Third-Party Links</h2>
            <p className={styles.paragraph}>
              The Website may contain links to third-party websites. Metaratus® is not responsible for the privacy practices, policies, or content of those websites. Users should review third-party privacy policies independently.
            </p>

            <h2 className={styles.heading2}>12. Children’s Privacy</h2>
            <p className={styles.paragraph}>
              The Website is not directed to individuals under the age of 13, and Metaratus® does not knowingly collect personal information from children. If you believe such information has been collected, please contact us so it may be removed.
            </p>

            <h2 className={styles.heading2}>13. Do Not Track Signals</h2>
            <p className={styles.paragraph}>
              At this time, the Website does not respond to “Do Not Track” browser signals, as no universally accepted standard has been adopted.
            </p>

            <h2 className={styles.heading2}>14. Changes to This Privacy Policy</h2>
            <p className={styles.paragraph}>
              Metaratus® reserves the right to modify this Policy at any time. Updates will be effective upon posting. Continued use of the Website after changes constitutes acceptance of the revised Policy.
            </p>

            <h2 className={styles.heading2}>15. Contact Information</h2>
            <p className={styles.paragraph}>
              For questions, concerns, or privacy-related requests, please contact:<br />
              <strong>Metaratus®</strong><br />
              📧 <a href="mailto:info@metaratus.ai" className={styles.link}>info@metaratus.ai</a><br />
              🌐 <a href="https://metaratus.ai" className={styles.link}>https://metaratus.ai</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

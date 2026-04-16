import styles from '../privacy-policy/PrivacyPolicy.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>Terms and Conditions</h1>
          <p className={styles.effectiveDate}>Effective Date: January 1, 2026</p>

          <div className={styles.section}>
            <p className={styles.paragraph}>
              Welcome to metaratus.ai (the “Website”), operated by Metaratus® (“Metaratus,” “we,” “our,” or “us”). These Terms and Conditions (“Terms”) govern your access to and use of this Website and any content, tools, services, or materials made available through it.
            </p>
            <p className={styles.paragraph}>
              By accessing or using this Website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, you must discontinue use of the Website.
            </p>

            <h2 className={styles.heading2}>1. Purpose of the Website</h2>
            <p className={styles.paragraph}>
              The Website is provided for informational, educational, and exploratory purposes. Content may include materials related to strategic analysis, digital project management, Humanocentric™ AI concepts, the Prisma™ Framework, and related intellectual property.
            </p>
            <p className={styles.paragraph}>
              Nothing on this Website constitutes legal, financial, medical, or professional advice unless explicitly stated in a written agreement executed by Metaratus®.
            </p>

            <h2 className={styles.heading2}>2. No Professional or Advisory Relationship</h2>
            <p className={styles.paragraph}>
              Use of this Website does not create a client, advisory, fiduciary, or professional relationship between you and Metaratus®.
            </p>
            <p className={styles.paragraph}>
              Any services offered by Metaratus® are governed exclusively by separate written agreements. Reliance on Website content without such an agreement is undertaken at your own risk.
            </p>

            <h2 className={styles.heading2}>3. Intellectual Property Rights</h2>
            <p className={styles.paragraph}>
              All content on this Website—including but not limited to text, frameworks, methodologies, graphics, trademarks, service marks, logos, slogans, and proprietary terminology (including Metaratus®, Prisma™, Humanocentric™ AI, Knowledge for the Sake of Knowledge™, and related marks)—is the exclusive property of Metaratus® or its licensors.
            </p>
            <p className={styles.paragraph}>
              You may not:
            </p>
            <ul className={styles.list}>
              <li>Copy, reproduce, modify, distribute, or republish content</li>
              <li>Reverse engineer or extract proprietary methodologies</li>
              <li>Use Metaratus® intellectual property for commercial purposes</li>
            </ul>
            <p className={styles.paragraph}>
              without prior written consent.
            </p>
            <p className={styles.paragraph}>
              All rights not expressly granted are reserved.
            </p>

            <h2 className={styles.heading2}>4. Permitted Use</h2>
            <p className={styles.paragraph}>
              You may access and use the Website solely for lawful, non-commercial purposes consistent with these Terms.
            </p>
            <p className={styles.paragraph}>
              You agree not to:
            </p>
            <ul className={styles.list}>
              <li>Use the Website for unlawful or harmful activities</li>
              <li>Interfere with Website security or functionality</li>
              <li>Attempt unauthorized access to systems or data</li>
              <li>Misrepresent affiliation with Metaratus®</li>
              <li>Use the Website in a manner that undermines intellectual property integrity</li>
            </ul>

            <h2 className={styles.heading2}>5. Human Judgment and AI Disclaimer</h2>
            <p className={styles.paragraph}>
              Where artificial intelligence or automated tools are referenced, demonstrated, or discussed, they are presented solely as analytical instruments. Outputs, insights, or examples are not authoritative and must not be relied upon without independent human judgment.
            </p>
            <p className={styles.paragraph}>
              Metaratus® expressly disclaims responsibility for decisions made solely on the basis of automated or conceptual outputs.
            </p>

            <h2 className={styles.heading2}>6. Accuracy and Availability of Information</h2>
            <p className={styles.paragraph}>
              While Metaratus® strives for clarity and accuracy, the Website may contain errors, omissions, or outdated information. Content is provided “as is” and may be modified, updated, or removed at any time without notice.
            </p>
            <p className={styles.paragraph}>
              We do not warrant that the Website will be uninterrupted, error-free, or secure.
            </p>

            <h2 className={styles.heading2}>7. Third-Party Links and Resources</h2>
            <p className={styles.paragraph}>
              The Website may reference or link to third-party websites or resources. Metaratus® does not control, endorse, or assume responsibility for third-party content, policies, or practices.
            </p>
            <p className={styles.paragraph}>
              Your use of third-party services is at your own risk.
            </p>

            <h2 className={styles.heading2}>8. Limitation of Liability</h2>
            <p className={styles.paragraph}>
              To the fullest extent permitted by law, Metaratus® shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from or related to your use of—or inability to use—the Website.
            </p>
            <p className={styles.paragraph}>
              This includes, without limitation, damages for loss of data, profits, business opportunities, or decision outcomes.
            </p>

            <h2 className={styles.heading2}>9. Indemnification</h2>
            <p className={styles.paragraph}>
              You agree to indemnify and hold harmless Metaratus®, its officers, affiliates, partners, and representatives from any claims, liabilities, damages, or expenses arising from your use of the Website or violation of these Terms.
            </p>

            <h2 className={styles.heading2}>10. Privacy</h2>
            <p className={styles.paragraph}>
              Your use of the Website is also governed by our <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>, which explains how information is collected, used, and protected. By using the Website, you consent to such practices.
            </p>

            <h2 className={styles.heading2}>11. Changes to These Terms</h2>
            <p className={styles.paragraph}>
              Metaratus® reserves the right to update or modify these Terms at any time. Continued use of the Website after changes are posted constitutes acceptance of the revised Terms.
            </p>

            <h2 className={styles.heading2}>12. Governing Law</h2>
            <p className={styles.paragraph}>
              These Terms are governed by and construed in accordance with the laws of the State of Georgia, without regard to conflict-of-law principles.
            </p>
            <p className={styles.paragraph}>
              Any disputes shall be resolved exclusively in courts located within Georgia, unless otherwise agreed in writing.
            </p>

            <h2 className={styles.heading2}>13. Severability</h2>
            <p className={styles.paragraph}>
              If any provision of these Terms is found unenforceable, the remaining provisions shall remain in full force and effect.
            </p>

            <h2 className={styles.heading2}>14. Contact Information</h2>
            <p className={styles.paragraph}>
              For questions regarding these Terms, please contact:<br />
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

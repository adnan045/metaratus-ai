import styles from '../privacy-policy/PrivacyPolicy.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function DataUsageAndAiSafety() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>Data Usage & AI Safety Statement</h1>
          <p className={styles.effectiveDate}>Effective Date: January 1, 2026<br/>Last Updated: </p>

          <div className={styles.section}>
            <p className={styles.paragraph}>
              Metaratus® (“Metaratus,” “we,” “our,” or “us”) is committed to the responsible use of data and artificial intelligence. This Data Usage & AI Safety Statement (“Statement”) explains how data is used within AI-assisted contexts and outlines the safeguards we apply to ensure that artificial intelligence remains an analytical instrument rather than an autonomous authority.
            </p>
            <p className={styles.paragraph}>
              This Statement applies to <a href="https://metaratus.ai" className={styles.link}>https://metaratus.ai</a> (the “Website”) and any conceptual demonstrations, analytical examples, or AI-assisted materials referenced therein.
            </p>

            <h2 className={styles.heading2}>1. Guiding Principle: Human-Centered Responsibility</h2>
            <p className={styles.paragraph}>
              Metaratus® adheres to a Humanocentric™ approach to artificial intelligence. This means:
            </p>
            <ul className={styles.list}>
              <li>AI is used to augment human analysis, not replace human judgment</li>
              <li>Responsibility, accountability, and decision authority remain with humans</li>
              <li>No AI system operated or referenced by Metaratus® is permitted to act as a final decision-maker in matters that carry legal, ethical, financial, or strategic consequence</li>
              <li>AI is treated as an instrument of insight, not an arbiter of truth.</li>
            </ul>

            <h2 className={styles.heading2}>2. Data Usage Philosophy</h2>
            <p className={styles.paragraph}>
              Data used or referenced in AI-assisted contexts is handled in accordance with the following principles:
            </p>
            <ul className={styles.list}>
              <li>Purpose Limitation: Data is used only for clearly defined analytical, educational, or operational purposes</li>
              <li>Data Minimization: Only data reasonably necessary for the stated purpose is used</li>
              <li>Context Preservation: Data is interpreted within its appropriate historical, organizational, and analytical context</li>
              <li>Human Oversight: All meaningful interpretation remains subject to human review</li>
            </ul>
            <p className={styles.paragraph}>
              Metaratus® does not use AI to infer intent, morality, or individual character.
            </p>

            <h2 className={styles.heading2}>3. Types of Data Involved</h2>
            <p className={styles.paragraph}>
              Depending on the context, AI-assisted analysis may involve:
            </p>
            <ul className={styles.list}>
              <li>Publicly available information</li>
              <li>High-level operational or conceptual data</li>
              <li>Aggregated or anonymized datasets</li>
              <li>Hypothetical or illustrative examples</li>
            </ul>
            <p className={styles.paragraph}>
              Metaratus® does not knowingly process sensitive personal data for AI-driven decision-making purposes through the Website.
            </p>

            <h2 className={styles.heading2}>4. AI Limitations and Non-Reliance</h2>
            <p className={styles.paragraph}>
              Artificial intelligence systems are inherently limited. Accordingly:
            </p>
            <ul className={styles.list}>
              <li>AI-generated outputs may be incomplete, inaccurate, or contextually misaligned</li>
              <li>Outputs are not guarantees, predictions, or recommendations</li>
              <li>AI does not possess understanding, intent, or awareness</li>
            </ul>
            <p className={styles.paragraph}>
              Users must not rely on AI-assisted materials as a substitute for independent judgment, professional advice, or due diligence.
            </p>

            <h2 className={styles.heading2}>5. No Autonomous or High-Risk AI Use</h2>
            <p className={styles.paragraph}>
              Metaratus® does not deploy or endorse:
            </p>
            <ul className={styles.list}>
              <li>Fully autonomous decision-making systems</li>
              <li>AI systems that operate without human oversight</li>
              <li>AI used for behavioral manipulation, surveillance, or profiling</li>
              <li>AI systems intended to replace human ethical judgment</li>
            </ul>
            <p className={styles.paragraph}>
              Where AI is used, it is constrained by design and governance.
            </p>

            <h2 className={styles.heading2}>6. Model Training and User Data</h2>
            <p className={styles.paragraph}>
              Metaratus® does not use personal data collected through the Website to train proprietary or third-party AI models unless expressly disclosed and lawfully permitted.
            </p>
            <p className={styles.paragraph}>
              Where third-party AI tools or platforms are referenced, their data handling practices are governed by their respective policies.
            </p>

            <h2 className={styles.heading2}>7. Bias Awareness and Risk Mitigation</h2>
            <p className={styles.paragraph}>
              Metaratus® acknowledges that AI systems may reflect biases present in data or underlying models. To mitigate this risk:
            </p>
            <ul className={styles.list}>
              <li>AI outputs are treated as provisional, not authoritative</li>
              <li>Human review is required for interpretation and application</li>
              <li>Analytical methods emphasize structure, causality, and constraint over pattern-only inference</li>
            </ul>
            <p className={styles.paragraph}>
              Prisma™ exists, in part, to guard against reductive or misleading conclusions.
            </p>

            <h2 className={styles.heading2}>8. Security and Integrity</h2>
            <p className={styles.paragraph}>
              Reasonable safeguards are applied to protect data integrity and prevent unauthorized access. However, no system is entirely immune to risk. Users acknowledge that AI-assisted environments involve inherent technical and informational limitations.
            </p>

            <h2 className={styles.heading2}>9. Regulatory and Ethical Alignment</h2>
            <p className={styles.paragraph}>
              Metaratus® designs its AI posture to be consistent with:
            </p>
            <ul className={styles.list}>
              <li>Emerging AI governance principles</li>
              <li>Data protection regulations (including GDPR and CCPA/CPRA)</li>
              <li>Institutional expectations around accountability and transparency</li>
            </ul>
            <p className={styles.paragraph}>
              This Statement may evolve as regulatory frameworks and best practices mature.
            </p>

            <h2 className={styles.heading2}>10. No Waiver of Human Accountability</h2>
            <p className={styles.paragraph}>
              Nothing in this Statement, nor any AI-assisted material, shall be construed as transferring responsibility from human actors to automated systems.
            </p>
            <p className={styles.paragraph}>
              Decisions informed by AI remain human decisions, with all attendant responsibilities.
            </p>

            <h2 className={styles.heading2}>11. Changes to This Statement</h2>
            <p className={styles.paragraph}>
              Metaratus® reserves the right to update this Statement at any time. Updates will be effective upon posting. Continued use of the Website constitutes acceptance of the revised Statement.
            </p>

            <h2 className={styles.heading2}>12. Contact Information</h2>
            <p className={styles.paragraph}>
              For questions regarding data usage or AI safety practices, please contact:<br />
              <strong>Metaratus®</strong><br />
              📧 <a href="mailto:info@metaratus.ai" className={styles.link}>info@metaratus.ai</a><br />
              🌐 <a href="https://metaratus.ai" className={styles.link}>https://metaratus.ai</a>
            </p>
            
            <p className={styles.paragraph} style={{ marginTop: '3rem', fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
              Metaratus® maintains that intelligence without judgment is not wisdom, and automation without responsibility is not progress. This Statement exists to ensure that analytical power advances human understanding rather than obscuring it.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

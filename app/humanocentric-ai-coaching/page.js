"use client";

import PremiumStyles from '../../components/ModernPremium.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

export default function HumanocentricAI() {

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className={PremiumStyles.container}>
      <Header />

      <main className={PremiumStyles.mainSection}>

        {/* HERO */}
        <section className={PremiumStyles.hero}>
          <motion.div {...fadeInUp}>
            <h1 className={PremiumStyles.title}>
              Humanocentric™ AI Coaching
            </h1>

            <p className={PremiumStyles.tagline}>
              One-on-one AI coaching for professionals and organizations designed to strengthen AI fluency through prompt structuring, scenario analysis, tool selection, analytical reasoning, and responsible AI use.
            </p>

            <div style={{ marginTop: "2rem" }}>
              <h2 style={{ fontSize: "2rem", fontWeight: "600" }}>
                $350 per month
              </h2>
              <p style={{ opacity: 0.7 }}>
                Includes one structured coaching session per month
              </p>
            </div>

            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button className={PremiumStyles.primaryButton}>
                Book AI Coaching Session
              </button>
              <button className={PremiumStyles.secondaryButton}>
                Schedule Strategy Call
              </button>
            </div>
          </motion.div>
        </section>

        {/* CONTENT */}
        <div className={PremiumStyles.contentWrapper}>

          {/* WHAT INCLUDED */}
          <section className={PremiumStyles.section}>
            <h2 className={PremiumStyles.heading2}>
              What this service includes
            </h2>

            <p className={PremiumStyles.paragraph}>
              Prompt Structuring: Refined guidance on prompt structuring and underlying AI logic.
            </p>
            <p className={PremiumStyles.paragraph}>
              Scenario Analysis: Structured analysis of scenarios, variables, and possible response pathways.
            </p>
            <p className={PremiumStyles.paragraph}>
              Tool Selection: Practical guidance on selecting appropriate AI tools for specific professional and operational needs.
            </p>
            <p className={PremiumStyles.paragraph}>
              Analytical Boundaries: Greater clarity regarding the strengths, limitations, and proper interpretive boundaries of AI-generated output.
            </p>
            <p className={PremiumStyles.paragraph}>
              Responsible AI Use: Coaching on responsible, disciplined, and professionally appropriate use of artificial intelligence.
            </p>
            <p className={PremiumStyles.paragraph}>
              Structured Session Format: One structured coaching session per month under the Humanocentric™ coaching program.
            </p>
          </section>

          {/* WHY THIS MATTERS */}
          <section className={PremiumStyles.section}>
            <h2 className={PremiumStyles.heading2}>
              Why this matters
            </h2>

            <p className={PremiumStyles.paragraph}>
              Artificial intelligence is rapidly emerging to the forefront of workplace adoption and should, therefore, be understood as a practical instrument for enhancing productivity, not as a novelty...
            </p>

            <p className={PremiumStyles.paragraph}>
              Hence, the Humanocentric™ AI Coaching program, powered by Metaratus™, is designed to enable professionals...
            </p>

            <p className={PremiumStyles.paragraph}>
              Our objective is to refine, support, and extend human judgment...
            </p>
          </section>

          {/* WHO */}
          <section className={PremiumStyles.section}>
            <h2 className={PremiumStyles.heading2}>
              Who this service is for
            </h2>

            <p className={PremiumStyles.paragraph}>
              Professionals, founders, executives, and organizations seeking disciplined, method-driven AI coaching.
            </p>
          </section>

          {/* CTA */}
          <section className={PremiumStyles.section}>
            <h2 className={PremiumStyles.heading2}>
              How to begin
            </h2>

            <p className={PremiumStyles.paragraph}>
              Book an AI coaching session to engage the Humanocentric™ coaching service.
            </p>

            <button className={PremiumStyles.primaryButton}>
              Book AI Coaching Session
            </button>
          </section>

        </div>

      </main>

      <Footer />
    </div>
  );
}
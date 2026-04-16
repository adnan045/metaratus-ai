"use client";

import PremiumStyles from '../../components/ModernPremium.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Pricing() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className={PremiumStyles.container}>
      <Header />
      
      <main className={PremiumStyles.mainSection}>
        {/* Hero Section */}
        <header className={PremiumStyles.hero}>
          <motion.div 
            className={PremiumStyles.heroContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className={PremiumStyles.subtitle}>Metaratus® Pricing</span>
            <h1 className={PremiumStyles.title}>Humanocentric™ Engagement Models</h1>
            <p className={PremiumStyles.tagline}>
              A progressive ladder of engagement representing distinct levels of methodological alignment, analytical depth, and strategic involvement.
            </p>
          </motion.div>
          
          <motion.div 
            className={PremiumStyles.imageWrapper} 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <Image 
              src="/assets/Flux_Images/Flux_7.avif" 
              alt="Engagement Tiers" 
              fill
              className={PremiumStyles.heroImage}
              style={{ objectFit: 'contain' }}
              priority
            />
            <div className={PremiumStyles.imageOverlay} />
          </motion.div>
        </header>

        <div className={PremiumStyles.contentWrapper} style={{ marginTop: '6rem' }}>
          <motion.p className={PremiumStyles.effectiveDate} {...fadeInUp}>
            Structure. Scope. Responsibility.
          </motion.p>

          <div className={PremiumStyles.section}>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Metaratus™ offerings are structured as a progressive ladder of engagement, not as isolated software subscriptions or bundled services. Each tier represents a distinct level of methodological alignment, analytical depth, and operational or strategic involvement within the Humanocentric™ AI framework.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Access to the Metaratus™ AI platform is provided as part of each engagement. <strong>Pricing reflects scope, responsibility, and depth of involvement.</strong>
            </motion.p>

            {/* Pricing Tiers */}
            <motion.div className={PremiumStyles.section} style={{ padding: '3rem', marginTop: '4rem' }} {...fadeInUp}>
              <h2 className={PremiumStyles.heading2}>Humanocentric™ Foundation</h2>
              <p className={PremiumStyles.paragraph} style={{ fontStyle: 'italic', opacity: 0.8 }}>
                Foundational Alignment — $350 / month
              </p>
              <p className={PremiumStyles.paragraph}>
                This tier establishes the analytical grounding required to work effectively with AI within the Metaratus™ methodology. It functions as a standalone engagement for individuals or organizations seeking disciplined, method-driven AI use without applied or operational involvement.
              </p>
              <p className={PremiumStyles.paragraph}>
                <strong>Includes:</strong>
              </p>
              <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
                <motion.li variants={fadeInUp}>Access to Metaratus.ai (white-labeled AI SaaS platform)</motion.li>
                <motion.li variants={fadeInUp}>One structured hour per month of Humanocentric™ AI coaching</motion.li>
                <motion.li variants={fadeInUp}>
                  Instruction in:
                  <ul style={{ listStyleType: 'circle', marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>AI logic and prompt structuring</li>
                    <li>variable framing and scenario exploration</li>
                    <li>tool selection and analytical boundaries</li>
                  </ul>
                </motion.li>
                <motion.li variants={fadeInUp}>Introduction to Humanocentric™ principles and Prisma™ micro-analysis</motion.li>
              </motion.ul>
              <p className={PremiumStyles.paragraph}>
                <strong>Excludes:</strong> Execution or deliverables, Ongoing support or troubleshooting, Operational ownership.
              </p>
              <p className={PremiumStyles.paragraph}>
                <strong>Intended for:</strong> Professionals, founders, and executives seeking responsible AI use grounded in method.
              </p>
            </motion.div>

            <motion.div className={PremiumStyles.section} style={{ padding: '3rem', marginTop: '2rem' }} {...fadeInUp}>
              <h2 className={PremiumStyles.heading2}>Humanocentric™ Ascension</h2>
              <p className={PremiumStyles.paragraph} style={{ fontStyle: 'italic', opacity: 0.8 }}>
                Applied AI in Professional Workflows — $1,250 / month
              </p>
              <p className={PremiumStyles.paragraph}>
                This tier applies Humanocentric™ AI principles directly to professional workflows. Engagement shifts from foundational alignment to structured application within defined contexts.
              </p>
              <p className={PremiumStyles.paragraph}>
                <strong>Includes:</strong>
              </p>
              <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
                <motion.li variants={fadeInUp}>Platform access and foundational alignment</motion.li>
                <motion.li variants={fadeInUp}>Three to four hours per month of structured coaching and applied guidance</motion.li>
                <motion.li variants={fadeInUp}>AI-assisted workflow design for: writing and research, analysis and planning, reporting and documentation</motion.li>
                <motion.li variants={fadeInUp}>Domain-specific prompt systems</motion.li>
                <motion.li variants={fadeInUp}>Limited execution through AI-enabled processes (bounded by scope)</motion.li>
              </motion.ul>
              <p className={PremiumStyles.paragraph}>
                <strong>Intended for:</strong> Individuals or lean teams seeking AI augmentation within active professional work.
              </p>
            </motion.div>

            <motion.div className={PremiumStyles.section} style={{ padding: '3rem', marginTop: '2rem' }} {...fadeInUp}>
              <h2 className={PremiumStyles.heading2}>Humanocentric™ Continuum</h2>
              <p className={PremiumStyles.paragraph} style={{ fontStyle: 'italic', opacity: 0.8 }}>
                Systems, Scale, and Coordination — $3,500 – $5,000 / month (scope dependent)
              </p>
              <p className={PremiumStyles.paragraph}>
                This tier integrates Humanocentric™ AI into organizational systems and coordinated operations. Engagement extends beyond individual workflows to structured execution and systems alignment.
              </p>
              <p className={PremiumStyles.paragraph}>
                <strong>Includes:</strong>
              </p>
              <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
                <motion.li variants={fadeInUp}>Platform access and foundational alignment</motion.li>
                <motion.li variants={fadeInUp}>Active Digital Project Management</motion.li>
                <motion.li variants={fadeInUp}>AI-integrated workflows across teams</motion.li>
                <motion.li variants={fadeInUp}>Managed IT services (remote / login-based)</motion.li>
                <motion.li variants={fadeInUp}>Executive Assistant services (AI + human hybrid)</motion.li>
                <motion.li variants={fadeInUp}>SEO, content, design, or research execution (bounded scope)</motion.li>
                <motion.li variants={fadeInUp}>Alignment with Metaratus™ computing and AI hardware where appropriate</motion.li>
              </motion.ul>
              <p className={PremiumStyles.paragraph}>
                <strong>Intended for:</strong> Organizations requiring operational coherence, coordination, and systems-level integration.
              </p>
            </motion.div>

            <motion.div className={PremiumStyles.section} style={{ padding: '3rem', marginTop: '2rem' }} {...fadeInUp}>
              <h2 className={PremiumStyles.heading2}>Humanocentric™ Imperium</h2>
              <p className={PremiumStyles.paragraph} style={{ fontStyle: 'italic', opacity: 0.8 }}>
                Decision Architecture & Strategic Command — $10,000+ / month (engagement-based pricing)
              </p>
              <p className={PremiumStyles.paragraph}>
                This tier operates at the level of decision architecture, where AI informs long-horizon judgment, governance considerations, and strategic direction.
              </p>
              <p className={PremiumStyles.paragraph}>
                <strong>Includes:</strong>
              </p>
              <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
                <motion.li variants={fadeInUp}>Platform access and foundational alignment</motion.li>
                <motion.li variants={fadeInUp}>Post-COVID, Strategic AI™ business planning</motion.li>
                <motion.li variants={fadeInUp}>Executive-level Humanocentric™ advisory</motion.li>
                <motion.li variants={fadeInUp}>Scenario modeling and sensitivity analysis</motion.li>
                <motion.li variants={fadeInUp}>Research-driven strategic reports and white papers</motion.li>
                <motion.li variants={fadeInUp}>Oversight of AI, IT, and digital strategy</motion.li>
                <motion.li variants={fadeInUp}>Institutional and governance analysis</motion.li>
              </motion.ul>
              <p className={PremiumStyles.paragraph}>
                <strong>Intended for:</strong> Executive leadership, boards, and organizations operating in complex, high-impact decision environments.
              </p>
            </motion.div>

            <motion.div className={PremiumStyles.section} style={{ padding: '3rem', marginTop: '2rem' }} {...fadeInUp}>
              <h2 className={PremiumStyles.heading2}>Humanocentric™ Apex</h2>
              <p className={PremiumStyles.paragraph} style={{ fontStyle: 'italic', opacity: 0.8 }}>
                Custom & Institutional Engagements — Pricing by discussion
              </p>
              <p className={PremiumStyles.paragraph}>
                This tier is reserved for non-standard, high-complexity engagements that extend beyond predefined commercial scopes.
              </p>
              <p className={PremiumStyles.paragraph}>
                <strong>Engagements may include:</strong>
              </p>
              <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
                <motion.li variants={fadeInUp}>Ne Plus Ultra Institutional Framework™ applications</motion.li>
                <motion.li variants={fadeInUp}>Think Tank research collaborations</motion.li>
                <motion.li variants={fadeInUp}>Geopolitical, economic, or societal analysis</motion.li>
                <motion.li variants={fadeInUp}>Cross-institutional systems design</motion.li>
                <motion.li variants={fadeInUp}>Long-horizon and civilization-scale inquiry</motion.li>
              </motion.ul>
            </motion.div>

            <motion.div className={PremiumStyles.section} style={{ marginTop: '5rem' }} {...fadeInUp}>
              <h2 className={PremiumStyles.heading2}>Engagement Structure</h2>
              <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
                <motion.li variants={fadeInUp}>All engagements are capacity-limited</motion.li>
                <motion.li variants={fadeInUp}>Platform access is included at every tier</motion.li>
                <motion.li variants={fadeInUp}>Progression between tiers is method- and scope-driven</motion.li>
                <motion.li variants={fadeInUp}>AI is applied as an analytical instrument, not a substitute for judgment</motion.li>
                <motion.li variants={fadeInUp}>Methodological alignment precedes execution in every engagement</motion.li>
              </motion.ul>
            </motion.div>

            <motion.div className={PremiumStyles.section} style={{ marginTop: '3rem' }} {...fadeInUp}>
              <h2 className={PremiumStyles.heading2}>Getting Started</h2>
              <p className={PremiumStyles.paragraph}>
                Engagement may begin with Humanocentric™ Foundation or through direct discussion of a higher-tier scope where appropriate.
              </p>
            </motion.div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

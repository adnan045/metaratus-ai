"use client";

import PremiumStyles from '../../components/ModernPremium.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Prisma() {
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
            <span className={PremiumStyles.subtitle}>Metaratus® Prisma AI™</span>
            <h1 className={PremiumStyles.title}>The Humanocentric™ Command Layer</h1>
            <p className={PremiumStyles.tagline}>
              Prisma AI™ is a logic-based command and control interface designed to manage complexity, evaluate tradeoffs, and enable deliberate action.
            </p>
          </motion.div>
          
          <motion.div 
            className={PremiumStyles.imageWrapper} 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <Image 
              src="/assets/Valence_Images/Valence_1.jpeg" 
              alt="Prisma AI Conceptual Visual" 
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
            Structure Before Automation. Logic Before Action.
          </motion.p>

          <div className={PremiumStyles.section}>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Prisma™ is not a chatbot. It is not an oracle. It is a logic-based command and control interface designed for individuals and organizations that operate in environments of high volatility, consequence, and complexity.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              At Metaratus®, we believe the primary challenge of the AI era is not a lack of processing power, but a lack of structural clarity. Organisations do not fail because they lack data; they fail because they lack the method to interpret that data and evaluate its implications against their specific objectives and constraints.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Prisma™ provides the method.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Structure is the Strategy</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              The Meta-Model—Prisma™’s core architecture—enforces a disciplined approach to variable management. It transforms unstructured problems into structured systems, making the underlying logic of a situation visible.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              By isolating variables, defining constraints, and mapping dependencies, Prisma™ allows users to move beyond reactive decision-making. You are not simply “asking” an AI for an answer; you are building a logical model of your reality and using AI to test the edges of that model.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Logic Over Urgency</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              In high-stakes environments, urgency is often the enemy of clarity. Prisma™ is engineered to slow down the rush toward action by forcing a confrontation with structure.
            </motion.p>
            <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
              <motion.li variants={fadeInUp}><strong>Variable Mapping:</strong> Identify the hidden drivers of cost, risk, and value.</motion.li>
              <motion.li variants={fadeInUp}><strong>Constraint Modeling:</strong> Recognize the boundaries of what is possible versus what is desired.</motion.li>
              <motion.li variants={fadeInUp}><strong>Tradeoff Analysis:</strong> Quantify the cost of one objective in terms of another.</motion.li>
            </motion.ul>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Humancentric™ Command and Control</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Prisma™ adheres to the Metaratus™ core principle: <strong>Responsibility Cannot Be Automated™.</strong>
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              The system functions as a cognitive exoskeleton. It provides the analytical frame and the computational support to process vast amounts of complex data, but the direction, the judgment, and the ultimate decision belong to the human operator.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              <strong>Prisma™ is designed to enable:</strong>
            </motion.p>
            <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
              <motion.li variants={fadeInUp}>Deliberate action over reactive response.</motion.li>
              <motion.li variants={fadeInUp}>Institutional memory that survives personnel changes.</motion.li>
              <motion.li variants={fadeInUp}>Clarity across complex, cross-functional teams.</motion.li>
            </motion.ul>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Built for Institutional Leadership</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Prisma™ is available as a core component of the Metaratus™ Platform. It is currently deployed across consulting engagements, project management offices, and strategic planning departments where the cost of being &ldquo;fast but wrong&rdquo; is unacceptable.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Whether you are managing a digital transformation, a global supply chain, or a complex business realignment, Prisma™ provides the command layer you need to navigate complexity with discipline.
            </motion.p>

            <motion.div style={{ marginTop: '5rem', textAlign: 'center' }} {...fadeInUp}>
              <Link href="/pricing" className={PremiumStyles.link} style={{ fontSize: '1.2rem' }}>
                Explore Platform Access & Prisma™ Deployment
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

"use client";

import PremiumStyles from '../../components/ModernPremium.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Research() {
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
            <span className={PremiumStyles.subtitle}>Metaratus® Research</span>
            <h1 className={PremiumStyles.title}>Using Technology to Improve the Human Condition™</h1>
            <p className={PremiumStyles.tagline}>
              Home to the Ne Plus Ultra Think Tank™, an interdisciplinary research collective dedicated to addressing the most complex questions of the AI era.
            </p>
          </motion.div>
          
          <motion.div 
            className={PremiumStyles.imageWrapper} 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <Image 
              src="/assets/Flux_Images/Flux_5.avif" 
              alt="Research Inquiries" 
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
            Ne Plus Ultra Think Tank™
          </motion.p>

          <div className={PremiumStyles.section}>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              At the center of our research activity is the Ne Plus Ultra Think Tank™—an interdisciplinary research collective dedicated to addressing some of the most complex and consequential questions facing humanity.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              The Think Tank operates under a unifying research orientation:<br />
              <strong>Using Technology to Improve the Human Condition™</strong>
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              This orientation functions as a constraint as much as a mission. Questions are examined through the lens of how technological systems—particularly AI—shape outcomes for humankind as a whole, rather than for isolated markets, institutions, or short-term interests.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Humanocentric™ AI as a Research Orientation</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              All research conducted under the Ne Plus Ultra Think Tank™ is guided by Humanocentric™ AI principles.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Within this orientation:
            </motion.p>
            <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
              <motion.li variants={fadeInUp}>AI functions as an analytical instrument, not an epistemic authority</motion.li>
              <motion.li variants={fadeInUp}>human interpretation, ethical reasoning, and contextual judgment remain central</motion.li>
              <motion.li variants={fadeInUp}>AI is used to expand analytical range, not to replace reasoning</motion.li>
              <motion.li variants={fadeInUp}>research outcomes are evaluated for human and institutional impact, not technical novelty alone</motion.li>
            </motion.ul>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              This approach allows AI to support large-scale pattern analysis, scenario exploration, and conceptual testing, while responsibility for meaning and interpretation remains human.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Areas of Inquiry</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Research topics evolve organically, but frequently intersect with areas such as:
            </motion.p>
            <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
              <motion.li variants={fadeInUp}>geopolitical systems and technological power dynamics</motion.li>
              <motion.li variants={fadeInUp}>economic structures, systemic risk, and inequality</motion.li>
              <motion.li variants={fadeInUp}>sociological and cultural transformation in the AI era</motion.li>
              <motion.li variants={fadeInUp}>governance, institutions, and legitimacy under acceleration</motion.li>
              <motion.li variants={fadeInUp}>scientific and technological progress and its human implications</motion.li>
              <motion.li variants={fadeInUp}>long-term human flourishing in complex, automated systems</motion.li>
            </motion.ul>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Rather than isolating disciplines, we operate deliberately at their intersections.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>An Invitation to Collaborate</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              The Ne Plus Ultra Think Tank™ welcomes participation from individuals across a wide range of backgrounds, including:
            </motion.p>
            <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
              <motion.li variants={fadeInUp}>academic researchers and scholars</motion.li>
              <motion.li variants={fadeInUp}>industry practitioners and technologists</motion.li>
              <motion.li variants={fadeInUp}>policy thinkers and institutional analysts</motion.li>
              <motion.li variants={fadeInUp}>economists, sociologists, and systems theorists</motion.li>
              <motion.li variants={fadeInUp}>creatives, designers, and interdisciplinary researchers</motion.li>
            </motion.ul>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              We value intellectual rigor, curiosity, and good-faith inquiry over credentialism. Participants are expected to engage thoughtfully, respect methodological discipline, and remain open to perspectives beyond their own domain.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Modes of Participation</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Participation in the Think Tank may include:
            </motion.p>
            <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
              <motion.li variants={fadeInUp}>collaborative research initiatives</motion.li>
              <motion.li variants={fadeInUp}>long-form analytical writing and publications</motion.li>
              <motion.li variants={fadeInUp}>structured discussions and working groups</motion.li>
              <motion.li variants={fadeInUp}>applied research bridging theory and practice</motion.li>
              <motion.li variants={fadeInUp}>AI-assisted scenario modeling and exploratory analysis</motion.li>
            </motion.ul>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Engagement formats evolve based on the nature of the inquiry and the participants involved.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Research With Purpose</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Our research efforts are not oriented toward abstraction alone, nor toward immediate commercialization. They are oriented toward understanding first, with application following clarity.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              In an era where technological power is advancing faster than collective comprehension, disciplined research remains one of the few tools capable of bridging that gap.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              The questions are complex.<br />
              Their consequences are human.<br />
              <strong>Research, practiced deliberately, remains essential.</strong>
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Join the Inquiry</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Individuals interested in participating in the Ne Plus Ultra Think Tank™, collaborating on research, or contributing to ongoing inquiry are encouraged to reach out.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Research at Metaratus® is an open invitation to think seriously, engage responsibly, and apply technology in service of the human condition.
            </motion.p>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

"use client";

import PremiumStyles from '../../components/ModernPremium.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutVision() {
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
            <span className={PremiumStyles.subtitle}>About Metaratus®</span>
            <h1 className={PremiumStyles.title}>Method-Driven Strategy</h1>
            <p className={PremiumStyles.tagline}>
              Headquartered in Atlanta, Georgia. We help organizations interpret complexity, evaluate tradeoffs, and act with clarity.
            </p>
          </motion.div>
          
          <motion.div 
            className={PremiumStyles.imageWrapper} 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <Image 
              src="/assets/Flux_Images/Flux_6.avif" 
              alt="Metaratus Vision" 
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
            Structure Before Scale. Understanding Before Action.
          </motion.p>

          <div className={PremiumStyles.section}>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Metaratus® is a Digital Project Management and business management consulting firm headquartered in Atlanta, Georgia. We operate at the intersection of strategy, systems thinking, and applied artificial intelligence, helping organizations navigate complexity with discipline rather than urgency.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Our work is grounded in a simple but often overlooked insight: modern organizations do not struggle because they lack data, tools, or intelligence. They struggle because they lack method—a structured way to interpret complexity, evaluate tradeoffs, and act with clarity in dynamic environments.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Our Orientation</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              We approach every engagement as a problem of structure before execution. Rather than beginning with solutions, technologies, or automation, we begin by making the underlying system visible—its variables, constraints, incentives, and points of leverage.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              This orientation led to the development of our proprietary analytical methodologies, including the Prisma™ Framework, Prisma AI™, and the broader Ne Plus Ultra Institutional Framework™. Together, these methods provide a disciplined way to reason about organizational, technological, and strategic complexity without collapsing it into oversimplified narratives.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>A Humanocentric™ Approach to Artificial Intelligence</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              At the core of Metaratus® is a Humanocentric™ approach to artificial intelligence.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              We treat AI as an analytical instrument—one that expands situational awareness, accelerates pattern recognition, and enables rigorous scenario exploration. AI is not positioned as an authority, nor as a substitute for judgment, responsibility, or accountability.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Humanocentric™ principles place decision-making firmly in the hands of experienced professionals who evaluate questions from an intersubjective perspective. Within this framework, AI functions as a force multiplier for insight, allowing humans to conduct thought experiments, sensitivity analyses, and exploratory modeling while retaining full agency over interpretation and action.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>From Frameworks to Execution</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Our consulting work spans the full continuum from analytical grounding to applied execution. We support organizations through:
            </motion.p>
            <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
              <motion.li variants={fadeInUp}>Post-COVID, Strategic AI™ planning</motion.li>
              <motion.li variants={fadeInUp}>Humanocentric™ AI training and coaching</motion.li>
              <motion.li variants={fadeInUp}>Digital Project Management</motion.li>
              <motion.li variants={fadeInUp}>Managed IT and remote support services</motion.li>
              <motion.li variants={fadeInUp}>Research, analysis, and technical writing</motion.li>
              <motion.li variants={fadeInUp}>Systems design and workflow integration</motion.li>
            </motion.ul>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              In parallel, we operate as a diversified technology organization, designing and manufacturing Metaratus™-branded computing platforms and Innovatus™ AI glasses. These products are developed to support secure, adaptable, and human-centered AI use in professional and enterprise environments. Hardware is treated as a complementary capability—aligned with method, not divorced from it.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Research and Long-Horizon Inquiry</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Metaratus® is also home to the Ne Plus Ultra Think Tank™, a multidisciplinary research initiative focused on applying Humanocentric™ AI to complex global questions. Our research spans geopolitical, economic, sociological, cultural, and scientific domains, with a unifying concern for how technological systems shape the human condition.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              We engage both academics and industry practitioners in structured inquiry aimed at advancing understanding rather than producing immediate conclusions. Research, in this context, is not a marketing exercise—it is a disciplined process of sense-making at scale.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Our Perspective</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              We believe clarity is a discipline. It is achieved through structure, historical awareness, and respect for human agency—not through speed alone.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Technology will continue to evolve. Tools will grow more powerful. Systems will become more interconnected. Yet responsibility, judgment, and meaning remain irreducibly human concerns.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              <strong>That is the belief that informs how we consult, how we build, how we train, and how we design AI-enabled systems. At Metaratus®, we work to ensure that intelligence is applied coherently, deliberately, and in service of human understanding before execution.</strong>
            </motion.p>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

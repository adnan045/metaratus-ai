"use client";

import PremiumStyles from '../../components/ModernPremium.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Consulting() {
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
            <span className={PremiumStyles.subtitle}>Metaratus® Consulting</span>
            <h1 className={PremiumStyles.title}>Structure Before Strategy</h1>
            <p className={PremiumStyles.tagline}>
              Method-driven business management consulting for environments shaped by complexity, interdependence, and rapid technological change.
            </p>
          </motion.div>
          
          <motion.div 
            className={PremiumStyles.imageWrapper} 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <Image 
              src="/assets/All_3_Metaratus_AI_Glasses.jpg" 
              alt="Consulting Perspective" 
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
            Method-Driven Business Management Consulting for Complex Environments
          </motion.p>

          <div className={PremiumStyles.section}>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              At Metaratus®, consulting is approached as a disciplined analytical practice—not as generalized advisory opinion or trend-driven recommendation. We operate as a business management consulting firm focused on helping organizations navigate complexity shaped by post-COVID disruption, accelerated AI adoption, and increasingly interdependent institutional systems.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Our consulting work is grounded in a simple premise:<br />
              <strong>clarity precedes effective action.</strong>
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Before strategy is articulated or systems are deployed, the structure of the organization and its environment must be understood.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Consulting Begins with Structure, Not Conclusions</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Many consulting engagements struggle because recommendations are offered before systems are fully examined. Tools are introduced before constraints are mapped. Execution is prioritized before coherence is established.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              <strong>Our approach reverses that sequence.</strong>
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              We begin by examining how economic, operational, technological, and human variables interact within the organization’s real conditions. Strategy emerges only after those relationships are made visible. Execution follows deliberate sequencing rather than urgency.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Post-COVID, Strategic AI™ Consulting</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              The post-COVID environment has altered organizational dynamics in lasting ways:
            </motion.p>
            <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
              <motion.li variants={fadeInUp}>supply chains operate with reduced predictability</motion.li>
              <motion.li variants={fadeInUp}>labor, communication, and client expectations have shifted</motion.li>
              <motion.li variants={fadeInUp}>digital acceleration has outpaced governance and institutional readiness</motion.li>
              <motion.li variants={fadeInUp}>AI adoption is often reactive rather than intentional</motion.li>
            </motion.ul>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Post-COVID, Strategic AI™ consulting recognizes that traditional linear planning models no longer reflect these realities. Strategy must account for interacting forces simultaneously—economic pressure, technological capability, institutional constraint, and human capacity.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Within this context, we support organizations in integrating AI deliberately, treating it as a strategic capability that expands understanding and analytical range rather than a substitute for leadership or accountability.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Humanocentric™ AI as a Consulting Principle</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              A Humanocentric™ approach to artificial intelligence underpins all of our consulting work.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Within this approach:
            </motion.p>
            <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
              <motion.li variants={fadeInUp}>AI functions as an analytical instrument</motion.li>
              <motion.li variants={fadeInUp}>interpretation, prioritization, and judgment remain human</motion.li>
              <motion.li variants={fadeInUp}>automation is evaluated relative to governance, oversight, and intent</motion.li>
            </motion.ul>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              We do not frame AI as autonomous decision-making, nor as a replacement for institutional responsibility. Instead, we apply AI to support pattern recognition, scenario exploration, and variable analysis—while keeping authority anchored with decision-makers.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              This principle governs how we advise on AI strategy, automation, and digital systems.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Prisma™: Analytical Clarity Within Consulting Engagements</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Our consulting practice is analytically grounded in the Prisma™ Framework, Metaratus®’ proprietary method for refracting complexity into intelligible structures.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Prisma™ examines systems through interacting variables—economic, operational, behavioral, technological, and strategic—rather than isolated metrics or linear narratives. Within consulting engagements, this allows us to:
            </motion.p>
            <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
              <motion.li variants={fadeInUp}>identify causal drivers rather than surface symptoms</motion.li>
              <motion.li variants={fadeInUp}>distinguish signal from noise</motion.li>
              <motion.li variants={fadeInUp}>understand constraints before optimization</motion.li>
              <motion.li variants={fadeInUp}>sequence decisions with greater deliberation</motion.li>
            </motion.ul>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Strategy is not imposed through Prisma™.<br />
              It becomes visible through structure.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>The Ne Plus Ultra Institutional Framework™</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Where Prisma™ provides analytical clarity, the Ne Plus Ultra Institutional Framework™ provides institutional perspective.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              This framework evaluates how strategies interact across the practical dimensions of an organization, reflecting the way institutions actually function rather than how they are modeled in isolation. It accounts for alignment across:
            </motion.p>
            <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
              <motion.li variants={fadeInUp}>Digital and Cyber Solutions</motion.li>
              <motion.li variants={fadeInUp}>Strategic Business Services</motion.li>
              <motion.li variants={fadeInUp}>Marketing and Communication</motion.li>
              <motion.li variants={fadeInUp}>Client Engagement and Support Infrastructure</motion.li>
            </motion.ul>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Within consulting engagements, the Ne Plus Ultra Institutional Framework™ helps map how decisions propagate through governance structures, operational capacity, technical dependencies, communication flows, and client-facing execution.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              This institutional lens allows leadership teams to identify friction points, assess organizational readiness, and sequence initiatives in a manner consistent with existing capabilities and constraints—before committing resources or scaling execution.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>An Integrated Consulting Method</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Our consulting methodology is intentionally layered:
            </motion.p>
            <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
              <motion.li variants={fadeInUp}><strong>Post-COVID, Strategic AI™</strong> establishes environmental context</motion.li>
              <motion.li variants={fadeInUp}><strong>Humanocentric™ AI</strong> defines the role and limits of technology</motion.li>
              <motion.li variants={fadeInUp}><strong>Prisma™</strong> provides analytical structure and causal clarity</motion.li>
              <motion.li variants={fadeInUp}><strong>Ne Plus Ultra Institutional Framework™</strong> evaluates institutional coherence</motion.li>
            </motion.ul>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Together, these methods allow us to operate across strategy, systems, and execution without collapsing them into a single, opaque process.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>What Our Consulting Supports</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Each engagement is tailored, but our consulting commonly supports organizations in areas such as:
            </motion.p>
            <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
              <motion.li variants={fadeInUp}>strategic planning under uncertainty</motion.li>
              <motion.li variants={fadeInUp}>AI and automation strategy</motion.li>
              <motion.li variants={fadeInUp}>business model analysis and restructuring</motion.li>
              <motion.li variants={fadeInUp}>operational and decision-structure alignment</motion.li>
              <motion.li variants={fadeInUp}>governance-aware digital integration</motion.li>
              <motion.li variants={fadeInUp}>institutional complexity and risk evaluation</motion.li>
            </motion.ul>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Across all engagements, the objective remains consistent:<br />
              <strong>clarity before action, and understanding before scale.</strong>
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>A Deliberate Consulting Philosophy</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              We do not approach consulting as generalized advisory or trend interpretation. We approach it as a method-driven analytical discipline, grounded in structure, historical awareness, and institutional reality.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Technology evolves.<br />
              Systems grow more interconnected.<br />
              Responsibility, judgment, and meaning remain human concerns.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              That belief defines how Metaratus® consults, how we evaluate complexity, and how we support leaders operating in environments where clarity is no longer optional.
            </motion.p>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

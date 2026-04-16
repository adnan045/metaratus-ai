"use client";

import PremiumStyles from '../../components/ModernPremium.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Training() {
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
            <span className={PremiumStyles.subtitle}>Metaratus® Training</span>
            <h1 className={PremiumStyles.title}>Humanocentric™ AI Enablement</h1>
            <p className={PremiumStyles.tagline}>
              Teaching professionals how to think with AI, not merely how to use tools. Bridging the gap between computational power and human agency.
            </p>
          </motion.div>
          
          <motion.div 
            className={PremiumStyles.imageWrapper} 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <Image 
              src="/assets/Flux_Images/Flux_2.jpeg" 
              alt="Training and Enablement" 
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
            How We Teach Humans to Work With AI
          </motion.p>

          <div className={PremiumStyles.section}>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              A central component of Metaratus® training is teaching professionals how to think with AI, not merely how to use AI tools.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Effective AI usage does not begin with prompts—it begins with logic. We train participants in the logical processes that underlie effective prompt engineering, including how to frame problems, define constraints, articulate assumptions, and sequence inquiry. This allows AI systems to be engaged using language they can interpret with greater precision and consistency.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Over time, participants learn how to develop a shared syntax with AI tools—a working language that is refined through interaction. This syntax is not imposed; it is co-developed through disciplined use. As this shared language evolves, accuracy improves, ambiguity is reduced, and AI outputs become more reliably aligned with the user’s intent.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Humanocentric™ AI and the State of the Field</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              The field of artificial intelligence is still evolving. There is no settled doctrine, no final playbook, and no single authoritative model for how humans should integrate AI into their thinking processes.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              <strong>The “book on AI” is still being written.</strong>
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Metaratus® occupies this space deliberately. We originated the Humanocentric™ AI methodology to address a growing gap between expanding computational capability and diminishing human agency. Humanocentric™ AI draws from a wide range of disciplines—systems thinking, philosophy of mind, economics, organizational theory, cognitive science, and engineering—to form a coherent knowledge system for how humans can leverage AI without surrendering control of the thought process.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Within this methodology, AI is treated as an analytical instrument that supports exploration, not as a substitute for reasoning or judgment.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>AI as a Tool for Thought Experiments and Analysis</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              We train participants to use AI to conduct thought experiments, run scenario analyses, and perform sensitivity testing across complex problem spaces. This allows individuals and teams to explore how changes in assumptions, variables, or constraints alter outcomes—without prematurely committing to conclusions.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              AI becomes a way to expand analytical range, test ideas under alternative conditions, and surface implications that may not be immediately visible through linear reasoning alone. Interpretation and judgment remain human responsibilities throughout the process.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Advanced Applications Across Disciplines</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Our training extends well beyond general AI literacy. We teach participants how to apply AI across a broad range of advanced professional tasks, including:
            </motion.p>
            <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
              <motion.li variants={fadeInUp}>statistical analysis and data exploration</motion.li>
              <motion.li variants={fadeInUp}>advanced spreadsheet modeling and operations</motion.li>
              <motion.li variants={fadeInUp}>academic and technical research</motion.li>
              <motion.li variants={fadeInUp}>coding and programming languages</motion.li>
              <motion.li variants={fadeInUp}>graphic design and visual communication</motion.li>
              <motion.li variants={fadeInUp}>technical documentation and writing</motion.li>
            </motion.ul>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Participants learn not only how to execute these tasks, but how to frame them correctly, evaluate outputs critically, and integrate results into broader analytical or creative workflows.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>A Harmonized, Multi-Tool Approach</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              We do not train participants to rely on a single AI system. Instead, we teach how to work with multiple AI tools in a harmonized manner, selecting and combining capabilities based on the nature of the task.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              This approach allows individuals to operate at the upper bounds of their creative and analytical capacity, while reducing the burden of rote, technical work that often prevents strong ideas from being fully developed or expressed.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              <strong>AI is used to remove friction—not to replace creativity.</strong>
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Equilibrating Skill Gaps Without Losing Agency</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              A defining feature of our training is teaching participants how to use AI to equilibrate skill gaps.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Many professionals possess strong conceptual and qualitative understanding of problems, but lack technical aptitude—or inclination—in specific domains. Rather than forcing individuals to become experts in every technical discipline, we teach them how to:
            </motion.p>
            <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
              <motion.li variants={fadeInUp}>understand the logical structure of a problem</motion.li>
              <motion.li variants={fadeInUp}>define parameters and conditions clearly</motion.li>
              <motion.li variants={fadeInUp}>translate qualitative reasoning into structured inputs</motion.li>
              <motion.li variants={fadeInUp}>direct AI to perform technical execution</motion.li>
            </motion.ul>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              This approach allows individuals to focus on logic, interpretation, and decision-making, while AI handles the technical mechanics. Human agency is preserved because the human remains responsible for framing the problem and interpreting the results.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>The Objective of Training</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              The objective of Metaratus® training is not technical dependence. It is intellectual empowerment.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Participants leave with a clearer understanding of how to think with AI, how to communicate with it effectively, and how to integrate it into their professional practice without ceding control of reasoning, judgment, or responsibility.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              <strong>That is the core of our Humanocentric™ training philosophy.</strong>
            </motion.p>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

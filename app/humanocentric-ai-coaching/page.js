"use client";

import PremiumStyles from '../../components/ModernPremium.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HumanocentricAICoaching() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
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
            <span className={PremiumStyles.subtitle}>Humanocentric™ AI Coaching</span>
            <h1 className={PremiumStyles.title}>One-on-One AI Coaching</h1>
            <p className={PremiumStyles.tagline}>
              Professionals and organizations designed to strengthen AI fluency through prompt structuring, scenario analysis, tool selection, analytical reasoning, and responsible AI use.
            </p>
          </motion.div>
          
          <motion.div 
            className={PremiumStyles.imageWrapper} 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <Image 
              src="/assets/About Us Page Image Black background.png" 
              alt="Humanocentric AI Coaching" 
              fill
              className={PremiumStyles.heroImage}
              style={{ objectFit: 'contain' }}
              priority
            />
            <div className={PremiumStyles.imageOverlay} />
          </motion.div>
        </header>

        <div className={PremiumStyles.contentWrapper} style={{ marginTop: '4rem' }}>
          
          {/* Pricing Card */}
          <motion.div 
            className={PremiumStyles.section}
            style={{ textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '24px', padding: '2rem', marginBottom: '3rem' }}
            {...fadeInUp}
          >
            <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>$350 <span style={{ fontSize: '1rem', color: '#aaa' }}>per month</span></div>
            <p style={{ color: '#00c3ff', margin: '0.5rem 0 1.5rem' }}>Includes one structured coaching session per month</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/book-coaching" style={{ background: 'white', color: 'black', padding: '0.8rem 2rem', borderRadius: '40px', textDecoration: 'none', fontWeight: 'bold' }}>Book AI Coaching Session →</a>
              <a href="/contact" style={{ border: '1px solid white', padding: '0.8rem 2rem', borderRadius: '40px', textDecoration: 'none' }}>Schedule Strategy Call</a>
            </div>
          </motion.div>

          {/* What This Service Includes */}
          <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>What this service includes</motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { title: "Prompt Structuring", desc: "Refined guidance on prompt structuring and underlying AI logic." },
              { title: "Scenario Analysis", desc: "Structured analysis of scenarios, variables, and possible response pathways." },
              { title: "Tool Selection", desc: "Practical guidance on selecting appropriate AI tools for specific professional and operational needs." },
              { title: "Analytical Boundaries", desc: "Greater clarity regarding the strengths, limitations, and proper interpretive boundaries of AI-generated output." },
              { title: "Responsible AI Use", desc: "Coaching on responsible, disciplined, and professionally appropriate use of artificial intelligence." },
              { title: "Structured Session Format", desc: "One structured coaching session per month under the Humanocentric™ coaching program." }
            ].map((item, idx) => (
              <motion.div key={idx} className={PremiumStyles.paragraph} style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '16px' }} {...fadeInUp}>
                <h3 style={{ color: '#00c3ff', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Why This Matters */}
          <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Why this matters</motion.h2>
          <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
            Artificial intelligence is rapidly emerging to the forefront of workplace adoption and should, therefore, be understood as a practical instrument for enhancing productivity, not as a novelty. Experience teaches us that in economic reality, stronger business performance arises from the dynamic interplay of human effort combined with the intelligent deployment of capital, technology, and operational systems.
          </motion.p>
          <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
            Hence, the Humanocentric™ AI Coaching program, powered by Metaratus®, is designed to enable professionals to enhance their human capital by gaining clearer insights into how AI tools can be used to augment their professional strengths while simultaneously reducing the deleterious impact of their weak points, in applied terms.
          </motion.p>
          <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
            Our objective is to refine, support, and extend human judgment and decision-making velocity in corporate environments through the disciplined use of artificial intelligence in workflow processes and daily operations.
          </motion.p>

          {/* Who This Service Is For */}
          <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Who this service is for</motion.h2>
          <motion.div className={PremiumStyles.paragraph} style={{ backgroundColor: 'rgba(0, 195, 255, 0.05)', borderLeft: '4px solid #00c3ff', padding: '2rem', borderRadius: '16px' }} {...fadeInUp}>
            <p>Professionals, founders, executives, and organizations seeking disciplined, method-driven AI coaching.</p>
          </motion.div>

          {/* How to Begin */}
          <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>How to begin</motion.h2>
          <motion.div className={PremiumStyles.paragraph} style={{ textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '16px' }} {...fadeInUp}>
            <p>Book an AI coaching session to engage the Humanocentric™ coaching service.</p>
            <a href="/book-coaching" style={{ display: 'inline-block', background: 'white', color: 'black', padding: '0.8rem 2rem', borderRadius: '40px', textDecoration: 'none', fontWeight: 'bold', marginTop: '1rem' }}>Book AI Coaching Session →</a>
          </motion.div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
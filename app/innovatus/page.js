"use client";

import styles from '../privacy-policy/PrivacyPolicy.module.css';
import PremiumStyles from '../../components/ModernPremium.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Innovatus() {
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
            <span className={PremiumStyles.subtitle}>Humanocentric™ Hardware</span>
            <h1 className={PremiumStyles.title}>Innovatus™ AI Glasses</h1>
            <p className={PremiumStyles.tagline}>
              High-Interaction Augmentation designed for professional environments where information, communication, and context are in continuous motion.
            </p>
          </motion.div>
          
          <motion.div 
            className={PremiumStyles.imageWrapper} 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <Image 
              src="/assets/Flux_Images/Flux_1.jpeg" 
              alt="Innovatus AI Glasses" 
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
            Humanocentric™ Augmentation for Complex Environments
          </motion.p>

          <div className={PremiumStyles.section}>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Modern environments evolve faster than unaided human attention can comfortably track—yet responsibility, judgment, and meaning remain fundamentally human. Innovatus™ AI Glasses were created to address this tension directly.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Innovatus™ is not about automating decisions or replacing professional judgment. It is about augmenting human perception and situational understanding at the moment it matters, while preserving agency, accountability, and control. Designed for professional and enterprise contexts, Innovatus™ supports individuals operating in complex, dynamic environments where clarity must precede action.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>The Humanocentric™ Premise</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Innovatus™ is grounded in a Humanocentric™ philosophy of artificial intelligence. Within this approach, AI functions strictly as an analytical and contextual instrument, never as an authority.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Humanocentric™ augmentation begins from a simple premise:<br />
              <strong>Responsibility Cannot Be Automated™.</strong>
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Innovatus™ operates alongside the human—expanding awareness, recall, and context—while interpretation, prioritization, and judgment remain entirely human. AI assists understanding; it does not define outcomes.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>What Innovatus™ Is — and Is Not</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              <strong>Innovatus™ is:</strong>
            </motion.p>
            <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
              <motion.li variants={fadeInUp}>A human-augmentation platform</motion.li>
              <motion.li variants={fadeInUp}>Context-aware and situational</motion.li>
              <motion.li variants={fadeInUp}>Designed for professional and enterprise environments</motion.li>
              <motion.li variants={fadeInUp}>Subordinate to user intent and control</motion.li>
            </motion.ul>
            
            <motion.p className={PremiumStyles.paragraph} style={{ marginTop: '1.5rem' }} {...fadeInUp}>
              <strong>Innovatus™ is not:</strong>
            </motion.p>
            <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
              <motion.li variants={fadeInUp}>An autonomous decision-making system</motion.li>
              <motion.li variants={fadeInUp}>A surveillance-first device</motion.li>
              <motion.li variants={fadeInUp}>A consumer novelty or lifestyle gadget</motion.li>
              <motion.li variants={fadeInUp}>A replacement for professional judgment</motion.li>
            </motion.ul>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              These boundaries are deliberate. They reflect Innovatus™’s role as a tool for clarity under complexity, not automation without accountability.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Augmentation at the Point of Perception</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Innovatus™ operates before analysis, before automation, and before action—at the point of perception.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              By delivering relevant contextual information directly into the user’s field of awareness, Innovatus™ reduces cognitive friction without fragmenting attention. Unlike dashboards, handheld devices, or post-hoc analytics, Innovatus™ supports real-time situational awareness while preserving deliberate human control.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              This makes Innovatus™ particularly well suited for environments where interruptions are costly and attention must remain anchored in the physical, operational, or interpersonal context.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Valence and Flux: Two States of Augmentation</motion.h2>
            <motion.h3 className={PremiumStyles.heading3} {...fadeInUp}>Innovatus™ Valence</motion.h3>
            <motion.p className={PremiumStyles.paragraph} style={{ fontStyle: 'italic', marginBottom: '1.5rem' }} {...fadeInUp}>
              Persistent Cognitive Augmentation
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Innovatus™ Valence integrates the Jerry – Main Control – JL7018F processor with a dedicated vision coprocessor, HD imaging, dual-microphone audio, and IP65 durability in a lightweight wearable platform engineered for continuous professional use.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              <strong>Valence represents readiness.</strong>
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Innovatus™ Valence is designed for persistent cognitive augmentation—maintaining situational awareness and contextual readiness without demanding sustained interaction. It supports professionals who benefit from continuous, unobtrusive augmentation while remaining focused on their environment and responsibilities.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              <strong>Valence emphasizes:</strong>
            </motion.p>
            <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
              <motion.li variants={fadeInUp}>Continuous presence without intrusion</motion.li>
              <motion.li variants={fadeInUp}>Minimal interruption of attention</motion.li>
              <motion.li variants={fadeInUp}>Long-duration wearability</motion.li>
              <motion.li variants={fadeInUp}>Assistive context delivered only when relevant</motion.li>
            </motion.ul>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Valence is well suited for dynamic environments where continuity, discretion, and awareness matter more than frequent interaction. It embodies augmentation as capacity—always available, never imposing.
            </motion.p>

            <motion.div 
              style={{ marginTop: '4rem', marginBottom: '4rem', textAlign: 'center', background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
               <Image 
                 src="/assets/Valence_Images/Valence_1.jpeg" 
                 alt="Innovatus Valence" 
                 width={800} 
                 height={600} 
                 style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }}
               />
               <p style={{ marginTop: '1.5rem', color: '#888', fontStyle: 'italic', fontSize: '0.9rem' }}>Innovatus™ Valence — Persistent Cognitive Augmentation</p>
            </motion.div>

            <motion.h2 className={PremiumStyles.heading2} style={{ marginTop: '3rem' }} {...fadeInUp}>Innovatus™ Valence — Hardware Specifications</motion.h2>
            <motion.p className={PremiumStyles.paragraph} style={{ marginBottom: '2rem' }} {...fadeInUp}>
              Innovatus™ models are not differentiated by “power,” “tiers,” or feature escalation. They are defined by states of human–system interaction—how and when augmentation is applied relative to human attention. These states exist along a continuum, not a hierarchy.
            </motion.p>

            <motion.div className={PremiumStyles.tableWrapper} {...fadeInUp}>
              <table className={PremiumStyles.table}>
                <tbody>
                  {[
                    ["Processing Architecture", "Dual-chip, low-power architecture"],
                    ["Master Chip", "Jerry – Main Control – JL7018F"],
                    ["Vision Coprocessor", "Allwinner V821L2 controller"],
                    ["Camera", "8 MP HD camera (software interpolation up to 32 MP)"],
                    ["Stabilization & Sensors", "Gravity sensor with photo/video stabilization (3-axis, 6-axis compatible)"],
                    ["Audio System", "Dual ENC microphones with noise reduction and anti-interference"],
                    ["Interaction Methods", "AI voice wake-up, capacitive slide control, tap input, dual physical buttons"],
                    ["AI-Assisted Functions", "AI object recognition, intelligent question-and-answer interaction, AI-powered translation, photo/video/audio capture"],
                    ["Connectivity", "Wi-Fi for media transfer; Bluetooth for calls and audio playback"],
                    ["Battery", "270 mAh high-density polymer lithium-ion battery"],
                    ["Charging Interface", "Magnetic charging"],
                    ["Endurance", "~12 hours active use (reference); 7+ days standby"],
                    ["Weight", "~42 grams"],
                    ["Ingress Protection", "IP65 dustproof, waterproof, and sweat-resistant"],
                    ["Frame Material", "Flexible TP material with coated finish"],
                    ["Optical System", "Interchangeable blue-light blocking, sunglass, or photochromic lenses; prescription compatible"],
                    ["Dimensions", "Approx. 147 mm × 45 mm"],
                    ["Language Support", "Broad multilingual support via companion application"]
                  ].map(([key, val], idx) => (
                    <tr key={idx}>
                      <th>{key}</th>
                      <td>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
            
            <motion.h3 className={PremiumStyles.heading3} {...fadeInUp}>Innovatus™ Flux</motion.h3>
            <motion.p className={PremiumStyles.paragraph} style={{ fontStyle: 'italic', marginBottom: '1.5rem' }} {...fadeInUp}>
              Dynamic, High-Interaction Augmentation
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Innovatus™ Flux integrates a Qualcomm-based 1.4 GHz processing platform, Sony imaging system, 4K stabilized capture, advanced AI interaction, and extended endurance in a lightweight wearable designed for high-interaction professional environments.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              <strong>Flux represents movement and exchange.</strong>
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Innovatus™ Flux is designed for environments where information, communication, and context are in continuous motion. It supports moments of active engagement—real-time capture, translation, communication, and contextual exchange—while remaining firmly subordinate to human judgment.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              <strong>Flux emphasizes:</strong>
            </motion.p>
            <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
              <motion.li variants={fadeInUp}>Responsive, multi-modal interaction</motion.li>
              <motion.li variants={fadeInUp}>Real-time contextual flow</motion.li>
              <motion.li variants={fadeInUp}>Support for communication-dense workflows</motion.li>
              <motion.li variants={fadeInUp}>Sustained engagement during active sessions</motion.li>
            </motion.ul>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Flux is well suited for roles where interaction density is high and augmentation must respond quickly to intent without assuming authority.
            </motion.p>

            <motion.div 
              style={{ marginTop: '4rem', marginBottom: '4rem', textAlign: 'center', background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
               <Image 
                 src="/assets/Flux_Images/Flux_1.jpeg" 
                 alt="Innovatus Flux" 
                 width={800} 
                 height={600} 
                 style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }}
               />
               <p style={{ marginTop: '1rem', color: '#888', fontStyle: 'italic', fontSize: '0.9rem' }}>Innovatus™ Flux — Dynamic High-Interaction</p>
            </motion.div>

            <motion.h2 className={PremiumStyles.heading2} style={{ marginTop: '3rem' }} {...fadeInUp}>Innovatus™ Flux — Hardware Specifications</motion.h2>
            <motion.p className={PremiumStyles.paragraph} style={{ marginBottom: '2rem' }} {...fadeInUp}>
              Innovatus™ Flux integrates a Qualcomm-based 1.4 GHz processing platform, Sony imaging system, 4K stabilized capture, advanced AI interaction, and extended endurance in a lightweight wearable designed for high-interaction professional environments.
            </motion.p>

            <motion.div className={PremiumStyles.tableWrapper} {...fadeInUp}>
              <table className={PremiumStyles.table}>
                <tbody>
                  {[
                    ["Processing Architecture", "High-performance wearable computing platform optimized for real-time interaction"],
                    ["Main Controller", "Qualcomm chipset, 1.4 GHz main frequency"],
                    ["Memory (RAM)", "1 GB DDR2"],
                    ["Storage (ROM)", "64 GB internal storage"],
                    ["Camera Module", "Sony camera sensor"],
                    ["Image Resolution", "Up to 4264 × 2808"],
                    ["Quick Capture Latency", "Approx. 200 ms"],
                    ["Photography", "4K photography with electronic stabilization"],
                    ["Video Recording", "Up to 90 minutes at 1080p or 45 minutes at 4K; single clips up to 9 minutes"],
                    ["Video Resolution Support", "3840×2160 (4K) or 2160×3840 @ 30 fps; horizontal 1080p (1920×1080)"],
                    ["Stabilization", "Electronic anti-shake stabilization"],
                    ["Audio Output", "Dual open-back directional speakers with leak-proof privacy design"],
                    ["Interaction Methods", "Mobile Bluetooth control, touch control, physical button control, voice control"],
                    ["AI-Enabled Capabilities", "AI image recognition, AI conversation, large-model interaction (including Spark AI, DeepSeek, and compatible models), text-to-image generation"],
                    ["Translation", "Real-time translation for 100+ languages; call translation with simultaneous interpretation"],
                    ["Call Features", "Call recording and transcription supported"],
                    ["Connectivity", "Wi-Fi 2.4 GHz / 5 GHz; Bluetooth 5.4"],
                    ["Battery Capacity", "300 mAh lithium battery"],
                    ["Music Playback Endurance", "Up to 25 hours (Bluetooth music playback)"],
                    ["Standby Time", "Over 100 hours (Bluetooth and Wi-Fi connected)"],
                    ["Charging", "Wired charging"],
                    ["Weight", "Approx. 37 grams"],
                    ["Frame Material", "TR90 lightweight material"],
                    ["Optical Processing", "HDR (DOL & Native), autofocus (AF), auto exposure (AE), auto white balance (AWB), lens shading correction, defective pixel correction, local tone mapping, demosaic processing, purple-fringing correction, defog, local contrast enhancement, 2DNR/3DNR noise reduction, sharpening"]
                  ].map(([key, val], idx) => (
                    <tr key={idx}>
                      <th>{key}</th>
                      <td>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Technology, Applied with Restraint</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Innovatus™ leverages on-device intelligence, secure connectivity, and context-aware AI assistance to support perception and understanding. Technical capabilities are selected and implemented with restraint—prioritizing reliability, privacy, and responsiveness over novelty.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Innovatus™ is designed to integrate smoothly into professional workflows, without imposing new cognitive burdens or forcing users to adapt to the technology.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Governance, Oversight, and Responsibility</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Innovatus™ operates within established governance and control frameworks. AI-assisted outputs are always subject to human interpretation and oversight.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              <strong>Innovatus™ does not:</strong>
            </motion.p>
            <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
              <motion.li variants={fadeInUp}>Make decisions</motion.li>
              <motion.li variants={fadeInUp}>Establish policy</motion.li>
              <motion.li variants={fadeInUp}>Act without user intent</motion.li>
              <motion.li variants={fadeInUp}>Override professional judgment</motion.li>
            </motion.ul>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Responsibility remains with the individual and the organization deploying the system. Innovatus™ exists to clarify responsibility, not obscure it.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>Innovatus™ Within the Metaratus™ System</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Innovatus™ functions as the perceptual front end of the broader Metaratus™ system.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Human presence is augmented through Innovatus™, structured understanding is developed through Prisma™, and strategy and execution follow—without collapsing perception, analysis, and decision into a single automated step.
            </motion.p>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              This separation is deliberate. It preserves human agency across every layer of the system.
            </motion.p>

            <motion.h2 className={PremiumStyles.heading2} {...fadeInUp}>A Deliberate Stance on the Future of AI</motion.h2>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Innovatus™ is not simply a product line. It is a position on how artificial intelligence should coexist with human responsibility in complex environments.
            </motion.p>
            <motion.ul className={PremiumStyles.list} variants={staggerContainer} initial="hidden" whileInView="show">
              <motion.li variants={fadeInUp}>Augmentation should expand understanding, not authority.</motion.li>
              <motion.li variants={fadeInUp}>Technology should clarify judgment, not replace it.</motion.li>
            </motion.ul>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Innovatus™ Valence and Innovatus™ Flux embody that stance—clearly, deliberately, and without compromise.
            </motion.p>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

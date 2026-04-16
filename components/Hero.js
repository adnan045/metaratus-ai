"use client";
import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title} style={{ fontFamily: "Sora" }}>
            AI Software. AI Hardware. AI Strategy. One Integrated Ecosystem.
            {/* <br />
            innovative <span className={styles.highlight}>opportunities</span> at the
            <br />
            Metaratus IT dervices */}
          </h1>

          <p className={styles.subtitle}>
            Metaratus® unifies intelligent tools, strategic consulting,
            automation workflows, and next-generation wearable AI technology to
            empower businesses in the Post-COVID, AI Era™.
          </p>

          <button className={styles.discoverButton}>
            Discover
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
        </div>

        <div className={styles.heroImages}>
          <div className={styles.imageGrid}>
            {/* Column 1 - Achievements Card */}
            <div className={`${styles.card} ${styles.achievementsCard}`}>
              <Image
                src="/assets/hero/heroImage1.png"
                alt="Achievements"
                width={365}
                height={570}
                className={styles.image}
              />
              <div className={styles.popover}>
                <div className={styles.popoverContent}>
                  <h3 className={styles.popoverTitle}>Metaratus.ai Platform</h3>
                  <p className={styles.popoverText}>Metaratus.ai provides AI chat assistance, document drafting, PDF analysis, content rewriting, image generation, speech-to-text transcription, and structured planning tools—designed for professionals operating in the Post-COVID, AI Era™.</p>
                </div>
              </div>
              {/* <div className={styles.textOverlay}>
                <h3>Achievements</h3>
                <p>of our startup</p>
              </div> */}
            </div>

            {/* Column 2 - Robot Image */}
            <div className={`${styles.card} ${styles.robotCard}`}>
              <Image
                src="/assets/hero/heroImage2.png"
                alt="Robot Technology"
                width={365}
                height={275}
                className={styles.image}
              />
              <div className={styles.popover}>
                <div className={styles.popoverContent}>
                  <h3 className={styles.popoverTitle}>Metaratus® Innovatus™</h3>
                  <p className={styles.popoverText}>Metaratus® Innovatus™ AI Glasses are hands-free, AI-enabled smart glasses designed to support real-time information access, voice interaction, and on-the-go decision support. Built for discretion and everyday professional use, Innovatus™ integrates intelligence directly into the moment—helping users enter the Post-COVID, AI Era™.</p>
                </div>
              </div>
            </div>

            {/* Column 2 - Stats Card */}
            <div className={`${styles.card} ${styles.statsCard}`}>
              <Image
                src="/assets/hero/Paragraph+Background.png"
                alt="Statistics"
                width={365}
                height={275}
                className={styles.image}
              />
              <div className={styles.popover}>
                <div className={styles.popoverContent}>
                  <h3 className={styles.popoverTitle}>Unified AI Ecosystem</h3>
                  <p className={styles.popoverText}>Delivered as part of Metaratus® AI consulting engagements, the Unified AI Ecosystem equips clients with practical AI tools for modeling, planning, documentation, and decision support—extending advisory insight into day-to-day operations.</p>
                </div>
              </div>
            </div>

            {/* Column 3 - Crystal Ball Image */}
            <div className={`${styles.card} ${styles.crystalCard}`}>
              <Image
                src="/assets/hero/Group 21.png"
                alt="Insight Amplification"
                width={365}
                height={275}
                className={styles.image}
              />
              <div className={styles.textOverlay}>
                <h3 className={styles.overlayTitle}>Insight Amplification</h3>
              </div>
              <div className={styles.popover}>
                <div className={styles.popoverContent}>
                  <h3 className={styles.popoverTitle}>Insight Amplification</h3>
                  <p className={styles.popoverText}>Human-guided, AI-augmented business consulting that extends human creativity—combining strategic guidance, structured advisory frameworks, and disciplined reasoning to refine ideas, data, and operations into informed decisions and real-world, high-value execution.</p>
                </div>
              </div>
            </div>

            {/* Column 3 - Professional Team Card */}
            <div className={`${styles.card} ${styles.professionalCard}`}>
              <Image
                src="/assets/hero/Group 18.png"
                alt="Professional Team"
                width={365}
                height={275}
                className={styles.image}
              />
              <div className={styles.popover}>
                <div className={styles.popoverContent}>
                  <h3 className={styles.popoverTitle}>AI Automation & Workflows</h3>
                  <p className={styles.popoverText}>We analyze your business model to understand how work flows through your organization and where inefficiencies arise. Based on that analysis, we design and implement AI-enhanced automations that streamline logistics, reduce friction, and improve operational consistency. The result is more efficient execution without sacrificing control or strategic intent.</p>
                </div>
              </div>
              {/* <div className={styles.textOverlay}>
                <p>Professional</p>
                <p>team & tech</p>
              </div> */}
            </div>

            {/* Column 4 - Blue Shapes Image */}
            <div
              className={`${styles.card} ${styles.blueShapesCard}`}
              style={{ position: "relative", top: "4.5rem" }}
            >
              <Image
                src="/assets/hero/computer-chips.png"
                alt="Next-Gen Computer Chips"
                width={365}
                height={275}
                className={styles.image}
              />
              <div className={styles.popover}>
                <div className={styles.popoverContent}>
                  <h3 className={styles.popoverTitle}>AI Training & Upskilling</h3>
                  <p className={styles.popoverText}>We train individuals and organizations to understand, apply, and responsibly leverage AI in real business contexts—Using AI as an Extension of Your Own Brain™. Our programs build the judgment, confidence, and practical skill required to turn AI into a strategic capability rather than a technical novelty.</p>
                </div>
              </div>
            </div>

            {/* Column 4 - Digital Head Image */}
            <div className={`${styles.card} ${styles.digitalHeadCard}`}>
              <Image
                src="/assets/hero/business-experts.png"
                alt="Business Professionals Collaborative Planning"
                width={365}
                height={275}
                className={styles.image}
              />
              <div className={styles.textOverlay}>
                <h3 className={styles.overlayTitle}>Extended Intelligence™</h3>
              </div>
              <div className={styles.popover}>
                <div className={styles.popoverContent}>
                  <h3 className={styles.popoverTitle}>Extended Intelligence™</h3>
                  <p className={styles.popoverText}>Extended Intelligence™ represents the disciplined integration of human insight and AI as a cognitive extension—supporting deeper analysis, structured reasoning, clearer thinking, and more informed strategic decisions that lead to sustained execution.</p>
                </div>
              </div>
            </div>

            {/* Column 5 - Programming Card */}
            <div className={`${styles.card} ${styles.programmingCard}`}>
              {/* <div className={styles.textOverlayTop}>
                <h3>Programming &</h3>
                <p>development</p>
              </div> */}
              <Image
                src="/assets/hero/Group 24.png"
                alt="Programming Pattern"
                width={365}
                height={285}
                className={styles.image}
              />
              <div className={styles.popover}>
                <div className={styles.popoverContent}>
                  <h3 className={styles.popoverTitle}>Prisma™ AI Framework</h3>
                  <p className={styles.popoverText}>The Prisma™ AI Analytical Framework examines your business through multiple analytical lenses. We combine seasoned business consulting expertise with modern AI tools for the purpose of deconstructing complex dynamics into their constituent elements, thereby, providing decision-makers with actionable insights.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import styles from '../privacy-policy/PrivacyPolicy.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>About Metaratus®</h1>

          <div className={styles.section}>
            <p className={styles.paragraph}>
              Metaratus® is a Digital Project Management and business management consulting firm headquartered in Atlanta, Georgia. We operate as a diversified technology and consulting organization, combining structured business management consulting, advanced systems thinking, and specialized technology development across both software and hardware platforms.
            </p>
            <p className={styles.paragraph}>
              We were founded on the premise that modern organizations are not failing due to a lack of intelligence, tools, or data—but due to a lack of structure for understanding the unique complexities that are the byproduct of the Post-COVID, AI Era™. In response, we developed proprietary analytical methods, including the Prisma™ Framework, to support leaders as they interpret dynamic environments, align decisions with the appropriate industrial and organizational context, and act with deliberation rather than urgency. These methods are applied to support understanding and planning; decision authority remains with our clients.
            </p>

            <h2 className={styles.heading2}>A Humanocentric™ Approach to Artificial Intelligence</h2>
            <p className={styles.paragraph}>
              At the core of our identity is a Humanocentric™ approach to artificial intelligence. We treat AI as an analytical instrument designed to enhance understanding—not as a substitute for human responsibility or judgment.
            </p>
            <p className={styles.paragraph}>
              Humanocentric™ principles place responsibility in the hands of seasoned professionals who evaluate decisions through an intersubjective lens. Within this framework, we apply AI to surface patterns, model interacting variables, and expand situational awareness, while interpretation, prioritization, and accountability remain distinctly human.
            </p>
            <p className={styles.paragraph}>
              This approach allows organizations to benefit from AI-enabled insight without eroding leadership agency, governance, or ethical responsibility.
            </p>

            <h2 className={styles.heading2}>Diversified Capabilities, Integrated by Method</h2>
            <p className={styles.paragraph}>
              In addition to our business management consulting and digital project management services, we maintain specialized product design and manufacturing capabilities. We design and produce Metaratus®-branded laptops, all-in-one desktop computers, Android-based tablet systems, and Innovatus™ AI Glasses, which are developed for professional and enterprise environments.
            </p>
            <p className={styles.paragraph}>
              Innovatus™ AI Glasses are intended to support context-aware information access, hands-free interaction, and situational augmentation in operational settings. As with our other technology platforms, these devices are designed to complement human workflows and decision processes rather than replace them.
            </p>
            <p className={styles.paragraph}>
              We offer our computing platforms both as standalone products and as part of integrated solutions, enabling alignment across hardware, software, and analytical methods when appropriate. Instead, it functions as a strategic capability—allowing us to align hardware, software, infrastructure, and analytical methods within a unified, human-centered design philosophy.
            </p>

            <h2 className={styles.heading2}>Where Strategy, Systems, and Execution Converge</h2>
            <p className={styles.paragraph}>
              By combining disciplined analytical methodology, Humanocentric™ AI principles, and integrated technology capabilities, we serve our clients in wide-ranging capacities across business strategy, technology systems, and project execution. 
            </p>
            <p className={styles.paragraph}>
              Our work supports organizations navigating post-COVID realities, accelerated technological change, and evolving human–machine relationships. In each engagement, our objective remains the same: to create clarity before action and understanding before scale.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

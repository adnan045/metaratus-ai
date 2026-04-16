import styles from './SupraHero.module.css';
import Image from 'next/image';

export default function SupraHero() {
  return (
    <section className={styles.supraHero}>
      <div className={styles.backgroundContainer}>
        <Image
          src="/assets/supra-hero-bg.png"
          alt="Cinematic AI Background"
          fill
          className={styles.backgroundImage}
          priority
        />
        <div className={styles.overlay}></div>
        <div className={styles.bottomGradient}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Image
            src="/assets/brandLogo.png"
            alt="Metaratus Logo"
            width={600}
            height={240}
            className={styles.logo}
            priority
          />
        </div>
        <h1 className={styles.title}>
          <span className={styles.revealWord}>Enter the</span>{' '}
          <span className={`${styles.revealWord} ${styles.highlight}`}>Post-COVID, AI Era™</span>
        </h1>
        
        <div className={styles.scrollIndicator}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </div>
    </section>
  );
}

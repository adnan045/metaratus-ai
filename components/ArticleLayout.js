import styles from './ArticleLayout.module.css';
import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';

export default function ArticleLayout({ title, subtitle, date = "March 2026", author = "Metaratus® Research", readTime = "5 min read", children }) {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Link href="/#reviews" className={styles.backButton}>
          ← Back to Insights
        </Link>
        
        <header className={styles.hero}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          
          <div className={styles.meta}>
            <div className={styles.author}>
              <div className={styles.authorAvatar}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <span>{author}</span>
            </div>
            <span className={styles.dot}>•</span>
            <span>{date}</span>
            <span className={styles.dot}>•</span>
            <span>{readTime}</span>
          </div>
        </header>

        <article className={styles.content}>
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}

"use client";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <nav className={styles.navLeft}>
            <Link href="/" className={styles.navItem}>Platform</Link>
            <Link href="/innovatus" className={styles.navItem}>Innovatus™</Link>
            <Link href="/prisma" className={styles.navItem}>Prisma AI™</Link>
            <Link href="/consulting" className={styles.navItem}>Consulting</Link>
            <Link href="/training" className={styles.navItem}>Training</Link>
          </nav>
        </div>

        <div className={styles.logo}>
          <Image
            src="/assets/brandLogo.png"
            alt="Metaratus Logo"
            width={200}
            height={80}
            className={styles.logoImage}
          />
        </div>

        <div className={styles.rightSection}>
          <nav className={styles.navRight}>
            <Link href="#automation" className={styles.navItem}>Automation</Link>
            <Link href="/research" className={styles.navItem}>Research</Link>
            <Link href="/pricing" className={styles.navItem}>Pricing</Link>
            <Link href="/about-vision" className={styles.navItem}>About</Link>
            <Link href="/contact" className={styles.navItem}>Contact</Link>
          </nav>

          <div className={styles.ctaGroup}>
            <button className={styles.ctaSecondary}>Book Strategy Call</button>
            <a href="https://www.metaratus.ai/register" className={styles.ctaPrimary}>Start Free Trial</a>
          </div>

          <button
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
          <nav className={styles.mobileNav}>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Platform</Link>
            <Link href="/innovatus" onClick={() => setIsMenuOpen(false)}>Innovatus™</Link>
            <Link href="/prisma" onClick={() => setIsMenuOpen(false)}>Prisma AI™</Link>
            <Link href="/consulting" onClick={() => setIsMenuOpen(false)}>Consulting</Link>
            <Link href="/training" onClick={() => setIsMenuOpen(false)}>Training</Link>
            <Link href="#automation" onClick={() => setIsMenuOpen(false)}>Automation</Link>
            <Link href="/research" onClick={() => setIsMenuOpen(false)}>Research</Link>
            <Link href="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <Link href="/about-vision" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>

            <div className={styles.mobileButtons}>
              <button className={styles.mobileCtaSecondary}>Book Strategy Call</button>
                <a href="https://www.metaratus.ai/register" className={styles.mobileCtaPrimary}>Start Free Trial</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

'use client';

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const titles = [
  'Data Enthusiast',
  'Data Analyst',
  'ML Explorer',
  'Data Scientist',
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  return (
    <section className={styles.hero} id="hero">
      {/* Ambient background */}
      <div className={styles.bgGlow} />
      <div className={styles.bgGrid} />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Available for opportunities
        </div>

        <h1 className={styles.name}>
          Hi, I&apos;m <span className={styles.nameAccent}>Ganendra Pradipa</span>
        </h1>

        <div className={styles.titleWrapper}>
          <span className={styles.titleStatic}>I&apos;m a </span>
          <span className={styles.titleDynamic}>
            {displayed}
            <span className={styles.cursor}>|</span>
          </span>
        </div>

        <p className={styles.tagline}>
          Transforming raw data into actionable insights through analysis,
          machine learning, and data-driven storytelling.
        </p>

        <div className={styles.cta}>
          <a href="#projects" className="btn btn-primary" id="cta-projects">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary" id="cta-contact">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Contact Me
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>10+</span>
            <span className={styles.statLabel}>Projects</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>5+</span>
            <span className={styles.statLabel}>Tools Mastered</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>2+</span>
            <span className={styles.statLabel}>Years Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
}

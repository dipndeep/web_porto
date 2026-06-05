'use client';

import { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(10);
  const [isFinished, setIsFinished] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Disable body scroll when loading
    document.body.style.overflow = 'hidden';

    let timer;
    const updateProgress = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            // Re-enable body scroll
            document.body.style.overflow = '';
            setTimeout(() => {
              setIsRemoved(true);
            }, 600); // Wait for exit animation to complete
          }, 200);
          return 100;
        }

        // Natural, non-linear progress increment
        // It runs fast at first, and slows down near the end
        let increment = 0;
        if (prev < 30) {
          increment = Math.floor(Math.random() * 8) + 4;
        } else if (prev < 70) {
          increment = Math.floor(Math.random() * 5) + 2;
        } else if (prev < 90) {
          increment = Math.floor(Math.random() * 3) + 1;
        } else {
          increment = Math.random() > 0.6 ? 1 : 0; // Slow down near 100
        }

        const next = prev + increment;
        return next > 100 ? 100 : next;
      });
    };

    timer = setInterval(updateProgress, 30);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, []);

  if (isRemoved) return null;

  const titleText = "GANENDRA";

  return (
    <div className={`${styles.loaderContainer} ${isFinished ? styles.fadeOut : ''}`}>
      <div className={styles.loaderContent}>
        {/* Brand Name with letter stagger */}
        <h1 className={styles.brandName}>
          {titleText.split('').map((char, index) => (
            <span 
              key={index} 
              className={styles.char} 
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {char}
            </span>
          ))}
        </h1>
        
        {/* Tagline */}
        <p className={styles.tagline}>Data Analyst & ML Explorer</p>

        {/* Loading Progress Wrapper */}
        <div className={styles.progressWrapper}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${progress}%` }} 
            />
          </div>
          <span className={styles.percentage}>{progress}%</span>
        </div>
      </div>
      
      {/* Background glowing effects */}
      <div className={styles.glowBg1} />
      <div className={styles.glowBg2} />
    </div>
  );
}

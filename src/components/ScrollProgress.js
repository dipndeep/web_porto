'use client';

import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const totalHeight = docHeight - winHeight;

      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollWidth(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once initially
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scrollWidth}%`,
        height: '3px',
        background: 'var(--accent-gradient)',
        zIndex: 10000,
        transition: 'width 0.1s ease-out',
        pointerEvents: 'none',
      }}
    />
  );
}

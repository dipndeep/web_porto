'use client';

import styles from './Hero.module.css';

const telemetry = [
  {
    metric: '10,000 passes',
    label: 'Monte Carlo Simulations',
    sub: 'F1 & FIFA WC 2026 forecast models',
  },
  {
    metric: '>95% mAP@50',
    label: 'Drone Computer Vision',
    sub: 'Aquatic weed detection research',
  },
  {
    metric: 'Applied ML & Stats',
    label: 'Analytical Frameworks',
    sub: 'Elo rating, XGBoost, Data Mining',
  },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        {/* Editorial Status Tag */}
        <div className={styles.metaRow}>
          <div className={styles.locationBadge}>
            <span className={styles.badgePulse} />
            <span className={styles.monoText}>Merauke, ID (GMT+9)</span>
          </div>
          <span className={styles.metaDivider}>/</span>
          <span className={styles.metaStatus}>Data Analyst &amp; ML Explorer</span>
        </div>

        {/* Editorial Headline */}
        <h1 className={styles.headline}>
          Turning complex data into <em className={styles.italicAccent}>predictive rigor</em> and decisive insight.
        </h1>

        {/* Bio Paragraph */}
        <p className={styles.lead}>
          Hi, I&apos;m <strong className={styles.authorName}>Ganendra Pradipa</strong>. I specialize in 
          statistical modeling, machine learning pipelines, and computer vision. From simulating 
          championship forecasts with thousands of iterations to drone-based environmental detection, 
          I engineer data-driven solutions with clarity and precision.
        </p>

        {/* Call to Actions */}
        <div className={styles.actions}>
          <a href="#projects" className="btn btn-primary" id="cta-projects">
            <span>Explore Research &amp; Projects</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
          <a href="#about" className="btn btn-secondary" id="cta-about">
            <span>Track Record &amp; Methodology</span>
          </a>
        </div>

        {/* Telemetry / Research Highlights Strip */}
        <div className={styles.telemetrySection}>
          <div className={styles.telemetryHeader}>
            <span className={styles.telemetryTitle}>KEY ANALYTICAL FOCUS</span>
            <span className={styles.telemetryLine} />
          </div>

          <div className={styles.telemetryGrid}>
            {telemetry.map((item, idx) => (
              <div key={idx} className={styles.telemetryCard}>
                <div className={styles.telemetryMetric}>{item.metric}</div>
                <div className={styles.telemetryLabel}>{item.label}</div>
                <div className={styles.telemetrySub}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

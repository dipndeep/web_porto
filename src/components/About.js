'use client';

import AnimateOnScroll from './AnimateOnScroll';
import styles from './About.module.css';

const skills = [
  {
    name: 'Machine Learning',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  {
    name: 'Data Science',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    name: 'Data Mining',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M21 8.5c0 1.66-4 3-9 3s-9-1.34-9-3" />
      </svg>
    ),
  },
  {
    name: 'Front End',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    name: 'Computer Vision',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M3 7V3h4M21 7V3h-4M3 17v4h4M21 17v4h-4" />
      </svg>
    ),
  },
  {
    name: 'Graphic Design',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.02102 19.165 5.23412 19.2689 5.46461 19.2952C5.9288 19.3482 6.30456 19.0017 6.30456 18.535C6.30456 18.0683 6.68032 17.7218 7.14451 17.7748C7.4589 17.8107 7.77543 17.7126 8.01633 17.5052C8.25723 17.2978 8.40054 17.0002 8.40456 16.685" />
        <path d="M12.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
        <circle cx="7.5" cy="10.5" r="1.5" />
        <circle cx="11.5" cy="7.5" r="1.5" />
        <circle cx="16.5" cy="9.5" r="1.5" />
      </svg>
    ),
  },
  {
    name: 'Scientific Writing',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
  },
  {
    name: 'Photography',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    name: 'Public Speaking',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </svg>
    ),
  },
];

const tools = [
  {
    name: 'VS Code',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 6v12a3 3 0 1 0 3-3H3a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h15a3 3 0 1 0-3-3z" />
      </svg>
    ),
  },
  {
    name: 'Google Colab',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </svg>
    ),
  },
  {
    name: 'Roboflow',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <line x1="12" y1="22" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    name: 'Kaggle',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <line x1="12" y1="22" x2="12" y2="12" />
        <line x1="12" y1="12" x2="22" y2="8.5" />
        <line x1="12" y1="12" x2="2" y2="8.5" />
      </svg>
    ),
  },
  {
    name: 'Python',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 9h8v-3.586a3.971 3.971 0 0 1 3.414 -3.914a4 4 0 0 1 4.586 3.914v3.586h-8v3.586a3.971 3.971 0 0 1 -3.414 3.914a4 4 0 0 1 -4.586 -3.914v-3.586h8z" />
        <path d="M9 6l0 .01" />
        <path d="M15 18l0 .01" />
      </svg>
    ),
  },
  {
    name: 'Adobe Photoshop',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    ),
  },
  {
    name: 'Laravel',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4a2 2 0 0 0-1 1.73v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z" />
      </svg>
    ),
  },
  {
    name: 'React.js',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="section">
        <AnimateOnScroll>
          <span className="section-label">About Me</span>
          <h2 className="section-title">Passionate about data.</h2>
          <p className="section-subtitle">
            A data-focused professional with a strong foundation in analysis,
            machine learning, and data mining. I thrive on uncovering patterns
            and turning complex datasets into clear, impactful solutions.
          </p>
        </AnimateOnScroll>

        <div className={styles.grid}>
          {/* Left Column: Skills */}
          <AnimateOnScroll delay={100} className={styles.skillsSection}>
            <h3 className={styles.subheading}>Skills & Expertises</h3>
            <div className={styles.skillsGrid}>
              {skills.map((skill) => (
                <div key={skill.name} className={`${styles.skillCard} card`}>
                  <div className={styles.skillIcon}>{skill.icon}</div>
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Right Column: Tools */}
          <AnimateOnScroll delay={200} className={styles.toolsSection}>
            <h3 className={styles.subheading}>Tools & Frameworks</h3>
            <div className={styles.toolsGrid}>
              {tools.map((tool) => (
                <div key={tool.name} className={`${styles.toolCard} card`}>
                  <div className={styles.toolIcon}>{tool.icon}</div>
                  <span className={styles.toolName}>{tool.name}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

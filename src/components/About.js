'use client';

import { useState } from 'react';
import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';
import styles from './About.module.css';

const domains = [
  {
    category: 'Machine Learning & Predictive Modeling',
    description: 'Statistical simulation algorithms, regression pipelines, and predictive sports/health analytics.',
    skills: ['PyTorch', 'XGBoost', 'Monte Carlo Methods', 'Elo Rating Engine', 'Scikit-learn'],
  },
  {
    category: 'Computer Vision & Remote Sensing',
    description: 'Aerial object detection, dataset curation, and deep learning model benchmarking.',
    skills: ['OpenCV', 'Roboflow', 'YOLO Architectures', 'Drone Imagery Processing'],
  },
  {
    category: 'Data Analysis & Exploration',
    description: 'Pattern discovery, relational database querying, and reproducible data workflows.',
    skills: ['Python', 'PostgreSQL', 'Jupyter Lab', 'Google Colab', 'Kaggle'],
  },
  {
    category: 'Full-Stack Systems & Design',
    description: 'End-to-end web deployment, accessible UI architectures, and interactive portals.',
    skills: ['React.js', 'Next.js', 'Node.js', 'Laravel', 'UI/UX Craft'],
  },
];

const timeline = [
  {
    period: 'Jun 2025 — Present',
    role: 'Research & Development Engineer',
    institution: 'SMART Center Universitas Musamus',
    description:
      'Spearheading applied AI applications to solve ecological and community challenges in the Marind region, translating field data into practical digital interventions.',
  },
  {
    period: 'Jun 2025 — Dec 2025',
    role: 'Research Assistant — Computer Vision & AI',
    institution: 'Information System Department, Univ. Musamus',
    description:
      'Conducted benchmarking of aerial drone object detection models for aquatic weed classification. Attained mAP@50 metrics of up to 44.7% on primary field datasets and >95% on secondary validation sets.',
  },
  {
    period: '2022 — Present',
    role: 'Information Systems Scholar',
    institution: 'Universitas Musamus, Merauke',
    description:
      'Pursuing an undergraduate degree focusing on data systems, applied machine learning, statistical computing, and web engineering.',
  },
];

export default function About() {
  const [activePhoto, setActivePhoto] = useState(1);

  return (
    <section className={styles.about} id="about">
      <div className="section">
        {/* Header */}
        <AnimateOnScroll>
          <span className="section-label">Biography &amp; Background</span>
          <h2 className="section-title">
            Research Rigor, <em>Practical Execution</em>
          </h2>
          <p className="section-subtitle">
            Grounded in Information Systems and computational data modeling. I bridge
            academic research and real-world software to create transparent, evidence-based systems.
          </p>
        </AnimateOnScroll>

        {/* Profile and Track Record */}
        <div className={styles.profileGrid}>
          {/* Editorial Portrait Column */}
          <AnimateOnScroll animation="fade-left" delay={100} className={styles.portraitWrapper}>
            <div className={styles.photoFrame} onClick={() => setActivePhoto(activePhoto === 1 ? 2 : 1)}>
              <Image
                src={activePhoto === 1 ? '/porto.jpeg' : '/porto2.jpg'}
                alt="Ganendra Pradipa portrait"
                width={420}
                height={520}
                className={styles.photo}
                priority
              />
              <div className={styles.photoCaption}>
                <div className={styles.captionHeader}>
                  <span className={styles.captionTag}>FIG 1.{activePhoto}</span>
                  <span className={styles.switchPrompt}>Click to switch portrait</span>
                </div>
                <p className={styles.captionBio}>
                  Ganendra Pradipa • Information Systems &amp; Applied AI Researcher
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Timeline / Track Record Column */}
          <div className={styles.trackRecord}>
            <AnimateOnScroll animation="fade-right" delay={150}>
              <h3 className={styles.subheading}>Academic &amp; Research Track Record</h3>
            </AnimateOnScroll>

            <div className={styles.timelineList}>
              {timeline.map((item, index) => (
                <AnimateOnScroll key={index} delay={180 + index * 60} animation="fade-up">
                  <div className={styles.timelineCard}>
                    <div className={styles.timelinePeriod}>{item.period}</div>
                    <h4 className={styles.timelineRole}>{item.role}</h4>
                    <div className={styles.timelineInstitution}>{item.institution}</div>
                    <p className={styles.timelineDesc}>{item.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>

        {/* Structured Competencies / Tooling Domains */}
        <div className={styles.domainsSection}>
          <AnimateOnScroll animation="fade-up" delay={150}>
            <div className={styles.domainsHeader}>
              <span className="section-label">Competencies</span>
              <h3 className={styles.domainsTitle}>Technical Domains &amp; Tooling Stack</h3>
              <p className={styles.domainsSubtitle}>
                Tools and frameworks utilized across research, simulation pipelines, and software production.
              </p>
            </div>
          </AnimateOnScroll>

          <div className={styles.domainsGrid}>
            {domains.map((dom, i) => (
              <AnimateOnScroll key={dom.category} delay={180 + i * 50} animation="fade-up">
                <div className={`card ${styles.domainCard}`}>
                  <span className={styles.domainIndex}>0{i + 1}</span>
                  <h4 className={styles.domainCategory}>{dom.category}</h4>
                  <p className={styles.domainDesc}>{dom.description}</p>
                  <div className={styles.skillPills}>
                    {dom.skills.map((s) => (
                      <span key={s} className="tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

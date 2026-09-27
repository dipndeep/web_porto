'use client';

import { useState } from 'react';
import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';
import styles from './Projects.module.css';

const categories = [
  { id: 'all', label: 'All Works' },
  { id: 'predictive-ml', label: 'Predictive & ML' },
  { id: 'research-cv', label: 'Computer Vision & Research' },
  { id: 'full-stack', label: 'Full-Stack Systems' },
];

const projects = [
  {
    id: 'f1-2026',
    title: 'Formula One 2026 Championship Forecasting',
    category: 'predictive-ml',
    badge: '10,000 Iterations',
    index: '01',
    description:
      'Analytical modeling engine predicting driver and constructor standings under the 2026 engine and aerodynamic regulation reset. Combines historical performance data, dynamic Elo ratings, and 10,000 Monte Carlo simulation runs.',
    image: '/f1_forecast.png',
    tags: ['Python', 'Monte Carlo', 'Elo Rating', 'Machine Learning', 'Data Viz'],
    github: 'https://github.com/dipndeep/formula_one_forecasting',
  },
  {
    id: 'wc-2026',
    title: 'FIFA World Cup 2026 Probabilistic Engine',
    category: 'predictive-ml',
    badge: 'Tournament Simulation',
    index: '02',
    description:
      'Predictive tournament simulation calculating match-by-match win probabilities and knockout progression for the 48-team FIFA World Cup 2026, leveraging adjusted Elo metrics and historical FIFA tournament match databases.',
    image: '/wc26_forecast.png',
    tags: ['Python', 'Sports Analytics', 'Elo Rating', 'Monte Carlo', 'Predictive Modeling'],
    github: 'https://github.com/dipndeep/world_cup_26_forecast',
  },
  {
    id: 'aquatic-weed',
    title: 'Aquatic Weed Detection via Aerial Drone Imagery',
    category: 'research-cv',
    badge: '>95% mAP@50 Val',
    index: '03',
    description:
      'Research assistant project at Universitas Musamus developing computer vision models to identify aquatic weed infestations from drone imagery. Achieved over 95% mAP@50 on secondary validation sets to support ecological monitoring.',
    image: '/project-ml-model.png',
    tags: ['Computer Vision', 'PyTorch', 'Drone Imagery', 'Roboflow', 'Object Detection'],
    github: 'https://github.com/dipndeep',
  },
  {
    id: 'teen-depression',
    title: 'Adolescent Depression Risk Assessment Tool',
    category: 'predictive-ml',
    badge: 'XGBoost Regressor',
    index: '04',
    description:
      'An applied machine learning application predicting adolescent depressive tendency probabilities based on psychological questionnaires and behavioral indicators using an optimized XGBoost classification pipeline.',
    image: '/teen-depression.png',
    tags: ['Python', 'Machine Learning', 'XGBoost', 'React.js', 'Healthcare Analytics'],
    github: 'https://github.com/dipndeep/depression_calc',
  },
  {
    id: 'titiphub',
    title: 'TitipHub — Pet & Child Care Marketplace',
    category: 'full-stack',
    badge: 'Startup Platform',
    index: '05',
    description:
      'A university incubator platform connecting parents and pet guardians with verified local sitters. Features appointment booking, sitter verification workflows, and responsive real-time management.',
    image: '/titiphub.png',
    tags: ['React.js', 'Node.js', 'Tailwind CSS', 'System Architecture'],
    github: 'https://github.com/dipndeep/titiphub_app',
  },
  {
    id: 'maezprogym',
    title: 'MaezproGym Membership & Attendance Portal',
    category: 'full-stack',
    badge: 'Enterprise Dashboard',
    index: '06',
    description:
      'A streamlined management web app engineered for fitness centers to automate member check-ins, subscription renewals, and administrative operational reporting.',
    image: '/maespro-apps.png',
    tags: ['React.js', 'Node.js', 'Management Portal', 'Operational Analytics'],
    github: 'https://github.com/dipndeep/maezprogym-apps',
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className={styles.projects} id="projects">
      <div className="section">
        {/* Header */}
        <div className={styles.sectionHeader}>
          <AnimateOnScroll>
            <span className="section-label">Selected Works</span>
            <h2 className="section-title">
              Predictive Models &amp; <em>Research Case Studies</em>
            </h2>
            <p className="section-subtitle">
              A curated catalog of applied data science, statistical simulations, 
              computer vision research, and technical systems engineered with verifiable methodology.
            </p>
          </AnimateOnScroll>

          {/* Filter Pills */}
          <div className={styles.filterBar}>
            {categories.map((cat) => {
              const count =
                cat.id === 'all'
                  ? projects.length
                  : projects.filter((p) => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`${styles.filterBtn} ${
                    activeCategory === cat.id ? styles.filterBtnActive : ''
                  }`}
                  id={`filter-${cat.id}`}
                >
                  <span>{cat.label}</span>
                  <span className={styles.filterCount}>({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Projects Grid */}
        <div className={styles.grid}>
          {filteredProjects.map((project, idx) => (
            <AnimateOnScroll key={project.id} delay={idx * 60} animation="fade-up">
              <article className={`card ${styles.card}`}>
                {/* Visual Preview */}
                <div className={styles.imageFrame}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={720}
                    height={420}
                    className={styles.image}
                    priority={idx < 2}
                  />
                  <div className={styles.imageBadge}>
                    <span className={styles.badgeText}>{project.badge}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <span className={styles.projectIndex}>CASE {project.index}</span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.githubLink}
                      aria-label={`View ${project.title} repository`}
                    >
                      <span>Repository</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  </div>

                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>

                  {/* Methodologies / Tech Tags */}
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

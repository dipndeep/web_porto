'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';
import styles from './Projects.module.css';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'machine-learning', label: 'Machine Learning' },
  { id: 'data-science', label: 'Data Science' },
  { id: 'web-dev', label: 'Web Dev' },
];

const projects = [
  {
    title: 'Teen Depression Calculator',
    description:
      'A web application that predicts the likelihood of depression in teenagers based on their responses to a series of questions.',
    image: '/teen-depression.png',
    tags: ['Python', 'Machine Learning', 'XGBoost', 'React.JS'],
    github: 'https://github.com/dipndeep/depression_calc',
    category: 'machine-learning',
  },
  {
    title: 'TitipHub Startup',
    description:
      'A college-developed startup platform connecting parents and pet owners with trusted, local babysitters and pet sitters.',
    image: '/titiphub.png',
    tags: ['Start Up', 'React.JS', 'Tailwind CSS', 'Node.JS'],
    github: 'https://github.com/dipndeep/titiphub_app',
    category: 'web-dev',
  },
  {
    title: 'MaezproGym Membership App',
    description:
      'A web application designed for fitness centers to manage gym memberships, track customer visits, and handle subscription package registration.',
    image: '/maespro-apps.png',
    tags: ['React.JS', 'Tailwind CSS', 'Node.JS', 'Fitness Center'],
    github: 'https://github.com/dipndeep/maezprogym-apps',
    category: 'web-dev',
  },
  {
    title: 'Customer Segmentation Dashboard',
    description:
      'An interactive analytics dashboard segmenting customers using the K-Means clustering algorithm and cohort analysis metrics.',
    image: '/project-dashboard.png',
    tags: ['Data Science', 'Python', 'Clustering', 'Data Visualization'],
    github: 'https://github.com/dipndeep/customer-segmentation',
    category: 'data-science',
  },
  {
    title: 'Market Basket Association Miner',
    description:
      'A transaction analysis tool implementing the Apriori algorithm to discover correlations between products purchased together.',
    image: '/project-data-mining.png',
    tags: ['Data Mining', 'Python', 'Apriori Algorithm', 'Data Analytics'],
    github: 'https://github.com/dipndeep/market-basket-analysis',
    category: 'data-science',
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const gridRef = useRef(null);

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const handleScroll = () => {
    if (!gridRef.current) return;
    const container = gridRef.current;
    const scrollLeft = container.scrollLeft;
    const children = container.children;
    if (children.length === 0) return;

    // Find which child is closest to the horizontal center of the container
    const containerCenter = container.getBoundingClientRect().left + container.offsetWidth / 2;
    
    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const childRect = child.getBoundingClientRect();
      const childCenter = childRect.left + childRect.width / 2;
      const distance = Math.abs(childCenter - containerCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }

    setActiveIndex(closestIndex);
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveIndex(0);
    setTimeout(() => {
      if (gridRef.current) {
        gridRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  useEffect(() => {
    const container = gridRef.current;
    if (!container) return;

    let timeoutId;
    const onScroll = () => {
      if (timeoutId) cancelAnimationFrame(timeoutId);
      timeoutId = requestAnimationFrame(handleScroll);
    };

    handleScroll();
    container.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);

    return () => {
      container.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (timeoutId) cancelAnimationFrame(timeoutId);
    };
  }, [filteredProjects]);

  const handleCardClick = (index, e) => {
    // Only intercept if the card is NOT currently active/centered
    if (activeIndex !== index) {
      e.preventDefault();
      if (gridRef.current) {
        const container = gridRef.current;
        const child = container.children[index];
        if (child) {
          child.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
          });
        }
      }
    }
  };

  return (
    <section className={styles.projects} id="projects">
      <div className="section">
        <AnimateOnScroll>
          <span className="section-label">Projects</span>
          <h2 className="section-title">Selected Work</h2>
          <p className="section-subtitle">
            A showcase of my recent data projects, from analysis dashboards to machine learning models.
          </p>
        </AnimateOnScroll>

        {/* Filter Tabs */}
        <AnimateOnScroll delay={100}>
          <div className={styles.filterContainer}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`${styles.filterBtn} ${
                  activeCategory === cat.id ? styles.filterBtnActive : ''
                }`}
                id={`filter-btn-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Animated Projects Grid */}
        <AnimateOnScroll delay={150} animation="fade-up">
          <motion.div ref={gridRef} className={styles.grid} layout>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`${styles.cardWrapper} ${
                    activeIndex === index ? styles.cardWrapperActive : styles.cardWrapperInactive
                  }`}
                  onClick={(e) => handleCardClick(index, e)}
                >
                  <article className={`card ${styles.card}`}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={340}
                        className={styles.image}
                        priority={index < 2}
                      />
                      <div className={styles.imageOverlay}>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.overlayBtn}
                          aria-label={`View ${project.title} on GitHub`}
                          id={`project-link-${index}`}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          View on GitHub
                        </a>
                      </div>
                    </div>
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{project.title}</h3>
                      <p className={styles.cardDesc}>{project.description}</p>
                      <div className={styles.tags}>
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className={styles.mobileLinkContainer}>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.mobileLink}
                          id={`project-mobile-link-${index}`}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          <span>View Code</span>
                        </a>
                      </div>
                    </div>
                  </article>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </AnimateOnScroll>

        {/* Navigation Dots for Mobile Slider */}
        {filteredProjects.length > 1 && (
          <div className={styles.sliderDots}>
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (gridRef.current) {
                    const container = gridRef.current;
                    const child = container.children[index];
                    if (child) {
                      child.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center',
                      });
                    }
                  }
                }}
                className={`${styles.dot} ${activeIndex === index ? styles.dotActive : ''}`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import ThemeToggle from '@/components/ThemeToggle';
import CopyEmail from '@/components/CopyEmail';
import CvModal from '@/components/CvModal';
import styles from './page.module.css';

const EMAIL = 'ganendraptpratama@gmail.com';

const socials = [
  { label: 'github', url: 'https://github.com/dipndeep' },
  { label: 'linkedin', url: 'https://www.linkedin.com/in/ganendrapratama/' },
  { label: 'ig', url: 'https://www.instagram.com/dipaganendra/' },
];

const experiences = [
  {
    period: '2022—',
    role: 'Information Systems Student, Universitas Musamus',
  },
  {
    period: 'Jun 2025—',
    role: 'Research & Development, Smart Center Universitas Musamus',
  },
  {
    period: 'Jun–Dec 2025',
    role: 'Research Assistant (CV & AI), Information System Dept.',
    sub: '→ aquatic weed detection via drone imagery, mAP@50 44.7%',
  },
];

const projects = [
  {
    year: '2026',
    title: 'Teen Depression Calculator',
    description: 'Predicts depression likelihood in teens from questionnaire responses.',
    tools: 'Python · XGBoost · React',
    github: 'https://github.com/dipndeep/depression_calc',
  },
  {
    year: '2026',
    title: 'FIFA World Cup 2026 Forecasting',
    description: 'Win probability per match using Elo rating + Monte Carlo (10k runs).',
    tools: 'Python · Elo Rating · Monte Carlo',
    github: 'https://github.com/dipndeep/world_cup_26_forecast',
  },
  {
    year: '2026',
    title: 'Formula One 2026 Forecasting',
    description: 'WDC/WCC prediction via Elo + ML + Monte Carlo simulation.',
    tools: 'Python · ML · Monte Carlo',
    github: 'https://github.com/dipndeep/formula_one_forecasting',
  },
  {
    year: '2025',
    title: 'TitipHub',
    description: 'Platform penitipan anak & hewan peliharaan (college startup).',
    tools: 'React · Tailwind · Node.js',
    github: 'https://github.com/dipndeep/titiphub_app',
  },
  {
    year: '2025',
    title: 'MaezproGym',
    description: 'Membership & subscription management app for gyms.',
    tools: 'React · Tailwind · Node.js',
    github: 'https://github.com/dipndeep/maezprogym-apps',
  },
];

export default function Home() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <div className="container">
      <main className={styles.page}>
        {/* Top Navigation (hidden when printing) */}
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#about" className={styles.navLogoLink} aria-label="Ganendra Pradipa (Home)">
            <Image
              src="/logo-black-g.png"
              alt="Ganendra Pradipa"
              width={26}
              height={26}
              priority
              className={`${styles.navLogo} ${styles.logoLight}`}
            />
            <Image
              src="/logo-white-g.png"
              alt="Ganendra Pradipa"
              width={26}
              height={26}
              priority
              className={`${styles.navLogo} ${styles.logoDark}`}
            />
          </a>

          <div className={styles.navRight}>
            <ul className={styles.navLinks}>
              <li><a href="#experience" className={styles.navItem}>experience</a></li>
              <li><a href="#projects" className={styles.navItem}>projects</a></li>
              <li><a href="#contact" className={styles.navItem}>contact</a></li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsCvOpen(true)}
                  className={`${styles.navItem} ${styles.cvNavBtn}`}
                  title="View original Curriculum Vitae (PDF)"
                >
                  [cv ↗]
                </button>
              </li>
            </ul>

            <ThemeToggle
              className={styles.themeBtn}
              darkLabelClassName={styles.labelDark}
              lightLabelClassName={styles.labelLight}
            />
          </div>
        </nav>

        {/* Intro */}
        <header className={styles.intro} id="about">
          <h1 className={styles.name}>Ganendra Pradipa</h1>
          <p className={styles.subtitle}>
            Information Systems student · Merauke, South Papua (UTC+9)
          </p>

          {/* Print-only contact bar at the top of the resume (without github links) */}
          <div className={styles.printContactBar}>
            <span>{EMAIL}</span>
            <span className={styles.bullet}>·</span>
            <span>linkedin.com/in/ganendrapratama</span>
            <span className={styles.bullet}>·</span>
            <span>Merauke, South Papua</span>
          </div>

          <div className={styles.bio}>
            <p className={styles.bioLine}>
              Data-focused — machine learning, computer vision, data mining.
            </p>
            <p className={styles.bioSub}>
              Currently: R&amp;D @ Smart Center Universitas Musamus.
            </p>
          </div>

          {/* Social links & CV action button */}
          <div className={styles.introActions}>
            <div className={styles.introSocials}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.introSocialLink}
                >
                  {s.label} ↗
                </a>
              ))}
            </div>

            <span className={styles.introDivider} aria-hidden="true">·</span>

            <div className={styles.screenCvPrompt}>
              <button
                type="button"
                onClick={() => setIsCvOpen(true)}
                className={styles.cvActionBtn}
              >
                [view original cv (pdf) ↗]
              </button>
            </div>
          </div>
        </header>

        <hr className={styles.divider} />

        {/* Experience */}
        <section className={styles.section} id="experience" aria-labelledby="experience-heading">
          <h2 className={styles.sectionHeading} id="experience-heading">
            <span className={styles.hashPrefix}>## </span>experience
          </h2>
          <div className={styles.list}>
            {experiences.map((exp) => (
              <div key={exp.role} className={styles.row}>
                <div className={styles.dateCol}>{exp.period}</div>
                <div className={styles.contentCol}>
                  <div className={styles.expRole}>{exp.role}</div>
                  {exp.sub && <div className={styles.expSub}>{exp.sub}</div>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className={styles.divider} />

        {/* Projects */}
        <section className={styles.section} id="projects" aria-labelledby="projects-heading">
          <h2 className={styles.sectionHeading} id="projects-heading">
            <span className={styles.hashPrefix}>## </span>projects
          </h2>
          <div className={styles.list}>
            {projects.map((project) => (
              <div key={project.title} className={styles.row}>
                <div className={styles.dateCol}>{project.year}</div>
                <div className={styles.contentCol}>
                  <div className={styles.projectHeader}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.githubLink}
                      aria-label={`${project.title} on GitHub (opens in new tab)`}
                    >
                      [github ↗]
                    </a>
                  </div>
                  <p className={styles.projectDesc}>{project.description}</p>
                  <div className={styles.projectTools}>{project.tools}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Print-only Education & Competencies to balance 1-page A4 document */}
        <section className={styles.printOnlySection} aria-label="Education and Competencies">
          <h2 className={styles.sectionHeading}>
            <span className={styles.hashPrefix}>## </span>education &amp; competencies
          </h2>
          <div className={styles.printEducationGrid}>
            <div className={styles.printEduRow}>
              <span className={styles.printEduLabel}>Education:</span>
              <span className={styles.printEduVal}>
                B.S. in Information Systems (2022 — Present) · Universitas Musamus, Merauke
              </span>
            </div>
            <div className={styles.printEduRow}>
              <span className={styles.printEduLabel}>Core Focus:</span>
              <span className={styles.printEduVal}>
                Applied Machine Learning, Predictive Simulations (Monte Carlo, Elo), Drone Computer Vision (YOLO)
              </span>
            </div>
            <div className={styles.printEduRow}>
              <span className={styles.printEduLabel}>Tooling:</span>
              <span className={styles.printEduVal}>
                Python, PyTorch, XGBoost, OpenCV, PostgreSQL, React.js, Node.js, Git, Linux
              </span>
            </div>
          </div>
        </section>

        <hr className={`${styles.divider} ${styles.screenOnly}`} />

        {/* Contact (hidden in print — already prominent in top contact bar) */}
        <section
          className={`${styles.section} ${styles.screenOnly}`}
          id="contact"
          aria-labelledby="contact-heading"
        >
          <h2 className={styles.sectionHeading} id="contact-heading">
            <span className={styles.hashPrefix}>## </span>contact
          </h2>
          <div className={styles.contactContent}>
            <CopyEmail
              email={EMAIL}
              className={styles.emailRow}
              linkClassName={styles.emailLink}
              buttonClassName={styles.copyBtn}
            />
            <span className={styles.contactNote}>
              Merauke, South Papua · UTC+9
            </span>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <span>© {new Date().getFullYear()} Ganendra Pradipa</span>
          <span className={styles.kbdHint}>
            press <kbd className={styles.kbd}>t</kbd> to toggle theme
          </span>
        </footer>
      </main>

      {/* CV PDF Popup Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </div>
  );
}

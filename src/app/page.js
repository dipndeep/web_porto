import ThemeToggle from '@/components/ThemeToggle';
import CopyEmail from '@/components/CopyEmail';
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
    period: 'Jun–Dec25',
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

/** "https://github.com/x/y/" -> "github.com/x/y" (used for printed links) */
const shortUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

export default function Home() {
  return (
    <div className="container">
      <main className={styles.page}>
        {/* Top Navigation (hidden when printing) */}
        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navLinks}>
            <li><a href="#about" className={styles.navItem}>about</a></li>
            <li><a href="#experience" className={styles.navItem}>experience</a></li>
            <li><a href="#projects" className={styles.navItem}>projects</a></li>
            <li><a href="#contact" className={styles.navItem}>contact</a></li>
          </ul>

          <div className={styles.navSocials}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navItem}
              >
                {s.label}
              </a>
            ))}
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
            Information Systems student · Merauke, South Papua
          </p>

          <div className={styles.bio}>
            <p className={styles.bioLine}>
              Data-focused — machine learning, computer vision, data mining.
            </p>
            <p className={styles.bioSub}>
              Currently: R&amp;D @ Smart Center Universitas Musamus.
            </p>
          </div>

          {/* Print-only contact line at the top of the resume */}
          <p className={styles.printOnly}>
            {EMAIL} · {socials.slice(0, 2).map((s) => shortUrl(s.url)).join(' · ')}
          </p>
        </header>

        <hr />

        {/* Experience */}
        <section className={styles.section} id="experience" aria-labelledby="experience-heading">
          <h2 className={styles.sectionHeading} id="experience-heading">## experience</h2>
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

        <hr />

        {/* Projects */}
        <section className={styles.section} id="projects" aria-labelledby="projects-heading">
          <h2 className={styles.sectionHeading} id="projects-heading">## projects</h2>
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
                  <div className={styles.printOnly}>{shortUrl(project.github)}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className={styles.screenOnly} />

        {/* Contact (hidden in print — already shown at the top) */}
        <section
          className={`${styles.section} ${styles.screenOnly}`}
          id="contact"
          aria-labelledby="contact-heading"
        >
          <h2 className={styles.sectionHeading} id="contact-heading">## contact</h2>
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
    </div>
  );
}

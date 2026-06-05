'use client';

import { 
  SiPytorch, 
  SiJupyter, 
  SiPostgresql, 
  SiHtml5, 
  SiOpencv, 
  SiGooglecolab, 
  SiRoboflow, 
  SiKaggle, 
  SiPython, 
  SiLaravel, 
  SiReact 
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { DiPhotoshop } from 'react-icons/di';
import { Palette, FileText, Camera, Mic } from 'lucide-react';

import AnimateOnScroll from './AnimateOnScroll';
import styles from './About.module.css';

const skills = [
  {
    name: 'Machine Learning',
    icon: SiPytorch,
    color: '#EE4C2C', // PyTorch Orange
  },
  {
    name: 'Data Science',
    icon: SiJupyter,
    color: '#F37626', // Jupyter Orange
  },
  {
    name: 'Data Mining',
    icon: SiPostgresql,
    color: '#336791', // PostgreSQL Blue
  },
  {
    name: 'Front End',
    icon: SiHtml5,
    color: '#E34F26', // HTML5 Orange
  },
  {
    name: 'Computer Vision',
    icon: SiOpencv,
    color: '#00E676', // OpenCV Green
  },
  {
    name: 'Graphic Design',
    icon: Palette,
    color: '#EC4899', // Design Pink
  },
  {
    name: 'Scientific Writing',
    icon: FileText,
    color: '#4F46E5', // Sci Indigo
  },
  {
    name: 'Photography',
    icon: Camera,
    color: '#00D2FF', // Lense Blue
  },
  {
    name: 'Public Speaking',
    icon: Mic,
    color: '#EF4444', // Podcast Red
  },
];

const tools = [
  {
    name: 'VS Code',
    icon: TbBrandVscode,
    color: '#007ACC', // VS Code Blue
  },
  {
    name: 'Google Colab',
    icon: SiGooglecolab,
    color: '#F9AB00', // Colab Orange
  },
  {
    name: 'Roboflow',
    icon: SiRoboflow,
    color: '#8552FF', // Roboflow Purple
  },
  {
    name: 'Kaggle',
    icon: SiKaggle,
    color: '#20BEFF', // Kaggle Light Blue
  },
  {
    name: 'Python',
    icon: SiPython,
    color: '#3776AB', // Python Blue
  },
  {
    name: 'Adobe Photoshop',
    icon: DiPhotoshop,
    color: '#31A8FF', // Photoshop Cyan
  },
  {
    name: 'Laravel',
    icon: SiLaravel,
    color: '#FF2D20', // Laravel Red
  },
  {
    name: 'React.js',
    icon: SiReact,
    color: '#61DAFB', // React Cyan
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
          <div className={styles.skillsSection}>
            <AnimateOnScroll animation="fade-left" delay={100}>
              <h3 className={styles.subheading}>Skills & Expertises</h3>
            </AnimateOnScroll>
            <div className={styles.skillsGrid}>
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <AnimateOnScroll
                    key={skill.name}
                    animation="zoom-in"
                    delay={150 + index * 40}
                  >
                    <div className={`${styles.skillCard} card`}>
                      <div 
                        className={styles.skillIcon}
                        style={{
                          color: skill.color,
                          backgroundColor: `${skill.color}18` // ~9% opacity brand background color
                        }}
                      >
                        <IconComponent size={18} />
                      </div>
                      <span className={styles.skillName}>{skill.name}</span>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>

          {/* Right Column: Tools */}
          <div className={styles.toolsSection}>
            <AnimateOnScroll animation="fade-right" delay={150}>
              <h3 className={styles.subheading}>Tools & Frameworks</h3>
            </AnimateOnScroll>
            <div className={styles.toolsGrid}>
              {tools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <AnimateOnScroll
                    key={tool.name}
                    animation="zoom-in"
                    delay={200 + index * 40}
                  >
                    <div className={`${styles.toolCard} card`}>
                      <div 
                        className={styles.toolIcon}
                        style={{
                          color: tool.color,
                          backgroundColor: `${tool.color}18` // ~9% opacity brand background color
                        }}
                      >
                        <IconComponent size={18} />
                      </div>
                      <span className={styles.toolName}>{tool.name}</span>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
